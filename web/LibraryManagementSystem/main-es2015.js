(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 登录 -->\n<div class=\"container\">\n  <!--路由出口未指向（具体在路由类中） -> 默认登录页面 -->\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book/add-book.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book/add-book.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"in\">\n  <h2>添加图书信息</h2>\n  <span>请输入以下信息： </span><br>\n  <label>图书编号:</label> <input #bookNo />*<br>\n  <label>图书ISBN编号:</label> <input #bookIsbn />*<br>\n  <label>图书名称:</label> <input #bookName />*<br>\n  <label>作者:</label> <input #bookAuthor />*<br>\n  <label>出版社:</label> <input #bookPublish />*<br>\n  <label>出版日期:</label> <input #bookPublishDate />*<br>\n  <label>图书类型:</label>\n  <select [(ngModel)]=\"bookType\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let bookType of bookTypes\" [ngValue]=\"bookType\">{{bookType.typeName}}</option>\n  </select><br>\n  <label>单价:</label> <input #bookUnitPrice />*<br>\n  <label>图书状态:</label> <input #bookStatus />*<br>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(bookNo.value,bookIsbn.value,bookName.value,\nbookAuthor.value,bookPublish.value,bookPublishDate.value,Number(bookUnitPrice.value),this.bookType,\nNumber(bookStatus.value))\">保存</button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<table class=\"tablelist\">\n<input #bookName>\n  <button (click)=\"getBookByName(bookName.value)\">书名查询</button>\n  <tr><th>标号</th><th>图书编号</th>\n    <th>图书名称</th><th>作者</th><th>出版社</th>\n    <th>出版日期</th><th>图书类型</th><th>单价</th><th>图书状态</th><th>操作</th></tr>\n  <tr *ngFor=\"let book of dataShow;let i=index;\" class=\"badge\">\n    <td>{{i+1+(currentPag-1)*pagNums}}</td>\n    <td>{{book.isbn}}</td>\n    <td>{{book.bookName}}</td>\n    <td>{{book.author}}</td>\n    <td>{{book.publish}}</td>\n    <td>{{book.publishDate}}</td>\n    <td><label *ngIf=\"book.bookType\">{{book.bookType.typeName}}</label></td>\n    <td>{{book.unitPrice}}</td>\n    <td>{{book.bookStatus}}</td>\n    <td><a routerLink=\"/index/updateBook/{{book.id}}\"><button class=\"update\" >修改</button></a>\n      <button class=\"delete\"  (click)=\"delete(book)\">删除</button></td>\n  </tr><!-- [leng]=\"leng\"用于往子组件传递变量数据，可以是对象。-->\n  <a routerLink=\"/index/addBook\"><button > 添加图书信息 </button></a>\n  <tr><td colspan=\"12\"> <app-paging  [leng]=\"leng\" (currentPag)=\"currentPagHandel($event)\" (pagNums)=\"pagNumsHandel($event)\"> </app-paging></td></tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book/update-book.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book/update-book.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"book\" class=\"in\">\n  <h2>图书信息修改</h2><br>\n  <div><span>序号: </span>{{book.id}}</div>\n  <div>\n    <label>图书编号: </label> <input [(ngModel)]=\"book.no\" /><br>\n    <label>图书ISBN编号: </label> <input [(ngModel)]=\"book.isbn\" /><br>\n    <label>图书名称: </label> <input [(ngModel)]=\"book.bookName\"/><br>\n    <label>作者: </label> <input [(ngModel)]=\"book.author\" /><br>\n    <label>出版社: </label> <input [(ngModel)]=\"book.publish\" /><br>\n    <label>出版日期: </label> <input [(ngModel)]=\"book.publishDate\"/><br>\n    <label>图书类型:</label>  <!--   ngModel用于将文本框与变量进行双向绑定。ngValue支持对象，value仅支持字符串-->\n    <select [(ngModel)]=\"book.bookType\" [compareWith]=\"compareFn\">\n      <option *ngFor=\"let bookType of bookTypes\" [ngValue]=\"bookType\">{{bookType.typeName}}</option>\n    </select><br>\n    <label>单价: </label> <input [(ngModel)]=\"book.unitPrice\" /><br>\n    <label>图书状态: </label> <input [(ngModel)]=\"book.bookStatus\"/><br>\n  </div>\n  <button (click)=\"goBack()\">返回</button>\n  <button (click)=\"save()\">保存</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booktype/add-booktype.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booktype/add-booktype.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"in\">\n  <h2>添加新图书类型</h2>\n  <span>请输入以下信息： </span><br>\n  <label>图书类型序号:</label> <input #no />*<br>\n  <label>图书类型名称:</label> <input #typeName />*<br>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(no.value, typeName.value)\">保存</button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booktype/booktype.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booktype/booktype.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<table class=\"tablelist\">\n  <tr><th>序号</th><th>编号</th><th>图书类型名称</th><th>操作</th></tr>\n  <tr *ngFor=\"let bookType of dataShow\" class=\"badge\">\n    <td>{{bookType.id}}</td>\n    <td>{{bookType.no}}</td>\n    <td>{{bookType.typeName}}</td>\n    <td> <a routerLink=\"/index/updateBookType/{{bookType.id}}\"><button>修改</button></a>\n      <button (click)=\"delete(bookType)\">删除</button></td>\n  </tr><!-- [leng]=\"leng\"用于往子组件传递变量数据，可以是对象。-->\n  <a routerLink=\"/index/addBookType\"><button > 添加图书类型</button></a>\n  <tr><td colspan=\"6\"> <app-paging [leng]=\"leng\" (currentPag)=\"currentPagHandel($event)\" (pagNums)=\"pagNumsHandel($event)\"> </app-paging></td></tr>\n</table>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booktype/update-booktype.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booktype/update-booktype.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"bookType\" class=\"in\">\n  <h2>图书类型信息修改</h2><br>\n  <div>\n    <label>图书类型编号: </label> <input [(ngModel)]=\"bookType.no\"/><br>\n    <label>图书类型名称: </label> <input [(ngModel)]=\"bookType.typeName\"/><br>\n  </div>\n  <button (click)=\"goBack()\">返回</button>\n  <button (click)=\"save()\">保存</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/borrow-book/add-borrow-book.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrow-book/add-borrow-book.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"in\">\n  <h2>添加借阅记录</h2>\n  <label>借书编号:</label> <input #borrowBookNo />*<br>\n  <label>读者姓名:</label>\n  <select [(ngModel)]=\"reader\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let reader of readers\" [ngValue]=\"reader\">{{reader.name}}</option>\n  </select><br>\n  <label>图书名称:</label>\n  <select [(ngModel)]=\"book\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let book of books\" [ngValue]=\"book\">{{book.bookName}}</option>\n  </select><br>\n  <label>办理人姓名:</label>\n  <select [(ngModel)]=\"manager\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let manager of managers\" [ngValue]=\"manager\">{{manager.name}}</option>\n  </select><br>\n\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(borrowBookNo.value,this.reader,this.book,this.manager)\">保存</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/borrow-book/borrow-book.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrow-book/borrow-book.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"tablelist\">\n  <tr><th>标号</th><th>借阅日期</th><th>读者姓名</th><th>图书名称</th><th>办理人姓名</th><th>操作</th></tr>\n  <tr *ngFor=\"let borrowBook of dataShow;let i=index;\" class=\"badge\">\n    <td>{{i+1+(currentPag-1)*pagNums}}</td>\n    <td>{{borrowBook.borrowDate}}</td>\n    <td><label *ngIf=\"borrowBook.reader\">{{borrowBook.reader.name}}</label></td>\n    <td><label *ngIf=\"borrowBook.book\">{{borrowBook.book.bookName}}</label></td>\n    <td><label *ngIf=\"borrowBook.manager\">{{borrowBook.manager.name}}</label></td>\n    <td><a routerLink=\"/index/update-borrow-book/{{borrowBook.id}}\"><button class=\"update\">修改</button></a>\n      <button class=\"delete\" (click)=\"delete(borrowBook)\">删除</button></td>\n  </tr><!-- [leng]=\"leng\"用于往子组件传递变量数据，可以是对象。-->\n  <input #readerName><button (click)=\"select(readerName.value)\">输入读者姓名关键字搜索</button>\n  <a routerLink=\"/index/add-borrow-book\"><button >添加借阅记录</button></a>\n  <tr><td colspan=\"8\"> <app-paging  [leng]=\"leng\" (currentPag)=\"currentPagHandel($event)\" (pagNums)=\"pagNumsHandel($event)\"> </app-paging></td></tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/borrow-book/update-borrow-book.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrow-book/update-borrow-book.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"borrowBook\" class=\"in\">\n  <h2>修改借阅记录</h2>\n  <span>借阅记录信息： </span><br>\n  <label>借书编号:</label> <input [(ngModel)]=borrowBook.no /><br>\n  <label>借阅日期:</label> <input [(ngModel)]=borrowBook.borrowDate /><br>\n  <label>读者姓名:</label>\n  <select [(ngModel)]=\"borrowBook.reader\" [compareWith]=\"compareFn\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let reader of readers\" [ngValue]=\"reader\">{{reader.name}}</option>\n  </select><br>\n  <label>图书名称:</label>\n  <select [(ngModel)]=\"borrowBook.book\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let book of books\" [ngValue]=\"book\">{{book.bookName}}</option>\n  </select><br>\n  <label>办理人姓名:</label>\n  <select [(ngModel)]=\"borrowBook.manager\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let manager of managers\" [ngValue]=\"manager\">{{manager.name}}</option>\n  </select><br>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save()\">保存</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fine/fine.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fine/fine.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"tablelist\">\n  <tr><th>标号</th><th>罚金金额</th><th>描述</th><th>读者姓名</th><th>所借书名</th><th>操作</th></tr>\n  <tr *ngFor=\"let fine of dataShow; let i=index;\" class=\"badge\">\n    <td>{{i+1+(currentPag-1)*pagNums}}</td>\n    <td>{{fine.fineAmount}}</td>\n    <td>{{fine.description}}</td>\n    <td><label *ngIf=\"fine.reader\">{{fine.reader.name}}</label></td>\n    <td><label *ngIf=\"fine.book\">{{fine.book.bookName}}</label></td>\n    <td><a routerLink=\"/index/update-fine/{{fine.id}}\"><button class=\"update\" >修改</button></a>\n      <button class=\"delete\"  (click)=\"delete(fine)\">删除</button></td>\n  </tr><!-- [leng]=\"leng\"用于往子组件传递变量数据，可以是对象。-->\n  <input #readerName><button (click)=\"select(readerName.value)\">输入读者姓名关键字搜索</button>\n  <tr><td colspan=\"10\"> <app-paging  [leng]=\"leng\" (currentPag)=\"currentPagHandel($event)\" (pagNums)=\"pagNumsHandel($event)\"> </app-paging></td></tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fine/update-fine.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fine/update-fine.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"fine\" class=\"in\">\n  <h2>修改罚金</h2>\n  <span>所选罚金信息： </span><br>\n  <label>罚金编号:</label> <input  [(ngModel)]=\"fine.no\" /><br>\n  <label>罚金金额:</label> <input [(ngModel)]=\"fine.fineAmount\" /><br>\n  <label>罚金描述:</label> <input [(ngModel)]=\"fine.description\" /><br>\n  <label>读者姓名:</label>  <!--   ngModel用于将文本框与变量进行双向绑定。ngValue支持对象，value仅支持字符串-->\n  <select [(ngModel)]=\"fine.reader\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let reader of readers\" [ngValue]=\"reader\">{{reader.name}}</option>\n  </select><br>\n  <label>所借书名:</label>  <!--   ngModel用于将文本框与变量进行双向绑定。ngValue支持对象，value仅支持字符串-->\n  <select [(ngModel)]=\"fine.book\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let book of books\" [ngValue]=\"book\">{{book.bookName}}</option>\n  </select><br>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save()\">保存</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div><div class=\"header\" [ngStyle]=\"{'background-image': 'url(' + '../../assets/images/3.jpg' + ')'}\">\n  <div class=\"lib\">翰林图书馆</div>\n  <h1>图书管理系统</h1>\n  <div class=\"welcome\">欢迎：{{user.username}}<br>\n    <a routerLink='/' >安全退出</a></div>\n</div>\n<div class=\"navigation\">\n  <a *ngFor=\"let menu of menus\" routerLink=\"{{menu.url}}\" >{{menu.description}}</a>\n  <a routerLink=\"/index/super-admin-role\" >用户角色管理</a>\n</div>\n<div class=\"bot\">\n  地址：山东省济南市临港开发区凤鸣路 &nbsp;&nbsp;&nbsp;邮编：&nbsp;250101\n</div>\n  <section><router-outlet></router-outlet></section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"back\" [ngStyle]=\"{'background-image': 'url(' + '../../assets/images/2.jpg' + ')'}\">\n  <div class=\"demo1\">\n    <div class=\"wel\">Books Management System</div>\n    <div class=\"bg\">\n      <div class=\"user\">\n        <div class=\"inuser\">用户名</div>\n        <input type=\"text\" name=\"用户\" value=\"\" #uName>\n      </div>\n      <div class=\"password\">\n        <div class=\"inuser\">密&nbsp;&nbsp;&nbsp;码</div>\n        <input class=\"\" type=\"password\" name=\"密码\" value=\"\" #uPassword>\n      </div>\n      <div class=\"rem\">\n        <input type=\"checkbox\" name=\"\">\n        <div class=\"reb\">\n          记住密码\n        </div>\n      </div>\n      <div class=\"fg\">\n        <div >\n          <a href=\"\">忘记密码？</a>\n        </div>\n      </div>\n      <button (click)=\"login(uName.value, uPassword.value)\">登录</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manager/add-manager.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manager/add-manager.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"in\">\n  <h2>添加新用户</h2>\n  <span>请输入以下信息： </span><br>\n  <label>用户编号:</label> <input #collegeNo />*<br>\n  <label>用户账号:</label> <input #collegeName />*<br>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(collegeNo.value,collegeName.value)\">保存</button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manager/manager.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manager/manager.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<table class=\"tablelist\">\n  <input #managerName>\n  <button (click)=\"getManagerByname(managerName.value)\">用户查询</button>\n  <tr><th>标号</th><th>用户账号</th><th>操作</th></tr>\n  <tr *ngFor=\"let manager of dataShow; let i=index;\" class=\"badge\">\n    <td>{{i+1+(currentPag-1)*pagNums}}</td>\n    <td>{{manager.name}}</td>\n    <td> <a routerLink=\"/index/updateManager/{{manager.id}}\"><button class=\"update\" >修改</button></a>\n      <button class=\"delete\" (click)=\"delete(manager)\">删除</button></td>\n  </tr><!-- [leng]=\"leng\"用于往子组件传递变量数据，可以是对象。-->\n  <a routerLink=\"/index/addManager\"><button > 添加用户</button></a>\n  <tr><td colspan=\"5\"> <app-paging  [leng]=\"leng\" (currentPag)=\"currentPagHandel($event)\" (pagNums)=\"pagNumsHandel($event)\"> </app-paging></td></tr>\n</table>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manager/update-manager.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manager/update-manager.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"manager\" class=\"in\">\r\n  <h2>用户信息修改</h2><br>\r\n  <div>\r\n    <label>用户编号: </label> <input [(ngModel)]=\"manager.no\" /><br>\r\n    <label>用户账号: </label> <input [(ngModel)]=\"manager.name\"/><br>\r\n  </div>\r\n  <button (click)=\"goBack()\">返回</button>\r\n  <button (click)=\"save()\">保存</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/page.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box-footer clearfix\" style=\"width: 100%\">\n  <ul id=\"paging\" >\n    <li><a (click)=\"previous()\">&laquo;</a></li>\n    <ul *ngFor=\"let pag of pags\" id=\"pags\">\n      <li><a (click)=\"gitPag(pag)\" [class.active]=\"pag == pagCurren\">{{pag}}</a></li>\n    </ul>\n    <li><a (click)=\"next()\">&raquo;</a></li>  每页最大行数：\n    <select [(ngModel)]=\"pagNum\" (click)=\"gitPagNum()\">\n      <option>5</option>\n      <option>10</option>\n      <option>20</option>\n    </select> 数据总行数：{{leng}}\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reader/add-reader.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reader/add-reader.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"in\">\n  <h2>添加新读者</h2>\n  <span>请输入以下信息： </span><br>\n  <label>读者编号:</label> <input #readerNo />*<br>\n  <label>读者名称:</label> <input #readerName />*<br>\n  <label>读者年龄:</label> <input #readerAge />*<br>\n  <label>联系方式:</label> <input #readerPhone />*<br>\n  <label>所属类型:</label>\n  <select [(ngModel)]=\"readerType\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let readerType of readerTypes\" [ngValue]=\"readerType\">{{readerType.typeName}}</option>\n  </select><br>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(readerNo.value,readerName.value,Number(readerAge.value),readerPhone.value,this.readerType)\">提交</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reader/detail-reader.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reader/detail-reader.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"in\" *ngIf=\"reader\">\n  <h2>读者详细信息</h2><br>\n  <div>\n    <label>读者序号: </label>{{reader.id}}<br>\n    <label>读者编号:</label> {{reader.no}}<br>\n    <label>读者姓名:</label> {{reader.name}}<br>\n    <label>读者年龄:</label> {{reader.age}}<br>\n    <label>联系方式:</label> {{reader.phone}}<br>\n    <label>注册日期:</label> {{reader.date}}<br>\n    <label *ngIf=\"reader.readerType\">所属类型: {{reader.readerType.typeName}}</label><br>\n    <label>已借本数:</label> {{reader.borrowedNum}}<br>\n  </div>\n  <button (click)=\"goBack()\">返回</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reader/reader.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reader/reader.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"tablelist\">\n  <tr><th>标号</th><th>姓名</th><th>年龄</th><th>联系方式</th><th>注册日期</th><th>类型</th><th>已借本数</th><th>操作</th></tr>\n  <tr *ngFor=\"let reader of dataShow; let i=index;\" class=\"badge\">\n    <td>{{i+1+(currentPag-1)*pagNums}}</td>\n    <td><a routerLink=\"/index/detail-reader/{{reader.id}}\" [queryParams]=\"reader\">{{reader.name}}</a></td>\n    <td><a routerLink=\"/index/detail-reader/{{reader.id}}\" [queryParams]=\"reader\">{{reader.age}}</a></td>\n    <td><a routerLink=\"/index/detail-reader/{{reader.id}}\" [queryParams]=\"reader\">{{reader.phone}}</a></td>\n    <td><a routerLink=\"/index/detail-reader/{{reader.id}}\" [queryParams]=\"reader\">{{reader.date}}</a></td>\n    <td><label *ngIf=\"reader.readerType\"><a routerLink=\"/index/detail-reader/{{reader.id}}\" [queryParams]=\"reader\">{{reader.readerType.typeName}}</a></label></td>\n    <td><a routerLink=\"/index/detail-reader/{{reader.id}}\" [queryParams]=\"reader\">{{reader.borrowedNum}}</a></td>\n    <td><a routerLink=\"/index/update-reader/{{reader.id}}\"><button class=\"update\" >修改</button></a>\n      <button class=\"delete\"  (click)=\"delete(reader)\">删除</button></td>\n  </tr><!-- [leng]=\"leng\"用于往子组件传递变量数据，可以是对象。-->\n  <input #name><button (click)=\"select(name.value)\">输入姓名关键字搜索</button>\n  <a routerLink=\"/index/add-reader\"><button > 添加读者</button></a><br>\n  <tr><td colspan=\"10\"> <app-paging  [leng]=\"leng\" (currentPag)=\"currentPagHandel($event)\" (pagNums)=\"pagNumsHandel($event)\"> </app-paging></td></tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reader/update-reader.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reader/update-reader.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"reader\" class=\"in\">\n  <h2>修改读者</h2>\n  <span>所选读者信息： </span><br>\n  <label>读者编号:</label> <input  [(ngModel)]=\"reader.no\" /><br>\n  <label>读者姓名:</label> <input [(ngModel)]=\"reader.name\" /><br>\n  <label>读者年龄:</label> <input [(ngModel)]=\"reader.age\" /><br>\n  <label>联系方式:</label> <input [(ngModel)]=\"reader.phone\" /><br>\n  <label>所属类型:</label>  <!--   ngModel用于将文本框与变量进行双向绑定。ngValue支持对象，value仅支持字符串-->\n  <select [(ngModel)]=\"reader.readerType\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let readerType of readerTypes\" [ngValue]=\"readerType\">{{readerType.typeName}}</option>\n  </select><br>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save()\">提交</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/readertype/add-readertype.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/readertype/add-readertype.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"in\">\n  <h2>添加读者类型</h2>\n  <span>请输入以下信息： </span><br>\n  <label>读者类型编号:</label> <input #no />*<br>\n  <label>读者类型名称:</label> <input #typeName />*<br>\n  <label>最大借书数量:</label> <input #maxBorrowNum />*<br>\n  <label>可借书天数:</label> <input #limitDate />*<br>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(no.value, typeName.value, maxBorrowNum.value,  limitDate.value)\">保存</button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/readertype/readertype.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/readertype/readertype.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"tablelist\">\n  <tr><th>序号</th><th>编号</th><th>读者类型名称</th><th>最大借书数量</th><th>可借书天数</th><th>操作</th></tr>\n  <tr *ngFor=\"let readertype of dataShow\" class=\"badge\">\n    <td>{{readertype.id}}</td>\n    <td>{{readertype.no}}</td>\n    <td>{{readertype.typeName}}</td>\n    <td>{{readertype.maxBorrowNum}}</td>\n    <td>{{readertype.limitDate}}</td>\n    <td> <a routerLink=\"/index/updateReaderType/{{readertype.id}}\"><button>修改</button></a>\n      <button (click)=\"delete(readertype)\">删除</button></td>\n  </tr><!-- [leng]=\"leng\"用于往子组件传递变量数据，可以是对象。-->\n  <a routerLink=\"/index/addReaderType\"><button > 添加读者类型</button></a>\n  <tr><td colspan=\"6\"> <app-paging  [leng]=\"leng\" (currentPag)=\"currentPagHandel($event)\" (pagNums)=\"pagNumsHandel($event)\"> </app-paging></td></tr>\n</table>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/readertype/update-readertype.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/readertype/update-readertype.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"readertype\" class=\"in\">\n  <h2>读者类型修改</h2><br>\n  <div><span>编号: </span>{{readertype.no}}</div>\n  <div>\n    <label>读者类型名称: </label> <input [(ngModel)]=\"readertype.typeName\" /><br>\n    <label>最大借书数量: </label> <input [(ngModel)]=\"readertype.maxBorrowNum\"/><br>\n    <label>可借书天数: </label> <textarea [(ngModel)]=\"readertype.limitDate\" ></textarea>\n  </div>\n  <button (click)=\"goBack()\">返回</button>\n  <button (click)=\"save()\">保存</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/returnBook/addReturnBook.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/returnBook/addReturnBook.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"in\">\n  <h2>添加还书记录</h2>\n  <label>还书编号:</label> <input #returnBookNo />*<br>\n  <label>读者姓名:</label>\n  <select [(ngModel)]=\"reader\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let reader of readers\" [ngValue]=\"reader\">{{reader.name}}</option>\n  </select><br>\n  <label>图书名称:</label>\n  <select [(ngModel)]=\"book\" (change)=\" getBorBook(book.id)\" ><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let book of books\" [ngValue]=\"book\">{{book.bookName}}</option>\n  </select><br>\n  <label>借阅日期:</label>\n  <select [(ngModel)]=\"borrowBook\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let borrowBook of borrowBooks\" [ngValue]=\"borrowBook\">{{borrowBook.borrowDate}}</option>\n  </select><br>\n  <label>办理人姓名:</label>\n  <select [(ngModel)]=\"manager\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let manager of managers\" [ngValue]=\"manager\">{{manager.name}}</option>\n  </select><br>\n\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(returnBookNo.value,this.reader,this.book,this.borrowBook,this.manager)\">保存</button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/returnBook/returnBook.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/returnBook/returnBook.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"tablelist\">\n  <tr><th>标号</th><th>归还日期</th><th>读者姓名</th><th>图书名称</th><th>借阅日期</th><th>办理人姓名</th><th>操作</th></tr>\n  <tr *ngFor=\"let returnBook of dataShow;let i=index;\" class=\"badge\">\n    <td>{{i+1+(currentPag-1)*pagNums}}</td>\n    <td>{{returnBook.returnDate}}</td>\n    <td><label *ngIf=\"returnBook.reader\">{{returnBook.reader.name}}</label></td>\n    <td><label *ngIf=\"returnBook.book\">{{returnBook.book.bookName}}</label></td>\n    <td><label *ngIf=\"returnBook.borrowBook\">{{returnBook.borrowBook.borrowDate}}</label></td>\n    <td><label *ngIf=\"returnBook.manager\">{{returnBook.manager.name}}</label></td>\n    <td><a routerLink=\"/index/updateReturnBook/{{returnBook.id}}\"><button>修改</button></a><button (click)=\"delete(returnBook)\">删除</button></td>\n  </tr><!-- [leng]=\"leng\"用于往子组件传递变量数据，可以是对象。-->\n  <input #readerName><button (click)=\"select(readerName.value)\">输入读者姓名关键字搜索</button>\n  <a routerLink=\"/index/addReturnBook\"><button >添加还书记录</button></a>\n  <tr><td colspan=\"9\"> <app-paging  [leng]=\"leng\" (currentPag)=\"currentPagHandel($event)\" (pagNums)=\"pagNumsHandel($event)\"> </app-paging></td></tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/returnBook/updateReturnBook.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/returnBook/updateReturnBook.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"returnBook\" class=\"in\">\n  <h2>修改借阅记录</h2>\n  <span>借阅记录信息： </span><br>\n  <label>借书编号:</label> <input [(ngModel)]=returnBook.no /><br>\n  <label>归还日期:</label> <input [(ngModel)]=returnBook.returnDate /><br>\n  <label>读者姓名:</label>\n  <select [(ngModel)]=\"returnBook.reader\" [compareWith]=\"compareFn\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let reader of readers\" [ngValue]=\"reader\">{{reader.name}}</option>\n  </select><br>\n  <label>图书名称:</label>\n  <select [(ngModel)]=\"returnBook.book\" [compareWith]=\"compareFn\" (change)=\" getBorBook(returnBook.book.id)\" ><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let book of books\" [ngValue]=\"book\">{{book.bookName}}</option>\n  </select><br>\n  <label>借阅日期:</label>\n  <select [(ngModel)]=\"returnBook.borrowBook\" [compareWith]=\"compareFn\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let borrowBook of borrowBooks\" [ngValue]=\"borrowBook\">{{borrowBook.borrowDate}}</option>\n  </select><br>\n  <label>办理人姓名:</label>\n  <select [(ngModel)]=\"returnBook.manager\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let manager of managers\" [ngValue]=\"manager\">{{manager.name}}</option>\n  </select><br>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save()\">保存</button>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reader_reader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reader/reader.component */ "./src/app/reader/reader.component.ts");
/* harmony import */ var _reader_add_reader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reader/add-reader.component */ "./src/app/reader/add-reader.component.ts");
/* harmony import */ var _reader_update_reader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reader/update-reader.component */ "./src/app/reader/update-reader.component.ts");
/* harmony import */ var _reader_detail_reader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reader/detail-reader.component */ "./src/app/reader/detail-reader.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _booktype_booktype_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./booktype/booktype.component */ "./src/app/booktype/booktype.component.ts");
/* harmony import */ var _readertype_readertype_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./readertype/readertype.component */ "./src/app/readertype/readertype.component.ts");
/* harmony import */ var _booktype_add_booktype_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./booktype/add-booktype.component */ "./src/app/booktype/add-booktype.component.ts");
/* harmony import */ var _readertype_add_readertype_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./readertype/add-readertype.component */ "./src/app/readertype/add-readertype.component.ts");
/* harmony import */ var _booktype_update_booktype_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./booktype/update-booktype.component */ "./src/app/booktype/update-booktype.component.ts");
/* harmony import */ var _readertype_update_readertype_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./readertype/update-readertype.component */ "./src/app/readertype/update-readertype.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _book_add_Book_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./book/add-Book.component */ "./src/app/book/add-Book.component.ts");
/* harmony import */ var _book_update_Book_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./book/update-Book.component */ "./src/app/book/update-Book.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/manager/manager.component.ts");
/* harmony import */ var _manager_add_manager_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./manager/add-manager.component */ "./src/app/manager/add-manager.component.ts");
/* harmony import */ var _manager_update_manager_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./manager/update-manager.component */ "./src/app/manager/update-manager.component.ts");
/* harmony import */ var _fine_fine_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fine/fine.component */ "./src/app/fine/fine.component.ts");
/* harmony import */ var _fine_update_fine_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fine/update-fine.component */ "./src/app/fine/update-fine.component.ts");
/* harmony import */ var _borrow_book_borrow_book_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./borrow-book/borrow-book.component */ "./src/app/borrow-book/borrow-book.component.ts");
/* harmony import */ var _borrow_book_add_borrow_book_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./borrow-book/add-borrow-book.component */ "./src/app/borrow-book/add-borrow-book.component.ts");
/* harmony import */ var _borrow_book_update_borrow_book_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./borrow-book/update-borrow-book.component */ "./src/app/borrow-book/update-borrow-book.component.ts");
/* harmony import */ var _returnBook_returnBook_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./returnBook/returnBook.component */ "./src/app/returnBook/returnBook.component.ts");
/* harmony import */ var _returnBook_addReturnBook_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./returnBook/addReturnBook.component */ "./src/app/returnBook/addReturnBook.component.ts");
/* harmony import */ var _returnBook_updateReturnBook_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./returnBook/updateReturnBook.component */ "./src/app/returnBook/updateReturnBook.component.ts");






























