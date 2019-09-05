const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
  ac.grant("basic")
    .readOwn("profile")
    .updateOwn("profile")

  ac.grant("supervisor")
    .extend("basic")
    .readAny("profile")

  ac.grant("admin")
    .extend("basic")
    .extend("supervisor")
    .updateAny("profile")
    .deleteAny("profile")

  return ac;
})();
