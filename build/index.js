var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// app/Assets/Img/Classes/barbarian.png
var barbarian_default;
var init_barbarian = __esm({
  "app/Assets/Img/Classes/barbarian.png"() {
    barbarian_default = "/build/_assets/barbarian-POOTUZMZ.png";
  }
});

// app/Classes/BaseClass.js
var BaseClass;
var init_BaseClass = __esm({
  "app/Classes/BaseClass.js"() {
    init_react();
    BaseClass = class {
      displayName;
      icon;
      description;
      stats;
      skills;
      publicFields;
      slug;
      getPublicFields() {
        const output = {};
        this.publicFields.map((key) => {
          output[key] = this[key];
        });
        return output;
      }
    };
  }
});

// app/Assets/Img/spell.png
var spell_default;
var init_spell = __esm({
  "app/Assets/Img/spell.png"() {
    spell_default = "/build/_assets/spell-6Y6VIHFP.png";
  }
});

// app/Skills/BaseSkill.js
var BaseSkill;
var init_BaseSkill = __esm({
  "app/Skills/BaseSkill.js"() {
    init_react();
    init_spell();
    BaseSkill = class {
      Player;
      Enemy;
      displayName;
      stats;
      classess;
      type;
      minLevel;
      cost;
      currency;
      cooldown;
      main;
      publicFields;
      icon = spell_default;
      constructor(_Player, _Enemy) {
        this.Player = _Player;
        this.Enemy = _Enemy;
      }
      get getPublicFields() {
        const output = {};
        this.publicFields.map((key) => {
          output[key] = this[key];
        });
        return output;
      }
    };
  }
});

// app/Skills/IceArrow/IceArrow.js
var IceArrow;
var init_IceArrow = __esm({
  "app/Skills/IceArrow/IceArrow.js"() {
    init_react();
    init_BaseSkill();
    IceArrow = class extends BaseSkill {
      displayName = "Ice Arrow";
      stats = {
        penetration: 5,
        magic: 10
      };
      classes = null;
      type = "Magical";
      minLevel = 2;
      cost = 15;
      currency = "Mana";
      cooldown = 5;
    };
  }
});

// app/Skills/AmirInator/AmirInator.js
var AmirInator;
var init_AmirInator = __esm({
  "app/Skills/AmirInator/AmirInator.js"() {
    init_react();
    init_BaseSkill();
    AmirInator = class extends BaseSkill {
      displayName = "AmirInator";
      stats = {
        penetration: 5,
        magic: 10
      };
      classes = null;
      type = "Magical";
      minLevel = 0;
      cost = 15;
      currency = "Mana";
      cooldown = 5;
    };
  }
});

// app/Classes/Barbarian/Barbarian.js
var Barbarian_exports = {};
__export(Barbarian_exports, {
  Barbarian: () => Barbarian
});
var Barbarian;
var init_Barbarian = __esm({
  "app/Classes/Barbarian/Barbarian.js"() {
    init_react();
    init_barbarian();
    init_BaseClass();
    init_IceArrow();
    init_AmirInator();
    Barbarian = class extends BaseClass {
      displayName = "Barbarian";
      slug = "barbarian";
      icon = barbarian_default;
      shortDescription = "Pure muscle and physical strength.";
      description = "Strong but inaccurate, dealing more damage at the expense of instability";
      stats = {
        strength: 15,
        dexterity: 4
      };
      skills = [new IceArrow(), new AmirInator()];
      publicFields = ["icon", "description", "stats", "skills"];
    };
  }
});

// app/Assets/Img/Classes/paladin.png
var paladin_default;
var init_paladin = __esm({
  "app/Assets/Img/Classes/paladin.png"() {
    paladin_default = "/build/_assets/paladin-3ERTDGZB.png";
  }
});

// app/Classes/Paladin/Paladin.js
var Paladin_exports = {};
__export(Paladin_exports, {
  Paladin: () => Paladin
});
var Paladin;
var init_Paladin = __esm({
  "app/Classes/Paladin/Paladin.js"() {
    init_react();
    init_paladin();
    init_BaseClass();
    init_IceArrow();
    init_AmirInator();
    Paladin = class extends BaseClass {
      displayName = "Paladin";
      slug = "paladin";
      icon = paladin_default;
      shortDescription = "The holy warriors of god. Deus le vult.";
      description = "Sturdy with a variety of healing spells. The perfect tankers one would say";
      stats = {
        strength: 15,
        dexterity: 4
      };
      skills = [new IceArrow(), new AmirInator()];
      publicFields = ["icon", "description", "stats", "skills"];
    };
  }
});

// app/Assets/Img/Classes/druid.png
var druid_default;
var init_druid = __esm({
  "app/Assets/Img/Classes/druid.png"() {
    druid_default = "/build/_assets/druid-7JWDCBXE.png";
  }
});

// app/Classes/Druid/Druid.js
var Druid_exports = {};
__export(Druid_exports, {
  Druid: () => Druid
});
var Druid;
var init_Druid = __esm({
  "app/Classes/Druid/Druid.js"() {
    init_react();
    init_druid();
    init_BaseClass();
    init_IceArrow();
    init_AmirInator();
    Druid = class extends BaseClass {
      displayName = "Druid";
      slug = "druid";
      icon = druid_default;
      shortDescription = "Masters of magic with unmatched wisdom.";
      description = "High wisdom and a lot of spells. Not to mention quite the long... staff. Yes, staff";
      stats = {
        strength: 15,
        dexterity: 4
      };
      skills = [new IceArrow(), new AmirInator()];
      publicFields = ["icon", "description", "stats", "skills"];
    };
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/Assets/CSS/global.css
var global_default = "/build/_assets/global-JLI3MT65.css";

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\root.jsx
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null));
}
function Document({ title, children }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "UTF-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /* @__PURE__ */ React.createElement("title", null, title ?? "Test title"), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, true ? /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null) : null));
}
function links() {
  return [{ rel: "stylesheet", href: global_default }];
}

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\register\preview\barbarian.jsx
var barbarian_exports = {};
__export(barbarian_exports, {
  default: () => BarbarianPreview,
  links: () => links2,
  loader: () => loader
});
init_react();

// app/Assets/Img/placeholder.png
var placeholder_default = "/build/_assets/placeholder-V2JITBSV.png";

// app/Assets/CSS/index.css
var CSS_default = "/build/_assets/index-2AWN4EB4.css";

// app/Components/ClassPreview/Complete.jsx
init_react();
function CompleteClassPreview({ className, theClass }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: ["flex flex-column items-center stretch", className].join(" ")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-column items-center stretch container py1 rounded"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bold capitalize link-colored"
  }, theClass.displayName), /* @__PURE__ */ React.createElement("img", {
    src: theClass.icon,
    alt: "class-icon",
    className: "class-preview-img mt1"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "mt1 grey px1 center"
  }, theClass.description)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-column stretch container py1 rounded border-top border-red mt1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "link-colored self-center"
  }, "Initial Stats"), Object.keys(theClass.stats).map((key, i) => /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row px1"
  }, /* @__PURE__ */ React.createElement("span", {
    key: `${i}-name`,
    className: "capitalize link-colored"
  }, key, ": \xA0"), /* @__PURE__ */ React.createElement("span", {
    key: `${i}-value`,
    className: `${theClass.stats[key] >= 5 ? "text-green" : "text-red"} bold`
  }, theClass.stats[key])))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-column stretch container py1 rounded border-top border-red mt1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "link-colored self-center"
  }, "Skills"), Object.keys(theClass.skills).map((key, i) => /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row px1 link-colored"
  }, /* @__PURE__ */ React.createElement("img", {
    key: `spell_icon-${i}-value`,
    src: theClass.skills[key].icon,
    className: "spell-icon self-center"
  }), /* @__PURE__ */ React.createElement("span", {
    key: `${i}-skill_name`,
    className: "ml1"
  }, theClass.skills[key].displayName), theClass.skills[key].minLevel > 0 && /* @__PURE__ */ React.createElement("span", {
    key: `${i}-skill_level`,
    className: "ml1 grey h6 self-center"
  }, "[LVL ", theClass.skills[key].minLevel, "]")))));
}

// app/services/session.server.js
init_react();
var import_remix3 = __toESM(require_remix());
var sessionStorage = (0, import_remix3.createCookieSessionStorage)({
  cookie: {
    name: "_",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["eni.eni.eni"],
    secure: false
  }
});
var { getSession, commitSession, destroySession } = sessionStorage;

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\register\preview\barbarian.jsx
init_Barbarian();
var import_remix4 = __toESM(require_remix());
async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("uuid")) {
    return (0, import_remix4.redirect)("/");
  }
  return null;
}
function BarbarianPreview() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-column items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container flex flex-column items-center max-width-1 py1 rounded"
  }, /* @__PURE__ */ React.createElement("img", {
    src: placeholder_default,
    alt: "logo",
    className: "logo"
  })), /* @__PURE__ */ React.createElement(CompleteClassPreview, {
    className: "mt1 max-width-1",
    theClass: new Barbarian()
  }), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/register/selected/barbarian",
    className: "mt1 input-button p1 rounded h4 text-decoration-none bold"
  }, "SELECT"));
}
function links2() {
  return [{ rel: "stylesheet", href: CSS_default }];
}

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\register\preview\paladin.jsx
var paladin_exports = {};
__export(paladin_exports, {
  default: () => PaladinPreview,
  links: () => links3,
  loader: () => loader2
});
init_react();
init_Paladin();
var import_remix5 = __toESM(require_remix());
async function loader2({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("uuid")) {
    return (0, import_remix5.redirect)("/");
  }
  return null;
}
function PaladinPreview() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-column items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container flex flex-column items-center max-width-1 py1 rounded"
  }, /* @__PURE__ */ React.createElement("img", {
    src: placeholder_default,
    alt: "logo",
    className: "logo"
  })), /* @__PURE__ */ React.createElement(CompleteClassPreview, {
    className: "mt1 max-width-1",
    theClass: new Paladin()
  }), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/register/selected/paladin",
    className: "mt1 input-button p1 rounded h4 text-decoration-none bold"
  }, "SELECT"));
}
function links3() {
  return [{ rel: "stylesheet", href: CSS_default }];
}

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\register\selected\$name.jsx
var name_exports = {};
__export(name_exports, {
  action: () => action,
  default: () => Selected,
  links: () => links4,
  loader: () => loader3
});
init_react();
var import_remix7 = __toESM(require_remix());

// app/Components/Register/Form/RegisterForm.jsx
init_react();
var import_remix6 = __toESM(require_remix());
function RegisterForm({ selectedClass }) {
  return /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "POST",
    className: "flex flex-column items-center stretch"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "center input-username rounded px1",
    type: "text",
    name: "username",
    placeholder: "Username"
  }), /* @__PURE__ */ React.createElement("input", {
    className: "center input-username rounded px1 mt1",
    type: "email",
    name: "email",
    placeholder: "Email"
  }), /* @__PURE__ */ React.createElement("input", {
    className: "center input-username rounded px1 mt1",
    type: "password",
    name: "password",
    placeholder: "Password"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "class",
    value: selectedClass.slug
  }), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "BEGIN",
    className: "mt1 input-button p1 rounded h4"
  }));
}

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\register\selected\$name.jsx
var import_validate = require("validate.js");

// app/Helpers/FieldConstraints.js
init_react();
var usernameConstraint = {
  presence: true,
  length: {
    minimum: 3,
    maximum: 16,
    tooShort: " cant be shorter than 3 characters",
    tooLong: " cant be longer than 16 characters"
  }
};
var passwordConstraint = {
  presence: true,
  length: {
    minimum: 6,
    tooShort: " cant be shorter than 6 characters"
  }
};
var emailConstraint = {
  email: {
    message: "is not valid"
  }
};

// app/Helpers/Cryptography.js
init_react();
var crypto = require("crypto");
var password = "eni.eni.eni";
async function digestMessage(plaintext) {
  const pwUtf8 = new TextEncoder().encode(password);
  const pwHash = await crypto.subtle.digest("SHA-256", pwUtf8);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ivStr = Array.from(iv).map((b) => String.fromCharCode(b)).join("");
  const alg = { name: "AES-GCM", iv };
  const key = await crypto.subtle.importKey("raw", pwHash, alg, false, [
    "encrypt"
  ]);
  const ptUint8 = new TextEncoder().encode(plaintext);
  const ctBuffer = await crypto.subtle.encrypt(alg, key, ptUint8);
  const ctArray = Array.from(new Uint8Array(ctBuffer));
  const ctStr = ctArray.map((byte) => String.fromCharCode(byte)).join("");
  return btoa(ivStr + ctStr);
}
async function unDigest(ciphertext) {
  const pwUtf8 = new TextEncoder().encode(password);
  const pwHash = await crypto.subtle.digest("SHA-256", pwUtf8);
  const ivStr = atob(ciphertext).slice(0, 12);
  const iv = new Uint8Array(Array.from(ivStr).map((ch) => ch.charCodeAt(0)));
  const alg = { name: "AES-GCM", iv };
  const key = await crypto.subtle.importKey("raw", pwHash, alg, false, [
    "decrypt"
  ]);
  const ctStr = atob(ciphertext).slice(12);
  const ctUint8 = new Uint8Array(Array.from(ctStr).map((ch) => ch.charCodeAt(0)));
  try {
    const plainBuffer = await crypto.subtle.decrypt(alg, key, ctUint8);
    const plaintext = new TextDecoder().decode(plainBuffer);
    return plaintext;
  } catch (e) {
    return null;
  }
}

// app/Components/Errors.js
init_react();
var Errors = ({ errors, className }) => {
  if (!errors)
    return null;
  return /* @__PURE__ */ React.createElement("div", {
    className
  }, Object.keys(errors).map((item, i) => Object.keys(errors[item]).map((a) => /* @__PURE__ */ React.createElement("div", {
    key: i
  }, errors[item][a]))));
};

// app/Classes/getClassByName.js
init_react();
async function getClassByName(name) {
  switch (name) {
    case "barbarian":
      return new (await Promise.resolve().then(() => (init_Barbarian(), Barbarian_exports))).Barbarian();
    case "druid":
      return new (await Promise.resolve().then(() => (init_Druid(), Druid_exports))).Druid();
    case "paladin":
      return new (await Promise.resolve().then(() => (init_Paladin(), Paladin_exports))).Paladin();
    default:
      return null;
  }
}