const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"], pathMatch: 'full' },
    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"], children: [
            { path: 'reader', component: _reader_reader_component__WEBPACK_IMPORTED_MODULE_3__["ReaderComponent"] },
            { path: 'add-reader', component: _reader_add_reader_component__WEBPACK_IMPORTED_MODULE_4__["AddReaderComponent"] },
            { path: 'update-reader/:id', component: _reader_update_reader_component__WEBPACK_IMPORTED_MODULE_5__["UpdateReaderComponent"] },
            { path: 'detail-reader/:id', component: _reader_detail_reader_component__WEBPACK_IMPORTED_MODULE_6__["DetailReaderComponent"] },
            { path: 'bookType', component: _booktype_booktype_component__WEBPACK_IMPORTED_MODULE_9__["BooktypeComponent"] },
            { path: 'readerType', component: _readertype_readertype_component__WEBPACK_IMPORTED_MODULE_10__["ReadertypeComponent"] },
            { path: 'addBookType', component: _booktype_add_booktype_component__WEBPACK_IMPORTED_MODULE_11__["AddBooktypeComponent"] },
            { path: 'addReaderType', component: _readertype_add_readertype_component__WEBPACK_IMPORTED_MODULE_12__["AddReadertypeComponent"] },
            { path: 'updateBookType/:id', component: _booktype_update_booktype_component__WEBPACK_IMPORTED_MODULE_13__["UpdateBooktypeComponent"] },
            { path: 'updateReaderType/:id', component: _readertype_update_readertype_component__WEBPACK_IMPORTED_MODULE_14__["UpdateReadertypeComponent"] },
            { path: 'book', component: _book_book_component__WEBPACK_IMPORTED_MODULE_15__["BookComponent"] },
            { path: 'addBook', component: _book_add_Book_component__WEBPACK_IMPORTED_MODULE_16__["AddBookComponent"] },
            { path: 'updateBook/:id', component: _book_update_Book_component__WEBPACK_IMPORTED_MODULE_17__["UpdateBookComponent"] },
            { path: 'manager', component: _manager_manager_component__WEBPACK_IMPORTED_MODULE_19__["ManagerComponent"] },
            { path: 'addManager', component: _manager_add_manager_component__WEBPACK_IMPORTED_MODULE_20__["AddManagerComponent"] },
            { path: 'updateManager/:id', component: _manager_update_manager_component__WEBPACK_IMPORTED_MODULE_21__["UpdateManagerComponent"] },
            { path: 'page', component: _page_page_component__WEBPACK_IMPORTED_MODULE_8__["PageComponent"] },
            { path: 'fine', component: _fine_fine_component__WEBPACK_IMPORTED_MODULE_22__["FineComponent"] },
            { path: 'update-fine/:id', component: _fine_update_fine_component__WEBPACK_IMPORTED_MODULE_23__["UpdateFineComponent"] },
            { path: 'borrow-book', component: _borrow_book_borrow_book_component__WEBPACK_IMPORTED_MODULE_24__["BorrowBookComponent"] },
            { path: 'add-borrow-book', component: _borrow_book_add_borrow_book_component__WEBPACK_IMPORTED_MODULE_25__["AddBorrowBookComponent"] },
            { path: 'update-borrow-book/:id', component: _borrow_book_update_borrow_book_component__WEBPACK_IMPORTED_MODULE_26__["UpdateBorrowBookComponent"] },
            { path: 'returnBook', component: _returnBook_returnBook_component__WEBPACK_IMPORTED_MODULE_27__["ReturnBookComponent"] },
            { path: 'addReturnBook', component: _returnBook_addReturnBook_component__WEBPACK_IMPORTED_MODULE_28__["AddReturnBookComponent"] },
            { path: 'updateReturnBook/:id', component: _returnBook_updateReturnBook_component__WEBPACK_IMPORTED_MODULE_29__["UpdateReturnBookComponent"] },
        ] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nheader{\r\n  position: fixed;\r\n  border-bottom:solid 3px #eeeeff;\r\n  text-align:center;\r\n  background-color:#fefeff;\r\n  height:100px;\r\n}\r\nnav{\r\n  position: fixed;\r\n  width:200px; height:500px;\r\n  border-right:solid 3px #eeeeff;\r\n  float:left; }\r\nsection{\r\n  position: absolute;\r\n  top: 70px;\r\n  left: 200px;\r\n  padding-left:20px;\r\n  padding-top:10px;}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin: 10px;\r\n  display: block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #334953;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\na,input{ margin-right:10px;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFFLFlBQVk7RUFDekIsOEJBQThCO0VBQzlCLFVBQVUsRUFBRTtBQUNkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQixDQUFDO0FBQ25CO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSxTQUFTLGlCQUFpQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5oZWFkZXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvcmRlci1ib3R0b206c29saWQgM3B4ICNlZWVlZmY7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZmVmZWZmO1xyXG4gIGhlaWdodDoxMDBweDtcclxufVxyXG5uYXZ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOjIwMHB4OyBoZWlnaHQ6NTAwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OnNvbGlkIDNweCAjZWVlZWZmO1xyXG4gIGZsb2F0OmxlZnQ7IH1cclxuc2VjdGlvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3MHB4O1xyXG4gIGxlZnQ6IDIwMHB4O1xyXG4gIHBhZGRpbmctbGVmdDoyMHB4O1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7fVxyXG5uYXYgYSB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5uYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xyXG4gIGNvbG9yOiAjMzM0OTUzO1xyXG59XHJcbm5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAzOWJlNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG59XHJcbm5hdiBhLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMzliZTU7XHJcbn1cclxuYSxpbnB1dHsgbWFyZ2luLXJpZ2h0OjEwcHg7fVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'LibraryManagementSystem';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _reader_reader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reader/reader.component */ "./src/app/reader/reader.component.ts");
/* harmony import */ var _reader_add_reader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reader/add-reader.component */ "./src/app/reader/add-reader.component.ts");
/* harmony import */ var _reader_update_reader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reader/update-reader.component */ "./src/app/reader/update-reader.component.ts");
/* harmony import */ var _reader_detail_reader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reader/detail-reader.component */ "./src/app/reader/detail-reader.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _booktype_booktype_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./booktype/booktype.component */ "./src/app/booktype/booktype.component.ts");
/* harmony import */ var _booktype_add_booktype_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./booktype/add-booktype.component */ "./src/app/booktype/add-booktype.component.ts");
/* harmony import */ var _booktype_update_booktype_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./booktype/update-booktype.component */ "./src/app/booktype/update-booktype.component.ts");
/* harmony import */ var _readertype_update_readertype_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./readertype/update-readertype.component */ "./src/app/readertype/update-readertype.component.ts");
/* harmony import */ var _readertype_add_readertype_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./readertype/add-readertype.component */ "./src/app/readertype/add-readertype.component.ts");
/* harmony import */ var _readertype_readertype_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./readertype/readertype.component */ "./src/app/readertype/readertype.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _book_add_Book_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./book/add-Book.component */ "./src/app/book/add-Book.component.ts");
/* harmony import */ var _book_update_Book_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./book/update-Book.component */ "./src/app/book/update-Book.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/manager/manager.component.ts");
/* harmony import */ var _manager_add_manager_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./manager/add-manager.component */ "./src/app/manager/add-manager.component.ts");
/* harmony import */ var _manager_update_manager_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./manager/update-manager.component */ "./src/app/manager/update-manager.component.ts");
/* harmony import */ var _fine_fine_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./fine/fine.component */ "./src/app/fine/fine.component.ts");
/* harmony import */ var _fine_update_fine_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./fine/update-fine.component */ "./src/app/fine/update-fine.component.ts");
/* harmony import */ var _borrow_book_borrow_book_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./borrow-book/borrow-book.component */ "./src/app/borrow-book/borrow-book.component.ts");
/* harmony import */ var _borrow_book_add_borrow_book_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./borrow-book/add-borrow-book.component */ "./src/app/borrow-book/add-borrow-book.component.ts");
/* harmony import */ var _borrow_book_update_borrow_book_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./borrow-book/update-borrow-book.component */ "./src/app/borrow-book/update-borrow-book.component.ts");
/* harmony import */ var _returnBook_returnBook_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./returnBook/returnBook.component */ "./src/app/returnBook/returnBook.component.ts");
/* harmony import */ var _returnBook_addReturnBook_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./returnBook/addReturnBook.component */ "./src/app/returnBook/addReturnBook.component.ts");
/* harmony import */ var _returnBook_updateReturnBook_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./returnBook/updateReturnBook.component */ "./src/app/returnBook/updateReturnBook.component.ts");




































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _reader_reader_component__WEBPACK_IMPORTED_MODULE_7__["ReaderComponent"],
            _reader_add_reader_component__WEBPACK_IMPORTED_MODULE_8__["AddReaderComponent"],
            _reader_update_reader_component__WEBPACK_IMPORTED_MODULE_9__["UpdateReaderComponent"],
            _reader_detail_reader_component__WEBPACK_IMPORTED_MODULE_10__["DetailReaderComponent"],
            _page_page_component__WEBPACK_IMPORTED_MODULE_12__["PageComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"],
            _booktype_booktype_component__WEBPACK_IMPORTED_MODULE_14__["BooktypeComponent"],
            _booktype_add_booktype_component__WEBPACK_IMPORTED_MODULE_15__["AddBooktypeComponent"],
            _booktype_update_booktype_component__WEBPACK_IMPORTED_MODULE_16__["UpdateBooktypeComponent"],
            _readertype_update_readertype_component__WEBPACK_IMPORTED_MODULE_17__["UpdateReadertypeComponent"],
            _readertype_add_readertype_component__WEBPACK_IMPORTED_MODULE_18__["AddReadertypeComponent"],
            _readertype_readertype_component__WEBPACK_IMPORTED_MODULE_19__["ReadertypeComponent"],
            _book_book_component__WEBPACK_IMPORTED_MODULE_20__["BookComponent"],
            _book_add_Book_component__WEBPACK_IMPORTED_MODULE_21__["AddBookComponent"],
            _book_update_Book_component__WEBPACK_IMPORTED_MODULE_22__["UpdateBookComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
            _manager_manager_component__WEBPACK_IMPORTED_MODULE_24__["ManagerComponent"],
            _manager_add_manager_component__WEBPACK_IMPORTED_MODULE_25__["AddManagerComponent"],
            _manager_update_manager_component__WEBPACK_IMPORTED_MODULE_26__["UpdateManagerComponent"],
            _borrow_book_borrow_book_component__WEBPACK_IMPORTED_MODULE_29__["BorrowBookComponent"],
            _borrow_book_add_borrow_book_component__WEBPACK_IMPORTED_MODULE_30__["AddBorrowBookComponent"],
            _borrow_book_update_borrow_book_component__WEBPACK_IMPORTED_MODULE_31__["UpdateBorrowBookComponent"],
            _returnBook_returnBook_component__WEBPACK_IMPORTED_MODULE_32__["ReturnBookComponent"],
            _returnBook_addReturnBook_component__WEBPACK_IMPORTED_MODULE_33__["AddReturnBookComponent"],
            _returnBook_updateReturnBook_component__WEBPACK_IMPORTED_MODULE_34__["UpdateReturnBookComponent"],
            _fine_fine_component__WEBPACK_IMPORTED_MODULE_27__["FineComponent"],
            _fine_update_fine_component__WEBPACK_IMPORTED_MODULE_28__["UpdateFineComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            // 如果要引入双向绑定，则需要引入FormModule
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        // 定义服务
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"], }],
        // 默认启动哪个组件
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/book/add-Book.component.ts":
/*!********************************************!*\
  !*** ./src/app/book/add-Book.component.ts ***!
  \********************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let AddBookComponent = class AddBookComponent {
    constructor(route, bookService, location) {
        this.route = route;
        this.bookService = bookService;
        this.location = location;
    }
    ngOnInit() {
        this.getBookTypes();
    }
    getBookTypes() {
        this.bookService.getBookTypes()
            .subscribe(res => this.bookTypes = res);
    }
    save(no, isbn, bookName, author, publish, publishDate, unitPrice, bookType, bookStatus) {
        // @ts-ignore
        this.book = { no: no.trim(), isbn: isbn.trim(), bookName: bookName.trim(), author: author.trim(), publish: publish.trim(), publishDate: publishDate.trim(), unitPrice: unitPrice.valueOf(), bookType: this.bookType, bookStatus: bookStatus.valueOf() };
        if (!no) {
            return;
        }
        this.bookService.addBook(this.book)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
    Number(value) {
        return parseInt(value, 10);
    }
    Date(value) {
        return;
    }
};
AddBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddBookComponent.prototype, "bookTypes", void 0);
AddBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book/add-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-book.component.css */ "./src/app/book/add-book.component.css")).default]
    })
], AddBookComponent);



