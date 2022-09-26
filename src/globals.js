import { loadView, loadPagedView, downloadView, save, saveNoAuth } from "@/services";
import { requestAuth, requestNoAuth  } from "@/services/service";
import { UV, formatDate, formatDateTime, formatUTCDateTime, formatMonth, agentOptions } from "@/utils";
import Swal from "sweetalert2";

window.UV = UV;
window.Swal = Swal;
window.loadView = loadView;
window.loadPagedView = loadPagedView;
window.downloadView = downloadView;
window.save = save;
window.saveNoAuth = saveNoAuth;
window.requestAuth = requestAuth;
window.requestNoAuth = requestNoAuth;
window.formatDate = formatDate;
window.formatDateTime = formatDateTime;
window.formatUTCDateTime = formatUTCDateTime;
window.formatMonth = formatMonth;
window.agentOptions = agentOptions;
