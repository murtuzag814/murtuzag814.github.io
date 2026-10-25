// js/cities.js
const cityDictionary = {
    "zhob": {
        "official": "ZHOB",
        "trax": 0,
        "leopards": 1160,
        "tcs": "ZHOB"
    },
    "zahir pir": {
        "official": "ZAHIR PIR",
        "trax": 344,
        "leopards": 0,
        "tcs": "ZAHIRPEER"
    },
    "zafarwal": {
        "official": "ZAFARWAL",
        "trax": 387,
        "leopards": 1088,
        "tcs": "ZAFARWAL"
    },
    "zafar wal": {
        "official": "ZAFAR WAL",
        "trax": 387,
        "leopards": 1088,
        "tcs": "ZAFARWAL"
    },
    "yazman": {
        "official": "YAZMAN",
        "trax": 343,
        "leopards": 109,
        "tcs": "YAZMAN MANDI"
    },
    "yarik": {
        "official": "YARIK",
        "trax": 527,
        "leopards": 0,
        "tcs": null
    },
    "winder": {
        "official": "WINDER",
        "trax": 0,
        "leopards": 602,
        "tcs": "WINDER"
    },
    "wazirabad": {
        "official": "WAZIRABAD",
        "trax": 342,
        "leopards": 1450,
        "tcs": "WAZIRABAD"
    },
    "wasu": {
        "official": "WASU",
        "trax": 0,
        "leopards": 878,
        "tcs": null
    },
    "wasnal": {
        "official": "WASNAL",
        "trax": 2028,
        "leopards": 0,
        "tcs": null
    },
    "wasanday wali": {
        "official": "WASANDAY WALI",
        "trax": 495,
        "leopards": 0,
        "tcs": null
    },
    "waryam wala": {
        "official": "WARYAM WALA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "warbattan": {
        "official": "WARBATTAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "warah": {
        "official": "WARAH",
        "trax": 0,
        "leopards": 0,
        "tcs": "WARAH"
    },
    "wapda colony (ajk)": {
        "official": "WAPDA COLONY (AJK)",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "wanjari": {
        "official": "WANJARI",
        "trax": 0,
        "leopards": 1804,
        "tcs": null
    },
    "wando": {
        "official": "WANDO",
        "trax": 0,
        "leopards": 0,
        "tcs": "WANDO"
    },
    "wana": {
        "official": "WANA",
        "trax": 0,
        "leopards": 0,
        "tcs": "WANA"
    },
    "wan rahda ram": {
        "official": "WAN RAHDA RAM",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "wan bhachran": {
        "official": "WAN BHACHRAN",
        "trax": 341,
        "leopards": 0,
        "tcs": "WAN BACHRAN"
    },
    "wahula": {
        "official": "WAHULA",
        "trax": 2029,
        "leopards": 0,
        "tcs": null
    },
    "wahndo": {
        "official": "WAHNDO",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "wahhndo": {
        "official": "WAHHNDO",
        "trax": 0,
        "leopards": 504,
        "tcs": null
    },
    "wahcantt": {
        "official": "WAHCANTT",
        "trax": 340,
        "leopards": 1444,
        "tcs": "WAH"
    },
    "wah cantt": {
        "official": "WAH CANTT",
        "trax": 340,
        "leopards": 1444,
        "tcs": "WAH"
    },
    "wah cantonment": {
        "official": "WAH CANTONMENT",
        "trax": 340,
        "leopards": 1444,
        "tcs": "WAH"
    },
    "wagan": {
        "official": "WAGAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "WAGAN"
    },
    "wadhi": {
        "official": "WADHI",
        "trax": 0,
        "leopards": 533,
        "tcs": null
    },
    "wadala sandhuan": {
        "official": "WADALA SANDHUAN",
        "trax": 2186,
        "leopards": 0,
        "tcs": null
    },
    "wada machhi": {
        "official": "WADA MACHHI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "village sial": {
        "official": "VILLAGE SIAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "vehari tibba": {
        "official": "VEHARI TIBBA",
        "trax": 339,
        "leopards": 1434,
        "tcs": "VEHARI"
    },
    "vehari": {
        "official": "VEHARI",
        "trax": 339,
        "leopards": 1434,
        "tcs": "VEHARI"
    },
    "vehalizer": {
        "official": "VEHALIZER",
        "trax": 0,
        "leopards": 245,
        "tcs": null
    },
    "vari dir": {
        "official": "VARI DIR",
        "trax": 0,
        "leopards": 0,
        "tcs": "VARI DIR"
    },
    "uthal": {
        "official": "UTHAL",
        "trax": 0,
        "leopards": 601,
        "tcs": "UTHAL"
    },
    "usta muhammad": {
        "official": "USTA MUHAMMAD",
        "trax": 941,
        "leopards": 1363,
        "tcs": "USTA MHMD"
    },
    "upper plate-muzaffarabad": {
        "official": "UPPER PLATE-MUZAFFARABAD",
        "trax": 369,
        "leopards": 0,
        "tcs": null
    },
    "upper dir": {
        "official": "UPPER DIR",
        "trax": 0,
        "leopards": 0,
        "tcs": "UPPER DIR"
    },
    "upper chattar-muzaffarabad": {
        "official": "UPPER CHATTAR-MUZAFFARABAD",
        "trax": 378,
        "leopards": 0,
        "tcs": null
    },
    "umerkot": {
        "official": "UMERKOT",
        "trax": 356,
        "leopards": 1003,
        "tcs": "UMERKOT"
    },
    "umer kot": {
        "official": "UMER KOT",
        "trax": 356,
        "leopards": 1003,
        "tcs": "UMERKOT"
    },
    "umar zai": {
        "official": "UMAR ZAI",
        "trax": 1997,
        "leopards": 921,
        "tcs": null
    },
    "ugoki": {
        "official": "UGOKI",
        "trax": 442,
        "leopards": 0,
        "tcs": null
    },
    "ugoke": {
        "official": "UGOKE",
        "trax": 442,
        "leopards": 0,
        "tcs": null
    },
    "uchali": {
        "official": "UCHALI",
        "trax": 0,
        "leopards": 0,
        "tcs": "UCHALI"
    },
    "uch sharif": {
        "official": "UCH SHARIF",
        "trax": 338,
        "leopards": 108,
        "tcs": "UCH SHARIF"
    },
    "ubauro": {
        "official": "UBAURO",
        "trax": 1403,
        "leopards": 0,
        "tcs": "UBARO"
    },
    "turbat": {
        "official": "TURBAT",
        "trax": 0,
        "leopards": 596,
        "tcs": "TURBAT"
    },
    "tulamba": {
        "official": "TULAMBA",
        "trax": 3529,
        "leopards": 938,
        "tcs": null
    },
    "t-tip colony": {
        "official": "T-TIP COLONY",
        "trax": 0,
        "leopards": 473,
        "tcs": null
    },
    "trutta (ajk)": {
        "official": "TRUTTA (AJK)",
        "trax": 0,
        "leopards": 281,
        "tcs": null
    },
    "tret": {
        "official": "TRET",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "trax test": {
        "official": "TRAX TEST",
        "trax": 110,
        "leopards": 0,
        "tcs": null
    },
    "trarkhail (ajk)": {
        "official": "TRARKHAIL (AJK)",
        "trax": 0,
        "leopards": 1201,
        "tcs": "TRARKHEL"
    },
    "trandha m panah": {
        "official": "TRANDHA M PANAH",
        "trax": 0,
        "leopards": 0,
        "tcs": "TRANDHA M PANAH"
    },
    "tranda sawai": {
        "official": "TRANDA SAWAI",
        "trax": 0,
        "leopards": 0,
        "tcs": "TRANDA SAWAI"
    },
    "trag": {
        "official": "TRAG",
        "trax": 0,
        "leopards": 0,
        "tcs": "TRAG"
    },
    "toru": {
        "official": "TORU",
        "trax": 456,
        "leopards": 0,
        "tcs": null
    },
    "tor kham": {
        "official": "TOR KHAM",
        "trax": 0,
        "leopards": 0,
        "tcs": "TOR KHAM"
    },
    "topi": {
        "official": "TOPI",
        "trax": 337,
        "leopards": 1373,
        "tcs": "TOPI"
    },
    "topa (ajk)": {
        "official": "TOPA (AJK)",
        "trax": 0,
        "leopards": 1200,
        "tcs": null
    },
    "tool plaza khi": {
        "official": "TOOL PLAZA KHI",
        "trax": 0,
        "leopards": 0,
        "tcs": "TOOL PLAZA KHI"
    },
    "tobah": {
        "official": "TOBAH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "toba tek singh": {
        "official": "TOBA TEK SINGH",
        "trax": 336,
        "leopards": 1424,
        "tcs": "TOBATEK-SINGH"
    },
    "toba tek sing": {
        "official": "TOBA TEK SING",
        "trax": 336,
        "leopards": 1424,
        "tcs": "TOBATEK-SINGH"
    },
    "timergara": {
        "official": "TIMERGARA",
        "trax": 335,
        "leopards": 1399,
        "tcs": null
    },
    "tiba sultan pur": {
        "official": "TIBA SULTAN PUR",
        "trax": 334,
        "leopards": 1443,
        "tcs": "TIBBA SULTAN"
    },
    "thull": {
        "official": "THULL",
        "trax": 0,
        "leopards": 1362,
        "tcs": "THULL"
    },
    "thul hamza": {
        "official": "THUL HAMZA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "thul": {
        "official": "THUL",
        "trax": 1402,
        "leopards": 1362,
        "tcs": "THULL"
    },
    "thorar (ajk)": {
        "official": "THORAR (AJK)",
        "trax": 2086,
        "leopards": 1199,
        "tcs": null
    },
    "thoa mehram khan": {
        "official": "THOA MEHRAM KHAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "theri mir wah": {
        "official": "THERI MIR WAH",
        "trax": 358,
        "leopards": 681,
        "tcs": null
    },
    "thehri": {
        "official": "THEHRI",
        "trax": 939,
        "leopards": 1361,
        "tcs": "THERHI"
    },
    "theeng more": {
        "official": "THEENG MORE",
        "trax": 515,
        "leopards": 0,
        "tcs": null
    },
    "thatta": {
        "official": "THATTA",
        "trax": 333,
        "leopards": 1417,
        "tcs": "THATTA"
    },
    "thatha sadiq abad": {
        "official": "THATHA SADIQ ABAD",
        "trax": 0,
        "leopards": 696,
        "tcs": "THATTA"
    },
    "thatha": {
        "official": "THATHA",
        "trax": 333,
        "leopards": 1417,
        "tcs": "THATTA"
    },
    "tharushah": {
        "official": "THARUSHAH",
        "trax": 920,
        "leopards": 0,
        "tcs": "THARO SHAH"
    },
    "tharri mir wah": {
        "official": "THARRI MIR WAH",
        "trax": 0,
        "leopards": 0,
        "tcs": "THARRI MIR WAH"
    },
    "tharparker": {
        "official": "THARPARKER",
        "trax": 0,
        "leopards": 1002,
        "tcs": null
    },
    "thari mirwah": {
        "official": "THARI MIRWAH",
        "trax": 922,
        "leopards": 0,
        "tcs": null
    },
    "thanil kamal": {
        "official": "THANIL KAMAL",
        "trax": 2030,
        "leopards": 0,
        "tcs": null
    },
    "thana bula khan": {
        "official": "THANA BULA KHAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "THANA BULA KHAN"
    },
    "thana": {
        "official": "THANA",
        "trax": 3524,
        "leopards": 0,
        "tcs": null
    },
    "thall": {
        "official": "THALL",
        "trax": 0,
        "leopards": 745,
        "tcs": null
    },
    "thakot": {
        "official": "THAKOT",
        "trax": 0,
        "leopards": 0,
        "tcs": "THAKOT"
    },
    "ternol": {
        "official": "TERNOL",
        "trax": 0,
        "leopards": 0,
        "tcs": "TERNOL"
    },
    "tehkal bala": {
        "official": "TEHKAL BALA",
        "trax": 2016,
        "leopards": 0,
        "tcs": null
    },
    "tehi": {
        "official": "TEHI",
        "trax": 0,
        "leopards": 1397,
        "tcs": null
    },
    "taxila": {
        "official": "TAXILA",
        "trax": 332,
        "leopards": 1449,
        "tcs": "TAXILA"
    },
    "taunsa sharif": {
        "official": "TAUNSA SHARIF",
        "trax": 331,
        "leopards": 752,
        "tcs": "TAUNSA SHARIF"
    },
    "tatral": {
        "official": "TATRAL",
        "trax": 0,
        "leopards": 240,
        "tcs": null
    },
    "tatlay aali": {
        "official": "TATLAY AALI",
        "trax": 0,
        "leopards": 0,
        "tcs": "TATLAY AALI"
    },
    "tata pani (ajk)": {
        "official": "TATA PANI (AJK)",
        "trax": 0,
        "leopards": 788,
        "tcs": null
    },
    "tarnol": {
        "official": "TARNOL",
        "trax": 1388,
        "leopards": 1227,
        "tcs": null
    },
    "tarnab farm": {
        "official": "TARNAB FARM",
        "trax": 0,
        "leopards": 1115,
        "tcs": null
    },
    "tariq abad (ajk)": {
        "official": "TARIQ ABAD (AJK)",
        "trax": 0,
        "leopards": 986,
        "tcs": null
    },
    "tarbela dam ghazi": {
        "official": "TARBELA DAM GHAZI",
        "trax": 329,
        "leopards": 72,
        "tcs": null
    },
    "tarbela dam": {
        "official": "TARBELA DAM",
        "trax": 329,
        "leopards": 72,
        "tcs": "TARBELA"
    },
    "tarar khal": {
        "official": "TARAR KHAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "taranda saway khan": {
        "official": "TARANDA SAWAY KHAN",
        "trax": 328,
        "leopards": 0,
        "tcs": "TARAND SAWAI KH"
    },
    "taranda muhammad panah": {
        "official": "TARANDA MUHAMMAD PANAH",
        "trax": 327,
        "leopards": 857,
        "tcs": null
    },
    "tappi": {
        "official": "TAPPI",
        "trax": 0,
        "leopards": 744,
        "tcs": null
    },
    "tank": {
        "official": "TANK",
        "trax": 538,
        "leopards": 319,
        "tcs": "TANK"
    },
    "tangi gala (ajk)": {
        "official": "TANGI GALA (AJK)",
        "trax": 0,
        "leopards": 1198,
        "tcs": "TANGI"
    },
    "tangi": {
        "official": "TANGI",
        "trax": 0,
        "leopards": 0,
        "tcs": "TANGI"
    },
    "tangdew (ajk)": {
        "official": "TANGDEW (AJK)",
        "trax": 0,
        "leopards": 280,
        "tcs": null
    },
    "tandojam": {
        "official": "TANDOJAM",
        "trax": 324,
        "leopards": 1416,
        "tcs": "TANDO JAM"
    },
    "tandoallahyr": {
        "official": "TANDOALLAHYR",
        "trax": 323,
        "leopards": 1415,
        "tcs": "TANDO ALLAYAR"
    },
    "tando soomro": {
        "official": "TANDO SOOMRO",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "tando muhammad khan": {
        "official": "TANDO MUHAMMAD KHAN",
        "trax": 325,
        "leopards": 82,
        "tcs": "TANDO MOHD KHAN"
    },
    "tando mohd khan": {
        "official": "TANDO MOHD KHAN",
        "trax": 325,
        "leopards": 82,
        "tcs": "TANDO MOHD KHAN"
    },
    "tando kaiser": {
        "official": "TANDO KAISER",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "tando jan mohd.": {
        "official": "TANDO JAN MOHD.",
        "trax": 364,
        "leopards": 1001,
        "tcs": "TANDO JAN MOHD"
    },
    "tando jam": {
        "official": "TANDO JAM",
        "trax": 324,
        "leopards": 1416,
        "tcs": "TANDO JAM"
    },
    "tando ghulam ali": {
        "official": "TANDO GHULAM ALI",
        "trax": 0,
        "leopards": 81,
        "tcs": null
    },
    "tando ghulam al": {
        "official": "TANDO GHULAM AL",
        "trax": 0,
        "leopards": 81,
        "tcs": null
    },
    "tando bago": {
        "official": "TANDO BAGO",
        "trax": 0,
        "leopards": 80,
        "tcs": null
    },
    "tando ala yar": {
        "official": "TANDO ALA YAR",
        "trax": 323,
        "leopards": 1415,
        "tcs": "TANDO ALLAYAR"
    },
    "tando adam": {
        "official": "TANDO ADAM",
        "trax": 322,
        "leopards": 476,
        "tcs": "TANDO ADAM"
    },
    "tandlianwala": {
        "official": "TANDLIANWALA",
        "trax": 321,
        "leopards": 1258,
        "tcs": "TANDLIANWALA"
    },
    "tanda": {
        "official": "TANDA",
        "trax": 522,
        "leopards": 498,
        "tcs": null
    },
    "tand koi": {
        "official": "TAND KOI",
        "trax": 0,
        "leopards": 1372,
        "tcs": null
    },
    "tamman": {
        "official": "TAMMAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "tamirgaraha": {
        "official": "TAMIRGARAHA",
        "trax": 335,
        "leopards": 1399,
        "tcs": "TEMARGARAH"
    },
    "talvandi": {
        "official": "TALVANDI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "tall": {
        "official": "TALL",
        "trax": 0,
        "leopards": 0,
        "tcs": "TALL"
    },
    "talian (ajk)": {
        "official": "TALIAN (AJK)",
        "trax": 0,
        "leopards": 787,
        "tcs": null
    },
    "talhar": {
        "official": "TALHAR",
        "trax": 927,
        "leopards": 79,
        "tcs": null
    },
    "talash ziarat": {
        "official": "TALASH ZIARAT",
        "trax": 0,
        "leopards": 1413,
        "tcs": "ZIARAT"
    },
    "talash": {
        "official": "TALASH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "talagng": {
        "official": "TALAGNG",
        "trax": 0,
        "leopards": 1384,
        "tcs": "TALAGANG"
    },
    "talagang": {
        "official": "TALAGANG",
        "trax": 320,
        "leopards": 1384,
        "tcs": "TALAGANG"
    },
    "takya kawan (ajk)": {
        "official": "TAKYA KAWAN (AJK)",
        "trax": 0,
        "leopards": 786,
        "tcs": null
    },
    "takht-e-bhai": {
        "official": "TAKHT-E-BHAI",
        "trax": 454,
        "leopards": 1376,
        "tcs": "TAKHAT BAI"
    },
    "taja bara": {
        "official": "TAJA BARA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "tail wala": {
        "official": "TAIL WALA",
        "trax": 0,
        "leopards": 0,
        "tcs": "TAIL WALA"
    },
    "syed wala": {
        "official": "SYED WALA",
        "trax": 0,
        "leopards": 107,
        "tcs": null
    },
    "swat": {
        "official": "SWAT",
        "trax": 319,
        "leopards": 0,
        "tcs": "SWAT"
    },
    "swabi": {
        "official": "SWABI",
        "trax": 304,
        "leopards": 1364,
        "tcs": "SWABI"
    },
    "surakhpur": {
        "official": "SURAKHPUR",
        "trax": 2062,
        "leopards": 0,
        "tcs": null
    },
    "supply (ajk)": {
        "official": "SUPPLY (AJK)",
        "trax": 0,
        "leopards": 785,
        "tcs": null
    },
    "sunder adda": {
        "official": "SUNDER ADDA",
        "trax": 0,
        "leopards": 0,
        "tcs": "SUNDAR ADDA"
    },
    "sukkur": {
        "official": "SUKKUR",
        "trax": 318,
        "leopards": 1326,
        "tcs": "SUKKUR"
    },
    "sujawal": {
        "official": "SUJAWAL",
        "trax": 0,
        "leopards": 1423,
        "tcs": "SUJAWAL"
    },
    "sui": {
        "official": "SUI",
        "trax": 0,
        "leopards": 1235,
        "tcs": "SUI"
    },
    "sudhanoti (ajk)": {
        "official": "SUDHANOTI (AJK)",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "srohta (ajk)": {
        "official": "SROHTA (AJK)",
        "trax": 0,
        "leopards": 784,
        "tcs": null
    },
    "sorab": {
        "official": "SORAB",
        "trax": 0,
        "leopards": 0,
        "tcs": "SORAB"
    },
    "sokar": {
        "official": "SOKAR",
        "trax": 2172,
        "leopards": 0,
        "tcs": null
    },
    "sohbatpur": {
        "official": "SOHBATPUR",
        "trax": 0,
        "leopards": 0,
        "tcs": "SOHBATPUR"
    },
    "sohawa dewalian": {
        "official": "SOHAWA DEWALIAN",
        "trax": 0,
        "leopards": 239,
        "tcs": null
    },
    "sohawa city": {
        "official": "SOHAWA CITY",
        "trax": 0,
        "leopards": 589,
        "tcs": null
    },
    "sohawa": {
        "official": "SOHAWA",
        "trax": 2070,
        "leopards": 291,
        "tcs": null
    },
    "sohan": {
        "official": "SOHAN",
        "trax": 2067,
        "leopards": 0,
        "tcs": null
    },
    "smahni (ajk)": {
        "official": "SMAHNI (AJK)",
        "trax": 0,
        "leopards": 168,
        "tcs": null
    },
    "smaal ind estate. daska": {
        "official": "SMAAL IND ESTATE. DASKA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "skindar khel bala": {
        "official": "SKINDAR KHEL BALA",
        "trax": 2005,
        "leopards": 0,
        "tcs": null
    },
    "skardu": {
        "official": "SKARDU",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sita road(rehma": {
        "official": "SITA ROAD(REHMA",
        "trax": 0,
        "leopards": 263,
        "tcs": "SITA ROAD"
    },
    "sirikot": {
        "official": "SIRIKOT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sirgudhan": {
        "official": "SIRGUDHAN",
        "trax": 0,
        "leopards": 238,
        "tcs": null
    },
    "siraye muhajir": {
        "official": "SIRAYE MUHAJIR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sir suba shah": {
        "official": "SIR SUBA SHAH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sinjhoro": {
        "official": "SINJHORO",
        "trax": 930,
        "leopards": 0,
        "tcs": "SINJHORO"
    },
    "singola (ajk)": {
        "official": "SINGOLA (AJK)",
        "trax": 0,
        "leopards": 1197,
        "tcs": null
    },
    "silanwali": {
        "official": "SILANWALI",
        "trax": 317,
        "leopards": 0,
        "tcs": "SILANWALI"
    },
    "silanwal": {
        "official": "SILANWAL",
        "trax": 317,
        "leopards": 0,
        "tcs": "SILANWALI"
    },
    "sikandar abad": {
        "official": "SIKANDAR ABAD",
        "trax": 2160,
        "leopards": 0,
        "tcs": null
    },
    "sihala": {
        "official": "SIHALA",
        "trax": 2066,
        "leopards": 0,
        "tcs": "SIHALA"
    },
    "sibi": {
        "official": "SIBI",
        "trax": 940,
        "leopards": 1359,
        "tcs": "SIBI"
    },
    "sibbi": {
        "official": "SIBBI",
        "trax": 940,
        "leopards": 1359,
        "tcs": "SIBI"
    },
    "sialmore": {
        "official": "SIALMORE",
        "trax": 0,
        "leopards": 0,
        "tcs": "SIALMORE"
    },
    "sialkot": {
        "official": "SIALKOT",
        "trax": 315,
        "leopards": 1309,
        "tcs": "SIALKOT"
    },
    "sial sharif": {
        "official": "SIAL SHARIF",
        "trax": 0,
        "leopards": 1278,
        "tcs": null
    },
    "shujabad": {
        "official": "SHUJABAD",
        "trax": 314,
        "leopards": 1307,
        "tcs": "SHUJAABAD"
    },
    "shorkot city": {
        "official": "SHORKOT CITY",
        "trax": 402,
        "leopards": 1429,
        "tcs": "SHORKOT"
    },
    "shorkot cantt": {
        "official": "SHORKOT CANTT",
        "trax": 313,
        "leopards": 1429,
        "tcs": "SHORKOT"
    },
    "shorkot cantonment": {
        "official": "SHORKOT CANTONMENT",
        "trax": 0,
        "leopards": 0,
        "tcs": "SHORKOT"
    },
    "shorkot": {
        "official": "SHORKOT",
        "trax": 402,
        "leopards": 1429,
        "tcs": "SHORKOT"
    },
    "shinkiari": {
        "official": "SHINKIARI",
        "trax": 0,
        "leopards": 880,
        "tcs": "SHINKIARI"
    },
    "shimla hill": {
        "official": "SHIMLA HILL",
        "trax": 0,
        "leopards": 31,
        "tcs": null
    },
    "shikarpur": {
        "official": "SHIKARPUR",
        "trax": 312,
        "leopards": 1325,
        "tcs": "SHIKARPUR"
    },
    "shigar": {
        "official": "SHIGAR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "shewa adda": {
        "official": "SHEWA ADDA",
        "trax": 459,
        "leopards": 919,
        "tcs": null
    },
    "shersultan": {
        "official": "SHERSULTAN",
        "trax": 500,
        "leopards": 0,
        "tcs": null
    },
    "sheringal": {
        "official": "SHERINGAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "shergarh": {
        "official": "SHERGARH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sher shah": {
        "official": "SHER SHAH",
        "trax": 0,
        "leopards": 1684,
        "tcs": null
    },
    "sheikhupura": {
        "official": "SHEIKHUPURA",
        "trax": 311,
        "leopards": 1280,
        "tcs": "SHEIKHUPURA"
    },
    "sheikhupora": {
        "official": "SHEIKHUPORA",
        "trax": 311,
        "leopards": 1280,
        "tcs": "SHEIKHUPURA"
    },
    "sheikhoo sugar mills": {
        "official": "SHEIKHOO SUGAR MILLS",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sheikh pur": {
        "official": "SHEIKH PUR",
        "trax": 2060,
        "leopards": 0,
        "tcs": null
    },
    "sheedo": {
        "official": "SHEEDO",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "shawa adda": {
        "official": "SHAWA ADDA",
        "trax": 0,
        "leopards": 0,
        "tcs": "SHAWA ADDA"
    },
    "sharaqpur sharif": {
        "official": "SHARAQPUR SHARIF",
        "trax": 1379,
        "leopards": 1304,
        "tcs": "SHARAQPUR"
    },
    "sharaqpur": {
        "official": "SHARAQPUR",
        "trax": 1379,
        "leopards": 1304,
        "tcs": "SHARAQPUR"
    },
    "shankiari": {
        "official": "SHANKIARI",
        "trax": 0,
        "leopards": 898,
        "tcs": null
    },
    "shangla": {
        "official": "SHANGLA",
        "trax": 0,
        "leopards": 0,
        "tcs": "SHANGLA"
    },
    "shams abad": {
        "official": "SHAMS ABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "shamkot": {
        "official": "SHAMKOT",
        "trax": 0,
        "leopards": 694,
        "tcs": null
    },
    "shakargarh": {
        "official": "SHAKARGARH",
        "trax": 385,
        "leopards": 1087,
        "tcs": "SHAKAR GARH"
    },
    "shakar garh": {
        "official": "SHAKAR GARH",
        "trax": 385,
        "leopards": 1087,
        "tcs": "SHAKAR GARH"
    },
    "shahpur sadar": {
        "official": "SHAHPUR SADAR",
        "trax": 309,
        "leopards": 530,
        "tcs": null
    },
    "shahpur jahania": {
        "official": "SHAHPUR JAHANIA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "shahpur city": {
        "official": "SHAHPUR CITY",
        "trax": 309,
        "leopards": 530,
        "tcs": "SHAHPUR"
    },
    "shahpur chakar": {
        "official": "SHAHPUR CHAKAR",
        "trax": 365,
        "leopards": 0,
        "tcs": "SHAHPUR CHAKAR"
    },
    "shahkot": {
        "official": "SHAHKOT",
        "trax": 308,
        "leopards": 1303,
        "tcs": "SHAHKOT"
    },
    "shahjamal": {
        "official": "SHAHJAMAL",
        "trax": 493,
        "leopards": 0,
        "tcs": null
    },
    "shaher sultan": {
        "official": "SHAHER SULTAN",
        "trax": 500,
        "leopards": 0,
        "tcs": null
    },
    "shaheed chowk": {
        "official": "SHAHEED CHOWK",
        "trax": 0,
        "leopards": 0,
        "tcs": "SHAHEED CHOWK"
    },
    "shahdara": {
        "official": "SHAHDARA",
        "trax": 307,
        "leopards": 810,
        "tcs": "SHAHDARA"
    },
    "shahdadpur": {
        "official": "SHAHDADPUR",
        "trax": 310,
        "leopards": 485,
        "tcs": "SHAHDADPUR"
    },
    "shahdadkot": {
        "official": "SHAHDADKOT",
        "trax": 463,
        "leopards": 835,
        "tcs": "SHAHDAD KOT"
    },
    "shahbaz khel": {
        "official": "SHAHBAZ KHEL",
        "trax": 2004,
        "leopards": 0,
        "tcs": null
    },
    "shah saddar din": {
        "official": "SHAH SADDAR DIN",
        "trax": 2171,
        "leopards": 0,
        "tcs": "SHAH SADDAR DIN"
    },
    "shah pur chakar": {
        "official": "SHAH PUR CHAKAR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "shah kot": {
        "official": "SHAH KOT",
        "trax": 308,
        "leopards": 1303,
        "tcs": "SHAHKOT"
    },
    "shah dher": {
        "official": "SHAH DHER",
        "trax": 0,
        "leopards": 67,
        "tcs": null
    },
    "shah bagh": {
        "official": "SHAH BAGH",
        "trax": 0,
        "leopards": 391,
        "tcs": null
    },
    "shah allah ditta": {
        "official": "SHAH ALLAH DITTA",
        "trax": 2065,
        "leopards": 0,
        "tcs": null
    },
    "shadiwal": {
        "official": "SHADIWAL",
        "trax": 520,
        "leopards": 0,
        "tcs": null
    },
    "shadan lund": {
        "official": "SHADAN LUND",
        "trax": 2170,
        "leopards": 0,
        "tcs": null
    },
    "shadadpur": {
        "official": "SHADADPUR",
        "trax": 310,
        "leopards": 485,
        "tcs": "SHAHDADPUR"
    },
    "shabqadar": {
        "official": "SHABQADAR",
        "trax": 453,
        "leopards": 1143,
        "tcs": "SHABQADAR"
    },
    "sermik": {
        "official": "SERMIK",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "serai naurang": {
        "official": "SERAI NAURANG",
        "trax": 536,
        "leopards": 117,
        "tcs": "SERAI NAURANG"
    },
    "seoki": {
        "official": "SEOKI",
        "trax": 2181,
        "leopards": 0,
        "tcs": null
    },
    "sensa": {
        "official": "SENSA",
        "trax": 0,
        "leopards": 0,
        "tcs": "SENSA"
    },
    "sekhat": {
        "official": "SEKHAT",
        "trax": 306,
        "leopards": 0,
        "tcs": null
    },
    "sehwan": {
        "official": "SEHWAN",
        "trax": 305,
        "leopards": 262,
        "tcs": "SEHWAN"
    },
    "sehr bagla": {
        "official": "SEHR BAGLA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sehnsa (ajk)": {
        "official": "SEHNSA (AJK)",
        "trax": 2075,
        "leopards": 783,
        "tcs": null
    },
    "seher bagla": {
        "official": "SEHER BAGLA",
        "trax": 0,
        "leopards": 1039,
        "tcs": null
    },
    "sehar mandi (ajk)": {
        "official": "SEHAR MANDI (AJK)",
        "trax": 0,
        "leopards": 782,
        "tcs": null
    },
    "sawabi": {
        "official": "SAWABI",
        "trax": 0,
        "leopards": 0,
        "tcs": "SWABI"
    },
    "sauwal": {
        "official": "SAUWAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "satyyana": {
        "official": "SATYYANA",
        "trax": 0,
        "leopards": 0,
        "tcs": "SATIANA BANGLA"
    },
    "sattrah": {
        "official": "SATTRAH",
        "trax": 2183,
        "leopards": 1133,
        "tcs": null
    },
    "satrah": {
        "official": "SATRAH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "satiyana": {
        "official": "SATIYANA",
        "trax": 303,
        "leopards": 106,
        "tcs": "SATIANA BANGLA"
    },
    "sarwala": {
        "official": "SARWALA",
        "trax": 2185,
        "leopards": 65,
        "tcs": null
    },
    "sarsawa (ajk)": {
        "official": "SARSAWA (AJK)",
        "trax": 0,
        "leopards": 781,
        "tcs": null
    },
    "sarran (ajk)": {
        "official": "SARRAN (AJK)",
        "trax": 0,
        "leopards": 1065,
        "tcs": null
    },
    "saroki": {
        "official": "SAROKI",
        "trax": 0,
        "leopards": 445,
        "tcs": null
    },
    "saroba": {
        "official": "SAROBA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "saro zai": {
        "official": "SARO ZAI",
        "trax": 0,
        "leopards": 743,
        "tcs": null
    },
    "sarkalan": {
        "official": "SARKALAN",
        "trax": 0,
        "leopards": 237,
        "tcs": null
    },
    "sarhari": {
        "official": "SARHARI",
        "trax": 0,
        "leopards": 0,
        "tcs": "SARHARI"
    },
    "sarhad": {
        "official": "SARHAD",
        "trax": 1413,
        "leopards": 0,
        "tcs": "SARHAD"
    },
    "sargodha": {
        "official": "SARGODHA",
        "trax": 302,
        "leopards": 1260,
        "tcs": "SARGODAH"
    },
    "sargodah": {
        "official": "SARGODAH",
        "trax": 302,
        "leopards": 1260,
        "tcs": "SARGODAH"
    },
    "sardheri bazar": {
        "official": "SARDHERI BAZAR",
        "trax": 1996,
        "leopards": 0,
        "tcs": null
    },
    "sardaryab": {
        "official": "SARDARYAB",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sardarpur": {
        "official": "SARDARPUR",
        "trax": 0,
        "leopards": 693,
        "tcs": null
    },
    "sardar garh": {
        "official": "SARDAR GARH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "saraye norang": {
        "official": "SARAYE NORANG",
        "trax": 536,
        "leopards": 117,
        "tcs": "SERAI NAURANG"
    },
    "saranda (ajk)": {
        "official": "SARANDA (AJK)",
        "trax": 0,
        "leopards": 279,
        "tcs": null
    },
    "sarai naymat kh": {
        "official": "SARAI NAYMAT KH",
        "trax": 0,
        "leopards": 469,
        "tcs": null
    },
    "sarai naurang": {
        "official": "SARAI NAURANG",
        "trax": 536,
        "leopards": 117,
        "tcs": "SERAI NAURANG"
    },
    "sarai mahajir": {
        "official": "SARAI MAHAJIR",
        "trax": 537,
        "leopards": 0,
        "tcs": null
    },
    "sarai alamgir": {
        "official": "SARAI ALAMGIR",
        "trax": 273,
        "leopards": 587,
        "tcs": "SRAI ALAMGEER"
    },
    "sanjwal": {
        "official": "SANJWAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sanjhoro": {
        "official": "SANJHORO",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sanjarpur": {
        "official": "SANJARPUR",
        "trax": 301,
        "leopards": 0,
        "tcs": null
    },
    "sangwala": {
        "official": "SANGWALA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sangla hill": {
        "official": "SANGLA HILL",
        "trax": 300,
        "leopards": 325,
        "tcs": "SANGLA HILL"
    },
    "sanghola": {
        "official": "SANGHOLA",
        "trax": 2084,
        "leopards": 0,
        "tcs": null
    },
    "sanghoi": {
        "official": "SANGHOI",
        "trax": 2069,
        "leopards": 0,
        "tcs": null
    },
    "sanghar": {
        "official": "SANGHAR",
        "trax": 299,
        "leopards": 1090,
        "tcs": "SANGHAR"
    },
    "sandu gali": {
        "official": "SANDU GALI",
        "trax": 0,
        "leopards": 28,
        "tcs": null
    },
    "sandhianwali": {
        "official": "SANDHIANWALI",
        "trax": 0,
        "leopards": 1428,
        "tcs": "SANDHILIAN WALI"
    },
    "sanawan": {
        "official": "SANAWAN",
        "trax": 464,
        "leopards": 751,
        "tcs": "SANAWAN"
    },
    "sanawaan": {
        "official": "SANAWAAN",
        "trax": 464,
        "leopards": 0,
        "tcs": "SANAWAN"
    },
    "samundri (faisalabad)": {
        "official": "SAMUNDRI (FAISALABAD)",
        "trax": 298,
        "leopards": 1244,
        "tcs": "SAMANDRI"
    },
    "samror (ajk)": {
        "official": "SAMROR (AJK)",
        "trax": 0,
        "leopards": 780,
        "tcs": null
    },
    "samrala": {
        "official": "SAMRALA",
        "trax": 2059,
        "leopards": 0,
        "tcs": null
    },
    "samote": {
        "official": "SAMOTE",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sambrial": {
        "official": "SAMBRIAL",
        "trax": 382,
        "leopards": 1321,
        "tcs": "SAMBRIAL"
    },
    "samasatta": {
        "official": "SAMASATTA",
        "trax": 2174,
        "leopards": 0,
        "tcs": null
    },
    "samaro": {
        "official": "SAMARO",
        "trax": 0,
        "leopards": 0,
        "tcs": "SAMARO"
    },
    "samar bagh": {
        "official": "SAMAR BAGH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "samandri": {
        "official": "SAMANDRI",
        "trax": 0,
        "leopards": 1244,
        "tcs": "SAMANDRI"
    },
    "saloi": {
        "official": "SALOI",
        "trax": 2043,
        "leopards": 234,
        "tcs": null
    },
    "sakrand nawabshah": {
        "official": "SAKRAND NAWABSHAH",
        "trax": 257,
        "leopards": 1089,
        "tcs": "SAKRAND"
    },
    "sakrand": {
        "official": "SAKRAND",
        "trax": 297,
        "leopards": 1098,
        "tcs": "SAKRAND"
    },
    "sakhi sarwar": {
        "official": "SAKHI SARWAR",
        "trax": 296,
        "leopards": 0,
        "tcs": null
    },
    "sakardu": {
        "official": "SAKARDU",
        "trax": 0,
        "leopards": 0,
        "tcs": "SAKARDU"
    },
    "sajanpur": {
        "official": "SAJANPUR",
        "trax": 0,
        "leopards": 0,
        "tcs": "SAJANPUR"
    },
    "saigal abad": {
        "official": "SAIGAL ABAD",
        "trax": 2044,
        "leopards": 0,
        "tcs": null
    },
    "saidu sharif (s": {
        "official": "SAIDU SHARIF (S",
        "trax": 462,
        "leopards": 975,
        "tcs": "SAIDU SHARIF"
    },
    "saidan": {
        "official": "SAIDAN",
        "trax": 441,
        "leopards": 0,
        "tcs": null
    },
    "sahiwal - fsd": {
        "official": "SAHIWAL - FSD",
        "trax": 0,
        "leopards": 0,
        "tcs": "SAHIWAL - FSD"
    },
    "sahiwal": {
        "official": "SAHIWAL",
        "trax": 293,
        "leopards": 1236,
        "tcs": "SAHIWAL"
    },
    "sahib abad": {
        "official": "SAHIB ABAD",
        "trax": 0,
        "leopards": 1411,
        "tcs": null
    },
    "saghar pur": {
        "official": "SAGHAR PUR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "safdarabad": {
        "official": "SAFDARABAD",
        "trax": 0,
        "leopards": 1302,
        "tcs": null
    },
    "sadwal": {
        "official": "SADWAL",
        "trax": 2045,
        "leopards": 0,
        "tcs": null
    },
    "sadpara": {
        "official": "SADPARA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "sadiqabad": {
        "official": "SADIQABAD",
        "trax": 292,
        "leopards": 1228,
        "tcs": "SADIQABAD"
    },
    "sadhoke": {
        "official": "SADHOKE",
        "trax": 0,
        "leopards": 419,
        "tcs": null
    },
    "sadhar": {
        "official": "SADHAR",
        "trax": 0,
        "leopards": 0,
        "tcs": "SADHAR"
    },
    "saboor sharif": {
        "official": "SABOOR SHARIF",
        "trax": 0,
        "leopards": 444,
        "tcs": null
    },
    "sabaz peer": {
        "official": "SABAZ PEER",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "rwp warwhouse": {
        "official": "RWP WARWHOUSE",
        "trax": 0,
        "leopards": 0,
        "tcs": "RWP WARWHOUSE"
    },
    "rwp - gen heavy": {
        "official": "RWP - GEN HEAVY",
        "trax": 0,
        "leopards": 0,
        "tcs": "RWP - GEN HEAVY"
    },
    "rustam": {
        "official": "RUSTAM",
        "trax": 457,
        "leopards": 0,
        "tcs": null
    },
    "rubwa": {
        "official": "RUBWA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "roundu": {
        "official": "ROUNDU",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "roodo sultan": {
        "official": "ROODO SULTAN",
        "trax": 550,
        "leopards": 550,
        "tcs": null
    },
    "rooda": {
        "official": "ROODA",
        "trax": 2395,
        "leopards": 0,
        "tcs": null
    },
    "rojhan": {
        "official": "ROJHAN",
        "trax": 3609,
        "leopards": 0,
        "tcs": null
    },
    "rohri": {
        "official": "ROHRI",
        "trax": 291,
        "leopards": 1356,
        "tcs": "ROHRI"
    },
    "rodu sultan": {
        "official": "RODU SULTAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "RODU SULTAN"
    },
    "risal pur": {
        "official": "RISAL PUR",
        "trax": 290,
        "leopards": 1114,
        "tcs": "RISALPUR"
    },
    "rider test": {
        "official": "RIDER TEST",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "renalakhurd": {
        "official": "RENALAKHURD",
        "trax": 289,
        "leopards": 1129,
        "tcs": "RENALA KHURD"
    },
    "renala khurd": {
        "official": "RENALA KHURD",
        "trax": 289,
        "leopards": 1129,
        "tcs": "RENALA KHURD"
    },
    "rehmani nagar": {
        "official": "REHMANI NAGAR",
        "trax": 0,
        "leopards": 1100,
        "tcs": null
    },
    "rawat": {
        "official": "RAWAT",
        "trax": 466,
        "leopards": 384,
        "tcs": "RAWAT"
    },
    "rawalpindi": {
        "official": "RAWALPINDI",
        "trax": 288,
        "leopards": 1202,
        "tcs": "RAWALPINDI"
    },
    "rawalakot (ajk)": {
        "official": "RAWALAKOT (AJK)",
        "trax": 445,
        "leopards": 1173,
        "tcs": "RAWALAKOT"
    },
    "rawalakot": {
        "official": "RAWALAKOT",
        "trax": 445,
        "leopards": 1173,
        "tcs": "RAWALAKOT"
    },
    "ratta bajwa": {
        "official": "RATTA BAJWA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "rato dero": {
        "official": "RATO DERO",
        "trax": 287,
        "leopards": 0,
        "tcs": "RATTO DERO"
    },
    "rasool pur tarr": {
        "official": "RASOOL PUR TARR",
        "trax": 0,
        "leopards": 420,
        "tcs": null
    },
    "rashaki": {
        "official": "RASHAKI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "rao khan wala": {
        "official": "RAO KHAN WALA",
        "trax": 514,
        "leopards": 0,
        "tcs": null
    },
    "ranjhi": {
        "official": "RANJHI",
        "trax": 0,
        "leopards": 289,
        "tcs": null
    },
    "ranipur": {
        "official": "RANIPUR",
        "trax": 286,
        "leopards": 680,
        "tcs": "RANIPUR"
    },
    "rani pur": {
        "official": "RANI PUR",
        "trax": 286,
        "leopards": 680,
        "tcs": "RANIPUR"
    },
    "rangpur": {
        "official": "RANGPUR",
        "trax": 2163,
        "leopards": 0,
        "tcs": null
    },
    "rangla (ajk)": {
        "official": "RANGLA (AJK)",
        "trax": 0,
        "leopards": 1064,
        "tcs": null
    },
    "ramak": {
        "official": "RAMAK",
        "trax": 535,
        "leopards": 0,
        "tcs": null
    },
    "rakhni": {
        "official": "RAKHNI",
        "trax": 0,
        "leopards": 1355,
        "tcs": null
    },
    "rajjar": {
        "official": "RAJJAR",
        "trax": 1995,
        "leopards": 0,
        "tcs": null
    },
    "rajar": {
        "official": "RAJAR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "rajanpur": {
        "official": "RAJANPUR",
        "trax": 285,
        "leopards": 305,
        "tcs": "RAJANPUR"
    },
    "rajana": {
        "official": "RAJANA",
        "trax": 1264,
        "leopards": 1427,
        "tcs": "RAJANA"
    },
    "raja sadokey": {
        "official": "RAJA SADOKEY",
        "trax": 0,
        "leopards": 419,
        "tcs": null
    },
    "raja jang": {
        "official": "RAJA JANG",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "raiwind (lahore)": {
        "official": "RAIWIND (LAHORE)",
        "trax": 505,
        "leopards": 1171,
        "tcs": "RAIWIND"
    },
    "raiwind": {
        "official": "RAIWIND",
        "trax": 505,
        "leopards": 1171,
        "tcs": "RAIWIND"
    },
    "rahwali": {
        "official": "RAHWALI",
        "trax": 491,
        "leopards": 418,
        "tcs": null
    },
    "rahimyar khan": {
        "official": "RAHIMYAR KHAN",
        "trax": 284,
        "leopards": 1170,
        "tcs": "RAHIMYARKHAN"
    },
    "rahimabad": {
        "official": "RAHIMABAD",
        "trax": 2083,
        "leopards": 0,
        "tcs": null
    },
    "rahim yar khan": {
        "official": "RAHIM YAR KHAN",
        "trax": 284,
        "leopards": 1170,
        "tcs": "RAHIMYARKHAN"
    },
    "radhen": {
        "official": "RADHEN",
        "trax": 0,
        "leopards": 1276,
        "tcs": null
    },
    "radhan station": {
        "official": "RADHAN STATION",
        "trax": 0,
        "leopards": 0,
        "tcs": "RADHAN STATION"
    },
    "rachna town": {
        "official": "RACHNA TOWN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "rabwa": {
        "official": "RABWA",
        "trax": 1376,
        "leopards": 1169,
        "tcs": null
    },
    "rabat": {
        "official": "RABAT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "quidabad": {
        "official": "QUIDABAD",
        "trax": 282,
        "leopards": 0,
        "tcs": "QUAIDABAD"
    },
    "quetta": {
        "official": "QUETTA",
        "trax": 283,
        "leopards": 1151,
        "tcs": "QUETTA"
    },
    "qillan (ajk)": {
        "official": "QILLAN (AJK)",
        "trax": 0,
        "leopards": 1196,
        "tcs": null
    },
    "qilla saifullah": {
        "official": "QILLA SAIFULLAH",
        "trax": 0,
        "leopards": 0,
        "tcs": "QILLA SAIFULLAH"
    },
    "qila saib singh": {
        "official": "QILA SAIB SINGH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "qila kalar wala": {
        "official": "QILA KALAR WALA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "qila jawand singh": {
        "official": "QILA JAWAND SINGH",
        "trax": 2438,
        "leopards": 0,
        "tcs": null
    },
    "qila dedar sing": {
        "official": "QILA DEDAR SING",
        "trax": 280,
        "leopards": 405,
        "tcs": "QILA DEDAR SING"
    },
    "qila ahmed abad": {
        "official": "QILA AHMED ABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "qazi ahmad": {
        "official": "QAZI AHMAD",
        "trax": 278,
        "leopards": 1097,
        "tcs": "QAZI AHMED"
    },
    "qasim bela": {
        "official": "QASIM BELA",
        "trax": 0,
        "leopards": 0,
        "tcs": "QASIM BELA"
    },
    "qasba grt. chak": {
        "official": "QASBA GRT. CHAK",
        "trax": 391,
        "leopards": 1078,
        "tcs": null
    },
    "qambar": {
        "official": "QAMBAR",
        "trax": 911,
        "leopards": 0,
        "tcs": null
    },
    "qamar mashani": {
        "official": "QAMAR MASHANI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "qamar abad": {
        "official": "QAMAR ABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "qalandarabad": {
        "official": "QALANDARABAD",
        "trax": 3593,
        "leopards": 897,
        "tcs": "QALANDRABAD"
    },
    "qaimpur": {
        "official": "QAIMPUR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "qaim pur": {
        "official": "QAIM PUR",
        "trax": 277,
        "leopards": 0,
        "tcs": null
    },
    "qaim bharwana": {
        "official": "QAIM BHARWANA",
        "trax": 0,
        "leopards": 0,
        "tcs": "QAIM BHARWANA"
    },
    "qaidabad": {
        "official": "QAIDABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": "QUAIDABAD"
    },
    "qadirpur rawan": {
        "official": "QADIRPUR RAWAN",
        "trax": 392,
        "leopards": 1077,
        "tcs": "QADIRPUR RAWAN"
    },
    "qadirabad": {
        "official": "QADIRABAD",
        "trax": 0,
        "leopards": 875,
        "tcs": null
    },
    "qaboola sharif": {
        "official": "QABOOLA SHARIF",
        "trax": 448,
        "leopards": 1243,
        "tcs": "QABOOLA"
    },
    "qabal": {
        "official": "QABAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "purab klair": {
        "official": "PURAB KLAIR",
        "trax": 0,
        "leopards": 1134,
        "tcs": null
    },
    "punwan": {
        "official": "PUNWAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "punjab sugar mi": {
        "official": "PUNJAB SUGAR MI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "pungirayin": {
        "official": "PUNGIRAYIN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "pull manda (ajk)": {
        "official": "PULL MANDA (AJK)",
        "trax": 0,
        "leopards": 985,
        "tcs": null
    },
    "pull bager": {
        "official": "PULL BAGER",
        "trax": 0,
        "leopards": 934,
        "tcs": null
    },
    "pull 111 chak": {
        "official": "PULL 111 CHAK",
        "trax": 0,
        "leopards": 1275,
        "tcs": null
    },
    "pulendri (ajk)": {
        "official": "PULENDRI (AJK)",
        "trax": 0,
        "leopards": 779,
        "tcs": null
    },
    "pourmiana": {
        "official": "POURMIANA",
        "trax": 0,
        "leopards": 1448,
        "tcs": null
    },
    "potha (ajk)": {
        "official": "POTHA (AJK)",
        "trax": 0,
        "leopards": 778,
        "tcs": null
    },
    "postex test": {
        "official": "POSTEX TEST",
        "trax": 0,
        "leopards": 0,
        "tcs": "BAHAWALPUR"
    },
    "pooran": {
        "official": "POORAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "POORAN"
    },
    "poonch (ajk)": {
        "official": "POONCH (AJK)",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "plak (ajk)": {
        "official": "PLAK (AJK)",
        "trax": 0,
        "leopards": 278,
        "tcs": null
    },
    "pithoro": {
        "official": "PITHORO",
        "trax": 0,
        "leopards": 999,
        "tcs": "PITHORO"
    },
    "pishin": {
        "official": "PISHIN",
        "trax": 0,
        "leopards": 1153,
        "tcs": "PISHIN"
    },
    "piryalo": {
        "official": "PIRYALO",
        "trax": 937,
        "leopards": 0,
        "tcs": "PIRYALO"
    },
    "pirmahal": {
        "official": "PIRMAHAL",
        "trax": 275,
        "leopards": 1426,
        "tcs": "PIR MAHAL"
    },
    "pira fatehal": {
        "official": "PIRA FATEHAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "pir wadhai": {
        "official": "PIR WADHAI",
        "trax": 2087,
        "leopards": 0,
        "tcs": null
    },
    "pir jo goth": {
        "official": "PIR JO GOTH",
        "trax": 921,
        "leopards": 679,
        "tcs": "PIR JO GOTH"
    },
    "pir jagi(chak 1": {
        "official": "PIR JAGI(CHAK 1",
        "trax": 0,
        "leopards": 851,
        "tcs": null
    },
    "pir bala": {
        "official": "PIR BALA",
        "trax": 373,
        "leopards": 0,
        "tcs": null
    },
    "pir baba": {
        "official": "PIR BABA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "piplan": {
        "official": "PIPLAN",
        "trax": 274,
        "leopards": 0,
        "tcs": "PIPLAN"
    },
    "pioneer cement": {
        "official": "PIONEER CEMENT",
        "trax": 0,
        "leopards": 526,
        "tcs": null
    },
    "pindi said pur": {
        "official": "PINDI SAID PUR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "pindi point": {
        "official": "PINDI POINT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "pindi gujran": {
        "official": "PINDI GUJRAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "pindi gheb": {
        "official": "PINDI GHEB",
        "trax": 2469,
        "leopards": 1205,
        "tcs": "PINDI GHEB"
    },
    "pindi bhattian": {
        "official": "PINDI BHATTIAN",
        "trax": 272,
        "leopards": 1300,
        "tcs": "PINDI BHATIAN"
    },
    "pindi bhatian": {
        "official": "PINDI BHATIAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "PINDI BHATIAN"
    },
    "pind khurd(ajk)": {
        "official": "PIND KHURD(AJK)",
        "trax": 0,
        "leopards": 277,
        "tcs": null
    },
    "pind kalan(ajk)": {
        "official": "PIND KALAN(AJK)",
        "trax": 0,
        "leopards": 276,
        "tcs": null
    },
    "pind hashim kha": {
        "official": "PIND HASHIM KHA",
        "trax": 0,
        "leopards": 466,
        "tcs": null
    },
    "pind dadan khan": {
        "official": "PIND DADAN KHAN",
        "trax": 418,
        "leopards": 1145,
        "tcs": "PIND DADAN KHAN"
    },
    "pinanwal": {
        "official": "PINANWAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "phullarwan": {
        "official": "PHULLARWAN",
        "trax": 0,
        "leopards": 1274,
        "tcs": "PHULARWN"
    },
    "phool nagar": {
        "official": "PHOOL NAGAR",
        "trax": 406,
        "leopards": 0,
        "tcs": null
    },
    "phlor": {
        "official": "PHLOR",
        "trax": 0,
        "leopards": 0,
        "tcs": "PHLOR"
    },
    "pharianwali": {
        "official": "PHARIANWALI",
        "trax": 0,
        "leopards": 0,
        "tcs": "PHARIANWALI"
    },
    "phalia": {
        "official": "PHALIA",
        "trax": 438,
        "leopards": 874,
        "tcs": "PHALIA"
    },
    "phaki shah mard": {
        "official": "PHAKI SHAH MARD",
        "trax": 0,
        "leopards": 956,
        "tcs": null
    },
    "phagwari": {
        "official": "PHAGWARI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "pezu": {
        "official": "PEZU",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "pezo": {
        "official": "PEZO",
        "trax": 533,
        "leopards": 0,
        "tcs": null
    },
    "petaro": {
        "official": "PETARO",
        "trax": 437,
        "leopards": 0,
        "tcs": "PETARO"
    },
    "peshawar": {
        "official": "PESHAWAR",
        "trax": 271,
        "leopards": 1140,
        "tcs": "PESHAWAR"
    },
    "peer mahal": {
        "official": "PEER MAHAL",
        "trax": 0,
        "leopards": 0,
        "tcs": "PIR MAHAL"
    },
    "pcfl -hpfl": {
        "official": "PCFL -HPFL",
        "trax": 0,
        "leopards": 465,
        "tcs": null
    },
    "pattoki": {
        "official": "PATTOKI",
        "trax": 443,
        "leopards": 1135,
        "tcs": "PATOKI"
    },
    "pattika (ajk)": {
        "official": "PATTIKA (AJK)",
        "trax": 0,
        "leopards": 1063,
        "tcs": null
    },
    "patriata": {
        "official": "PATRIATA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "patoki": {
        "official": "PATOKI",
        "trax": 0,
        "leopards": 0,
        "tcs": "PATOKI"
    },
    "pasrur": {
        "official": "PASRUR",
        "trax": 381,
        "leopards": 1133,
        "tcs": "PASRUR"
    },
    "pasroor road and villages": {
        "official": "PASROOR ROAD AND VILLAGES",
        "trax": 0,
        "leopards": 0,
        "tcs": "PASRUR"
    },
    "pasni": {
        "official": "PASNI",
        "trax": 0,
        "leopards": 0,
        "tcs": "PASNI"
    },
    "parova": {
        "official": "PAROVA",
        "trax": 524,
        "leopards": 314,
        "tcs": null
    },
    "paroa": {
        "official": "PAROA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "parachinar": {
        "official": "PARACHINAR",
        "trax": 0,
        "leopards": 0,
        "tcs": "PARACHINAR"
    },
    "par nowshera": {
        "official": "PAR NOWSHERA",
        "trax": 0,
        "leopards": 1112,
        "tcs": null
    },
    "panyiola (ajk)": {
        "official": "PANYIOLA (AJK)",
        "trax": 0,
        "leopards": 1195,
        "tcs": "PANYOLIA"
    },
    "panyam (ajk)": {
        "official": "PANYAM (AJK)",
        "trax": 0,
        "leopards": 275,
        "tcs": null
    },
    "pano aqil": {
        "official": "PANO AQIL",
        "trax": 270,
        "leopards": 1353,
        "tcs": "PANU AQIL CANTT"
    },
    "pannu akil": {
        "official": "PANNU AKIL",
        "trax": 0,
        "leopards": 0,
        "tcs": "PANNU AKIL"
    },
    "panjgoor": {
        "official": "PANJGOOR",
        "trax": 0,
        "leopards": 0,
        "tcs": "PANJGOOR"
    },
    "panjeera (ajk)": {
        "official": "PANJEERA (AJK)",
        "trax": 417,
        "leopards": 777,
        "tcs": null
    },
    "panjan kasana": {
        "official": "PANJAN KASANA",
        "trax": 2474,
        "leopards": 0,
        "tcs": null
    },
    "panj garian": {
        "official": "PANJ GARIAN",
        "trax": 534,
        "leopards": 0,
        "tcs": "PANJGIRAN"
    },
    "paniala": {
        "official": "PANIALA",
        "trax": 2162,
        "leopards": 0,
        "tcs": null
    },
    "pandore": {
        "official": "PANDORE",
        "trax": 0,
        "leopards": 579,
        "tcs": null
    },
    "pandi sabarwal": {
        "official": "PANDI SABARWAL",
        "trax": 0,
        "leopards": 984,
        "tcs": null
    },
    "panag gali (ajk)": {
        "official": "PANAG GALI (AJK)",
        "trax": 0,
        "leopards": 776,
        "tcs": null
    },
    "palandri": {
        "official": "PALANDRI",
        "trax": 0,
        "leopards": 0,
        "tcs": "PALANDRI"
    },
    "pakpattan": {
        "official": "PAKPATTAN",
        "trax": 0,
        "leopards": 1238,
        "tcs": null
    },
    "pakka laran": {
        "official": "PAKKA LARAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "pakka khuh": {
        "official": "PAKKA KHUH",
        "trax": 0,
        "leopards": 382,
        "tcs": null
    },
    "pak pattan sharif": {
        "official": "PAK PATTAN SHARIF",
        "trax": 0,
        "leopards": 0,
        "tcs": "PAK PATTAN SHARIF"
    },
    "painsra": {
        "official": "PAINSRA",
        "trax": 0,
        "leopards": 0,
        "tcs": "PAINSRA"
    },
    "paikhel": {
        "official": "PAIKHEL",
        "trax": 0,
        "leopards": 0,
        "tcs": "PAIKHEL"
    },
    "paigah": {
        "official": "PAIGAH",
        "trax": 351,
        "leopards": 304,
        "tcs": null
    },
    "pahrianwali add": {
        "official": "PAHRIANWALI ADD",
        "trax": 0,
        "leopards": 873,
        "tcs": "PHARIANWALA"
    },
    "paharpur": {
        "official": "PAHARPUR",
        "trax": 528,
        "leopards": 0,
        "tcs": "PAHAR PUR"
    },
    "paf base": {
        "official": "PAF BASE",
        "trax": 0,
        "leopards": 0,
        "tcs": "PAF BASE"
    },
    "padidan": {
        "official": "PADIDAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "PADIDAN"
    },
    "pachnand": {
        "official": "PACHNAND",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "pachiot": {
        "official": "PACHIOT",
        "trax": 2081,
        "leopards": 0,
        "tcs": null
    },
    "pacca chang": {
        "official": "PACCA CHANG",
        "trax": 0,
        "leopards": 0,
        "tcs": "PACCA CHANG"
    },
    "pabi": {
        "official": "PABI",
        "trax": 0,
        "leopards": 0,
        "tcs": "PABBI"
    },
    "p.o.f. (factory": {
        "official": "P.O.F. (FACTORY",
        "trax": 0,
        "leopards": 462,
        "tcs": null
    },
    "oughi": {
        "official": "OUGHI",
        "trax": 0,
        "leopards": 896,
        "tcs": null
    },
    "oudherwal": {
        "official": "OUDHERWAL",
        "trax": 2046,
        "leopards": 0,
        "tcs": null
    },
    "olympia chemica": {
        "official": "OLYMPIA CHEMICA",
        "trax": 0,
        "leopards": 523,
        "tcs": null
    },
    "ole rwp": {
        "official": "OLE RWP",
        "trax": 0,
        "leopards": 0,
        "tcs": "OLE RWP"
    },
    "ole lhe": {
        "official": "OLE LHE",
        "trax": 0,
        "leopards": 0,
        "tcs": "OLE LHE"
    },
    "ole khi": {
        "official": "OLE KHI",
        "trax": 0,
        "leopards": 0,
        "tcs": "OLE KHI"
    },
    "ole": {
        "official": "OLE",
        "trax": 0,
        "leopards": 0,
        "tcs": "OLE"
    },
    "olding": {
        "official": "OLDING",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "old hala": {
        "official": "OLD HALA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "okara cantt": {
        "official": "OKARA CANTT",
        "trax": 268,
        "leopards": 0,
        "tcs": "OKARA CANTT"
    },
    "okara": {
        "official": "OKARA",
        "trax": 267,
        "leopards": 1124,
        "tcs": "OKARA"
    },
    "oghi": {
        "official": "OGHI",
        "trax": 0,
        "leopards": 0,
        "tcs": "OGHI"
    },
    "nushki": {
        "official": "NUSHKI",
        "trax": 0,
        "leopards": 0,
        "tcs": "NOSHKI"
    },
    "nudearo": {
        "official": "NUDEARO",
        "trax": 0,
        "leopards": 0,
        "tcs": "NAUDERO"
    },
    "nrtc(telecom st": {
        "official": "NRTC(TELECOM ST",
        "trax": 0,
        "leopards": 461,
        "tcs": null
    },
    "nowshero feroz": {
        "official": "NOWSHERO FEROZ",
        "trax": 266,
        "leopards": 1120,
        "tcs": "NOUSHERO FEROZ"
    },
    "nowshera virkan": {
        "official": "NOWSHERA VIRKAN",
        "trax": 265,
        "leopards": 404,
        "tcs": "NOWSHERA VIRKA"
    },
    "nowshera virka": {
        "official": "NOWSHERA VIRKA",
        "trax": 265,
        "leopards": 0,
        "tcs": "NOWSHERA VIRKA"
    },
    "nowshera kalan": {
        "official": "NOWSHERA KALAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "nowshera dt. kh": {
        "official": "NOWSHERA DT. KH",
        "trax": 0,
        "leopards": 521,
        "tcs": null
    },
    "nowshera": {
        "official": "NOWSHERA",
        "trax": 264,
        "leopards": 1101,
        "tcs": "NOWSHERA"
    },
    "noriabad": {
        "official": "NORIABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": "NOORIABAD"
    },
    "noorpur thal": {
        "official": "NOORPUR THAL",
        "trax": 259,
        "leopards": 520,
        "tcs": "NURPUR THAL"
    },
    "noorpur noranga": {
        "official": "NOORPUR NORANGA",
        "trax": 0,
        "leopards": 105,
        "tcs": null
    },
    "noorpur nauranga": {
        "official": "NOORPUR NAURANGA",
        "trax": 0,
        "leopards": 105,
        "tcs": null
    },
    "noorpur": {
        "official": "NOORPUR",
        "trax": 0,
        "leopards": 0,
        "tcs": "NOORPUR"
    },
    "nooriabad": {
        "official": "NOORIABAD",
        "trax": 0,
        "leopards": 1679,
        "tcs": "NOORIABAD"
    },
    "noor shah": {
        "official": "NOOR SHAH",
        "trax": 260,
        "leopards": 1241,
        "tcs": null
    },
    "noor kot": {
        "official": "NOOR KOT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "noor colony": {
        "official": "NOOR COLONY",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "nonar": {
        "official": "NONAR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "nomanpura": {
        "official": "NOMANPURA",
        "trax": 0,
        "leopards": 1062,
        "tcs": null
    },
    "noman pora": {
        "official": "NOMAN PORA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "nokhar": {
        "official": "NOKHAR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "no station": {
        "official": "NO STATION",
        "trax": 0,
        "leopards": 0,
        "tcs": "NO STATION"
    },
    "nizamabad": {
        "official": "NIZAMABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "nisatta": {
        "official": "NISATTA",
        "trax": 1994,
        "leopards": 0,
        "tcs": null
    },
    "nilor": {
        "official": "NILOR",
        "trax": 0,
        "leopards": 0,
        "tcs": "NILOR"
    },
    "newdarband town": {
        "official": "NEWDARBAND TOWN",
        "trax": 0,
        "leopards": 895,
        "tcs": null
    },
    "new saeedabad": {
        "official": "NEW SAEEDABAD",
        "trax": 432,
        "leopards": 0,
        "tcs": "NEW SAEEDABAD"
    },
    "new murree": {
        "official": "NEW MURREE",
        "trax": 0,
        "leopards": 0,
        "tcs": "MURREE"
    },
    "new mirpur city": {
        "official": "NEW MIRPUR CITY",
        "trax": 244,
        "leopards": 976,
        "tcs": null
    },
    "new jatoi": {
        "official": "NEW JATOI",
        "trax": 0,
        "leopards": 1016,
        "tcs": "NEW JATOI"
    },
    "new industrial area": {
        "official": "NEW INDUSTRIAL AREA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "new afzalpur (ajk)": {
        "official": "NEW AFZALPUR (AJK)",
        "trax": 0,
        "leopards": 775,
        "tcs": null
    },
    "nehang": {
        "official": "NEHANG",
        "trax": 0,
        "leopards": 1272,
        "tcs": null
    },
    "naway kali": {
        "official": "NAWAY KALI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "nawan shehr": {
        "official": "NAWAN SHEHR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "nawan lahore": {
        "official": "NAWAN LAHORE",
        "trax": 0,
        "leopards": 0,
        "tcs": "NAYA LAHORE"
    },
    "nawan jandanwal": {
        "official": "NAWAN JANDANWAL",
        "trax": 0,
        "leopards": 149,
        "tcs": null
    },
    "nawabshah": {
        "official": "NAWABSHAH",
        "trax": 257,
        "leopards": 1089,
        "tcs": "NAWABSHAH"
    },
    "nawab shah": {
        "official": "NAWAB SHAH",
        "trax": 257,
        "leopards": 1089,
        "tcs": "NAWABSHAH"
    },
    "nawab pur": {
        "official": "NAWAB PUR",
        "trax": 498,
        "leopards": 0,
        "tcs": null
    },
    "naushehra": {
        "official": "NAUSHEHRA",
        "trax": 0,
        "leopards": 0,
        "tcs": "NAUSHEHRA"
    },
    "naushahro feroze": {
        "official": "NAUSHAHRO FEROZE",
        "trax": 266,
        "leopards": 1120,
        "tcs": "NOUSHERO FEROZ"
    },
    "naukot": {
        "official": "NAUKOT",
        "trax": 1383,
        "leopards": 0,
        "tcs": null
    },
    "naudero": {
        "official": "NAUDERO",
        "trax": 263,
        "leopards": 831,
        "tcs": "NAUDERO"
    },
    "nauabad": {
        "official": "NAUABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": "NAUABAD"
    },
    "nathia gali": {
        "official": "NATHIA GALI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "nasirabad": {
        "official": "NASIRABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": "NASIRABAD"
    },
    "nasarpur": {
        "official": "NASARPUR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "narwala bangla": {
        "official": "NARWALA BANGLA",
        "trax": 0,
        "leopards": 0,
        "tcs": "NARWALA BANGLA"
    },
    "narowal (n100)": {
        "official": "NAROWAL (N100)",
        "trax": 384,
        "leopards": 1082,
        "tcs": "NAROWAL"
    },
    "narowal": {
        "official": "NAROWAL",
        "trax": 384,
        "leopards": 1082,
        "tcs": "NAROWAL"
    },
    "narian sharif": {
        "official": "NARIAN SHARIF",
        "trax": 0,
        "leopards": 1194,
        "tcs": null
    },
    "narang mandi": {
        "official": "NARANG MANDI",
        "trax": 0,
        "leopards": 1019,
        "tcs": "NARANG MANDI"
    },
    "nar (ajk)": {
        "official": "NAR (AJK)",
        "trax": 0,
        "leopards": 774,
        "tcs": null
    },
    "nankanasahib": {
        "official": "NANKANASAHIB",
        "trax": 256,
        "leopards": 1299,
        "tcs": "NANKANA SAHIB"
    },
    "nankana sahib": {
        "official": "NANKANA SAHIB",
        "trax": 256,
        "leopards": 1299,
        "tcs": "NANKANA SAHIB"
    },
    "naluchi": {
        "official": "NALUCHI",
        "trax": 375,
        "leopards": 0,
        "tcs": null
    },
    "nakka kahut": {
        "official": "NAKKA KAHUT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "nakka bazar (ajk)": {
        "official": "NAKKA BAZAR (AJK)",
        "trax": 0,
        "leopards": 1193,
        "tcs": null
    },
    "nakiyal (ajk)": {
        "official": "NAKIYAL (AJK)",
        "trax": 0,
        "leopards": 773,
        "tcs": "NAKYAL"
    },
    "nagarparkar": {
        "official": "NAGARPARKAR",
        "trax": 0,
        "leopards": 0,
        "tcs": "NAGARPARKAR"
    },
    "muzaffargh": {
        "official": "MUZAFFARGH",
        "trax": 254,
        "leopards": 1067,
        "tcs": "MUZAFFARGARH"
    },
    "muzaffargarh": {
        "official": "MUZAFFARGARH",
        "trax": 254,
        "leopards": 1067,
        "tcs": "MUZAFFARGARH"
    },
    "muzaffarabad ak": {
        "official": "MUZAFFARABAD AK",
        "trax": 0,
        "leopards": 0,
        "tcs": "MUZAFFARABAD AK"
    },
    "muzaffarabad": {
        "official": "MUZAFFARABAD",
        "trax": 255,
        "leopards": 1043,
        "tcs": null
    },
    "muzaffar garh": {
        "official": "MUZAFFAR GARH",
        "trax": 254,
        "leopards": 1067,
        "tcs": "MUZAFFARGARH"
    },
    "muslim bagh": {
        "official": "MUSLIM BAGH",
        "trax": 0,
        "leopards": 0,
        "tcs": "MUSLIM BAGH"
    },
    "musafir khana": {
        "official": "MUSAFIR KHANA",
        "trax": 252,
        "leopards": 0,
        "tcs": null
    },
    "musa khel": {
        "official": "MUSA KHEL",
        "trax": 540,
        "leopards": 0,
        "tcs": null
    },
    "musa": {
        "official": "MUSA",
        "trax": 0,
        "leopards": 60,
        "tcs": null
    },
    "muryali": {
        "official": "MURYALI",
        "trax": 2161,
        "leopards": 0,
        "tcs": null
    },
    "murree": {
        "official": "MURREE",
        "trax": 0,
        "leopards": 1020,
        "tcs": "MURREE"
    },
    "muridke": {
        "official": "MURIDKE",
        "trax": 503,
        "leopards": 790,
        "tcs": "MURIDKEY"
    },
    "murid wala": {
        "official": "MURID WALA",
        "trax": 1265,
        "leopards": 1254,
        "tcs": "MURID WALA"
    },
    "murat": {
        "official": "MURAT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "murali wala": {
        "official": "MURALI WALA",
        "trax": 0,
        "leopards": 416,
        "tcs": null
    },
    "murali": {
        "official": "MURALI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "murad wala": {
        "official": "MURAD WALA",
        "trax": 0,
        "leopards": 0,
        "tcs": "MURID WALA"
    },
    "munda": {
        "official": "MUNDA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "multan khurd": {
        "official": "MULTAN KHURD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "multan": {
        "official": "MULTAN",
        "trax": 251,
        "leopards": 1017,
        "tcs": "MULTAN"
    },
    "mulhal mughla": {
        "official": "MULHAL MUGHLA",
        "trax": 2048,
        "leopards": 0,
        "tcs": null
    },
    "mujahid abad (ajk)": {
        "official": "MUJAHID ABAD (AJK)",
        "trax": 0,
        "leopards": 1192,
        "tcs": null
    },
    "muhammad panah mor": {
        "official": "MUHAMMAD PANAH MOR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "much": {
        "official": "MUCH",
        "trax": 0,
        "leopards": 0,
        "tcs": "MUCH"
    },
    "mubarak pur": {
        "official": "MUBARAK PUR",
        "trax": 0,
        "leopards": 0,
        "tcs": "MUBARAK PUR"
    },
    "motra": {
        "official": "MOTRA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "moro": {
        "official": "MORO",
        "trax": 250,
        "leopards": 1012,
        "tcs": "MORO"
    },
    "morgah": {
        "official": "MORGAH",
        "trax": 0,
        "leopards": 2508,
        "tcs": null
    },
    "more khunda": {
        "official": "MORE KHUNDA",
        "trax": 0,
        "leopards": 0,
        "tcs": "MOR KUNDA"
    },
    "more aimanabad": {
        "official": "MORE AIMANABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": "MORE EMINABAD"
    },
    "mongi bangla": {
        "official": "MONGI BANGLA",
        "trax": 0,
        "leopards": 0,
        "tcs": "MONGI BANGLA"
    },
    "mong (ajk)": {
        "official": "MONG (AJK)",
        "trax": 0,
        "leopards": 1191,
        "tcs": null
    },
    "moinuddin pur": {
        "official": "MOINUDDIN PUR",
        "trax": 2058,
        "leopards": 0,
        "tcs": null
    },
    "mohuta mohra": {
        "official": "MOHUTA MOHRA",
        "trax": 915,
        "leopards": 223,
        "tcs": null
    },
    "mohra noori": {
        "official": "MOHRA NOORI",
        "trax": 0,
        "leopards": 380,
        "tcs": null
    },
    "mohmmadpur diwa": {
        "official": "MOHMMADPUR DIWA",
        "trax": 0,
        "leopards": 302,
        "tcs": "MUHAMMAD PUR"
    },
    "mohlanwal": {
        "official": "MOHLANWAL",
        "trax": 0,
        "leopards": 879,
        "tcs": null
    },
    "mohara gulsher": {
        "official": "MOHARA GULSHER",
        "trax": 0,
        "leopards": 222,
        "tcs": null
    },
    "mohar sharif": {
        "official": "MOHAR SHARIF",
        "trax": 0,
        "leopards": 97,
        "tcs": null
    },
    "mityari": {
        "official": "MITYARI",
        "trax": 0,
        "leopards": 0,
        "tcs": "MITYARI"
    },
    "mitthi": {
        "official": "MITTHI",
        "trax": 0,
        "leopards": 0,
        "tcs": "MITHI"
    },
    "mitro": {
        "official": "MITRO",
        "trax": 249,
        "leopards": 2677,
        "tcs": null
    },
    "mitranwali": {
        "official": "MITRANWALI",
        "trax": 2180,
        "leopards": 287,
        "tcs": null
    },
    "mithiani": {
        "official": "MITHIANI",
        "trax": 0,
        "leopards": 1015,
        "tcs": null
    },
    "mithi": {
        "official": "MITHI",
        "trax": 246,
        "leopards": 997,
        "tcs": "MITHI"
    },
    "mitha tiwana": {
        "official": "MITHA TIWANA",
        "trax": 1495,
        "leopards": 519,
        "tcs": null
    },
    "mirwah gorchani": {
        "official": "MIRWAH GORCHANI",
        "trax": 0,
        "leopards": 0,
        "tcs": "MIRWAH GORCHANI"
    },
    "mirupr bathoro": {
        "official": "MIRUPR BATHORO",
        "trax": 0,
        "leopards": 1685,
        "tcs": null
    },
    "mirpurkhas": {
        "official": "MIRPURKHAS",
        "trax": 243,
        "leopards": 988,
        "tcs": "MIRPUR KHAS"
    },
    "mirpur sakro": {
        "official": "MIRPUR SAKRO",
        "trax": 0,
        "leopards": 0,
        "tcs": "MIRPUR SAKRO"
    },
    "mirpur mathelo": {
        "official": "MIRPUR MATHELO",
        "trax": 245,
        "leopards": 1004,
        "tcs": "MIRPUR MATHELO"
    },
    "mirpur khas": {
        "official": "MIRPUR KHAS",
        "trax": 243,
        "leopards": 988,
        "tcs": "MIRPUR KHAS"
    },
    "mirpur bathoro": {
        "official": "MIRPUR BATHORO",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "mirpur (ajk)": {
        "official": "MIRPUR (AJK)",
        "trax": 244,
        "leopards": 976,
        "tcs": "MIRPUR A.K."
    },
    "mirokhan": {
        "official": "MIROKHAN",
        "trax": 0,
        "leopards": 829,
        "tcs": "MIRO KHAN"
    },
    "mirbaz": {
        "official": "MIRBAZ",
        "trax": 2439,
        "leopards": 0,
        "tcs": null
    },
    "miran shah": {
        "official": "MIRAN SHAH",
        "trax": 0,
        "leopards": 0,
        "tcs": "MIRAN SHAH"
    },
    "mirak sial": {
        "official": "MIRAK SIAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "mir pur sakro": {
        "official": "MIR PUR SAKRO",
        "trax": 0,
        "leopards": 1422,
        "tcs": "MIRPUR SAKRO"
    },
    "mir pur baghal": {
        "official": "MIR PUR BAGHAL",
        "trax": 0,
        "leopards": 749,
        "tcs": null
    },
    "mir ali": {
        "official": "MIR ALI",
        "trax": 0,
        "leopards": 0,
        "tcs": "MIR ALI"
    },
    "mingora (swat)": {
        "official": "MINGORA (SWAT)",
        "trax": 0,
        "leopards": 0,
        "tcs": "MINGORA (SWAT)"
    },
    "mingora": {
        "official": "MINGORA",
        "trax": 0,
        "leopards": 964,
        "tcs": "MINGORA"
    },
    "minchinabad": {
        "official": "MINCHINABAD",
        "trax": 242,
        "leopards": 0,
        "tcs": "MINCHANABAD"
    },
    "mianwali bangla": {
        "official": "MIANWALI BANGLA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "mianwali": {
        "official": "MIANWALI",
        "trax": 241,
        "leopards": 939,
        "tcs": "MIANWALI"
    },
    "miani adda": {
        "official": "MIANI ADDA",
        "trax": 0,
        "leopards": 0,
        "tcs": "MIANI ADDA"
    },
    "miani": {
        "official": "MIANI",
        "trax": 0,
        "leopards": 0,
        "tcs": "MIANI"
    },
    "mianchannu": {
        "official": "MIANCHANNU",
        "trax": 240,
        "leopards": 923,
        "tcs": "MIAN CHANOO"
    },
    "mian wali qureshian": {
        "official": "MIAN WALI QURESHIAN",
        "trax": 2159,
        "leopards": 0,
        "tcs": null
    },
    "mian channu": {
        "official": "MIAN CHANNU",
        "trax": 240,
        "leopards": 923,
        "tcs": "MIAN CHANOO"
    },
    "memon goth": {
        "official": "MEMON GOTH",
        "trax": 0,
        "leopards": 0,
        "tcs": "MEMON GOTH"
    },
    "mehrabpur": {
        "official": "MEHRABPUR",
        "trax": 917,
        "leopards": 678,
        "tcs": "MEHRAB PUR"
    },
    "mehmoodkot": {
        "official": "MEHMOODKOT",
        "trax": 394,
        "leopards": 1076,
        "tcs": "MEHMOODKOT"
    },
    "mehdiabad": {
        "official": "MEHDIABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "mehar": {
        "official": "MEHAR",
        "trax": 918,
        "leopards": 828,
        "tcs": "MEHAR"
    },
    "matti tall": {
        "official": "MATTI TALL",
        "trax": 496,
        "leopards": 0,
        "tcs": null
    },
    "mattani": {
        "official": "MATTANI",
        "trax": 0,
        "leopards": 0,
        "tcs": "MATTANI"
    },
    "matta mughal khel": {
        "official": "MATTA MUGHAL KHEL",
        "trax": 1993,
        "leopards": 0,
        "tcs": null
    },
    "matta (swat)": {
        "official": "MATTA (SWAT)",
        "trax": 0,
        "leopards": 974,
        "tcs": null
    },
    "matli badin": {
        "official": "MATLI BADIN",
        "trax": 926,
        "leopards": 78,
        "tcs": "MATLI"
    },
    "matli": {
        "official": "MATLI",
        "trax": 926,
        "leopards": 78,
        "tcs": "MATLI"
    },
    "matiyari": {
        "official": "MATIYARI",
        "trax": 0,
        "leopards": 482,
        "tcs": "MATIARI"
    },
    "matiari": {
        "official": "MATIARI",
        "trax": 247,
        "leopards": 0,
        "tcs": "MATIARI"
    },
    "mastung": {
        "official": "MASTUNG",
        "trax": 0,
        "leopards": 1158,
        "tcs": "MASTUNG"
    },
    "mashkay": {
        "official": "MASHKAY",
        "trax": 0,
        "leopards": 1166,
        "tcs": null
    },
    "masar camp": {
        "official": "MASAR CAMP",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "marot": {
        "official": "MAROT",
        "trax": 3610,
        "leopards": 0,
        "tcs": null
    },
    "mari": {
        "official": "MARI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "marghuz": {
        "official": "MARGHUZ",
        "trax": 0,
        "leopards": 0,
        "tcs": "MARGHUZ"
    },
    "mardwal": {
        "official": "MARDWAL",
        "trax": 0,
        "leopards": 518,
        "tcs": null
    },
    "mardan": {
        "official": "MARDAN",
        "trax": 238,
        "leopards": 900,
        "tcs": "MARDAN"
    },
    "manthal": {
        "official": "MANTHAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "mansehra": {
        "official": "MANSEHRA",
        "trax": 237,
        "leopards": 880,
        "tcs": "MANSHERA"
    },
    "mankyla station": {
        "official": "MANKYLA STATION",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "mankera": {
        "official": "MANKERA",
        "trax": 530,
        "leopards": 0,
        "tcs": "MANKERA"
    },
    "mangwal": {
        "official": "MANGWAL",
        "trax": 2047,
        "leopards": 0,
        "tcs": null
    },
    "mangrotha": {
        "official": "MANGROTHA",
        "trax": 2169,
        "leopards": 0,
        "tcs": null
    },
    "mangowal": {
        "official": "MANGOWAL",
        "trax": 519,
        "leopards": 0,
        "tcs": "MANGOWAL"
    },
    "mangla dam": {
        "official": "MANGLA DAM",
        "trax": 0,
        "leopards": 982,
        "tcs": null
    },
    "mangla cantt (ajk)": {
        "official": "MANGLA CANTT (AJK)",
        "trax": 0,
        "leopards": 981,
        "tcs": "MANGLA"
    },
    "mangla": {
        "official": "MANGLA",
        "trax": 434,
        "leopards": 0,
        "tcs": "MANGLA"
    },
    "manga mandi": {
        "official": "MANGA MANDI",
        "trax": 512,
        "leopards": 135,
        "tcs": null
    },
    "manduri kurram": {
        "official": "MANDURI KURRAM",
        "trax": 0,
        "leopards": 739,
        "tcs": null
    },
    "mandranwala": {
        "official": "MANDRANWALA",
        "trax": 0,
        "leopards": 286,
        "tcs": null
    },
    "mandra": {
        "official": "MANDRA",
        "trax": 390,
        "leopards": 373,
        "tcs": null
    },
    "mandian": {
        "official": "MANDIAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "mandi usmanwala": {
        "official": "MANDI USMANWALA",
        "trax": 511,
        "leopards": 672,
        "tcs": null
    },
    "mandi usman wala": {
        "official": "MANDI USMAN WALA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "mandi shah juin": {
        "official": "MANDI SHAH JUIN",
        "trax": 0,
        "leopards": 548,
        "tcs": null
    },
    "mandi shah jewna": {
        "official": "MANDI SHAH JEWNA",
        "trax": 546,
        "leopards": 0,
        "tcs": null
    },
    "mandi shah": {
        "official": "MANDI SHAH",
        "trax": 0,
        "leopards": 0,
        "tcs": "MANDI SHAH"
    },
    "mandi safdar abad": {
        "official": "MANDI SAFDAR ABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "mandi safdar ab": {
        "official": "MANDI SAFDAR AB",
        "trax": 0,
        "leopards": 1296,
        "tcs": null
    },
    "mandi sadiq gun": {
        "official": "MANDI SADIQ GUN",
        "trax": 0,
        "leopards": 95,
        "tcs": null
    },
    "mandi heera sin": {
        "official": "MANDI HEERA SIN",
        "trax": 0,
        "leopards": 1128,
        "tcs": null
    },
    "mandi faiz abad": {
        "official": "MANDI FAIZ ABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": "MANDI FAIZ ABAD"
    },
    "mandi dhaba sin": {
        "official": "MANDI DHABA SIN",
        "trax": 0,
        "leopards": 1294,
        "tcs": null
    },
    "mandi buchiana": {
        "official": "MANDI BUCHIANA",
        "trax": 0,
        "leopards": 0,
        "tcs": "BUCHIANA MANDI"
    },
    "mandi bhauddin": {
        "official": "MANDI BHAUDDIN",
        "trax": 3410,
        "leopards": 858,
        "tcs": "MANDI BAHAUDDIN"
    },
    "mandi bahauddin": {
        "official": "MANDI BAHAUDDIN",
        "trax": 3410,
        "leopards": 858,
        "tcs": "MANDI BAHAUDDIN"
    },
    "mandeer": {
        "official": "MANDEER",
        "trax": 2480,
        "leopards": 0,
        "tcs": null
    },
    "manawala": {
        "official": "MANAWALA",
        "trax": 1381,
        "leopards": 1293,
        "tcs": "MANAWALA"
    },
    "mana wla": {
        "official": "MANA WLA",
        "trax": 0,
        "leopards": 0,
        "tcs": "MANAWALA"
    },
    "mamu kanjan": {
        "official": "MAMU KANJAN",
        "trax": 235,
        "leopards": 0,
        "tcs": "MAMUN KANJAN"
    },
    "mamdot": {
        "official": "MAMDOT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "malkwal": {
        "official": "MALKWAL",
        "trax": 467,
        "leopards": 869,
        "tcs": null
    },
    "malka hans": {
        "official": "MALKA HANS",
        "trax": 234,
        "leopards": 0,
        "tcs": null
    },
    "malan mansoor": {
        "official": "MALAN MANSOOR",
        "trax": 0,
        "leopards": 54,
        "tcs": null
    },
    "malakwal": {
        "official": "MALAKWAL",
        "trax": 467,
        "leopards": 2521,
        "tcs": "MALAK WAL"
    },
    "malakand": {
        "official": "MALAKAND",
        "trax": 3522,
        "leopards": 131,
        "tcs": "MALAKAND"
    },
    "makli": {
        "official": "MAKLI",
        "trax": 347,
        "leopards": 1421,
        "tcs": null
    },
    "makhdoom rasheed": {
        "official": "MAKHDOOM RASHEED",
        "trax": 497,
        "leopards": 0,
        "tcs": null
    },
    "makhdoom pur": {
        "official": "MAKHDOOM PUR",
        "trax": 0,
        "leopards": 0,
        "tcs": "MAKHDOOM PUR"
    },
    "makhdoom aali": {
        "official": "MAKHDOOM AALI",
        "trax": 0,
        "leopards": 0,
        "tcs": "MAKHDOOM AALI"
    },
    "makadoompur pok": {
        "official": "MAKADOOMPUR POK",
        "trax": 0,
        "leopards": 932,
        "tcs": null
    },
    "majju chak": {
        "official": "MAJJU CHAK",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "maira sharif": {
        "official": "MAIRA SHARIF",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "maira matoor": {
        "official": "MAIRA MATOOR",
        "trax": 0,
        "leopards": 1220,
        "tcs": null
    },
    "mailsi": {
        "official": "MAILSI",
        "trax": 233,
        "leopards": 1441,
        "tcs": "MAILSI"
    },
    "maghal": {
        "official": "MAGHAL",
        "trax": 0,
        "leopards": 219,
        "tcs": null
    },
    "madyan": {
        "official": "MADYAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "MADYAN"
    },
    "madeji": {
        "official": "MADEJI",
        "trax": 913,
        "leopards": 0,
        "tcs": "MADEJI"
    },
    "machikey": {
        "official": "MACHIKEY",
        "trax": 388,
        "leopards": 1292,
        "tcs": null
    },
    "machi wal": {
        "official": "MACHI WAL",
        "trax": 232,
        "leopards": 0,
        "tcs": null
    },
    "mach": {
        "official": "MACH",
        "trax": 0,
        "leopards": 1165,
        "tcs": null
    },
    "luddan": {
        "official": "LUDDAN",
        "trax": 231,
        "leopards": 1439,
        "tcs": "LUDDAN"
    },
    "lower topa": {
        "official": "LOWER TOPA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "lower plate-azad kashmir": {
        "official": "LOWER PLATE-AZAD KASHMIR",
        "trax": 370,
        "leopards": 0,
        "tcs": null
    },
    "lower dir": {
        "official": "LOWER DIR",
        "trax": 3520,
        "leopards": 0,
        "tcs": "LOWER DIR"
    },
    "lower chattar-muzaffarabad": {
        "official": "LOWER CHATTAR-MUZAFFARABAD",
        "trax": 379,
        "leopards": 0,
        "tcs": null
    },
    "lower bazar": {
        "official": "LOWER BAZAR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "loralai": {
        "official": "LORALAI",
        "trax": 0,
        "leopards": 1157,
        "tcs": "LORA LAI"
    },
    "lora lai": {
        "official": "LORA LAI",
        "trax": 0,
        "leopards": 1157,
        "tcs": "LORA LAI"
    },
    "loothar": {
        "official": "LOOTHAR",
        "trax": 0,
        "leopards": 689,
        "tcs": null
    },
    "lohi bher": {
        "official": "LOHI BHER",
        "trax": 2064,
        "leopards": 0,
        "tcs": null
    },
    "lodhran": {
        "official": "LODHRAN",
        "trax": 229,
        "leopards": 104,
        "tcs": "LODHRAN"
    },
    "lilla": {
        "official": "LILLA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "liaquatabad (piplan)": {
        "official": "LIAQUATABAD (PIPLAN)",
        "trax": 0,
        "leopards": 953,
        "tcs": null
    },
    "liaquatabad": {
        "official": "LIAQUATABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "liaqatpur": {
        "official": "LIAQATPUR",
        "trax": 228,
        "leopards": 856,
        "tcs": null
    },
    "liaqatabad (ajk)": {
        "official": "LIAQATABAD (AJK)",
        "trax": 0,
        "leopards": 165,
        "tcs": null
    },
    "liaqat pur": {
        "official": "LIAQAT PUR",
        "trax": 228,
        "leopards": 856,
        "tcs": "LIAQUATPUR"
    },
    "liaqat national bagh aka company bagh": {
        "official": "LIAQAT NATIONAL BAGH AKA COMPANY BAGH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "lhe-west": {
        "official": "LHE-WEST",
        "trax": 0,
        "leopards": 0,
        "tcs": "LHE-WEST"
    },
    "lhe-south": {
        "official": "LHE-SOUTH",
        "trax": 0,
        "leopards": 0,
        "tcs": "LHE-SOUTH"
    },
    "lhe-east": {
        "official": "LHE-EAST",
        "trax": 0,
        "leopards": 0,
        "tcs": "LHE-EAST"
    },
    "lhe-central": {
        "official": "LHE-CENTRAL",
        "trax": 0,
        "leopards": 0,
        "tcs": "LHE-CENTRAL"
    },
    "lhe warehouse": {
        "official": "LHE WAREHOUSE",
        "trax": 0,
        "leopards": 0,
        "tcs": "LHE WAREHOUSE"
    },
    "lhe - gen heavy": {
        "official": "LHE - GEN HEAVY",
        "trax": 0,
        "leopards": 0,
        "tcs": "LHE - GEN HEAVY"
    },
    "lehr sultan pur": {
        "official": "LEHR SULTAN PUR",
        "trax": 2050,
        "leopards": 0,
        "tcs": null
    },
    "lcs test": {
        "official": "LCS TEST",
        "trax": 0,
        "leopards": 99,
        "tcs": null
    },
    "layyah": {
        "official": "LAYYAH",
        "trax": 227,
        "leopards": 839,
        "tcs": "LAYYAH"
    },
    "lawrencepur": {
        "official": "LAWRENCEPUR",
        "trax": 0,
        "leopards": 53,
        "tcs": "LAWRENCE PUR"
    },
    "lawrence college": {
        "official": "LAWRENCE COLLEGE",
        "trax": 0,
        "leopards": 1035,
        "tcs": "LAWRENCE PUR"
    },
    "lawa": {
        "official": "LAWA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "lasbela": {
        "official": "LASBELA",
        "trax": 0,
        "leopards": 628,
        "tcs": null
    },
    "larkana": {
        "official": "LARKANA",
        "trax": 226,
        "leopards": 817,
        "tcs": "LARKANA"
    },
    "landi kotal": {
        "official": "LANDI KOTAL",
        "trax": 0,
        "leopards": 0,
        "tcs": "LANDIKOTAL"
    },
    "lalu rawank": {
        "official": "LALU RAWANK",
        "trax": 0,
        "leopards": 827,
        "tcs": null
    },
    "lalpir": {
        "official": "LALPIR",
        "trax": 0,
        "leopards": 1075,
        "tcs": null
    },
    "lalliani": {
        "official": "LALLIANI",
        "trax": 0,
        "leopards": 0,
        "tcs": "LALIAN"
    },
    "lallian": {
        "official": "LALLIAN",
        "trax": 225,
        "leopards": 1270,
        "tcs": "LALIAN"
    },
    "lalian": {
        "official": "LALIAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "LALIAN"
    },
    "lalamusa": {
        "official": "LALAMUSA",
        "trax": 224,
        "leopards": 812,
        "tcs": "LALAMUSA"
    },
    "lala musa": {
        "official": "LALA MUSA",
        "trax": 224,
        "leopards": 812,
        "tcs": "LALAMUSA"
    },
    "lakki marwat": {
        "official": "LAKKI MARWAT",
        "trax": 532,
        "leopards": 113,
        "tcs": "LAKI MARWAT"
    },
    "lakhi ghulam sh": {
        "official": "LAKHI GHULAM SH",
        "trax": 923,
        "leopards": 1349,
        "tcs": null
    },
    "lahore": {
        "official": "LAHORE",
        "trax": 223,
        "leopards": 789,
        "tcs": "LAHORE"
    },
    "ladhana": {
        "official": "LADHANA",
        "trax": 0,
        "leopards": 848,
        "tcs": null
    },
    "kuthiala sheikh": {
        "official": "KUTHIALA SHEIKH",
        "trax": 0,
        "leopards": 866,
        "tcs": null
    },
    "kunri": {
        "official": "KUNRI",
        "trax": 357,
        "leopards": 995,
        "tcs": "KUNRI"
    },
    "kunjah": {
        "official": "KUNJAH",
        "trax": 518,
        "leopards": 0,
        "tcs": null
    },
    "kunja city": {
        "official": "KUNJA CITY",
        "trax": 518,
        "leopards": 0,
        "tcs": null
    },
    "kundain": {
        "official": "KUNDAIN",
        "trax": 541,
        "leopards": 0,
        "tcs": "KUNDIAN"
    },
    "kumb": {
        "official": "KUMB",
        "trax": 0,
        "leopards": 0,
        "tcs": "KUMB"
    },
    "kulluwal": {
        "official": "KULLUWAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kuldana": {
        "official": "KULDANA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kulachi": {
        "official": "KULACHI",
        "trax": 525,
        "leopards": 0,
        "tcs": null
    },
    "kufri": {
        "official": "KUFRI",
        "trax": 0,
        "leopards": 517,
        "tcs": null
    },
    "kuchlaq": {
        "official": "KUCHLAQ",
        "trax": 523,
        "leopards": 0,
        "tcs": "KUCHLAK"
    },
    "koulo tarrar": {
        "official": "KOULO TARRAR",
        "trax": 0,
        "leopards": 414,
        "tcs": null
    },
    "kotri": {
        "official": "KOTRI",
        "trax": 470,
        "leopards": 481,
        "tcs": "KOTRI"
    },
    "kotli-a.kashmir": {
        "official": "KOTLI-A.KASHMIR",
        "trax": 0,
        "leopards": 754,
        "tcs": "KOTLI-A.KASHMIR"
    },
    "kotli loharan": {
        "official": "KOTLI LOHARAN",
        "trax": 431,
        "leopards": 1316,
        "tcs": null
    },
    "kotli behram": {
        "official": "KOTLI BEHRAM",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kotli (ajk)": {
        "official": "KOTLI (AJK)",
        "trax": 0,
        "leopards": 754,
        "tcs": "KOTLI-A.KASHMIR"
    },
    "kotla jam": {
        "official": "KOTLA JAM",
        "trax": 0,
        "leopards": 0,
        "tcs": "KOTLA JAM"
    },
    "kotla arab ali khan": {
        "official": "KOTLA ARAB ALI KHAN",
        "trax": 516,
        "leopards": 438,
        "tcs": null
    },
    "kotla": {
        "official": "KOTLA",
        "trax": 0,
        "leopards": 0,
        "tcs": "KOTLA"
    },
    "kota": {
        "official": "KOTA",
        "trax": 0,
        "leopards": 130,
        "tcs": null
    },
    "kot sultan": {
        "official": "KOT SULTAN",
        "trax": 489,
        "leopards": 839,
        "tcs": null
    },
    "kot sujan sing": {
        "official": "KOT SUJAN SING",
        "trax": 0,
        "leopards": 931,
        "tcs": null
    },
    "kot shaukat": {
        "official": "KOT SHAUKAT",
        "trax": 2437,
        "leopards": 0,
        "tcs": null
    },
    "kot samabah": {
        "official": "KOT SAMABAH",
        "trax": 0,
        "leopards": 0,
        "tcs": "KOT SAMABAH"
    },
    "kot samaba": {
        "official": "KOT SAMABA",
        "trax": 284,
        "leopards": 0,
        "tcs": "KOT SAMABAH"
    },
    "kot sabzal": {
        "official": "KOT SABZAL",
        "trax": 219,
        "leopards": 0,
        "tcs": null
    },
    "kot radha kishan": {
        "official": "KOT RADHA KISHAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "KOT RADHA KISHA"
    },
    "kot radha kisha": {
        "official": "KOT RADHA KISHA",
        "trax": 510,
        "leopards": 1172,
        "tcs": "KOT RADHA KISHA"
    },
    "kot qazi": {
        "official": "KOT QAZI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kot qaisrani": {
        "official": "KOT QAISRANI",
        "trax": 2168,
        "leopards": 0,
        "tcs": null
    },
    "kot pindi das": {
        "official": "KOT PINDI DAS",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kot najeeb ulla": {
        "official": "KOT NAJEEB ULLA",
        "trax": 0,
        "leopards": 458,
        "tcs": null
    },
    "kot momin": {
        "official": "KOT MOMIN",
        "trax": 218,
        "leopards": 1269,
        "tcs": "KOT MOMIN"
    },
    "kot mithan": {
        "official": "KOT MITHAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "KOT MITTHAN"
    },
    "kot je sing": {
        "official": "KOT JE SING",
        "trax": 0,
        "leopards": 412,
        "tcs": null
    },
    "kot jamel ajk": {
        "official": "KOT JAMEL AJK",
        "trax": 0,
        "leopards": 164,
        "tcs": null
    },
    "kot jamel (ajk)": {
        "official": "KOT JAMEL (AJK)",
        "trax": 0,
        "leopards": 164,
        "tcs": null
    },
    "kot islam": {
        "official": "KOT ISLAM",
        "trax": 361,
        "leopards": 930,
        "tcs": null
    },
    "kot ghulam muhammad": {
        "official": "KOT GHULAM MUHAMMAD",
        "trax": 0,
        "leopards": 0,
        "tcs": "KOT GHULAM MUHD"
    },
    "kot ghulam mohd": {
        "official": "KOT GHULAM MOHD",
        "trax": 360,
        "leopards": 994,
        "tcs": "KOT GHULAM MUHD"
    },
    "kot fateh khan": {
        "official": "KOT FATEH KHAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kot digee": {
        "official": "KOT DIGEE",
        "trax": 0,
        "leopards": 676,
        "tcs": null
    },
    "kot deji": {
        "official": "KOT DEJI",
        "trax": 0,
        "leopards": 1346,
        "tcs": null
    },
    "kot chutta": {
        "official": "KOT CHUTTA",
        "trax": 349,
        "leopards": 0,
        "tcs": "KOT CHUTTA"
    },
    "kot chandnan": {
        "official": "KOT CHANDNAN",
        "trax": 0,
        "leopards": 951,
        "tcs": null
    },
    "kot banglo": {
        "official": "KOT BANGLO",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kot adu": {
        "official": "KOT ADU",
        "trax": 216,
        "leopards": 747,
        "tcs": "KOT ADDU"
    },
    "kot addu": {
        "official": "KOT ADDU",
        "trax": 216,
        "leopards": 747,
        "tcs": "KOT ADDU"
    },
    "kot abdul malik": {
        "official": "KOT ABDUL MALIK",
        "trax": 0,
        "leopards": 809,
        "tcs": "KOT ABDUL MALIK"
    },
    "kohri (ajk)": {
        "official": "KOHRI (AJK)",
        "trax": 0,
        "leopards": 1059,
        "tcs": null
    },
    "kohilu": {
        "official": "KOHILU",
        "trax": 0,
        "leopards": 0,
        "tcs": "KOHILU"
    },
    "kohat": {
        "official": "KOHAT",
        "trax": 215,
        "leopards": 724,
        "tcs": "KOHAT"
    },
    "kml via ccw": {
        "official": "KML VIA CCW",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kingra mor": {
        "official": "KINGRA MOR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "khyber": {
        "official": "KHYBER",
        "trax": 211,
        "leopards": 0,
        "tcs": null
    },
    "khwazalhila": {
        "official": "KHWAZALHILA",
        "trax": 319,
        "leopards": 0,
        "tcs": "KHAZAKHELA"
    },
    "khuzdar": {
        "official": "KHUZDAR",
        "trax": 0,
        "leopards": 1152,
        "tcs": "KHUZDAR"
    },
    "khushab": {
        "official": "KHUSHAB",
        "trax": 214,
        "leopards": 516,
        "tcs": "KHUSHAB"
    },
    "khurrianwala": {
        "official": "KHURRIANWALA",
        "trax": 213,
        "leopards": 323,
        "tcs": null
    },
    "khuratta (ajk)": {
        "official": "KHURATTA (AJK)",
        "trax": 0,
        "leopards": 772,
        "tcs": null
    },
    "khunda": {
        "official": "KHUNDA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "khuiratta": {
        "official": "KHUIRATTA",
        "trax": 0,
        "leopards": 772,
        "tcs": "KHUIRATTA"
    },
    "khudian khas": {
        "official": "KHUDIAN KHAS",
        "trax": 509,
        "leopards": 0,
        "tcs": null
    },
    "khuddian": {
        "official": "KHUDDIAN",
        "trax": 509,
        "leopards": 0,
        "tcs": null
    },
    "khota": {
        "official": "KHOTA",
        "trax": 0,
        "leopards": 1367,
        "tcs": null
    },
    "khoski": {
        "official": "KHOSKI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "khorra": {
        "official": "KHORRA",
        "trax": 0,
        "leopards": 515,
        "tcs": null
    },
    "khonazai": {
        "official": "KHONAZAI",
        "trax": 0,
        "leopards": 0,
        "tcs": "KHONAZAI"
    },
    "khoi ratta": {
        "official": "KHOI RATTA",
        "trax": 2073,
        "leopards": 0,
        "tcs": "KHUIRATTA"
    },
    "khoaza khaila": {
        "official": "KHOAZA KHAILA",
        "trax": 0,
        "leopards": 0,
        "tcs": "KHAZAKHELA"
    },
    "khipro": {
        "official": "KHIPRO",
        "trax": 0,
        "leopards": 993,
        "tcs": "KHIPRO"
    },
    "khidar wala": {
        "official": "KHIDAR WALA",
        "trax": 0,
        "leopards": 1251,
        "tcs": "KHIDDER WALA"
    },
    "khichiwala": {
        "official": "KHICHIWALA",
        "trax": 212,
        "leopards": 0,
        "tcs": null
    },
    "khi warehouse": {
        "official": "KHI WAREHOUSE",
        "trax": 0,
        "leopards": 0,
        "tcs": "KHI WAREHOUSE"
    },
    "khi gen heavy": {
        "official": "KHI GEN HEAVY",
        "trax": 0,
        "leopards": 0,
        "tcs": "KHI GEN HEAVY"
    },
    "khewra": {
        "official": "KHEWRA",
        "trax": 0,
        "leopards": 722,
        "tcs": "KHEWRA DANDOT"
    },
    "khaur": {
        "official": "KHAUR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "khas behaal": {
        "official": "KHAS BEHAAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kharota syedan": {
        "official": "KHAROTA SYEDAN",
        "trax": 430,
        "leopards": 0,
        "tcs": null
    },
    "kharmang": {
        "official": "KHARMANG",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kharian cantt": {
        "official": "KHARIAN CANTT",
        "trax": 210,
        "leopards": 702,
        "tcs": "KHARIAN CANTT"
    },
    "kharian": {
        "official": "KHARIAN",
        "trax": 210,
        "leopards": 702,
        "tcs": "KHARIAN"
    },
    "khari sharif": {
        "official": "KHARI SHARIF",
        "trax": 412,
        "leopards": 0,
        "tcs": null
    },
    "kharan": {
        "official": "KHARAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "KHARAN"
    },
    "khar (batkhela)": {
        "official": "KHAR (BATKHELA)",
        "trax": 0,
        "leopards": 129,
        "tcs": "BATKHELA"
    },
    "khar (bajore ag": {
        "official": "KHAR (BAJORE AG",
        "trax": 0,
        "leopards": 1407,
        "tcs": "BAJAUR"
    },
    "khaplu": {
        "official": "KHAPLU",
        "trax": 0,
        "leopards": 0,
        "tcs": "KHAPLU"
    },
    "khanqa sharif": {
        "official": "KHANQA SHARIF",
        "trax": 0,
        "leopards": 0,
        "tcs": "KHANQA SHARIF"
    },
    "khanpur shomali": {
        "official": "KHANPUR SHOMALI",
        "trax": 0,
        "leopards": 1074,
        "tcs": null
    },
    "khanpur meher": {
        "official": "KHANPUR MEHER",
        "trax": 429,
        "leopards": 1010,
        "tcs": "KHANPUR MAHER"
    },
    "khanpur": {
        "official": "KHANPUR",
        "trax": 0,
        "leopards": 697,
        "tcs": "KHANPUR"
    },
    "khanka dogran": {
        "official": "KHANKA DOGRAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "khanewal": {
        "official": "KHANEWAL",
        "trax": 209,
        "leopards": 683,
        "tcs": "KHANEWAL"
    },
    "khanabad (ajk)": {
        "official": "KHANABAD (AJK)",
        "trax": 0,
        "leopards": 274,
        "tcs": null
    },
    "khan pur distt.": {
        "official": "KHAN PUR DISTT.",
        "trax": 208,
        "leopards": 1342,
        "tcs": null
    },
    "khan pur (chakwal)": {
        "official": "KHAN PUR (CHAKWAL)",
        "trax": 2049,
        "leopards": 0,
        "tcs": null
    },
    "khan ka sharif": {
        "official": "KHAN KA SHARIF",
        "trax": 0,
        "leopards": 1306,
        "tcs": null
    },
    "khan garh": {
        "official": "KHAN GARH",
        "trax": 492,
        "leopards": 0,
        "tcs": "KHAN GARH"
    },
    "khan gah dogran": {
        "official": "KHAN GAH DOGRAN",
        "trax": 0,
        "leopards": 1290,
        "tcs": null
    },
    "khan bela": {
        "official": "KHAN BELA",
        "trax": 207,
        "leopards": 855,
        "tcs": "KHAN BELA"
    },
    "khaliq abad (ajk)": {
        "official": "KHALIQ ABAD (AJK)",
        "trax": 0,
        "leopards": 980,
        "tcs": null
    },
    "khalabat sector": {
        "official": "KHALABAT SECTOR",
        "trax": 428,
        "leopards": 456,
        "tcs": null
    },
    "khairpur tamewali": {
        "official": "KHAIRPUR TAMEWALI",
        "trax": 206,
        "leopards": 0,
        "tcs": "KHAIR PUR TAMIANWALI"
    },
    "khairpur nathan": {
        "official": "KHAIRPUR NATHAN",
        "trax": 189,
        "leopards": 826,
        "tcs": "KHAIRPUR NATHAN"
    },
    "khairpur mirs": {
        "official": "KHAIRPUR MIRS",
        "trax": 205,
        "leopards": 673,
        "tcs": null
    },
    "khairpur": {
        "official": "KHAIRPUR",
        "trax": 502,
        "leopards": 9013,
        "tcs": "KHAIRPUR"
    },
    "khairabad": {
        "official": "KHAIRABAD",
        "trax": 468,
        "leopards": 539,
        "tcs": null
    },
    "khair pur meeru": {
        "official": "KHAIR PUR MEERU",
        "trax": 205,
        "leopards": 673,
        "tcs": null
    },
    "khair pur": {
        "official": "KHAIR PUR",
        "trax": 0,
        "leopards": 9013,
        "tcs": "KHAIRPUR"
    },
    "khaipur tamewal": {
        "official": "KHAIPUR TAMEWAL",
        "trax": 0,
        "leopards": 0,
        "tcs": "KHAIPUR TAMEWAL"
    },
    "khaipur mirs": {
        "official": "KHAIPUR MIRS",
        "trax": 205,
        "leopards": 673,
        "tcs": null
    },
    "khaigala (ajk)": {
        "official": "KHAIGALA (AJK)",
        "trax": 2080,
        "leopards": 1187,
        "tcs": null
    },
    "khadro": {
        "official": "KHADRO",
        "trax": 929,
        "leopards": 1095,
        "tcs": null
    },
    "khad gujran (ajk)": {
        "official": "KHAD GUJRAN (AJK)",
        "trax": 0,
        "leopards": 771,
        "tcs": null
    },
    "khabeki": {
        "official": "KHABEKI",
        "trax": 0,
        "leopards": 513,
        "tcs": null
    },
    "khaal": {
        "official": "KHAAL",
        "trax": 0,
        "leopards": 1406,
        "tcs": null
    },
    "keris": {
        "official": "KERIS",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kcp colony": {
        "official": "KCP COLONY",
        "trax": 1496,
        "leopards": 0,
        "tcs": null
    },
    "katlang": {
        "official": "KATLANG",
        "trax": 455,
        "leopards": 910,
        "tcs": "KATLANG"
    },
    "kathore": {
        "official": "KATHORE",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "katha sagraal": {
        "official": "KATHA SAGRAAL",
        "trax": 2400,
        "leopards": 0,
        "tcs": null
    },
    "kasur": {
        "official": "KASUR",
        "trax": 0,
        "leopards": 670,
        "tcs": "KASUR"
    },
    "kassowal": {
        "official": "KASSOWAL",
        "trax": 449,
        "leopards": 0,
        "tcs": "KASOWAL"
    },
    "kashmore": {
        "official": "KASHMORE",
        "trax": 0,
        "leopards": 0,
        "tcs": "KASHMORE"
    },
    "kashmoor": {
        "official": "KASHMOOR",
        "trax": 203,
        "leopards": 1232,
        "tcs": "KASHMORE"
    },
    "kashmir point": {
        "official": "KASHMIR POINT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "karuli": {
        "official": "KARULI",
        "trax": 2042,
        "leopards": 0,
        "tcs": null
    },
    "karor pakka": {
        "official": "KAROR PAKKA",
        "trax": 191,
        "leopards": 102,
        "tcs": "KAROR PAKKA"
    },
    "karor lal esan": {
        "official": "KAROR LAL ESAN",
        "trax": 488,
        "leopards": 846,
        "tcs": "KAROR LALESAN"
    },
    "karor lal easan": {
        "official": "KAROR LAL EASAN",
        "trax": 488,
        "leopards": 846,
        "tcs": "KAROR LALESAN"
    },
    "karoondi": {
        "official": "KAROONDI",
        "trax": 0,
        "leopards": 1094,
        "tcs": null
    },
    "karkra town (ajk)": {
        "official": "KARKRA TOWN (AJK)",
        "trax": 0,
        "leopards": 273,
        "tcs": null
    },
    "kark": {
        "official": "KARK",
        "trax": 0,
        "leopards": 666,
        "tcs": "KARAK"
    },
    "karianwala": {
        "official": "KARIANWALA",
        "trax": 521,
        "leopards": 493,
        "tcs": null
    },
    "kariala jalib": {
        "official": "KARIALA JALIB",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "karam pur": {
        "official": "KARAM PUR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "karak": {
        "official": "KARAK",
        "trax": 0,
        "leopards": 666,
        "tcs": "KARAK"
    },
    "karachi": {
        "official": "KARACHI",
        "trax": 202,
        "leopards": 592,
        "tcs": "KARACHI"
    },
    "kapco power plant": {
        "official": "KAPCO POWER PLANT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kanyal (ajk)": {
        "official": "KANYAL (AJK)",
        "trax": 0,
        "leopards": 272,
        "tcs": null
    },
    "kanyal": {
        "official": "KANYAL",
        "trax": 0,
        "leopards": 371,
        "tcs": null
    },
    "kanoha": {
        "official": "KANOHA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kanju": {
        "official": "KANJU",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kangra": {
        "official": "KANGRA",
        "trax": 1992,
        "leopards": 455,
        "tcs": null
    },
    "kanganpur": {
        "official": "KANGANPUR",
        "trax": 508,
        "leopards": 1137,
        "tcs": "KANGAN PUR"
    },
    "kandiaro": {
        "official": "KANDIARO",
        "trax": 201,
        "leopards": 675,
        "tcs": "KANDYARO"
    },
    "kandiari": {
        "official": "KANDIARI",
        "trax": 0,
        "leopards": 0,
        "tcs": "KANDIARI"
    },
    "kandhkot": {
        "official": "KANDHKOT",
        "trax": 200,
        "leopards": 0,
        "tcs": "KANDH KOT"
    },
    "kandan siyan": {
        "official": "KANDAN SIYAN",
        "trax": 2179,
        "leopards": 0,
        "tcs": null
    },
    "kana nau": {
        "official": "KANA NAU",
        "trax": 0,
        "leopards": 0,
        "tcs": "KANA NAU"
    },
    "kamrotty (ajk)": {
        "official": "KAMROTTY (AJK)",
        "trax": 0,
        "leopards": 769,
        "tcs": null
    },
    "kamrial": {
        "official": "KAMRIAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kamra": {
        "official": "KAMRA",
        "trax": 199,
        "leopards": 51,
        "tcs": "KAMRA"
    },
    "kamoki": {
        "official": "KAMOKI",
        "trax": 198,
        "leopards": 403,
        "tcs": "KAMOKE"
    },
    "kamoke": {
        "official": "KAMOKE",
        "trax": 198,
        "leopards": 403,
        "tcs": "KAMOKE"
    },
    "kamir": {
        "official": "KAMIR",
        "trax": 197,
        "leopards": 0,
        "tcs": "KAMEER"
    },
    "kamer mishani": {
        "official": "KAMER MISHANI",
        "trax": 196,
        "leopards": 0,
        "tcs": "KAMER MOSHANI"
    },
    "kamber ali khan": {
        "official": "KAMBER ALI KHAN",
        "trax": 0,
        "leopards": 825,
        "tcs": null
    },
    "kamber": {
        "official": "KAMBER",
        "trax": 0,
        "leopards": 825,
        "tcs": null
    },
    "kambar ali khan": {
        "official": "KAMBAR ALI KHAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "KAMBAR ALI KHAN"
    },
    "kamalia": {
        "official": "KAMALIA",
        "trax": 195,
        "leopards": 252,
        "tcs": "KAMALIA"
    },
    "kalor kot": {
        "official": "KALOR KOT",
        "trax": 531,
        "leopards": 950,
        "tcs": "KALOOR KOT"
    },
    "kallar syeden": {
        "official": "KALLAR SYEDEN",
        "trax": 465,
        "leopards": 368,
        "tcs": "KALAR SYEDAN"
    },
    "kallar saydian": {
        "official": "KALLAR SAYDIAN",
        "trax": 465,
        "leopards": 368,
        "tcs": "KALAR SYEDAN"
    },
    "kallar kahar": {
        "official": "KALLAR KAHAR",
        "trax": 194,
        "leopards": 0,
        "tcs": "KALAR KAHAR"
    },
    "kali mitti": {
        "official": "KALI MITTI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kalhoro": {
        "official": "KALHORO",
        "trax": 0,
        "leopards": 1119,
        "tcs": null
    },
    "kalat": {
        "official": "KALAT",
        "trax": 0,
        "leopards": 0,
        "tcs": "KALAT"
    },
    "kalaswala": {
        "official": "KALASWALA",
        "trax": 1418,
        "leopards": 1132,
        "tcs": null
    },
    "kalaskay": {
        "official": "KALASKAY",
        "trax": 0,
        "leopards": 0,
        "tcs": "KALASKAY"
    },
    "kalary more(ajk)": {
        "official": "KALARY MORE(AJK)",
        "trax": 0,
        "leopards": 161,
        "tcs": null
    },
    "kalar kahar": {
        "official": "KALAR KAHAR",
        "trax": 0,
        "leopards": 214,
        "tcs": "KALAR KAHAR"
    },
    "kalah": {
        "official": "KALAH",
        "trax": 0,
        "leopards": 768,
        "tcs": null
    },
    "kalabat": {
        "official": "KALABAT",
        "trax": 0,
        "leopards": 1366,
        "tcs": null
    },
    "kala shah kaku": {
        "official": "KALA SHAH KAKU",
        "trax": 469,
        "leopards": 808,
        "tcs": "KALA SHAH KAKU"
    },
    "kala gujran": {
        "official": "KALA GUJRAN",
        "trax": 2068,
        "leopards": 0,
        "tcs": null
    },
    "kala bagh (p.a.": {
        "official": "KALA BAGH (P.A.",
        "trax": 0,
        "leopards": 12,
        "tcs": "KALA BAGH"
    },
    "kala bagh": {
        "official": "KALA BAGH",
        "trax": 193,
        "leopards": 949,
        "tcs": "KALA BAGH"
    },
    "kakul": {
        "official": "KAKUL",
        "trax": 0,
        "leopards": 0,
        "tcs": "KAKUL"
    },
    "kakrali": {
        "official": "KAKRALI",
        "trax": 2055,
        "leopards": 0,
        "tcs": null
    },
    "kakool ( pma)": {
        "official": "KAKOOL ( PMA)",
        "trax": 0,
        "leopards": 11,
        "tcs": null
    },
    "kakki": {
        "official": "KAKKI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kairpur nathin shah": {
        "official": "KAIRPUR NATHIN SHAH",
        "trax": 0,
        "leopards": 0,
        "tcs": "KHAIRPUR NATHAN"
    },
    "kahuta": {
        "official": "KAHUTA",
        "trax": 192,
        "leopards": 1215,
        "tcs": "KAHOTA"
    },
    "kahror pakka": {
        "official": "KAHROR PAKKA",
        "trax": 191,
        "leopards": 102,
        "tcs": null
    },
    "kahna nao": {
        "official": "KAHNA NAO",
        "trax": 0,
        "leopards": 807,
        "tcs": null
    },
    "kahauta": {
        "official": "KAHAUTA",
        "trax": 0,
        "leopards": 0,
        "tcs": "KAHOTA"
    },
    "kadhan": {
        "official": "KADHAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kadhala (ajk)": {
        "official": "KADHALA (AJK)",
        "trax": 0,
        "leopards": 160,
        "tcs": null
    },
    "kachura": {
        "official": "KACHURA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "kacha khho": {
        "official": "KACHA KHHO",
        "trax": 395,
        "leopards": 0,
        "tcs": "KACHA KHO"
    },
    "kabirwala": {
        "official": "KABIRWALA",
        "trax": 190,
        "leopards": 688,
        "tcs": "KABIR WALA"
    },
    "kabir wala": {
        "official": "KABIR WALA",
        "trax": 190,
        "leopards": 688,
        "tcs": "KABIR WALA"
    },
    "kabal": {
        "official": "KABAL",
        "trax": 461,
        "leopards": 0,
        "tcs": "KABAL"
    },
    "jutana": {
        "official": "JUTANA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "jundathi (ajk)": {
        "official": "JUNDATHI (AJK)",
        "trax": 0,
        "leopards": 1186,
        "tcs": null
    },
    "jund": {
        "official": "JUND",
        "trax": 426,
        "leopards": 0,
        "tcs": null
    },
    "juna (ajk)": {
        "official": "JUNA (AJK)",
        "trax": 0,
        "leopards": 767,
        "tcs": null
    },
    "juglot": {
        "official": "JUGLOT",
        "trax": 0,
        "leopards": 2510,
        "tcs": null
    },
    "juddo": {
        "official": "JUDDO",
        "trax": 363,
        "leopards": 0,
        "tcs": null
    },
    "jor (bunner)": {
        "official": "JOR (BUNNER)",
        "trax": 0,
        "leopards": 969,
        "tcs": null
    },
    "johi": {
        "official": "JOHI",
        "trax": 0,
        "leopards": 0,
        "tcs": "JOHI"
    },
    "jiwani": {
        "official": "JIWANI",
        "trax": 0,
        "leopards": 1162,
        "tcs": null
    },
    "jinnahabad": {
        "official": "JINNAHABAD",
        "trax": 0,
        "leopards": 10,
        "tcs": null
    },
    "jhumra city": {
        "official": "JHUMRA CITY",
        "trax": 121,
        "leopards": 324,
        "tcs": "CHAK JHUMRA"
    },
    "jhugian": {
        "official": "JHUGIAN",
        "trax": 0,
        "leopards": 9,
        "tcs": null
    },
    "jhuddo": {
        "official": "JHUDDO",
        "trax": 0,
        "leopards": 0,
        "tcs": "JHUDO"
    },
    "jholanara (ajk)": {
        "official": "JHOLANARA (AJK)",
        "trax": 0,
        "leopards": 1185,
        "tcs": null
    },
    "jhol": {
        "official": "JHOL",
        "trax": 928,
        "leopards": 0,
        "tcs": "JHOL"
    },
    "jhoke utra": {
        "official": "JHOKE UTRA",
        "trax": 2167,
        "leopards": 0,
        "tcs": null
    },
    "jhelum": {
        "official": "JHELUM",
        "trax": 186,
        "leopards": 551,
        "tcs": "JHELUM"
    },
    "jhawarian": {
        "official": "JHAWARIAN",
        "trax": 2396,
        "leopards": 0,
        "tcs": "JAWARIAN"
    },
    "jhatla": {
        "official": "JHATLA",
        "trax": 2041,
        "leopards": 0,
        "tcs": null
    },
    "jhat pat": {
        "official": "JHAT PAT",
        "trax": 0,
        "leopards": 0,
        "tcs": "JHAT PAT"
    },
    "jharian": {
        "official": "JHARIAN",
        "trax": 0,
        "leopards": 1018,
        "tcs": null
    },
    "jhangi": {
        "official": "JHANGI",
        "trax": 2006,
        "leopards": 0,
        "tcs": null
    },
    "jhang sadar": {
        "official": "JHANG SADAR",
        "trax": 0,
        "leopards": 1446,
        "tcs": "JHANG"
    },
    "jhang": {
        "official": "JHANG",
        "trax": 188,
        "leopards": 541,
        "tcs": "JHANG"
    },
    "jhamra": {
        "official": "JHAMRA",
        "trax": 2040,
        "leopards": 0,
        "tcs": null
    },
    "jhajra west": {
        "official": "JHAJRA WEST",
        "trax": 0,
        "leopards": 948,
        "tcs": null
    },
    "jhajra east": {
        "official": "JHAJRA EAST",
        "trax": 0,
        "leopards": 947,
        "tcs": null
    },
    "jhabran mandi": {
        "official": "JHABRAN MANDI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "jetha bhutta": {
        "official": "JETHA BHUTTA",
        "trax": 187,
        "leopards": 0,
        "tcs": null
    },
    "jehlum": {
        "official": "JEHLUM",
        "trax": 186,
        "leopards": 598,
        "tcs": "JHELUM"
    },
    "jehangira khairabad": {
        "official": "JEHANGIRA KHAIRABAD",
        "trax": 176,
        "leopards": 536,
        "tcs": null
    },
    "jehangira": {
        "official": "JEHANGIRA",
        "trax": 176,
        "leopards": 536,
        "tcs": "JHANGIRA"
    },
    "jaunpur": {
        "official": "JAUNPUR",
        "trax": 0,
        "leopards": 854,
        "tcs": null
    },
    "jauhrabad": {
        "official": "JAUHRABAD",
        "trax": 185,
        "leopards": 501,
        "tcs": "JOUHARABAD"
    },
    "jauharabad": {
        "official": "JAUHARABAD",
        "trax": 185,
        "leopards": 501,
        "tcs": "JOUHARABAD"
    },
    "jatoi": {
        "official": "JATOI",
        "trax": 184,
        "leopards": 0,
        "tcs": "JATOI"
    },
    "jatlan (ajk)": {
        "official": "JATLAN (AJK)",
        "trax": 425,
        "leopards": 979,
        "tcs": null
    },
    "jasial": {
        "official": "JASIAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "jarwar": {
        "official": "JARWAR",
        "trax": 0,
        "leopards": 1009,
        "tcs": "JARWAR"
    },
    "jaranwala": {
        "official": "JARANWALA",
        "trax": 0,
        "leopards": 499,
        "tcs": "JARANWALA"
    },
    "jandia sher khan": {
        "official": "JANDIA SHER KHAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "jand wala": {
        "official": "JAND WALA",
        "trax": 0,
        "leopards": 0,
        "tcs": "JAND WALA"
    },
    "jand nagar": {
        "official": "JAND NAGAR",
        "trax": 0,
        "leopards": 365,
        "tcs": "JAND"
    },
    "jand": {
        "official": "JAND",
        "trax": 3557,
        "leopards": 1204,
        "tcs": "JAND"
    },
    "jamshoro": {
        "official": "JAMSHORO",
        "trax": 182,
        "leopards": 479,
        "tcs": "JAMSHORO"
    },
    "jamshero": {
        "official": "JAMSHERO",
        "trax": 182,
        "leopards": 479,
        "tcs": "JAMSHORO"
    },
    "jampur": {
        "official": "JAMPUR",
        "trax": 181,
        "leopards": 298,
        "tcs": "JAMPUR"
    },
    "jamke cheema": {
        "official": "JAMKE CHEEMA",
        "trax": 2177,
        "leopards": 0,
        "tcs": null
    },
    "jamesabad": {
        "official": "JAMESABAD",
        "trax": 359,
        "leopards": 0,
        "tcs": null
    },
    "jaman shah(surs": {
        "official": "JAMAN SHAH(SURS",
        "trax": 0,
        "leopards": 845,
        "tcs": null
    },
    "jamalpur": {
        "official": "JAMALPUR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "jamaldin wali": {
        "official": "JAMALDIN WALI",
        "trax": 0,
        "leopards": 0,
        "tcs": "JAMALDIN WALI"
    },
    "jalalpurpirwala": {
        "official": "JALALPURPIRWALA",
        "trax": 180,
        "leopards": 1308,
        "tcs": "JALALPURPIRWALA"
    },
    "jalalpur sharif": {
        "official": "JALALPUR SHARIF",
        "trax": 178,
        "leopards": 1148,
        "tcs": null
    },
    "jalalpur pirwala": {
        "official": "JALALPUR PIRWALA",
        "trax": 180,
        "leopards": 1308,
        "tcs": "JALALPURPIRWALA"
    },
    "jalalpur pirwal": {
        "official": "JALALPUR PIRWAL",
        "trax": 180,
        "leopards": 1308,
        "tcs": "JALALPURPIRWALA"
    },
    "jalalpur pir wala": {
        "official": "JALALPUR PIR WALA",
        "trax": 180,
        "leopards": 1308,
        "tcs": "JALALPURPIRWALA"
    },
    "jalalpur jattan": {
        "official": "JALALPUR JATTAN",
        "trax": 179,
        "leopards": 488,
        "tcs": "JALALPUR JATTAN"
    },
    "jalal pur jattan": {
        "official": "JALAL PUR JATTAN",
        "trax": 179,
        "leopards": 488,
        "tcs": "JALALPUR JATTAN"
    },
    "jalal pur bhatt": {
        "official": "JALAL PUR BHATT",
        "trax": 1394,
        "leopards": 402,
        "tcs": "JALAL PUR BHATTIAN"
    },
    "jalabad (ajk)": {
        "official": "JALABAD (AJK)",
        "trax": 0,
        "leopards": 1058,
        "tcs": null
    },
    "jaiserwala": {
        "official": "JAISERWALA",
        "trax": 0,
        "leopards": 284,
        "tcs": null
    },
    "jahanian": {
        "official": "JAHANIAN",
        "trax": 177,
        "leopards": 686,
        "tcs": "JHANIAN"
    },
    "jahania": {
        "official": "JAHANIA",
        "trax": 177,
        "leopards": 686,
        "tcs": "JHANIAN"
    },
    "jaglot": {
        "official": "JAGLOT",
        "trax": 0,
        "leopards": 0,
        "tcs": "JAGLOT"
    },
    "jaffar mandi": {
        "official": "JAFFAR MANDI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "jafarabad": {
        "official": "JAFARABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "jacobabad": {
        "official": "JACOBABAD",
        "trax": 175,
        "leopards": 1324,
        "tcs": "JACOBABAD"
    },
    "jacababad": {
        "official": "JACABABAD",
        "trax": 175,
        "leopards": 1324,
        "tcs": "JACOBABAD"
    },
    "jabbi shah dilawar": {
        "official": "JABBI SHAH DILAWAR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "jabbi": {
        "official": "JABBI",
        "trax": 2397,
        "leopards": 0,
        "tcs": null
    },
    "islamkot": {
        "official": "ISLAMKOT",
        "trax": 0,
        "leopards": 0,
        "tcs": "ISLAMKOT"
    },
    "islamabad": {
        "official": "ISLAMABAD",
        "trax": 174,
        "leopards": 486,
        "tcs": "ISLAMABAD"
    },
    "islam pura jabb": {
        "official": "ISLAM PURA JABB",
        "trax": 0,
        "leopards": 364,
        "tcs": null
    },
    "islam headworks": {
        "official": "ISLAM HEADWORKS",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "islam garh(ajk)": {
        "official": "ISLAM GARH(AJK)",
        "trax": 0,
        "leopards": 271,
        "tcs": null
    },
    "iskandarabad": {
        "official": "ISKANDARABAD",
        "trax": 173,
        "leopards": 0,
        "tcs": "ISKANDARABAD"
    },
    "iqbal nagar": {
        "official": "IQBAL NAGAR",
        "trax": 450,
        "leopards": 0,
        "tcs": "IQBAL NAGAR"
    },
    "iqbal abad": {
        "official": "IQBAL ABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": "IQBALABAD"
    },
    "ikhlas (dist. a": {
        "official": "IKHLAS (DIST. A",
        "trax": 0,
        "leopards": 1213,
        "tcs": null
    },
    "iikhlas": {
        "official": "IIKHLAS",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "hyderabad": {
        "official": "HYDERABAD",
        "trax": 172,
        "leopards": 475,
        "tcs": "HYDERABAD"
    },
    "hyder abad thal": {
        "official": "HYDER ABAD THAL",
        "trax": 0,
        "leopards": 146,
        "tcs": null
    },
    "hussainabad": {
        "official": "HUSSAINABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "husri": {
        "official": "HUSRI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "hurnamaira": {
        "official": "HURNAMAIRA",
        "trax": 2079,
        "leopards": 0,
        "tcs": null
    },
    "hunza nagar": {
        "official": "HUNZA NAGAR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "hunza": {
        "official": "HUNZA",
        "trax": 0,
        "leopards": 0,
        "tcs": "HUNZA"
    },
    "humak": {
        "official": "HUMAK",
        "trax": 0,
        "leopards": 0,
        "tcs": "HUMAK"
    },
    "hujra shah mukeem": {
        "official": "HUJRA SHAH MUKEEM",
        "trax": 171,
        "leopards": 1127,
        "tcs": "HUJRA SHAMUQEEM"
    },
    "hujra shah muke": {
        "official": "HUJRA SHAH MUKE",
        "trax": 171,
        "leopards": 1127,
        "tcs": "HUJRA SHAMUQEEM"
    },
    "hub chowki": {
        "official": "HUB CHOWKI",
        "trax": 0,
        "leopards": 598,
        "tcs": "HUB"
    },
    "hub": {
        "official": "HUB",
        "trax": 0,
        "leopards": 598,
        "tcs": "HUB"
    },
    "houston texas": {
        "official": "HOUSTON TEXAS",
        "trax": 0,
        "leopards": 0,
        "tcs": "KARACHI"
    },
    "holar (ajk)": {
        "official": "HOLAR (AJK)",
        "trax": 0,
        "leopards": 766,
        "tcs": null
    },
    "hingorno": {
        "official": "HINGORNO",
        "trax": 0,
        "leopards": 991,
        "tcs": null
    },
    "hhh": {
        "official": "HHH",
        "trax": 0,
        "leopards": 0,
        "tcs": "HHH"
    },
    "hera (chak 134": {
        "official": "HERA (CHAK 134",
        "trax": 0,
        "leopards": 844,
        "tcs": null
    },
    "head rajkan": {
        "official": "HEAD RAJKAN",
        "trax": 2173,
        "leopards": 0,
        "tcs": null
    },
    "head office khi": {
        "official": "HEAD OFFICE KHI",
        "trax": 0,
        "leopards": 0,
        "tcs": "HEAD OFFICE KHI"
    },
    "head office": {
        "official": "HEAD OFFICE",
        "trax": 0,
        "leopards": 0,
        "tcs": "HEAD OFFICE"
    },
    "head marala": {
        "official": "HEAD MARALA",
        "trax": 386,
        "leopards": 0,
        "tcs": null
    },
    "head baloki roa": {
        "official": "HEAD BALOKI ROA",
        "trax": 0,
        "leopards": 137,
        "tcs": null
    },
    "hazro": {
        "official": "HAZRO",
        "trax": 352,
        "leopards": 50,
        "tcs": "HAZRO"
    },
    "hazoor pur": {
        "official": "HAZOOR PUR",
        "trax": 0,
        "leopards": 1267,
        "tcs": null
    },
    "hazara university": {
        "official": "HAZARA UNIVERSITY",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "haya serai": {
        "official": "HAYA SERAI",
        "trax": 0,
        "leopards": 1405,
        "tcs": null
    },
    "havelian": {
        "official": "HAVELIAN",
        "trax": 366,
        "leopards": 453,
        "tcs": "HAVELLIAN"
    },
    "haveli lukha": {
        "official": "HAVELI LUKHA",
        "trax": 170,
        "leopards": 0,
        "tcs": "HAVELI LAKHA"
    },
    "haveli lakha": {
        "official": "HAVELI LAKHA",
        "trax": 170,
        "leopards": 0,
        "tcs": "HAVELI LAKHA"
    },
    "haveli bahadur shah": {
        "official": "HAVELI BAHADUR SHAH",
        "trax": 548,
        "leopards": 0,
        "tcs": null
    },
    "hatter": {
        "official": "HATTER",
        "trax": 0,
        "leopards": 0,
        "tcs": "HATTER"
    },
    "hattar ind. est": {
        "official": "HATTAR IND. EST",
        "trax": 367,
        "leopards": 452,
        "tcs": null
    },
    "hatiyan": {
        "official": "HATIYAN",
        "trax": 354,
        "leopards": 0,
        "tcs": null
    },
    "hatia bala": {
        "official": "HATIA BALA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "hati": {
        "official": "HATI",
        "trax": 0,
        "leopards": 824,
        "tcs": null
    },
    "hassan abdal": {
        "official": "HASSAN ABDAL",
        "trax": 168,
        "leopards": 1446,
        "tcs": "HASSAN ABDAL"
    },
    "hasilpur": {
        "official": "HASILPUR",
        "trax": 169,
        "leopards": 1438,
        "tcs": "HASILPUR"
    },
    "hasil pur": {
        "official": "HASIL PUR",
        "trax": 169,
        "leopards": 1438,
        "tcs": "HASILPUR"
    },
    "haseeb waqas mills": {
        "official": "HASEEB WAQAS MILLS",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "hasan abdal": {
        "official": "HASAN ABDAL",
        "trax": 168,
        "leopards": 1446,
        "tcs": "HASSAN ABDAL"
    },
    "harunabad": {
        "official": "HARUNABAD",
        "trax": 167,
        "leopards": 85,
        "tcs": null
    },
    "haroonabad": {
        "official": "HAROONABAD",
        "trax": 167,
        "leopards": 85,
        "tcs": "HAROONABAD"
    },
    "harnoli": {
        "official": "HARNOLI",
        "trax": 539,
        "leopards": 0,
        "tcs": "HARNOULI"
    },
    "harno": {
        "official": "HARNO",
        "trax": 0,
        "leopards": 7,
        "tcs": null
    },
    "harnal": {
        "official": "HARNAL",
        "trax": 0,
        "leopards": 363,
        "tcs": null
    },
    "harnai": {
        "official": "HARNAI",
        "trax": 0,
        "leopards": 1336,
        "tcs": "HARNAI"
    },
    "haripur": {
        "official": "HARIPUR",
        "trax": 165,
        "leopards": 447,
        "tcs": "HARIPUR"
    },
    "hari pur": {
        "official": "HARI PUR",
        "trax": 165,
        "leopards": 447,
        "tcs": "HARIPUR"
    },
    "hari ghel": {
        "official": "HARI GHEL",
        "trax": 0,
        "leopards": 1056,
        "tcs": null
    },
    "hari chand": {
        "official": "HARI CHAND",
        "trax": 0,
        "leopards": 1378,
        "tcs": null
    },
    "harappa station": {
        "official": "HARAPPA STATION",
        "trax": 164,
        "leopards": 250,
        "tcs": "HARRAPA"
    },
    "harappa": {
        "official": "HARAPPA",
        "trax": 0,
        "leopards": 0,
        "tcs": "HARRAPA"
    },
    "haranpur": {
        "official": "HARANPUR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "hangu": {
        "official": "HANGU",
        "trax": 163,
        "leopards": 725,
        "tcs": "HANGU"
    },
    "hamid pur (ajk)": {
        "official": "HAMID PUR (AJK)",
        "trax": 0,
        "leopards": 270,
        "tcs": null
    },
    "halani": {
        "official": "HALANI",
        "trax": 919,
        "leopards": 1335,
        "tcs": "HALANI CITY"
    },
    "hala new": {
        "official": "HALA NEW",
        "trax": 162,
        "leopards": 478,
        "tcs": "HALA"
    },
    "hala": {
        "official": "HALA",
        "trax": 162,
        "leopards": 478,
        "tcs": "HALA"
    },
    "hakim abad": {
        "official": "HAKIM ABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "hajiwala": {
        "official": "HAJIWALA",
        "trax": 0,
        "leopards": 492,
        "tcs": null
    },
    "hajira (ajk)": {
        "official": "HAJIRA (AJK)",
        "trax": 2078,
        "leopards": 1184,
        "tcs": null
    },
    "hajira": {
        "official": "HAJIRA",
        "trax": 0,
        "leopards": 0,
        "tcs": "HAJIRA"
    },
    "hajiabad (ajk)": {
        "official": "HAJIABAD (AJK)",
        "trax": 0,
        "leopards": 765,
        "tcs": null
    },
    "haji abad": {
        "official": "HAJI ABAD",
        "trax": 0,
        "leopards": 1404,
        "tcs": null
    },
    "hafizwala": {
        "official": "HAFIZWALA",
        "trax": 0,
        "leopards": 0,
        "tcs": "HAFIZWALA"
    },
    "hafizabad": {
        "official": "HAFIZABAD",
        "trax": 161,
        "leopards": 401,
        "tcs": "HAFIZABAD"
    },
    "hadali": {
        "official": "HADALI",
        "trax": 160,
        "leopards": 0,
        "tcs": null
    },
    "habibullah colo": {
        "official": "HABIBULLAH COLO",
        "trax": 0,
        "leopards": 6,
        "tcs": null
    },
    "habibabad": {
        "official": "HABIBABAD",
        "trax": 0,
        "leopards": 2504,
        "tcs": null
    },
    "gurmani adda": {
        "official": "GURMANI ADDA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "gumbat": {
        "official": "GUMBAT",
        "trax": 0,
        "leopards": 734,
        "tcs": "GAMBAT"
    },
    "gulyana": {
        "official": "GULYANA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "gulpur (ajk)": {
        "official": "GULPUR (AJK)",
        "trax": 2072,
        "leopards": 764,
        "tcs": null
    },
    "guliana": {
        "official": "GULIANA",
        "trax": 2054,
        "leopards": 0,
        "tcs": null
    },
    "gulabad": {
        "official": "GULABAD",
        "trax": 0,
        "leopards": 127,
        "tcs": null
    },
    "gujrat": {
        "official": "GUJRAT",
        "trax": 159,
        "leopards": 426,
        "tcs": "GUJRAT"
    },
    "gujranwala": {
        "official": "GUJRANWALA",
        "trax": 158,
        "leopards": 399,
        "tcs": "GUJRANWALA"
    },
    "gujarpur": {
        "official": "GUJARPUR",
        "trax": 0,
        "leopards": 565,
        "tcs": null
    },
    "gujar khan": {
        "official": "GUJAR KHAN",
        "trax": 157,
        "leopards": 344,
        "tcs": "GUJARKHAN"
    },
    "guddu barrage": {
        "official": "GUDDU BARRAGE",
        "trax": 156,
        "leopards": 0,
        "tcs": "GUDDU"
    },
    "goth machi": {
        "official": "GOTH MACHI",
        "trax": 155,
        "leopards": 1230,
        "tcs": "MACHI GOTH"
    },
    "gondal": {
        "official": "GONDAL",
        "trax": 353,
        "leopards": 44,
        "tcs": null
    },
    "gomal universit": {
        "official": "GOMAL UNIVERSIT",
        "trax": 0,
        "leopards": 308,
        "tcs": null
    },
    "golpur": {
        "official": "GOLPUR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "golarchi": {
        "official": "GOLARCHI",
        "trax": 248,
        "leopards": 75,
        "tcs": "GOLARCHI"
    },
    "gojra muzaffrabad": {
        "official": "GOJRA MUZAFFRABAD",
        "trax": 374,
        "leopards": 0,
        "tcs": null
    },
    "gojra mandi bahauddin": {
        "official": "GOJRA MANDI BAHAUDDIN",
        "trax": 0,
        "leopards": 863,
        "tcs": null
    },
    "gojra": {
        "official": "GOJRA",
        "trax": 154,
        "leopards": 334,
        "tcs": "GOJRA"
    },
    "goi": {
        "official": "GOI",
        "trax": 0,
        "leopards": 763,
        "tcs": null
    },
    "goharabad": {
        "official": "GOHARABAD",
        "trax": 0,
        "leopards": 5,
        "tcs": null
    },
    "gogera": {
        "official": "GOGERA",
        "trax": 2441,
        "leopards": 502,
        "tcs": "BANGLOW GOGERA"
    },
    "girot": {
        "official": "GIROT",
        "trax": 153,
        "leopards": 0,
        "tcs": null
    },
    "gilgit(main city only)": {
        "official": "GILGIT(MAIN CITY ONLY)",
        "trax": 0,
        "leopards": 327,
        "tcs": "GILGIT"
    },
    "gilgit": {
        "official": "GILGIT",
        "trax": 3569,
        "leopards": 327,
        "tcs": "GILGIT"
    },
    "gidani": {
        "official": "GIDANI",
        "trax": 0,
        "leopards": 619,
        "tcs": null
    },
    "ghuman wala": {
        "official": "GHUMAN WALA",
        "trax": 0,
        "leopards": 407,
        "tcs": null
    },
    "ghulam ishaq un": {
        "official": "GHULAM ISHAQ UN",
        "trax": 0,
        "leopards": 1365,
        "tcs": null
    },
    "ghouspur": {
        "official": "GHOUSPUR",
        "trax": 0,
        "leopards": 0,
        "tcs": "GHOUS PUR"
    },
    "ghous pur": {
        "official": "GHOUS PUR",
        "trax": 925,
        "leopards": 2603,
        "tcs": "GHOUS PUR"
    },
    "ghour ghusti": {
        "official": "GHOUR GHUSTI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "ghotki": {
        "official": "GHOTKI",
        "trax": 152,
        "leopards": 1005,
        "tcs": "GHOTKI"
    },
    "ghori wala": {
        "official": "GHORI WALA",
        "trax": 2001,
        "leopards": 0,
        "tcs": null
    },
    "ghora gali": {
        "official": "GHORA GALI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "ghlotian": {
        "official": "GHLOTIAN",
        "trax": 2184,
        "leopards": 0,
        "tcs": null
    },
    "ghika gali": {
        "official": "GHIKA GALI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "ghazikot townsh": {
        "official": "GHAZIKOT TOWNSH",
        "trax": 0,
        "leopards": 892,
        "tcs": null
    },
    "ghazial": {
        "official": "GHAZIAL",
        "trax": 2039,
        "leopards": 0,
        "tcs": null
    },
    "ghaziabad": {
        "official": "GHAZIABAD",
        "trax": 0,
        "leopards": 249,
        "tcs": "GHAZI ABAD"
    },
    "ghazi": {
        "official": "GHAZI",
        "trax": 424,
        "leopards": 42,
        "tcs": null
    },
    "gharo": {
        "official": "GHARO",
        "trax": 1385,
        "leopards": 1420,
        "tcs": "GHARO"
    },
    "gharibwal cement": {
        "official": "GHARIBWAL CEMENT",
        "trax": 0,
        "leopards": 1147,
        "tcs": null
    },
    "gharibwal": {
        "official": "GHARIBWAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "gharial camp": {
        "official": "GHARIAL CAMP",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "ghar more": {
        "official": "GHAR MORE",
        "trax": 0,
        "leopards": 0,
        "tcs": "GARH MOR"
    },
    "ghalanay": {
        "official": "GHALANAY",
        "trax": 0,
        "leopards": 0,
        "tcs": "GHALANAY"
    },
    "ghakkar mandi": {
        "official": "GHAKKAR MANDI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "ghakar": {
        "official": "GHAKAR",
        "trax": 0,
        "leopards": 0,
        "tcs": "GHAKAR"
    },
    "gf": {
        "official": "GF",
        "trax": 0,
        "leopards": 0,
        "tcs": "GF"
    },
    "georgia": {
        "official": "GEORGIA",
        "trax": 0,
        "leopards": 0,
        "tcs": "KARACHI"
    },
    "gawadar": {
        "official": "GAWADAR",
        "trax": 0,
        "leopards": 594,
        "tcs": "GAWADAR"
    },
    "gatwala 199 / rb": {
        "official": "GATWALA 199 / RB",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "garih khairo": {
        "official": "GARIH KHAIRO",
        "trax": 0,
        "leopards": 823,
        "tcs": "GARI KHAIRO"
    },
    "garhmore": {
        "official": "GARHMORE",
        "trax": 552,
        "leopards": 0,
        "tcs": "GARH MOR"
    },
    "garhi yasin": {
        "official": "GARHI YASIN",
        "trax": 924,
        "leopards": 1333,
        "tcs": null
    },
    "garhi yaseen": {
        "official": "GARHI YASEEN",
        "trax": 924,
        "leopards": 1333,
        "tcs": "GARI YASIN"
    },
    "garhi mori": {
        "official": "GARHI MORI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "garhi habibullah": {
        "official": "GARHI HABIBULLAH",
        "trax": 0,
        "leopards": 891,
        "tcs": null
    },
    "garhi doulat za": {
        "official": "GARHI DOULAT ZA",
        "trax": 0,
        "leopards": 904,
        "tcs": null
    },
    "garhi dopatta": {
        "official": "GARHI DOPATTA",
        "trax": 372,
        "leopards": 1055,
        "tcs": null
    },
    "garha morr": {
        "official": "GARHA MORR",
        "trax": 0,
        "leopards": 0,
        "tcs": "GARHA MORR"
    },
    "garh more": {
        "official": "GARH MORE",
        "trax": 0,
        "leopards": 0,
        "tcs": "GARH MOR"
    },
    "gamber": {
        "official": "GAMBER",
        "trax": 2435,
        "leopards": 0,
        "tcs": null
    },
    "gambat city": {
        "official": "GAMBAT CITY",
        "trax": 0,
        "leopards": 0,
        "tcs": "GAMBAT CITY"
    },
    "gambat": {
        "official": "GAMBAT",
        "trax": 151,
        "leopards": 1331,
        "tcs": "GAMBAT"
    },
    "gamba skardu": {
        "official": "GAMBA SKARDU",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "gali jagir": {
        "official": "GALI JAGIR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "gala knatha": {
        "official": "GALA KNATHA",
        "trax": 0,
        "leopards": 1183,
        "tcs": null
    },
    "gakkhar mandi": {
        "official": "GAKKHAR MANDI",
        "trax": 543,
        "leopards": 1456,
        "tcs": null
    },
    "gahkuch ghizer": {
        "official": "GAHKUCH GHIZER",
        "trax": 0,
        "leopards": 0,
        "tcs": "GAHKUCH GHIZER"
    },
    "gaggoo mandi": {
        "official": "GAGGOO MANDI",
        "trax": 150,
        "leopards": 179,
        "tcs": "GAGGO MANDI"
    },
    "gaggo mandi": {
        "official": "GAGGO MANDI",
        "trax": 150,
        "leopards": 179,
        "tcs": "GAGGO MANDI"
    },
    "gagan": {
        "official": "GAGAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "gadoon amazai": {
        "official": "GADOON AMAZAI",
        "trax": 0,
        "leopards": 326,
        "tcs": "GADOON AMAZAI"
    },
    "g maharaja": {
        "official": "G MAHARAJA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "fortabbas": {
        "official": "FORTABBAS",
        "trax": 149,
        "leopards": 93,
        "tcs": "FORTE ABBAS"
    },
    "fort abbas": {
        "official": "FORT ABBAS",
        "trax": 149,
        "leopards": 93,
        "tcs": "FORTE ABBAS"
    },
    "fkpcl power plant": {
        "official": "FKPCL POWER PLANT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "ferozwala": {
        "official": "FEROZWALA",
        "trax": 0,
        "leopards": 806,
        "tcs": "FEROZA"
    },
    "ferozewala": {
        "official": "FEROZEWALA",
        "trax": 0,
        "leopards": 0,
        "tcs": "FEROZA"
    },
    "feroza": {
        "official": "FEROZA",
        "trax": 148,
        "leopards": 0,
        "tcs": "FEROZA"
    },
    "feroz watwan": {
        "official": "FEROZ WATWAN",
        "trax": 1378,
        "leopards": 1288,
        "tcs": "FEROZ WATOWAN"
    },
    "fazilpur dhundh": {
        "official": "FAZILPUR DHUNDH",
        "trax": 350,
        "leopards": 297,
        "tcs": "FAZIL PUR"
    },
    "fazilpur": {
        "official": "FAZILPUR",
        "trax": 350,
        "leopards": 297,
        "tcs": "FAZIL PUR"
    },
    "fatehpur": {
        "official": "FATEHPUR",
        "trax": 396,
        "leopards": 435,
        "tcs": "FATEHPUR"
    },
    "fateh pur kamal": {
        "official": "FATEH PUR KAMAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "fateh pur gujrat": {
        "official": "FATEH PUR GUJRAT",
        "trax": 517,
        "leopards": 0,
        "tcs": null
    },
    "fateh jang": {
        "official": "FATEH JANG",
        "trax": 2468,
        "leopards": 1203,
        "tcs": "FATEH JANG"
    },
    "farooqabad": {
        "official": "FAROOQABAD",
        "trax": 1380,
        "leopards": 1287,
        "tcs": "FARROQABAD"
    },
    "farooqababd": {
        "official": "FAROOQABABD",
        "trax": 1380,
        "leopards": 1287,
        "tcs": "FARROQABAD"
    },
    "farooqa": {
        "official": "FAROOQA",
        "trax": 146,
        "leopards": 1266,
        "tcs": "FARROQABAD"
    },
    "farooka": {
        "official": "FAROOKA",
        "trax": 146,
        "leopards": 1266,
        "tcs": "FARROQABAD"
    },
    "faqirwali": {
        "official": "FAQIRWALI",
        "trax": 145,
        "leopards": 92,
        "tcs": "FAQIR WALI"
    },
    "faqirabad": {
        "official": "FAQIRABAD",
        "trax": 0,
        "leopards": 2506,
        "tcs": null
    },
    "faqir wali": {
        "official": "FAQIR WALI",
        "trax": 145,
        "leopards": 92,
        "tcs": "FAQIR WALI"
    },
    "faizpur khurd": {
        "official": "FAIZPUR KHURD",
        "trax": 0,
        "leopards": 1286,
        "tcs": null
    },
    "faisalabad (sambrial)": {
        "official": "FAISALABAD (SAMBRIAL)",
        "trax": 382,
        "leopards": 1321,
        "tcs": "SUMBRIAL"
    },
    "faisalabad": {
        "official": "FAISALABAD",
        "trax": 144,
        "leopards": 322,
        "tcs": "FAISALABAD"
    },
    "f.f.c. plant": {
        "official": "F.F.C. PLANT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "elahabad": {
        "official": "ELAHABAD",
        "trax": 0,
        "leopards": 1453,
        "tcs": "ELLAH ABAD"
    },
    "eiser (ajk)": {
        "official": "EISER (AJK)",
        "trax": 0,
        "leopards": 269,
        "tcs": null
    },
    "easakhel": {
        "official": "EASAKHEL",
        "trax": 143,
        "leopards": 945,
        "tcs": "ISSA KHEL"
    },
    "dunyapur": {
        "official": "DUNYAPUR",
        "trax": 141,
        "leopards": 101,
        "tcs": "DUNYA PUR"
    },
    "dunya pur": {
        "official": "DUNYA PUR",
        "trax": 141,
        "leopards": 101,
        "tcs": "DUNYA PUR"
    },
    "dunga bunga": {
        "official": "DUNGA BUNGA",
        "trax": 140,
        "leopards": 0,
        "tcs": null
    },
    "dumman": {
        "official": "DUMMAN",
        "trax": 2037,
        "leopards": 0,
        "tcs": null
    },
    "dulmial": {
        "official": "DULMIAL",
        "trax": 2036,
        "leopards": 0,
        "tcs": null
    },
    "dulle wala": {
        "official": "DULLE WALA",
        "trax": 526,
        "leopards": 0,
        "tcs": "DULLE WALA"
    },
    "dukki": {
        "official": "DUKKI",
        "trax": 0,
        "leopards": 0,
        "tcs": "DUKKI"
    },
    "dour": {
        "official": "DOUR",
        "trax": 0,
        "leopards": 0,
        "tcs": "DOUR"
    },
    "dorey wala": {
        "official": "DOREY WALA",
        "trax": 0,
        "leopards": 508,
        "tcs": null
    },
    "dorey": {
        "official": "DOREY",
        "trax": 2479,
        "leopards": 212,
        "tcs": null
    },
    "dongi (ajk)": {
        "official": "DONGI (AJK)",
        "trax": 0,
        "leopards": 762,
        "tcs": null
    },
    "donga bonga": {
        "official": "DONGA BONGA",
        "trax": 140,
        "leopards": 0,
        "tcs": null
    },
    "domail": {
        "official": "DOMAIL",
        "trax": 0,
        "leopards": 112,
        "tcs": null
    },
    "dolta": {
        "official": "DOLTA",
        "trax": 0,
        "leopards": 1681,
        "tcs": null
    },
    "dolat nagar": {
        "official": "DOLAT NAGAR",
        "trax": 0,
        "leopards": 0,
        "tcs": "DOLAT NAGAR"
    },
    "dokri": {
        "official": "DOKRI",
        "trax": 912,
        "leopards": 822,
        "tcs": "DOKRI"
    },
    "dokota": {
        "official": "DOKOTA",
        "trax": 0,
        "leopards": 1436,
        "tcs": "DAKOTA"
    },
    "doberan kallan": {
        "official": "DOBERAN KALLAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "doaba": {
        "official": "DOABA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "distt. complex": {
        "official": "DISTT. COMPLEX",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "dir": {
        "official": "DIR",
        "trax": 0,
        "leopards": 1400,
        "tcs": null
    },
    "diplo": {
        "official": "DIPLO",
        "trax": 0,
        "leopards": 0,
        "tcs": "DIPLO"
    },
    "dinga gujrat": {
        "official": "DINGA GUJRAT",
        "trax": 507,
        "leopards": 0,
        "tcs": null
    },
    "dinga": {
        "official": "DINGA",
        "trax": 139,
        "leopards": 712,
        "tcs": "DINGA"
    },
    "dina": {
        "official": "DINA",
        "trax": 138,
        "leopards": 0,
        "tcs": "DINA"
    },
    "dijkot": {
        "official": "DIJKOT",
        "trax": 137,
        "leopards": 1247,
        "tcs": "DIJKOT"
    },
    "digri": {
        "official": "DIGRI",
        "trax": 0,
        "leopards": 990,
        "tcs": "DIGRI"
    },
    "dhurnal": {
        "official": "DHURNAL",
        "trax": 0,
        "leopards": 2505,
        "tcs": null
    },
    "dhulian": {
        "official": "DHULIAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "dhudial": {
        "official": "DHUDIAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "dhoro naro": {
        "official": "DHORO NARO",
        "trax": 0,
        "leopards": 0,
        "tcs": "DHORO NARO"
    },
    "dhoria": {
        "official": "DHORIA",
        "trax": 423,
        "leopards": 710,
        "tcs": null
    },
    "dhoke maken": {
        "official": "DHOKE MAKEN",
        "trax": 0,
        "leopards": 208,
        "tcs": null
    },
    "dhok daura (ajk)": {
        "official": "DHOK DAURA (AJK)",
        "trax": 0,
        "leopards": 159,
        "tcs": null
    },
    "dhodhak": {
        "official": "DHODHAK",
        "trax": 0,
        "leopards": 0,
        "tcs": "DHODHAK"
    },
    "dhoda": {
        "official": "DHODA",
        "trax": 0,
        "leopards": 206,
        "tcs": null
    },
    "dhirkot": {
        "official": "DHIRKOT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "dheri julagram": {
        "official": "DHERI JULAGRAM",
        "trax": 0,
        "leopards": 126,
        "tcs": null
    },
    "dheri araian": {
        "official": "DHERI ARAIAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "dheri alla dhand": {
        "official": "DHERI ALLA DHAND",
        "trax": 1998,
        "leopards": 0,
        "tcs": null
    },
    "dheerkot": {
        "official": "DHEERKOT",
        "trax": 0,
        "leopards": 0,
        "tcs": "DHEERKOT"
    },
    "dheedwal": {
        "official": "DHEEDWAL",
        "trax": 2035,
        "leopards": 0,
        "tcs": null
    },
    "dharyala jalap": {
        "official": "DHARYALA JALAP",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "dharki": {
        "official": "DHARKI",
        "trax": 136,
        "leopards": 1008,
        "tcs": null
    },
    "dharanwala": {
        "official": "DHARANWALA",
        "trax": 0,
        "leopards": 90,
        "tcs": null
    },
    "dharamkot": {
        "official": "DHARAMKOT",
        "trax": 2187,
        "leopards": 0,
        "tcs": null
    },
    "dharabi": {
        "official": "DHARABI",
        "trax": 2034,
        "leopards": 0,
        "tcs": null
    },
    "dhanot": {
        "official": "DHANOT",
        "trax": 0,
        "leopards": 0,
        "tcs": "DHANOT"
    },
    "dhanola": {
        "official": "DHANOLA",
        "trax": 0,
        "leopards": 0,
        "tcs": "DHANOLA"
    },
    "dhani bombian": {
        "official": "DHANI BOMBIAN",
        "trax": 0,
        "leopards": 1052,
        "tcs": null
    },
    "dhangri bala (ajk)": {
        "official": "DHANGRI BALA (AJK)",
        "trax": 0,
        "leopards": 268,
        "tcs": null
    },
    "dhander (kalan)": {
        "official": "DHANDER (KALAN)",
        "trax": 0,
        "leopards": 158,
        "tcs": null
    },
    "dhamtal": {
        "official": "DHAMTAL",
        "trax": 0,
        "leopards": 0,
        "tcs": "DHAMTAL"
    },
    "dhall ghair": {
        "official": "DHALL GHAIR",
        "trax": 0,
        "leopards": 709,
        "tcs": null
    },
    "dhadar": {
        "official": "DHADAR",
        "trax": 0,
        "leopards": 0,
        "tcs": "DHADAR"
    },
    "dhabeji": {
        "official": "DHABEJI",
        "trax": 1387,
        "leopards": 1419,
        "tcs": null
    },
    "dgk": {
        "official": "DGK",
        "trax": 134,
        "leopards": 293,
        "tcs": "DERA GHAZI KHAN"
    },
    "dewan sharif (ajk)": {
        "official": "DEWAN SHARIF (AJK)",
        "trax": 0,
        "leopards": 761,
        "tcs": null
    },
    "dewalay": {
        "official": "DEWALAY",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "dewal": {
        "official": "DEWAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "dera nawab": {
        "official": "DERA NAWAB",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "dera murad jamali": {
        "official": "DERA MURAD JAMALI",
        "trax": 407,
        "leopards": 1329,
        "tcs": "DERAMURAD JAMAL"
    },
    "dera murad jama": {
        "official": "DERA MURAD JAMA",
        "trax": 407,
        "leopards": 1329,
        "tcs": "DERAMURAD JAMAL"
    },
    "dera malla sin": {
        "official": "DERA MALLA SIN",
        "trax": 0,
        "leopards": 1284,
        "tcs": null
    },
    "dera ismail khan": {
        "official": "DERA ISMAIL KHAN",
        "trax": 135,
        "leopards": 306,
        "tcs": "DERA ISMAIL KHAN"
    },
    "dera ghazi khan": {
        "official": "DERA GHAZI KHAN",
        "trax": 134,
        "leopards": 293,
        "tcs": "DERA GHAZI KHAN"
    },
    "dera allahyar": {
        "official": "DERA ALLAHYAR",
        "trax": 408,
        "leopards": 1328,
        "tcs": "DERA ALLAHYAR"
    },
    "dera ala yar": {
        "official": "DERA ALA YAR",
        "trax": 408,
        "leopards": 1328,
        "tcs": "DERA ALLAHYAR"
    },
    "depalpur": {
        "official": "DEPALPUR",
        "trax": 133,
        "leopards": 1126,
        "tcs": "DEPAL PUR"
    },
    "deharki": {
        "official": "DEHARKI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "deena": {
        "official": "DEENA",
        "trax": 0,
        "leopards": 563,
        "tcs": "DINA"
    },
    "daur": {
        "official": "DAUR",
        "trax": 142,
        "leopards": 1093,
        "tcs": null
    },
    "daulatpur safan": {
        "official": "DAULATPUR SAFAN",
        "trax": 0,
        "leopards": 434,
        "tcs": "DAULATPUR"
    },
    "daulat pur": {
        "official": "DAULAT PUR",
        "trax": 0,
        "leopards": 2509,
        "tcs": "DAULATPUR"
    },
    "daul tala": {
        "official": "DAUL TALA",
        "trax": 0,
        "leopards": 0,
        "tcs": "DAULTALA"
    },
    "daud khel": {
        "official": "DAUD KHEL",
        "trax": 1375,
        "leopards": 0,
        "tcs": "DAUD KHEL"
    },
    "datote (ajk)": {
        "official": "DATOTE (AJK)",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "daska": {
        "official": "DASKA",
        "trax": 383,
        "leopards": 282,
        "tcs": "DASKA"
    },
    "darya khan": {
        "official": "DARYA KHAN",
        "trax": 348,
        "leopards": 0,
        "tcs": "DARY KHAN"
    },
    "darya gali": {
        "official": "DARYA GALI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "darro": {
        "official": "DARRO",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "darosh": {
        "official": "DAROSH",
        "trax": 0,
        "leopards": 0,
        "tcs": "DAROSH"
    },
    "dargai": {
        "official": "DARGAI",
        "trax": 0,
        "leopards": 0,
        "tcs": "DARGAI"
    },
    "darbello": {
        "official": "DARBELLO",
        "trax": 0,
        "leopards": 1117,
        "tcs": null
    },
    "darbar(hajiabad": {
        "official": "DARBAR(HAJIABAD",
        "trax": 0,
        "leopards": 125,
        "tcs": null
    },
    "daraban": {
        "official": "DARABAN",
        "trax": 529,
        "leopards": 0,
        "tcs": null
    },
    "dara adm khel": {
        "official": "DARA ADM KHEL",
        "trax": 0,
        "leopards": 0,
        "tcs": "DARA ADM KHEL"
    },
    "daood zai": {
        "official": "DAOOD ZAI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "danyor": {
        "official": "DANYOR",
        "trax": 0,
        "leopards": 0,
        "tcs": "DANYOR"
    },
    "dandot": {
        "official": "DANDOT",
        "trax": 2033,
        "leopards": 723,
        "tcs": null
    },
    "dandli (ajk)": {
        "official": "DANDLI (AJK)",
        "trax": 0,
        "leopards": 760,
        "tcs": null
    },
    "danda shah bila": {
        "official": "DANDA SHAH BILA",
        "trax": 0,
        "leopards": 1389,
        "tcs": null
    },
    "dammas (ajk)": {
        "official": "DAMMAS (AJK)",
        "trax": 0,
        "leopards": 759,
        "tcs": null
    },
    "dambodas": {
        "official": "DAMBODAS",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "dalwal": {
        "official": "DALWAL",
        "trax": 2032,
        "leopards": 202,
        "tcs": null
    },
    "daluwali": {
        "official": "DALUWALI",
        "trax": 422,
        "leopards": 0,
        "tcs": null
    },
    "dalipur": {
        "official": "DALIPUR",
        "trax": 2027,
        "leopards": 0,
        "tcs": null
    },
    "dalbandin": {
        "official": "DALBANDIN",
        "trax": 0,
        "leopards": 0,
        "tcs": "DALBANDIN"
    },
    "dakwala": {
        "official": "DAKWALA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "dajal": {
        "official": "DAJAL",
        "trax": 0,
        "leopards": 0,
        "tcs": "DAJAL"
    },
    "daira din panna": {
        "official": "DAIRA DIN PANNA",
        "trax": 490,
        "leopards": 748,
        "tcs": null
    },
    "dahranwala": {
        "official": "DAHRANWALA",
        "trax": 132,
        "leopards": 0,
        "tcs": "DAHRANWALA"
    },
    "daharki": {
        "official": "DAHARKI",
        "trax": 136,
        "leopards": 1008,
        "tcs": "DAHARKI"
    },
    "daghoni balgar": {
        "official": "DAGHONI BALGAR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "dadyal ajk": {
        "official": "DADYAL AJK",
        "trax": 421,
        "leopards": 264,
        "tcs": "DADYAL (A.K)"
    },
    "dadyal a.k": {
        "official": "DADYAL A.K",
        "trax": 421,
        "leopards": 264,
        "tcs": "DADYAL (A.K)"
    },
    "dadyal (ajk)": {
        "official": "DADYAL (AJK)",
        "trax": 421,
        "leopards": 264,
        "tcs": "DADYAL (A.K)"
    },
    "dadu": {
        "official": "DADU",
        "trax": 131,
        "leopards": 258,
        "tcs": "DADU"
    },
    "dadiyal": {
        "official": "DADIYAL",
        "trax": 0,
        "leopards": 0,
        "tcs": "DADIYAL"
    },
    "dad laghari": {
        "official": "DAD LAGHARI",
        "trax": 0,
        "leopards": 1007,
        "tcs": null
    },
    "chunian": {
        "official": "CHUNIAN",
        "trax": 507,
        "leopards": 0,
        "tcs": "CHUNIAN"
    },
    "chunia": {
        "official": "CHUNIA",
        "trax": 507,
        "leopards": 0,
        "tcs": "CHUNIA"
    },
    "chung": {
        "official": "CHUNG",
        "trax": 0,
        "leopards": 805,
        "tcs": null
    },
    "chundiko": {
        "official": "CHUNDIKO",
        "trax": 0,
        "leopards": 0,
        "tcs": "CHUNDIKO"
    },
    "chund": {
        "official": "CHUND",
        "trax": 0,
        "leopards": 544,
        "tcs": null
    },
    "chunawala": {
        "official": "CHUNAWALA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chowki (ajk)": {
        "official": "CHOWKI (AJK)",
        "trax": 0,
        "leopards": 157,
        "tcs": null
    },
    "chowk sarwar shaheed": {
        "official": "CHOWK SARWAR SHAHEED",
        "trax": 0,
        "leopards": 1071,
        "tcs": "SARWAR SHAHEED"
    },
    "chowk sarwar sh": {
        "official": "CHOWK SARWAR SH",
        "trax": 0,
        "leopards": 1071,
        "tcs": "SARWAR SHAHEED"
    },
    "chowk qureshi": {
        "official": "CHOWK QURESHI",
        "trax": 398,
        "leopards": 0,
        "tcs": null
    },
    "chowk permit": {
        "official": "CHOWK PERMIT",
        "trax": 494,
        "leopards": 0,
        "tcs": null
    },
    "chowk pandori": {
        "official": "CHOWK PANDORI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chowk munda": {
        "official": "CHOWK MUNDA",
        "trax": 399,
        "leopards": 2675,
        "tcs": null
    },
    "chowk bahadur pur": {
        "official": "CHOWK BAHADUR PUR",
        "trax": 551,
        "leopards": 0,
        "tcs": null
    },
    "chowk azam": {
        "official": "CHOWK AZAM",
        "trax": 397,
        "leopards": 0,
        "tcs": "CHOWK AZAM"
    },
    "chottagla (ajk)": {
        "official": "CHOTTAGLA (AJK)",
        "trax": 0,
        "leopards": 1181,
        "tcs": null
    },
    "chota lahore": {
        "official": "CHOTA LAHORE",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chorai (ajk)": {
        "official": "CHORAI (AJK)",
        "trax": 0,
        "leopards": 758,
        "tcs": null
    },
    "chor": {
        "official": "CHOR",
        "trax": 0,
        "leopards": 0,
        "tcs": "CHOR CANTT"
    },
    "chonawala": {
        "official": "CHONAWALA",
        "trax": 0,
        "leopards": 0,
        "tcs": "CHONAWALA"
    },
    "chohar jamali": {
        "official": "CHOHAR JAMALI",
        "trax": 0,
        "leopards": 1418,
        "tcs": "CHOHAR JAMALI"
    },
    "chobara": {
        "official": "CHOBARA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "choa saidan shah": {
        "official": "CHOA SAIDAN SHAH",
        "trax": 0,
        "leopards": 0,
        "tcs": "CHOA SYDEN SHAH"
    },
    "choa saidan sha": {
        "official": "CHOA SAIDAN SHA",
        "trax": 420,
        "leopards": 199,
        "tcs": "CHOA SYDEN SHAH"
    },
    "choa khalsa": {
        "official": "CHOA KHALSA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chkwal": {
        "official": "CHKWAL",
        "trax": 0,
        "leopards": 180,
        "tcs": "CHAKWAL"
    },
    "chittar pari": {
        "official": "CHITTAR PARI",
        "trax": 0,
        "leopards": 978,
        "tcs": null
    },
    "chitta more": {
        "official": "CHITTA MORE",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chitta batta": {
        "official": "CHITTA BATTA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chitral lower": {
        "official": "CHITRAL LOWER",
        "trax": 0,
        "leopards": 256,
        "tcs": "CHITRAL"
    },
    "chitral": {
        "official": "CHITRAL",
        "trax": 0,
        "leopards": 256,
        "tcs": "CHITRAL"
    },
    "chistian": {
        "official": "CHISTIAN",
        "trax": 130,
        "leopards": 84,
        "tcs": "CHISHTIAN"
    },
    "chishtian": {
        "official": "CHISHTIAN",
        "trax": 130,
        "leopards": 324,
        "tcs": "CHISHTIAN"
    },
    "chinji": {
        "official": "CHINJI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chiniot": {
        "official": "CHINIOT",
        "trax": 129,
        "leopards": 254,
        "tcs": "CHINIOT"
    },
    "chillas sherz": {
        "official": "CHILLAS SHERZ",
        "trax": 0,
        "leopards": 0,
        "tcs": "CHILLAS SHERZ"
    },
    "chicha watni": {
        "official": "CHICHA WATNI",
        "trax": 128,
        "leopards": 248,
        "tcs": "CHICHAWATNI"
    },
    "chenab nagar": {
        "official": "CHENAB NAGAR",
        "trax": 124,
        "leopards": 1169,
        "tcs": "CHENAB NAGAR"
    },
    "chella bandi (ajk)": {
        "official": "CHELLA BANDI (AJK)",
        "trax": 371,
        "leopards": 1050,
        "tcs": null
    },
    "chechian (ajk)": {
        "official": "CHECHIAN (AJK)",
        "trax": 0,
        "leopards": 977,
        "tcs": null
    },
    "chawinda": {
        "official": "CHAWINDA",
        "trax": 127,
        "leopards": 1131,
        "tcs": "CHAWINDA"
    },
    "chattar area": {
        "official": "CHATTAR AREA",
        "trax": 377,
        "leopards": 1049,
        "tcs": null
    },
    "chashma": {
        "official": "CHASHMA",
        "trax": 126,
        "leopards": 941,
        "tcs": "CHASHMA"
    },
    "charsadda": {
        "official": "CHARSADDA",
        "trax": 125,
        "leopards": 901,
        "tcs": "CHARSADDA"
    },
    "charsada": {
        "official": "CHARSADA",
        "trax": 125,
        "leopards": 901,
        "tcs": "CHARSADDA"
    },
    "charhoi": {
        "official": "CHARHOI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "char bagh (swat)": {
        "official": "CHAR BAGH (SWAT)",
        "trax": 0,
        "leopards": 966,
        "tcs": null
    },
    "channan": {
        "official": "CHANNAN",
        "trax": 2481,
        "leopards": 0,
        "tcs": null
    },
    "chani goth": {
        "official": "CHANI GOTH",
        "trax": 0,
        "leopards": 0,
        "tcs": "CHANI GOTH"
    },
    "changa manga": {
        "official": "CHANGA MANGA",
        "trax": 506,
        "leopards": 136,
        "tcs": "CHANGA MANGA"
    },
    "chamkani": {
        "official": "CHAMKANI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chambi": {
        "official": "CHAMBI",
        "trax": 0,
        "leopards": 198,
        "tcs": null
    },
    "chamber": {
        "official": "CHAMBER",
        "trax": 0,
        "leopards": 0,
        "tcs": "CHAMBER"
    },
    "chamankot (ajk)": {
        "official": "CHAMANKOT (AJK)",
        "trax": 0,
        "leopards": 1048,
        "tcs": null
    },
    "chaman": {
        "official": "CHAMAN",
        "trax": 0,
        "leopards": 1154,
        "tcs": "CHAMAN"
    },
    "chakwal": {
        "official": "CHAKWAL",
        "trax": 122,
        "leopards": 180,
        "tcs": "CHAKWAL"
    },
    "chakri": {
        "official": "CHAKRI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chakral": {
        "official": "CHAKRAL",
        "trax": 2026,
        "leopards": 0,
        "tcs": null
    },
    "chakothi (ajk)": {
        "official": "CHAKOTHI (AJK)",
        "trax": 0,
        "leopards": 1047,
        "tcs": null
    },
    "chakora": {
        "official": "CHAKORA",
        "trax": 2025,
        "leopards": 0,
        "tcs": null
    },
    "chaklala": {
        "official": "CHAKLALA",
        "trax": 1390,
        "leopards": 1209,
        "tcs": null
    },
    "chakia": {
        "official": "CHAKIA",
        "trax": 2013,
        "leopards": 0,
        "tcs": null
    },
    "chakdara": {
        "official": "CHAKDARA",
        "trax": 0,
        "leopards": 124,
        "tcs": "CHAKDARA"
    },
    "chakar kot koha": {
        "official": "CHAKAR KOT KOHA",
        "trax": 0,
        "leopards": 731,
        "tcs": null
    },
    "chak swari (ajk)": {
        "official": "CHAK SWARI (AJK)",
        "trax": 0,
        "leopards": 267,
        "tcs": "CHAK SAWARI"
    },
    "chak sobaram": {
        "official": "CHAK SOBARAM",
        "trax": 2442,
        "leopards": 0,
        "tcs": null
    },
    "chak shadi": {
        "official": "CHAK SHADI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chak pirana": {
        "official": "CHAK PIRANA",
        "trax": 3580,
        "leopards": 0,
        "tcs": null
    },
    "chak parana": {
        "official": "CHAK PARANA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chak kamal": {
        "official": "CHAK KAMAL",
        "trax": 0,
        "leopards": 706,
        "tcs": null
    },
    "chak jhumra": {
        "official": "CHAK JHUMRA",
        "trax": 121,
        "leopards": 324,
        "tcs": "CHAK JHUMRA"
    },
    "chak jani": {
        "official": "CHAK JANI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chak jamal": {
        "official": "CHAK JAMAL",
        "trax": 0,
        "leopards": 557,
        "tcs": null
    },
    "chak hamid": {
        "official": "CHAK HAMID",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chak beli khan": {
        "official": "CHAK BELI KHAN",
        "trax": 0,
        "leopards": 192,
        "tcs": null
    },
    "chak bazaar (ajk)": {
        "official": "CHAK BAZAAR (AJK)",
        "trax": 0,
        "leopards": 1179,
        "tcs": null
    },
    "chak baqar shah": {
        "official": "CHAK BAQAR SHAH",
        "trax": 0,
        "leopards": 191,
        "tcs": null
    },
    "chak ali shah": {
        "official": "CHAK ALI SHAH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "chak abdullah": {
        "official": "CHAK ABDULLAH",
        "trax": 0,
        "leopards": 88,
        "tcs": null
    },
    "chak 168\\/10r": {
        "official": "CHAK 168\\/10R",
        "trax": 0,
        "leopards": 685,
        "tcs": null
    },
    "chachro": {
        "official": "CHACHRO",
        "trax": 0,
        "leopards": 0,
        "tcs": "CHACHRO"
    },
    "cadet college sunny bank": {
        "official": "CADET COLLEGE SUNNY BANK",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "burg attari": {
        "official": "BURG ATTARI",
        "trax": 0,
        "leopards": 1283,
        "tcs": null
    },
    "burewala": {
        "official": "BUREWALA",
        "trax": 119,
        "leopards": 178,
        "tcs": "BUREWALA"
    },
    "bunner": {
        "official": "BUNNER",
        "trax": 0,
        "leopards": 169,
        "tcs": "BUNAIR"
    },
    "bunn behk (ajk)": {
        "official": "BUNN BEHK (AJK)",
        "trax": 0,
        "leopards": 1178,
        "tcs": null
    },
    "buner": {
        "official": "BUNER",
        "trax": 0,
        "leopards": 169,
        "tcs": "BUNAIR"
    },
    "budhla sunt": {
        "official": "BUDHLA SUNT",
        "trax": 499,
        "leopards": 0,
        "tcs": null
    },
    "budhla sant": {
        "official": "BUDHLA SANT",
        "trax": 0,
        "leopards": 0,
        "tcs": "BUDHLA SANT"
    },
    "budha goraya": {
        "official": "BUDHA GORAYA",
        "trax": 2182,
        "leopards": 0,
        "tcs": null
    },
    "bucheri": {
        "official": "BUCHERI",
        "trax": 0,
        "leopards": 1092,
        "tcs": null
    },
    "bucheke": {
        "official": "BUCHEKE",
        "trax": 0,
        "leopards": 0,
        "tcs": "BUCHEKI"
    },
    "buchal khurd": {
        "official": "BUCHAL KHURD",
        "trax": 2024,
        "leopards": 0,
        "tcs": null
    },
    "buchal kalan": {
        "official": "BUCHAL KALAN",
        "trax": 2023,
        "leopards": 0,
        "tcs": null
    },
    "brund batha (ajk)": {
        "official": "BRUND BATHA (AJK)",
        "trax": 0,
        "leopards": 757,
        "tcs": null
    },
    "brotha": {
        "official": "BROTHA",
        "trax": 0,
        "leopards": 39,
        "tcs": null
    },
    "bozdar wada": {
        "official": "BOZDAR WADA",
        "trax": 0,
        "leopards": 0,
        "tcs": "BOZDAR WADA"
    },
    "booni": {
        "official": "BOONI",
        "trax": 0,
        "leopards": 0,
        "tcs": "BOONI"
    },
    "bonga hayat": {
        "official": "BONGA HAYAT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "boken more": {
        "official": "BOKEN MORE",
        "trax": 0,
        "leopards": 432,
        "tcs": null
    },
    "bloouch (ajk)": {
        "official": "BLOOUCH (AJK)",
        "trax": 0,
        "leopards": 1177,
        "tcs": null
    },
    "bisham": {
        "official": "BISHAM",
        "trax": 0,
        "leopards": 0,
        "tcs": "BISHAM"
    },
    "bilalabad": {
        "official": "BILALABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "bidder marjan": {
        "official": "BIDDER MARJAN",
        "trax": 0,
        "leopards": 705,
        "tcs": null
    },
    "bhurban (pc)": {
        "official": "BHURBAN (PC)",
        "trax": 0,
        "leopards": 1025,
        "tcs": null
    },
    "bhudial": {
        "official": "BHUDIAL",
        "trax": 0,
        "leopards": 1386,
        "tcs": null
    },
    "bhubbar": {
        "official": "BHUBBAR",
        "trax": 0,
        "leopards": 189,
        "tcs": null
    },
    "bhring (ajk)": {
        "official": "BHRING (AJK)",
        "trax": 0,
        "leopards": 156,
        "tcs": null
    },
    "bhowana": {
        "official": "BHOWANA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "bhopalwala": {
        "official": "BHOPALWALA",
        "trax": 0,
        "leopards": 1311,
        "tcs": null
    },
    "bhong": {
        "official": "BHONG",
        "trax": 2158,
        "leopards": 0,
        "tcs": null
    },
    "bhone": {
        "official": "BHONE",
        "trax": 0,
        "leopards": 331,
        "tcs": null
    },
    "bhit shah": {
        "official": "BHIT SHAH",
        "trax": 0,
        "leopards": 477,
        "tcs": "BHIT SHAH"
    },
    "bhiria road": {
        "official": "BHIRIA ROAD",
        "trax": 0,
        "leopards": 0,
        "tcs": "BHIRIA ROAD"
    },
    "bhiria city": {
        "official": "BHIRIA CITY",
        "trax": 118,
        "leopards": 0,
        "tcs": "BHIRIA CITY"
    },
    "bhimber (ajk)": {
        "official": "BHIMBER (AJK)",
        "trax": 0,
        "leopards": 153,
        "tcs": "BHIMBER"
    },
    "bhiko more": {
        "official": "BHIKO MORE",
        "trax": 0,
        "leopards": 862,
        "tcs": null
    },
    "bhiki sharif": {
        "official": "BHIKI SHARIF",
        "trax": 0,
        "leopards": 861,
        "tcs": null
    },
    "bhikari kalan": {
        "official": "BHIKARI KALAN",
        "trax": 0,
        "leopards": 188,
        "tcs": null
    },
    "bhera": {
        "official": "BHERA",
        "trax": 114,
        "leopards": 1265,
        "tcs": "BHERA"
    },
    "bher kund": {
        "official": "BHER KUND",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "bhawana": {
        "official": "BHAWANA",
        "trax": 544,
        "leopards": 0,
        "tcs": "BHAWANA"
    },
    "bhaun": {
        "official": "BHAUN",
        "trax": 2022,
        "leopards": 187,
        "tcs": null
    },
    "bharpur": {
        "official": "BHARPUR",
        "trax": 2021,
        "leopards": 0,
        "tcs": null
    },
    "bhara khu": {
        "official": "BHARA KHU",
        "trax": 1386,
        "leopards": 487,
        "tcs": null
    },
    "bhan sayedabad": {
        "official": "BHAN SAYEDABAD",
        "trax": 419,
        "leopards": 0,
        "tcs": "BHAN SAEEDABAD"
    },
    "bhan saeedabad": {
        "official": "BHAN SAEEDABAD",
        "trax": 419,
        "leopards": 0,
        "tcs": "BHAN SAEEDABAD"
    },
    "bhalwal": {
        "official": "BHALWAL",
        "trax": 117,
        "leopards": 1264,
        "tcs": "BHALWAL"
    },
    "bhall": {
        "official": "BHALL",
        "trax": 0,
        "leopards": 1802,
        "tcs": null
    },
    "bhal syedan": {
        "official": "BHAL SYEDAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "bhakkar": {
        "official": "BHAKKAR",
        "trax": 116,
        "leopards": 140,
        "tcs": "BHAKKAR"
    },
    "bhai pheru": {
        "official": "BHAI PHERU",
        "trax": 405,
        "leopards": 134,
        "tcs": "BHAI PHARU"
    },
    "bhagwal": {
        "official": "BHAGWAL",
        "trax": 2020,
        "leopards": 186,
        "tcs": null
    },
    "bhagowal kalan": {
        "official": "BHAGOWAL KALAN",
        "trax": 2053,
        "leopards": 490,
        "tcs": null
    },
    "bhagoor": {
        "official": "BHAGOOR",
        "trax": 2398,
        "leopards": 0,
        "tcs": null
    },
    "bhagatanwala": {
        "official": "BHAGATANWALA",
        "trax": 115,
        "leopards": 1263,
        "tcs": null
    },
    "bela": {
        "official": "BELA",
        "trax": 0,
        "leopards": 608,
        "tcs": "BELA"
    },
    "begum kot": {
        "official": "BEGUM KOT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "beesham": {
        "official": "BEESHAM",
        "trax": 0,
        "leopards": 886,
        "tcs": null
    },
    "battgram": {
        "official": "BATTGRAM",
        "trax": 0,
        "leopards": 0,
        "tcs": "BATTGRAM"
    },
    "batkhela": {
        "official": "BATKHELA",
        "trax": 404,
        "leopards": 118,
        "tcs": "BATKHELA"
    },
    "bathrui (ajk)": {
        "official": "BATHRUI (AJK)",
        "trax": 0,
        "leopards": 266,
        "tcs": null
    },
    "batgram": {
        "official": "BATGRAM",
        "trax": 0,
        "leopards": 884,
        "tcs": "BATGARAM"
    },
    "basti shorekot": {
        "official": "BASTI SHOREKOT",
        "trax": 113,
        "leopards": 0,
        "tcs": null
    },
    "basti malook": {
        "official": "BASTI MALOOK",
        "trax": 401,
        "leopards": 0,
        "tcs": null
    },
    "basti malana": {
        "official": "BASTI MALANA",
        "trax": 2166,
        "leopards": 0,
        "tcs": null
    },
    "basti lar": {
        "official": "BASTI LAR",
        "trax": 400,
        "leopards": 0,
        "tcs": null
    },
    "basti buzdar": {
        "official": "BASTI BUZDAR",
        "trax": 2165,
        "leopards": 0,
        "tcs": null
    },
    "basser pur": {
        "official": "BASSER PUR",
        "trax": 112,
        "leopards": 1125,
        "tcs": "BASIR PUR"
    },
    "basirpur": {
        "official": "BASIRPUR",
        "trax": 0,
        "leopards": 0,
        "tcs": "BASIR PUR"
    },
    "basharat": {
        "official": "BASHARAT",
        "trax": 2019,
        "leopards": 0,
        "tcs": null
    },
    "barwall": {
        "official": "BARWALL",
        "trax": 2475,
        "leopards": 0,
        "tcs": null
    },
    "barthi": {
        "official": "BARTHI",
        "trax": 2164,
        "leopards": 0,
        "tcs": null
    },
    "barrth": {
        "official": "BARRTH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "barnala (ajk)": {
        "official": "BARNALA (AJK)",
        "trax": 0,
        "leopards": 155,
        "tcs": "BARNALA A.K"
    },
    "barnala": {
        "official": "BARNALA",
        "trax": 0,
        "leopards": 155,
        "tcs": "BARNALA"
    },
    "barkhan": {
        "official": "BARKHAN",
        "trax": 0,
        "leopards": 1327,
        "tcs": "BARKHAN"
    },
    "barikot": {
        "official": "BARIKOT",
        "trax": 0,
        "leopards": 0,
        "tcs": "BARI KOT"
    },
    "barian": {
        "official": "BARIAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "bara market": {
        "official": "BARA MARKET",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "bara kahu": {
        "official": "BARA KAHU",
        "trax": 0,
        "leopards": 0,
        "tcs": "BARA KAHU"
    },
    "bansrian": {
        "official": "BANSRIAN",
        "trax": 2483,
        "leopards": 0,
        "tcs": null
    },
    "bansra gali": {
        "official": "BANSRA GALI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "bannu": {
        "official": "BANNU",
        "trax": 111,
        "leopards": 110,
        "tcs": "BANNU"
    },
    "banguldero": {
        "official": "BANGULDERO",
        "trax": 914,
        "leopards": 0,
        "tcs": null
    },
    "bangla yateem w": {
        "official": "BANGLA YATEEM W",
        "trax": 0,
        "leopards": 86,
        "tcs": null
    },
    "bangla manthar": {
        "official": "BANGLA MANTHAR",
        "trax": 2157,
        "leopards": 0,
        "tcs": null
    },
    "bandhi": {
        "official": "BANDHI",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "banda daud shah": {
        "official": "BANDA DAUD SHAH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "ban bajwa": {
        "official": "BAN BAJWA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "balokhel city": {
        "official": "BALOKHEL CITY",
        "trax": 0,
        "leopards": 940,
        "tcs": null
    },
    "balkasar": {
        "official": "BALKASAR",
        "trax": 2018,
        "leopards": 0,
        "tcs": null
    },
    "balambat": {
        "official": "BALAMBAT",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "balakot": {
        "official": "BALAKOT",
        "trax": 0,
        "leopards": 883,
        "tcs": "BALAKOT"
    },
    "bala pir": {
        "official": "BALA PIR",
        "trax": 403,
        "leopards": 0,
        "tcs": null
    },
    "bakrani": {
        "official": "BAKRANI",
        "trax": 943,
        "leopards": 0,
        "tcs": "BAKRANI"
    },
    "bakka khel": {
        "official": "BAKKA KHEL",
        "trax": 2000,
        "leopards": 0,
        "tcs": null
    },
    "bajaur agency": {
        "official": "BAJAUR AGENCY",
        "trax": 0,
        "leopards": 1407,
        "tcs": "BAJAUR"
    },
    "baig pur": {
        "official": "BAIG PUR",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "bahuwal": {
        "official": "BAHUWAL",
        "trax": 0,
        "leopards": 427,
        "tcs": null
    },
    "bahtar more": {
        "official": "BAHTAR MORE",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "bahmber": {
        "official": "BAHMBER",
        "trax": 0,
        "leopards": 153,
        "tcs": null
    },
    "bahawalpur": {
        "official": "BAHAWALPUR",
        "trax": 110,
        "leopards": 99,
        "tcs": "BAHAWALPUR"
    },
    "bahawalnagar": {
        "official": "BAHAWALNAGAR",
        "trax": 109,
        "leopards": 83,
        "tcs": "BAHAWALNAGAR"
    },
    "bagnoter": {
        "official": "BAGNOTER",
        "trax": 0,
        "leopards": 3,
        "tcs": null
    },
    "baghatanwala": {
        "official": "BAGHATANWALA",
        "trax": 115,
        "leopards": 1263,
        "tcs": null
    },
    "bagh (ajk)": {
        "official": "BAGH (AJK)",
        "trax": 444,
        "leopards": 1045,
        "tcs": "BAGH"
    },
    "bagh": {
        "official": "BAGH",
        "trax": 444,
        "leopards": 1045,
        "tcs": "BAGH"
    },
    "baggan": {
        "official": "BAGGAN",
        "trax": 0,
        "leopards": 728,
        "tcs": null
    },
    "bafa": {
        "official": "BAFA",
        "trax": 2010,
        "leopards": 0,
        "tcs": null
    },
    "badshahpur": {
        "official": "BADSHAHPUR",
        "trax": 0,
        "leopards": 859,
        "tcs": null
    },
    "badin": {
        "official": "BADIN",
        "trax": 108,
        "leopards": 74,
        "tcs": "BADIN"
    },
    "badiana": {
        "official": "BADIANA",
        "trax": 1419,
        "leopards": 0,
        "tcs": null
    },
    "baddomalhi": {
        "official": "BADDOMALHI",
        "trax": 1382,
        "leopards": 0,
        "tcs": null
    },
    "baddar": {
        "official": "BADDAR",
        "trax": 2478,
        "leopards": 0,
        "tcs": null
    },
    "badbher": {
        "official": "BADBHER",
        "trax": 2015,
        "leopards": 0,
        "tcs": null
    },
    "badah": {
        "official": "BADAH",
        "trax": 0,
        "leopards": 819,
        "tcs": null
    },
    "bacha band": {
        "official": "BACHA BAND",
        "trax": 0,
        "leopards": 989,
        "tcs": null
    },
    "babri banda": {
        "official": "BABRI BANDA",
        "trax": 0,
        "leopards": 727,
        "tcs": null
    },
    "babarloi": {
        "official": "BABARLOI",
        "trax": 938,
        "leopards": 0,
        "tcs": null
    },
    "aziz chak": {
        "official": "AZIZ CHAK",
        "trax": 0,
        "leopards": 1454,
        "tcs": null
    },
    "aziz abad (ajk)": {
        "official": "AZIZ ABAD (AJK)",
        "trax": 0,
        "leopards": 1176,
        "tcs": null
    },
    "ayubia": {
        "official": "AYUBIA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "awaran": {
        "official": "AWARAN",
        "trax": 0,
        "leopards": 1161,
        "tcs": "AWARAN"
    },
    "awan sharif": {
        "official": "AWAN SHARIF",
        "trax": 2052,
        "leopards": 0,
        "tcs": null
    },
    "awan abad (bathi)": {
        "official": "AWAN ABAD (BATHI)",
        "trax": 0,
        "leopards": 1175,
        "tcs": null
    },
    "attowall": {
        "official": "ATTOWALL",
        "trax": 2482,
        "leopards": 0,
        "tcs": null
    },
    "attock khurd": {
        "official": "ATTOCK KHURD",
        "trax": 0,
        "leopards": 36,
        "tcs": null
    },
    "attock": {
        "official": "ATTOCK",
        "trax": 107,
        "leopards": 35,
        "tcs": "ATTOCK"
    },
    "attar shisha": {
        "official": "ATTAR SHISHA",
        "trax": 0,
        "leopards": 881,
        "tcs": null
    },
    "athara hazari": {
        "official": "ATHARA HAZARI",
        "trax": 549,
        "leopards": 0,
        "tcs": null
    },
    "astore": {
        "official": "ASTORE",
        "trax": 0,
        "leopards": 330,
        "tcs": null
    },
    "arrar": {
        "official": "ARRAR",
        "trax": 2017,
        "leopards": 0,
        "tcs": null
    },
    "aroop": {
        "official": "AROOP",
        "trax": 1417,
        "leopards": 0,
        "tcs": null
    },
    "arja": {
        "official": "ARJA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "arija": {
        "official": "ARIJA",
        "trax": 944,
        "leopards": 818,
        "tcs": null
    },
    "arifwala": {
        "official": "ARIFWALA",
        "trax": 0,
        "leopards": 1237,
        "tcs": "ARIF WALA"
    },
    "arifabad": {
        "official": "ARIFABAD",
        "trax": 0,
        "leopards": 926,
        "tcs": null
    },
    "arif wala": {
        "official": "ARIF WALA",
        "trax": 0,
        "leopards": 926,
        "tcs": "ARIF WALA"
    },
    "anwarabad": {
        "official": "ANWARABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "anoi srohta (ajk)": {
        "official": "ANOI SROHTA (AJK)",
        "trax": 0,
        "leopards": 756,
        "tcs": null
    },
    "amirabad": {
        "official": "AMIRABAD",
        "trax": 1991,
        "leopards": 0,
        "tcs": null
    },
    "amir pur mangan": {
        "official": "AMIR PUR MANGAN",
        "trax": 0,
        "leopards": 182,
        "tcs": null
    },
    "aminpur bangla": {
        "official": "AMINPUR BANGLA",
        "trax": 0,
        "leopards": 0,
        "tcs": "AMINPUR BANGLOW"
    },
    "amin abad": {
        "official": "AMIN ABAD",
        "trax": 0,
        "leopards": 181,
        "tcs": null
    },
    "ambor area": {
        "official": "AMBOR AREA",
        "trax": 380,
        "leopards": 1044,
        "tcs": null
    },
    "amberi kalla": {
        "official": "AMBERI KALLA",
        "trax": 0,
        "leopards": 0,
        "tcs": "AMBERI KALLA"
    },
    "ambeeri kala": {
        "official": "AMBEERI KALA",
        "trax": 0,
        "leopards": 0,
        "tcs": "AMBEERI KALA"
    },
    "ambar": {
        "official": "AMBAR",
        "trax": 458,
        "leopards": 0,
        "tcs": null
    },
    "amangarh": {
        "official": "AMANGARH",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "allah abad": {
        "official": "ALLAH ABAD",
        "trax": 2156,
        "leopards": 0,
        "tcs": null
    },
    "alipur sayyadan": {
        "official": "ALIPUR SAYYADAN",
        "trax": 0,
        "leopards": 1084,
        "tcs": null
    },
    "alipur chattha": {
        "official": "ALIPUR CHATTHA",
        "trax": 105,
        "leopards": 400,
        "tcs": "ALI PUR CHATTA"
    },
    "alipur": {
        "official": "ALIPUR",
        "trax": 104,
        "leopards": 1068,
        "tcs": "ALIPUR"
    },
    "ali zai kurram": {
        "official": "ALI ZAI KURRAM",
        "trax": 0,
        "leopards": 726,
        "tcs": null
    },
    "ali pur syedan": {
        "official": "ALI PUR SYEDAN",
        "trax": 0,
        "leopards": 1262,
        "tcs": null
    },
    "ali pur frash": {
        "official": "ALI PUR FRASH",
        "trax": 2063,
        "leopards": 0,
        "tcs": null
    },
    "ali pur bangla": {
        "official": "ALI PUR BANGLA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "ali pur": {
        "official": "ALI PUR",
        "trax": 104,
        "leopards": 1068,
        "tcs": "ALIPUR"
    },
    "al puri": {
        "official": "AL PURI",
        "trax": 0,
        "leopards": 0,
        "tcs": "AL PURI"
    },
    "akwal": {
        "official": "AKWAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "akri": {
        "official": "AKRI",
        "trax": 0,
        "leopards": 1091,
        "tcs": null
    },
    "akora khattak": {
        "official": "AKORA KHATTAK",
        "trax": 355,
        "leopards": 0,
        "tcs": "AKORA KHATAK"
    },
    "akhtar abad": {
        "official": "AKHTAR ABAD",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "akal garh (ajk)": {
        "official": "AKAL GARH (AJK)",
        "trax": 0,
        "leopards": 265,
        "tcs": null
    },
    "ajnia wala": {
        "official": "AJNIA WALA",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "ahmedpur lamma": {
        "official": "AHMEDPUR LAMMA",
        "trax": 2155,
        "leopards": 0,
        "tcs": "AHMED PUR LAMMA"
    },
    "ahmedpur east": {
        "official": "AHMEDPUR EAST",
        "trax": 103,
        "leopards": 100,
        "tcs": "AHMED PUR EAST"
    },
    "ahmadal": {
        "official": "AHMADAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "ahmad pur sial": {
        "official": "AHMAD PUR SIAL",
        "trax": 547,
        "leopards": 542,
        "tcs": "AHMED PUR SIAL"
    },
    "ahmad pur east": {
        "official": "AHMAD PUR EAST",
        "trax": 103,
        "leopards": 100,
        "tcs": "AHMED PUR EAST"
    },
    "ahmad nagar": {
        "official": "AHMAD NAGAR",
        "trax": 0,
        "leopards": 1452,
        "tcs": null
    },
    "ahata farooqia": {
        "official": "AHATA FAROOQIA",
        "trax": 2088,
        "leopards": 0,
        "tcs": null
    },
    "agwana": {
        "official": "AGWANA",
        "trax": 0,
        "leopards": 925,
        "tcs": null
    },
    "aghar jamalpur": {
        "official": "AGHAR JAMALPUR",
        "trax": 0,
        "leopards": 755,
        "tcs": null
    },
    "adowal": {
        "official": "ADOWAL",
        "trax": 2051,
        "leopards": 0,
        "tcs": null
    },
    "adilpur": {
        "official": "ADILPUR",
        "trax": 942,
        "leopards": 1006,
        "tcs": null
    },
    "adil pur": {
        "official": "ADIL PUR",
        "trax": 942,
        "leopards": 1006,
        "tcs": null
    },
    "adi kot": {
        "official": "ADI KOT",
        "trax": 2399,
        "leopards": 0,
        "tcs": null
    },
    "adda zakheera": {
        "official": "ADDA ZAKHEERA",
        "trax": 0,
        "leopards": 0,
        "tcs": "ADDA ZAKHEERA"
    },
    "adda thikriwala": {
        "official": "ADDA THIKRIWALA",
        "trax": 0,
        "leopards": 337,
        "tcs": null
    },
    "adda siraj": {
        "official": "ADDA SIRAJ",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "adda shaikh wahan": {
        "official": "ADDA SHAIKH WAHAN",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "adda phloor onl": {
        "official": "ADDA PHLOOR ONL",
        "trax": 0,
        "leopards": 1246,
        "tcs": null
    },
    "adda pensra": {
        "official": "ADDA PENSRA",
        "trax": 0,
        "leopards": 336,
        "tcs": null
    },
    "adda one r": {
        "official": "ADDA ONE R",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "adda mir abbas": {
        "official": "ADDA MIR ABBAS",
        "trax": 1990,
        "leopards": 0,
        "tcs": null
    },
    "adda machiwal": {
        "official": "ADDA MACHIWAL",
        "trax": 0,
        "leopards": 0,
        "tcs": "ADDA MACHIWAL"
    },
    "adda lar": {
        "official": "ADDA LAR",
        "trax": 0,
        "leopards": 0,
        "tcs": "ADDA LAR"
    },
    "adda johal": {
        "official": "ADDA JOHAL",
        "trax": 0,
        "leopards": 0,
        "tcs": null
    },
    "adda farid kot": {
        "official": "ADDA FARID KOT",
        "trax": 2436,
        "leopards": 0,
        "tcs": null
    },
    "adda bun bosan": {
        "official": "ADDA BUN BOSAN",
        "trax": 0,
        "leopards": 0,
        "tcs": "ADDA BUN BOSAN"
    },
    "adam k cheema": {
        "official": "ADAM K CHEEMA",
        "trax": 2178,
        "leopards": 0,
        "tcs": null
    },
    "aboha": {
        "official": "ABOHA",
        "trax": 0,
        "leopards": 119,
        "tcs": null
    },
    "abdulhakim": {
        "official": "ABDULHAKIM",
        "trax": 102,
        "leopards": 0,
        "tcs": "ABDUL HAKIM"
    },
    "abdul hakim": {
        "official": "ABDUL HAKIM",
        "trax": 102,
        "leopards": 924,
        "tcs": "ABDUL HAKIM"
    },
    "abdul hakeem": {
        "official": "ABDUL HAKEEM",
        "trax": 102,
        "leopards": 924,
        "tcs": "ABDUL HAKIM"
    },
    "abbottabad": {
        "official": "ABBOTTABAD",
        "trax": 101,
        "leopards": 1,
        "tcs": "ABBOTABAD"
    },
    "abbaspur (ajk)": {
        "official": "ABBASPUR (AJK)",
        "trax": 0,
        "leopards": 1174,
        "tcs": null
    },
    "abazai": {
        "official": "ABAZAI",
        "trax": 1989,
        "leopards": 0,
        "tcs": null
    },
    "36 chowk": {
        "official": "36 CHOWK",
        "trax": 0,
        "leopards": 0,
        "tcs": "36 CHOWK"
    },
    "18 hazari": {
        "official": "18 HAZARI",
        "trax": 0,
        "leopards": 0,
        "tcs": "18 HAZARI"
    },
    "khi": {
        "official": "KARACHI",
        "trax": 202,
        "leopards": 592,
        "tcs": "KARACHI"
    },
    "krachi": {
        "official": "KARACHI",
        "trax": 202,
        "leopards": 592,
        "tcs": "KARACHI"
    },
    "karachi city": {
        "official": "KARACHI",
        "trax": 202,
        "leopards": 592,
        "tcs": "KARACHI"
    },
    "lhr": {
        "official": "LAHORE",
        "trax": 223,
        "leopards": 789,
        "tcs": "LAHORE"
    },
    "lahor": {
        "official": "LAHORE",
        "trax": 223,
        "leopards": 789,
        "tcs": "LAHORE"
    },
    "isb": {
        "official": "ISLAMABAD",
        "trax": 174,
        "leopards": 486,
        "tcs": "ISLAMABAD"
    },
    "isl": {
        "official": "ISLAMABAD",
        "trax": 174,
        "leopards": 486,
        "tcs": "ISLAMABAD"
    },
    "rwp": {
        "official": "RAWALPINDI",
        "trax": 288,
        "leopards": 1202,
        "tcs": "RAWALPINDI"
    },
    "pindi": {
        "official": "RAWALPINDI",
        "trax": 288,
        "leopards": 1202,
        "tcs": "RAWALPINDI"
    },
    "fsd": {
        "official": "FAISALABAD",
        "trax": 144,
        "leopards": 322,
        "tcs": "FAISALABAD"
    },
    "faislabad": {
        "official": "FAISALABAD",
        "trax": 144,
        "leopards": 322,
        "tcs": "FAISALABAD"
    },
    "mul": {
        "official": "MULTAN",
        "trax": 251,
        "leopards": 1017,
        "tcs": "MULTAN"
    },
    "hyd": {
        "official": "HYDERABAD",
        "trax": 172,
        "leopards": 475,
        "tcs": "HYDERABAD"
    },
    "pew": {
        "official": "PESHAWAR",
        "trax": 271,
        "leopards": 1140,
        "tcs": "PESHAWAR"
    },
    "psh": {
        "official": "PESHAWAR",
        "trax": 271,
        "leopards": 1140,
        "tcs": "PESHAWAR"
    },
    "qta": {
        "official": "QUETTA",
        "trax": 283,
        "leopards": 1151,
        "tcs": "QUETTA"
    },
    "ryk": {
        "official": "RAHIM YAR KHAN",
        "trax": 284,
        "leopards": 1170,
        "tcs": "RAHIMYARKHAN"
    },
    "gjw": {
        "official": "GUJRANWALA",
        "trax": 158,
        "leopards": 399,
        "tcs": "GUJRANWALA"
    },
    "skt": {
        "official": "SIALKOT",
        "trax": 315,
        "leopards": 1309,
        "tcs": "SIALKOT"
    }
};

function resolveCity(rawCity, targetCourier) {
    let cleanCity = (rawCity || '').toLowerCase().trim();
    let cityData = cityDictionary[cleanCity];

    if (!cityData) {
        return { status: 'error', errorMsg: `City "${rawCity}" not found.` };
    }

    let courierCode = cityData[targetCourier];
    
    if (!courierCode || courierCode === 0 || courierCode === '0.0') {
        let alts = [];
        if (cityData.trax) alts.push('Trax');
        if (cityData.leopards) alts.push('Leopards');
        if (cityData.tcs) alts.push('TCS');
        return { status: 'unserviceable', errorMsg: `"${cityData.official}" is not serviced by ${targetCourier}. Try: ${alts.join(', ') || 'None'}` };
    }

    return { status: 'success', officialName: cityData.official, code: courierCode };
}