/***/ }),

/***/ "./src/app/book/add-book.component.css":
/*!*********************************************!*\
  !*** ./src/app/book/add-book.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9hZGQtYm9vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQjtBQUNwRyIsImZpbGUiOiJzcmMvYXBwL2Jvb2svYWRkLWJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LHRleHRhcmVhe1xyXG4gIHdpZHRoOjEwMHB4OyBsaW5lLWhlaWdodDogMjVweDsgYm9yZGVyLXJhZGl1czogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWZmOyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2svYm9vay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let BookComponent = class BookComponent {
    constructor(bookService, router, route) {
        this.bookService = bookService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.getBooks();
    }
    // DoCheck 触发变更检测机制就是调用DoCheck钩子，目的是保证组件属性和浏览器的显示同步
    ngDoCheck() {
        if (this.currentPag !== this.oldCurrentPag || this.pagNums !== this.oldPagNums) {
            this.dataShow = [];
            let startNum = (this.currentPag - 1) * this.pagNums;
            for (let i = 0; i < this.pagNums; i++, startNum++) {
                if (this.books[startNum] !== null && this.books[startNum] !== undefined) {
                    this.dataShow.push(this.books[startNum]);
                }
            }
            this.oldCurrentPag = this.currentPag;
            this.oldPagNums = this.pagNums;
        }
    }
    // 捕获当前显示页码函数
    currentPagHandel(pag) {
        this.currentPag = pag;
        console.log('curpag:' + pag);
    }
    // 捕获每页显示数量行数
    pagNumsHandel(pagNum) {
        this.pagNums = pagNum;
    }
    // 获取所有Book数据
    getBooks() {
        this.bookService.getBooks()
            .subscribe(res => {
            this.books = res;
            this.leng = res.length;
        });
    }
    getBookByName(name) {
        this.bookService.getBookByName(name)
            .subscribe(res => {
            this.books = res;
            this.dataShow = [];
            this.dataShow.push(this.books[0]);
        });
    }
    // ifName(name: string): void {
    //   if (name) {
    //     alert(this.books)
    //     this.books.splice(0, this.books.length);
    //     alert(this.books)
    //     this.getBookByName(name);
    //     alert(this.books);
    //   } else {
    //     this.getBooks();
    //   }
    // }
    delete(book) {
        this.bookService.deleteBook(book)
            .subscribe(res => {
            alert(res.message); // 弹出后台给的消息
            // 以下代码用于成果删除一行数据后页面内容刷新，并将页面保持在原页数位置不变。
            // if ( res.message === '删除成功') { //如果成功删除后后台返回的数据是‘删除成功’，可以去点这里的注释
            this.books = this.books.filter(h => h !== book); // 过滤掉已经被删除数据
            this.dataShow = [];
            let startNum = (this.currentPag - 1) * this.pagNums;
            for (let i = 0; i < this.pagNums; i++, startNum++) {
                if (this.books[startNum] !== null && this.books[startNum] !== undefined) {
                    this.dataShow.push(this.books[startNum]);
                }
            }
        });
    }
};
BookComponent.ctorParameters = () => [
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")).default]
    })
], BookComponent);



/***/ }),

