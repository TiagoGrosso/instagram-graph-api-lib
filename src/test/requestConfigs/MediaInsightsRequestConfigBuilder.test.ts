import { PostMetric, StoryMetric } from '../../main/Enums';
import { MediaInsightsRequestConfigBuilder } from '../../main/requestConfigs/media/MediaInsightsRequestConfigBuilder';
import { RequestConfig } from '../../main/requestConfigs/RequestConfig';
import { TestConstants } from '../TestConstants';

describe('MediaInsightsRequestConfigBuilder', () => {
    it('Builds a post metric request config', () => {
        let requestConfig: RequestConfig = new MediaInsightsRequestConfigBuilder(
            TestConstants.ACCESS_TOKEN,
            TestConstants.MEDIA_ID,
            [PostMetric.IMPRESSIONS, PostMetric.ENGAGEMENT]
        ).build();

        expect(requestConfig.url).toEqual(`/${TestConstants.MEDIA_ID}/insights`);
        expect(requestConfig.params.access_token).toEqual(TestConstants.ACCESS_TOKEN);
        expect(requestConfig.params.metric).toEqual([PostMetric.IMPRESSIONS, PostMetric.ENGAGEMENT].join());
    });

    it('Builds a story metric request config', () => {
        let requestConfig: RequestConfig = new MediaInsightsRequestConfigBuilder(
            TestConstants.ACCESS_TOKEN,
            TestConstants.MEDIA_ID,
            [StoryMetric.IMPRESSIONS, StoryMetric.REPLIES]
        ).build();

        expect(requestConfig.params.metric).toEqual([StoryMetric.IMPRESSIONS, StoryMetric.REPLIES].join());
    });
});
