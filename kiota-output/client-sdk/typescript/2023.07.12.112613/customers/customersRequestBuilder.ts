import {createCustomerFromDiscriminatorValue} from '../models/createCustomerFromDiscriminatorValue';
import {Customer} from '../models/customer';
import {CustomerCreate} from '../models/customerCreate';
import {deserializeIntoCustomer} from '../models/deserializeIntoCustomer';
import {deserializeIntoCustomerCreate} from '../models/deserializeIntoCustomerCreate';
import {serializeCustomer} from '../models/serializeCustomer';
import {serializeCustomerCreate} from '../models/serializeCustomerCreate';
import {CustomersRequestBuilderGetRequestConfiguration} from './customersRequestBuilderGetRequestConfiguration';
import {CustomersRequestBuilderPostRequestConfiguration} from './customersRequestBuilderPostRequestConfiguration';
import {CustomersItemRequestBuilder} from './item/customersItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /customers
 */
export class CustomersRequestBuilder extends BaseRequestBuilder {
    /**
     * Gets an item from the ApiSdk.customers.item collection
     * @param id Unique identifier of the item
     * @returns a CustomersItemRequestBuilder
     */
    public byId(id: string) : CustomersItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["id"] = id
        return new CustomersItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CustomersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/customers");
    };
    /**
     * Customer Demo Interface.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Customer
     */
    public get(requestConfiguration?: CustomersRequestBuilderGetRequestConfiguration | undefined) : Promise<Customer[] | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendCollectionAsync<Customer>(requestInfo, createCustomerFromDiscriminatorValue, undefined);
    };
    /**
     * @param body Customer object model.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Customer
     */
    public post(body: CustomerCreate | undefined, requestConfiguration?: CustomersRequestBuilderPostRequestConfiguration | undefined) : Promise<Customer | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter.sendAsync<Customer>(requestInfo, createCustomerFromDiscriminatorValue, undefined);
    };
    /**
     * Customer Demo Interface.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CustomersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @param body Customer object model.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CustomerCreate | undefined, requestConfiguration?: CustomersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCustomerCreate);
        return requestInfo;
    };
}
