using Microsoft.Kiota.Abstractions.Serialization;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System;
namespace ApiSdk.Models {
    /// <summary>
    /// Customer object model.
    /// </summary>
    public class Customer : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The address property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Address { get; set; }
#nullable restore
#else
        public string Address { get; set; }
#endif
        /// <summary>The city property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? City { get; set; }
#nullable restore
#else
        public string City { get; set; }
#endif
        /// <summary>The id property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Id { get; set; }
#nullable restore
#else
        public string Id { get; set; }
#endif
        /// <summary>The items property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Item>? Items { get; set; }
#nullable restore
#else
        public List<Item> Items { get; set; }
#endif
        /// <summary>The name property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Name { get; set; }
#nullable restore
#else
        public string Name { get; set; }
#endif
        /// <summary>The state property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? State { get; set; }
#nullable restore
#else
        public string State { get; set; }
#endif
        /// <summary>The zip property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Zip { get; set; }
#nullable restore
#else
        public string Zip { get; set; }
#endif
        /// <summary>
        /// Instantiates a new Customer and sets the default values.
        /// </summary>
        public Customer() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Customer CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Customer();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"address", n => { Address = n.GetStringValue(); } },
                {"city", n => { City = n.GetStringValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"items", n => { Items = n.GetCollectionOfObjectValues<Item>(Item.CreateFromDiscriminatorValue)?.ToList(); } },
                {"name", n => { Name = n.GetStringValue(); } },
                {"state", n => { State = n.GetStringValue(); } },
                {"zip", n => { Zip = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("address", Address);
            writer.WriteStringValue("city", City);
            writer.WriteStringValue("id", Id);
            writer.WriteCollectionOfObjectValues<Item>("items", Items);
            writer.WriteStringValue("name", Name);
            writer.WriteStringValue("state", State);
            writer.WriteStringValue("zip", Zip);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
