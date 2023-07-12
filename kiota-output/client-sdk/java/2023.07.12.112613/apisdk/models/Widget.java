package apisdk.models;

import com.microsoft.kiota.serialization.AdditionalDataHolder;
import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParseNode;
import com.microsoft.kiota.serialization.SerializationWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
public class Widget implements AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    private Map<String, Object> additionalData;
    /**
     * The color property
     */
    private WidgetColor color;
    /**
     * The id property
     */
    private String id;
    /**
     * The weight property
     */
    private Integer weight;
    /**
     * Instantiates a new Widget and sets the default values.
     * @return a void
     */
    @javax.annotation.Nullable
    public Widget() {
        this.setAdditionalData(new HashMap<>());
    }
    /**
     * Creates a new instance of the appropriate class based on discriminator value
     * @param parseNode The parse node to use to read the discriminator value and create the object
     * @return a Widget
     */
    @javax.annotation.Nonnull
    public static Widget createFromDiscriminatorValue(@javax.annotation.Nonnull final ParseNode parseNode) {
        Objects.requireNonNull(parseNode);
        return new Widget();
    }
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @return a Map<String, Object>
     */
    @javax.annotation.Nonnull
    public Map<String, Object> getAdditionalData() {
        return this.additionalData;
    }
    /**
     * Gets the color property value. The color property
     * @return a WidgetColor
     */
    @javax.annotation.Nullable
    public WidgetColor getColor() {
        return this.color;
    }
    /**
     * The deserialization information for the current model
     * @return a Map<String, java.util.function.Consumer<ParseNode>>
     */
    @javax.annotation.Nonnull
    public Map<String, java.util.function.Consumer<ParseNode>> getFieldDeserializers() {
        final HashMap<String, java.util.function.Consumer<ParseNode>> deserializerMap = new HashMap<String, java.util.function.Consumer<ParseNode>>(3);
        deserializerMap.put("color", (n) -> { this.setColor(n.getEnumValue(WidgetColor.class)); });
        deserializerMap.put("id", (n) -> { this.setId(n.getStringValue()); });
        deserializerMap.put("weight", (n) -> { this.setWeight(n.getIntegerValue()); });
        return deserializerMap;
    }
    /**
     * Gets the id property value. The id property
     * @return a string
     */
    @javax.annotation.Nullable
    public String getId() {
        return this.id;
    }
    /**
     * Gets the weight property value. The weight property
     * @return a integer
     */
    @javax.annotation.Nullable
    public Integer getWeight() {
        return this.weight;
    }
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     * @return a void
     */
    @javax.annotation.Nonnull
    public void serialize(@javax.annotation.Nonnull final SerializationWriter writer) {
        Objects.requireNonNull(writer);
        writer.writeEnumValue("color", this.getColor());
        writer.writeStringValue("id", this.getId());
        writer.writeIntegerValue("weight", this.getWeight());
        writer.writeAdditionalData(this.getAdditionalData());
    }
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     * @return a void
     */
    @javax.annotation.Nonnull
    public void setAdditionalData(@javax.annotation.Nullable final Map<String, Object> value) {
        this.additionalData = value;
    }
    /**
     * Sets the color property value. The color property
     * @param value Value to set for the color property.
     * @return a void
     */
    @javax.annotation.Nonnull
    public void setColor(@javax.annotation.Nullable final WidgetColor value) {
        this.color = value;
    }
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     * @return a void
     */
    @javax.annotation.Nonnull
    public void setId(@javax.annotation.Nullable final String value) {
        this.id = value;
    }
    /**
     * Sets the weight property value. The weight property
     * @param value Value to set for the weight property.
     * @return a void
     */
    @javax.annotation.Nonnull
    public void setWeight(@javax.annotation.Nullable final Integer value) {
        this.weight = value;
    }
}
