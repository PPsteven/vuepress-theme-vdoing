(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{671:function(s,t,a){"use strict";a.r(t);var n=a(24),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[s._v("给定一个非空字符串 "),a("code",[s._v("s")]),s._v("，"),a("strong",[s._v("最多")]),s._v("删除一个字符。判断是否能成为回文字符串。")]),s._v(" "),a("h2",{attrs:{id:"样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[s._v("#")]),s._v(" 样例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Input: "aba"\nOutput: True\n\nInput: "abca"\nOutput: True\n# 删除 c\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[s._v("#")]),s._v(" 题解")]),s._v(" "),a("p",[s._v("双指针搜索，中间加上了一项条件的判断")]),s._v(" "),a("h2",{attrs:{id:"python示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python示例"}},[s._v("#")]),s._v(" Python示例")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("validPalindrome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("checkPalindrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n                l "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n                r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v(" \n        \n        l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                l "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n                r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("  checkPalindrom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v("  checkPalindrom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);