/***/ "./src/app/book/update-Book.component.ts":
/*!***********************************************!*\
  !*** ./src/app/book/update-Book.component.ts ***!
  \***********************************************/
/*! exports provided: UpdateBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBookComponent", function() { return UpdateBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let UpdateBookComponent = class UpdateBookComponent {
    constructor(route, bookService, location) {
        this.route = route;
        this.bookService = bookService;
        this.location = location;
    }
    ngOnInit() {
        this.getBookTypes(); // 下拉菜单赋值
        const id = this.route.snapshot.params.id; // 要修改专业的id
        this.bookService.getBook(id)
            .subscribe(res => {
            this.book = res;
        });
    }
    /*比较器*/
    compareFn(o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
    getBookTypes() {
        this.bookService.getBookTypes()
            .subscribe(res => this.bookTypes = res);
    }
    save() {
        /*用于日志信息的一般输出。可以使用此方法使用字符串替换和附加参数。*/
        console.log(this.book);
        this.bookService.updateBook(this.book)
            .subscribe((res) => {
            alert(res.message);
            this.goBack();
        });
    }
    goBack() {
        this.location.back();
    }
};
UpdateBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateBookComponent.prototype, "bookTypes", void 0);
UpdateBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book/update-book.component.html")).default,
    })
], UpdateBookComponent);



/***/ }),

/***/ "./src/app/booktype/add-booktype.component.css":
/*!*****************************************************!*\
  !*** ./src/app/booktype/add-booktype.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2t0eXBlL2FkZC1ib29rdHlwZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/booktype/add-booktype.component.ts":
/*!****************************************************!*\
  !*** ./src/app/booktype/add-booktype.component.ts ***!
  \****************************************************/
/*! exports provided: AddBooktypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBooktypeComponent", function() { return AddBooktypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let AddBooktypeComponent = class AddBooktypeComponent {
    constructor(route, bookTypeService, location) {
        this.route = route;
        this.bookTypeService = bookTypeService;
        this.location = location;
    }
    ngOnInit() {
    }
    save(no, typeName) {
        this.bookType = { no: no.trim(), typeName: typeName.trim() };
        if (!typeName) {
            return;
        }
        this.bookTypeService.addBookType(this.bookType)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
};
AddBooktypeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddBooktypeComponent.prototype, "bookType", void 0);
AddBooktypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-booktype',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-booktype.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booktype/add-booktype.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-booktype.component.css */ "./src/app/booktype/add-booktype.component.css")).default]
    })
], AddBooktypeComponent);



/***/ }),

/***/ "./src/app/booktype/booktype.component.css":
/*!*************************************************!*\
  !*** ./src/app/booktype/booktype.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2t0eXBlL2Jvb2t0eXBlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/booktype/booktype.component.ts":
/*!************************************************!*\
  !*** ./src/app/booktype/booktype.component.ts ***!
  \************************************************/
/*! exports provided: BooktypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooktypeComponent", function() { return BooktypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");



let BooktypeComponent = class BooktypeComponent {
    constructor(booktypeService) {
        this.booktypeService = booktypeService;
    }
    ngOnInit() {
        this.getBookTypes();
    }
    // DoCheck 触发变更检测机制就是调用DoCheck钩子，目的是保证组件属性和浏览器的显示同步
    ngDoCheck() {
        if (this.currentPag !== this.oldCurrentPag || this.pagNums !== this.oldPagNums) {
            this.dataShow = [];
            const curren = this.currentPag - 1;
            const pagNum = this.pagNums;
            let startNum = curren * pagNum;
            for (let i = 0; i < pagNum; i++, startNum++) {
                if (this.bookTypes[startNum] !== null && this.bookTypes[startNum] !== undefined) {
                    this.dataShow.push(this.bookTypes[startNum]);
                }
            }
            this.oldCurrentPag = this.currentPag;
            this.oldPagNums = this.pagNums;
        }
    }
    // 捕获当前显示页码函数
    currentPagHandel(pag) {
        this.currentPag = pag;
    }
    // 捕获每页显示数量行数
    pagNumsHandel(pagNum) {
        this.pagNums = pagNum;
    }
    getBookTypes() {
        this.booktypeService.getBookTypes()
            .subscribe(res => { this.bookTypes = res; this.leng = res.length; });
    }
    delete(bookType) {
        this.bookTypes = this.bookTypes.filter(h => h !== bookType);
        this.booktypeService.deleteBookType(bookType).subscribe(res => alert(res.message));
    }
};
BooktypeComponent.ctorParameters = () => [
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }
];
BooktypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booktype',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booktype.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booktype/booktype.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./booktype.component.css */ "./src/app/booktype/booktype.component.css")).default]
    })
], BooktypeComponent);



/***/ }),

/***/ "./src/app/booktype/update-booktype.component.css":
/*!********************************************************!*\
  !*** ./src/app/booktype/update-booktype.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2t0eXBlL3VwZGF0ZS1ib29rdHlwZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/booktype/update-booktype.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/booktype/update-booktype.component.ts ***!
  \*******************************************************/
/*! exports provided: UpdateBooktypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBooktypeComponent", function() { return UpdateBooktypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let UpdateBooktypeComponent = class UpdateBooktypeComponent {
    constructor(route, bookTypeService, location) {
        this.route = route;
        this.bookTypeService = bookTypeService;
        this.location = location;
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.bookTypeService.getBookType(id)
            .subscribe(res => this.bookType = res);
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.bookTypeService.updateBookType(this.bookType)
            .subscribe((res) => { alert(res.message); this.goBack(); });
    }
};
UpdateBooktypeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateBooktypeComponent.prototype, "bookType", void 0);
UpdateBooktypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-booktype',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-booktype.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booktype/update-booktype.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-booktype.component.css */ "./src/app/booktype/update-booktype.component.css")).default]
    })
], UpdateBooktypeComponent);



/***/ }),

/***/ "./src/app/borrow-book/add-borrow-book.component.css":
/*!***********************************************************!*\
  !*** ./src/app/borrow-book/add-borrow-book.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9ycm93LWJvb2svYWRkLWJvcnJvdy1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CO0FBQ3BHIiwiZmlsZSI6InNyYy9hcHAvYm9ycm93LWJvb2svYWRkLWJvcnJvdy1ib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCx0ZXh0YXJlYXtcclxuICB3aWR0aDoxMDBweDsgbGluZS1oZWlnaHQ6IDI1cHg7IGJvcmRlci1yYWRpdXM6IDNweDsgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVmZjsgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/borrow-book/add-borrow-book.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/borrow-book/add-borrow-book.component.ts ***!
  \**********************************************************/
/*! exports provided: AddBorrowBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBorrowBookComponent", function() { return AddBorrowBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let AddBorrowBookComponent = class AddBorrowBookComponent {
    constructor(route, borrowBookService, location) {
        this.route = route;
        this.borrowBookService = borrowBookService;
        this.location = location;
    }
    ngOnInit() {
        this.getReaders();
        this.getManagers();
        this.getBooks();
    }
    getReaders() {
        this.borrowBookService.getReaders()
            .subscribe(res => this.readers = res);
    }
    getBooks() {
        this.borrowBookService.getBooks()
            .subscribe(res => this.books = res);
    }
    getManagers() {
        this.borrowBookService.getManagers()
            .subscribe(res => this.managers = res);
    }
    save(no, reader, book, manager) {
        // @ts-ignore
        this.borrowBook = { no: no.trim(), reader: this.reader, book: this.book, manager: this.manager };
        if (!no) {
            alert('no不能为空');
            return;
        }
        else if (!reader) {
            alert('reader不能为空');
            return;
        }
        else if (!book) {
            alert('book不能为空');
            return;
        }
        else if (!manager) {
            alert('manager不能为空');
            return;
        }
        this.borrowBookService.addBorrowBook(this.borrowBook)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
    Number(value) {
        return parseInt(value, 10);
    }
    Date(value) {
        return;
    }
};
AddBorrowBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddBorrowBookComponent.prototype, "readers", void 0);
AddBorrowBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-borrow-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-borrow-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/borrow-book/add-borrow-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-borrow-book.component.css */ "./src/app/borrow-book/add-borrow-book.component.css")).default]
    })
], AddBorrowBookComponent);



/***/ }),

/***/ "./src/app/borrow-book/borrow-book.component.css":
/*!*******************************************************!*\
  !*** ./src/app/borrow-book/borrow-book.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvcnJvdy1ib29rL2JvcnJvdy1ib29rLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/borrow-book/borrow-book.component.ts":
/*!******************************************************!*\
  !*** ./src/app/borrow-book/borrow-book.component.ts ***!
  \******************************************************/
/*! exports provided: BorrowBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowBookComponent", function() { return BorrowBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let BorrowBookComponent = class BorrowBookComponent {
    constructor(borrowBookService, router, route) {
        this.borrowBookService = borrowBookService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.getBorrowBooks();
    }
    // DoCheck 触发变更检测机制就是调用DoCheck钩子，目的是保证组件属性和浏览器的显示同步
    ngDoCheck() {
        if (this.currentPag !== this.oldCurrentPag || this.pagNums !== this.oldPagNums) {
            this.dataShow = [];
            let startNum = (this.currentPag - 1) * this.pagNums;
            for (let i = 0; i < this.pagNums; i++, startNum++) {
                if (this.borrowBooks[startNum] !== null && this.borrowBooks[startNum] !== undefined) {
                    this.dataShow.push(this.borrowBooks[startNum]);
                }
            }
            this.oldCurrentPag = this.currentPag;
            this.oldPagNums = this.pagNums;
        }
    }
    select(name) {
        if (name === null) {
            this.borrowBookService.getBorrowBooks().subscribe(res => this.dataShow = res);
            return;
        }
        this.borrowBookService.selectBorrowBook(name).subscribe(res => this.dataShow = res);
    }
    // 捕获当前显示页码函数
    currentPagHandel(pag) {
        this.currentPag = pag;
        console.log('curpag:' + pag);
    }
    // 捕获每页显示数量行数
    pagNumsHandel(pagNum) {
        this.pagNums = pagNum;
    }
    // 获取所有BorrowBook数据
    getBorrowBooks() {
        this.borrowBookService.getBorrowBooks()
            .subscribe(res => { this.borrowBooks = res; this.leng = res.length; });
    }
    delete(borrowBook) {
        this.borrowBookService.deleteBorrowBook(borrowBook)
            .subscribe(res => {
            alert(res.message); // 弹出后台给的消息
            // 以下代码用于成果删除一行数据后页面内容刷新，并将页面保持在原页数位置不变。
            // if ( res.message === '删除成功') { //如果成功删除后后台返回的数据是‘删除成功’，可以去点这里的注释
            this.borrowBooks = this.borrowBooks.filter(h => h !== borrowBook); // 过滤掉已经被删除数据
            this.dataShow = [];
            let startNum = (this.currentPag - 1) * this.pagNums;
            for (let i = 0; i < this.pagNums; i++, startNum++) {
                if (this.borrowBooks[startNum] !== null && this.borrowBooks[startNum] !== undefined) {
                    this.dataShow.push(this.borrowBooks[startNum]);
                }
            }
        });
    }
};
BorrowBookComponent.ctorParameters = () => [
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
BorrowBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./borrow-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/borrow-book/borrow-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./borrow-book.component.css */ "./src/app/borrow-book/borrow-book.component.css")).default]
    })
], BorrowBookComponent);



/***/ }),

/***/ "./src/app/borrow-book/update-borrow-book.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/borrow-book/update-borrow-book.component.ts ***!
  \*************************************************************/
/*! exports provided: UpdateBorrowBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBorrowBookComponent", function() { return UpdateBorrowBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let UpdateBorrowBookComponent = class UpdateBorrowBookComponent {
    constructor(route, borrowBookService, location) {
        this.route = route;
        this.borrowBookService = borrowBookService;
        this.location = location;
    }
    ngOnInit() {
        this.getReaders(); // 下拉菜单赋值
        this.getBooks();
        this.getManagers();
        const id = this.route.snapshot.params.id; // 要修改专业的id
        this.borrowBookService.getBorrowBook(id)
            .subscribe(res => {
            this.borrowBook = res;
        });
    }
    /*比较器*/
    compareFn(o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
    getReaders() {
        this.borrowBookService.getReaders()
            .subscribe(res => this.readers = res);
    }
    getBooks() {
        this.borrowBookService.getBooks()
            .subscribe(res => this.books = res);
    }
    getManagers() {
        this.borrowBookService.getManagers()
            .subscribe(res => this.managers = res);
    }
    save() {
        /*用于日志信息的一般输出。可以使用此方法使用字符串替换和附加参数。*/
        console.log(this.borrowBook);
        if (!this.borrowBook.no) {
            alert('no不能为空');
            return;
        }
        else if (!this.borrowBook.borrowDate) {
            alert('borrowDate不能为空');
            return;
        }
        else if (!this.borrowBook.reader) {
            alert('reader不能为空');
            return;
        }
        else if (!this.borrowBook.book) {
            alert('book不能为空');
            return;
        }
        else if (!this.borrowBook.manager) {
            alert('manager不能为空');
            return;
        }
        this.borrowBookService.updateBorrowBook(this.borrowBook)
            .subscribe((res) => {
            alert(res.message);
            this.goBack();
        });
    }
    goBack() {
        this.location.back();
    }
};
UpdateBorrowBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateBorrowBookComponent.prototype, "readers", void 0);
UpdateBorrowBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'app-update-borrow-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-borrow-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/borrow-book/update-borrow-book.component.html")).default,
    })
], UpdateBorrowBookComponent);



/***/ }),

