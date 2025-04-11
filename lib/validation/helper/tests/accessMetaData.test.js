const { expect } = require('@playwright/test');
const { accessMetadata } = require('../misc');
const { keys } = require('lodash');
const { object } = require('joi');

describe('accessMetadata', () => {
  it('should return correct metadata when given a valid path', () => {
    const schemaDescription = {
      keys: {
        properties: {
          keys: {
            name: {
              metas: [{ warnings: true }],
            },
          },
        },
      },
    };

    const path = ['properties', 'name'];
    const result = accessMetadata(schemaDescription, path);

    expect(result).toEqual({ metas: [{ warnings: true }] });
  });

  it('should return null if the path leads to a non-existent key', () => {
    const schemaDescription = {
      keys: {
        properties: {
          keys: {
            name: {
              metas: [{ warnings: true }],
            },
          },
        },
      },
    };

    const path = ['properties', 'nonExistentKey'];
    const result = accessMetadata(schemaDescription, path);

    expect(result).toBeNull();
  });

  it('should return null if schemaDescription is invalid', () => {
    const schemaDescription = null;
    const path = ['properties', 'name'];
    const result = accessMetadata(schemaDescription, path);

    expect(result).toBeNull();
  });

  it('should return null if intermediate keys are invalid', () => {
    const schemaDescription = {
      keys: {
        properties: {
          keys: null,
        },
      },
    };

    const path = ['properties', 'name'];
    const result = accessMetadata(schemaDescription, path);

    expect(result).toBeNull();
  });

  it('should return the entire schemaDescription if the path is empty', () => {
    const schemaDescription = {
      keys: {
        properties: {
          keys: {
            name: {
              metas: [{ warnings: true }],
            },
          },
        },
      },
    };

    const path = [];
    const result = accessMetadata(schemaDescription, path);

    expect(result).toEqual(schemaDescription);
  });

  it('should return false if the the warnings are set to false', () => {
    const schemaDescription = {
      keys: {
        properties: {
          keys: {
            name: {
              metas: [{ warnings: false }],
            },
          },
        },
      },
    };

    const path = ['properties', 'name'];
    const result = accessMetadata(schemaDescription, path);

    expect(result).toEqual({metas: [{ warnings: false }]});
  });

  it('should return the correct metadata when there are several intermediate keys', () => {
    const schemaDescription = {
      keys: {
        properties: {
          keys: {
            name: {
              metas: [{ warnings: true }],
            },
            address: {
              metas: [{ warnings: false }],
            },
            dob: {
              metas: [{ warnings: true }],
            },
          },
        },
      },
    };

    const path = ['properties', 'name'];
    const result = accessMetadata(schemaDescription, path);
    const path2 = ['properties', 'address'];
    const result2 = accessMetadata(schemaDescription, path2);

    expect(result).toEqual({ metas: [{ warnings: true }] });
    expect(result2).toEqual({ metas: [{ warnings: false }] });
  });

  it('should return all the metadata when there are more than one metadata defined', () => {
    const schemaDescription = {
      keys: {
        properties: {
          keys: {
            name: {
              type: 'string',
              metas: [{ warnings: true, errors: false }],
            },
          },
        },
      },
    };

    const path = ['properties', 'name'];
    const result = accessMetadata(schemaDescription, path);

    expect(result).toEqual({ type: 'string', metas: [{ warnings: true, errors: false }] });
  });

  it('should return all the correct metadata when there are more than two keys in the path', () => {
    const schemaDescription = {
      keys: {
        properties: {
          keys: {
            name: {
              type: 'object',
              metas: [{ warnings: true}],
              keys: {
                firstName: {
                  metas: [{ warnings: false}],
                },
              },
            },
          },
        },
      },
    };

    const path = ['properties', 'name', 'firstName'];
    const result = accessMetadata(schemaDescription, path);

    expect(result).toEqual({ metas: [{ warnings: false }] });
  });

  it('should return correct metadata when the path matches a pattern rule', () => {
    const schemaDescription = {
      keys: {
        conditions: {
          type: "object",
          flags: {
            presence: "required"
          },
          patterns: [
            {
              schema: {
                type: "string"
              },
              rule: {
                type: "object",
                keys: {
                  name: {
                    type: "string"
                  },
                  ifFalseConfig: {
                    type: "any",
                    flags: {
                      presence: "forbidden"
                    },
                    metas: [
                      {
                        warnings: true
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      }      
    };

    const path = [ 'conditions', 'condition_sTVRqz', 'ifFalseConfig' ];
    const result = accessMetadata(schemaDescription, path);

    expect(result).toEqual({
      type: 'any',
      flags: { presence: 'forbidden' },
      metas: [ { warnings: true } ]
    });
  });

  it('should return null if no matching pattern rule exists', () => {
    const schemaDescription = {
      keys: {
        conditions: {
          type: "object",
          flags: {
            presence: "required"
          },
          patterns: [
            {
              schema: {
                type: "string"
              },
              rule: {
                type: "object",
                keys: {
                  name: {
                    type: "string"
                  },
                  ifFalseConfig: {
                    type: "any",
                    flags: {
                      presence: "forbidden"
                    },
                    metas: [
                      {
                        warnings: true
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      }      
    };

    const path = [ 'conditions', 'condition_sTVRqz', 'nonExistingKey' ];
    const result = accessMetadata(schemaDescription, path);

    expect(result).toBeNull();
  });
});
