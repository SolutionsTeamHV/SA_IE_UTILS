const countries = [
    {
        "documents": [
            {
                "name": "Driver's License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "National ID",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Voter's Card",
                "sides": ["front"],
                "id": "voterid",
                "type": "card"
            }
        ],
        "name": "Nigeria",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "nga",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "State ID Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Social Security",
                "sides": ["front"],
                "id": "ssc",
                "type": "card"
            },
            {
                "sidesConfig": {"readBarcode": ["back"]},
                "name": "Driver's License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Border Crossing Card",
                "sides": ["front"],
                "id": "bcc",
                "type": "card"
            },
            {
                "name": "Global Entry Card",
                "sides": ["front"],
                "id": "gec",
                "type": "card"
            },
            {
                "name": "Permanent resident",
                "sides": ["front"],
                "id": "gc",
                "type": "card"
            },
            {
                "name": "Minor ID",
                "sides": ["front"],
                "id": "mid",
                "type": "card"
            },
            {
                "name": "NEXUS",
                "sides": ["front"],
                "id": "nexus",
                "type": "card"
            },
            {
                "name": "Veteran ID",
                "sides": ["front"],
                "id": "vid",
                "type": "card"
            },
            {
                "name": "Employment Authorization Card",
                "sides": ["front"],
                "id": "wp",
                "type": "card"
            },
            {
                "name": "Gun Permit",
                "sides": ["front"],
                "id": "weaponpermit",
                "type": "card"
            }
        ],
        "name": "United States of America",
        "base_url": "https://usa.idv.hyperverge.co",
        "id": "usa",
        "region": "usa",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "German Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            }
        ],
        "name": "Germany",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "deu",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Driver Card",
                "sides": ["front"],
                "id": "dc",
                "type": "card"
            },
            {
                "name": "Leternjoftiom ID",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Professional Driving License",
                "sides": ["front"],
                "id": "pdl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Albania",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "alb",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driver's License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Austria",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "aut",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Belarus",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "blr",
        "region": "sgp",
        "enabled": false
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Minors ID",
                "sides": ["front"],
                "id": "mid",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Resident ID",
                "sides": ["front"],
                "id": "rid",
                "type": "card"
            }
        ],
        "name": "Belgium",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "bel",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Bosnia and Herzegovina",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "bih",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Bulgaria",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "bgr",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Residence Permit",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Croatia",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "hrv",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Residence Permit",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Cyprus",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "cyp",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Residence Permit",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Czechia",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "cze",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residency Permit",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            }
        ],
        "name": "Denmark",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "dnk",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            }
        ],
        "name": "Estonia",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "est",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Alien ID",
                "sides": ["front"],
                "id": "aid",
                "type": "card"
            },
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Residency Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Finland",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "fin",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            }
        ],
        "name": "France",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "fra",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driver's License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identification Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Georgia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "geo",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            }
        ],
        "name": "Greece",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "grc",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Address Card",
                "sides": ["front"],
                "id": "ac",
                "type": "card"
            }
        ],
        "name": "Hungary",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "hun",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Public Service Card",
                "sides": ["front"],
                "id": "psc",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Ireland",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "irl",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Iceland",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "isl",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            }
        ],
        "name": "Italy",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "ita",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Kosovo",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "kos",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Alien ID",
                "sides": ["front"],
                "id": "aid",
                "type": "card"
            }
        ],
        "name": "Latvia",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "lva",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Personal identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Lithuania",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "ltu",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Luxembourg",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "lux",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Malta",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "mlt",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Republic of Moldova",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mda",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Montenegro",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mne",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            }
        ],
        "name": "Netherlands",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "nld",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "North Macedonia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mkd",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "National Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Norway",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "nor",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            }
        ],
        "name": "Poland",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "pol",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Citizen Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Portugal",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "prt",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Romania",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "rou",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Russian Federation",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "rus",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Serbia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "srb",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "ID Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            }
        ],
        "name": "Slovakia",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "svk",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            }
        ],
        "name": "Slovenia",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "svn",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Alien ID",
                "sides": ["front"],
                "id": "aid",
                "type": "card"
            }
        ],
        "name": "Spain",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "esp",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Social Security Card",
                "sides": ["front"],
                "id": "ssc",
                "type": "card"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Sweden",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "swe",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            }
        ],
        "name": "Switzerland",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "che",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "United Kingdom",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "gbr",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Ukraine",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ukr",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Algeria",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "dza",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Bahrain",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "bhr",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Botswana",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "bwa",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Burkina Faso",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "bfa",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Cameroon",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "cmr",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "DR Congo",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "cod",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "National ID",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Egypt",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "egy",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Eswatini",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "swz",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Ghana",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "gha",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Iran",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "irn",
        "region": "sgp",
        "enabled": false
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Iraq",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "irq",
        "region": "sgp",
        "enabled": false
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Israel",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "isr",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Côte d\u2019Ivoire",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "civ",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Jordan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "jor",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "National ID",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Kenya",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "ken",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Resident ID",
                "sides": ["front"],
                "id": "rid",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Kuwait",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "kwt",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Lebanon",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "lbn",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Libya",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "lby",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Mauritius",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "mus",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Morocco",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "mar",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Mozambique",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "moz",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Resident ID",
                "sides": ["front"],
                "id": "rid",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Oman",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "omn",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Residence Permit",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Qatar",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "qat",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Rwanda",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "rwa",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Resident ID",
                "sides": ["front"],
                "id": "rid",
                "type": "card"
            }
        ],
        "name": "Saudi Arabia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "sau",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Senegal",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "sen",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "South Africa",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "zaf",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Sudan",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "sdn",
        "region": "zaf",
        "enabled": false
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Syrian Arab Republic",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "syr",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Voter ID",
                "sides": ["front"],
                "id": "voterid",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Tanzania",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "tza",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Tunisia",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "tun",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Residence Permit",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            }
        ],
        "name": "Turkey",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "tur",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving Permit",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "National identity card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Uganda",
        "base_url": "https://zaf.idv.hyperverge.co",
        "id": "uga",
        "region": "zaf",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "National ID",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Resident ID",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rid",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "United Arab Emirates",
        "base_url": "https://ind.idv.hyperverge.co",
        "id": "are",
        "region": "ind",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Zimbabwe",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "zwe",
        "region": "sgp",
        "enabled": false
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Alien ID",
                "sides": ["front"],
                "id": "aid",
                "type": "card"
            }
        ],
        "name": "Argentina",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "arg",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Bahamas",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "bhs",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Minors ID",
                "sides": ["front"],
                "id": "mid",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Bolivia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "bol",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Brazil",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "bra",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Alien ID",
                "sides": ["front"],
                "id": "aid",
                "type": "card"
            }
        ],
        "name": "Chile",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "chl",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driver License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Minors ID",
                "sides": ["front"],
                "id": "mid",
                "type": "card"
            },
            {
                "name": "Alien ID",
                "sides": ["front"],
                "id": "aid",
                "type": "card"
            }
        ],
        "name": "Colombia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "col",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Costa Rica",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "cri",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Dominican Republic",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "dom",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Ecuador",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ecu",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "El Salvador",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "slv",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Consular ID",
                "sides": ["front"],
                "id": "cid",
                "type": "card"
            }
        ],
        "name": "Guatemala",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "gtm",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Haiti",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "hti",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Honduras",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "hnd",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Jamaica",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "jam",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Consular id card",
                "sides": ["front"],
                "id": "cid",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Professional Driving License",
                "sides": ["front"],
                "id": "pdl",
                "type": "card"
            },
            {
                "name": "Residente Permanente",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Voter ID",
                "sides": ["front"],
                "id": "voterid",
                "type": "card"
            },
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            }
        ],
        "name": "Mexico",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mex",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Nicaragua",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "nic",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Residence Permit",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Panama",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "pan",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Paraguay",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "pry",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Minors ID",
                "sides": ["front"],
                "id": "mid",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Peru",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "per",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Voter ID",
                "sides": ["front"],
                "id": "voterid",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Puerto Rico",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "pri",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driver's permit",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Trinidad and Tobago",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "tto",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Uruguay",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ury",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Employment authorization card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Venezuela",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ven",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Armenia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "arm",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Azerbaijan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "aze",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Bangladesh",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "bgd",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Military ID",
                "sides": ["front"],
                "id": "militaryid",
                "type": "card"
            },
            {
                "name": "Residence Permit",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Brunei Darussalam",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "brn",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Cambodia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "khm",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "China",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "chn",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Hong Kong",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "hkg",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Aadhaar Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Driving License (one side)",
                "sides": ["front"],
                "id": "dl1",
                "type": "card"
            },
            {
                "name": "Driving License (two sides)",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "dl2",
                "type": "card"
            },
            {
                "name": "Driving License",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dlfront",
                "type": "card"
            },
            {
                "name": "PAN Card",
                "sides": ["front"],
                "id": "pan",
                "type": "card"
            },
            {
                "name": "Voter ID",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "voterid",
                "type": "a4"
            },
            {
                "name": "Passport",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Form 60",
                "sides": ["front"],
                "id": "form60",
                "type": "a4"
            },
            {
                "name": "GSTIN",
                "sides": ["front"],
                "id": "gstin",
                "type": "a4"
            },
            {
                "name": "Letter of Authorisation",
                "sides": ["front"],
                "id": "la",
                "type": "a4"
            },
            {
                "name": "Shop Establishment Certificate",
                "sides": ["front"],
                "id": "sec",
                "type": "a4"
            },
            {
                "name": "Udhyam Certificate",
                "sides": ["front"],
                "id": "uc",
                "type": "a4"
            },
            {
                "name": "Partnership Deed",
                "sides": ["front"],
                "id": "pd",
                "type": "a4"
            },
            {
                "name": "Utility Bill",
                "sides": ["front"],
                "id": "ub",
                "type": "a4"
            },
            {
                "name": "Rental Agreement",
                "sides": ["front"],
                "id": "ra",
                "type": "a4"
            },
            {
                "name": "Bank Statement",
                "sides": ["front"],
                "id": "bs",
                "type": "a4"
            },
            {
                "name": "Property Tax Invoice",
                "sides": ["front"],
                "id": "pti",
                "type": "a4"
            },
            {
                "name": "Trust Deed",
                "sides": ["front"],
                "id": "td",
                "type": "a4"
            },
            {
                "name": "Joint Hindu Family letter",
                "sides": ["front"],
                "id": "jhfl",
                "type": "a4"
            },
            {
                "name": "Memorandum of Association",
                "sides": ["front"],
                "id": "moa",
                "type": "a4"
            },
            {
                "name": "Articles of Association",
                "sides": ["front"],
                "id": "aoa",
                "type": "a4"
            },
            {
                "name": "Other Document",
                "sides": ["front"],
                "id": "od",
                "type": "a4"
            },
            {
                "name": "Income Tax Return",
                "sides": ["front"],
                "id": "itr",
                "type": "a4"
            },
            {
                "name": "Credit Card",
                "sides": ["front"],
                "id": "cc",
                "type": "card"
            },
            {
                "name": "Person of Indian Origin ID",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "pio",
                "type": "card"
            },
            {
                "name": "Overseas Citizen of India ID",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "oci",
                "type": "card"
            }
        ],
        "name": "India",
        "base_url": "https://ind.idv.hyperverge.co",
        "id": "ind",
        "region": "ind",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Resident Identification Card (KTP)",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "NPWP",
                "sides": ["front"],
                "id": "npwp",
                "type": "card"
            },
            {
                "name": "KITAS",
                "sides": ["front"],
                "id": "kitas",
                "type": "a4"
            }
        ],
        "name": "Indonesia",
        "base_url": "https://idn.idv.hyperverge.co",
        "id": "idn",
        "region": "idn",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Japan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "jpn",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Kazakhstan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "kaz",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Kyrgyzstan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "kgz",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "MyKAS",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "mykas",
                "type": "card"
            },
            {
                "name": "MyKad",
                "sides": ["front"],
                "id": "mykad",
                "type": "card"
            },
            {
                "name": "MyKid",
                "sides": ["front"],
                "id": "mykid",
                "type": "card"
            },
            {
                "name": "MyPR",
                "sides": ["front"],
                "id": "mypr",
                "type": "card"
            },
            {
                "name": "MyPolis",
                "sides": ["front"],
                "id": "mypolis",
                "type": "card"
            },
            {
                "name": "MyTentera",
                "sides": ["front"],
                "id": "mytentera",
                "type": "card"
            },
            {
                "name": "Refugee ID",
                "sides": ["front"],
                "id": "refugeeid",
                "type": "card"
            },
            {
                "name": "i-Kad",
                "sides": ["front"],
                "id": "ikad",
                "type": "card"
            }
        ],
        "name": "Malaysia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mys",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Maldives",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mdv",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Myanmar",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mmr",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Nepal",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "npl",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Consular ID Card",
                "sides": ["front"],
                "id": "cid",
                "type": "card"
            },
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Pakistan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "pak",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "LTO Driver's License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Philippine Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Philippine Postal ID",
                "sides": ["front"],
                "id": "postalid",
                "type": "card"
            },
            {
                "name": "Unified Multi-purpose ID (UMID)",
                "sides": ["front"],
                "id": "umid",
                "type": "card"
            },
            {
                "name": "Philippine SSS ID",
                "sides": ["front"],
                "id": "sss",
                "type": "card"
            },
            {
                "name": "BIR/Tax ID (TIN)",
                "sides": ["front"],
                "id": "taxid",
                "type": "card"
            },
            {
                "name": "Professional ID (PRC)",
                "sides": ["front"],
                "id": "pid",
                "type": "card"
            },
            {
                "name": "Philippine National ID/Phil ID",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "sys",
                "type": "card"
            },
            {
                "name": "COMELEC Voter's ID",
                "sides": ["front"],
                "id": "voterid",
                "type": "card"
            },
            {
                "name": "NBI Clearance",
                "sides": ["front"],
                "id": "nbi",
                "type": "card"
            },
            {
                "name": "National Police Clearance",
                "sides": ["front"],
                "id": "pnp",
                "type": "card"
            },
            {
                "name": "Integrated Bar of the Philippines ID",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "ibp",
                "type": "card"
            },
            {
                "name": "Alien Residency Card",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "acr",
                "type": "card"
            },
            {
                "name": "ePhil ID",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "ephil",
                "type": "card"
            },
            {
                "name": "Philhealth ID",
                "sides": ["front"],
                "id": "philhealth",
                "type": "card"
            },
            {
                "name": "Car Registration",
                "sides": ["front"],
                "id": "cr",
                "type": "a4"
            },
            {
                "name": "Loan Statement",
                "sides": ["front"],
                "id": "loan",
                "type": "a4"
            },
            {
                "name": "Payslip",
                "sides": ["front"],
                "id": "payslip",
                "type": "a4"
            },
            {
                "name": "Certificate of Employment (CoE)",
                "sides": ["front"],
                "id": "coe",
                "type": "a4"
            },
            {
                "name": "Utility Bill",
                "sides": ["front"],
                "id": "util",
                "type": "a4"
            },
            {
                "name": "Credit Card Statement",
                "sides": ["front"],
                "id": "credit",
                "type": "a4"
            },
            {
                "name": "Philippine Barangay ID",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "barangay",
                "type": "card"
            },
            {
                "name": "Philippine Senior Citizen ID",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "senior",
                "type": "card"
            }
        ],
        "name": "Philippines",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "phl",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "National ID",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Employment Pass",
                "sides": ["front"],
                "id": "epass",
                "type": "card"
            },
            {
                "name": "Fin Card",
                "sides": ["front"],
                "id": "fin",
                "type": "card"
            },
            {
                "name": "Resident ID",
                "sides": ["front"],
                "id": "rid",
                "type": "card"
            },
            {
                "name": "Spass",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "spass",
                "type": "card"
            },
            {
                "name": "Work permit",
                "sides": ["front"],
                "id": "wp",
                "type": "card"
            }
        ],
        "name": "Singapore",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "sgp",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Republic of Korea",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "kor",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Sri Lanka",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "lka",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Residence Permit",
                "sides": ["front"],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Taiwan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "twn",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Tajikistan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "tjk",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Thai Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Alien ID",
                "sides": ["front"],
                "id": "aid",
                "type": "card"
            }
        ],
        "name": "Thailand",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "tha",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Uzbekistan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "uzb",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Bằng lái xe (Driving License)",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "CMND/CCCD (National ID)",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Vietnam",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "vnm",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driver License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "National Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Proof of Age Card",
                "sides": ["front"],
                "id": "poa",
                "type": "card"
            }
        ],
        "name": "Australia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "aus",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driver License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "New Zealand",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "nzl",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driving License",
                "sides": ["front"],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            }
        ],
        "name": "Bermuda",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "bmu",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [
            {
                "name": "Driver's License",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "dl",
                "type": "card"
            },
            {
                "name": "Identity Card",
                "sides": ["front"],
                "id": "id",
                "type": "card"
            },
            {
                "name": "Passport",
                "sides": ["front"],
                "id": "passport",
                "type": "passport"
            },
            {
                "name": "Credit Card",
                "sides": ["front"],
                "id": "cc",
                "type": "card"
            },
            {
                "name": "Residence Permit",
                "sides": [
                    "front",
                    "back"
                ],
                "id": "rp",
                "type": "card"
            },
            {
                "name": "Tribal ID",
                "sides": ["front"],
                "id": "tid",
                "type": "card"
            },
            {
                "name": "Firearms Licence",
                "sides": ["front"],
                "id": "weaponpermit",
                "type": "card"
            },
            {
                "name": "Public Services Card",
                "sides": ["front"],
                "id": "psc",
                "type": "card"
            }
        ],
        "name": "Canada",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "can",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Afghanistan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "afg",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Aland Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ala",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "American Samoa",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "asm",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Andorra",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "and",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Angola",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ago",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Anguilla",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "aia",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Antarctica",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ata",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Antigua and Barbuda",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "atg",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Aruba",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "abw",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Barbados",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "brb",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Belize",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "blz",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Benin",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ben",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Bhutan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "btn",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Bonaire, Sint Eustatius and Saba",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "bes",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Bouvet Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "bvt",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "British Indian Ocean Territory",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "iot",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "British Virgin Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "vgb",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Burundi",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "bdi",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Cape Verde",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "cpv",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Cayman Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "cym",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Central African Republic",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "caf",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Chad",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "tcd",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Christmas Island",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "cxr",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Cocos (Keeling) Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "cck",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Comoros",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "com",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Cook Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "cok",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Cuba",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "cub",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Curacao",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "cuw",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Djibouti",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "dji",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Dominica",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "dma",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Equatorial Guinea",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "gnq",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Eritrea",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "eri",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Ethiopia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "eth",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Falkland Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "flk",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Faroe Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "fro",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Fiji",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "fji",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "French Guiana",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "guf",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "French Polynesia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "pyf",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "French Southern Territories",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "atf",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Gabon",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "gab",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Gambia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "gmb",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Gibraltar",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "gib",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Greenland",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "grl",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Grenada",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "grd",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Guadeloupe",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "glp",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Guam",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "gum",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Guernsey",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ggy",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Guinea",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "gin",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Guinea Bissau",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "gnb",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Guyana",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "guy",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Heard and Mcdonald Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "hmd",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Isle of Man",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "imn",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Jersey",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "jey",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Kiribati",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "kir",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Lao",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "lao",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Lesotho",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "lso",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Liberia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "lbr",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Liechtenstein",
        "base_url": "https://irl.idv.hyperverge.co",
        "id": "lie",
        "region": "irl",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Macau SAR",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mac",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Madagascar",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mdg",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Malawi",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mwi",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Mali",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mli",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Marshall Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mhl",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Martinique",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mtq",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Mauritania",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mrt",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Mayotte",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "myt",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Micronesia, Federated States Of",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "fsm",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Monaco",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mco",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Mongolia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mng",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Montserrat",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "msr",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Namibia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "nam",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Nauru",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "nru",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "New Caledonia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ncl",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Niger",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ner",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Niue",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "niu",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Norfolk Island",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "nfk",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "North Korea",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "prk",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Northern Mariana Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "mnp",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Palau",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "plw",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Palestine",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "pse",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Papua New Guinea",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "png",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Pitcairn",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "pcn",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Republic of the Congo",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "cog",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Reunion",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "reu",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Saint Barthelemy",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "blm",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Saint Helena, Ascencion and Tristan da Cunha",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "shn",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Saint Kitts and Nevis",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "kna",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Saint Lucia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ica",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Saint Martin (French part)",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "maf",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Saint Pierre and Miquelon",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "spm",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Saint Vincent and the Grenadines",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "vct",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "San Marino",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "smr",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Sao Tome and Principe",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "stp",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Seychelles",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "syc",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Sierra Leone",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "sle",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Sint Maarten (Dutch part)",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "sxm",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Solomon Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "slb",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Somalia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "som",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "South Georgia and South Sandwich Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "sgs",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "South Sudan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ssd",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Suriname",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "sur",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Svalbard and Jan Mayen",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "sjm",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Timor-Leste",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "tls",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Togo",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "tgo",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Tokelau",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "tkl",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Tonga",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "ton",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Turkmenistan",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "tkm",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Turks and Caicos Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "tca",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Tuvalu",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "tuv",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "US Minor Outlying Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "umi",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "US Virgin Islands",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "vir",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Vanuatu",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "vut",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Vatican City",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "vat",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Wallis and Futuna",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "wlf",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Western Sahara",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "esh",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Yemen",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "yem",
        "region": "sgp",
        "enabled": true
    },
    {
        "documents": [{
            "name": "Passport",
            "sides": ["front"],
            "id": "passport",
            "type": "passport"
        }],
        "name": "Zambia",
        "base_url": "https://sgp.idv.hyperverge.co",
        "id": "zmb",
        "region": "sgp",
        "enabled": true
    }
];

module.exports = {
    countries,
};