/***/ "./src/app/entity.service.ts":
/*!***********************************!*\
  !*** ./src/app/entity.service.ts ***!
  \***********************************/
/*! exports provided: EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let EntityService = class EntityService {
    constructor(http) {
        this.http = http;
        this.readerTypeUrl = '../readerType.ctl';
        this.bookTypeUrl = '../bookType.ctl';
        this.readerUrl = '../reader.ctl'; /*sevlet的相对路径*/
        this.bookUrl = '../book.ctl';
        // private userUrl = '../login';
        this.managerUrl = '../manager.ctl';
        this.borrowBookUrl = '../borrowBook.ctl';
        this.returnBookUrl = '../returnBook.ctl';
        this.fineUrl = '../fine.ctl';
        this.loginUrl = '../login.ctl';
        this.menuUrl = '../menu.ctl';
        this.roleUrl = '../role.ctl';
        this.userUrl = '../user.ctl';
    }
    getUser() {
        return this.user;
    }
    setUser(user) {
        this.user = user;
    }
    // 验证登录用户账号密码是否正确
    checkUser(user) {
        return this.http.post(this.userUrl, user);
    }
    /** GET degrees from the server */
    getReaderTypes() {
        return this.http.get(this.readerTypeUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getReaderTypes', [])));
    }
    /** GET degree by id. Will 404 if id not found */
    getReaderType(id) {
        const url = this.readerTypeUrl + '?id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getReaderType id=${id}`)));
    }
    /** POST: add a new degree to the server */
    addReaderType(readerType) {
        return this.http.post(this.readerTypeUrl, readerType, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addReaderType')));
    }
    /** DELETE: delete the degree from the server */
    deleteReaderType(readerType) {
        const id = typeof readerType === 'number' ? readerType : readerType.id;
        return this.http.delete(this.readerTypeUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteReaderType')));
    }
    // update方法
    /** PUT: update the degree on the server */
    updateReaderType(readerType) {
        return this.http.put(this.readerTypeUrl, readerType, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateReaderType')));
    }
    /** GET degrees from the server */
    getBookTypes() {
        return this.http.get(this.bookTypeUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getBookTypes', [])));
    }
    /** GET degree by id. Will 404 if id not found */
    getBookType(id) {
        const url = this.bookTypeUrl + '?id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getBookType id=${id}`)));
    }
    /** POST: add a new degree to the server */
    addBookType(bookType) {
        return this.http.post(this.bookTypeUrl, bookType, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addBookType')));
    }
    /** DELETE: delete the degree from the server */
    deleteBookType(bookType) {
        const id = typeof bookType === 'number' ? bookType : bookType.id;
        return this.http.delete(this.bookTypeUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteBookType')));
    }
    // update方法
    /** PUT: update the degree on the server */
    updateBookType(bookType) {
        return this.http.put(this.bookTypeUrl, bookType, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateBookType')));
    }
    /** GET readers from the server */
    getReaders() {
        return this.http.get(this.readerUrl + ' ')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getReaders', [])));
    }
    /** GET reader by id. Will 404 if id not found */
    getReader(id) {
        const url = this.readerUrl + '?id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getReader id=${id}`)));
    }
    selectReader(name) {
        return this.http.get(this.readerUrl + '?name=' + name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getReaders', [])));
    }
    selectFine(name) {
        return this.http.get(this.fineUrl + '?readerName=' + name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getFines', [])));
    }
    selectBorrowBook(name) {
        return this.http.get(this.borrowBookUrl + '?readerName=' + name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getBorrowBooks', [])));
    }
    selectReturnBook(name) {
        return this.http.get(this.returnBookUrl + '?readerName=' + name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getReturnBooks', [])));
    }
    /** POST: add a new reader to the server */
    addReader(reader) {
        return this.http.post(this.readerUrl + ' ', reader, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addReader')));
    }
    /** DELETE: delete the reader from the server */
    deleteReader(reader) {
        const id = typeof reader === 'number' ? reader : reader.id;
        return this.http.delete(this.readerUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteReader')));
    }
    /** PUT: update the hero on the server */
    updateReader(reader) {
        return this.http.put(this.readerUrl + ' ', reader, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateReader')));
    }
    /** GET books from the server */
    getBooks() {
        return this.http.get(this.bookUrl + ' ')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getBooks', [])));
    }
    /** GET book by id. Will 404 if id not found */
    getBook(id) {
        const url = this.bookUrl + '?id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getBook id=${id}`)));
    }
    /** POST: add a new college to the server */
    addBook(book) {
        return this.http.post(this.bookUrl + ' ', book, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addBook')));
    }
    getBookByName(name) {
        const url = this.bookUrl + '?bookName=' + name;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getBookByName name=${name}`)));
    }
    /** DELETE: delete the college from the server */
    deleteBook(book) {
        const id = typeof book === 'number' ? book : book.id;
        return this.http.delete(this.bookUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteBook')));
    }
    /** PUT: update the hero on the server */
    updateBook(book) {
        return this.http.put(this.bookUrl + ' ', book, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateBook')));
    }
    /** GET heroes from the server */
    getManagers() {
        return this.http.get(this.managerUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getManagers', [])));
    }
    deleteManager(manager) {
        const id = typeof manager === 'number' ? manager : manager.id;
        return this.http.delete(this.managerUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteManager')));
    }
    /** POST: add a new manager to the server */
    addManager(manager) {
        return this.http.post(this.managerUrl, manager, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addManager')));
    }
    /** GET manager by id. Will 404 if id not found */
    getManager(id) {
        const url = this.managerUrl + '?id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getManager id=${id}`)));
    }
    getManagerByname(name) {
        const url = this.managerUrl + '?name=' + name;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getManagerByname name=${name}`)));
    }
    updateManager(manager) {
        return this.http.put(this.managerUrl, manager, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateManager')));
    }
    /** GET teachers from the server */
    getBorrowBooks() {
        return this.http.get(this.borrowBookUrl + ' ')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getBorrowBooks', [])));
    }
    getReturnBooks() {
        return this.http.get(this.returnBookUrl + ' ')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getReturnBooks', [])));
    }
    getBorBook(id) {
        const url = this.borrowBookUrl + '?paraType=Book&id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getBorBook book id = ${id}`)));
    }
    getReturnBook(id) {
        const url = this.returnBookUrl + '?id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getReturnBook id=${id}`)));
    }
    /** GET teacher by id. Will 404 if id not found */
    getBorrowBook(id) {
        const url = this.borrowBookUrl + '?id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getBorrowBook id=${id}`)));
    }
    /** POST: add a new teacher to the server */
    addBorrowBook(borrowBook) {
        return this.http.post(this.borrowBookUrl + ' ', borrowBook, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addBorrowBook')));
    }
    /** POST: add a new teacher to the server */
    // tslint:disable-next-line:max-line-length
    addReturnBook(returnBook) {
        return this.http.post(this.returnBookUrl + ' ', returnBook, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addReturnBook')));
    }
    /** DELETE: delete the teacher from the server */
    deleteBorrowBook(borrowBook) {
        const id = typeof borrowBook === 'number' ? borrowBook : borrowBook.id;
        return this.http.delete(this.borrowBookUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteBorrowBook')));
    }
    /** DELETE: delete the teacher from the server */
    deleteReturnBook(returnBook) {
        const id = typeof returnBook === 'number' ? returnBook : returnBook.id;
        return this.http.delete(this.returnBookUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteReturnBook')));
    }
    /** PUT: update the hero on the server */
    updateBorrowBook(borrowBook) {
        return this.http.put(this.borrowBookUrl + ' ', borrowBook, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateBorrowBook')));
    }
    /** PUT: update the hero on the server */
    updateReturnBook(returnBook) {
        return this.http.put(this.returnBookUrl + ' ', returnBook, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateReturnBook')));
    }
    /** GET fines from the server */
    getFines() {
        return this.http.get(this.fineUrl + ' ')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getFines', [])));
    }
    /** GET fine by id. Will 404 if id not found */
    getFine(id) {
        const url = this.fineUrl + '?id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getFine id=${id}`)));
    }
    /** DELETE: delete the fine from the server */
    deleteFine(fine) {
        const id = typeof fine === 'number' ? fine : fine.id;
        return this.http.delete(this.fineUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteFine')));
    }
    /** PUT: update the hero on the server */
    updateFine(fine) {
        return this.http.put(this.fineUrl + ' ', fine, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateFine')));
    }
    /**
     * Handle Http operation that failed.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    getMenusByUserId(id) {
        return this.http.get(this.menuUrl + '?user_id=' + id).pipe();
    }
    getMenusByRoleId(id) {
        return this.http.get(this.menuUrl + '?role_id=' + id).pipe();
    }
    getRolesByUserId(id) {
        return this.http.get(this.roleUrl + '?user_id=' + id).pipe();
    }
    getAllRoles() {
        return this.http.get(this.roleUrl);
    }
    getUsers() {
        return this.http.get(this.userUrl).pipe();
    }
    login(user) {
        return this.http.post(this.loginUrl, user);
    }
    setRole(userRole) {
        return this.http.post(this.roleUrl, userRole).pipe();
    }
};
EntityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EntityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EntityService);



/***/ }),

/***/ "./src/app/fine/fine.component.css":
/*!*****************************************!*\
  !*** ./src/app/fine/fine.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmUvZmluZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/fine/fine.component.ts":
/*!****************************************!*\
  !*** ./src/app/fine/fine.component.ts ***!
  \****************************************/
/*! exports provided: FineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FineComponent", function() { return FineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FineComponent = class FineComponent {
    constructor(fineService, router, route) {
        this.fineService = fineService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.getFines();
    }
    // DoCheck 触发变更检测机制就是调用DoCheck钩子，目的是保证组件属性和浏览器的显示同步
    ngDoCheck() {
        if (this.currentPag !== this.oldCurrentPag || this.pagNums !== this.oldPagNums) {
            this.dataShow = [];
            let startNum = (this.currentPag - 1) * this.pagNums;
            for (let i = 0; i < this.pagNums; i++, startNum++) {
                if (this.fines[startNum] !== null && this.fines[startNum] !== undefined) {
                    this.dataShow.push(this.fines[startNum]);
                }
            }
            this.oldCurrentPag = this.currentPag;
            this.oldPagNums = this.pagNums;
        }
    }
    select(name) {
        if (name === null) {
            this.fineService.getFines().subscribe(res => this.dataShow = res);
            return;
        }
        this.fineService.selectFine(name).subscribe(res => this.dataShow = res);
    }
    // 捕获当前显示页码函数
    currentPagHandel(pag) {
        this.currentPag = pag;
        console.log('curpag:' + pag);
    }
    // 捕获每页显示数量行数
    pagNumsHandel(pagNum) {
        this.pagNums = pagNum;
    }
    // 获取所有Fine数据
    getFines() {
        this.fineService.getFines()
            .subscribe(res => { this.fines = res; this.leng = res.length; });
    }
    delete(fine) {
        this.fineService.deleteFine(fine)
            .subscribe(res => {
            alert(res.message); // 弹出后台给的消息
            // 以下代码用于成果删除一行数据后页面内容刷新，并将页面保持在原页数位置不变。
            // if ( res.message === '删除成功') { //如果成功删除后后台返回的数据是‘删除成功’，可以去点这里的注释
            this.fines = this.fines.filter(h => h !== fine); // 过滤掉已经被删除数据
            this.dataShow = [];
            let startNum = (this.currentPag - 1) * this.pagNums;
            for (let i = 0; i < this.pagNums; i++, startNum++) {
                if (this.fines[startNum] !== null && this.fines[startNum] !== undefined) {
                    this.dataShow.push(this.fines[startNum]);
                }
            }
        });
    }
};
FineComponent.ctorParameters = () => [
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
FineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fine.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fine/fine.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fine.component.css */ "./src/app/fine/fine.component.css")).default]
    })
], FineComponent);



/***/ }),

/***/ "./src/app/fine/update-fine.component.ts":
/*!***********************************************!*\
  !*** ./src/app/fine/update-fine.component.ts ***!
  \***********************************************/
/*! exports provided: UpdateFineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFineComponent", function() { return UpdateFineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let UpdateFineComponent = class UpdateFineComponent {
    constructor(route, fineService, location) {
        this.route = route;
        this.fineService = fineService;
        this.location = location;
    }
    ngOnInit() {
        this.getReaders(); // 下拉菜单赋值
        this.getBooks();
        const id = this.route.snapshot.params.id; // 要修改专业的id
        this.fineService.getFine(id)
            .subscribe(res => {
            this.fine = res;
        });
    }
    /*比较器*/
    compareFn(o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
    getReaders() {
        this.fineService.getReaders()
            .subscribe(res => this.readers = res);
    }
    getBooks() {
        this.fineService.getBooks()
            .subscribe(res => this.books = res);
    }
    save() {
        /*用于日志信息的一般输出。可以使用此方法使用字符串替换和附加参数。*/
        console.log(this.fine);
        if (!this.fine.no) {
            alert('no不能为空');
            return;
        }
        else if (!this.fine.fineAmount) {
            alert('fineAmount不能为空');
            return;
        }
        else if (!this.fine.description) {
            alert('description不能为空');
            return;
        }
        else if (!this.fine.reader) {
            alert('reader不能为空');
            return;
        }
        else if (!this.fine.book) {
            alert('book不能为空');
            return;
        }
        this.fineService.updateFine(this.fine)
            .subscribe((res) => {
            alert(res.message);
            this.goBack();
        });
    }
    goBack() {
        this.location.back();
    }
};
UpdateFineComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateFineComponent.prototype, "readers", void 0);
UpdateFineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-fine',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-fine.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fine/update-fine.component.html")).default,
    })
], UpdateFineComponent);



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* AppComponent's private CSS styles */\r\nh1 {\r\n  margin-top: 50px;\r\n  font-size: 5em;\r\n  margin-bottom: 0;\r\n  color: red;\r\n}\r\n.header{\r\n  position: fixed;\r\n  top:0; left:0;\r\n  /*border-bottom:solid 3px #eeeeff;*/\r\n  text-align:center;\r\n  /*background: linear-gradient(to bottom,  #e7f0fd 0%, #accbee 15%, #e7f0fd 85%,#fff 100%);*/\r\n  height:200px;\r\n  width: 100%;\r\n  padding-top:5px;\r\n  /*min-width: 1000px;*/\r\n  z-index:-10;\r\n  zoom: 1;\r\n  background-color: #fff;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  -webkit-background-size: cover;\r\n  -o-background-size: cover;\r\n  background-position: center 0;\r\n}\r\n.bot{\r\n  buttom:0;\r\n  text-align: center;\r\n  height: 50px;\r\n  width: 100%;\r\n  background-color: #039be5;\r\n  position:fixed;\r\n  left:0px;\r\n  bottom:0px;\r\n  line-height: 50px;/*底部文字垂直居中*/\r\n}\r\n.welcome{\r\n  position:absolute; right: 10px;bottom: 8px;font-size: 25px;color: white;\r\n}\r\n.lib{\r\n  position: absolute;left: 30px; bottom: 10px; font-size: 40px; color: white;\r\n}\r\n/*nav{*/\r\n/*  position: fixed;*/\r\n/*  top: 200px;left:0;*/\r\n/*  width:200px; height:100%;*/\r\n/*  border-right:solid 3px #eeeeff;*/\r\n/*  }*/\r\nsection{\r\n  position: absolute;\r\n  top: 68px;\r\n  left: 200px;\r\n  width: 80%;\r\n  padding-left:20px;\r\n  padding-top:10px;\r\n}\r\n.navigation{\r\n  position: fixed;\r\n  top: 200px;left:0;\r\n  width:200px; height:100%;\r\n  border-right:solid 3px #eeeeff;\r\n  margin: 0px;\r\n}\r\n.navigation ul{\r\n  padding: 0px;\r\n}\r\n.navigation a{\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin: 10px;\r\n  display: block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\n.navigation ul li{\r\n  list-style: none;\r\n}\r\n.navigation ul li a:hover{\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\n.navigation ul:hover{\r\n  display: block;\r\n}\r\n.navigation ul li ul{\r\n  display: none;\r\n  margin: 0;\r\n}\r\n.navigation ul li:hover ul {\r\n  display: block;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBc0M7QUFDdEM7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7RUFDZixLQUFLLEVBQUUsTUFBTTtFQUNiLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsMkZBQTJGO0VBQzNGLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsT0FBTztFQUNQLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsVUFBVTtFQUNWLGlCQUFpQixDQUFDLFdBQVc7QUFDL0I7QUFDQTtFQUNFLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFlBQVk7QUFDekU7QUFDQTtFQUNFLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVk7QUFDNUU7QUFDQSxPQUFPO0FBQ1AscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2Qiw4QkFBOEI7QUFDOUIsb0NBQW9DO0FBQ3BDLE1BQU07QUFDTjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVSxDQUFDLE1BQU07RUFDakIsV0FBVyxFQUFFLFdBQVc7RUFDeEIsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBmb250LXNpemU6IDVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmhlYWRlcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOjA7IGxlZnQ6MDtcclxuICAvKmJvcmRlci1ib3R0b206c29saWQgM3B4ICNlZWVlZmY7Ki9cclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjZTdmMGZkIDAlLCAjYWNjYmVlIDE1JSwgI2U3ZjBmZCA4NSUsI2ZmZiAxMDAlKTsqL1xyXG4gIGhlaWdodDoyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgLyptaW4td2lkdGg6IDEwMDBweDsqL1xyXG4gIHotaW5kZXg6LTEwO1xyXG4gIHpvb206IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDA7XHJcbn1cclxuLmJvdHtcclxuICBidXR0b206MDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzliZTU7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgbGVmdDowcHg7XHJcbiAgYm90dG9tOjBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDsvKuW6lemDqOaWh+Wtl+WeguebtOWxheS4rSovXHJcbn1cclxuLndlbGNvbWV7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiAxMHB4O2JvdHRvbTogOHB4O2ZvbnQtc2l6ZTogMjVweDtjb2xvcjogd2hpdGU7XHJcbn1cclxuLmxpYntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMzBweDsgYm90dG9tOiAxMHB4OyBmb250LXNpemU6IDQwcHg7IGNvbG9yOiB3aGl0ZTtcclxufVxyXG4vKm5hdnsqL1xyXG4vKiAgcG9zaXRpb246IGZpeGVkOyovXHJcbi8qICB0b3A6IDIwMHB4O2xlZnQ6MDsqL1xyXG4vKiAgd2lkdGg6MjAwcHg7IGhlaWdodDoxMDAlOyovXHJcbi8qICBib3JkZXItcmlnaHQ6c29saWQgM3B4ICNlZWVlZmY7Ki9cclxuLyogIH0qL1xyXG5zZWN0aW9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY4cHg7XHJcbiAgbGVmdDogMjAwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcbi5uYXZpZ2F0aW9ue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDIwMHB4O2xlZnQ6MDtcclxuICB3aWR0aDoyMDBweDsgaGVpZ2h0OjEwMCU7XHJcbiAgYm9yZGVyLXJpZ2h0OnNvbGlkIDNweCAjZWVlZWZmO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5uYXZpZ2F0aW9uIHVse1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4ubmF2aWdhdGlvbiBhe1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLm5hdmlnYXRpb24gdWwgbGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubmF2aWdhdGlvbiB1bCBsaSBhOmhvdmVye1xyXG4gIGNvbG9yOiAjMDM5YmU1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbn1cclxuLm5hdmlnYXRpb24gdWw6aG92ZXJ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm5hdmlnYXRpb24gdWwgbGkgdWx7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLm5hdmlnYXRpb24gdWwgbGk6aG92ZXIgdWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");



let IndexComponent = class IndexComponent {
    // user = window.localStorage.getItem('userName');
    constructor(indexService) {
        this.indexService = indexService;
    }
    ngOnInit() {
        // 通过登录响应的user初始化user对象
        this.user = this.indexService.getUser();
        // 通过用户的id获得对应的所有菜单
        this.indexService.getMenusByUserId(this.user.id).subscribe(res => this.menus = res);
        this.indexService.getRolesByUserId(this.user.id).subscribe(res => this.roles = res);
    }
};
IndexComponent.ctorParameters = () => [
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")).default]
    })
], IndexComponent);

