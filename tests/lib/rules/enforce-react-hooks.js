/**
 * @fileoverview Just to make absolutely sure that everyone understand how great
 * @author osdnk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/enforce-react-hooks"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("enforce-react-hooks", rule, {

    valid: [
    ],

    invalid: [
        {
            code: "class A extends React.Component {}",
            errors: [{
                message: "Use hooks instead",
                type: "ClassDeclaration"
            }],
            parser: 'babel-eslint'
        }
    ]
});
