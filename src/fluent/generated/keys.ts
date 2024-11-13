import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '909212aa4efa438a8d7608f5f4fc0ff1'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '4455ec09227d4118bcbe585e7fd5ecae'
                    }
                }
            }
        }
    }
}
