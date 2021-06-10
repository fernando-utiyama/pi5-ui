"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
// Just return the tree
function default_1(_options) {
    return (tree, context) => {
        // const installTaskId = context.addTask(new NodePackageInstallTask());
        // context.addTask(new RunSchematicTask('ng-add-setup-project', options), [installTaskId]);
        context.addTask(new tasks_1.NodePackageInstallTask());
        return tree;
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map