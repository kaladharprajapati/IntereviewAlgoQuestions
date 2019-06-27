const Queue = require("./queue");

const q = new Queue();

q.add(function a() {});
q.add(function b() {});
q.add(function c() {});

const a = q.go();
const b = q.go();
const c = q.go();

q.add(function d() {});
q.add(function e() {});
q.add(function f() {});
