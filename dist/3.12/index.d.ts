declare namespace esri {

  export interface AGSMouseEvent extends MouseEvent {
    graphic?: esri.Graphic;
    mapPoint: esri.geometry.Point;
    screenPoint: Screenesri.geometry.Point;
  }
  export interface AddOptions {
    /** The features that were added to the feature layer. */
    addedGraphics?: esri.Graphic[];
    /** The feature layer where the new feature(s) are added. */
    featureLayer?: esri.layers.Featureesri.layers.Layer;
  }
  export interface AggregatePointsOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** A field name from pointesri.layers.Layer based on which the points will be grouped. */
    groupByField?: string;
    /** When true, the polygons that have no points within them will be returned in the output. */
    keepBoundariesWithNoPoints?: boolean;
    /** Reference to the map object. */
    map?: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The point feature layer that will be aggregated into the polygons in the polygon feature layer. */
    pointLayer: esri.layers.Featureesri.layers.Layer;
    /** The polygon layer to be shown selected in in the Choose area menu. */
    polygonLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of feature layer candidates to be selected as the input polygon layer. */
    polygonLayers: esri.layers.Featureesri.layers.Layer[];
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** An array of attribute field names and statistic types that you would like to aggregate for all points within each polygon. */
    summaryFields?: string[];
  }
  export interface ArcGISDynamicMapServiceLayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
    /** Id to assign to the layer. */
    id?: string;
    /** Represents the image parameter options. */
    imageParameters?: esri.layers.ImageParameters;
    /** infoTemplates object. */
    infoTemplates?: any;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
    /** Specify the metadata of the layer. */
    resourceInfo?: any;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution?: boolean;
    /** By default, images are exported in MIME format, and the image is streamed to the client. */
    useMapImage?: boolean;
    /** When true, the layer will update its content based on the map's time extent. */
    useMapTime?: boolean;
    /** Initial visibility of the layer. */
    visible?: boolean;
  }
  export interface ArcGISImageServiceLayerOptions {
    /** Id to assign to the layer. */
    id?: string;
    /** The image service parameter options used when exporting an Image Service layer. */
    imageServiceParameters?: esri.layers.ImageServiceParameters;
    /** The template that defines the content to display in the map info window when the user clicks on a raster. */
    infoTemplate?: esri.InfoTemplate;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** Specify the metadata of the layer. */
    resourceInfo?: any;
    /** By default, images are exported in MIME format, and the image is streamed to the client. */
    useMapImage?: boolean;
    /** When true, the layer will update its content based on the map's time extent. */
    useMapTime?: boolean;
    /** Initial visibility of the layer. */
    visible?: boolean;
  }
  export interface ArcGISTiledMapServiceLayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Lists which levels to draw. */
    displayLevels?: number;
    /** An array of objects that define areas where a tiled map service should not display tiles. */
    exclusionAreas?: any[];
    /** Id to assign to the layer. */
    id?: string;
    /** infoTemplates object. */
    infoTemplates?: any;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
    /** When true, tile resampling is enabled. */
    resampling?: boolean;
    /** Number of levels beyond the last level where tiles are available. */
    resamplingTolerance?: number;
    /** Specify the metadata of the layer. */
    resourceInfo?: any;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution?: boolean;
    /** Array of REST endpoints that can be used to retrieve tile images. */
    tileServers?: string[];
    /** Initial visibility of the layer. */
    visible?: boolean;
  }
  export interface AttributeInspectorOptions {
    /** See the object specifications table below for the structure of the layerInfos  object. */
    layerInfos: any[];
  }
  export interface AttributionOptions {
    /** String used as the delimiter between attribution items. */
    itemDelimiter?: string;
    /** Reference to the map object. */
    map: esri.Map;
  }
  export interface BasemapGalleryOptions {
    /** List of basemap layer ids in the current map. */
    basemapIds?: string[];
    /** An array of user-defined basemaps to display in the BasemapGallery. */
    basemaps?: esri.dijit.Basemap[];
    /** Specify an ArcGIS.com group that contains web maps that will be used as basemaps in the gallery. */
    basemapsGroup?: any;
    /** Specify your Bing Maps key if the basemap group you want to display in the gallery contains bing basemaps. */
    bingMapsKey?: string;
    /** Reference to the map. */
    map: esri.Map;
    /** Specify the portal url, including the instance name, used to access the group that contains the basemap gallery items. */
    portalUrl?: string;
    /** List of reference layer ids in the current map. */
    referenceIds?: string[];
    /** When true, queries ArcGIS.com to retrieve available basemaps. */
    showArcGISBasemaps?: boolean;
  }
  export interface BasemapLayerOptions {
    /** If the url points to an image service, you can specify which band ids will display. */
    bandIds?: number[];
    /** The attribution information for the layer. */
    copyright?: string;
    /** If the url points to a cached map service you can specify the levels to draw. */
    displayLevels?: number[];
    /** Specify the full extent of the layer. */
    fullExtent?: esri.geometry.Extent;
    /** Specify the initial extent of the layer. */
    initialExtent?: esri.geometry.Extent;
    /** Set to true if the layer is a reference layer and should be drawn on top of all other layers in the map. */
    isReference?: boolean;
    /** Initial opacity or transparency of the basemap layer. */
    opacity?: number;
    /** Specify subDomains where tiles are served to speed up tile retrieval (using subDomains gets around the browser limit of the max number of concurrent requests to a domain). */
    subDomains?: string[];
    /** Define the tile info for the layer including lods, rows, cols, origin and spatial reference. */
    tileInfo?: esri.layers.TileInfo;
    /** Define additional tile server domains for the layer. */
    tileServer?: string[];
    /** The type of layer, valid values are "BingMapsAerial", "BingMapsHybrid", "BingMapsRoad", "OpenStreetMap", or "WebTiledLayer". */
    type?: string;
    /** URL to the ArcGIS Server REST resource that represents a map or image service. */
    url?: string;
    /** If the url points to a dynamic map service you can specify a subset of layers to display. */
    visibleLayers?: number[];
  }
  export interface BasemapOptions {
    /** The id of the basemap. */
    id?: string;
    /** An array of layers to add to the basemap. */
    layers: esri.dijit.Basemapesri.layers.Layer[];
    /** A URL to a thumbnail image for the basemap that will be displayed in the BasemapGallery. */
    thumbnailUrl?: string;
    /** Title for the basemap. */
    title?: string;
  }
  export interface BasemapToggleOptions {
    /** The secondary basemap to toggle to. */
    basemap?: string;
    /** Object containing the labels and URLs for the image of each basemap. */
    basemaps?: any;
    /** esri.Map object that this dijit is associated with. */
    map: esri.Map;
    /** Class used for styling the widget. */
    theme?: string;
    /** Whether the widget is visible by default. */
    visible?: boolean;
  }
  export interface BookmarksOptions {
    /** An array of esri.dijit.BookmarkItem objects or a json object with the esri.dijit.BookmarkItem format to initially display in the bookmark widget. */
    bookmarks?: esri.dijit.BookmarkItem[];
    /** When true, users can add, remove and edit bookmark items. */
    editable?: boolean;
    /** Reference to the map. */
    map: esri.Map;
  }
  export interface CSVLayerOptions {
    /** The column delimiter. */
    columnDelimiter?: string;
    /** Copyright information for the layer. */
    copyright?: string;
    /** The fields property contains objects with "name", "alias" and "type" String properties. */
    fields?: any[];
    /** The latitude field name. */
    latitudeFieldName?: string;
    /** The longitude field name. */
    longitudeFieldName?: string;
    /** An array of strings which correspond to fields to include in the CSVLayer. */
    outFields?: string[];
  }
  export interface CircleOptions1 {
    /** Applicable when the spatial reference of the center point is either set to Web Mercator or geographic/geodesic as true would apply. */
    geodesic?: boolean;
    /** A circle can be thought of similar to a polygon. */
    numberOfPoints?: number;
    /** Radius of the circle. */
    radius?: number;
    /** Unit of the radius. */
    radiusUnit?: esri.Units;
  }
  export interface CircleOptions2 {
    /** The center point of the circle. */
    center: any;
    /** Applicable when the spatial reference of the center point is either set to Web Mercator or geographic/geodesic as true would apply. */
    geodesic?: boolean;
    /** A circle can be thought of similar to a polygon. */
    numberOfPoints?: number;
    /** The radius of the circle. */
    radius?: number;
    /** Unit of the radius. */
    radiusUnit?: esri.Units;
  }
  export interface CoordinatesLocationProviderOptions {
    /** The attribute field in the graphic object that contains the longitude (X) values. */
    xField: string;
    /** The attribute field in the graphic object that has the latitude (Y) values. */
    yField: string;
  }
  export interface CreateBuffersOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** An array of buffer distances to buffer the input feature layer. */
    bufferDistance?: number[];
    /** The input point, line, or polygon feature layer to be buffered. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map?: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: string;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
  }
  export interface CreateDriveTimeAreasOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The units of the breakValues parameter. */
    breakUnits?: string;
    /** An array of driving time break values. */
    breakValues?: number[];
    /** The point feature layer around which drive-time areas will be drawn. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** The geometry type of the input layer. */
    inputType?: string;
    /** Reference to the map object. */
    map?: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The rule of overlap. */
    overlapPolicy?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
  }
  export interface CutOptions {
    /** The feature(s) added to the feature layer by the cut operation. */
    addedGraphics?: esri.Graphic[];
    /** The feature layer that contains the cut feature(s). */
    featureLayer?: esri.layers.Featureesri.layers.Layer;
    /** The updated feature(s). */
    postUpdatedGraphics?: esri.Graphic[];
    /** The feature(s) before the cut operation is performed. */
    preUpdatedGraphics?: esri.Graphic[];
  }
  export interface DataAdapterFeatureLayerOptions {
    /** The query parameters to use in retrieving the data through the DataAdapter. */
    dataAdapterQuery: any;
    /** An instance of the LocationProvider class. */
    locationProvider: esri.tasks.locationproviders.LocationProviderBase;
  }
  export interface DataBrowserOptions {
    /** Show/hide country drop down. */
    countryBox?: boolean;
    /** Two-digit country code selected in the country drop down. */
    countryID?: string;
    /** Selected variables array. */
    selection?: string[];
    /** Title to show in the top left hand corner. */
    title?: string;
  }
  export interface DeleteOptions {
    /** The features that were removed from the feature layer. */
    deletedGraphics?: esri.Graphic[];
    /** The feature layer from which the feature(s) are removed. */
    featureLayer?: esri.layers.Featureesri.layers.Layer;
  }
  export interface DirectionsOptions {
    /** Defines the values that label each stop. */
    alphabet?: any;
    /** When true, solve will start when the last destination is complete and enter key is hit. */
    autoSolve?: boolean;
    /** Display the 'Add Destination' button. */
    canModifyStops?: boolean;
    /** Center the map at the start of the selected route segment. */
    centerAtSegmentStart?: boolean;
    /** The returned directions object from the routing solve result. */
    directions?: any;
    /** Length units. */
    directionsLengthUnits?: string;
    /** Enable the dragging of stop locations on the map. */
    dragging?: boolean;
    /** Focus the cursor in the stop input when a new stop is added. */
    focusOnNewStop?: boolean;
    /** The symbol that is used to denote the start location on the map. */
    fromSymbol?: esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol;
    /** The symbol that displays when the from location is dragged to a new location. */
    fromSymbolDrag?: esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol;
    /** Define optional geocoder options view the esri.dijit.Geocoder help for details on the object properties. */
    geocoderOptions?: any;
    /** List of esri.dijit.Geocoder widgets used for each stop. */
    geocoders?: esri.dijit.Geocoder[];
    /** If available, this geometry service is used to provide latitude/longitude values for stops whose reverse geocoding did not return an address (Added at v3.11). */
    geometryTaskUrl?: string;
    /** Reference to the map object. */
    map: esri.Map;
    /** Maximum number of stops. */
    maxStops?: number;
    /** Minimum number of stops. */
    minStops?: number;
    /** When true, stops on the route are re-ordered to provide an optimal route. */
    optimalRoute?: boolean;
    /** URL link to a custom print page. */
    printPage?: string;
    /** If available, this print task is used to display an overview map of the route on the directions print page (Added at v3.11). */
    printTaskUrl?: string;
    /** HTML string for providing a custom printing page */
    printTemplate?: string;
    /** When true, the route will return to start point. */
    returnToStart?: boolean;
    /** Specify the input parameters for the route task. */
    routeParams?: esri.tasks.RouteParameters;
    /** Define the symbol used to draw the route on the map. */
    routeSymbol?: esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol;
    /** Specify the service that will be used to calculate directions. */
    routeTaskUrl?: string;
    /** Define the info template for the popup that appears when the popup for a route segment is displayed. */
    segmentInfoTemplate?: esri.InfoTemplate;
    /** Specify the symbol used to render the individual route segments that display on the map when a direction step is clicked. */
    segmentSymbol?: esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol;
    /** If true, the Clear button is shown. */
    showClearButton?: boolean;
    /** If true, the toggle button group allowing user to choose between Miles and Kilometers is shown. */
    showMilesKilometersOption?: boolean;
    /** When true, the Optimize order option is shown. */
    showOptimalRouteOption?: boolean;
    /** When true the 'Print' button is displayed that allows users to display driving directions in a print page. */
    showPrintPage?: boolean;
    /** When true, the Return to start option is shown. */
    showReturnToStartOption?: boolean;
    /** Display the 'Show Reverse Stops' button. */
    showReverseStopsButton?: boolean;
    /** Highlight the route segment when a directions step is clicked. */
    showSegmentHighlight?: boolean;
    /** Display a popup with segment details when a direction step is clicked. */
    showSegmentPopup?: boolean;
    /** When true, the Use traffic option is shown. */
    showTrafficOption?: boolean;
    /** If true, and six Standard Travel Modes are supported by the service and accessible using current credentials, then two toggle button groups are shown: one to allow user to choose between Driving a Car, a Truck, and Walking, and one more group to choose between Fastest and Shortest routes. */
    showTravelModesOption?: boolean;
    /** True if currently calculating the route from the routing service. */
    solving?: boolean;
    /** List of graphics used to display the point marker. */
    stopGraphics?: esri.Graphic[];
    /** An array of points that define the stop locations. */
    stops?: any;
    /** Define the info template for the popup that appears when a stop is clicked. */
    stopsInfoTemplate?: esri.InfoTemplate;
    /** The symbol that displays on the map for the locations between the origin and final destination locations. */
    stopSymbol?: esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol;
    /** The symbol that displays when an intermediate location is dragged to a new location. */
    stopSymbolDrag?: esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol;
    /** List of graphics used to display the text over the point marker. */
    textGraphics?: esri.Graphic[];
    /** The text color for the text that appears for each destination. */
    textSymbolColor?: esri.Color;
    /** The font used for the text that displays on the map for each stop location. */
    textSymbolFont?: esri.symbols.Font;
    /** Define an x and/or y offset for the text symbols that are used for the stop locations on the map. */
    textSymbolOffset?: any;
    /** Specify a theme for the widget. */
    theme?: string;
    /** The symbol that is used to denote the final destination location on the map. */
    toSymbol?: esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol;
    /** The symbol that displays when an final destination location is dragged to a new location. */
    toSymbolDrag?: esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol;
    /** When true, real-time traffic is used to plan the route. */
    traffic?: boolean;
    /** The traffic layer used for real-time traffic. */
    trafficLayer?: esri.layers.ArcGISDynamicMapServiceesri.layers.Layer;
  }
  export interface DissolveBoundariesOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** An array of field names based on which polygons are merged. */
    dissolveFields?: string[];
    /** The layer containing polygon features that will be dissolved. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map?: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** An array of field names and statistical summary types that you wish to calculate from the polygons that are dissolved together. */
    summaryFields?: string[];
  }
  export interface DotDensityRendererOptions {
    /** The color to be used for the background of the symbol. */
    backgroundColor?: esri.Color;
    /** The shape to be used for the dot. */
    dotShape?: string;
    /** The size of the dot in pixels. */
    dotSize?: number;
    /** The value that a dot represents. */
    dotValue: number;
    /** An array of objects, where each object defines a field to be mapped and its color. */
    fields: any[];
    /** The line symbol to use on the outline of the feature. */
    outline?: esri.symbols.Lineesri.symbols.Symbol;
  }
  export interface DrawOptions {
    /** Determines how much time to wait before adding a new point when using a freehand tool. */
    drawTime?: number;
    /** If true, tooltips are displayed when creating new graphics with the draw toolbar. */
    showTooltips?: boolean;
    /** Determines how far the mouse moves before adding a new point when using one of the freehand tools. */
    tolerance?: number;
    /** Determines how far to offset the tool tip from the mouse pointer. */
    tooltipOffset?: number;
  }
  export interface DriveBufferOptions {
    /** The radii to use to create ring buffers */
    radius: number[];
    /** The units of the radii. */
    units: string;
  }
  export interface EditOptions {
    /** Specifies whether users can add new vertices. */
    allowAddVertices?: boolean;
    /** Specifies whether users can delete vertices. */
    allowDeletevertices?: boolean;
    /** Line symbol used to draw the guild lines, displayed when moving vertices. */
    ghostLineSymbol?: esri.symbols.Lineesri.symbols.Symbol;
    /** Marker symbol used to display the insertable vertices. */
    ghostVertexSymbol?: esri.symbols.Markeresri.symbols.Symbol;
    /** If users want to place the text symbol editor to a user defined HTML element. */
    textSymbolEditorHolder?: any;
    /** When true, if the geometry is re-sized the aspect ration will be preserved. */
    uniformScaling?: boolean;
    /** Marker symbol used to draw the vertices. */
    vertexSymbol?: esri.symbols.Markeresri.symbols.Symbol;
  }
  export interface EditorOptions {
    /** Create a new settings object that defines the capabilities of the widget. */
    settings?: any;
  }
  export interface EnrichLayerOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** An buffer distance or driving time value to buffer the input feature layer. */
    distance?: number;
    /** When true, Travel Modes (Driving Time) is enabled for inputesri.layers.Layer with point geometries (esriGeometryPoint). */
    enableTravelModes?: boolean;
    /** The input feature layer to enrich with new data. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map?: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** When true, you can specify a time for traffic condition under Define areas to enrich - Driving Time. */
    showTrafficWidget?: boolean;
  }
  export interface ExtractDataOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** If true, the Clip features option in Study area will be ckecked. */
    clip?: boolean;
    /** The format of output data shown as the default selection in the Output data format menu. */
    dataFormat?: string;
    /** An array for feature layers to be extracted. */
    featureLayers: esri.layers.Featureesri.layers.Layer[];
    /** An array for feature layers to be extracted. */
    inputLayers?: esri.layers.Featureesri.layers.Layer[];
    /** Reference to the map object. */
    map?: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
  }
  export interface FeatureLayerOptions {
    /** Enable or disable the auto generalization of features from a non-editable layer in on-demand mode. */
    autoGeneralize?: boolean;
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Where clause to use as definition expression for layer. */
    definitionExpression?: string;
    /** When true, graphics are displayed during panning. */
    displayOnPan?: boolean;
    /** Set a callback function that will be invoked by  FeatureLayer.getEditSummary. */
    editSummaryCallback?: Function;
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
    /** Unique ID to assign to the layer. */
    id?: string;
    /** The template that defines the content to display in the map info window when the user clicks on a feature. */
    infoTemplate?: esri.InfoTemplate;
    /** The maximum allowable offset, only applicable for layers that are not editable. */
    maxAllowableOffset?: number;
    /** The query mode for the feature layer. */
    mode?: number;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** One or more fields used to order features by - for queries as well as for rendering. */
    orderByFields?: string[];
    /** An array of strings which correspond to fields to include in the FeatureLayer. */
    outFields?: string[];
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
    /** Specify the metadata of the layer. */
    resourceInfo?: any;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution?: boolean;
    /** Indicates whether to show labels on the layer. */
    showLabels?: boolean;
    /** The dynamic layer or table source. */
    source?: esri.layers.LayerSource;
    /** Specify the size of the virtual tiles, used in on-demand mode. */
    tileHeight?: number;
    /** Specify the size of the virtual tiles, used in on-demand mode. */
    tileWidth?: number;
    /** The name of the trackIdField. */
    trackIdField?: string;
    /** When true, the layer will update its content based on the map's time extent. */
    useMapTime?: boolean;
    /** Initial visibility of the layer. */
    visible?: boolean;
  }
  export interface FeatureTableOptions {
    /** A dGrid property. */
    allowSelectAll?: boolean;
    /** A dGrid property. */
    cellNavigation?: boolean;
    /** Object defining the date options specific for the table. */
    dateOptions?: any;
    /** The featureesri.layers.Layer that the table is associated with. */
    featureLayer: esri.layers.Featureesri.layers.Layer;
    /** Columns to hide by default using the dGrid ColumnHider extension. */
    hiddenFields?: string[];
    /** A reference to the Map. */
    map?: esri.Map;
    /** A dGrid property. */
    noDataMessage?: string;
    /** A dGrid property. */
    selectionMode?: string;
  }
  export interface FindHotSpotsOptions {
    /** An array of feature layer candidates to be selected as the aggregation polygon layer. */
    aggregationPolygonLayers: esri.layers.Featureesri.layers.Layer[];
    /** The numeric field in the Analysisesri.layers.Layer that will be analyzed. */
    analysisField?: string;
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The feature layer for which hot spots will be calculated. */
    analysisLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of feature layer candidates to be selected as the bounding polygon layer. */
    boundingPolygonLayers: esri.layers.Featureesri.layers.Layer[];
    /** When true, make process info to get analysis report. */
    isProcessInfo?: boolean;
    /** Reference to the map object. */
    map?: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
  }
  export interface FindNearestOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The feature layer from which the nearest features are found. */
    analysisLayer: esri.layers.Featureesri.layers.Layer;
    /** When true, Travel Modes ( Driving Distance, Driving Time) are enabled for analysisesri.layers.Layer with point geometries (esriGeometryPoint). */
    enableTravelModes?: boolean;
    /** Reference to the map object. */
    map?: esri.Map;
    /** The maximum number of nearest locations to find for each feature in analysisLayer. */
    maxCount?: number;
    /** The feature layer to be shown selected in the "1. */
    nearLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of near layer candidates. */
    nearLayers: esri.layers.Featureesri.layers.Layer[];
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** The maximum range to search for nearest locations from each feature in the analysisLayer. */
    searchCutoff?: number;
    /** The units of the searchCutoff parameter. */
    searchCutoffUnits?: string;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
  }
  export interface FindTaskOptions {
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
  }
  export interface GalleryOptions {
    /** An array of items, see example below. */
    items: any[];
    /** Display the title for each item in the gallery. */
    showTitle?: boolean;
    /** Specify the size of the gallery's thumbnail image. */
    thumbnailStyle?: string;
  }
  export interface GaugeOptions {
    /** Text to display at the bottom of the gauge. */
    caption?: string;
    /** esri.Color used for the arc indicator on the gauge. */
    color?: string;
    /** Name of the attribute field used to drive the gauge. */
    dataField?: string;
    /** Either "value" or "percentage". */
    dataFormat?: string;
    /** Name of the attribute field used to display a feature name on the gauge. */
    dataLabelField?: string;
    /** When true, the gauge is created with JSON from an ArcGIS Online webmap. */
    fromWebmap?: boolean;
    /** A esri.layers.esri.layers.Graphicsesri.layers.Layer or esri.layers.esri.layers.Featureesri.layers.Layer used to drive the gauge. */
    layer?: esri.layers.Graphicsesri.layers.Layer;
    /** Maximum value that will be displayed on the gauge. */
    maxDataValue?: number;
    /** The text to display when a feature does not not a value for the dataLabelField. */
    noDataLabel?: string;
    /** Object passed to dojo.number.format to specify how data values are formatted. */
    numberFormat?: any;
    /** Text displayed above the gauge. */
    title?: string;
    /** What to dsiplay after the value of the currently selected feature. */
    unitLabel?: string;
  }
  export interface GenerateRendererTaskOptions {
    /** Prior to ArcGIS Server 10.2, map server/feature service only sample 1000 features to generate the renderer when using Generateesri.renderers.Renderer operation, which mean if there are more than 1000 features, it may run into the case that some feature will not be categorized into any breaks/unique values. */
    checkValueRange?: boolean;
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
  }
  export interface GeoRSSLayerOptions {
    /** The template used to display popup window for identify operation. */
    infoTemplate?: esri.InfoTemplate;
    /** The output spatial reference for the GeoRSSLayer. */
    outSpatialReference?: esri.SpatialReference;
    /** The default symbol use to display point features. */
    pointSymbol?: esri.symbols.Symbol;
    /** The default symbol used to display polygon features. */
    polygonSymbol?: esri.symbols.Symbol;
    /** The default symbol used to display polyline features. */
    polylineSymbol?: esri.symbols.Symbol;
  }
  export interface GeocoderOptions {
    /** By default, the esri.dijit.Geocoder widget uses the Esri World esri.tasks.Locator to find search locations. */
    arcgisGeocoder?: any;
    /** When false, the geocoder will not display the auto-complete results menu. */
    autoComplete?: boolean;
    /** When false, the geolocator will not navigate to the result after selection or search. */
    autoNavigate?: boolean;
    /** When false, the geocoder menu will not be displayed when more than one geocoder is set. */
    geocoderMenu?: boolean;
    /** Defines the geocoders that will be used by the esri.dijit.Geocoder widget. */
    geocoders?: any[];
    /** Specify a graphicsesri.layers.Layer to use when  highlightesri.symbols.Symbol is true. */
    graphicsLayer?: esri.layers.Graphicsesri.layers.Layer;
    /** Indicates whether to show a graphic at a selected location. */
    highlightLocation?: boolean;
    /** Reference to the map. */
    map: esri.Map;
    /** Maximum number of results to return. */
    maxLocations?: number;
    /** Minimum number of characters entered into the search field before querying for results. */
    minCharacters?: number;
    /** Number of milliseconds before querying for results will begin. */
    searchDelay?: number;
    /** When false, the geocoder will not show search suggestions while typing. */
    showResults?: boolean;
    /** esri.symbols.Symbol to use when highlightLocation is true. */
    symbol?: esri.symbols.Symbol;
    /** Specify a theme for the geocoder. */
    theme?: string;
    /** Start the geocoder with a default value. */
    value?: string;
    /** Scale to zoom to when geocoder does not return an extent. */
    zoomScale?: number;
  }
  export interface GraphicsLayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** List of attribute fields to be added as custom data attributes to graphics node. */
    dataAttributes?: any;
    /** When true, graphics are displayed during panning. */
    displayOnPan?: boolean;
    /** Id to assign to the layer. */
    id?: string;
    /** The info template for the layer. */
    infoTemplate?: esri.InfoTemplate;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
    /** Indicates whether the layer is responsible for styling graphics. */
    styling?: boolean;
    /** Initial visibility of the layer. */
    visible?: boolean;
  }
  export interface Handle {
    /** Remove the listener */
    remove(): void;
  }
  export interface HeatmapRendererOptions {
    /** The radius (in pixels) of the circle over which the majority of each points value is spread out over. */
    blurRadius?: number;
    /** An array of CSS color strings (#RGB, #RRGGBB, rgb(r,g,b), rgba(r,g,b,a)). */
    colors: string[];
    /** The name of the attribute field used to weight the heatmap points. */
    field?: string;
    /** The pixel intensity value which is assigned the final color in the color ramp. */
    maxPixelIntensity?: number;
    /** The pixel intensity value which is assigned the initial color in the color ramp. */
    minPixelIntensity?: number;
  }
  export interface HistogramTimeSliderOptions {
    /** Change color of histogram bars, default is "rgb(5, 112, 176)".color: "#555555" */
    color?: string;
    /** Formats dates displayed by histogram slider.dateFormat: "DateFormat(selector: 'date', fullYear: true)" */
    dateFormat?: string;
    /** Array of feature layers to be used by slider. */
    layers?: esri.layers.Layer[];
    /** With a stream layer, when the number of points on the map exceeds the maximum number allowed, this histogram will start removing bins at the beginning of the array if in the "show_partial" mode. */
    mode?: string;
    /** Sets resolution for histogram slider (seconds/minutes/hours/etc) using Esri date formats. */
    timeInterval?: string;
  }
  export interface HomeButtonOptions {
    /** The extent used to zoom to when clicked. */
    extent?: esri.geometry.Extent;
    /** esri.Map object that this dijit is associated with. */
    map: esri.Map;
    /** Class used for styling the widget. */
    theme?: string;
    /** Whether the widget is visible by default. */
    visible?: boolean;
  }
  export interface IdentifyTaskOptions {
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
  }
  export interface KMLLayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** The output spatial reference for the KMLLayer. */
    outSR?: esri.SpatialReference;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
  }
  export interface LabelLayerOptions {
    /** ID assigned to the layer. */
    id?: string;
    /** Display mode for the label layer. */
    mode?: string;
  }
  export interface LayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution?: boolean;
  }
  export interface LayerSwipeOptions {
    /** The number of pixels to clip the swipe tool. */
    clip?: number;
    /** If the widget is enabled and layers can be swiped. */
    enabled?: boolean;
    /** The layers to be swiped. */
    layers: esri.layers.Layer[];
    /** The number of pixels to place the tool from the left of the map. */
    left?: number;
    /** esri.Map object that this dijit is associated with. */
    map: esri.Map;
    /** Class used for styling the widget. */
    theme?: string;
    /** The number of pixels to place the tool from the top of the map. */
    top?: number;
    /** Type of swipe tool to use. */
    type?: string;
  }
  export interface LegendOptions {
    /** Specify the alignment of the legend within the HTML element where the legend is rendered. */
    arrangement?: number;
    /** When false, the legend will not automatically update if the map changes scale or when layers are added are removed from the map. */
    autoUpdate?: boolean;
    /** Specify a subset of the layers in the map to display in the legend. */
    layerInfos?: any[];
    /** Reference to the map. */
    map: esri.Map;
    /** When true the legend will update with every scale change and displays only the layers and sub layers that are visible in the current map scale. */
    respectCurrentMapScale?: boolean;
  }
  export interface LocateButtonOptions {
    /** Centers the map to the location when a new position is returned. */
    centerAt?: boolean;
    /** The HTML5 Geolocation Position options for locating. */
    geolocationOptions?: any;
    /** If highlightLocation is on and this property is set then a graphic will be added to this layer instead of map.graphics. */
    graphicsLayer?: esri.layers.Graphicsesri.layers.Layer;
    /** If true, the users location will be highlighted with a point. */
    highlightLocation?: boolean;
    /** The infoTemplate used for the highlight graphic. */
    infoTemplate?: esri.InfoTemplate;
    /** esri.Map object that this dijit is associated with. */
    map: esri.Map;
    /** The scale to zoom to when a users location has been found. */
    scale?: number;
    /** Sets the maps scale when a new position is returned. */
    setScale?: boolean;
    /** The symbol used on the highlight graphic to highlight the users location on the map. */
    symbol?: esri.symbols.Symbol;
    /** Class used for styling the widget. */
    theme?: string;
    /** When enabled, the button becomes a toggle that creates an event to watch for location changes. */
    useTracking?: boolean;
    /** Whether the widget is visible by default. */
    visible?: boolean;
  }
  export interface MapImageOptions {
    /** Specfiy an extent for the image. */
    extent?: esri.geometry.Extent;
    /** Specify the url of the image. */
    href?: string;
  }
  export interface MapOptions {
    /** Width of the attribution node relative to the map width. */
    attributionWidth?: number;
    /** When true the map will automatically resize when the browser window is resized or when the ContentPane widget enclosing the map is resized. */
    autoResize?: boolean;
    /** Specify a basemap for the map. */
    basemap?: string;
    /** The location where the map should be centered. */
    center?: any;
    /** When true, graphics are displayed during panning. */
    displayGraphicsOnPan?: boolean;
    /** If provided, the extent and projection of the map is set to the properties of Extent. */
    extent?: esri.geometry.Extent;
    /** When true a fade effect is enabled for supported layers. */
    fadeOnZoom?: boolean;
    /** When true, for maps that contain tiled map service layers, you are guaranteed to have the initial extent defined using the extent constructor option shown completely on the map. */
    fitExtent?: boolean;
    /** When the mapNavigation mode is set to 'css-transforms', CSS3 transforms will be used for map navigation when supported by the browser. */
    force3DTransforms?: boolean;
    /** By default the map creates and uses an out-of-the-box esri/dijit/Popup. */
    infoWindow?: esri.InfoWindowBase;
    /** If provided, the map is initialized with the specified levels of detail. */
    lods?: esri.layers.LOD[];
    /** Display the esri.esri logo on the map. */
    logo?: boolean;
    /** Maximum visible scale of the map. */
    maxScale?: number;
    /** Maximum map zoom level. */
    maxZoom?: number;
    /** Minimum visible scale of the map. */
    minScale?: number;
    /** Minimum map zoom level. */
    minZoom?: number;
    /** Displays pan buttons on map. */
    nav?: boolean;
    /** Specify whether or not to use CSS3 transformations when panning and zooming. */
    navigationMode?: string;
    /** Default value is true, indicating that the map will skip panning animation when calling map.centerAt() or map.setExtent() (for map.setExtent(), the animation is only skipped if the map's zoom level is not changing) if the panning distance is twice the distance of the current extent. */
    optimizePanAnimation?: boolean;
    /** Specify a time period in milliseconds to ignore repeated calls to the resize method. */
    resizeDelay?: number;
    /** Initial map scale. */
    scale?: number;
    /** Enable or disable map attribution display. */
    showAttribution?: boolean;
    /** If true and a map click event occurs, it may show the map's infoWindow. */
    showInfoWindowOnClick?: boolean;
    /** Indicate whether to display labels. */
    showLabels?: boolean;
    /** Displays a slider on the map. */
    slider?: boolean;
    /** Define labels for the slider. */
    sliderLabels?: string[];
    /** Orientation of the zoom slider. */
    sliderOrientation?: string;
    /** Position of the zoom slider within the map control. */
    sliderPosition?: string;
    /** Defines the slider style. */
    sliderStyle?: string;
    /** When true, for Apple computers with a trackpad or magic mouse use, swipe pans instead of zooming. */
    smartNavigation?: boolean;
    /** When true, supports continuous pan across the dateline. */
    wrapAround180?: boolean;
    /** Initial zoom level of the map. */
    zoom?: number;
  }
  export interface MeasurementOptions {
    /** Flag for showing full list of units in the Location tool. */
    advancedLocationUnits?: boolean;
    /** The default area unit for the measure area tool. */
    defaultAreaUnit?: esri.Units;
    /** The default length unit for the measure distance tool. */
    defaultLengthUnit?: esri.Units;
    /** Allows the user to immediately measure previously-created geometry on dijit creation. */
    geometry?: any;
    /** Line symbol used to draw the lines for the measure line and measure distance tools. */
    lineSymbol?: esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol;
    /** Reference to the map. */
    map: esri.Map;
    /** Marker symbol used to draw the points for the measure line tool. */
    pointSymbol?: esri.symbols.Markeresri.symbols.Symbol;
  }
  export interface MergeLayersOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The feature layer to be merged with the mergeLayer. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map?: esri.Map;
    /** An array of feature layer candidates to be selected as the merge layer. */
    mergeLayers: esri.layers.Featureesri.layers.Layer[];
    /** An array of values that describe how fields from the mergeesri.layers.Layer are to be modified. */
    mergingAttributes?: string[];
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
  }
  /** Constants representing how the geometry is returned. */
  export interface NAOutputLine {
    /** Do not return geometries. */
    NONE: any;
    /** Return polylines containing striaght lines between input locations. */
    STRAIGHT: any;
    /** Return polylines based on the underlying street geometries. */
    TRUE_SHAPE: any;
    /** Return polylines based on the underlying street geometries with the M values set based on the accumulated impedance at each vertex. */
    TRUE_SHAPE_WITH_MEASURE: any;
  }
  /** Constants representing how the geometry is returned. */
  export interface NAOutputesri.geometry.Polygon {
    /** Detailed output polygons */
    DETAILED: any;
    /** No output polygons */
    NONE: any;
    /** Simplified output polygons. */
    SIMPLIFIED: any;
  }
  /** Constants representing directionality in network analysis. */
  export interface NATravelDirection {
    /** Travel direction from the facility */
    FROM_FACILITY: any;
    /** Travel direction to the facility */
    TO_FACILITY: any;
  }
  /** Constants representing how U-Turns are handled. */
  export interface NAUTurn {
    /** Allow u-turns at the end of any street. */
    ALLOW_BACKTRACK: any;
    /** Allow u-turns at dead ends and intersections. */
    AT_DEAD_ENDS_AND_INTERSECTIONS: any;
    /** Only allow u-turns at dead ends where a street is not connected to another street. */
    AT_DEAD_ENDS_ONLY: any;
    /** Do not allow u-turns at the end of any streets. */
    NO_BACKTRACK: any;
  }
  export interface OAuthInfoOptions {
    /** The registered application Id. */
    appId: string;
    /** Applications with the same value will share the stored token on the same host. */
    authNamespace?: string;
    /** The number of minutes the token will be valid for. */
    expiration?: number;
    /** The locale for the OAuth sign in page. */
    locale?: string;
    /** The minimum time in minutes before a saved token is due to expire that it should still be considered valid for use. */
    minTimeUntilExpiration?: number;
    /** Set to true to show the OAuth sign in page in a popup window. */
    popup?: boolean;
    /** The relative page URL for the user to be sent to from the OAuth sign in page. */
    popupCallbackUrl?: string;
    /** The window features passed to window.open(). */
    popupWindowFeatures?: string;
    /** The ArcGIS for Portal URL. */
    portalUrl?: string;
  }
  export interface OpenStreetMapLayerOptions {
    /** An array of levels at which to draw. */
    displayLevels?: number[];
    /** Id to assign to the layer. */
    id?: string;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** When true, tile resampling is enabled. */
    resampling?: boolean;
    /** Number of levels beyond the last level where tiles are available. */
    resamplingTolerance?: number;
    /** An array of tile servers */
    tileServers?: string[];
    /** Initial visibility of the layer. */
    visible?: boolean;
  }
  export interface OperationBaseOptions {
    /** Provide information about the operation. */
    label?: string;
    /** Specify the type of operation, for example: "edit" or "navigation". */
    type?: string;
  }
  export interface OverlayLayersOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The feature layer that will be overlayed with the overlayLayer. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map?: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** An array of feature layers to be overlaid with inputLayer. */
    overlayLayer: esri.layers.Featureesri.layers.Layer[];
    /** Defines how two input layers are combined. */
    overlayType?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** When the distance between features is less than the tolerance, the features in the overlay layer will snap to the features in the input layer. */
    snapToInput?: boolean;
    /** The minimum distance separating all feature coordinates (nodes and vertices) as well as the distance a coordinate can move in X or Y (or both). */
    tolerance?: number;
  }
  export interface OverviewMapOptions {
    /** Specifies which corner of the map to attach the Overviewesri.Map dijit. */
    attachTo?: string;
    /** Specify the base layer for the overview map. */
    baseLayer?: esri.layers.Layer;
    /** Fill color for the extent rectangle. */
    color?: string;
    /** The ratio between the size of the overview map and the extent rectangle displayed on the overview map. */
    expandFactor?: number;
    /** Height of the overview map dijit in screen pixels. */
    height?: number;
    /** Unique identifier for the dijit. */
    id?: string;
    /** Reference to the map. */
    map: esri.Map;
    /** Defines the visibility of the maximize/restore button. */
    maximizeButton?: boolean;
    /** Opacity of the extent rectangle, defined as a number between 0 (invisible) and 1 (opaque). */
    opacity?: number;
    /** Specifies the initial visibility of the overview map. */
    visible?: boolean;
    /** Width of the overview map dijit in screen pixels. */
    width?: number;
  }
  export interface PopupMobileOptions {
    /** Define the symbol used to highlight polygon features. */
    fillSymbol?: Fillesri.symbols.Symbol;
    /** When true, the feature is highlighted, set to false to disable highlighting. */
    highlight?: boolean;
    /** Define the symbol used to highlight line features. */
    lineSymbol?: esri.symbols.Lineesri.symbols.Symbol;
    /** Specify the margin (in pixels) to leave to the left of the popup window when it is maximized. */
    marginLeft?: number;
    /** Specify the margin (in pixels) to leave at the top of the popup window when it is maximized. */
    marginTop?: number;
    /** Define the marker symbol used to highlight point features. */
    markerSymbol?: esri.symbols.Markeresri.symbols.Symbol;
    /** Specify the x-offset (in pixels) used when positioning the popup. */
    offsetX?: number;
    /** Specify the y-offset (in pixels) used when positioning the popup. */
    offsetY?: number;
    /** Define the number of levels to zoom in, default value is 4. */
    zoomFactor?: number;
  }
  export interface PopupOptions {
    /** Controls the placement of the popup window with respect to the geographic location. */
    anchor?: string;
    /** Define the symbol used to highlight polygon features. */
    fillSymbol?: Fillesri.symbols.Symbol;
    /** Number of milliseconds after which the popup window will be hidden when visibleWhenEmpty is false and there are no features to be displayed. */
    hideDelay?: boolean;
    /** Indicates whether popup should highlight features. */
    highlight?: boolean;
    /** Indicates whether a feature should remain highlighted after the user closes the popup window. */
    keepHighlightOnHide?: boolean;
    /** Define the symbol used to highlight line features. */
    lineSymbol?: esri.symbols.Lineesri.symbols.Symbol;
    /** Specify the margin (in pixels) to leave to the left of the popup window when it is maximized. */
    marginLeft?: number;
    /** Specify the margin (in pixels) to leave at the top of the popup window when it is maximized. */
    marginTop?: number;
    /** Define the marker symbol used to highlight point features. */
    markerSymbol?: esri.symbols.Markeresri.symbols.Symbol;
    /** Specify the x-offset (in pixels) used when positioning the popup. */
    offsetX?: number;
    /** Specify the y-offset (in pixels) used when positioning the popup. */
    offsetY?: number;
    /** Indicates whether popup should display previous and next buttons in the title bar. */
    pagingControls?: boolean;
    /** Indicates whether popup should display the title bar text that contains the page number and total number of available features. */
    pagingInfo?: boolean;
    /** Indicates whether the popup window should be displayed. */
    popupWindow?: boolean;
    /** Indicates whether the feature's title should display within the body of the popup window as opposed to in the titlebar. */
    titleInBody?: boolean;
    /** Indicates whether the popup window remains visible when there are no features to be displayed. */
    visibleWhenEmpty?: boolean;
    /** Define the number of levels to zoom in when the 'Zoom to' link is clicked. */
    zoomFactor?: number;
  }
  export interface PopupTemplateOptions {
    /** Positive or negative offset (in minutes) from UTC. */
    utcOffset?: number;
  }
  export interface PrintOptions {
    /** Set to true if the print service is an asynchronous geoprocessing service. */
    async?: boolean;
    /** The map to  print. */
    map?: esri.Map;
    /** An optional array of user-defined templates. */
    templates?: esri.tasks.PrintTemplate[];
    /** The url to an export web map task. */
    url?: string;
  }
  export interface PrintTaskOptions {
    /** Set to true if the print service is an asynchronous geoprocessing service. */
    async?: boolean;
  }
  export interface ProcessorOptions {
    /** Start processing features immediately. */
    autostart?: boolean;
    /** Whether the processor allow the feature layer to draw its features. */
    drawFeatures?: boolean;
    /** Whether the processor do the layer's I/O via a worker. */
    fetchWithWorker?: boolean;
    /** A esri.layers.Featureesri.layers.Layer or array of FeatureLayers to attach the processor to. */
    layers?: esri.layers.Featureesri.layers.Layer[];
    /** Uses all FeatureLayers associated with the map in the processor. */
    map?: esri.Map;
    /** Whether the processor pass the features through without modification or delay to the FeatureLayer. */
    passFeatures?: boolean;
    /** Whether the processor require Workers to function properly. */
    requireWorkerSupport?: boolean;
  }
  export interface QueryTaskOptions {
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
  }
  export interface RingBufferOptions {
    /** The radii to use to create ring buffers */
    radii: number[];
    /** The units of the radii. */
    units: string;
  }
  export interface ScaleDependentRendererOptions {
    /** An array of objects where each object defines a renderer and  the zoom or scale range to which it applies. */
    rendererInfos?: any[];
  }
  export interface ScalebarOptions {
    /** Specify the scalebar position on the map. */
    attachTo?: string;
    /** Reference to the map. */
    map: esri.Map;
    /** Specify the style for the scalebar. */
    scalebarStyle?: string;
    /** Specify the scalebar units. */
    scalebarUnit?: string;
  }
  export interface SnappingManagerOptions {
    /** When true, snapping is always enabled. */
    alwaysSnap?: boolean;
    /** See the object specifications table below for the structure of the  layerInfos  object. */
    layerInfos?: any[];
    /** Reference to the map. */
    map: esri.Map;
    /** When alwaysSnap is set to false use this option to define the key users press to enable snapping. */
    snapKey?: any;
    /** Define a symbol for the snapping location. */
    snapPointSymbol?: Simpleesri.symbols.Markeresri.symbols.Symbol;
    /** Specify the radius of the snapping circle in pixels. */
    tolerance?: number;
  }
  export interface SpatialIndexOptions {
    /** Start processing features immediately. */
    autostart?: boolean;
    /** Whether the processor allow the feature layer to draw its features. */
    drawFeatures?: boolean;
    /** Whether the processor do the layer's I/O via a worker. */
    fetchWithWorkers?: boolean;
    /** Index system specific options. */
    indexOptions?: any;
    /** The indexing system to use. */
    indexType?: string;
    /** A esri.layers.Featureesri.layers.Layer or array of FeatureLayers to attach the processor to. */
    layers?: esri.layers.Featureesri.layers.Layer[];
    /** Uses all FeatureLayers associated with the map in the processor. */
    map?: esri.Map;
    /** Whether the processor pass the features through without modification or delay to the FeatureLayer. */
    passFeatures?: boolean;
    /** Whether the processor require Workers to function properly. */
    requireWorkerSupport?: boolean;
  }
  export interface StandardGeographyQueryLocationProviderOptions {
    /** A template to be used to build the query for Standard Geography query. */
    geographyQueryTemplate: string;
    /** An object that specifies the query to use in the standard geography query. */
    queryParameters?: any;
    /** An instance of the StandardGeographyesri.tasks.Query class. */
    standardGeographyQueryTask: esri.tasks.geoenrichment.StandardGeographyesri.tasks.QueryTask;
  }
  export interface StreamLayerOptions1 {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Where clause to use as definition expression for layer. */
    definitionExpression?: string;
    /** The extent to use as the spatial filter for the layer. */
    geometryDefinition?: esri.geometry.Extent;
    /** Maximum number of observations to show for each unique track. */
    maximumTrackPoints?: number;
    /** Rules for purging data from the layer to avoid overloading the browser with too many features. */
    purgeOptions?: any;
  }
  export interface StreamLayerOptions2 {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** The extent to use as the spatial filter for the layer. */
    geometryDefinition?: esri.geometry.Extent;
    /** Maximum number of observations to show for each unique track. */
    maximumTrackPoints?: number;
    /** Rules for purging data from the layer to avoid overloading the browser with too many features. */
    purgeOptions?: any;
    /** The URL to use for connecting to a socket. */
    socketUrl?: string;
  }
  export interface SummarizeNearbyOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** An array of numbers that defines the search distance (for StraightLine or DrivingDistance) or time (for DrivingTime) shown in the distance input in the Find nearest features using a option. */
    distance?: number[];
    /** When true, Travel Modes (Driving Distance, Driving Time) are enabled for sumNearbyesri.layers.Layer with point geometries (esriGeometryPoint). */
    enableTravelModes?: boolean;
    /** A field of the summarizeesri.layers.Layer features that you can use to calculate statistics separately for each unique attribute value. */
    groupByField?: string;
    /** Reference to the map object. */
    map?: esri.Map;
    /** Type of distance measurement shown as the defeault value in the Find nearest features using a option. */
    nearType?: string;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** Type of units shown under the Total Area checkbox in the Add statistics from option. */
    shapeUnits?: string;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** An array of possible statistics attribute field names and summary types that you wish to calculate for all nearby features. */
    summaryFields?: string[];
    /** The feature layer to be shown selected in the Choose layer to summarize dropdown. */
    summaryLayer?: esri.layers.Featureesri.layers.Layer;
    /** An array of possible feature layers summarizing toward. */
    summaryLayers: esri.layers.Featureesri.layers.Layer[];
    /** The point, line, or polygon feature layer from which distances will be measured to features in summarizeLayer. */
    sumNearbyLayer: esri.layers.Featureesri.layers.Layer;
    /** If true. */
    sumShape?: boolean;
    /** Type of units shown as the defeault value in the Find nearest features using a option. */
    units?: string;
  }
  export interface SummarizeWithinOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** A field name from summaryesri.layers.Layer that you can use to calculate statistics separately for each unique attribute value. */
    groupByField?: string;
    /** Reference to the map object. */
    map?: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** A list of field names and statistical summary type that you wish to calculate for all features in Summaryesri.layers.Layer that are within each polygon in sumWithinLayer. */
    summaryFields?: string;
    /** The summary layer to be shown selected in in the Choose layer to summarize menu. */
    summaryLayer?: esri.layers.Featureesri.layers.Layer;
    /** An array of summarize layer candidates. */
    summaryLayers: esri.layers.Featureesri.layers.Layer[];
    /** The polygon feature layer to be summarized toward. */
    sumWithinLayer: esri.layers.Featureesri.layers.Layer;
  }
  export interface TemplatePickerOptions {
    /** Number of visible columns. */
    columns?: number;
    /** Defines the text to be displayed when the template picker does not have any templates to display. */
    emptyMessage?: string;
    /** Array of input feature layers. */
    featureLayers?: esri.layers.Featureesri.layers.Layer[];
    /** Templates are grouped based on the containing feature layer. */
    grouping?: boolean;
    /** An array of items described using the syntax below. */
    items?: any[];
    /** Length of label description. */
    maxLabelLength?: number;
    /** Number of visible rows. */
    rows?: number;
    /** Tooltip content contains the template name and description. */
    showTooltip?: boolean;
    /** HTML style attributes for the widget. */
    style?: string;
    /** When true, the template picker displays map service legend swatches for feature layers created in selection mode that have an associated map service added to the map as a dynamic map service layer. */
    useLegend?: boolean;
  }
  export interface TimeSliderOptions {
    /** When true, subtracts one second to the time extent's end time to exclude data at the exact end time instant. */
    excludeDataAtLeadingThumb?: boolean;
    /** When true, adds one second to the time extent's start time to exclude data at the exact start time instant. */
    excludeDataAtTrailingThumb?: boolean;
  }
  export interface UndoManagerOptions {
    /** The maximum number of operations the UndoManager can perform. */
    maxOperations?: number;
  }
  export interface UnionOptions {
    /** The feature(s) removed from the feature layer by the union operation. */
    deletedGraphics?: esri.Graphic[];
    /** The feature layer that contains the unioned feature(s). */
    featureLayer?: esri.layers.Featureesri.layers.Layer;
    /** The updated feature(s). */
    postUpdatedGraphics?: esri.Graphic[];
    /** The feature(s) before the union operation is performed. */
    preUpdatedGraphics?: esri.Graphic[];
  }
  export interface UpdateOptions {
    /** The feature layer that contains the updated feature(s). */
    featureLayer?: esri.layers.Featureesri.layers.Layer;
    /** The updated feature(s). */
    postUpdatedGraphics?: esri.Graphic[];
    /** The feature(s) prior to the update. */
    preUpdatedGraphics?: esri.Graphic[];
  }
  export interface VEGeocoderOptions {
    /** Key used to access Bing Maps maps. */
    bingMapsKey?: string;
    /** Specifies the culture in which to return results. */
    culture?: string;
  }
  export interface VETiledLayerOptions {
    /** Key used to access Bing Maps maps. */
    bingMapsKey?: string;
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Specifies the culture in which to return results. */
    culture?: string;
    /** Bing Maps style. */
    mapStyle?: string;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
  }
  export interface WMSLayerOptions {
    /** Specify the map image format, valid options are png,jpg,bmp,gif,svg. */
    format?: string;
    /** An optional resourceInfo object. */
    resourceInfo?: any;
    /** If the WMS service supports transparency, specify whether the image background is transparent. */
    transparent?: boolean;
    /** A version number. */
    version?: string;
    /** A list of layer names that represent the layers to include in the exported map. */
    visibleLayers?: string[];
  }
  export interface WMTSLayerInfoOptions {
    /** The description of the layer defined by the abstract property of the capabilities file or resource info. */
    description?: string;
    /** Specify a format supported by the service. */
    format?: string;
    /** The full extent of the WMTS layer. */
    fullExtent?: esri.geometry.Extent;
    /** The layer id. */
    identifier?: string;
    /** The initial extent of the WMTS layer. */
    initialExtent?: esri.geometry.Extent;
    /** Specify the layer style. */
    style?: string;
    /** A tile info object. */
    tileInfo?: esri.layers.TileInfo;
    /** Define the tileMatrixSet for the layer. */
    tileMatrixSet?: string;
    /** The layer title. */
    title?: string;
  }
  export interface WMTSLayerOptions {
    /** A esri.layers.WMTSesri.layers.LayerInfo object that when ResourceInfo options are not specified the map will display the first layer in the WMTS capabilities that matches the properties specified by WMTSLayerInfo. */
    layerInfo?: esri.layers.WMTSesri.layers.LayerInfo;
    /** When true, tile resampling is enabled. */
    resampling?: boolean;
    /** Number of levels beyond the last level where tiles are available. */
    resamplingTolerance?: number;
    /** An optional resource info object. */
    resourceInfo?: any;
    /** Specify the service type. */
    serviceMode?: string;
  }
  export interface WebTiledLayerOptions {
    /** Define attribution information for the layer to be used by the esri.dijit.Attribution widget. */
    copyright?: string;
    /** Specify the full extent of the layer. */
    fullExtent?: esri.geometry.Extent;
    /** Specify the initial extent of the layer. */
    initialExtent?: esri.geometry.Extent;
    /** When true, tile resampling is enabled. */
    resampling?: boolean;
    /** Number of levels beyond the last level where tiles are available. */
    resamplingTolerance?: number;
    /** Specify subDomains where tiles are served to speed up tile retrieval (using subDomains gets around the browser limit of the max number of concurrent requests to a domain). */
    subDomains?: string[];
    /** Define the tile info for the layer including lods, rows, cols, origin and spatial reference. */
    tileInfo?: esri.layers.TileInfo;
    /** Define additional tile server domains for the layer. */
    tileServers?: string[];
  }
  /** Inherits all attributes from dojo/_base/esri.Color to provide functions for setting colors. */
  class esri.Color {
    /** Dictionary list of all CSS named colors, by name. */
    static named: any;
    /** The alpha value. */
    a: number;
    /** The blue value. */
    b: number;
    /** The green value. */
    g: number;
    /** The red value. */
    r: number;
    /**
     * Creates a new esri.Color object.
     * @param color A named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another esri.Color object.
     */
    constructor(color?: string);
    /**
     * Creates a new esri.Color object.
     * @param color A named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another esri.Color object.
     */
    constructor(color?: number[]);
    /**
     * Creates a new esri.Color object.
     * @param color A named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another esri.Color object.
     */
    constructor(color?: any);
    /**
     * Blend colors start and end with weight from 0 to 1, 0.5 being a 50/50 blend.
     * @param start The start color.
     * @param end The end color.
     * @param weight The weight value.
     * @param obj A previously allocated esri.Color object to reuse for the result.
     */
    static blendColors(start: esri.Color, end: esri.Color, weight: number, obj?: Color): esri.Color;
    /**
     * Builds a esri.Color from a 3 or 4 element array, mapping each element in sequence to the rgb(a) values of the color.
     * @param a The input array.
     * @param obj A previously allocated esri.Color object to reuse for the result.
     */
    static fromArray(a: number[], obj?: Color): esri.Color;
    /**
     * Converts a hex string with a '#' prefix to a color object.
     * @param color The input color.
     * @param obj A previously allocated esri.Color object to reuse for the result.
     */
    static fromHex(color: string, obj?: Color): esri.Color;
    /**
     * Returns a esri.Color instance from a string of the form "rgb()" or "rgba()".
     * @param color The input color.
     * @param obj A previously allocated esri.Color object to reuse for the result.
     */
    static fromRgb(color: string, obj?: Color): esri.Color;
    /**
     * Parses str for a color value.
     * @param str The input value.
     * @param obj A previously allocated esri.Color object to reuse for the result.
     */
    static fromString(str: string, obj?: Color): esri.Color;
    /**
     * Takes a named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another esri.Color object and sets this color instance to that value.
     * @param color The new color value.
     */
    setColor(color: string): esri.Color;
    /**
     * Takes a named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another esri.Color object and sets this color instance to that value.
     * @param color The new color value.
     */
    setColor(color: number[]): esri.Color;
    /**
     * Takes a named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another esri.Color object and sets this color instance to that value.
     * @param color The new color value.
     */
    setColor(color: any): esri.Color;
    /**
     * Returns a css color string in rgb(a) representation.
     * @param includeAlpha If true, the alpha value will be included in the result.
     */
    toCss(includeAlpha?: boolean): string;
    /** Returns a CSS color string in hexadecimal representation. */
    toHex(): string;
    /** Returns a 3 component array of rgb values. */
    toRgb(): number[];
    /** Returns a 4 component array of rgba values. */
    toRgba(): number[];
  }
  export = esri.Color;

  /** The esri.Credential class represents a credential object used to access a secure ArcGIS resource. */
  class esri.Credential {
    /** Token expiration time specified as number of milliseconds since 1 January 1970 00:00:00 UTC. */
    expires: number;
    /** Indicates whether this credential belongs to a user with admin privileges. */
    isAdmin: boolean;
    /** The Identity Manager's  setOAuthRedirectionHandler returns an object that contains a "state" parameter. */
    oAuthState: any;
    /** The server url. */
    server: string;
    /** Indicates whether the resources accessed using this credential should be fetched over HTTPS protocol. */
    ssl: boolean;
    /** Token generated by the token service using the specified userId and password. */
    token: string;
    /** User associated wth the esri.Credential object. */
    userId: string;
    /** Destroy a credential. */
    destroy(): void;
    /** Generate a new token and update the Credential's token property with the newly acquired token. */
    refreshToken(): any;
    /** Return the properties of this object in JSON. */
    toJson(): any;
    /** Fired when a credential object is destroyed. */
    on(type: "destroy", listener: (event: { target: esri.Credential }) => void): esri.Handle;
    /** Fired when the token associated with the credential is updated or changed. */
    on(type: "token-change", listener: (event: { target: esri.Credential }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.Credential;

  /** This module returns a singleton class that is automatically instantiated into esri.id when the module containing this class is imported into the application. */
  export class IdentityManager extends esri.IdentityManagerBase {
    /** Dialog box widget used to challenge the user for their credentials when the application attempts to access a secure resource. */
    dialog: any;
    /**
     * When accessing secure resources via Oauth2 from ArcGIS.com or one of its sub-domains the IdentityManager redirects the user to the ArcGIS.com or Portal for ArcGIS sign-in page.
     * @param handlerFunction When called, the function passed to setOAuthRedirectionHandler receives an object containing the redirection properties.
     */
    setOAuthRedirectionHandler(handlerFunction: Function): void;
    /**
     * Use this method in the popup callback page to pass the token and other values back to the IdentityManager.
     * @param hash The token information in addition to any other values needed to be passed back to the IdentityManager.
     */
    setOAuthResponseHash(hash: string): void;
    /** This method is called by the base identity manager implementation. */
    signIn(): any;
    /** Fired when the user clicks the cancel button on the dialog box widget. */
    on(type: "dialog-cancel", listener: (event: { info: any; target: IdentityManager }) => void): esri.Handle;
    /** Fired when the dialog box widget, used to prompt users for their credentials, is created. */
    on(type: "dialog-create", listener: (event: { target: IdentityManager }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** This class provides the framework and helper methods required to implement a solution for managing user credentials. */
  class esri.IdentityManagerBase {
    /** The suggested lifetime of the token in minutes. */
    tokenValidity: number;
    /**
     * Returns the credential (via Deferred) if the user has already signed in to access the given resource.
     * @param resUrl The resource URL.
     */
    checkSignInStatus(resUrl: string): any;
    /** Destroys all credentials. */
    destroyCredentials(): void;
    /**
     * Returns the credential for the resource identified by the specified url.
     * @param url The url to a server.
     * @param userId The userId for which you want to obtain credentials.
     */
    findCredential(url: string, userId?: string): esri.Credential;
    /**
     * Returns the OAuth configuration for the passed in Portal server URL.
     * @param url The URL to the Portal.
     */
    findOAuthInfo(url: string): esri.arcgis.OAuthInfo;
    /**
     * Returns information about the server that is hosting the specified url.
     * @param url The url to a server.
     */
    findServerInfo(url: string): esri.ServerInfo;
    /**
     * Returns an object containing a token and its expiration time.
     * @param serverInfo A esri.ServerInfo object that contains a token service URL.
     * @param userInfo A user info object containing a user name and password.
     * @param options Optional parameters.
     */
    generateToken(serverInfo: esri.ServerInfo, userInfo: any, options?: any): any;
    /**
     * Returns a esri.Credential object that can be used to access the secured resource identified by the input url.
     * @param url The url for the secure resource.
     * @param options Optional parameters.
     */
    getCredential(url: string, options?: any): any;
    /**
     * Call this method (during your application initialization) with JSON previously obtained from toJson method to re-hydrate the state of identity manager.
     * @param json The JSON obtained from the toJson method.
     */
    initialize(json: Object): any;
    /** Returns true if the identity manager is busy accepting user input, i.e., the user has invoked signIn and is waiting for a response. */
    isBusy(): boolean;
    /**
     * Sub-classes must implement this method if OAuth support is required.
     * @param resUrl The resource URL.
     * @param serverInfo  A esri.ServerInfo object that contains the token service url.
     * @param esri.arcgis.OAuthInfo A esri.arcgis.OAuthInfo object that contains the authorization configuration.
     * @param options Optional parameters.
     */
    oAuthSignIn(resUrl: string, serverInfo: esri.ServerInfo, OAuthInfo: esri.arcgis.OAuthInfo, options?: any): any;
    /**
     * Registers OAuth configurations.
     * @param oAuthInfos An OAuthInfos object that defines the OAuth configurations.
     */
    registerOAuthInfos(oAuthInfos: esri.arcgis.OAuthInfo[]): void;
    /**
     * Register secure servers and the token endpoints.
     * @param serverInfos A ServerInfos object that defines the secure service and token endpoint.
     */
    registerServers(serverInfos: esri.ServerInfo[]): void;
    /**
     * Registers the given OAuth2 access token with the identity manager.
     * @param properties See the object specifications table below for the structure of the  properties  object.
     */
    registerToken(properties: any): void;
    /**
     * When accessing secured resources, identity manager may prompt for username and password and send them to the server using a secure connection.
     * @param handlerFunction The function to call when the protocol is mismatched.
     */
    setProtocolErrorHandler(handlerFunction: Function): void;
    /**
     * When accessing secure resources from ArcGIS.com or one of its sub-domains the IdentityManager redirects the user to the ArcGIS.com sign-in page.
     * @param handlerFunction When called, the function passed to setRedirectionHandler receives an object containing redirection properties.
     */
    setRedirectionHandler(handlerFunction: Function): void;
    /**
     * Sub-classes must implement this method to create and manager the user interface that is used to obtain a username and password from the end-user.
     * @param url Url for the secure resource.
     * @param serverInfo A esri.ServerInfo object that contains the token service url.
     * @param options Optional parameters.
     */
    signIn(url: string, serverInfo: esri.ServerInfo, options?: any): any;
    /** Return properties of this object in JSON. */
    toJson(): any;
    /** Fired when a credential is created. */
    on(type: "credential-create", listener: (event: { target: esri.IdentityManagerBase }) => void): esri.Handle;
    /** Fired when all credentials are destroyed. */
    on(type: "credentials-destroy", listener: (event: { target: esri.IdentityManagerBase }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.IdentityManagerBase;
  /** An esri.InfoTemplate contains a title and content template string used to transform Graphic.attributes into an HTML representation. */
  class esri.InfoTemplate {
    /** The template for defining how to format the content used in an InfoWindow. */
    content: any;
    /** The template for defining how to format the title used in an InfoWindow. */
    title: any;
    /** Creates a new empty esri.InfoTemplate object. */
    constructor();
    /**
     * Creates a new esri.InfoTemplate object.
     * @param title The template for defining how to format the title used in an InfoWindow.
     * @param content The template for defining how to format the content used in an InfoWindow.
     */
    constructor(title: string, content: string);
    /**
     * Creates a new esri.InfoTemplate object using a JSON object.
     * @param json JSON object representing the InfoTemplate.
     */
    constructor(json: Object);
    /**
     * Sets the content template.
     * @param template The template for the content.
     */
    setContent(template: string): esri.InfoTemplate;
    /**
     * Sets the content template.
     * @param template The template for the content.
     */
    setContent(template: Function): esri.InfoTemplate;
    /**
     * Sets the title template.
     * @param template The template for the title.
     */
    setTitle(template: string): esri.InfoTemplate;
    /**
     * Sets the title template.
     * @param template The template for the title.
     */
    setTitle(template: Function): esri.InfoTemplate;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.InfoTemplate;

  /** The base class for the out-of-the-box InfoWindow. */
  class esri.InfoWindowBase {
    /** The reference to a DOM node where the info window is constructed. */
    domNode: any;
    /** Indicates if the info window is visible. */
    isShowing: boolean;
    /** Helper method. */
    destroyDijits(): void;
    /** Hide the info window. */
    hide(): void;
    /**
     * Helper method.
     * @param value A string with HTML tags or a DOM node.
     * @param parentNode The parent node where the value will be placed.
     */
    place(value: string, parentNode: Node): void;
    /**
     * Helper method.
     * @param value A string with HTML tags or a DOM node.
     * @param parentNode The parent node where the value will be placed.
     */
    place(value: HTMLElement, parentNode: Node): void;
    /**
     * Resize the info window to the specified width and height (in pixels).
     * @param width The new width of the esri.dijit.InfoWindow in pixels.
     * @param height The new height of the esri.dijit.InfoWindow in pixels.
     */
    resize(width: number, height: number): void;
    /**
     * Define the info window content.
     * @param content The content argument can be any of the following.
     */
    setContent(content: string): void;
    /**
     * Define the info window content.
     * @param content The content argument can be any of the following.
     */
    setContent(content: any): void;
    /**
     * This method is called by the map when the object is set as its info window.
     * @param map The map object.
     */
    setMap(map: Map): void;
    /**
     * Set the input value as the title for the info window.
     * @param title  In most cases the title will be a string value but the same options are available as for the setContent method.
     */
    setTitle(title: string): void;
    /**
     * Set the input value as the title for the info window.
     * @param title  In most cases the title will be a string value but the same options are available as for the setContent method.
     */
    setTitle(title: any): void;
    /**
     * Display the info window at the specified location.
     * @param location Location is an instance of esri.geometry.Point.
     */
    show(location: Point): void;
    /** Helper method. */
    startupDijits(): void;
    /**
     * This method is called by the map when the object is no longer the map's info window.
     * @param map The map object.
     */
    unsetMap(map: Map): void;
    /** Fires after the info window is hidden. */
    on(type: "hide", listener: (event: { target: esri.InfoWindowBase }) => void): esri.Handle;
    /** Fires after the info window becomes visible. */
    on(type: "show", listener: (event: { target: esri.InfoWindowBase }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.InfoWindowBase;

  /** The esri.OperationBase class defines operations that can be added to the UndoManager. */
  class esri.OperationBase {
    /** Details about the operation, for example: "Update" may be the label for an edit operation that updates features. */
    label: string;
    /** The type of operation, for example: "edit" or "navigation". */
    type: string;
    /**
     * Creates a new esri.OperationBase object.
     * @param params See options list for parameters.
     */
    constructor(params: esri.OperationBaseOptions);
    /** Re-perform the last undo operation. */
    performRedo(): void;
    /** Reverse the operation. */
    performUndo(): void;
  }
  export = esri.OperationBase;
  /** This class contains information about an ArcGIS Server and its token endpoint. */
  class esri.ServerInfo {
    /** The token service URL used to generate tokens for ArcGIS Server Admin resources. */
    adminTokenServiceUrl: string;
    /** Version of the ArcGIS Server REST API deployed on this server. */
    currentVersion: number;
    /** The server URL. */
    server: string;
    /** Validity of short-lived token in minutes. */
    shortLivedTokenValidity: number;
    /** The token service URL used to generate tokens for the secured resources on the server. */
    tokenServiceUrl: string;
    /** Return the properties of this object in JSON. */
    toJson(): any;
  }
  export = esri.ServerInfo;

  /** The esri.SnappingManager is used to add snapping capability to the Editor, Measurement Widget,  Draw toolbar and Edit toolbar. */
  class esri.SnappingManager {
    /**
     * Create a new esri.SnappingManager object.
     * @param options Optional parameters.
     */
    constructor(options?: esri.SnappingManagerOptions);
    /** Destroy the esri.SnappingManager object. */
    destroy(): void;
    /**
     * Returns a deferred object, which can be added to a callback to find the snap point.
     * @param screenesri.geometry.Point The input screen point for which to find the snapping location.
     */
    getSnappingPoint(screenPoint: Point): any;
    /**
     * An array of layerInfo objects used to specify the target snapping layers.
     * @param layerInfos An array of layerInfo objects that define the snapping target layers.
     */
    setLayerInfos(layerInfos: any[]): void;
  }
  export = esri.SnappingManager;
  /** The spatial reference of a map, layer, or inputs to and outputs from a task. */
  class esri.SpatialReference {
    /** The well-known ID of a spatial reference. */
    wkid: number;
    /** The well-known text that defines a spatial reference. */
    wkt: string;
    /**
     * Creates a new esri.SpatialReference object.
     * @param json The REST JSON representation of the spatial reference.
     */
    constructor(json: Object);
    /**
     * Create a spatial reference object and initialize it with a well-known ID (wkid).
     * @param wkid The well-known id (wkid) of the coordinate system.
     */
    constructor(wkid: number);
    /**
     * Create a spatial reference object and initialize it with the given well-known text (wkt).
     * @param wkt The well-known text (wkt) of the coordinate system.
     */
    constructor(wkt: string);
    /**
     * Returns true if the input spatial reference object has the same wkid or wkt as this spatial reference object.
     * @param sr The spatial reference to compare.
     */
    equals(sr: SpatialReference): boolean;
    /** Returns true if the wkid of the spatial reference object is one of the following values: 102113, 102100, 3857. */
    isWebMercator(): boolean;
    /** Returns an easily serializable object representation of the spatial reference. */
    toJson(): any;
  }
  export = esri.SpatialReference;
  /** The time extent is a span of time going from a start time to an end time. */
  class Timeesri.geometry.Extent {
    /** The end time for the specified time extent. */
    endTime: Date;
    /** The start time for the specified time extent. */
    startTime: Date;
    /**
     * Creates a new Timeesri.geometry.Extent object with the specifed start and end time.
     * @param startTime The start time for the specified time extent.
     * @param endTime The end time for the specified time extent.
     */
    constructor(startTime: Date, endTime: Date);
    /**
     * Returns a new time extent indicating the intersection between "this" and the argument time extent.
     * @param timeesri.geometry.Extent The input time extent.
     */
    intersection(timeExtent: number): Timeesri.geometry.Extent;
    /**
     * Returns a new time extent with the given offset from "this' time extent.
     * @param offsetValue The length of time to offset from "this" time extent.
     * @param offsetesri.Units The offset units, see the esri.layers.TimeInfo constants for a list of valid values.
     */
    offset(offsetValue: number, offsetUnits: string): Timeesri.geometry.Extent;
  }
  export = Timeesri.geometry.Extent;
  /** Contains properties referencing default basemaps used in the JS API. */
  export var basemaps: {
    /** The Light Gray Canvas basemap is designed to be used as a neutral background map for overlaying and emphasizing other map layers. */
    gray: any;
    /** The World Imagery map is a detailed imagery map layer and labels that is designed to be used as a basemap for various maps and applications. */
    hybrid: any;
    /** The Ocean esri.dijit.Basemap is designed to be used as a basemap by marine GIS professionals and as a reference map by anyone interested in ocean data. */
    oceans: any;
    /** The OpenStreetesri.Map is a community map layer that is designed to be used as a basemap for various maps and applications. */
    osm: any;
    /** The World Imagery map is a detailed imagery map layer that is designed to be used as a basemap for various maps and applications. */
    satellite: any;
    /** The Streets basemap presents a multiscale street map for the world. */
    streets: any;
    /** The Terrain with Labels basemap is designed to be used to overlay and emphasize other thematic map layers. */
    terrain: any;
    /** The Topographic map includes boundaries, cities, water features, physiographic features, parks, landmarks, transportation, and buildings. */
    topo: any;
  };
  /** The default values for all JS API configuration options. */
  export var config: {
    /** ArcGIS JavaScript API default configurations that can be overridden programmatically. */
    defaults: any;
  };
  /** Utility methods related to working with a DOM. */
  export var domUtils: {
    /** Represents the size of the client side window or document at first load. */
    documentBox: any;
    /**
     * Hides an HTML element such as a DIV or TABLE.
     * @param element The name of the HTML element.
     */
    hide(element: Element): void;
    /**
     * Shows an HTML element such as a DIV or TABLE.
     * @param element The name of the HTML element.
     */
    show(element: Element): void;
    /**
     * If an HTML element is currently visible, the element is hidden.
     * @param element The name of the HTML element.
     */
    toggle(element: Element): void;
  };

  /** A esri.Graphic can contain geometry, a symbol, attributes, or an infoTemplate. */
  class esri.Graphic {
    /** Name value pairs of fields and field values associated with the graphic. */
    attributes: any;
    /** The geometry that defines the graphic. */
    geometry: esri.geometry.Geometry;
    /** The content for display in an InfoWindow. */
    infoTemplate: esri.InfoTemplate;
    /** The symbol for the graphic. */
    symbol: esri.symbols.Symbol;
    /** Indicate the visibility of the graphic. */
    visible: boolean;
    /**
     * Creates a new esri.Graphic object.
     * @param geometry The geometry that defines the graphic.
     * @param symbol esri.symbols.Symbol used for drawing the graphic.
     * @param attributes Name value pairs of fields and field values associated with the graphic.
     * @param infoTemplate The content for display in an InfoWindow.
     */
    constructor(geometry?: esri.geometry.Geometry, symbol?: esri.symbols.Symbol, attributes?: any, infoTemplate?: InfoTemplate);
    /**
     * Creates a new esri.Graphic object using a JSON object.
     * @param json JSON object representing the graphic.
     */
    constructor(json: Object);
    /**
     * Adds a new attribute or changes the value of an existing attribute on the graphic's node.
     * @param name The name of the attribute.
     * @param value The value of the attribute.
     */
    attr(name: string, value: string): esri.Graphic;
    /** Draws the graphic. */
    draw(): esri.Graphic;
    /** Returns the content string based on attributes and infoTemplate values. */
    getContent(): string;
    /** Returns the dojo/gfx/shape.Shape of the Esri graphic. */
    getDojoShape(): any;
    /** Returns the info template associated with the graphic. */
    getInfoTemplate(): esri.InfoTemplate;
    /** Returns a reference to the associated layer. */
    getLayer(): esri.layers.Layer;
    /** Returns the DOM node used to draw the graphic. */
    getNode(): any;
    /** Returns one or more DOM nodes used to draw the graphic. */
    getNodes(): any;
    /** Returns the dojox/gfx/shape.Shape of the Esri graphic. */
    getShape(): any;
    /** Returns one or more dojox/gfx/shape.Shape used to draw the graphic. */
    getShapes(): any[];
    /** Returns the title string based on attributes and infoTemplate values. */
    getTitle(): string;
    /** Hides the graphic. */
    hide(): void;
    /**
     * Defines the attributes of the graphic.
     * @param attributes The name value pairs of fields and field values associated with the graphic.
     */
    setAttributes(attributes: any): esri.Graphic;
    /**
     * Defines the geometry of the graphic.
     * @param geometry The geometry that defines the graphic.
     */
    setGeometry(geometry: Geometry): esri.Graphic;
    /**
     * Defines the esri.InfoTemplate for the esri.dijit.InfoWindow of the graphic.
     * @param infoTemplate The content for display in an InfoWindow.
     */
    setInfoTemplate(infoTemplate: InfoTemplate): esri.Graphic;
    /**
     * Sets the symbol of the graphic.
     * @param symbol The symbol for the graphic.
     */
    setSymbol(symbol: Symbol): esri.Graphic;
    /** Shows the graphic. */
    show(): void;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.Graphic;

  /** Utility methods for working with graphics. */
  export var graphicsUtils: {
    /**
     * Converts an array of graphics to an array of geometries.
     * @param graphics Array of graphics to convert to geometries
     */
    getGeometries(graphics: esri.Graphic[]): esri.geometry.Geometry[];
    /**
     * Utility function that returns the extent of an array of graphics.
     * @param graphics The input graphics array.
     */
    graphicsExtent(graphics: esri.Graphic[]): esri.geometry.Extent;
  };
  /** Utility methods for retrieving API version. */
  export var kernel: {
    /** Current version of the JavaScript API. */
    version: string;
  };
  /** Utility methods for working with strings, arrays and objects. */
  export var lang: {
    /**
     * Creates a new object with all properties that pass the test implemented by the filter provided in the function.
     * @param object Object  to filter.
     * @param callback Function or string implementing the filtering.
     * @param thisObject Optional object used to scope the call to the callback.
     */
    filter(object: any, callback: Function, thisObject: any): any;
    /**
     * Returns true when the value is neither null or undefined.
     * @param value The value to test.
     */
    isDefined(value: any): boolean;
    /**
     * A wrapper around dojo.string.substitute that can also handle wildcard substitution.
     * @param data The data object used in the substitution.
     * @param template The template used for the substitution.
     * @param first When true, returns only the first property found in the data object.
     */
    substitute(data: any, template?: string, first?: boolean): string;
    /**
     * Iterates through the argument array and searches for the identifier to which the argument value matches.
     * @param array The argument array for testing.
     * @param value The value used in the search.
     */
    valueOf(array: any[], value: any): any;
  };

  /** The esri.Map class creates a container and required DOM structure for adding layers, graphics, an info window, and other navigation controls. */
  class esri.Map {
    /** Reference to the attribution widget created by the map when map attribution is enabled. */
    attribution: esri.dijit.Attribution;
    /** Value is true when the map automatically resizes if the browser window or ContentPane widget enclosing the map is resized. */
    autoResize: boolean;
    /** An array of IDs corresponding to the layers that make up the map's current basemap. */
    basemapLayerIds: string[];
    /** The current extent of the map in map units. */
    extent: esri.geometry.Extent;
    /** Indicates if the fade effect is enabled while zooming. */
    fadeOnZoom: boolean;
    /** When the mapNavigation mode is set to 'css-transforms', CSS3 transforms will be used for map navigation when supported by the browser. */
    force3DTransforms: boolean;
    /** The extent (or bounding box) of the map in geographic coordinates. */
    geographicExtent: esri.geometry.Extent;
    /** Provides access to the Map's GraphicsLayer. */
    graphics: esri.layers.Graphicsesri.layers.Layer;
    /** An array of the current GraphicsLayers in the map. */
    graphicsLayerIds: string[];
    /** Current height of the map in screen pixels. */
    height: number;
    /** Reference to HTML DIV or other element where the map is placed on the page. */
    id: string;
    /** Displays the esri.dijit.InfoWindow on a map. */
    infoWindow: esri.InfoWindowBase;
    /** When true, the key sequence of shift then click to recenter the map is enabled. */
    isClickRecenter: boolean;
    /** When true, double click zoom is enabled. */
    isDoubleClickZoom: boolean;
    /** When true, keyboard navigation is enabled. */
    isKeyboardNavigation: boolean;
    /** When true, map panning is enabled using the mouse. */
    isPan: boolean;
    /** When true, pan arrows are displayed around the edge of the map. */
    isPanArrows: boolean;
    /** When true, rubberband zoom is enabled. */
    isRubberBandZoom: boolean;
    /** When true, the mouse scroll wheel zoom is enabled. */
    isScrollWheelZoom: boolean;
    /** When true, shift double click zoom is enabled. */
    isShiftDoubleClickZoom: boolean;
    /** When true, the zoom slider is displayed on the map. */
    isZoomSlider: boolean;
    /** Array of IDs corresponding to layers in the map, except for GraphicsLayers and FeatureLayers, which are maintained in map.graphicsLayerIds. */
    layerIds: string[];
    /** After the first layer is loaded, the value is set to true. */
    loaded: boolean;
    /** Indicates whether the map uses CSS3 transformations when panning and zooming. */
    navigationMode: string;
    /** This point geometry in screen coordinates represent the top-left corner of the map container. */
    position: esri.geometry.Point;
    /** The DOM node that contains the container of layers, build-in info window, logo and slider. */
    root: Node;
    /** When true, map attribution is enabled. */
    showAttribution: boolean;
    /** If snapping is enabled on the map using map.enableSnapping() this property provides access to the SnappingManager. */
    snappingManager: esri.SnappingManager;
    /** The spatial reference of the map. */
    spatialReference: esri.SpatialReference;
    /** The current Timeesri.geometry.Extent for the map. */
    timeExtent: Timeesri.geometry.Extent;
    /** Indicates whether map is visible. */
    visible: boolean;
    /** Current width of the map in screen pixels. */
    width: number;
    /**
     * Creates a new map inside of the given HTML container, which is often a DIV element.
     * @param divId Container id for the referencing map.
     * @param options Optional parameters.
     */
    constructor(divId: string, options?: esri.MapOptions);
    /**
     * Adds an Esri esri.layers.Layer to the map.
     * @param layer esri.layers.Layer to be added to the map.
     * @param index A layer can be added at a specified index in the map.
     */
    addLayer(layer: esri.layers.Layer, index?: number): esri.layers.Layer;
    /**
     * Adds multiple layers to a map.
     * @param layers Layers to be added to the map.
     */
    addLayers(layers: esri.layers.Layer[]): void;
    /**
     * Adds a new attribute or changes the value of an existing attribute on the map container.
     * @param name The name of the attribute.
     * @param value The value of the attribute.
     */
    attr(name: string, value: string): esri.Map;
    /**
     * Centers and zooms the map.
     * @param mapesri.geometry.Point Centers the map on the specified x,y location.
     * @param levelOrFactor When using an ArcGISTiledMapServiceesri.layers.Layer, the map is zoomed to the level specified.
     */
    centerAndZoom(mapPoint: esri.geometry.Point, levelOrFactor: number): any;
    /**
     * Centers the map based on map coordinates as the center point.
     * @param mapesri.geometry.Point Centers the map on the specified x,y location.
     */
    centerAt(mapPoint: Point): any;
    /** Destroys the map instance. */
    destroy(): void;
    /** Disallows clicking on a map to center it. */
    disableClickRecenter(): void;
    /** Disallows double clicking on a map to zoom in a level and center the map. */
    disableDoubleClickZoom(): void;
    /** Disallows panning and zooming using the keyboard. */
    disableKeyboardNavigation(): void;
    /** Disallows all map navigation except the slider and pan arrows. */
    disableMapNavigation(): void;
    /** Disallows panning a map using the mouse. */
    disablePan(): void;
    /** Disallows zooming in or out on a map using a bounding box. */
    disableRubberBandZoom(): void;
    /** Disallows zooming in or out on a map using the mouse scroll wheel. */
    disableScrollWheelZoom(): void;
    /** Disallows shift double clicking on a map to zoom in a level and center the map. */
    disableShiftDoubleClickZoom(): void;
    /** Disables snapping on the map. */
    disableSnapping(): void;
    /** Permits users to click on a map to center it. */
    enableClickRecenter(): void;
    /** Permits users to double click on a map to zoom in a level and center the map. */
    enableDoubleClickZoom(): void;
    /** Permits users to pan and zoom using the keyboard. */
    enableKeyboardNavigation(): void;
    /** Allows all map navigation. */
    enableMapNavigation(): void;
    /** Permits users to pan a map using the mouse. */
    enablePan(): void;
    /** Permits users to zoom in or out on a map using a bounding box. */
    enableRubberBandZoom(): void;
    /** Permits users to zoom in or out on a map using the mouse scroll wheel. */
    enableScrollWheelZoom(): void;
    /** Permits users to shift double click on a map to zoom in a level and center the map. */
    enableShiftDoubleClickZoom(): void;
    /**
     * Enable snapping on the map when working with the Editor, Measurement widget or the Draw and Edit toolbars.
     * @param snapOptions See the object specifications table below for the structure of the  snapOptions  object.
     */
    enableSnapping(snapOptions?: any): esri.SnappingManager;
    /** Returns the name of the current basemap. */
    getBasemap(): string;
    /**
     * Sets an InfoWindow's anchor when calling InfoWindow.show.
     * @param screenCoords The anchor point in screen units.
     */
    getInfoWindowAnchor(screenCoords: ScreenPoint): string;
    /**
     * Returns an individual layer of a map.
     * @param id ID assigned to the layer.
     */
    getLayer(id: string): esri.layers.Layer;
    /** Return an array of layers visible at the current scale. */
    getLayersVisibleAtScale(): esri.layers.Layer[];
    /** Gets the current level of detail  for the map. */
    getLevel(): number;
    /** Returns the maximum visible scale of the map. */
    getMaxScale(): number;
    /** Returns the maximum zoom level of the map. */
    getMaxZoom(): number;
    /** Returns the minimum visible scale of the map. */
    getMinScale(): number;
    /** Returns the minimum zoom level of the map. */
    getMinZoom(): number;
    /** Returns the current map scale. */
    getScale(): number;
    /** Returns the current zoom level of the map. */
    getZoom(): number;
    /** Hides the pan arrows from the map. */
    hidePanArrows(): void;
    /** Hides the zoom slider from the map. */
    hideZoomSlider(): void;
    /** Pans the map south. */
    panDown(): any;
    /** Pans the map west. */
    panLeft(): any;
    /** Pans the map southwest. */
    panLowerLeft(): any;
    /** Pans the map southeast. */
    panLowerRight(): any;
    /** Pans the map east. */
    panRight(): any;
    /** Pans the map north. */
    panUp(): any;
    /** Pans the map northwest. */
    panUpperLeft(): any;
    /** Pans the map northeast. */
    panUpperRight(): any;
    /** Removes all layers from the map. */
    removeAllLayers(): void;
    /**
     * Removes the specified layer from the map.
     * @param layer esri.layers.Layer to be removed from the map.
     */
    removeLayer(layer: Layer): void;
    /**
     * Changes the layer order in the map.
     * @param layer The layer to be moved.
     * @param index Refers to the location for placing the layer.
     */
    reorderLayer(layer: esri.layers.Layer, index: number): void;
    /** Repositions the map DIV on the page. */
    reposition(): void;
    /**
     * Resizes the map DIV.
     * @param immediate By default, the actual resize logic is delayed internally in order to throttle spurious resize events dispatched by some browsers.
     */
    resize(immediate?: boolean): void;
    /**
     * Change the map's current basemap.
     * @param basemap A valid basemap name.
     */
    setBasemap(basemap: string): void;
    /**
     * Sets the extent of the map.
     * @param extent Sets the minx, miny, maxx, and maxy for a map.
     * @param fit When true, for maps that contain tiled map service layers, you are guaranteed to have the input extent shown completely on the map.
     */
    setExtent(extent: esri.geometry.Extent, fit?: boolean): any;
    /**
     * If true and a map click event occurs, it may show the map's infoWindow.
     * @param enabled Toggles the behavior initially set by the map's showInfoWindowOnClick constructor option.
     */
    setInfoWindowOnClick(enabled: boolean): void;
    /**
     * Sets the map to the specified level.
     * @param level The level ID.
     */
    setLevel(level: number): any;
    /**
     * Sets the default cursor for the map.
     * @param cursor A standard CSS cursor value.
     */
    setMapCursor(cursor: string): void;
    /**
     * Sets the map scale to the specified value.
     * @param scale A map scale value greater than 0.
     */
    setScale(scale: number): any;
    /**
     * Sets the Timeesri.geometry.Extent for the map.
     * @param timeesri.geometry.Extent Set the time extent for which data is displayed on the map.
     */
    setTimeExtent(timeExtent: TimeExtent): void;
    /**
     * Set the time slider associated with the map.
     * @param timeSlider The time slider dijit to associate with the map.
     */
    setTimeSlider(timeSlider: TimeSlider): void;
    /**
     * Show or hide the map.
     * @param visible If true, map will be visible.
     */
    setVisibility(visible: boolean): esri.Map;
    /**
     * Set the map zoom level to the given value.
     * @param zoom A valid zoom level value.
     */
    setZoom(zoom: number): any;
    /** Shows the pan arrows on the map. */
    showPanArrows(): void;
    /** Shows the zoom slider on the map. */
    showZoomSlider(): void;
    /**
     * Converts a single screen point to map coordinates.
     * @param screenesri.geometry.Point Converts screen coordinates to map coordinates.
     */
    toMap(screenPoint: ScreenPoint): esri.geometry.Point;
    /**
     * Converts a single map point to screen coordinate.
     * @param mapesri.geometry.Point Converts map coordinates to screen coordinates.
     */
    toScreen(mapPoint: Point): Screenesri.geometry.Point;
    /** Fired when the map's basemap is changed. */
    on(type: "basemap-change", listener: (event: { current: any; previous: any; target: esri.Map }) => void): esri.Handle;
    /** Event is fired before the map gets destroyed. */
    on(type: "before-unload", listener: (event: { map: esri.Map; target: esri.Map }) => void): esri.Handle;
    /** Fires when a user single clicks on the map using the mouse and the mouse pointer is within the map region of the HTML page. */
    on(type: "click", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when a user double clicks on the map using the mouse and the mouse pointer is within the map region of the HTML page. */
    on(type: "dbl-click", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when the extent of the map has changed. */
    on(type: "extent-change", listener: (event: { delta: esri.geometry.Point; extent: esri.geometry.Extent; levelChange: boolean; lod: esri.layers.LOD; target: esri.Map }) => void): esri.Handle;
    /** Fires when a keyboard key is pressed. */
    on(type: "key-down", listener: (event: KeyboardEvent) => void): esri.Handle;
    /** Fires when a keyboard key is released. */
    on(type: "key-up", listener: (event: KeyboardEvent) => void): esri.Handle;
    /** Fires any time a layer is added to the map. */
    on(type: "layer-add", listener: (event: { layer: esri.layers.Layer; target: esri.Map }) => void): esri.Handle;
    /** Fires after specified layer has been added to the map. */
    on(type: "layer-add-result", listener: (event: { error: Error; layer: esri.layers.Layer; target: esri.Map }) => void): esri.Handle;
    /** Fires after the layer has been removed. */
    on(type: "layer-remove", listener: (event: { layer: esri.layers.Layer; target: esri.Map }) => void): esri.Handle;
    /** Fires when the map layer order has been changed. */
    on(type: "layer-reorder", listener: (event: { index: number; layer: esri.layers.Layer; target: esri.Map }) => void): esri.Handle;
    /** Fires when a map layer resumes drawing. */
    on(type: "layer-resume", listener: (event: { layer: esri.layers.Layer; target: esri.Map }) => void): esri.Handle;
    /** Fires after all layers are added to the map using the map.addLayers method. */
    on(type: "layers-add-result", listener: (event: { layers: esri.layers.Layer[]; target: esri.Map }) => void): esri.Handle;
    /** Fires after all the layers have been removed. */
    on(type: "layers-removed", listener: (event: { target: esri.Map }) => void): esri.Handle;
    /** Fires when all the layers have been reordered. */
    on(type: "layers-reordered", listener: (event: { layerIds: string[]; target: esri.Map }) => void): esri.Handle;
    /** Fires when a map layer suspends drawing. */
    on(type: "layer-suspend", listener: (event: { layer: esri.layers.Layer; target: esri.Map }) => void): esri.Handle;
    /** Fires when the first or base layer has been successfully added to the map. */
    on(type: "load", listener: (event: { map: esri.Map; target: esri.Map }) => void): esri.Handle;
    /** Fires when a mouse button is pressed down and the mouse cursor is in the map region of the HTML page. */
    on(type: "mouse-down", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires while the mouse is being dragged until the mouse button is released. */
    on(type: "mouse-drag", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when a mouse button is released and the user stops dragging the mouse. */
    on(type: "mouse-drag-end", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when a mouse button is pressed down and the user starts to drag the mouse. */
    on(type: "mouse-drag-start", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires any time the mouse pointer moves over the map region. */
    on(type: "mouse-move", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when the mouse moves out of the map region of the HTML page. */
    on(type: "mouse-out", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when the mouse moves into the map region of the HTML page. */
    on(type: "mouse-over", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when the mouse button is released and the mouse pointer is within the map region of the HTML page. */
    on(type: "mouse-up", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when the mouse wheel is scrolled. */
    on(type: "mouse-wheel", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires during the pan process. */
    on(type: "pan", listener: (event: { delta: esri.geometry.Point; extent: esri.geometry.Extent; target: esri.Map }) => void): esri.Handle;
    /** Fires when the pan is complete. */
    on(type: "pan-end", listener: (event: { delta: esri.geometry.Point; extent: esri.geometry.Extent; target: esri.Map }) => void): esri.Handle;
    /** Fires when a user commences panning. */
    on(type: "pan-start", listener: (event: { extent: esri.geometry.Extent; target: esri.Map }) => void): esri.Handle;
    /** Fires when the map DIV is repositioned. */
    on(type: "reposition", listener: (event: { x: number; y: number; target: esri.Map }) => void): esri.Handle;
    /** Fires when the map's container has been resized. */
    on(type: "resize", listener: (event: { extent: esri.geometry.Extent; height: number; width: number; target: esri.Map }) => void): esri.Handle;
    /** Fires when the map's timeesri.geometry.Extent property is set. */
    on(type: "time-extent-change", listener: (event: { timeExtent: Timeesri.geometry.Extent; target: esri.Map }) => void): esri.Handle;
    /** Fires when the page is refreshed. */
    on(type: "unload", listener: (event: { map: esri.Map; target: esri.Map }) => void): esri.Handle;
    /** Fires after layers that are updating their content have completed. */
    on(type: "update-end", listener: (event: { error: Error; target: esri.Map }) => void): esri.Handle;
    /** Fires when one or more layers begins updating their content. */
    on(type: "update-start", listener: (event: { target: esri.Map }) => void): esri.Handle;
    /** Fires during the zoom process. */
    on(type: "zoom", listener: (event: { anchor: esri.geometry.Point; extent: esri.geometry.Extent; zoomFactor: number; target: esri.Map }) => void): esri.Handle;
    /** Fires when the zoom is complete. */
    on(type: "zoom-end", listener: (event: { anchor: esri.geometry.Point; extent: esri.geometry.Extent; level: number; zoomFactor: number; target: esri.Map }) => void): esri.Handle;
    /** Fires when a user commences zooming. */
    on(type: "zoom-start", listener: (event: { anchor: esri.geometry.Point; extent: esri.geometry.Extent; level: number; zoomFactor: number; target: esri.Map }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.Map;
  /** Retrieve data from a remote server or upload a file. */
  export var request: {
    /**
     * Retrieve data from a remote server or upload a file from a user's computer.
     * @param request The request parameter is an object with the following properties that describe the request.
     * @param options See the object specifications table below for the structure of the  options  object.
     */
    (request: any, options?: any): any;
    /**
     * Define a callback function that will be called just before esri.request calls into dojo IO functions such as dojo.rawXhrPost and dojo.io.script.get.
     * @param callbackFunction The callback function that will be executed prior to esri.request calls into dojo IO functions.
     */
    setRequestPreCallback(callbackFunction: Function): void;
  };

  /** The UndoManager is a utility object that allows you to easily build applications with undo/redo functionality. */
  export class UndoManager {
    /** When true, there are redo operations available on the stack. */
    canRedo: boolean;
    /** When true, there are undo operations available on the stack. */
    canUndo: boolean;
    /** The number of operations stored in the history stack. */
    length: number;
    /** The current operation position. */
    position: number;
    /**
     * Creates a new UndoManager object.
     * @param options See options list for parameters.
     */
    constructor(options?: esri.UndoManagerOptions);
    /**
     * Adds an undo operation to the stack and clears the redo stack.
     * @param operation An operation to add to the stack.
     */
    add(operation: OperationBase): void;
    /** Clear the redo stack */
    clearRedo(): void;
    /** Clear the undo stack. */
    clearUndo(): void;
    /** Destroy the operation manager. */
    destroy(): void;
    /**
     * Get the specified operation from the stack.
     * @param operationId The operation id.
     */
    get(operationId: number): esri.OperationBase;
    /** Get the next redo operation from the stack */
    peekRedo(): esri.OperationBase;
    /** Get the next undo operation from the stack. */
    peekUndo(): esri.OperationBase;
    /** Moves the current position to the next redo operation and calls the operation's performRedo() method. */
    redo(): void;
    /**
     * Remove the specified operation from the stack.
     * @param operationId The operation id.
     */
    remove(operationId: number): esri.OperationBase;
    /** Moves the current position to the next undo operation and calls the operation's performUndo method. */
    undo(): void;
    /** Fires when the add method is called to add an operation is added to the stack. */
    on(type: "add", listener: (event: { target: UndoManager }) => void): esri.Handle;
    /** Fires when the undo/redo stack changes. */
    on(type: "change", listener: (event: { target: UndoManager }) => void): esri.Handle;
    /** Fires when the redo method is called. */
    on(type: "redo", listener: (event: { target: UndoManager }) => void): esri.Handle;
    /** Fires when the undo method is called. */
    on(type: "undo", listener: (event: { target: UndoManager }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  /** Esri unit constants. */
  class esri.Units {
    /** esri.Units are acres. */
    static ACRES: any;
    /** esri.Units are ares. */
    static ARES: any;
    /** esri.Units are centimeters. */
    static CENTIMETERS: any;
    /** esri.Units are decimal degrees. */
    static DECIMAL_DEGREES: any;
    /** esri.Units are decimeters. */
    static DECIMETERS: any;
    /** esri.Units are degree, minute, seconds. */
    static DEGREE_MINUTE_SECONDS: any;
    /** esri.Units are feet. */
    static FEET: any;
    /** esri.Units are hectares. */
    static HECTARES: any;
    /** esri.Units are inches. */
    static INCHES: any;
    /** esri.Units are kilometers. */
    static KILOMETERS: any;
    /** esri.Units are meters. */
    static METERS: any;
    /** esri.Units are miles. */
    static MILES: any;
    /** esri.Units are millimeters. */
    static MILLIMETERS: any;
    /** esri.Units are nautical miles. */
    static NAUTICAL_MILES: any;
    /** esri.Units are points. */
    static POINTS: any;
    /** esri.Units are square centimeters. */
    static SQUARE_CENTIMETERS: any;
    /** esri.Units are square deciemeters. */
    static SQUARE_DECIMETERS: any;
    /** esri.Units are square feet. */
    static SQUARE_FEET: any;
    /** esri.Units are square inches. */
    static SQUARE_INCHES: any;
    /** esri.Units are square kilometers. */
    static SQUARE_KILOMETERS: any;
    /** esri.Units are square meters. */
    static SQUARE_METERS: any;
    /** esri.Units are square miles. */
    static SQUARE_MILES: any;
    /** esri.Units are square millimeters. */
    static SQUARE_MILLIMETERS: any;
    /** esri.Units are square yards. */
    static SQUARE_YARDS: any;
    /** esri.Units are unknown. */
    static UNKNOWN: any;
    /** esri.Units are yards. */
    static YARDS: any;
  }
  export = esri.Units;
  /** Utility methods for working with URLs. */
  export var urlUtils: {
    /**
     * Adds the given proxy rule to the proxy rules list: esri.config.defaults.io.proxyRules
     * @param rule The rule argument should have the following properties.
     */
    addProxyRule(rule: any): number;
    /** Returns the proxy rule that matches the given url. */
    getProxyRule(): any;
    /**
     * Converts the URL arguments to an object representation.
     * @param url The input URL.
     */
    urlToObject(url: string): any;
  };
}
declare namespace esri.arcgis {

  /** This class contains information about an OAuth configuration. */
  class esri.arcgis.OAuthInfo {
    /** The registered application Id. */
    appId: string;
    /** Applications with the same value will share the stored token on the same host. */
    authNamespace: string;
    /** The number of minutes the token that the token is valid. */
    expiration: number;
    /** The locale for the OAuth sign in page. */
    locale: string;
    /** The minimum time in minutes before a saved token is due to expire that it should still be considered valid for use. */
    minTimeUntilExpiration: number;
    /** Set to true to show the OAuth sign in page in a popup window. */
    popup: boolean;
    /** The relative page URL for the user to be sent to from the OAuth sign in page. */
    popupCallbackUrl: string;
    /** The window features passed to window.open(). */
    popupWindowFeatures: string;
    /** The ArcGIS for Portal URL. */
    portalUrl: string;
    /**
     * Creates a new esri.arcgis.OAuthInfo given the specified parameters.
     * @param params Various options to configure the esri.arcgis.OAuthInfo object.
     */
    constructor(params: esri.OAuthInfoOptions);
    /** Returns an easily serializable object representation of the OAuthInfo. */
    toJson(): any;
  }
  export = esri.arcgis.OAuthInfo;

  /** The Portal class is part of the ArcGIS Portal API which provides a way to build applications that work with content from ArcGIS Online or an ArcGIS Portal. */
  export class Portal {
    /** The access level of the organization. */
    access: string;
    /** When true, access to the organization's Portal resources must occur over SSL. */
    allSSL: boolean;
    /** The query that defines the basemaps that are displayed in the esri.dijit.Basemap Gallery. */
    basemapGalleryGroupQuery: string;
    /** The Bing key to use for web maps using Bing Maps. */
    bingKey: string;
    /** Whether an organization can list applications in the marketplace . */
    canListApps: boolean;
    /** Whether an organization can list data services in the marketplace. */
    canListData: boolean;
    /** Whether an organization can list pre-provisioned items in the marketplace. */
    canListPreProvisionedItems: boolean;
    /** Whether an organization can provision direct purchases in the marketplace without customer request. */
    canProvisionDirectPurchase: boolean;
    /** When true, the organization's public items, groups and users are included in search queries. */
    canSearchPublic: boolean;
    /** The Bing key can be shared to the public and is returned as part of a portal's description call (/sharing/rest/portals/). */
    canShareBingPublic: boolean;
    /** When true, members of the organization can share resources outside the organization. */
    canSharePublic: boolean;
    /** Whether to allow an organization with an enterprise IDP configured to be able to turn on or off the ArcGIS sign in. */
    canSignInArcGIS: boolean;
    /** Whether to allow an organization with an enterprise IDP configured to be able to turn on or off the enterprise sign in. */
    canSignInIDP: boolean;
    /** The query that identifies the group containing the color sets used for rendering in the map viewer. */
    colorSetsGroupQuery: string;
    /** Whether to allow the organization to disable commenting. */
    commentsEnabled: boolean;
    /** Date the organization was created. */
    created: Date;
    /** The default locale (language and country) information. */
    culture: string;
    /** The custom base URL for the portal. */
    customBaseUrl: string;
    /** The default basemap the portal displays in the map viewer. */
    defaultBasemap: any;
    /** The default extent for the map the portal displays in the map viewer. */
    defaultExtent: any;
    /** A description of the organization / portal. */
    description: string;
    /** The featured groups for the portal. */
    featuredGroups: any[];
    /** The featured groups for the organization. */
    featuredGroupsId: string;
    /** The query that defines the featured group. */
    featuredItemsGroupQuery: string;
    /** The query that identifies the group containing features items for the gallery. */
    galleryTemplatesGroupQuery: string;
    /** The group that contains featured content to be displayed on the home page. */
    homePageFeaturedContent: string;
    /** The number of featured items that can be displayed on the home page. */
    homePageFeaturedContentCount: number;
    /** The port used by the portal for HTTP communication. */
    httpPort: number;
    /** The port used by the portal for HTTPS communication. */
    httpsPort: number;
    /** The id of the organization that owns this portal. */
    id: string;
    /** The country code of the calling IP (ArcGIS Online only). */
    ipCntryCode: string;
    /** Indicates if the portal is an organization. */
    isOrganization: boolean;
    /** Indicates if the portal is on premises. */
    isPortal: boolean;
    /** The query that defines the collection of editable layer templates. */
    layerTemplatesGroupQuery: string;
    /** The maximum validity in minutes of tokens issued for users of the organization. */
    maxTokenExpirationMinutes: number;
    /** Date the organization was last modified. */
    modified: Date;
    /** The Name of the organization / portal. */
    name: string;
    /** The portal host's URL. */
    portalHostname: string;
    /** Denotes multitenant or singletenant. */
    portalMode: string;
    /** The name of the portal, i.e., ArcGIS Online. */
    portalName: string;
    /** Stores properties specific to the organization, for example the "contact us" link. */
    portalProperties: any;
    /** The URL to the thumbnail of the portal. */
    portalThumbnail: string;
    /** URL to the portal. */
    portalUrl: string;
    /** The region for the organization. */
    region: string;
    /** Custom HTML for the home page. */
    rotatorPanels: string[];
    /** Whether the description of your organization displays on the home page. */
    showHomePageDescription: boolean;
    /** Whether hosted services are supported. */
    supportsHostedServices: boolean;
    /** Whether OAuth is supported. */
    supportsOAuth: boolean;
    /** The query that defines the symbols sets used by the map viewer. */
    symbolSetsGroupQuery: string;
    /** The query that defines the collection of templates that will appear in the template gallery. */
    templatesGroupQuery: string;
    /** The URL to the thumbnail of the organization. */
    thumbnail: string;
    /** The url to the thumbnail of the organization (full path). */
    thumbnailUrl: string;
    /** Sets the units of measure for the organization's users. */
    units: string;
    /** The portal url. */
    url: string;
    /** The prefix selected by the organization's administrator to be used with the customBaseURL. */
    urlKey: string;
    /** User information for the accessing user is returned only when a token is passed in. */
    user: any;
    /** If true, only simple where clauses that are complaint with SQL92 can be used when querying layers and tables. */
    useStandardizedQuery: boolean;
    /**
     * Creates a new Portal object.
     * @param url URL to the ArcGIS.com site or in-house portal.
     */
    constructor(url: string);
    /** Returns a PortalUser object that describes the user currently signed in to the portal. */
    getPortalUser(): PortalUser;
    /**
     * Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalGroup objects for all the groups that match the input query.
     * @param queryParams The input query parameters.
     */
    queryGroups(queryParams?: PortalQueryParams): any;
    /**
     * Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalItem objects that match the input query.
     * @param queryParams The input query parameters.
     */
    queryItems(queryParams?: PortalQueryParams): any;
    /**
     * Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalUser objects that match the input query.
     * @param queryParams The input query parameters.
     */
    queryUsers(queryParams?: PortalQueryParams): any;
    /** Prompts the user using the IdentityManager and returns a deferred that, when resolved, returns the PortalUser for the input credentials. */
    signIn(): any;
    /** Sign out of the Portal which resets the Portal and disables identity checking. */
    signOut(): Portal;
    /** Fires when the signIn() call fails or if the Portal is not able to load. */
    on(type: "error", listener: (event: { error: Error; target: Portal }) => void): esri.Handle;
    /** Fired when the portal has loaded. */
    on(type: "load", listener: (event: { target: Portal }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  /** Details about a comment on a Portal item.View the ArcGIS Portal API REST documentation for the item comment for more details. */
  export class PortalComment {
    /** The comment text. */
    comment: string;
    /** The date and time the comment was created. */
    created: string;
    /** The comment id. */
    id: string;
    /** The user name of the user who created the comment. */
    owner: string;
  }
  /** The PortalFolder class provides information about folders used to organize content in a portal. */
  export class PortalFolder {
    /** The date the folder was created. */
    created: Date;
    /** The id of the folder. */
    id: string;
    /** The portal for the folder. */
    portal: Portal;
    /** The title of the folder. */
    title: string;
    /** The url to to the folder. */
    url: string;
    /** Find all the items in the folder. */
    getItems(): any;
  }
  /** The group resource represents a group within the Portal. */
  export class PortalGroup {
    /** The access privileges on the group which determines who can see and access the group. */
    access: string;
    /** The date the group was created. */
    created: Date;
    /** A detailed description of the group. */
    description: string;
    /** The id for the group. */
    id: string;
    /** If this is set to true, then users will not be able to apply to join the group. */
    isInvitationOnly: boolean;
    /** Denotes a view only group where members are not able to share items. */
    isViewOnly: boolean;
    /** The date the group was last modified. */
    modified: Date;
    /** The username of the group's owner. */
    owner: Portal;
    /** The portal for the group. */
    portal: Portal;
    /** A short summary that describes the group. */
    snippet: string;
    /** User defined tags that describe the group. */
    tags: string[];
    /** The url to the thumbnail used for the group. */
    thumbnailUrl: string;
    /** The title for the group. */
    title: string;
    /** The url to the group. */
    url: string;
    /** Get the current members for the group. */
    getMembers(): any;
    /**
     * Execute a query against the group to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalItem objects that match the input query.
     * @param queryParams The input query parameters.
     */
    queryItems(queryParams?: PortalQueryParams): any;
  }
  /** List the users, owner and administrator of a group. */
  export class PortalGroupMembers {
    /** An array containing the user names for each administrator of the group. */
    admins: string[];
    /** The user name of the owner of the group. */
    owner: string;
    /** An array containing the user names for each user in the group. */
    users: string[];
  }
  /** An item (a unit of content) in the Portal. */
  export class PortalItem {
    /** Indicates the level of access: private, shared, org, or public. */
    access: string;
    /** Information on the source of the item. */
    accessInformation: string;
    /** Average rating. */
    avgRating: number;
    /** The date the item was created. */
    created: Date;
    /** The item locale information (language and country). */
    culture: string;
    /** The detailed description of the item. */
    description: string;
    /** The bounding rectangle of the item. */
    extent: any;
    /** The unique id for this item. */
    id: string;
    /** The url to the data resource associated with the item. */
    itemDataUrl: string;
    /** The url to the item. */
    itemUrl: string;
    /** Any license information or restrictions. */
    licenseInfo: string;
    /** Date the item was last modified. */
    modified: Date;
    /** The name of the item. */
    name: string;
    /** Number of comments on the item. */
    numComments: number;
    /** Number of ratings on the item. */
    numRatings: number;
    /** Number of views on the item. */
    numViews: number;
    /** The username of the user who owns this item. */
    owner: string;
    /** The portal that contains the item. */
    portal: Portal;
    /** The size of the item. */
    size: number;
    /** A summary description of the item. */
    snippet: string;
    /** The item's coordinate system. */
    spatialReference: string;
    /** User defined tags that describe the item. */
    tags: string[];
    /** The url to the thumbnail used for the item. */
    thumbnailUrl: string;
    /** The title for the item. */
    title: string;
    /** The gis content type of this item. */
    type: string;
    /** A set of keywords that further describes the type of this item. */
    typeKeywords: string[];
    /** The url for the resource represented by the item. */
    url: string;
    /** The url to the user item. */
    userItemUrl: string;
    /**
     * Add a comment to the item.
     * @param comment The text for the comment.
     */
    addComment(comment: string): any;
    /**
     * Add a rating to an item that you have access to.
     * @param rating Rating to set for the item.
     */
    addRating(rating: number): any;
    /**
     * Deletes an item comment.
     * @param comment The PortalComment to delete.
     */
    deleteComment(comment: PortalComment): any;
    /**
     * Delete a rating that you created for the specified item.
     * @param rating Rating to delete.
     */
    deleteRating(rating: PortalRating): any;
    /** Get the comments associated with the item. */
    getComments(): any;
    /** Returns the rating (if any) given to the item. */
    getRating(): any;
    /**
     * Updates an item comment.
     * @param comment A PortalComment that contains the comment updates.
     */
    updateComment(comment: PortalComment): any;
  }
  /** Define parameters to use when querying. */
  export class PortalQueryParams {
    /** The maximum number of results to be included in the result set response. */
    num: string;
    /** The query string to search with. */
    q: string;
    /** A comma separated list of field(s) to sort by. */
    sortField: string;
    /** The number of the first entry in the result set response. */
    start: string;
  }
  /** Details about the result of a query. */
  export class PortalQueryResult {
    /** The query parameters for the next set of results. */
    nextQueryParams: PortalQueryParams;
    /** The query parameters for the first set of results. */
    queryParams: PortalQueryParams;
    /** An array of  result item objects. */
    results: any[];
    /** The total number of results. */
    total: number;
  }
  /** Details about the rating associated with a Portal item. */
  export class PortalRating {
    /** Date the rating was added to the item. */
    created: Date;
    /** A rating between 1.0 and 5.0 for the item. */
    rating: number;
  }
  /** Represents a registered user of the Portal. */
  export class PortalUser {
    /** The access level for the user: private, org or public. */
    access: string;
    /** The date the user was created. */
    created: Date;
    /** The default culture for the user. */
    culture: string;
    /** Description of the user. */
    description: string;
    /** The user's email address. */
    email: string;
    /** The user's full name. */
    fullName: string;
    /** The date the user was modified. */
    modified: Date;
    /** The id of the organization the user belongs to. */
    orgId: string;
    /** The portal. */
    portal: Portal;
    /** The user's preferred view for content, either Web or GIS. */
    preferredView: string;
    /** The user's preferred region, used to set the featured maps on the portal home page, content in the gallery and the default extent for new maps in the Viewer. */
    region: string;
    /** The user's role in the organization: administrator (org_admin), publisher (org_publisher), or user (org_user). */
    role: string;
    /** User-defined tags that describe the user. */
    tags: string[];
    /** The url to the thumbnail image for the user. */
    thumbnailUrl: string;
    /** The url for the user content. */
    userContentUrl: string;
    /** The username for the user. */
    username: string;
    /** Find folders for the portal user. */
    getFolders(): any;
    /** Provides access to the group invitations for the portal user. */
    getGroupInvitations(): any;
    /** Find all the groups that the portal user has permissions to access. */
    getGroups(): any;
    /**
     * Get the portal item along with folder info for the input item id.
     * @param itemId The id of the item.
     */
    getItem(itemId: string): any;
    /**
     * Retrieve all the items in the specified folder.
     * @param folderId The id of the folder that contains the items to retrieve.
     */
    getItems(folderId: string): any;
    /** Get information about any notifications for the portal user. */
    getNotifications(): any;
    /** Access the tag objects that have been created by the portal user. */
    getTags(): any;
  }

  /** Utility methods to work with content from ArcGIS.com. */
  export var utils: {
    /** Specify the domain where the map associated with the webmap id is located. */
    arcgisUrl: string;
    /**
     * Create a map using information from an ArcGIS.com item.
     * @param itemIdOrItemInfo An itemId for an ArcGIS.com item or the response object obtained from calling the arcgisUtils.getItem method.
     * @param mapDiv Container ID for referencing map.
     * @param options Optional parameters that define the map functionality.
     */
    createMap(itemIdOrItemInfo: string, mapDiv: string, options?: any): any;
    /**
     * Create a map using information from an ArcGIS.com item.
     * @param itemIdOrItemInfo An itemId for an ArcGIS.com item or the response object obtained from calling the arcgisUtils.getItem method.
     * @param mapDiv Container ID for referencing map.
     * @param options Optional parameters that define the map functionality.
     */
    createMap(itemIdOrItemInfo: any, mapDiv: string, options?: any): any;
    /**
     * Get details about the input ArcGIS.com item.
     * @param itemId The itemId for a publicly shared ArcGIS.com item.
     */
    getItem(itemId: string): any;
    /**
     * Can be used with esri.dijit.Legend to get the layerInfos list to be passed into the Legend constructor.
     * @param createMapResponse Object returned by .createMap() in the .then() callback.
     */
    getLegendLayers(createMapResponse: any): esri.layers.Layer[];
  };
}
declare namespace esri.dijit {

  /** The AttributeInspector displays the attributes of selected features from one or more feature layers. */
  export class AttributeInspector {
    /** esri.layers.Field displayed as a rich text field. */
    static STRING_FIELD_OPTION_RICHTEXT: any;
    /** esri.layers.Field displayed as a text area. */
    static STRING_FIELD_OPTION_TEXTAREA: any;
    /** esri.layers.Field displays as a text box. */
    static STRING_FIELD_OPTION_TEXTBOX: any;
    /**
     * Creates a new Attribute Inspector object.
     * @param params See options list.
     * @param srcNodeRef HTML element where the attribute inspector should be rendered.
     */
    constructor(params: esri.AttributeInspectorOptions, srcNodeRef: Node);
    /**
     * Creates a new Attribute Inspector object.
     * @param params See options list.
     * @param srcNodeRef HTML element where the attribute inspector should be rendered.
     */
    constructor(params: esri.AttributeInspectorOptions, srcNodeRef: string);
    /** Destroys the widget, used for page clean up. */
    destroy(): void;
    /** Moves to the first feature. */
    first(): void;
    /** Moves to the last feature. */
    last(): void;
    /** Move to the next feature. */
    next(): void;
    /** Move to the previous feature. */
    previous(): void;
    /** Updates the contents of the AttributeInspector. */
    refresh(): void;
    /** Fires when a fields value changes. */
    on(type: "attribute-change", listener: (event: { feature: esri.Graphic; fieldName: string; fieldValue: string; target: AttributeInspector }) => void): esri.Handle;
    /** Fires when the AttributeInspector's delete button is pressed. */
    on(type: "delete", listener: (event: { feature: esri.Graphic; target: AttributeInspector }) => void): esri.Handle;
    /** Fires when the AttributeInspector's next or back button is pressed. */
    on(type: "next", listener: (event: { feature: esri.Graphic; target: AttributeInspector }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** Displays attribution text for the layers in a map. */
  class esri.dijit.Attribution {
    /** String used as the delimiter between attribution items. */
    itemDelimiter: string;
    /** Object containing elements where each element contains attribution text for a layer in the map. */
    itemNodes: any;
    /** Reference to the span element that contains all the attribution items. */
    listNode: HTMLSpanElement;
    /** Reference to the map object for which the widget is displaying attribution. */
    map: esri.Map;
    /**
     * Creates a new esri.dijit.Attribution object.
     * @param options An object that defines the attribution options.
     * @param srcNodeRef HTML element where the time slider should be rendered.
     */
    constructor(options: esri.AttributionOptions, srcNodeRef: Node);
    /**
     * Creates a new esri.dijit.Attribution object.
     * @param options An object that defines the attribution options.
     * @param srcNodeRef HTML element where the time slider should be rendered.
     */
    constructor(options: esri.AttributionOptions, srcNodeRef: string);
    /** Destroy the attribution widget. */
    destroy(): void;
  }
  export = esri.dijit.Attribution;

  /** Define a basemap to display in the BasemapGallery dijit. */
  class esri.dijit.Basemap {
    /** The basemap's id. */
    id: string;
    /** The URL to the thumbnail image for the basemap. */
    thumbnailUrl: string;
    /** The title for the basemap. */
    title: string;
    /**
     * Creates a new esri.dijit.Basemap Object.
     * @param params Set of parameters used to create a basemap.
     */
    constructor(params: esri.BasemapOptions);
    /** The list of layers contained in the basemap or a dojo.Deferred if a call to ArcGIS.com needs to be made to retrieve the list of ArcGIS.com basemaps. */
    getLayers(): esri.dijit.Basemapesri.layers.Layer[];
  }
  export = esri.dijit.Basemap;

  /** The BasemapGallery dijit displays a collection basemaps from ArcGIS.com or a user-defined set of map or image services. */
  export class BasemapGallery {
    /** List of basemaps displayed in the BasemapGallery. */
    basemaps: esri.dijit.Basemap[];
    /** This value is true after the BasemapGallery retrieves the ArcGIS.com basemaps. */
    loaded: boolean;
    /** Optional parameter to pass in a portal URL, including the instance name, used to access the group containing the basemap gallery items. */
    portalUrl: string;
    /**
     * Creates a new BasemapGallery dijit.
     * @param params Parameters used to configure the widget.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.BasemapGalleryOptions, srcNodeRef?: Node);
    /**
     * Creates a new BasemapGallery dijit.
     * @param params Parameters used to configure the widget.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.BasemapGalleryOptions, srcNodeRef?: string);
    /**
     * Add a new basemap to the BasemapGallery's list of basemaps.
     * @param basemap The basemap to add to the map.
     */
    add(basemap: Basemap): boolean;
    /** Destroys the basemap gallery. */
    destroy(): void;
    /**
     * Return the basemap with the specified id.
     * @param id The basemap id.
     */
    get(id: string): esri.dijit.Basemap;
    /** Gets the currently selected basemap. */
    getSelected(): esri.dijit.Basemap;
    /**
     * Remove a basemap from the BasemapGallery's list of basemaps.
     * @param id The basemap id.
     */
    remove(id: string): esri.dijit.Basemap;
    /**
     * Select a new basemap for the map.
     * @param id The basemap id.
     */
    select(id: string): esri.dijit.Basemap;
    /** Finalizes the creation of the basemap gallery. */
    startup(): void;
    /** Fires when a basemap is added to the BasemapGallery's list of basemaps. */
    on(type: "add", listener: (event: { basemap: esri.dijit.Basemap; target: BasemapGallery }) => void): esri.Handle;
    /** Fires when an error occurs while switching basemaps. */
    on(type: "error", listener: (event: { target: BasemapGallery }) => void): esri.Handle;
    /** Fires when the BasemapGallery retrieves the ArcGIS.com basemaps. */
    on(type: "load", listener: (event: { target: BasemapGallery }) => void): esri.Handle;
    /** Fires when a basemap is removed from the BasemapGallery's list of basemaps. */
    on(type: "remove", listener: (event: { basemap: esri.dijit.Basemap; target: BasemapGallery }) => void): esri.Handle;
    /** Fires after the map is updated with a new basemap. */
    on(type: "selection-change", listener: (event: { target: BasemapGallery }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** Defines a layer that will be added to a basemap and displayed in the BasemapGallery dijit. */
  class esri.dijit.Basemapesri.layers.Layer {
    /** The attribution information for the layer. */
    copyright: string;
    /** The full extent of the layer. */
    fullExtent: esri.geometry.Extent;
    /** The initial extent of the layer. */
    initialExtent: esri.geometry.Extent;
    /** The subDomains where tiles are served to speed up tile retrieval (using subDomains gets around the browser limit of the max number of concurrent requests to a domain). */
    subDomains: string[];
    /** The tile info for the layer including lods, rows, cols, origin and spatial reference. */
    tileInfo: esri.layers.TileInfo;
    /** Additional tile server domains for the layer. */
    tileServer: string[];
    /** The type of layer. */
    type: string;
    /**
     * Creates a new esri.dijit.Basemapesri.layers.Layer object.
     * @param params Set of parameters used to create a basemap layer.
     */
    constructor(params: esri.BasemapLayerOptions);
  }
  export = esri.dijit.Basemapesri.layers.Layer;

  /** BasemapToggle provides a simple button to toggle between two basemaps. */
  export class BasemapToggle {
    /** The secondary basemap to toggle to. */
    basemap: string;
    /** Object containing the labels and URLs for the image of each basemap. */
    basemaps: any;
    /** Whether the widget has been loaded. */
    loaded: boolean;
    /** esri.Map object that this dijit is associated with. */
    map: esri.Map;
    /** Class used for styling the widget. */
    theme: string;
    /** Whether the widget is visible by default. */
    visible: boolean;
    /**
     * Creates a new BasemapToggle dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.BasemapToggleOptions, srcNodeRef: Node);
    /**
     * Creates a new BasemapToggle dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.BasemapToggleOptions, srcNodeRef: string);
    /** Destroys the widget. */
    destroy(): void;
    /** Hides the widget. */
    hide(): void;
    /** Shows the widget. */
    show(): void;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Toggles to the next basemap. */
    toggle(): void;
    /** Fires when the widget has been loaded. */
    on(type: "load", listener: (event: { target: BasemapToggle }) => void): esri.Handle;
    /** Fires when the toggle method has been called. */
    on(type: "toggle", listener: (event: { currentBasemap: string; error: any; previousBasemap: string; target: BasemapToggle }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** Defines a bookmark for use in the Bookmark widget. */
  class esri.dijit.BookmarkItem {
    /**
     * Creates a new BookmarkItem.
     * @param name The name for the bookmark item.
     * @param extent The extent for the specified bookmark item.
     */
    constructor(name: string, extent: Extent);
  }
  export = esri.dijit.BookmarkItem;

  /** The Bookmarks widget is a ready to use tool for bookmarking the current map extent. */
  export class Bookmarks {
    /** An array of esri.dijit.BookmarkItem objects. */
    bookmarks: esri.dijit.BookmarkItem[];
    /**
     * Creates a new Bookmark widget
     * @param params See options list for parameters.
     * @param srcNodeRef HTML element where the bookmark widget should be rendered.
     */
    constructor(params: esri.BookmarksOptions, srcNodeRef: Node);
    /**
     * Creates a new Bookmark widget
     * @param params See options list for parameters.
     * @param srcNodeRef HTML element where the bookmark widget should be rendered.
     */
    constructor(params: esri.BookmarksOptions, srcNodeRef: string);
    /**
     * Add a new bookmark to the bookmark widget.
     * @param bookmarkItem A esri.dijit.BookmarkItem or json object with the same structure that defines the new location.
     */
    addBookmark(bookmarkItem: BookmarkItem): void;
    /** Destroy the bookmark widget. */
    destroy(): void;
    /** Hides the Bookmark widget. */
    hide(): void;
    /**
     * Remove a bookmark from the bookmark widget.
     * @param bookmarkName The name of the bookmark to remove from the bookmark widget.
     */
    removeBookmark(bookmarkName: string): void;
    /** Show the Bookmark widget. */
    show(): void;
    /** Returns an array of json objects with the following structure:  [{   name:bookmarkName,   extent:bookmarkesri.geometry.Extent }]  */
    toJson(): any;
    /** Fired when a bookmark item is clicked. */
    on(type: "click", listener: (event: { target: Bookmarks }) => void): esri.Handle;
    /** Fired after the bookmark item is edited. */
    on(type: "edit", listener: (event: { target: Bookmarks }) => void): esri.Handle;
    /** Fired when a bookmark item is removed. */
    on(type: "remove", listener: (event: { target: Bookmarks }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The Directions widget makes it easy to calculate directions between two or more input locations. */
  export class Directions {
    /** Get the directions to all the locations along the route. */
    directions: esri.tasks.Directionsesri.tasks.FeatureSet;
    /** An array of  objects that defines the potential matches for the input locations. */
    geocoderResults: any[];
    /** When true, the maximum number of stops for the route has been reached. */
    maxStopsReached: boolean;
    /** The graphic for the calculated route. */
    mergedRouteGraphic: esri.Graphic;
    /** Routing parameters for the widget. */
    routeParams: esri.tasks.RouteParameters;
    /** Routing task for the widget. */
    routeTask: esri.tasks.RouteTask;
    /** The Service Description object returned by the Route REST Endpoint. */
    serviceDescription: any;
    /** If true, the Clear button is shown. */
    showClearButton: boolean;
    /** If true, the toggle button group allowing user to choose between Miles and Kilometers is shown. */
    showMilesKilometersOption: boolean;
    /** If true, and supported by the service, then two toggle button groups are shown: one to allow user to choose between driving a car, a truck, or walking, and one more group to choose between fastest or shortest routes. */
    showTravelModesOption: boolean;
    /** An array of graphics that define the stop locations along the route. */
    stops: esri.Graphic[];
    /** The css theme used to style the widget. */
    theme: string;
    /** If Directions Widget runs with Travel Modes enabled, this property returns current Travel Mode name. */
    travelModeName: string;
    /**
     * Creates a new Directions dijit using the given DOM node.
     * @param options Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(options: esri.DirectionsOptions, srcNodeRef: Node);
    /**
     * Creates a new Directions dijit using the given DOM node.
     * @param options Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(options: esri.DirectionsOptions, srcNodeRef: string);
    /** Activates the widget to listen for map clicks: each map click adds a destination to the widget automatically. */
    activate(): void;
    /**
     * Add a stop to the directions widget at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index location where the stop should be added.
     */
    addStop(stop: esri.geometry.Point, index?: number): any;
    /**
     * Add a stop to the directions widget at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index location where the stop should be added.
     */
    addStop(stop: number[], index?: number): any;
    /**
     * Add a stop to the directions widget at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index location where the stop should be added.
     */
    addStop(stop: string, index?: number): any;
    /**
     * Add a stop to the directions widget at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index location where the stop should be added.
     */
    addStop(stop: any, index?: number): any;
    /**
     * Add multiple stops to the directions list starting at the specified location.
     * @param stops An array of points that define the stop locations.
     * @param index The index location where the stops will be added.
     */
    addStops(stops: esri.geometry.Point[], index?: number): any;
    /**
     * Add multiple stops to the directions list starting at the specified location.
     * @param stops An array of points that define the stop locations.
     * @param index The index location where the stops will be added.
     */
    addStops(stops: number[][], index?: number): any;
    /**
     * Add multiple stops to the directions list starting at the specified location.
     * @param stops An array of points that define the stop locations.
     * @param index The index location where the stops will be added.
     */
    addStops(stops: string[], index?: number): any;
    /**
     * Add multiple stops to the directions list starting at the specified location.
     * @param stops An array of points that define the stop locations.
     * @param index The index location where the stops will be added.
     */
    addStops(stops: any[], index?: number): any;
    /**
     * Center the map at the start of the specified route segment.
     * @param index The index of the segment where the map should be centered.
     */
    centerAtSegmentStart(index: number): void;
    /** Remove the route directions from the directions list. */
    clearDirections(): void;
    /** Deactivates the widget from listening for map clicks. */
    deactivate(): void;
    /** Destroy the Directions widget. */
    destroy(): void;
    /** Calculate the route to the input locations and display the list of directions. */
    getDirections(): any;
    /** If widget runs with Travel Modes enabled, call this method to obtain the list of supported Travel Mode names. */
    getSupportedTravelModeNames(): string[];
    /**
     * Highlight the specified route segment on the map.
     * @param index The index of the route segment to highlight.
     */
    highlightSegment(index: number): void;
    /**
     * Remove the stop at the specified index.
     * @param index The index of the stop to remove.
     */
    removeStop(index: number): any;
    /** Removes the existing stops from the directions widget. */
    removeStops(): void;
    /** Resets the directions widget removing any directions, stops and map graphics. */
    reset(): void;
    /**
     * If widget runs with Travel Modes enabled, call this method to switch to particular Travel mode programmatically.
     * @param travelModeName Travel mode.
     */
    setTravelMode(travelModeName: string): any;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Removes the highlight symbol from the currently highlighted route segment. */
    unhighlightSegment(): void;
    /**
     * Update the existing stop at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index of the stop to update.
     */
    updateStop(stop: esri.geometry.Point, index: number): any;
    /**
     * Update the existing stop at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index of the stop to update.
     */
    updateStop(stop: number[], index: number): any;
    /**
     * Update the existing stop at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index of the stop to update.
     */
    updateStop(stop: string, index: number): any;
    /**
     * Update the existing stop at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index of the stop to update.
     */
    updateStop(stop: any, index: number): any;
    /**
     * Update multiple stops in the directions widget by specifying an array of stops information.
     * @param stops An array of points that define the stop locations.
     */
    updateStops(stops: esri.geometry.Point[]): any;
    /**
     * Update multiple stops in the directions widget by specifying an array of stops information.
     * @param stops An array of points that define the stop locations.
     */
    updateStops(stops: number[][]): any;
    /**
     * Update multiple stops in the directions widget by specifying an array of stops information.
     * @param stops An array of points that define the stop locations.
     */
    updateStops(stops: string[]): any;
    /**
     * Update multiple stops in the directions widget by specifying an array of stops information.
     * @param stops An array of points that define the stop locations.
     */
    updateStops(stops: any[]): any;
    /** Zoom so that the full route is displayed within the current map extent. */
    zoomToFullRoute(): void;
    /**
     * Zoom to the specified route segment.
     * @param index The index for a route segment.
     */
    zoomToSegment(index: number): void;
    /** Fires when the directions display is reset. */
    on(type: "directions-clear", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fires when the route service has calculated the route and the directions are ready for display. */
    on(type: "directions-finish", listener: (event: { result: esri.tasks.RouteResult; target: Directions }) => void): esri.Handle;
    /** Fires when the route services starts to calculate the route. */
    on(type: "directions-start", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fires when the directions widget has fully loaded. */
    on(type: "load", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fired when you hover over a route segment in the directions display. */
    on(type: "segment-highlight", listener: (event: { graphic: esri.Graphic; target: Directions }) => void): esri.Handle;
    /** Fires when a route segment is selected in the directions display. */
    on(type: "segment-select", listener: (event: { graphic: esri.Graphic; target: Directions }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** (Beta at v3.12) Creates an instance of the FeatureTable widget within the provided DOM node. */
  export class FeatureTable {
    /** An optional dGrid property. */
    allowSelectAll: boolean;
    /** An optional dGrid property. */
    cellNavigation: boolean;
    /** A reference to the column objects and their parameters. */
    columns: any[];
    /** Reference to the dataStore used by the dGrid. */
    dataStore: any;
    /** Object defining the date options specific for the table. */
    dateOptions: any;
    /** The featureesri.layers.Layer that the table is associated with. */
    featureLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the dGrid. */
    grid: any;
    /** Optional columns to hide by default using the dGrid ColumnHider extension. */
    hiddenFields: string[];
    /** A reference to the primary key used by the dataStore to differentiate columns. */
    idProperty: string;
    /** When true, the FeatureTable widget has successfully loaded. */
    loaded: boolean;
    /** Reference to the map. */
    map: esri.Map;
    /** A dGrid property. */
    noDataMessage: string;
    /** Attribute fields to include in the FeatureTable. */
    outFields: string[];
    /** Indicates whether the data is editable via the widget. */
    readOnly: boolean;
    /** A dGrid property. */
    selectionMode: string;
    /**
     * Creates an instance of the FeatureTable widget within the provided DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FeatureTableOptions, srcNodeRef: Node);
    /**
     * Creates an instance of the FeatureTable widget within the provided DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FeatureTableOptions, srcNodeRef: string);
    /** Fired when a row is deselected. */
    on(type: "dgrid-deselect", listener: (event: { target: FeatureTable }) => void): esri.Handle;
    /** Fired when the grid is refreshed. */
    on(type: "dgrid-refresh-complete", listener: (event: { target: FeatureTable }) => void): esri.Handle;
    /** Fired when a row is selected. */
    on(type: "dgrid-select", listener: (event: { target: FeatureTable }) => void): esri.Handle;
    /** Fired when the FeatureTable is loaded. */
    on(type: "load", listener: (event: { target: FeatureTable }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The Gallery widget provides a touch-aware thumbnail gallery for mobile devices such as iOS and Android. */
  export class Gallery {
    /**
     * Creates a new mobile Gallery.
     * @param params See options list.
     * @param srcNodeRef HTML element where the  gallery should be rendered.
     */
    constructor(params: esri.GalleryOptions, srcNodeRef: Node);
    /**
     * Creates a new mobile Gallery.
     * @param params See options list.
     * @param srcNodeRef HTML element where the  gallery should be rendered.
     */
    constructor(params: esri.GalleryOptions, srcNodeRef: string);
    /** Removes any object references and associated objects created by the gallery. */
    destroy(): void;
    /** Gets the item with the current focus. */
    getFocusedItem(): any;
    /** Get the currently selected item. */
    getSelectedItem(): any;
    /** Move the gallery to the next page of items. */
    next(): void;
    /** Move the gallery to the previous page of items. */
    previous(): void;
    /**
     * Select an item in the gallery.
     * @param item The item to select.
     */
    select(item: any): void;
    /**
     * Set the focus to the specified item.
     * @param item The item which will have focus.
     */
    setFocus(item: any): void;
    /** Finalize the creation of the gallery. */
    startup(): void;
    /** Fires when the items setFocus method is called. */
    on(type: "focus", listener: (event: { item: any; target: Gallery }) => void): esri.Handle;
    /** Fires when an item is selected. */
    on(type: "select", listener: (event: { item: any; target: Gallery }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The gauge widget provides a streamlined way to create a dashboard-like interface and display data on a semi-circular gauge. */
  export class Gauge {
    /**
     * Create a new Gauge object.
     * @param params See options list for parameters.
     * @param srcNodeRef HTML element where the  gauge should be rendered.
     */
    constructor(params: esri.GaugeOptions, srcNodeRef: Node);
    /**
     * Create a new Gauge object.
     * @param params See options list for parameters.
     * @param srcNodeRef HTML element where the  gauge should be rendered.
     */
    constructor(params: esri.GaugeOptions, srcNodeRef: string);
    /** Destroy the gauge. */
    destroy(): void;
    /**
     * Get the value of the property from the Gauge.
     * @param name Property to get value.
     */
    get(name: string): any;
    /**
     * Set the value of a property from the Gauge.
     * @param name Property to set value.
     * @param value Value to set.
     */
    set(name: string, value: string): Gauge;
    /**
     * Set the value of a property from the Gauge.
     * @param name Property to set value.
     * @param value Value to set.
     */
    set(name: string, value: Graphic): Gauge;
    /**
     * Set the value of a property from the Gauge.
     * @param name Property to set value.
     * @param value Value to set.
     */
    set(name: string, value: number): Gauge;
    /** Finalizes the creation of the gauge. */
    startup(): void;
  }

  /** Add a geographic search box to an application. */
  class esri.dijit.Geocoder {
    /** Currently selected locator object. */
    activeGeocoder: any;
    /** Current locator index to search by default. */
    activeGeocoderIndex: number;
    /** When true, the auto-complete menu is enabled. */
    autoComplete: boolean;
    /** When true, the widget will navigate to the selected location. */
    autoNavigate: boolean;
    /** When true the geocoder menu is enabled. */
    geocoderMenu: boolean;
    /** List of geocoders the widget uses to find search results. */
    geocoders: any[];
    /** Specify a graphicsesri.layers.Layer to use when  highlightesri.symbols.Symbol is true. */
    graphicsLayer: esri.layers.Graphicsesri.layers.Layer;
    /** Indicates whether to show a graphic at a selected location. */
    highlightLocation: boolean;
    /** Maximum number of locations to display in the results menu. */
    maxLocations: number;
    /** Minimum number of characters required before the query is performed. */
    minCharacters: number;
    /** Current results from query or select. */
    results: any[];
    /** Delay in milliseconds before each keyUp calls for the query to be performed. */
    searchDelay: number;
    /** When true, suggestions are displayed as the user is typing. */
    showResults: boolean;
    /** esri.symbols.Symbol to use when  highlightLocation is true. */
    symbol: esri.symbols.Symbol;
    /** Current theme being used to style the widget. */
    theme: string;
    /** Current value of the input textbox. */
    value: string;
    /** Scale to zoom to when geocoder does not return an extent. */
    zoomScale: number;
    /**
     * Create a new esri.dijit.Geocoder widget using the given DOM node.
     * @param params Set of parameters used to specify esri.dijit.Geocoder options.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.GeocoderOptions, srcNodeRef: Node);
    /**
     * Create a new esri.dijit.Geocoder widget using the given DOM node.
     * @param params Set of parameters used to specify esri.dijit.Geocoder options.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.GeocoderOptions, srcNodeRef: string);
    /** Unfocus the widget's text input. */
    blur(): void;
    /** Clears the values currently set in the widget. */
    clear(): void;
    /** Releases all the resources used by the widget. */
    destroy(): void;
    /** Executes a search using the current value of the geocoder. */
    find(): any;
    /** Brings focus to the widget's text input. */
    focus(): void;
    /** Hide the widget. */
    hide(): void;
    /**
     * Select a result using a result object.
     * @param result An object with the following properties.
     */
    select(result: any): void;
    /** Show the widget. */
    show(): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fired when results are returned from an auto-complete. */
    on(type: "auto-complete", listener: (event: { results : any; target: esri.dijit.Geocoder }) => void): esri.Handle;
    /** Fired when a result is cleared from the input box or a new result is selected. */
    on(type: "clear", listener: (event: { target: esri.dijit.Geocoder }) => void): esri.Handle;
    /** Fired when results are returned from a search. */
    on(type: "find-results", listener: (event: { results: any; target: esri.dijit.Geocoder }) => void): esri.Handle;
    /** Fired when a geocoder is selected. */
    on(type: "geocoder-select", listener: (event: { geocoder: any; target: esri.dijit.Geocoder }) => void): esri.Handle;
    /** Fired when a result has been selected, the submit button is pressed, or the enter key is fired. */
    on(type: "select", listener: (event: { results: any; target: esri.dijit.Geocoder }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.dijit.Geocoder;

  /** The Histogramesri.dijit.TimeSlider dijit provides a histogram chart representation of data for time-enabled layers on a map. */
  class Histogramesri.dijit.TimeSlider {
    /**
     * Creates a new Histogramesri.dijit.TimeSlider dijit using the given DOM node.
     * @param params Input parameters.
     * @param srcNodeRef HTML element where the tool should be rendered.
     */
    constructor(params: esri.HistogramTimeSliderOptions, srcNodeRef: Node);
    /**
     * Creates a new Histogramesri.dijit.TimeSlider dijit using the given DOM node.
     * @param params Input parameters.
     * @param srcNodeRef HTML element where the tool should be rendered.
     */
    constructor(params: esri.HistogramTimeSliderOptions, srcNodeRef: string);
    /** Set related objects as null and hide the widget. */
    destroy(): void;
    /** Fires whenever the slider moved, and the visible time extent is changed. */
    on(type: "time-extent-change", listener: (event: { target: Histogramesri.dijit.TimeSlider }) => void): esri.Handle;
    /** Fires fires each time the histogram is drawn. */
    on(type: "update", listener: (event: { target: Histogramesri.dijit.TimeSlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Histogramesri.dijit.TimeSlider;

  /** HomeButton provides a simple button to return to the map's default starting extent. */
  export class HomeButton {
    /** The extent used to zoom to when clicked. */
    extent: esri.geometry.Extent;
    /** Whether the widget has been loaded. */
    loaded: boolean;
    /** esri.Map object that this dijit is associated with. */
    map: esri.Map;
    /** Class used for styling the widget. */
    theme: string;
    /** Whether the widget is visible by default. */
    visible: boolean;
    /**
     * Creates a new HomeButton dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.HomeButtonOptions, srcNodeRef: Node);
    /**
     * Creates a new HomeButton dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.HomeButtonOptions, srcNodeRef: string);
    /** Destroys the widget. */
    destroy(): void;
    /** Hides the widget. */
    hide(): void;
    /** Goes to the home extent. */
    home(): void;
    /** Shows the widget. */
    show(): void;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Fires when the home method has been called. */
    on(type: "home", listener: (event: { error: any; extent: esri.geometry.Extent; target: HomeButton }) => void): esri.Handle;
    /** Fires when the widget has been loaded. */
    on(type: "load", listener: (event: { target: HomeButton }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** An esri.dijit.InfoWindow is an HTML popup. */
  class esri.dijit.InfoWindow extends esri.InfoWindowBase {
    /** esri.dijit.InfoWindow is anchored to the lower left of the point. */
    static ANCHOR_LOWERLEFT: any;
    /** esri.dijit.InfoWindow is anchored to the lower right of the point. */
    static ANCHOR_LOWERRIGHT: any;
    /** esri.dijit.InfoWindow is anchored to the upper left of the point. */
    static ANCHOR_UPPERLEFT: any;
    /** esri.dijit.InfoWindow is anchored to the upper right of the point. */
    static ANCHOR_UPPERRIGHT: any;
    /** Placement of the esri.dijit.InfoWindow with respect to the graphic. */
    anchor: string;
    /** The anchor point of the esri.dijit.InfoWindow in screen coordinates. */
    coords: esri.geometry.Point;
    /** esri.dijit.InfoWindow always show with the specified anchor. */
    fixedAnchor: string;
    /** Determines whether the esri.dijit.InfoWindow is currently shown on the map. */
    isShowing: boolean;
    /**
     * Create a new Info Window.
     * @param params Optional parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Create a new Info Window.
     * @param params Optional parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: any, srcNodeRef: string);
    /** Hides the InfoWindow. */
    hide(): void;
    /**
     * Moves the esri.dijit.InfoWindow to the specified screen point.
     * @param point The new anchor point when moving the InfoWindow.
     */
    move(point: Point): void;
    /**
     * Resizes the esri.dijit.InfoWindow to the specified height and width in pixels.
     * @param width The new width of the esri.dijit.InfoWindow in pixels.
     * @param height The new height of the esri.dijit.InfoWindow in pixels.
     */
    resize(width: number, height: number): void;
    /**
     * Sets the content in the InfoWindow.
     * @param content The content for the InfoWindow.
     */
    setContent(content: any): esri.dijit.InfoWindow;
    /**
     * Sets the fixed location of the esri.dijit.InfoWindow anchor.
     * @param anchor Fixed anchor that cannot be overridden by InfoWindow.show().
     */
    setFixedAnchor(anchor: string): void;
    /**
     * Sets the title for the InfoWindow.
     * @param title The title for the InfoWindow.
     */
    setTitle(title: string): esri.dijit.InfoWindow;
    /**
     * Display the esri.dijit.InfoWindow at the specified location.
     * @param point Location to place anchor.
     * @param placement Placement of the esri.dijit.InfoWindow with respect to the graphic.
     */
    show(point: esri.geometry.Point, placement?: string): void;
    /** Fires when an infoWindow is hidden. */
    on(type: "hide", listener: (event: { target: esri.dijit.InfoWindow }) => void): esri.Handle;
    /** Fires when an esri.dijit.InfoWindow is visible. */
    on(type: "show", listener: (event: { target: esri.dijit.InfoWindow }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.dijit.InfoWindow;

  /** Creates a new InfoWindowLite object. */
  export class InfoWindowLite extends esri.InfoWindowBase {
    /** Placement of the esri.dijit.InfoWindow with respect to the graphic. */
    anchor: string;
    /** The anchor point of the InfoWindowLite in screen coordinates. */
    coords: esri.geometry.Point;
    /** Always display the info window using the specified anchor. */
    fixedAnchor: string;
    /** Determines whether the InfoWindowLite is currently shown on the map. */
    isShowing: boolean;
    /** Hides the InfoWindow. */
    hide(): void;
    /**
     * Moves the esri.dijit.InfoWindow to the specified screen point.
     * @param point The new anchor point when moving the InfoWindowLite.
     */
    move(point: Point): void;
    /**
     * Resizes the InfoWindowLite to the specified height and width in pixels.
     * @param width The new width of the InfoWindowLite in pixels.
     * @param height The new height of the InfoWindowLite in pixels.
     */
    resize(width: number, height: number): void;
    /**
     * Sets the content in the InfoWindow.
     * @param content The content for the InfoWindow.
     */
    setContent(content: any): void;
    /**
     * Set the fixed location of the InfoWindowLite anchor.
     * @param anchor Fixed anchor that cannot be overridden by InfoWindowLite.show().
     */
    setFixedAnchor(anchor: string): void;
    /**
     * Define the title for the InfoWindowLite.
     * @param title The title for the InfoWindowLite.
     */
    setTitle(title: string): esri.dijit.InfoWindow;
    /**
     * Display the esri.dijit.InfoWindow at the specified location.
     * @param point Location to place anchor.
     * @param placement Placement of the esri.dijit.InfoWindow with respect to the graphic.
     */
    show(point: esri.geometry.Point, placement?: string): void;
    /** Fires when an infoWindow is hidden. */
    on(type: "hide", listener: (event: { target: InfoWindowLite }) => void): esri.Handle;
    /** Fires when an InfoWindowLite is displayed. */
    on(type: "show", listener: (event: { target: InfoWindowLite }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** LayerSwipe provides a simple tool to show a portion of a layer or layers on top of a map. */
  export class LayerSwipe {
    /** The number of pixels to clip the swipe tool. */
    clip: number;
    /** If the widget is enabled and layers can be swiped. */
    enabled: boolean;
    /** The layers to be swiped. */
    layers: esri.layers.Layer[];
    /** The number of pixels to place the tool from the left of the map. */
    left: number;
    /** Whether the widget has been loaded. */
    loaded: boolean;
    /** esri.Map object that this dijit is associated with. */
    map: esri.Map;
    /** Class used for styling the widget. */
    theme: string;
    /** The number of pixels to place the tool from the top of the map. */
    top: number;
    /** Type of swipe tool to use. */
    type: string;
    /** Whether the widget is visible by default. */
    visible: boolean;
    /**
     * Creates a new LayerSwipe dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.LayerSwipeOptions, srcNodeRef: Node);
    /**
     * Creates a new LayerSwipe dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.LayerSwipeOptions, srcNodeRef: string);
    /** Destroys the widget. */
    destroy(): void;
    /** Disables the widget. */
    disable(): void;
    /** Enables the widget. */
    enable(): void;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Updates the map to the position of the swipe node. */
    swipe(): void;
    /** Event is fired when the widget has been loaded. */
    on(type: "load", listener: (event: { target: LayerSwipe }) => void): esri.Handle;
    /** Event is fired when the tool has moved. */
    on(type: "swipe", listener: (event: { layers: any[]; target: LayerSwipe }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The legend dijit displays a label and symbol for some or all of the layers in the map. */
  export class Legend {
    /**
     * Creates a new Legend dijit.
     * @param params Parameters used to configure the dijit.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.LegendOptions, srcNodeRef: Node);
    /**
     * Creates a new Legend dijit.
     * @param params Parameters used to configure the dijit.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.LegendOptions, srcNodeRef: string);
    /** Destroys the legend. */
    destroy(): void;
    /** Refresh the legend. */
    refresh(): void;
    /** Finalizes the creation of the legend . */
    startup(): void;
  }

  /** LocateButton provides a simple button to locate and zoom to the users current location. */
  export class LocateButton {
    /** Centers the map to the location when a new position is returned. */
    centerAt: boolean;
    /** Removes existing graphic when tracking stops. */
    clearOnTrackingStop: boolean;
    /** The HTML5 Geolocation Position options for locating. */
    geolocationOptions: any;
    /** esri.layers.Layer in which the highlighted graphic is set to. */
    graphicsLayer: esri.layers.Graphicsesri.layers.Layer;
    /** If true, the users location will be highlighted with a point. */
    highlightLocation: boolean;
    /** The infoTemplate used for the highlight graphic. */
    infoTemplate: esri.InfoTemplate;
    /** Whether the widget has been loaded. */
    loaded: boolean;
    /** esri.Map object that this dijit is associated with. */
    map: esri.Map;
    /** The scale to zoom to when a users location has been found. */
    scale: number;
    /** Sets the maps scale when a new position is returned. */
    setScale: boolean;
    /** The symbol used on the highlight graphic to highlight the users location on the map. */
    symbol: esri.symbols.Symbol;
    /** Class used for styling the widget. */
    theme: string;
    /** Shows the current tracking state. */
    tracking: boolean;
    /** When enabled, the button becomes a toggle that creates an event to watch for location changes. */
    useTracking: boolean;
    /** Whether the widget is visible. */
    visible: boolean;
    /**
     * Creates a new LocateButton dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.LocateButtonOptions, srcNodeRef: Node);
    /**
     * Creates a new LocateButton dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.LocateButtonOptions, srcNodeRef: string);
    /** Clears the point graphic. */
    clear(): void;
    /** Destroys the widget. */
    destroy(): void;
    /** Hides the widget. */
    hide(): void;
    /** Goes to the users extent. */
    locate(): any;
    /** Shows the widget. */
    show(): void;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Fires when the widget has been loaded. */
    on(type: "load", listener: (event: { target: LocateButton }) => void): esri.Handle;
    /** Fires when the locate method has been called. */
    on(type: "locate", listener: (event: { error: any; graphic: esri.Graphic; position: any; scale: number; target: LocateButton }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The Measurement widget provides tools for calculating the current location (Get Location) and measuring distance (Measure Distance) and area (Measure Area). */
  export class Measurement {
    /**
     * Creates a new Measurement widget.
     * @param params See options list for parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.MeasurementOptions, srcNodeRef: Node);
    /**
     * Creates a new Measurement widget.
     * @param params See options list for parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.MeasurementOptions, srcNodeRef: string);
    /** Remove the measurement graphics and results. */
    clearResult(): void;
    /** Destroy the measurement widget. */
    destroy(): void;
    /** Returns an Object with two properties: toolName and unitName. */
    getTool(): any;
    /** Returns current measurement unit of the active tool. */
    getUnit(): string;
    /** Hide the measurement widget. */
    hide(): void;
    /**
     * Hide the specified tool.
     * @param toolName Valid values are "area", "distance" or "location".
     */
    hideTool(toolName: string): void;
    /**
     * Invoke the measurement functionality of the widget by passing in a previously created geometry.
     * @param geometry esri.geometry.Geometry to be measured.
     */
    measure(geometry: Point): void;
    /**
     * Invoke the measurement functionality of the widget by passing in a previously created geometry.
     * @param geometry esri.geometry.Geometry to be measured.
     */
    measure(geometry: Polyline): void;
    /**
     * Invoke the measurement functionality of the widget by passing in a previously created geometry.
     * @param geometry esri.geometry.Geometry to be measured.
     */
    measure(geometry: Polygon): void;
    /**
     * Activate or deactivate a tool.
     * @param toolName The name of the tool to activate or deactivate.
     * @param activate When true, the specified tool is activated.
     */
    setTool(toolName: string, activate: boolean): void;
    /** Show the measurement widget after it has been hidden using the hide method. */
    show(): void;
    /**
     * Display the specified tool.
     * @param toolName Valid values are "area", "distance" or "location".
     */
    showTool(toolName: string): void;
    /** Finalizes the creation of the measurement widget . */
    startup(): void;
    /** Fires when a measurement is made but the measurement is not complete (single-click). */
    on(type: "measure", listener: (event: { geometry: esri.geometry.Geometry; toolName: string; unitName: string; values: number; target: Measurement }) => void): esri.Handle;
    /** Fired when the measurement is complete. */
    on(type: "measure-end", listener: (event: { geometry: esri.geometry.Geometry; toolName: string; unitName: string; values: any; target: Measurement }) => void): esri.Handle;
    /** Fires when a measurement operation begins (single-click). */
    on(type: "measure-start", listener: (event: { toolName: string; unitName: string; target: Measurement }) => void): esri.Handle;
    /** Fires when the primary tool is changed. */
    on(type: "tool-change", listener: (event: { toolName: string; unitName: string; target: Measurement }) => void): esri.Handle;
    /** Fires when the units currently being used by the Measurement widget changes. */
    on(type: "unit-change", listener: (event: { toolName: string; unitName: string; target: Measurement }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The Overviewesri.Map widget displays the current extent of the map within the context of a larger area. */
  class Overviewesri.Map {
    /**
     * Creates a new Overviewesri.Map object.
     * @param params Parameters that define the functionality of the Overviewesri.Map widget.
     * @param srcNodeRef HTML element where the widget should be rendered.
     */
    constructor(params: esri.OverviewMapOptions, srcNodeRef: Node);
    /**
     * Creates a new Overviewesri.Map object.
     * @param params Parameters that define the functionality of the Overviewesri.Map widget.
     * @param srcNodeRef HTML element where the widget should be rendered.
     */
    constructor(params: esri.OverviewMapOptions, srcNodeRef: string);
    /** Releases  the resources used by the dijit. */
    destroy(): void;
    /** Hide the overview map. */
    hide(): void;
    /**
     * Resize the widget.
     * @param size Object containing width and height of the desired size.
     */
    resize(size: any): void;
    /** Show the overview map. */
    show(): void;
    /** Finalizes the creation of the Overviewesri.Map dijit. */
    startup(): void;
  }
  export = Overviewesri.Map;

  /** The Popup class is an implementation of esri.dijit.InfoWindow that inherits from esri.InfoWindowBase to provide additional capabilities. */
  export class Popup extends esri.InfoWindowBase {
    /** Controls the placement of the popup window with respect to the geographic location. */
    anchor: string;
    /** The number of features associated with the info window. */
    count: number;
    /** An array of  pending deferreds, null if there are not any pending deferreds. */
    deferreds: any[];
    /** The HTML element (reference to a DOM Node) where the info window is constructed. */
    domNode: any;
    /** The array of features currently associated with the info window. */
    features: esri.Graphic[];
    /** Define the symbol used to highlight polygon features. */
    fillSymbol: Fillesri.symbols.Symbol;
    /** Number of milliseconds after which the popup window will be hidden when visibleWhenEmpty is false and there are no features to be displayed. */
    hideDelay: number;
    /** Indicates whether popup should highlight features. */
    highlight: boolean;
    /** Indicates if the info window is visible. */
    isShowing: boolean;
    /** Indicates whether a feature should remain highlighted after the user closes the popup window. */
    keepHighlightOnHide: boolean;
    /** Define the symbol used to highlight line features. */
    lineSymbol: esri.symbols.Lineesri.symbols.Symbol;
    /** The location the info window is pointing to. */
    location: esri.geometry.Point;
    /** Specify the margin (in pixels) to leave to the left of the popup window when it is maximized. */
    marginLeft: number;
    /** Specify the margin (in pixels) to leave at the top of the popup window when it is maximized. */
    marginTop: number;
    /** Define the marker symbol used to highlight point features. */
    markerSymbol: esri.symbols.Markeresri.symbols.Symbol;
    /** Specify the x-offset (in pixels) used when positioning the popup. */
    offsetX: number;
    /** Specify the y-offset (in pixels) used when positioning the popup. */
    offsetY: number;
    /** Indicates whether popup should display previous and next buttons in the title bar. */
    pagingControls: boolean;
    /** Indicates whether popup should display the title bar text that contains the page number and total number of available features. */
    pagingInfo: boolean;
    /** Indicates whether the popup window should be displayed. */
    popupWindow: boolean;
    /** The index of the currently selected feature in the features array. */
    selectedIndex: number;
    /** Indicates whether the feature's title should display within the body of the popup window as opposed to in the titlebar. */
    titleInBody: boolean;
    /** Indicates whether the popup window remains visible when there are no features to be displayed. */
    visibleWhenEmpty: boolean;
    /** Define the number of levels to zoom in when the 'Zoom to' link is clicked. */
    zoomFactor: number;
    /**
     * Create a new Popup object.
     * @param options Optional parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(options: esri.PopupOptions, srcNodeRef: Node);
    /**
     * Create a new Popup object.
     * @param options Optional parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(options: esri.PopupOptions, srcNodeRef: string);
    /** Removes all features and destroys any pending deferreds. */
    clearFeatures(): void;
    /** Destroy the popup. */
    destroy(): void;
    /** Get the currently selected feature. */
    getSelectedFeature(): esri.Graphic;
    /** Hide the info window. */
    hide(): void;
    /** Maximize the info window. */
    maximize(): void;
    /** Re-calculates the popup's position with respect to the map location it is pointing to. */
    reposition(): void;
    /**
     * Resize the info window to the specified height (in pixels).
     * @param width The new width of the esri.dijit.InfoWindow in pixels.
     * @param height The new height of the esri.dijit.InfoWindow in pixels.
     */
    resize(width: number, height: number): void;
    /** Restore the info window to the pre-maximized state. */
    restore(): void;
    /**
     * Selects the feature at the specified index.
     * @param index The index of the feature to select.
     */
    select(index: number): void;
    /** Go to the next feature. */
    selectNext(): void;
    /** Go to the previous feature. */
    selectPrevious(): void;
    /**
     * Set the value of a property.
     * @param name Property to set value.
     * @param value Value to set.
     */
    set(name: string, value: any): Popup;
    /**
     * Set the content for the info window.
     * @param content The content for the info window.
     */
    setContent(content: string): void;
    /**
     * Set the content for the info window.
     * @param content The content for the info window.
     */
    setContent(content: Function): void;
    /**
     * Associate an array of features or an array of deferreds that return features with the info window.
     * @param features An array of features or deferreds.
     */
    setFeatures(features: esri.Graphic[]): void;
    /**
     * Associate an array of features or an array of deferreds that return features with the info window.
     * @param features An array of features or deferreds.
     */
    setFeatures(features: any[]): void;
    /**
     * Sets the info window title.
     * @param title The text for the title.
     */
    setTitle(title: string): void;
    /**
     * Sets the info window title.
     * @param title The text for the title.
     */
    setTitle(title: Function): void;
    /**
     * Display the info window at the specified location.
     * @param location An instance of esri.geometry.esri.geometry.Point that represents the geographic location to display the popup.
     * @param options See the object specifications table below for the structure of the  options  object.
     */
    show(location: esri.geometry.Point, options?: any): void;
    /** Fired when clearFeatures is called. */
    on(type: "clear-features", listener: (event: { target: Popup }) => void): esri.Handle;
    /** Fired when the info window is hidden. */
    on(type: "hide", listener: (event: { target: Popup }) => void): esri.Handle;
    /** Fired when the popup has finished maximizing. */
    on(type: "maximize", listener: (event: { target: Popup }) => void): esri.Handle;
    /** Fired when the popup has been restored from its maximized state. */
    on(type: "restore", listener: (event: { target: Popup }) => void): esri.Handle;
    /** Fired when the selection changes. */
    on(type: "selection-change", listener: (event: { target: Popup }) => void): esri.Handle;
    /** Fired after registering an array of features. */
    on(type: "set-features", listener: (event: { target: Popup }) => void): esri.Handle;
    /** Fired when the info window becomes visible. */
    on(type: "show", listener: (event: { target: Popup }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The PopupMobile class is an implementation of esri.dijit.InfoWindow that inherits from esri.InfoWindowBase to provide additional capabilities. */
  export class PopupMobile extends esri.InfoWindowBase {
    /** The location the info window is pointing to. */
    location: esri.geometry.Point;
    /**
     * Create a new PopupMobile object.
     * @param options Optional parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(options: esri.PopupMobileOptions, srcNodeRef: Node);
    /**
     * Create a new PopupMobile object.
     * @param options Optional parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(options: esri.PopupMobileOptions, srcNodeRef: string);
    /** Removes all features and destroys any pending deferreds. */
    clearFeatures(): void;
    /** Destroy the popup. */
    destroy(): void;
    /** Get the currently selected feature. */
    getSelectedFeature(): esri.Graphic;
    /** Hide the info window. */
    hide(): void;
    /**
     * Selects the feature at the specified index.
     * @param index The index of the feature to select.
     */
    select(index: number): void;
    /** Go to the next feature. */
    selectNext(): void;
    /** Go to the previous feature. */
    selectPrevious(): void;
    /**
     * Set the content for the info window.
     * @param content The content for the info window.
     */
    setContent(content: string): void;
    /**
     * Set the content for the info window.
     * @param content The content for the info window.
     */
    setContent(content: Function): void;
    /**
     * Associate an array of features or an array of deferreds that return features with the info window.
     * @param features An array of features or deferreds.
     */
    setFeatures(features: esri.Graphic[]): any;
    /**
     * Associate an array of features or an array of deferreds that return features with the info window.
     * @param features An array of features or deferreds.
     */
    setFeatures(features: any[]): any;
    /**
     * Sets the info window title.
     * @param title The text for the title.
     */
    setTitle(title: string): void;
    /**
     * Sets the info window title.
     * @param title The text for the title.
     */
    setTitle(title: Function): void;
    /**
     * Display the info window at the specified location.
     * @param location An instance of esri.geometry.esri.geometry.Point that represents the geographic location to display the popup.
     */
    show(location: Point): void;
    /** Fired when clearFeatures is called. */
    on(type: "clear-features", listener: (event: { target: PopupMobile }) => void): esri.Handle;
    /** Fired when the info window is hidden. */
    on(type: "hide", listener: (event: { target: PopupMobile }) => void): esri.Handle;
    /** Fired when the selection changes. */
    on(type: "selection-change", listener: (event: { target: PopupMobile }) => void): esri.Handle;
    /** Fired after registering an array of features. */
    on(type: "set-features", listener: (event: { target: PopupMobile }) => void): esri.Handle;
    /** Fired when the info window becomes visible. */
    on(type: "show", listener: (event: { target: PopupMobile }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The PopupTemplate class extends esri/esri.InfoTemplate and provides support for defining a layout. */
  export class PopupTemplate extends esri.InfoTemplate {
    /** The popup definition defined as a JavaScript object. */
    info: any;
    /**
     * Create a new PopupTemplate object.
     * @param popupInfo An object that defines popup content.
     * @param options Optional parameters.
     */
    constructor(popupInfo: any, options?: esri.PopupTemplateOptions);
  }

  /** The Print widget simplifies the process of printing a map using a default or user-defined layout. */
  export class Print {
    /**
     * Creates a new Print widget.
     * @param params Parameters for the print widget.
     * @param srcNodeRef HTML element where the print widget button and drop down list will be rendered.
     */
    constructor(params: esri.PrintOptions, srcNodeRef: Node);
    /**
     * Creates a new Print widget.
     * @param params Parameters for the print widget.
     * @param srcNodeRef HTML element where the print widget button and drop down list will be rendered.
     */
    constructor(params: esri.PrintOptions, srcNodeRef: string);
    /** Destroys the print widget. */
    destroy(): void;
    /** Hide the print widget. */
    hide(): void;
    /**
     * User can call this function so that it programatically print the map.
     * @param template Print template.
     */
    printMap(template: PrintTemplate): void;
    /** Set the print widget's visibility to true. */
    show(): void;
    /** Finalizes the creation of the print widget. */
    startup(): void;
    /** Fired when an error occurs during the print request. */
    on(type: "error", listener: (event: { error: Error; target: Print }) => void): esri.Handle;
    /** Fired when the print job has succeeded. */
    on(type: "print-complete", listener: (event: { value: any; target: Print }) => void): esri.Handle;
    /** Fired when the request is sent to the print service. */
    on(type: "print-start", listener: (event: { target: Print }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The Scalebar widget displays a scalebar on the map or in a specified HTML node. */
  export class Scalebar {
    /**
     * Creates a new Scalebar dijit.
     * @param params Parameters used to configure the widget.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.ScalebarOptions, srcNodeRef?: Node);
    /**
     * Creates a new Scalebar dijit.
     * @param params Parameters used to configure the widget.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.ScalebarOptions, srcNodeRef?: string);
    /** Destroy the scalebar. */
    destroy(): void;
    /** Hide the scalebar dijit. */
    hide(): void;
    /** Set the scalebar's visibility to true. */
    show(): void;
  }

  /** The esri.dijit.TimeSlider widget is used for visualizing content within a map that contains time-aware layers. */
  class esri.dijit.TimeSlider {
    /** Default value is false. */
    loop: boolean;
    /** Default value is false. */
    playing: boolean;
    /** Default value is 1. */
    thumbCount: number;
    /** Rate at which the time animation plays. */
    thumbMovingRate: number;
    /** An array of dates representing the stops (tics) on the TimeSlider. */
    timeStops: Date[];
    /**
     * Creates a new esri.dijit.TimeSlider object.
     * @param params Parameters for the time slider object.
     * @param srcNodeRef HTML element where the time slider should be rendered.
     */
    constructor(params: esri.TimeSliderOptions, srcNodeRef: Node);
    /**
     * Creates a new esri.dijit.TimeSlider object.
     * @param params Parameters for the time slider object.
     * @param srcNodeRef HTML element where the time slider should be rendered.
     */
    constructor(params: esri.TimeSliderOptions, srcNodeRef: string);
    /**
     * The specified number of time stops are created for the input time extent.
     * @param timeesri.geometry.Extent The time extent used to define the time slider's start and end time stops.
     * @param count The number of time stops to create.
     */
    createTimeStopsByCount(timeExtent: Timeesri.geometry.Extent, count?: number): void;
    /**
     * Create a time stop for each interval specified, i.e., (week, month, day).
     * @param timeesri.geometry.Extent The time extent used to define the time slider's start and end time stops.
     * @param timeInterval The length of the time interval.
     * @param timeIntervalesri.Units  Valid values are listed in the esri.layers.TimeInfo constants table.
     */
    createTimeStopsByTimeInterval(timeExtent: Timeesri.geometry.Extent, timeInterval?: number, timeIntervalUnits?: string): void;
    /** Gets the current time extent for the time slider. */
    getCurrentTimeExtent(): Timeesri.geometry.Extent;
    /** Move to the next time step. */
    next(): void;
    /** Pause the time slider. */
    pause(): void;
    /** Play the time slider. */
    play(): void;
    /** Move to the previous time step. */
    previous(): void;
    /**
     * Specify an array of strings to be used as labels.
     * @param labels An array of strings that define the labels for each tick.
     */
    setLabels(labels: string[]): void;
    /**
     * Determines whether or not loop.
     * @param loop True plays the time slider continuously.
     */
    setLoop(loop: boolean): void;
    /**
     * The number of thumbs to display.
     * @param thumbCount The number of thumbs to display.
     */
    setThumbCount(thumbCount: number): void;
    /**
     * Array of two integers, the first value determines where to put the first thumb.
     * @param indexes Array of two integers.
     */
    setThumbIndexes(indexes: number[]): void;
    /**
     * Change the rate at which the time animation plays.
     * @param thumbMovingRate The rate at which the time slider plays.
     */
    setThumbMovingRate(thumbMovingRate: number): void;
    /**
     * Specify the number of ticks to display on the time slider.
     * @param count The number of ticks to display on the slider.
     */
    setTickCount(count: number): void;
    /**
     * Manually define the time stop locations by providing an array of dates.
     * @param timeStops Array of dates
     */
    setTimeStops(timeStops: Date[]): void;
    /**
     * Determine if the time is displayed for an instant in time.
     * @param createTimeInstants When true, the time slider displays features for the current point in time.
     */
    singleThumbAsTimeInstant(createTimeInstants: boolean): void;
    /** Fires when the timeesri.geometry.Extent of the esri.dijit.TimeSlider is changed. */
    on(type: "time-extent-change", listener: (event: { timeExtent: Timeesri.geometry.Extent; target: esri.dijit.TimeSlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.dijit.TimeSlider;
}
declare namespace esri.dijit.analysis {

  /** The AggregatePoints widget works with point feature layer and a polygon feature layer. */
  export class AggregatePoints extends esri.dijit.analysis.AnalysisBase {
    /** A field name from pointesri.layers.Layer based on which the points will be grouped. */
    groupByField: string;
    /** When true, the polygons that have no points within them will be returned in the output. */
    keepBoundariesWithNoPoints: boolean;
    /** Reference to the map object. */
    map: esri.Map;
    /** When true, two fields will be added to your result layer to indicate which attribute values within each group are the minority (least dominant) or the majority (most dominant)  within each boundary. */
    minorityMajority: boolean;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** When true, a new field will be added to the result table containing the percentages of each attribute value within each group. */
    percentPoints: boolean;
    /** The point feature layer that will be aggregated into the polygons in the polygon feature layer. */
    pointLayer: esri.layers.Featureesri.layers.Layer;
    /** The polygon layer to be shown selected in in the Choose area menu. */
    polygonLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of feature layer candidates to be selected as the input polygon layer. */
    polygonLayers: esri.layers.Featureesri.layers.Layer[];
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** An array of attribute field names and statistic types that you would like to aggregate for all points within each polygon. */
    summaryFields: string[];
    /**
     * Creates a new AggregatePoints dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.AggregatePointsOptions, srcNodeRef: Node);
    /**
     * Creates a new AggregatePoints dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.AggregatePointsOptions, srcNodeRef: string);
  }

  /** The esri.dijit.analysis.AnalysisBase widget is the base class for all other widgets under esri/dijit/analysis. */
  class esri.dijit.analysis.AnalysisBase {
    /** The URL to the analysis service, for example "http://analysis.arcgis.com/arcgis/rest/services/tasks/GPServer". */
    analysisGpServer: string;
    /** The URL to the ArcGIS.com site or in-house portal where the GP server is hosted, for example "http://www.arcgis.com". */
    portalUrl: string;
    /**
     * Cancels an analysis job that is being processed.
     * @param jobInfo An object containing job information including job ID, status, message, etc returned by the job-status event.
     */
    cancel(jobInfo: any): void;
    /**
     * Starts checking the analysis job status for the given jobId.
     * @param jobId Job id of the analysis job to check.
     */
    checkJobStatus(jobId: string): void;
    /**
     * Starts an analysis tool.
     * @param params See the object specifications table below for the structure of the  params  object.
     */
    execute(params: string): void;
    /**
     * Gets credits estimate for a specific analysis job.
     * @param toolName The name of the analysis tool from which a credits estimate will be returned.
     * @param jobParams The input job parameters.
     */
    getCreditsEstimate(toolName: string, jobParams: string): any;
    /** Fires when close icon is clicked or when run analysis button is clicked. */
    on(type: "close", listener: (event: { target: esri.dijit.analysis.AnalysisBase }) => void): esri.Handle;
    /** Fires when the drawn boundaries option is activated. */
    on(type: "drawtool-activate", listener: (event: { target: esri.dijit.analysis.AnalysisBase }) => void): esri.Handle;
    /** Fires when the drawn boundaries option is deactivated. */
    on(type: "drawtool-deactivate", listener: (event: { target: esri.dijit.analysis.AnalysisBase }) => void): esri.Handle;
    /** Fires when the job in cancelled. */
    on(type: "job-cancel", listener: (event: { response: any; target: esri.dijit.analysis.AnalysisBase }) => void): esri.Handle;
    /** Fires when the job fails. */
    on(type: "job-fail", listener: (event: { error: any; target: esri.dijit.analysis.AnalysisBase }) => void): esri.Handle;
    /** Fires after the job fetches result data. */
    on(type: "job-result", listener: (event: { result: any; target: esri.dijit.analysis.AnalysisBase }) => void): esri.Handle;
    /** Fires when the job execution status is received. */
    on(type: "job-status", listener: (event: { jobInfo: any; target: esri.dijit.analysis.AnalysisBase }) => void): esri.Handle;
    /** Fires when the job is submitted to the server for asynchronous processing. */
    on(type: "job-submit", listener: (event: { params: any; target: esri.dijit.analysis.AnalysisBase }) => void): esri.Handle;
    /** Fires when the job succeeds. */
    on(type: "job-success", listener: (event: { jobInfo: any; target: esri.dijit.analysis.AnalysisBase }) => void): esri.Handle;
    /** Fires when the execute method is called. */
    on(type: "start", listener: (event: { params: any; target: esri.dijit.analysis.AnalysisBase }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.dijit.analysis.AnalysisBase;

  /** Create a density map from point or line features by spreading known quantities of some phenomenon (represented as attributes of the points or lines) across the map. */
  export class CalculateDensity extends esri.dijit.analysis.AnalysisBase {
    /** Possible values are "SquareMiles" or "SquareKilometers". */
    areaUnits: string;
    /** A layer specifying the area where you want densities to be calculated. */
    boundingPolygonLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of feature layer candidates to be selected as the bounding polygon layer. */
    boundingPolygonLayers: esri.layers.Featureesri.layers.Layer[];
    /** Classification type to use for the analysis. */
    classificationType: string;
    /** The input point, line, or polygon feature layer. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** The number of classes (range of predicted values) in the result layer. */
    numClasses: number;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** The distance specifying how far to search to find point or line features when calculating density values. */
    radius: number;
    /** Possible values are Miles, Yards, Kilometers and Meters. */
    radiusUnits: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new CalculateDensity dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new CalculateDensity dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: string);
  }

  /** Measure the travel time or distance between pairs of points. */
  export class ConnectOriginsToDestinations extends esri.dijit.analysis.AnalysisBase {
    /** When true, Travel Modes (Driving Distance, Driving Time) are enabled for analysisesri.layers.Layer with point geometries. */
    enableTravelModes: boolean;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new ConnectOriginsToDestinations dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new ConnectOriginsToDestinations dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: string);
  }

  /** The CreateBuffers widget creates polygons that cover a given distance from an input point, line, or polygon feature layer. */
  export class CreateBuffers extends esri.dijit.analysis.AnalysisBase {
    /** An array of buffer distances to buffer the input feature layer. */
    bufferDistance: number[];
    /** The input point, line, or polygon feature layer to be buffered. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** The linear unit to be used with the distance value(s). */
    units: string;
    /**
     * Creates a new CreateBuffers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.CreateBuffersOptions, srcNodeRef: Node);
    /**
     * Creates a new CreateBuffers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.CreateBuffersOptions, srcNodeRef: string);
  }

  /** The CreateDriveTimeAreas widget creates drive-time (or drive-distance) polygons around input points for the given drive-time values. */
  export class CreateDriveTimeAreas extends esri.dijit.analysis.AnalysisBase {
    /** The units of the breakValues parameter. */
    breakUnits: string;
    /** An array of driving time break values. */
    breakValues: number[];
    /** The point feature layer around which drive-time areas will be drawn. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** The geometry type of the input layer. */
    inputType: string;
    /** Reference to the map object. */
    map: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** The rule of overlap. */
    overlapPolicy: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new CreateDriveTimeAreas dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.CreateDriveTimeAreasOptions, srcNodeRef: Node);
    /**
     * Creates a new CreateDriveTimeAreas dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.CreateDriveTimeAreasOptions, srcNodeRef: string);
  }

  /** Creates areas that are visible based on locations you specify. */
  export class CreateViewshed extends esri.dijit.analysis.AnalysisBase {
    /** The linear units to use for the 'maximumDistance' value. */
    maxDistanceUnits: string;
    /** The cutoff distance where the computation of visible areas stops. */
    maximumDistance: number;
    /** The height above ground of your analysis points. */
    observerHeight: number;
    /** The linear units to use for the 'observerHeight' value. */
    observerHeightUnits: string;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** The height of structures or people on the ground used to establish visibility. */
    targetHeight: number;
    /** The linear units to use for the 'targetHeight' value. */
    targetHeightUnits: string;
    /**
     * Creates a new CreateViewshed dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new CreateViewshed dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: string);
  }

  /** Creates catchment areas based on locations you specify. */
  export class CreateWatersheds extends esri.dijit.analysis.AnalysisBase {
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new CreateWatersheds dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new CreateWatersheds dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: string);
  }

  /** Derive new features from the input layers that meet a query you specify. */
  export class DeriveNewLocations extends esri.dijit.analysis.AnalysisBase {
    /** The analysis layer to derive new locations from. */
    analysisLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of feature layers to use as input. */
    inputLayers: esri.layers.Featureesri.layers.Layer[];
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new DeriveNewLocations dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new DeriveNewLocations dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: string);
  }

  /** The DissolveBoundaries widget finds polygons that overlap or share a common boundary, and merges them together to form a single polygon. */
  export class DissolveBoundaries extends esri.dijit.analysis.AnalysisBase {
    /** An array of field names based on which polygons are merged. */
    dissolveFields: string[];
    /** The layer containing polygon features that will be dissolved. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** An array of field names and statistical summary types that you wish to calculate from the polygons that are dissolved together. */
    summaryFields: string[];
    /**
     * Creates a new DissolveBoundaries dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.DissolveBoundariesOptions, srcNodeRef: Node);
    /**
     * Creates a new DissolveBoundaries dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.DissolveBoundariesOptions, srcNodeRef: string);
  }

  /** The Enrichesri.layers.Layer widget enriches an input layer with facts about the people, places, and businesses nearby. */
  class Enrichesri.layers.Layer extends esri.dijit.analysis.AnalysisBase {
    /** An buffer distance or driving time value to buffer the input feature layer. */
    distance: number;
    /** When true, Travel Modes (Driving Time) is enabled for inputesri.layers.Layer with point geometries (esriGeometryPoint). */
    enableTravelModes: boolean;
    /** The input feature layer to enrich with new data. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** When true, you can specify a time for traffic condition under Define areas to enrich - Driving Time. */
    showTrafficWidget: boolean;
    /**
     * Creates a new Enrichesri.layers.Layer dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.EnrichLayerOptions, srcNodeRef: Node);
    /**
     * Creates a new Enrichesri.layers.Layer dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.EnrichLayerOptions, srcNodeRef: string);
  }
  export = Enrichesri.layers.Layer;

  /** The ExtractData widget is used to extract data from one or more layers within a given extent. */
  export class ExtractData extends esri.dijit.analysis.AnalysisBase {
    /** If true, the Clip features option in Study area will be ckecked. */
    clip: boolean;
    /** The format of output data shown as the default selection in the Output data format menu. */
    dataFormat: string;
    /** An array for feature layers to be extracted. */
    featureLayers: esri.layers.Featureesri.layers.Layer[];
    /** An array of feature layers to be shown in the Layers to extract menu as selected. */
    inputLayers: esri.layers.Featureesri.layers.Layer[];
    /** Reference to the map object. */
    map: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new ExtractData dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.ExtractDataOptions, srcNodeRef: Node);
    /**
     * Creates a new ExtractData dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.ExtractDataOptions, srcNodeRef: string);
  }

  /** Select features in the input layer that meet an attribute and/or spatial query you specify. */
  export class FindExistingLocations extends esri.dijit.analysis.AnalysisBase {
    /** The analysis layer to find existing locations from. */
    analysisLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of feature layers to use as input. */
    inputLayers: esri.layers.Featureesri.layers.Layer[];
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new FindExistingLocations dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new FindExistingLocations dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: string);
  }

  /** The FindHotSpots widget finds statistically significant clusters of incident points, weighted points, or weighted polygons. */
  export class FindHotSpots extends esri.dijit.analysis.AnalysisBase {
    /** An array of feature layer candidates to be selected as the aggregation polygon layer. */
    aggregationPolygonLayers: esri.layers.Featureesri.layers.Layer[];
    /** The numeric field in the Analysisesri.layers.Layer that will be analyzed. */
    analysisField: string;
    /** The feature layer for which hot spots will be calculated. */
    analysisLayer: esri.layers.Featureesri.layers.Layer;
    /** A layer of bounding areas to answer the question: Within the bounding areas, are there any locations with unexpectedly high or low point concentrations? */
    boundingPolygonLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of feature layer candidates to be selected as the bounding polygon layer. */
    boundingPolygonLayers: esri.layers.Featureesri.layers.Layer[];
    /** Reference to the map object. */
    map: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** Return a report of the analysis process. */
    returnProcessInfo: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new FindHotSpots dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FindHotSpotsOptions, srcNodeRef: Node);
    /**
     * Creates a new FindHotSpots dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FindHotSpotsOptions, srcNodeRef: string);
  }

  /** The FindNearest widget works with two layers: an analysis layer and a near layer. */
  export class FindNearest extends esri.dijit.analysis.AnalysisBase {
    /** The feature layer from which the nearest features are found. */
    analysisLayer: esri.layers.Featureesri.layers.Layer;
    /** When true, Travel Modes (Driving Distance, Driving Time) are enabled for analysisesri.layers.Layer with point geometries (esriGeometryPoint). */
    enableTravelModes: boolean;
    /** Reference to the map object. */
    map: esri.Map;
    /** The maximum number of nearest locations to find for each feature in analysisLayer. */
    maxCount: number;
    /** The feature layer to be shown selected in the "1. */
    nearLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of near layer candidates. */
    nearLayers: esri.layers.Featureesri.layers.Layer[];
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** The maximum range to search for nearest locations from each feature in the analysisLayer. */
    searchCutoff: number;
    /** The units of the searchCutoff parameter. */
    searchCutoffUnits: string;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new FindNearest dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FindNearestOptions, srcNodeRef: Node);
    /**
     * Creates a new FindNearest dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FindNearestOptions, srcNodeRef: string);
  }

  /** Measure the similarity of candidate locations to one or more reference locations. */
  export class FindSimilarLocations extends esri.dijit.analysis.AnalysisBase {
    /** The input point, line, or polygon feature layer. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** Return a report of the analysis process. */
    returnProcessInfo: boolean;
    /** The point, line, or polygon feature layer to search. */
    searchLayers: esri.layers.Featureesri.layers.Layer[];
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new FindSimilarLocations dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new FindSimilarLocations dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: string);
    /** Fires when the select tool option is activated. */
    on(type: "selecttool-activate", listener: (event: { target: FindSimilarLocations }) => void): esri.Handle;
    /** Fires when the select tool option is deactivated. */
    on(type: "selecttool-deactivate", listener: (event: { target: FindSimilarLocations }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** Predict values at new locations based on measurements from a collection of points. */
  export class InterpolatePoints extends esri.dijit.analysis.AnalysisBase {
    /** A layer specifying the area where you want the result to be drawn. */
    boundingPolygonLayer: esri.layers.Featureesri.layers.Layer;
    /** esri.geometry.Polygon layers (optional). */
    boundingPolygonLayers: esri.layers.Featureesri.layers.Layer[];
    /** Classification type to use for the analysis. */
    classificationType: string;
    /** The point features that will be interpolated. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Maximum number to display in widget UI from which user can pick the number of classes to use in the analysis. */
    maxClasses: number;
    /** Minimum number to display in widget UI from which user can pick the number of classes to use in the analysis. */
    minClasses: number;
    /** The number of classes (range of predicted values) in the result layer. */
    numClasses: number;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** esri.geometry.Point layers (optional). */
    predictAtPointLayers: esri.layers.Featureesri.layers.Layer[];
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new InterpolatePoints dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new InterpolatePoints dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: string);
  }

  /** The MergeLayers widget copies features from two layers into a new layer. */
  export class MergeLayers extends esri.dijit.analysis.AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** The feature layer to be merged with the mergeLayer. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map: esri.Map;
    /** An array of feature layer candidates to be selected as the merge layer. */
    mergeLayers: esri.layers.Featureesri.layers.Layer[];
    /** An array of values that describe how fields from the mergeesri.layers.Layer are to be modified. */
    mergingAttributes: string[];
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new MergeLayers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.MergeLayersOptions, srcNodeRef: Node);
    /**
     * Creates a new MergeLayers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.MergeLayersOptions, srcNodeRef: string);
  }

  /** The OverlayLayers widget combines two or more layers into one single layer containing all the information found in the stack. */
  export class OverlayLayers extends esri.dijit.analysis.AnalysisBase {
    /** The feature layer that will be overlayed with the overlayLayer. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map: esri.Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** An array of feature layers to be overlaid with inputLayer. */
    overlayLayer: esri.layers.Featureesri.layers.Layer[];
    /** Defines how two input layers are combined. */
    overlayType: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** When the distance between features is less than the tolerance, the features in the overlay layer will snap to the features in the input layer. */
    snapToInput: boolean;
    /** The minimum distance separating all feature coordinates (nodes and vertices) as well as the distance a coordinate can move in X or Y (or both). */
    tolerance: number;
    /**
     * Creates a new OverlayLayers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.OverlayLayersOptions, srcNodeRef: Node);
    /**
     * Creates a new OverlayLayers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.OverlayLayersOptions, srcNodeRef: string);
  }

  /** Determine how to efficiently divide tasks among a mobile workforce. */
  export class PlanRoutes extends esri.dijit.analysis.AnalysisBase {
    /** Possible values are "Miles" or "Kilometers". */
    distanceDefaultUnits: string;
    /** Provide the locations where the people or vehicles end their routes. */
    endLayer: string;
    /** Layers to list in the dijit's input boxes. */
    featureLayers: esri.layers.Featureesri.layers.Layer[];
    /** Whether to limit the max time per route. */
    limitMaxTimePerRoute: boolean;
    /** Maximum number of stops per vehicle. */
    maxStopsPerRoute: number;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** Whether each route must end its trip at the same place where it started. */
    returnToStart: boolean;
    /** The number of vehicles that are available to visit the stops. */
    routeCount: number;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Provide the locations where the people or vehicles start their routes. */
    startLayer: string;
    /** The points that the vehicles, drivers, or routes, should visit. */
    stopsLayer: esri.layers.Featureesri.layers.Layer;
    /**
     * Creates a new PlanRoutes dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new PlanRoutes dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: string);
  }

  /** The FindNearest widget works with two layers: an summarize nearby layer and a summary layer. */
  export class SummarizeNearby extends esri.dijit.analysis.AnalysisBase {
    /** An array of numbers that defines the search distance (for StraightLine or DrivingDistance) or time (for DrivingTime) shown in the distance input in the Find nearest features using a option. */
    distances: number[];
    /** When true, Travel Modes (Driving Distance, Driving Time) are enabled for sumNearbyesri.layers.Layer with point geometries (esriGeometryPoint). */
    enableTravelModes: boolean;
    /** A field of the summarizeesri.layers.Layer features that you can use to calculate statistics separately for each unique attribute value. */
    groupByField: string;
    /** Reference to the map object. */
    map: esri.Map;
    /** When true, two fields will be added to your result layer to indicate which attribute values within each group are the minority (least dominant) or the majority (most dominant)  within each boundary. */
    minorityMajority: boolean;
    /** Type of distance measurement shown as the defeault value in the Find nearest features using a option. */
    nearType: string;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** When true, a new field will be added to the result table containing the percentages of each attribute value within each group. */
    percentPoints: boolean;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** Type of units shown under the Total Area checkbox in the Add statistics from option. */
    shapeUnits: string;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** An array of possible statistics attribute field names and summary types that you wish to calculate for all nearby features. */
    summaryFields: string[];
    /** The feature layer to be shown selected in the Choose layer to summarize dropdown. */
    summaryLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of possible feature layers summarizing toward. */
    summaryLayers: esri.layers.Featureesri.layers.Layer[];
    /** The point, line, or polygon feature layer from which distances will be measured to features in summarizeLayer. */
    sumNearbyLayer: esri.layers.Featureesri.layers.Layer;
    /** If true. */
    sumShape: boolean;
    /** Type of units shown as the defeault value in the Find nearest features using a option. */
    units: string;
    /**
     * Creates a new SummarizeNearby dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.SummarizeNearbyOptions, srcNodeRef: Node);
    /**
     * Creates a new SummarizeNearby dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.SummarizeNearbyOptions, srcNodeRef: string);
  }

  /** The SummarizeWithin widget works with two layers: an summarize within layer and a summary layer. */
  export class SummarizeWithin extends esri.dijit.analysis.AnalysisBase {
    /** A field name from summaryesri.layers.Layer that you can use to calculate statistics separately for each unique attribute value. */
    groupByField: string;
    /** Reference to the map object. */
    map: esri.Map;
    /** When true, two fields will be added to your result layer to indicate which attribute values within each group are the minority (least dominant) or the majority (most dominant)  within each boundary. */
    minorityMajority: boolean;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** When true, a new field will be added to the result table containing the percentages of each attribute value within each group. */
    percentPoints: boolean;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** A list of field names and statistical summary type that you wish to calculate for all features in Summaryesri.layers.Layer that are within each polygon in sumWithinLayer. */
    summaryFields: string;
    /** The summary layer to be shown selected in in the Choose layer to summarize menu. */
    summaryLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of summarize layer candidates. */
    summaryLayers: esri.layers.Featureesri.layers.Layer[];
    /** The polygon feature layer to be summarized toward. */
    sumWithinLayer: esri.layers.Featureesri.layers.Layer;
    /**
     * Creates a new SummarizeWithin dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.SummarizeWithinOptions, srcNodeRef: Node);
    /**
     * Creates a new SummarizeWithin dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.SummarizeWithinOptions, srcNodeRef: string);
  }

  /** Determine the flow paths in a downstream direction from the locations you specify. */
  export class TraceDownstream extends esri.dijit.analysis.AnalysisBase {
    /** A layer specifying the area where you want the trace to be clipped. */
    boundingPolygonLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of feature layer candidates to be selected as the bounding polygon layer. */
    boundingPolygonLayers: esri.layers.Featureesri.layers.Layer[];
    /** Total length of the line that will be returned. */
    maxDistance: number;
    /** The linear units to use for the 'maxDistance' value. */
    maxDistanceUnits: string;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** The trace line will be split into multiple lines where each line is of the specified length. */
    splitDistance: number;
    /** The units that splitDistance is specified in. */
    splitUnits: string;
    /**
     * Creates a new TraceDownstream dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new TraceDownstream dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: string);
  }
}
declare namespace esri.dijit.editing {

  /** The esri/dijit/editing namespace contains editing related operations that inherit from OperationBase. */
  export class Add extends esri.OperationBase {
    /**
     * Create a new Add operation.
     * @param params See options list for parameters.
     */
    constructor(params: esri.AddOptions);
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }

  /** Widget that supports viewing attachments for feature layers that have attachments enabled. */
  export class AttachmentEditor {
    /**
     * Creates a new AttachmentEditor object.
     * @param params No parameter options.
     * @param srcNodeRef HTML element where the widget is rendered.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new AttachmentEditor object.
     * @param params No parameter options.
     * @param srcNodeRef HTML element where the widget is rendered.
     */
    constructor(params: any, srcNodeRef: string);
    /**
     * Display the attachment editor.
     * @param graphic esri.Graphic, with attachments, to display in the attachment editor.
     * @param featureesri.layers.Layer The feature layer to display attachments for.
     */
    showAttachments(graphic: esri.Graphic, featureLayer: FeatureLayer): void;
    /** Finalizes the creation of the attachment editor. */
    startup(): void;
  }

  /** The esri/dijit/editing namespace contains editing related operations that inherit from OperationBase. */
  export class Cut extends esri.OperationBase {
    /**
     * Create a new Cut operation.
     * @param params See options list for parameters.
     */
    constructor(params: esri.CutOptions);
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }

  /** The esri/dijit/editing namespace contains editing related operations that inherit from OperationBase. */
  export class Delete extends esri.OperationBase {
    /**
     * Create a new Delete operation.
     * @param params See options list for parameters.
     */
    constructor(params: esri.DeleteOptions);
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }

  /** The Editor widget provides out-of-the-box editing capabilities using an editable layer in a Feature Service. */
  export class Editor {
    /** Arrow tool */
    static CREATE_TOOL_ARROW: any;
    /** Autocomplete polygon tool */
    static CREATE_TOOL_AUTOCOMPLETE: any;
    /** Circle tool */
    static CREATE_TOOL_CIRCLE: any;
    /** Ellipse tool */
    static CREATE_TOOL_ELLIPSE: any;
    /** Freehand polygon tool */
    static CREATE_TOOL_FREEHAND_POLYGON: any;
    /** Freehand polyline tool */
    static CREATE_TOOL_FREEHAND_POLYLINE: any;
    /** esri.geometry.Polygon tool */
    static CREATE_TOOL_POLYGON: any;
    /** esri.geometry.Polyline tool */
    static CREATE_TOOL_POLYLINE: any;
    /** Rectangle tool */
    static CREATE_TOOL_RECTANGLE: any;
    /** Triangle tool */
    static CREATE_TOOL_TRIANGLE: any;
    /**
     * Creates a new Editor object.
     * @param params Parameters that define the functionality of the editor widget.
     * @param srcNodeRef HTML element where the widget should be rendered.
     */
    constructor(params: esri.EditorOptions, srcNodeRef: Node);
    /**
     * Creates a new Editor object.
     * @param params Parameters that define the functionality of the editor widget.
     * @param srcNodeRef HTML element where the widget should be rendered.
     */
    constructor(params: esri.EditorOptions, srcNodeRef: string);
    /** Fires when the widget has fully loaded. */
    on(type: "load", listener: (event: { target: Editor }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** A template picker displays a gallery of templates from one or more feature layers. */
  export class TemplatePicker {
    /** Reference to the data grid used to display the templates. */
    grid: any;
    /** If tooltips are enabled the reference to the tooltip div. */
    tooltip: HTMLDivElement;
    /**
     * Creates a new TemplatePicker object that displays a gallery of templates from the input feature layers or items.
     * @param params FeatureLayers or items are required all other parameters are optional.
     * @param srcNodeRef HTML element where the TemplatePicker will be rendered.
     */
    constructor(params: esri.TemplatePickerOptions, srcNodeRef: Node);
    /**
     * Creates a new TemplatePicker object that displays a gallery of templates from the input feature layers or items.
     * @param params FeatureLayers or items are required all other parameters are optional.
     * @param srcNodeRef HTML element where the TemplatePicker will be rendered.
     */
    constructor(params: esri.TemplatePickerOptions, srcNodeRef: string);
    /**
     * Get or set the properties of the template picker.
     * @param name Name of the attribute of interest.
     * @param value Value for the specified attribute.
     */
    attr(name: string, value?: any): void;
    /** Clears the current selection. */
    clearSelection(): void;
    /** Destroys the template picker. */
    destroy(): void;
    /** Gets the selected item picked by the user. */
    getSelected(): any;
    /** Finalizes the creation of the template picker. */
    startup(): void;
    /** Updates the templatePicker after modifying the properties of the widget. */
    update(): void;
    /** Fires when an item is selected or unselected in the template picker. */
    on(type: "selection-change", listener: (event: { target: TemplatePicker }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The esri/dijit/editing namespace contains editing related operations that inherit from OperationBase. */
  export class Union extends esri.OperationBase {
    /**
     * Create a new Union operation.
     * @param params See options list for parameters.
     */
    constructor(params: esri.UnionOptions);
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }

  /** The esri/dijit/editing namespace contains editing related operations that inherit from OperationBase. */
  export class Update extends esri.OperationBase {
    /**
     * Create a new Update operation.
     * @param params See options list for parameters.
     */
    constructor(params: esri.UpdateOptions);
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }
}
declare namespace esri.dijit.geoenrichment {

  /** The DataBrowser widget allows users to search or browse for geoenrichment variables. */
  export class DataBrowser {
    /**
     * Creates a new DataBrowser dijit using the given DOM node.
     * @param options Optional parameters used to create the layer.
     * @param srcNodeRef Reference or id of an HTML element where the DataBrowser should be rendered.
     */
    constructor(options: esri.DataBrowserOptions, srcNodeRef: Node);
    /**
     * Creates a new DataBrowser dijit using the given DOM node.
     * @param options Optional parameters used to create the layer.
     * @param srcNodeRef Reference or id of an HTML element where the DataBrowser should be rendered.
     */
    constructor(options: esri.DataBrowserOptions, srcNodeRef: string);
    /** Finalizes the creation of the DataBrowser. */
    startup(): void;
    /** Fires when user clicks the Back button. */
    on(type: "back", listener: (event: { target: DataBrowser }) => void): esri.Handle;
    /** Fires when user clicks the Cancel button. */
    on(type: "cancel", listener: (event: { target: DataBrowser }) => void): esri.Handle;
    /** Fires when user clicks the OK button. */
    on(type: "ok", listener: (event: { target: DataBrowser }) => void): esri.Handle;
    /** Fires when variables are selected. */
    on(type: "select", listener: (event: { target: DataBrowser }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** Displays an Infographic of one or more variables that describe the geographic context of a location. */
  export class Infographic {
    /** The number of Infographic's for which data retrieved is cached for that browser session. */
    cacheLimit: number;
    /** The ID of the country for which data is retrieved. */
    countryID: string;
    /** The ID of the dataset to which variables used in this Infographic belong. */
    datasetID: string;
    /** If true, the Infographic will be displayed in its expanded state. */
    expanded: boolean;
    /** When true, output geometry will be available as the geometry property in the returned object of the "data-ready" event handler. */
    returnGeometry: boolean;
    /** The study area for this Infographic. */
    studyArea: esri.tasks.geoenrichment.Geometryesri.tasks.geoenrichment.StudyArea;
    /** The options to apply to the study area. */
    studyAreaOptions: any;
    /** An HTML template string used to define the Infographic subtitle. */
    subtitle: string;
    /** The title of the Infographic. */
    title: string;
    /** The type of the Infographic. */
    type: string;
    /** The set of variables displayed in this Infographic. */
    variables: string[];
    /**
     * Creates a new Infographic dijit using the given DOM node.
     * @param params Various optional parameters that can be used to configure the dijit.
     * @param srcNodeRef Reference or id of an HTML element where the Infographic should be rendered.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new Infographic dijit using the given DOM node.
     * @param params Various optional parameters that can be used to configure the dijit.
     * @param srcNodeRef Reference or id of an HTML element where the Infographic should be rendered.
     */
    constructor(params: any, srcNodeRef: string);
    /**
     * Define the infographic data.
     * @param data Specify the esri.tasks.FeatureSet containing the custom data to display in the Infographic.
     * @param metadata Define the mappings of feature set attributes to Infographic display fields.
     */
    setData(data: esri.tasks.FeatureSet, metadata?: any): void;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Fires if an error occurs in retrieving data for the study area. */
    on(type: "data-error", listener: (event: { error: any; target: Infographic }) => void): esri.Handle;
    /** Fires when loading data for the study area. */
    on(type: "data-load", listener: (event: { target: Infographic }) => void): esri.Handle;
    /** Fires when data for the study area is ready. */
    on(type: "data-ready", listener: (event: { provider: any; target: Infographic }) => void): esri.Handle;
    /** Fires when requesting data for the study area. */
    on(type: "data-request", listener: (event: { target: Infographic }) => void): esri.Handle;
    /** Fires when the Infographic is resized. */
    on(type: "resize", listener: (event: { size: number[]; target: Infographic }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** Displays a set of Infographic dijits in a carousel. */
  export class InfographicsCarousel {
    /** If true, the Infographic will be displayed in its expanded state. */
    expanded: boolean;
    /** Describes the options used to configure the contents of the carousel. */
    options: esri.dijit.geoenrichment.InfographicsOptions;
    /** When true, output geometry will be available as the geometry property in the returned object of the "data-ready" event handler. */
    returnGeometry: boolean;
    /** The index of the currently selected Infoesri.Graphic in this InfographicsCarousel. */
    selectedIndex: number;
    /** The study area for this InfographicsCarousel. */
    studyArea: esri.tasks.geoenrichment.Geometryesri.tasks.geoenrichment.StudyArea;
    /** The name of the study area to be shown in this InfographicsCarousel. */
    studyAreaTitle: string;
    /**
     * Creates a new InfographicsCarousel dijit using the given DOM node.
     * @param params Various optional parameters that can be used to configure the dijit.
     * @param srcNodeRef Reference or id of an HTML element where the Directions widget should be rendered.
     */
    constructor(params: any, srcNodeRef: Node);
    /**
     * Creates a new InfographicsCarousel dijit using the given DOM node.
     * @param params Various optional parameters that can be used to configure the dijit.
     * @param srcNodeRef Reference or id of an HTML element where the Directions widget should be rendered.
     */
    constructor(params: any, srcNodeRef: string);
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Fires if an error occurs in retrieving data for the study area. */
    on(type: "data-error", listener: (event: { error: any; target: InfographicsCarousel }) => void): esri.Handle;
    /** Fires when loading data for the study area. */
    on(type: "data-load", listener: (event: { target: InfographicsCarousel }) => void): esri.Handle;
    /** Fires when data for the study area is ready. */
    on(type: "data-ready", listener: (event: { provider: any; target: InfographicsCarousel }) => void): esri.Handle;
    /** Fires when the InfographicsCarousel is resized. */
    on(type: "resize", listener: (event: { size: number[]; target: InfographicsCarousel }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  /** esri.dijit.geoenrichment.InfographicsOptions is used to customize and configure the Infographic's included in a InfographicCarousel. */
  class esri.dijit.geoenrichment.InfographicsOptions {
    /** The options to apply to the study area. */
    studyAreaOptions: any;
    /** The name of the css theme used to format the InfographicsCarousel. */
    theme: string;
    /**
     * Constructs instance from serialized state.
     * @param json Various options to configure this InfographicsOptions.
     */
    constructor(json?: Object);
    /**
     * Gets an array of default InfographicsOptions.Item's in the InfographicsCarousel with a countryID.
     * @param countryID The ID of the country for which data is retrieved.
     */
    getItems(countryID: string): any;
    /** Converts object to its JSON representation. */
    toJson(): any;
  }
  export = esri.dijit.geoenrichment.InfographicsOptions;
  /** Defines the options for each Infographic in an InfographicsCarousel. */
  export class InfographicsOptionsItem {
    /** The ID of the dataset to which variables used in this Infographic belong. */
    datasetID: string;
    /** When true, the Infographic is configured to be visible. */
    isVisible: boolean;
    /** The title or name of the Infographic. */
    title: string;
    /** The type of the Infographic. */
    type: string;
    /** The set of variables displayed in this Infographic. */
    variables: string[];
    /**
     * Constructs an InfographicsOptionsItem object.
     * @param type The type of the Infographic.
     * @param variables The set of variables displayed in this InfographicsOptionsItem.
     */
    constructor(type: string, variables: string[]);
  }
}
declare namespace esri.geometry {

  /** A circle (Polygon) created by a specified center point. */
  export class Circle extends esri.geometry.Polygon {
    /** Center point of the circle. */
    center: any;
    /** The radius of the circle based. */
    radius: number;
    /** Unit of the radius. */
    radiusUnit: string;
    /** Array of coordinate values constituting the circle like [[x1, y1], [x2, y2],...]. */
    rings: number[][][];
    /** The spatial reference of the circle will be the same as the spatial reference of the center point. */
    spatialReference: esri.SpatialReference;
    /**
     * Create a new Circle by specifying an input center location using either an esri.geometry.esri.geometry.Point object or a latitude/longitude array and an object with the following optional properties: radius, radiusesri.Units, geodesic and numberOfPoints.
     * @param center Center point of the circle.
     * @param options See options descriptions for further information.
     */
    constructor(center: esri.geometry.Point, options?: esri.CircleOptions1);
    /**
     * Create a new Circle by specifying an input center location using either an esri.geometry.esri.geometry.Point object or a latitude/longitude array and an object with the following optional properties: radius, radiusesri.Units, geodesic and numberOfPoints.
     * @param center Center point of the circle.
     * @param options See options descriptions for further information.
     */
    constructor(center: number[], options?: esri.CircleOptions1);
    /**
     * Create a new Circle by specifying an object with a required center location, defined as a longitude/latitude array or an esri.geometry.esri.geometry.Point, and the following additional optional parameters: radius, radiusesri.Units, geodesic, and numberOfPoints.
     * @param params If no center parameter is provided, it must be set within the options.
     */
    constructor(params: esri.CircleOptions2);
  }

  /** The minimum and maximum X- and Y- coordinates of a bounding box. */
  class esri.geometry.Extent extends esri.geometry.Geometry {
    /** Top-right X-coordinate of an extent envelope. */
    xmax: number;
    /** Bottom-left X-coordinate of an extent envelope. */
    xmin: number;
    /** Top-right Y-coordinate of an extent envelope. */
    ymax: number;
    /** Bottom-left Y-coordinate of an extent envelope. */
    ymin: number;
    /**
     * Creates a new esri.geometry.Extent object.
     * @param xmin Bottom-left X-coordinate of an extent envelope.
     * @param ymin Bottom-left Y-coordinate of an extent envelope.
     * @param xmax Top-right X-coordinate of an extent envelope.
     * @param ymax Top-right Y-coordinate of an extent envelope.
     * @param spatialReference Spatial reference of the geometry.
     */
    constructor(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference: SpatialReference);
    /**
     * Creates a new esri.geometry.Extent object using a JSON object.
     * @param json JSON object representing the geometry.
     */
    constructor(json: Object);
    /**
     * A new extent is returned with the same width and height centered at the argument point.
     * @param point Centers the extent on the specified x,y location.
     */
    centerAt(point: Point): esri.geometry.Extent;
    /**
     * When "true", the geometry in the argument is contained in this extent.
     * @param geometry Can be a esri.geometry.Point or Extent.
     */
    contains(geometry: Geometry): boolean;
    /**
     * Expands the extent by the factor given.
     * @param factor The multiplier value.
     */
    expand(factor: number): esri.geometry.Extent;
    /** Returns the center point of the extent in map units. */
    getCenter(): esri.geometry.Point;
    /** Distance between ymin and ymax. */
    getHeight(): number;
    /** Distance between xmin and xmax. */
    getWidth(): number;
    /**
     * Returns the interesection extent if the input geometry is an extent that intersects this extent.
     * @param geometry The geometry used to test the intersection.
     */
    intersects(geometry: Geometry): any;
    /** Returns an array with either one esri.geometry.Extent that's been shifted to within +/- 180 or two Extents if the original extent intersects the dateline. */
    normalize(): esri.geometry.Extent[];
    /**
     * Offsets the current extent.
     * @param dx The offset distance in map units for the y-coordinate.
     * @param dy The offset distance in map units for the x-coordinate.
     */
    offset(dx: number, dy: number): esri.geometry.Extent;
    /** Returns an extent with a spatial reference with a custom shifted central meridian if the extent intersects the dateline. */
    shiftCentralMeridian(): esri.geometry.Extent;
    /**
     * Expands this extent to include the extent of the argument.
     * @param extent The minx, miny, maxx, and maxy bounding box.
     */
    union(extent: Extent): esri.geometry.Extent;
    /**
     * Updates this extent with the specified parameters.
     * @param xmin Bottom-left X-coordinate of an extent envelope.
     * @param ymin Bottom-left Y-coordinate of an extent envelope.
     * @param xmax Top-right X-coordinate of an extent envelope.
     * @param ymax Top-right Y-coordinate of an extent envelope.
     * @param spatialReference Spatial reference of the geometry.
     */
    update(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference: SpatialReference): esri.geometry.Extent;
  }
  export = esri.geometry.Extent;

  /** The base class for geometry objects. */
  class esri.geometry.Geometry {
    /** The spatial reference of the geometry. */
    spatialReference: esri.SpatialReference;
    /** The type of geometry. */
    type: string;
    /**
     * Sets the spatial reference.
     * @param sr Spatial reference of the geometry.
     */
    setSpatialReference(sr: SpatialReference): esri.geometry.Geometry;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.geometry.Geometry;

  /** An ordered collection of points. */
  export class Multipoint extends esri.geometry.Geometry {
    /** An array of one or more points. */
    points: number[][];
    /**
     * Creates a new Multipoint object.
     * @param spatialReference Spatial reference of the geometry.
     */
    constructor(spatialReference: SpatialReference);
    /**
     * Creates a new Multipoint object using a JSON object.
     * @param json JSON object representing the geometry.
     */
    constructor(json: Object);
    /**
     * Adds a point to the Multipoint.
     * @param point The point to add.
     */
    addPoint(point: Point): Multipoint;
    /**
     * Adds a point to the Multipoint.
     * @param point The point to add.
     */
    addPoint(point: number[]): Multipoint;
    /** Gets the extent of all the points. */
    getExtent(): esri.geometry.Extent;
    /**
     * Returns the point at the specified index.
     * @param index Positional index of the point in the points property.
     */
    getPoint(index: number): esri.geometry.Point;
    /**
     * Removes a point from the Multipoint.
     * @param index The index of the point to remove.
     */
    removePoint(index: number): esri.geometry.Point;
    /**
     * Updates the point at the specified index.
     * @param index Positional index of the point in the points property.
     * @param point esri.geometry.Point that specifies the new location.
     */
    setPoint(index: number, point: Point): Multipoint;
  }

  /** A location defined by an X- and Y- coordinate. */
  class esri.geometry.Point extends esri.geometry.Geometry {
    /** X-coordinate of a point in map units. */
    x: number;
    /** Y-coordinate of a point in map units. */
    y: number;
    /**
     * Creates a new esri.geometry.Point object using x, y, and a spatial reference.
     * @param x X-coordinate of a point in map units.
     * @param y Y-coordinate of a point in map units.
     * @param spatialReference Spatial reference of the geometry.
     */
    constructor(x: number, y: number, spatialReference: SpatialReference);
    /**
     * Creates a new esri.geometry.Point object using an array containing an x,y coordinate value and a spatial reference.
     * @param coords An array that includes an x,y coordinate.
     * @param spatialReference Spatial reference of the geometry.
     */
    constructor(coords: number[], spatialReference: SpatialReference);
    /**
     * Creates a new esri.geometry.Point object using a JSON object.
     * @param json A JSON object that contains an x,y coordinate.
     */
    constructor(json: Object);
    /**
     * Create a point object and initialize it with specified longitude and latitude.
     * @param long Longitude value.
     * @param lat Latitude value.
     */
    constructor(long: number, lat: number);
    /**
     * Create a point object and initialize it with an array containing longitude and latitude values.
     * @param point An input array containing the longitude and latitude values for the point.
     */
    constructor(point: number[]);
    /**
     * Create a point object and initialize it with an object that has latitude and longitude properties.
     * @param point An object with latitude and longitude properties.
     */
    constructor(point: any);
    /** Returns the latitude coordinate for this point if the spatial reference of the point is Web Mercator or Geographic (4326). */
    getLatitude(): number;
    /** Returns the longitude coordinate for this point if the spatial reference of the point is Web Mercator or Geographic (4326). */
    getLongitude(): number;
    /** Shifts the x coordinate to within +/- 180 span. */
    normalize(): esri.geometry.Point;
    /**
     * Offsets the point in an x and y direction.
     * @param dx Value for x-coordinate of point.
     * @param dy Value for y-coordinate of point.
     */
    offset(dx: number, dy: number): esri.geometry.Point;
    /**
     * Sets the latitude coordinate for this point to the specified value if the point's spatial reference is Web Mercator or Geographic (4326).
     * @param lat A valid latitude value.
     */
    setLatitude(lat: number): esri.geometry.Point;
    /**
     * Sets the longitude coordinate for this point to the specified value if the point's spatial reference is Web Mercator or Geographic (4326).
     * @param lon A valid longitude value.
     */
    setLongitude(lon: number): esri.geometry.Point;
    /**
     * Sets x-coordinate of point.
     * @param x Value for x-coordinate of point.
     */
    setX(x: number): esri.geometry.Point;
    /**
     * Sets y-coordinate of point.
     * @param y Value for y-coordinate of point.
     */
    setY(y: number): esri.geometry.Point;
    /**
     * Updates a point.
     * @param x X-coordinate of the updated point.
     * @param y Y-coordinate of the updated point.
     */
    update(x: number, y: number): esri.geometry.Point;
  }
  export = esri.geometry.Point;

  /** An array of rings where each ring is an array of points. */
  class esri.geometry.Polygon extends esri.geometry.Geometry {
    /** An array of rings. */
    rings: number[][][];
    /**
     * Creates a new esri.geometry.Polygon object.
     * @param spatialReference Spatial reference of the geometry.
     */
    constructor(spatialReference: SpatialReference);
    /**
     * Creates a new esri.geometry.Polygon object using a JSON object.
     * @param json JSON object representing the geometry.
     */
    constructor(json: Object);
    /**
     * Create a new polygon by providing an array of geographic coordinate pairs.
     * @param coordinates An array of geographic coordinates that define the polygon.
     */
    constructor(coordinates: number[][]);
    /**
     * Create a new polygon by providing an array of geographic coordinate pairs.
     * @param coordinates An array of geographic coordinates that define the polygon.
     */
    constructor(coordinates: number[][][]);
    /**
     * Adds a ring to the Polygon.
     * @param ring A polygon ring.
     */
    addRing(ring: esri.geometry.Point[]): esri.geometry.Polygon;
    /**
     * Adds a ring to the Polygon.
     * @param ring A polygon ring.
     */
    addRing(ring: number[][]): esri.geometry.Polygon;
    /**
     * Checks on the client if the specified point is inside the polygon.
     * @param point The location defined by an X- and Y- coordinate in map units.
     */
    contains(point: Point): boolean;
    /**
     * Returns a new esri.geometry.Polygon with one ring containing points equivalent to the coordinates of the extent.
     * @param extent The esri.geometry.Extent geometry to convert to a Polygon.
     */
    static fromExtent(extent: Extent): esri.geometry.Polygon;
    /** Returns the centroid of the polygon as defined here. */
    getCentroid(): esri.geometry.Point;
    /** Returns the extent of the polygon. */
    getExtent(): esri.geometry.Extent;
    /**
     * Returns a point specified by a ring and point in the path.
     * @param ringIndex The index of a ring.
     * @param pointIndex The index of a point in a ring.
     */
    getPoint(ringIndex: number, pointIndex: number): esri.geometry.Point;
    /**
     * Inserts a new point into a polygon.
     * @param ringIndex Ring index to insert point.
     * @param pointIndex The index of the inserted point in the ring.
     * @param point esri.geometry.Point to insert into the ring.
     */
    insertPoint(ringIndex: number, pointIndex: number, point: Point): esri.geometry.Polygon;
    /**
     * Checks if a esri.geometry.Polygon ring is clockwise.
     * @param ring A polygon ring.
     */
    isClockwise(ring: esri.geometry.Point[]): boolean;
    /**
     * Checks if a esri.geometry.Polygon ring is clockwise.
     * @param ring A polygon ring.
     */
    isClockwise(ring: number[][]): boolean;
    /**
     * When true, the polygon is self-intersecting which means that the ring of the polygon crosses itself.
     * @param polygon The polygon to test for self-intersection.
     */
    isSelfIntersecting(polygon: Polygon): boolean;
    /**
     * Remove a point from the polygon at the given pointIndex within the ring identified by ringIndex.
     * @param ringIndex The index of the ring containing the point.
     * @param pointIndex The index of the point within the ring.
     */
    removePoint(ringIndex: number, pointIndex: number): esri.geometry.Point;
    /**
     * Removes a ring from the Polygon.
     * @param ringIndex The index of the ring to remove.
     */
    removeRing(ringIndex: number): esri.geometry.Point[];
    /**
     * Updates a point in a polygon.
     * @param ringIndex Ring index for updated point.
     * @param pointIndex The index of the updated point in the ring.
     * @param point esri.geometry.Point to update in the ring.
     */
    setPoint(ringIndex: number, pointIndex: number, point: Point): esri.geometry.Polygon;
  }
  export = esri.geometry.Polygon;

  /** An array of paths where each path is an array of points. */
  class esri.geometry.Polyline extends esri.geometry.Geometry {
    /** An array of paths. */
    paths: number[][][];
    /**
     * Creates a new esri.geometry.Polyline object.
     * @param spatialReference Spatial reference of the geometry.
     */
    constructor(spatialReference: SpatialReference);
    /**
     * Creates a new esri.geometry.Polyline object using a JSON object.
     * @param json JSON object representing the geometry.
     */
    constructor(json: Object);
    /**
     * Create a new polyline by providing an array of geographic coordinates.
     * @param coordinates An array of geographic coordinates that define the polyline.
     */
    constructor(coordinates: number[][]);
    /**
     * Create a new polyline by providing an array of geographic coordinates.
     * @param coordinates An array of geographic coordinates that define the polyline.
     */
    constructor(coordinates: number[][][]);
    /**
     * Adds a path to the Polyline.
     * @param path Path to add to the Polyline.
     */
    addPath(path: esri.geometry.Point[]): esri.geometry.Polyline;
    /**
     * Adds a path to the Polyline.
     * @param path Path to add to the Polyline.
     */
    addPath(path: number[][]): esri.geometry.Polyline;
    /** Returns the extent of the Polyline. */
    getExtent(): esri.geometry.Extent;
    /**
     * Returns a point specified by a path and point in the path.
     * @param pathIndex The index of a path in a polyline.
     * @param pointIndex The index of a point in a path.
     */
    getPoint(pathIndex: number, pointIndex: number): esri.geometry.Point;
    /**
     * Inserts a new point into a polyline.
     * @param pathIndex Path index to insert point.
     * @param pointIndex The index of the inserted point in the path.
     * @param point esri.geometry.Point to insert into the path.
     */
    insertPoint(pathIndex: number, pointIndex: number, point: Point): esri.geometry.Polyline;
    /**
     * Removes a path from the Polyline.
     * @param pathIndex The index of a path to remove.
     */
    removePath(pathIndex: number): esri.geometry.Point[];
    /**
     * Remove a point from the polyline at the given pointIndex within the path identified by the given pathIndex.
     * @param pathIndex The index of the path containing the point.
     * @param pointIndex The index of the point within the path.
     */
    removePoint(pathIndex: number, pointIndex: number): esri.geometry.Point;
    /**
     * Updates a point in a polyline.
     * @param pathIndex Path index for updated point.
     * @param pointIndex The index of the updated point in the path.
     * @param point esri.geometry.Point to update in the path.
     */
    setPoint(pathIndex: number, pointIndex: number, point: Point): esri.geometry.Polyline;
  }
  export = esri.geometry.Polyline;
  /** Screenesri.geometry.Point represents a point in terms of pixels relative to the top-left corner of the map control. */
  class Screenesri.geometry.Point {
    /** X-coordinate relative to the top-left corner of the map control in pixels. */
    x: number;
    /** Y-coordinate relative to the top-left corner of the map control in pixels. */
    y: number;
    /**
     * Creates a new Screenesri.geometry.Point object with X-, Y- coordinates.
     * @param x X-coordinate relative to the top-left corner of the map control in pixels.
     * @param y Y-coordinate relative to the top-left corner of the map control in pixels.
     */
    constructor(x: number, y: number);
    /**
     * Creates a new Screenesri.geometry.Point object with an array containing X-, Y- coordinates.
     * @param coords An array that includes X-, Y- coordinates.
     */
    constructor(coords: number[]);
    /**
     * Creates a new Screenesri.geometry.Point object with a JSON object.
     * @param json A JSON object that includes X-, Y- coordinates.
     */
    constructor(json: Object);
    /**
     * Offsets the point in an x and y direction.
     * @param dx Value for x-coordinate of point.
     * @param dy Value for y-coordinate of point.
     */
    offset(dx: number, dy: number): Screenesri.geometry.Point;
    /**
     * Sets x-coordinate of point.
     * @param x Value for x-coordinate of point.
     */
    setX(x: number): Screenesri.geometry.Point;
    /**
     * Sets y-coordinate of point.
     * @param y Value for y-coordinate of point.
     */
    setY(y: number): Screenesri.geometry.Point;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
    /**
     * Updates a ScreenPoint.
     * @param x X-coordinate relative to the top-left corner of the map control in pixels.
     * @param y Y-coordinate relative to the top-left corner of the map control in pixels.
     */
    update(x: number, y: number): Screenesri.geometry.Point;
  }
  export = Screenesri.geometry.Point;

  /** Utility methods for various geodesic calculations. */
  export var geodesicUtils: {
    /**
     * Determine the area for the input polygons.
     * @param polygons An array of polygons.
     * @param areaUnit The area unit.
     */
    geodesicAreas(polygons: esri.geometry.Polygon[], areaUnit: string): number[];
    /**
     * Returns a densified geometry.
     * @param geometry A polyline or polygon to densify.
     * @param maxSegmentLength The maximum segment length in meters.
     */
    geodesicDensify(geometry: esri.geometry.Geometry, maxSegmentLength: number): esri.geometry.Geometry;
    /**
     * Determine the length for the input polylines using the specified length unit.
     * @param polylines An array of polylines.
     * @param lengthUnit The length unit.
     */
    geodesicLengths(polylines: esri.geometry.Polyline[], lengthUnit: string): number[];
  };

  /** Utility methods for working with JSON geometry objects. */
  export var jsonUtils: {
    /**
     * Converts the input JSON object to the appropriate esri.geometry.* object.
     * @param json The JSON object.
     */
    fromJson(json: Object): esri.geometry.Geometry;
    /**
     * Requests the geometry type name as represented in the ArcGIS REST.
     * @param geometry The ArcGIS JavaScript API geometry type to be converted.
     */
    getJsonType(geometry: Geometry): string;
  };

  /** Utility methods for getting length of a line segment or intersection of two segments. */
  export var mathUtils: {
    /**
     * Calculates the length of a line based on the input of two points.
     * @param point1 The beginning point.
     * @param point2 The ending point.
     */
    getLength(point1: esri.geometry.Point, point2: Point): number;
    /**
     * Calculates the intersecting point of two lines.
     * @param line1start The beginning point of the first line.
     * @param line1end The ending point of the first line.
     * @param line2start The beginning point of the second line.
     * @param line2end The ending point of the second line.
     */
    getLineIntersection(line1start: esri.geometry.Point, line1end: esri.geometry.Point, line2start: esri.geometry.Point, line2end: Point): esri.geometry.Point;
  };

  /** Normalizes geometries that intersect the central meridian or fall outside the world extent so they stay within the current coordinate system. */
  export var normalizeUtils: {
    /**
     * Normalizes  geometries that intersect the central meridian or fall outside the world extent so they stay within the current coordinate system.
     * @param geometries An array of geometries to normalize.
     * @param geometryService Specify a valid geometry service.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned, if an error occurs on the Server during task execution.
     */
    normalizeCentralMeridian(geometries: esri.geometry.Geometry[], geometryService: esri.tasks.GeometryService, callback: Function, errback: Function): any;
  };

  /** Utility methods to get map scale or extent for a given scale. */
  export var scaleUtils: {
    /**
     * Get the extent for the specified scale.
     * @param map The input map.
     * @param scale The input scale.
     */
    getExtentForScale(map: esri.Map, scale: number): esri.geometry.Extent;
    /**
     * Gets the current scale of the map.
     * @param map The map whose scale should be calculated.
     */
    getScale(map: Map): number;
  };

  /** Convert map coordinates to screen coordinates and vice versa. */
  export var screenUtils: {
    /**
     * Converts the geometry argument to map coordinates based on the extent, width, and height of the Map.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in map units.
     * @param height The current width of the map in map units.
     * @param screenesri.geometry.Geometry The geometry to convert from screen to map units.
     */
    toMapGeometry(extent: esri.geometry.Extent, width: number, height: number, screenGeometry: Geometry): esri.geometry.Geometry;
    /**
     * Converts and returns the argument screen point in map coordinates.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current width of the map in screen units.
     * @param screenesri.geometry.Point The screenesri.geometry.Point to convert from screen to map units.
     */
    toMapPoint(extent: esri.geometry.Extent, width: number, height: number, screenPoint: ScreenPoint): esri.geometry.Point;
    /**
     * Converts the geometry argument to screen coordinates based on the extent, width, and height of the Map.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current width of the map in screen units.
     * @param mapesri.geometry.Geometry The geometry to convert from map to screen units.
     */
    toScreenGeometry(extent: esri.geometry.Extent, width: number, height: number, mapGeometry: Geometry): esri.geometry.Geometry;
    /**
     * Converts and returns the argument map point in screen coordinates.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current width of the map in screen units.
     * @param mapesri.geometry.Point The point to convert from map to screen units.
     */
    toScreenPoint(extent: esri.geometry.Extent, width: number, height: number, mapPoint: Point): Screenesri.geometry.Point;
  };

  /** Convert Web Mercator coordinates to geographic and vice versa. */
  export var webMercatorUtils: {
    /**
     * Returns true if the 'source' can be projected to 'target' by the project() function, or if the 'source' and 'target' is the same spatialReference.
     * @param source An input of type esri.SpatialReference or an object with spatialReference property such as esri.geometry.Geometry or Map.
     * @param target The target spatial reference, of type esri.SpatialReference or an object with spatialReference property such as Map.
     */
    canProject(source: esri.SpatialReference, target: any): boolean;
    /**
     * Returns true if the 'source' can be projected to 'target' by the project() function, or if the 'source' and 'target' is the same spatialReference.
     * @param source An input of type esri.SpatialReference or an object with spatialReference property such as esri.geometry.Geometry or Map.
     * @param target The target spatial reference, of type esri.SpatialReference or an object with spatialReference property such as Map.
     */
    canProject(source: any, target: SpatialReference): boolean;
    /**
     * Returns true if the 'source' can be projected to 'target' by the project() function, or if the 'source' and 'target' is the same spatialReference.
     * @param source An input of type esri.SpatialReference or an object with spatialReference property such as esri.geometry.Geometry or Map.
     * @param target The target spatial reference, of type esri.SpatialReference or an object with spatialReference property such as Map.
     */
    canProject(source: esri.SpatialReference, target: SpatialReference): boolean;
    /**
     * Returns true if the 'source' can be projected to 'target' by the project() function, or if the 'source' and 'target' is the same spatialReference.
     * @param source An input of type esri.SpatialReference or an object with spatialReference property such as esri.geometry.Geometry or Map.
     * @param target The target spatial reference, of type esri.SpatialReference or an object with spatialReference property such as Map.
     */
    canProject(source: any, target: any): boolean;
    /**
     * Converts geometry from geographic units to Web Mercator units.
     * @param geometry The geometry to convert.
     */
    geographicToWebMercator(geometry: Geometry): esri.geometry.Geometry;
    /**
     * Translates the given latitude and longitude values to Web Mercator.
     * @param long The longitude value to convert.
     * @param lat The latitude value to convert.
     */
    lngLatToXY(long: number, lat: number): number[];
    /**
     * Project the geometry clientside (if possible).
     * @param geometry An input geometry.
     * @param target The target spatial reference, of type esri.SpatialReference or an object with spatialReference property such as Map.
     */
    project(geometry: esri.geometry.Geometry, target: SpatialReference): any;
    /**
     * Project the geometry clientside (if possible).
     * @param geometry An input geometry.
     * @param target The target spatial reference, of type esri.SpatialReference or an object with spatialReference property such as Map.
     */
    project(geometry: esri.geometry.Geometry, target: any): any;
    /**
     * Converts geometry from Web Mercator units to geographic units.
     * @param geometry The geometry to convert.
     */
    webMercatorToGeographic(geometry: Geometry): esri.geometry.Geometry;
    /**
     * Translates the given Web Mercator coordinates to Longitude and Latitude.
     * @param x The x coordinate value to convert.
     * @param y The y coordinate value to convert.
     */
    xyToLngLat(x: number, y: number): number[];
  };
}
declare namespace esri.layers {

  /** Allows you to work with a dynamic map service resource exposed by the ArcGIS Server REST API. */
  class esri.layers.ArcGISDynamicMapServiceesri.layers.Layer extends DynamicMapServiceesri.layers.Layer {
    /** The URL, when available, where the layer's attribution data is stored. */
    attributionDataUrl: string;
    /** Capabilities of the map service, possible values are esri.Map, esri.tasks.Query and Data. */
    capabilities: string;
    /** Copyright string as defined by the map service. */
    copyright: string;
    /** esri.Map description as defined by the map service. */
    description: string;
    /** When true, images are always requested from the server and the browser's cache is ignored. */
    disableClientCaching: boolean;
    /** The output dpi of the dynamic map service layer. */
    dpi: number;
    /** Array of DynamicLayerInfos used to change the layer ordering or redefine the map. */
    dynamicLayerInfos: esri.layers.Dynamicesri.layers.LayerInfo[];
    /** When true, the layer has attribution data. */
    hasAttributionData: boolean;
    /** The output image type. */
    imageFormat: string;
    /** Whether or not background of dynamic image is transparent. */
    imageTransparency: boolean;
    /** A dictionary from the layer id to the layerInfoTemplateOptions object. */
    infoTemplates: any;
    /** Sets the layer definitions used to filter the features of individual layers in the map service. */
    layerDefinitions: string[];
    /** Array of esri.layers.LayerDrawingOptions used to override the way layers are drawn. */
    layerDrawingOptions: esri.layers.LayerDrawingOptions[];
    /** Returns the available layers in service and their default visibility. */
    layerInfos: esri.layers.LayerInfo[];
    /** Returns the current layer time options if applicable. */
    layerTimeOptions: esri.layers.LayerTimeOptions[];
    /** The maximum image height, in pixels, that the map service will export. */
    maxImageHeight: number;
    /** The maximum image width, in pixels, that the map service will export. */
    maxImageWidth: number;
    /** The maximum number of results that can be returned from query, identify and find operations. */
    maxRecordCount: number;
    /** Maximum visible scale for the layer. */
    maxScale: number;
    /** Minimum visible scale for the layer. */
    minScale: number;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution: boolean;
    /** Indicates if the service supports dynamic layers. */
    supportsDynamicLayers: boolean;
    /** When true, the layer is suspended. */
    suspended: boolean;
    /** Temporal information for the layer, such as time extent. */
    timeInfo: esri.layers.TimeInfo;
    /** Default units of the layer as defined by the service. */
    units: string;
    /** When true, the image is saved to the server, and a JSON formatted response is sent to the client with the URL location of the image. */
    useMapImage: boolean;
    /** The version of ArcGIS Server where the map service is published. */
    version: number;
    /** When true, the layer is visible at the current map scale. */
    visibleAtMapScale: boolean;
    /** Gets the visible layers of the exported map. */
    visibleLayers: number[];
    /**
     * Creates a new esri.layers.ArcGISDynamicMapServiceesri.layers.Layer object.
     * @param url URL to the ArcGIS Server REST resource that represents a map service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.ArcGISDynamicMapServiceLayerOptions);
    /** Create an array of DynamicLayerInfos based on the current set of LayerInfo. */
    createDynamicLayerInfosFromLayerInfos(): esri.layers.Dynamicesri.layers.LayerInfo[];
    /**
     * Exports a map using values as specified by ImageParameters.
     * @param imageParameters Input parameters assigned before exporting the map image.
     * @param callback The function to call when the method has completed.
     */
    exportMapImage(imageParameters?: esri.layers.ImageParameters, callback?: Function): void;
    /** Asynchronously returns custom data for the layer when available. */
    getAttributionData(): any;
    /**
     * Returns true if the layer is visible at the given scale.
     * @param scale The scale at which to check if the layer is visible.
     */
    isVisibleAtScale(scale: number): boolean;
    /** Resumes layer drawing. */
    resume(): void;
    /**
     * Resets all layer definitions to those defined in the service.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setDefaultLayerDefinitions(doNotRefresh?: boolean): void;
    /**
     * Clears the visible layers as defined in setVisibleLayers, and resets to the default layers of the map service.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setDefaultVisibleLayers(doNotRefresh?: boolean): void;
    /**
     * Sets whether images are always requested from the server and the browser's cache is ignored.
     * @param disable When true, client side caching is disabled.
     */
    setDisableClientCaching(disable: boolean): void;
    /**
     * Sets the dpi of the exported map.
     * @param dpi DPI value.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setDPI(dpi: number, doNotRefresh?: boolean): void;
    /**
     * Specify an array of DynamicLayerInfos used to change the layer ordering or to redefine the map.
     * @param dynamicLayerInfos An array of dynamic layer infos.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setDynamicLayerInfos(dynamicLayerInfos: esri.layers.Dynamicesri.layers.LayerInfo[], doNotRefresh?: boolean): void;
    /**
     * Set the version for the ArcGIS DynamicMapServiceLayer.
     * @param gdbVersion The name of the version to display.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setGDBVersion(gdbVersion: string, doNotRefresh?: boolean): void;
    /**
     * Sets the image format of the exported map.
     * @param imageFormat Valid values are png | png8 | png24 | png32 | jpg | pdf | bmp | gif | svg.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setImageFormat(imageFormat: string, doNotRefresh?: boolean): void;
    /**
     * Sets the background of a dynamic image to transparent.
     * @param transparent Valid values are true | false.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setImageTransparency(transparent: boolean, doNotRefresh?: boolean): void;
    /**
     * Set the infoTemplates property.
     * @param infoTemplates infoTemplates object.
     */
    setInfoTemplates(infoTemplates: any): void;
    /**
     * Sets the layer definitions used to filter the features of individual layers in the map service.
     * @param layerDefinitions An array containing each layer's definition.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setLayerDefinitions(layerDefinitions: string[], doNotRefresh?: boolean): void;
    /**
     * Specify an array of esri.layers.LayerDrawingOptions that override the way the layers are drawn.
     * @param layerDrawingOptions An array of layer drawing options.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setLayerDrawingOptions(layerDrawingOptions: esri.layers.LayerDrawingOptions[], doNotRefresh?: boolean): void;
    /**
     * Sets the time-related options for the layer.
     * @param options Array of esri.layers.LayerTimeOptions objects that allow you to override how a layer is exported in reference to the map's time extent.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setLayerTimeOptions(options: esri.layers.LayerTimeOptions[], doNotRefresh?: boolean): void;
    /**
     * Set the maximum scale for the layer.
     * @param scale The maximum scale at which the layer is visible.
     */
    setMaxScale(scale: number): void;
    /**
     * Set the minimum scale for the layer.
     * @param scale The minimum scale at which the layer is visible.
     */
    setMinScale(scale: number): void;
    /**
     * Set the scale range for the layer.
     * @param minScale The minimum scale at which the layer is visible.
     * @param maxScale The maximum scale at which the layer is visible.
     */
    setScaleRange(minScale: number, maxScale: number): void;
    /**
     * Determine if the layer will update its content based on the map's current time extent.
     * @param update When false the layer will not update its content based on the map's time extent.
     */
    setUseMapTime(update: boolean): void;
    /**
     * Sets the visible layers of the exported map.
     * @param ids Array of layer IDs.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setVisibleLayers(ids: number[], doNotRefresh?: boolean): void;
    /** Suspends layer drawing. */
    suspend(): void;
    /** Fired when the geodatabase version is switched. */
    on(type: "gdb-version-change", listener: (event: { target: esri.layers.ArcGISDynamicMapServiceesri.layers.Layer }) => void): esri.Handle;
    /** Fires when the map export is completed. */
    on(type: "map-image-export", listener: (event: { mapImage: esri.layers.MapImage; target: esri.layers.ArcGISDynamicMapServiceesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer resumes drawing. */
    on(type: "resume", listener: (event: { target: esri.layers.ArcGISDynamicMapServiceesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: esri.layers.ArcGISDynamicMapServiceesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: esri.layers.ArcGISDynamicMapServiceesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer suspends drawing. */
    on(type: "suspend", listener: (event: { target: esri.layers.ArcGISDynamicMapServiceesri.layers.Layer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.layers.ArcGISDynamicMapServiceesri.layers.Layer;

  /** Allows you to work with an image map service resource exposed by the ArcGIS Server REST API. */
  class ArcGISImageServiceesri.layers.Layer extends DynamicMapServiceesri.layers.Layer {
    /** Number of bands in ArcGISImageServiceLayer. */
    bandCount: number;
    /** Array of current band selections. */
    bandIds: number[];
    /** The raster bands that the raster dataset is composed of and their statistics. */
    bands: any[];
    /** Current compression quality value. */
    compressionQuality: number;
    /** Copyright string as defined by the image service. */
    copyrightText: string;
    /** Returns a esri.layers.MosaicRule object that defines the default mosaic properties published by the image service. */
    defaultMosaicRule: esri.layers.MosaicRule;
    /** Description as defined by the image service. */
    description: string;
    /** When true, images are always requested from the server and the browser's cache is ignored. */
    disableClientCaching: boolean;
    /** The output image type. */
    format: string;
    /** The template that defines the content to display in the map info window when the user clicks on a raster. */
    infoTemplate: esri.InfoTemplate;
    /** Current interpolation method. */
    interpolation: string;
    /** The maximum image height, in pixels, that the map service will export. */
    maxImageHeight: number;
    /** The maximum image width, in pixels, that the map service will export. */
    maxImageWidgth: number;
    /** The maximum number of results that can be returned from query, identify and find operations. */
    maxRecordCount: number;
    /** Maximum visible scale for the layer. */
    maxScale: number;
    /** Minimum visible scale for the layer. */
    minScale: number;
    /** Specifies the mosaic rule when defining how individual images should be mosaicked. */
    mosaicRule: esri.layers.MosaicRule;
    /** Size of pixel in X direction. */
    pixelSizeX: number;
    /** Size of pixel in Y direction. */
    pixelSizeY: number;
    /** The pixel type of the image service. */
    pixelType: number;
    /** Specifies the rendering rule for how the requested image should be rendered. */
    renderingRule: esri.layers.RasterFunction;
    /** Temporal information for the layer, such as time extent. */
    timeInfo: esri.layers.TimeInfo;
    /** By default, images are exported in MIME format, and the image is streamed to the client. */
    useMapImage: boolean;
    /** The version of ArcGIS Server the image service is published to, e.g. */
    version: number;
    /**
     * Creates a new ArcGISImageServiceesri.layers.Layer object.
     * @param url URL to the ArcGIS Server REST resource that represents a map service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.ArcGISImageServiceLayerOptions);
    /**
     * Exports a map using values as specified by ImageServiceParameters.
     * @param imageServiceParameters Input parameters assigned before exporting the map image.
     * @param callback The function to call when the method has completed.
     */
    exportMapImage(imageServiceParameters?: esri.layers.ImageServiceParameters, callback?: Function): void;
    /** Returns the current definition expression. */
    getDefinitionExpression(): string;
    /** Get key properties of an ImageService including information such as the band names associated with the imagery. */
    getKeyProperties(): any;
    /** Asynchronously returns the raster attribute table of an ImageService which returns categorical mapping of pixel values (e.g. */
    getRasterAttributeTable(): any;
    /** Gets the currently visible rasters. */
    getVisibleRasters(): esri.Graphic[];
    /**
     * Returns the rasters that are visible in the area defined by the geometry (required to be point or polygon) in the query parameter.
     * @param query The esri.tasks.esri.tasks.Query to be passed as the input to query visible rasters.
     * @param options Options for query.
     * @param callback The function to call when the method has completed.
     * @param errback The function to call when an error occurs.
     */
    queryVisibleRasters(query: esri.tasks.Query, options?: any, callback?: Function, errback?: string): void;
    /**
     * Sets the R,G,B of the exported image to the appropriate ImageService Band ID.
     * @param bandIds Array of band IDs to use in the exported image.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setBandIds(bandIds: number[], doNotRefresh?: boolean): void;
    /**
     * Sets the compression quality of the exported image.
     * @param quality A value from 0 to 100.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setCompressionQuality(quality: number, doNotRefresh?: boolean): void;
    /**
     * Sets the definition expression for the ImageService Layer.
     * @param expression The definition expression to be set.
     * @param doNotRefresh Whether or not the expression definition will be refreshed.
     */
    setDefinitionExpression(expression: string, doNotRefresh: boolean): void;
    /**
     * Sets whether images are always requested from the server and the browser's cache is ignored.
     * @param disable When true, browser client side caching is disabled.
     */
    setDisableClientCaching(disable: boolean): void;
    /**
     * Set the image format.
     * @param imageFormat Valid values are png | png8 | png24 |   jpg | pdf | bmp | gif | svg.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setImageFormat(imageFormat: string, doNotRefresh?: boolean): void;
    /**
     * Specify or change the info template for a layer.
     * @param infoTemplate The content for display in an InfoWindow.
     */
    setInfoTemplate(infoTemplate: InfoTemplate): void;
    /**
     * Sets the interpolation method.
     * @param interpolation Interpolation value defined in esri.layers.ImageServiceParameters Constants Table.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setInterpolation(interpolation: string, doNotRefresh?: boolean): void;
    /**
     * Sets the mosaic rule of the layer to the specified value.
     * @param mosaicRule The mosaic rule.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setMosaicRule(mosaicRule: esri.layers.MosaicRule, doNotRefresh?: boolean): void;
    /**
     * Sets the rendering rule of the layer to the given value.
     * @param renderingRule The new rendering rule.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setRenderingRule(renderingRule: esri.layers.RasterFunction, doNotRefresh?: boolean): void;
    /**
     * Determine if the layer will update its content based on the map's current time extent.
     * @param update When false the layer will not update its content based on the map's time extent.
     */
    setUseMapTime(update: boolean): void;
    /** Fires when the map export is completed. */
    on(type: "map-image-export", listener: (event: { mapImage: esri.layers.MapImage; target: ArcGISImageServiceesri.layers.Layer }) => void): esri.Handle;
    /** Fired when the layers mosaic rule is changed. */
    on(type: "mosaic-rule-change", listener: (event: { target: ArcGISImageServiceesri.layers.Layer }) => void): esri.Handle;
    /** Fired when the layers band ids are changed or if a raster function is applied. */
    on(type: "rendering-change", listener: (event: { target: ArcGISImageServiceesri.layers.Layer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = ArcGISImageServiceesri.layers.Layer;

  /** Allows you to work with a cached map service resource exposed by the ArcGIS Server REST API. */
  class ArcGISTiledMapServiceesri.layers.Layer extends TiledMapServiceesri.layers.Layer {
    /** The URL, when available, where the layer's attribution data is stored. */
    attributionDataUrl: string;
    /** Capabilities of the map service, possible values are esri.Map, esri.tasks.Query and Data. */
    capabilities: string;
    /** Copyright string as defined by the map service. */
    copyright: string;
    /** esri.Map description as defined by the map service. */
    description: string;
    /** When true, the layer has attribution data. */
    hasAttributionData: boolean;
    /** A dictionary from the layer id to the layerInfoTemplateOptions object. */
    infoTemplates: any;
    /** Returns the available layers in service and their default visibility. */
    layerInfos: esri.layers.LayerInfo[];
    /** The maximum image height, in pixels, that the map service will export. */
    maxImageHeight: number;
    /** The maximum image width, in pixels, that the map service will export. */
    maxImageWidth: number;
    /** The maximum number of results that can be returned from query, identify and find operations. */
    maxRecordCount: number;
    /** Maximum visible scale for the layer. */
    maxScale: number;
    /** Minimum visible scale for the layer. */
    minScale: number;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution: boolean;
    /** When true, the layer is suspended. */
    suspended: boolean;
    /** Temporal information for the layer, such as time extent. */
    timeInfo: esri.layers.TimeInfo;
    /** Default units of the layer as defined by the service. */
    units: string;
    /** The version of ArcGIS Server where the map service is published. */
    version: number;
    /** When true, the layer is visible at the current map scale. */
    visibleAtMapScale: boolean;
    /**
     * Creates a new ArcGISTiledMapServiceesri.layers.Layer object.
     * @param url URL to the ArcGIS Server REST resource at represents a map service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.ArcGISTiledMapServiceLayerOptions);
    /** Asynchronously returns custom data for the layer when available. */
    getAttributionData(): any;
    /**
     * Returns true if the layer is visible at the given scale.
     * @param scale The scale at which to check if the layer is visible.
     */
    isVisibleAtScale(scale: number): boolean;
    /** Resumes layer drawing. */
    resume(): void;
    /**
     * Set the infoTemplates property.
     * @param infoTemplates infoTemplates object.
     */
    setInfoTemplates(infoTemplates: any): void;
    /**
     * Set the maximum scale for the layer.
     * @param scale The maximum scale at which the layer is visible.
     */
    setMaxScale(scale: number): void;
    /**
     * Set the minimum scale for the layer.
     * @param scale The minimum scale at which the layer is visible.
     */
    setMinScale(scale: number): void;
    /**
     * Set the scale range for the layer.
     * @param minScale The minimum scale at which the layer is visible.
     * @param maxScale The maximum scale at which the layer is visible.
     */
    setScaleRange(minScale: number, maxScale: number): void;
    /** Suspends layer drawing. */
    suspend(): void;
    /** Fires when a layer resumes drawing. */
    on(type: "resume", listener: (event: { target: ArcGISTiledMapServiceesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: ArcGISTiledMapServiceesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: ArcGISTiledMapServiceesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer suspends drawing. */
    on(type: "suspend", listener: (event: { target: ArcGISTiledMapServiceesri.layers.Layer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = ArcGISTiledMapServiceesri.layers.Layer;

  /** CSVesri.layers.Layer extends esri.layers.Featureesri.layers.Layer to create a point layer based on a CSV file (.csv, .txt). */
  class CSVesri.layers.Layer extends esri.layers.Featureesri.layers.Layer {
    /** The column delimiter. */
    columnDelimiter: string;
    /** The latitude field name. */
    latitudeFieldName: string;
    /** The longitude field name. */
    longitudeFieldName: string;
    /** The url to a CSV resource. */
    url: string;
    /**
     * Creates a CSV layer.
     * @param url URL to a CSV resource.
     * @param options Optional parameters used to create the layer.
     */
    constructor(url: string, options?: esri.CSVLayerOptions);
  }
  export = CSVesri.layers.Layer;

  /** Information about the coded values belonging to the domain. */
  class CodedValueesri.layers.Domain extends esri.layers.Domain {
    /** An array of the coded values in the domain. */
    codedValues: any[];
    /**
     * Returns the name of the coded-value associated with the specified code.
     * @param code The code in which you wish to search for the name.
     */
    getName(code: number): string;
    /**
     * Returns the name of the coded-value associated with the specified code.
     * @param code The code in which you wish to search for the name.
     */
    getName(code: string): string;
  }
  export = CodedValueesri.layers.Domain;

  /** (Beta at v3.12) Display features using data that contains location information such as X and Y coordinates, Street address, place names etc using a DataAdapter object to retrieve the features and a LocationProvider to generate their geometries. */
  class DataAdapteresri.layers.Featureesri.layers.Layer extends esri.layers.Featureesri.layers.Layer {
    /** The DataAdapter object used to query the data. */
    dataAdapter: any;
    /** The query parameters to use for the DataAdapter. */
    dataAdapterQuery: any;
    /** List of attribute fields added as custom data attributes to graphics node. */
    dataAttributes: string[];
    /** An instance of the Location Provider class. */
    locationProvider: esri.tasks.locationproviders.LocationProviderBase;
    /**
     * Creates a DataAdapterFeatureLayer.
     * @param dataAdapter The DataAdapter object.
     * @param options Optional parameters used to create the layer.
     */
    constructor(dataAdapter: any, options: esri.DataAdapterFeatureLayerOptions);
  }
  export = DataAdapteresri.layers.Featureesri.layers.Layer;
  /** Used to denote classes that may be used as a data source. */
  class esri.layers.DataSource {
    /**
     * Creates a new esri.layers.DataSource object.
     * @param json JSON object representing the DataSource.
     */
    constructor(json?: Object);
  }
  export = esri.layers.DataSource;
  /** A dimensional definition defines a filter based on one variable and one dimension. */
  class esri.layers.DimensionalDefinition {
    /** (Optional) The dimension associated with the variable. */
    dimensionName: string;
    /** Indicates whether the values indicate slices (rather than ranges). */
    isSlice: boolean;
    /** An array of tuples (min, max) each defining a range of valid values along the specified dimension. */
    values: any[];
    /** The variable name by which to filter. */
    variableName: string;
    /**
     * Create a new dimensional definition object from an existing json object.
     * @param json The REST JSON representation for Dimensional Definition.
     */
    constructor(json: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.layers.DimensionalDefinition;
  /** Domains define constraints on a layer field. */
  class esri.layers.Domain {
    /** The domain name. */
    name: string;
    /** The domain type. */
    type: string;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.layers.Domain;

  /** Information about each layer in a map service. */
  class esri.layers.Dynamicesri.layers.LayerInfo extends esri.layers.LayerInfo {
    /** Default visibility of the layers in the map service. */
    defaultVisibility: boolean;
    /** esri.layers.Layer ID assigned by ArcGIS Server for a layer. */
    id: number;
    /** The maximum visible scale for each layer in the map service. */
    maxScale: number;
    /** The minimum visible scale for each layer in the map service. */
    minScale: number;
    /** esri.layers.Layer name as defined in the  map service. */
    name: string;
    /** If the layer is part of a group layer, it will include the parent ID of the group layer. */
    parentLayerId: number;
    /** The source for the dynamic layer can be either a LayerMapSource or LayerDataSource. */
    source: esri.layers.LayerSource;
    /** If the layer is a parent layer, it will have one or more sub layers included in an array. */
    subLayerIds: number[];
    /**
     * Creates a new esri.layers.Dynamicesri.layers.LayerInfo object.
     * @param json JSON object representing the DynamicLayerInfo.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.layers.Dynamicesri.layers.LayerInfo;

  /** The base class for ArcGIS Server dynamic map services. */
  class DynamicMapServiceesri.layers.Layer extends esri.layers.Layer {
    /** Full extent as defined by the map service. */
    fullExtent: esri.geometry.Extent;
    /** Initial extent as defined by the map service. */
    initialExtent: esri.geometry.Extent;
    /** The spatial reference of the map service. */
    spatialReference: esri.SpatialReference;
    /**
     * Method to implement when extending DynamicMapServiceLayer.
     * @param extent Current extent of the map.
     * @param width Current width of the map in pixels.
     * @param height Current height of the map in pixels.
     * @param callback The function to call when the method has completed.
     */
    getImageUrl(extent: esri.geometry.Extent, width: number, height: number, callback: Function): string;
    /** Refreshes the map by making a new request to the server. */
    refresh(): void;
  }
  export = DynamicMapServiceesri.layers.Layer;
  /** The results of a feature edit such as add, update or delete. */
  class esri.layers.FeatureEditResult {
    /** Unique ID of the attachment. */
    attachmentId: number;
    /** Information about  errors that occur if the edit operation failed. */
    error: Error;
    /** Unique ID of the feature or object. */
    objectId: number;
    /** If true the operation was successful. */
    success: boolean;
  }
  export = esri.layers.FeatureEditResult;

  /** The feature layer inherits from the graphics layer and can be used to display features from a single layer in either a esri.Map Service or Feature Service. */
  class esri.layers.Featureesri.layers.Layer extends esri.layers.Graphicsesri.layers.Layer {
    /** Delegate to either on-demand or snapshot mode depending on the characteristics of the service. */
    static MODE_AUTO: any;
    /** In on-demand mode, the feature layer retrieves features from the server when needed. */
    static MODE_ONDEMAND: any;
    /** In selection mode, features are retrieved from the server only when they are selected. */
    static MODE_SELECTION: any;
    /** In snapshot mode, the feature layer retrieves all the features from the associated layer resource and displays them as graphics on the client. */
    static MODE_SNAPSHOT: any;
    /** The popup displays content in HTML/TEXT. */
    static POPUP_HTML_TEXT: any;
    /** No popup type defined. */
    static POPUP_NONE: any;
    /** The popup displays the contents of a URL. */
    static POPUP_URL: any;
    /** Adds features to the current selection set. */
    static SELECTION_ADD: any;
    /** Creates a new selection. */
    static SELECTION_NEW: any;
    /** Removes features from the current selection. */
    static SELECTION_SUBTRACT: any;
    /** An object that contains service level metadata about whether or not the layer supports queries using statistics, order by fields, DISTINCT, pagination, query with distance, and returning queries with extents. */
    advancedQueryCapabilities: any;
    /** Returns true if the geometry of the features in the layer can be edited, false otherwise. */
    allowGeometryUpdates: boolean;
    /** The URL, when available, where the layer's attribution data is stored. */
    attributionDataUrl: string;
    /** Information about the capabilities enabled for this layer. */
    capabilities: string;
    /** Copyright information for the layer. */
    copyright: string;
    /** Metadata describing the default definition expression for the layer as defined by the service. */
    defaultDefinitionExpression: string;
    /** Indicates the default visibility for the layer. */
    defaultVisibility: boolean;
    /** The description of the layer as defined in the map service. */
    description: string;
    /** The name of the layer's primary display field. */
    displayField: string;
    /** Indicates the field names for the editor fields. */
    editFieldsInfo: any;
    /** The array of fields in the layer. */
    fields: esri.layers.Field[];
    /** The full extent of the layer. */
    fullExtent: esri.geometry.Extent;
    /** esri.geometry.Geometry type of the features in the layer. */
    geometryType: string;
    /** The globalIdesri.layers.Field for the layer. */
    globalIdField: string;
    /** Array of features in the layer. */
    graphics: esri.Graphic[];
    /** True if attachments are enabled on the feature layer. */
    hasAttachments: boolean;
    /** When true, the layer has attribution data. */
    hasAttributionData: boolean;
    /** The html popup type defined for the layer. */
    htmlPopupType: string;
    /** Label definition for this layer, specified as an array of label classes. */
    labelingInfo: esri.layers.LabelClass[];
    /** Unique ID of the layer that the esri.layers.Featureesri.layers.Layer was constructed against. */
    layerId: number;
    /** The maximum number of results that will be returned from a query. */
    maxRecordCount: number;
    /** Maximum visible scale for the layer. */
    maxScale: number;
    /** Minimum visible scale for the layer. */
    minScale: number;
    /** Supports feature services whose data source is a multipatch featureclass. */
    multipatchOption: string;
    /** The name of the layer as defined in the map service. */
    name: string;
    /** The name of the field that contains the Object ID field for the layer. */
    objectIdField: string;
    /** Indicates the ownership access control configuration. */
    ownershipBasedAccessControlForFeatures: any;
    /** Each element in the array is an object that describes the layer's relationship with another layer or table. */
    relationships: any[];
    /** The renderer for the layer. */
    renderer: esri.renderers.Renderer;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution: boolean;
    /** Determines if labels are displayed. */
    showLabels: boolean;
    /** The dynamic layer or table source. */
    source: esri.layers.LayerSource;
    /** When true, the layer supports orderByFields in a query operation. */
    supportsAdvancedQueries: boolean;
    /** When true, the layer supports uploading attachments with Uploads REST operation, which then can be used in the Add Attachment or Update Attachment REST operations. */
    supportsAttachmentsByUploadId: boolean;
    /** When true, the layer supports the Calculate REST operation when updating features. */
    supportsCalculate: boolean;
    /** When true, the layer supports statistical functions in query operations. */
    supportsStatistics: boolean;
    /** When true, the layer is suspended. */
    suspended: boolean;
    /** An array of feature templates defined in the Feature Service layer. */
    templates: esri.layers.FeatureTemplate[];
    /** Time information for the layer, such as start time field, end time field, track id field, layers time extent and the draw time interval. */
    timeInfo: esri.layers.TimeInfo;
    /** Specifies the type of layer. */
    type: string;
    /** The field that represents the Type ID field. */
    typeIdField: string;
    /** An array of sub types defined in the Feature Service layer. */
    types: esri.layers.FeatureType[];
    /** The version of ArcGIS Server where the layer is published. */
    version: number;
    /** When true, the layer is visible at the current map scale. */
    visibleAtMapScale: boolean;
    /**
     * Creates a new instance of a feature layer object from the ArcGIS Server REST resource identified by the input URL.
     * @param url URL to the ArcGIS Server REST resource that represents a feature service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.FeatureLayerOptions);
    /**
     * Creates a new instance of a feature layer using a FeatureCollection object.
     * @param featureCollectionObject A feature collection object.
     * @param options Optional parameters.
     */
    constructor(featureCollectionObject: any, options?: esri.FeatureLayerOptions);
    /**
     * Add an attachment to the feature specified by the ObjectId.
     * @param objectId The ObjectId of the feature to which the attachment is added.
     * @param formNode HTML form that contains a file upload field pointing to the file to be added as an attachment.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    addAttachment(objectId: number, formNode: HTMLFormElement, callback?: Function, errback?: Function): any;
    /**
     * Apply edits to the feature layer.
     * @param adds Array of features to add to the layer in the feature service.
     * @param updates Array of features whose geometry and/or attributes have changed.
     * @param deletes Array of features to delete.
     * @param callback This function will be called when the operation is complete.
     * @param errback An error object is returned if an error occurs.
     */
    applyEdits(adds?: esri.Graphic[], updates?: esri.Graphic[], deletes?: esri.Graphic[], callback?: Function, errback?: Function): any;
    /** Clears the current selection. */
    clearSelection(): esri.layers.Featureesri.layers.Layer;
    /**
     * Delete one or more attachments for the feature specified by the input ObjectId.
     * @param objectId The ObjectId of the feature from which the attachment is removed.
     * @param attachmentIds The array of attachment ids to delete.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    deleteAttachments(objectId: number, attachmentIds: number[], callback?: Function, errback?: Function): any;
    /** Asynchrously returns custom data for the layer when available. */
    getAttributionData(): any;
    /** Returns the current definition expression. */
    getDefinitionExpression(): string;
    /**
     * Returns the esri.layers.Domain associated with the given field name.
     * @param fieldName Name of the attribute field.
     * @param options Please see the options object specification table below.
     */
    getDomain(fieldName: string, options?: any): esri.layers.Domain;
    /**
     * Returns an object that describes the edit capabilities of the layer.
     * @param options If the layer supports ownership based access control, use the options to determine if the specified user can edit features.
     */
    getEditCapabilities(options?: any): any;
    /**
     * Returns an object describing the most recent edit operation performed on the given feature, if available.
     * @param feature The feature to get the edit info for.
     * @param options See the object specifications table below for the structure of the  options  object.
     */
    getEditInfo(feature: esri.Graphic, options?: any): any;
    /**
     * Returns a localized summary of the last edit operation performed on the given feature, if available.
     * @param feature The feature to get the edit summary for.
     * @param options See the object specifications table below for the structure of the  options  object.
     */
    getEditSummary(feature: esri.Graphic, options?: any): string;
    /**
     * Returns the esri.layers.Field given the specified field name.
     * @param fieldName Name of the attribute field.
     */
    getField(fieldName: string): esri.layers.Field;
    /** Returns the current value of the maxAllowableOffset used by the layer. */
    getMaxAllowableOffset(): number;
    /** Returns the list of fields used to order features by. */
    getOrderByFields(): string[];
    /** Gets the currently selected features. */
    getSelectedFeatures(): esri.Graphic[];
    /** Gets the current selection symbol. */
    getSelectionSymbol(): esri.symbols.Symbol;
    /** Get the current time definition applied to the feature layer. */
    getTimeDefinition(): Timeesri.geometry.Extent;
    /**
     * Returns a esri.layers.FeatureType describing the feature's type.
     * @param feature A feature from this layer.
     */
    getType(feature: Graphic): esri.layers.FeatureType;
    /** Returns true if geometryType is esriGeometryMultipatch and multipatchOption is xyFootprint. */
    hasXYFootprint(): boolean;
    /** Returns true if the esri.layers.Featureesri.layers.Layer is editable. */
    isEditable(): boolean;
    /**
     * Returns true if the layer is visible at the given scale.
     * @param scale The scale at which to check if the layer is visible.
     */
    isVisibleAtScale(scale: number): boolean;
    /**
     * esri.tasks.Query for information about attachments associated with the specified ObjectIds.
     * @param objectId The ObjectId for the feature to query for attachment information.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryAttachmentInfos(objectId: number, callback?: Function, errback?: Function): any;
    /**
     * Get a count of the number of features that satisfy the input query.
     * @param query The input query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryCount(query: esri.tasks.Query, callback?: Function, errback?: Function): any;
    /**
     * Get the extent of features that satisfy the input query.
     * @param query The query definition.
     * @param callback The function called when the method has completed.
     * @param errback The function called when error occurred.
     */
    queryExtent(query: esri.tasks.Query, callback?: Function, errback?: Function): any;
    /**
     * esri.tasks.Query features from the feature layer.
     * @param query The input query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryFeatures(query: esri.tasks.Query, callback?: Function, errback?: Function): any;
    /**
     * esri.tasks.Query for ObjectIds.
     * @param query The input query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryIds(query: esri.tasks.Query, callback?: Function, errback?: Function): any;
    /**
     * esri.tasks.Query features or records, from another layer or table, related to features in this layer.
     * @param relesri.tasks.Query The input query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryRelatedFeatures(relQuery: Relationshipesri.tasks.Query, callback?: Function, errback?: Function): any;
    /** Redraws all the graphics in the graphics layer. */
    redraw(): void;
    /** Refreshes the features in the feature layer. */
    refresh(): void;
    /** Resumes layer drawing. */
    resume(): void;
    /**
     * Selects features from the FeatureLayer.
     * @param query The input query.
     * @param selectionMethod The selection method defines how the rest of the selection is combined with the existing selection.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    selectFeatures(query: esri.tasks.Query, selectionMethod?: number, callback?: Function, errback?: Function): any;
    /**
     * Enable or disable auto generalization for the layer.
     * @param enable When true, auto generalize is enabled.
     */
    setAutoGeneralize(enable: boolean): esri.layers.Featureesri.layers.Layer;
    /**
     * Set's the definition expression for the FeatureLayer.
     * @param expression The definition expression to apply.
     */
    setDefinitionExpression(expression: string): esri.layers.Featureesri.layers.Layer;
    /**
     * Set the editability of feature layers created from a feature collection.
     * @param editable When true, the layer will be set as editable.
     */
    setEditable(editable: boolean): esri.layers.Featureesri.layers.Layer;
    /**
     * Set the layer's data source to the specified geodatabase version.
     * @param versionName The name of the geodatabase version to use as the layer's data source.
     */
    setGDBVersion(versionName: string): esri.layers.Featureesri.layers.Layer;
    /**
     * Specify or change the info template for a layer.
     * @param infoTemplate The new info template.
     */
    setInfoTemplate(infoTemplate: InfoTemplate): void;
    /**
     * Sets labeling info on the layer.
     * @param labelingInfo An array of esri.layers.LabelClass objects.
     */
    setLabelingInfo(labelingInfo: esri.layers.LabelClass[]): void;
    /**
     * Sets the maximum allowable offset used when generalizing geometries.
     * @param offset The maximum allowable offset.
     */
    setMaxAllowableOffset(offset: number): void;
    /**
     * Set the maximum scale for the layer.
     * @param scale The maximum scale at which the layer is visible.
     */
    setMaxScale(scale: number): void;
    /**
     * Set the minimum scale for the layer.
     * @param scale The minimum scale at which the layer is visible.
     */
    setMinScale(scale: number): void;
    /**
     * Initial opacity or transparency of layer.
     * @param opacity Value from 0 to 1, where 0 is 100% transparent and 1 has no transparency.
     */
    setOpacity(opacity: number): void;
    /**
     * Set the renderer for the feature layer.
     * @param renderer The renderer to apply to the feature layer
     */
    setRenderer(renderer: Renderer): void;
    /**
     * Set the scale range for the layer.
     * @param minScale The minimum scale for the layer.
     * @param maxScale The maximum scale for the layer.
     */
    setScaleRange(minScale: number, maxScale: number): void;
    /**
     * Set's the selection symbol for the feature layer.
     * @param symbol esri.symbols.Symbol for the current selection.
     */
    setSelectionSymbol(symbol: Symbol): esri.layers.Featureesri.layers.Layer;
    /**
     * Sets whether to display labels or not.
     * @param showLabels Set to true to show labels.
     */
    setShowLabels(showLabels: boolean): void;
    /**
     * Set's the time definition for the feature layer.
     * @param definition The new time extent used to filter the layer.
     */
    setTimeDefinition(definition: TimeExtent): esri.layers.Featureesri.layers.Layer;
    /**
     * Time offset allows you to display the features at a different time so they can be overlaid on top of previous or future time periods.
     * @param offsetValue The length of time to offset from "this" time.
     * @param offsetesri.Units esri.Units in which the offset is specified.
     */
    setTimeOffset(offsetValue: number, offsetUnits: string): esri.layers.Featureesri.layers.Layer;
    /**
     * Determine if the layer will update its content based on the map's current time extent.
     * @param update When false the layer will not update its content based on the map's time extent.
     */
    setUseMapTime(update: boolean): void;
    /** Suspends layer drawing. */
    suspend(): void;
    /** Returns an easily serializable object representation of the layer. */
    toJson(): any;
    /** Fires when addAttachments() is complete. */
    on(type: "add-attachment-complete", listener: (event: { result: esri.layers.FeatureEditResult; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fired before edits are applied to the feature layer. */
    on(type: "before-apply-edits", listener: (event: { adds: esri.Graphic[]; deletes: esri.Graphic[]; updates: esri.Graphic[]; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fired when the capabilities of the layer are modified using the setEditable method. */
    on(type: "capabilities-change", listener: (event: { target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a feature has been double clicked. */
    on(type: "dbl-click", listener: (event: { event: any; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when deleteAttachments is complete. */
    on(type: "delete-attachments-complete", listener: (event: { results: any[]; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires after applyEdits() is complete. */
    on(type: "edits-complete", listener: (event: { adds: esri.layers.FeatureEditResult[]; deletes: esri.layers.FeatureEditResult[]; updates: esri.layers.FeatureEditResult[]; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fired when the geodatabase version is switched. */
    on(type: "gdb-version-change", listener: (event: { target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fired when labeling info on the layer changes. */
    on(type: "labeling-info-change", listener: (event: { target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when queryAttachmentInfos method is called. */
    on(type: "query-attachment-infos-complete", listener: (event: { info: any[]; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when the query for the count is complete. */
    on(type: "query-count-complete", listener: (event: { count: number; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when queryesri.geometry.Extent method has completed. */
    on(type: "query-extent-complete", listener: (event: { count: number; extent: esri.geometry.Extent; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when queryFeatures() is complete. */
    on(type: "query-features-complete", listener: (event: { featureSet: esri.tasks.FeatureSet; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when queryIds() is complete. */
    on(type: "query-ids-complete", listener: (event: { objectIds: number[]; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fired when the feature layer could not draw all the features due to a maxRecordCount limitation on a query operation. */
    on(type: "query-limit-exceeded", listener: (event: { target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when queryRelatedFeatures() is complete. */
    on(type: "query-related-features-complete", listener: (event: { relatedFeatures: any; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer resumes drawing. */
    on(type: "resume", listener: (event: { target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires after clearSelection has been called. */
    on(type: "selection-clear", listener: (event: { target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when selectFeatures() completes. */
    on(type: "selection-complete", listener: (event: { features: esri.Graphic[]; method: number; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fired when the feature layer's labels are changed. */
    on(type: "show-labels-change", listener: (event: { target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer suspends drawing. */
    on(type: "suspend", listener: (event: { target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fired when the layer has finished updating its content. */
    on(type: "update-end", listener: (event: { error: Error; info: any; target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    /** Fired when the layer begins to update its content. */
    on(type: "update-start", listener: (event: { target: esri.layers.Featureesri.layers.Layer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.layers.Featureesri.layers.Layer;

  /** Feature templates define the information required to create a new feature. */
  class esri.layers.FeatureTemplate {
    /** The default drawing tool specified for this template is the arrow tool. */
    static TOOL_ARROW: any;
    /** The default drawing tool specified for this template is a auto complete polygon tool. */
    static TOOL_AUTO_COMPLETE_POLYGON: any;
    /** The default drawing tool specified for this template is the circle tool. */
    static TOOL_CIRCLE: any;
    /** The default drawing tool specified for this template is a ellipse tool. */
    static TOOL_ELLIPSE: any;
    /** The default drawing tool specified for this template is the freehand tool. */
    static TOOL_FREEHAND: any;
    /** The default drawing tool specified for this template is the line tool. */
    static TOOL_LINE: any;
    /** No default tool is specified. */
    static TOOL_NONE: any;
    /** The default drawing tool specified for this template is the point tool. */
    static TOOL_POINT: any;
    /** The default drawing tool specified for this template is the polygon tool. */
    static TOOL_POLYGON: any;
    /** The default drawing tool specified for this template is the rectangle. */
    static TOOL_RECTANGLE: any;
    /** The default drawing tool specified for this template is the triangle. */
    static TOOL_TRIANGLE: any;
    /** The description of the template. */
    description: string;
    /** The default drawing tool defined for the template. */
    drawingTool: string;
    /** The templates name. */
    name: string;
    /** An instance of the prototypical feature described by the template. */
    prototype: esri.Graphic;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.layers.FeatureTemplate;

  /** A type defined by a feature layer. */
  class esri.layers.FeatureType {
    /** esri.Map of field names to domains. */
    domains: any;
    /** The feature type identifier. */
    id: number;
    /** The feature type name. */
    name: string;
    /** Array of feature templates associated with this feature type. */
    templates: esri.layers.FeatureTemplate[];
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.layers.FeatureType;

  /** Information about each field in a layer. */
  class esri.layers.Field {
    /** The alias name for the field. */
    alias: string;
    /** esri.layers.Domain associated with the field. */
    domain: esri.layers.Domain;
    /** Indicates whether the field is editable. */
    editable: boolean;
    /** The field length */
    length: number;
    /** The name of the field. */
    name: string;
    /** Indicates if the field can accept null values. */
    nullable: boolean;
    /** The data type of the field. */
    type: string;
  }
  export = esri.layers.Field;

  /** The GeoRSSesri.layers.Layer class is used to create a layer based on GeoRSS. */
  class GeoRSSesri.layers.Layer extends esri.layers.Layer {
    /** The copyright information for the layer. */
    copyright: string;
    /** The default visibility of the layer. */
    defaultVisibility: boolean;
    /** The layer description. */
    description: string;
    /** An array that contains all the graphics in the GeoRSSLayer. */
    items: esri.Graphic[];
    /** The name of the layer. */
    name: string;
    /**
     * Creates a new GeoRSSesri.layers.Layer object.
     * @param url URL to the GeoRSS resource.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.GeoRSSLayerOptions);
    /** An array of feature layers for the GeoRSSLayer. */
    getFeatureLayers(): esri.layers.Featureesri.layers.Layer[];
    /** Fires when the layer is refreshed. */
    on(type: "refresh", listener: (event: { target: GeoRSSesri.layers.Layer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = GeoRSSesri.layers.Layer;

  /** A layer that contains one or more esri.Graphic features. */
  class esri.layers.Graphicsesri.layers.Layer extends esri.layers.Layer {
    /** List of attribute fields added as custom data attributes to graphics node. */
    dataAttributes: any;
    /** The array of graphics that make up the layer. */
    graphics: esri.Graphic[];
    /** The info template for the layer. */
    infoTemplate: esri.InfoTemplate;
    /** esri.renderers.Renderer assigned to the GraphicsLayer. */
    renderer: esri.renderers.Renderer;
    /** Indicates whether the layer is responsible for styling graphics. */
    styling: boolean;
    /** Type of vector graphics surface used to draw graphics. */
    surfaceType: string;
    /** Creates a new esri.layers.Graphicsesri.layers.Layer object. */
    constructor();
    /**
     * Creates a new esri.layers.Graphicsesri.layers.Layer object with parameters.
     * @param options See options list for parameters.
     */
    constructor(options?: esri.GraphicsLayerOptions);
    /**
     * Adds a graphic.
     * @param graphic The graphic to add.
     */
    add(graphic: Graphic): esri.Graphic;
    /** Clears all graphics. */
    clear(): void;
    /** Disables all mouse events on the graphics layer. */
    disableMouseEvents(): void;
    /** Enables all mouse events on the graphics layer. */
    enableMouseEvents(): void;
    /** Redraws all the graphics in the layer. */
    redraw(): void;
    /**
     * Removes a graphic.
     * @param graphic The graphic to remove.
     */
    remove(graphic: Graphic): esri.Graphic;
    /**
     * Specify or change the info template for a layer.
     * @param infoTemplate The new info template.
     */
    setInfoTemplate(infoTemplate: InfoTemplate): void;
    /**
     * Initial opacity or transparency of layer.
     * @param opacity Value from 0 to 1, where 0 is 100% transparent and 1 has no transparency.
     */
    setOpacity(opacity: number): void;
    /**
     * Sets the renderer for the graphics layer.
     * @param renderer The renderer used for the graphic.
     */
    setRenderer(renderer: Renderer): void;
    /** Fires when a graphic has been clicked. */
    on(type: "click", listener: (event: { event: any; target: esri.layers.Graphicsesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a graphic has been double clicked. */
    on(type: "dbl-click", listener: (event: { target: esri.layers.Graphicsesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a graphic is added to the GraphicsLayer. */
    on(type: "graphic-add", listener: (event: { graphic: esri.Graphic; target: esri.layers.Graphicsesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a graphic is drawn. */
    on(type: "graphic-draw", listener: (event: { graphic: esri.Graphic; target: esri.layers.Graphicsesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a graphic's DOM node is created and added to the layer. */
    on(type: "graphic-node-add", listener: (event: { graphic: esri.Graphic; node: HTMLElement; target: esri.layers.Graphicsesri.layers.Layer }) => void): esri.Handle;
    /** This event is fired when a graphic's DOM node is removed (consider the node destroyed). */
    on(type: "graphic-node-remove", listener: (event: { graphic: esri.Graphic; node: HTMLElement; target: esri.layers.Graphicsesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a graphic is removed from the GraphicsLayer. */
    on(type: "graphic-remove", listener: (event: { graphic: esri.Graphic; target: esri.layers.Graphicsesri.layers.Layer }) => void): esri.Handle;
    /** Fires when all graphics in the esri.layers.Graphicsesri.layers.Layer are cleared. */
    on(type: "graphics-clear", listener: (event: { target: esri.layers.Graphicsesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a mouse button is pressed down and the mouse cursor is on a graphic. */
    on(type: "mouse-down", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires while the mouse is being dragged until the mouse button is released. */
    on(type: "mouse-drag", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires as the mouse moves through a graphic on the GraphicsLayer. */
    on(type: "mouse-move", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires as the mouse exits a graphic on the GraphicsLayer. */
    on(type: "mouse-out", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when the mouse first enters into a graphic on the GraphicsLayer. */
    on(type: "mouse-over", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when a mouse button is released and the mouse cursor is on a graphic. */
    on(type: "mouse-up", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.layers.Graphicsesri.layers.Layer;

  /** Represents the image parameter options used when calling ArcGISDynamicMapServiceLayer.exportesri.layers.MapImage, Geoprocessor.getResultImage, and Geoprocessor.getResultImageLayer. */
  class esri.layers.ImageParameters {
    /** Shows all layers visible by default except the specified layer ID's. */
    static LAYER_OPTION_EXCLUDE: any;
    /** Shows all layers except the specified layer ID's. */
    static LAYER_OPTION_HIDE: any;
    /** Shows specified layer ID's in addition to layers visible by default. */
    static LAYER_OPTION_INCLUDE: any;
    /** Shows only the specified layer ID's. */
    static LAYER_OPTION_SHOW: any;
    /** esri.geometry.Extent of map to be exported. */
    bbox: esri.geometry.Extent;
    /** Dots per inch setting for an ArcGISDynamicMapServiceLayer. */
    dpi: number;
    /** esri.Map image format. */
    format: string;
    /** Requested image height in pixels. */
    height: number;
    /** Spatial reference of exported map. */
    imageSpatialReference: esri.SpatialReference;
    /** Array of layer definition expressions that allows you to filter the features of individual layers in the exported map image. */
    layerDefinitions: string[];
    /** A list of layer ID's, that represent which layers to include in the exported map. */
    layerIds: number[];
    /** The option for displaying or hiding the layer. */
    layerOption: string;
    /** Array of esri.layers.LayerTimeOptions objects that allow you to override how a layer is exported in reference to the map's time extent. */
    layerTimeOptions: esri.layers.LayerTimeOptions[];
    /** The time extent for the map image. */
    timeExtent: Timeesri.geometry.Extent;
    /** Whether or not background of dynamic image is transparent. */
    transparent: boolean;
    /** Requested image width in pixels. */
    width: number;
    /** Creates a new esri.layers.ImageParameters object. */
    constructor();
  }
  export = esri.layers.ImageParameters;

  /** Represents the image service parameter options used when calling ArcGISImageServiceLayer.exportMapImage. */
  class esri.layers.ImageServiceParameters {
    /** Resamples pixel by bilinear interpolation. */
    static INTERPOLATION_BILINEAR: any;
    /** Resamples pixel by cubic convolution. */
    static INTERPOLATION_CUBICCONVOLUTION: any;
    /** Resamples pixel by majority value. */
    static INTERPOLATION_MAJORITY: any;
    /** Resamples pixel by nearest neighbor. */
    static INTERPOLATION_NEARESTNEIGHBOR: any;
    /** Array of current band selections. */
    bandIds: number[];
    /** Current compression quality value. */
    compressionQuality: number;
    /** esri.geometry.Extent of the exported image. */
    extent: esri.geometry.Extent;
    /** esri.Map image format. */
    format: string;
    /** Requested image height in pixels. */
    height: number;
    /** Current interpolation method. */
    interpolation: string;
    /** Specifies the mosaic rule when defining how individual images should be mosaicked. */
    mosaicRule: esri.layers.MosaicRule;
    /** The pixel value that represents no information. */
    noData: number;
    /** Specifies the rendering rule for how the requested image should be rendered. */
    renderingRule: esri.layers.RasterFunction;
    /** Define the time extent for the image. */
    timeExtent: Timeesri.geometry.Extent;
    /** Requested image width in pixels. */
    width: number;
    /** Creates a new esri.layers.ImageServiceParameters object. */
    constructor();
  }
  export = esri.layers.ImageServiceParameters;

  /** This class is a subclass of esri/layers/Domain. */
  class Inheritedesri.layers.Domain extends esri.layers.Domain {
  }
  export = Inheritedesri.layers.Domain;

  /** The Joinesri.layers.DataSource class defines and provides information about the result of a join operation. */
  class Joinesri.layers.DataSource extends esri.layers.DataSource {
    /** The type of join that will be performed. */
    joinType: string;
    /** The key field used for the left table source for the join. */
    leftTableKey: string;
    /** The data source to be used as the left table for the join operation. */
    leftTableSource: esri.layers.LayerSource;
    /** The key field used for the right table source for the join. */
    rightTableKey: string;
    /** The data source to be used as the right table for the join operation. */
    rightTableSource: esri.layers.LayerSource;
    /**
     * Creates a new Joinesri.layers.DataSource object.
     * @param json JSON object representing the JoinDataSource.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = Joinesri.layers.DataSource;
  /** Defines information about a KML folder. */
  class esri.layers.KMLFolder {
    /** The KML folder description. */
    description: string;
    /** An array of objects that describe top-level KML features ids and their types. */
    featureInfos: any[];
    /** The KML folder id. */
    id: number;
    /** The KML folder name. */
    name: string;
    /** The id of the parent folder. */
    parentFolderId: number;
    /** The KML folder snippet. */
    snippet: string;
    /** An array of ids for the KML folder's subfolders. */
    subFolderIds: number[];
    /** The visibility of the KML folder. */
    visibility: number;
  }
  export = esri.layers.KMLFolder;

  /** The KMLGroundOverlay class provides details about a KML ground overlay. */
  export class KMLGroundOverlay {
    /** KML ground overlay description. */
    description: string;
    /** esri.geometry.Extent of image. */
    extent: esri.geometry.Extent;
    /** Requested image height in pixels. */
    height: number;
    /** URL to returned image. */
    href: string;
    /** The id of the KML ground overlay. */
    id: number;
    /** The name of the KML ground overlay. */
    name: string;
    /** Scale of requested dynamic map. */
    scale: number;
    /** Short snippet describing the KML ground overlay. */
    snippet: string;
    /** The KML ground overlay visibility. */
    visibility: number;
    /** Requested image width in pixels. */
    width: number;
  }

  /** The KMLesri.layers.Layer class is used to create a layer based on a KML file (.kml, .kmz). */
  class KMLesri.layers.Layer extends esri.layers.Layer {
    /** An array of objects that describe top-level KML features ids and their types. */
    featureInfos: any[];
    /** An array of esri.layers.KMLFolder objects that describe the folders and nested folders defined in the KML file. */
    folders: esri.layers.KMLFolder[];
    /** A link info object with properties that describe the network link. */
    linkInfo: any;
    /** The publicly accessible URL for a .kml or .kmz file. */
    url: string;
    /**
     * Creates a new KMLesri.layers.Layer based upon the given URL.
     * @param id Id to assign to the layer.
     * @param url URL for a .kml or .kmz file.
     * @param options Optional parameters.
     */
    constructor(id: string, url: string, options?: esri.KMLLayerOptions);
    /**
     * Get the KML feature identified by the input feature info.
     * @param featureInfo Feature info for the kml feature.
     */
    getFeature(featureInfo: any): any;
    /** Get an array of map layers that were created to draw placemarks, ground and screen overlays. */
    getLayers(): esri.layers.Layer[];
    /**
     * Set the visibility for the specified folder.
     * @param folder A KML folder.
     * @param isVisible The visibility of the folder and all kml features within the folder.
     */
    setFolderVisibility(folder: esri.layers.KMLFolder, isVisible: boolean): void;
    /** Fired after the layer is refreshed. */
    on(type: "refresh", listener: (event: { target: KMLesri.layers.Layer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = KMLesri.layers.Layer;
  /** An ArcGISTiledMapServiceesri.layers.Layer has a number of LODs (Levels of Detail). */
  class esri.layers.LOD {
    /** ID for each level. */
    level: number;
    /** String to be used when constructing URL to access a tile from this LOD. */
    levelValue: string;
    /** Resolution in map units of each pixel in a tile for each level. */
    resolution: number;
    /** Scale for each level. */
    scale: number;
  }
  export = esri.layers.LOD;

  /** esri.layers.LabelClass defines the styles of labels for ArcGISDynamicMapServiceLayer. */
  class esri.layers.LabelClass {
    /** Adjusts the formatting of labels. */
    labelExpression: string;
    /** The position of the label. */
    labelPlacement: string;
    /** The maximum scale to show labels. */
    maxScale: number;
    /** The minimum scale to show labels. */
    minScale: number;
    /** If this is defined, the symbol size changes proportionally. */
    sizeInfo: any;
    /** Sets the Rendering symbol for the label. */
    symbol: Textesri.symbols.Symbol;
    /** When true, show the fields in the labelExpression that have domains using the domain's name. */
    useCodedValues: boolean;
    /** A where clause determining which features are labeled. */
    where: string;
    /**
     * Create a esri.layers.LabelClass, in order to be added to layerDrawingOption.labelingInfo.
     * @param json Various options to configure this LabelClass.
     */
    constructor(json?: Object);
  }
  export = esri.layers.LabelClass;

  /** The Labelesri.layers.Layer inherits from the graphics layer and can be used to display texts and symbols on map. */
  class Labelesri.layers.Layer extends esri.layers.Graphicsesri.layers.Layer {
    /**
     * Creates a new Label layer.
     * @param params Constructor parameters.
     */
    constructor(params?: esri.LabelLayerOptions);
    /**
     * Adds reference to the feature layer which is labeled.
     * @param featureesri.layers.Layer The feature layer to be added to the label layer.
     * @param renderer The renderer used to render text labels.
     * @param textExpression An expression determining what text and field(s) will be displayed as in labels.
     * @param labelOptions An object providing additional options for changing label visibility and placement.
     */
    addFeatureLayer(featureLayer: esri.layers.Featureesri.layers.Layer, renderer?: Simpleesri.renderers.Renderer, textExpression?: any, labelOptions?: any): void;
    /**
     * Adds reference to the feature layer which is labeled.
     * @param featureesri.layers.Layer The feature layer to be added to the label layer.
     * @param renderer The renderer used to render text labels.
     * @param textExpression An expression determining what text and field(s) will be displayed as in labels.
     * @param labelOptions An object providing additional options for changing label visibility and placement.
     */
    addFeatureLayer(featureLayer: esri.layers.Featureesri.layers.Layer, renderer?: UniqueValueesri.renderers.Renderer, textExpression?: any, labelOptions?: any): void;
    /**
     * Adds reference to the feature layer which is labeled.
     * @param featureesri.layers.Layer The feature layer to be added to the label layer.
     * @param renderer The renderer used to render text labels.
     * @param textExpression An expression determining what text and field(s) will be displayed as in labels.
     * @param labelOptions An object providing additional options for changing label visibility and placement.
     */
    addFeatureLayer(featureLayer: esri.layers.Featureesri.layers.Layer, renderer?: ClassBreaksesri.renderers.Renderer, textExpression?: any, labelOptions?: any): void;
    /**
     * Returns reference to the feature layer which features will be labeled.
     * @param index Index of the referenced feature layer.
     */
    getFeatureLayer(index: number): esri.layers.Featureesri.layers.Layer;
  }
  export = Labelesri.layers.Layer;

  /** The Layeresri.layers.DataSource class defines and provides information about a layer created on the fly from a data source. */
  class Layeresri.layers.DataSource extends esri.layers.LayerSource {
    /** The data source used to create a dynamic data layer on the fly. */
    dataSource: esri.layers.DataSource;
    /**
     * Creates a new Layeresri.layers.DataSource object.
     * @param json JSON object representing the LayerDataSource.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = Layeresri.layers.DataSource;

  /** The esri.layers.LayerDrawingOptions class provides options for setting esri.layers.ArcGISDynamicMapServiceesri.layers.Layer rendering options. */
  class esri.layers.LayerDrawingOptions {
    /** Define labels of dynamicLayers. */
    labelingInfo: esri.layers.LabelClass[];
    /** The renderer to use for the dynamic layer. */
    renderer: esri.renderers.Renderer;
    /** Determines if the layer renders the symbols based on scale. */
    scaleSymbols: boolean;
    /** Determines if labels are displayed. */
    showLabels: boolean;
    /** The transparency of the layer. */
    transparency: number;
    /**
     * Creates a new esri.layers.LayerDrawingOptions object.
     * @param json JSON object representing the LayerDrawingOptions.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.layers.LayerDrawingOptions;
  /** Contains information about each layer in a map service. */
  class esri.layers.LayerInfo {
    /** Default visibility of the layers in the map service. */
    defaultVisibility: boolean;
    /** esri.layers.Layer ID assigned by ArcGIS Server for a layer. */
    id: number;
    /** The maximum visible scale for each layer in the map service. */
    maxScale: number;
    /** The minimum visible scale for each layer in the map service. */
    minScale: number;
    /** esri.layers.Layer name as defined in the  map service. */
    name: string;
    /** If the layer is part of a group layer, it will include the parent ID of the group layer. */
    parentLayerId: number;
    /** If the layer is a parent layer, it will have one or more sub layers included in an array. */
    subLayerIds: number[];
  }
  export = esri.layers.LayerInfo;

  /** The LayerMapSource class defines and provides information about an existing map service layer. */
  export class LayerMapSource extends esri.layers.LayerSource {
    /** When supported, specify the version in an SDE workspace that the layer will use. */
    gdbVersion: string;
    /** The layer id for a sub-layer in the current map service. */
    mapLayerId: number;
    /**
     * Creates a new LayerMapSource object.
     * @param json JSON object representing the LayerMapSource.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  /** Used to denote classes that may be used as a layer's source. */
  class esri.layers.LayerSource {
    /** Used to describe the origin of the LayerSource. */
    type: string;
    /**
     * Creates a new esri.layers.LayerSource object.
     * @param json Creates a new esri.layers.LayerSource object.
     */
    constructor(json?: Object);
  }
  export = esri.layers.LayerSource;
  /** Defines the time options for the layer. */
  class esri.layers.LayerTimeOptions {
    /** If true, the layer will draw all features from the beginning of the data's time extent. */
    timeDataCumulative: boolean;
    /** The length of time the data is offset from the time when the data was recorded. */
    timeOffset: number;
    /** Temporal unit in which the time offset is measured. */
    timeOffsetUnits: string;
    /** If true, the layer participates in time-related rendering and query operations. */
    useTime: boolean;
  }
  export = esri.layers.LayerTimeOptions;

  /** Represents the data object for the dynamically generated map. */
  class esri.layers.MapImage {
    /** esri.geometry.Extent of exported map. */
    extent: esri.geometry.Extent;
    /** Requested image height in pixels. */
    height: number;
    /** URL to returned image. */
    href: string;
    /** Scale of requested dynamic map. */
    scale: number;
    /** Requested image width in pixels. */
    width: number;
    /**
     * Creates a new esri.Map Image object.
     * @param options An object that defines the map image options.
     */
    constructor(options: esri.MapImageOptions);
  }
  export = esri.layers.MapImage;

  /** The MapImageesri.layers.Layer class is used to add georeferenced images to the map. */
  class MapImageesri.layers.Layer extends esri.layers.Layer {
    /**
     * Creates a new MapImageesri.layers.Layer object
     * @param options Optional parameters.
     */
    constructor(options?: any);
    /**
     * Add an image to the map.
     * @param mapImage A esri.layers.MapImage object that defines the image to add to the map.
     */
    addImage(mapImage: MapImage): void;
    /** Get an array of esri.layers.MapImage objects that define the images in the MapImageLayer. */
    getImages(): esri.layers.MapImage[];
    /** Remove all images from the layer. */
    removeAllImages(): void;
    /**
     * Remove the specified image from the layer.
     * @param mapImage The esri.layers.MapImage object that defines the image to remove.
     */
    removeImage(mapImage: MapImage): void;
  }
  export = MapImageesri.layers.Layer;

  /** Specifies the mosaic rule when defining how individual images should be mosaicked. */
  class esri.layers.MosaicRule {
    /** Sorts rasters based on an attribute field and its difference from a base value. */
    static METHOD_ATTRIBUTE: any;
    /** Sorts rasters where rasters that have their centers closest to the view center or center of view extent are placed on top. */
    static METHOD_CENTER: any;
    /** Specifies that only rasters in the given list of raster Ids participate in the mosaic. */
    static METHOD_LOCKRASTER: any;
    /** Sorts rasters by the distance between the nadir position and view center. */
    static METHOD_NADIR: any;
    /** No mosaic method specified. */
    static METHOD_NONE: any;
    /** Sorts rasters in a view independent way, where rasters with their centers most northwest are displayed on top. */
    static METHOD_NORTHWEST: any;
    /** Cuts the raster using the predefined seamline shape. */
    static METHOD_SEAMLINE: any;
    /** Sorts rasters based on a user-defined viewpoint location and nadir location. */
    static METHOD_VIEWPOINT: any;
    /** Takes the blended value of all overlapping pixels. */
    static OPERATION_BLEND: any;
    /** Takes the first value of all overlapping pixels. */
    static OPERATION_FIRST: any;
    /** Takes the last value of all overlapping pixels. */
    static OPERATION_LAST: any;
    /** Takes the maximum value of all overlapping pixels. */
    static OPERATION_MAX: any;
    /** Takes the mean value of all overlapping pixels. */
    static OPERATION_MEAN: any;
    /** Takes the minimum value of all overlapping pixels. */
    static OPERATION_MIN: any;
    /** Indicates whether the sort should be ascending or not. */
    ascending: boolean;
    /** An array of raster Ids. */
    lockRasterIds: number[];
    /** The mosaic method determines how the selected rasters are ordered. */
    method: string;
    /** A multiple dimensional service can have multiple variables and multiple dimensions. */
    multidimensionalDefinition: esri.layers.DimensionalDefinition[];
    /** Defines a selection using a set of ObjectIds. */
    objectIds: number[];
    /** Defines the mosaic operation used to resolve overlapping pixels. */
    operation: string;
    /** The name of the attribute field that is used together with a constant sortValue to define the mosaicking order when the mosaic method is set to METHOD_ATTRIBUTE. */
    sortField: string;
    /** A constant value defining a reference or base value for the sort field when the mosaic method is set to METHOD_ATTRIBUTE. */
    sortValue: string;
    /** Defines the viewpoint location on which the ordering is defined based on the distance from the viewpoint and the nadir of rasters. */
    viewpoint: esri.geometry.Point;
    /** The where clause determines which rasters will participate in the mosaic. */
    where: string;
    /** Creates a new esri.layers.MosaicRule object */
    constructor();
    /**
     * Create a new mosaic rule object using a json string representing a serialized version of the mosaic rule.
     * @param json A json string representing a serialized version of the mosaic rule.
     */
    constructor(json: Object);
    /** Returns an easily serializable object representation of the mosaic rule. */
    toJson(): any;
  }
  export = esri.layers.MosaicRule;

  /** Allows you to use basemaps from  OpenStreetesri.Map . */
  class OpenStreetMapesri.layers.Layer extends TiledMapServiceesri.layers.Layer {
    /** The copyright text. */
    copyright: string;
    /**
     * Creates a new OpenStreetMapesri.layers.Layer object.
     * @param options Optional parameters.
     */
    constructor(options?: esri.OpenStreetMapLayerOptions);
  }
  export = OpenStreetMapesri.layers.Layer;

  /** The Queryesri.layers.DataSource class defines and provides information about a layer or table that is defined by a SQL query. */
  class Queryesri.layers.DataSource extends esri.layers.DataSource {
    /** The geometry type of the data source. */
    geometryType: string;
    /** An array of field names that define a unique identifier for the feature. */
    oidFields: string[];
    /** The SQL query string that defines the data source output. */
    query: string;
    /** The spatial reference for the data source. */
    spatialReference: esri.SpatialReference;
    /** The workspace id for the registered file geodatabase, SDE or Shapefile workspace. */
    workspaceId: string;
    /**
     * Creates a new Queryesri.layers.DataSource object.
     * @param json JSON object representing the QueryDataSource.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = Queryesri.layers.DataSource;

  /** Information about the range of values belonging to the domain. */
  class Rangeesri.layers.Domain extends esri.layers.Domain {
    /** The maximum valid value. */
    maxValue: number;
    /** The minimum valid value. */
    minValue: number;
  }
  export = Rangeesri.layers.Domain;

  /** The Rasteresri.layers.DataSource class defines and provides information about a file-based raster that resides in a registered raster workspace. */
  class Rasteresri.layers.DataSource extends esri.layers.DataSource {
    /** The name of a raster that resides in the registered workspace. */
    dataSourceName: string;
    /** The workspace id for the registered raster workspace. */
    workspaceId: string;
    /**
     * Creates a new Rasteresri.layers.DataSource object.
     * @param json JSON object representing the RasterDataSource.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = Rasteresri.layers.DataSource;
  /** Specifies the processing to be done to the image service. */
  class esri.layers.RasterFunction {
    /** Deprecated at v3.10, use functionArguments instead. */
    arguments: any;
    /** The arguments for the raster function. */
    functionArguments: any;
    /** The raster function name. */
    functionName: string;
    /** Variable name for the raster function. */
    variableName: string;
    /** Creates a new esri.layers.RasterFunction object. */
    constructor();
    /**
     * Create a new Raster Function object using a json string representing a serialized version of a raster function.
     * @param json A json string representing a serialized version of a raster function.
     */
    constructor(json: Object);
    /** Returns an easily serializable object representation of the raster function. */
    toJson(): any;
  }
  export = esri.layers.RasterFunction;

  /** The stream layer extends the feature layer to add the ability to connect to a stream of data using HTML5 WebSockets. */
  class Streamesri.layers.Layer extends esri.layers.Featureesri.layers.Layer {
    /** The maximum number of observations being shown for each unique track. */
    maximumTrackPoints: number;
    /** Raw access to the connected websocket. */
    socket: any;
    /** URL used to make the socket connection. */
    socketUrl: string;
    /**
     * Creates a new Streamesri.layers.Layer with a service URL.
     * @param url URL to an ArcGIS Server Stream Service.
     * @param options Optional parameters used to create the layer.
     */
    constructor(url: string, options?: esri.StreamLayerOptions1);
    /**
     * Creates a new Streamesri.layers.Layer with a FeatureCollection object.
     * @param featureCollectionObject A feature collection object.
     * @param options Optional parameters used to create the layer.
     */
    constructor(featureCollectionObject: any, options?: esri.StreamLayerOptions2);
    /**
     * Connect to the Stream Server socket.
     * @param callback The function to call when the method has completed.
     */
    connect(callback?: Function): void;
    /**
     * Disconnect from the Stream Server socket.
     * @param callback The function to call when the method has completed.
     */
    disconnect(callback?: Function): void;
    /** Gets the where property of the layer's filter. */
    getDefinitionExpression(): string;
    /** Gets the spatial filter set on the layer. */
    getGeometryDefinition(): esri.geometry.Extent;
    /**
     * Gets the unique values of the graphics (in the StreamLayer) based on the `fieldName` parameter.
     * @param fieldName esri.layers.Field to get the unique values from.
     */
    getUniqueValues(fieldName: string): any[];
    /**
     * Sets the spatial filter for the layer.
     * @param extent Limit the features in the Streamesri.layers.Layer by setting a bounding box.
     */
    setGeometryDefinition(extent: Extent): void;
    /**
     * Sets the maximumTrackPoints property for the layer.
     * @param value The maximum track points for the layer.
     */
    setMaximumTrackPoints(value: number): void;
    /** Fires when the layer attempts to reconnect to the web socket. */
    on(type: "attempt-reconnect", listener: (event: { count: number; url: string; target: Streamesri.layers.Layer }) => void): esri.Handle;
    /** Fires when connection is successfully made to socket. */
    on(type: "connect", listener: (event: { target: Streamesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a connection cannot be made with the web socket. */
    on(type: "connection-error", listener: (event: { error: Error; target: Streamesri.layers.Layer }) => void): esri.Handle;
    /** Fires when disconnect from socket. */
    on(type: "disconnect", listener: (event: { target: Streamesri.layers.Layer }) => void): esri.Handle;
    /** Fires when the layer receives a message that the server-side filter has been changed. */
    on(type: "filter-change", listener: (event: { error: Error; filter: any; target: Streamesri.layers.Layer }) => void): esri.Handle;
    /** Fires after a message is pushed to the layer. */
    on(type: "message", listener: (event: { message: any; target: Streamesri.layers.Layer }) => void): esri.Handle;
    /** Fires when layer is added to map (if stream service is associated with an archive feature service) and when graphics are updated on the map due to new ones being added or removed (for example purged). */
    on(type: "update-start", listener: (event: { target: Streamesri.layers.Layer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Streamesri.layers.Layer;

  /** The Tableesri.layers.DataSource class defines and provides information about a table, feature class, or raster that resides in a registered file geodatabase, SDE or Shapefile workspace. */
  class Tableesri.layers.DataSource extends esri.layers.DataSource {
    /** The name of a table, feature class or raster that resides in the registered workspace. */
    dataSourceName: string;
    /** For versioned SDE workspaces, use this property to point to an alternate version. */
    gdbVersion: string;
    /** The workspace id for the registered file geodatabase, SDE or Shapefile workspace. */
    workspaceId: string;
    /**
     * Creates a new Tableesri.layers.DataSource object.
     * @param json JSON object representing the TableDataSource.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = Tableesri.layers.DataSource;

  /** Contains information about the tiling scheme for an ArcGISTiledMapServiceLayer. */
  class esri.layers.TileInfo {
    /** The dpi of the tiling scheme. */
    dpi: number;
    /** Image format of the cached tiles. */
    format: string;
    /** Height of each tile in pixels. */
    height: number;
    /** An array of levels of detail that define the tiling scheme. */
    lods: esri.layers.LOD[];
    /** The tiling scheme origin. */
    origin: esri.geometry.Point;
    /** The spatial reference of the tiling schema. */
    spatialReference: esri.SpatialReference;
    /** Width of each tile in pixels. */
    width: number;
    /**
     * Creates a new object describing the given tiling scheme.
     * @param properties Properties describing the tiling scheme.
     */
    constructor(properties: any);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.layers.TileInfo;

  /** The base class for all tiled map service layers. */
  class TiledMapServiceesri.layers.Layer extends esri.layers.Layer {
    /** Full extent as defined by the map service. */
    fullExtent: esri.geometry.Extent;
    /** Initial extent as defined by the map service. */
    initialExtent: esri.geometry.Extent;
    /** The spatial reference of the map service. */
    spatialReference: esri.SpatialReference;
    /** Returns esri.layers.TileInfo, which has information on the tiling schema. */
    tileInfo: esri.layers.TileInfo;
    /** Creates a new TiledMapServiceesri.layers.Layer object. */
    constructor();
    /**
     * Method to implement when extending TiledMapServiceLayer.
     * @param level Requested tile's level.
     * @param row Requested tile's row.
     * @param column Requested tile's column.
     */
    getTileUrl(level: number, row: number, column: number): string;
    /** Reloads all the tiles in the current view. */
    refresh(): void;
    /** Specify areas to not show tiles. */
    setExclusionAreas(): any[];
  }
  export = TiledMapServiceesri.layers.Layer;

  /** Time information details. */
  class esri.layers.TimeInfo {
    /** Indicates a value measured in centuries. */
    static UNIT_CENTURIES: any;
    /** Indicates a value measured in days. */
    static UNIT_DAYS: any;
    /** Indicates a value measured in decades. */
    static UNIT_DECADES: any;
    /** Indicates a value measured in hours. */
    static UNIT_HOURS: any;
    /** Indicates a value measured in milliseconds. */
    static UNIT_MILLISECONDS: any;
    /** Indicates a value measured in minutes. */
    static UNIT_MINUTES: any;
    /** Indicates a value measured in months. */
    static UNIT_MONTHS: any;
    /** Indicates a value measured in seconds. */
    static UNIT_SECONDS: any;
    /** Indicates a value measured in unknown units. */
    static UNIT_UNKNOWN: any;
    /** Indicates a value measured in weeks. */
    static UNIT_WEEKS: any;
    /** Indicates a value measured in years. */
    static UNIT_YEARS: any;
    /** The name of the attribute field that contains the end time information. */
    endTimeField: string;
    /** Default time-related export options for the layer. */
    exportOptions: esri.layers.LayerTimeOptions;
    /** The name of the attribute field that contains the start time information. */
    startTimeField: string;
    /** The time extent for all the data in the layer. */
    timeExtent: Timeesri.geometry.Extent;
    /** Time interval of the data in the layer. */
    timeInterval: number;
    /** Temporal unit in which the time interval is measured. */
    timeIntervalUnits: string;
    /** Information about how the time was measured. */
    timeReference: esri.layers.TimeReference;
    /** The field that contains the trackId. */
    trackIdField: string;
  }
  export = esri.layers.TimeInfo;
  /** esri.layers.TimeReference contains information about how the time was measured. */
  class esri.layers.TimeReference {
    /** Indicates whether the time reference respects daylight savings time. */
    respectsDaylightSaving: boolean;
    /** The time zone information associated with the time reference. */
    timeZone: string;
  }
  export = esri.layers.TimeReference;

  /** A layer for OGC Web esri.Map Services (WMS). */
  class WMSesri.layers.Layer extends DynamicMapServiceesri.layers.Layer {
    /** Copyright of the WMS service. */
    copyright: string;
    /** Description of the WMS service. */
    description: string;
    /** esri.geometry.Extent of the WMS service. */
    extent: esri.geometry.Extent;
    /** The URL for the WMS Getesri.Map call. */
    getMapUrl: string;
    /** The map image format. */
    imageFormat: string;
    /** List of layers in the WMS service. */
    layerInfos: WMSesri.layers.LayerInfo[];
    /** Maximum height in pixels the WMS service supports. */
    maxHeight: number;
    /** Maximum width in pixels the WMS service supports. */
    maxWidth: number;
    /** Spatial reference of the WMS service. */
    spatialReference: esri.SpatialReference;
    /** Title of the WMS service. */
    title: string;
    /** Version of the WMS service. */
    version: string;
    /**
     * Creates a new WMSesri.layers.Layer object.
     * @param url URL to the OGC Web esri.Map Service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.WMSLayerOptions);
    /**
     * Set the map image format; valid values are "png", "jpg", "pdf", "bmp", "gif" and "svg".
     * @param format The image format.
     */
    setImageFormat(format: string): void;
    /**
     * Specify whether the background image is transparent.
     * @param transparency When true the background image is transparent.
     */
    setImageTransparency(transparency: boolean): void;
    /**
     * Specify a list of layer names to updates the visible layers.
     * @param layers An array of layer ids.
     */
    setVisibleLayers(layers: string[]): void;
  }
  export = WMSesri.layers.Layer;

  /** The WMSesri.layers.LayerInfo class defines and provides information about layers in a WMS service. */
  class WMSesri.layers.LayerInfo {
    /** The layer description defines the value of the Abstract capabilities property. */
    description: string;
    /** The layer extent. */
    extent: esri.geometry.Extent;
    /** The layer  name. */
    name: string;
    /** The layer title. */
    title: string;
    /**
     * Creates a new WMSesri.layers.LayerInfo object.
     * @param layer WMSesri.layers.LayerInfo layer object.
     */
    constructor(layer: any);
  }
  export = WMSesri.layers.LayerInfo;

  /** The WMTSesri.layers.Layer class is used to create a layer based on an OGC Web esri.Map Tile Service layer. */
  class WMTSesri.layers.Layer extends TiledMapServiceesri.layers.Layer {
    /** Copyright information for the service. */
    copyright: string;
    /** The description of the active layer if specified in the capabilties file or the resource info. */
    description: string;
    /** The tile format. */
    format: string;
    /** The full extent of the active layer. */
    fullExtent: esri.geometry.Extent;
    /** The initial extent of the active layer. */
    initialExtent: esri.geometry.Extent;
    /** An array of esri.layers.WMTSesri.layers.LayerInfo objects. */
    layerInfos: any[];
    /** The service mode for the WMTS layer. */
    serviceMode: string;
    /** The spatial reference for the WMTS service. */
    spatialReference: esri.SpatialReference;
    /** The tile info for the active layer. */
    tileInfo: esri.layers.TileInfo;
    /** Title of the WMTS service. */
    title: string;
    /** Version of the WMTS service. */
    version: string;
    /**
     * Creates a new WMTSesri.layers.Layer object.
     * @param url URL for the WMTS endpoint.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.WMTSLayerOptions);
    /**
     * Set the active layer for the WMTS service.
     * @param esri.layers.WMTSesri.layers.LayerInfo The esri.layers.WMTSesri.layers.LayerInfo for the layer to make active.
     */
    setActiveLayer(WMTSLayerInfo: WMTSLayerInfo): void;
  }
  export = WMTSesri.layers.Layer;

  /** The esri.layers.WMTSesri.layers.LayerInfo class defines and provides information about layers in a WMTS service. */
  class esri.layers.WMTSesri.layers.LayerInfo {
    /**
     * Creates a new esri.layers.WMTSesri.layers.LayerInfo object.
     * @param options An object that defines the layer info options.
     */
    constructor(options: esri.WMTSLayerInfoOptions);
  }
  export = esri.layers.WMTSesri.layers.LayerInfo;

  /** The WebTiledesri.layers.Layer class provides a simple way to add non-ArcGIS Server map tiles as a layer to a map. */
  class WebTiledesri.layers.Layer extends TiledMapServiceesri.layers.Layer {
    /** The attribution information for the layer. */
    copyright: string;
    /** The full extent of the layer. */
    fullExtent: esri.geometry.Extent;
    /** The initial extent of the layer. */
    initialExtent: esri.geometry.Extent;
    /** The spatial reference of the layer. */
    spatialReference: esri.SpatialReference;
    /** Define the tile info for the layer including lods, rows, cols, origin and spatial reference. */
    tileInfo: esri.layers.TileInfo;
    /** The tile server names for the layer. */
    tileServers: string[];
    /**
     * Creates a new WebTiledLayer.
     * @param urlTemplate The URL template to retrieve the tiles.
     * @param options Optional parameters.
     */
    constructor(urlTemplate: string, options?: esri.WebTiledLayerOptions);
  }
  export = WebTiledesri.layers.Layer;

  /** The base class for all layers that can be added to a map. */
  class esri.layers.Layer {
    /** The URL, when available, where the layer's attribution data is stored. */
    attributionDataUrl: string;
    /** class attribute of the layer's node. */
    className: string;
    /** Provides credential information for the layer such as userid and token if the layer represents a resource that is secured with token-based authentication. */
    credential: esri.Credential;
    /** When true, the layer has attribution data. */
    hasAttributionData: boolean;
    /** ID assigned to the layer. */
    id: string;
    /** When the layer is loaded, the value becomes "true", and layer properties can be accessed. */
    loaded: boolean;
    /** Set if the layer failed to load. */
    loadError: Error;
    /** Maximum visible scale for the layer. */
    maxScale: number;
    /** Minimum visible scale for the layer. */
    minScale: number;
    /** Opacity or transparency of layer. */
    opacity: number;
    /** Refresh interval of the layer in minutes. */
    refreshInterval: number;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution: boolean;
    /** When true, the layer is suspended. */
    suspended: boolean;
    /** URL to the ArcGIS Server REST resource that represents a map service. */
    url: string;
    /** Visibility of the layer. */
    visible: boolean;
    /** When true, the layer is visible at the current map scale. */
    visibleAtMapScale: boolean;
    /**
     * Creates a new esri.layers.Layer object.
     * @param options Optional parameters.
     */
    constructor(options?: esri.LayerOptions);
    /**
     * Adds a new attribute or changes the value of an existing attribute on the layer's node.
     * @param name The name of the attribute.
     * @param value The value of the attribute.
     */
    attr(name: string, value: string): esri.layers.Layer;
    /** Asynchrously returns custom data for the layer when available. */
    getAttributionData(): any;
    /** Returns reference to the map control the layer is added to. */
    getMap(): esri.Map;
    /** Returns the layer's DOM node. */
    getNode(): HTMLElement;
    /** Sets the visibility of the layer to "false". */
    hide(): void;
    /**
     * Returns true if the layer is visible at the given scale.
     * @param scale The scale at which to check if the layer is visible.
     */
    isVisibleAtScale(scale: number): boolean;
    /** Resumes layer drawing. */
    resume(): void;
    /**
     * Set the maximum scale for the layer.
     * @param scale The maximum scale at which the layer is visible.
     */
    setMaxScale(scale: number): void;
    /**
     * Set the minimum scale for the layer.
     * @param scale The minimum scale at which the layer is visible.
     */
    setMinScale(scale: number): void;
    /**
     * Sets the opacity of the layer.
     * @param opacity Value from 0 to 1, where 0 is 100% transparent and 1 has no transparency.
     */
    setOpacity(opacity: number): void;
    /**
     * Changes the layer's refresh interval to the given value (in minutes).
     * @param interval Refresh interval of the layer in minutes.
     */
    setRefreshInterval(interval: number): esri.layers.Layer;
    /**
     * Set the scale range for the layer.
     * @param minScale The minimum scale at which the layer is visible.
     * @param maxScale The maximum scale at which the layer is visible.
     */
    setScaleRange(minScale: number, maxScale: number): void;
    /**
     * Sets the visibility of the layer.
     * @param isVisible Set the visibility of the layer.
     */
    setVisibility(isVisible: boolean): void;
    /** Sets the visibility of the layer to "true". */
    show(): void;
    /** Suspends layer drawing. */
    suspend(): void;
    /** Fires when there is a problem retrieving a layer. */
    on(type: "error", listener: (event: { error: Error; target: esri.layers.Layer }) => void): esri.Handle;
    /** Fires after layer properties for the layer are successfully populated. */
    on(type: "load", listener: (event: { layer: esri.layers.Layer; target: esri.layers.Layer }) => void): esri.Handle;
    /** Fires when the layer opacity has been changed, and returns an object with the opacity value. */
    on(type: "opacity-change", listener: (event: { opacity: number; target: esri.layers.Layer }) => void): esri.Handle;
    /** This event is fired when the layer's refreshInterval is modified. */
    on(type: "refresh-interval-change", listener: (event: { target: esri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer resumes drawing. */
    on(type: "resume", listener: (event: { target: esri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: esri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: esri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer suspends drawing. */
    on(type: "suspend", listener: (event: { target: esri.layers.Layer }) => void): esri.Handle;
    /** Fires any time a layer has finished loading or updating itself. */
    on(type: "update", listener: (event: { target: esri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer has finished updating its content. */
    on(type: "update-end", listener: (event: { error: Error; target: esri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer begins to update its content. */
    on(type: "update-start", listener: (event: { target: esri.layers.Layer }) => void): esri.Handle;
    /** Fires when the layer visibility has been changed, and returns an object with a Boolean visible property containing the new visibility value of the layer. */
    on(type: "visibility-change", listener: (event: { visible: boolean; target: esri.layers.Layer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.layers.Layer;
}
declare namespace esri.plugins {

  /** A static utility module that adds or removes a SpatialIndex instance on a esri.Map or FeatureLayer. */
  export var spatialIndex: {
    /**
     * Adds an index property to the target instance.
     * @param target The map or feature layer to which the index is connected.
     * @param options See the object specifications table below for the structure of the index  options  object.
     */
    add(target: esri.Map, options?: any): void;
    /**
     * Adds an index property to the target instance.
     * @param target The map or feature layer to which the index is connected.
     * @param options See the object specifications table below for the structure of the index  options  object.
     */
    add(target: esri.layers.Featureesri.layers.Layer, options?: any): void;
    /** Removes the index plugin. */
    remove(): void;
  };
}
declare namespace esri.process {

  /** The base processor class provides the generic api for processors and provides an extension point from which developers can create and extend additional processors. */
  class esri.process.Processor {
    /** Allow the feature layer to draw the features. */
    drawFeatures: boolean;
    /** Should features be fetched through the Worker. */
    fetchWithWorker: boolean;
    /** Layer(s) connected to the processor. */
    layers: esri.layers.Featureesri.layers.Layer[];
    /** Pass features back to layer without delay before processing. */
    passFeatures: boolean;
    /** Require support for Worker in order to use this processor. */
    requireWorkerSupport: boolean;
    /**
     * Creates a processor.
     * @param options Configuration options for the processor.
     */
    constructor(options?: esri.ProcessorOptions);
    /**
     * Add layer to processor.
     * @param layer esri.layers.Featureesri.layers.Layer to be added.
     */
    addLayer(layer: FeatureLayer): void;
    /**
     * Remove layer from processor.
     * @param layer esri.layers.Featureesri.layers.Layer to be removed.
     */
    removeLayer(layer: FeatureLayer): void;
    /**
     * Synchronize the layers the processor handles with the map's esri.layers.Graphicsesri.layers.Layer and esri.layers.Graphicsesri.layers.Layer subclasses (esri.layers.Featureesri.layers.Layer etc).
     * @param map The map instance to synchronize layers with.
     */
    setMap(map: Map): void;
    /** Start the processor. */
    start(): void;
    /** Stop the processor. */
    stop(): void;
    /** Unset the map and detach processor from all layers. */
    unsetMap(): void;
    /** Fires when the processor is started. */
    on(type: "start", listener: (event: { target: esri.process.Processor }) => void): esri.Handle;
    /** Fires when the processor is stopped. */
    on(type: "stop", listener: (event: { target: esri.process.Processor }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.process.Processor;

  /** Builds and maintains a spatial index of feature geometry in one or more FeatureLayer. */
  export class SpatialIndex extends esri.process.Processor {
    /**
     * Creates a SpatialIndex.
     * @param options Configuration options for the processor.
     */
    constructor(options?: esri.SpatialIndexOptions);
    /**
     * Searches index for items which intersect the test object.
     * @param test The point or area to intersect.
     * @param layerId ID assigned to the layer.
     * @param getRects Whether to get the rectangle object with data in leaf, otherwise just get the stored data.
     */
    intersects(test: esri.geometry.Point, layerId?: string, getRects?: boolean): any;
    /**
     * Searches index for items which intersect the test object.
     * @param test The point or area to intersect.
     * @param layerId ID assigned to the layer.
     * @param getRects Whether to get the rectangle object with data in leaf, otherwise just get the stored data.
     */
    intersects(test: esri.Graphic, layerId?: string, getRects?: boolean): any;
    /**
     * Searches index for items which intersect the test object.
     * @param test The point or area to intersect.
     * @param layerId ID assigned to the layer.
     * @param getRects Whether to get the rectangle object with data in leaf, otherwise just get the stored data.
     */
    intersects(test: esri.geometry.Extent, layerId?: string, getRects?: boolean): any;
    /**
     * Searches index for items which intersect the test object.
     * @param test The point or area to intersect.
     * @param layerId ID assigned to the layer.
     * @param getRects Whether to get the rectangle object with data in leaf, otherwise just get the stored data.
     */
    intersects(test: number[], layerId?: string, getRects?: boolean): any;
    /**
     * Searches for the nearest point(s) to the passed point within the specified criteria.
     * @param criteria See the object specifications table below for the structure of the  criteria  object.
     * @param layerId ID assigned to the layer.
     */
    nearest(criteria: any, layerId?: string): any;
  }
}
declare namespace esri.renderers {

  /** A class breaks renderer symbolizes each graphic based on the value of some numeric attribute. */
  class ClassBreaksesri.renderers.Renderer extends esri.renderers.Renderer {
    /** Attribute field renderer uses to match values. */
    attributeField: string;
    /** To symbolize polygon features with graduated symbols, use backgroundFillesri.symbols.Symbol to specify a simple fill symbol to represent polygon features, and use marker symbols of varying sizes in class breaks to indicate the quantity. */
    backgroundFillSymbol: Fillesri.symbols.Symbol;
    /** Deprecated at v2.0, use infos instead. */
    breaks: any[];
    /** The classification method used to generate class breaks. */
    classificationMethod: string;
    /** Default symbol used when a value or break cannot be matched. */
    defaultSymbol: esri.symbols.Symbol;
    /** Each element in the array is an object that provides information about the class breaks associated with the renderer. */
    infos: any[];
    /** Include graphics with attribute values equal to the max value of a class in that class. */
    isMaxInclusive: boolean;
    /** When normalizationType is "field", this property contains the attribute field name used for normalization. */
    normalizationField: string;
    /** When normalizationType is "percent-of-total", this property contains the total of all data values. */
    normalizationTotal: number;
    /** Indicates how the data is normalized. */
    normalizationType: string;
    /**
     * Creates a new ClassBreaksesri.renderers.Renderer object.
     * @param defaultesri.symbols.Symbol Default symbol for the renderer.
     * @param attributeesri.layers.Field Specify either the attribute field the renderer uses to match values or starting at version 3.3, a function that returns a value to be compared against class breaks.
     */
    constructor(defaultSymbol: esri.symbols.Symbol, attributeField: string);
    /**
     * Creates a new ClassBreaksesri.renderers.Renderer object.
     * @param defaultesri.symbols.Symbol Default symbol for the renderer.
     * @param attributeesri.layers.Field Specify either the attribute field the renderer uses to match values or starting at version 3.3, a function that returns a value to be compared against class breaks.
     */
    constructor(defaultSymbol: esri.symbols.Symbol, attributeField: Function);
    /**
     * Creates a new ClassBreaksRenderer.
     * @param json JSON object representing the ClassBreaksRenderer.
     */
    constructor(json: Object);
    /**
     * Adds a class break.
     * @param minValueOrInfo The value can be provided as individual arguments or as an info object.
     * @param maxValue Maximum value in the break.
     * @param symbol esri.symbols.Symbol used for the break.
     */
    addBreak(minValueOrInfo: number, maxValue?: number, symbol?: Symbol): void;
    /**
     * Adds a class break.
     * @param minValueOrInfo The value can be provided as individual arguments or as an info object.
     * @param maxValue Maximum value in the break.
     * @param symbol esri.symbols.Symbol used for the break.
     */
    addBreak(minValueOrInfo: any, maxValue?: number, symbol?: Symbol): void;
    /** Remove all existing class breaks for this renderer. */
    clearBreaks(): void;
    /**
     * Returns the index at which rendering and legend information can be found in the break infos array for the given graphic.
     * @param graphic The graphic whose rendering and legend information index in the break infos array will be returned.
     */
    getBreakIndex(graphic: Graphic): number;
    /**
     * Returns rendering and legend information (as defined by the renderer) associated with the given graphic.
     * @param graphic The graphic whose rendering and legend information will be returned.
     */
    getBreakInfo(graphic: Graphic): any;
    /**
     * Removes a break.
     * @param minValue Minimum value in the break to remove.
     * @param maxValue Maximum value in the break to remove.
     */
    removeBreak(minValue: number, maxValue: number): void;
    /**
     * A graphic or feature is considered a match for a class break for the first break where the graphic's attribute value is greater than or equal to the class's min value and less than or equal to the class's max value.
     * @param enable Set true to enable the max inclusive behavior.
     */
    setMaxInclusive(enable: boolean): void;
  }
  export = ClassBreaksesri.renderers.Renderer;

  /** The DotDensityesri.renderers.Renderer provides the ability to create dot density visualizations on data. */
  class DotDensityesri.renderers.Renderer extends esri.renderers.Renderer {
    /** The color to be used for the background of the symbol. */
    backgroundColor: esri.Color;
    /** The shape to be used for the dot. */
    dotShape: string;
    /** The size of the dot in pixels. */
    dotSize: number;
    /** The value that a dot represents. */
    dotValue: number;
    /** An array of objects, where each object defines a field to be mapped and its color. */
    fields: any[];
    /** The line symbol to use on the outline of the feature. */
    outline: esri.symbols.Lineesri.symbols.Symbol;
    /**
     * Creates a new instance of dot density renderer.
     * @param params An object with various options.
     */
    constructor(params: esri.DotDensityRendererOptions);
    /**
     * Updates the background color of the shape.
     * @param color Background color.
     */
    setBackgroundColor(color: Color): void;
    /**
     * Updates the size of the dot.
     * @param size The size of the dot in pixels.
     */
    setDotSize(size: number): void;
    /**
     * Updates the value that a dot represents.
     * @param value The value that a dot represents.
     */
    setDotValue(value: number): void;
    /**
     * Updates the outline symbol of the shape.
     * @param outline The line symbol to use on the outline of the feature.
     */
    setOutline(outline: LineSymbol): void;
  }
  export = DotDensityesri.renderers.Renderer;

  /** The Heatmapesri.renderers.Renderer renders point data into a raster visualization that emphasizes areas of higher density or weighted values. */
  class Heatmapesri.renderers.Renderer extends esri.renderers.Renderer {
    /** The radius (in pixels) of the circle over which the majority of each points value is spread out over. */
    blurRadius: number;
    /** An array of CSS color strings (#RGB, #RRGGBB, rgb(r,g,b), rgba(r,g,b,a)). */
    colors: string[];
    /** An array of colorStop objects describing the renderer's color ramp with more specificity than just colors. */
    colorStops: any[];
    /** The name of the attribute field used to weight the heatmap points. */
    field: string;
    /** The pixel intensity value which is assigned the final color in the color ramp. */
    maxPixelIntensity: number;
    /** The pixel intensity value which is assigned the initial color in the color ramp. */
    minPixelIntensity: number;
    /**
     * Creates a new Heatmapesri.renderers.Renderer object from json.
     * @param options A parameterized list of options for constructing a HeatmapRenderer.
     */
    constructor(options: esri.HeatmapRendererOptions);
    /**
     * Set the renderer's blur radius.
     * @param blurRadius The radius (in pixels) of the circle over which the majority of each points value is spread out over.
     */
    setBlurRadius(blurRadius: number): void;
    /**
     * Set the colors used to interpolate the color ramp of the renderer.
     * @param colors An array of CSS color strings (#RGB, #RRGGBB, rgb(r,g,b), rgba(r,g,b,a)).
     */
    setColors(colors: string[]): void;
    /**
     * Sets the colorStops property  and returns the Heatmapesri.renderers.Renderer instance to allow method chaining.
     * @param stops An array of colorStop objects describing the renderer's color ramp with more specificity than just colors.
     */
    setColorStops(stops: any[]): Heatmapesri.renderers.Renderer;
    /**
     * Set the attribute field that the renderer uses to determine the weight on the heatmap points.
     * @param field The name of the attribute field used to weight the heatmap points.
     */
    setField(field: string): void;
    /**
     * Set the renderer's maxPixelIntensity.
     * @param maxPixelIntensity The pixel intensity value which is assigned the final color in the color ramp.
     */
    setMaxPixelIntensity(maxPixelIntensity: number): void;
    /**
     * Set the renderer's minPixelIntensity.
     * @param minPixelIntensity The pixel intensity value which is assigned the initial color in the color ramp.
     */
    setMinPixelIntensity(minPixelIntensity: number): void;
    /** Returns the JSON string representation of the renderer's options. */
    toJson(): string;
  }
  export = Heatmapesri.renderers.Renderer;

  /** The base class for the renderers - Simpleesri.renderers.Renderer, ClassBreaksesri.renderers.Renderer, UniqueValueesri.renderers.Renderer, DotDensityesri.renderers.Renderer, ScaleDependentesri.renderers.Renderer, and Temporalesri.renderers.Renderer used with a esri.layers.Graphicsesri.layers.Layer and FeatureLayer. */
  class esri.renderers.Renderer {
    /** An object defining a color ramp used to render the layer. */
    colorInfo: any;
    /** An object that describes how opacity of features is calculated. */
    opacityInfo: any;
    /** Defines how marker symbols are rotated. */
    rotationInfo: any;
    /** Defines the size of the symbol where feature size is proportional to data value. */
    sizeInfo: any;
    /**
     * Gets the color for the Graphic.
     * @param graphic esri.Graphic to get color from.
     */
    getColor(graphic: Graphic): esri.Color;
    /**
     * Returns the opacity value for the specified graphic.
     * @param graphic Returns the opacity value appropriate for the given graphic.
     */
    getOpacity(graphic: Graphic): number;
    /**
     * Returns the angle of rotation (in degrees) for the graphic calculated using rotationInfo.
     * @param graphic An input graphic for which you want to get the angle of rotation.
     */
    getRotationAngle(graphic: Graphic): number;
    /**
     * Return the symbol size (in pixels) for the graphic, calculated using sizeInfo.
     * @param graphic The graphic for which you want to calculate the symbol size.
     */
    getSize(graphic: Graphic): number;
    /**
     * Gets the symbol for the Graphic.
     * @param graphic esri.Graphic to symbolize.
     */
    getSymbol(graphic: Graphic): esri.symbols.Symbol;
    /**
     * Sets the colorInfo property.
     * @param info An info object that defines the color.
     */
    setColorInfo(info: any): esri.renderers.Renderer;
    /**
     * Sets opacity info for the renderer as defined by the info parameter.
     * @param info The info parameter is an object with the same properties as opacityInfo.
     */
    setOpacityInfo(info: any): esri.renderers.Renderer;
    /**
     * Modifies rotation info for the renderer.
     * @param info An object with the same properties as rotationInfo.
     */
    setRotationInfo(info: any): esri.renderers.Renderer;
    /** Set size info of the renderer to modify the symbol size based on data value. */
    setSizeInfo(): esri.renderers.Renderer;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.renderers.Renderer;

  /** ScaleDependentesri.renderers.Renderer provides the capability to apply multiple scale-dependent renderers to a layer. */
  class ScaleDependentesri.renderers.Renderer extends esri.renderers.Renderer {
    /** Indicates whether rendererInfos uses zoom range or scale range. */
    rangeType: string;
    /** An array of objects, where each object defines a renderer and the zoom/scale range to which it applies. */
    rendererInfos: any;
    /**
     * Create a ScaleDependentRenderer.
     * @param options Various options to configure this renderer.
     */
    constructor(options?: esri.ScaleDependentRendererOptions);
    /**
     * Adds the specified renderer info to the array of existing renderers.
     * @param info An object as defined in the rendererInfos property.
     */
    addRendererInfo(info: any): ScaleDependentesri.renderers.Renderer;
    /**
     * Returns the renderer info for the input graphic.
     * @param graphic The graphic for which you want to get renderer info.
     */
    getRendererInfo(graphic: Graphic): any;
    /**
     * Returns the renderer info for the specified scale.
     * @param scale Returns the renderer info for the specified scale.
     */
    getRendererInfoByScale(scale: number): any;
    /**
     * Returns the rendererInfo for the specified zoom level.
     * @param zoom Specify the zoom level for which you want to retrieve the renderer info.
     */
    getRenderInfoByZoom(zoom: number): any;
    /**
     * Replaces existing rendererInfos with new ones.
     * @param infos An array of objects as defined in the rendererInfos property.
     */
    setRendererInfos(infos: any): ScaleDependentesri.renderers.Renderer;
  }
  export = ScaleDependentesri.renderers.Renderer;

  /** A renderer that uses one symbol only. */
  class Simpleesri.renderers.Renderer extends esri.renderers.Renderer {
    /** Description for the renderer. */
    description: string;
    /** Label for the renderer. */
    label: string;
    /** The symbol for the renderer. */
    symbol: esri.symbols.Symbol;
    /**
     * Creates a new Simpleesri.renderers.Renderer object with a esri.symbols.Symbol parameter.
     * @param symbol esri.symbols.Symbol to use for the renderer.
     */
    constructor(symbol: Symbol);
    /**
     * Creates a new Simple Renderer.
     * @param json JSON object representing the SimpleRenderer.
     */
    constructor(json: Object);
  }
  export = Simpleesri.renderers.Renderer;

  /** Base class for agers. */
  class esri.renderers.SymbolAger {
    /**
     * All subclasses override this method to provide their own implementation to calculate aging and return the appropriate symbol.
     * @param symbol The symbol to age.
     * @param graphic Feature being rendered.
     */
    getAgedSymbol(symbol: esri.symbols.Symbol, graphic: Graphic): esri.symbols.Symbol;
  }
  export = esri.renderers.SymbolAger;

  /** Temporal renderers provide time-based rendering of features in a feature layer. */
  class Temporalesri.renderers.Renderer extends esri.renderers.Renderer {
    /**
     * Creates a new Temporalesri.renderers.Renderer object that can be used with a time-aware feature layer.
     * @param observationesri.renderers.Renderer esri.renderers.Renderer for regular/historic observations.
     * @param latestObservationesri.renderers.Renderer esri.renderers.Renderer for the most current observations.In the snippet below RouteID is the field that contains the trackID for the feature layer this is used to display the  latest observation for the specified tracks.
     * @param trackesri.renderers.Renderer esri.renderers.Renderer for the tracks.
     * @param observationAger esri.symbols.Symbol ager for regular observations.
     */
    constructor(observationRenderer: esri.renderers.Renderer, latestObservationRenderer?: esri.renderers.Renderer, trackRenderer?: esri.renderers.Renderer, observationAger?: SymbolAger);
    /**
     * Returns the symbol used to render the graphic.
     * @param graphic The input graphic.
     */
    getSymbol(graphic: Graphic): esri.symbols.Symbol;
  }
  export = Temporalesri.renderers.Renderer;

  /** Time class breaks ager displays aging by classifying features based on an age range. */
  export class TimeClassBreaksAger extends esri.renderers.SymbolAger {
    /** Time breaks are measured in days. */
    static UNIT_DAYS: any;
    /** Time breaks are measured in hours. */
    static UNIT_HOURS: any;
    /** Time breaks are measured in milliseconds. */
    static UNIT_MILLISECONDS: any;
    /** Time breaks are measured in minutes. */
    static UNIT_MINUTES: any;
    /** Time breaks are measured in months. */
    static UNIT_MONTHS: any;
    /** Time breaks are measured in seconds. */
    static UNIT_SECONDS: any;
    /** Time breaks are measured in weeks. */
    static UNIT_WEEKS: any;
    /** Time breaks are measured in years. */
    static UNIT_YEARS: any;
    /**
     * Creates a new TimeClassBreaksAgerObject with the specified time breaks inforamtion.
     * @param infos Each element in the array is an object that describes the class breaks information.
     * @param timeesri.Units The unit in which the minimum and maximum break values are measured.
     */
    constructor(infos: any[], timeUnits?: string);
    /**
     * Calculates aging and returns the appropriate symbol.
     * @param symbol The symbol to age.
     * @param graphic Feature being rendered.
     */
    getAgedSymbol(symbol: esri.symbols.Symbol, graphic: Graphic): esri.symbols.Symbol;
  }

  /** Time ramp agers display aging using a gradual change in symbology. */
  export class TimeRampAger extends esri.renderers.SymbolAger {
    /**
     * Creates a new TimeRampAger object with the specified color and size ranges.
     * @param colorRange An array containing the minimum and maximum color values.
     * @param sizeRange An array containing the minimum and maximum size in  pixels.
     * @param alphaRange An array containing the minimum and maximum alpha opacity values.
     */
    constructor(colorRange?: esri.Color[], sizeRange?: number[], alphaRange?: number[]);
    /**
     * Calculates aging and returns the appropriate symbol.
     * @param symbol The symbol to age.
     * @param graphic Feature being rendered.
     */
    getAgedSymbol(symbol: esri.symbols.Symbol, graphic: Graphic): esri.symbols.Symbol;
  }

  /** A unique value renderer symbolizes groups of graphics that have matching attributes. */
  class UniqueValueesri.renderers.Renderer extends esri.renderers.Renderer {
    /** Attribute field renderer uses to match values. */
    attributeField: string;
    /** If needed, specify an additional attribute field the renderer uses to match values. */
    attributeField2: string;
    /** If needed, specify an additional attribute field the renderer uses to match values. */
    attributeField3: string;
    /** Label for the default symbol used to draw unspecified values. */
    defaultLabel: string;
    /** Default symbol used when a value or break cannot be matched. */
    defaultSymbol: esri.symbols.Symbol;
    /** String inserted between the values if multiple attribute fields are specified. */
    fieldDelimiter: string;
    /** Each element in the array is an object that provides information about the unique values associated with the renderer. */
    infos: any[];
    /** Deprecated at v2.0, use infos instead. */
    values: string[];
    /**
     * Creates a new UniqueValueesri.renderers.Renderer object.
     * @param defaultesri.symbols.Symbol Default symbol for the renderer.
     * @param attributeesri.layers.Field Specify either the attribute field the renderer uses to match values or starting at version 3.3, a function that returns a value to be compared against unique values.
     * @param attributeField2 If needed, specify an additional attribute field the renderer uses to match values.
     * @param attributeField3 If needed, specify an additional attribute field the renderer uses to match values.
     * @param fieldDelimeter String inserted between the values of different fields.
     */
    constructor(defaultSymbol: esri.symbols.Symbol, attributeField: string, attributeField2?: string, attributeField3?: string, fieldDelimeter?: string);
    /**
     * Creates a new UniqueValueesri.renderers.Renderer object.
     * @param defaultesri.symbols.Symbol Default symbol for the renderer.
     * @param attributeesri.layers.Field Specify either the attribute field the renderer uses to match values or starting at version 3.3, a function that returns a value to be compared against unique values.
     * @param attributeField2 If needed, specify an additional attribute field the renderer uses to match values.
     * @param attributeField3 If needed, specify an additional attribute field the renderer uses to match values.
     * @param fieldDelimeter String inserted between the values of different fields.
     */
    constructor(defaultSymbol: esri.symbols.Symbol, attributeField: Function, attributeField2?: string, attributeField3?: string, fieldDelimeter?: string);
    /**
     * Creates a new Unique Value Renderer.
     * @param json JSON object representing the UniqueValueRenderer.
     */
    constructor(json: Object);
    /**
     * Adds a unique value and symbol.
     * @param valueOrInfo Value to match with.
     * @param symbol esri.symbols.Symbol used for the value.
     */
    addValue(valueOrInfo: string, symbol?: Symbol): void;
    /**
     * Adds a unique value and symbol.
     * @param valueOrInfo Value to match with.
     * @param symbol esri.symbols.Symbol used for the value.
     */
    addValue(valueOrInfo: any, symbol?: Symbol): void;
    /**
     * Returns rendering and legend information (as defined by the renderer) associated with the given graphic.
     * @param graphic The graphic whose rendering and legend information will be returned.
     */
    getUniqueValueInfo(graphic: Graphic): any;
    /**
     * Removes a unique value.
     * @param value Value to remove.
     */
    removeValue(value: string): void;
  }
  export = UniqueValueesri.renderers.Renderer;

  /** Utility method to create a renderer from JSON. */
  export var jsonUtils: {
    /**
     * Converts the input JSON object to the appropriate esri.renderer.* object.
     * @param json The JSON object.
     */
    fromJson(json: Object): esri.renderers.Renderer;
  };
}
declare namespace esri.symbols {

  /** Line symbols are used to draw linear features on the graphics layer. */
  class Cartographicesri.symbols.Lineesri.symbols.Symbol extends esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol {
    /** Line ends square at the end point. */
    static CAP_BUTT: any;
    /** Line is rounded just beyond the end point. */
    static CAP_ROUND: any;
    /** Line is squared just beyond the end point. */
    static CAP_SQUARE: any;
    /** The joined lines are beveled. */
    static JOIN_BEVEL: any;
    /** The joined lines are not rounded or beveled. */
    static JOIN_MITER: any;
    /** The joined lines are rounded. */
    static JOIN_ROUND: any;
    /** The line is made of dashes. */
    static STYLE_DASH: any;
    /** The line is made of a dash-dot pattern. */
    static STYLE_DASHDOT: any;
    /** The line is made of a dash-dot-dot pattern. */
    static STYLE_DASHDOTDOT: any;
    /** The line is made of dots. */
    static STYLE_DOT: any;
    /** The line is made of a long dash pattern. */
    static STYLE_LONGDASH: any;
    /** The line is made of a long dash-dot pattern. */
    static STYLE_LONGDASHDOT: any;
    /** The line has no symbol. */
    static STYLE_NULL: any;
    /** The line is made of a short dash pattern. */
    static STYLE_SHORTDASH: any;
    /** The line is made of a short dash-dot pattern. */
    static STYLE_SHORTDASHDOT: any;
    /** The line is made of a short dash-dot-dot pattern. */
    static STYLE_SHORTDASHDOTDOT: any;
    /** The line is made of a short dot pattern. */
    static STYLE_SHORTDOT: any;
    /** The line is solid. */
    static STYLE_SOLID: any;
    /** The cap style. */
    cap: string;
    /** The join style. */
    join: string;
    /** Size threshold for showing mitered line joins. */
    miterLimit: string;
    /** Creates a new empty Cartographicesri.symbols.Lineesri.symbols.Symbol object. */
    constructor();
    /**
     * Creates a new Cartographicesri.symbols.Lineesri.symbols.Symbol object with parameters.
     * @param style See Constants table for values.
     * @param color esri.symbols.Symbol color.
     * @param width Width of the line in pixels.
     * @param cap See Constants table for values.
     * @param join See Constants table for values.
     * @param miterLimit Size threshold for showing mitered line joins.
     */
    constructor(style?: string, color?: esri.Color, width?: number, cap?: string, join?: string, miterLimit?: string);
    /**
     * Creates a new Cartographicesri.symbols.Lineesri.symbols.Symbol object using a JSON object.
     * @param json JSON object representing the CartographicLineSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the cap style.
     * @param cap Cap style.
     */
    setCap(cap: string): Cartographicesri.symbols.Lineesri.symbols.Symbol;
    /**
     * Sets the join style.
     * @param join Join style.
     */
    setJoin(join: string): Cartographicesri.symbols.Lineesri.symbols.Symbol;
    /**
     * Sets the size threshold for showing mitered line joins.
     * @param miterLimit Miter limit.
     */
    setMiterLimit(miterLimit: string): Cartographicesri.symbols.Lineesri.symbols.Symbol;
  }
  export = Cartographicesri.symbols.Lineesri.symbols.Symbol;

  /** Fill symbols are used to draw polygon features on the graphics layer. */
  class Fillesri.symbols.Symbol extends esri.symbols.Symbol {
    /** Outline of the polygon. */
    outline: esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol;
    /**
     * Sets the outline of the fill symbol.
     * @param outline esri.symbols.Symbol used for outline.
     */
    setOutline(outline: SimpleLineSymbol): Fillesri.symbols.Symbol;
  }
  export = Fillesri.symbols.Symbol;
  /** esri.symbols.Font used for text symbols added to the graphics layer. */
  class esri.symbols.Font {
    /** Text is in italics. */
    static STYLE_ITALIC: any;
    /** Text style is normal. */
    static STYLE_NORMAL: any;
    /** Text is slanted. */
    static STYLE_OBLIQUE: any;
    /** Text variant is normal. */
    static VARIANT_NORMAL: any;
    /** Text is in all small caps. */
    static VARIANT_SMALLCAPS: any;
    /** Text weight is bold. */
    static WEIGHT_BOLD: any;
    /** Text weight is extra bold. */
    static WEIGHT_BOLDER: any;
    /** Text weight is lighter than normal. */
    static WEIGHT_LIGHTER: any;
    /** Text weight is normal. */
    static WEIGHT_NORMAL: any;
    /** Text decoration. */
    decoration: string;
    /** esri.symbols.Font family. */
    family: string;
    /** esri.symbols.Font size. */
    size: number;
    /** Text style. */
    style: string;
    /** Text variant. */
    variant: string;
    /** Text weight. */
    weight: string;
    /** Creates a new esri.symbols.Font object. */
    constructor();
    /**
     * Creates a new esri.symbols.Font object.
     * @param size esri.symbols.Font size.
     * @param style esri.symbols.Font style.
     * @param variant esri.symbols.Font variant.
     * @param weight esri.symbols.Font weight.
     * @param family esri.symbols.Font family.
     */
    constructor(size?: number, style?: string, variant?: string, weight?: string, family?: string);
    /**
     * Creates a new esri.symbols.Font object.
     * @param size esri.symbols.Font size.
     * @param style esri.symbols.Font style.
     * @param variant esri.symbols.Font variant.
     * @param weight esri.symbols.Font weight.
     * @param family esri.symbols.Font family.
     */
    constructor(size?: string, style?: string, variant?: string, weight?: string, family?: string);
    /**
     * Creates a new esri.symbols.Font object using a JSON object.
     * @param json JSON object representing the font.
     */
    constructor(json: Object);
    /**
     * Updates the font with the given decoration.
     * @param decoration Text decoration.
     */
    setDecoration(decoration: string): esri.symbols.Font;
    /**
     * Sets the font family.
     * @param family esri.symbols.Font family.
     */
    setFamily(family: string): esri.symbols.Font;
    /**
     * Sets the font size.
     * @param size esri.symbols.Font size.
     */
    setSize(size: number): esri.symbols.Font;
    /**
     * Sets the font size.
     * @param size esri.symbols.Font size.
     */
    setSize(size: string): esri.symbols.Font;
    /**
     * Sets the font style.
     * @param style esri.symbols.Font style.
     */
    setStyle(style: string): esri.symbols.Font;
    /**
     * Sets the font variant.
     * @param variant esri.symbols.Font variant.
     */
    setVariant(variant: string): esri.symbols.Font;
    /**
     * Sets the font weight.
     * @param weight esri.symbols.Font weight.
     */
    setWeight(weight: string): esri.symbols.Font;
  }
  export = esri.symbols.Font;

  /** Line symbols are used to draw linear features on the graphics layer. */
  class esri.symbols.Lineesri.symbols.Symbol extends esri.symbols.Symbol {
    /** Width of line symbol in pixels. */
    width: number;
    /**
     * Sets the esri.symbols.Lineesri.symbols.Symbol width.
     * @param width Width of line symbol in pixels.
     */
    setWidth(width: number): esri.symbols.Lineesri.symbols.Symbol;
  }
  export = esri.symbols.Lineesri.symbols.Symbol;

  /** Marker symbols are used to draw points and multipoints on the graphics layer. */
  class esri.symbols.Markeresri.symbols.Symbol extends esri.symbols.Symbol {
    /** The angle of the marker. */
    angle: number;
    /** Size of the marker in pixels. */
    size: number;
    /** The offset on the x-axis in pixels. */
    xoffset: number;
    /** The offset on the y-axis in pixels. */
    yoffset: number;
    /**
     * Rotates the symbol clockwise around its center by the specified angle.
     * @param angle The angle value.
     */
    setAngle(angle: number): esri.symbols.Markeresri.symbols.Symbol;
    /**
     * Sets the x and y offset of a marker in screen units.
     * @param x The X offset value in pixels.
     * @param y The Y offset value in pixels.
     */
    setOffset(x: number, y: number): esri.symbols.Markeresri.symbols.Symbol;
    /**
     * Sets the size of a marker in pixels.
     * @param size The width of the symbol in pixels.
     */
    setSize(size: number): esri.symbols.Markeresri.symbols.Symbol;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.symbols.Markeresri.symbols.Symbol;

  /** Fill symbols are used to draw polygon features on the graphics layer. */
  class PictureFillesri.symbols.Symbol extends Fillesri.symbols.Symbol {
    /** Height of the image in pixels. */
    height: number;
    /** URL of the image. */
    url: string;
    /** Width of the image in pixels. */
    width: number;
    /** The offset on the x-axis in pixels. */
    xoffset: number;
    /** Scale factor in x direction. */
    xscale: number;
    /** The offset on the y-axis in pixels. */
    yoffset: number;
    /** Scale factor in y direction. */
    yscale: number;
    /**
     * Creates a new PictureFillesri.symbols.Symbol object.
     * @param url URL of the image.
     * @param outline Outline of the symbol.
     * @param width Width of the image in pixels.
     * @param height Height of the image in pixels.
     */
    constructor(url: string, outline: esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol, width: number, height: number);
    /**
     * Creates a new PictureFillesri.symbols.Symbol object using a JSON object.
     * @param json JSON object representing the PictureFillSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the height of the symbol.
     * @param height Height in pixels.
     */
    setHeight(height: number): PictureFillesri.symbols.Symbol;
    /**
     * Sets the symbol offset.
     * @param x Offset in x direction in pixels.
     * @param y Offset in y direction in pixels.
     */
    setOffset(x: number, y: number): PictureFillesri.symbols.Symbol;
    /**
     * Sets the URL to the location of the symbol.
     * @param url URL string.
     */
    setUrl(url: string): PictureFillesri.symbols.Symbol;
    /**
     * Sets the width of the symbol.
     * @param width Width in pixels.
     */
    setWidth(width: number): PictureFillesri.symbols.Symbol;
    /**
     * Sets the scale factor in x direction.
     * @param scale Scale factor in x direction.
     */
    setXScale(scale: number): PictureFillesri.symbols.Symbol;
    /**
     * Sets the scale factor in y direction.
     * @param scale Scale factor in y direction.
     */
    setYScale(scale: number): PictureFillesri.symbols.Symbol;
  }
  export = PictureFillesri.symbols.Symbol;

  /** Marker symbols are used to draw points and multipoints on the graphics layer. */
  class esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol extends esri.symbols.Markeresri.symbols.Symbol {
    /** Height of the image in pixels. */
    height: number;
    /** URL of the image. */
    url: string;
    /** Width of the image in pixels. */
    width: number;
    /**
     * Creates a new esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol object.
     * @param url URL of the image.
     * @param width Width of the image in pixels.
     * @param height Height of the image in pixels.
     */
    constructor(url: string, width: number, height: number);
    /**
     * Creates a new esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol object using a JSON object.
     * @param json JSON object representing the PictureMarkerSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the height of the image for display.
     * @param height Height of marker in pixels.
     */
    setHeight(height: number): esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol;
    /**
     * Sets the URL where the image is located.
     * @param url URL location of marker image.
     */
    setUrl(url: string): esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol;
    /**
     * Sets the width of the image for display.
     * @param width Width of marker in pixels.
     */
    setWidth(width: number): esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol;
  }
  export = esri.symbols.Pictureesri.symbols.Markeresri.symbols.Symbol;

  /** Fill symbols are used to draw polygon features on the graphics layer. */
  class SimpleFillesri.symbols.Symbol extends Fillesri.symbols.Symbol {
    /** The fill is backward diagonal lines. */
    static STYLE_BACKWARD_DIAGONAL: any;
    /** The fill is a cross. */
    static STYLE_CROSS: any;
    /** The fill is a diagonal cross. */
    static STYLE_DIAGONAL_CROSS: any;
    /** The fill is forward diagonal lines. */
    static STYLE_FORWARD_DIAGONAL: any;
    /** The fill is horizontal lines. */
    static STYLE_HORIZONTAL: any;
    /** The polygon has no fill. */
    static STYLE_NULL: any;
    /** The fill is solid. */
    static STYLE_SOLID: any;
    /** The fill is vertical lines. */
    static STYLE_VERTICAL: any;
    /** The fill style. */
    style: string;
    /** Creates a new empty SimpleFillesri.symbols.Symbol object. */
    constructor();
    /**
     * Creates a new SimpleFillesri.symbols.Symbol object with parameters.
     * @param style See Constants table for values.
     * @param outline See SimpleLineSymbol.
     * @param color esri.symbols.Symbol color.
     */
    constructor(style: string, outline: esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol, color: Color);
    /**
     * Creates a new SimpleFillesri.symbols.Symbol object using a JSON object.
     * @param json JSON object representing the SimpleFillSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the fill symbol style.
     * @param style Fill style.
     */
    setStyle(style: string): SimpleFillesri.symbols.Symbol;
  }
  export = SimpleFillesri.symbols.Symbol;

  /** Line symbols are used to draw linear features on the graphics layer. */
  class esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol extends esri.symbols.Lineesri.symbols.Symbol {
    /** The line is made of dashes. */
    static STYLE_DASH: any;
    /** The line is made of a dash-dot pattern. */
    static STYLE_DASHDOT: any;
    /** The line is made of a dash-dot-dot pattern. */
    static STYLE_DASHDOTDOT: any;
    /** The line is made of dots. */
    static STYLE_DOT: any;
    /** Line is constructed of a series of dashes. */
    static STYLE_LONGDASH: any;
    /** Line is constructed of a series of short dashes. */
    static STYLE_LONGDASHDOT: any;
    /** The line has no symbol. */
    static STYLE_NULL: any;
    /** Line is constructed of a series of short dashes. */
    static STYLE_SHORTDASH: any;
    /** Line is constructed of a dash followed by a dot. */
    static STYLE_SHORTDASHDOT: any;
    /** Line is constructed of a series of a dash and two dots. */
    static STYLE_SHORTDASHDOTDOT: any;
    /** Line is constructed of a series of short dots. */
    static STYLE_SHORTDOT: any;
    /** The line is solid. */
    static STYLE_SOLID: any;
    /** The line style. */
    style: string;
    /** Creates a new empty esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol object. */
    constructor();
    /**
     * Creates a new esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol object with parameters.
     * @param style See Constants table for values.
     * @param color esri.symbols.Symbol color.
     * @param width Width of the line in pixels.
     */
    constructor(style: string, color: esri.Color, width: number);
    /**
     * Creates a new esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol object using a JSON object.
     * @param json JSON object representing the SimpleLineSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the line symbol style.
     * @param style Line style.
     */
    setStyle(style: string): esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol;
  }
  export = esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol;

  /** Marker symbols are used to draw points and multipoints on the graphics layer. */
  class Simpleesri.symbols.Markeresri.symbols.Symbol extends esri.symbols.Markeresri.symbols.Symbol {
    /** The marker is a circle. */
    static STYLE_CIRCLE: any;
    /** The marker is a cross. */
    static STYLE_CROSS: any;
    /** The marker is a diamond. */
    static STYLE_DIAMOND: any;
    /** The marker is a shape defined using an SVG Path string. */
    static STYLE_PATH: any;
    /** The marker is a square. */
    static STYLE_SQUARE: any;
    /** The marker is a diagonal cross. */
    static STYLE_X: any;
    /** Outline of the marker. */
    outline: esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol;
    /** Size of the marker in pixels. */
    size: number;
    /** The marker style. */
    style: string;
    /** Creates a new empty Simpleesri.symbols.Markeresri.symbols.Symbol object. */
    constructor();
    /**
     * Creates a new Simpleesri.symbols.Markeresri.symbols.Symbol object with parameters.
     * @param style See Constants table for values.
     * @param size Size of the marker in pixels.
     * @param outline See SimpleLineSymbol.
     * @param color esri.symbols.Symbol color.
     */
    constructor(style: string, size: number, outline: esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol, color: Color);
    /**
     * Creates a new Simpleesri.symbols.Markeresri.symbols.Symbol object using a JSON object.
     * @param json JSON object representing the SimpleMarkerSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the outline of the marker symbol.
     * @param outline esri.symbols.Symbol used for outline.
     */
    setOutline(outline: SimpleLineSymbol): Simpleesri.symbols.Markeresri.symbols.Symbol;
    /**
     * Sets the marker shape to the given path string and switches the marker style to STYLE_PATH.
     * @param path SVG path of the icon.
     */
    setPath(path: string): Simpleesri.symbols.Markeresri.symbols.Symbol;
    /**
     * Sets the marker symbol style.
     * @param style Marker style.
     */
    setStyle(style: string): Simpleesri.symbols.Markeresri.symbols.Symbol;
  }
  export = Simpleesri.symbols.Markeresri.symbols.Symbol;

  /** Symbols are used to display points, lines, and polygons on the graphics layer. */
  class esri.symbols.Symbol {
    /** esri.symbols.Symbol color. */
    color: esri.Color;
    /** The type of symbol. */
    type: string;
    /**
     * Sets the symbol color.
     * @param color esri.symbols.Symbol color.
     */
    setColor(color: Color): esri.symbols.Symbol;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = esri.symbols.Symbol;

  /** Text symbols are used to add text on the graphics layer. */
  class Textesri.symbols.Symbol extends esri.symbols.Symbol {
    /** The end of the text string is aligned with the point. */
    static ALIGN_END: any;
    /** The center of the text string is aligned with the point. */
    static ALIGN_MIDDLE: any;
    /** The beginning of the text string is aligned with the point. */
    static ALIGN_START: any;
    /** Text has a lined striked through it. */
    static DECORATION_LINETHROUGH: any;
    /** Text has no decoration. */
    static DECORATION_NONE: any;
    /** Text has a line along the top. */
    static DECORATION_OVERLINE: any;
    /** Text is underlined. */
    static DECORATION_UNDERLINE: any;
    /** The text alignment in relation to the point. */
    align: string;
    /** Text angle. */
    angle: number;
    /** The decoration on the text. */
    decoration: string;
    /** esri.symbols.Font for displaying text. */
    font: esri.symbols.Font;
    /** Horizontal alignment of the text with respect to the graphic. */
    horizontalAlignment: string;
    /** Determines whether to adjust the spacing between characters in the text string. */
    kerning: boolean;
    /** Determines whether every character in the text string is rotated. */
    rotated: boolean;
    /** Text string for display in the graphics layer. */
    text: string;
    /** Vertical alignment of the text with respect to the graphic. */
    verticalAlignment: string;
    /** The offset on the x-axis in pixels from the point. */
    xoffset: number;
    /** The offset on the y-axis in pixels from the point. */
    yoffset: number;
    /**
     * Creates a new Textesri.symbols.Symbol object that includes only the text.
     * @param text Text string for display in the graphics layer.
     */
    constructor(text: string);
    /**
     * Creates a new Textesri.symbols.Symbol object.
     * @param text Text string for display in the graphics layer.
     * @param font esri.symbols.Font for displaying text.
     * @param color esri.symbols.Symbol color.
     */
    constructor(text: string, font: esri.symbols.Font, color: Color);
    /**
     * Creates a new Textesri.symbols.Symbol object using a JSON object.
     * @param json JSON object representing the TextSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the alignment of the text.
     * @param align The text alignment.
     */
    setAlign(align: string): Textesri.symbols.Symbol;
    /**
     * Sets the angle of the text.
     * @param angle Angle value between 0 and 359.
     */
    setAngle(angle: number): Textesri.symbols.Symbol;
    /**
     * Sets the decoration for the text.
     * @param decoration The decoration on the text.
     */
    setDecoration(decoration: string): Textesri.symbols.Symbol;
    /**
     * Sets the text font.
     * @param font Text font.
     */
    setFont(font: Font): Textesri.symbols.Symbol;
    /**
     * Updates the horizontal alignment of the text symbol.
     * @param alignment Horizontal alignment of the text with respect to the graphic.
     */
    setHorizontalAlignment(alignment: string): Textesri.symbols.Symbol;
    /**
     * Sets whether to adjust the spacing between characters in the text string.
     * @param kerning Set to true for kerning.
     */
    setKerning(kerning: boolean): Textesri.symbols.Symbol;
    /**
     * Sets the x and y offset of the text.
     * @param x X offset value in pixels.
     * @param y Y offset value in pixels.
     */
    setOffset(x: number, y: number): Textesri.symbols.Symbol;
    /**
     * Sets whether every character in the text string is rotated.
     * @param rotated Set to true to rotate all characters in the string.
     */
    setRotated(rotated: boolean): Textesri.symbols.Symbol;
    /**
     * Sets the text string.
     * @param text The text string.
     */
    setText(text: string): Textesri.symbols.Symbol;
    /**
     * Updates the vertical alignment of the text symbol.
     * @param alignment Vertical alignment of the text with respect to the graphic.
     */
    setVerticalAlignment(alignment: string): Textesri.symbols.Symbol;
  }
  export = Textesri.symbols.Symbol;

  /** Utility methods for working with symbols. */
  export var jsonUtils: {
    /**
     * Converts input json into a symbol, returns null if the input json represents an unknown or unsupported symbol type.
     * @param json The input JSON.
     */
    fromJson(json: Object): esri.symbols.Symbol;
    /**
     * Returns the shape description properties for the given symbol as defined by the Dojo GFX API.
     * @param symbol The input symbol.
     */
    getShapeDescriptors(symbol: Symbol): any;
  };
}
declare namespace esri.tasks {

  /** Represents an address and its location. */
  class esri.tasks.AddressCandidate {
    /** Address of the candidate. */
    address: any;
    /** Name value pairs of field name and field value as defined in outFields in Locator.addressToLocations. */
    attributes: any;
    /** X- and y-coordinate of the candidate. */
    location: esri.geometry.Point;
    /** Numeric score between 0 and 100 for geocode candidates. */
    score: number;
  }
  export = esri.tasks.AddressCandidate;

  /** Create an algorithmic color ramp to define the range of colors used in the renderer generated by the GenerateRendererTask. */
  class Algorithmicesri.tasks.ColorRamp extends esri.tasks.ColorRamp {
    /** The algorithm used to generate the colors between the fromesri.Color and toColor. */
    algorithm: string;
    /** The first color in the color ramp. */
    fromColor: esri.Color;
    /** The last color in the color ramp. */
    toColor: esri.Color;
    /** Creates a new Algorithmicesri.tasks.ColorRamp object. */
    constructor();
    /** Returns an easily serializable object representation of an algorithmic color ramp. */
    toJson(): any;
  }
  export = Algorithmicesri.tasks.ColorRamp;

  /** Input parameters for the areasAndLengths() method on the esri.geometry.Geometry Service. */
  class esri.tasks.AreasAndesri.tasks.LengthsParameters {
    /** The area unit in which areas of polygons will be calculated. */
    areaUnit: any;
    /** Defines the type of calculation for the geometry. */
    calculationType: string;
    /** The length unit in which perimeters of polygons will be calculated. */
    lengthUnit: any;
    /** esri.geometry.Polygon geometries for which to compute areas and lengths */
    polygons: esri.geometry.Geometry[];
    /** Creates a new esri.tasks.AreasAndesri.tasks.LengthsParameters object. */
    constructor();
  }
  export = esri.tasks.AreasAndesri.tasks.LengthsParameters;

  /** Sets the distances, units, and other parameters for a buffer operation. */
  class esri.tasks.BufferParameters {
    /** The spatial reference in which the geometries are buffered. */
    bufferSpatialReference: esri.SpatialReference;
    /** The distances the input features are buffered. */
    distances: number[];
    /** If the input geometries are in geographic coordinate system set geodesic to true in order to generate a buffer polygon using a geodesic distance. */
    geodesic: boolean;
    /** The input geometries to buffer. */
    geometries: esri.geometry.Geometry[];
    /** The spatial reference for the returned geometries. */
    outSpatialReference: esri.SpatialReference;
    /** If true, all geometries buffered at a given distance are unioned into a single (possibly multipart) polygon, and the unioned geometry is placed in the output array. */
    unionResults: boolean;
    /** The units for calculating each buffer distance. */
    unit: string;
    /** Creates a new esri.tasks.BufferParameters object. */
    constructor();
  }
  export = esri.tasks.BufferParameters;

  /** Define a class breaks classification scheme used by the GenerateRendererTask to generate classes. */
  export class ClassBreaksDefinition extends esri.tasks.ClassificationDefinition {
    /** Define a default symbol for the classification. */
    baseSymbol: esri.symbols.Symbol;
    /** The number of class breaks. */
    breakCount: number;
    /** The name of the field used to match values. */
    classificationField: string;
    /** The name of the classification method. */
    classificationMethod: string;
    /** Define a color ramp for the classification. */
    colorRamp: esri.tasks.ColorRamp;
    /** The name of the field that contains the values used to normalize class breaks when normalizationType is set to 'field'. */
    normalizationField: string;
    /** The type of normalization used to normalize class breaks. */
    normalizationType: string;
    /** The standard deviation interval. */
    standardDeviationInterval: number;
    /** Creates a new ClassBreaksDefinition object */
    constructor();
    /** Returns an easily serializable object representation of the class breaks definition. */
    toJson(): any;
  }

  /** The super class for the classification definition objects used by the GenerateRendererTask class to generate data classes. */
  class esri.tasks.ClassificationDefinition {
    /** Define a default symbol for the classification. */
    baseSymbol: esri.symbols.Symbol;
    /** Define a color ramp for the classification. */
    colorRamp: esri.tasks.ColorRamp;
    /** The type of classification definition. */
    type: string;
  }
  export = esri.tasks.ClassificationDefinition;

  /** Input parameters for the ClosestFacilityTask. */
  class esri.tasks.ClosestFacilityParameters {
    /** The list of network attribute names to be accumulated with the analysis, i.e., which attributes should be returned as part of the response. */
    accumulateAttributes: string[];
    /** An array of attribute parameter values that determine which network elements can be used by a vehicle. */
    attributeParameterValues: any[];
    /** The cutoff value used to determine when to stop traversing. */
    defaultCutoff: number;
    /** The  number of facilities to find. */
    defaultTargetFacilityCount: number;
    /** The language used when computing directions. */
    directionsLanguage: string;
    /** The length units used when computing directions. */
    directionsLengthUnits: string;
    /** Defines the amount of direction information returned. */
    directionsOutputType: string;
    /** The style to be used when returning directions. */
    directionsStyleName: string;
    /** The name of the attribute field that contains the drive time values. */
    directionsTimeAttribute: string;
    /** When true, restricted network elements should be considered when finding network locations. */
    doNotLocateOnRestrictedElements: boolean;
    /** The set of facilities loaded as network locations during analysis. */
    facilities: any;
    /** The network attribute field name used as the impedance attribute during analysis. */
    impedenceAttribute: string;
    /** The set of incidents loaded as network locations during analysis. */
    incidents: any;
    /** The output geometry precision. */
    outputGeometryPrecision: number;
    /** The units of the output geometry precision. */
    outputGeometryPrecisionUnits: string;
    /** The type of output lines to be generated in the result. */
    outputLines: string;
    /** The well-known id  of the spatial reference for the geometries returned with the analysis results. */
    outSpatialReference: esri.SpatialReference;
    /** The set of point barriers loaded as network locations during analysis. */
    pointBarriers: any;
    /** The set of polygon barriers loaded as network locations during analysis. */
    polygonBarriers: any;
    /** The set of polyline barriers loaded as network locations during analysis. */
    polylineBarriers: any;
    /** The list of network attribute names to be used as restrictions with the analysis. */
    restrictionAttributes: string[];
    /** Specifies how U-Turns should be handled. */
    restrictUTurns: string;
    /** If true, directions will be generated and returned in the directions property of each esri.tasks.RouteResult and RouteSolveResult. */
    returnDirections: boolean;
    /** If true, facilities will be returned with the analysis results. */
    returnFacilities: boolean;
    /** If true, incidents will be returned with the analysis results. */
    returnIncidents: boolean;
    /** If true, barriers will be returned in the barriers property of the ClosestFacilitySolveResult. */
    returnPointBarriers: boolean;
    /** If true, polygon barriers will be returned in the barriers property of the ClosestFacilitySolveResult. */
    returnPolygonBarriers: boolean;
    /** If true, polyline barriers will be returned in the barriers property of the ClosestFacilitySolveResult. */
    returnPolylineBarriers: boolean;
    /** When true, closest facility routes will be generated and returned in the route property of each ClosestFacilityResult and ClosestFacilitySolveResult. */
    returnRoutes: boolean;
    /** The arrival or departure date and time. */
    timeOfDay: Date;
    /** Defines the way the timeOfDay value is used. */
    timeOfDayUsage: string;
    /** Options for traveling to or from the facility. */
    travelDirection: string;
    /** If true, the hierarchy attribute for the network will be used in analysis. */
    useHierarchy: boolean;
    /** Creates a new esri.tasks.ClosestFacilityParameters object */
    constructor();
  }
  export = esri.tasks.ClosestFacilityParameters;

  /** The result from a ClosestFacilityTask operation. */
  class esri.tasks.ClosestFacilitySolveResult {
    /** An array of directions. */
    directions: esri.tasks.Directionsesri.tasks.FeatureSet;
    /** An array of points, only returned when ClosestFacilityParameters.returnFacilities is true. */
    facilities: esri.geometry.Point[];
    /** An array of points, only returned when ClosestFacilityParameters.returnIncidents is true. */
    incidents: esri.geometry.Point[];
    /** Message received when the solve is complete. */
    messages: esri.tasks.NAMessage[];
    /** The point barriers are an array of points. */
    pointBarriers: esri.geometry.Point[];
    /** The polygon barriers are an array of polygons. */
    polygonBarriers: esri.geometry.Polygon[];
    /** The polyline barriers are an array of polylines. */
    polylineBarriers: esri.geometry.Polyline[];
    /** The array of routes. */
    routes: esri.Graphic[];
  }
  export = esri.tasks.ClosestFacilitySolveResult;

  /** Helps you find closest facilities around any location (incident) on a network. */
  export class ClosestFacilityTask {
    /**
     * Creates a new ClosestFacilityTask object.
     * @param url URL to the ArcGIS Server REST resource that represents a network analysis service.
     */
    constructor(url: string);
    /**
     * Solve the closest facility.
     * @param params The esri.tasks.ClosestFacilityParameters object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    solve(params: esri.tasks.ClosestFacilityParameters, callback?: Function, errback?: Function): any;
    /** Fires when ClosestFacilityTask has completed. */
    on(type: "solve-complete", listener: (event: { result: esri.tasks.ClosestFacilitySolveResult; target: ClosestFacilityTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  /** Used to denote classes that may be used as a color ramp. */
  class esri.tasks.ColorRamp {
    /** A string value representing the color ramp type. */
    type: string;
  }
  export = esri.tasks.ColorRamp;
  /** A geoprocessing data object containing a data source. */
  export class DataFile {
    /** The ID of the uploaded file returned as a result of the upload operation. */
    itemID: string;
    /** URL to the location of the data file. */
    url: string;
    /** Creates a new DataFile object. */
    constructor();
  }

  /** Input for properties of esri.tasks.ClosestFacilityParameters,esri.tasks.RouteParameters or ServiceAreaParameters. */
  class Dataesri.layers.Layer {
    /** Part or all of a feature from feature class 1 is contained within a feature from feature class 2. */
    static SPATIAL_REL_CONTAINS: any;
    /** The feature from feature class 1 crosses a feature from feature class 2. */
    static SPATIAL_REL_CROSSES: any;
    /** The envelope of feature class 1 intersects with the envelope of feature class 2. */
    static SPATIAL_REL_ENVELOPEINTERSECTS: any;
    /** The envelope of the query feature class intersects the index entry for the target feature class. */
    static SPATIAL_REL_INDEXINTERSECTS: any;
    /** Part of a feature from feature class 1 is contained in a feature from feature class 2. */
    static SPATIAL_REL_INTERSECTS: any;
    /** Features from feature class 1 overlap features in feature class 2. */
    static SPATIAL_REL_OVERLAPS: any;
    /** The feature from feature class 1 touches the border of a feature from feature class 2. */
    static SPATIAL_REL_TOUCHES: any;
    /** The feature from feature class 1 is completely enclosed by the feature from feature class 2. */
    static SPATIAL_REL_WITHIN: any;
    /** The geometry to apply to the spatial filter. */
    geometry: esri.geometry.Geometry;
    /** The name of the data layer in the map service that is being referenced. */
    name: string;
    /** The spatial relationship to be applied on the input geometry while performing the query. */
    spatialRelationship: string;
    /** A where clause for the query. */
    where: string;
    /** Creates a new Dataesri.layers.Layer object. */
    constructor();
  }
  export = Dataesri.layers.Layer;
  /** Date used in geoprocessing. */
  export class AGSDate {
    /** Date value returned from server. */
    date: Date;
    /** The format of the date used in the date property. */
    format: string;
    /** Creates a new Date object. */
    constructor();
  }

  /** Input parameters for the densify() method on the esri.tasks.GeometryService - contains geometries, maxSegmentLength, and optionally lengthUnit, geodesic. */
  class esri.tasks.DensifyParameters {
    /** If true, GCS spatial references are used or densify geodesic is to be performed. */
    geodesic: boolean;
    /** The array of geometries to be densified. */
    geometries: esri.geometry.Geometry[];
    /** The length unit of maxSegmentLength, can be any esriesri.Units constant. */
    lengthUnit: any;
    /** All segments longer than maxSegmentLength are replaced with sequences of lines no longer than maxSegmentLength. */
    maxSegmentLength: number;
    /** Converts object to its JSON representation. */
    toJson(): any;
  }
  export = esri.tasks.DensifyParameters;

  /** A esri.tasks.FeatureSet that has properties specific to routing. */
  class esri.tasks.Directionsesri.tasks.FeatureSet extends esri.tasks.FeatureSet {
    /** The extent of the route. */
    extent: esri.geometry.Extent;
    /** A single polyline representing the route. */
    mergedGeometry: esri.geometry.Polyline;
    /** The ID of the route returned from the server. */
    routeId: string;
    /** Name specified in RouteParameters.stops. */
    routeName: string;
    /** Lists additional information about the direction depending on the value of directionsOutputType. */
    strings: any[];
    /** Actual drive time calculated for the route. */
    totalDriveTime: number;
    /** The length of the route as specified in RouteParameters.directionsLengthUnits. */
    totalLength: number;
    /** The total time calculated for the route as specified in RouteParameters.directionsTimeAttribute. */
    totalTime: number;
  }
  export = esri.tasks.Directionsesri.tasks.FeatureSet;

  /** Input parameters for the distance  method on the GeometryService. */
  class esri.tasks.DistanceParameters {
    /** Specifies the units for measuring distance between geometry1 and geometry2. */
    distanceUnit: any;
    /** When true, the geodesic distance between geometry1 and geometry2 is measured. */
    geodesic: boolean;
    /** The geometry from which the distance is to measured. */
    geometry1: esri.geometry.Geometry;
    /** The geometry to which the distance is measured. */
    geometry2: esri.geometry.Geometry;
    /** Creates a new esri.tasks.DistanceParameters object. */
    constructor();
  }
  export = esri.tasks.DistanceParameters;

  /** A collection of features returned from ArcGIS Server or used as input to tasks. */
  class esri.tasks.FeatureSet {
    /** The name of the layer's primary display field. */
    displayFieldName: string;
    /** Typically a layer has a limit on the number of features (i.e., records) returned by the query operation. */
    exceededTransferLimit: boolean;
    /** The array of graphics returned. */
    features: esri.Graphic[];
    /** Set of name-value pairs for the attribute's field and alias names. */
    fieldAliases: any;
    /** The geometry type of the FeatureSet. */
    geometryType: string;
    /** When a esri.tasks.FeatureSet is used as input to Geoprocessor, the spatial reference is set to the map's spatial reference by default. */
    spatialReference: esri.SpatialReference;
    /** Creates a new esri.tasks.FeatureSet object. */
    constructor();
    /**
     * Creates a new esri.tasks.FeatureSet object using a JSON object.
     * @param json A JSON object that contains feature set.
     */
    constructor(json: Object);
  }
  export = esri.tasks.FeatureSet;

  /** This data object  is used as the findParameters argument to FindTask.execute method. */
  class esri.tasks.FindParameters {
    /** The contains parameter determines whether to look for an exact match of the search text or not. */
    contains: boolean;
    /** An array of DynamicLayerInfos used to change the layer ordering or redefine the map. */
    dynamicLayerInfos: esri.layers.Dynamicesri.layers.LayerInfo[];
    /** Array of layer definition expressions that allows you to filter the features of individual layers. */
    layerDefinitions: string[];
    /** The layers to perform the find operation on. */
    layerIds: number[];
    /** The maximum allowable offset used for generalizing geometries returned by the find operation. */
    maxAllowableOffset: number;
    /** The spatial reference of the output geometries. */
    outSpatialReference: esri.SpatialReference;
    /** If "true", the result set include the geometry associated with each result. */
    returnGeometry: boolean;
    /** The names of the fields of a layer to search. */
    searchFields: string[];
    /** The search string text that is searched across the layers and the fields as specified in the layers and searchFields parameters. */
    searchText: string;
    /** Creates a new esri.tasks.FindParameters object. */
    constructor();
  }
  export = esri.tasks.FindParameters;

  /** Represents a result of a find operation. */
  class esri.tasks.FindResult {
    /** The name of the layer's primary display field. */
    displayFieldName: string;
    /** The found feature. */
    feature: esri.Graphic;
    /** The name of the field that contains the search text. */
    foundFieldName: string;
    /** Unique ID of the layer that contains the feature. */
    layerId: number;
    /** The layer name that contains the feature. */
    layerName: string;
  }
  export = esri.tasks.FindResult;

  /** Search a map service exposed by the ArcGIS Server REST API based on a string value. */
  export class FindTask {
    /** URL to the ArcGIS Server REST resource that represents a map service. */
    url: string;
    /**
     * Creates a new FindTask object.
     * @param url URL to the ArcGIS Server REST resource that represents a layer in a service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.FindTaskOptions);
    /**
     * Sends a request to the ArcGIS REST map service resource to perform a search based on the esri.tasks.FindParameters specified in the findParameters argument.
     * @param findParameters Specifies the layers and fields that are used to search against.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(findParameters: esri.tasks.FindParameters, callback?: Function, errback?: Function): any;
    /** Fires when the find operation is complete. */
    on(type: "complete", listener: (event: { results: esri.tasks.FindResult[]; target: FindTask }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: FindTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  /** Represents a message generated during the execution of a geoprocessing task. */
  class esri.tasks.GPMessage {
    /** esriJobMessageTypeAbort */
    static TYPE_ABORT: any;
    /** esriGPMessageTypeEmpty */
    static TYPE_EMPTY: any;
    /** esriGPMessageTypeError */
    static TYPE_ERROR: any;
    /** esriGPMessageTypeInformative */
    static TYPE_INFORMATIVE: any;
    /** TBA */
    static TYPE_PROCESS_DEFINITION: any;
    /** TBA */
    static TYPE_PROCESS_START: any;
    /** TBA */
    static TYPE_PROCESS_STOP: any;
    /** esriGPMessageTypeWarning */
    static TYPE_WARNING: any;
    /** A description of the geoprocessing message. */
    description: string;
    /** The geoprocessing message type. */
    type: number;
  }
  export = esri.tasks.GPMessage;

  /** Sets the geometries, maximum deviation and units for the generalize operation. */
  class esri.tasks.GeneralizeParameters {
    /** The maximum deviation unit. */
    deviationUnit: any;
    /** The array of input geometries to generalize. */
    geometries: esri.geometry.Geometry[];
    /** The maximum deviation for constructing a generalized geometry based on the input geometries. */
    maxDeviation: number;
    /** Creates a new esri.tasks.GeneralizeParameters object. */
    constructor();
  }
  export = esri.tasks.GeneralizeParameters;

  /** Define the classification definition and optional where clause for the GenerateRendererTask operation. */
  class esri.tasks.GenerateRendererParameters {
    /** A ClassBreaksDefinition or UniqueValueDefinition classification definition used to generate the data classes. */
    classificationDefinition: esri.tasks.ClassificationDefinition;
    /** Indicate if the label should be formatted */
    formatLabel: boolean;
    /** Round values for the renderer. */
    precision: number;
    /** The label in the legend will have this prefix */
    prefix: string;
    /** The label in the legend will have this at the end of each label */
    unitLabel: string;
    /** A where clause used to generate the data classes. */
    where: string;
    /** Creates a new esri.tasks.GenerateRendererParameters object. */
    constructor();
  }
  export = esri.tasks.GenerateRendererParameters;

  /** The GenerateRendererTask class creates a renderer based on a classification definition and optional where clause. */
  export class GenerateRendererTask {
    /**
     * Creates a new GenerateRendererTask object.
     * @param url URL to a layer in a map service or table.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.GenerateRendererTaskOptions);
    /**
     * Perform a classification on the layer or table resource.
     * @param generateRendererParameters A esri.tasks.GenerateRendererParameters object that defines the classification definition and an optional where clause.
     * @param callback This function will be called when the operation is complete.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(generateRendererParameters: esri.tasks.GenerateRendererParameters, callback?: Function, errback?: Function): any;
    /** Fired when the classification operation is complete. */
    on(type: "complete", listener: (event: { renderer: esri.renderers.Renderer; target: GenerateRendererTask }) => void): esri.Handle;
    /** Fired when an error occurs during task execution. */
    on(type: "error", listener: (event: { error: Error; target: GenerateRendererTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** Represents a geometry service resource exposed by the ArcGIS Server REST API. */
  class esri.tasks.GeometryService {
    /** Acres (areal unit) */
    static UNIT_ACRES: any;
    /** Ares (areal unit) */
    static UNIT_ARES: any;
    /** International foot (0.3048 meters) */
    static UNIT_FOOT: any;
    /** Hectares (areal unit) */
    static UNIT_HECTARES: any;
    /** Kilometer */
    static UNIT_KILOMETER: any;
    /** International meters */
    static UNIT_METER: any;
    /** Nautical Miles (1,852 meters) */
    static UNIT_NAUTICAL_MILE: any;
    /** Square Centimeters (areal unit) */
    static UNIT_SQUARE_CENTIMETERS: any;
    /** Square Decimeters (areal unit) */
    static UNIT_SQUARE_DECIMETERS: any;
    /** Square Feet (areal unit) */
    static UNIT_SQUARE_FEET: any;
    /** Square Inches (areal unit) */
    static UNIT_SQUARE_INCHES: any;
    /** Square Kilometers (areal unit) */
    static UNIT_SQUARE_KILOMETERS: any;
    /** Square Meters (areal unit) */
    static UNIT_SQUARE_METERS: any;
    /** Square Miles (areal unit) */
    static UNIT_SQUARE_MILES: any;
    /** Square Millimeters (areal unit) */
    static UNIT_SQUARE_MILLIMETERS: any;
    /** Square Yards (areal unit) */
    static UNIT_SQUARE_YARDS: any;
    /** Miles (5,280 feet, 1,760 yards, or exactly 1,609.344 meters) */
    static UNIT_STATUTE_MILE: any;
    /** US Nautical Mile */
    static UNIT_US_NAUTICAL_MILE: any;
    /** URL to the ArcGIS Server REST resource that represents a locator service. */
    url: string;
    /**
     * Creates a new esri.tasks.GeometryService object.
     * @param url URL to the ArcGIS Server REST resource that represents a esri.tasks.GeometryService, e.g., http://sampleserver6.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer.
     */
    constructor(url: string);
    /**
     * Computes the area and length for the input polygons.
     * @param areasAndesri.tasks.LengthsParameters Specify the input polygons and optionally the linear and areal units.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    areasAndLengths(areasAndLengthsParameters: esri.tasks.AreasAndesri.tasks.LengthsParameters, callback?: Function, errback?: Function): any;
    /**
     * The Auto Complete operation is performed on a geometry service resource.
     * @param polygons The array of polygons that will provide some boundaries for new polygons.
     * @param polylines An array of polylines that will provide the remaining boundaries for new polygons.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    autoComplete(polygons: esri.geometry.Polygon[], polylines: esri.geometry.Polyline[], callback?: Function, errback?: Function): any;
    /**
     * Creates buffer polygons at a specified distance around the given geometries.
     * @param bufferParameters Specifies the input geometries, buffer distances, and other options.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    buffer(bufferParameters: esri.tasks.BufferParameters, callback?: Function, errback?: Function): any;
    /**
     * The convexHull operation is performed on a geometry service resource.
     * @param geometries The geometries whose convex hull is to be created.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    convexHull(geometries: esri.geometry.Geometry[], callback?: Function, errback?: Function): any;
    /**
     * The cut operation is performed on a geometry service resource.
     * @param geometries The polyline or polygon to be cut.
     * @param cutteresri.geometry.Geometry The polyline that will be used to divide the target into pieces where it crosses the target.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    cut(geometries: esri.geometry.Geometry[], cutterGeometry: esri.geometry.Geometry, callback?: Function, errback?: Function): any;
    /**
     * The densify operation is performed on a geometry service resource.
     * @param densifyParameters The esri.tasks.DensifyParameters objects contains geometries, geodesic, lengthUnit, and maxSegmentLength parameters.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    densify(densifyParameters: esri.tasks.DensifyParameters, callback?: Function, errback?: Function): any;
    /**
     * The difference operation is performed on a geometry service resource.
     * @param geometries An array of points, multipoints, polylines or polygons.
     * @param geometry A single geometry of any type, of dimension equal to or greater than the elements of geometries.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    difference(geometries: esri.geometry.Geometry[], geometry: esri.geometry.Geometry, callback?: Function, errback?: Function): any;
    /**
     * Measures the planar or geodesic distance between geometries.
     * @param params Sets the input geometries to measure, distance units and other parameters.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    distance(params: esri.tasks.DistanceParameters, callback?: Function, errback?: Function): any;
    /**
     * Converts an array of well-known strings into xy-coordinates based on the conversion type and spatial reference supplied by the user.
     * @param params See the object specifications table below for the structure of the  params  object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    fromGeoCoordinateString(params: any, callback?: Function, errback?: Function): any;
    /**
     * Generalizes the input geometries using the Douglas-Peucker algorithm.
     * @param params An array of geometries to generalize and a maximum deviation.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    generalize(params: esri.tasks.GeneralizeParameters, callback?: Function, errback?: Function): any;
    /**
     * The intersect operation is performed on a geometry service resource.
     * @param geometries An array of points, multipoints, polylines or polygons.
     * @param geometry A single geometry of any type, of dimension equal to or greater than the elements of geometries.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    intersect(geometries: esri.geometry.Geometry[], geometry: esri.geometry.Geometry, callback?: Function, errback?: Function): any;
    /**
     * Calculates an interior point for each polygon specified.
     * @param polygons The graphics to process.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    labelPoints(polygons: esri.geometry.Geometry[], callback?: Function, errback?: Function): any;
    /**
     * Gets the lengths for a esri.geometry.Geometry[] when the geometry type is Polyline.
     * @param lengthsParameter Specify the polylines and optionally the length unit and the geodesic length option.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    lengths(lengthsParameter: esri.tasks.LengthsParameters, callback?: Function, errback?: Function): any;
    /**
     * Constructs the offset of the input geometries.
     * @param params Set the geometries to offset, distance and units.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    offset(params: esri.tasks.OffsetParameters, callback?: Function, errback?: Function): any;
    /**
     * Projects a set of geometries into a new spatial reference.
     * @param params The input projection parameters.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    project(params: esri.tasks.ProjectParameters, callback?: Function, errback?: Function): any;
    /**
     * Computes the set of pairs of geometries from the input geometry arrays that belong to the specified relation.
     * @param relationParameters The set of parameters required to perform the comparison.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    relation(relationParameters: esri.tasks.RelationParameters, callback?: Function, errback?: Function): any;
    /**
     * The reshape operation is performed on a geometry service resource.
     * @param targetesri.geometry.Geometry The polyline or polygon to be reshaped.
     * @param reshaperesri.geometry.Geometry The single-part polyline that does the reshaping.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    reshape(targetGeometry: esri.geometry.Geometry, reshaperGeometry: esri.geometry.Geometry, callback?: Function, errback?: Function): any;
    /**
     * Alters the given geometries to make their definitions topologically legal with respect to their geometry type.
     * @param geometries The geometries to simplify
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    simplify(geometries: esri.geometry.Geometry[], callback?: Function, errback?: Function): any;
    /**
     * Converts an array of xy-coordinates into well-known strings based on the conversion type and spatial reference supplied by the user.
     * @param params See the object specifications table below for the structure of the  params  object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    toGeoCoordinateString(params: any, callback?: Function, errback?: Function): any;
    /**
     * Trims or extends the input polylines using the user specified guide polyline.
     * @param params Input parameters for the trimExtend operation.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    trimExtend(params: esri.tasks.TrimExtendParameters, callback?: Function, errback?: Function): any;
    /**
     * The union operation is performed on a geometry service resource.
     * @param geometries The array of geometries to be unioned.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    union(geometries: esri.geometry.Geometry[], callback?: Function, errback?: Function): any;
    /** Fires when the areasAndLengths operation is complete. */
    on(type: "areas-and-lengths-complete", listener: (event: { result: any; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the autoComplete operation is complete. */
    on(type: "auto-complete-complete", listener: (event: { geometries: esri.geometry.Polygon[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the buffer operation is complete. */
    on(type: "buffer-complete", listener: (event: { geometries: esri.geometry.Geometry[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the convexHull operation is complete. */
    on(type: "convex-hull-complete", listener: (event: { geometry: esri.geometry.Geometry; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the cut operation is complete. */
    on(type: "cut-complete", listener: (event: { result: any; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the densify operation is complete. */
    on(type: "densify-complete", listener: (event: { geometries: esri.geometry.Geometry[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the difference operation is complete. */
    on(type: "difference-complete", listener: (event: { geometries: esri.geometry.Geometry[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the distance operation is complete. */
    on(type: "distance-complete", listener: (event: { distance: number; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the generalize operation is complete. */
    on(type: "generalize-complete", listener: (event: { geometries: esri.geometry.Geometry[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the intersect operation is complete. */
    on(type: "intersect-complete", listener: (event: { geometries: esri.geometry.Geometry[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the labelPoints operation is complete. */
    on(type: "label-points-complete ", listener: (event: { geometries: esri.geometry.Geometry[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the lengths operation is complete. */
    on(type: "lengths-complete", listener: (event: { result: any; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the offset operation is complete. */
    on(type: "offset-complete", listener: (event: { geometries: esri.geometry.Geometry[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the project operation is complete. */
    on(type: "project-complete", listener: (event: { geometries: esri.geometry.Geometry[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the relation operation is complete. */
    on(type: "relation-complete", listener: (event: { target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the reshape operation is complete. */
    on(type: "reshape-complete", listener: (event: { geometry: esri.geometry.Geometry; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the simplify operation is complete. */
    on(type: "simplify-complete", listener: (event: { geometries: esri.geometry.Geometry[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the trimExtend operation is complete. */
    on(type: "trim-extend-complete", listener: (event: { geometries: esri.geometry.Geometry[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
    /** Fires when the union operation is complete. */
    on(type: "union-complete", listener: (event: { geometry: esri.geometry.Geometry; target: esri.tasks.GeometryService }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.tasks.GeometryService;

  /** Represents a GP Task resource exposed by the ArcGIS Server REST API. */
  export class Geoprocessor {
    /** Deprecated at v2.0, use outesri.SpatialReference instead. */
    outputSpatialReference: esri.SpatialReference;
    /** The spatial reference of the output geometries. */
    outSpatialReference: esri.SpatialReference;
    /** The spatial reference that the model will use to perform geometry operations. */
    processSpatialReference: esri.SpatialReference;
    /** The time interval in milliseconds between each job status request sent to an asynchronous GP task. */
    updateDelay: number;
    /** ArcGIS Server Rest API endpoint to the resource that receives the geoprocessing request. */
    url: string;
    /**
     * Creates a new Geoprocessor object that represents the GP Task identifed by a URL.
     * @param url URL to the ArcGIS Server REST resource that represents a geoprocessing service.
     */
    constructor(url: string);
    /**
     * Cancel an asynchronous geoprocessing job.
     * @param jobId A string that uniquely identifies a job on the server.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    cancelJob(jobId: string, callback: Function, errback: Function): any;
    /**
     * Cancels the periodic job status updates initiated automatically when submitJob() is invoked for the job identified by jobId.
     * @param jobId A string that uniquely identifies the job for which the job updates are cancelled.
     */
    cancelJobStatusUpdates(jobId: string): void;
    /**
     * Sends a request to the GP Task for the current state of the job identified by jobId.
     * @param jobId A string that uniquely identifies a job on the server.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    checkJobStatus(jobId: string, callback?: Function, errback?: Function): void;
    /**
     * Sends a request to the server to execute a synchronous GP task.
     * @param inputParameters The inputParameters argument specifies the input parameters accepted by the task and their corresponding values.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(inputParameters: any, callback?: Function, errback?: Function): any;
    /**
     * Sends a request to the GP Task to get the task result identified by jobId and resultParameterName.
     * @param jobId The jobId returned from JobInfo.
     * @param parameterName The name of the result parameter as defined in Services Directory.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    getResultData(jobId: string, parameterName: string, callback?: Function, errback?: Function): any;
    /**
     * Sends a request to the GP Task to get the task result identified by jobId and resultParameterName as an image.
     * @param jobId The jobId returned from JobInfo.
     * @param parameterName The name of the result parameter as defined in Services Directory.
     * @param imageParameters Specifies the properties of the result image.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    getResultImage(jobId: string, parameterName: string, imageParameters: esri.layers.ImageParameters, callback?: Function, errback?: Function): any;
    /**
     * Get the task result identified by jobId and resultParameterName as an ArcGISDynamicMapServiceLayer.
     * @param jobId The jobId returned from JobInfo.
     * @param parameterName The name of the result parameter as defined in Services Directory.
     * @param imageParameters Contains various options that can be specified when generating a dynamic map image.
     * @param callback The function to call when the method has completed.
     */
    getResultImageLayer(jobId: string, parameterName?: string, imageParameters?: esri.layers.ImageParameters, callback?: Function): esri.layers.ArcGISDynamicMapServiceesri.layers.Layer;
    /**
     * Deprecated at v2.0, use setOutesri.SpatialReference instead.
     * @param spatialReference The well-known ID of a spatial reference.
     */
    setOutputSpatialReference(spatialReference: SpatialReference): void;
    /**
     * Sets the well-known ID of the spatial reference of the output geometries.
     * @param spatialReference The well-known ID of a spatial reference.
     */
    setOutSpatialReference(spatialReference: SpatialReference): void;
    /**
     * Sets the well-known ID of the spatial reference that the model uses to perform geometry operations.
     * @param spatialReference The well-known ID of a spatial reference.
     */
    setProcessSpatialReference(spatialReference: SpatialReference): void;
    /**
     * Sets the time interval in milliseconds between each job status request sent to an asynchronous GP task.
     * @param delay The value in milliseconds.
     */
    setUpdateDelay(delay: number): void;
    /**
     * Submits a job to the server for asynchronous processing by the GP task.
     * @param inputParameters The inputParameters argument specifies the input parameters accepted by the task and their corresponding values.
     * @param callback The function to call when the method has completed.
     * @param statusCallback Checks the current status of the job.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    submitJob(inputParameters: any, callback?: Function, statusCallback?: Function, errback?: Function): void;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: Geoprocessor }) => void): esri.Handle;
    /** Fires when a synchronous GP task is completed. */
    on(type: "execute-complete", listener: (event: { messages: esri.tasks.GPMessage[]; results: esri.tasks.ParameterValue[]; target: Geoprocessor }) => void): esri.Handle;
    /** Fires when the result of an asynchronous GP task execution is available. */
    on(type: "get-result-data-complete", listener: (event: { result: esri.tasks.ParameterValue; target: Geoprocessor }) => void): esri.Handle;
    /** Fires when a map image is generated by invoking the getResultImage method. */
    on(type: "get-result-image-complete", listener: (event: { mapImage: esri.layers.MapImage; target: Geoprocessor }) => void): esri.Handle;
    /** Fires when getResultImageesri.layers.Layer method has completed. */
    on(type: "get-result-image-layer-complete", listener: (event: { target: Geoprocessor }) => void): esri.Handle;
    /** Fires when the geoprocessing job is cancelled using the cancelJob method. */
    on(type: "job-cancel", listener: (event: { target: Geoprocessor }) => void): esri.Handle;
    /** Fires when an asynchronous GP task using submitJob is complete. */
    on(type: "job-complete", listener: (event: { target: Geoprocessor }) => void): esri.Handle;
    /** Fires when a job status update is available. */
    on(type: "status-update", listener: (event: { target: Geoprocessor }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** This data object is used as the identifyParameters argument to IdentifyTask.execute method. */
  class esri.tasks.IdentifyParameters {
    /** All layers are identified, even if they are not visible. */
    static LAYER_OPTION_ALL: any;
    /** Only the top-most visible layer is identified. */
    static LAYER_OPTION_TOP: any;
    /** All visible layers are identified. */
    static LAYER_OPTION_VISIBLE: any;
    /** Resolution of the current map view in dots per inch. */
    dpi: number;
    /** An array of DynamicLayerInfos used to change the layer ordering or redefine the map. */
    dynamicLayerInfos: esri.layers.Dynamicesri.layers.LayerInfo[];
    /** The geometry used to select features during Identify. */
    geometry: esri.geometry.Geometry;
    /** Height of the map currently being viewed in pixels. */
    height: number;
    /** Array of layer definition expressions that allows you to filter the features of individual layers. */
    layerDefinitions: string[];
    /** The layers to perform the identify operation on. */
    layerIds: number[];
    /** Specifies which layers to use when using Identify. */
    layerOption: string;
    /** Array of esri.layers.LayerTimeOptions objects that allow you to define time options for the specified layers. */
    layerTimeOptions: esri.layers.LayerTimeOptions[];
    /** The esri.geometry.Extent or bounding box of the map currently being viewed. */
    mapExtent: esri.geometry.Extent;
    /** The maximum allowable offset used for generalizing geometries returned by the identify operation. */
    maxAllowableOffset: number;
    /** If "true", the result set includes the geometry associated with each result. */
    returnGeometry: boolean;
    /** The spatial reference of the input and output geometries as well as of the mapExtent. */
    spatialReference: esri.SpatialReference;
    /** Specify the time extent used by the identify task. */
    timeExtent: Timeesri.geometry.Extent;
    /** The distance in screen pixels from the specified geometry within which the identify should be performed. */
    tolerance: number;
    /** Width of the map currently being viewed in pixels. */
    width: number;
    /** Creates a new esri.tasks.IdentifyParameters object. */
    constructor();
  }
  export = esri.tasks.IdentifyParameters;

  /** Represents a result of an identify operation. */
  class esri.tasks.IdentifyResult {
    /** The name of the layer's primary display field. */
    displayFieldName: string;
    /** An identified feature. */
    feature: esri.Graphic;
    /** Unique ID of the layer that contains the feature. */
    layerId: number;
    /** The layer name that contains the feature. */
    layerName: string;
  }
  export = esri.tasks.IdentifyResult;

  /** Performs an identify operation on the layers of a map service resource exposed by the ArcGIS Server REST API. */
  export class IdentifyTask {
    /** URL to the ArcGIS Server REST resource that represents a map service. */
    url: string;
    /**
     * Creates a new IdentifyTask object.
     * @param url URL to the ArcGIS Server REST resource that represents a map service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.IdentifyTaskOptions);
    /**
     * Sends a request to the ArcGIS REST map service resource to identify features based on the esri.tasks.IdentifyParameters specified in the identifyParameters argument.
     * @param identifyParameters Specifies the criteria used to identify the features.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(identifyParameters: esri.tasks.IdentifyParameters, callback?: Function, errback?: Function): any;
    /** Fires when the identify operation is complete. */
    on(type: "complete", listener: (event: { results: esri.tasks.IdentifyResult[]; target: IdentifyTask }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: IdentifyTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** Input parameters for the ImageServiceIdentifyTask. */
  class ImageServiceesri.tasks.IdentifyParameters {
    /** Input geometry that defines the location to be identified. */
    geometry: esri.geometry.Geometry;
    /** Specifies the mosaic rules defining the image sorting order. */
    mosaicRule: esri.layers.MosaicRule;
    /** The pixel or RGB color value representing no information. */
    noData: any;
    /** Used along with the noData property. */
    noDataInterpretation: string;
    /** Specify the pixel level being identified on the x and y axis. */
    pixelSize: esri.symbols.Symbol;
    /** The pixel level being identified (or the resolution being looked at) on the x-axis. */
    pixelSizeX: number;
    /** The pixel level being identified (or the resolution being looked at) on the y-axis. */
    pixelSizeY: number;
    /** Specifies the rendering rule for how the requested image should be rendered. */
    renderingRule: esri.layers.RasterFunction;
    /** If "true", returns both geometry and attributes of the catalog items. */
    returnCatalogItems: boolean;
    /** When true, each feature in the catalog items includes the geometry. */
    returnGeometry: boolean;
    /** Specify a time extent. */
    timeExtent: Timeesri.geometry.Extent;
    /** Creates a new ImageServiceesri.tasks.IdentifyParameters object. */
    constructor();
  }
  export = ImageServiceesri.tasks.IdentifyParameters;

  /** The results from an ImageServiceIdentifyTask. */
  class ImageServiceesri.tasks.IdentifyResult {
    /** The set of catalog items that overlap the input geometry. */
    catalogItems: esri.tasks.FeatureSet;
    /** The set of visible areas for the identified catalog items. */
    catalogItemVisibilities: number[];
    /** The identified location. */
    location: esri.geometry.Point;
    /** The identify property name. */
    name: string;
    /** The identify property id. */
    objectId: number;
    /** The attributes of the identified object. */
    properties: any;
    /** The identify property pixel value. */
    value: string;
  }
  export = ImageServiceesri.tasks.IdentifyResult;

  /** Performs an identify operation on an image service resource . */
  export class ImageServiceIdentifyTask {
    /**
     * Creates a new ImageServiceIdentifyTask object.
     * @param url URL to the ArcGIS Server REST resource that represents an image service.
     */
    constructor(url: string);
    /**
     * Sends a request to the ArcGIS REST image service resource to identify content based on the ImageServiceesri.tasks.IdentifyParameters specified in the imageServiceesri.tasks.IdentifyParameters argument.
     * @param params Specifies the criteria used to identify the features.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(params: ImageServiceesri.tasks.IdentifyParameters, callback?: Function, errback?: Function): any;
    /** Fires when the identify operation is complete. */
    on(type: "complete", listener: (event: { result: ImageServiceesri.tasks.IdentifyResult; target: ImageServiceIdentifyTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** Represents information pertaining to the execution of an asynchronous GP task on the server. */
  export class JobInfo {
    /** The job has been cancelled. */
    static STATUS_CANCELLED: any;
    /** The job is in the process of cancelling. */
    static STATUS_CANCELLING: any;
    /** The job has been deleted. */
    static STATUS_DELETED: any;
    /** The job is in the process of deleting. */
    static STATUS_DELETING: any;
    /** The job is being executed by job processor. */
    static STATUS_EXECUTING: any;
    /** The job execution has failed. */
    static STATUS_FAILED: any;
    /** The job is new. */
    static STATUS_NEW: any;
    /** The job is submitted for execution. */
    static STATUS_SUBMITTED: any;
    /** The job has completed successfully. */
    static STATUS_SUCCEEDED: any;
    /** The job execution has timed out. */
    static STATUS_TIMED_OUT: any;
    /** The job is waiting for available job processor. */
    static STATUS_WAITING: any;
    /** The unique job ID assigned by ArcGIS Server. */
    jobId: string;
    /** The job status. */
    jobStatus: string;
    /** An array of messages that include the message type and a description. */
    messages: esri.tasks.GPMessage[];
  }
  /** Define layer properties for the legend layers associated with a PrintTemplate. */
  class Legendesri.layers.Layer {
    /** The id of the operational layer to include in the printout's legend. */
    layerId: string;
    /** The ids of the sublayers to include in the printout's legend. */
    subLayerIds: string[];
    /** Creates a new Legendesri.layers.Layer object. */
    constructor();
  }
  export = Legendesri.layers.Layer;

  /** Sets the length units and other parameters for Lengths operation. */
  class esri.tasks.LengthsParameters {
    /** Defines the type of calculation for the geometry. */
    calculationType: string;
    /** If polylines are in geographic coordinate system, then geodesic needs to be set to true in order to calculate the ellipsoidal shortest path distance between each pair of the vertices in the polylines. */
    geodesic: boolean;
    /** The length unit in which perimeters of polygons will be calculated. */
    lengthUnit: any;
    /** The array of polylines whose lengths are to be computed. */
    polylines: esri.geometry.Geometry[];
    /** Creates a new LengthsParameter object. */
    constructor();
  }
  export = esri.tasks.LengthsParameters;
  /** A data object containing a linear distance. */
  export class LinearUnit {
    /** Specifies the value of the linear distance. */
    distance: number;
    /** Specifies the unit type of the linear distance, such as "esriMeters", "esriMiles", "esriKilometers" etc. */
    units: string;
    /** Creates a new LinearUnit object. */
    constructor();
  }

  /** Create a multipart color ramp to concatenate multiple color ramps for use in the renderer generated by the GenerateRendererTask. */
  class Multipartesri.tasks.ColorRamp extends esri.tasks.ColorRamp {
    /** Define an array of algorithmic color ramps used to generate the multi part ramp. */
    colorRamps: Algorithmicesri.tasks.ColorRamp[];
    /** Creates a new Multipartesri.tasks.ColorRamp object. */
    constructor();
    /** Returns an easily serializable object representation of a multipart color ramp. */
    toJson(): any;
  }
  export = Multipartesri.tasks.ColorRamp;
  /** Represents a message generated during the execution of a network analyst task. */
  class esri.tasks.NAMessage {
    /** TBA */
    static TYPE_ABORT: any;
    /** TBA */
    static TYPE_EMPTY: any;
    /** TBA */
    static TYPE_ERROR: any;
    /** TBA */
    static TYPE_INFORMATIVE: any;
    /** TBA */
    static TYPE_PROCESS_DEFINITION: any;
    /** TBA */
    static TYPE_PROCESS_START: any;
    /** TBA */
    static TYPE_PROCESS_STOP: any;
    /** TBA */
    static TYPE_WARNING: any;
    /** A description of the network analyst message. */
    description: string;
    /** The network analyst message type, see constants table for a list of values. */
    type: number;
  }
  export = esri.tasks.NAMessage;

  export var NATypes: {
    OutputLine: esri.NAOutputLine;
    OutputPolygon: esri.NAOutputesri.geometry.Polygon;
    TravelDirection: esri.NATravelDirection;
    UTurn: esri.NAUTurn;
  };

  /** Sets the offset distance, type and other parameters for the GeometryService.offset operation. */
  class esri.tasks.OffsetParameters {
    /** The bevelRatio is multiplied by the offset distance and the result determines how far a mitered offset intersection can be located before it is beveled. */
    bevelRatio: number;
    /** The array of geometries to be offset. */
    geometries: esri.geometry.Geometry[];
    /** Specifies the distance for constructing an offset based on the input geometries. */
    offsetDistance: number;
    /** Options that determine how the ends intersect. */
    offsetHow: string;
    /** The offset distance unit. */
    offsetUnit: string;
    /** Creates a new esri.tasks.OffsetParameters object. */
    constructor();
  }
  export = esri.tasks.OffsetParameters;
  /** Represent the output parameters of a GP task and their properties and values. */
  class esri.tasks.ParameterValue {
    /** Specifies the type of data for the parameter. */
    dataType: string;
    /** The value of the parameter. */
    value: any;
  }
  export = esri.tasks.ParameterValue;

  /** Input parameters for the PrintTask. */
  class esri.tasks.PrintParameters {
    /** Additional parameters for the print service. */
    extraParameters: any;
    /** The map to print. */
    map: esri.Map;
    /** Specify the output spatial reference for the printout. */
    outSpatialReference: esri.SpatialReference;
    /** Defines the layout template used for  the printed map. */
    template: esri.tasks.PrintTemplate;
    /** Creates a new esri.tasks.PrintParameters object. */
    constructor();
  }
  export = esri.tasks.PrintParameters;

  /** The PrintTask class generates a printer-ready version of the map using an Export Web esri.Map Task available with ArGIS Server 10.1 and later. */
  export class PrintTask {
    /** The url to the Export Web esri.Map Task. */
    url: string;
    /**
     * Creates a new PrintTask object.
     * @param url URL to the Export Web esri.Map Task.
     * @param params Parameters for the print task.
     */
    constructor(url: string, params?: esri.PrintTaskOptions);
    /**
     * Sends a request to the print service resource to create a print page using the information specified in the printParameters argument.
     * @param printParameters A esri.tasks.PrintParameters object that defines the printing options.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    execute(printParameters: esri.tasks.PrintParameters, callback?: Function, errback?: Function): any;
    /** Fired when the print operation is complete. */
    on(type: "complete", listener: (event: { url: string; target: PrintTask }) => void): esri.Handle;
    /** Fired when an error occurs while executing the print task. */
    on(type: "error", listener: (event: { error: Error; target: PrintTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  /** Define the layout template options used by the PrintTask and Print widget to generate the print page. */
  class esri.tasks.PrintTemplate {
    /** Define the map width, height and dpi. */
    exportOptions: any;
    /** The print output format. */
    format: string;
    /** The text that appears on the PrintWidget's print button. */
    label: string;
    /** The layout used for the print output. */
    layout: string;
    /** Define the layout elements. */
    layoutOptions: any;
    /** The optional map scale of the printed map. */
    outScale: number;
    /** Define whether the printed map should preserve map scale or map extent. */
    preserveScale: boolean;
    /** When false, attribution is not displayed on the printout. */
    showAttribution: boolean;
    /** Creates a new esri.tasks.PrintTemplate object. */
    constructor();
  }
  export = esri.tasks.PrintTemplate;

  /** Define the projection parameters used when calling the esri.tasks.GeometryService project method. */
  class esri.tasks.ProjectParameters {
    /** The input geometries to project. */
    geometries: esri.geometry.Geometry[];
    /** The spatial reference to which you are projecting the geometries. */
    outSR: esri.SpatialReference;
    /** The well-known id {wkid:number} or well-known text {wkt:string} or  for the datum transfomation to be applied on the projected geometries. */
    transformation: any;
    /** Indicates whether to transform forward or not. */
    transformForward: boolean;
    /** Creates a new esri.tasks.ProjectParameters object. */
    constructor();
  }
  export = esri.tasks.ProjectParameters;

  /** Executes a query operation on a layer resource of a map service exposed by the ArcGIS Server REST API. */
  class esri.tasks.QueryTask {
    /** URL to the ArcGIS Server REST resource that represents a map service layer. */
    url: string;
    /**
     * Creates a new esri.tasks.QueryTask object used to execute a query on the layer resource identified by the url.
     * @param url URL to the ArcGIS Server REST resource that represents a layer in a service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.QueryTaskOptions);
    /**
     * Executes a esri.tasks.Query against an ArcGIS Server map layer.
     * @param parameters Specifies the attributes and spatial filter of the query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(parameters: esri.tasks.Query, callback?: Function, errback?: Function): any;
    /**
     * Get a count of the number of features that satisfy the input query.
     * @param query Specify the input query object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    executeForCount(query: esri.tasks.Query, callback?: Function, errback?: Function): any;
    /**
     * Get the extent of the features that satisfy the input query.
     * @param query Specify the input query object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    executeForExtent(query: esri.tasks.Query, callback?: Function, errback?: Function): any;
    /**
     * Executes a esri.tasks.Query against an ArcGIS Server map layer.
     * @param parameters Specifies the attributes and spatial filter of the query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    executeForIds(parameters: esri.tasks.Query, callback?: Function, errback?: Function): any;
    /**
     * Executes a Relationshipesri.tasks.Query against an ArcGIS Server map layer (or table).
     * @param parameters Specifies the attributes and spatial filter of the query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    executeRelationshipQuery(parameters: Relationshipesri.tasks.Query, callback?: Function, errback?: Function): any;
    /** Fires when the query operation is complete. */
    on(type: "complete", listener: (event: { featureSet: esri.tasks.FeatureSet; target: esri.tasks.QueryTask }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: esri.tasks.QueryTask }) => void): esri.Handle;
    /** Fires when the query for the count is complete. */
    on(type: "execute-for-count-complete", listener: (event: { count: number; target: esri.tasks.QueryTask }) => void): esri.Handle;
    /** Fires when the query for the extent is complete. */
    on(type: "execute-for-extent-complete", listener: (event: { count: number; extent: any; target: esri.tasks.QueryTask }) => void): esri.Handle;
    /** Fires when the query on IDs is complete. */
    on(type: "execute-for-ids-complete", listener: (event: { objectIds: number[]; target: esri.tasks.QueryTask }) => void): esri.Handle;
    /** Fires when the executeRelationshipesri.tasks.Query is complete. */
    on(type: "execute-relationship-query-complete", listener: (event: { featureSets: esri.tasks.FeatureSet[]; target: esri.tasks.QueryTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.tasks.QueryTask;
  /** A geoprocessing data object containing a raster data source. */
  export class RasterData {
    /** Specifies the format of the raster data such as "jpg", "tif" etc. */
    format: string;
    /** The ID of the uploaded file returned as a result of the upload operation. */
    itemID: string;
    /** URL to the location of the raster data file. */
    url: string;
    /** Creates a new RasterData object. */
    constructor();
  }

  /** Sets the relation and other parameters for Relation operation. */
  class esri.tasks.RelationParameters {
    /** The boundaries of the geometries must share an intersection, but the relationship between the interiors of the shapes is not considered (they could overlap, one could be contained in the other, or their interiors could be disjoint). */
    static SPATIAL_REL_COINCIDENCE: any;
    /** Two polylines cross if they share only points in common, at least one of which is not an endpoint. */
    static SPATIAL_REL_CROSS: any;
    /** Two geometries are disjoint if their intersection is empty. */
    static SPATIAL_REL_DISJOINT: any;
    /** The base geometry is within the comparison geometry if the base geometry is the intersection of the geometries and the intersection of their interiors is not empty. */
    static SPATIAL_REL_IN: any;
    /** Geometries intersect excluding boundary touch. */
    static SPATIAL_REL_INTERIORINTERSECTION: any;
    /** esri.geometry.Geometry interiors intersect or boundaries touch, same as 'not disjoint'. */
    static SPATIAL_REL_INTERSECTION: any;
    /** Two geometries are said to touch when the intersection of the geometries is non-empty, but the intersection of their interiors is empty. */
    static SPATIAL_REL_LINETOUCH: any;
    /** Two polylines share a common sub-line, or two polygons share a common sub-area. */
    static SPATIAL_REL_OVERLAP: any;
    /** Two geometries are said to touch when the intersection of the geometries is non-empty, but the intersection of their interiors is empty. */
    static SPATIAL_REL_POINTTOUCH: any;
    /** Allows specification of any relationship defined   using the Shape Comparison Language. */
    static SPATIAL_REL_RELATION: any;
    /** The union of point touch and line touch. */
    static SPATIAL_REL_TOUCH: any;
    /** Same as SPATIAL_REL_IN but also allows polylines that are strictly on the boundaries of polygons to be considered in the polygon. */
    static SPATIAL_REL_WITHIN: any;
    /** The first array of geometries to compute the relations. */
    geometries1: esri.geometry.Geometry[];
    /** The second array of geometries to compute the relations. */
    geometries2: esri.geometry.Geometry[];
    /** The spatial relationship to be tested between the two input geometry arrays. */
    relation: string;
    /** The 'Shape Comparison Language' string to evaluate. */
    relationParam: string;
    /** Creates a new RelationParameter object. */
    constructor();
  }
  export = esri.tasks.RelationParameters;

  /** Define query parameters for the feature layer's queryRelatedFeatures method. */
  class Relationshipesri.tasks.Query {
    /** The definition expression to be applied to the related table or layer. */
    definitionExpression: string;
    /** Specify the number of decimal places for the geometries returned by the query operation. */
    geometryPrecision: number;
    /** The maximum allowable offset used for generalizing geometries returned by the query operation. */
    maxAllowableOffset: number;
    /** A comma delimited list of ObjectIds for the features in the layer/table that you want to query. */
    objectIds: number[];
    /** Attribute fields to include in the FeatureSet. */
    outFields: string[];
    /** The spatial reference for the returned geometry. */
    outSpatialReference: esri.SpatialReference;
    /** The ID of the relationship to test. */
    relationshipId: number;
    /** If "true", each feature in the esri.tasks.FeatureSet includes the geometry. */
    returnGeometry: boolean;
    /** Creates a new Relationshipesri.tasks.Query object. */
    constructor();
  }
  export = Relationshipesri.tasks.Query;

  /** Input parameters for a RouteTask. */
  class esri.tasks.RouteParameters {
    /** The list of network attribute names to be accumulated with the analysis, i.e., which attributes should be returned as part of the response. */
    accumulateAttributes: string[];
    /** Each element in the array is an object that describes the parameter values. */
    attributeParameterValues: any[];
    /** The set of point barriers loaded as network locations during analysis. */
    barriers: any;
    /** The language used when computing directions. */
    directionsLanguage: string;
    /** The length units to use when computing directions. */
    directionsLengthUnits: string;
    /** Defines the amount of direction information returned. */
    directionsOutputType: string;
    /** The style to be used when returning directions. */
    directionsStyleName: string;
    /** The name of network attribute to use for the drive time when computing directions. */
    directionsTimeAttribute: string;
    /** If true, avoids network elements restricted by barriers or due to restrictions specified in restrictionAttributes. */
    doNotLocateOnRestrictedElements: boolean;
    /** If true, optimizes the order of the stops in the route while taking into account preserveFirstStop and preserveLastStop, if they are set to true. */
    findBestSequence: boolean;
    /** In routes where a stop is not located on a network or a stop could not be reached, the results will differ depending on the value of ignoreInvalidLocations. */
    ignoreInvalidLocations: boolean;
    /** The network attribute name to be used as the impedance attribute in analysis. */
    impedanceAttribute: string;
    /** The precision of the output geometry after generalization. */
    outputGeometryPrecision: number;
    /** The units of the output geometry precision. */
    outputGeometryPrecisionUnits: string;
    /** The type of output lines to be generated in the result. */
    outputLines: string;
    /** The well-known ID of the spatial reference for the geometries returned with the analysis results. */
    outSpatialReference: esri.SpatialReference;
    /** The set of polygon barriers loaded as network locations during analysis. */
    polygonBarriers: any;
    /** The set of polyline barriers loaded as network locations during analysis. */
    polylineBarriers: any;
    /** If true, keeps the first stop fixed in the sequence even when findBestSequence is true. */
    preserveFirstStop: boolean;
    /** If true, keeps the last stop fixed in the sequence even when findBestSequence is true. */
    preserveLastStop: boolean;
    /** The list of network attribute names to be used as restrictions with the analysis. */
    restrictionAttributes: string[];
    /** Specifies how U-Turns should be handled. */
    restrictUTurns: string;
    /** If true, barriers are returned as the second parameter of RouteTask.onSolveComplete. */
    returnBarriers: boolean;
    /** If true, directions are generated and returned in the directions property of each RouteResult. */
    returnDirections: boolean;
    /** If true, polygon barriers are returned as the third parameter of RouteTask.onSolveComplete. */
    returnPolygonBarriers: boolean;
    /** If true, polyline barriers are returned as the fourth parameter of RouteTask.onSolveComplete. */
    returnPolylineBarriers: boolean;
    /** If true, routes are generated and returned in the route property of each RouteResult. */
    returnRoutes: boolean;
    /** If true, stops are returned in the stops property of each RouteResult. */
    returnStops: boolean;
    /** The time the route begins. */
    startTime: Date;
    /** Start time is in UTC format */
    startTimeIsUTC: boolean;
    /** The set of stops loaded as network locations during analysis. */
    stops: any;
    /** If true, the hierarchy attribute for the network should be used in analysis. */
    useHierarchy: boolean;
    /** If true, time windows should be used in the analysis. */
    useTimeWindows: boolean;
    /** Creates a new esri.tasks.RouteParameters object. */
    constructor();
  }
  export = esri.tasks.RouteParameters;

  /** The result from the Route Task. */
  class esri.tasks.RouteResult {
    /** Route directions are returned if RouteParameters.returnDirections is set to true. */
    directions: esri.tasks.Directionsesri.tasks.FeatureSet;
    /** The Route graphic that is returned if RouteParameters.returnRoutes is true. */
    route: esri.Graphic;
    /** The name of the route. */
    routeName: string;
    /** Array of stops. */
    stops: esri.Graphic[];
  }
  export = esri.tasks.RouteResult;

  /** Solves a route on a route layer resource in a Network Analyst service exposed by the ArcGIS Server REST API. */
  class esri.tasks.RouteTask {
    /** URL to the ArcGIS Server REST resource that represents a network analysis service. */
    url: string;
    /**
     * Creates a new esri.tasks.RouteTask object.
     * @param url URL to the ArcGIS Server REST resource that represents a network analysis service.
     */
    constructor(url: string);
    /**
     * Solves the route against the route layer with the route parameters.
     * @param params Route parameters used as input to generate the route.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    solve(params: esri.tasks.RouteParameters, callback?: Function, errback?: Function): any;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: esri.tasks.RouteTask }) => void): esri.Handle;
    /** Fires when RouteTask.solve() has completed. */
    on(type: "solve-complete", listener: (event: { result: any; target: esri.tasks.RouteTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.tasks.RouteTask;

  /** Input parameters for a ServiceAreaTask. */
  class esri.tasks.ServiceAreaParameters {
    /** The list of network attribute names to be accumulated with the analysis, i.e., which attributes should be returned as part of the response. */
    accumulateAttributes: string[];
    /** A set of attribute parameter values that can be parameterized to determine which network elements can be used by a vehicle. */
    attributeParameterValues: any[];
    /** An array of numbers defining the breaks. */
    defaultBreaks: number[];
    /** When true, restricted network elements should be considered when finding network locations. */
    doNotLocateOnRestrictedElements: boolean;
    /** An array of network source names to NOT use when generating polygons. */
    excludeSourcesFromPolygons: string[];
    /** The set of facilities loaded as network locations during analysis. */
    facilities: any;
    /** The network attribute name used as the impedance attribute in analysis. */
    impedanceAttribute: string;
    /** If true, similar ranges will be merged in the result polygons. */
    mergeSimilarPolygonRanges: boolean;
    /** The precision of the output geometry after generalization. */
    outputGeometryPrecision: number;
    /** The units of the output geometry precision. */
    outputGeometryPrecisionUnits: string;
    /** The type of output lines to be generated in the result. */
    outputLines: string;
    /** The type of output polygons to be generated in the result. */
    outputPolygons: string;
    /** The well-known ID of the spatial reference for the geometries returned with the analysis results. */
    outSpatialReference: esri.SpatialReference;
    /** Indicates if the lines should overlap from multiple facilities. */
    overlapLines: boolean;
    /** Indicates if the polygons should overlap from multiple facilities. */
    overlapPolygons: boolean;
    /** The set of point barriers loaded as network locations during analysis. */
    pointBarriers: any;
    /** The set of polygons barriers loaded as network locations during analysis. */
    polygonBarriers: any;
    /** The set of polyline barriers loaded as network locations during analysis. */
    polylineBarriers: any;
    /** The list of network attribute names to be used as restrictions with the analysis. */
    restrictionAttributes: string[];
    /** Specifies how U-Turns should be handled. */
    restrictUTurns: string;
    /** If true, facilities will be returned with the analysis results. */
    returnFacilities: boolean;
    /** If true, barriers will be returned in the barriers property of ClosestFacilitySolveResult. */
    returnPointBarriers: boolean;
    /** If true, polygon barriers will be returned in the polygonBarriers property of ClosestFacilitySolveResult. */
    returnPolygonBarriers: boolean;
    /** If true, polyline barriers will be returned in the polylineBarriers property of ClosestFacilitySolveResult. */
    returnPolylineBarriers: boolean;
    /** If true, lines will be split at breaks. */
    splitLinesAtBreaks: boolean;
    /** If true, polygons will be split at breaks. */
    splitPolygonsAtBreaks: boolean;
    /** Local date and time at the facility. */
    timeOfDay: Date;
    /** Options for traveling to or from the facility. */
    travelDirection: string;
    /** If true, the outermost polygon (at the maximum break value) will be trimmed. */
    trimOuterPolygon: boolean;
    /** If polygons are being trimmed, provides the distance to trim. */
    trimPolygonDistance: number;
    /** If polygons are being trimmed, specifies the units of the trimPolygonDistance. */
    trimPolygonDistanceUnits: string;
    /** When true, the hierarchy attributes for the network will be used in analysis. */
    useHierarchy: boolean;
    /** Creates a new esri.tasks.ServiceAreaParameters object. */
    constructor();
  }
  export = esri.tasks.ServiceAreaParameters;

  /** The result from a ServiceAreaTask operation. */
  class esri.tasks.ServiceAreaSolveResult {
    /** Array of points, only returned if ServiceAreaParameters.returnFacilities is set to true. */
    facilities: esri.geometry.Point[];
    /** Message received when solve is completed. */
    messages: esri.tasks.NAMessage[];
    /** The point barriers are an array of points. */
    pointBarriers: esri.geometry.Point[];
    /** The polygon barriers are an array of polygons. */
    polygonBarriers: esri.geometry.Polygon[];
    /** The polyline barriers are an array of polylines. */
    polylineBarriers: esri.geometry.Polyline[];
    /** Array of service area polygon graphics. */
    serviceAreaPolygons: esri.Graphic[];
    /** Array of service area polyline graphics. */
    serviceAreaPolylines: esri.Graphic[];
  }
  export = esri.tasks.ServiceAreaSolveResult;

  /** Helps you find service areas around any location on a network. */
  export class ServiceAreaTask {
    /**
     * Creates a new ServiceAreaTask object.
     * @param url URL to the ArcGIS Server REST resource that represents a network analysis service.
     */
    constructor(url: string);
    /**
     * Solve the service area.
     * @param params The esri.tasks.ServiceAreaParameters object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    solve(params: esri.tasks.ServiceAreaParameters, callback?: Function, errback?: Function): any;
    /** Fires when ServiceAreaTask has completed. */
    on(type: "solve-complete", listener: (event: { result: esri.tasks.ServiceAreaSolveResult; target: ServiceAreaTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  /** The esri.tasks.StatisticDefinition class defines the type of statistics, the field used to calculate the statistics and the resulting output field name. */
  class esri.tasks.StatisticDefinition {
    /** Define the field on which statistics will be calculated. */
    onStatisticField: string;
    /** Specify the output field name. */
    outStatisticFieldName: string;
    /** Define the type of statistic. */
    statisticType: string;
    /** Creates a new esri.tasks.StatisticDefinition object. */
    constructor();
  }
  export = esri.tasks.StatisticDefinition;

  /** Sets the polylines and other parameters for the trimExtend operation. */
  class esri.tasks.TrimExtendParameters {
    /** A flag used along with the trimExtend operation. */
    extendHow: string;
    /** The array of polylines to trim or extend. */
    polylines: esri.geometry.Polyline[];
    /** A polyline used as a guide for trimming or extending input polylines. */
    trimExtendTo: esri.geometry.Polyline;
    /** Creates a new esri.tasks.TrimExtendParameters object. */
    constructor();
  }
  export = esri.tasks.TrimExtendParameters;

  /** Define a unique value classification scheme used by the GenerateRendererTask to create a renderer that groups values based on a unique combination of one or more fields. */
  export class UniqueValueDefinition extends esri.tasks.ClassificationDefinition {
    /** Attribute field renderer uses to match values. */
    attributeField: string;
    /** The name of the field that contains unique values when combined with the values specified by attributeField. */
    attributeField2: string;
    /** The name of the field that contains unique values when combined with the values specified by attributeesri.layers.Field and attributeField2. */
    attributeField3: string;
    /** Define a default symbol for the classification. */
    baseSymbol: esri.symbols.Symbol;
    /** Define a color ramp for the classification. */
    colorRamp: esri.tasks.ColorRamp;
    /** Creates a new UniqueValueDefinition object. */
    constructor();
    /** Returns an easily serializable object representation of the unique value definition. */
    toJson(): any;
  }

  /** Represents a geocode service resource exposed by the ArcGIS Server REST API. */
  class esri.tasks.Locator {
    /** Limit the results to one or more categories. */
    categories: string[];
    /** The country to limit results to for example "US" for United States or "SE" for Sweden. */
    countryCode: string;
    /** The spatial reference of the output geometries. */
    outSpatialReference: esri.SpatialReference;
    /** URL to the ArcGIS Server REST resource that represents a locator service. */
    url: string;
    /**
     * Creates a new esri.tasks.Locator object.
     * @param url URL to the ArcGIS Server REST resource that represents a locator service.
     */
    constructor(url: string);
    /**
     * Find address candidates for the input addresses.
     * @param params The input addresses in the format supported by the geocoding service.
     * @param callback The function to call when the method has completed.
     * @param errback The function to call if an error occurs on the server during task execution.
     */
    addressesToLocations(params: any, callback: Function, errback: Function): any;
    /**
     * Sends a request to the ArcGIS REST geocode resource to find candidates for a single address specified in the address parameter.
     * @param params Specify the address and optionally specify the outFields and searchExtent.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    addressToLocations(params: any, callback?: Function, errback?: Function): any;
    /**
     * Locates an address based on a given point.
     * @param location The point at which to search for the closest address.
     * @param distance The distance in meters from the given location within which a matching address should be searched.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    locationToAddress(location: esri.geometry.Point, distance: number, callback?: Function, errback?: Function): any;
    /**
     * Sets the well-known ID of the spatial reference of the output geometries.
     * @param spatialReference The well-known ID of a spatial reference.
     */
    setOutSpatialReference(spatialReference: SpatialReference): void;
    /**
     * Get character by character auto complete suggestions.
     * @param params An object that defines suggest parameters.
     */
    suggestLocations(params: any): any;
    /** Fires when Locator.addressesToLocations method has completed. */
    on(type: "addresses-to-locations-complete", listener: (event: { addresses: esri.tasks.AddressCandidate[]; target: esri.tasks.Locator }) => void): esri.Handle;
    /** Fires when Locator.addressToLocation method has completed. */
    on(type: "address-to-locations-complete", listener: (event: { addresses: esri.tasks.AddressCandidate[]; target: esri.tasks.Locator }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: esri.tasks.Locator }) => void): esri.Handle;
    /** Fires when Locator.locationToAddress method has completed. */
    on(type: "location-to-address-complete", listener: (event: { address: esri.tasks.AddressCandidate; target: esri.tasks.Locator }) => void): esri.Handle;
    /** Fires when the suggestLocation method has completed. */
    on(type: "suggest-locations-complete", listener: (event: { target: esri.tasks.Locator }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.tasks.Locator;

  /** esri.tasks.Query for input to the QueryTask. */
  class esri.tasks.Query {
    /** Part or all of a feature from feature class 1 is contained within a feature from feature class 2. */
    static SPATIAL_REL_CONTAINS: any;
    /** The feature from feature class 1 crosses a feature from feature class 2. */
    static SPATIAL_REL_CROSSES: any;
    /** The envelope of feature class 1 intersects with the envelope of feature class 2. */
    static SPATIAL_REL_ENVELOPEINTERSECTS: any;
    /** The envelope of the query feature class intersects the index entry for the target feature class. */
    static SPATIAL_REL_INDEXINTERSECTS: any;
    /** Part of a feature from feature class 1 is contained in a feature from feature class 2. */
    static SPATIAL_REL_INTERSECTS: any;
    /** Features from feature class 1 overlap features in feature class 2. */
    static SPATIAL_REL_OVERLAPS: any;
    /** Allows specification of any relationship defined   using the Shape Comparison Language. */
    static SPATIAL_REL_RELATION: any;
    /** The feature from feature class 1 touches the border of a feature from feature class 2. */
    static SPATIAL_REL_TOUCHES: any;
    /** The feature from feature class 1 is completely enclosed by the feature from feature class 2. */
    static SPATIAL_REL_WITHIN: any;
    /** Distance to buffer input geometry. */
    distance: number;
    /** The geometry to apply to the spatial filter. */
    geometry: esri.geometry.Geometry;
    /** Specify the number of decimal places for the geometries returned by the query operation. */
    geometryPrecision: number;
    /** One or more field names that will be used to group the statistics. */
    groupByFieldsForStatistics: string[];
    /** The maximum allowable offset used for generalizing geometries returned by the query operation. */
    maxAllowableOffset: number;
    /** Parameter to support querying feature services whose data source is a multipatch featureclass. */
    multipatchOption: string;
    /** Number of features to retrieve. */
    num: number;
    /** A comma delimited list of ObjectIds for the features in the layer/table that you want to query. */
    objectIds: number[];
    /** One or more field names that will be used to order the query results. */
    orderByFields: string[];
    /** Attribute fields to include in the FeatureSet. */
    outFields: string[];
    /** The spatial reference for the returned geometry. */
    outSpatialReference: esri.SpatialReference;
    /** The definitions for one or more field-based statistic to be calculated. */
    outStatistics: esri.tasks.StatisticDefinition[];
    /** Specify the pixel level to be identified on the x and y axis. */
    pixelSize: esri.symbols.Symbol;
    /** Used to project the geometry onto a virtual grid, likely representing pixels on the screen. */
    quantizationParameters: any;
    /** The 'Shape Comparison Language' string to evaluate. */
    relationParam: string;
    /** If true then returns distinct values based on the fields specified in the outFields. */
    returnDistinctValues: boolean;
    /** If "true", each feature in the esri.tasks.FeatureSet includes the geometry. */
    returnGeometry: boolean;
    /** The spatial relationship to be applied on the input geometry while performing the query. */
    spatialRelationship: string;
    /** Zero-based index indicating where to begin retrieving features. */
    start: number;
    /** Shorthand for a where clause using "like". */
    text: string;
    /** Specify a time extent for the query. */
    timeExtent: Timeesri.geometry.Extent;
    /** Distance unit. */
    units: string;
    /** A where clause for the query. */
    where: string;
    /** Creates a new esri.tasks.Query object used to execute a query on the layer resource identified by the URL. */
    constructor();
  }
  export = esri.tasks.Query;
}
declare namespace esri.tasks.geoenrichment {

  /** The study area that is based on an address. */
  class Addressesri.tasks.geoenrichment.StudyArea extends esri.tasks.geoenrichment.StudyArea {
    /** The address key value pairs to geocode to obtain this study area. */
    attributes: any;
  }
  export = Addressesri.tasks.geoenrichment.StudyArea;

  /** The study area is created with a drive time or drive distance buffer. */
  export class DriveBuffer {
    /** The radii to use to create ring buffers. */
    radius: number[];
    /** The units of the radii. */
    units: string;
    /**
     * Constructs a DriveBuffer.
     * @param params Various optional parameters that can be used to configure this class.
     */
    constructor(params: esri.DriveBufferOptions);
  }
  /** Driveesri.Units provides various length units that can be passed as the units in the DriveBuffer. */
  class Driveesri.Units {
    /** Acres (esriAcres). */
    static ACRES: any;
    /** Ares (esriAres). */
    static ARES: any;
    /** Centimeters (esriCentimeters). */
    static CENTIMETERS: any;
    /** Decimal degrees (esriDecimalDegrees). */
    static DECIMAL_DEGREES: any;
    /** Decimeters (esriDecimeters). */
    static DECIMETERS: any;
    /** Degree minute seconds (esriDegreeMinuteSeconds). */
    static DEGREE_MINUTE_SECONDS: any;
    /** Feet (esriFeet). */
    static FEET: any;
    /** Hectares (esriHectares). */
    static HECTARES: any;
    /** Inches (esriInches). */
    static INCHES: any;
    /** Kilometers (esriKilometers). */
    static KILOMETERS: any;
    /** Meters (esriMeters). */
    static METERS: any;
    /** Miles (esriMiles). */
    static MILES: any;
    /** Millimeters (esriMillimeters). */
    static MILLIMETERS: any;
    /** Minutes (esriDriveTimeUnitsMinutes). */
    static MINUTES: any;
    /** Nautical miles (esriNauticalMiles). */
    static NAUTICAL_MILES: any;
    /** Points (esriPoints). */
    static POINTS: any;
    /** Square centimeters (esriSquareCentimeters). */
    static SQUARE_CENTIMETERS: any;
    /** Square decimeters (esriSquareDecimeters). */
    static SQUARE_DECIMETERS: any;
    /** Square feet (esriSquareFeet). */
    static SQUARE_FEET: any;
    /** Square inches (esriSquareInches). */
    static SQUARE_INCHES: any;
    /** Square kilometers (esriSquareKilometers). */
    static SQUARE_KILOMETERS: any;
    /** Square meters (esriSquareMeters). */
    static SQUARE_METERS: any;
    /** Square miles (esriSquareMiles). */
    static SQUARE_MILES: any;
    /** Square millimeters (esriSquareMillimeters). */
    static SQUARE_MILLIMETERS: any;
    /** Square yards (esriSquareYards). */
    static SQUARE_YARDS: any;
    /** Unknown (esriUnknownUnits). */
    static UNKNOWN: any;
    /** Yards (esriYards). */
    static YARDS: any;
  }
  export = Driveesri.Units;
  /** GeographicLevel works with IntersectingGeographies to define a study area of Infoesri.Graphic with a feature from a standard geography layer. */
  class esri.tasks.geoenrichment.GeographyLevel {
    /** The ID of the country for which data is retrieved. */
    countryID: string;
    /** The ID of the dataset to which variables used in this esri.tasks.geoenrichment.GeographyLevel belong. */
    datasetID: string;
    /** The ID of the layer. */
    layerID: string;
    /**
     * Create a esri.tasks.geoenrichment.GeographyLevel object.
     * @param json Various options to configure this GeographyLevel.
     */
    constructor(json?: Object);
  }
  export = esri.tasks.geoenrichment.GeographyLevel;

  /** (Beta at v3.12) Represents StandardGeographyesri.tasks.Query parameters to search for geographies by ID or Name. */
  class Geographyesri.tasks.Query extends esri.tasks.geoenrichment.GeographyQueryBase {
    /** Array of geography IDs. */
    geographyIDs: string[];
    /** Array of geography layer IDs. */
    geographyLayerIDs: string[];
    /** A where clause for the query. */
    where: string;
    /** Creates a new instance of the Geographyesri.tasks.Query object. */
    constructor();
  }
  export = Geographyesri.tasks.Query;

  /** (Beta at v3.12) Base class for all Geographyesri.tasks.Query objects. */
  class esri.tasks.geoenrichment.GeographyQueryBase {
    /** Two-digit country code. */
    countryID: string;
    /** Optional string that denotes the ID of a dataset associated with a particular country. */
    datasetID: string;
    /** Optional integer value where you can limit the number of features that are returned from the geographyQuery. */
    featureLimit: number;
    /** Optional integer that specifies the level of generalization of the geometries. */
    generalizationLevel: number;
    /** Determines spatial reference for output geometry if returnesri.geometry.Geometry is set to true. */
    outSR: esri.SpatialReference;
    /** Use this parameter to return all the geometries as points. */
    returnCentroids: boolean;
    /** Determines whether response will also include geometries. */
    returnGeometry: boolean;
    /** Optional boolean to enable fuzzy search. */
    useFuzzySearch: boolean;
    /**
     * Creates a new instance of the esri.tasks.geoenrichment.GeographyQueryBase object.
     * @param json JSON object used to set the properties of the object.
     */
    constructor(json?: Object);
    /** Converts object to its JSON representation. */
    toJson(): any;
  }
  export = esri.tasks.geoenrichment.GeographyQueryBase;

  /** The study area that is based on a geometry. */
  class esri.tasks.geoenrichment.Geometryesri.tasks.geoenrichment.StudyArea extends esri.tasks.geoenrichment.StudyArea {
    /** The geometry for this study area. */
    geometry: esri.geometry.Geometry;
    /** Constructs a GeometryStudyArea. */
    constructor();
  }
  export = esri.tasks.geoenrichment.Geometryesri.tasks.geoenrichment.StudyArea;

  /** The study area is created with the geometries intersecting the passed in geometry from specified layers. */
  export class IntersectingGeographies {
    /** The layers from which intersecting geographies should be used as study areas. */
    levels: esri.tasks.geoenrichment.GeographyLevel[];
  }

  /** The study area is created with a simple ring buffer with a radius. */
  export class RingBuffer {
    /** The radii to use to create ring buffers. */
    radii: number[];
    /** The units of the radii. */
    units: string;
    /**
     * Constructs a RingBuffer.
     * @param params Various optional parameters that can be used to configure this class.
     */
    constructor(params: esri.RingBufferOptions);
  }

  /** (Beta at v3.12) Geoenrichment helper task that returns standard geography IDs and features for the supported geographic levels in Canada, the United States and a number of European countries. */
  class esri.tasks.geoenrichment.StandardGeographyesri.tasks.QueryTask {
    /**
     * Creates a new instance of the esri.tasks.geoenrichment.StandardGeographyesri.tasks.QueryTask class.
     * @param url URL to the Geoenrichment server.
     */
    constructor(url?: string);
    /**
     * Executes the StandardGeographyQueryTask.
     * @param Geographyesri.tasks.Query See Geographyesri.tasks.Query or SubGeographyesri.tasks.Query classes for more details about available properties.
     */
    execute(GeographyQuery: GeographyQueryBase): any;
    /** Fires when an error occurs during the query. */
    on(type: "error", listener: (event: { error: Error; target: esri.tasks.geoenrichment.StandardGeographyesri.tasks.QueryTask }) => void): esri.Handle;
    /** Fires when the query successfully executes. */
    on(type: "execute-complete", listener: (event: { features: esri.tasks.FeatureSet; target: esri.tasks.geoenrichment.StandardGeographyesri.tasks.QueryTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.tasks.geoenrichment.StandardGeographyesri.tasks.QueryTask;

  /** The study area that is based on a standard geography. */
  class StandardGeographyesri.tasks.geoenrichment.StudyArea extends esri.tasks.geoenrichment.StudyArea {
    /** The country to which this geography belongs. */
    countryID: string;
    /** The ID of the standard geography layer. */
    geographyLayerID: string;
    /** The IDs of the standard geographies. */
    ids: string[];
  }
  export = StandardGeographyesri.tasks.geoenrichment.StudyArea;

  /** The study area that is used for enrichment or for display in an Infographic widget. */
  class esri.tasks.geoenrichment.StudyArea {
    /** Attributes of the study area. */
    attributes: any;
    /** The identifiers for layers used to find comparison geographies. */
    comparisonGeographyLevels: esri.tasks.geoenrichment.GeographyLevel[];
    /** The options to apply to the study area. */
    options: any;
    /** If true, geometry will be returned. */
    returnGeometry: boolean;
    /** Converts object to its JSON representation. */
    toJson(): any;
  }
  export = esri.tasks.geoenrichment.StudyArea;

  /** (Beta at v3.12) Represents StandardGeographyesri.tasks.Query parameters to search subgeographic areas that are within a parent geography. */
  class SubGeographyesri.tasks.Query extends esri.tasks.geoenrichment.GeographyQueryBase {
    /** Parent layer geography IDs. */
    filterGeographyIDs: string;
    /** Parent layer ID. */
    filterGeographyLayerID: string;
    /** Parent layer search string. */
    filterGeographyWhere: string;
    /** esri.layers.Layer ID to return features from. */
    subGeographyLayerID: string;
    /** esri.tasks.Query string for the subquery. */
    subGeographyWhere: string;
    /**
     * Creates a new instance of the SubGeographyesri.tasks.Query object.
     * @param json JSON object used to set the properties of the object.
     */
    constructor(json?: Object);
  }
  export = SubGeographyesri.tasks.Query;
}
declare namespace esri.tasks.locationproviders {

  /** (Beta at v3.12) The CoordinatesLocationProvider class uses the fields that contain Latitude and Longitude values to generate or locate geometries. */
  export class CoordinatesLocationProvider extends esri.tasks.locationproviders.LocationProviderClientBase {
    /** The attribute field in the graphic object that has the longitude (X) values. */
    xField: string;
    /** The attribute field in the graphic object that has the latitude (X) values. */
    yField: string;
    /**
     * Creates a new instance of the CoordinatesLocationProvider object.
     * @param options Define the properties to use when creating the class.
     */
    constructor(options: esri.CoordinatesLocationProviderOptions);
  }

  /** (Beta at v3.12) The GeometryLocationProvider class uses the field in the data that has geometry as a JSON to generate the corresponding geometry. */
  export class GeometryLocationProvider extends esri.tasks.locationproviders.LocationProviderClientBase {
    /** The attribute field in the graphic object that contains the JSON string representing the geometry. */
    geometryField: string;
    /**
     * Creates a new instance of the GeometryLocationProvider object.
     * @param options Define the properties to use when creating the class.
     */
    constructor(options: any);
  }

  /** (Beta at v3.12) The base class for all LocationProviders. */
  class esri.tasks.locationproviders.LocationProviderBase {
    /** The geometry type of the returned features. */
    geometryType: string;
    /** Returns true when the load event has been fired. */
    loaded: boolean;
    /**
     * Assigns geometries to the array of esri.Graphic objects.
     * @param features An array of esri.Graphic objects.
     * @param options Optional parameters.
     */
    locate(features: esri.Graphic[], options?: any): any;
    /** Fires when an error occurs during locate. */
    on(type: "error", listener: (event: { error: Error; target: esri.tasks.locationproviders.LocationProviderBase }) => void): esri.Handle;
    /** Fires after the provider has loaded. */
    on(type: "load", listener: (event: { target: esri.tasks.locationproviders.LocationProviderBase }) => void): esri.Handle;
    /** Fires when the locate has completed. */
    on(type: "locate-complete", listener: (event: { failed: esri.Graphic[]; features: esri.Graphic[]; target: esri.tasks.locationproviders.LocationProviderBase }) => void): esri.Handle;
    /** (Need clarification) Fires when the locate is in progress. */
    on(type: "locate-progress", listener: (event: { features: esri.Graphic[]; target: esri.tasks.locationproviders.LocationProviderBase }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.tasks.locationproviders.LocationProviderBase;

  /** (Beta at v3.12) The base class for CoordinatesLocationProvider and GeometryLocationProvider. */
  class esri.tasks.locationproviders.LocationProviderClientBase extends esri.tasks.locationproviders.LocationProviderBase {
    /** The Spatial Reference of the input geometries. */
    inSpatialReference: esri.SpatialReference;
  }
  export = esri.tasks.locationproviders.LocationProviderClientBase;

  /** (Beta at v3.12) The base class for Location Providers that use a remote service to locate geometries. */
  class esri.tasks.locationproviders.LocationProviderRemoteBase extends esri.tasks.locationproviders.LocationProviderBase {
  }
  export = esri.tasks.locationproviders.LocationProviderRemoteBase;

  /** (Beta at v3.12) The LocatorLocationProvider class uses a geocode service through the esri.tasks.Locator object to generate or locate geometries using fields in the graphics that contain Street address information */
  export class LocatorLocationProvider extends esri.tasks.locationproviders.LocationProviderRemoteBase {
    /** A mapping that defines the esri.tasks.Locator Address fields to the attribute name in the esri.Graphic object. */
    addressFields: any;
    /** An instance of a esri.tasks.Locator object. */
    locator: esri.tasks.Locator;
    /**
     * Creates a new instance of the LocationProvider_esri.tasks.Locator object.
     * @param options Define the properties to use when creating the class.
     */
    constructor(options: any);
  }

  /** (Beta at v3.12) The QueryTaskLocationProvider performs a query against a ArcGIS Feature service or esri.Map service layer based on common fields that are present in both the data and the ArcGIS layer. */
  export class QueryTaskLocationProvider extends esri.tasks.locationproviders.LocationProviderRemoteBase {
    /** A query parameter object that will be used to query the ArcGIS layer. */
    queryParameters: any;
    /** An instance of a QueryTask. */
    queryTask: esri.tasks.QueryTask;
    /** Set to true when querying a field that contains unicode characters. */
    unicode: boolean;
    /** A mapping of the fields in the data and the ArcGIS layer to use to perform a join. */
    whereFields: any;
    /**
     * Creates a new instance of the QueryTaskLocationProvider object.
     * @param features An array of esri.Graphic objects.
     * @param options Define the properties to use when creating the class.
     */
    constructor(features: esri.Graphic[], options?: any);
  }

  /** (Beta at v3.12) The StandardGeographyQueryLocationProvider class uses the Geoenrichment service to generate geometries by querying the standard geography layers. */
  export class StandardGeographyQueryLocationProvider extends esri.tasks.locationproviders.LocationProviderRemoteBase {
    /** A template to be used to build the query for Standard Geography query. */
    geographyQueryTemplate: string;
    /** An object that specifies the various parameters to use in the Standard Geography query. */
    queryParameters: any;
    /** An instance of the esri.tasks.geoenrichment.StandardGeographyesri.tasks.QueryTask class. */
    standardGeographyQueryTask: esri.tasks.geoenrichment.StandardGeographyesri.tasks.QueryTask;
    /**
     * Creates a new instance of the StandardGeographyQueryLocationProvider object.
     * @param options Define the properties to use when creating the class.
     */
    constructor(options: esri.StandardGeographyQueryLocationProviderOptions);
  }
}
declare namespace esri.toolbars {

  /** Toolbar that supports functionality to create new geometries by drawing them: points (POINT or MULTI_POINT), lines (LINE, POLYLINE, or FREEHAND_POLYLINE), polygons (FREEHAND_POLYGON or POLYGON), or rectangles (EXTENT). */
  export class Draw {
    /** Draws an arrow. */
    static ARROW: any;
    /** Draws a circle. */
    static CIRCLE: any;
    /** Draws an arrow that points down. */
    static DOWN_ARROW: any;
    /** Draws an ellipse. */
    static ELLIPSE: any;
    /** Draws an extent box. */
    static EXTENT: any;
    /** Draws a freehand polygon. */
    static FREEHAND_POLYGON: any;
    /** Draws a freehand polyline. */
    static FREEHAND_POLYLINE: any;
    /** Draws an arrow that points left. */
    static LEFT_ARROW: any;
    /** Draws a line. */
    static LINE: any;
    /** Draws a Multipoint. */
    static MULTI_POINT: any;
    /** Draws a point. */
    static POINT: any;
    /** Draws a polygon. */
    static POLYGON: any;
    /** Draws a polyline. */
    static POLYLINE: any;
    /** Draws a rectangle. */
    static RECTANGLE: any;
    /** Draws an arrow that points right. */
    static RIGHT_ARROW: any;
    /** Draws a triangle. */
    static TRIANGLE: any;
    /** Draws an arrow that points up. */
    static UP_ARROW: any;
    /** esri.symbols.Symbol to be used when drawing a esri.geometry.Polygon or Extent. */
    fillSymbol: SimpleFillesri.symbols.Symbol;
    /** esri.symbols.Symbol to be used when drawing a Polyline. */
    lineSymbol: esri.symbols.Simpleesri.symbols.Lineesri.symbols.Symbol;
    /** esri.symbols.Symbol to be used when drawing a esri.geometry.Point or Multipoint. */
    markerSymbol: Simpleesri.symbols.Markeresri.symbols.Symbol;
    /** When set to false, the geometry is modified to be topologically correct. */
    respectDrawingVertexOrder: boolean;
    /**
     * Creates a new Draw object.
     * @param map esri.Map the toolbar is associated with.
     * @param options Parameters that define the functionality of the draw toolbar.
     */
    constructor(map: esri.Map, options?: esri.DrawOptions);
    /**
     * Activates the toolbar for drawing geometries.
     * @param geometryType The type of geometry drawn.
     * @param options Options that define the functionality of the draw toolbar.
     */
    activate(geometryType: string, options?: any): void;
    /** Deactivates the toolbar and reactivates map navigation. */
    deactivate(): void;
    /** Finishes drawing the geometry and fires the onDrawEnd event. */
    finishDrawing(): void;
    /**
     * Sets the fill symbol.
     * @param fillesri.symbols.Symbol The fill symbol.
     */
    setFillSymbol(fillSymbol: FillSymbol): void;
    /**
     * Sets the line symbol.
     * @param lineesri.symbols.Symbol The line symbol.
     */
    setLineSymbol(lineSymbol: LineSymbol): void;
    /**
     * Sets the marker symbol.
     * @param markeresri.symbols.Symbol The marker symbol.
     */
    setMarkerSymbol(markerSymbol: MarkerSymbol): void;
    /**
     * Sets whether the polygon geometry should be modified to be topologically correct.
     * @param set When set to false, the geometry is modified to be topologically correct.
     */
    setRespectDrawingVertexOrder(set: boolean): void;
    /** Fired when the user has ended drawing. */
    on(type: "draw-complete", listener: (event: { geographicGeometry: esri.geometry.Geometry; geometry: esri.geometry.Geometry; target: Draw }) => void): esri.Handle;
    /** Fires when drawing is complete. */
    on(type: "draw-end", listener: (event: { geometry: esri.geometry.Geometry; target: Draw }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The Edit toolbar is a helper class that provides functionality to move graphics or modify individual vertices, i.e., edit the geometry of existing graphics. */
  export class Edit {
    /** When a textesri.symbols.Symbol point is in edit mode, double-clicking leads to text editing mode, which is a text box where uses can change the text content. */
    static EDIT_TEXT: any;
    /** Display and edit vertices of a esri.geometry.Polyline, esri.geometry.Polygon, or Multipoint. */
    static EDIT_VERTICES: any;
    /** Move graphic to a new location on the map. */
    static MOVE: any;
    /** Rotate the graphic. */
    static ROTATE: any;
    /** Scale or resize a graphic. */
    static SCALE: any;
    /**
     * Creates a new Edit object.
     * @param map esri.Map the toolbar is associated with.
     * @param options Optional parameters.
     */
    constructor(map: esri.Map, options?: esri.EditOptions);
    /**
     * Activates the toolbar to edit the supplied graphic.
     * @param tool Specify the active tool(s).
     * @param graphic The graphic to edit.
     * @param options See the object specifications table below for the structure of the  options  object.
     */
    activate(tool: string, graphic: esri.Graphic, options?: any): void;
    /** Deactivates the toolbar. */
    deactivate(): void;
    /** An object with the following properties that describe the current state. */
    getCurrentState(): any;
    /** Refreshes the internal state of the toolbar. */
    refresh(): void;
    /** Activates the toolbar for editing geometries. */
    on(type: "activate", listener: (event: { graphic: esri.Graphic; tool: string; target: Edit }) => void): esri.Handle;
    /** Deactivates the toolbar and reactivates map navigation. */
    on(type: "deactivate", listener: (event: { graphic: esri.Graphic; info: any; tool: string; target: Edit }) => void): esri.Handle;
    /** Fires when a graphic is clicked. */
    on(type: "graphic-click", listener: (event: { graphic: esri.Graphic; info: any; target: Edit }) => void): esri.Handle;
    /** Fires when the user begins to move a graphic. */
    on(type: "graphic-first-move", listener: (event: { graphic: esri.Graphic; target: Edit }) => void): esri.Handle;
    /** Fired continuously as the graphic moves. */
    on(type: "graphic-move", listener: (event: { graphic: esri.Graphic; transform: any; target: Edit }) => void): esri.Handle;
    /** Fired when the mouse button is pressed down on the graphic, usually while moving a graphic. */
    on(type: "graphic-move-start", listener: (event: { graphic: esri.Graphic; target: Edit }) => void): esri.Handle;
    /** Fired when the mouse button is released, usually after moving the graphic. */
    on(type: "graphic-move-stop", listener: (event: { graphic: esri.Graphic; transform: any; target: Edit }) => void): esri.Handle;
    /** Fires continuously as a graphic is rotated. */
    on(type: "rotate", listener: (event: { graphic: esri.Graphic; info: any; target: Edit }) => void): esri.Handle;
    /** Fires when the user begins to drag a handle to rotate the graphic. */
    on(type: "rotate-first-move", listener: (event: { graphic: esri.Graphic; target: Edit }) => void): esri.Handle;
    /** Fires when a user clicks on the handle to begin rotating a graphic. */
    on(type: "rotate-start", listener: (event: { graphic: esri.Graphic; target: Edit }) => void): esri.Handle;
    /** Fires when the mouse button is released from the rotate handle to finish rotating the graphic. */
    on(type: "rotate-stop", listener: (event: { graphic: esri.Graphic; info: any; target: Edit }) => void): esri.Handle;
    /** Fires continuously as the graphic is being scaled. */
    on(type: "scale", listener: (event: { graphic: esri.Graphic; info: any; target: Edit }) => void): esri.Handle;
    /** Fires when the user begins to drag a handle to scale the graphic. */
    on(type: "scale-first-move", listener: (event: { graphic: esri.Graphic; target: Edit }) => void): esri.Handle;
    /** Fires when a user clicks on the handle to scale or resize a graphic. */
    on(type: "scale-start", listener: (event: { graphic: esri.Graphic; target: Edit }) => void): esri.Handle;
    /** Fires when the mouse button is released from the scale handle to finish scaling the graphic. */
    on(type: "scale-stop", listener: (event: { graphic: esri.Graphic; info: any; target: Edit }) => void): esri.Handle;
    /** Fired after a new vertex is added to a polyline or polygon or a new point is added to a multipoint. */
    on(type: "vertex-add", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: Edit }) => void): esri.Handle;
    /** Fired when the mouse button is clicked on the vertex of a polyline or polygon or a point in a multipoint. */
    on(type: "vertex-click", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: Edit }) => void): esri.Handle;
    /** Fired after a vertex(polyline, polygon) or point(multipoint) is deleted. */
    on(type: "vertex-delete", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: Edit }) => void): esri.Handle;
    /** Fired when the user begins to move the vertex of a polyline or polygon or a point of a multipoint. */
    on(type: "vertex-first-move", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: Edit }) => void): esri.Handle;
    /** Fires as the mouse exits a vertex(polyline, polygon) or a point(multipoint). */
    on(type: "vertex-mouse-out", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: Edit }) => void): esri.Handle;
    /** Fired when the mouse moves over a vertex (polyline, polygon) or point (multipoint). */
    on(type: "vertex-mouse-over", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: Edit }) => void): esri.Handle;
    /** Fired continuously as the user is moving a vertex (polyline, polygon) or point (multipoint). */
    on(type: "vertex-move", listener: (event: { graphic: esri.Graphic; transform: any; vertexinfo: any; target: Edit }) => void): esri.Handle;
    /** Fired when the mouse button is pressed down on a vertex (polyline, polygon) or point (multipoint). */
    on(type: "vertex-move-start", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: Edit }) => void): esri.Handle;
    /** Fired when the mouse button is released from a vertex (polyline, polygon) or point(multipoint). */
    on(type: "vertex-move-stop", listener: (event: { graphic: esri.Graphic; transform: any; vertexinfo: any; target: Edit }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** Toolbar that supports basic navigation such as pan and zoom. */
  export class Navigation {
    /** esri.Map is panned. */
    static PAN: any;
    /** esri.Map zooms in. */
    static ZOOM_IN: any;
    /** esri.Map zooms out. */
    static ZOOM_OUT: any;
    /**
     * Creates a new Navigation object.
     * @param map esri.Map the toolbar is associated with.
     */
    constructor(map: Map);
    /**
     * Activates the toolbar for map navigation.
     * @param navType The navigation type.
     */
    activate(navType: string): void;
    /** Deactivates the toolbar and reactivates map navigation. */
    deactivate(): void;
    /** When "true", map is at the first extent. */
    isFirstExtent(): boolean;
    /** When "true", map is at the last extent. */
    isLastExtent(): boolean;
    /**
     * Set the SimpleFillesri.symbols.Symbol used for the rubber band zoom.
     * @param symbol The SimpleFillesri.symbols.Symbol used for the rubber band zoom.
     */
    setZoomSymbol(symbol: Symbol): void;
    /** Zoom to full extent of base layer. */
    zoomToFullExtent(): void;
    /** Zoom to next extent in extent history. */
    zoomToNextExtent(): void;
    /** Zoom to previous extent in extent history. */
    zoomToPrevExtent(): void;
    /** Fires when the extent history changes. */
    on(type: "extent-history-change", listener: (event: { target: Navigation }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
}
declare namespace esri.virtualearth {
  /** The Bing Maps address details. */
  class esri.virtualearth.VEAddress {
    /** Specifies the street line of an address. */
    addressLine: string;
    /** Specifies the subdivision name within the country or region for an address. */
    adminDistrict: string;
    /** Specifies the country or region name of an address. */
    countryRegion: string;
    /** Specifies the higher level administrative subdivision used in some countries or regions. */
    district: string;
    /** Contains the complete address. */
    formattedAddress: string;
    /** Specifies the populated place for the address. */
    locality: string;
    /** Specifies the post code, postal code, or ZIP Code of an address. */
    postalCode: string;
    /** Specifies the postal city of an address. */
    postalTown: string;
  }
  export = esri.virtualearth.VEAddress;

  /** Represents a Bing Maps address and its location. */
  class esri.virtualearth.VEGeocodeResult {
    /** Specifies address properties for the result. */
    address: esri.virtualearth.VEAddress;
    /** Best extent for displaying the result. */
    bestView: esri.geometry.Extent;
    /** Contains values that indicate the geocode method used to match the location to the map. */
    calculationMethod: string;
    /** Value indicating how confident the service is about the result. */
    confidence: string;
    /** Contains a display name for the result. */
    displayName: string;
    /** Further refines the geocode results that have been returned. */
    entityType: string;
    /** The X and Y coordinates of the result in decimal degrees. */
    location: esri.geometry.Point;
    /** An array of values that indicate the geocoding level of the location match. */
    matchCodes: string;
  }
  export = esri.virtualearth.VEGeocodeResult;

  /** Bing Maps geocoder. */
  class VEesri.dijit.Geocoder {
    /** Specifies the culture in which to return results. */
    culture: string;
    /**
     * Creates a new VEesri.dijit.Geocoder object.
     * @param options See options list for parameters.
     */
    constructor(options: esri.VEGeocoderOptions);
    /**
     * Sends a geocode request to Bing Maps to find candidates for a single address specified in the query argument.
     * @param query The address to locate.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    addressToLocations(query: string, callback?: Function, errback?: Function): any;
    /**
     * Sets the culture in which to return results.
     * @param culture The culture value.
     */
    setCulture(culture: string): void;
    /** Fires when VEGeocode.addressToLocation() has completed. */
    on(type: "address-to-locations-complete", listener: (event: { geocodeResults: esri.virtualearth.VEGeocodeResult[]; target: VEesri.dijit.Geocoder }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: VEesri.dijit.Geocoder }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = VEesri.dijit.Geocoder;

  /** Bing Maps tiled layer. */
  class VETiledesri.layers.Layer extends TiledMapServiceesri.layers.Layer {
    /** Bing Maps Aerial layer. */
    static MAP_STYLE_AERIAL: any;
    /** Bing Maps Aerial with Labels layer. */
    static MAP_STYLE_AERIAL_WITH_LABELS: any;
    /** Bing Maps Roads layer. */
    static MAP_STYLE_ROAD: any;
    /** The copyright text. */
    copyright: string;
    /** Specifies the culture in which to return results. */
    culture: string;
    /** Bing Maps style. */
    mapStyle: string;
    /**
     * Creates a new VETiledesri.layers.Layer object.
     * @param options See options list for parameters.
     */
    constructor(options: esri.VETiledLayerOptions);
    /**
     * Sets the culture in which to return results.
     * @param culture The culture value.
     */
    setCulture(culture: string): void;
    /**
     * Sets the Bing Maps style.
     * @param style Bing Maps style.
     */
    setMapStyle(style: string): void;
    /** Fires when the map style is changed. */
    on(type: "map-style-change", listener: (event: { target: VETiledesri.layers.Layer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = VETiledesri.layers.Layer;
}
declare namespace esri.workers {
  /** The WorkerClient is the primary entry point for interfacing with background Workers. */
  export class WorkerClient {
    /** Return Deferreds rather than Promises from postMessage. */
    returnDeferreds: boolean;
    /** Reference to the actual HTML5 Worker instance. */
    worker: Worker;
    /**
     * Creates a WorkerClient.
     * @param path A require style string path to the worker script.
     * @param deferreds Whether to return Deferreds rather than Promises from methods.
     */
    constructor(path: string, deferreds?: boolean);
    /**
     * Adds a function to the worker that takes the worker's internal calls to postMessage and calls this function before sending the original message back to the main thread.
     * @param module A require path to a worker-compatible script containing the callback function.
     * @param name The name of the callback function.
     */
    addWorkerCallback(module: string, name?: string): any;
    /**
     * Import any script or function into the worker.
     * @param paths An AMD require path to a script file to import.
     */
    importScripts(paths: string): any;
    /**
     * Import any script or function into the worker.
     * @param paths An AMD require path to a script file to import.
     */
    importScripts(paths: string[]): any;
    /**
     * Posts a message to the worker.
     * @param msg The data to post to the worker.
     * @param transfers An optional array of transferable objects.
     */
    postMessage(msg: any, transfers?: any[]): any;
    /**
     * Posts a message to the worker.
     * @param msg The data to post to the worker.
     * @param transfers An optional array of transferable objects.
     */
    postMessage(msg: any[], transfers?: any[]): any;
    /**
     * Sets the worker that is used in the Worker Client.
     * @param paths An AMD require path to a script file to import.
     * @param path A require style string path to the worker script.
     */
    setWorker(paths: string, path: string): void;
    /**
     * Sets the worker that is used in the Worker Client.
     * @param paths An AMD require path to a script file to import.
     * @param path A require style string path to the worker script.
     */
    setWorker(paths: string[], path: string): void;
    /** Terminates the worker and cancels all unresolved messages. */
    terminate(): void;
  }
}
