"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[1434],{4317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(1527),i=n(6274);const a={id:"Get-UniversalDate",title:"Get-UniversalDate",description:'Help page for the "Get-UniversalDate" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},l=void 0,s={id:"reference/functions/Get-UniversalDate",title:"Get-UniversalDate",description:'Help page for the "Get-UniversalDate" command',source:"@site/docs/reference/functions/Get-UniversalDate.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Get-UniversalDate",permalink:"/docs/reference/functions/Get-UniversalDate",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Get-UniversalDate",title:"Get-UniversalDate",description:'Help page for the "Get-UniversalDate" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Get-Shortcut",permalink:"/docs/reference/functions/Get-Shortcut"},next:{title:"Get-UserProfiles",permalink:"/docs/reference/functions/Get-UserProfiles"}},o={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-DateTime",id:"-datetime",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.String",id:"systemstring",level:3},{value:"Returns the date/time for the local culture in a universal sortable date time pattern.",id:"returns-the-datetime-for-the-local-culture-in-a-universal-sortable-date-time-pattern",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,r.jsx)(t.p,{children:"Returns the date/time for the local culture in a universal sortable date time pattern."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-powershell",children:"Get-UniversalDate [[-DateTime] <String>] [[-ContinueOnError] <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,r.jsx)(t.p,{children:"Converts the current datetime or a datetime string for the current culture into a universal sortable date time pattern, e.g.\n2013-08-22 11:51:52Z"}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,r.jsx)(t.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-powershell",children:"Get-UniversalDate\n"})}),"\n",(0,r.jsx)(t.p,{children:"Returns the current date in a universal sortable date time pattern."}),"\n",(0,r.jsx)(t.h3,{id:"example-2",children:"EXAMPLE 2"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-powershell",children:"Get-UniversalDate -DateTime '25/08/2013'\n"})}),"\n",(0,r.jsx)(t.p,{children:"Returns the date for the current culture in a universal sortable date time pattern."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,r.jsx)(t.h3,{id:"-datetime",children:"-DateTime"}),"\n",(0,r.jsx)(t.p,{children:"Specify the DateTime in the current culture."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 1\nDefault value: ((Get-Date -Format ($culture).DateTimeFormat.UniversalDateTimePattern).ToString())\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(t.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,r.jsx)(t.p,{children:"Continue if an error is encountered.\nDefault: $false."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(t.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,r.jsxs)(t.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,r.jsx)(t.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,r.jsx)(t.h3,{id:"none",children:"None"}),"\n",(0,r.jsx)(t.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,r.jsx)(t.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,r.jsx)(t.h3,{id:"systemstring",children:"System.String"}),"\n",(0,r.jsx)(t.h3,{id:"returns-the-datetime-for-the-local-culture-in-a-universal-sortable-date-time-pattern",children:"Returns the date/time for the local culture in a universal sortable date time pattern."}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"NOTES"}),"\n",(0,r.jsx)(t.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6274:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>l});var r=n(959);const i={},a=r.createContext(i);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);