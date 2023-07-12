import {createWidgetFromDiscriminatorValue} from '../../models/createWidgetFromDiscriminatorValue';
import {deserializeIntoWidget} from '../../models/deserializeIntoWidget';
import {deserializeIntoWidgetUpdate} from '../../models/deserializeIntoWidgetUpdate';
import {serializeWidget} from '../../models/serializeWidget';
import {serializeWidgetUpdate} from '../../models/serializeWidgetUpdate';
import {Widget} from '../../models/widget';
import {WidgetUpdate} from '../../models/widgetUpdate';
import {AnalyzeRequestBuilder} from './analyze/analyzeRequestBuilder';
import {WidgetsItemRequestBuilderDeleteRequestConfiguration} from './widgetsItemRequestBuilderDeleteRequestConfiguration';
import {WidgetsItemRequestBuilderGetRequestConfiguration} from './widgetsItemRequestBuilderGetRequestConfiguration';
import {WidgetsItemRequestBuilderPatchRequestConfiguration} from './widgetsItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /widgets/{id}
 */
export class WidgetsItemRequestBuilder extends BaseRequestBuilder {
    /**
     * The analyze property
     */
    public get analyze(): AnalyzeRequestBuilder {
        return new AnalyzeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WidgetsItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/widgets/{id}");
    };
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: WidgetsItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, undefined);
    };
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Widget
     */
    public get(requestConfiguration?: WidgetsItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Widget | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendAsync<Widget>(requestInfo, createWidgetFromDiscriminatorValue, undefined);
    };
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Widget
     */
    public patch(body: WidgetUpdate | undefined, requestConfiguration?: WidgetsItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Widget | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter.sendAsync<Widget>(requestInfo, createWidgetFromDiscriminatorValue, undefined);
    };
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WidgetsItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WidgetsItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WidgetUpdate | undefined, requestConfiguration?: WidgetsItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWidgetUpdate);
        return requestInfo;
    };
}
