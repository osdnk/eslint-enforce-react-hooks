/**
 * @fileoverview Just to make absolutely sure that everyone understand how great are hooks
 * @author osdnk
 */
"use strict";

const Components = require('eslint-plugin-react/lib/util/Components');
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Just to make absolutely sure that everyone understand how great",
            category: "Stylistic",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

  create: Components.detect((context, components, utils) => {
    return {
      ClassDeclaration: function(node) {
        if (utils.isES6Component(node)) {
          context.report({
            node: node,
            message: 'Use hooks instead'
          });
        }
      }
    };
  })
};
