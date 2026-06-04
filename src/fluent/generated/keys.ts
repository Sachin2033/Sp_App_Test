import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "25bebad1c02e4cce90064f1a7869b27e"
                        },
                        "src_server_script_js": {
                            "table": "sys_module",
                            "id": "d653737bd62044e69491619b98f050eb"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "26046bd1e4694251a55d8c4a34740e46"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "1bbdba3ab4e444a2bff1d10d1baa59fb"
                        }
                    };
            }
        }
    }
}