// {
//   menusRole: {
//     menus: [
//       {
//         url: 'abc',
//         description: '部门管理'
//       },
//       {
//         url: 'superAdmin',
//         description: '职务管理'
//       }
//     ],
//       role: {
//       id: 1,
//         description: '管理员'
//     }
//   }
// },
// {
//   menusRole: {
//     menus: [
//       {
//         url: 'efg',
//         description: '个人信息管理'
//       }
//     ],
//       role: {
//       id: 1,
//         description: '员工'
//     }
//   }
// }
// ];
//


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back{\r\n  position:fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width:100%;\r\n  height:100%;\r\n  min-width: 1000px;\r\n  z-index:-10;\r\n  zoom: 1;\r\n  background-color: #fff;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  -webkit-background-size: cover;\r\n  -o-background-size: cover;\r\n  background-position: center 0;\r\n}\r\n.demo1{\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(255,255,255,0.4);\r\n}\r\n*{\r\n\r\n  font-size: 16px;\r\n  border: 0;\r\n  color: #666;\r\n  box-sizing:border-box;\r\n  -moz-box-sizing:border-box;\r\n  -webkit-box-sizing:border-box;\r\n}\r\n.bg{\r\n  font-family: \"微软雅黑\", serif;\r\n  width: 415px;\r\n  height: 337px;\r\n  background: #eef;\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  bottom:0;\r\n  margin:auto;\r\n  z-index: 1;\r\n  box-shadow:0 0 30px rgba(0, 0, 0, 0.4);\r\n  border-radius: 15px;\r\n}\r\n.password{\r\n  position: absolute;\r\n  top: 9rem;\r\n  right: 3.5rem;\r\n  display: flex;\r\n}\r\nbutton{\r\n  position: absolute;\r\n  top: 16rem;\r\n  right: 3.5rem;\r\n  border: none;\r\n  color: #fff;\r\n  width: 18.825rem;\r\n  text-align: center;\r\n  background-color: #2D456B;\r\n  line-height: 40px;\r\n}\r\n.img{\r\n  width: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0 auto;\r\n  z-index: -1;\r\n}\r\n.wel{\r\n  font-family: BrushScriptStd, helveticaarial, 幼圆;\r\n  font-style: italic;\r\n  width: 100%;\r\n  height: 305px;\r\n  color: #ffffff;\r\n  font-size: 6rem;\r\n  position: absolute;\r\n  top: 5rem;\r\n  text-align: center;\r\n}\r\ninput{\r\n  border-bottom:0.0625rem solid #2D456B;\r\n  height: 2.5625rem;\r\n  width: 15.8125rem;\r\n  text-indent: 3.125rem;\r\n  outline:none;\r\n  background-color: #eef;\r\n}\r\n.user{\r\n  position: absolute;\r\n  top: 4rem;\r\n  right: 3.5rem;\r\n  display: flex;\r\n\r\n}\r\n.rem{\r\n  position: absolute;\r\n  top: 12.5rem;\r\n  right: 18.2rem;\r\n  border: none;\r\n  color: #323333;\r\n}\r\n.rem input{\r\n  width: 0.8125rem;\r\n}\r\n.fg{\r\n  position: absolute;\r\n  top: 12.5rem;\r\n  right: 3.5rem;\r\n  border: none;\r\n  color: #323333;\r\n}\r\n.inuser{\r\n  border-bottom:1px solid #2D456B;\r\n  height: 41px;\r\n  line-height: 41px;\r\n}\r\n.reb{\r\n  margin-top: -33px;\r\n  margin-left: 20px;\r\n  font-size: 11px;\r\n}\r\n@media (min-width:800px) and (max-width:1200px)\r\n\r\n{\r\n  .bg{\r\n    width: 355px;\r\n    height: 300px;\r\n  }\r\n  .wel{\r\n    width: 355px;\r\n  }\r\n  .user{\r\n    top: 5rem;\r\n    right: 3.5rem;\r\n  }\r\n  .password{\r\n    top: 8rem;\r\n    right: 3.5rem;\r\n  }\r\n  input{\r\n\r\n    width: 12rem;\r\n  }\r\n  .rem{\r\n    top: 11rem;\r\n    right: 14.3rem;\r\n  }\r\n  .fg{\r\n    top: 11rem;\r\n    right: 3.5rem;\r\n  }\r\n  button{\r\n    top: 14rem;\r\n    width: 15rem;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUNBQXVDO0FBQ3pDO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsTUFBTTtFQUNOLEtBQUs7RUFDTCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtFQUNFLCtDQUErQztFQUMvQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTs7QUFFZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFHQTs7O0VBR0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFNBQVM7SUFDVCxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFNBQVM7SUFDVCxhQUFhO0VBQ2Y7RUFDQTs7SUFFRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNre1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAwcHg7XHJcbiAgei1pbmRleDotMTA7XHJcbiAgem9vbTogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgMDtcclxufVxyXG4uZGVtbzF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcclxufVxyXG4qe1xyXG5cclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxufVxyXG4uYmd7XHJcbiAgZm9udC1mYW1pbHk6IFwi5b6u6L2v6ZuF6buRXCIsIHNlcmlmO1xyXG4gIHdpZHRoOiA0MTVweDtcclxuICBoZWlnaHQ6IDMzN3B4O1xyXG4gIGJhY2tncm91bmQ6ICNlZWY7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDowO1xyXG4gIHRvcDowO1xyXG4gIHJpZ2h0OjA7XHJcbiAgYm90dG9tOjA7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgei1pbmRleDogMTtcclxuICBib3gtc2hhZG93OjAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5wYXNzd29yZHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5cmVtO1xyXG4gIHJpZ2h0OiAzLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5idXR0b257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTZyZW07XHJcbiAgcmlnaHQ6IDMuNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDE4LjgyNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJENDU2QjtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG4uaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbi53ZWx7XHJcbiAgZm9udC1mYW1pbHk6IEJydXNoU2NyaXB0U3RkLCBoZWx2ZXRpY2FhcmlhbCwg5bm85ZyGO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogNnJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pbnB1dHtcclxuICBib3JkZXItYm90dG9tOjAuMDYyNXJlbSBzb2xpZCAjMkQ0NTZCO1xyXG4gIGhlaWdodDogMi41NjI1cmVtO1xyXG4gIHdpZHRoOiAxNS44MTI1cmVtO1xyXG4gIHRleHQtaW5kZW50OiAzLjEyNXJlbTtcclxuICBvdXRsaW5lOm5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjtcclxufVxyXG4udXNlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cmVtO1xyXG4gIHJpZ2h0OiAzLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuLnJlbXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMi41cmVtO1xyXG4gIHJpZ2h0OiAxOC4ycmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzMyMzMzMztcclxufVxyXG4ucmVtIGlucHV0e1xyXG4gIHdpZHRoOiAwLjgxMjVyZW07XHJcbn1cclxuLmZne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyLjVyZW07XHJcbiAgcmlnaHQ6IDMuNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMzMjMzMzM7XHJcbn1cclxuLmludXNlcntcclxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMkQ0NTZCO1xyXG4gIGhlaWdodDogNDFweDtcclxuICBsaW5lLWhlaWdodDogNDFweDtcclxufVxyXG4ucmVie1xyXG4gIG1hcmdpbi10b3A6IC0zM3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjgwMHB4KSBhbmQgKG1heC13aWR0aDoxMjAwcHgpXHJcblxyXG57XHJcbiAgLmJne1xyXG4gICAgd2lkdGg6IDM1NXB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbiAgLndlbHtcclxuICAgIHdpZHRoOiAzNTVweDtcclxuICB9XHJcbiAgLnVzZXJ7XHJcbiAgICB0b3A6IDVyZW07XHJcbiAgICByaWdodDogMy41cmVtO1xyXG4gIH1cclxuICAucGFzc3dvcmR7XHJcbiAgICB0b3A6IDhyZW07XHJcbiAgICByaWdodDogMy41cmVtO1xyXG4gIH1cclxuICBpbnB1dHtcclxuXHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgfVxyXG4gIC5yZW17XHJcbiAgICB0b3A6IDExcmVtO1xyXG4gICAgcmlnaHQ6IDE0LjNyZW07XHJcbiAgfVxyXG4gIC5mZ3tcclxuICAgIHRvcDogMTFyZW07XHJcbiAgICByaWdodDogMy41cmVtO1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICB0b3A6IDE0cmVtO1xyXG4gICAgd2lkdGg6IDE1cmVtO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");




let LoginComponent = class LoginComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    ngOnInit() {
    }
    login(un, up) {
        this.uname = un;
        this.password = up;
        if (this.uname === '' || this.password === '') {
            alert('请输入账号或密码');
        }
        this.loginService.login({ username: this.uname, password: this.password })
            .subscribe((res) => {
            if (res.username) {
                window.localStorage.setItem('userName', res.username);
                this.loginService.setUser(res);
                this.router.navigateByUrl('/index');
            }
            else {
                alert(res.message);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/manager/add-manager.component.css":
/*!***************************************************!*\
  !*** ./src/app/manager/add-manager.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlci9hZGQtbWFuYWdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQjtBQUNwRyIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvYWRkLW1hbmFnZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LHRleHRhcmVhe1xyXG4gIHdpZHRoOjEwMHB4OyBsaW5lLWhlaWdodDogMjVweDsgYm9yZGVyLXJhZGl1czogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWZmOyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/manager/add-manager.component.ts":
/*!**************************************************!*\
  !*** ./src/app/manager/add-manager.component.ts ***!
  \**************************************************/
/*! exports provided: AddManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddManagerComponent", function() { return AddManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let AddManagerComponent = class AddManagerComponent {
    constructor(route, managerService, location) {
        this.route = route;
        this.managerService = managerService;
        this.location = location;
    }
    ngOnInit() {
    }
    save(no, name) {
        this.manager = { id: null, no: no.trim(), name: name.trim() };
        if (!no) {
            alert('no不能为空');
            return;
        }
        else if (!name) {
            alert('name不能为空');
            return;
        }
        this.managerService.addManager(this.manager)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
};
AddManagerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddManagerComponent.prototype, "manager", void 0);
AddManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manager/add-manager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-manager.component.css */ "./src/app/manager/add-manager.component.css")).default]
    })
], AddManagerComponent);



