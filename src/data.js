
const data = [
    
    [
      {
        "name": "PerilAD_Adjusted_v27",
        "output": "PerilAD_Adjusted_v27",
        "inputs": [
          "v27_PerilAD_Frequency",
          "v27_PerilAD_Severity"
        ],
        "order": 0,
        "expression": "v27_PerilAD_Frequency*v27_PerilAD_Severity * 1.264",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilAD_Adjusted_v28",
        "output": "PerilAD_Adjusted_v28",
        "inputs": [
          "v28_PerilAD_Frequency",
          "v28_PerilAD_Severity"
        ],
        "order": 0,
        "expression": "v28_PerilAD_Frequency * 1.8097 * v28_PerilAD_Severity * 0.9624",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilBINV_Adjusted_v27_IN_England_Wales",
        "output": "PerilBINV_Adjusted_v27",
        "inputs": [
          "v27_PerilBINV_Frequency",
          "v27_PerilBINV_Severity"
        ],
        "order": 0,
        "expression": "v27_PerilBINV_Frequency * v27_PerilBINV_Severity * 0.767 * 0.934",
        "criteria": {
          "fieldName": "proposer_postcode_country",
          "value": "England|Wales",
          "matchCriteria": "IN"
        }
      },
      {
        "name": "PerilBINV_Adjusted_v27_NOTIN_England_Wales",
        "output": "PerilBINV_Adjusted_v27",
        "inputs": [
          "v27_PerilBINV_Frequency",
          "v27_PerilBINV_Severity"
        ],
        "order": 0,
        "expression": "v27_PerilBINV_Frequency * v27_PerilBINV_Severity * 0.934",
        "criteria": {
          "fieldName": "proposer_postcode_country",
          "value": "England|Wales",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilBINV_Adjusted_v27_Null",
        "output": "PerilBINV_Adjusted_v27",
        "inputs": [
          "v27_PerilBINV_Frequency",
          "v27_PerilBINV_Severity"
        ],
        "order": 0,
        "expression": "v27_PerilBINV_Frequency * v27_PerilBINV_Severity * 0.934",
        "criteria": {
          "fieldName": "proposer_postcode_country",
          "matchCriteria": "NULL"
        }
      },
      {
        "name": "PerilBINV_Adjusted_v28_IN_England_Wales",
        "output": "PerilBINV_Adjusted_v28",
        "inputs": [
          "v28_PerilBINV_Frequency",
          "v28_PerilBINV_Severity"
        ],
        "order": 0,
        "expression": "v28_PerilBINV_Frequency * 1.0856 * v28_PerilBINV_Severity * 0.767 * 1.1256",
        "criteria": {
          "fieldName": "proposer_postcode_country",
          "value": "England|Wales",
          "matchCriteria": "IN"
        }
      },
      {
        "name": "PerilBINV_Adjusted_v28_NOTIN_England_Wales",
        "output": "PerilBINV_Adjusted_v28",
        "inputs": [
          "v28_PerilBINV_Frequency",
          "v28_PerilBINV_Severity"
        ],
        "order": 0,
        "expression": "v28_PerilBINV_Frequency * 1.0856 * v28_PerilBINV_Severity * 1.1256",
        "criteria": {
          "fieldName": "proposer_postcode_country",
          "value": "England|Wales",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilBINV_Adjusted_v28_Null",
        "output": "PerilBINV_Adjusted_v28",
        "inputs": [
          "v28_PerilBINV_Frequency",
          "v28_PerilBINV_Severity"
        ],
        "order": 0,
        "expression": "v28_PerilBINV_Frequency * 1.0856 * v28_PerilBINV_Severity * 1.1256",
        "criteria": {
          "fieldName": "proposer_postcode_country",
          "matchCriteria": "NULL"
        }
      },
      {
        "name": "PerilBIV_Adjusted_v27",
        "output": "PerilBIV_Adjusted_v27",
        "inputs": [
          "v27_PerilBIV_Frequency",
          "v27_PerilBIV_Severity"
        ],
        "order": 0,
        "expression": "v27_PerilBIV_Frequency*v27_PerilBIV_Severity",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilBIV_Adjusted_v28",
        "output": "PerilBIV_Adjusted_v28",
        "inputs": [
          "v28_PerilBIV_Frequency",
          "v28_PerilBIV_Severity"
        ],
        "order": 0,
        "expression": "v28_PerilBIV_Frequency*v28_PerilBIV_Severity",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilBIXS_Adjusted_v27",
        "output": "PerilBIXS_Adjusted_v27",
        "inputs": [
          "v27_PerilBIXS_Frequency",
          "v27_PerilBIXS_Severity"
        ],
        "order": 0,
        "expression": "v27_PerilBIXS_Frequency*v27_PerilBIXS_Severity * 0.988",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilBIXS_Adjusted_v28",
        "output": "PerilBIXS_Adjusted_v28",
        "inputs": [
          "v28_PerilBIXS_Frequency",
          "v28_PerilBIXS_Severity"
        ],
        "order": 0,
        "expression": "v28_PerilBIXS_Frequency * 1.0516 * v28_PerilBIXS_Severity * 1.2709",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilFT_Adjusted_v27",
        "output": "PerilFT_Adjusted_v27",
        "inputs": [
          "v27_PerilFT_Frequency",
          "v27_PerilFT_Severity"
        ],
        "order": 0,
        "expression": "v27_PerilFT_Frequency*v27_PerilFT_Severity * 1.370",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilFT_Adjusted_v28",
        "output": "PerilFT_Adjusted_v28",
        "inputs": [
          "v28_PerilFT_Frequency",
          "v28_PerilFT_Severity"
        ],
        "order": 0,
        "expression": "v28_PerilFT_Frequency * 1.5663 * v28_PerilFT_Severity * 1.2848",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilPD_Adjusted_v27",
        "output": "PerilPD_Adjusted_v27",
        "inputs": [
          "v27_PerilPD_Frequency",
          "v27_PerilPD_Severity"
        ],
        "order": 0,
        "expression": "v27_PerilPD_Frequency*v27_PerilPD_Severity * 1.272",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilPD_Adjusted_v28",
        "output": "PerilPD_Adjusted_v28",
        "inputs": [
          "v28_PerilPD_Frequency",
          "v28_PerilPD_Severity"
        ],
        "order": 0,
        "expression": "v28_PerilPD_Frequency * 1.0422 * v28_PerilPD_Severity * 1.6765",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilWS_Adjusted_v27",
        "output": "PerilWS_Adjusted_v27",
        "inputs": [
          "v27_PerilWS_Frequency",
          "v27_PerilWS_Severity"
        ],
        "order": 0,
        "expression": "v27_PerilWS_Frequency*v27_PerilWS_Severity * 1.236",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "PerilWS_Adjusted_v28",
        "output": "PerilWS_Adjusted_v28",
        "inputs": [
          "v28_PerilWS_Frequency",
          "v28_PerilWS_Severity"
        ],
        "order": 0,
        "expression": "v28_PerilWS_Frequency * 1.0264 * v28_PerilWS_Severity * 1.4563",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "Top5_Adjusted_v1",
        "output": "Top5_Adjusted_v1",
        "inputs": [
          "v1_Top5_Market"
        ],
        "order": 0,
        "expression": "v1_Top5_Market * 1",
        "criteria": {
          "fieldName": "proposer_homeowner_ihp",
          "value": "-1",
          "matchCriteria": "!="
        }
      },
      {
        "name": "Top5_Adjusted_v1",
        "output": "Top5_Adjusted_v1",
        "inputs": [
          "v1_Top5_Market"
        ],
        "order": 0,
        "expression": "v1_Top5_Market * 0.964",
        "criteria": {
          "fieldName": "proposer_homeowner_ihp",
          "value": "-1",
          "matchCriteria": "=="
        }
      },
      {
        "name": "NumQuoters_Adjusted_v1",
        "output": "NumQuoters_Adjusted_v1",
        "inputs": [
          "v1_NumQuoters_Market"
        ],
        "order": 0,
        "expression": "v1_NumQuoters_Market * 1",
        "criteria": {
          "fieldName": "proposer_homeowner_ihp",
          "value": "-1",
          "matchCriteria": "!="
        }
      },
      {
        "name": "NumQuoters_Adjusted_v1",
        "output": "NumQuoters_Adjusted_v1",
        "inputs": [
          "v1_NumQuoters_Market"
        ],
        "order": 0,
        "expression": "v1_NumQuoters_Market * 0.964",
        "criteria": {
          "fieldName": "proposer_homeowner_ihp",
          "value": "-1",
          "matchCriteria": "=="
        }
      },
      {
        "name": "Risk_Premium_v27",
        "output": "Risk_Premium_v27",
        "inputs": [
          "PerilAD_Adjusted_v27",
          "PerilBINV_Adjusted_v27",
          "PerilBIV_Adjusted_v27",
          "PerilBIXS_Adjusted_v27",
          "PerilFT_Adjusted_v27",
          "PerilPD_Adjusted_v27",
          "PerilWS_Adjusted_v27"
        ],
        "order": 10,
        "expression": "PerilAD_Adjusted_v27+PerilBINV_Adjusted_v27+PerilBIV_Adjusted_v27+PerilBIXS_Adjusted_v27+PerilFT_Adjusted_v27+PerilPD_Adjusted_v27+PerilWS_Adjusted_v27",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "Risk_Premium_v28",
        "output": "Risk_Premium_v28",
        "inputs": [
          "PerilAD_Adjusted_v28",
          "PerilBINV_Adjusted_v28",
          "PerilBIV_Adjusted_v28",
          "PerilBIXS_Adjusted_v28",
          "PerilFT_Adjusted_v28",
          "PerilPD_Adjusted_v28",
          "PerilWS_Adjusted_v28"
        ],
        "order": 10,
        "expression": "PerilAD_Adjusted_v28+PerilBINV_Adjusted_v28+PerilBIV_Adjusted_v28+PerilBIXS_Adjusted_v28+PerilFT_Adjusted_v28+PerilPD_Adjusted_v28+PerilWS_Adjusted_v28",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "Risk_Premium",
        "output": "Risk_Premium",
        "inputs": [
          "Risk_Premium_v27"
        ],
        "order": 15,
        "expression": "Risk_Premium_v27 * 1",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "##v28ProposerDayOfBirths##",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "Risk_Premium",
        "output": "Risk_Premium",
        "inputs": [
          "Risk_Premium_v28"
        ],
        "order": 15,
        "expression": "Risk_Premium_v28 * 1",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "##v28ProposerDayOfBirths##",
          "matchCriteria": "IN"
        }
      },
      {
        "name": "Pricing_Result",
        "output": "Pricing_Result",
        "inputs": [
          "Risk_Premium"
        ],
        "order": 15,
        "expression": "(Risk_Premium * (1 + -7.49 / 100.0)+ 59.84) / (1 - 5.41 / 100.0)",
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "0",
          "matchCriteria": "NOT_IN"
        }
      }
    ],
    [
          {
            "name": "NB_RB_BucketA_NoTest_20211101",
            "criterias": [
              {
                "name": "proposer_day_of_birth",
                "matches": [
                  {
                    "value": "1|2|3|4|5|6|7",
                    "criteria": "IN"
                  }
                ]
              },
              {
                "name": "process_type",
                "matches": [
                  {
                    "value": "MTA_ORIGINAL|MTA_CURRENT|CANCELLATION",
                    "criteria": "NOT_IN"
                  }
                ]
              }
            ],
            "singleMatches": [
              {
                "name": "process_type",
                "matches": [
                  {
                    "value": "MTA_ORIGINAL|MTA_CURRENT|CANCELLATION",
                    "criteria": "NOT_IN",
                    "adjustment": 0,
                    "operation": "+%"
                  }
                ]
              }
            ],
            "multiMatches": [
            ]
          },
          {
            "name": "NB_RB_BucketB_NoTest_20211101",
            "criterias": [
              {
                "name": "proposer_day_of_birth",
                "matches": [
                  {
                    "value": "22|23|24|25|26|27|28|31",
                    "criteria": "IN"
                  }
                ]
              },
              {
                "name": "process_type",
                "matches": [
                  {
                    "value": "MTA_ORIGINAL|MTA_CURRENT|CANCELLATION",
                    "criteria": "NOT_IN"
                  }
                ]
              }
            ],
            "singleMatches": [
              {
                "name": "process_type",
                "matches": [
                  {
                    "value": "MTA_ORIGINAL|MTA_CURRENT|CANCELLATION",
                    "criteria": "NOT_IN",
                    "adjustment": 0,
                    "operation": "+%"
                  }
                ]
              }
            ],
            "multiMatches": [
            ]
          },
          {
            "name": "NB_RB_BucketC_Test1_20211101",
            "criterias": [
              {
                "name": "proposer_day_of_birth",
                "matches": [
                  {
                    "value": "15|16|17|18|19|20|21|30",
                    "criteria": "IN"
                  }
                ]
              },
              {
                "name": "process_type",
                "matches": [
                  {
                    "value": "MTA_ORIGINAL|MTA_CURRENT|CANCELLATION",
                    "criteria": "NOT_IN"
                  }
                ]
              }
            ],
            "singleMatches": [
              {
                "name": "process_type",
                "matches": [
                  {
                    "value": "MTA_ORIGINAL|MTA_CURRENT|CANCELLATION",
                    "criteria": "NOT_IN",
                    "adjustment": 2,
                    "operation": "+%"
                  }
                ]
              }
            ],
            "multiMatches": [
            ]
          },
          {
            "name": "NB_RB_BucketD_Test2_20211101",
            "criterias": [
              {
                "name": "proposer_day_of_birth",
                "matches": [
                  {
                    "value": "8|9|10|11|12|13|14|29",
                    "criteria": "IN"
                  }
                ]
              },
              {
                "name": "process_type",
                "matches": [
                  {
                    "value": "MTA_ORIGINAL|MTA_CURRENT|CANCELLATION",
                    "criteria": "NOT_IN"
                  }
                ]
              }
            ],
            "singleMatches": [
              {
                "name": "process_type",
                "matches": [
                  {
                    "value": "MTA_ORIGINAL|MTA_CURRENT|CANCELLATION",
                    "criteria": "NOT_IN",
                    "adjustment": 2,
                    "operation": "-%"
                  }
                ]
              }
            ],
            "multiMatches": [
            ]
          },
          {
            "name": "ALL_MatchAnythingBucket_20220114",
            "criterias": [
              {
                "name": "proposer_day_of_birth",
                "matches": [
                  {
                    "value": "0",
                    "criteria": "NOT_IN"
                  }
                ]
              }
            ],
            "singleMatches": [
              {
                "name": "proposer_postcode_area",
                "matches": [
                  {
                    "value": "UB|E",
                    "criteria": "IN",
                    "adjustment": 10,
                    "operation": "+%"
                  },
                  {
                    "value": "L|W|NW|IG|N",
                    "criteria": "IN",
                    "adjustment": 7.5,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "min_drivers_age_years",
                "matches": [
                  {
                    "value": "25",
                    "criteria": "<=",
                    "adjustment": 8,
                    "operation": "+%"
                  },
                  {
                    "value": "26-30",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 6,
                    "operation": "+%"
                  },
                  {
                    "value": "31-35",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 3,
                    "operation": "+%"
                  },
                  {
                    "value": "36-40",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2,
                    "operation": "+%"
                  },
                  {
                    "value": "41",
                    "criteria": ">=",
                    "adjustment": 0,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "total_convictions",
                "matches": [
                  {
                    "value": "0",
                    "criteria": "==",
                    "adjustment": 0,
                    "operation": "+%"
                  },
                  {
                    "value": "1",
                    "criteria": "==",
                    "adjustment": 10,
                    "operation": "+%"
                  },
                  {
                    "value": "2",
                    "criteria": "==",
                    "adjustment": 20,
                    "operation": "+%"
                  },
                  {
                    "value": "3-1000",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 30,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "driver_cover_type",
                "matches": [
                  {
                    "value": "IS",
                    "criteria": "==",
                    "adjustment": 5,
                    "operation": "-%"
                  }
                ]
              },
              {
                "name": "vehicle_ncd_yrs",
                "matches": [
                  {
                    "value": "9",
                    "criteria": ">=",
                    "adjustment": 5,
                    "operation": "-%"
                  }
                ]
              },
              {
                "name": "proposer_point_of_quote_score",
                "matches": [
                  {
                    "value": "0|1-99|100-199",
                    "criteria": "IN",
                    "adjustment": 15,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "vehicle_proposer_given_value",
                "matches": [
                  {
                    "value": "0-999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 0.0,
                    "operation": "-%"
                  },
                  {
                    "value": "1000-1999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2.0,
                    "operation": "-%"
                  },
                  {
                    "value": "2000-4999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2.0,
                    "operation": "-%"
                  },
                  {
                    "value": "5000-5999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2.0,
                    "operation": "-%"
                  },
                  {
                    "value": "6000-8999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2.0,
                    "operation": "-%"
                  },
                  {
                    "value": "9000-9999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2.0,
                    "operation": "-%"
                  },
                  {
                    "value": "10000-16999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2.0,
                    "operation": "-%"
                  },
                  {
                    "value": "17000-17999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2.0,
                    "operation": "-%"
                  },
                  {
                    "value": "18000-18999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2.0,
                    "operation": "-%"
                  },
                  {
                    "value": "19000-19999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2.0,
                    "operation": "+%"
                  },
                  {
                    "value": "20000-24999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 0.0,
                    "operation": "+%"
                  },
                  {
                    "value": "25000-29999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 1.8,
                    "operation": "+%"
                  },
                  {
                    "value": "30000-34999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 5.1,
                    "operation": "+%"
                  },
                  {
                    "value": "35000-39999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 8.4,
                    "operation": "+%"
                  },
                  {
                    "value": "40000-44999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 11.7,
                    "operation": "+%"
                  },
                  {
                    "value": "45000-49999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 14.9,
                    "operation": "+%"
                  },
                  {
                    "value": "50000-54999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 18.2,
                    "operation": "+%"
                  },
                  {
                    "value": "55000-59999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 21.5,
                    "operation": "+%"
                  },
                  {
                    "value": "60000-64999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 24.8,
                    "operation": "+%"
                  },
                  {
                    "value": "65000-69999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 28.1,
                    "operation": "+%"
                  },
                  {
                    "value": "70000-74999",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 31.4,
                    "operation": "+%"
                  },
                  {
                    "value": "75000",
                    "criteria": ">=",
                    "adjustment": 31.4,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "nb_qti",
                "matches": [
                  {
                    "value": "0",
                    "criteria": "==",
                    "adjustment": 2.5,
                    "operation": "+%"
                  },
                  {
                    "value": "1",
                    "criteria": "==",
                    "adjustment": 1.5,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "main_driver_licence_years",
                "matches": [
                  {
                    "value": "0-2",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 16,
                    "operation": "+%"
                  },
                  {
                    "value": "3",
                    "criteria": "==",
                    "adjustment": 12,
                    "operation": "+%"
                  },
                  {
                    "value": "4-6",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 6,
                    "operation": "+%"
                  },
                  {
                    "value": "7-8",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2,
                    "operation": "+%"
                  },
                  {
                    "value": "9",
                    "criteria": ">=",
                    "adjustment": 2,
                    "operation": "-%"
                  }
                ]
              },
              {
                "name": "youngest_ad_driver_licence_years",
                "matches": [
                  {
                    "value": "0",
                    "criteria": "==",
                    "adjustment": 25,
                    "operation": "+%"
                  },
                  {
                    "value": "1-6",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 10,
                    "operation": "+%"
                  },
                  {
                    "value": "7",
                    "criteria": ">=",
                    "adjustment": 0,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "sum_drivers_cat1_claims_0_60m",
                "matches": [
                  {
                    "value": "1",
                    "criteria": "==",
                    "adjustment": 10,
                    "operation": "+%"
                  },
                  {
                    "value": "2",
                    "criteria": ">=",
                    "adjustment": 15,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "vehicle_model_abi_code",
                "matches": [
                  {
                    "value": "32131923|32131924|32131925|28552462|28552463|28552464|28552465|28552466|28552467|28552468|28552469|28552470|28552471|28552472|28552473|28552474|28552475|28552476|28552477|28552478|28552479|28552480|28552481|28552482|28552483|28552484|28552485|28552486|28552487|28552539|28552540|28552541|28552542|28552543|28552544|28552568|28552569|28552570|28552571|28552572|28552573|28552574|28552655|28552755|28516901|28517001|28519101|28519901|28520401|28520501|28522601|28523501|28525201|28525301|28525401|28526001|28526501|28526601|28527901|28528401|28531501|28531601|28531701|28531801|28531901|28532601|28534301|28535901|28552317|28552322|28552323|28552324|28552325|28552326|28552327|28552328|28552329|28552330|28552341|28552342|28552343|28552386|28552389|28552443|28552457|28552458|28552531|28552532|28552533|28552534|28552548|28552549|28552550|28552652|28552656|28552657|28552743|28552744|28552745|28552746|28552747|28552748|28552749|28552750|28552751|28516601|28516801|28516701|28517101|28517201|28552387|28552388|28552433|28514601|28512301|28514801|28512401|28514901|28511501|28511601|28515501|28512601|28515701|28515601|28500701|28500401|28512703|28501403|28500702|28500801|28500802|28500901|28501101|28501102|28501401|28501402|28501501|28501502|28501601|28501602|28502801|28502802|28502901|28502902|28502903|28502904|28503001|28503002|28503101|28503102|28511502|28511701|28511702|28511801|28512302|28512303|28512304|28512402|28512501|28512502|28512503|28512504|28512602|28512704|28512701|28512702|28514802|28514803|28514804|28514902|28515401|28515403|28515502|28515503|28515602|28515603|28515604|28515702|28515801|28515802|28501404|28503103|28503104|28503603|28503604|28503601|28503602|28504203|28504201|28504202|28505101|28505201|28505401|28505501|28505502|28505701|28505702|28505801|28505802|28505901|28505902|28506001|28506002|28506101|28506102|28506201|28506202|28506301|28506302|90300689|90300690|28552366|28552367|28552368|28552369|28552370|28552371|28552372|28552373|28552374|28552375|28524101|28524201|28524303|28525101|28524301|28524102|90311694|90311695|90311736|90311737|90311738|90311739|90311355|90311356|28531101|28531201|28531301|28531401|28552304|28552318|28552345|28552361|28552362|28552363|28552364|28552365|28552515|28552516|28552517|28552518|28552519|28552520|28552521|28552522|28552523|28552527|28552376|28552377|28552378|28552379|28552380|28552413|28552414|28552415|28552416|28552417|28552418|28552419|28552420|28552421|28552422|28552423|28552424|28552425|90314082|28552461|28552509|28552510|28552511|28552512|28552513|28552514|28552711|28552713|28552714|28552710|28552715|28552717|28552719|28552718|28552716|28552720|28552528|28552529|28552530|90316087|90316088|90316089|90316090|90316091|90316092|28552558|28552565|28552566|28552567|90317056|90317057|90317058|28552643|28552653|28552654|28552696|28552693|28552695|28552697|28552694|28552712|28552709|28552679|28552678|28552681|28552677|28552680|28552676|28552685|28552682|28552686|28552684|28552701|28552702|28552700|28552699|28552698|28552688|28552708|28552704|28552703|28552707|28552706|28552705|28552666|28552662|28552669|28552668|28552664|28552665|28552663|28552667|28552671|28552673|28552675|28552674|28552670|28552672|28552683|28552689|28552692|28552687|28552690|28552691|28552723|28552724|28552725|28552726|28552814|28509101|28509102|A0000177|A0000178|28505803|28505804|28506204|28506203|28510302|28510301|90302235|28506003|28506004|28513001|28513101|28501405|28503106|28503105|28506103|28506104|28505903|28506005|28506006|28506105|28506303|28506106|28515301|28515302|28515901|28515902|28516002|28516001|28516101|28516102|28516201|28516301|28516401|28516103|28516104|28519601|28519701|28519702|28519801|28519802|28521501|28521502|90310647|90310648|28529001|28552355|28552356|28552426|28552427|28552444|28552445|28552446|28552448|28552449|28552450|28552453|28552454|28552447|28552451|28552452|28552456|28552455|28552456|28552381|28552382|28552383|28552438|28552439|28552440|28552588|28552752|28552753|28552754|90314082",
                    "criteria": "IN",
                    "adjustment": 20,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "vehicle_thatcham_manufacturer",
                "matches": [
                  {
                    "value": "Porsche|Land Rover",
                    "criteria": "IN",
                    "adjustment": 20,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "proposer_credit_score",
                "matches": [
                  {
                    "value": "900",
                    "criteria": ">=",
                    "adjustment": 5.0,
                    "operation": "-%"
                  },
                  {
                    "value": "875-899",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2.0,
                    "operation": "-%"
                  }
                ]
              },
              {
                "name": "main_driver_uk_residency_yrs",
                "matches": [
                  {
                    "value": "6|7|8",
                    "criteria": "IN",
                    "adjustment": 5,
                    "operation": "+%"
                  },
                  {
                    "value": "5",
                    "criteria": "<=",
                    "adjustment": 10,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "max_drivers_age_years",
                "matches": [
                  {
                    "value": "68",
                    "criteria": "<",
                    "adjustment": 0,
                    "operation": "+%"
                  },
                  {
                    "value": "68-73",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2,
                    "operation": "+%"
                  },
                  {
                    "value": "74-75",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 6,
                    "operation": "+%"
                  },
                  {
                    "value": "76-79",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 9,
                    "operation": "+%"
                  },
                  {
                    "value": "80",
                    "criteria": ">=",
                    "adjustment": 18,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "youngest_ad_driver_age_years",
                "matches": [
                  {
                    "value": "22",
                    "criteria": "<=",
                    "adjustment": 21,
                    "operation": "+%"
                  },
                  {
                    "value": "23-24",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 16,
                    "operation": "+%"
                  },
                  {
                    "value": "25",
                    "criteria": "==",
                    "adjustment": 6,
                    "operation": "+%"
                  },
                  {
                    "value": "26-30",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2,
                    "operation": "+%"
                  },
                  {
                    "value": "31-35",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 1,
                    "operation": "+%"
                  },
                  {
                    "value": "36",
                    "criteria": ">=",
                    "adjustment": 0,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "main_driver_cdl_licence_type",
                "matches": [
                  {
                    "value": "E",
                    "criteria": "==",
                    "adjustment": 12,
                    "operation": "+%"
                  },
                  {
                    "value": "F",
                    "criteria": "==",
                    "adjustment": 0.29,
                    "operation": "-%"
                  }
                ]
              },
              {
                "name": "proposer_postcode_rar_binv_freq_2021_v01",
                "matches": [
                  {
                    "value": "40",
                    "criteria": "<",
                    "adjustment": 7,
                    "operation": "-%"
                  },
                  {
                    "value": "40-49",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 7,
                    "operation": "-%"
                  },
                  {
                    "value": "50-59",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 7,
                    "operation": "-%"
                  },
                  {
                    "value": "60-69",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 5,
                    "operation": "-%"
                  },
                  {
                    "value": "70-79",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2.5,
                    "operation": "-%"
                  },
                  {
                    "value": "80-89",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 1.4,
                    "operation": "-%"
                  },
                  {
                    "value": "90-99",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 0.7,
                    "operation": "-%"
                  },
                  {
                    "value": "100-109",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 0.2,
                    "operation": "-%"
                  },
                  {
                    "value": "110-119",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 0,
                    "operation": "+%"
                  },
                  {
                    "value": "120-129",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 0.4,
                    "operation": "+%"
                  },
                  {
                    "value": "130-139",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 1,
                    "operation": "+%"
                  },
                  {
                    "value": "140-149",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 1.7,
                    "operation": "+%"
                  },
                  {
                    "value": "150-159",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 2.6,
                    "operation": "+%"
                  },
                  {
                    "value": "160-169",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 4,
                    "operation": "+%"
                  },
                  {
                    "value": "170-179",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 7.5,
                    "operation": "+%"
                  },
                  {
                    "value": "180-189",
                    "criteria": "BETWEEN_INCLUSIVE",
                    "adjustment": 10,
                    "operation": "+%"
                  },
                  {
                    "value": "190",
                    "criteria": ">=",
                    "adjustment": 15,
                    "operation": "+%"
                  }
                ]
              },
              {
                "name": "vehicle_thatcham_manufacturer",
                "matches": [
                  {
                    "value": "TESLA|Tesla|tesla",
                    "criteria": "IN",
                    "adjustment": 30,
                    "operation": "+%"
                  }
                ]
              }
            ],
            "multiMatches": [
              {
                "name": "low_credit_score1",
                "fields": [
                  {
                    "name": "proposer_credit_score",
                    "matches": [
                      {
                        "value": "299",
                        "criteria": "<="
                      }
                    ]
                  },
                  {
                    "name": "cais_intr_rate_grp",
                    "matches": [
                      {
                        "value": "1-4",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score_match_type",
                    "matches": [
                      {
                        "value": "F",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 13,
                "operation": "+%"
              },
              {
                "name": "low_credit_score2",
                "fields": [
                  {
                    "name": "proposer_credit_score",
                    "matches": [
                      {
                        "value": "299",
                        "criteria": "<="
                      }
                    ]
                  },
                  {
                    "name": "cais_intr_rate_grp",
                    "matches": [
                      {
                        "value": "5-12",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score_match_type",
                    "matches": [
                      {
                        "value": "F",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 13,
                "operation": "+%"
              },
              {
                "name": "low_credit_score3",
                "fields": [
                  {
                    "name": "proposer_credit_score",
                    "matches": [
                      {
                        "value": "300-599",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  },
                  {
                    "name": "cais_intr_rate_grp",
                    "matches": [
                      {
                        "value": "1-4",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score_match_type",
                    "matches": [
                      {
                        "value": "F",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 10,
                "operation": "+%"
              },
              {
                "name": "low_credit_score4",
                "fields": [
                  {
                    "name": "proposer_credit_score",
                    "matches": [
                      {
                        "value": "300-599",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  },
                  {
                    "name": "cais_intr_rate_grp",
                    "matches": [
                      {
                        "value": "5-12",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score_match_type",
                    "matches": [
                      {
                        "value": "F",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 10,
                "operation": "+%"
              },
              {
                "name": "low_credit_score5",
                "fields": [
                  {
                    "name": "proposer_credit_score",
                    "matches": [
                      {
                        "value": "300-599",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  },
                  {
                    "name": "cais_intr_rate_grp",
                    "matches": [
                      {
                        "value": "13-21",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score_match_type",
                    "matches": [
                      {
                        "value": "F",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 10,
                "operation": "+%"
              },
              {
                "name": "vehicle_ownership_years_and_age_1",
                "fields": [
                  {
                    "name": "vehicle_owned_years",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "vehicle_age",
                    "matches": [
                      {
                        "value": "0-9",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  }
                ],
                "adjustment": 3,
                "operation": "+%"
              },
              {
                "name": "vehicle_ownership_years_and_age_2",
                "fields": [
                  {
                    "name": "vehicle_owned_years",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "vehicle_age",
                    "matches": [
                      {
                        "value": "10-13",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  }
                ],
                "adjustment": 8,
                "operation": "+%"
              },
              {
                "name": "vehicle_ownership_years_and_age_3",
                "fields": [
                  {
                    "name": "vehicle_owned_years",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "vehicle_age",
                    "matches": [
                      {
                        "value": "14-17",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  }
                ],
                "adjustment": 12,
                "operation": "+%"
              },
              {
                "name": "vehicle_ownership_years_and_age_4",
                "fields": [
                  {
                    "name": "vehicle_owned_years",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "vehicle_age",
                    "matches": [
                      {
                        "value": "18",
                        "criteria": ">="
                      }
                    ]
                  }
                ],
                "adjustment": 15,
                "operation": "+%"
              },
              {
                "name": "vehicle_ownership_years_and_age_5",
                "fields": [
                  {
                    "name": "vehicle_owned_years",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "vehicle_age",
                    "matches": [
                      {
                        "value": "0-15",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  }
                ],
                "adjustment": 3,
                "operation": "+%"
              },
              {
                "name": "vehicle_ownership_years_and_age_6",
                "fields": [
                  {
                    "name": "vehicle_owned_years",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "vehicle_age",
                    "matches": [
                      {
                        "value": "16",
                        "criteria": ">="
                      }
                    ]
                  }
                ],
                "adjustment": 5,
                "operation": "+%"
              },
              {
                "name": "vehicle_ownership_years_and_age_7",
                "fields": [
                  {
                    "name": "vehicle_owned_years",
                    "matches": [
                      {
                        "value": "6",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "vehicle_age",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": ">="
                      }
                    ]
                  }
                ],
                "adjustment": 5,
                "operation": "-%"
              },
              {
                "name": "vehicle_ownership_years_and_age_8",
                "fields": [
                  {
                    "name": "vehicle_owned_years",
                    "matches": [
                      {
                        "value": "7-8",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  },
                  {
                    "name": "vehicle_age",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": ">="
                      }
                    ]
                  }
                ],
                "adjustment": 7,
                "operation": "-%"
              },
              {
                "name": "vehicle_ownership_years_and_age_9",
                "fields": [
                  {
                    "name": "vehicle_owned_years",
                    "matches": [
                      {
                        "value": "9",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "vehicle_age",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": ">="
                      }
                    ]
                  }
                ],
                "adjustment": 15,
                "operation": "-%"
              },
              {
                "name": "vehicle_overnight_parking_and_age",
                "fields": [
                  {
                    "name": "vehicle_overnight_location",
                    "matches": [
                      {
                        "value": "G",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "vehicle_age",
                    "matches": [
                      {
                        "value": "7-18",
                        "criteria": "BETWEEN_INCLUSIVE"
                      }
                    ]
                  }
                ],
                "adjustment": 6,
                "operation": "+%"
              },
              {
                "name": "driver_licence_num_1",
                "fields": [
                  {
                    "name": "proposer_driving_licence_number_ihp",
                    "matches": [
                      {
                        "value": "Y",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "nb_qti",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score",
                    "matches": [
                      {
                        "value": "600",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "cais_intr_rate_grp",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "!="
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score_match_type",
                    "matches": [
                      {
                        "value": "F",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "voluntary_excess",
                    "matches": [
                      {
                        "value": "50",
                        "criteria": ">="
                      }
                    ]
                  }
                ],
                "adjustment": 2.5,
                "operation": "-%"
              },
              {
                "name": "driver_licence_num_2",
                "fields": [
                  {
                    "name": "proposer_driving_licence_number_ihp",
                    "matches": [
                      {
                        "value": "Y",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "nb_qti",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score",
                    "matches": [
                      {
                        "value": "600",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "cais_intr_rate_grp",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "!="
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score_match_type",
                    "matches": [
                      {
                        "value": "F",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "voluntary_excess",
                    "matches": [
                      {
                        "value": "50",
                        "criteria": ">="
                      }
                    ]
                  }
                ],
                "adjustment": 4,
                "operation": "-%"
              },
              {
                "name": "driver_licence_num_3",
                "fields": [
                  {
                    "name": "proposer_driving_licence_number_ihp",
                    "matches": [
                      {
                        "value": "Unknown",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "nb_qti",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score",
                    "matches": [
                      {
                        "value": "600",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "cais_intr_rate_grp",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "!="
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score_match_type",
                    "matches": [
                      {
                        "value": "F",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "voluntary_excess",
                    "matches": [
                      {
                        "value": "50",
                        "criteria": ">="
                      }
                    ]
                  }
                ],
                "adjustment": 2.3,
                "operation": "-%"
              },
              {
                "name": "driver_licence_num_4",
                "fields": [
                  {
                    "name": "proposer_driving_licence_number_ihp",
                    "matches": [
                      {
                        "value": "Unknown",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "nb_qti",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score",
                    "matches": [
                      {
                        "value": "600",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "cais_intr_rate_grp",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "!="
                      }
                    ]
                  },
                  {
                    "name": "proposer_credit_score_match_type",
                    "matches": [
                      {
                        "value": "F",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "voluntary_excess",
                    "matches": [
                      {
                        "value": "50",
                        "criteria": ">="
                      }
                    ]
                  }
                ],
                "adjustment": 1.5,
                "operation": "-%"
              },
              {
                "name": "vehicle_hpi_marque_thatcham_blank",
                "fields": [
                  {
                    "name": "vehicle_thatcham_manufacturer",
                    "matches": [
                      {
                        "criteria": "IS_BLANK"
                      }
                    ]
                  },
                  {
                    "name": "vehicle_hpi_marque",
                    "matches": [
                      {
                        "value": "TESLA|Tesla|tesla",
                        "criteria": "IN"
                      }
                    ]
                  }
                ],
                "adjustment": 30,
                "operation": "+%"
              },
              {
                "name": "proposer_homeowner_ihp_v27",
                "fields": [
                  {
                    "name": "proposer_homeowner_ihp",
                    "matches": [
                      {
                        "value": "-1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "proposer_day_of_birth",
                    "matches": [
                      {
                        "value": "##v28ProposerDayOfBirths##",
                        "criteria": "NOT_IN"
                      }
                    ]
                  }
                ],
                "adjustment": 3.9,
                "operation": "-%"
              },
              {
                "name": "proposer_homeowner_ihp_v28",
                "fields": [
                  {
                    "name": "proposer_homeowner_ihp",
                    "matches": [
                      {
                        "value": "-1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "proposer_day_of_birth",
                    "matches": [
                      {
                        "value": "##v28ProposerDayOfBirths##",
                        "criteria": "IN"
                      }
                    ]
                  }
                ],
                "adjustment": 3.6,
                "operation": "-%"
              },
              {
                "name": "category2_non_fault_1_0/1",
                "fields": [
                  {
                    "name": "sum_drivers_cat2_claims_0_60m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat2_claims_0_12m",
                    "matches": [
                      {
                        "value": "0|1",
                        "criteria": "IN"
                      }
                    ]
                  }
                ],
                "adjustment": 10,
                "operation": "+%"
              },
              {
                "name": "category2_non_fault_2+_0",
                "fields": [
                  {
                    "name": "sum_drivers_cat2_claims_0_60m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat2_claims_0_12m",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 10,
                "operation": "+%"
              },
              {
                "name": "category2_non_fault_2+_1",
                "fields": [
                  {
                    "name": "sum_drivers_cat2_claims_0_60m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat2_claims_0_12m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 35,
                "operation": "+%"
              },
              {
                "name": "category2_non_fault_2+_2+",
                "fields": [
                  {
                    "name": "sum_drivers_cat2_claims_0_60m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat2_claims_0_12m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  }
                ],
                "adjustment": 40,
                "operation": "+%"
              },
              {
                "name": "category3_fault_1_0_0",
                "fields": [
                  {
                    "name": "sum_drivers_cat3_claims_0_60m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_36m",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_12m",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 15,
                "operation": "+%"
              },
              {
                "name": "category3_fault_1_1_0",
                "fields": [
                  {
                    "name": "sum_drivers_cat3_claims_0_60m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_36m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_12m",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 25,
                "operation": "+%"
              },
              {
                "name": "category3_fault_1_1_1",
                "fields": [
                  {
                    "name": "sum_drivers_cat3_claims_0_60m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_36m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_12m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 30,
                "operation": "+%"
              },
              {
                "name": "category3_fault_2+_0_0",
                "fields": [
                  {
                    "name": "sum_drivers_cat3_claims_0_60m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_36m",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_12m",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 20,
                "operation": "+%"
              },
              {
                "name": "category3_fault_2+_1_0",
                "fields": [
                  {
                    "name": "sum_drivers_cat3_claims_0_60m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_36m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_12m",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 30,
                "operation": "+%"
              },
              {
                "name": "category3_fault_2+_1_1",
                "fields": [
                  {
                    "name": "sum_drivers_cat3_claims_0_60m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_36m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_12m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 40,
                "operation": "+%"
              },
              {
                "name": "category3_fault_2+_2+_0",
                "fields": [
                  {
                    "name": "sum_drivers_cat3_claims_0_60m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_36m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_12m",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 45,
                "operation": "+%"
              },
              {
                "name": "category3_fault_2+_2+_1",
                "fields": [
                  {
                    "name": "sum_drivers_cat3_claims_0_60m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_36m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_12m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 45,
                "operation": "+%"
              },
              {
                "name": "category3_fault_2+_2+_2+",
                "fields": [
                  {
                    "name": "sum_drivers_cat3_claims_0_60m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_36m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat3_claims_0_12m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  }
                ],
                "adjustment": 60,
                "operation": "+%"
              },
              {
                "name": "category4to6_Storm/Vandalism/Theft/TotalLoss,Fire_1_0",
                "fields": [
                  {
                    "name": "sum_drivers_cat4to6_claims_0_60m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat4to6_claims_0_12m",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 15,
                "operation": "+%"
              },
              {
                "name": "category4to6_Storm/Vandalism/Theft/TotalLoss,Fire_1_1",
                "fields": [
                  {
                    "name": "sum_drivers_cat4to6_claims_0_60m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat4to6_claims_0_12m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 30,
                "operation": "+%"
              },
              {
                "name": "category4to6_Storm/Vandalism/Theft/TotalLoss,Fire_2+_0",
                "fields": [
                  {
                    "name": "sum_drivers_cat4to6_claims_0_60m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat4to6_claims_0_12m",
                    "matches": [
                      {
                        "value": "0",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 20,
                "operation": "+%"
              },
              {
                "name": "category4to6_Storm/Vandalism/Theft/TotalLoss,Fire_2+_1",
                "fields": [
                  {
                    "name": "sum_drivers_cat4to6_claims_0_60m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat4to6_claims_0_12m",
                    "matches": [
                      {
                        "value": "1",
                        "criteria": "=="
                      }
                    ]
                  }
                ],
                "adjustment": 35,
                "operation": "+%"
              },
              {
                "name": "category4to6_Storm/Vandalism/Theft/TotalLoss,Fire_2+_2+",
                "fields": [
                  {
                    "name": "sum_drivers_cat4to6_claims_0_60m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  },
                  {
                    "name": "sum_drivers_cat4to6_claims_0_12m",
                    "matches": [
                      {
                        "value": "2",
                        "criteria": ">="
                      }
                    ]
                  }
                ],
                "adjustment": 40,
                "operation": "+%"
              }
            ]
          }
        ],
    [
      {
        "name": "Final_Premium",
        "output": "Final_Premium",
        "inputs": [
          "Segmented_Premium"
        ],
        "order": 0,
        "expression": "Segmented_Premium * 0.9220",
        "roundingMode": "UP",
        "scale": 2,
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "##v28ProposerDayOfBirths##",
          "matchCriteria": "NOT_IN"
        }
      },
      {
        "name": "Final_Premium",
        "output": "Final_Premium",
        "inputs": [
          "Segmented_Premium"
        ],
        "order": 0,
        "expression": "Segmented_Premium * 0.9220",
        "roundingMode": "UP",
        "scale": 2,
        "criteria": {
          "fieldName": "proposer_day_of_birth",
          "value": "##v28ProposerDayOfBirths##",
          "matchCriteria": "IN"
        }
      }
    ]
]

export default data

  