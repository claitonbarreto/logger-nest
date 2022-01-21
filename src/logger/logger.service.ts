import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Logger } from "./schema/logger.schema";


@Injectable()
export class LoggerService {
    constructor(
        @InjectModel('Logger') private readonly loggerModel: any
    ) {}

    sendLog(log: Logger) {
        this.loggerModel.create(log);

        return "LoggerService: sendLog";
    }
}