/***/ }),

/***/ "./src/app/manager/manager.component.ts":
/*!**********************************************!*\
  !*** ./src/app/manager/manager.component.ts ***!
  \**********************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");



let ManagerComponent = class ManagerComponent {
    constructor(managerService) {
        this.managerService = managerService;
    }
    ngOnInit() {
        this.getManagers();
    }
    // DoCheck 触发变更检测机制就是调用DoCheck钩子，目的是保证组件属性和浏览器的显示同步
    ngDoCheck() {
        if (this.currentPag !== this.oldCurrentPag || this.pagNums !== this.oldPagNums) {
            this.dataShow = [];
            let startNum = (this.currentPag - 1) * this.pagNums;
            for (let i = 0; i < this.pagNums; i++, startNum++) {
                if (this.managers[startNum] !== null && this.managers[startNum] !== undefined) {
                    this.dataShow.push(this.managers[startNum]);
                }
            }
            this.oldCurrentPag = this.currentPag;
            this.oldPagNums = this.pagNums;
        }
    }
    // 捕获当前显示页码函数
    currentPagHandel(pag) {
        this.currentPag = pag;
        console.log('curpag:' + pag);
    }
    // 捕获每页显示数量行数
    pagNumsHandel(pagNum) {
        this.pagNums = pagNum;
    }
    getManagers() {
        this.managerService.getManagers()
            .subscribe(res => { this.managers = res; this.leng = res.length; }); // 注意添加leng赋值
    }
    getManagerByname(name) {
        this.managerService.getManagerByname(name)
            .subscribe(res => {
            this.managers = res;
            this.dataShow = [];
            this.dataShow.push(this.managers[0]);
        });
    }
    // ifName(name: string): void {
    //   if (name) {
    //     alert(this.books)
    //     this.books.splice(0, this.books.length);
    //     alert(this.books)
    //     this.getBookByName(name);
    //     alert(this.books);
    //   } else {
    //     this.getBooks();
    //   }
    // }
    delete(manager) {
        this.managers = this.managers.filter(h => h !== manager);
        this.managerService.deleteManager(manager).subscribe(res => {
            alert(res.message); // 弹出后台给的消息
            // 以下代码用于成果删除一行数据后页面内容刷新，并将页面保持在原页数位置不变。
            // if ( res.message === '删除成功') { //如果成功删除后后台返回的数据是‘删除成功’，可以去点这里的注释
            this.managers = this.managers.filter(h => h !== manager); // 过滤掉已经被删除数据
            this.dataShow = [];
            let startNum = (this.currentPag - 1) * this.pagNums;
            for (let i = 0; i < this.pagNums; i++, startNum++) {
                if (this.managers[startNum] !== null && this.managers[startNum] !== undefined) {
                    this.dataShow.push(this.managers[startNum]);
                }
            }
        });
    }
};
ManagerComponent.ctorParameters = () => [
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }
];
ManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manager/manager.component.html")).default,
    })
], ManagerComponent);



/***/ }),

/***/ "./src/app/manager/update-manager.component.css":
/*!******************************************************!*\
  !*** ./src/app/manager/update-manager.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlci91cGRhdGUtbWFuYWdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQjtBQUNwRyIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvdXBkYXRlLW1hbmFnZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LHRleHRhcmVhe1xyXG4gIHdpZHRoOjEwMHB4OyBsaW5lLWhlaWdodDogMjVweDsgYm9yZGVyLXJhZGl1czogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWZmOyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/manager/update-manager.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/manager/update-manager.component.ts ***!
  \*****************************************************/
/*! exports provided: UpdateManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateManagerComponent", function() { return UpdateManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let UpdateManagerComponent = class UpdateManagerComponent {
    constructor(route, managerService, location) {
        this.route = route;
        this.managerService = managerService;
        this.location = location;
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.managerService.getManager(id)
            .subscribe(res => this.manager = res);
    }
    goBack() {
        this.location.back();
    }
    save() {
        if (!this.manager.no) {
            alert('no不能为空');
            return;
        }
        else if (!this.manager.name) {
            alert('name不能为空');
            return;
        }
        this.managerService.updateManager(this.manager)
            .subscribe((res) => { alert(res.message); this.goBack(); });
    }
};
UpdateManagerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateManagerComponent.prototype, "manager", void 0);
UpdateManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manager/update-manager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-manager.component.css */ "./src/app/manager/update-manager.component.css")).default]
    })
], UpdateManagerComponent);



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#pags li,\r\n#paging li{\r\n  float: left;\r\n  display: inline-block;\r\n  border: 1px solid #DDDDDD;\r\n  cursor: pointer;\r\n  padding: 4px 0;\r\n}\r\n#paging li a,\r\n#pags li a{\r\n  padding: 4px 13px;\r\n}\r\n#paging{\r\n}\r\nselect{\r\n  height: 30px;\r\n  border: 1px solid #DDDDDD;\r\n  cursor:pointer;\r\n}\r\n.active{\r\n  background-color: #EEEEEE;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ3MgbGksXHJcbiNwYWdpbmcgbGl7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEREREREQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG59XHJcbiNwYWdpbmcgbGkgYSxcclxuI3BhZ3MgbGkgYXtcclxuICBwYWRkaW5nOiA0cHggMTNweDtcclxufVxyXG4jcGFnaW5ne1xyXG59XHJcbnNlbGVjdHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0RERERERDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4uYWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageComponent = class PageComponent {
    constructor() {
        this.currentPag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // 点击按钮 子组件传递事件给父级组件
        this.pagNums = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pagNum = 5; // 每页显示数据数量
        this.pagCurren = 1; // 当前页码
        this.oldPagNum = 5;
    }
    // 默认当前显示页是1，每页显示数量5
    ngOnInit() {
        this.currentPag.emit(this.pagCurren);
        this.pagNums.emit(this.pagNum);
        console.log('init,, ' + this.leng + ',,' + this.pags.length);
    }
    // 初始化调用,在init前执行
    ngOnChanges(changes) {
        this.pags = []; // 这里必须初始化pags数组
        this.numPag = (+this.leng) % (+this.pagNum) === 0 ? (+this.leng) / (+this.pagNum) : Math.floor((+this.leng) / (+this.pagNum)) + 1;
        for (let i = 1; i <= this.numPag; i++) {
            this.pags.push(i);
        }
        console.log('change,, ' + this.leng + ',,' + this.pags.length);
    }
    // 当分页组件中的下拉数据数量发生变化，需要重新改变页码，调用
    ngDoCheck() {
        if (this.pagNum !== this.oldPagNum) {
            this.pagCurren = 1;
            this.currentPag.emit(this.pagCurren);
            this.pagNums.emit(this.pagNum);
            this.oldPagNum = this.pagNum;
            console.log('check,, ' + this.leng + ',,' + this.pags.length);
        }
    }
    // 获取每页显示数量函数,下拉菜单用
    gitPagNum() {
        this.pags = []; // 这里必须初始化pags数组
        this.numPag = (+this.leng) % (+this.pagNum) === 0 ? (+this.leng) / (+this.pagNum) : Math.floor((+this.leng) / (+this.pagNum)) + 1;
        for (let i = 1; i <= this.numPag; i++) {
            this.pags.push(i);
        }
    }
    // 获取当前显示页函数，特殊显示
    gitPag(pag) {
        this.pagCurren = pag;
        this.currentPag.emit(this.pagCurren);
        this.pagNums.emit(this.pagNum);
    }
    // 显示下一页函数
    next() {
        if (this.pagCurren !== this.pags[this.pags.length - 1]) {
            this.pagCurren = this.pagCurren + 1;
        }
        else {
            this.pagCurren = this.pags[this.pags.length - 1];
        }
        this.currentPag.emit(this.pagCurren);
        this.pagNums.emit(this.pagNum);
    }
    // 显示上一页函数
    previous() {
        if (this.pagCurren !== 1) {
            this.pagCurren = this.pagCurren - 1;
        }
        else {
            this.pagCurren = 1;
        }
        this.currentPag.emit(this.pagCurren);
        this.pagNums.emit(this.pagNum);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageComponent.prototype, "leng", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PageComponent.prototype, "currentPag", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PageComponent.prototype, "pagNums", void 0);
PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paging',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")).default]
    })
], PageComponent);



/***/ }),

/***/ "./src/app/reader/add-reader.component.css":
/*!*************************************************!*\
  !*** ./src/app/reader/add-reader.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZGVyL2FkZC1yZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUI7QUFDcEciLCJmaWxlIjoic3JjL2FwcC9yZWFkZXIvYWRkLXJlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsdGV4dGFyZWF7XHJcbiAgd2lkdGg6MTAwcHg7IGxpbmUtaGVpZ2h0OiAyNXB4OyBib3JkZXItcmFkaXVzOiAzcHg7IGJhY2tncm91bmQtY29sb3I6ICNlZWVlZmY7IG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/reader/add-reader.component.ts":
/*!************************************************!*\
  !*** ./src/app/reader/add-reader.component.ts ***!
  \************************************************/
/*! exports provided: AddReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReaderComponent", function() { return AddReaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let AddReaderComponent = class AddReaderComponent {
    constructor(route, readerService, location) {
        this.route = route;
        this.readerService = readerService;
        this.location = location;
    }
    ngOnInit() {
        this.getReaderTypes();
    }
    getReaderTypes() {
        this.readerService.getReaderTypes()
            .subscribe(res => this.readerTypes = res);
    }
    save(no, name, age, phone, readerType) {
        this.reader = { no: no.trim(), name: name.trim(), age: age.valueOf(), phone: phone.trim(), readerType: this.readerType };
        if (!no) {
            alert('no不能为空');
            return;
        }
        else if (!name) {
            alert('name不能为空');
            return;
        }
        else if (!age) {
            alert('age不能为空');
            return;
        }
        else if (!phone) {
            alert('phone不能为空');
            return;
        }
        else if (!readerType) {
            alert('readerType不能为空');
            return;
        }
        this.readerService.addReader(this.reader)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
    Number(value) {
        return parseInt(value, 10);
    }
    Date(value) {
        return;
    }
};
AddReaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddReaderComponent.prototype, "readerTypes", void 0);
AddReaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-reader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-reader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reader/add-reader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-reader.component.css */ "./src/app/reader/add-reader.component.css")).default]
    })
], AddReaderComponent);



/***/ }),

/***/ "./src/app/reader/detail-reader.component.css":
/*!****************************************************!*\
  !*** ./src/app/reader/detail-reader.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label{margin-bottom: 10px;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZGVyL2RldGFpbC1yZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLG1CQUFtQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvcmVhZGVyL2RldGFpbC1yZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse21hcmdpbi1ib3R0b206IDEwcHg7fVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/reader/detail-reader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/reader/detail-reader.component.ts ***!
  \***************************************************/
/*! exports provided: DetailReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailReaderComponent", function() { return DetailReaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let DetailReaderComponent = class DetailReaderComponent {
    constructor(route, readerService, location) {
        this.route = route;
        this.readerService = readerService;
        this.location = location;
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id; // 要修改专业的id
        this.readerService.getReader(id)
            .subscribe(res => {
            this.reader = res;
        });
    }
    goBack() {
        this.location.back();
    }
};
DetailReaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetailReaderComponent.prototype, "reader", void 0);
DetailReaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail-reader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reader/detail-reader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail-reader.component.css */ "./src/app/reader/detail-reader.component.css")).default]
    })
], DetailReaderComponent);



/***/ }),

/***/ "./src/app/reader/reader.component.css":
/*!*********************************************!*\
  !*** ./src/app/reader/reader.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWRlci9yZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/reader/reader.component.ts":
/*!********************************************!*\
  !*** ./src/app/reader/reader.component.ts ***!
  \********************************************/
/*! exports provided: ReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReaderComponent", function() { return ReaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ReaderComponent = class ReaderComponent {
    constructor(readerService, router, route) {
        this.readerService = readerService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.getReaders();
    }
    Number(value) {
        return parseInt(value, 10);
    }
    select(name) {
        if (name === null) {
            this.readerService.getReaders().subscribe(res => this.dataShow = res);
            return;
        }
        this.readerService.selectReader(name).subscribe(res => this.dataShow = res);
    }
    // DoCheck 触发变更检测机制就是调用DoCheck钩子，目的是保证组件属性和浏览器的显示同步
    ngDoCheck() {
        if (this.currentPag !== this.oldCurrentPag || this.pagNums !== this.oldPagNums) {
            this.dataShow = [];
            let startNum = (this.currentPag - 1) * this.pagNums;
            for (let i = 0; i < this.pagNums; i++, startNum++) {
                if (this.readers[startNum] !== null && this.readers[startNum] !== undefined) {
                    this.dataShow.push(this.readers[startNum]);
                }
            }
            this.oldCurrentPag = this.currentPag;
            this.oldPagNums = this.pagNums;
        }
    }
    // 捕获当前显示页码函数
    currentPagHandel(pag) {
        this.currentPag = pag;
        console.log('curpag:' + pag);
    }
    // 捕获每页显示数量行数
    pagNumsHandel(pagNum) {
        this.pagNums = pagNum;
    }
    // 获取所有Reader数据
    getReaders() {
        this.readerService.getReaders()
            .subscribe(res => { this.readers = res; this.leng = res.length; });
    }
    delete(reader) {
        this.readerService.deleteReader(reader)
            .subscribe(res => {
            alert(res.message); // 弹出后台给的消息
            // 以下代码用于成果删除一行数据后页面内容刷新，并将页面保持在原页数位置不变。
            // if ( res.message === '删除成功') { //如果成功删除后后台返回的数据是‘删除成功’，可以去点这里的注释
            this.readers = this.readers.filter(h => h !== reader); // 过滤掉已经被删除数据
            this.dataShow = [];
            let startNum = (this.currentPag - 1) * this.pagNums;
            for (let i = 0; i < this.pagNums; i++, startNum++) {
                if (this.readers[startNum] !== null && this.readers[startNum] !== undefined) {
                    this.dataShow.push(this.readers[startNum]);
                }
            }
        });
    }
    doSomethingIfProp1Change() {
    }
};
ReaderComponent.ctorParameters = () => [
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ReaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reader/reader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reader.component.css */ "./src/app/reader/reader.component.css")).default]
    })
], ReaderComponent);



