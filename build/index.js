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
  }), /* @__PURE__ */ React.createElement("title", null, title ?? "Test title"), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, false ? /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null) : null));
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
    secure: true
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
if (false)
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
var assets_manifest_default = { "version": "55652f3a", "entry": { "module": "/build/entry.client-3NCZFL3S.js", "imports": ["/build/_shared/chunk-WX4AUJDL.js", "/build/_shared/chunk-TOAMQMCD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-NUEJXXQY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-Z5WP6UUO.js", "imports": ["/build/_shared/chunk-U4NMNIVB.js", "/build/_shared/chunk-BDFAWK5F.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-TDGIO4JV.js", "imports": ["/build/_shared/chunk-UDKF3PBR.js", "/build/_shared/chunk-U4NMNIVB.js", "/build/_shared/chunk-FMBYSCT6.js", "/build/_shared/chunk-BDFAWK5F.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/index": { "id": "routes/register/index", "parentId": "root", "path": "register", "index": true, "caseSensitive": void 0, "module": "/build/routes/register/index-LLFN6RUK.js", "imports": ["/build/_shared/chunk-PEGPPPF4.js", "/build/_shared/chunk-XLBA6GL5.js", "/build/_shared/chunk-RJ2V74WO.js", "/build/_shared/chunk-MW5752ME.js", "/build/_shared/chunk-FMBYSCT6.js", "/build/_shared/chunk-BDFAWK5F.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/preview/barbarian": { "id": "routes/register/preview/barbarian", "parentId": "root", "path": "register/preview/barbarian", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register/preview/barbarian-CVYB46AZ.js", "imports": ["/build/_shared/chunk-LDOV6R7Y.js", "/build/_shared/chunk-PEGPPPF4.js", "/build/_shared/chunk-MW5752ME.js", "/build/_shared/chunk-FMBYSCT6.js", "/build/_shared/chunk-BDFAWK5F.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/preview/druid": { "id": "routes/register/preview/druid", "parentId": "root", "path": "register/preview/druid", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register/preview/druid-QDP5U6W7.js", "imports": ["/build/_shared/chunk-LDOV6R7Y.js", "/build/_shared/chunk-RJ2V74WO.js", "/build/_shared/chunk-MW5752ME.js", "/build/_shared/chunk-FMBYSCT6.js", "/build/_shared/chunk-BDFAWK5F.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/preview/index": { "id": "routes/register/preview/index", "parentId": "root", "path": "register/preview", "index": true, "caseSensitive": void 0, "module": "/build/routes/register/preview/index-J4CKDJAB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/preview/paladin": { "id": "routes/register/preview/paladin", "parentId": "root", "path": "register/preview/paladin", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register/preview/paladin-PTGYUUBL.js", "imports": ["/build/_shared/chunk-LDOV6R7Y.js", "/build/_shared/chunk-XLBA6GL5.js", "/build/_shared/chunk-MW5752ME.js", "/build/_shared/chunk-FMBYSCT6.js", "/build/_shared/chunk-BDFAWK5F.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/selected/$name": { "id": "routes/register/selected/$name", "parentId": "root", "path": "register/selected/:name", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register/selected/$name-3XDLJFR6.js", "imports": ["/build/_shared/chunk-UDKF3PBR.js", "/build/_shared/chunk-U4NMNIVB.js", "/build/_shared/chunk-FMBYSCT6.js", "/build/_shared/chunk-BDFAWK5F.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-55652F3A.js" };

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
