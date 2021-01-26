import { DayMetric, LifetimeMetric, MediaField, PostMetric, StoryMetric, UserField, WeekAndMonthMetric } from './Enums';
import { GetMediaInfoRequest } from './requests/media/info/GetMediaInfoRequest';
import { GetPostMediaInsightsRequest } from './requests/media/insights/GetPostMediaInsightsRequest';
import { GetStoryMediaInsightsRequest } from './requests/media/insights/GetStoryMediaInsightsRequest';
import { GetPageInfoRequest } from './requests/page/info/GetPageInfoRequest';
import { GetPageDayInsightsRequest } from './requests/page/insights/GetPageDayInsightsRequest';
import { GetPageLifetimeInsightsRequest } from './requests/page/insights/GetPageLifetimeInsightsRequest';
import { GetPageMonthInsightsRequest } from './requests/page/insights/GetPageMonthInsightsRequest';
import { GetPageWeekInsightsRequest } from './requests/page/insights/GetPageWeekInsightsRequest';
import { GetPageMediaRequest } from './requests/page/media/GetPageMediaRequest';

export class Client {
    private accessToken: string;
    private pageId: string;

    constructor(accessToken: string, pageId: string) {
        this.accessToken = accessToken;
        this.pageId = pageId;
    }

    public getAccessToken(): string {
        return this.accessToken;
    }

    public getPageId(): string {
        return this.pageId;
    }

    public newGetPageInfoRequest(...fields: UserField[]) {
        return new GetPageInfoRequest(this.accessToken, this.pageId, ...fields);
    }

    public newGetPageMediaRequest(...fields: MediaField[]) {
        return new GetPageMediaRequest(this.accessToken, this.pageId, ...fields);
    }

    public newGetPageLifetimeInsightsRequest(...metrics: LifetimeMetric[]) {
        return new GetPageLifetimeInsightsRequest(this.accessToken, this.pageId, ...metrics);
    }

    public newGetPageDayInsightsRequest(...metrics: DayMetric[]) {
        return new GetPageDayInsightsRequest(this.accessToken, this.pageId, ...metrics);
    }

    public newGetPageWeekInsightsRequest(...metrics: WeekAndMonthMetric[]) {
        return new GetPageWeekInsightsRequest(this.accessToken, this.pageId, ...metrics);
    }

    public newGetPageMonthInsightsRequest(...metrics: WeekAndMonthMetric[]) {
        return new GetPageMonthInsightsRequest(this.accessToken, this.pageId, ...metrics);
    }

    public newGetMediaInfoRequest(mediaId: string, ...fields: MediaField[]) {
        return new GetMediaInfoRequest(this.accessToken, mediaId, ...fields);
    }

    public newGetPostMediaInsightsRequest(mediaId: string, ...metrics: PostMetric[]) {
        return new GetPostMediaInsightsRequest(this.accessToken, mediaId, ...metrics);
    }
    public newGetStoryMediaInsightsRequest(mediaId: string, ...metrics: StoryMetric[]) {
        return new GetStoryMediaInsightsRequest(this.accessToken, mediaId, ...metrics);
    }
}