/***/ }),

/***/ "./src/app/reader/update-reader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/reader/update-reader.component.ts ***!
  \***************************************************/
/*! exports provided: UpdateReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateReaderComponent", function() { return UpdateReaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let UpdateReaderComponent = class UpdateReaderComponent {
    constructor(route, readerService, location) {
        this.route = route;
        this.readerService = readerService;
        this.location = location;
    }
    ngOnInit() {
        this.getReaderTypes(); // 下拉菜单赋值
        const id = this.route.snapshot.params.id; // 要修改专业的id
        this.readerService.getReader(id)
            .subscribe(res => {
            this.reader = res;
        });
    }
    /*比较器*/
    compareFn(o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
    getReaderTypes() {
        this.readerService.getReaderTypes()
            .subscribe(res => this.readerTypes = res);
    }
    save() {
        /*用于日志信息的一般输出。可以使用此方法使用字符串替换和附加参数。*/
        console.log(this.reader);
        if (!this.reader.no) {
            alert('no不能为空');
            return;
        }
        else if (!this.reader.name) {
            alert('name不能为空');
            return;
        }
        else if (!this.reader.age) {
            alert('age不能为空');
            return;
        }
        else if (!this.reader.phone) {
            alert('phone不能为空');
            return;
        }
        else if (!this.reader.date) {
            alert('date不能为空');
            return;
        }
        else if (!this.reader.readerType) {
            alert('readerType不能为空');
            return;
        }
        else if (!this.reader.borrowedNum) {
            alert('borrowedNum不能为空');
            return;
        }
        this.readerService.updateReader(this.reader)
            .subscribe((res) => {
            alert(res.message);
            this.goBack();
        });
    }
    goBack() {
        this.location.back();
    }
};
UpdateReaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateReaderComponent.prototype, "readerTypes", void 0);
UpdateReaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-reader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-reader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reader/update-reader.component.html")).default,
    })
], UpdateReaderComponent);



/***/ }),

/***/ "./src/app/readertype/add-readertype.component.css":
/*!*********************************************************!*\
  !*** ./src/app/readertype/add-readertype.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWRlcnR5cGUvYWRkLXJlYWRlcnR5cGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/readertype/add-readertype.component.ts":
/*!********************************************************!*\
  !*** ./src/app/readertype/add-readertype.component.ts ***!
  \********************************************************/
/*! exports provided: AddReadertypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReadertypeComponent", function() { return AddReadertypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let AddReadertypeComponent = class AddReadertypeComponent {
    constructor(route, readertypeService, location) {
        this.route = route;
        this.readertypeService = readertypeService;
        this.location = location;
    }
    ngOnInit() {
    }
    save(no, typeName, maxBorrowNum, limitDate) {
        this.readerType = { no: no.trim(), typeName: typeName.trim(), maxBorrowNum, limitDate };
        if (!typeName) {
            return;
        }
        this.readertypeService.addReaderType(this.readerType)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
};
AddReadertypeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddReadertypeComponent.prototype, "readerType", void 0);
AddReadertypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-readertype',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-readertype.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/readertype/add-readertype.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-readertype.component.css */ "./src/app/readertype/add-readertype.component.css")).default]
    })
], AddReadertypeComponent);



/***/ }),

/***/ "./src/app/readertype/readertype.component.css":
/*!*****************************************************!*\
  !*** ./src/app/readertype/readertype.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWRlcnR5cGUvcmVhZGVydHlwZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/readertype/readertype.component.ts":
/*!****************************************************!*\
  !*** ./src/app/readertype/readertype.component.ts ***!
  \****************************************************/
/*! exports provided: ReadertypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadertypeComponent", function() { return ReadertypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");



let ReadertypeComponent = class ReadertypeComponent {
    constructor(readertypeService) {
        this.readertypeService = readertypeService;
    }
    ngOnInit() {
        this.getReaderTypes();
    }
    // DoCheck 触发变更检测机制就是调用DoCheck钩子，目的是保证组件属性和浏览器的显示同步
    ngDoCheck() {
        if (this.currentPag !== this.oldCurrentPag || this.pagNums !== this.oldPagNums) {
            this.dataShow = [];
            const curren = this.currentPag - 1;
            const pagNum = this.pagNums;
            let startNum = curren * pagNum;
            for (let i = 0; i < pagNum; i++, startNum++) {
                if (this.readerTypes[startNum] !== null && this.readerTypes[startNum] !== undefined) {
                    this.dataShow.push(this.readerTypes[startNum]);
                }
            }
            this.oldCurrentPag = this.currentPag;
            this.oldPagNums = this.pagNums;
        }
    }
    // 捕获当前显示页码函数
    currentPagHandel(pag) {
        this.currentPag = pag;
    }
    // 捕获每页显示数量行数
    pagNumsHandel(pagNum) {
        this.pagNums = pagNum;
    }
    getReaderTypes() {
        this.readertypeService.getReaderTypes()
            .subscribe(res => { this.readerTypes = res; this.leng = res.length; });
    }
    delete(readerType) {
        this.readerTypes = this.readerTypes.filter(h => h !== readerType);
        this.readertypeService.deleteReaderType(readerType).subscribe(res => alert(res.message));
    }
};
ReadertypeComponent.ctorParameters = () => [
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }
];
ReadertypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-readertype',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./readertype.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/readertype/readertype.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./readertype.component.css */ "./src/app/readertype/readertype.component.css")).default]
    })
], ReadertypeComponent);



/***/ }),

/***/ "./src/app/readertype/update-readertype.component.css":
/*!************************************************************!*\
  !*** ./src/app/readertype/update-readertype.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWRlcnR5cGUvdXBkYXRlLXJlYWRlcnR5cGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/readertype/update-readertype.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/readertype/update-readertype.component.ts ***!
  \***********************************************************/
/*! exports provided: UpdateReadertypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateReadertypeComponent", function() { return UpdateReadertypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let UpdateReadertypeComponent = class UpdateReadertypeComponent {
    constructor(route, readertypeService, location) {
        this.route = route;
        this.readertypeService = readertypeService;
        this.location = location;
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.readertypeService.getReaderType(id)
            .subscribe(res => this.readertype = res);
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.readertypeService.updateReaderType(this.readertype)
            .subscribe(() => this.goBack());
    }
};
UpdateReadertypeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateReadertypeComponent.prototype, "readertype", void 0);
UpdateReadertypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-readertype',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-readertype.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/readertype/update-readertype.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-readertype.component.css */ "./src/app/readertype/update-readertype.component.css")).default]
    })
], UpdateReadertypeComponent);



/***/ }),

/***/ "./src/app/returnBook/addReturnBook.component.css":
/*!********************************************************!*\
  !*** ./src/app/returnBook/addReturnBook.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0dXJuQm9vay9hZGRSZXR1cm5Cb29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CO0FBQ3BHIiwiZmlsZSI6InNyYy9hcHAvcmV0dXJuQm9vay9hZGRSZXR1cm5Cb29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCx0ZXh0YXJlYXtcclxuICB3aWR0aDoxMDBweDsgbGluZS1oZWlnaHQ6IDI1cHg7IGJvcmRlci1yYWRpdXM6IDNweDsgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVmZjsgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/returnBook/addReturnBook.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/returnBook/addReturnBook.component.ts ***!
  \*******************************************************/
/*! exports provided: AddReturnBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReturnBookComponent", function() { return AddReturnBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let AddReturnBookComponent = class AddReturnBookComponent {
    constructor(route, returnBookService, location) {
        this.route = route;
        this.returnBookService = returnBookService;
        this.location = location;
    }
    ngOnInit() {
        this.getReaders();
        this.getManagers();
        this.getBooks();
        this.getBorrowBooks();
    }
    getReaders() {
        this.returnBookService.getReaders()
            .subscribe(res => this.readers = res);
    }
    getBooks() {
        this.returnBookService.getBooks()
            .subscribe(res => this.books = res);
    }
    getManagers() {
        this.returnBookService.getManagers()
            .subscribe(res => this.managers = res);
    }
    getBorrowBooks() {
        this.returnBookService.getBorrowBooks()
            .subscribe(res => this.borrowBooks = res);
    }
    getBorBook(id) {
        this.returnBookService.getBorBook(id)
            .subscribe(res => this.borrowBooks = res);
    }
    save(no, reader, book, borrowBook, manager) {
        // @ts-ignore
        this.returnBook = { no: no.trim(), reader: this.reader, book: this.book, borrowBook: this.borrowBook, manager: this.manager };
        if (!no) {
            return;
        }
        this.returnBookService.addReturnBook(this.returnBook)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
    Number(value) {
        return parseInt(value, 10);
    }
    Date(value) {
        return;
    }
};
AddReturnBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddReturnBookComponent.prototype, "readers", void 0);
AddReturnBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addReturnBook.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/returnBook/addReturnBook.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addReturnBook.component.css */ "./src/app/returnBook/addReturnBook.component.css")).default]
    })
], AddReturnBookComponent);



/***/ }),

/***/ "./src/app/returnBook/returnBook.component.css":
/*!*****************************************************!*\
  !*** ./src/app/returnBook/returnBook.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldHVybkJvb2svcmV0dXJuQm9vay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/returnBook/returnBook.component.ts":
/*!****************************************************!*\
  !*** ./src/app/returnBook/returnBook.component.ts ***!
  \****************************************************/
/*! exports provided: ReturnBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnBookComponent", function() { return ReturnBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");



let ReturnBookComponent = class ReturnBookComponent {
    constructor(returnBookService) {
        this.returnBookService = returnBookService;
    }
    ngOnInit() {
        this.getReturnBooks();
    }
    // DoCheck 触发变更检测机制就是调用DoCheck钩子，目的是保证组件属性和浏览器的显示同步
    ngDoCheck() {
        if (this.currentPag !== this.oldCurrentPag || this.pagNums !== this.oldPagNums) {
            this.dataShow = [];
            let startNum = (this.currentPag - 1) * this.pagNums;
            for (let i = 0; i < this.pagNums; i++, startNum++) {
                if (this.returnBook[startNum] !== null && this.returnBook[startNum] !== undefined) {
                    this.dataShow.push(this.returnBook[startNum]);
                }
            }
            this.oldCurrentPag = this.currentPag;
            this.oldPagNums = this.pagNums;
        }
    }
    select(name) {
        if (name === null) {
            this.returnBookService.getReturnBooks().subscribe(res => this.dataShow = res);
            return;
        }
        this.returnBookService.selectReturnBook(name).subscribe(res => this.dataShow = res);
    }
    // 捕获当前显示页码函数
    currentPagHandel(pag) {
        this.currentPag = pag;
        console.log('curpag:' + pag);
    }
    // 捕获每页显示数量行数
    pagNumsHandel(pagNum) {
        this.pagNums = pagNum;
    }
    // 获取所有Degree数据
    getReturnBooks() {
        this.returnBookService.getReturnBooks()
            .subscribe(res => { this.returnBook = res; this.leng = res.length; });
    }
    delete(returnBook) {
        this.returnBookService.deleteReturnBook(returnBook)
            .subscribe(res => {
            // alert(res.message); // 弹出后台给的消息
            // 以下代码用于成果删除一行数据后页面内容刷新，并将页面保持在原页数位置不变。
            // if ( res.message === '删除成功') { //如果成功删除后后台返回的数据是‘删除成功’，可以去点这里的注释
            this.returnBook = this.returnBook.filter(h => h !== returnBook); // 过滤掉已经被删除数据
            this.dataShow = [];
            let startNum = (this.currentPag - 1) * this.pagNums;
            for (let i = 0; i < this.pagNums; i++, startNum++) {
                if (this.returnBook[startNum] !== null && this.returnBook[startNum] !== undefined) {
                    this.dataShow.push(this.returnBook[startNum]);
                }
            }
        });
    }
};
ReturnBookComponent.ctorParameters = () => [
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }
];
ReturnBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-return-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./returnBook.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/returnBook/returnBook.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./returnBook.component.css */ "./src/app/returnBook/returnBook.component.css")).default]
    })
], ReturnBookComponent);



/***/ }),

/***/ "./src/app/returnBook/updateReturnBook.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/returnBook/updateReturnBook.component.ts ***!
  \**********************************************************/
/*! exports provided: UpdateReturnBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateReturnBookComponent", function() { return UpdateReturnBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity.service */ "./src/app/entity.service.ts");





let UpdateReturnBookComponent = class UpdateReturnBookComponent {
    constructor(route, returnBookService, location) {
        this.route = route;
        this.returnBookService = returnBookService;
        this.location = location;
    }
    ngOnInit() {
        this.getReaders(); // 下拉菜单赋值
        this.getBooks();
        this.getManagers();
        this.getBorrowBooks();
        const id = this.route.snapshot.params.id; // 要修改专业的id
        this.returnBookService.getReturnBook(id)
            .subscribe(res => {
            this.returnBook = res;
        });
    }
    /*比较器*/
    compareFn(o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
    getReaders() {
        this.returnBookService.getReaders()
            .subscribe(res => this.readers = res);
    }
    getBooks() {
        this.returnBookService.getBooks()
            .subscribe(res => this.books = res);
    }
    getManagers() {
        this.returnBookService.getManagers()
            .subscribe(res => this.managers = res);
    }
    getBorrowBooks() {
        this.returnBookService.getBorrowBooks()
            .subscribe(res => this.borrowBooks = res);
    }
    getBorBook(id) {
        this.returnBookService.getBorBook(id)
            .subscribe(res => this.borrowBooks = res);
    }
    save() {
        /*用于日志信息的一般输出。可以使用此方法使用字符串替换和附加参数。*/
        console.log(this.returnBook);
        if (!this.returnBook.no) {
            alert('no不能为空');
            return;
        }
        else if (!this.returnBook.returnDate) {
            alert('returnDate不能为空');
            return;
        }
        else if (!this.returnBook.reader) {
            alert('reader不能为空');
            return;
        }
        else if (!this.returnBook.book) {
            alert('book不能为空');
            return;
        }
        else if (!this.returnBook.manager) {
            alert('manager不能为空');
            return;
        }
        else if (!this.returnBook.borrowBook) {
            alert('borrowBook不能为空');
            return;
        }
        this.returnBookService.updateReturnBook(this.returnBook)
            .subscribe((res) => {
            alert(res.message);
            this.goBack();
        });
    }
    goBack() {
        this.location.back();
    }
};
UpdateReturnBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateReturnBookComponent.prototype, "readers", void 0);
UpdateReturnBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'appUpdateReturnBook',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./updateReturnBook.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/returnBook/updateReturnBook.component.html")).default,
    })
], UpdateReturnBookComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular2\LibraryManagementSystem\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);