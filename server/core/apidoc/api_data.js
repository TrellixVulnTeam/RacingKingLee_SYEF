define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "C__Users_Administrator_Documents_GitHub_RacingKingLee_server_core_apidoc_main_js",
    "groupTitle": "C__Users_Administrator_Documents_GitHub_RacingKingLee_server_core_apidoc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_Administrator_Documents_GitHub_RacingKingLee_server_core_doc_main_js",
    "groupTitle": "C__Users_Administrator_Documents_GitHub_RacingKingLee_server_core_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/accel/:token/:relativeThrottle",
    "title": "Control your accelerator",
    "name": "accel",
    "group": "arena",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>When you join this arena, a token is given. Use that!</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "relativeThrottle",
            "description": "<p>Relative control of your accelerator. Server accumlates your relativeThrottle to your current accelerator.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "message",
            "description": "<p>error description</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api_server/Arena.cs",
    "groupTitle": "arena"
  },
  {
    "type": "get",
    "url": "/brake/:token",
    "title": "Stop your car",
    "name": "brake",
    "group": "arena",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>When you join this arena, a token is given. Use that!</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "message",
            "description": "<p>error description</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api_server/Arena.cs",
    "groupTitle": "arena"
  },
  {
    "type": "get",
    "url": "/car_info",
    "title": "Get information of all cars",
    "name": "car_info",
    "group": "arena",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "none",
            "description": "<p>Array of json &quot;id:information&quot; where each information consist of &quot;name, color, type&quot;</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api_server/Arena.cs",
    "groupTitle": "arena"
  },
  {
    "type": "get",
    "url": "/car_pos",
    "title": "Get positions of all cars",
    "name": "car_pos",
    "group": "arena",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "none",
            "description": "<p>Array of json &quot;id:position&quot; where each position consist of &quot;x, y, angle, accel&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>x</p> ",
            "optional": false,
            "field": "x",
            "description": "<p>position of x Axis</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>y</p> ",
            "optional": false,
            "field": "y",
            "description": "<p>position of y Axis</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>angle</p> ",
            "optional": false,
            "field": "angle",
            "description": "<p>radian. angle of car</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>accel</p> ",
            "optional": false,
            "field": "accel",
            "description": "<p>current acceleration power</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api_server/Arena.cs",
    "groupTitle": "arena"
  },
  {
    "type": "get",
    "url": "/handle/:token/:relativeAngle",
    "title": "Control your handle",
    "name": "handle",
    "group": "arena",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>When you join this arena, a token is given. Use that!</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "relativeAngle",
            "description": "<p>Radian. Relative angle of your handle. Server accumlates your relativeAngle to your current angle of handle.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "message",
            "description": "<p>error description</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api_server/Arena.cs",
    "groupTitle": "arena"
  },
  {
    "type": "get",
    "url": "/join/:name/:color/:type",
    "title": "Join to arena",
    "name": "join",
    "group": "arena",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of your car</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "color",
            "description": "<p>color of your car</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>type of your car</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>success</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>unique ID to control your car.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "message",
            "description": "<p>error description</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api_server/Arena.cs",
    "groupTitle": "arena"
  }
] });