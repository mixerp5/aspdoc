﻿/********************************************************************************
Copyright (C) Binod Nirvan, Mix Open Foundation (http://mixof.org).

This file is part of ASPDoc.Net.

ASPDoc.Net is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

ASPDoc.Net is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with ASPDoc.Net.  If not, see <http://www.gnu.org/licenses/>.
***********************************************************************************/

function SignOut() {
    var ajaxSignOut = AjaxSignOut();

    ajaxSignOut.success(function (msg) {
        if (msg.d === "OK") {
            RefreshPage(true);
        };
    });

    ajaxSignOut.fail(function (xhr) {
        alert(xhr.responseText);
    });
}

function AjaxSignOut() {
    var url = ResolveUrl("~/home/signout");
    return GetAjax(url);
};