// app/services/db.server.js
init_react();
var import_client = require("@prisma/client");
var global = {
  prisma: import_client.PrismaClient | void 0
};
var prisma = global.prisma || new import_client.PrismaClient({
  log: ["query", "info", "warn", "error"]
});
prisma.$on("query", (e) => {
  console.log("Query: " + e.query);
  console.log("Params: " + e.params);
  console.log("Duration: " + e.duration + "ms");
});
if (true)
  global.prisma = prisma;

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\register\selected\$name.jsx
async function loader3({ request, params }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("uuid")) {
    return (0, import_remix7.redirect)("/");
  }
  console.log(await getClassByName(params.name).name);
  return await getClassByName(params.name) ?? (0, import_remix7.redirect)("/");
}
async function action({ request }) {
  const body = await request.formData();
  const username = body.get("username");
  const email = body.get("email");
  const password2 = body.get("password");
  const selectedClass = body.get("class");
  const session = await getSession(request.headers.get("Cookie"));
  const errors = (0, import_validate.validate)({
    username,
    email,
    password: password2
  }, {
    username: usernameConstraint,
    email: emailConstraint,
    password: passwordConstraint
  });
  if (errors) {
    return errors;
  }
  const user = await prisma.user.findUnique({
    where: {
      username
    },
    select: {
      uuid: true
    }
  });
  if (user !== null) {
    return { username: ["This username already exists"] };
  }
  const created = await prisma.user.create({
    data: {
      username,
      email,
      password: await digestMessage(password2),
      lastActiveIP: "test",
      lastActiveAgent: "test",
      Profile: {
        create: {
          class: selectedClass
        }
      },
      Stats: {
        create: {}
      },
      Equipment: {
        create: {}
      }
    },
    select: {
      uuid: true
    }
  });
  if (created["uuid"]) {
    session.set("uuid", created["uuid"]);
    return (0, import_remix7.redirect)("/", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return {
    server: "Database issues, your account has not been created"
  };
}
function Selected() {
  const selectedClass = (0, import_remix7.useLoaderData)();
  const actionData = (0, import_remix7.useActionData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-column items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container flex flex-column items-center max-width-1 py1 rounded"
  }, /* @__PURE__ */ React.createElement("img", {
    src: placeholder_default,
    alt: "logo",
    className: "logo"
  })), /* @__PURE__ */ React.createElement(Errors, {
    errors: actionData,
    className: "max-width-1 container py1 flex flex-column rounded border-top border-red items-center m1 error-container h5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container flex flex-column items-center max-width-1 py1 rounded mt2 border-top border-red"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "link-colored"
  }, "You have selected"), /* @__PURE__ */ React.createElement("img", {
    src: selectedClass.icon,
    className: "class-preview-img mt1"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "mt1 bold link-colored"
  }, selectedClass.displayName), /* @__PURE__ */ React.createElement("span", {
    className: "grey px1 center"
  }, selectedClass.description)), /* @__PURE__ */ React.createElement("div", {
    className: "container max-width-1 py1 rounded mt1"
  }, /* @__PURE__ */ React.createElement(RegisterForm, {
    selectedClass
  })));
}
function links4() {
  return [{ rel: "stylesheet", href: CSS_default }];
}

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\register\preview\druid.jsx
var druid_exports = {};
__export(druid_exports, {
  default: () => DruidPreview,
  links: () => links5,
  loader: () => loader4
});
init_react();
init_Druid();
var import_remix8 = __toESM(require_remix());
async function loader4({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("uuid")) {
    return (0, import_remix8.redirect)("/");
  }
  return null;
}
function DruidPreview() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-column items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container flex flex-column items-center max-width-1 py1 rounded"
  }, /* @__PURE__ */ React.createElement("img", {
    src: placeholder_default,
    alt: "logo",
    className: "logo"
  })), /* @__PURE__ */ React.createElement(CompleteClassPreview, {
    className: "mt1 max-width-1",
    theClass: new Druid()
  }), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/register/selected/druid",
    className: "mt1 input-button p1 rounded h4 text-decoration-none bold"
  }, "SELECT"));
}
function links5() {
  return [{ rel: "stylesheet", href: CSS_default }];
}

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\register\preview\index.jsx
var preview_exports = {};
__export(preview_exports, {
  loader: () => loader5
});
init_react();
var import_remix9 = __toESM(require_remix());
function loader5() {
  return (0, import_remix9.redirect)("/register");
}

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\register\index.jsx
var register_exports = {};
__export(register_exports, {
  default: () => RegisterPage,
  links: () => links6,
  loader: () => loader6
});
init_react();
var import_remix11 = __toESM(require_remix());

// app/Components/ClassPreview/Compact.jsx
init_react();
var import_remix10 = __toESM(require_remix());
function CompactClassPreview({ className, theClass }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: ["container flex flex-row rounded py1", className].join(" ")
  }, /* @__PURE__ */ React.createElement("img", {
    src: theClass.icon,
    alt: "class-image",
    className: "class-preview-img ml1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-column justify-between ml1"
  }, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: `preview/${theClass.slug}`,
    className: "link-colored bold fit-content capitalize"
  }, theClass.displayName), /* @__PURE__ */ React.createElement("span", {
    className: "flex flex-row h6 grey pr1"
  }, theClass.shortDescription)));
}

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\register\index.jsx
init_Barbarian();
init_Druid();
init_Paladin();
async function loader6({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("uuid")) {
    return (0, import_remix11.redirect)("/");
  }
  return null;
}
function RegisterPage() {
  const classList = [new Barbarian(), new Druid(), new Paladin()];
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-column items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container flex flex-column items-center max-width-1 py1 rounded"
  }, /* @__PURE__ */ React.createElement("img", {
    src: placeholder_default,
    alt: "logo",
    className: "logo"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "mt1 link-colored bold"
  }, "Create your character")), /* @__PURE__ */ React.createElement("span", {
    className: "mt2 h6 grey"
  }, "Please select your starting class"), /* @__PURE__ */ React.createElement("div", {
    className: "mt1 stretch max-width-1"
  }, classList.map((theClass) => /* @__PURE__ */ React.createElement(CompactClassPreview, {
    theClass
  }))));
}
function links6() {
  return [{ rel: "stylesheet", href: CSS_default }];
}

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\login\index.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => LoginPage,
  links: () => links7,
  loader: () => loader7
});
init_react();
var import_remix12 = __toESM(require_remix());

// app/Assets/Img/new.png
var new_default = "/build/_assets/new-NRSHGGKL.png";

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\login\index.jsx
var import_validate2 = require("validate.js");
async function loader7({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("uuid"))
    return (0, import_remix12.redirect)("/");
  return null;
}
async function action2({ request }) {
  const body = await request.formData();
  const username = body.get("username");
  const password2 = body.get("password");
  const session = await getSession(request.headers.get("Cookie"));
  const errors = (0, import_validate2.validate)({
    username,
    password: password2
  }, {
    username: usernameConstraint,
    password: passwordConstraint
  });
  if (errors) {
    return errors;
  }
  const user = await prisma.user.findUnique({
    where: {
      username
    },
    select: {
      uuid: true,
      password: true
    }
  });
  if (user === null) {
    return { username: ["Such username does not exist"] };
  }
  const passwordsMatch = password2 == await unDigest(user["password"]);
  if (passwordsMatch) {
    session.set("uuid", user["uuid"]);
    return (0, import_remix12.redirect)("/", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return {
    password: ["Password just isnt quite right"]
  };
}
function LoginPage() {
  const actionData = (0, import_remix12.useActionData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-column items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: placeholder_default,
    alt: "logo",
    className: "logo"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "py1 h5 grey italic"
  }, "===Insert random bullshit here==="), /* @__PURE__ */ React.createElement("div", {
    className: "max-width-1 container py1 flex flex-column rounded mb2"
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("img", {
    src: new_default,
    alt: "icon-new",
    className: "pl1"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml1"
  }, "Announcements here"))), /* @__PURE__ */ React.createElement(Errors, {
    errors: actionData,
    className: "max-width-1 container py1 flex flex-column rounded border-top border-red items-center m1 error-container h5"
  }), /* @__PURE__ */ React.createElement(import_remix12.Form, {
    className: "max-width-1 container py1 flex flex-column rounded border-top border-red items-center",
    method: "POST"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "username",
    placeholder: "Username",
    className: "input-username mb1 rounded border border-yellow center"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Password",
    className: "input-password mb1 rounded border border-yellow center"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "LOGIN",
    className: "input-login p1 rounded h4"
  })), /* @__PURE__ */ React.createElement(import_remix12.Link, {
    to: "/register/",
    className: "mt1 input-register p1 rounded h4 text-decoration-none"
  }, "REGISTER"), /* @__PURE__ */ React.createElement("div", {
    className: "container rounded max-width-1 py1 flex flex-column items-center h6 mt1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "px1 center"
  }, "Welcome to ", /* @__PURE__ */ React.createElement("b", null, "Bl**k Dragon RPG!")), /* @__PURE__ */ React.createElement("span", {
    className: "mt1 center px1 center"
  }, "Here you can explore huge fantasy world full of monsters you can fight with. Get stronger, find clanmates, level up and reach the ultimate goal - slay the mighty Bl**k Dragon who has been terrifying our lands for years.")));
}
function links7() {
  return [{ rel: "stylesheet", href: CSS_default }];
}

