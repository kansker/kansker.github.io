(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_treeview_Treeview_vue"],{

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/treeview/Treeview.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/treeview/Treeview.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var avatars = ['?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban', '?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun', '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong', '?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair', '?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly'];

var pause = function pause(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [{
        id: 1,
        name: 'Applications :',
        children: [{
          id: 2,
          name: 'Calendar : app'
        }, {
          id: 3,
          name: 'Chrome : app'
        }, {
          id: 4,
          name: 'Webstorm : app'
        }]
      }, {
        id: 5,
        name: 'Documents :',
        children: [{
          id: 6,
          name: 'vuetify :',
          children: [{
            id: 7,
            name: 'src :',
            children: [{
              id: 8,
              name: 'index : ts'
            }, {
              id: 9,
              name: 'bootstrap : ts'
            }]
          }]
        }, {
          id: 10,
          name: 'material2 :',
          children: [{
            id: 11,
            name: 'src :',
            children: [{
              id: 12,
              name: 'v-btn : ts'
            }, {
              id: 13,
              name: 'v-card : ts'
            }, {
              id: 14,
              name: 'v-window : ts'
            }]
          }]
        }]
      }, {
        id: 15,
        name: 'Downloads :',
        children: [{
          id: 16,
          name: 'October : pdf'
        }, {
          id: 17,
          name: 'November : pdf'
        }, {
          id: 18,
          name: 'Tutorial : html'
        }]
      }, {
        id: 19,
        name: 'Videos :',
        children: [{
          id: 20,
          name: 'Tutorials :',
          children: [{
            id: 21,
            name: 'Basic layouts : mp4'
          }, {
            id: 22,
            name: 'Advanced techniques : mp4'
          }, {
            id: 23,
            name: 'All about app : dir'
          }]
        }, {
          id: 24,
          name: 'Intro : mov'
        }, {
          id: 25,
          name: 'Conference introduction : avi'
        }]
      }],
      open: ['public'],
      files: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-json',
        md: 'mdi-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel'
      },
      tree: [],
      slotsItems: [{
        name: '.git'
      }, {
        name: 'node_modules'
      }, {
        name: 'public',
        children: [{
          name: 'static',
          children: [{
            name: 'logo.png',
            file: 'png'
          }]
        }, {
          name: 'favicon.ico',
          file: 'png'
        }, {
          name: 'index.html',
          file: 'html'
        }]
      }, {
        name: '.gitignore',
        file: 'txt'
      }, {
        name: 'babel.config.js',
        file: 'js'
      }, {
        name: 'package.json',
        file: 'json'
      }, {
        name: 'README.md',
        file: 'md'
      }, {
        name: 'vue.config.js',
        file: 'js'
      }],
      active: [],
      avatar: null,
      asyncItemsOpen: [],
      users: [],
      breweries: [],
      isLoading: false,
      customTree: [],
      types: []
    };
  },
  computed: {
    asyncItems: function asyncItems() {
      return [{
        name: 'Users',
        children: this.users
      }];
    },
    selected: function selected() {
      if (!this.active.length) return undefined;
      var id = this.active[0];
      return this.users.find(function (user) {
        return user.id === id;
      });
    },
    selectableIcons: function selectableIcons() {
      var _this = this;

      var children = this.types.map(function (type) {
        return {
          id: type,
          name: _this.getName(type),
          children: _this.getChildren(type)
        };
      });
      return [{
        id: 1,
        name: 'All Breweries',
        children: children
      }];
    },
    selections: function selections() {
      var _this2 = this;

      var selections = [];

      var _iterator = _createForOfIteratorHelper(this.customTree),
          _step;

      try {
        var _loop = function _loop() {
          var leaf = _step.value;

          var brewery = _this2.breweries.find(function (brewery) {
            return brewery.id === leaf;
          });

          if (!brewery) return "continue";
          selections.push(brewery);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return selections;
    },
    shouldShowTree: function shouldShowTree() {
      return this.breweries.length > 0 && !this.isLoading;
    }
  },
  watch: {
    selected: 'randomAvatar',
    breweries: function breweries(val) {
      this.types = val.reduce(function (acc, cur) {
        var type = cur.brewery_type;
        if (!acc.includes(type)) acc.push(type);
        return acc;
      }, []).sort();
    }
  },
  methods: {
    fetchUsers: function fetchUsers(item) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return pause(1500);

              case 2:
                return _context.abrupt("return", fetch('https://jsonplaceholder.typicode.com/users').then(function (res) {
                  return res.json();
                }).then(function (json) {
                  var _item$children;

                  return (_item$children = item.children).push.apply(_item$children, _toConsumableArray(json));
                })["catch"](function (err) {
                  return console.warn(err);
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    randomAvatar: function randomAvatar() {
      this.avatar = avatars[Math.floor(Math.random() * avatars.length)];
    },
    fetched: function fetched() {
      var _this3 = this;

      if (this.breweries.length) return;
      return fetch('https://api.openbrewerydb.org/breweries').then(function (res) {
        return res.json();
      }).then(function (data) {
        return _this3.breweries = data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    getChildren: function getChildren(type) {
      var breweries = [];

      var _iterator2 = _createForOfIteratorHelper(this.breweries),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var brewery = _step2.value;
          if (brewery.brewery_type !== type) continue;
          breweries.push(_objectSpread(_objectSpread({}, brewery), {}, {
            name: this.getName(brewery.name)
          }));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return breweries.sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
      });
    },
    getName: function getName(name) {
      return "".concat(name.charAt(0).toUpperCase()).concat(name.slice(1));
    }
  }
});

/***/ }),

/***/ "./resources/js/views/treeview/Treeview.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/treeview/Treeview.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Treeview_vue_vue_type_template_id_4cec2a40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Treeview.vue?vue&type=template&id=4cec2a40& */ "./resources/js/views/treeview/Treeview.vue?vue&type=template&id=4cec2a40&");
/* harmony import */ var _Treeview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Treeview.vue?vue&type=script&lang=js& */ "./resources/js/views/treeview/Treeview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Treeview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Treeview_vue_vue_type_template_id_4cec2a40___WEBPACK_IMPORTED_MODULE_0__.render,
  _Treeview_vue_vue_type_template_id_4cec2a40___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/treeview/Treeview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/treeview/Treeview.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/treeview/Treeview.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Treeview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Treeview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/treeview/Treeview.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Treeview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/treeview/Treeview.vue?vue&type=template&id=4cec2a40&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/treeview/Treeview.vue?vue&type=template&id=4cec2a40& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Treeview_vue_vue_type_template_id_4cec2a40___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Treeview_vue_vue_type_template_id_4cec2a40___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Treeview_vue_vue_type_template_id_4cec2a40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Treeview.vue?vue&type=template&id=4cec2a40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/treeview/Treeview.vue?vue&type=template&id=4cec2a40&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/treeview/Treeview.vue?vue&type=template&id=4cec2a40&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/treeview/Treeview.vue?vue&type=template&id=4cec2a40& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "hover-wrapper" },
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "grid-list-xl pt-0 mt-n3" },
        [
          _c(
            "v-row",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.usage"),
                    customClasses: "mb-20",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("div", { staticClass: "mb-5" }, [
                    _c("p", [
                      _vm._v("The "),
                      _c("code", [_vm._v("v-treeview")]),
                      _vm._v(
                        " component is useful for displaying large amounts of nested data."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  [_c("v-treeview", { attrs: { items: _vm.items } })]
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.scopedSlots"),
                    customClasses: "mb-20",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("div", { staticClass: "mb-5" }, [
                    _c("p", [
                      _vm._v(
                        "Using scoped slots we are able to create an intuitive file explorer"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-treeview", {
                    attrs: {
                      open: _vm.open,
                      items: _vm.slotsItems,
                      activatable: "",
                      "item-key": "name",
                      "open-on-click": ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "prepend",
                        fn: function(ref) {
                          var item = ref.item
                          var open = ref.open
                          return [
                            !item.file
                              ? _c("v-icon", [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t" +
                                      _vm._s(
                                        open ? "mdi-folder-open" : "mdi-folder"
                                      ) +
                                      "\n\t\t\t\t\t\t\t"
                                  )
                                ])
                              : _c("v-icon", [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t" +
                                      _vm._s(_vm.files[item.file]) +
                                      "\n\t\t\t\t\t\t\t"
                                  )
                                ])
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.tree,
                      callback: function($$v) {
                        _vm.tree = $$v
                      },
                      expression: "tree"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.asyncItems"),
                    customClasses: "mb-20",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("div", { staticClass: "mb-5" }, [
                    _c("p", [
                      _vm._v(
                        "You can dynamically load child data by supplying a Promise callback to the "
                      ),
                      _c("code", [_vm._v("load-children")]),
                      _vm._v(
                        " prop. This callback will be executed the first time a user tries to expand an item that has a children property that is an empty array."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "indigo white--text headline" },
                        [_vm._v("\n\t\t\t\t\t\t\tUser Directory\n\t\t\t\t\t\t")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        {
                          staticClass:
                            "justify-space-between pa-3 d-md-flex d-block"
                        },
                        [
                          _c(
                            "v-col",
                            {
                              attrs: {
                                xl: "5",
                                lg: "5",
                                md: "5",
                                sm: "12",
                                cols: "12"
                              }
                            },
                            [
                              _c("v-treeview", {
                                staticClass: "grey lighten-5",
                                attrs: {
                                  active: _vm.active,
                                  items: _vm.asyncItems,
                                  "load-children": _vm.fetchUsers,
                                  open: _vm.asyncItemsOpen,
                                  activatable: "",
                                  "active-class": "primary--text",
                                  "open-on-click": "",
                                  transition: ""
                                },
                                on: {
                                  "update:active": function($event) {
                                    _vm.active = $event
                                  },
                                  "update:open": function($event) {
                                    _vm.asyncItemsOpen = $event
                                  }
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "prepend",
                                      fn: function(ref) {
                                        var item = ref.item
                                        var active = ref.active
                                        return !item.children
                                          ? _c(
                                              "v-icon",
                                              {
                                                attrs: {
                                                  color: active ? "primary" : ""
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "mdi-account\n\t\t\t\t\t\t\t\t\t"
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "d-flex text-center",
                              attrs: {
                                xl: "7",
                                lg: "7",
                                md: "7",
                                sm: "12",
                                cols: "12"
                              }
                            },
                            [
                              _c(
                                "v-scroll-y-transition",
                                { attrs: { mode: "out-in" } },
                                [
                                  !_vm.selected
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "title grey--text text--lighten-1 font-weight-light",
                                          staticStyle: {
                                            "align-self": "center"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\tSelect a User\n\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      )
                                    : _c(
                                        "v-card",
                                        {
                                          key: _vm.selected.id,
                                          staticClass: "mx-auto",
                                          attrs: {
                                            text: "",
                                            "max-width": "400"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-card-text",
                                            [
                                              _vm.avatar
                                                ? _c(
                                                    "v-avatar",
                                                    { attrs: { size: "88" } },
                                                    [
                                                      _c("v-img", {
                                                        staticClass: "mb-5",
                                                        attrs: {
                                                          src:
                                                            "https://avataaars.io/" +
                                                            _vm.avatar
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "h3",
                                                {
                                                  staticClass: "headline mb-2"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                      _vm._s(
                                                        _vm.selected.name
                                                      ) +
                                                      "\n\t\t\t\t\t\t\t\t\t\t\t"
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "blue--text mb-2"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.selected.email)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "blue--text subheading font-weight-bold"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.selected.username
                                                    )
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-divider"),
                                          _vm._v(" "),
                                          _c(
                                            "v-row",
                                            {
                                              staticClass: "text-left",
                                              attrs: { tag: "v-card-text" }
                                            },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "text-right mr-3 mb-2",
                                                  attrs: {
                                                    tag: "strong",
                                                    xs: "5"
                                                  }
                                                },
                                                [_vm._v("Company:")]
                                              ),
                                              _vm._v(" "),
                                              _c("v-col", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.selected.company.name
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "text-right mr-3 mb-2",
                                                  attrs: {
                                                    tag: "strong",
                                                    xs: "5"
                                                  }
                                                },
                                                [_vm._v("Website:")]
                                              ),
                                              _vm._v(" "),
                                              _c("v-col", [
                                                _c(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      href:
                                                        "//" +
                                                        _vm.selected.website,
                                                      target: "_blank"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.selected.website
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "text-right mr-3 mb-2",
                                                  attrs: {
                                                    tag: "strong",
                                                    xs: "5"
                                                  }
                                                },
                                                [_vm._v("Phone:")]
                                              ),
                                              _vm._v(" "),
                                              _c("v-col", [
                                                _vm._v(
                                                  _vm._s(_vm.selected.phone)
                                                )
                                              ])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.customSelectableIcons"),
                    customClasses: "mb-20",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("div", { staticClass: "mb-5" }, [
                    _c("p", [
                      _vm._v(
                        "Customize the on, off and indeterminate icons for your selectable tree. Combine with other advanced functionality like API loaded items."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-app-bar",
                        { attrs: { color: "grey lighten-3" } },
                        [
                          _c("v-icon", [_vm._v("mdi-silverware")]),
                          _vm._v(" "),
                          _c("v-toolbar-title", [_vm._v("Local hotspots")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { "d-md-flex": "", "d-block": "" } },
                        [
                          _c(
                            "v-col",
                            {
                              attrs: {
                                xl: "6",
                                lg: "6",
                                md: "6",
                                sm: "12",
                                cols: "12"
                              }
                            },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-treeview", {
                                    attrs: {
                                      "load-children": _vm.fetched,
                                      items: _vm.selectableIcons,
                                      activatable: "",
                                      "active-class":
                                        "grey lighten-4 indigo--text",
                                      "selected-color": "indigo",
                                      "open-on-click": "",
                                      selectable: "",
                                      "expand-icon": "mdi-chevron-down",
                                      "on-icon": "mdi-bookmark",
                                      "off-icon": "mdi-bookmark-outline",
                                      "indeterminate-icon": "mdi-bookmark-minus"
                                    },
                                    model: {
                                      value: _vm.customTree,
                                      callback: function($$v) {
                                        _vm.customTree = $$v
                                      },
                                      expression: "customTree"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", { attrs: { vertical: "" } }),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              attrs: {
                                xl: "6",
                                lg: "6",
                                md: "6",
                                sm: "12",
                                cols: "12"
                              }
                            },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _vm.selections.length === 0
                                    ? _c(
                                        "div",
                                        {
                                          key: "title",
                                          staticClass:
                                            "title font-weight-light grey--text pa-3 text-center"
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\tSelect your favorite breweries\n\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-scroll-x-transition",
                                    {
                                      attrs: { group: "", "hide-on-leave": "" }
                                    },
                                    _vm._l(_vm.selections, function(
                                      selection,
                                      i
                                    ) {
                                      return _c(
                                        "v-chip",
                                        {
                                          key: i,
                                          attrs: {
                                            color: "grey",
                                            dark: "",
                                            small: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { left: "", small: "" } },
                                            [_vm._v("mdi-beer")]
                                          ),
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                              _vm._s(selection.name) +
                                              "\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ],
                                        1
                                      )
                                    }),
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "" },
                              on: {
                                click: function($event) {
                                  _vm.customTree = []
                                }
                              }
                            },
                            [_vm._v("\n\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t")]
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "white--text",
                              attrs: { color: "green darken-1", depressed: "" }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t"
                              ),
                              _c("v-icon", { attrs: { right: "" } }, [
                                _vm._v("mdi-content-save")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);