/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-unused-vars */
import axios from "axios";
import yenv from "yenv";
import { LogEvent, buildLogModel } from "../models/logEvent.model";
import log from "fancy-log";
const env = yenv();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default class {
  indexName: string;
  url: string;

  constructor() {
    const today = new Date();
    const dd: number = today.getDate();
    const mm: number = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    let day: string = dd.toString();
    let mounth: string = mm.toString();

    if (dd < 10) {
      day = `0${dd}`;
    }

    if (mm < 10) {
      mounth = `0${mm}`;
    }

    const indexName = `${env.LOGGING.PATTERN}${yyyy}.${mounth}.${day}`;
    this.indexName = indexName;
    this.url = `${env.LOGGING.ENDPOINT}/${indexName}/${env.LOGGING.TYPE}`;
  }

  addLog(logEvent: LogEvent) {
    try {
      logEvent.application = env.LOGGING.APPLICATION;
      axios.post(this.url, logEvent).catch(function (error) {
        log.error(error);
      });
    } catch (error) {
      log.error(error);
    }
  }

  logInfo(
    className: any,
    method: any,
    parameters: any,
    message: any,
    elapsedTime: any,
    country: any,
    codeTransaction?: any,
    application_id?: any
  ) {
    let parametersString;
    if (typeof parameters === "object" && parameters !== null)
      parametersString = JSON.stringify(parameters);
    else parametersString = parameters;

    const logEvent: LogEvent = {
      level: "INFO",
      className,
      method,
      parameters: parametersString,
      message,
      elapsedTime,
      country,
      exception: "",
      contentLength: 0,
      remoteAddress: "",
      source: "",
      application: "",
      codeTransaction: codeTransaction || "",
      application_id: application_id || "",
    };
    if (env.LOGGING.ENABLED_INFO === true) this.addLog(buildLogModel(logEvent));
  }

  logError(
    className: any,
    method: any,
    parameters: any,
    message: any,
    country: any,
    exception: any,
    codeTransaction?: any,
    application_id?: any
  ) {
    let parametersString;
    if (typeof parameters === "object" && parameters !== null)
      parametersString = JSON.stringify(parameters);
    else parametersString = parameters;

    let exceptionString;
    if (typeof exception === "object" && parameters !== null)
      exceptionString = `${exception.name}: ${exception.message}`;
    else exceptionString = exception;

    const logEvent: LogEvent = {
      level: "ERROR",
      className,
      method,
      parameters: parametersString,
      message,
      elapsedTime: 0,
      country,
      exception: exceptionString,
      contentLength: 0,
      remoteAddress: "",
      source: "",
      application: "",
      codeTransaction: codeTransaction || "",
      application_id: application_id || "",
    };

    if (env.LOGGING.ENABLED_ERROR === true)
      this.addLog(buildLogModel(logEvent));
  }
}