// route:C:\Users\Eni\Desktop\Projects\Remix\1\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links8,
  loader: () => loader8
});
init_react();
var import_client2 = require("@prisma/client");
var import_remix13 = __toESM(require_remix());
var loader8 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("uuid")) {
    return (0, import_remix13.redirect)("/login/");
  }
  const uuid = session.get("uuid");
  const user = await prisma.user.findUnique({
    where: {
      uuid
    },
    select: {
      username: true,
      Stats: {
        select: {
          strength: true,
          dexterity: true
        }
      }
    }
  });
  if (user === null) {
    session.unset("uuid");
    return (0, import_remix13.redirect)("/login/", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return user;
};
function Index() {
  const user = (0, import_remix13.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, user.username));
}
function links8() {
  return [{ rel: "stylesheet", href: CSS_default }];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "11c42078", "entry": { "module": "/build/entry.client-XZSPW335.js", "imports": ["/build/_shared/chunk-JD5VJZ62.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-OGLSJKSN.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-HJUCMLAS.js", "imports": ["/build/_shared/chunk-3T2WVRXL.js", "/build/_shared/chunk-BVJVICEB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-KHZQBHAW.js", "imports": ["/build/_shared/chunk-KA4EK5Q5.js", "/build/_shared/chunk-3T2WVRXL.js", "/build/_shared/chunk-BT2SPAKR.js", "/build/_shared/chunk-BVJVICEB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/index": { "id": "routes/register/index", "parentId": "root", "path": "register", "index": true, "caseSensitive": void 0, "module": "/build/routes/register/index-4SM4LUH3.js", "imports": ["/build/_shared/chunk-K3DZHSNQ.js", "/build/_shared/chunk-GDYJBS34.js", "/build/_shared/chunk-DCNBW7WI.js", "/build/_shared/chunk-MUN7IX23.js", "/build/_shared/chunk-BT2SPAKR.js", "/build/_shared/chunk-BVJVICEB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/preview/barbarian": { "id": "routes/register/preview/barbarian", "parentId": "root", "path": "register/preview/barbarian", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register/preview/barbarian-WDA2PBNY.js", "imports": ["/build/_shared/chunk-VBDSTE7A.js", "/build/_shared/chunk-K3DZHSNQ.js", "/build/_shared/chunk-MUN7IX23.js", "/build/_shared/chunk-BT2SPAKR.js", "/build/_shared/chunk-BVJVICEB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/preview/druid": { "id": "routes/register/preview/druid", "parentId": "root", "path": "register/preview/druid", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register/preview/druid-AGUF2U72.js", "imports": ["/build/_shared/chunk-VBDSTE7A.js", "/build/_shared/chunk-DCNBW7WI.js", "/build/_shared/chunk-MUN7IX23.js", "/build/_shared/chunk-BT2SPAKR.js", "/build/_shared/chunk-BVJVICEB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/preview/index": { "id": "routes/register/preview/index", "parentId": "root", "path": "register/preview", "index": true, "caseSensitive": void 0, "module": "/build/routes/register/preview/index-IKDACYNT.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/preview/paladin": { "id": "routes/register/preview/paladin", "parentId": "root", "path": "register/preview/paladin", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register/preview/paladin-B27LBQ37.js", "imports": ["/build/_shared/chunk-VBDSTE7A.js", "/build/_shared/chunk-GDYJBS34.js", "/build/_shared/chunk-MUN7IX23.js", "/build/_shared/chunk-BT2SPAKR.js", "/build/_shared/chunk-BVJVICEB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/selected/$name": { "id": "routes/register/selected/$name", "parentId": "root", "path": "register/selected/:name", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register/selected/$name-Q52IQ3JH.js", "imports": ["/build/_shared/chunk-KA4EK5Q5.js", "/build/_shared/chunk-3T2WVRXL.js", "/build/_shared/chunk-BT2SPAKR.js", "/build/_shared/chunk-BVJVICEB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-11C42078.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/register/preview/barbarian": {
    id: "routes/register/preview/barbarian",
    parentId: "root",
    path: "register/preview/barbarian",
    index: void 0,
    caseSensitive: void 0,
    module: barbarian_exports
  },
  "routes/register/preview/paladin": {
    id: "routes/register/preview/paladin",
    parentId: "root",
    path: "register/preview/paladin",
    index: void 0,
    caseSensitive: void 0,
    module: paladin_exports
  },
  "routes/register/selected/$name": {
    id: "routes/register/selected/$name",
    parentId: "root",
    path: "register/selected/:name",
    index: void 0,
    caseSensitive: void 0,
    module: name_exports
  },
  "routes/register/preview/druid": {
    id: "routes/register/preview/druid",
    parentId: "root",
    path: "register/preview/druid",
    index: void 0,
    caseSensitive: void 0,
    module: druid_exports
  },
  "routes/register/preview/index": {
    id: "routes/register/preview/index",
    parentId: "root",
    path: "register/preview",
    index: true,
    caseSensitive: void 0,
    module: preview_exports
  },
  "routes/register/index": {
    id: "routes/register/index",
    parentId: "root",
    path: "register",
    index: true,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "root",
    path: "login",
    index: true,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9hcHAvQ2xhc3Nlcy9CYXNlQ2xhc3MuanMiLCAiLi4vYXBwL1NraWxscy9CYXNlU2tpbGwuanMiLCAiLi4vYXBwL1NraWxscy9JY2VBcnJvdy9JY2VBcnJvdy5qcyIsICIuLi9hcHAvU2tpbGxzL0FtaXJJbmF0b3IvQW1pckluYXRvci5qcyIsICIuLi9hcHAvQ2xhc3Nlcy9CYXJiYXJpYW4vQmFyYmFyaWFuLmpzIiwgIi4uL2FwcC9DbGFzc2VzL1BhbGFkaW4vUGFsYWRpbi5qcyIsICIuLi9hcHAvQ2xhc3Nlcy9EcnVpZC9EcnVpZC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcRW5pXFxEZXNrdG9wXFxQcm9qZWN0c1xcUmVtaXhcXDFcXGFwcFxccm9vdC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxFbmlcXERlc2t0b3BcXFByb2plY3RzXFxSZW1peFxcMVxcYXBwXFxyb3V0ZXNcXHJlZ2lzdGVyXFxwcmV2aWV3XFxiYXJiYXJpYW4uanN4IiwgIi4uL2FwcC9Db21wb25lbnRzL0NsYXNzUHJldmlldy9Db21wbGV0ZS5qc3giLCAiLi4vYXBwL3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xcRW5pXFxEZXNrdG9wXFxQcm9qZWN0c1xcUmVtaXhcXDFcXGFwcFxccm91dGVzXFxyZWdpc3RlclxccHJldmlld1xccGFsYWRpbi5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxFbmlcXERlc2t0b3BcXFByb2plY3RzXFxSZW1peFxcMVxcYXBwXFxyb3V0ZXNcXHJlZ2lzdGVyXFxzZWxlY3RlZFxcJG5hbWUuanN4IiwgIi4uL2FwcC9Db21wb25lbnRzL1JlZ2lzdGVyL0Zvcm0vUmVnaXN0ZXJGb3JtLmpzeCIsICIuLi9hcHAvSGVscGVycy9GaWVsZENvbnN0cmFpbnRzLmpzIiwgIi4uL2FwcC9IZWxwZXJzL0NyeXB0b2dyYXBoeS5qcyIsICIuLi9hcHAvQ29tcG9uZW50cy9FcnJvcnMuanMiLCAiLi4vYXBwL0NsYXNzZXMvZ2V0Q2xhc3NCeU5hbWUuanMiLCAiLi4vYXBwL3NlcnZpY2VzL2RiLnNlcnZlci5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXEVuaVxcRGVza3RvcFxcUHJvamVjdHNcXFJlbWl4XFwxXFxhcHBcXHJvdXRlc1xccmVnaXN0ZXJcXHByZXZpZXdcXGRydWlkLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXEVuaVxcRGVza3RvcFxcUHJvamVjdHNcXFJlbWl4XFwxXFxhcHBcXHJvdXRlc1xccmVnaXN0ZXJcXHByZXZpZXdcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXEVuaVxcRGVza3RvcFxcUHJvamVjdHNcXFJlbWl4XFwxXFxhcHBcXHJvdXRlc1xccmVnaXN0ZXJcXGluZGV4LmpzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9DbGFzc1ByZXZpZXcvQ29tcGFjdC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxFbmlcXERlc2t0b3BcXFByb2plY3RzXFxSZW1peFxcMVxcYXBwXFxyb3V0ZXNcXGxvZ2luXFxpbmRleC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxFbmlcXERlc2t0b3BcXFByb2plY3RzXFxSZW1peFxcMVxcYXBwXFxyb3V0ZXNcXGluZGV4LmpzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgY2xhc3MgQmFzZUNsYXNzIHtcclxuICBkaXNwbGF5TmFtZTtcclxuICBpY29uO1xyXG4gIGRlc2NyaXB0aW9uO1xyXG4gIHN0YXRzO1xyXG4gIHNraWxscztcclxuICBwdWJsaWNGaWVsZHM7XHJcbiAgc2x1ZztcclxuICAvLyAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xyXG4gIC8vICAgICB0aGlzLmljb24gPSBvYmplY3RbXCJpY29uXCJdO1xyXG4gIC8vICAgICB0aGlzLmRlc2NyaXB0aW9uID0gb2JqZWN0W1wiZGVzY3JpcHRpb25cIl07XHJcbiAgLy8gICAgIHRoaXMuc3RhdHMgPSBvYmplY3RbXCJzdGF0c1wiXTtcclxuICAvLyAgICAgdGhpcy5za2lsbHMgPSBvYmplY3RbXCJza2lsbHNcIl07XHJcbiAgLy8gICAgIHRoaXMucHVibGljRmllbGRzID0gb2JqZWN0W1wicHVibGljRmllbGRzXCJdO1xyXG4gIC8vICAgfVxyXG5cclxuICBnZXRQdWJsaWNGaWVsZHMoKSB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSB7fTtcclxuXHJcbiAgICB0aGlzLnB1YmxpY0ZpZWxkcy5tYXAoKGtleSkgPT4ge1xyXG4gICAgICBvdXRwdXRba2V5XSA9IHRoaXNba2V5XTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfVxyXG59XHJcbiIsICJpbXBvcnQgU3BlbGxJY29uIGZyb20gXCJ+L0Fzc2V0cy9JbWcvc3BlbGwucG5nXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVNraWxsIHtcclxuICBQbGF5ZXI7XHJcbiAgRW5lbXk7XHJcbiAgZGlzcGxheU5hbWU7XHJcbiAgc3RhdHM7XHJcbiAgY2xhc3Nlc3M7XHJcbiAgdHlwZTtcclxuICBtaW5MZXZlbDtcclxuICBjb3N0O1xyXG4gIGN1cnJlbmN5O1xyXG4gIGNvb2xkb3duO1xyXG4gIG1haW47XHJcbiAgcHVibGljRmllbGRzO1xyXG4gIGljb24gPSBTcGVsbEljb247XHJcbiAgLy8gICBjb25zdHJ1Y3Rvcihza2lsbCkge1xyXG4gIC8vICAgICB0aGlzLmRpc3BsYXlOYW1lID0gc2tpbGxbXCJkaXNwbGF5TmFtZVwiXTtcclxuICAvLyAgICAgdGhpcy5wbGF5ZXIgPSBza2lsbFtcInBsYXllclwiXTtcclxuICAvLyAgICAgdGhpcy5lbmVteSA9IHNraWxsW1wiZW5lbXlcIl07XHJcbiAgLy8gICAgIHRoaXMuc3RhdHMgPSBza2lsbFtcInN0YXRzXCJdO1xyXG4gIC8vICAgICB0aGlzLmNsYXNzZXMgPSBza2lsbFtcImNsYXNzZXNcIl07XHJcbiAgLy8gICAgIHRoaXMudHlwZSA9IHNraWxsW1widHlwZVwiXTtcclxuICAvLyAgICAgdGhpcy5taW5MZXZlbCA9IHNraWxsW1wibWluTGV2ZWxcIl07XHJcbiAgLy8gICAgIHRoaXMuY3VycmVuY3kgPSBza2lsbFtcImN1cnJlbmN5XCJdO1xyXG4gIC8vICAgICB0aGlzLmNvc3QgPSBza2lsbFtcImNvc3RcIl07XHJcbiAgLy8gICAgIHRoaXMuY29vbGRvd24gPSBza2lsbFtcImNvb2xkb3duXCJdO1xyXG4gIC8vICAgICB0aGlzLm1haW4gPSBza2lsbFtcIm1haW5cIl07XHJcbiAgLy8gICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKF9QbGF5ZXIsIF9FbmVteSkge1xyXG4gICAgdGhpcy5QbGF5ZXIgPSBfUGxheWVyO1xyXG4gICAgdGhpcy5FbmVteSA9IF9FbmVteTtcclxuICB9XHJcblxyXG4gIGdldCBnZXRQdWJsaWNGaWVsZHMoKSB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSB7fTtcclxuXHJcbiAgICB0aGlzLnB1YmxpY0ZpZWxkcy5tYXAoKGtleSkgPT4ge1xyXG4gICAgICBvdXRwdXRba2V5XSA9IHRoaXNba2V5XTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfVxyXG59XHJcbiIsICIvLyBleHBvcnQgY29uc3QgSWNlQXJyb3cgPSB7XHJcbi8vICAgZGlzcGxheU5hbWU6IFwiSWNlIEFycm93XCIsXHJcblxyXG4vLyAgIHN0YXRzOiB7XHJcbi8vICAgICBwZW5ldHJhdGlvbjogNSxcclxuLy8gICAgIG1hZ2ljOiAxMCxcclxuLy8gICB9LFxyXG5cclxuLy8gICBjbGFzc2VzczogW10sXHJcbi8vICAgdHlwZTogXCJNYWdpY2FsXCIsXHJcbi8vICAgbGV2ZWw6IDAsXHJcbi8vICAgY29zdDogMTUsXHJcbi8vICAgY3VycmVuY3k6IFwiTWFuYVwiLFxyXG4vLyAgIGNvb2xkb3duOiA1LFxyXG5cclxuLy8gICBtYWluOiBmdW5jdGlvbiAocGxheWVyLCBlbmVteSkge1xyXG4vLyAgICAgKHVzZXIsIGVuZW15KTtcclxuLy8gICB9LFxyXG4vLyB9O1xyXG5cclxuaW1wb3J0IHsgQmFzZVNraWxsIH0gZnJvbSBcIn4vU2tpbGxzL0Jhc2VTa2lsbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEljZUFycm93IGV4dGVuZHMgQmFzZVNraWxsIHtcclxuICBkaXNwbGF5TmFtZSA9IFwiSWNlIEFycm93XCI7XHJcblxyXG4gIHN0YXRzID0ge1xyXG4gICAgcGVuZXRyYXRpb246IDUsXHJcbiAgICBtYWdpYzogMTAsXHJcbiAgfTtcclxuXHJcbiAgY2xhc3NlcyA9IG51bGw7XHJcbiAgdHlwZSA9IFwiTWFnaWNhbFwiO1xyXG4gIG1pbkxldmVsID0gMjtcclxuICBjb3N0ID0gMTU7XHJcbiAgY3VycmVuY3kgPSBcIk1hbmFcIjtcclxuICBjb29sZG93biA9IDU7XHJcbn1cclxuIiwgImltcG9ydCB7IEJhc2VTa2lsbCB9IGZyb20gXCJ+L1NraWxscy9CYXNlU2tpbGxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbWlySW5hdG9yIGV4dGVuZHMgQmFzZVNraWxsIHtcclxuICBkaXNwbGF5TmFtZSA9IFwiQW1pckluYXRvclwiO1xyXG5cclxuICBzdGF0cyA9IHtcclxuICAgIHBlbmV0cmF0aW9uOiA1LFxyXG4gICAgbWFnaWM6IDEwLFxyXG4gIH07XHJcblxyXG4gIGNsYXNzZXMgPSBudWxsO1xyXG4gIHR5cGUgPSBcIk1hZ2ljYWxcIjtcclxuICBtaW5MZXZlbCA9IDA7XHJcbiAgY29zdCA9IDE1O1xyXG4gIGN1cnJlbmN5ID0gXCJNYW5hXCI7XHJcbiAgY29vbGRvd24gPSA1O1xyXG59XHJcbiIsICJpbXBvcnQgbG9nbyBmcm9tIFwifi9Bc3NldHMvSW1nL0NsYXNzZXMvYmFyYmFyaWFuLnBuZ1wiO1xyXG5pbXBvcnQgeyBCYXNlQ2xhc3MgfSBmcm9tIFwifi9DbGFzc2VzL0Jhc2VDbGFzc1wiO1xyXG5pbXBvcnQgeyBJY2VBcnJvdyB9IGZyb20gXCJ+L1NraWxscy9JY2VBcnJvdy9JY2VBcnJvd1wiO1xyXG5pbXBvcnQgeyBBbWlySW5hdG9yIH0gZnJvbSBcIn4vU2tpbGxzL0FtaXJJbmF0b3IvQW1pckluYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhcmJhcmlhbiBleHRlbmRzIEJhc2VDbGFzcyB7XHJcbiAgZGlzcGxheU5hbWUgPSBcIkJhcmJhcmlhblwiO1xyXG4gIHNsdWcgPSBcImJhcmJhcmlhblwiO1xyXG5cclxuICBpY29uID0gbG9nbztcclxuXHJcbiAgc2hvcnREZXNjcmlwdGlvbiA9IFwiUHVyZSBtdXNjbGUgYW5kIHBoeXNpY2FsIHN0cmVuZ3RoLlwiO1xyXG4gIGRlc2NyaXB0aW9uID1cclxuICAgIFwiU3Ryb25nIGJ1dCBpbmFjY3VyYXRlLCBkZWFsaW5nIG1vcmUgZGFtYWdlIGF0IHRoZSBleHBlbnNlIG9mIGluc3RhYmlsaXR5XCI7XHJcblxyXG4gIHN0YXRzID0ge1xyXG4gICAgc3RyZW5ndGg6IDE1LFxyXG4gICAgZGV4dGVyaXR5OiA0LFxyXG4gIH07XHJcblxyXG4gIHNraWxscyA9IFtuZXcgSWNlQXJyb3coKSwgbmV3IEFtaXJJbmF0b3IoKV07XHJcblxyXG4gIHB1YmxpY0ZpZWxkcyA9IFtcImljb25cIiwgXCJkZXNjcmlwdGlvblwiLCBcInN0YXRzXCIsIFwic2tpbGxzXCJdO1xyXG59XHJcbiIsICJpbXBvcnQgbG9nbyBmcm9tIFwifi9Bc3NldHMvSW1nL0NsYXNzZXMvcGFsYWRpbi5wbmdcIjtcclxuaW1wb3J0IHsgQmFzZUNsYXNzIH0gZnJvbSBcIn4vQ2xhc3Nlcy9CYXNlQ2xhc3NcIjtcclxuaW1wb3J0IHsgSWNlQXJyb3cgfSBmcm9tIFwifi9Ta2lsbHMvSWNlQXJyb3cvSWNlQXJyb3dcIjtcclxuaW1wb3J0IHsgQW1pckluYXRvciB9IGZyb20gXCJ+L1NraWxscy9BbWlySW5hdG9yL0FtaXJJbmF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWxhZGluIGV4dGVuZHMgQmFzZUNsYXNzIHtcclxuICBkaXNwbGF5TmFtZSA9IFwiUGFsYWRpblwiO1xyXG4gIHNsdWcgPSBcInBhbGFkaW5cIjtcclxuXHJcbiAgaWNvbiA9IGxvZ287XHJcblxyXG4gIHNob3J0RGVzY3JpcHRpb24gPSBcIlRoZSBob2x5IHdhcnJpb3JzIG9mIGdvZC4gRGV1cyBsZSB2dWx0LlwiO1xyXG4gIGRlc2NyaXB0aW9uID1cclxuICAgIFwiU3R1cmR5IHdpdGggYSB2YXJpZXR5IG9mIGhlYWxpbmcgc3BlbGxzLiBUaGUgcGVyZmVjdCB0YW5rZXJzIG9uZSB3b3VsZCBzYXlcIjtcclxuXHJcbiAgc3RhdHMgPSB7XHJcbiAgICBzdHJlbmd0aDogMTUsXHJcbiAgICBkZXh0ZXJpdHk6IDQsXHJcbiAgfTtcclxuXHJcbiAgc2tpbGxzID0gW25ldyBJY2VBcnJvdygpLCBuZXcgQW1pckluYXRvcigpXTtcclxuXHJcbiAgcHVibGljRmllbGRzID0gW1wiaWNvblwiLCBcImRlc2NyaXB0aW9uXCIsIFwic3RhdHNcIiwgXCJza2lsbHNcIl07XHJcbn1cclxuIiwgImltcG9ydCBsb2dvIGZyb20gXCJ+L0Fzc2V0cy9JbWcvQ2xhc3Nlcy9kcnVpZC5wbmdcIjtcclxuaW1wb3J0IHsgQmFzZUNsYXNzIH0gZnJvbSBcIn4vQ2xhc3Nlcy9CYXNlQ2xhc3NcIjtcclxuaW1wb3J0IHsgSWNlQXJyb3cgfSBmcm9tIFwifi9Ta2lsbHMvSWNlQXJyb3cvSWNlQXJyb3dcIjtcclxuaW1wb3J0IHsgQW1pckluYXRvciB9IGZyb20gXCJ+L1NraWxscy9BbWlySW5hdG9yL0FtaXJJbmF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcnVpZCBleHRlbmRzIEJhc2VDbGFzcyB7XHJcbiAgZGlzcGxheU5hbWUgPSBcIkRydWlkXCI7XHJcbiAgc2x1ZyA9IFwiZHJ1aWRcIjtcclxuICBpY29uID0gbG9nbztcclxuXHJcbiAgc2hvcnREZXNjcmlwdGlvbiA9IFwiTWFzdGVycyBvZiBtYWdpYyB3aXRoIHVubWF0Y2hlZCB3aXNkb20uXCI7XHJcbiAgZGVzY3JpcHRpb24gPVxyXG4gICAgXCJIaWdoIHdpc2RvbSBhbmQgYSBsb3Qgb2Ygc3BlbGxzLiBOb3QgdG8gbWVudGlvbiBxdWl0ZSB0aGUgbG9uZy4uLiBzdGFmZi4gWWVzLCBzdGFmZlwiO1xyXG5cclxuICBzdGF0cyA9IHtcclxuICAgIHN0cmVuZ3RoOiAxNSxcclxuICAgIGRleHRlcml0eTogNCxcclxuICB9O1xyXG5cclxuICBza2lsbHMgPSBbbmV3IEljZUFycm93KCksIG5ldyBBbWlySW5hdG9yKCldO1xyXG5cclxuICBwdWJsaWNGaWVsZHMgPSBbXCJpY29uXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJzdGF0c1wiLCBcInNraWxsc1wiXTtcclxufVxyXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxFbmlcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxSZW1peFxcXFwxXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVuaVxcXFxEZXNrdG9wXFxcXFByb2plY3RzXFxcXFJlbWl4XFxcXDFcXFxcYXBwXFxcXHJvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVuaVxcXFxEZXNrdG9wXFxcXFByb2plY3RzXFxcXFJlbWl4XFxcXDFcXFxcYXBwXFxcXHJvdXRlc1xcXFxyZWdpc3RlclxcXFxwcmV2aWV3XFxcXGJhcmJhcmlhbi5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRW5pXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcUmVtaXhcXFxcMVxcXFxhcHBcXFxccm91dGVzXFxcXHJlZ2lzdGVyXFxcXHByZXZpZXdcXFxccGFsYWRpbi5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRW5pXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcUmVtaXhcXFxcMVxcXFxhcHBcXFxccm91dGVzXFxcXHJlZ2lzdGVyXFxcXHNlbGVjdGVkXFxcXCRuYW1lLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxFbmlcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxSZW1peFxcXFwxXFxcXGFwcFxcXFxyb3V0ZXNcXFxccmVnaXN0ZXJcXFxccHJldmlld1xcXFxkcnVpZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRW5pXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcUmVtaXhcXFxcMVxcXFxhcHBcXFxccm91dGVzXFxcXHJlZ2lzdGVyXFxcXHByZXZpZXdcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVuaVxcXFxEZXNrdG9wXFxcXFByb2plY3RzXFxcXFJlbWl4XFxcXDFcXFxcYXBwXFxcXHJvdXRlc1xcXFxyZWdpc3RlclxcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRW5pXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcUmVtaXhcXFxcMVxcXFxhcHBcXFxccm91dGVzXFxcXGxvZ2luXFxcXGluZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxFbmlcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxSZW1peFxcXFwxXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaW5kZXguanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9yZWdpc3Rlci9wcmV2aWV3L2JhcmJhcmlhblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVnaXN0ZXIvcHJldmlldy9iYXJiYXJpYW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVnaXN0ZXIvcHJldmlldy9iYXJiYXJpYW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3JlZ2lzdGVyL3ByZXZpZXcvcGFsYWRpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVnaXN0ZXIvcHJldmlldy9wYWxhZGluXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJlZ2lzdGVyL3ByZXZpZXcvcGFsYWRpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVnaXN0ZXIvc2VsZWN0ZWQvJG5hbWVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3JlZ2lzdGVyL3NlbGVjdGVkLyRuYW1lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJlZ2lzdGVyL3NlbGVjdGVkLzpuYW1lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9yZWdpc3Rlci9wcmV2aWV3L2RydWlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZWdpc3Rlci9wcmV2aWV3L2RydWlkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJlZ2lzdGVyL3ByZXZpZXcvZHJ1aWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3JlZ2lzdGVyL3ByZXZpZXcvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3JlZ2lzdGVyL3ByZXZpZXcvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVnaXN0ZXIvcHJldmlld1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL3JlZ2lzdGVyL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZWdpc3Rlci9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWdpc3RlclwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpbi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGl2ZVJlbG9hZCwgT3V0bGV0LCBMaW5rcyB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGdsb2JhbENzcyBmcm9tIFwifi9Bc3NldHMvQ1NTL2dsb2JhbC5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8dGl0bGU+e3RpdGxlID8/IFwiVGVzdCB0aXRsZVwifTwvdGl0bGU+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyA8TGl2ZVJlbG9hZCAvPiA6IG51bGx9XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxDc3MgfV07XG59XG4iLCAiaW1wb3J0IGxvZ28gZnJvbSBcIn4vQXNzZXRzL0ltZy9wbGFjZWhvbGRlci5wbmdcIjtcclxuaW1wb3J0IGluZGV4Q3NzIGZyb20gXCJ+L0Fzc2V0cy9DU1MvaW5kZXguY3NzXCI7XHJcbmltcG9ydCB7IENvbXBsZXRlQ2xhc3NQcmV2aWV3IH0gZnJvbSBcIn4vQ29tcG9uZW50cy9DbGFzc1ByZXZpZXcvQ29tcGxldGVcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJ+L3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyXCI7XHJcbmltcG9ydCB7IEJhcmJhcmlhbiB9IGZyb20gXCJ+L0NsYXNzZXMvQmFyYmFyaWFuL0JhcmJhcmlhblwiO1xyXG5pbXBvcnQgeyBMaW5rLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHJlcXVlc3QgfSkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xyXG5cclxuICBpZiAoc2Vzc2lvbi5oYXMoXCJ1dWlkXCIpKSB7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFyYmFyaWFuUHJldmlldygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sdW1uIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sdW1uIGl0ZW1zLWNlbnRlciBtYXgtd2lkdGgtMSBweTEgcm91bmRlZFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q29tcGxldGVDbGFzc1ByZXZpZXdcclxuICAgICAgICBjbGFzc05hbWU9XCJtdDEgbWF4LXdpZHRoLTFcIlxyXG4gICAgICAgIHRoZUNsYXNzPXtuZXcgQmFyYmFyaWFuKCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgdG89XCIvcmVnaXN0ZXIvc2VsZWN0ZWQvYmFyYmFyaWFuXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtdDEgaW5wdXQtYnV0dG9uIHAxIHJvdW5kZWQgaDQgdGV4dC1kZWNvcmF0aW9uLW5vbmUgYm9sZFwiXHJcbiAgICAgID5cclxuICAgICAgICBTRUxFQ1RcclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBpbmRleENzcyB9XTtcclxufVxyXG4iLCAiZXhwb3J0IGZ1bmN0aW9uIENvbXBsZXRlQ2xhc3NQcmV2aWV3KHsgY2xhc3NOYW1lLCB0aGVDbGFzcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtbXCJmbGV4IGZsZXgtY29sdW1uIGl0ZW1zLWNlbnRlciBzdHJldGNoXCIsIGNsYXNzTmFtZV0uam9pbihcIiBcIil9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHVtbiBpdGVtcy1jZW50ZXIgc3RyZXRjaCBjb250YWluZXIgcHkxIHJvdW5kZWRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib2xkIGNhcGl0YWxpemUgbGluay1jb2xvcmVkXCI+XHJcbiAgICAgICAgICB7dGhlQ2xhc3MuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17dGhlQ2xhc3MuaWNvbn1cclxuICAgICAgICAgIGFsdD1cImNsYXNzLWljb25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2xhc3MtcHJldmlldy1pbWcgbXQxXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10MSBncmV5IHB4MSBjZW50ZXJcIj57dGhlQ2xhc3MuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHVtbiBzdHJldGNoIGNvbnRhaW5lciBweTEgcm91bmRlZCBib3JkZXItdG9wIGJvcmRlci1yZWQgbXQxXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluay1jb2xvcmVkIHNlbGYtY2VudGVyXCI+SW5pdGlhbCBTdGF0czwvc3Bhbj5cclxuICAgICAgICB7T2JqZWN0LmtleXModGhlQ2xhc3Muc3RhdHMpLm1hcCgoa2V5LCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcHgxXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGtleT17YCR7aX0tbmFtZWB9IGNsYXNzTmFtZT1cImNhcGl0YWxpemUgbGluay1jb2xvcmVkXCI+XHJcbiAgICAgICAgICAgICAge2tleX06ICZuYnNwO1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAga2V5PXtgJHtpfS12YWx1ZWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgIHRoZUNsYXNzLnN0YXRzW2tleV0gPj0gNSA/IFwidGV4dC1ncmVlblwiIDogXCJ0ZXh0LXJlZFwiXHJcbiAgICAgICAgICAgICAgfSBib2xkYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aGVDbGFzcy5zdGF0c1trZXldfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2x1bW4gc3RyZXRjaCBjb250YWluZXIgcHkxIHJvdW5kZWQgYm9yZGVyLXRvcCBib3JkZXItcmVkIG10MVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmstY29sb3JlZCBzZWxmLWNlbnRlclwiPlNraWxsczwvc3Bhbj5cclxuICAgICAgICB7T2JqZWN0LmtleXModGhlQ2xhc3Muc2tpbGxzKS5tYXAoKGtleSwgaSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB4MSBsaW5rLWNvbG9yZWRcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGtleT17YHNwZWxsX2ljb24tJHtpfS12YWx1ZWB9XHJcbiAgICAgICAgICAgICAgc3JjPXt0aGVDbGFzcy5za2lsbHNba2V5XS5pY29ufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwZWxsLWljb24gc2VsZi1jZW50ZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2Ake2l9LXNraWxsX25hbWVgfSBjbGFzc05hbWU9XCJtbDFcIj5cclxuICAgICAgICAgICAgICB7dGhlQ2xhc3Muc2tpbGxzW2tleV0uZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIHt0aGVDbGFzcy5za2lsbHNba2V5XS5taW5MZXZlbCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake2l9LXNraWxsX2xldmVsYH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sMSBncmV5IGg2IHNlbGYtY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBbTFZMIHt0aGVDbGFzcy5za2lsbHNba2V5XS5taW5MZXZlbH1dXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBsZXQgc2Vzc2lvblN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XHJcbiAgY29va2llOiB7XHJcbiAgICBuYW1lOiBcIl9cIiwgLy8gdXNlIGFueSBuYW1lIHlvdSB3YW50IGhlcmVcclxuICAgIHNhbWVTaXRlOiBcImxheFwiLCAvLyB0aGlzIGhlbHBzIHdpdGggQ1NSRlxyXG4gICAgcGF0aDogXCIvXCIsIC8vIHJlbWVtYmVyIHRvIGFkZCB0aGlzIHNvIHRoZSBjb29raWUgd2lsbCB3b3JrIGluIGFsbCByb3V0ZXNcclxuICAgIGh0dHBPbmx5OiB0cnVlLCAvLyBmb3Igc2VjdXJpdHkgcmVhc29ucywgbWFrZSB0aGlzIGNvb2tpZSBodHRwIG9ubHlcclxuICAgIHNlY3JldHM6IFtcImVuaS5lbmkuZW5pXCJdLCAvLyByZXBsYWNlIHRoaXMgd2l0aCBhbiBhY3R1YWwgc2VjcmV0XHJcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiwgLy8gZW5hYmxlIHRoaXMgaW4gcHJvZCBvbmx5XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgbGV0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IHNlc3Npb25TdG9yYWdlO1xyXG4iLCAiaW1wb3J0IGxvZ28gZnJvbSBcIn4vQXNzZXRzL0ltZy9wbGFjZWhvbGRlci5wbmdcIjtcclxuaW1wb3J0IGluZGV4Q3NzIGZyb20gXCJ+L0Fzc2V0cy9DU1MvaW5kZXguY3NzXCI7XHJcbmltcG9ydCB7IENvbXBsZXRlQ2xhc3NQcmV2aWV3IH0gZnJvbSBcIn4vQ29tcG9uZW50cy9DbGFzc1ByZXZpZXcvQ29tcGxldGVcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJ+L3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyXCI7XHJcbmltcG9ydCB7IFBhbGFkaW4gfSBmcm9tIFwifi9DbGFzc2VzL1BhbGFkaW4vUGFsYWRpblwiO1xyXG5pbXBvcnQgeyBMaW5rLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHJlcXVlc3QgfSkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xyXG5cclxuICBpZiAoc2Vzc2lvbi5oYXMoXCJ1dWlkXCIpKSB7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFsYWRpblByZXZpZXcoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHVtbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbHVtbiBpdGVtcy1jZW50ZXIgbWF4LXdpZHRoLTEgcHkxIHJvdW5kZWRcIj5cclxuICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENvbXBsZXRlQ2xhc3NQcmV2aWV3XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXQxIG1heC13aWR0aC0xXCJcclxuICAgICAgICB0aGVDbGFzcz17bmV3IFBhbGFkaW4oKX1cclxuICAgICAgLz5cclxuICAgICAgPExpbmtcclxuICAgICAgICB0bz1cIi9yZWdpc3Rlci9zZWxlY3RlZC9wYWxhZGluXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtdDEgaW5wdXQtYnV0dG9uIHAxIHJvdW5kZWQgaDQgdGV4dC1kZWNvcmF0aW9uLW5vbmUgYm9sZFwiXHJcbiAgICAgID5cclxuICAgICAgICBTRUxFQ1RcclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBpbmRleENzcyB9XTtcclxufVxyXG4iLCAiaW1wb3J0IGxvZ28gZnJvbSBcIn4vQXNzZXRzL0ltZy9wbGFjZWhvbGRlci5wbmdcIjtcclxuaW1wb3J0IGluZGV4Q3NzIGZyb20gXCJ+L0Fzc2V0cy9DU1MvaW5kZXguY3NzXCI7XHJcbmltcG9ydCB7IGNvbW1pdFNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tIFwifi9zZXJ2aWNlcy9zZXNzaW9uLnNlcnZlclwiO1xyXG5pbXBvcnQgeyByZWRpcmVjdCwgdXNlQWN0aW9uRGF0YSwgdXNlTG9hZGVyRGF0YSwgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyRm9ybSB9IGZyb20gXCJ+L0NvbXBvbmVudHMvUmVnaXN0ZXIvRm9ybS9SZWdpc3RlckZvcm1cIjtcclxuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tIFwidmFsaWRhdGUuanNcIjtcclxuaW1wb3J0IHtcclxuICB1c2VybmFtZUNvbnN0cmFpbnQsXHJcbiAgcGFzc3dvcmRDb25zdHJhaW50LFxyXG4gIGVtYWlsQ29uc3RyYWludCxcclxufSBmcm9tIFwifi9IZWxwZXJzL0ZpZWxkQ29uc3RyYWludHNcIjtcclxuaW1wb3J0IHsgZGlnZXN0TWVzc2FnZSB9IGZyb20gXCJ+L0hlbHBlcnMvQ3J5cHRvZ3JhcGh5XCI7XHJcbmltcG9ydCB7IEVycm9ycyB9IGZyb20gXCJ+L0NvbXBvbmVudHMvRXJyb3JzXCI7XHJcbmltcG9ydCB7IGdldENsYXNzQnlOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL0NsYXNzZXMvZ2V0Q2xhc3NCeU5hbWVcIjtcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIn4vc2VydmljZXMvZGIuc2VydmVyXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcmVxdWVzdCwgcGFyYW1zIH0pIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcclxuXHJcbiAgaWYgKHNlc3Npb24uaGFzKFwidXVpZFwiKSkge1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coYXdhaXQgZ2V0Q2xhc3NCeU5hbWUocGFyYW1zLm5hbWUpLm5hbWUpO1xyXG4gIHJldHVybiAoYXdhaXQgZ2V0Q2xhc3NCeU5hbWUocGFyYW1zLm5hbWUpKSA/PyByZWRpcmVjdChcIi9cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0IH0pIHtcclxuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gYm9keS5nZXQoXCJ1c2VybmFtZVwiKTtcclxuICBjb25zdCBlbWFpbCA9IGJvZHkuZ2V0KFwiZW1haWxcIik7XHJcbiAgY29uc3QgcGFzc3dvcmQgPSBib2R5LmdldChcInBhc3N3b3JkXCIpO1xyXG4gIGNvbnN0IHNlbGVjdGVkQ2xhc3MgPSBib2R5LmdldChcImNsYXNzXCIpO1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xyXG5cclxuICAvLyBpZiAoc2Vzc2lvbi5oYXMoXCJ1dWlkXCIpKSB7XHJcbiAgLy8gICByZXR1cm4gbnVsbDtcclxuICAvLyB9XHJcblxyXG4gIC8vIFZhbGlkYXRlIHRoZSBjb25zdHJhaW50cyB0byB0aGUgZmllbGRzXHJcbiAgY29uc3QgZXJyb3JzID0gdmFsaWRhdGUoXHJcbiAgICB7XHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWVDb25zdHJhaW50LFxyXG4gICAgICBlbWFpbDogZW1haWxDb25zdHJhaW50LFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRDb25zdHJhaW50LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIC8vIENoZWNrIGlmIHdlIGhhdmUgYW55IGVycm9ycyB3aXRoIHRoZSBmaWVsZHNcclxuICBpZiAoZXJyb3JzKSB7XHJcbiAgICByZXR1cm4gZXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0cmlldmUgdXNlciBmcm9tIGRhdGFiYXNlXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgfSxcclxuICAgIHNlbGVjdDoge1xyXG4gICAgICB1dWlkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gQ2hlY2sgaWYgdXNlci91c2VybmFtZSBleGlzdHNcclxuICBpZiAodXNlciAhPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHsgdXNlcm5hbWU6IFtcIlRoaXMgdXNlcm5hbWUgYWxyZWFkeSBleGlzdHNcIl0gfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IGF3YWl0IGRpZ2VzdE1lc3NhZ2UocGFzc3dvcmQpLFxyXG4gICAgICBsYXN0QWN0aXZlSVA6IFwidGVzdFwiLFxyXG4gICAgICBsYXN0QWN0aXZlQWdlbnQ6IFwidGVzdFwiLFxyXG4gICAgICBQcm9maWxlOiB7XHJcbiAgICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgICBjbGFzczogc2VsZWN0ZWRDbGFzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBTdGF0czoge1xyXG4gICAgICAgIGNyZWF0ZToge30sXHJcbiAgICAgIH0sXHJcbiAgICAgIEVxdWlwbWVudDoge1xyXG4gICAgICAgIGNyZWF0ZToge30sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIHV1aWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoY3JlYXRlZFtcInV1aWRcIl0pIHtcclxuICAgIHNlc3Npb24uc2V0KFwidXVpZFwiLCBjcmVhdGVkW1widXVpZFwiXSk7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2VydmVyOiBcIkRhdGFiYXNlIGlzc3VlcywgeW91ciBhY2NvdW50IGhhcyBub3QgYmVlbiBjcmVhdGVkXCIsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsZWN0ZWQoKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRDbGFzcyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sdW1uIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sdW1uIGl0ZW1zLWNlbnRlciBtYXgtd2lkdGgtMSBweTEgcm91bmRlZFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEVycm9yc1xyXG4gICAgICAgIGVycm9ycz17YWN0aW9uRGF0YX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtYXgtd2lkdGgtMSBjb250YWluZXIgcHkxIGZsZXggZmxleC1jb2x1bW4gcm91bmRlZCBib3JkZXItdG9wIGJvcmRlci1yZWQgaXRlbXMtY2VudGVyIG0xIGVycm9yLWNvbnRhaW5lciBoNVwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sdW1uIGl0ZW1zLWNlbnRlciBtYXgtd2lkdGgtMSBweTEgcm91bmRlZCBtdDIgYm9yZGVyLXRvcCBib3JkZXItcmVkXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluay1jb2xvcmVkXCI+WW91IGhhdmUgc2VsZWN0ZWQ8L3NwYW4+XHJcbiAgICAgICAgPGltZyBzcmM9e3NlbGVjdGVkQ2xhc3MuaWNvbn0gY2xhc3NOYW1lPVwiY2xhc3MtcHJldmlldy1pbWcgbXQxXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdDEgYm9sZCBsaW5rLWNvbG9yZWRcIj5cclxuICAgICAgICAgIHtzZWxlY3RlZENsYXNzLmRpc3BsYXlOYW1lfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmV5IHB4MSBjZW50ZXJcIj57c2VsZWN0ZWRDbGFzcy5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYXgtd2lkdGgtMSBweTEgcm91bmRlZCBtdDFcIj5cclxuICAgICAgICA8UmVnaXN0ZXJGb3JtIHNlbGVjdGVkQ2xhc3M9e3NlbGVjdGVkQ2xhc3N9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBpbmRleENzcyB9XTtcclxufVxyXG4iLCAiaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVyRm9ybSh7IHNlbGVjdGVkQ2xhc3MgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHVtbiBpdGVtcy1jZW50ZXIgc3RyZXRjaFwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXIgaW5wdXQtdXNlcm5hbWUgcm91bmRlZCBweDFcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2VudGVyIGlucHV0LXVzZXJuYW1lIHJvdW5kZWQgcHgxIG10MVwiXHJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2VudGVyIGlucHV0LXVzZXJuYW1lIHJvdW5kZWQgcHgxIG10MVwiXHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY2xhc3NcIiB2YWx1ZT17c2VsZWN0ZWRDbGFzcy5zbHVnfSAvPlxyXG5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgdmFsdWU9XCJCRUdJTlwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXQxIGlucHV0LWJ1dHRvbiBwMSByb3VuZGVkIGg0XCJcclxuICAgICAgLz5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcbiIsICJleHBvcnQgY29uc3QgdXNlcm5hbWVDb25zdHJhaW50ID0ge1xyXG4gIHByZXNlbmNlOiB0cnVlLFxyXG4gIGxlbmd0aDoge1xyXG4gICAgbWluaW11bTogMyxcclxuICAgIG1heGltdW06IDE2LFxyXG4gICAgdG9vU2hvcnQ6IFwiIGNhbnQgYmUgc2hvcnRlciB0aGFuIDMgY2hhcmFjdGVyc1wiLFxyXG4gICAgdG9vTG9uZzogXCIgY2FudCBiZSBsb25nZXIgdGhhbiAxNiBjaGFyYWN0ZXJzXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZENvbnN0cmFpbnQgPSB7XHJcbiAgcHJlc2VuY2U6IHRydWUsXHJcbiAgbGVuZ3RoOiB7XHJcbiAgICBtaW5pbXVtOiA2LFxyXG4gICAgdG9vU2hvcnQ6IFwiIGNhbnQgYmUgc2hvcnRlciB0aGFuIDYgY2hhcmFjdGVyc1wiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZW1haWxDb25zdHJhaW50ID0ge1xyXG4gIGVtYWlsOiB7XHJcbiAgICBtZXNzYWdlOiBcImlzIG5vdCB2YWxpZFwiLFxyXG4gIH0sXHJcbn07XHJcbiIsICJ2YXIgY3J5cHRvID0gcmVxdWlyZShcImNyeXB0b1wiKTtcclxuXHJcbmNvbnN0IHBhc3N3b3JkID0gXCJlbmkuZW5pLmVuaVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRpZ2VzdE1lc3NhZ2UocGxhaW50ZXh0KSB7XHJcbiAgY29uc3QgcHdVdGY4ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHBhc3N3b3JkKTsgLy8gZW5jb2RlIHBhc3N3b3JkIGFzIFVURi04XHJcbiAgY29uc3QgcHdIYXNoID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIsIHB3VXRmOCk7IC8vIGhhc2ggdGhlIHBhc3N3b3JkXHJcblxyXG4gIGNvbnN0IGl2ID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxMikpOyAvLyBnZXQgOTYtYml0IHJhbmRvbSBpdlxyXG4gIGNvbnN0IGl2U3RyID0gQXJyYXkuZnJvbShpdilcclxuICAgIC5tYXAoKGIpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoYikpXHJcbiAgICAuam9pbihcIlwiKTsgLy8gaXYgYXMgdXRmLTggc3RyaW5nXHJcblxyXG4gIGNvbnN0IGFsZyA9IHsgbmFtZTogXCJBRVMtR0NNXCIsIGl2OiBpdiB9OyAvLyBzcGVjaWZ5IGFsZ29yaXRobSB0byB1c2VcclxuXHJcbiAgY29uc3Qga2V5ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoXCJyYXdcIiwgcHdIYXNoLCBhbGcsIGZhbHNlLCBbXHJcbiAgICBcImVuY3J5cHRcIixcclxuICBdKTsgLy8gZ2VuZXJhdGUga2V5IGZyb20gcHdcclxuXHJcbiAgY29uc3QgcHRVaW50OCA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwbGFpbnRleHQpOyAvLyBlbmNvZGUgcGxhaW50ZXh0IGFzIFVURi04XHJcbiAgY29uc3QgY3RCdWZmZXIgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmVuY3J5cHQoYWxnLCBrZXksIHB0VWludDgpOyAvLyBlbmNyeXB0IHBsYWludGV4dCB1c2luZyBrZXlcclxuXHJcbiAgY29uc3QgY3RBcnJheSA9IEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoY3RCdWZmZXIpKTsgLy8gY2lwaGVydGV4dCBhcyBieXRlIGFycmF5XHJcbiAgY29uc3QgY3RTdHIgPSBjdEFycmF5Lm1hcCgoYnl0ZSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSkuam9pbihcIlwiKTsgLy8gY2lwaGVydGV4dCBhcyBzdHJpbmdcclxuXHJcbiAgcmV0dXJuIGJ0b2EoaXZTdHIgKyBjdFN0cik7IC8vIGl2K2NpcGhlcnRleHQgYmFzZTY0LWVuY29kZWRcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVuRGlnZXN0KGNpcGhlcnRleHQpIHtcclxuICBjb25zdCBwd1V0ZjggPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocGFzc3dvcmQpOyAvLyBlbmNvZGUgcGFzc3dvcmQgYXMgVVRGLThcclxuICBjb25zdCBwd0hhc2ggPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChcIlNIQS0yNTZcIiwgcHdVdGY4KTsgLy8gaGFzaCB0aGUgcGFzc3dvcmRcclxuXHJcbiAgY29uc3QgaXZTdHIgPSBhdG9iKGNpcGhlcnRleHQpLnNsaWNlKDAsIDEyKTsgLy8gZGVjb2RlIGJhc2U2NCBpdlxyXG4gIGNvbnN0IGl2ID0gbmV3IFVpbnQ4QXJyYXkoQXJyYXkuZnJvbShpdlN0cikubWFwKChjaCkgPT4gY2guY2hhckNvZGVBdCgwKSkpOyAvLyBpdiBhcyBVaW50OEFycmF5XHJcblxyXG4gIGNvbnN0IGFsZyA9IHsgbmFtZTogXCJBRVMtR0NNXCIsIGl2OiBpdiB9OyAvLyBzcGVjaWZ5IGFsZ29yaXRobSB0byB1c2VcclxuXHJcbiAgY29uc3Qga2V5ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoXCJyYXdcIiwgcHdIYXNoLCBhbGcsIGZhbHNlLCBbXHJcbiAgICBcImRlY3J5cHRcIixcclxuICBdKTsgLy8gZ2VuZXJhdGUga2V5IGZyb20gcHdcclxuXHJcbiAgY29uc3QgY3RTdHIgPSBhdG9iKGNpcGhlcnRleHQpLnNsaWNlKDEyKTsgLy8gZGVjb2RlIGJhc2U2NCBjaXBoZXJ0ZXh0XHJcbiAgY29uc3QgY3RVaW50OCA9IG5ldyBVaW50OEFycmF5KFxyXG4gICAgQXJyYXkuZnJvbShjdFN0cikubWFwKChjaCkgPT4gY2guY2hhckNvZGVBdCgwKSlcclxuICApOyAvLyBjaXBoZXJ0ZXh0IGFzIFVpbnQ4QXJyYXlcclxuICAvLyBub3RlOiB3aHkgZG9lc24ndCBjdFVpbnQ4ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGN0U3RyKSB3b3JrP1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcGxhaW5CdWZmZXIgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRlY3J5cHQoYWxnLCBrZXksIGN0VWludDgpOyAvLyBkZWNyeXB0IGNpcGhlcnRleHQgdXNpbmcga2V5XHJcbiAgICBjb25zdCBwbGFpbnRleHQgPSBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUocGxhaW5CdWZmZXIpOyAvLyBwbGFpbnRleHQgZnJvbSBBcnJheUJ1ZmZlclxyXG4gICAgcmV0dXJuIHBsYWludGV4dDsgLy8gcmV0dXJuIHRoZSBwbGFpbnRleHRcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwgImV4cG9ydCBjb25zdCBFcnJvcnMgPSAoeyBlcnJvcnMsIGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgaWYgKCFlcnJvcnMpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIHtPYmplY3Qua2V5cyhlcnJvcnMpLm1hcCgoaXRlbSwgaSkgPT5cclxuICAgICAgICBPYmplY3Qua2V5cyhlcnJvcnNbaXRlbV0pLm1hcCgoYSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PntlcnJvcnNbaXRlbV1bYV19PC9kaXY+XHJcbiAgICAgICAgKSlcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsICJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xhc3NCeU5hbWUobmFtZSkge1xyXG4gIHN3aXRjaCAobmFtZSkge1xyXG4gICAgY2FzZSBcImJhcmJhcmlhblwiOlxyXG4gICAgICByZXR1cm4gbmV3IChhd2FpdCBpbXBvcnQoXCIuL0JhcmJhcmlhbi9CYXJiYXJpYW5cIikpLkJhcmJhcmlhbigpO1xyXG4gICAgY2FzZSBcImRydWlkXCI6XHJcbiAgICAgIHJldHVybiBuZXcgKGF3YWl0IGltcG9ydChcIi4vRHJ1aWQvRHJ1aWRcIikpLkRydWlkKCk7XHJcbiAgICBjYXNlIFwicGFsYWRpblwiOlxyXG4gICAgICByZXR1cm4gbmV3IChhd2FpdCBpbXBvcnQoXCIuL1BhbGFkaW4vUGFsYWRpblwiKSkuUGFsYWRpbigpO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBnbG9iYWwgPSB7XHJcbiAgLy8gYWxsb3cgZ2xvYmFsIGB2YXJgIGRlY2xhcmF0aW9uc1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcclxuICBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxyXG4gIGdsb2JhbC5wcmlzbWEgfHxcclxuICBuZXcgUHJpc21hQ2xpZW50KHtcclxuICAgIGxvZzogW1wicXVlcnlcIiwgXCJpbmZvXCIsIFwid2FyblwiLCBcImVycm9yXCJdLFxyXG4gIH0pO1xyXG5cclxucHJpc21hLiRvbihcInF1ZXJ5XCIsIChlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJRdWVyeTogXCIgKyBlLnF1ZXJ5KTtcclxuICBjb25zb2xlLmxvZyhcIlBhcmFtczogXCIgKyBlLnBhcmFtcyk7XHJcbiAgY29uc29sZS5sb2coXCJEdXJhdGlvbjogXCIgKyBlLmR1cmF0aW9uICsgXCJtc1wiKTtcclxufSk7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWwucHJpc21hID0gcHJpc21hO1xyXG4iLCAiaW1wb3J0IGxvZ28gZnJvbSBcIn4vQXNzZXRzL0ltZy9wbGFjZWhvbGRlci5wbmdcIjtcclxuaW1wb3J0IGluZGV4Q3NzIGZyb20gXCJ+L0Fzc2V0cy9DU1MvaW5kZXguY3NzXCI7XHJcbmltcG9ydCB7IENvbXBsZXRlQ2xhc3NQcmV2aWV3IH0gZnJvbSBcIn4vQ29tcG9uZW50cy9DbGFzc1ByZXZpZXcvQ29tcGxldGVcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJ+L3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyXCI7XHJcbmltcG9ydCB7IERydWlkIH0gZnJvbSBcIn4vQ2xhc3Nlcy9EcnVpZC9EcnVpZFwiO1xyXG5pbXBvcnQgeyBMaW5rLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHJlcXVlc3QgfSkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xyXG5cclxuICBpZiAoc2Vzc2lvbi5oYXMoXCJ1dWlkXCIpKSB7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJ1aWRQcmV2aWV3KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2x1bW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2x1bW4gaXRlbXMtY2VudGVyIG1heC13aWR0aC0xIHB5MSByb3VuZGVkXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDb21wbGV0ZUNsYXNzUHJldmlld1xyXG4gICAgICAgIGNsYXNzTmFtZT1cIm10MSBtYXgtd2lkdGgtMVwiXHJcbiAgICAgICAgdGhlQ2xhc3M9e25ldyBEcnVpZCgpfVxyXG4gICAgICAvPlxyXG4gICAgICA8TGlua1xyXG4gICAgICAgIHRvPVwiL3JlZ2lzdGVyL3NlbGVjdGVkL2RydWlkXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtdDEgaW5wdXQtYnV0dG9uIHAxIHJvdW5kZWQgaDQgdGV4dC1kZWNvcmF0aW9uLW5vbmUgYm9sZFwiXHJcbiAgICAgID5cclxuICAgICAgICBTRUxFQ1RcclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBpbmRleENzcyB9XTtcclxufVxyXG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXIoKSB7XHJcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL3JlZ2lzdGVyXCIpO1xyXG59XHJcbiIsICJpbXBvcnQgeyByZWRpcmVjdCwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgaW5kZXhDc3MgZnJvbSBcIn4vQXNzZXRzL0NTUy9pbmRleC5jc3NcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIn4vQXNzZXRzL0ltZy9wbGFjZWhvbGRlci5wbmdcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJ+L3NlcnZpY2VzL3Nlc3Npb24uc2VydmVyXCI7XHJcbmltcG9ydCB7IENvbXBhY3RDbGFzc1ByZXZpZXcgfSBmcm9tIFwifi9Db21wb25lbnRzL0NsYXNzUHJldmlldy9Db21wYWN0XCI7XHJcbmltcG9ydCB7IEJhcmJhcmlhbiB9IGZyb20gXCJ+L0NsYXNzZXMvQmFyYmFyaWFuL0JhcmJhcmlhblwiO1xyXG5pbXBvcnQgeyBEcnVpZCB9IGZyb20gXCJ+L0NsYXNzZXMvRHJ1aWQvRHJ1aWRcIjtcclxuaW1wb3J0IHsgUGFsYWRpbiB9IGZyb20gXCJ+L0NsYXNzZXMvUGFsYWRpbi9QYWxhZGluXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcmVxdWVzdCB9KSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSk7XHJcblxyXG4gIGlmIChzZXNzaW9uLmhhcyhcInV1aWRcIikpIHtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlclBhZ2UoKSB7XHJcbiAgY29uc3QgY2xhc3NMaXN0ID0gW25ldyBCYXJiYXJpYW4oKSwgbmV3IERydWlkKCksIG5ldyBQYWxhZGluKCldO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sdW1uIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sdW1uIGl0ZW1zLWNlbnRlciBtYXgtd2lkdGgtMSBweTEgcm91bmRlZFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQxIGxpbmstY29sb3JlZCBib2xkXCI+Q3JlYXRlIHlvdXIgY2hhcmFjdGVyPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQyIGg2IGdyZXlcIj5QbGVhc2Ugc2VsZWN0IHlvdXIgc3RhcnRpbmcgY2xhc3M8L3NwYW4+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10MSBzdHJldGNoIG1heC13aWR0aC0xXCI+XHJcbiAgICAgICAge2NsYXNzTGlzdC5tYXAoKHRoZUNsYXNzKSA9PiAoXHJcbiAgICAgICAgICA8Q29tcGFjdENsYXNzUHJldmlldyB0aGVDbGFzcz17dGhlQ2xhc3N9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBpbmRleENzcyB9XTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbXBhY3RDbGFzc1ByZXZpZXcoeyBjbGFzc05hbWUsIHRoZUNsYXNzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e1tcImNvbnRhaW5lciBmbGV4IGZsZXgtcm93IHJvdW5kZWQgcHkxXCIsIGNsYXNzTmFtZV0uam9pbihcIiBcIil9XHJcbiAgICA+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3RoZUNsYXNzLmljb259XHJcbiAgICAgICAgYWx0PVwiY2xhc3MtaW1hZ2VcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNsYXNzLXByZXZpZXctaW1nIG1sMVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWJldHdlZW4gbWwxXCI+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIHRvPXtgcHJldmlldy8ke3RoZUNsYXNzLnNsdWd9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmstY29sb3JlZCBib2xkIGZpdC1jb250ZW50IGNhcGl0YWxpemVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGVDbGFzcy5kaXNwbGF5TmFtZX1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBoNiBncmV5IHByMVwiPlxyXG4gICAgICAgICAge3RoZUNsYXNzLnNob3J0RGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IEZvcm0sIExpbmssIHJlZGlyZWN0LCB1c2VBY3Rpb25EYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBpbmRleENzcyBmcm9tIFwifi9Bc3NldHMvQ1NTL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwifi9Bc3NldHMvSW1nL3BsYWNlaG9sZGVyLnBuZ1wiO1xyXG5pbXBvcnQgbmV3SWNvbiBmcm9tIFwifi9Bc3NldHMvSW1nL25ldy5wbmdcIjtcclxuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tIFwidmFsaWRhdGUuanNcIjtcclxuaW1wb3J0IHtcclxuICB1c2VybmFtZUNvbnN0cmFpbnQsXHJcbiAgcGFzc3dvcmRDb25zdHJhaW50LFxyXG59IGZyb20gXCJ+L0hlbHBlcnMvRmllbGRDb25zdHJhaW50c1wiO1xyXG5pbXBvcnQgeyBjb21taXRTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSBcIn4vc2VydmljZXMvc2Vzc2lvbi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgdW5EaWdlc3QgfSBmcm9tIFwifi9IZWxwZXJzL0NyeXB0b2dyYXBoeVwiO1xyXG5pbXBvcnQgeyBFcnJvcnMgfSBmcm9tIFwifi9Db21wb25lbnRzL0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwifi9zZXJ2aWNlcy9kYi5zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyByZXF1ZXN0IH0pIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcclxuXHJcbiAgaWYgKHNlc3Npb24uaGFzKFwidXVpZFwiKSkgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QgfSkge1xyXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBib2R5LmdldChcInVzZXJuYW1lXCIpO1xyXG4gIGNvbnN0IHBhc3N3b3JkID0gYm9keS5nZXQoXCJwYXNzd29yZFwiKTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcclxuXHJcbiAgLy8gVmFsaWRhdGUgdGhlIGNvbnN0cmFpbnRzIHRvIHRoZSBmaWVsZHNcclxuICBjb25zdCBlcnJvcnMgPSB2YWxpZGF0ZShcclxuICAgIHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWVDb25zdHJhaW50LFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRDb25zdHJhaW50LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIC8vIENoZWNrIGlmIHdlIGhhdmUgYW55IGVycm9ycyB3aXRoIHRoZSBmaWVsZHNcclxuICBpZiAoZXJyb3JzKSB7XHJcbiAgICByZXR1cm4gZXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0cmlldmUgdXNlciBmcm9tIGRhdGFiYXNlXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgfSxcclxuICAgIHNlbGVjdDoge1xyXG4gICAgICB1dWlkOiB0cnVlLFxyXG4gICAgICBwYXNzd29yZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIENoZWNrIGlmIHVzZXIvdXNlcm5hbWUgZXhpc3RzXHJcbiAgaWYgKHVzZXIgPT09IG51bGwpIHtcclxuICAgIHJldHVybiB7IHVzZXJuYW1lOiBbXCJTdWNoIHVzZXJuYW1lIGRvZXMgbm90IGV4aXN0XCJdIH07XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBwYXNzd29yZHMgbWF0Y2hcclxuICBjb25zdCBwYXNzd29yZHNNYXRjaCA9IHBhc3N3b3JkID09IChhd2FpdCB1bkRpZ2VzdCh1c2VyW1wicGFzc3dvcmRcIl0pKTtcclxuXHJcbiAgaWYgKHBhc3N3b3Jkc01hdGNoKSB7XHJcbiAgICBzZXNzaW9uLnNldChcInV1aWRcIiwgdXNlcltcInV1aWRcIl0pO1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gUGFzc3dvcmRzIGRvbnQgbWF0Y2hcclxuICByZXR1cm4ge1xyXG4gICAgcGFzc3dvcmQ6IFtcIlBhc3N3b3JkIGp1c3QgaXNudCBxdWl0ZSByaWdodFwiXSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UoKSB7XHJcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHVtbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHkxIGg1IGdyZXkgaXRhbGljXCI+XHJcbiAgICAgICAgPT09SW5zZXJ0IHJhbmRvbSBidWxsc2hpdCBoZXJlPT09XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtd2lkdGgtMSBjb250YWluZXIgcHkxIGZsZXggZmxleC1jb2x1bW4gcm91bmRlZCBtYjJcIj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtuZXdJY29ufSBhbHQ9XCJpY29uLW5ld1wiIGNsYXNzTmFtZT1cInBsMVwiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbDFcIj5Bbm5vdW5jZW1lbnRzIGhlcmU8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxFcnJvcnNcclxuICAgICAgICBlcnJvcnM9e2FjdGlvbkRhdGF9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWF4LXdpZHRoLTEgY29udGFpbmVyIHB5MSBmbGV4IGZsZXgtY29sdW1uIHJvdW5kZWQgYm9yZGVyLXRvcCBib3JkZXItcmVkIGl0ZW1zLWNlbnRlciBtMSBlcnJvci1jb250YWluZXIgaDVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1heC13aWR0aC0xIGNvbnRhaW5lciBweTEgZmxleCBmbGV4LWNvbHVtbiByb3VuZGVkIGJvcmRlci10b3AgYm9yZGVyLXJlZCBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgIG1ldGhvZD1cIlBPU1RcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC11c2VybmFtZSBtYjEgcm91bmRlZCBib3JkZXIgYm9yZGVyLXllbGxvdyBjZW50ZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtcGFzc3dvcmQgbWIxIHJvdW5kZWQgYm9yZGVyIGJvcmRlci15ZWxsb3cgY2VudGVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICB2YWx1ZT1cIkxPR0lOXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWxvZ2luIHAxIHJvdW5kZWQgaDRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgdG89XCIvcmVnaXN0ZXIvXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtdDEgaW5wdXQtcmVnaXN0ZXIgcDEgcm91bmRlZCBoNCB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXHJcbiAgICAgID5cclxuICAgICAgICBSRUdJU1RFUlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByb3VuZGVkIG1heC13aWR0aC0xIHB5MSBmbGV4IGZsZXgtY29sdW1uIGl0ZW1zLWNlbnRlciBoNiBtdDFcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweDEgY2VudGVyXCI+XHJcbiAgICAgICAgICBXZWxjb21lIHRvIDxiPkJsKiprIERyYWdvbiBSUEchPC9iPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdDEgY2VudGVyIHB4MSBjZW50ZXJcIj5cclxuICAgICAgICAgIEhlcmUgeW91IGNhbiBleHBsb3JlIGh1Z2UgZmFudGFzeSB3b3JsZCBmdWxsIG9mIG1vbnN0ZXJzIHlvdSBjYW4gZmlnaHRcclxuICAgICAgICAgIHdpdGguIEdldCBzdHJvbmdlciwgZmluZCBjbGFubWF0ZXMsIGxldmVsIHVwIGFuZCByZWFjaCB0aGUgdWx0aW1hdGVcclxuICAgICAgICAgIGdvYWwgLSBzbGF5IHRoZSBtaWdodHkgQmwqKmsgRHJhZ29uIHdobyBoYXMgYmVlbiB0ZXJyaWZ5aW5nIG91ciBsYW5kc1xyXG4gICAgICAgICAgZm9yIHllYXJzLlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGluZGV4Q3NzIH1dO1xyXG59XHJcbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uIH0gZnJvbSBcIn4vc2VydmljZXMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCBpbmRleENzcyBmcm9tIFwifi9Bc3NldHMvQ1NTL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIn4vc2VydmljZXMvZGIuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSk7XG5cbiAgLy8gUmVkaXJlY3QgaWYgbm8gdXVpZCBzZXNzaW9uXG4gIGlmICghc2Vzc2lvbi5oYXMoXCJ1dWlkXCIpKSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2xvZ2luL1wiKTtcbiAgfVxuICBjb25zdCB1dWlkID0gc2Vzc2lvbi5nZXQoXCJ1dWlkXCIpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgdXVpZDogdXVpZCxcbiAgICB9LFxuICAgIHNlbGVjdDoge1xuICAgICAgdXNlcm5hbWU6IHRydWUsXG4gICAgICBTdGF0czoge1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBzdHJlbmd0aDogdHJ1ZSxcbiAgICAgICAgICBkZXh0ZXJpdHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIFJlZGlyZWN0IGlmIHVzZXIgaGFzIGJlZW4gZGVsZXRlZCBvciB1dWlkIGhhcyBiZWVuIHRhbXBlcmVkIHdpdGhcbiAgaWYgKHVzZXIgPT09IG51bGwpIHtcbiAgICBzZXNzaW9uLnVuc2V0KFwidXVpZFwiKTtcblxuICAgIHJldHVybiByZWRpcmVjdChcIi9sb2dpbi9cIiwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdXNlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3Bhbj57dXNlci51c2VybmFtZX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGluZGV4Q3NzIH1dO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzExYzQyMDc4JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1YWlNQVzMzNS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSkQ1VkpaNjIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QMkZUR1BPWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtT0dMU0pLU04uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1ISlVDTUxBUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1QyV1ZSWEwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CVkpWSUNFQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbi9pbmRleCc6eydpZCc6J3JvdXRlcy9sb2dpbi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4vaW5kZXgtS0haUUJIQVcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtBNEVLNVE1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1QyV1ZSWEwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CVDJTUEFLUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJWSlZJQ0VCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVnaXN0ZXIvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcmVnaXN0ZXIvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVnaXN0ZXInLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3JlZ2lzdGVyL2luZGV4LTRTTTRMVUgzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LM0RaSFNOUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdEWUpCUzM0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRENOQlc3V0kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NVU43SVgyMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJUMlNQQUtSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQlZKVklDRUIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVnaXN0ZXIvcHJldmlldy9iYXJiYXJpYW4nOnsnaWQnOidyb3V0ZXMvcmVnaXN0ZXIvcHJldmlldy9iYXJiYXJpYW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVnaXN0ZXIvcHJldmlldy9iYXJiYXJpYW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVnaXN0ZXIvcHJldmlldy9iYXJiYXJpYW4tV0RBMlBCTlkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVZCRFNURTdBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSzNEWkhTTlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NVU43SVgyMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJUMlNQQUtSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQlZKVklDRUIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVnaXN0ZXIvcHJldmlldy9kcnVpZCc6eydpZCc6J3JvdXRlcy9yZWdpc3Rlci9wcmV2aWV3L2RydWlkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3JlZ2lzdGVyL3ByZXZpZXcvZHJ1aWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVnaXN0ZXIvcHJldmlldy9kcnVpZC1BR1VGMlU3Mi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVkJEU1RFN0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1EQ05CVzdXSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1VTjdJWDIzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQlQyU1BBS1IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CVkpWSUNFQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZWdpc3Rlci9wcmV2aWV3L2luZGV4Jzp7J2lkJzoncm91dGVzL3JlZ2lzdGVyL3ByZXZpZXcvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVnaXN0ZXIvcHJldmlldycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVnaXN0ZXIvcHJldmlldy9pbmRleC1JS0RBQ1lOVC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVnaXN0ZXIvcHJldmlldy9wYWxhZGluJzp7J2lkJzoncm91dGVzL3JlZ2lzdGVyL3ByZXZpZXcvcGFsYWRpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZWdpc3Rlci9wcmV2aWV3L3BhbGFkaW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVnaXN0ZXIvcHJldmlldy9wYWxhZGluLUIyN0xCUTM3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1WQkRTVEU3QS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdEWUpCUzM0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTVVON0lYMjMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CVDJTUEFLUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJWSlZJQ0VCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3JlZ2lzdGVyL3NlbGVjdGVkLyRuYW1lJzp7J2lkJzoncm91dGVzL3JlZ2lzdGVyL3NlbGVjdGVkLyRuYW1lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3JlZ2lzdGVyL3NlbGVjdGVkLzpuYW1lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3JlZ2lzdGVyL3NlbGVjdGVkLyRuYW1lLVE1MklRM0pILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LQTRFSzVRNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNUMldWUlhMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQlQyU1BBS1IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CVkpWSUNFQi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0xMUM0MjA3OC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLHdCQUF3QjtBQUFBLE1BQ3JELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFHMUMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FDdE9sQyxJQUFPO0FBQVA7QUFBQTtBQUFBO0FBQU8sc0JBQWdCO0FBQUEsTUFDckI7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQVNBLGtCQUFrQjtBQUNoQixjQUFNLFNBQVM7QUFFZixhQUFLLGFBQWEsSUFBSSxDQUFDLFFBQVE7QUFDN0IsaUJBQU8sT0FBTyxLQUFLO0FBQUE7QUFHckIsZUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQ3ZCWCxJQUVPO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFFTyxzQkFBZ0I7QUFBQSxNQUNyQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxPQUFPO0FBQUEsTUFlUCxZQUFZLFNBQVMsUUFBUTtBQUMzQixhQUFLLFNBQVM7QUFDZCxhQUFLLFFBQVE7QUFBQTtBQUFBLFVBR1gsa0JBQWtCO0FBQ3BCLGNBQU0sU0FBUztBQUVmLGFBQUssYUFBYSxJQUFJLENBQUMsUUFBUTtBQUM3QixpQkFBTyxPQUFPLEtBQUs7QUFBQTtBQUdyQixlQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQzFDWCxJQXNCTztBQXRCUDtBQUFBO0FBQUE7QUFvQkE7QUFFTyw2QkFBdUIsVUFBVTtBQUFBLE1BQ3RDLGNBQWM7QUFBQSxNQUVkLFFBQVE7QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQTtBQUFBLE1BR1QsVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBO0FBQUE7QUFBQTs7O0FDbkNiLElBRU87QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUVPLCtCQUF5QixVQUFVO0FBQUEsTUFDeEMsY0FBYztBQUFBLE1BRWQsUUFBUTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBO0FBQUEsTUFHVCxVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUE7QUFBQTtBQUFBOzs7QUNmYjtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS087QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLDhCQUF3QixVQUFVO0FBQUEsTUFDdkMsY0FBYztBQUFBLE1BQ2QsT0FBTztBQUFBLE1BRVAsT0FBTztBQUFBLE1BRVAsbUJBQW1CO0FBQUEsTUFDbkIsY0FDRTtBQUFBLE1BRUYsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBO0FBQUEsTUFHYixTQUFTLENBQUMsSUFBSSxZQUFZLElBQUk7QUFBQSxNQUU5QixlQUFlLENBQUMsUUFBUSxlQUFlLFNBQVM7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FDdEJsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS087QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLDRCQUFzQixVQUFVO0FBQUEsTUFDckMsY0FBYztBQUFBLE1BQ2QsT0FBTztBQUFBLE1BRVAsT0FBTztBQUFBLE1BRVAsbUJBQW1CO0FBQUEsTUFDbkIsY0FDRTtBQUFBLE1BRUYsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBO0FBQUEsTUFHYixTQUFTLENBQUMsSUFBSSxZQUFZLElBQUk7QUFBQSxNQUU5QixlQUFlLENBQUMsUUFBUSxlQUFlLFNBQVM7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FDdEJsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS087QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLDBCQUFvQixVQUFVO0FBQUEsTUFDbkMsY0FBYztBQUFBLE1BQ2QsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BRVAsbUJBQW1CO0FBQUEsTUFDbkIsY0FDRTtBQUFBLE1BRUYsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBO0FBQUEsTUFHYixTQUFTLENBQUMsSUFBSSxZQUFZLElBQUk7QUFBQSxNQUU5QixlQUFlLENBQUMsUUFBUSxlQUFlLFNBQVM7QUFBQTtBQUFBO0FBQUE7OztBQ3JCbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQStCO0FBQy9CLG1CQUE0QjtBQUViLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sU0FBUyxrQ0FDYixvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFHbkQsa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUFTLG9CQUFvQixRQUFRO0FBQUEsSUFDOUMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7OztBQ2pCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMEM7Ozs7OztBQUczQixlQUFlO0FBQzVCLFNBQ0Usb0NBQUMsVUFBRCxNQUNFLG9DQUFDLHNCQUFEO0FBQUE7QUFLTixrQkFBa0IsRUFBRSxPQUFPLFlBQVk7QUFDckMsU0FDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsS0FDVCxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLE1BQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQVcsU0FBUTtBQUFBLE1BQzlCLG9DQUFDLFNBQUQsTUFBUSxTQUFTLGVBQ2pCLG9DQUFDLHFCQUFELFFBRUYsb0NBQUMsUUFBRCxNQUNHLFVBQ0EsT0FBeUMsb0NBQUMsMEJBQUQsUUFBaUI7QUFBQTtBQU01RCxpQkFBaUI7QUFDdEIsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTs7O0FDN0JyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBTyw4QkFBOEIsRUFBRSxXQUFXLFlBQVk7QUFDNUQsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFXLENBQUMseUNBQXlDLFdBQVcsS0FBSztBQUFBLEtBRXJFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNiLFNBQVMsY0FFWixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxLQUFLLFNBQVM7QUFBQSxJQUNkLEtBQUk7QUFBQSxJQUNKLFdBQVU7QUFBQSxNQUVaLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUF1QixTQUFTLGVBR2xELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUEyQixrQkFDMUMsT0FBTyxLQUFLLFNBQVMsT0FBTyxJQUFJLENBQUMsS0FBSyxNQUNyQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxLQUFLLEdBQUc7QUFBQSxJQUFVLFdBQVU7QUFBQSxLQUMvQixLQUFJLFdBRVAsb0NBQUMsUUFBRDtBQUFBLElBQ0UsS0FBSyxHQUFHO0FBQUEsSUFDUixXQUFXLEdBQ1QsU0FBUyxNQUFNLFFBQVEsSUFBSSxlQUFlO0FBQUEsS0FHM0MsU0FBUyxNQUFNLFVBTXhCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUEyQixXQUMxQyxPQUFPLEtBQUssU0FBUyxRQUFRLElBQUksQ0FBQyxLQUFLLE1BQ3RDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLEtBQUssY0FBYztBQUFBLElBQ25CLEtBQUssU0FBUyxPQUFPLEtBQUs7QUFBQSxJQUMxQixXQUFVO0FBQUEsTUFFWixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxLQUFLLEdBQUc7QUFBQSxJQUFnQixXQUFVO0FBQUEsS0FDckMsU0FBUyxPQUFPLEtBQUssY0FHdkIsU0FBUyxPQUFPLEtBQUssV0FBVyxLQUMvQixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxLQUFLLEdBQUc7QUFBQSxJQUNSLFdBQVU7QUFBQSxLQUNYLFNBQ08sU0FBUyxPQUFPLEtBQUssVUFBUztBQUFBOzs7QUN0RHBEO0FBQUEsb0JBQTJDO0FBRXBDLElBQUksaUJBQWlCLDhDQUEyQjtBQUFBLEVBQ3JELFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFNBQVMsQ0FBQztBQUFBLElBQ1YsUUFBUTtBQUFBO0FBQUE7QUFJTCxJQUFJLEVBQUUsWUFBWSxlQUFlLG1CQUFtQjs7O0FGVDNEO0FBQ0Esb0JBQStCO0FBRS9CLHNCQUE2QixFQUFFLFdBQVc7QUFDeEMsUUFBTSxVQUFVLE1BQU0sV0FBVyxRQUFRLFFBQVEsSUFBSTtBQUVyRCxNQUFJLFFBQVEsSUFBSSxTQUFTO0FBQ3ZCLFdBQU8sNEJBQVM7QUFBQTtBQUVsQixTQUFPO0FBQUE7QUFHTSw0QkFBNEI7QUFDekMsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBTyxXQUFVO0FBQUEsT0FFdkMsb0NBQUMsc0JBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFVBQVUsSUFBSTtBQUFBLE1BRWhCLG9DQUFDLG9CQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsS0FDWDtBQUFBO0FBT0Esa0JBQWlCO0FBQ3RCLFNBQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7OztBR3JDckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBLG9CQUErQjtBQUUvQix1QkFBNkIsRUFBRSxXQUFXO0FBQ3hDLFFBQU0sVUFBVSxNQUFNLFdBQVcsUUFBUSxRQUFRLElBQUk7QUFFckQsTUFBSSxRQUFRLElBQUksU0FBUztBQUN2QixXQUFPLDRCQUFTO0FBQUE7QUFFbEIsU0FBTztBQUFBO0FBR00sMEJBQTBCO0FBQ3ZDLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSztBQUFBLElBQU0sS0FBSTtBQUFBLElBQU8sV0FBVTtBQUFBLE9BRXZDLG9DQUFDLHNCQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixVQUFVLElBQUk7QUFBQSxNQUVoQixvQ0FBQyxvQkFBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLEtBQ1g7QUFBQTtBQU9BLGtCQUFpQjtBQUN0QixTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBOzs7QUNyQ3JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQSxvQkFBa0U7OztBQ0hsRTtBQUFBLG9CQUFxQjtBQUVkLHNCQUFzQixFQUFFLGlCQUFpQjtBQUM5QyxTQUNFLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FDNUIsb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLE1BR2Qsb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLE1BR2Qsb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLE1BR2Qsb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQVEsT0FBTyxjQUFjO0FBQUEsTUFFdkQsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sV0FBVTtBQUFBO0FBQUE7OztBRDFCbEIsc0JBQXlCOzs7QUVMekI7QUFBTyxJQUFNLHFCQUFxQjtBQUFBLEVBQ2hDLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFVBQVU7QUFBQSxJQUNWLFNBQVM7QUFBQTtBQUFBO0FBSU4sSUFBTSxxQkFBcUI7QUFBQSxFQUNoQyxVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUE7QUFBQTtBQUlQLElBQU0sa0JBQWtCO0FBQUEsRUFDN0IsT0FBTztBQUFBLElBQ0wsU0FBUztBQUFBO0FBQUE7OztBQ3BCYjtBQUFBLElBQUksU0FBUyxRQUFRO0FBRXJCLElBQU0sV0FBVztBQUVqQiw2QkFBb0MsV0FBVztBQUM3QyxRQUFNLFNBQVMsSUFBSSxjQUFjLE9BQU87QUFDeEMsUUFBTSxTQUFTLE1BQU0sT0FBTyxPQUFPLE9BQU8sV0FBVztBQUVyRCxRQUFNLEtBQUssT0FBTyxnQkFBZ0IsSUFBSSxXQUFXO0FBQ2pELFFBQU0sUUFBUSxNQUFNLEtBQUssSUFDdEIsSUFBSSxDQUFDLE1BQU0sT0FBTyxhQUFhLElBQy9CLEtBQUs7QUFFUixRQUFNLE1BQU0sRUFBRSxNQUFNLFdBQVc7QUFFL0IsUUFBTSxNQUFNLE1BQU0sT0FBTyxPQUFPLFVBQVUsT0FBTyxRQUFRLEtBQUssT0FBTztBQUFBLElBQ25FO0FBQUE7QUFHRixRQUFNLFVBQVUsSUFBSSxjQUFjLE9BQU87QUFDekMsUUFBTSxXQUFXLE1BQU0sT0FBTyxPQUFPLFFBQVEsS0FBSyxLQUFLO0FBRXZELFFBQU0sVUFBVSxNQUFNLEtBQUssSUFBSSxXQUFXO0FBQzFDLFFBQU0sUUFBUSxRQUFRLElBQUksQ0FBQyxTQUFTLE9BQU8sYUFBYSxPQUFPLEtBQUs7QUFFcEUsU0FBTyxLQUFLLFFBQVE7QUFBQTtBQUd0Qix3QkFBK0IsWUFBWTtBQUN6QyxRQUFNLFNBQVMsSUFBSSxjQUFjLE9BQU87QUFDeEMsUUFBTSxTQUFTLE1BQU0sT0FBTyxPQUFPLE9BQU8sV0FBVztBQUVyRCxRQUFNLFFBQVEsS0FBSyxZQUFZLE1BQU0sR0FBRztBQUN4QyxRQUFNLEtBQUssSUFBSSxXQUFXLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVztBQUV0RSxRQUFNLE1BQU0sRUFBRSxNQUFNLFdBQVc7QUFFL0IsUUFBTSxNQUFNLE1BQU0sT0FBTyxPQUFPLFVBQVUsT0FBTyxRQUFRLEtBQUssT0FBTztBQUFBLElBQ25FO0FBQUE7QUFHRixRQUFNLFFBQVEsS0FBSyxZQUFZLE1BQU07QUFDckMsUUFBTSxVQUFVLElBQUksV0FDbEIsTUFBTSxLQUFLLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXO0FBSTlDLE1BQUk7QUFDRixVQUFNLGNBQWMsTUFBTSxPQUFPLE9BQU8sUUFBUSxLQUFLLEtBQUs7QUFDMUQsVUFBTSxZQUFZLElBQUksY0FBYyxPQUFPO0FBQzNDLFdBQU87QUFBQSxXQUNBLEdBQVA7QUFDQSxXQUFPO0FBQUE7QUFBQTs7O0FDcERYO0FBQU8sSUFBTSxTQUFTLENBQUMsRUFBRSxRQUFRLGdCQUFnQjtBQUMvQyxNQUFJLENBQUM7QUFBUSxXQUFPO0FBRXBCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUs7QUFBQSxLQUNGLE9BQU8sS0FBSyxRQUFRLElBQUksQ0FBQyxNQUFNLE1BQzlCLE9BQU8sS0FBSyxPQUFPLE9BQU8sSUFBSSxDQUFDLE1BQzdCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxLQUFJLE9BQU8sTUFBTTtBQUFBOzs7QUNQckM7QUFBQSw4QkFBcUMsTUFBTTtBQUN6QyxVQUFRO0FBQUEsU0FDRDtBQUNILGFBQU8sSUFBSyxPQUFNLHFFQUFpQztBQUFBLFNBQ2hEO0FBQ0gsYUFBTyxJQUFLLE9BQU0sNkRBQXlCO0FBQUEsU0FDeEM7QUFDSCxhQUFPLElBQUssT0FBTSxpRUFBNkI7QUFBQTtBQUcvQyxhQUFPO0FBQUE7QUFBQTs7O0FDVmI7QUFBQSxvQkFBNkI7QUFFN0IsSUFBTSxTQUFTO0FBQUEsRUFHYixRQUFRLDZCQUFlO0FBQUE7QUFHbEIsSUFBTSxTQUNYLE9BQU8sVUFDUCxJQUFJLDJCQUFhO0FBQUEsRUFDZixLQUFLLENBQUMsU0FBUyxRQUFRLFFBQVE7QUFBQTtBQUduQyxPQUFPLElBQUksU0FBUyxDQUFDLE1BQU07QUFDekIsVUFBUSxJQUFJLFlBQVksRUFBRTtBQUMxQixVQUFRLElBQUksYUFBYSxFQUFFO0FBQzNCLFVBQVEsSUFBSSxlQUFlLEVBQUUsV0FBVztBQUFBO0FBRzFDLElBQUk7QUFBdUMsU0FBTyxTQUFTOzs7QU5KM0QsdUJBQTZCLEVBQUUsU0FBUyxVQUFVO0FBQ2hELFFBQU0sVUFBVSxNQUFNLFdBQVcsUUFBUSxRQUFRLElBQUk7QUFFckQsTUFBSSxRQUFRLElBQUksU0FBUztBQUN2QixXQUFPLDRCQUFTO0FBQUE7QUFFbEIsVUFBUSxJQUFJLE1BQU0sZUFBZSxPQUFPLE1BQU07QUFDOUMsU0FBUSxNQUFNLGVBQWUsT0FBTyxTQUFVLDRCQUFTO0FBQUE7QUFHekQsc0JBQTZCLEVBQUUsV0FBVztBQUN4QyxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFFBQU0sV0FBVyxLQUFLLElBQUk7QUFDMUIsUUFBTSxRQUFRLEtBQUssSUFBSTtBQUN2QixRQUFNLFlBQVcsS0FBSyxJQUFJO0FBQzFCLFFBQU0sZ0JBQWdCLEtBQUssSUFBSTtBQUMvQixRQUFNLFVBQVUsTUFBTSxXQUFXLFFBQVEsUUFBUSxJQUFJO0FBT3JELFFBQU0sU0FBUyw4QkFDYjtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsSUFDQSxVQUFVO0FBQUEsS0FFWjtBQUFBLElBQ0UsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBO0FBS2QsTUFBSSxRQUFRO0FBQ1YsV0FBTztBQUFBO0FBSVQsUUFBTSxPQUFPLE1BQU0sT0FBTyxLQUFLLFdBQVc7QUFBQSxJQUN4QyxPQUFPO0FBQUEsTUFDTDtBQUFBO0FBQUEsSUFFRixRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUE7QUFBQTtBQUtWLE1BQUksU0FBUyxNQUFNO0FBQ2pCLFdBQU8sRUFBRSxVQUFVLENBQUM7QUFBQTtBQUd0QixRQUFNLFVBQVUsTUFBTSxPQUFPLEtBQUssT0FBTztBQUFBLElBQ3ZDLE1BQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0EsVUFBVSxNQUFNLGNBQWM7QUFBQSxNQUM5QixjQUFjO0FBQUEsTUFDZCxpQkFBaUI7QUFBQSxNQUNqQixTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsVUFDTixPQUFPO0FBQUE7QUFBQTtBQUFBLE1BR1gsT0FBTztBQUFBLFFBQ0wsUUFBUTtBQUFBO0FBQUEsTUFFVixXQUFXO0FBQUEsUUFDVCxRQUFRO0FBQUE7QUFBQTtBQUFBLElBR1osUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUE7QUFJVixNQUFJLFFBQVEsU0FBUztBQUNuQixZQUFRLElBQUksUUFBUSxRQUFRO0FBQzVCLFdBQU8sNEJBQVMsS0FBSztBQUFBLE1BQ25CLFNBQVM7QUFBQSxRQUNQLGNBQWMsTUFBTSxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBS3hDLFNBQU87QUFBQSxJQUNMLFFBQVE7QUFBQTtBQUFBO0FBSUcsb0JBQW9CO0FBQ2pDLFFBQU0sZ0JBQWdCO0FBQ3RCLFFBQU0sYUFBYTtBQUVuQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxJQUFNLEtBQUk7QUFBQSxJQUFPLFdBQVU7QUFBQSxPQUd2QyxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxRQUFRO0FBQUEsSUFDUixXQUFVO0FBQUEsTUFHWixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBZSxzQkFDL0Isb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSyxjQUFjO0FBQUEsSUFBTSxXQUFVO0FBQUEsTUFDeEMsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2IsY0FBYyxjQUVqQixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBbUIsY0FBYyxlQUVuRCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxjQUFEO0FBQUEsSUFBYztBQUFBO0FBQUE7QUFNZixrQkFBaUI7QUFDdEIsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTs7O0FPN0lyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0Esb0JBQStCO0FBRS9CLHVCQUE2QixFQUFFLFdBQVc7QUFDeEMsUUFBTSxVQUFVLE1BQU0sV0FBVyxRQUFRLFFBQVEsSUFBSTtBQUVyRCxNQUFJLFFBQVEsSUFBSSxTQUFTO0FBQ3ZCLFdBQU8sNEJBQVM7QUFBQTtBQUVsQixTQUFPO0FBQUE7QUFHTSx3QkFBd0I7QUFDckMsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBTyxXQUFVO0FBQUEsT0FFdkMsb0NBQUMsc0JBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFVBQVUsSUFBSTtBQUFBLE1BRWhCLG9DQUFDLG9CQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsS0FDWDtBQUFBO0FBT0Esa0JBQWlCO0FBQ3RCLFNBQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7OztBQ3JDckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF5QjtBQUVsQixtQkFBa0I7QUFDdkIsU0FBTyw0QkFBUztBQUFBOzs7QUNIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBd0M7OztBQ0F4QztBQUFBLHFCQUFxQjtBQUVkLDZCQUE2QixFQUFFLFdBQVcsWUFBWTtBQUMzRCxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVcsQ0FBQyx1Q0FBdUMsV0FBVyxLQUFLO0FBQUEsS0FFbkUsb0NBQUMsT0FBRDtBQUFBLElBQ0UsS0FBSyxTQUFTO0FBQUEsSUFDZCxLQUFJO0FBQUEsSUFDSixXQUFVO0FBQUEsTUFFWixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxxQkFBRDtBQUFBLElBQ0UsSUFBSSxXQUFXLFNBQVM7QUFBQSxJQUN4QixXQUFVO0FBQUEsS0FFVCxTQUFTLGNBRVosb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2IsU0FBUztBQUFBOzs7QURmcEI7QUFDQTtBQUNBO0FBRUEsdUJBQTZCLEVBQUUsV0FBVztBQUN4QyxRQUFNLFVBQVUsTUFBTSxXQUFXLFFBQVEsUUFBUSxJQUFJO0FBRXJELE1BQUksUUFBUSxJQUFJLFNBQVM7QUFDdkIsV0FBTyw2QkFBUztBQUFBO0FBRWxCLFNBQU87QUFBQTtBQUdNLHdCQUF3QjtBQUNyQyxRQUFNLFlBQVksQ0FBQyxJQUFJLGFBQWEsSUFBSSxTQUFTLElBQUk7QUFFckQsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBTyxXQUFVO0FBQUEsTUFDckMsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXdCLDJCQUUxQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBYyxzQ0FFOUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osVUFBVSxJQUFJLENBQUMsYUFDZCxvQ0FBQyxxQkFBRDtBQUFBLElBQXFCO0FBQUE7QUFBQTtBQU94QixrQkFBaUI7QUFDdEIsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTs7O0FFdkNyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW9EOzs7Ozs7QUFJcEQsdUJBQXlCO0FBVXpCLHVCQUE2QixFQUFFLFdBQVc7QUFDeEMsUUFBTSxVQUFVLE1BQU0sV0FBVyxRQUFRLFFBQVEsSUFBSTtBQUVyRCxNQUFJLFFBQVEsSUFBSTtBQUFTLFdBQU8sNkJBQVM7QUFDekMsU0FBTztBQUFBO0FBR1QsdUJBQTZCLEVBQUUsV0FBVztBQUN4QyxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFFBQU0sV0FBVyxLQUFLLElBQUk7QUFDMUIsUUFBTSxZQUFXLEtBQUssSUFBSTtBQUMxQixRQUFNLFVBQVUsTUFBTSxXQUFXLFFBQVEsUUFBUSxJQUFJO0FBR3JELFFBQU0sU0FBUywrQkFDYjtBQUFBLElBQ0U7QUFBQSxJQUNBLFVBQVU7QUFBQSxLQUVaO0FBQUEsSUFDRSxVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUE7QUFLZCxNQUFJLFFBQVE7QUFDVixXQUFPO0FBQUE7QUFJVCxRQUFNLE9BQU8sTUFBTSxPQUFPLEtBQUssV0FBVztBQUFBLElBQ3hDLE9BQU87QUFBQSxNQUNMO0FBQUE7QUFBQSxJQUVGLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQTtBQUFBO0FBS2QsTUFBSSxTQUFTLE1BQU07QUFDakIsV0FBTyxFQUFFLFVBQVUsQ0FBQztBQUFBO0FBSXRCLFFBQU0saUJBQWlCLGFBQWEsTUFBTSxTQUFTLEtBQUs7QUFFeEQsTUFBSSxnQkFBZ0I7QUFDbEIsWUFBUSxJQUFJLFFBQVEsS0FBSztBQUN6QixXQUFPLDZCQUFTLEtBQUs7QUFBQSxNQUNuQixTQUFTO0FBQUEsUUFDUCxjQUFjLE1BQU0sY0FBYztBQUFBO0FBQUE7QUFBQTtBQU14QyxTQUFPO0FBQUEsSUFDTCxVQUFVLENBQUM7QUFBQTtBQUFBO0FBSUEscUJBQXFCO0FBQ2xDLFFBQU0sYUFBYTtBQUVuQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxJQUFNLEtBQUk7QUFBQSxJQUFPLFdBQVU7QUFBQSxNQUNyQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBcUIsc0NBR3JDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsSUFBUyxLQUFJO0FBQUEsSUFBVyxXQUFVO0FBQUEsTUFDNUMsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQU0seUJBSTFCLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLFdBQVU7QUFBQSxNQUVaLG9DQUFDLHFCQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixRQUFPO0FBQUEsS0FFUCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsTUFFWixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsTUFFWixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsT0FJZCxvQ0FBQyxxQkFBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLEtBQ1gsYUFJRCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBYSxlQUNoQixvQ0FBQyxLQUFELE1BQUcsdUJBRWhCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUF3QjtBQUFBO0FBV3pDLGtCQUFpQjtBQUN0QixTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBOzs7QUNoSnJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTZCO0FBQzdCLHFCQUF3QztBQUtqQyxJQUFNLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFDM0MsUUFBTSxVQUFVLE1BQU0sV0FBVyxRQUFRLFFBQVEsSUFBSTtBQUdyRCxNQUFJLENBQUMsUUFBUSxJQUFJLFNBQVM7QUFDeEIsV0FBTyw2QkFBUztBQUFBO0FBRWxCLFFBQU0sT0FBTyxRQUFRLElBQUk7QUFFekIsUUFBTSxPQUFPLE1BQU0sT0FBTyxLQUFLLFdBQVc7QUFBQSxJQUN4QyxPQUFPO0FBQUEsTUFDTDtBQUFBO0FBQUEsSUFFRixRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsUUFDTCxRQUFRO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVixXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPbkIsTUFBSSxTQUFTLE1BQU07QUFDakIsWUFBUSxNQUFNO0FBRWQsV0FBTyw2QkFBUyxXQUFXO0FBQUEsTUFDekIsU0FBUztBQUFBLFFBQ1AsY0FBYyxNQUFNLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFLeEMsU0FBTztBQUFBO0FBR00saUJBQWlCO0FBQzlCLFFBQU0sT0FBTztBQUNiLFNBQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLFFBQUQsTUFBTyxLQUFLO0FBQUE7QUFLWCxrQkFBaUI7QUFDdEIsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTs7O0FDdERyQztBQUFBLElBQU8sMEJBQVEsRUFBQyxXQUFVLFlBQVcsU0FBUSxFQUFDLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxvQ0FBbUMsdUNBQXFDLFVBQVMsRUFBQyxRQUFPLEVBQUMsTUFBSyxRQUFPLFlBQVcsUUFBVSxRQUFPLElBQUcsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMkJBQTBCLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLHNCQUFxQixFQUFDLE1BQUssc0JBQXFCLFlBQVcsUUFBTyxRQUFPLFNBQVEsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMseUNBQXdDLFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx5QkFBd0IsRUFBQyxNQUFLLHlCQUF3QixZQUFXLFFBQU8sUUFBTyxZQUFXLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLDRDQUEyQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxxQ0FBb0MsRUFBQyxNQUFLLHFDQUFvQyxZQUFXLFFBQU8sUUFBTyw4QkFBNkIsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsd0RBQXVELFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saUNBQWdDLEVBQUMsTUFBSyxpQ0FBZ0MsWUFBVyxRQUFPLFFBQU8sMEJBQXlCLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLG9EQUFtRCxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGlDQUFnQyxFQUFDLE1BQUssaUNBQWdDLFlBQVcsUUFBTyxRQUFPLG9CQUFtQixTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyxvREFBbUQsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sbUNBQWtDLEVBQUMsTUFBSyxtQ0FBa0MsWUFBVyxRQUFPLFFBQU8sNEJBQTJCLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHNEQUFxRCxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGtDQUFpQyxFQUFDLE1BQUssa0NBQWlDLFlBQVcsUUFBTyxRQUFPLDJCQUEwQixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxxREFBb0QsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBcEJZNTFILElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixxQ0FBcUM7QUFBQSxJQUNqQyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG1DQUFtQztBQUFBLElBQy9CLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosa0NBQWtDO0FBQUEsSUFDOUIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpQ0FBaUM7QUFBQSxJQUM3QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGlDQUFpQztBQUFBLElBQzdCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoseUJBQXlCO0FBQUEsSUFDckIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixzQkFBc0I7QUFBQSxJQUNsQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
