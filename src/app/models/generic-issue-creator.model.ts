import { LogMessageFormat, LogType } from 'logging-format';

export default class GenericIssueCreator {
    _id: string;
    name: string;
    description: string;
    rules = new IssueCreatorRules();
    logs: LogMessageFormat[];   // TODO: should probably be converted to logIds in future
}


class IssueCreatorRules {
    time: number;
    logTypes: LogType[];
    sourceUrl: string = "none";
    detectorUrl: string = "none";
}