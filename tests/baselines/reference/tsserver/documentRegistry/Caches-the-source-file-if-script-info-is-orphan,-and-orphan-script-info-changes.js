currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/index.ts]
import {a} from "./module1"

//// [/user/username/projects/myproject/module1.d.ts]
export const a: number;

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/tsconfig.json]
{
  "files": [
    "index.ts"
  ]
}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/index.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/index.ts :: Config file name: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/username/projects/myproject/tsconfig.json",
        "reason": "Creating possible configured project for /user/username/projects/myproject/index.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/index.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 0 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 0 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/module1.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/module1.d.ts Text-1 "export const a: number;"
	/user/username/projects/myproject/index.ts SVC-1-0 "import {a} from \"./module1\""


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	module1.d.ts
	  Imported via "./module1" from file 'index.ts'
	index.ts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/username/projects/myproject/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "4a33d78ee40d836c4f4e64c59aed976628aea0013be9585c5ff171dfc41baf98",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 1,
            "tsSize": 27,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 2,
            "dtsSize": 357,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {},
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": true,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/user/username/projects/myproject/index.ts",
        "configFile": "/user/username/projects/myproject/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject: *new*
  {}
/user/username/projects/myproject/module1.d.ts: *new*
  {}
/user/username/projects/myproject/tsconfig.json: *new*
  {}

Projects::
/user/username/projects/myproject/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json
/user/username/projects/myproject/index.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json *default*
/user/username/projects/myproject/module1.d.ts *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json

DocumentRegistry::
  Key:: undefined|undefined|undefined|false|undefined|undefined|undefined|undefined|undefined|undefined
    /user/username/projects/myproject/index.ts: TS 1
    /user/username/projects/myproject/module1.d.ts: TS 1
    /a/lib/lib.d.ts: TS 1
Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "change",
      "arguments": {
        "file": "/user/username/projects/myproject/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 28,
        "insertString": ""
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Projects::
/user/username/projects/myproject/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json
/user/username/projects/myproject/index.ts (Open) *changed*
    version: SVC-1-1 *changed*
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json *default*
/user/username/projects/myproject/module1.d.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json

Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/index.ts SVC-1-1 ""


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	index.ts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
DocumentRegistry::
  Key:: undefined|undefined|undefined|false|undefined|undefined|undefined|undefined|undefined|undefined
    /user/username/projects/myproject/index.ts: TS 1
    /a/lib/lib.d.ts: TS 1
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/module1.d.ts 1:: WatchInfo: /user/username/projects/myproject/module1.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/module1.d.ts 1:: WatchInfo: /user/username/projects/myproject/module1.d.ts 500 undefined WatchType: Closed Script info
Before request
//// [/user/username/projects/myproject/module1.d.ts]
export const a: number;
export const b: number;


Projects::
/user/username/projects/myproject/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json
/user/username/projects/myproject/index.ts (Open)
    version: SVC-1-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json *default*
/user/username/projects/myproject/module1.d.ts *changed*
    version: Text-1
    pendingReloadFromDisk: true *changed*
    containingProjects: 0 *changed*
        /user/username/projects/myproject/tsconfig.json *deleted*

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "change",
      "arguments": {
        "file": "/user/username/projects/myproject/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "import {a} from \"./module1\""
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Projects::
/user/username/projects/myproject/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 2

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json
/user/username/projects/myproject/index.ts (Open) *changed*
    version: SVC-1-2 *changed*
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json *default*
/user/username/projects/myproject/module1.d.ts
    version: Text-1
    pendingReloadFromDisk: true
    containingProjects: 0

Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json projectStateVersion: 3 projectProgramVersion: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/module1.d.ts Text-2 "export const a: number;\nexport const b: number;"
	/user/username/projects/myproject/index.ts SVC-1-2 "import {a} from \"./module1\""


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	module1.d.ts
	  Imported via "./module1" from file 'index.ts'
	index.ts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
DocumentRegistry::
  Key:: undefined|undefined|undefined|false|undefined|undefined|undefined|undefined|undefined|undefined
    /user/username/projects/myproject/index.ts: TS 1
    /a/lib/lib.d.ts: TS 1
    /user/username/projects/myproject/module1.d.ts: TS 1