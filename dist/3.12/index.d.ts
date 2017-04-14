declare namespace esriTypes {

  export interface AGSMouseEvent extends MouseEvent {
    graphic?: Graphic;
    mapPoint: geometry.Point;
    screenPoint: geometry.ScreenPoint;
  }
  export interface AddOptions {
    /** The features that were added to the feature layer. */
    addedGraphics?: Graphic[];
    /** The feature layer where the new feature(s) are added. */
    featureLayer?: layers.FeatureLayer;
  }
  export interface AggregatePointsOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** A field name from pointLayer based on which the points will be grouped. */
    groupByField?: string;
    /** When true, the polygons that have no points within them will be returned in the output. */
    keepBoundariesWithNoPoints?: boolean;
    /** Reference to the map object. */
    map?: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The point feature layer that will be aggregated into the polygons in the polygon feature layer. */
    pointLayer: layers.FeatureLayer;
    /** The polygon layer to be shown selected in in the Choose area menu. */
    polygonLayer: layers.FeatureLayer;
    /** An array of feature layer candidates to be selected as the input polygon layer. */
    polygonLayers: layers.FeatureLayer[];
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
    imageParameters?: layers.ImageParameters;
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
    imageServiceParameters?: layers.ImageServiceParameters;
    /** The template that defines the content to display in the map info window when the user clicks on a raster. */
    infoTemplate?: InfoTemplate;
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
    map: Map;
  }
  export interface BasemapGalleryOptions {
    /** List of basemap layer ids in the current map. */
    basemapIds?: string[];
    /** An array of user-defined basemaps to display in the BasemapGallery. */
    basemaps?: dijit.Basemap[];
    /** Specify an ArcGIS.com group that contains web maps that will be used as basemaps in the gallery. */
    basemapsGroup?: any;
    /** Specify your Bing Maps key if the basemap group you want to display in the gallery contains bing basemaps. */
    bingMapsKey?: string;
    /** Reference to the map. */
    map: Map;
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
    fullExtent?: geometry.Extent;
    /** Specify the initial extent of the layer. */
    initialExtent?: geometry.Extent;
    /** Set to true if the layer is a reference layer and should be drawn on top of all other layers in the map. */
    isReference?: boolean;
    /** Initial opacity or transparency of the basemap layer. */
    opacity?: number;
    /** Specify subDomains where tiles are served to speed up tile retrieval (using subDomains gets around the browser limit of the max number of concurrent requests to a domain). */
    subDomains?: string[];
    /** Define the tile info for the layer including lods, rows, cols, origin and spatial reference. */
    tileInfo?: layers.TileInfo;
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
    layers: dijit.BasemapLayer[];
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
    /** Map object that this dijit is associated with. */
    map: Map;
    /** Class used for styling the widget. */
    theme?: string;
    /** Whether the widget is visible by default. */
    visible?: boolean;
  }
  export interface BookmarksOptions {
    /** An array of dijit.BookmarkItem objects or a json object with the dijit.BookmarkItem format to initially display in the bookmark widget. */
    bookmarks?: dijit.BookmarkItem[];
    /** When true, users can add, remove and edit bookmark items. */
    editable?: boolean;
    /** Reference to the map. */
    map: Map;
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
    radiusUnit?: Units;
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
    radiusUnit?: Units;
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
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
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
    inputLayer: layers.FeatureLayer;
    /** The geometry type of the input layer. */
    inputType?: string;
    /** Reference to the map object. */
    map?: Map;
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
    addedGraphics?: Graphic[];
    /** The feature layer that contains the cut feature(s). */
    featureLayer?: layers.FeatureLayer;
    /** The updated feature(s). */
    postUpdatedGraphics?: Graphic[];
    /** The feature(s) before the cut operation is performed. */
    preUpdatedGraphics?: Graphic[];
  }
  export interface DataAdapterFeatureLayerOptions {
    /** The query parameters to use in retrieving the data through the DataAdapter. */
    dataAdapterQuery: any;
    /** An instance of the LocationProvider class. */
    locationProvider: tasks.locationproviders.LocationProviderBase;
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
    deletedGraphics?: Graphic[];
    /** The feature layer from which the feature(s) are removed. */
    featureLayer?: layers.FeatureLayer;
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
    fromSymbol?: symbols.PictureMarkerSymbol;
    /** The symbol that displays when the from location is dragged to a new location. */
    fromSymbolDrag?: symbols.PictureMarkerSymbol;
    /** Define optional geocoder options view the dijit.Geocoder help for details on the object properties. */
    geocoderOptions?: any;
    /** List of dijit.Geocoder widgets used for each stop. */
    geocoders?: dijit.Geocoder[];
    /** If available, this geometry service is used to provide latitude/longitude values for stops whose reverse geocoding did not return an address (Added at v3.11). */
    geometryTaskUrl?: string;
    /** Reference to the map object. */
    map: Map;
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
    routeParams?: tasks.RouteParameters;
    /** Define the symbol used to draw the route on the map. */
    routeSymbol?: symbols.SimpleLineSymbol;
    /** Specify the service that will be used to calculate directions. */
    routeTaskUrl?: string;
    /** Define the info template for the popup that appears when the popup for a route segment is displayed. */
    segmentInfoTemplate?: InfoTemplate;
    /** Specify the symbol used to render the individual route segments that display on the map when a direction step is clicked. */
    segmentSymbol?: symbols.SimpleLineSymbol;
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
    stopGraphics?: Graphic[];
    /** An array of points that define the stop locations. */
    stops?: any;
    /** Define the info template for the popup that appears when a stop is clicked. */
    stopsInfoTemplate?: InfoTemplate;
    /** The symbol that displays on the map for the locations between the origin and final destination locations. */
    stopSymbol?: symbols.PictureMarkerSymbol;
    /** The symbol that displays when an intermediate location is dragged to a new location. */
    stopSymbolDrag?: symbols.PictureMarkerSymbol;
    /** List of graphics used to display the text over the point marker. */
    textGraphics?: Graphic[];
    /** The text color for the text that appears for each destination. */
    textSymbolColor?: Color;
    /** The font used for the text that displays on the map for each stop location. */
    textSymbolFont?: symbols.Font;
    /** Define an x and/or y offset for the text symbols that are used for the stop locations on the map. */
    textSymbolOffset?: any;
    /** Specify a theme for the widget. */
    theme?: string;
    /** The symbol that is used to denote the final destination location on the map. */
    toSymbol?: symbols.PictureMarkerSymbol;
    /** The symbol that displays when an final destination location is dragged to a new location. */
    toSymbolDrag?: symbols.PictureMarkerSymbol;
    /** When true, real-time traffic is used to plan the route. */
    traffic?: boolean;
    /** The traffic layer used for real-time traffic. */
    trafficLayer?: layers.ArcGISDynamicMapServiceLayer;
  }
  export interface DissolveBoundariesOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** An array of field names based on which polygons are merged. */
    dissolveFields?: string[];
    /** The layer containing polygon features that will be dissolved. */
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
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
    backgroundColor?: Color;
    /** The shape to be used for the dot. */
    dotShape?: string;
    /** The size of the dot in pixels. */
    dotSize?: number;
    /** The value that a dot represents. */
    dotValue: number;
    /** An array of objects, where each object defines a field to be mapped and its color. */
    fields: any[];
    /** The line symbol to use on the outline of the feature. */
    outline?: symbols.LineSymbol;
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
    ghostLineSymbol?: symbols.LineSymbol;
    /** Marker symbol used to display the insertable vertices. */
    ghostVertexSymbol?: symbols.MarkerSymbol;
    /** If users want to place the text symbol editor to a user defined HTML element. */
    textSymbolEditorHolder?: any;
    /** When true, if the geometry is re-sized the aspect ration will be preserved. */
    uniformScaling?: boolean;
    /** Marker symbol used to draw the vertices. */
    vertexSymbol?: symbols.MarkerSymbol;
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
    /** When true, Travel Modes (Driving Time) is enabled for inputLayer with point geometries (esriGeometryPoint). */
    enableTravelModes?: boolean;
    /** The input feature layer to enrich with new data. */
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
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
    featureLayers: layers.FeatureLayer[];
    /** An array for feature layers to be extracted. */
    inputLayers?: layers.FeatureLayer[];
    /** Reference to the map object. */
    map?: Map;
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
    infoTemplate?: InfoTemplate;
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
    source?: layers.LayerSource;
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
    /** The featureLayer that the table is associated with. */
    featureLayer: layers.FeatureLayer;
    /** Columns to hide by default using the dGrid ColumnHider extension. */
    hiddenFields?: string[];
    /** A reference to the Map. */
    map?: Map;
    /** A dGrid property. */
    noDataMessage?: string;
    /** A dGrid property. */
    selectionMode?: string;
  }
  export interface FindHotSpotsOptions {
    /** An array of feature layer candidates to be selected as the aggregation polygon layer. */
    aggregationPolygonLayers: layers.FeatureLayer[];
    /** The numeric field in the AnalysisLayer that will be analyzed. */
    analysisField?: string;
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The feature layer for which hot spots will be calculated. */
    analysisLayer: layers.FeatureLayer;
    /** An array of feature layer candidates to be selected as the bounding polygon layer. */
    boundingPolygonLayers: layers.FeatureLayer[];
    /** When true, make process info to get analysis report. */
    isProcessInfo?: boolean;
    /** Reference to the map object. */
    map?: Map;
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
    analysisLayer: layers.FeatureLayer;
    /** When true, Travel Modes ( Driving Distance, Driving Time) are enabled for analysisLayer with point geometries (esriGeometryPoint). */
    enableTravelModes?: boolean;
    /** Reference to the map object. */
    map?: Map;
    /** The maximum number of nearest locations to find for each feature in analysisLayer. */
    maxCount?: number;
    /** The feature layer to be shown selected in the "1. */
    nearLayer: layers.FeatureLayer;
    /** An array of near layer candidates. */
    nearLayers: layers.FeatureLayer[];
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
    /** Color used for the arc indicator on the gauge. */
    color?: string;
    /** Name of the attribute field used to drive the gauge. */
    dataField?: string;
    /** Either "value" or "percentage". */
    dataFormat?: string;
    /** Name of the attribute field used to display a feature name on the gauge. */
    dataLabelField?: string;
    /** When true, the gauge is created with JSON from an ArcGIS Online webmap. */
    fromWebmap?: boolean;
    /** A layers.GraphicsLayer or layers.FeatureLayer used to drive the gauge. */
    layer?: layers.GraphicsLayer;
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
    /** Prior to ArcGIS Server 10.2, map server/feature service only sample 1000 features to generate the renderer when using GenerateRenderer operation, which mean if there are more than 1000 features, it may run into the case that some feature will not be categorized into any breaks/unique values. */
    checkValueRange?: boolean;
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
  }
  export interface GeoRSSLayerOptions {
    /** The template used to display popup window for identify operation. */
    infoTemplate?: InfoTemplate;
    /** The output spatial reference for the GeoRSSLayer. */
    outSpatialReference?: SpatialReference;
    /** The default symbol use to display point features. */
    pointSymbol?: symbols.Symbol;
    /** The default symbol used to display polygon features. */
    polygonSymbol?: symbols.Symbol;
    /** The default symbol used to display polyline features. */
    polylineSymbol?: symbols.Symbol;
  }
  export interface GeocoderOptions {
    /** By default, the dijit.Geocoder widget uses the Esri World tasks.Locator to find search locations. */
    arcgisGeocoder?: any;
    /** When false, the geocoder will not display the auto-complete results menu. */
    autoComplete?: boolean;
    /** When false, the geolocator will not navigate to the result after selection or search. */
    autoNavigate?: boolean;
    /** When false, the geocoder menu will not be displayed when more than one geocoder is set. */
    geocoderMenu?: boolean;
    /** Defines the geocoders that will be used by the dijit.Geocoder widget. */
    geocoders?: any[];
    /** Specify a graphicsLayer to use when  highlightSymbol is true. */
    graphicsLayer?: layers.GraphicsLayer;
    /** Indicates whether to show a graphic at a selected location. */
    highlightLocation?: boolean;
    /** Reference to the map. */
    map: Map;
    /** Maximum number of results to return. */
    maxLocations?: number;
    /** Minimum number of characters entered into the search field before querying for results. */
    minCharacters?: number;
    /** Number of milliseconds before querying for results will begin. */
    searchDelay?: number;
    /** When false, the geocoder will not show search suggestions while typing. */
    showResults?: boolean;
    /** symbols.Symbol to use when highlightLocation is true. */
    symbol?: symbols.Symbol;
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
    infoTemplate?: InfoTemplate;
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
    layers?: layers.Layer[];
    /** With a stream layer, when the number of points on the map exceeds the maximum number allowed, this histogram will start removing bins at the beginning of the array if in the "show_partial" mode. */
    mode?: string;
    /** Sets resolution for histogram slider (seconds/minutes/hours/etc) using Esri date formats. */
    timeInterval?: string;
  }
  export interface HomeButtonOptions {
    /** The extent used to zoom to when clicked. */
    extent?: geometry.Extent;
    /** Map object that this dijit is associated with. */
    map: Map;
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
    outSR?: SpatialReference;
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
    layers: layers.Layer[];
    /** The number of pixels to place the tool from the left of the map. */
    left?: number;
    /** Map object that this dijit is associated with. */
    map: Map;
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
    map: Map;
    /** When true the legend will update with every scale change and displays only the layers and sub layers that are visible in the current map scale. */
    respectCurrentMapScale?: boolean;
  }
  export interface LocateButtonOptions {
    /** Centers the map to the location when a new position is returned. */
    centerAt?: boolean;
    /** The HTML5 Geolocation Position options for locating. */
    geolocationOptions?: any;
    /** If highlightLocation is on and this property is set then a graphic will be added to this layer instead of map.graphics. */
    graphicsLayer?: layers.GraphicsLayer;
    /** If true, the users location will be highlighted with a point. */
    highlightLocation?: boolean;
    /** The infoTemplate used for the highlight graphic. */
    infoTemplate?: InfoTemplate;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** The scale to zoom to when a users location has been found. */
    scale?: number;
    /** Sets the maps scale when a new position is returned. */
    setScale?: boolean;
    /** The symbol used on the highlight graphic to highlight the users location on the map. */
    symbol?: symbols.Symbol;
    /** Class used for styling the widget. */
    theme?: string;
    /** When enabled, the button becomes a toggle that creates an event to watch for location changes. */
    useTracking?: boolean;
    /** Whether the widget is visible by default. */
    visible?: boolean;
  }
  export interface MapImageOptions {
    /** Specfiy an extent for the image. */
    extent?: geometry.Extent;
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
    extent?: geometry.Extent;
    /** When true a fade effect is enabled for supported layers. */
    fadeOnZoom?: boolean;
    /** When true, for maps that contain tiled map service layers, you are guaranteed to have the initial extent defined using the extent constructor option shown completely on the map. */
    fitExtent?: boolean;
    /** When the mapNavigation mode is set to 'css-transforms', CSS3 transforms will be used for map navigation when supported by the browser. */
    force3DTransforms?: boolean;
    /** By default the map creates and uses an out-of-the-box esri/dijit/Popup. */
    infoWindow?: InfoWindowBase;
    /** If provided, the map is initialized with the specified levels of detail. */
    lods?: layers.LOD[];
    /** Display the esri logo on the map. */
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
    defaultAreaUnit?: Units;
    /** The default length unit for the measure distance tool. */
    defaultLengthUnit?: Units;
    /** Allows the user to immediately measure previously-created geometry on dijit creation. */
    geometry?: any;
    /** Line symbol used to draw the lines for the measure line and measure distance tools. */
    lineSymbol?: symbols.SimpleLineSymbol;
    /** Reference to the map. */
    map: Map;
    /** Marker symbol used to draw the points for the measure line tool. */
    pointSymbol?: symbols.MarkerSymbol;
  }
  export interface MergeLayersOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The feature layer to be merged with the mergeLayer. */
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
    /** An array of feature layer candidates to be selected as the merge layer. */
    mergeLayers: layers.FeatureLayer[];
    /** An array of values that describe how fields from the mergeLayer are to be modified. */
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
  export interface NAOutputPolygon {
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
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** An array of feature layers to be overlaid with inputLayer. */
    overlayLayer: layers.FeatureLayer[];
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
    /** Specifies which corner of the map to attach the OverviewMap dijit. */
    attachTo?: string;
    /** Specify the base layer for the overview map. */
    baseLayer?: layers.Layer;
    /** Fill color for the extent rectangle. */
    color?: string;
    /** The ratio between the size of the overview map and the extent rectangle displayed on the overview map. */
    expandFactor?: number;
    /** Height of the overview map dijit in screen pixels. */
    height?: number;
    /** Unique identifier for the dijit. */
    id?: string;
    /** Reference to the map. */
    map: Map;
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
    fillSymbol?: symbols.FillSymbol;
    /** When true, the feature is highlighted, set to false to disable highlighting. */
    highlight?: boolean;
    /** Define the symbol used to highlight line features. */
    lineSymbol?: symbols.LineSymbol;
    /** Specify the margin (in pixels) to leave to the left of the popup window when it is maximized. */
    marginLeft?: number;
    /** Specify the margin (in pixels) to leave at the top of the popup window when it is maximized. */
    marginTop?: number;
    /** Define the marker symbol used to highlight point features. */
    markerSymbol?: symbols.MarkerSymbol;
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
    fillSymbol?: symbols.FillSymbol;
    /** Number of milliseconds after which the popup window will be hidden when visibleWhenEmpty is false and there are no features to be displayed. */
    hideDelay?: boolean;
    /** Indicates whether popup should highlight features. */
    highlight?: boolean;
    /** Indicates whether a feature should remain highlighted after the user closes the popup window. */
    keepHighlightOnHide?: boolean;
    /** Define the symbol used to highlight line features. */
    lineSymbol?: symbols.LineSymbol;
    /** Specify the margin (in pixels) to leave to the left of the popup window when it is maximized. */
    marginLeft?: number;
    /** Specify the margin (in pixels) to leave at the top of the popup window when it is maximized. */
    marginTop?: number;
    /** Define the marker symbol used to highlight point features. */
    markerSymbol?: symbols.MarkerSymbol;
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
    map?: Map;
    /** An optional array of user-defined templates. */
    templates?: tasks.PrintTemplate[];
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
    /** A layers.FeatureLayer or array of FeatureLayers to attach the processor to. */
    layers?: layers.FeatureLayer[];
    /** Uses all FeatureLayers associated with the map in the processor. */
    map?: Map;
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
    map: Map;
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
    map: Map;
    /** When alwaysSnap is set to false use this option to define the key users press to enable snapping. */
    snapKey?: any;
    /** Define a symbol for the snapping location. */
    snapPointSymbol?: symbols.SimpleMarkerSymbol;
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
    /** A layers.FeatureLayer or array of FeatureLayers to attach the processor to. */
    layers?: layers.FeatureLayer[];
    /** Uses all FeatureLayers associated with the map in the processor. */
    map?: Map;
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
    /** An instance of the StandardGeographyQuery class. */
    standardGeographyQueryTask: tasks.geoenrichment.StandardGeographyQueryTask;
  }
  export interface StreamLayerOptions1 {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Where clause to use as definition expression for layer. */
    definitionExpression?: string;
    /** The extent to use as the spatial filter for the layer. */
    geometryDefinition?: geometry.Extent;
    /** Maximum number of observations to show for each unique track. */
    maximumTrackPoints?: number;
    /** Rules for purging data from the layer to avoid overloading the browser with too many features. */
    purgeOptions?: any;
  }
  export interface StreamLayerOptions2 {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** The extent to use as the spatial filter for the layer. */
    geometryDefinition?: geometry.Extent;
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
    /** When true, Travel Modes (Driving Distance, Driving Time) are enabled for sumNearbyLayer with point geometries (esriGeometryPoint). */
    enableTravelModes?: boolean;
    /** A field of the summarizeLayer features that you can use to calculate statistics separately for each unique attribute value. */
    groupByField?: string;
    /** Reference to the map object. */
    map?: Map;
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
    summaryLayer?: layers.FeatureLayer;
    /** An array of possible feature layers summarizing toward. */
    summaryLayers: layers.FeatureLayer[];
    /** The point, line, or polygon feature layer from which distances will be measured to features in summarizeLayer. */
    sumNearbyLayer: layers.FeatureLayer;
    /** If true. */
    sumShape?: boolean;
    /** Type of units shown as the defeault value in the Find nearest features using a option. */
    units?: string;
  }
  export interface SummarizeWithinOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** A field name from summaryLayer that you can use to calculate statistics separately for each unique attribute value. */
    groupByField?: string;
    /** Reference to the map object. */
    map?: Map;
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
    /** A list of field names and statistical summary type that you wish to calculate for all features in SummaryLayer that are within each polygon in sumWithinLayer. */
    summaryFields?: string;
    /** The summary layer to be shown selected in in the Choose layer to summarize menu. */
    summaryLayer?: layers.FeatureLayer;
    /** An array of summarize layer candidates. */
    summaryLayers: layers.FeatureLayer[];
    /** The polygon feature layer to be summarized toward. */
    sumWithinLayer: layers.FeatureLayer;
  }
  export interface TemplatePickerOptions {
    /** Number of visible columns. */
    columns?: number;
    /** Defines the text to be displayed when the template picker does not have any templates to display. */
    emptyMessage?: string;
    /** Array of input feature layers. */
    featureLayers?: layers.FeatureLayer[];
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
    deletedGraphics?: Graphic[];
    /** The feature layer that contains the unioned feature(s). */
    featureLayer?: layers.FeatureLayer;
    /** The updated feature(s). */
    postUpdatedGraphics?: Graphic[];
    /** The feature(s) before the union operation is performed. */
    preUpdatedGraphics?: Graphic[];
  }
  export interface UpdateOptions {
    /** The feature layer that contains the updated feature(s). */
    featureLayer?: layers.FeatureLayer;
    /** The updated feature(s). */
    postUpdatedGraphics?: Graphic[];
    /** The feature(s) prior to the update. */
    preUpdatedGraphics?: Graphic[];
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
    fullExtent?: geometry.Extent;
    /** The layer id. */
    identifier?: string;
    /** The initial extent of the WMTS layer. */
    initialExtent?: geometry.Extent;
    /** Specify the layer style. */
    style?: string;
    /** A tile info object. */
    tileInfo?: layers.TileInfo;
    /** Define the tileMatrixSet for the layer. */
    tileMatrixSet?: string;
    /** The layer title. */
    title?: string;
  }
  export interface WMTSLayerOptions {
    /** A layers.WMTSLayerInfo object that when ResourceInfo options are not specified the map will display the first layer in the WMTS capabilities that matches the properties specified by WMTSLayerInfo. */
    layerInfo?: layers.WMTSLayerInfo;
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
    /** Define attribution information for the layer to be used by the dijit.Attribution widget. */
    copyright?: string;
    /** Specify the full extent of the layer. */
    fullExtent?: geometry.Extent;
    /** Specify the initial extent of the layer. */
    initialExtent?: geometry.Extent;
    /** When true, tile resampling is enabled. */
    resampling?: boolean;
    /** Number of levels beyond the last level where tiles are available. */
    resamplingTolerance?: number;
    /** Specify subDomains where tiles are served to speed up tile retrieval (using subDomains gets around the browser limit of the max number of concurrent requests to a domain). */
    subDomains?: string[];
    /** Define the tile info for the layer including lods, rows, cols, origin and spatial reference. */
    tileInfo?: layers.TileInfo;
    /** Define additional tile server domains for the layer. */
    tileServers?: string[];
  }
  /** Inherits all attributes from dojo/_base/Color to provide functions for setting colors. */
  export class Color {
    /** The alpha value. */
    a: number;
    /** The blue value. */
    b: number;
    /** The green value. */
    g: number;
    /** The red value. */
    r: number;
    /**
     * Takes a named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another Color object and sets this color instance to that value.
     * @param color The new color value.
     */
    setColor(color: string): Color;
    /**
     * Takes a named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another Color object and sets this color instance to that value.
     * @param color The new color value.
     */
    setColor(color: number[]): Color;
    /**
     * Takes a named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another Color object and sets this color instance to that value.
     * @param color The new color value.
     */
    setColor(color: any): Color;
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
  export interface ColorConstructor {
	    /** Dictionary list of all CSS named colors, by name. */
	  named: any;
	    /**
	     * Creates a new Color object.
	     * @param color A named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another Color object.
	     */
	    new(color?: string): Color;
	    /**
	     * Creates a new Color object.
	     * @param color A named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another Color object.
	     */
	    new(color?: number[]): Color;
	    /**
	     * Creates a new Color object.
	     * @param color A named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another Color object.
	     */
	    new(color?: any): Color;
	    /**
	     * Blend colors start and end with weight from 0 to 1, 0.5 being a 50/50 blend.
	     * @param start The start color.
	     * @param end The end color.
	     * @param weight The weight value.
	     * @param obj A previously allocated Color object to reuse for the result.
	     */
	  blendColors(start: Color, end: Color, weight: number, obj?: Color): Color;
	    /**
	     * Builds a Color from a 3 or 4 element array, mapping each element in sequence to the rgb(a) values of the color.
	     * @param a The input array.
	     * @param obj A previously allocated Color object to reuse for the result.
	     */
	  fromArray(a: number[], obj?: Color): Color;
	    /**
	     * Converts a hex string with a '#' prefix to a color object.
	     * @param color The input color.
	     * @param obj A previously allocated Color object to reuse for the result.
	     */
	  fromHex(color: string, obj?: Color): Color;
	    /**
	     * Returns a Color instance from a string of the form "rgb()" or "rgba()".
	     * @param color The input color.
	     * @param obj A previously allocated Color object to reuse for the result.
	     */
	  fromRgb(color: string, obj?: Color): Color;
	    /**
	     * Parses str for a color value.
	     * @param str The input value.
	     * @param obj A previously allocated Color object to reuse for the result.
	     */
	  fromString(str: string, obj?: Color): Color;
  }

  /** The Credential class represents a credential object used to access a secure ArcGIS resource. */
  export class Credential {
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
    /** User associated wth the Credential object. */
    userId: string;
    /** Destroy a credential. */
    destroy(): void;
    /** Generate a new token and update the Credential's token property with the newly acquired token. */
    refreshToken(): any;
    /** Return the properties of this object in JSON. */
    toJson(): any;
    /** Fired when a credential object is destroyed. */
    on(type: "destroy", listener: (event: { target: Credential }) => void): Handle;
    /** Fired when the token associated with the credential is updated or changed. */
    on(type: "token-change", listener: (event: { target: Credential }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface CredentialConstructor {
      new(): Credential
  }

  /** This module returns a singleton class that is automatically instantiated into id when the module containing this class is imported into the application. */
  export class IdentityManager extends IdentityManagerBase {
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
    on(type: "dialog-cancel", listener: (event: { info: any; target: IdentityManager }) => void): Handle;
    /** Fired when the dialog box widget, used to prompt users for their credentials, is created. */
    on(type: "dialog-create", listener: (event: { target: IdentityManager }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface IdentityManagerConstructor {
      new(): IdentityManager
  }

  /** This class provides the framework and helper methods required to implement a solution for managing user credentials. */
  export class IdentityManagerBase {
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
    findCredential(url: string, userId?: string): Credential;
    /**
     * Returns the OAuth configuration for the passed in Portal server URL.
     * @param url The URL to the Portal.
     */
    findOAuthInfo(url: string): arcgis.OAuthInfo;
    /**
     * Returns information about the server that is hosting the specified url.
     * @param url The url to a server.
     */
    findServerInfo(url: string): ServerInfo;
    /**
     * Returns an object containing a token and its expiration time.
     * @param serverInfo A ServerInfo object that contains a token service URL.
     * @param userInfo A user info object containing a user name and password.
     * @param options Optional parameters.
     */
    generateToken(serverInfo: ServerInfo, userInfo: any, options?: any): any;
    /**
     * Returns a Credential object that can be used to access the secured resource identified by the input url.
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
     * @param serverInfo  A ServerInfo object that contains the token service url.
     * @param arcgis.OAuthInfo A arcgis.OAuthInfo object that contains the authorization configuration.
     * @param options Optional parameters.
     */
    oAuthSignIn(resUrl: string, serverInfo: ServerInfo, OAuthInfo: arcgis.OAuthInfo, options?: any): any;
    /**
     * Registers OAuth configurations.
     * @param oAuthInfos An OAuthInfos object that defines the OAuth configurations.
     */
    registerOAuthInfos(oAuthInfos: arcgis.OAuthInfo[]): void;
    /**
     * Register secure servers and the token endpoints.
     * @param serverInfos A ServerInfos object that defines the secure service and token endpoint.
     */
    registerServers(serverInfos: ServerInfo[]): void;
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
     * @param serverInfo A ServerInfo object that contains the token service url.
     * @param options Optional parameters.
     */
    signIn(url: string, serverInfo: ServerInfo, options?: any): any;
    /** Return properties of this object in JSON. */
    toJson(): any;
    /** Fired when a credential is created. */
    on(type: "credential-create", listener: (event: { target: IdentityManagerBase }) => void): Handle;
    /** Fired when all credentials are destroyed. */
    on(type: "credentials-destroy", listener: (event: { target: IdentityManagerBase }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface IdentityManagerBaseConstructor {
      new(): IdentityManagerBase
  }
  /** An InfoTemplate contains a title and content template string used to transform Graphic.attributes into an HTML representation. */
  export class InfoTemplate {
    /** The template for defining how to format the content used in an InfoWindow. */
    content: any;
    /** The template for defining how to format the title used in an InfoWindow. */
    title: any;
    /**
     * Sets the content template.
     * @param template The template for the content.
     */
    setContent(template: string): InfoTemplate;
    /**
     * Sets the content template.
     * @param template The template for the content.
     */
    setContent(template: Function): InfoTemplate;
    /**
     * Sets the title template.
     * @param template The template for the title.
     */
    setTitle(template: string): InfoTemplate;
    /**
     * Sets the title template.
     * @param template The template for the title.
     */
    setTitle(template: Function): InfoTemplate;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface InfoTemplateConstructor {
	    /** Creates a new empty InfoTemplate object. */
	    new(): InfoTemplate;
	    /**
	     * Creates a new InfoTemplate object.
	     * @param title The template for defining how to format the title used in an InfoWindow.
	     * @param content The template for defining how to format the content used in an InfoWindow.
	     */
	    new(title: string, content: string): InfoTemplate;
	    /**
	     * Creates a new InfoTemplate object using a JSON object.
	     * @param json JSON object representing the InfoTemplate.
	     */
	    new(json: Object): InfoTemplate;
  }

  /** The base class for the out-of-the-box InfoWindow. */
  export class InfoWindowBase {
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
     * @param width The new width of the dijit.InfoWindow in pixels.
     * @param height The new height of the dijit.InfoWindow in pixels.
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
     * @param location Location is an instance of geometry.Point.
     */
    show(location: geometry.Point): void;
    /** Helper method. */
    startupDijits(): void;
    /**
     * This method is called by the map when the object is no longer the map's info window.
     * @param map The map object.
     */
    unsetMap(map: Map): void;
    /** Fires after the info window is hidden. */
    on(type: "hide", listener: (event: { target: InfoWindowBase }) => void): Handle;
    /** Fires after the info window becomes visible. */
    on(type: "show", listener: (event: { target: InfoWindowBase }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface InfoWindowBaseConstructor {
      new(): InfoWindowBase
  }

  /** The OperationBase class defines operations that can be added to the UndoManager. */
  export class OperationBase {
    /** Details about the operation, for example: "Update" may be the label for an edit operation that updates features. */
    label: string;
    /** The type of operation, for example: "edit" or "navigation". */
    type: string;
    /** Re-perform the last undo operation. */
    performRedo(): void;
    /** Reverse the operation. */
    performUndo(): void;
  }
  export interface OperationBaseConstructor {
	    /**
	     * Creates a new OperationBase object.
	     * @param params See options list for parameters.
	     */
	    new(params: OperationBaseOptions): OperationBase;
  }
  /** This class contains information about an ArcGIS Server and its token endpoint. */
  export class ServerInfo {
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
  export interface ServerInfoConstructor {
      new(): ServerInfo
  }

  /** The SnappingManager is used to add snapping capability to the Editor, Measurement Widget,  Draw toolbar and Edit toolbar. */
  export class SnappingManager {
    /** Destroy the SnappingManager object. */
    destroy(): void;
    /**
     * Returns a deferred object, which can be added to a callback to find the snap point.
     * @param screenPoint The input screen point for which to find the snapping location.
     */
    getSnappingPoint(screenPoint: geometry.Point): any;
    /**
     * An array of layerInfo objects used to specify the target snapping layers.
     * @param layerInfos An array of layerInfo objects that define the snapping target layers.
     */
    setLayerInfos(layerInfos: any[]): void;
  }
  export interface SnappingManagerConstructor {
	    /**
	     * Create a new SnappingManager object.
	     * @param options Optional parameters.
	     */
	    new(options?: SnappingManagerOptions): SnappingManager;
  }
  /** The spatial reference of a map, layer, or inputs to and outputs from a task. */
  export class SpatialReference {
    /** The well-known ID of a spatial reference. */
    wkid: number;
    /** The well-known text that defines a spatial reference. */
    wkt: string;
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
  export interface SpatialReferenceConstructor {
	    /**
	     * Creates a new SpatialReference object.
	     * @param json The REST JSON representation of the spatial reference.
	     */
	    new(json: Object): SpatialReference;
	    /**
	     * Create a spatial reference object and initialize it with a well-known ID (wkid).
	     * @param wkid The well-known id (wkid) of the coordinate system.
	     */
	    new(wkid: number): SpatialReference;
	    /**
	     * Create a spatial reference object and initialize it with the given well-known text (wkt).
	     * @param wkt The well-known text (wkt) of the coordinate system.
	     */
	    new(wkt: string): SpatialReference;
  }
  /** The time extent is a span of time going from a start time to an end time. */
  export class TimeExtent {
    /** The end time for the specified time extent. */
    endTime: Date;
    /** The start time for the specified time extent. */
    startTime: Date;
    /**
     * Returns a new time extent indicating the intersection between "this" and the argument time extent.
     * @param timeExtent The input time extent.
     */
    intersection(timeExtent: number): TimeExtent;
    /**
     * Returns a new time extent with the given offset from "this' time extent.
     * @param offsetValue The length of time to offset from "this" time extent.
     * @param offsetUnits The offset units, see the layers.TimeInfo constants for a list of valid values.
     */
    offset(offsetValue: number, offsetUnits: string): TimeExtent;
  }
  export interface TimeExtentConstructor {
	    /**
	     * Creates a new TimeExtent object with the specifed start and end time.
	     * @param startTime The start time for the specified time extent.
	     * @param endTime The end time for the specified time extent.
	     */
	    new(startTime: Date, endTime: Date): TimeExtent;
  }
  /** Contains properties referencing default basemaps used in the JS API. */
  export var basemaps: {
    /** The Light Gray Canvas basemap is designed to be used as a neutral background map for overlaying and emphasizing other map layers. */
    gray: any;
    /** The World Imagery map is a detailed imagery map layer and labels that is designed to be used as a basemap for various maps and applications. */
    hybrid: any;
    /** The Ocean dijit.Basemap is designed to be used as a basemap by marine GIS professionals and as a reference map by anyone interested in ocean data. */
    oceans: any;
    /** The OpenStreetMap is a community map layer that is designed to be used as a basemap for various maps and applications. */
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

  /** A Graphic can contain geometry, a symbol, attributes, or an infoTemplate. */
  export class Graphic {
    /** Name value pairs of fields and field values associated with the graphic. */
    attributes: any;
    /** The geometry that defines the graphic. */
    geometry: geometry.Geometry;
    /** The content for display in an InfoWindow. */
    infoTemplate: InfoTemplate;
    /** The symbol for the graphic. */
    symbol: symbols.Symbol;
    /** Indicate the visibility of the graphic. */
    visible: boolean;
    /**
     * Adds a new attribute or changes the value of an existing attribute on the graphic's node.
     * @param name The name of the attribute.
     * @param value The value of the attribute.
     */
    attr(name: string, value: string): Graphic;
    /** Draws the graphic. */
    draw(): Graphic;
    /** Returns the content string based on attributes and infoTemplate values. */
    getContent(): string;
    /** Returns the dojo/gfx/shape.Shape of the Esri graphic. */
    getDojoShape(): any;
    /** Returns the info template associated with the graphic. */
    getInfoTemplate(): InfoTemplate;
    /** Returns a reference to the associated layer. */
    getLayer(): layers.Layer;
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
    setAttributes(attributes: any): Graphic;
    /**
     * Defines the geometry of the graphic.
     * @param geometry The geometry that defines the graphic.
     */
    setGeometry(geometry: geometry.Geometry): Graphic;
    /**
     * Defines the InfoTemplate for the dijit.InfoWindow of the graphic.
     * @param infoTemplate The content for display in an InfoWindow.
     */
    setInfoTemplate(infoTemplate: InfoTemplate): Graphic;
    /**
     * Sets the symbol of the graphic.
     * @param symbol The symbol for the graphic.
     */
    setSymbol(symbol: symbols.Symbol): Graphic;
    /** Shows the graphic. */
    show(): void;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface GraphicConstructor {
	    /**
	     * Creates a new Graphic object.
	     * @param geometry The geometry that defines the graphic.
	     * @param symbol symbols.Symbol used for drawing the graphic.
	     * @param attributes Name value pairs of fields and field values associated with the graphic.
	     * @param infoTemplate The content for display in an InfoWindow.
	     */
	    new(geometry?: geometry.Geometry, symbol?: symbols.Symbol, attributes?: any, infoTemplate?: InfoTemplate): Graphic;
	    /**
	     * Creates a new Graphic object using a JSON object.
	     * @param json JSON object representing the graphic.
	     */
	    new(json: Object): Graphic;
  }

  /** Utility methods for working with graphics. */
  export var graphicsUtils: {
    /**
     * Converts an array of graphics to an array of geometries.
     * @param graphics Array of graphics to convert to geometries
     */
    getGeometries(graphics: Graphic[]): geometry.Geometry[];
    /**
     * Utility function that returns the extent of an array of graphics.
     * @param graphics The input graphics array.
     */
    graphicsExtent(graphics: Graphic[]): geometry.Extent;
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

  /** The Map class creates a container and required DOM structure for adding layers, graphics, an info window, and other navigation controls. */
  export class Map {
    /** Reference to the attribution widget created by the map when map attribution is enabled. */
    attribution: dijit.Attribution;
    /** Value is true when the map automatically resizes if the browser window or ContentPane widget enclosing the map is resized. */
    autoResize: boolean;
    /** An array of IDs corresponding to the layers that make up the map's current basemap. */
    basemapLayerIds: string[];
    /** The current extent of the map in map units. */
    extent: geometry.Extent;
    /** Indicates if the fade effect is enabled while zooming. */
    fadeOnZoom: boolean;
    /** When the mapNavigation mode is set to 'css-transforms', CSS3 transforms will be used for map navigation when supported by the browser. */
    force3DTransforms: boolean;
    /** The extent (or bounding box) of the map in geographic coordinates. */
    geographicExtent: geometry.Extent;
    /** Provides access to the Map's GraphicsLayer. */
    graphics: layers.GraphicsLayer;
    /** An array of the current GraphicsLayers in the map. */
    graphicsLayerIds: string[];
    /** Current height of the map in screen pixels. */
    height: number;
    /** Reference to HTML DIV or other element where the map is placed on the page. */
    id: string;
    /** Displays the dijit.InfoWindow on a map. */
    infoWindow: InfoWindowBase;
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
    position: geometry.Point;
    /** The DOM node that contains the container of layers, build-in info window, logo and slider. */
    root: Node;
    /** When true, map attribution is enabled. */
    showAttribution: boolean;
    /** If snapping is enabled on the map using map.enableSnapping() this property provides access to the SnappingManager. */
    snappingManager: SnappingManager;
    /** The spatial reference of the map. */
    spatialReference: SpatialReference;
    /** The current TimeExtent for the map. */
    timeExtent: TimeExtent;
    /** Indicates whether map is visible. */
    visible: boolean;
    /** Current width of the map in screen pixels. */
    width: number;
    /**
     * Adds an Esri layers.Layer to the map.
     * @param layer layers.Layer to be added to the map.
     * @param index A layer can be added at a specified index in the map.
     */
    addLayer(layer: layers.Layer, index?: number): layers.Layer;
    /**
     * Adds multiple layers to a map.
     * @param layers Layers to be added to the map.
     */
    addLayers(layers: layers.Layer[]): void;
    /**
     * Adds a new attribute or changes the value of an existing attribute on the map container.
     * @param name The name of the attribute.
     * @param value The value of the attribute.
     */
    attr(name: string, value: string): Map;
    /**
     * Centers and zooms the map.
     * @param mapPoint Centers the map on the specified x,y location.
     * @param levelOrFactor When using an ArcGISTiledMapServiceLayer, the map is zoomed to the level specified.
     */
    centerAndZoom(mapPoint: geometry.Point, levelOrFactor: number): any;
    /**
     * Centers the map based on map coordinates as the center point.
     * @param mapPoint Centers the map on the specified x,y location.
     */
    centerAt(mapPoint: geometry.Point): any;
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
    enableSnapping(snapOptions?: any): SnappingManager;
    /** Returns the name of the current basemap. */
    getBasemap(): string;
    /**
     * Sets an InfoWindow's anchor when calling InfoWindow.show.
     * @param screenCoords The anchor point in screen units.
     */
    getInfoWindowAnchor(screenCoords: geometry.ScreenPoint): string;
    /**
     * Returns an individual layer of a map.
     * @param id ID assigned to the layer.
     */
    getLayer(id: string): layers.Layer;
    /** Return an array of layers visible at the current scale. */
    getLayersVisibleAtScale(): layers.Layer[];
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
     * @param layer layers.Layer to be removed from the map.
     */
    removeLayer(layer: layers.Layer): void;
    /**
     * Changes the layer order in the map.
     * @param layer The layer to be moved.
     * @param index Refers to the location for placing the layer.
     */
    reorderLayer(layer: layers.Layer, index: number): void;
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
    setExtent(extent: geometry.Extent, fit?: boolean): any;
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
     * Sets the TimeExtent for the map.
     * @param timeExtent Set the time extent for which data is displayed on the map.
     */
    setTimeExtent(timeExtent: TimeExtent): void;
    /**
     * Set the time slider associated with the map.
     * @param timeSlider The time slider dijit to associate with the map.
     */
    setTimeSlider(timeSlider: dijit.TimeSlider): void;
    /**
     * Show or hide the map.
     * @param visible If true, map will be visible.
     */
    setVisibility(visible: boolean): Map;
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
     * @param screenPoint Converts screen coordinates to map coordinates.
     */
    toMap(screenPoint: geometry.ScreenPoint): geometry.Point;
    /**
     * Converts a single map point to screen coordinate.
     * @param mapPoint Converts map coordinates to screen coordinates.
     */
    toScreen(mapPoint: geometry.Point): geometry.ScreenPoint;
    /** Fired when the map's basemap is changed. */
    on(type: "basemap-change", listener: (event: { current: any; previous: any; target: Map }) => void): Handle;
    /** Event is fired before the map gets destroyed. */
    on(type: "before-unload", listener: (event: { map: Map; target: Map }) => void): Handle;
    /** Fires when a user single clicks on the map using the mouse and the mouse pointer is within the map region of the HTML page. */
    on(type: "click", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires when a user double clicks on the map using the mouse and the mouse pointer is within the map region of the HTML page. */
    on(type: "dbl-click", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires when the extent of the map has changed. */
    on(type: "extent-change", listener: (event: { delta: geometry.Point; extent: geometry.Extent; levelChange: boolean; lod: layers.LOD; target: Map }) => void): Handle;
    /** Fires when a keyboard key is pressed. */
    on(type: "key-down", listener: (event: KeyboardEvent) => void): Handle;
    /** Fires when a keyboard key is released. */
    on(type: "key-up", listener: (event: KeyboardEvent) => void): Handle;
    /** Fires any time a layer is added to the map. */
    on(type: "layer-add", listener: (event: { layer: layers.Layer; target: Map }) => void): Handle;
    /** Fires after specified layer has been added to the map. */
    on(type: "layer-add-result", listener: (event: { error: Error; layer: layers.Layer; target: Map }) => void): Handle;
    /** Fires after the layer has been removed. */
    on(type: "layer-remove", listener: (event: { layer: layers.Layer; target: Map }) => void): Handle;
    /** Fires when the map layer order has been changed. */
    on(type: "layer-reorder", listener: (event: { index: number; layer: layers.Layer; target: Map }) => void): Handle;
    /** Fires when a map layer resumes drawing. */
    on(type: "layer-resume", listener: (event: { layer: layers.Layer; target: Map }) => void): Handle;
    /** Fires after all layers are added to the map using the map.addLayers method. */
    on(type: "layers-add-result", listener: (event: { layers: layers.Layer[]; target: Map }) => void): Handle;
    /** Fires after all the layers have been removed. */
    on(type: "layers-removed", listener: (event: { target: Map }) => void): Handle;
    /** Fires when all the layers have been reordered. */
    on(type: "layers-reordered", listener: (event: { layerIds: string[]; target: Map }) => void): Handle;
    /** Fires when a map layer suspends drawing. */
    on(type: "layer-suspend", listener: (event: { layer: layers.Layer; target: Map }) => void): Handle;
    /** Fires when the first or base layer has been successfully added to the map. */
    on(type: "load", listener: (event: { map: Map; target: Map }) => void): Handle;
    /** Fires when a mouse button is pressed down and the mouse cursor is in the map region of the HTML page. */
    on(type: "mouse-down", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires while the mouse is being dragged until the mouse button is released. */
    on(type: "mouse-drag", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires when a mouse button is released and the user stops dragging the mouse. */
    on(type: "mouse-drag-end", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires when a mouse button is pressed down and the user starts to drag the mouse. */
    on(type: "mouse-drag-start", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires any time the mouse pointer moves over the map region. */
    on(type: "mouse-move", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires when the mouse moves out of the map region of the HTML page. */
    on(type: "mouse-out", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires when the mouse moves into the map region of the HTML page. */
    on(type: "mouse-over", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires when the mouse button is released and the mouse pointer is within the map region of the HTML page. */
    on(type: "mouse-up", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires when the mouse wheel is scrolled. */
    on(type: "mouse-wheel", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires during the pan process. */
    on(type: "pan", listener: (event: { delta: geometry.Point; extent: geometry.Extent; target: Map }) => void): Handle;
    /** Fires when the pan is complete. */
    on(type: "pan-end", listener: (event: { delta: geometry.Point; extent: geometry.Extent; target: Map }) => void): Handle;
    /** Fires when a user commences panning. */
    on(type: "pan-start", listener: (event: { extent: geometry.Extent; target: Map }) => void): Handle;
    /** Fires when the map DIV is repositioned. */
    on(type: "reposition", listener: (event: { x: number; y: number; target: Map }) => void): Handle;
    /** Fires when the map's container has been resized. */
    on(type: "resize", listener: (event: { extent: geometry.Extent; height: number; width: number; target: Map }) => void): Handle;
    /** Fires when the map's timeExtent property is set. */
    on(type: "time-extent-change", listener: (event: { timeExtent: TimeExtent; target: Map }) => void): Handle;
    /** Fires when the page is refreshed. */
    on(type: "unload", listener: (event: { map: Map; target: Map }) => void): Handle;
    /** Fires after layers that are updating their content have completed. */
    on(type: "update-end", listener: (event: { error: Error; target: Map }) => void): Handle;
    /** Fires when one or more layers begins updating their content. */
    on(type: "update-start", listener: (event: { target: Map }) => void): Handle;
    /** Fires during the zoom process. */
    on(type: "zoom", listener: (event: { anchor: geometry.Point; extent: geometry.Extent; zoomFactor: number; target: Map }) => void): Handle;
    /** Fires when the zoom is complete. */
    on(type: "zoom-end", listener: (event: { anchor: geometry.Point; extent: geometry.Extent; level: number; zoomFactor: number; target: Map }) => void): Handle;
    /** Fires when a user commences zooming. */
    on(type: "zoom-start", listener: (event: { anchor: geometry.Point; extent: geometry.Extent; level: number; zoomFactor: number; target: Map }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface MapConstructor {
	    /**
	     * Creates a new map inside of the given HTML container, which is often a DIV element.
	     * @param divId Container id for the referencing map.
	     * @param options Optional parameters.
	     */
	    new(divId: string, options?: MapOptions): Map;
  }
  /** Retrieve data from a remote server or upload a file. */
  export var request: {
    /**
     * Retrieve data from a remote server or upload a file from a user's computer.
     * @param request The request parameter is an object with the following properties that describe the request.
     * @param options See the object specifications table below for the structure of the  options  object.
     */
    (request: any, options?: any): any;
    /**
     * Define a callback function that will be called just before request calls into dojo IO functions such as dojo.rawXhrPost and dojo.io.script.get.
     * @param callbackFunction The callback function that will be executed prior to request calls into dojo IO functions.
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
    get(operationId: number): OperationBase;
    /** Get the next redo operation from the stack */
    peekRedo(): OperationBase;
    /** Get the next undo operation from the stack. */
    peekUndo(): OperationBase;
    /** Moves the current position to the next redo operation and calls the operation's performRedo() method. */
    redo(): void;
    /**
     * Remove the specified operation from the stack.
     * @param operationId The operation id.
     */
    remove(operationId: number): OperationBase;
    /** Moves the current position to the next undo operation and calls the operation's performUndo method. */
    undo(): void;
    /** Fires when the add method is called to add an operation is added to the stack. */
    on(type: "add", listener: (event: { target: UndoManager }) => void): Handle;
    /** Fires when the undo/redo stack changes. */
    on(type: "change", listener: (event: { target: UndoManager }) => void): Handle;
    /** Fires when the redo method is called. */
    on(type: "redo", listener: (event: { target: UndoManager }) => void): Handle;
    /** Fires when the undo method is called. */
    on(type: "undo", listener: (event: { target: UndoManager }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface UndoManagerConstructor {
	    /**
	     * Creates a new UndoManager object.
	     * @param options See options list for parameters.
	     */
	    new(options?: UndoManagerOptions): UndoManager;
  }
  /** Esri unit constants. */
  export class Units {
  }
  export interface UnitsConstructor {
	    /** Units are acres. */
	  ACRES: any;
	    /** Units are ares. */
	  ARES: any;
	    /** Units are centimeters. */
	  CENTIMETERS: any;
	    /** Units are decimal degrees. */
	  DECIMAL_DEGREES: any;
	    /** Units are decimeters. */
	  DECIMETERS: any;
	    /** Units are degree, minute, seconds. */
	  DEGREE_MINUTE_SECONDS: any;
	    /** Units are feet. */
	  FEET: any;
	    /** Units are hectares. */
	  HECTARES: any;
	    /** Units are inches. */
	  INCHES: any;
	    /** Units are kilometers. */
	  KILOMETERS: any;
	    /** Units are meters. */
	  METERS: any;
	    /** Units are miles. */
	  MILES: any;
	    /** Units are millimeters. */
	  MILLIMETERS: any;
	    /** Units are nautical miles. */
	  NAUTICAL_MILES: any;
	    /** Units are points. */
	  POINTS: any;
	    /** Units are square centimeters. */
	  SQUARE_CENTIMETERS: any;
	    /** Units are square deciemeters. */
	  SQUARE_DECIMETERS: any;
	    /** Units are square feet. */
	  SQUARE_FEET: any;
	    /** Units are square inches. */
	  SQUARE_INCHES: any;
	    /** Units are square kilometers. */
	  SQUARE_KILOMETERS: any;
	    /** Units are square meters. */
	  SQUARE_METERS: any;
	    /** Units are square miles. */
	  SQUARE_MILES: any;
	    /** Units are square millimeters. */
	  SQUARE_MILLIMETERS: any;
	    /** Units are square yards. */
	  SQUARE_YARDS: any;
	    /** Units are unknown. */
	  UNKNOWN: any;
	    /** Units are yards. */
	  YARDS: any;
      new(): Units
  }
  /** Utility methods for working with URLs. */
  export var urlUtils: {
    /**
     * Adds the given proxy rule to the proxy rules list: config.defaults.io.proxyRules
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
declare namespace esriTypes.arcgis {

  /** This class contains information about an OAuth configuration. */
  export class OAuthInfo {
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
    /** Returns an easily serializable object representation of the OAuthInfo. */
    toJson(): any;
  }
  export interface OAuthInfoConstructor {
	    /**
	     * Creates a new OAuthInfo given the specified parameters.
	     * @param params Various options to configure the OAuthInfo object.
	     */
	    new(params: OAuthInfoOptions): OAuthInfo;
  }

  /** The Portal class is part of the ArcGIS Portal API which provides a way to build applications that work with content from ArcGIS Online or an ArcGIS Portal. */
  export class Portal {
    /** The access level of the organization. */
    access: string;
    /** When true, access to the organization's Portal resources must occur over SSL. */
    allSSL: boolean;
    /** The query that defines the basemaps that are displayed in the dijit.Basemap Gallery. */
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
    on(type: "error", listener: (event: { error: Error; target: Portal }) => void): Handle;
    /** Fired when the portal has loaded. */
    on(type: "load", listener: (event: { target: Portal }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface PortalConstructor {
	    /**
	     * Creates a new Portal object.
	     * @param url URL to the ArcGIS.com site or in-house portal.
	     */
	    new(url: string): Portal;
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
  export interface PortalCommentConstructor {
      new(): PortalComment
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
  export interface PortalFolderConstructor {
      new(): PortalFolder
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
  export interface PortalGroupConstructor {
      new(): PortalGroup
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
  export interface PortalGroupMembersConstructor {
      new(): PortalGroupMembers
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
  export interface PortalItemConstructor {
      new(): PortalItem
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
  export interface PortalQueryParamsConstructor {
      new(): PortalQueryParams
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
  export interface PortalQueryResultConstructor {
      new(): PortalQueryResult
  }
  /** Details about the rating associated with a Portal item. */
  export class PortalRating {
    /** Date the rating was added to the item. */
    created: Date;
    /** A rating between 1.0 and 5.0 for the item. */
    rating: number;
  }
  export interface PortalRatingConstructor {
      new(): PortalRating
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
  export interface PortalUserConstructor {
      new(): PortalUser
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
     * Can be used with dijit.Legend to get the layerInfos list to be passed into the Legend constructor.
     * @param createMapResponse Object returned by .createMap() in the .then() callback.
     */
    getLegendLayers(createMapResponse: any): layers.Layer[];
  };
}
declare namespace esriTypes.dijit {

  /** The AttributeInspector displays the attributes of selected features from one or more feature layers. */
  export class AttributeInspector {
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
    on(type: "attribute-change", listener: (event: { feature: Graphic; fieldName: string; fieldValue: string; target: AttributeInspector }) => void): Handle;
    /** Fires when the AttributeInspector's delete button is pressed. */
    on(type: "delete", listener: (event: { feature: Graphic; target: AttributeInspector }) => void): Handle;
    /** Fires when the AttributeInspector's next or back button is pressed. */
    on(type: "next", listener: (event: { feature: Graphic; target: AttributeInspector }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface AttributeInspectorConstructor {
	    /** layers.Field displayed as a rich text field. */
	  STRING_FIELD_OPTION_RICHTEXT: any;
	    /** layers.Field displayed as a text area. */
	  STRING_FIELD_OPTION_TEXTAREA: any;
	    /** layers.Field displays as a text box. */
	  STRING_FIELD_OPTION_TEXTBOX: any;
	    /**
	     * Creates a new Attribute Inspector object.
	     * @param params See options list.
	     * @param srcNodeRef HTML element where the attribute inspector should be rendered.
	     */
	    new(params: AttributeInspectorOptions, srcNodeRef: Node): AttributeInspector;
	    /**
	     * Creates a new Attribute Inspector object.
	     * @param params See options list.
	     * @param srcNodeRef HTML element where the attribute inspector should be rendered.
	     */
	    new(params: AttributeInspectorOptions, srcNodeRef: string): AttributeInspector;
  }

  /** Displays attribution text for the layers in a map. */
  export class Attribution {
    /** String used as the delimiter between attribution items. */
    itemDelimiter: string;
    /** Object containing elements where each element contains attribution text for a layer in the map. */
    itemNodes: any;
    /** Reference to the span element that contains all the attribution items. */
    listNode: HTMLSpanElement;
    /** Reference to the map object for which the widget is displaying attribution. */
    map: Map;
    /** Destroy the attribution widget. */
    destroy(): void;
  }
  export interface AttributionConstructor {
	    /**
	     * Creates a new Attribution object.
	     * @param options An object that defines the attribution options.
	     * @param srcNodeRef HTML element where the time slider should be rendered.
	     */
	    new(options: AttributionOptions, srcNodeRef: Node): Attribution;
	    /**
	     * Creates a new Attribution object.
	     * @param options An object that defines the attribution options.
	     * @param srcNodeRef HTML element where the time slider should be rendered.
	     */
	    new(options: AttributionOptions, srcNodeRef: string): Attribution;
  }

  /** Define a basemap to display in the BasemapGallery dijit. */
  export class Basemap {
    /** The basemap's id. */
    id: string;
    /** The URL to the thumbnail image for the basemap. */
    thumbnailUrl: string;
    /** The title for the basemap. */
    title: string;
    /** The list of layers contained in the basemap or a dojo.Deferred if a call to ArcGIS.com needs to be made to retrieve the list of ArcGIS.com basemaps. */
    getLayers(): BasemapLayer[];
  }
  export interface BasemapConstructor {
	    /**
	     * Creates a new Basemap Object.
	     * @param params Set of parameters used to create a basemap.
	     */
	    new(params: BasemapOptions): Basemap;
  }

  /** The BasemapGallery dijit displays a collection basemaps from ArcGIS.com or a user-defined set of map or image services. */
  export class BasemapGallery {
    /** List of basemaps displayed in the BasemapGallery. */
    basemaps: Basemap[];
    /** This value is true after the BasemapGallery retrieves the ArcGIS.com basemaps. */
    loaded: boolean;
    /** Optional parameter to pass in a portal URL, including the instance name, used to access the group containing the basemap gallery items. */
    portalUrl: string;
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
    get(id: string): Basemap;
    /** Gets the currently selected basemap. */
    getSelected(): Basemap;
    /**
     * Remove a basemap from the BasemapGallery's list of basemaps.
     * @param id The basemap id.
     */
    remove(id: string): Basemap;
    /**
     * Select a new basemap for the map.
     * @param id The basemap id.
     */
    select(id: string): Basemap;
    /** Finalizes the creation of the basemap gallery. */
    startup(): void;
    /** Fires when a basemap is added to the BasemapGallery's list of basemaps. */
    on(type: "add", listener: (event: { basemap: Basemap; target: BasemapGallery }) => void): Handle;
    /** Fires when an error occurs while switching basemaps. */
    on(type: "error", listener: (event: { target: BasemapGallery }) => void): Handle;
    /** Fires when the BasemapGallery retrieves the ArcGIS.com basemaps. */
    on(type: "load", listener: (event: { target: BasemapGallery }) => void): Handle;
    /** Fires when a basemap is removed from the BasemapGallery's list of basemaps. */
    on(type: "remove", listener: (event: { basemap: Basemap; target: BasemapGallery }) => void): Handle;
    /** Fires after the map is updated with a new basemap. */
    on(type: "selection-change", listener: (event: { target: BasemapGallery }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface BasemapGalleryConstructor {
	    /**
	     * Creates a new BasemapGallery dijit.
	     * @param params Parameters used to configure the widget.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: BasemapGalleryOptions, srcNodeRef?: Node): BasemapGallery;
	    /**
	     * Creates a new BasemapGallery dijit.
	     * @param params Parameters used to configure the widget.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: BasemapGalleryOptions, srcNodeRef?: string): BasemapGallery;
  }

  /** Defines a layer that will be added to a basemap and displayed in the BasemapGallery dijit. */
  export class BasemapLayer {
    /** The attribution information for the layer. */
    copyright: string;
    /** The full extent of the layer. */
    fullExtent: geometry.Extent;
    /** The initial extent of the layer. */
    initialExtent: geometry.Extent;
    /** The subDomains where tiles are served to speed up tile retrieval (using subDomains gets around the browser limit of the max number of concurrent requests to a domain). */
    subDomains: string[];
    /** The tile info for the layer including lods, rows, cols, origin and spatial reference. */
    tileInfo: layers.TileInfo;
    /** Additional tile server domains for the layer. */
    tileServer: string[];
    /** The type of layer. */
    type: string;
  }
  export interface BasemapLayerConstructor {
	    /**
	     * Creates a new BasemapLayer object.
	     * @param params Set of parameters used to create a basemap layer.
	     */
	    new(params: BasemapLayerOptions): BasemapLayer;
  }

  /** BasemapToggle provides a simple button to toggle between two basemaps. */
  export class BasemapToggle {
    /** The secondary basemap to toggle to. */
    basemap: string;
    /** Object containing the labels and URLs for the image of each basemap. */
    basemaps: any;
    /** Whether the widget has been loaded. */
    loaded: boolean;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** Class used for styling the widget. */
    theme: string;
    /** Whether the widget is visible by default. */
    visible: boolean;
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
    on(type: "load", listener: (event: { target: BasemapToggle }) => void): Handle;
    /** Fires when the toggle method has been called. */
    on(type: "toggle", listener: (event: { currentBasemap: string; error: any; previousBasemap: string; target: BasemapToggle }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface BasemapToggleConstructor {
	    /**
	     * Creates a new BasemapToggle dijit using the given DOM node.
	     * @param params Various parameters to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: BasemapToggleOptions, srcNodeRef: Node): BasemapToggle;
	    /**
	     * Creates a new BasemapToggle dijit using the given DOM node.
	     * @param params Various parameters to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: BasemapToggleOptions, srcNodeRef: string): BasemapToggle;
  }

  /** Defines a bookmark for use in the Bookmark widget. */
  export class BookmarkItem {
  }
  export interface BookmarkItemConstructor {
	    /**
	     * Creates a new BookmarkItem.
	     * @param name The name for the bookmark item.
	     * @param extent The extent for the specified bookmark item.
	     */
	    new(name: string, extent: geometry.Extent): BookmarkItem;
  }

  /** The Bookmarks widget is a ready to use tool for bookmarking the current map extent. */
  export class Bookmarks {
    /** An array of BookmarkItem objects. */
    bookmarks: BookmarkItem[];
    /**
     * Add a new bookmark to the bookmark widget.
     * @param bookmarkItem A BookmarkItem or json object with the same structure that defines the new location.
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
    /** Returns an array of json objects with the following structure:  [{   name:bookmarkName,   extent:bookmarkExtent }]  */
    toJson(): any;
    /** Fired when a bookmark item is clicked. */
    on(type: "click", listener: (event: { target: Bookmarks }) => void): Handle;
    /** Fired after the bookmark item is edited. */
    on(type: "edit", listener: (event: { target: Bookmarks }) => void): Handle;
    /** Fired when a bookmark item is removed. */
    on(type: "remove", listener: (event: { target: Bookmarks }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface BookmarksConstructor {
	    /**
	     * Creates a new Bookmark widget
	     * @param params See options list for parameters.
	     * @param srcNodeRef HTML element where the bookmark widget should be rendered.
	     */
	    new(params: BookmarksOptions, srcNodeRef: Node): Bookmarks;
	    /**
	     * Creates a new Bookmark widget
	     * @param params See options list for parameters.
	     * @param srcNodeRef HTML element where the bookmark widget should be rendered.
	     */
	    new(params: BookmarksOptions, srcNodeRef: string): Bookmarks;
  }

  /** The Directions widget makes it easy to calculate directions between two or more input locations. */
  export class Directions {
    /** Get the directions to all the locations along the route. */
    directions: tasks.DirectionsFeatureSet;
    /** An array of  objects that defines the potential matches for the input locations. */
    geocoderResults: any[];
    /** When true, the maximum number of stops for the route has been reached. */
    maxStopsReached: boolean;
    /** The graphic for the calculated route. */
    mergedRouteGraphic: Graphic;
    /** Routing parameters for the widget. */
    routeParams: tasks.RouteParameters;
    /** Routing task for the widget. */
    routeTask: tasks.RouteTask;
    /** The Service Description object returned by the Route REST Endpoint. */
    serviceDescription: any;
    /** If true, the Clear button is shown. */
    showClearButton: boolean;
    /** If true, the toggle button group allowing user to choose between Miles and Kilometers is shown. */
    showMilesKilometersOption: boolean;
    /** If true, and supported by the service, then two toggle button groups are shown: one to allow user to choose between driving a car, a truck, or walking, and one more group to choose between fastest or shortest routes. */
    showTravelModesOption: boolean;
    /** An array of graphics that define the stop locations along the route. */
    stops: Graphic[];
    /** The css theme used to style the widget. */
    theme: string;
    /** If Directions Widget runs with Travel Modes enabled, this property returns current Travel Mode name. */
    travelModeName: string;
    /** Activates the widget to listen for map clicks: each map click adds a destination to the widget automatically. */
    activate(): void;
    /**
     * Add a stop to the directions widget at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index location where the stop should be added.
     */
    addStop(stop: geometry.Point, index?: number): any;
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
    addStops(stops: geometry.Point[], index?: number): any;
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
    updateStop(stop: geometry.Point, index: number): any;
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
    updateStops(stops: geometry.Point[]): any;
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
    on(type: "directions-clear", listener: (event: { target: Directions }) => void): Handle;
    /** Fires when the route service has calculated the route and the directions are ready for display. */
    on(type: "directions-finish", listener: (event: { result: tasks.RouteResult; target: Directions }) => void): Handle;
    /** Fires when the route services starts to calculate the route. */
    on(type: "directions-start", listener: (event: { target: Directions }) => void): Handle;
    /** Fires when the directions widget has fully loaded. */
    on(type: "load", listener: (event: { target: Directions }) => void): Handle;
    /** Fired when you hover over a route segment in the directions display. */
    on(type: "segment-highlight", listener: (event: { graphic: Graphic; target: Directions }) => void): Handle;
    /** Fires when a route segment is selected in the directions display. */
    on(type: "segment-select", listener: (event: { graphic: Graphic; target: Directions }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface DirectionsConstructor {
	    /**
	     * Creates a new Directions dijit using the given DOM node.
	     * @param options Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(options: DirectionsOptions, srcNodeRef: Node): Directions;
	    /**
	     * Creates a new Directions dijit using the given DOM node.
	     * @param options Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(options: DirectionsOptions, srcNodeRef: string): Directions;
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
    /** The featureLayer that the table is associated with. */
    featureLayer: layers.FeatureLayer;
    /** Reference to the dGrid. */
    grid: any;
    /** Optional columns to hide by default using the dGrid ColumnHider extension. */
    hiddenFields: string[];
    /** A reference to the primary key used by the dataStore to differentiate columns. */
    idProperty: string;
    /** When true, the FeatureTable widget has successfully loaded. */
    loaded: boolean;
    /** Reference to the map. */
    map: Map;
    /** A dGrid property. */
    noDataMessage: string;
    /** Attribute fields to include in the FeatureTable. */
    outFields: string[];
    /** Indicates whether the data is editable via the widget. */
    readOnly: boolean;
    /** A dGrid property. */
    selectionMode: string;
    /** Fired when a row is deselected. */
    on(type: "dgrid-deselect", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fired when the grid is refreshed. */
    on(type: "dgrid-refresh-complete", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fired when a row is selected. */
    on(type: "dgrid-select", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fired when the FeatureTable is loaded. */
    on(type: "load", listener: (event: { target: FeatureTable }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface FeatureTableConstructor {
	    /**
	     * Creates an instance of the FeatureTable widget within the provided DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: FeatureTableOptions, srcNodeRef: Node): FeatureTable;
	    /**
	     * Creates an instance of the FeatureTable widget within the provided DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: FeatureTableOptions, srcNodeRef: string): FeatureTable;
  }

  /** The Gallery widget provides a touch-aware thumbnail gallery for mobile devices such as iOS and Android. */
  export class Gallery {
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
    on(type: "focus", listener: (event: { item: any; target: Gallery }) => void): Handle;
    /** Fires when an item is selected. */
    on(type: "select", listener: (event: { item: any; target: Gallery }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface GalleryConstructor {
	    /**
	     * Creates a new mobile Gallery.
	     * @param params See options list.
	     * @param srcNodeRef HTML element where the  gallery should be rendered.
	     */
	    new(params: GalleryOptions, srcNodeRef: Node): Gallery;
	    /**
	     * Creates a new mobile Gallery.
	     * @param params See options list.
	     * @param srcNodeRef HTML element where the  gallery should be rendered.
	     */
	    new(params: GalleryOptions, srcNodeRef: string): Gallery;
  }

  /** The gauge widget provides a streamlined way to create a dashboard-like interface and display data on a semi-circular gauge. */
  export class Gauge {
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
  export interface GaugeConstructor {
	    /**
	     * Create a new Gauge object.
	     * @param params See options list for parameters.
	     * @param srcNodeRef HTML element where the  gauge should be rendered.
	     */
	    new(params: GaugeOptions, srcNodeRef: Node): Gauge;
	    /**
	     * Create a new Gauge object.
	     * @param params See options list for parameters.
	     * @param srcNodeRef HTML element where the  gauge should be rendered.
	     */
	    new(params: GaugeOptions, srcNodeRef: string): Gauge;
  }

  /** Add a geographic search box to an application. */
  export class Geocoder {
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
    /** Specify a graphicsLayer to use when  highlightSymbol is true. */
    graphicsLayer: layers.GraphicsLayer;
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
    /** symbols.Symbol to use when  highlightLocation is true. */
    symbol: symbols.Symbol;
    /** Current theme being used to style the widget. */
    theme: string;
    /** Current value of the input textbox. */
    value: string;
    /** Scale to zoom to when geocoder does not return an extent. */
    zoomScale: number;
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
    on(type: "auto-complete", listener: (event: { results : any; target: Geocoder }) => void): Handle;
    /** Fired when a result is cleared from the input box or a new result is selected. */
    on(type: "clear", listener: (event: { target: Geocoder }) => void): Handle;
    /** Fired when results are returned from a search. */
    on(type: "find-results", listener: (event: { results: any; target: Geocoder }) => void): Handle;
    /** Fired when a geocoder is selected. */
    on(type: "geocoder-select", listener: (event: { geocoder: any; target: Geocoder }) => void): Handle;
    /** Fired when a result has been selected, the submit button is pressed, or the enter key is fired. */
    on(type: "select", listener: (event: { results: any; target: Geocoder }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface GeocoderConstructor {
	    /**
	     * Create a new Geocoder widget using the given DOM node.
	     * @param params Set of parameters used to specify Geocoder options.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: GeocoderOptions, srcNodeRef: Node): Geocoder;
	    /**
	     * Create a new Geocoder widget using the given DOM node.
	     * @param params Set of parameters used to specify Geocoder options.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: GeocoderOptions, srcNodeRef: string): Geocoder;
  }

  /** The HistogramTimeSlider dijit provides a histogram chart representation of data for time-enabled layers on a map. */
  export class HistogramTimeSlider {
    /** Set related objects as null and hide the widget. */
    destroy(): void;
    /** Fires whenever the slider moved, and the visible time extent is changed. */
    on(type: "time-extent-change", listener: (event: { target: HistogramTimeSlider }) => void): Handle;
    /** Fires fires each time the histogram is drawn. */
    on(type: "update", listener: (event: { target: HistogramTimeSlider }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface HistogramTimeSliderConstructor {
	    /**
	     * Creates a new HistogramTimeSlider dijit using the given DOM node.
	     * @param params Input parameters.
	     * @param srcNodeRef HTML element where the tool should be rendered.
	     */
	    new(params: HistogramTimeSliderOptions, srcNodeRef: Node): HistogramTimeSlider;
	    /**
	     * Creates a new HistogramTimeSlider dijit using the given DOM node.
	     * @param params Input parameters.
	     * @param srcNodeRef HTML element where the tool should be rendered.
	     */
	    new(params: HistogramTimeSliderOptions, srcNodeRef: string): HistogramTimeSlider;
  }

  /** HomeButton provides a simple button to return to the map's default starting extent. */
  export class HomeButton {
    /** The extent used to zoom to when clicked. */
    extent: geometry.Extent;
    /** Whether the widget has been loaded. */
    loaded: boolean;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** Class used for styling the widget. */
    theme: string;
    /** Whether the widget is visible by default. */
    visible: boolean;
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
    on(type: "home", listener: (event: { error: any; extent: geometry.Extent; target: HomeButton }) => void): Handle;
    /** Fires when the widget has been loaded. */
    on(type: "load", listener: (event: { target: HomeButton }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface HomeButtonConstructor {
	    /**
	     * Creates a new HomeButton dijit using the given DOM node.
	     * @param params Various parameters to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: HomeButtonOptions, srcNodeRef: Node): HomeButton;
	    /**
	     * Creates a new HomeButton dijit using the given DOM node.
	     * @param params Various parameters to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: HomeButtonOptions, srcNodeRef: string): HomeButton;
  }

  /** An InfoWindow is an HTML popup. */
  export class InfoWindow extends InfoWindowBase {
    /** Placement of the InfoWindow with respect to the graphic. */
    anchor: string;
    /** The anchor point of the InfoWindow in screen coordinates. */
    coords: geometry.Point;
    /** InfoWindow always show with the specified anchor. */
    fixedAnchor: string;
    /** Determines whether the InfoWindow is currently shown on the map. */
    isShowing: boolean;
    /** Hides the InfoWindow. */
    hide(): void;
    /**
     * Moves the InfoWindow to the specified screen point.
     * @param point The new anchor point when moving the InfoWindow.
     */
    move(point: geometry.Point): void;
    /**
     * Resizes the InfoWindow to the specified height and width in pixels.
     * @param width The new width of the InfoWindow in pixels.
     * @param height The new height of the InfoWindow in pixels.
     */
    resize(width: number, height: number): void;
    /**
     * Sets the content in the InfoWindow.
     * @param content The content for the InfoWindow.
     */
    setContent(content: any): InfoWindow;
    /**
     * Sets the fixed location of the InfoWindow anchor.
     * @param anchor Fixed anchor that cannot be overridden by InfoWindow.show().
     */
    setFixedAnchor(anchor: string): void;
    /**
     * Sets the title for the InfoWindow.
     * @param title The title for the InfoWindow.
     */
    setTitle(title: string): InfoWindow;
    /**
     * Display the InfoWindow at the specified location.
     * @param point Location to place anchor.
     * @param placement Placement of the InfoWindow with respect to the graphic.
     */
    show(point: geometry.Point, placement?: string): void;
    /** Fires when an infoWindow is hidden. */
    on(type: "hide", listener: (event: { target: InfoWindow }) => void): Handle;
    /** Fires when an InfoWindow is visible. */
    on(type: "show", listener: (event: { target: InfoWindow }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface InfoWindowConstructor {
	    /** InfoWindow is anchored to the lower left of the point. */
	  ANCHOR_LOWERLEFT: any;
	    /** InfoWindow is anchored to the lower right of the point. */
	  ANCHOR_LOWERRIGHT: any;
	    /** InfoWindow is anchored to the upper left of the point. */
	  ANCHOR_UPPERLEFT: any;
	    /** InfoWindow is anchored to the upper right of the point. */
	  ANCHOR_UPPERRIGHT: any;
	    /**
	     * Create a new Info Window.
	     * @param params Optional parameters.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: any, srcNodeRef: Node): InfoWindow;
	    /**
	     * Create a new Info Window.
	     * @param params Optional parameters.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: any, srcNodeRef: string): InfoWindow;
  }

  /** Creates a new InfoWindowLite object. */
  export class InfoWindowLite extends InfoWindowBase {
    /** Placement of the InfoWindow with respect to the graphic. */
    anchor: string;
    /** The anchor point of the InfoWindowLite in screen coordinates. */
    coords: geometry.Point;
    /** Always display the info window using the specified anchor. */
    fixedAnchor: string;
    /** Determines whether the InfoWindowLite is currently shown on the map. */
    isShowing: boolean;
    /** Hides the InfoWindow. */
    hide(): void;
    /**
     * Moves the InfoWindow to the specified screen point.
     * @param point The new anchor point when moving the InfoWindowLite.
     */
    move(point: geometry.Point): void;
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
    setTitle(title: string): InfoWindow;
    /**
     * Display the InfoWindow at the specified location.
     * @param point Location to place anchor.
     * @param placement Placement of the InfoWindow with respect to the graphic.
     */
    show(point: geometry.Point, placement?: string): void;
    /** Fires when an infoWindow is hidden. */
    on(type: "hide", listener: (event: { target: InfoWindowLite }) => void): Handle;
    /** Fires when an InfoWindowLite is displayed. */
    on(type: "show", listener: (event: { target: InfoWindowLite }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface InfoWindowLiteConstructor {
      new(): InfoWindowLite
  }

  /** LayerSwipe provides a simple tool to show a portion of a layer or layers on top of a map. */
  export class LayerSwipe {
    /** The number of pixels to clip the swipe tool. */
    clip: number;
    /** If the widget is enabled and layers can be swiped. */
    enabled: boolean;
    /** The layers to be swiped. */
    layers: layers.Layer[];
    /** The number of pixels to place the tool from the left of the map. */
    left: number;
    /** Whether the widget has been loaded. */
    loaded: boolean;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** Class used for styling the widget. */
    theme: string;
    /** The number of pixels to place the tool from the top of the map. */
    top: number;
    /** Type of swipe tool to use. */
    type: string;
    /** Whether the widget is visible by default. */
    visible: boolean;
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
    on(type: "load", listener: (event: { target: LayerSwipe }) => void): Handle;
    /** Event is fired when the tool has moved. */
    on(type: "swipe", listener: (event: { layers: any[]; target: LayerSwipe }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface LayerSwipeConstructor {
	    /**
	     * Creates a new LayerSwipe dijit using the given DOM node.
	     * @param params Various parameters to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: LayerSwipeOptions, srcNodeRef: Node): LayerSwipe;
	    /**
	     * Creates a new LayerSwipe dijit using the given DOM node.
	     * @param params Various parameters to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: LayerSwipeOptions, srcNodeRef: string): LayerSwipe;
  }

  /** The legend dijit displays a label and symbol for some or all of the layers in the map. */
  export class Legend {
    /** Destroys the legend. */
    destroy(): void;
    /** Refresh the legend. */
    refresh(): void;
    /** Finalizes the creation of the legend . */
    startup(): void;
  }
  export interface LegendConstructor {
	    /**
	     * Creates a new Legend dijit.
	     * @param params Parameters used to configure the dijit.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: LegendOptions, srcNodeRef: Node): Legend;
	    /**
	     * Creates a new Legend dijit.
	     * @param params Parameters used to configure the dijit.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: LegendOptions, srcNodeRef: string): Legend;
  }

  /** LocateButton provides a simple button to locate and zoom to the users current location. */
  export class LocateButton {
    /** Centers the map to the location when a new position is returned. */
    centerAt: boolean;
    /** Removes existing graphic when tracking stops. */
    clearOnTrackingStop: boolean;
    /** The HTML5 Geolocation Position options for locating. */
    geolocationOptions: any;
    /** layers.Layer in which the highlighted graphic is set to. */
    graphicsLayer: layers.GraphicsLayer;
    /** If true, the users location will be highlighted with a point. */
    highlightLocation: boolean;
    /** The infoTemplate used for the highlight graphic. */
    infoTemplate: InfoTemplate;
    /** Whether the widget has been loaded. */
    loaded: boolean;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** The scale to zoom to when a users location has been found. */
    scale: number;
    /** Sets the maps scale when a new position is returned. */
    setScale: boolean;
    /** The symbol used on the highlight graphic to highlight the users location on the map. */
    symbol: symbols.Symbol;
    /** Class used for styling the widget. */
    theme: string;
    /** Shows the current tracking state. */
    tracking: boolean;
    /** When enabled, the button becomes a toggle that creates an event to watch for location changes. */
    useTracking: boolean;
    /** Whether the widget is visible. */
    visible: boolean;
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
    on(type: "load", listener: (event: { target: LocateButton }) => void): Handle;
    /** Fires when the locate method has been called. */
    on(type: "locate", listener: (event: { error: any; graphic: Graphic; position: any; scale: number; target: LocateButton }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface LocateButtonConstructor {
	    /**
	     * Creates a new LocateButton dijit using the given DOM node.
	     * @param params Various parameters to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: LocateButtonOptions, srcNodeRef: Node): LocateButton;
	    /**
	     * Creates a new LocateButton dijit using the given DOM node.
	     * @param params Various parameters to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: LocateButtonOptions, srcNodeRef: string): LocateButton;
  }

  /** The Measurement widget provides tools for calculating the current location (Get Location) and measuring distance (Measure Distance) and area (Measure Area). */
  export class Measurement {
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
     * @param geometry geometry.Geometry to be measured.
     */
    measure(geometry: geometry.Point): void;
    /**
     * Invoke the measurement functionality of the widget by passing in a previously created geometry.
     * @param geometry geometry.Geometry to be measured.
     */
    measure(geometry: geometry.Polyline): void;
    /**
     * Invoke the measurement functionality of the widget by passing in a previously created geometry.
     * @param geometry geometry.Geometry to be measured.
     */
    measure(geometry: geometry.Polygon): void;
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
    on(type: "measure", listener: (event: { geometry: geometry.Geometry; toolName: string; unitName: string; values: number; target: Measurement }) => void): Handle;
    /** Fired when the measurement is complete. */
    on(type: "measure-end", listener: (event: { geometry: geometry.Geometry; toolName: string; unitName: string; values: any; target: Measurement }) => void): Handle;
    /** Fires when a measurement operation begins (single-click). */
    on(type: "measure-start", listener: (event: { toolName: string; unitName: string; target: Measurement }) => void): Handle;
    /** Fires when the primary tool is changed. */
    on(type: "tool-change", listener: (event: { toolName: string; unitName: string; target: Measurement }) => void): Handle;
    /** Fires when the units currently being used by the Measurement widget changes. */
    on(type: "unit-change", listener: (event: { toolName: string; unitName: string; target: Measurement }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface MeasurementConstructor {
	    /**
	     * Creates a new Measurement widget.
	     * @param params See options list for parameters.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: MeasurementOptions, srcNodeRef: Node): Measurement;
	    /**
	     * Creates a new Measurement widget.
	     * @param params See options list for parameters.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: MeasurementOptions, srcNodeRef: string): Measurement;
  }

  /** The OverviewMap widget displays the current extent of the map within the context of a larger area. */
  export class OverviewMap {
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
    /** Finalizes the creation of the OverviewMap dijit. */
    startup(): void;
  }
  export interface OverviewMapConstructor {
	    /**
	     * Creates a new OverviewMap object.
	     * @param params Parameters that define the functionality of the OverviewMap widget.
	     * @param srcNodeRef HTML element where the widget should be rendered.
	     */
	    new(params: OverviewMapOptions, srcNodeRef: Node): OverviewMap;
	    /**
	     * Creates a new OverviewMap object.
	     * @param params Parameters that define the functionality of the OverviewMap widget.
	     * @param srcNodeRef HTML element where the widget should be rendered.
	     */
	    new(params: OverviewMapOptions, srcNodeRef: string): OverviewMap;
  }

  /** The Popup class is an implementation of InfoWindow that inherits from InfoWindowBase to provide additional capabilities. */
  export class Popup extends InfoWindowBase {
    /** Controls the placement of the popup window with respect to the geographic location. */
    anchor: string;
    /** The number of features associated with the info window. */
    count: number;
    /** An array of  pending deferreds, null if there are not any pending deferreds. */
    deferreds: any[];
    /** The HTML element (reference to a DOM Node) where the info window is constructed. */
    domNode: any;
    /** The array of features currently associated with the info window. */
    features: Graphic[];
    /** Define the symbol used to highlight polygon features. */
    fillSymbol: symbols.FillSymbol;
    /** Number of milliseconds after which the popup window will be hidden when visibleWhenEmpty is false and there are no features to be displayed. */
    hideDelay: number;
    /** Indicates whether popup should highlight features. */
    highlight: boolean;
    /** Indicates if the info window is visible. */
    isShowing: boolean;
    /** Indicates whether a feature should remain highlighted after the user closes the popup window. */
    keepHighlightOnHide: boolean;
    /** Define the symbol used to highlight line features. */
    lineSymbol: symbols.LineSymbol;
    /** The location the info window is pointing to. */
    location: geometry.Point;
    /** Specify the margin (in pixels) to leave to the left of the popup window when it is maximized. */
    marginLeft: number;
    /** Specify the margin (in pixels) to leave at the top of the popup window when it is maximized. */
    marginTop: number;
    /** Define the marker symbol used to highlight point features. */
    markerSymbol: symbols.MarkerSymbol;
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
    /** Removes all features and destroys any pending deferreds. */
    clearFeatures(): void;
    /** Destroy the popup. */
    destroy(): void;
    /** Get the currently selected feature. */
    getSelectedFeature(): Graphic;
    /** Hide the info window. */
    hide(): void;
    /** Maximize the info window. */
    maximize(): void;
    /** Re-calculates the popup's position with respect to the map location it is pointing to. */
    reposition(): void;
    /**
     * Resize the info window to the specified height (in pixels).
     * @param width The new width of the InfoWindow in pixels.
     * @param height The new height of the InfoWindow in pixels.
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
    setFeatures(features: Graphic[]): void;
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
     * @param location An instance of geometry.Point that represents the geographic location to display the popup.
     * @param options See the object specifications table below for the structure of the  options  object.
     */
    show(location: geometry.Point, options?: any): void;
    /** Fired when clearFeatures is called. */
    on(type: "clear-features", listener: (event: { target: Popup }) => void): Handle;
    /** Fired when the info window is hidden. */
    on(type: "hide", listener: (event: { target: Popup }) => void): Handle;
    /** Fired when the popup has finished maximizing. */
    on(type: "maximize", listener: (event: { target: Popup }) => void): Handle;
    /** Fired when the popup has been restored from its maximized state. */
    on(type: "restore", listener: (event: { target: Popup }) => void): Handle;
    /** Fired when the selection changes. */
    on(type: "selection-change", listener: (event: { target: Popup }) => void): Handle;
    /** Fired after registering an array of features. */
    on(type: "set-features", listener: (event: { target: Popup }) => void): Handle;
    /** Fired when the info window becomes visible. */
    on(type: "show", listener: (event: { target: Popup }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface PopupConstructor {
	    /**
	     * Create a new Popup object.
	     * @param options Optional parameters.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(options: PopupOptions, srcNodeRef: Node): Popup;
	    /**
	     * Create a new Popup object.
	     * @param options Optional parameters.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(options: PopupOptions, srcNodeRef: string): Popup;
  }

  /** The PopupMobile class is an implementation of InfoWindow that inherits from InfoWindowBase to provide additional capabilities. */
  export class PopupMobile extends InfoWindowBase {
    /** The location the info window is pointing to. */
    location: geometry.Point;
    /** Removes all features and destroys any pending deferreds. */
    clearFeatures(): void;
    /** Destroy the popup. */
    destroy(): void;
    /** Get the currently selected feature. */
    getSelectedFeature(): Graphic;
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
    setFeatures(features: Graphic[]): any;
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
     * @param location An instance of geometry.Point that represents the geographic location to display the popup.
     */
    show(location: geometry.Point): void;
    /** Fired when clearFeatures is called. */
    on(type: "clear-features", listener: (event: { target: PopupMobile }) => void): Handle;
    /** Fired when the info window is hidden. */
    on(type: "hide", listener: (event: { target: PopupMobile }) => void): Handle;
    /** Fired when the selection changes. */
    on(type: "selection-change", listener: (event: { target: PopupMobile }) => void): Handle;
    /** Fired after registering an array of features. */
    on(type: "set-features", listener: (event: { target: PopupMobile }) => void): Handle;
    /** Fired when the info window becomes visible. */
    on(type: "show", listener: (event: { target: PopupMobile }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface PopupMobileConstructor {
	    /**
	     * Create a new PopupMobile object.
	     * @param options Optional parameters.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(options: PopupMobileOptions, srcNodeRef: Node): PopupMobile;
	    /**
	     * Create a new PopupMobile object.
	     * @param options Optional parameters.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(options: PopupMobileOptions, srcNodeRef: string): PopupMobile;
  }

  /** The PopupTemplate class extends esri/InfoTemplate and provides support for defining a layout. */
  export class PopupTemplate extends InfoTemplate {
    /** The popup definition defined as a JavaScript object. */
    info: any;
  }
  export interface PopupTemplateConstructor {
	    /**
	     * Create a new PopupTemplate object.
	     * @param popupInfo An object that defines popup content.
	     * @param options Optional parameters.
	     */
	    new(popupInfo: any, options?: PopupTemplateOptions): PopupTemplate;
  }

  /** The Print widget simplifies the process of printing a map using a default or user-defined layout. */
  export class Print {
    /** Destroys the print widget. */
    destroy(): void;
    /** Hide the print widget. */
    hide(): void;
    /**
     * User can call this function so that it programatically print the map.
     * @param template Print template.
     */
    printMap(template: tasks.PrintTemplate): void;
    /** Set the print widget's visibility to true. */
    show(): void;
    /** Finalizes the creation of the print widget. */
    startup(): void;
    /** Fired when an error occurs during the print request. */
    on(type: "error", listener: (event: { error: Error; target: Print }) => void): Handle;
    /** Fired when the print job has succeeded. */
    on(type: "print-complete", listener: (event: { value: any; target: Print }) => void): Handle;
    /** Fired when the request is sent to the print service. */
    on(type: "print-start", listener: (event: { target: Print }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface PrintConstructor {
	    /**
	     * Creates a new Print widget.
	     * @param params Parameters for the print widget.
	     * @param srcNodeRef HTML element where the print widget button and drop down list will be rendered.
	     */
	    new(params: PrintOptions, srcNodeRef: Node): Print;
	    /**
	     * Creates a new Print widget.
	     * @param params Parameters for the print widget.
	     * @param srcNodeRef HTML element where the print widget button and drop down list will be rendered.
	     */
	    new(params: PrintOptions, srcNodeRef: string): Print;
  }

  /** The Scalebar widget displays a scalebar on the map or in a specified HTML node. */
  export class Scalebar {
    /** Destroy the scalebar. */
    destroy(): void;
    /** Hide the scalebar dijit. */
    hide(): void;
    /** Set the scalebar's visibility to true. */
    show(): void;
  }
  export interface ScalebarConstructor {
	    /**
	     * Creates a new Scalebar dijit.
	     * @param params Parameters used to configure the widget.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: ScalebarOptions, srcNodeRef?: Node): Scalebar;
	    /**
	     * Creates a new Scalebar dijit.
	     * @param params Parameters used to configure the widget.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: ScalebarOptions, srcNodeRef?: string): Scalebar;
  }

  /** The TimeSlider widget is used for visualizing content within a map that contains time-aware layers. */
  export class TimeSlider {
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
     * The specified number of time stops are created for the input time extent.
     * @param timeExtent The time extent used to define the time slider's start and end time stops.
     * @param count The number of time stops to create.
     */
    createTimeStopsByCount(timeExtent: TimeExtent, count?: number): void;
    /**
     * Create a time stop for each interval specified, i.e., (week, month, day).
     * @param timeExtent The time extent used to define the time slider's start and end time stops.
     * @param timeInterval The length of the time interval.
     * @param timeIntervalUnits  Valid values are listed in the layers.TimeInfo constants table.
     */
    createTimeStopsByTimeInterval(timeExtent: TimeExtent, timeInterval?: number, timeIntervalUnits?: string): void;
    /** Gets the current time extent for the time slider. */
    getCurrentTimeExtent(): TimeExtent;
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
    /** Fires when the timeExtent of the TimeSlider is changed. */
    on(type: "time-extent-change", listener: (event: { timeExtent: TimeExtent; target: TimeSlider }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface TimeSliderConstructor {
	    /**
	     * Creates a new TimeSlider object.
	     * @param params Parameters for the time slider object.
	     * @param srcNodeRef HTML element where the time slider should be rendered.
	     */
	    new(params: TimeSliderOptions, srcNodeRef: Node): TimeSlider;
	    /**
	     * Creates a new TimeSlider object.
	     * @param params Parameters for the time slider object.
	     * @param srcNodeRef HTML element where the time slider should be rendered.
	     */
	    new(params: TimeSliderOptions, srcNodeRef: string): TimeSlider;
  }
}
declare namespace esriTypes.dijit.analysis {

  /** The AggregatePoints widget works with point feature layer and a polygon feature layer. */
  export class AggregatePoints extends AnalysisBase {
    /** A field name from pointLayer based on which the points will be grouped. */
    groupByField: string;
    /** When true, the polygons that have no points within them will be returned in the output. */
    keepBoundariesWithNoPoints: boolean;
    /** Reference to the map object. */
    map: Map;
    /** When true, two fields will be added to your result layer to indicate which attribute values within each group are the minority (least dominant) or the majority (most dominant)  within each boundary. */
    minorityMajority: boolean;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** When true, a new field will be added to the result table containing the percentages of each attribute value within each group. */
    percentPoints: boolean;
    /** The point feature layer that will be aggregated into the polygons in the polygon feature layer. */
    pointLayer: layers.FeatureLayer;
    /** The polygon layer to be shown selected in in the Choose area menu. */
    polygonLayer: layers.FeatureLayer;
    /** An array of feature layer candidates to be selected as the input polygon layer. */
    polygonLayers: layers.FeatureLayer[];
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
  }
  export interface AggregatePointsConstructor {
	    /**
	     * Creates a new AggregatePoints dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: AggregatePointsOptions, srcNodeRef: Node): AggregatePoints;
	    /**
	     * Creates a new AggregatePoints dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: AggregatePointsOptions, srcNodeRef: string): AggregatePoints;
  }

  /** The AnalysisBase widget is the base class for all other widgets under esri/dijit/analysis. */
  export class AnalysisBase {
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
    on(type: "close", listener: (event: { target: AnalysisBase }) => void): Handle;
    /** Fires when the drawn boundaries option is activated. */
    on(type: "drawtool-activate", listener: (event: { target: AnalysisBase }) => void): Handle;
    /** Fires when the drawn boundaries option is deactivated. */
    on(type: "drawtool-deactivate", listener: (event: { target: AnalysisBase }) => void): Handle;
    /** Fires when the job in cancelled. */
    on(type: "job-cancel", listener: (event: { response: any; target: AnalysisBase }) => void): Handle;
    /** Fires when the job fails. */
    on(type: "job-fail", listener: (event: { error: any; target: AnalysisBase }) => void): Handle;
    /** Fires after the job fetches result data. */
    on(type: "job-result", listener: (event: { result: any; target: AnalysisBase }) => void): Handle;
    /** Fires when the job execution status is received. */
    on(type: "job-status", listener: (event: { jobInfo: any; target: AnalysisBase }) => void): Handle;
    /** Fires when the job is submitted to the server for asynchronous processing. */
    on(type: "job-submit", listener: (event: { params: any; target: AnalysisBase }) => void): Handle;
    /** Fires when the job succeeds. */
    on(type: "job-success", listener: (event: { jobInfo: any; target: AnalysisBase }) => void): Handle;
    /** Fires when the execute method is called. */
    on(type: "start", listener: (event: { params: any; target: AnalysisBase }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface AnalysisBaseConstructor {
      new(): AnalysisBase
  }

  /** Create a density map from point or line features by spreading known quantities of some phenomenon (represented as attributes of the points or lines) across the map. */
  export class CalculateDensity extends AnalysisBase {
    /** Possible values are "SquareMiles" or "SquareKilometers". */
    areaUnits: string;
    /** A layer specifying the area where you want densities to be calculated. */
    boundingPolygonLayer: layers.FeatureLayer;
    /** An array of feature layer candidates to be selected as the bounding polygon layer. */
    boundingPolygonLayers: layers.FeatureLayer[];
    /** Classification type to use for the analysis. */
    classificationType: string;
    /** The input point, line, or polygon feature layer. */
    inputLayer: layers.FeatureLayer;
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
  }
  export interface CalculateDensityConstructor {
	    /**
	     * Creates a new CalculateDensity dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node): CalculateDensity;
	    /**
	     * Creates a new CalculateDensity dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: string): CalculateDensity;
  }

  /** Measure the travel time or distance between pairs of points. */
  export class ConnectOriginsToDestinations extends AnalysisBase {
    /** When true, Travel Modes (Driving Distance, Driving Time) are enabled for analysisLayer with point geometries. */
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
  }
  export interface ConnectOriginsToDestinationsConstructor {
	    /**
	     * Creates a new ConnectOriginsToDestinations dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node): ConnectOriginsToDestinations;
	    /**
	     * Creates a new ConnectOriginsToDestinations dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: string): ConnectOriginsToDestinations;
  }

  /** The CreateBuffers widget creates polygons that cover a given distance from an input point, line, or polygon feature layer. */
  export class CreateBuffers extends AnalysisBase {
    /** An array of buffer distances to buffer the input feature layer. */
    bufferDistance: number[];
    /** The input point, line, or polygon feature layer to be buffered. */
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map: Map;
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
  }
  export interface CreateBuffersConstructor {
	    /**
	     * Creates a new CreateBuffers dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: CreateBuffersOptions, srcNodeRef: Node): CreateBuffers;
	    /**
	     * Creates a new CreateBuffers dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: CreateBuffersOptions, srcNodeRef: string): CreateBuffers;
  }

  /** The CreateDriveTimeAreas widget creates drive-time (or drive-distance) polygons around input points for the given drive-time values. */
  export class CreateDriveTimeAreas extends AnalysisBase {
    /** The units of the breakValues parameter. */
    breakUnits: string;
    /** An array of driving time break values. */
    breakValues: number[];
    /** The point feature layer around which drive-time areas will be drawn. */
    inputLayer: layers.FeatureLayer;
    /** The geometry type of the input layer. */
    inputType: string;
    /** Reference to the map object. */
    map: Map;
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
  }
  export interface CreateDriveTimeAreasConstructor {
	    /**
	     * Creates a new CreateDriveTimeAreas dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: CreateDriveTimeAreasOptions, srcNodeRef: Node): CreateDriveTimeAreas;
	    /**
	     * Creates a new CreateDriveTimeAreas dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: CreateDriveTimeAreasOptions, srcNodeRef: string): CreateDriveTimeAreas;
  }

  /** Creates areas that are visible based on locations you specify. */
  export class CreateViewshed extends AnalysisBase {
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
  }
  export interface CreateViewshedConstructor {
	    /**
	     * Creates a new CreateViewshed dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node): CreateViewshed;
	    /**
	     * Creates a new CreateViewshed dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: string): CreateViewshed;
  }

  /** Creates catchment areas based on locations you specify. */
  export class CreateWatersheds extends AnalysisBase {
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
  }
  export interface CreateWatershedsConstructor {
	    /**
	     * Creates a new CreateWatersheds dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node): CreateWatersheds;
	    /**
	     * Creates a new CreateWatersheds dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: string): CreateWatersheds;
  }

  /** Derive new features from the input layers that meet a query you specify. */
  export class DeriveNewLocations extends AnalysisBase {
    /** The analysis layer to derive new locations from. */
    analysisLayer: layers.FeatureLayer;
    /** An array of feature layers to use as input. */
    inputLayers: layers.FeatureLayer[];
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
  }
  export interface DeriveNewLocationsConstructor {
	    /**
	     * Creates a new DeriveNewLocations dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node): DeriveNewLocations;
	    /**
	     * Creates a new DeriveNewLocations dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: string): DeriveNewLocations;
  }

  /** The DissolveBoundaries widget finds polygons that overlap or share a common boundary, and merges them together to form a single polygon. */
  export class DissolveBoundaries extends AnalysisBase {
    /** An array of field names based on which polygons are merged. */
    dissolveFields: string[];
    /** The layer containing polygon features that will be dissolved. */
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map: Map;
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
  }
  export interface DissolveBoundariesConstructor {
	    /**
	     * Creates a new DissolveBoundaries dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: DissolveBoundariesOptions, srcNodeRef: Node): DissolveBoundaries;
	    /**
	     * Creates a new DissolveBoundaries dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: DissolveBoundariesOptions, srcNodeRef: string): DissolveBoundaries;
  }

  /** The EnrichLayer widget enriches an input layer with facts about the people, places, and businesses nearby. */
  export class EnrichLayer extends AnalysisBase {
    /** An buffer distance or driving time value to buffer the input feature layer. */
    distance: number;
    /** When true, Travel Modes (Driving Time) is enabled for inputLayer with point geometries (esriGeometryPoint). */
    enableTravelModes: boolean;
    /** The input feature layer to enrich with new data. */
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map: Map;
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
  }
  export interface EnrichLayerConstructor {
	    /**
	     * Creates a new EnrichLayer dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: EnrichLayerOptions, srcNodeRef: Node): EnrichLayer;
	    /**
	     * Creates a new EnrichLayer dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: EnrichLayerOptions, srcNodeRef: string): EnrichLayer;
  }

  /** The ExtractData widget is used to extract data from one or more layers within a given extent. */
  export class ExtractData extends AnalysisBase {
    /** If true, the Clip features option in Study area will be ckecked. */
    clip: boolean;
    /** The format of output data shown as the default selection in the Output data format menu. */
    dataFormat: string;
    /** An array for feature layers to be extracted. */
    featureLayers: layers.FeatureLayer[];
    /** An array of feature layers to be shown in the Layers to extract menu as selected. */
    inputLayers: layers.FeatureLayer[];
    /** Reference to the map object. */
    map: Map;
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
  }
  export interface ExtractDataConstructor {
	    /**
	     * Creates a new ExtractData dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: ExtractDataOptions, srcNodeRef: Node): ExtractData;
	    /**
	     * Creates a new ExtractData dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: ExtractDataOptions, srcNodeRef: string): ExtractData;
  }

  /** Select features in the input layer that meet an attribute and/or spatial query you specify. */
  export class FindExistingLocations extends AnalysisBase {
    /** The analysis layer to find existing locations from. */
    analysisLayer: layers.FeatureLayer;
    /** An array of feature layers to use as input. */
    inputLayers: layers.FeatureLayer[];
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
  }
  export interface FindExistingLocationsConstructor {
	    /**
	     * Creates a new FindExistingLocations dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node): FindExistingLocations;
	    /**
	     * Creates a new FindExistingLocations dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: string): FindExistingLocations;
  }

  /** The FindHotSpots widget finds statistically significant clusters of incident points, weighted points, or weighted polygons. */
  export class FindHotSpots extends AnalysisBase {
    /** An array of feature layer candidates to be selected as the aggregation polygon layer. */
    aggregationPolygonLayers: layers.FeatureLayer[];
    /** The numeric field in the AnalysisLayer that will be analyzed. */
    analysisField: string;
    /** The feature layer for which hot spots will be calculated. */
    analysisLayer: layers.FeatureLayer;
    /** A layer of bounding areas to answer the question: Within the bounding areas, are there any locations with unexpectedly high or low point concentrations? */
    boundingPolygonLayer: layers.FeatureLayer;
    /** An array of feature layer candidates to be selected as the bounding polygon layer. */
    boundingPolygonLayers: layers.FeatureLayer[];
    /** Reference to the map object. */
    map: Map;
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
  }
  export interface FindHotSpotsConstructor {
	    /**
	     * Creates a new FindHotSpots dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: FindHotSpotsOptions, srcNodeRef: Node): FindHotSpots;
	    /**
	     * Creates a new FindHotSpots dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: FindHotSpotsOptions, srcNodeRef: string): FindHotSpots;
  }

  /** The FindNearest widget works with two layers: an analysis layer and a near layer. */
  export class FindNearest extends AnalysisBase {
    /** The feature layer from which the nearest features are found. */
    analysisLayer: layers.FeatureLayer;
    /** When true, Travel Modes (Driving Distance, Driving Time) are enabled for analysisLayer with point geometries (esriGeometryPoint). */
    enableTravelModes: boolean;
    /** Reference to the map object. */
    map: Map;
    /** The maximum number of nearest locations to find for each feature in analysisLayer. */
    maxCount: number;
    /** The feature layer to be shown selected in the "1. */
    nearLayer: layers.FeatureLayer;
    /** An array of near layer candidates. */
    nearLayers: layers.FeatureLayer[];
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
  }
  export interface FindNearestConstructor {
	    /**
	     * Creates a new FindNearest dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: FindNearestOptions, srcNodeRef: Node): FindNearest;
	    /**
	     * Creates a new FindNearest dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: FindNearestOptions, srcNodeRef: string): FindNearest;
  }

  /** Measure the similarity of candidate locations to one or more reference locations. */
  export class FindSimilarLocations extends AnalysisBase {
    /** The input point, line, or polygon feature layer. */
    inputLayer: layers.FeatureLayer;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** Return a report of the analysis process. */
    returnProcessInfo: boolean;
    /** The point, line, or polygon feature layer to search. */
    searchLayers: layers.FeatureLayer[];
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Fires when the select tool option is activated. */
    on(type: "selecttool-activate", listener: (event: { target: FindSimilarLocations }) => void): Handle;
    /** Fires when the select tool option is deactivated. */
    on(type: "selecttool-deactivate", listener: (event: { target: FindSimilarLocations }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface FindSimilarLocationsConstructor {
	    /**
	     * Creates a new FindSimilarLocations dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node): FindSimilarLocations;
	    /**
	     * Creates a new FindSimilarLocations dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: string): FindSimilarLocations;
  }

  /** Predict values at new locations based on measurements from a collection of points. */
  export class InterpolatePoints extends AnalysisBase {
    /** A layer specifying the area where you want the result to be drawn. */
    boundingPolygonLayer: layers.FeatureLayer;
    /** geometry.Polygon layers (optional). */
    boundingPolygonLayers: layers.FeatureLayer[];
    /** Classification type to use for the analysis. */
    classificationType: string;
    /** The point features that will be interpolated. */
    inputLayer: layers.FeatureLayer;
    /** Maximum number to display in widget UI from which user can pick the number of classes to use in the analysis. */
    maxClasses: number;
    /** Minimum number to display in widget UI from which user can pick the number of classes to use in the analysis. */
    minClasses: number;
    /** The number of classes (range of predicted values) in the result layer. */
    numClasses: number;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** geometry.Point layers (optional). */
    predictAtPointLayers: layers.FeatureLayer[];
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
  }
  export interface InterpolatePointsConstructor {
	    /**
	     * Creates a new InterpolatePoints dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node): InterpolatePoints;
	    /**
	     * Creates a new InterpolatePoints dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: string): InterpolatePoints;
  }

  /** The MergeLayers widget copies features from two layers into a new layer. */
  export class MergeLayers extends AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** The feature layer to be merged with the mergeLayer. */
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map: Map;
    /** An array of feature layer candidates to be selected as the merge layer. */
    mergeLayers: layers.FeatureLayer[];
    /** An array of values that describe how fields from the mergeLayer are to be modified. */
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
  }
  export interface MergeLayersConstructor {
	    /**
	     * Creates a new MergeLayers dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: MergeLayersOptions, srcNodeRef: Node): MergeLayers;
	    /**
	     * Creates a new MergeLayers dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: MergeLayersOptions, srcNodeRef: string): MergeLayers;
  }

  /** The OverlayLayers widget combines two or more layers into one single layer containing all the information found in the stack. */
  export class OverlayLayers extends AnalysisBase {
    /** The feature layer that will be overlayed with the overlayLayer. */
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** An array of feature layers to be overlaid with inputLayer. */
    overlayLayer: layers.FeatureLayer[];
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
  }
  export interface OverlayLayersConstructor {
	    /**
	     * Creates a new OverlayLayers dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: OverlayLayersOptions, srcNodeRef: Node): OverlayLayers;
	    /**
	     * Creates a new OverlayLayers dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: OverlayLayersOptions, srcNodeRef: string): OverlayLayers;
  }

  /** Determine how to efficiently divide tasks among a mobile workforce. */
  export class PlanRoutes extends AnalysisBase {
    /** Possible values are "Miles" or "Kilometers". */
    distanceDefaultUnits: string;
    /** Provide the locations where the people or vehicles end their routes. */
    endLayer: string;
    /** Layers to list in the dijit's input boxes. */
    featureLayers: layers.FeatureLayer[];
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
    stopsLayer: layers.FeatureLayer;
  }
  export interface PlanRoutesConstructor {
	    /**
	     * Creates a new PlanRoutes dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node): PlanRoutes;
	    /**
	     * Creates a new PlanRoutes dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: string): PlanRoutes;
  }

  /** The FindNearest widget works with two layers: an summarize nearby layer and a summary layer. */
  export class SummarizeNearby extends AnalysisBase {
    /** An array of numbers that defines the search distance (for StraightLine or DrivingDistance) or time (for DrivingTime) shown in the distance input in the Find nearest features using a option. */
    distances: number[];
    /** When true, Travel Modes (Driving Distance, Driving Time) are enabled for sumNearbyLayer with point geometries (esriGeometryPoint). */
    enableTravelModes: boolean;
    /** A field of the summarizeLayer features that you can use to calculate statistics separately for each unique attribute value. */
    groupByField: string;
    /** Reference to the map object. */
    map: Map;
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
    summaryLayer: layers.FeatureLayer;
    /** An array of possible feature layers summarizing toward. */
    summaryLayers: layers.FeatureLayer[];
    /** The point, line, or polygon feature layer from which distances will be measured to features in summarizeLayer. */
    sumNearbyLayer: layers.FeatureLayer;
    /** If true. */
    sumShape: boolean;
    /** Type of units shown as the defeault value in the Find nearest features using a option. */
    units: string;
  }
  export interface SummarizeNearbyConstructor {
	    /**
	     * Creates a new SummarizeNearby dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: SummarizeNearbyOptions, srcNodeRef: Node): SummarizeNearby;
	    /**
	     * Creates a new SummarizeNearby dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: SummarizeNearbyOptions, srcNodeRef: string): SummarizeNearby;
  }

  /** The SummarizeWithin widget works with two layers: an summarize within layer and a summary layer. */
  export class SummarizeWithin extends AnalysisBase {
    /** A field name from summaryLayer that you can use to calculate statistics separately for each unique attribute value. */
    groupByField: string;
    /** Reference to the map object. */
    map: Map;
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
    /** A list of field names and statistical summary type that you wish to calculate for all features in SummaryLayer that are within each polygon in sumWithinLayer. */
    summaryFields: string;
    /** The summary layer to be shown selected in in the Choose layer to summarize menu. */
    summaryLayer: layers.FeatureLayer;
    /** An array of summarize layer candidates. */
    summaryLayers: layers.FeatureLayer[];
    /** The polygon feature layer to be summarized toward. */
    sumWithinLayer: layers.FeatureLayer;
  }
  export interface SummarizeWithinConstructor {
	    /**
	     * Creates a new SummarizeWithin dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: SummarizeWithinOptions, srcNodeRef: Node): SummarizeWithin;
	    /**
	     * Creates a new SummarizeWithin dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: SummarizeWithinOptions, srcNodeRef: string): SummarizeWithin;
  }

  /** Determine the flow paths in a downstream direction from the locations you specify. */
  export class TraceDownstream extends AnalysisBase {
    /** A layer specifying the area where you want the trace to be clipped. */
    boundingPolygonLayer: layers.FeatureLayer;
    /** An array of feature layer candidates to be selected as the bounding polygon layer. */
    boundingPolygonLayers: layers.FeatureLayer[];
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
  }
  export interface TraceDownstreamConstructor {
	    /**
	     * Creates a new TraceDownstream dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node): TraceDownstream;
	    /**
	     * Creates a new TraceDownstream dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: string): TraceDownstream;
  }
}
declare namespace esriTypes.dijit.editing {

  /** The esri/dijit/editing namespace contains editing related operations that inherit from OperationBase. */
  export class Add extends OperationBase {
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }
  export interface AddConstructor {
	    /**
	     * Create a new Add operation.
	     * @param params See options list for parameters.
	     */
	    new(params: AddOptions): Add;
  }

  /** Widget that supports viewing attachments for feature layers that have attachments enabled. */
  export class AttachmentEditor {
    /**
     * Display the attachment editor.
     * @param graphic Graphic, with attachments, to display in the attachment editor.
     * @param featureLayer The feature layer to display attachments for.
     */
    showAttachments(graphic: Graphic, featureLayer: layers.FeatureLayer): void;
    /** Finalizes the creation of the attachment editor. */
    startup(): void;
  }
  export interface AttachmentEditorConstructor {
	    /**
	     * Creates a new AttachmentEditor object.
	     * @param params No parameter options.
	     * @param srcNodeRef HTML element where the widget is rendered.
	     */
	    new(params: any, srcNodeRef: Node): AttachmentEditor;
	    /**
	     * Creates a new AttachmentEditor object.
	     * @param params No parameter options.
	     * @param srcNodeRef HTML element where the widget is rendered.
	     */
	    new(params: any, srcNodeRef: string): AttachmentEditor;
  }

  /** The esri/dijit/editing namespace contains editing related operations that inherit from OperationBase. */
  export class Cut extends OperationBase {
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }
  export interface CutConstructor {
	    /**
	     * Create a new Cut operation.
	     * @param params See options list for parameters.
	     */
	    new(params: CutOptions): Cut;
  }

  /** The esri/dijit/editing namespace contains editing related operations that inherit from OperationBase. */
  export class Delete extends OperationBase {
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }
  export interface DeleteConstructor {
	    /**
	     * Create a new Delete operation.
	     * @param params See options list for parameters.
	     */
	    new(params: DeleteOptions): Delete;
  }

  /** The Editor widget provides out-of-the-box editing capabilities using an editable layer in a Feature Service. */
  export class Editor {
    /** Fires when the widget has fully loaded. */
    on(type: "load", listener: (event: { target: Editor }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface EditorConstructor {
	    /** Arrow tool */
	  CREATE_TOOL_ARROW: any;
	    /** Autocomplete polygon tool */
	  CREATE_TOOL_AUTOCOMPLETE: any;
	    /** Circle tool */
	  CREATE_TOOL_CIRCLE: any;
	    /** Ellipse tool */
	  CREATE_TOOL_ELLIPSE: any;
	    /** Freehand polygon tool */
	  CREATE_TOOL_FREEHAND_POLYGON: any;
	    /** Freehand polyline tool */
	  CREATE_TOOL_FREEHAND_POLYLINE: any;
	    /** geometry.Polygon tool */
	  CREATE_TOOL_POLYGON: any;
	    /** geometry.Polyline tool */
	  CREATE_TOOL_POLYLINE: any;
	    /** Rectangle tool */
	  CREATE_TOOL_RECTANGLE: any;
	    /** Triangle tool */
	  CREATE_TOOL_TRIANGLE: any;
	    /**
	     * Creates a new Editor object.
	     * @param params Parameters that define the functionality of the editor widget.
	     * @param srcNodeRef HTML element where the widget should be rendered.
	     */
	    new(params: EditorOptions, srcNodeRef: Node): Editor;
	    /**
	     * Creates a new Editor object.
	     * @param params Parameters that define the functionality of the editor widget.
	     * @param srcNodeRef HTML element where the widget should be rendered.
	     */
	    new(params: EditorOptions, srcNodeRef: string): Editor;
  }

  /** A template picker displays a gallery of templates from one or more feature layers. */
  export class TemplatePicker {
    /** Reference to the data grid used to display the templates. */
    grid: any;
    /** If tooltips are enabled the reference to the tooltip div. */
    tooltip: HTMLDivElement;
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
    on(type: "selection-change", listener: (event: { target: TemplatePicker }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface TemplatePickerConstructor {
	    /**
	     * Creates a new TemplatePicker object that displays a gallery of templates from the input feature layers or items.
	     * @param params FeatureLayers or items are required all other parameters are optional.
	     * @param srcNodeRef HTML element where the TemplatePicker will be rendered.
	     */
	    new(params: TemplatePickerOptions, srcNodeRef: Node): TemplatePicker;
	    /**
	     * Creates a new TemplatePicker object that displays a gallery of templates from the input feature layers or items.
	     * @param params FeatureLayers or items are required all other parameters are optional.
	     * @param srcNodeRef HTML element where the TemplatePicker will be rendered.
	     */
	    new(params: TemplatePickerOptions, srcNodeRef: string): TemplatePicker;
  }

  /** The esri/dijit/editing namespace contains editing related operations that inherit from OperationBase. */
  export class Union extends OperationBase {
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }
  export interface UnionConstructor {
	    /**
	     * Create a new Union operation.
	     * @param params See options list for parameters.
	     */
	    new(params: UnionOptions): Union;
  }

  /** The esri/dijit/editing namespace contains editing related operations that inherit from OperationBase. */
  export class Update extends OperationBase {
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }
  export interface UpdateConstructor {
	    /**
	     * Create a new Update operation.
	     * @param params See options list for parameters.
	     */
	    new(params: UpdateOptions): Update;
  }
}
declare namespace esriTypes.dijit.geoenrichment {

  /** The DataBrowser widget allows users to search or browse for geoenrichment variables. */
  export class DataBrowser {
    /** Finalizes the creation of the DataBrowser. */
    startup(): void;
    /** Fires when user clicks the Back button. */
    on(type: "back", listener: (event: { target: DataBrowser }) => void): Handle;
    /** Fires when user clicks the Cancel button. */
    on(type: "cancel", listener: (event: { target: DataBrowser }) => void): Handle;
    /** Fires when user clicks the OK button. */
    on(type: "ok", listener: (event: { target: DataBrowser }) => void): Handle;
    /** Fires when variables are selected. */
    on(type: "select", listener: (event: { target: DataBrowser }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface DataBrowserConstructor {
	    /**
	     * Creates a new DataBrowser dijit using the given DOM node.
	     * @param options Optional parameters used to create the layer.
	     * @param srcNodeRef Reference or id of an HTML element where the DataBrowser should be rendered.
	     */
	    new(options: DataBrowserOptions, srcNodeRef: Node): DataBrowser;
	    /**
	     * Creates a new DataBrowser dijit using the given DOM node.
	     * @param options Optional parameters used to create the layer.
	     * @param srcNodeRef Reference or id of an HTML element where the DataBrowser should be rendered.
	     */
	    new(options: DataBrowserOptions, srcNodeRef: string): DataBrowser;
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
    studyArea: tasks.geoenrichment.GeometryStudyArea;
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
     * Define the infographic data.
     * @param data Specify the tasks.FeatureSet containing the custom data to display in the Infographic.
     * @param metadata Define the mappings of feature set attributes to Infographic display fields.
     */
    setData(data: tasks.FeatureSet, metadata?: any): void;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Fires if an error occurs in retrieving data for the study area. */
    on(type: "data-error", listener: (event: { error: any; target: Infographic }) => void): Handle;
    /** Fires when loading data for the study area. */
    on(type: "data-load", listener: (event: { target: Infographic }) => void): Handle;
    /** Fires when data for the study area is ready. */
    on(type: "data-ready", listener: (event: { provider: any; target: Infographic }) => void): Handle;
    /** Fires when requesting data for the study area. */
    on(type: "data-request", listener: (event: { target: Infographic }) => void): Handle;
    /** Fires when the Infographic is resized. */
    on(type: "resize", listener: (event: { size: number[]; target: Infographic }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface InfographicConstructor {
	    /**
	     * Creates a new Infographic dijit using the given DOM node.
	     * @param params Various optional parameters that can be used to configure the dijit.
	     * @param srcNodeRef Reference or id of an HTML element where the Infographic should be rendered.
	     */
	    new(params: any, srcNodeRef: Node): Infographic;
	    /**
	     * Creates a new Infographic dijit using the given DOM node.
	     * @param params Various optional parameters that can be used to configure the dijit.
	     * @param srcNodeRef Reference or id of an HTML element where the Infographic should be rendered.
	     */
	    new(params: any, srcNodeRef: string): Infographic;
  }

  /** Displays a set of Infographic dijits in a carousel. */
  export class InfographicsCarousel {
    /** If true, the Infographic will be displayed in its expanded state. */
    expanded: boolean;
    /** Describes the options used to configure the contents of the carousel. */
    options: InfographicsOptions;
    /** When true, output geometry will be available as the geometry property in the returned object of the "data-ready" event handler. */
    returnGeometry: boolean;
    /** The index of the currently selected InfoGraphic in this InfographicsCarousel. */
    selectedIndex: number;
    /** The study area for this InfographicsCarousel. */
    studyArea: tasks.geoenrichment.GeometryStudyArea;
    /** The name of the study area to be shown in this InfographicsCarousel. */
    studyAreaTitle: string;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Fires if an error occurs in retrieving data for the study area. */
    on(type: "data-error", listener: (event: { error: any; target: InfographicsCarousel }) => void): Handle;
    /** Fires when loading data for the study area. */
    on(type: "data-load", listener: (event: { target: InfographicsCarousel }) => void): Handle;
    /** Fires when data for the study area is ready. */
    on(type: "data-ready", listener: (event: { provider: any; target: InfographicsCarousel }) => void): Handle;
    /** Fires when the InfographicsCarousel is resized. */
    on(type: "resize", listener: (event: { size: number[]; target: InfographicsCarousel }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface InfographicsCarouselConstructor {
	    /**
	     * Creates a new InfographicsCarousel dijit using the given DOM node.
	     * @param params Various optional parameters that can be used to configure the dijit.
	     * @param srcNodeRef Reference or id of an HTML element where the Directions widget should be rendered.
	     */
	    new(params: any, srcNodeRef: Node): InfographicsCarousel;
	    /**
	     * Creates a new InfographicsCarousel dijit using the given DOM node.
	     * @param params Various optional parameters that can be used to configure the dijit.
	     * @param srcNodeRef Reference or id of an HTML element where the Directions widget should be rendered.
	     */
	    new(params: any, srcNodeRef: string): InfographicsCarousel;
  }
  /** InfographicsOptions is used to customize and configure the Infographic's included in a InfographicCarousel. */
  export class InfographicsOptions {
    /** The options to apply to the study area. */
    studyAreaOptions: any;
    /** The name of the css theme used to format the InfographicsCarousel. */
    theme: string;
    /**
     * Gets an array of default InfographicsOptions.Item's in the InfographicsCarousel with a countryID.
     * @param countryID The ID of the country for which data is retrieved.
     */
    getItems(countryID: string): any;
    /** Converts object to its JSON representation. */
    toJson(): any;
  }
  export interface InfographicsOptionsConstructor {
	    /**
	     * Constructs instance from serialized state.
	     * @param json Various options to configure this InfographicsOptions.
	     */
	    new(json?: Object): InfographicsOptions;
  }
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
  }
  export interface InfographicsOptionsItemConstructor {
	    /**
	     * Constructs an InfographicsOptionsItem object.
	     * @param type The type of the Infographic.
	     * @param variables The set of variables displayed in this InfographicsOptionsItem.
	     */
	    new(type: string, variables: string[]): InfographicsOptionsItem;
  }
}
declare namespace esriTypes.geometry {

  /** A circle (Polygon) created by a specified center point. */
  export class Circle extends Polygon {
    /** Center point of the circle. */
    center: any;
    /** The radius of the circle based. */
    radius: number;
    /** Unit of the radius. */
    radiusUnit: string;
    /** Array of coordinate values constituting the circle like [[x1, y1], [x2, y2],...]. */
    rings: number[][][];
    /** The spatial reference of the circle will be the same as the spatial reference of the center point. */
    spatialReference: SpatialReference;
  }
  export interface CircleConstructor {
	    /**
	     * Create a new Circle by specifying an input center location using either an Point object or a latitude/longitude array and an object with the following optional properties: radius, radiusUnits, geodesic and numberOfPoints.
	     * @param center Center point of the circle.
	     * @param options See options descriptions for further information.
	     */
	    new(center: Point, options?: CircleOptions1): Circle;
	    /**
	     * Create a new Circle by specifying an input center location using either an Point object or a latitude/longitude array and an object with the following optional properties: radius, radiusUnits, geodesic and numberOfPoints.
	     * @param center Center point of the circle.
	     * @param options See options descriptions for further information.
	     */
	    new(center: number[], options?: CircleOptions1): Circle;
	    /**
	     * Create a new Circle by specifying an object with a required center location, defined as a longitude/latitude array or an Point, and the following additional optional parameters: radius, radiusUnits, geodesic, and numberOfPoints.
	     * @param params If no center parameter is provided, it must be set within the options.
	     */
	    new(params: CircleOptions2): Circle;
  }

  /** The minimum and maximum X- and Y- coordinates of a bounding box. */
  export class Extent extends Geometry {
    /** Top-right X-coordinate of an extent envelope. */
    xmax: number;
    /** Bottom-left X-coordinate of an extent envelope. */
    xmin: number;
    /** Top-right Y-coordinate of an extent envelope. */
    ymax: number;
    /** Bottom-left Y-coordinate of an extent envelope. */
    ymin: number;
    /**
     * A new extent is returned with the same width and height centered at the argument point.
     * @param point Centers the extent on the specified x,y location.
     */
    centerAt(point: Point): Extent;
    /**
     * When "true", the geometry in the argument is contained in this extent.
     * @param geometry Can be a Point or Extent.
     */
    contains(geometry: Geometry): boolean;
    /**
     * Expands the extent by the factor given.
     * @param factor The multiplier value.
     */
    expand(factor: number): Extent;
    /** Returns the center point of the extent in map units. */
    getCenter(): Point;
    /** Distance between ymin and ymax. */
    getHeight(): number;
    /** Distance between xmin and xmax. */
    getWidth(): number;
    /**
     * Returns the interesection extent if the input geometry is an extent that intersects this extent.
     * @param geometry The geometry used to test the intersection.
     */
    intersects(geometry: Geometry): any;
    /** Returns an array with either one Extent that's been shifted to within +/- 180 or two Extents if the original extent intersects the dateline. */
    normalize(): Extent[];
    /**
     * Offsets the current extent.
     * @param dx The offset distance in map units for the y-coordinate.
     * @param dy The offset distance in map units for the x-coordinate.
     */
    offset(dx: number, dy: number): Extent;
    /** Returns an extent with a spatial reference with a custom shifted central meridian if the extent intersects the dateline. */
    shiftCentralMeridian(): Extent;
    /**
     * Expands this extent to include the extent of the argument.
     * @param extent The minx, miny, maxx, and maxy bounding box.
     */
    union(extent: Extent): Extent;
    /**
     * Updates this extent with the specified parameters.
     * @param xmin Bottom-left X-coordinate of an extent envelope.
     * @param ymin Bottom-left Y-coordinate of an extent envelope.
     * @param xmax Top-right X-coordinate of an extent envelope.
     * @param ymax Top-right Y-coordinate of an extent envelope.
     * @param spatialReference Spatial reference of the geometry.
     */
    update(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference: SpatialReference): Extent;
  }
  export interface ExtentConstructor {
	    /**
	     * Creates a new Extent object.
	     * @param xmin Bottom-left X-coordinate of an extent envelope.
	     * @param ymin Bottom-left Y-coordinate of an extent envelope.
	     * @param xmax Top-right X-coordinate of an extent envelope.
	     * @param ymax Top-right Y-coordinate of an extent envelope.
	     * @param spatialReference Spatial reference of the geometry.
	     */
	    new(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference: SpatialReference): Extent;
	    /**
	     * Creates a new Extent object using a JSON object.
	     * @param json JSON object representing the geometry.
	     */
	    new(json: Object): Extent;
  }

  /** The base class for geometry objects. */
  export class Geometry {
    /** The spatial reference of the geometry. */
    spatialReference: SpatialReference;
    /** The type of geometry. */
    type: string;
    /**
     * Sets the spatial reference.
     * @param sr Spatial reference of the geometry.
     */
    setSpatialReference(sr: SpatialReference): Geometry;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface GeometryConstructor {
      new(): Geometry
  }

  /** An ordered collection of points. */
  export class Multipoint extends Geometry {
    /** An array of one or more points. */
    points: number[][];
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
    getExtent(): Extent;
    /**
     * Returns the point at the specified index.
     * @param index Positional index of the point in the points property.
     */
    getPoint(index: number): Point;
    /**
     * Removes a point from the Multipoint.
     * @param index The index of the point to remove.
     */
    removePoint(index: number): Point;
    /**
     * Updates the point at the specified index.
     * @param index Positional index of the point in the points property.
     * @param point Point that specifies the new location.
     */
    setPoint(index: number, point: Point): Multipoint;
  }
  export interface MultipointConstructor {
	    /**
	     * Creates a new Multipoint object.
	     * @param spatialReference Spatial reference of the geometry.
	     */
	    new(spatialReference: SpatialReference): Multipoint;
	    /**
	     * Creates a new Multipoint object using a JSON object.
	     * @param json JSON object representing the geometry.
	     */
	    new(json: Object): Multipoint;
  }

  /** A location defined by an X- and Y- coordinate. */
  export class Point extends Geometry {
    /** X-coordinate of a point in map units. */
    x: number;
    /** Y-coordinate of a point in map units. */
    y: number;
    /** Returns the latitude coordinate for this point if the spatial reference of the point is Web Mercator or Geographic (4326). */
    getLatitude(): number;
    /** Returns the longitude coordinate for this point if the spatial reference of the point is Web Mercator or Geographic (4326). */
    getLongitude(): number;
    /** Shifts the x coordinate to within +/- 180 span. */
    normalize(): Point;
    /**
     * Offsets the point in an x and y direction.
     * @param dx Value for x-coordinate of point.
     * @param dy Value for y-coordinate of point.
     */
    offset(dx: number, dy: number): Point;
    /**
     * Sets the latitude coordinate for this point to the specified value if the point's spatial reference is Web Mercator or Geographic (4326).
     * @param lat A valid latitude value.
     */
    setLatitude(lat: number): Point;
    /**
     * Sets the longitude coordinate for this point to the specified value if the point's spatial reference is Web Mercator or Geographic (4326).
     * @param lon A valid longitude value.
     */
    setLongitude(lon: number): Point;
    /**
     * Sets x-coordinate of point.
     * @param x Value for x-coordinate of point.
     */
    setX(x: number): Point;
    /**
     * Sets y-coordinate of point.
     * @param y Value for y-coordinate of point.
     */
    setY(y: number): Point;
    /**
     * Updates a point.
     * @param x X-coordinate of the updated point.
     * @param y Y-coordinate of the updated point.
     */
    update(x: number, y: number): Point;
  }
  export interface PointConstructor {
	    /**
	     * Creates a new Point object using x, y, and a spatial reference.
	     * @param x X-coordinate of a point in map units.
	     * @param y Y-coordinate of a point in map units.
	     * @param spatialReference Spatial reference of the geometry.
	     */
	    new(x: number, y: number, spatialReference: SpatialReference): Point;
	    /**
	     * Creates a new Point object using an array containing an x,y coordinate value and a spatial reference.
	     * @param coords An array that includes an x,y coordinate.
	     * @param spatialReference Spatial reference of the geometry.
	     */
	    new(coords: number[], spatialReference: SpatialReference): Point;
	    /**
	     * Creates a new Point object using a JSON object.
	     * @param json A JSON object that contains an x,y coordinate.
	     */
	    new(json: Object): Point;
	    /**
	     * Create a point object and initialize it with specified longitude and latitude.
	     * @param long Longitude value.
	     * @param lat Latitude value.
	     */
	    new(long: number, lat: number): Point;
	    /**
	     * Create a point object and initialize it with an array containing longitude and latitude values.
	     * @param point An input array containing the longitude and latitude values for the point.
	     */
	    new(point: number[]): Point;
	    /**
	     * Create a point object and initialize it with an object that has latitude and longitude properties.
	     * @param point An object with latitude and longitude properties.
	     */
	    new(point: any): Point;
  }

  /** An array of rings where each ring is an array of points. */
  export class Polygon extends Geometry {
    /** An array of rings. */
    rings: number[][][];
    /**
     * Adds a ring to the Polygon.
     * @param ring A polygon ring.
     */
    addRing(ring: Point[]): Polygon;
    /**
     * Adds a ring to the Polygon.
     * @param ring A polygon ring.
     */
    addRing(ring: number[][]): Polygon;
    /**
     * Checks on the client if the specified point is inside the polygon.
     * @param point The location defined by an X- and Y- coordinate in map units.
     */
    contains(point: Point): boolean;
    /** Returns the centroid of the polygon as defined here. */
    getCentroid(): Point;
    /** Returns the extent of the polygon. */
    getExtent(): Extent;
    /**
     * Returns a point specified by a ring and point in the path.
     * @param ringIndex The index of a ring.
     * @param pointIndex The index of a point in a ring.
     */
    getPoint(ringIndex: number, pointIndex: number): Point;
    /**
     * Inserts a new point into a polygon.
     * @param ringIndex Ring index to insert point.
     * @param pointIndex The index of the inserted point in the ring.
     * @param point Point to insert into the ring.
     */
    insertPoint(ringIndex: number, pointIndex: number, point: Point): Polygon;
    /**
     * Checks if a Polygon ring is clockwise.
     * @param ring A polygon ring.
     */
    isClockwise(ring: Point[]): boolean;
    /**
     * Checks if a Polygon ring is clockwise.
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
    removePoint(ringIndex: number, pointIndex: number): Point;
    /**
     * Removes a ring from the Polygon.
     * @param ringIndex The index of the ring to remove.
     */
    removeRing(ringIndex: number): Point[];
    /**
     * Updates a point in a polygon.
     * @param ringIndex Ring index for updated point.
     * @param pointIndex The index of the updated point in the ring.
     * @param point Point to update in the ring.
     */
    setPoint(ringIndex: number, pointIndex: number, point: Point): Polygon;
  }
  export interface PolygonConstructor {
	    /**
	     * Creates a new Polygon object.
	     * @param spatialReference Spatial reference of the geometry.
	     */
	    new(spatialReference: SpatialReference): Polygon;
	    /**
	     * Creates a new Polygon object using a JSON object.
	     * @param json JSON object representing the geometry.
	     */
	    new(json: Object): Polygon;
	    /**
	     * Create a new polygon by providing an array of geographic coordinate pairs.
	     * @param coordinates An array of geographic coordinates that define the polygon.
	     */
	    new(coordinates: number[][]): Polygon;
	    /**
	     * Create a new polygon by providing an array of geographic coordinate pairs.
	     * @param coordinates An array of geographic coordinates that define the polygon.
	     */
	    new(coordinates: number[][][]): Polygon;
	    /**
	     * Returns a new Polygon with one ring containing points equivalent to the coordinates of the extent.
	     * @param extent The Extent geometry to convert to a Polygon.
	     */
	  fromExtent(extent: Extent): Polygon;
  }

  /** An array of paths where each path is an array of points. */
  export class Polyline extends Geometry {
    /** An array of paths. */
    paths: number[][][];
    /**
     * Adds a path to the Polyline.
     * @param path Path to add to the Polyline.
     */
    addPath(path: Point[]): Polyline;
    /**
     * Adds a path to the Polyline.
     * @param path Path to add to the Polyline.
     */
    addPath(path: number[][]): Polyline;
    /** Returns the extent of the Polyline. */
    getExtent(): Extent;
    /**
     * Returns a point specified by a path and point in the path.
     * @param pathIndex The index of a path in a polyline.
     * @param pointIndex The index of a point in a path.
     */
    getPoint(pathIndex: number, pointIndex: number): Point;
    /**
     * Inserts a new point into a polyline.
     * @param pathIndex Path index to insert point.
     * @param pointIndex The index of the inserted point in the path.
     * @param point Point to insert into the path.
     */
    insertPoint(pathIndex: number, pointIndex: number, point: Point): Polyline;
    /**
     * Removes a path from the Polyline.
     * @param pathIndex The index of a path to remove.
     */
    removePath(pathIndex: number): Point[];
    /**
     * Remove a point from the polyline at the given pointIndex within the path identified by the given pathIndex.
     * @param pathIndex The index of the path containing the point.
     * @param pointIndex The index of the point within the path.
     */
    removePoint(pathIndex: number, pointIndex: number): Point;
    /**
     * Updates a point in a polyline.
     * @param pathIndex Path index for updated point.
     * @param pointIndex The index of the updated point in the path.
     * @param point Point to update in the path.
     */
    setPoint(pathIndex: number, pointIndex: number, point: Point): Polyline;
  }
  export interface PolylineConstructor {
	    /**
	     * Creates a new Polyline object.
	     * @param spatialReference Spatial reference of the geometry.
	     */
	    new(spatialReference: SpatialReference): Polyline;
	    /**
	     * Creates a new Polyline object using a JSON object.
	     * @param json JSON object representing the geometry.
	     */
	    new(json: Object): Polyline;
	    /**
	     * Create a new polyline by providing an array of geographic coordinates.
	     * @param coordinates An array of geographic coordinates that define the polyline.
	     */
	    new(coordinates: number[][]): Polyline;
	    /**
	     * Create a new polyline by providing an array of geographic coordinates.
	     * @param coordinates An array of geographic coordinates that define the polyline.
	     */
	    new(coordinates: number[][][]): Polyline;
  }
  /** ScreenPoint represents a point in terms of pixels relative to the top-left corner of the map control. */
  export class ScreenPoint {
    /** X-coordinate relative to the top-left corner of the map control in pixels. */
    x: number;
    /** Y-coordinate relative to the top-left corner of the map control in pixels. */
    y: number;
    /**
     * Offsets the point in an x and y direction.
     * @param dx Value for x-coordinate of point.
     * @param dy Value for y-coordinate of point.
     */
    offset(dx: number, dy: number): ScreenPoint;
    /**
     * Sets x-coordinate of point.
     * @param x Value for x-coordinate of point.
     */
    setX(x: number): ScreenPoint;
    /**
     * Sets y-coordinate of point.
     * @param y Value for y-coordinate of point.
     */
    setY(y: number): ScreenPoint;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
    /**
     * Updates a ScreenPoint.
     * @param x X-coordinate relative to the top-left corner of the map control in pixels.
     * @param y Y-coordinate relative to the top-left corner of the map control in pixels.
     */
    update(x: number, y: number): ScreenPoint;
  }
  export interface ScreenPointConstructor {
	    /**
	     * Creates a new ScreenPoint object with X-, Y- coordinates.
	     * @param x X-coordinate relative to the top-left corner of the map control in pixels.
	     * @param y Y-coordinate relative to the top-left corner of the map control in pixels.
	     */
	    new(x: number, y: number): ScreenPoint;
	    /**
	     * Creates a new ScreenPoint object with an array containing X-, Y- coordinates.
	     * @param coords An array that includes X-, Y- coordinates.
	     */
	    new(coords: number[]): ScreenPoint;
	    /**
	     * Creates a new ScreenPoint object with a JSON object.
	     * @param json A JSON object that includes X-, Y- coordinates.
	     */
	    new(json: Object): ScreenPoint;
  }

  /** Utility methods for various geodesic calculations. */
  export var geodesicUtils: {
    /**
     * Determine the area for the input polygons.
     * @param polygons An array of polygons.
     * @param areaUnit The area unit.
     */
    geodesicAreas(polygons: Polygon[], areaUnit: string): number[];
    /**
     * Returns a densified geometry.
     * @param geometry A polyline or polygon to densify.
     * @param maxSegmentLength The maximum segment length in meters.
     */
    geodesicDensify(geometry: Geometry, maxSegmentLength: number): Geometry;
    /**
     * Determine the length for the input polylines using the specified length unit.
     * @param polylines An array of polylines.
     * @param lengthUnit The length unit.
     */
    geodesicLengths(polylines: Polyline[], lengthUnit: string): number[];
  };

  /** Utility methods for working with JSON geometry objects. */
  export var jsonUtils: {
    /**
     * Converts the input JSON object to the appropriate * object.
     * @param json The JSON object.
     */
    fromJson(json: Object): Geometry;
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
    getLength(point1: Point, point2: Point): number;
    /**
     * Calculates the intersecting point of two lines.
     * @param line1start The beginning point of the first line.
     * @param line1end The ending point of the first line.
     * @param line2start The beginning point of the second line.
     * @param line2end The ending point of the second line.
     */
    getLineIntersection(line1start: Point, line1end: Point, line2start: Point, line2end: Point): Point;
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
    normalizeCentralMeridian(geometries: Geometry[], geometryService: tasks.GeometryService, callback: Function, errback: Function): any;
  };

  /** Utility methods to get map scale or extent for a given scale. */
  export var scaleUtils: {
    /**
     * Get the extent for the specified scale.
     * @param map The input map.
     * @param scale The input scale.
     */
    getExtentForScale(map: Map, scale: number): Extent;
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
     * @param screenGeometry The geometry to convert from screen to map units.
     */
    toMapGeometry(extent: Extent, width: number, height: number, screenGeometry: Geometry): Geometry;
    /**
     * Converts and returns the argument screen point in map coordinates.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current width of the map in screen units.
     * @param screenPoint The screenPoint to convert from screen to map units.
     */
    toMapPoint(extent: Extent, width: number, height: number, screenPoint: ScreenPoint): Point;
    /**
     * Converts the geometry argument to screen coordinates based on the extent, width, and height of the Map.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current width of the map in screen units.
     * @param mapGeometry The geometry to convert from map to screen units.
     */
    toScreenGeometry(extent: Extent, width: number, height: number, mapGeometry: Geometry): Geometry;
    /**
     * Converts and returns the argument map point in screen coordinates.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current width of the map in screen units.
     * @param mapPoint The point to convert from map to screen units.
     */
    toScreenPoint(extent: Extent, width: number, height: number, mapPoint: Point): ScreenPoint;
  };

  /** Convert Web Mercator coordinates to geographic and vice versa. */
  export var webMercatorUtils: {
    /**
     * Returns true if the 'source' can be projected to 'target' by the project() function, or if the 'source' and 'target' is the same spatialReference.
     * @param source An input of type SpatialReference or an object with spatialReference property such as Geometry or Map.
     * @param target The target spatial reference, of type SpatialReference or an object with spatialReference property such as Map.
     */
    canProject(source: SpatialReference, target: any): boolean;
    /**
     * Returns true if the 'source' can be projected to 'target' by the project() function, or if the 'source' and 'target' is the same spatialReference.
     * @param source An input of type SpatialReference or an object with spatialReference property such as Geometry or Map.
     * @param target The target spatial reference, of type SpatialReference or an object with spatialReference property such as Map.
     */
    canProject(source: any, target: SpatialReference): boolean;
    /**
     * Returns true if the 'source' can be projected to 'target' by the project() function, or if the 'source' and 'target' is the same spatialReference.
     * @param source An input of type SpatialReference or an object with spatialReference property such as Geometry or Map.
     * @param target The target spatial reference, of type SpatialReference or an object with spatialReference property such as Map.
     */
    canProject(source: SpatialReference, target: SpatialReference): boolean;
    /**
     * Returns true if the 'source' can be projected to 'target' by the project() function, or if the 'source' and 'target' is the same spatialReference.
     * @param source An input of type SpatialReference or an object with spatialReference property such as Geometry or Map.
     * @param target The target spatial reference, of type SpatialReference or an object with spatialReference property such as Map.
     */
    canProject(source: any, target: any): boolean;
    /**
     * Converts geometry from geographic units to Web Mercator units.
     * @param geometry The geometry to convert.
     */
    geographicToWebMercator(geometry: Geometry): Geometry;
    /**
     * Translates the given latitude and longitude values to Web Mercator.
     * @param long The longitude value to convert.
     * @param lat The latitude value to convert.
     */
    lngLatToXY(long: number, lat: number): number[];
    /**
     * Project the geometry clientside (if possible).
     * @param geometry An input geometry.
     * @param target The target spatial reference, of type SpatialReference or an object with spatialReference property such as Map.
     */
    project(geometry: Geometry, target: SpatialReference): any;
    /**
     * Project the geometry clientside (if possible).
     * @param geometry An input geometry.
     * @param target The target spatial reference, of type SpatialReference or an object with spatialReference property such as Map.
     */
    project(geometry: Geometry, target: any): any;
    /**
     * Converts geometry from Web Mercator units to geographic units.
     * @param geometry The geometry to convert.
     */
    webMercatorToGeographic(geometry: Geometry): Geometry;
    /**
     * Translates the given Web Mercator coordinates to Longitude and Latitude.
     * @param x The x coordinate value to convert.
     * @param y The y coordinate value to convert.
     */
    xyToLngLat(x: number, y: number): number[];
  };
}
declare namespace esriTypes.layers {

  /** Allows you to work with a dynamic map service resource exposed by the ArcGIS Server REST API. */
  export class ArcGISDynamicMapServiceLayer extends DynamicMapServiceLayer {
    /** The URL, when available, where the layer's attribution data is stored. */
    attributionDataUrl: string;
    /** Capabilities of the map service, possible values are Map, tasks.Query and Data. */
    capabilities: string;
    /** Copyright string as defined by the map service. */
    copyright: string;
    /** Map description as defined by the map service. */
    description: string;
    /** When true, images are always requested from the server and the browser's cache is ignored. */
    disableClientCaching: boolean;
    /** The output dpi of the dynamic map service layer. */
    dpi: number;
    /** Array of DynamicLayerInfos used to change the layer ordering or redefine the map. */
    dynamicLayerInfos: DynamicLayerInfo[];
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
    /** Array of LayerDrawingOptions used to override the way layers are drawn. */
    layerDrawingOptions: LayerDrawingOptions[];
    /** Returns the available layers in service and their default visibility. */
    layerInfos: LayerInfo[];
    /** Returns the current layer time options if applicable. */
    layerTimeOptions: LayerTimeOptions[];
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
    timeInfo: TimeInfo;
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
    /** Create an array of DynamicLayerInfos based on the current set of LayerInfo. */
    createDynamicLayerInfosFromLayerInfos(): DynamicLayerInfo[];
    /**
     * Exports a map using values as specified by ImageParameters.
     * @param imageParameters Input parameters assigned before exporting the map image.
     * @param callback The function to call when the method has completed.
     */
    exportMapImage(imageParameters?: ImageParameters, callback?: Function): void;
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
    setDynamicLayerInfos(dynamicLayerInfos: DynamicLayerInfo[], doNotRefresh?: boolean): void;
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
     * Specify an array of LayerDrawingOptions that override the way the layers are drawn.
     * @param layerDrawingOptions An array of layer drawing options.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setLayerDrawingOptions(layerDrawingOptions: LayerDrawingOptions[], doNotRefresh?: boolean): void;
    /**
     * Sets the time-related options for the layer.
     * @param options Array of LayerTimeOptions objects that allow you to override how a layer is exported in reference to the map's time extent.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setLayerTimeOptions(options: LayerTimeOptions[], doNotRefresh?: boolean): void;
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
    on(type: "gdb-version-change", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): Handle;
    /** Fires when the map export is completed. */
    on(type: "map-image-export", listener: (event: { mapImage: MapImage; target: ArcGISDynamicMapServiceLayer }) => void): Handle;
    /** Fires when a layer resumes drawing. */
    on(type: "resume", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): Handle;
    /** Fires when a layer suspends drawing. */
    on(type: "suspend", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ArcGISDynamicMapServiceLayerConstructor {
	    /**
	     * Creates a new ArcGISDynamicMapServiceLayer object.
	     * @param url URL to the ArcGIS Server REST resource that represents a map service.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: ArcGISDynamicMapServiceLayerOptions): ArcGISDynamicMapServiceLayer;
  }

  /** Allows you to work with an image map service resource exposed by the ArcGIS Server REST API. */
  export class ArcGISImageServiceLayer extends DynamicMapServiceLayer {
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
    /** Returns a MosaicRule object that defines the default mosaic properties published by the image service. */
    defaultMosaicRule: MosaicRule;
    /** Description as defined by the image service. */
    description: string;
    /** When true, images are always requested from the server and the browser's cache is ignored. */
    disableClientCaching: boolean;
    /** The output image type. */
    format: string;
    /** The template that defines the content to display in the map info window when the user clicks on a raster. */
    infoTemplate: InfoTemplate;
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
    mosaicRule: MosaicRule;
    /** Size of pixel in X direction. */
    pixelSizeX: number;
    /** Size of pixel in Y direction. */
    pixelSizeY: number;
    /** The pixel type of the image service. */
    pixelType: number;
    /** Specifies the rendering rule for how the requested image should be rendered. */
    renderingRule: RasterFunction;
    /** Temporal information for the layer, such as time extent. */
    timeInfo: TimeInfo;
    /** By default, images are exported in MIME format, and the image is streamed to the client. */
    useMapImage: boolean;
    /** The version of ArcGIS Server the image service is published to, e.g. */
    version: number;
    /**
     * Exports a map using values as specified by ImageServiceParameters.
     * @param imageServiceParameters Input parameters assigned before exporting the map image.
     * @param callback The function to call when the method has completed.
     */
    exportMapImage(imageServiceParameters?: ImageServiceParameters, callback?: Function): void;
    /** Returns the current definition expression. */
    getDefinitionExpression(): string;
    /** Get key properties of an ImageService including information such as the band names associated with the imagery. */
    getKeyProperties(): any;
    /** Asynchronously returns the raster attribute table of an ImageService which returns categorical mapping of pixel values (e.g. */
    getRasterAttributeTable(): any;
    /** Gets the currently visible rasters. */
    getVisibleRasters(): Graphic[];
    /**
     * Returns the rasters that are visible in the area defined by the geometry (required to be point or polygon) in the query parameter.
     * @param query The tasks.Query to be passed as the input to query visible rasters.
     * @param options Options for query.
     * @param callback The function to call when the method has completed.
     * @param errback The function to call when an error occurs.
     */
    queryVisibleRasters(query: tasks.Query, options?: any, callback?: Function, errback?: string): void;
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
     * @param interpolation Interpolation value defined in ImageServiceParameters Constants Table.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setInterpolation(interpolation: string, doNotRefresh?: boolean): void;
    /**
     * Sets the mosaic rule of the layer to the specified value.
     * @param mosaicRule The mosaic rule.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setMosaicRule(mosaicRule: MosaicRule, doNotRefresh?: boolean): void;
    /**
     * Sets the rendering rule of the layer to the given value.
     * @param renderingRule The new rendering rule.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setRenderingRule(renderingRule: RasterFunction, doNotRefresh?: boolean): void;
    /**
     * Determine if the layer will update its content based on the map's current time extent.
     * @param update When false the layer will not update its content based on the map's time extent.
     */
    setUseMapTime(update: boolean): void;
    /** Fires when the map export is completed. */
    on(type: "map-image-export", listener: (event: { mapImage: MapImage; target: ArcGISImageServiceLayer }) => void): Handle;
    /** Fired when the layers mosaic rule is changed. */
    on(type: "mosaic-rule-change", listener: (event: { target: ArcGISImageServiceLayer }) => void): Handle;
    /** Fired when the layers band ids are changed or if a raster function is applied. */
    on(type: "rendering-change", listener: (event: { target: ArcGISImageServiceLayer }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ArcGISImageServiceLayerConstructor {
	    /**
	     * Creates a new ArcGISImageServiceLayer object.
	     * @param url URL to the ArcGIS Server REST resource that represents a map service.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: ArcGISImageServiceLayerOptions): ArcGISImageServiceLayer;
  }

  /** Allows you to work with a cached map service resource exposed by the ArcGIS Server REST API. */
  export class ArcGISTiledMapServiceLayer extends TiledMapServiceLayer {
    /** The URL, when available, where the layer's attribution data is stored. */
    attributionDataUrl: string;
    /** Capabilities of the map service, possible values are Map, tasks.Query and Data. */
    capabilities: string;
    /** Copyright string as defined by the map service. */
    copyright: string;
    /** Map description as defined by the map service. */
    description: string;
    /** When true, the layer has attribution data. */
    hasAttributionData: boolean;
    /** A dictionary from the layer id to the layerInfoTemplateOptions object. */
    infoTemplates: any;
    /** Returns the available layers in service and their default visibility. */
    layerInfos: LayerInfo[];
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
    timeInfo: TimeInfo;
    /** Default units of the layer as defined by the service. */
    units: string;
    /** The version of ArcGIS Server where the map service is published. */
    version: number;
    /** When true, the layer is visible at the current map scale. */
    visibleAtMapScale: boolean;
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
    on(type: "resume", listener: (event: { target: ArcGISTiledMapServiceLayer }) => void): Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: ArcGISTiledMapServiceLayer }) => void): Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: ArcGISTiledMapServiceLayer }) => void): Handle;
    /** Fires when a layer suspends drawing. */
    on(type: "suspend", listener: (event: { target: ArcGISTiledMapServiceLayer }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ArcGISTiledMapServiceLayerConstructor {
	    /**
	     * Creates a new ArcGISTiledMapServiceLayer object.
	     * @param url URL to the ArcGIS Server REST resource at represents a map service.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: ArcGISTiledMapServiceLayerOptions): ArcGISTiledMapServiceLayer;
  }

  /** CSVLayer extends FeatureLayer to create a point layer based on a CSV file (.csv, .txt). */
  export class CSVLayer extends FeatureLayer {
    /** The column delimiter. */
    columnDelimiter: string;
    /** The latitude field name. */
    latitudeFieldName: string;
    /** The longitude field name. */
    longitudeFieldName: string;
    /** The url to a CSV resource. */
    url: string;
  }
  export interface CSVLayerConstructor {
	    /**
	     * Creates a CSV layer.
	     * @param url URL to a CSV resource.
	     * @param options Optional parameters used to create the layer.
	     */
	    new(url: string, options?: CSVLayerOptions): CSVLayer;
  }

  /** Information about the coded values belonging to the domain. */
  export class CodedValueDomain extends Domain {
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
  export interface CodedValueDomainConstructor {
      new(): CodedValueDomain
  }

  /** (Beta at v3.12) Display features using data that contains location information such as X and Y coordinates, Street address, place names etc using a DataAdapter object to retrieve the features and a LocationProvider to generate their geometries. */
  export class DataAdapterFeatureLayer extends FeatureLayer {
    /** The DataAdapter object used to query the data. */
    dataAdapter: any;
    /** The query parameters to use for the DataAdapter. */
    dataAdapterQuery: any;
    /** List of attribute fields added as custom data attributes to graphics node. */
    dataAttributes: string[];
    /** An instance of the Location Provider class. */
    locationProvider: tasks.locationproviders.LocationProviderBase;
  }
  export interface DataAdapterFeatureLayerConstructor {
	    /**
	     * Creates a DataAdapterFeatureLayer.
	     * @param dataAdapter The DataAdapter object.
	     * @param options Optional parameters used to create the layer.
	     */
	    new(dataAdapter: any, options: DataAdapterFeatureLayerOptions): DataAdapterFeatureLayer;
  }
  /** Used to denote classes that may be used as a data source. */
  export class DataSource {
  }
  export interface DataSourceConstructor {
	    /**
	     * Creates a new DataSource object.
	     * @param json JSON object representing the DataSource.
	     */
	    new(json?: Object): DataSource;
  }
  /** A dimensional definition defines a filter based on one variable and one dimension. */
  export class DimensionalDefinition {
    /** (Optional) The dimension associated with the variable. */
    dimensionName: string;
    /** Indicates whether the values indicate slices (rather than ranges). */
    isSlice: boolean;
    /** An array of tuples (min, max) each defining a range of valid values along the specified dimension. */
    values: any[];
    /** The variable name by which to filter. */
    variableName: string;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface DimensionalDefinitionConstructor {
	    /**
	     * Create a new dimensional definition object from an existing json object.
	     * @param json The REST JSON representation for Dimensional Definition.
	     */
	    new(json: Object): DimensionalDefinition;
  }
  /** Domains define constraints on a layer field. */
  export class Domain {
    /** The domain name. */
    name: string;
    /** The domain type. */
    type: string;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface DomainConstructor {
      new(): Domain
  }

  /** Information about each layer in a map service. */
  export class DynamicLayerInfo extends LayerInfo {
    /** Default visibility of the layers in the map service. */
    defaultVisibility: boolean;
    /** Layer ID assigned by ArcGIS Server for a layer. */
    id: number;
    /** The maximum visible scale for each layer in the map service. */
    maxScale: number;
    /** The minimum visible scale for each layer in the map service. */
    minScale: number;
    /** Layer name as defined in the  map service. */
    name: string;
    /** If the layer is part of a group layer, it will include the parent ID of the group layer. */
    parentLayerId: number;
    /** The source for the dynamic layer can be either a LayerMapSource or LayerDataSource. */
    source: LayerSource;
    /** If the layer is a parent layer, it will have one or more sub layers included in an array. */
    subLayerIds: number[];
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface DynamicLayerInfoConstructor {
	    /**
	     * Creates a new DynamicLayerInfo object.
	     * @param json JSON object representing the DynamicLayerInfo.
	     */
	    new(json?: Object): DynamicLayerInfo;
  }

  /** The base class for ArcGIS Server dynamic map services. */
  export class DynamicMapServiceLayer extends Layer {
    /** Full extent as defined by the map service. */
    fullExtent: geometry.Extent;
    /** Initial extent as defined by the map service. */
    initialExtent: geometry.Extent;
    /** The spatial reference of the map service. */
    spatialReference: SpatialReference;
    /**
     * Method to implement when extending DynamicMapServiceLayer.
     * @param extent Current extent of the map.
     * @param width Current width of the map in pixels.
     * @param height Current height of the map in pixels.
     * @param callback The function to call when the method has completed.
     */
    getImageUrl(extent: geometry.Extent, width: number, height: number, callback: Function): string;
    /** Refreshes the map by making a new request to the server. */
    refresh(): void;
  }
  export interface DynamicMapServiceLayerConstructor {
      new(): DynamicMapServiceLayer
  }
  /** The results of a feature edit such as add, update or delete. */
  export class FeatureEditResult {
    /** Unique ID of the attachment. */
    attachmentId: number;
    /** Information about  errors that occur if the edit operation failed. */
    error: Error;
    /** Unique ID of the feature or object. */
    objectId: number;
    /** If true the operation was successful. */
    success: boolean;
  }
  export interface FeatureEditResultConstructor {
      new(): FeatureEditResult
  }

  /** The feature layer inherits from the graphics layer and can be used to display features from a single layer in either a Map Service or Feature Service. */
  export class FeatureLayer extends GraphicsLayer {
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
    fields: Field[];
    /** The full extent of the layer. */
    fullExtent: geometry.Extent;
    /** geometry.Geometry type of the features in the layer. */
    geometryType: string;
    /** The globalIdField for the layer. */
    globalIdField: string;
    /** Array of features in the layer. */
    graphics: Graphic[];
    /** True if attachments are enabled on the feature layer. */
    hasAttachments: boolean;
    /** When true, the layer has attribution data. */
    hasAttributionData: boolean;
    /** The html popup type defined for the layer. */
    htmlPopupType: string;
    /** Label definition for this layer, specified as an array of label classes. */
    labelingInfo: LabelClass[];
    /** Unique ID of the layer that the FeatureLayer was constructed against. */
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
    renderer: renderers.Renderer;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution: boolean;
    /** Determines if labels are displayed. */
    showLabels: boolean;
    /** The dynamic layer or table source. */
    source: LayerSource;
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
    templates: FeatureTemplate[];
    /** Time information for the layer, such as start time field, end time field, track id field, layers time extent and the draw time interval. */
    timeInfo: TimeInfo;
    /** Specifies the type of layer. */
    type: string;
    /** The field that represents the Type ID field. */
    typeIdField: string;
    /** An array of sub types defined in the Feature Service layer. */
    types: FeatureType[];
    /** The version of ArcGIS Server where the layer is published. */
    version: number;
    /** When true, the layer is visible at the current map scale. */
    visibleAtMapScale: boolean;
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
    applyEdits(adds?: Graphic[], updates?: Graphic[], deletes?: Graphic[], callback?: Function, errback?: Function): any;
    /** Clears the current selection. */
    clearSelection(): FeatureLayer;
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
     * Returns the Domain associated with the given field name.
     * @param fieldName Name of the attribute field.
     * @param options Please see the options object specification table below.
     */
    getDomain(fieldName: string, options?: any): Domain;
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
    getEditInfo(feature: Graphic, options?: any): any;
    /**
     * Returns a localized summary of the last edit operation performed on the given feature, if available.
     * @param feature The feature to get the edit summary for.
     * @param options See the object specifications table below for the structure of the  options  object.
     */
    getEditSummary(feature: Graphic, options?: any): string;
    /**
     * Returns the Field given the specified field name.
     * @param fieldName Name of the attribute field.
     */
    getField(fieldName: string): Field;
    /** Returns the current value of the maxAllowableOffset used by the layer. */
    getMaxAllowableOffset(): number;
    /** Returns the list of fields used to order features by. */
    getOrderByFields(): string[];
    /** Gets the currently selected features. */
    getSelectedFeatures(): Graphic[];
    /** Gets the current selection symbol. */
    getSelectionSymbol(): symbols.Symbol;
    /** Get the current time definition applied to the feature layer. */
    getTimeDefinition(): TimeExtent;
    /**
     * Returns a FeatureType describing the feature's type.
     * @param feature A feature from this layer.
     */
    getType(feature: Graphic): FeatureType;
    /** Returns true if geometryType is esriGeometryMultipatch and multipatchOption is xyFootprint. */
    hasXYFootprint(): boolean;
    /** Returns true if the FeatureLayer is editable. */
    isEditable(): boolean;
    /**
     * Returns true if the layer is visible at the given scale.
     * @param scale The scale at which to check if the layer is visible.
     */
    isVisibleAtScale(scale: number): boolean;
    /**
     * tasks.Query for information about attachments associated with the specified ObjectIds.
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
    queryCount(query: tasks.Query, callback?: Function, errback?: Function): any;
    /**
     * Get the extent of features that satisfy the input query.
     * @param query The query definition.
     * @param callback The function called when the method has completed.
     * @param errback The function called when error occurred.
     */
    queryExtent(query: tasks.Query, callback?: Function, errback?: Function): any;
    /**
     * tasks.Query features from the feature layer.
     * @param query The input query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryFeatures(query: tasks.Query, callback?: Function, errback?: Function): any;
    /**
     * tasks.Query for ObjectIds.
     * @param query The input query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryIds(query: tasks.Query, callback?: Function, errback?: Function): any;
    /**
     * tasks.Query features or records, from another layer or table, related to features in this layer.
     * @param relQuery The input query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryRelatedFeatures(relQuery: tasks.RelationshipQuery, callback?: Function, errback?: Function): any;
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
    selectFeatures(query: tasks.Query, selectionMethod?: number, callback?: Function, errback?: Function): any;
    /**
     * Enable or disable auto generalization for the layer.
     * @param enable When true, auto generalize is enabled.
     */
    setAutoGeneralize(enable: boolean): FeatureLayer;
    /**
     * Set's the definition expression for the FeatureLayer.
     * @param expression The definition expression to apply.
     */
    setDefinitionExpression(expression: string): FeatureLayer;
    /**
     * Set the editability of feature layers created from a feature collection.
     * @param editable When true, the layer will be set as editable.
     */
    setEditable(editable: boolean): FeatureLayer;
    /**
     * Set the layer's data source to the specified geodatabase version.
     * @param versionName The name of the geodatabase version to use as the layer's data source.
     */
    setGDBVersion(versionName: string): FeatureLayer;
    /**
     * Specify or change the info template for a layer.
     * @param infoTemplate The new info template.
     */
    setInfoTemplate(infoTemplate: InfoTemplate): void;
    /**
     * Sets labeling info on the layer.
     * @param labelingInfo An array of LabelClass objects.
     */
    setLabelingInfo(labelingInfo: LabelClass[]): void;
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
    setRenderer(renderer: renderers.Renderer): void;
    /**
     * Set the scale range for the layer.
     * @param minScale The minimum scale for the layer.
     * @param maxScale The maximum scale for the layer.
     */
    setScaleRange(minScale: number, maxScale: number): void;
    /**
     * Set's the selection symbol for the feature layer.
     * @param symbol symbols.Symbol for the current selection.
     */
    setSelectionSymbol(symbol: symbols.Symbol): FeatureLayer;
    /**
     * Sets whether to display labels or not.
     * @param showLabels Set to true to show labels.
     */
    setShowLabels(showLabels: boolean): void;
    /**
     * Set's the time definition for the feature layer.
     * @param definition The new time extent used to filter the layer.
     */
    setTimeDefinition(definition: TimeExtent): FeatureLayer;
    /**
     * Time offset allows you to display the features at a different time so they can be overlaid on top of previous or future time periods.
     * @param offsetValue The length of time to offset from "this" time.
     * @param offsetUnits Units in which the offset is specified.
     */
    setTimeOffset(offsetValue: number, offsetUnits: string): FeatureLayer;
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
    on(type: "add-attachment-complete", listener: (event: { result: FeatureEditResult; target: FeatureLayer }) => void): Handle;
    /** Fired before edits are applied to the feature layer. */
    on(type: "before-apply-edits", listener: (event: { adds: Graphic[]; deletes: Graphic[]; updates: Graphic[]; target: FeatureLayer }) => void): Handle;
    /** Fired when the capabilities of the layer are modified using the setEditable method. */
    on(type: "capabilities-change", listener: (event: { target: FeatureLayer }) => void): Handle;
    /** Fires when a feature has been double clicked. */
    on(type: "dbl-click", listener: (event: { event: any; target: FeatureLayer }) => void): Handle;
    /** Fires when deleteAttachments is complete. */
    on(type: "delete-attachments-complete", listener: (event: { results: any[]; target: FeatureLayer }) => void): Handle;
    /** Fires after applyEdits() is complete. */
    on(type: "edits-complete", listener: (event: { adds: FeatureEditResult[]; deletes: FeatureEditResult[]; updates: FeatureEditResult[]; target: FeatureLayer }) => void): Handle;
    /** Fired when the geodatabase version is switched. */
    on(type: "gdb-version-change", listener: (event: { target: FeatureLayer }) => void): Handle;
    /** Fired when labeling info on the layer changes. */
    on(type: "labeling-info-change", listener: (event: { target: FeatureLayer }) => void): Handle;
    /** Fires when queryAttachmentInfos method is called. */
    on(type: "query-attachment-infos-complete", listener: (event: { info: any[]; target: FeatureLayer }) => void): Handle;
    /** Fires when the query for the count is complete. */
    on(type: "query-count-complete", listener: (event: { count: number; target: FeatureLayer }) => void): Handle;
    /** Fires when queryExtent method has completed. */
    on(type: "query-extent-complete", listener: (event: { count: number; extent: geometry.Extent; target: FeatureLayer }) => void): Handle;
    /** Fires when queryFeatures() is complete. */
    on(type: "query-features-complete", listener: (event: { featureSet: tasks.FeatureSet; target: FeatureLayer }) => void): Handle;
    /** Fires when queryIds() is complete. */
    on(type: "query-ids-complete", listener: (event: { objectIds: number[]; target: FeatureLayer }) => void): Handle;
    /** Fired when the feature layer could not draw all the features due to a maxRecordCount limitation on a query operation. */
    on(type: "query-limit-exceeded", listener: (event: { target: FeatureLayer }) => void): Handle;
    /** Fires when queryRelatedFeatures() is complete. */
    on(type: "query-related-features-complete", listener: (event: { relatedFeatures: any; target: FeatureLayer }) => void): Handle;
    /** Fires when a layer resumes drawing. */
    on(type: "resume", listener: (event: { target: FeatureLayer }) => void): Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: FeatureLayer }) => void): Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: FeatureLayer }) => void): Handle;
    /** Fires after clearSelection has been called. */
    on(type: "selection-clear", listener: (event: { target: FeatureLayer }) => void): Handle;
    /** Fires when selectFeatures() completes. */
    on(type: "selection-complete", listener: (event: { features: Graphic[]; method: number; target: FeatureLayer }) => void): Handle;
    /** Fired when the feature layer's labels are changed. */
    on(type: "show-labels-change", listener: (event: { target: FeatureLayer }) => void): Handle;
    /** Fires when a layer suspends drawing. */
    on(type: "suspend", listener: (event: { target: FeatureLayer }) => void): Handle;
    /** Fired when the layer has finished updating its content. */
    on(type: "update-end", listener: (event: { error: Error; info: any; target: FeatureLayer }) => void): Handle;
    /** Fired when the layer begins to update its content. */
    on(type: "update-start", listener: (event: { target: FeatureLayer }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface FeatureLayerConstructor {
	    /** Delegate to either on-demand or snapshot mode depending on the characteristics of the service. */
	  MODE_AUTO: any;
	    /** In on-demand mode, the feature layer retrieves features from the server when needed. */
	  MODE_ONDEMAND: any;
	    /** In selection mode, features are retrieved from the server only when they are selected. */
	  MODE_SELECTION: any;
	    /** In snapshot mode, the feature layer retrieves all the features from the associated layer resource and displays them as graphics on the client. */
	  MODE_SNAPSHOT: any;
	    /** The popup displays content in HTML/TEXT. */
	  POPUP_HTML_TEXT: any;
	    /** No popup type defined. */
	  POPUP_NONE: any;
	    /** The popup displays the contents of a URL. */
	  POPUP_URL: any;
	    /** Adds features to the current selection set. */
	  SELECTION_ADD: any;
	    /** Creates a new selection. */
	  SELECTION_NEW: any;
	    /** Removes features from the current selection. */
	  SELECTION_SUBTRACT: any;
	    /**
	     * Creates a new instance of a feature layer object from the ArcGIS Server REST resource identified by the input URL.
	     * @param url URL to the ArcGIS Server REST resource that represents a feature service.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: FeatureLayerOptions): FeatureLayer;
	    /**
	     * Creates a new instance of a feature layer using a FeatureCollection object.
	     * @param featureCollectionObject A feature collection object.
	     * @param options Optional parameters.
	     */
	    new(featureCollectionObject: any, options?: FeatureLayerOptions): FeatureLayer;
  }

  /** Feature templates define the information required to create a new feature. */
  export class FeatureTemplate {
    /** The description of the template. */
    description: string;
    /** The default drawing tool defined for the template. */
    drawingTool: string;
    /** The templates name. */
    name: string;
    /** An instance of the prototypical feature described by the template. */
    prototype: Graphic;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface FeatureTemplateConstructor {
	    /** The default drawing tool specified for this template is the arrow tool. */
	  TOOL_ARROW: any;
	    /** The default drawing tool specified for this template is a auto complete polygon tool. */
	  TOOL_AUTO_COMPLETE_POLYGON: any;
	    /** The default drawing tool specified for this template is the circle tool. */
	  TOOL_CIRCLE: any;
	    /** The default drawing tool specified for this template is a ellipse tool. */
	  TOOL_ELLIPSE: any;
	    /** The default drawing tool specified for this template is the freehand tool. */
	  TOOL_FREEHAND: any;
	    /** The default drawing tool specified for this template is the line tool. */
	  TOOL_LINE: any;
	    /** No default tool is specified. */
	  TOOL_NONE: any;
	    /** The default drawing tool specified for this template is the point tool. */
	  TOOL_POINT: any;
	    /** The default drawing tool specified for this template is the polygon tool. */
	  TOOL_POLYGON: any;
	    /** The default drawing tool specified for this template is the rectangle. */
	  TOOL_RECTANGLE: any;
	    /** The default drawing tool specified for this template is the triangle. */
	  TOOL_TRIANGLE: any;
      new(): FeatureTemplate
  }

  /** A type defined by a feature layer. */
  export class FeatureType {
    /** Map of field names to domains. */
    domains: any;
    /** The feature type identifier. */
    id: number;
    /** The feature type name. */
    name: string;
    /** Array of feature templates associated with this feature type. */
    templates: FeatureTemplate[];
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface FeatureTypeConstructor {
      new(): FeatureType
  }

  /** Information about each field in a layer. */
  export class Field {
    /** The alias name for the field. */
    alias: string;
    /** Domain associated with the field. */
    domain: Domain;
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
  export interface FieldConstructor {
      new(): Field
  }

  /** The GeoRSSLayer class is used to create a layer based on GeoRSS. */
  export class GeoRSSLayer extends Layer {
    /** The copyright information for the layer. */
    copyright: string;
    /** The default visibility of the layer. */
    defaultVisibility: boolean;
    /** The layer description. */
    description: string;
    /** An array that contains all the graphics in the GeoRSSLayer. */
    items: Graphic[];
    /** The name of the layer. */
    name: string;
    /** An array of feature layers for the GeoRSSLayer. */
    getFeatureLayers(): FeatureLayer[];
    /** Fires when the layer is refreshed. */
    on(type: "refresh", listener: (event: { target: GeoRSSLayer }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface GeoRSSLayerConstructor {
	    /**
	     * Creates a new GeoRSSLayer object.
	     * @param url URL to the GeoRSS resource.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: GeoRSSLayerOptions): GeoRSSLayer;
  }

  /** A layer that contains one or more Graphic features. */
  export class GraphicsLayer extends Layer {
    /** List of attribute fields added as custom data attributes to graphics node. */
    dataAttributes: any;
    /** The array of graphics that make up the layer. */
    graphics: Graphic[];
    /** The info template for the layer. */
    infoTemplate: InfoTemplate;
    /** renderers.Renderer assigned to the GraphicsLayer. */
    renderer: renderers.Renderer;
    /** Indicates whether the layer is responsible for styling graphics. */
    styling: boolean;
    /** Type of vector graphics surface used to draw graphics. */
    surfaceType: string;
    /**
     * Adds a graphic.
     * @param graphic The graphic to add.
     */
    add(graphic: Graphic): Graphic;
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
    remove(graphic: Graphic): Graphic;
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
    setRenderer(renderer: renderers.Renderer): void;
    /** Fires when a graphic has been clicked. */
    on(type: "click", listener: (event: { event: any; target: GraphicsLayer }) => void): Handle;
    /** Fires when a graphic has been double clicked. */
    on(type: "dbl-click", listener: (event: { target: GraphicsLayer }) => void): Handle;
    /** Fires when a graphic is added to the GraphicsLayer. */
    on(type: "graphic-add", listener: (event: { graphic: Graphic; target: GraphicsLayer }) => void): Handle;
    /** Fires when a graphic is drawn. */
    on(type: "graphic-draw", listener: (event: { graphic: Graphic; target: GraphicsLayer }) => void): Handle;
    /** Fires when a graphic's DOM node is created and added to the layer. */
    on(type: "graphic-node-add", listener: (event: { graphic: Graphic; node: HTMLElement; target: GraphicsLayer }) => void): Handle;
    /** This event is fired when a graphic's DOM node is removed (consider the node destroyed). */
    on(type: "graphic-node-remove", listener: (event: { graphic: Graphic; node: HTMLElement; target: GraphicsLayer }) => void): Handle;
    /** Fires when a graphic is removed from the GraphicsLayer. */
    on(type: "graphic-remove", listener: (event: { graphic: Graphic; target: GraphicsLayer }) => void): Handle;
    /** Fires when all graphics in the GraphicsLayer are cleared. */
    on(type: "graphics-clear", listener: (event: { target: GraphicsLayer }) => void): Handle;
    /** Fires when a mouse button is pressed down and the mouse cursor is on a graphic. */
    on(type: "mouse-down", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires while the mouse is being dragged until the mouse button is released. */
    on(type: "mouse-drag", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires as the mouse moves through a graphic on the GraphicsLayer. */
    on(type: "mouse-move", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires as the mouse exits a graphic on the GraphicsLayer. */
    on(type: "mouse-out", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires when the mouse first enters into a graphic on the GraphicsLayer. */
    on(type: "mouse-over", listener: (event: AGSMouseEvent) => void): Handle;
    /** Fires when a mouse button is released and the mouse cursor is on a graphic. */
    on(type: "mouse-up", listener: (event: AGSMouseEvent) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface GraphicsLayerConstructor {
	    /** Creates a new GraphicsLayer object. */
	    new(): GraphicsLayer;
	    /**
	     * Creates a new GraphicsLayer object with parameters.
	     * @param options See options list for parameters.
	     */
	    new(options?: GraphicsLayerOptions): GraphicsLayer;
  }

  /** Represents the image parameter options used when calling ArcGISDynamicMapServiceLayer.exportMapImage, Geoprocessor.getResultImage, and Geoprocessor.getResultImageLayer. */
  export class ImageParameters {
    /** geometry.Extent of map to be exported. */
    bbox: geometry.Extent;
    /** Dots per inch setting for an ArcGISDynamicMapServiceLayer. */
    dpi: number;
    /** Map image format. */
    format: string;
    /** Requested image height in pixels. */
    height: number;
    /** Spatial reference of exported map. */
    imageSpatialReference: SpatialReference;
    /** Array of layer definition expressions that allows you to filter the features of individual layers in the exported map image. */
    layerDefinitions: string[];
    /** A list of layer ID's, that represent which layers to include in the exported map. */
    layerIds: number[];
    /** The option for displaying or hiding the layer. */
    layerOption: string;
    /** Array of LayerTimeOptions objects that allow you to override how a layer is exported in reference to the map's time extent. */
    layerTimeOptions: LayerTimeOptions[];
    /** The time extent for the map image. */
    timeExtent: TimeExtent;
    /** Whether or not background of dynamic image is transparent. */
    transparent: boolean;
    /** Requested image width in pixels. */
    width: number;
  }
  export interface ImageParametersConstructor {
	    /** Shows all layers visible by default except the specified layer ID's. */
	  LAYER_OPTION_EXCLUDE: any;
	    /** Shows all layers except the specified layer ID's. */
	  LAYER_OPTION_HIDE: any;
	    /** Shows specified layer ID's in addition to layers visible by default. */
	  LAYER_OPTION_INCLUDE: any;
	    /** Shows only the specified layer ID's. */
	  LAYER_OPTION_SHOW: any;
	    /** Creates a new ImageParameters object. */
	    new(): ImageParameters;
  }

  /** Represents the image service parameter options used when calling ArcGISImageServiceLayer.exportMapImage. */
  export class ImageServiceParameters {
    /** Array of current band selections. */
    bandIds: number[];
    /** Current compression quality value. */
    compressionQuality: number;
    /** geometry.Extent of the exported image. */
    extent: geometry.Extent;
    /** Map image format. */
    format: string;
    /** Requested image height in pixels. */
    height: number;
    /** Current interpolation method. */
    interpolation: string;
    /** Specifies the mosaic rule when defining how individual images should be mosaicked. */
    mosaicRule: MosaicRule;
    /** The pixel value that represents no information. */
    noData: number;
    /** Specifies the rendering rule for how the requested image should be rendered. */
    renderingRule: RasterFunction;
    /** Define the time extent for the image. */
    timeExtent: TimeExtent;
    /** Requested image width in pixels. */
    width: number;
  }
  export interface ImageServiceParametersConstructor {
	    /** Resamples pixel by bilinear interpolation. */
	  INTERPOLATION_BILINEAR: any;
	    /** Resamples pixel by cubic convolution. */
	  INTERPOLATION_CUBICCONVOLUTION: any;
	    /** Resamples pixel by majority value. */
	  INTERPOLATION_MAJORITY: any;
	    /** Resamples pixel by nearest neighbor. */
	  INTERPOLATION_NEARESTNEIGHBOR: any;
	    /** Creates a new ImageServiceParameters object. */
	    new(): ImageServiceParameters;
  }

  /** This class is a subclass of esri/layers/Domain. */
  export class InheritedDomain extends Domain {
  }
  export interface InheritedDomainConstructor {
      new(): InheritedDomain
  }

  /** The JoinDataSource class defines and provides information about the result of a join operation. */
  export class JoinDataSource extends DataSource {
    /** The type of join that will be performed. */
    joinType: string;
    /** The key field used for the left table source for the join. */
    leftTableKey: string;
    /** The data source to be used as the left table for the join operation. */
    leftTableSource: LayerSource;
    /** The key field used for the right table source for the join. */
    rightTableKey: string;
    /** The data source to be used as the right table for the join operation. */
    rightTableSource: LayerSource;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface JoinDataSourceConstructor {
	    /**
	     * Creates a new JoinDataSource object.
	     * @param json JSON object representing the JoinDataSource.
	     */
	    new(json?: Object): JoinDataSource;
  }
  /** Defines information about a KML folder. */
  export class KMLFolder {
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
  export interface KMLFolderConstructor {
      new(): KMLFolder
  }

  /** The KMLGroundOverlay class provides details about a KML ground overlay. */
  export class KMLGroundOverlay {
    /** KML ground overlay description. */
    description: string;
    /** geometry.Extent of image. */
    extent: geometry.Extent;
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
  export interface KMLGroundOverlayConstructor {
      new(): KMLGroundOverlay
  }

  /** The KMLLayer class is used to create a layer based on a KML file (.kml, .kmz). */
  export class KMLLayer extends Layer {
    /** An array of objects that describe top-level KML features ids and their types. */
    featureInfos: any[];
    /** An array of KMLFolder objects that describe the folders and nested folders defined in the KML file. */
    folders: KMLFolder[];
    /** A link info object with properties that describe the network link. */
    linkInfo: any;
    /** The publicly accessible URL for a .kml or .kmz file. */
    url: string;
    /**
     * Get the KML feature identified by the input feature info.
     * @param featureInfo Feature info for the kml feature.
     */
    getFeature(featureInfo: any): any;
    /** Get an array of map layers that were created to draw placemarks, ground and screen overlays. */
    getLayers(): Layer[];
    /**
     * Set the visibility for the specified folder.
     * @param folder A KML folder.
     * @param isVisible The visibility of the folder and all kml features within the folder.
     */
    setFolderVisibility(folder: KMLFolder, isVisible: boolean): void;
    /** Fired after the layer is refreshed. */
    on(type: "refresh", listener: (event: { target: KMLLayer }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface KMLLayerConstructor {
	    /**
	     * Creates a new KMLLayer based upon the given URL.
	     * @param id Id to assign to the layer.
	     * @param url URL for a .kml or .kmz file.
	     * @param options Optional parameters.
	     */
	    new(id: string, url: string, options?: KMLLayerOptions): KMLLayer;
  }
  /** An ArcGISTiledMapServiceLayer has a number of LODs (Levels of Detail). */
  export class LOD {
    /** ID for each level. */
    level: number;
    /** String to be used when constructing URL to access a tile from this LOD. */
    levelValue: string;
    /** Resolution in map units of each pixel in a tile for each level. */
    resolution: number;
    /** Scale for each level. */
    scale: number;
  }
  export interface LODConstructor {
      new(): LOD
  }

  /** LabelClass defines the styles of labels for ArcGISDynamicMapServiceLayer. */
  export class LabelClass {
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
    symbol: symbols.TextSymbol;
    /** When true, show the fields in the labelExpression that have domains using the domain's name. */
    useCodedValues: boolean;
    /** A where clause determining which features are labeled. */
    where: string;
  }
  export interface LabelClassConstructor {
	    /**
	     * Create a LabelClass, in order to be added to layerDrawingOption.labelingInfo.
	     * @param json Various options to configure this LabelClass.
	     */
	    new(json?: Object): LabelClass;
  }

  /** The LabelLayer inherits from the graphics layer and can be used to display texts and symbols on map. */
  export class LabelLayer extends GraphicsLayer {
    /**
     * Adds reference to the feature layer which is labeled.
     * @param featureLayer The feature layer to be added to the label layer.
     * @param renderer The renderer used to render text labels.
     * @param textExpression An expression determining what text and field(s) will be displayed as in labels.
     * @param labelOptions An object providing additional options for changing label visibility and placement.
     */
    addFeatureLayer(featureLayer: FeatureLayer, renderer?: renderers.SimpleRenderer, textExpression?: any, labelOptions?: any): void;
    /**
     * Adds reference to the feature layer which is labeled.
     * @param featureLayer The feature layer to be added to the label layer.
     * @param renderer The renderer used to render text labels.
     * @param textExpression An expression determining what text and field(s) will be displayed as in labels.
     * @param labelOptions An object providing additional options for changing label visibility and placement.
     */
    addFeatureLayer(featureLayer: FeatureLayer, renderer?: renderers.UniqueValueRenderer, textExpression?: any, labelOptions?: any): void;
    /**
     * Adds reference to the feature layer which is labeled.
     * @param featureLayer The feature layer to be added to the label layer.
     * @param renderer The renderer used to render text labels.
     * @param textExpression An expression determining what text and field(s) will be displayed as in labels.
     * @param labelOptions An object providing additional options for changing label visibility and placement.
     */
    addFeatureLayer(featureLayer: FeatureLayer, renderer?: renderers.ClassBreaksRenderer, textExpression?: any, labelOptions?: any): void;
    /**
     * Returns reference to the feature layer which features will be labeled.
     * @param index Index of the referenced feature layer.
     */
    getFeatureLayer(index: number): FeatureLayer;
  }
  export interface LabelLayerConstructor {
	    /**
	     * Creates a new Label layer.
	     * @param params Constructor parameters.
	     */
	    new(params?: LabelLayerOptions): LabelLayer;
  }

  /** The LayerDataSource class defines and provides information about a layer created on the fly from a data source. */
  export class LayerDataSource extends LayerSource {
    /** The data source used to create a dynamic data layer on the fly. */
    dataSource: DataSource;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface LayerDataSourceConstructor {
	    /**
	     * Creates a new LayerDataSource object.
	     * @param json JSON object representing the LayerDataSource.
	     */
	    new(json?: Object): LayerDataSource;
  }

  /** The LayerDrawingOptions class provides options for setting ArcGISDynamicMapServiceLayer rendering options. */
  export class LayerDrawingOptions {
    /** Define labels of dynamicLayers. */
    labelingInfo: LabelClass[];
    /** The renderer to use for the dynamic layer. */
    renderer: renderers.Renderer;
    /** Determines if the layer renders the symbols based on scale. */
    scaleSymbols: boolean;
    /** Determines if labels are displayed. */
    showLabels: boolean;
    /** The transparency of the layer. */
    transparency: number;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface LayerDrawingOptionsConstructor {
	    /**
	     * Creates a new LayerDrawingOptions object.
	     * @param json JSON object representing the LayerDrawingOptions.
	     */
	    new(json?: Object): LayerDrawingOptions;
  }
  /** Contains information about each layer in a map service. */
  export class LayerInfo {
    /** Default visibility of the layers in the map service. */
    defaultVisibility: boolean;
    /** Layer ID assigned by ArcGIS Server for a layer. */
    id: number;
    /** The maximum visible scale for each layer in the map service. */
    maxScale: number;
    /** The minimum visible scale for each layer in the map service. */
    minScale: number;
    /** Layer name as defined in the  map service. */
    name: string;
    /** If the layer is part of a group layer, it will include the parent ID of the group layer. */
    parentLayerId: number;
    /** If the layer is a parent layer, it will have one or more sub layers included in an array. */
    subLayerIds: number[];
  }
  export interface LayerInfoConstructor {
      new(): LayerInfo
  }

  /** The LayerMapSource class defines and provides information about an existing map service layer. */
  export class LayerMapSource extends LayerSource {
    /** When supported, specify the version in an SDE workspace that the layer will use. */
    gdbVersion: string;
    /** The layer id for a sub-layer in the current map service. */
    mapLayerId: number;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface LayerMapSourceConstructor {
	    /**
	     * Creates a new LayerMapSource object.
	     * @param json JSON object representing the LayerMapSource.
	     */
	    new(json?: Object): LayerMapSource;
  }
  /** Used to denote classes that may be used as a layer's source. */
  export class LayerSource {
    /** Used to describe the origin of the LayerSource. */
    type: string;
  }
  export interface LayerSourceConstructor {
	    /**
	     * Creates a new LayerSource object.
	     * @param json Creates a new LayerSource object.
	     */
	    new(json?: Object): LayerSource;
  }
  /** Defines the time options for the layer. */
  export class LayerTimeOptions {
    /** If true, the layer will draw all features from the beginning of the data's time extent. */
    timeDataCumulative: boolean;
    /** The length of time the data is offset from the time when the data was recorded. */
    timeOffset: number;
    /** Temporal unit in which the time offset is measured. */
    timeOffsetUnits: string;
    /** If true, the layer participates in time-related rendering and query operations. */
    useTime: boolean;
  }
  export interface LayerTimeOptionsConstructor {
      new(): LayerTimeOptions
  }

  /** Represents the data object for the dynamically generated map. */
  export class MapImage {
    /** geometry.Extent of exported map. */
    extent: geometry.Extent;
    /** Requested image height in pixels. */
    height: number;
    /** URL to returned image. */
    href: string;
    /** Scale of requested dynamic map. */
    scale: number;
    /** Requested image width in pixels. */
    width: number;
  }
  export interface MapImageConstructor {
	    /**
	     * Creates a new Map Image object.
	     * @param options An object that defines the map image options.
	     */
	    new(options: MapImageOptions): MapImage;
  }

  /** The MapImageLayer class is used to add georeferenced images to the map. */
  export class MapImageLayer extends Layer {
    /**
     * Add an image to the map.
     * @param mapImage A MapImage object that defines the image to add to the map.
     */
    addImage(mapImage: MapImage): void;
    /** Get an array of MapImage objects that define the images in the MapImageLayer. */
    getImages(): MapImage[];
    /** Remove all images from the layer. */
    removeAllImages(): void;
    /**
     * Remove the specified image from the layer.
     * @param mapImage The MapImage object that defines the image to remove.
     */
    removeImage(mapImage: MapImage): void;
  }
  export interface MapImageLayerConstructor {
	    /**
	     * Creates a new MapImageLayer object
	     * @param options Optional parameters.
	     */
	    new(options?: any): MapImageLayer;
  }

  /** Specifies the mosaic rule when defining how individual images should be mosaicked. */
  export class MosaicRule {
    /** Indicates whether the sort should be ascending or not. */
    ascending: boolean;
    /** An array of raster Ids. */
    lockRasterIds: number[];
    /** The mosaic method determines how the selected rasters are ordered. */
    method: string;
    /** A multiple dimensional service can have multiple variables and multiple dimensions. */
    multidimensionalDefinition: DimensionalDefinition[];
    /** Defines a selection using a set of ObjectIds. */
    objectIds: number[];
    /** Defines the mosaic operation used to resolve overlapping pixels. */
    operation: string;
    /** The name of the attribute field that is used together with a constant sortValue to define the mosaicking order when the mosaic method is set to METHOD_ATTRIBUTE. */
    sortField: string;
    /** A constant value defining a reference or base value for the sort field when the mosaic method is set to METHOD_ATTRIBUTE. */
    sortValue: string;
    /** Defines the viewpoint location on which the ordering is defined based on the distance from the viewpoint and the nadir of rasters. */
    viewpoint: geometry.Point;
    /** The where clause determines which rasters will participate in the mosaic. */
    where: string;
    /** Returns an easily serializable object representation of the mosaic rule. */
    toJson(): any;
  }
  export interface MosaicRuleConstructor {
	    /** Sorts rasters based on an attribute field and its difference from a base value. */
	  METHOD_ATTRIBUTE: any;
	    /** Sorts rasters where rasters that have their centers closest to the view center or center of view extent are placed on top. */
	  METHOD_CENTER: any;
	    /** Specifies that only rasters in the given list of raster Ids participate in the mosaic. */
	  METHOD_LOCKRASTER: any;
	    /** Sorts rasters by the distance between the nadir position and view center. */
	  METHOD_NADIR: any;
	    /** No mosaic method specified. */
	  METHOD_NONE: any;
	    /** Sorts rasters in a view independent way, where rasters with their centers most northwest are displayed on top. */
	  METHOD_NORTHWEST: any;
	    /** Cuts the raster using the predefined seamline shape. */
	  METHOD_SEAMLINE: any;
	    /** Sorts rasters based on a user-defined viewpoint location and nadir location. */
	  METHOD_VIEWPOINT: any;
	    /** Takes the blended value of all overlapping pixels. */
	  OPERATION_BLEND: any;
	    /** Takes the first value of all overlapping pixels. */
	  OPERATION_FIRST: any;
	    /** Takes the last value of all overlapping pixels. */
	  OPERATION_LAST: any;
	    /** Takes the maximum value of all overlapping pixels. */
	  OPERATION_MAX: any;
	    /** Takes the mean value of all overlapping pixels. */
	  OPERATION_MEAN: any;
	    /** Takes the minimum value of all overlapping pixels. */
	  OPERATION_MIN: any;
	    /** Creates a new MosaicRule object */
	    new(): MosaicRule;
	    /**
	     * Create a new mosaic rule object using a json string representing a serialized version of the mosaic rule.
	     * @param json A json string representing a serialized version of the mosaic rule.
	     */
	    new(json: Object): MosaicRule;
  }

  /** Allows you to use basemaps from  OpenStreetMap . */
  export class OpenStreetMapLayer extends TiledMapServiceLayer {
    /** The copyright text. */
    copyright: string;
  }
  export interface OpenStreetMapLayerConstructor {
	    /**
	     * Creates a new OpenStreetMapLayer object.
	     * @param options Optional parameters.
	     */
	    new(options?: OpenStreetMapLayerOptions): OpenStreetMapLayer;
  }

  /** The QueryDataSource class defines and provides information about a layer or table that is defined by a SQL query. */
  export class QueryDataSource extends DataSource {
    /** The geometry type of the data source. */
    geometryType: string;
    /** An array of field names that define a unique identifier for the feature. */
    oidFields: string[];
    /** The SQL query string that defines the data source output. */
    query: string;
    /** The spatial reference for the data source. */
    spatialReference: SpatialReference;
    /** The workspace id for the registered file geodatabase, SDE or Shapefile workspace. */
    workspaceId: string;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface QueryDataSourceConstructor {
	    /**
	     * Creates a new QueryDataSource object.
	     * @param json JSON object representing the QueryDataSource.
	     */
	    new(json?: Object): QueryDataSource;
  }

  /** Information about the range of values belonging to the domain. */
  export class RangeDomain extends Domain {
    /** The maximum valid value. */
    maxValue: number;
    /** The minimum valid value. */
    minValue: number;
  }
  export interface RangeDomainConstructor {
      new(): RangeDomain
  }

  /** The RasterDataSource class defines and provides information about a file-based raster that resides in a registered raster workspace. */
  export class RasterDataSource extends DataSource {
    /** The name of a raster that resides in the registered workspace. */
    dataSourceName: string;
    /** The workspace id for the registered raster workspace. */
    workspaceId: string;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface RasterDataSourceConstructor {
	    /**
	     * Creates a new RasterDataSource object.
	     * @param json JSON object representing the RasterDataSource.
	     */
	    new(json?: Object): RasterDataSource;
  }
  /** Specifies the processing to be done to the image service. */
  export class RasterFunction {
    /** Deprecated at v3.10, use functionArguments instead. */
    arguments: any;
    /** The arguments for the raster function. */
    functionArguments: any;
    /** The raster function name. */
    functionName: string;
    /** Variable name for the raster function. */
    variableName: string;
    /** Returns an easily serializable object representation of the raster function. */
    toJson(): any;
  }
  export interface RasterFunctionConstructor {
	    /** Creates a new RasterFunction object. */
	    new(): RasterFunction;
	    /**
	     * Create a new Raster Function object using a json string representing a serialized version of a raster function.
	     * @param json A json string representing a serialized version of a raster function.
	     */
	    new(json: Object): RasterFunction;
  }

  /** The stream layer extends the feature layer to add the ability to connect to a stream of data using HTML5 WebSockets. */
  export class StreamLayer extends FeatureLayer {
    /** The maximum number of observations being shown for each unique track. */
    maximumTrackPoints: number;
    /** Raw access to the connected websocket. */
    socket: any;
    /** URL used to make the socket connection. */
    socketUrl: string;
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
    getGeometryDefinition(): geometry.Extent;
    /**
     * Gets the unique values of the graphics (in the StreamLayer) based on the `fieldName` parameter.
     * @param fieldName Field to get the unique values from.
     */
    getUniqueValues(fieldName: string): any[];
    /**
     * Sets the spatial filter for the layer.
     * @param extent Limit the features in the StreamLayer by setting a bounding box.
     */
    setGeometryDefinition(extent: geometry.Extent): void;
    /**
     * Sets the maximumTrackPoints property for the layer.
     * @param value The maximum track points for the layer.
     */
    setMaximumTrackPoints(value: number): void;
    /** Fires when the layer attempts to reconnect to the web socket. */
    on(type: "attempt-reconnect", listener: (event: { count: number; url: string; target: StreamLayer }) => void): Handle;
    /** Fires when connection is successfully made to socket. */
    on(type: "connect", listener: (event: { target: StreamLayer }) => void): Handle;
    /** Fires when a connection cannot be made with the web socket. */
    on(type: "connection-error", listener: (event: { error: Error; target: StreamLayer }) => void): Handle;
    /** Fires when disconnect from socket. */
    on(type: "disconnect", listener: (event: { target: StreamLayer }) => void): Handle;
    /** Fires when the layer receives a message that the server-side filter has been changed. */
    on(type: "filter-change", listener: (event: { error: Error; filter: any; target: StreamLayer }) => void): Handle;
    /** Fires after a message is pushed to the layer. */
    on(type: "message", listener: (event: { message: any; target: StreamLayer }) => void): Handle;
    /** Fires when layer is added to map (if stream service is associated with an archive feature service) and when graphics are updated on the map due to new ones being added or removed (for example purged). */
    on(type: "update-start", listener: (event: { target: StreamLayer }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface StreamLayerConstructor {
	    /**
	     * Creates a new StreamLayer with a service URL.
	     * @param url URL to an ArcGIS Server Stream Service.
	     * @param options Optional parameters used to create the layer.
	     */
	    new(url: string, options?: StreamLayerOptions1): StreamLayer;
	    /**
	     * Creates a new StreamLayer with a FeatureCollection object.
	     * @param featureCollectionObject A feature collection object.
	     * @param options Optional parameters used to create the layer.
	     */
	    new(featureCollectionObject: any, options?: StreamLayerOptions2): StreamLayer;
  }

  /** The TableDataSource class defines and provides information about a table, feature class, or raster that resides in a registered file geodatabase, SDE or Shapefile workspace. */
  export class TableDataSource extends DataSource {
    /** The name of a table, feature class or raster that resides in the registered workspace. */
    dataSourceName: string;
    /** For versioned SDE workspaces, use this property to point to an alternate version. */
    gdbVersion: string;
    /** The workspace id for the registered file geodatabase, SDE or Shapefile workspace. */
    workspaceId: string;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface TableDataSourceConstructor {
	    /**
	     * Creates a new TableDataSource object.
	     * @param json JSON object representing the TableDataSource.
	     */
	    new(json?: Object): TableDataSource;
  }

  /** Contains information about the tiling scheme for an ArcGISTiledMapServiceLayer. */
  export class TileInfo {
    /** The dpi of the tiling scheme. */
    dpi: number;
    /** Image format of the cached tiles. */
    format: string;
    /** Height of each tile in pixels. */
    height: number;
    /** An array of levels of detail that define the tiling scheme. */
    lods: LOD[];
    /** The tiling scheme origin. */
    origin: geometry.Point;
    /** The spatial reference of the tiling schema. */
    spatialReference: SpatialReference;
    /** Width of each tile in pixels. */
    width: number;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface TileInfoConstructor {
	    /**
	     * Creates a new object describing the given tiling scheme.
	     * @param properties Properties describing the tiling scheme.
	     */
	    new(properties: any): TileInfo;
  }

  /** The base class for all tiled map service layers. */
  export class TiledMapServiceLayer extends Layer {
    /** Full extent as defined by the map service. */
    fullExtent: geometry.Extent;
    /** Initial extent as defined by the map service. */
    initialExtent: geometry.Extent;
    /** The spatial reference of the map service. */
    spatialReference: SpatialReference;
    /** Returns TileInfo, which has information on the tiling schema. */
    tileInfo: TileInfo;
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
  export interface TiledMapServiceLayerConstructor {
	    /** Creates a new TiledMapServiceLayer object. */
	    new(): TiledMapServiceLayer;
  }

  /** Time information details. */
  export class TimeInfo {
    /** The name of the attribute field that contains the end time information. */
    endTimeField: string;
    /** Default time-related export options for the layer. */
    exportOptions: LayerTimeOptions;
    /** The name of the attribute field that contains the start time information. */
    startTimeField: string;
    /** The time extent for all the data in the layer. */
    timeExtent: TimeExtent;
    /** Time interval of the data in the layer. */
    timeInterval: number;
    /** Temporal unit in which the time interval is measured. */
    timeIntervalUnits: string;
    /** Information about how the time was measured. */
    timeReference: TimeReference;
    /** The field that contains the trackId. */
    trackIdField: string;
  }
  export interface TimeInfoConstructor {
	    /** Indicates a value measured in centuries. */
	  UNIT_CENTURIES: any;
	    /** Indicates a value measured in days. */
	  UNIT_DAYS: any;
	    /** Indicates a value measured in decades. */
	  UNIT_DECADES: any;
	    /** Indicates a value measured in hours. */
	  UNIT_HOURS: any;
	    /** Indicates a value measured in milliseconds. */
	  UNIT_MILLISECONDS: any;
	    /** Indicates a value measured in minutes. */
	  UNIT_MINUTES: any;
	    /** Indicates a value measured in months. */
	  UNIT_MONTHS: any;
	    /** Indicates a value measured in seconds. */
	  UNIT_SECONDS: any;
	    /** Indicates a value measured in unknown units. */
	  UNIT_UNKNOWN: any;
	    /** Indicates a value measured in weeks. */
	  UNIT_WEEKS: any;
	    /** Indicates a value measured in years. */
	  UNIT_YEARS: any;
      new(): TimeInfo
  }
  /** TimeReference contains information about how the time was measured. */
  export class TimeReference {
    /** Indicates whether the time reference respects daylight savings time. */
    respectsDaylightSaving: boolean;
    /** The time zone information associated with the time reference. */
    timeZone: string;
  }
  export interface TimeReferenceConstructor {
      new(): TimeReference
  }

  /** A layer for OGC Web Map Services (WMS). */
  export class WMSLayer extends DynamicMapServiceLayer {
    /** Copyright of the WMS service. */
    copyright: string;
    /** Description of the WMS service. */
    description: string;
    /** geometry.Extent of the WMS service. */
    extent: geometry.Extent;
    /** The URL for the WMS GetMap call. */
    getMapUrl: string;
    /** The map image format. */
    imageFormat: string;
    /** List of layers in the WMS service. */
    layerInfos: WMSLayerInfo[];
    /** Maximum height in pixels the WMS service supports. */
    maxHeight: number;
    /** Maximum width in pixels the WMS service supports. */
    maxWidth: number;
    /** Spatial reference of the WMS service. */
    spatialReference: SpatialReference;
    /** Title of the WMS service. */
    title: string;
    /** Version of the WMS service. */
    version: string;
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
  export interface WMSLayerConstructor {
	    /**
	     * Creates a new WMSLayer object.
	     * @param url URL to the OGC Web Map Service.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: WMSLayerOptions): WMSLayer;
  }

  /** The WMSLayerInfo class defines and provides information about layers in a WMS service. */
  export class WMSLayerInfo {
    /** The layer description defines the value of the Abstract capabilities property. */
    description: string;
    /** The layer extent. */
    extent: geometry.Extent;
    /** The layer  name. */
    name: string;
    /** The layer title. */
    title: string;
  }
  export interface WMSLayerInfoConstructor {
	    /**
	     * Creates a new WMSLayerInfo object.
	     * @param layer WMSLayerInfo layer object.
	     */
	    new(layer: any): WMSLayerInfo;
  }

  /** The WMTSLayer class is used to create a layer based on an OGC Web Map Tile Service layer. */
  export class WMTSLayer extends TiledMapServiceLayer {
    /** Copyright information for the service. */
    copyright: string;
    /** The description of the active layer if specified in the capabilties file or the resource info. */
    description: string;
    /** The tile format. */
    format: string;
    /** The full extent of the active layer. */
    fullExtent: geometry.Extent;
    /** The initial extent of the active layer. */
    initialExtent: geometry.Extent;
    /** An array of WMTSLayerInfo objects. */
    layerInfos: any[];
    /** The service mode for the WMTS layer. */
    serviceMode: string;
    /** The spatial reference for the WMTS service. */
    spatialReference: SpatialReference;
    /** The tile info for the active layer. */
    tileInfo: TileInfo;
    /** Title of the WMTS service. */
    title: string;
    /** Version of the WMTS service. */
    version: string;
    /**
     * Set the active layer for the WMTS service.
     * @param WMTSLayerInfo The WMTSLayerInfo for the layer to make active.
     */
    setActiveLayer(WMTSLayerInfo: WMTSLayerInfo): void;
  }
  export interface WMTSLayerConstructor {
	    /**
	     * Creates a new WMTSLayer object.
	     * @param url URL for the WMTS endpoint.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: WMTSLayerOptions): WMTSLayer;
  }

  /** The WMTSLayerInfo class defines and provides information about layers in a WMTS service. */
  export class WMTSLayerInfo {
  }
  export interface WMTSLayerInfoConstructor {
	    /**
	     * Creates a new WMTSLayerInfo object.
	     * @param options An object that defines the layer info options.
	     */
	    new(options: WMTSLayerInfoOptions): WMTSLayerInfo;
  }

  /** The WebTiledLayer class provides a simple way to add non-ArcGIS Server map tiles as a layer to a map. */
  export class WebTiledLayer extends TiledMapServiceLayer {
    /** The attribution information for the layer. */
    copyright: string;
    /** The full extent of the layer. */
    fullExtent: geometry.Extent;
    /** The initial extent of the layer. */
    initialExtent: geometry.Extent;
    /** The spatial reference of the layer. */
    spatialReference: SpatialReference;
    /** Define the tile info for the layer including lods, rows, cols, origin and spatial reference. */
    tileInfo: TileInfo;
    /** The tile server names for the layer. */
    tileServers: string[];
  }
  export interface WebTiledLayerConstructor {
	    /**
	     * Creates a new WebTiledLayer.
	     * @param urlTemplate The URL template to retrieve the tiles.
	     * @param options Optional parameters.
	     */
	    new(urlTemplate: string, options?: WebTiledLayerOptions): WebTiledLayer;
  }

  /** The base class for all layers that can be added to a map. */
  export class Layer {
    /** The URL, when available, where the layer's attribution data is stored. */
    attributionDataUrl: string;
    /** class attribute of the layer's node. */
    className: string;
    /** Provides credential information for the layer such as userid and token if the layer represents a resource that is secured with token-based authentication. */
    credential: Credential;
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
     * Adds a new attribute or changes the value of an existing attribute on the layer's node.
     * @param name The name of the attribute.
     * @param value The value of the attribute.
     */
    attr(name: string, value: string): Layer;
    /** Asynchrously returns custom data for the layer when available. */
    getAttributionData(): any;
    /** Returns reference to the map control the layer is added to. */
    getMap(): Map;
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
    setRefreshInterval(interval: number): Layer;
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
    on(type: "error", listener: (event: { error: Error; target: Layer }) => void): Handle;
    /** Fires after layer properties for the layer are successfully populated. */
    on(type: "load", listener: (event: { layer: Layer; target: Layer }) => void): Handle;
    /** Fires when the layer opacity has been changed, and returns an object with the opacity value. */
    on(type: "opacity-change", listener: (event: { opacity: number; target: Layer }) => void): Handle;
    /** This event is fired when the layer's refreshInterval is modified. */
    on(type: "refresh-interval-change", listener: (event: { target: Layer }) => void): Handle;
    /** Fires when a layer resumes drawing. */
    on(type: "resume", listener: (event: { target: Layer }) => void): Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: Layer }) => void): Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: Layer }) => void): Handle;
    /** Fires when a layer suspends drawing. */
    on(type: "suspend", listener: (event: { target: Layer }) => void): Handle;
    /** Fires any time a layer has finished loading or updating itself. */
    on(type: "update", listener: (event: { target: Layer }) => void): Handle;
    /** Fires when a layer has finished updating its content. */
    on(type: "update-end", listener: (event: { error: Error; target: Layer }) => void): Handle;
    /** Fires when a layer begins to update its content. */
    on(type: "update-start", listener: (event: { target: Layer }) => void): Handle;
    /** Fires when the layer visibility has been changed, and returns an object with a Boolean visible property containing the new visibility value of the layer. */
    on(type: "visibility-change", listener: (event: { visible: boolean; target: Layer }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface LayerConstructor {
	    /**
	     * Creates a new Layer object.
	     * @param options Optional parameters.
	     */
	    new(options?: LayerOptions): Layer;
  }
}
declare namespace esriTypes.plugins {

  /** A static utility module that adds or removes a SpatialIndex instance on a Map or FeatureLayer. */
  export var spatialIndex: {
    /**
     * Adds an index property to the target instance.
     * @param target The map or feature layer to which the index is connected.
     * @param options See the object specifications table below for the structure of the index  options  object.
     */
    add(target: Map, options?: any): void;
    /**
     * Adds an index property to the target instance.
     * @param target The map or feature layer to which the index is connected.
     * @param options See the object specifications table below for the structure of the index  options  object.
     */
    add(target: layers.FeatureLayer, options?: any): void;
    /** Removes the index plugin. */
    remove(): void;
  };
}
declare namespace esriTypes.process {

  /** The base processor class provides the generic api for processors and provides an extension point from which developers can create and extend additional processors. */
  export class Processor {
    /** Allow the feature layer to draw the features. */
    drawFeatures: boolean;
    /** Should features be fetched through the Worker. */
    fetchWithWorker: boolean;
    /** Layer(s) connected to the processor. */
    layers: layers.FeatureLayer[];
    /** Pass features back to layer without delay before processing. */
    passFeatures: boolean;
    /** Require support for Worker in order to use this processor. */
    requireWorkerSupport: boolean;
    /**
     * Add layer to processor.
     * @param layer layers.FeatureLayer to be added.
     */
    addLayer(layer: layers.FeatureLayer): void;
    /**
     * Remove layer from processor.
     * @param layer layers.FeatureLayer to be removed.
     */
    removeLayer(layer: layers.FeatureLayer): void;
    /**
     * Synchronize the layers the processor handles with the map's layers.GraphicsLayer and layers.GraphicsLayer subclasses (FeatureLayer etc).
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
    on(type: "start", listener: (event: { target: Processor }) => void): Handle;
    /** Fires when the processor is stopped. */
    on(type: "stop", listener: (event: { target: Processor }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ProcessorConstructor {
	    /**
	     * Creates a processor.
	     * @param options Configuration options for the processor.
	     */
	    new(options?: ProcessorOptions): Processor;
  }

  /** Builds and maintains a spatial index of feature geometry in one or more FeatureLayer. */
  export class SpatialIndex extends Processor {
    /**
     * Searches index for items which intersect the test object.
     * @param test The point or area to intersect.
     * @param layerId ID assigned to the layer.
     * @param getRects Whether to get the rectangle object with data in leaf, otherwise just get the stored data.
     */
    intersects(test: geometry.Point, layerId?: string, getRects?: boolean): any;
    /**
     * Searches index for items which intersect the test object.
     * @param test The point or area to intersect.
     * @param layerId ID assigned to the layer.
     * @param getRects Whether to get the rectangle object with data in leaf, otherwise just get the stored data.
     */
    intersects(test: Graphic, layerId?: string, getRects?: boolean): any;
    /**
     * Searches index for items which intersect the test object.
     * @param test The point or area to intersect.
     * @param layerId ID assigned to the layer.
     * @param getRects Whether to get the rectangle object with data in leaf, otherwise just get the stored data.
     */
    intersects(test: geometry.Extent, layerId?: string, getRects?: boolean): any;
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
  export interface SpatialIndexConstructor {
	    /**
	     * Creates a SpatialIndex.
	     * @param options Configuration options for the processor.
	     */
	    new(options?: SpatialIndexOptions): SpatialIndex;
  }
}
declare namespace esriTypes.renderers {

  /** A class breaks renderer symbolizes each graphic based on the value of some numeric attribute. */
  export class ClassBreaksRenderer extends Renderer {
    /** Attribute field renderer uses to match values. */
    attributeField: string;
    /** To symbolize polygon features with graduated symbols, use backgroundFillSymbol to specify a simple fill symbol to represent polygon features, and use marker symbols of varying sizes in class breaks to indicate the quantity. */
    backgroundFillSymbol: symbols.FillSymbol;
    /** Deprecated at v2.0, use infos instead. */
    breaks: any[];
    /** The classification method used to generate class breaks. */
    classificationMethod: string;
    /** Default symbol used when a value or break cannot be matched. */
    defaultSymbol: symbols.Symbol;
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
     * Adds a class break.
     * @param minValueOrInfo The value can be provided as individual arguments or as an info object.
     * @param maxValue Maximum value in the break.
     * @param symbol symbols.Symbol used for the break.
     */
    addBreak(minValueOrInfo: number, maxValue?: number, symbol?: symbols.Symbol): void;
    /**
     * Adds a class break.
     * @param minValueOrInfo The value can be provided as individual arguments or as an info object.
     * @param maxValue Maximum value in the break.
     * @param symbol symbols.Symbol used for the break.
     */
    addBreak(minValueOrInfo: any, maxValue?: number, symbol?: symbols.Symbol): void;
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
  export interface ClassBreaksRendererConstructor {
	    /**
	     * Creates a new ClassBreaksRenderer object.
	     * @param defaultSymbol Default symbol for the renderer.
	     * @param attributeField Specify either the attribute field the renderer uses to match values or starting at version 3.3, a function that returns a value to be compared against class breaks.
	     */
	    new(defaultSymbol: symbols.Symbol, attributeField: string): ClassBreaksRenderer;
	    /**
	     * Creates a new ClassBreaksRenderer object.
	     * @param defaultSymbol Default symbol for the renderer.
	     * @param attributeField Specify either the attribute field the renderer uses to match values or starting at version 3.3, a function that returns a value to be compared against class breaks.
	     */
	    new(defaultSymbol: symbols.Symbol, attributeField: Function): ClassBreaksRenderer;
	    /**
	     * Creates a new ClassBreaksRenderer.
	     * @param json JSON object representing the ClassBreaksRenderer.
	     */
	    new(json: Object): ClassBreaksRenderer;
  }

  /** The DotDensityRenderer provides the ability to create dot density visualizations on data. */
  export class DotDensityRenderer extends Renderer {
    /** The color to be used for the background of the symbol. */
    backgroundColor: Color;
    /** The shape to be used for the dot. */
    dotShape: string;
    /** The size of the dot in pixels. */
    dotSize: number;
    /** The value that a dot represents. */
    dotValue: number;
    /** An array of objects, where each object defines a field to be mapped and its color. */
    fields: any[];
    /** The line symbol to use on the outline of the feature. */
    outline: symbols.LineSymbol;
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
    setOutline(outline: symbols.LineSymbol): void;
  }
  export interface DotDensityRendererConstructor {
	    /**
	     * Creates a new instance of dot density renderer.
	     * @param params An object with various options.
	     */
	    new(params: DotDensityRendererOptions): DotDensityRenderer;
  }

  /** The HeatmapRenderer renders point data into a raster visualization that emphasizes areas of higher density or weighted values. */
  export class HeatmapRenderer extends Renderer {
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
     * Sets the colorStops property  and returns the HeatmapRenderer instance to allow method chaining.
     * @param stops An array of colorStop objects describing the renderer's color ramp with more specificity than just colors.
     */
    setColorStops(stops: any[]): HeatmapRenderer;
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
  export interface HeatmapRendererConstructor {
	    /**
	     * Creates a new HeatmapRenderer object from json.
	     * @param options A parameterized list of options for constructing a HeatmapRenderer.
	     */
	    new(options: HeatmapRendererOptions): HeatmapRenderer;
  }

  /** The base class for the renderers - SimpleRenderer, ClassBreaksRenderer, UniqueValueRenderer, DotDensityRenderer, ScaleDependentRenderer, and TemporalRenderer used with a layers.GraphicsLayer and FeatureLayer. */
  export class Renderer {
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
     * @param graphic Graphic to get color from.
     */
    getColor(graphic: Graphic): Color;
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
     * @param graphic Graphic to symbolize.
     */
    getSymbol(graphic: Graphic): symbols.Symbol;
    /**
     * Sets the colorInfo property.
     * @param info An info object that defines the color.
     */
    setColorInfo(info: any): Renderer;
    /**
     * Sets opacity info for the renderer as defined by the info parameter.
     * @param info The info parameter is an object with the same properties as opacityInfo.
     */
    setOpacityInfo(info: any): Renderer;
    /**
     * Modifies rotation info for the renderer.
     * @param info An object with the same properties as rotationInfo.
     */
    setRotationInfo(info: any): Renderer;
    /** Set size info of the renderer to modify the symbol size based on data value. */
    setSizeInfo(): Renderer;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface RendererConstructor {
      new(): Renderer
  }

  /** ScaleDependentRenderer provides the capability to apply multiple scale-dependent renderers to a layer. */
  export class ScaleDependentRenderer extends Renderer {
    /** Indicates whether rendererInfos uses zoom range or scale range. */
    rangeType: string;
    /** An array of objects, where each object defines a renderer and the zoom/scale range to which it applies. */
    rendererInfos: any;
    /**
     * Adds the specified renderer info to the array of existing renderers.
     * @param info An object as defined in the rendererInfos property.
     */
    addRendererInfo(info: any): ScaleDependentRenderer;
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
    setRendererInfos(infos: any): ScaleDependentRenderer;
  }
  export interface ScaleDependentRendererConstructor {
	    /**
	     * Create a ScaleDependentRenderer.
	     * @param options Various options to configure this renderer.
	     */
	    new(options?: ScaleDependentRendererOptions): ScaleDependentRenderer;
  }

  /** A renderer that uses one symbol only. */
  export class SimpleRenderer extends Renderer {
    /** Description for the renderer. */
    description: string;
    /** Label for the renderer. */
    label: string;
    /** The symbol for the renderer. */
    symbol: symbols.Symbol;
  }
  export interface SimpleRendererConstructor {
	    /**
	     * Creates a new SimpleRenderer object with a symbols.Symbol parameter.
	     * @param symbol symbols.Symbol to use for the renderer.
	     */
	    new(symbol: symbols.Symbol): SimpleRenderer;
	    /**
	     * Creates a new Simple Renderer.
	     * @param json JSON object representing the SimpleRenderer.
	     */
	    new(json: Object): SimpleRenderer;
  }

  /** Base class for agers. */
  export class SymbolAger {
    /**
     * All subclasses override this method to provide their own implementation to calculate aging and return the appropriate symbol.
     * @param symbol The symbol to age.
     * @param graphic Feature being rendered.
     */
    getAgedSymbol(symbol: symbols.Symbol, graphic: Graphic): symbols.Symbol;
  }
  export interface SymbolAgerConstructor {
      new(): SymbolAger
  }

  /** Temporal renderers provide time-based rendering of features in a feature layer. */
  export class TemporalRenderer extends Renderer {
    /**
     * Returns the symbol used to render the graphic.
     * @param graphic The input graphic.
     */
    getSymbol(graphic: Graphic): symbols.Symbol;
  }
  export interface TemporalRendererConstructor {
	    /**
	     * Creates a new TemporalRenderer object that can be used with a time-aware feature layer.
	     * @param observationRenderer Renderer for regular/historic observations.
	     * @param latestObservationRenderer Renderer for the most current observations.In the snippet below RouteID is the field that contains the trackID for the feature layer this is used to display the  latest observation for the specified tracks.
	     * @param trackRenderer Renderer for the tracks.
	     * @param observationAger symbols.Symbol ager for regular observations.
	     */
	    new(observationRenderer: Renderer, latestObservationRenderer?: Renderer, trackRenderer?: Renderer, observationAger?: SymbolAger): TemporalRenderer;
  }

  /** Time class breaks ager displays aging by classifying features based on an age range. */
  export class TimeClassBreaksAger extends SymbolAger {
    /**
     * Calculates aging and returns the appropriate symbol.
     * @param symbol The symbol to age.
     * @param graphic Feature being rendered.
     */
    getAgedSymbol(symbol: symbols.Symbol, graphic: Graphic): symbols.Symbol;
  }
  export interface TimeClassBreaksAgerConstructor {
	    /** Time breaks are measured in days. */
	  UNIT_DAYS: any;
	    /** Time breaks are measured in hours. */
	  UNIT_HOURS: any;
	    /** Time breaks are measured in milliseconds. */
	  UNIT_MILLISECONDS: any;
	    /** Time breaks are measured in minutes. */
	  UNIT_MINUTES: any;
	    /** Time breaks are measured in months. */
	  UNIT_MONTHS: any;
	    /** Time breaks are measured in seconds. */
	  UNIT_SECONDS: any;
	    /** Time breaks are measured in weeks. */
	  UNIT_WEEKS: any;
	    /** Time breaks are measured in years. */
	  UNIT_YEARS: any;
	    /**
	     * Creates a new TimeClassBreaksAgerObject with the specified time breaks inforamtion.
	     * @param infos Each element in the array is an object that describes the class breaks information.
	     * @param timeUnits The unit in which the minimum and maximum break values are measured.
	     */
	    new(infos: any[], timeUnits?: string): TimeClassBreaksAger;
  }

  /** Time ramp agers display aging using a gradual change in symbology. */
  export class TimeRampAger extends SymbolAger {
    /**
     * Calculates aging and returns the appropriate symbol.
     * @param symbol The symbol to age.
     * @param graphic Feature being rendered.
     */
    getAgedSymbol(symbol: symbols.Symbol, graphic: Graphic): symbols.Symbol;
  }
  export interface TimeRampAgerConstructor {
	    /**
	     * Creates a new TimeRampAger object with the specified color and size ranges.
	     * @param colorRange An array containing the minimum and maximum color values.
	     * @param sizeRange An array containing the minimum and maximum size in  pixels.
	     * @param alphaRange An array containing the minimum and maximum alpha opacity values.
	     */
	    new(colorRange?: Color[], sizeRange?: number[], alphaRange?: number[]): TimeRampAger;
  }

  /** A unique value renderer symbolizes groups of graphics that have matching attributes. */
  export class UniqueValueRenderer extends Renderer {
    /** Attribute field renderer uses to match values. */
    attributeField: string;
    /** If needed, specify an additional attribute field the renderer uses to match values. */
    attributeField2: string;
    /** If needed, specify an additional attribute field the renderer uses to match values. */
    attributeField3: string;
    /** Label for the default symbol used to draw unspecified values. */
    defaultLabel: string;
    /** Default symbol used when a value or break cannot be matched. */
    defaultSymbol: symbols.Symbol;
    /** String inserted between the values if multiple attribute fields are specified. */
    fieldDelimiter: string;
    /** Each element in the array is an object that provides information about the unique values associated with the renderer. */
    infos: any[];
    /** Deprecated at v2.0, use infos instead. */
    values: string[];
    /**
     * Adds a unique value and symbol.
     * @param valueOrInfo Value to match with.
     * @param symbol symbols.Symbol used for the value.
     */
    addValue(valueOrInfo: string, symbol?: symbols.Symbol): void;
    /**
     * Adds a unique value and symbol.
     * @param valueOrInfo Value to match with.
     * @param symbol symbols.Symbol used for the value.
     */
    addValue(valueOrInfo: any, symbol?: symbols.Symbol): void;
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
  export interface UniqueValueRendererConstructor {
	    /**
	     * Creates a new UniqueValueRenderer object.
	     * @param defaultSymbol Default symbol for the renderer.
	     * @param attributeField Specify either the attribute field the renderer uses to match values or starting at version 3.3, a function that returns a value to be compared against unique values.
	     * @param attributeField2 If needed, specify an additional attribute field the renderer uses to match values.
	     * @param attributeField3 If needed, specify an additional attribute field the renderer uses to match values.
	     * @param fieldDelimeter String inserted between the values of different fields.
	     */
	    new(defaultSymbol: symbols.Symbol, attributeField: string, attributeField2?: string, attributeField3?: string, fieldDelimeter?: string): UniqueValueRenderer;
	    /**
	     * Creates a new UniqueValueRenderer object.
	     * @param defaultSymbol Default symbol for the renderer.
	     * @param attributeField Specify either the attribute field the renderer uses to match values or starting at version 3.3, a function that returns a value to be compared against unique values.
	     * @param attributeField2 If needed, specify an additional attribute field the renderer uses to match values.
	     * @param attributeField3 If needed, specify an additional attribute field the renderer uses to match values.
	     * @param fieldDelimeter String inserted between the values of different fields.
	     */
	    new(defaultSymbol: symbols.Symbol, attributeField: Function, attributeField2?: string, attributeField3?: string, fieldDelimeter?: string): UniqueValueRenderer;
	    /**
	     * Creates a new Unique Value Renderer.
	     * @param json JSON object representing the UniqueValueRenderer.
	     */
	    new(json: Object): UniqueValueRenderer;
  }

  /** Utility method to create a renderer from JSON. */
  export var jsonUtils: {
    /**
     * Converts the input JSON object to the appropriate renderer.* object.
     * @param json The JSON object.
     */
    fromJson(json: Object): Renderer;
  };
}
declare namespace esriTypes.symbols {

  /** Line symbols are used to draw linear features on the graphics layer. */
  export class CartographicLineSymbol extends SimpleLineSymbol {
    /** The cap style. */
    cap: string;
    /** The join style. */
    join: string;
    /** Size threshold for showing mitered line joins. */
    miterLimit: string;
    /**
     * Sets the cap style.
     * @param cap Cap style.
     */
    setCap(cap: string): CartographicLineSymbol;
    /**
     * Sets the join style.
     * @param join Join style.
     */
    setJoin(join: string): CartographicLineSymbol;
    /**
     * Sets the size threshold for showing mitered line joins.
     * @param miterLimit Miter limit.
     */
    setMiterLimit(miterLimit: string): CartographicLineSymbol;
  }
  export interface CartographicLineSymbolConstructor {
	    /** Line ends square at the end point. */
	  CAP_BUTT: any;
	    /** Line is rounded just beyond the end point. */
	  CAP_ROUND: any;
	    /** Line is squared just beyond the end point. */
	  CAP_SQUARE: any;
	    /** The joined lines are beveled. */
	  JOIN_BEVEL: any;
	    /** The joined lines are not rounded or beveled. */
	  JOIN_MITER: any;
	    /** The joined lines are rounded. */
	  JOIN_ROUND: any;
	    /** The line is made of dashes. */
	  STYLE_DASH: any;
	    /** The line is made of a dash-dot pattern. */
	  STYLE_DASHDOT: any;
	    /** The line is made of a dash-dot-dot pattern. */
	  STYLE_DASHDOTDOT: any;
	    /** The line is made of dots. */
	  STYLE_DOT: any;
	    /** The line is made of a long dash pattern. */
	  STYLE_LONGDASH: any;
	    /** The line is made of a long dash-dot pattern. */
	  STYLE_LONGDASHDOT: any;
	    /** The line has no symbol. */
	  STYLE_NULL: any;
	    /** The line is made of a short dash pattern. */
	  STYLE_SHORTDASH: any;
	    /** The line is made of a short dash-dot pattern. */
	  STYLE_SHORTDASHDOT: any;
	    /** The line is made of a short dash-dot-dot pattern. */
	  STYLE_SHORTDASHDOTDOT: any;
	    /** The line is made of a short dot pattern. */
	  STYLE_SHORTDOT: any;
	    /** The line is solid. */
	  STYLE_SOLID: any;
	    /** Creates a new empty CartographicLineSymbol object. */
	    new(): CartographicLineSymbol;
	    /**
	     * Creates a new CartographicLineSymbol object with parameters.
	     * @param style See Constants table for values.
	     * @param color Symbol color.
	     * @param width Width of the line in pixels.
	     * @param cap See Constants table for values.
	     * @param join See Constants table for values.
	     * @param miterLimit Size threshold for showing mitered line joins.
	     */
	    new(style?: string, color?: Color, width?: number, cap?: string, join?: string, miterLimit?: string): CartographicLineSymbol;
	    /**
	     * Creates a new CartographicLineSymbol object using a JSON object.
	     * @param json JSON object representing the CartographicLineSymbol.
	     */
	    new(json: Object): CartographicLineSymbol;
  }

  /** Fill symbols are used to draw polygon features on the graphics layer. */
  export class FillSymbol extends Symbol {
    /** Outline of the polygon. */
    outline: SimpleLineSymbol;
    /**
     * Sets the outline of the fill symbol.
     * @param outline Symbol used for outline.
     */
    setOutline(outline: SimpleLineSymbol): FillSymbol;
  }
  export interface FillSymbolConstructor {
      new(): FillSymbol
  }
  /** Font used for text symbols added to the graphics layer. */
  export class Font {
    /** Text decoration. */
    decoration: string;
    /** Font family. */
    family: string;
    /** Font size. */
    size: number;
    /** Text style. */
    style: string;
    /** Text variant. */
    variant: string;
    /** Text weight. */
    weight: string;
    /**
     * Updates the font with the given decoration.
     * @param decoration Text decoration.
     */
    setDecoration(decoration: string): Font;
    /**
     * Sets the font family.
     * @param family Font family.
     */
    setFamily(family: string): Font;
    /**
     * Sets the font size.
     * @param size Font size.
     */
    setSize(size: number): Font;
    /**
     * Sets the font size.
     * @param size Font size.
     */
    setSize(size: string): Font;
    /**
     * Sets the font style.
     * @param style Font style.
     */
    setStyle(style: string): Font;
    /**
     * Sets the font variant.
     * @param variant Font variant.
     */
    setVariant(variant: string): Font;
    /**
     * Sets the font weight.
     * @param weight Font weight.
     */
    setWeight(weight: string): Font;
  }
  export interface FontConstructor {
	    /** Text is in italics. */
	  STYLE_ITALIC: any;
	    /** Text style is normal. */
	  STYLE_NORMAL: any;
	    /** Text is slanted. */
	  STYLE_OBLIQUE: any;
	    /** Text variant is normal. */
	  VARIANT_NORMAL: any;
	    /** Text is in all small caps. */
	  VARIANT_SMALLCAPS: any;
	    /** Text weight is bold. */
	  WEIGHT_BOLD: any;
	    /** Text weight is extra bold. */
	  WEIGHT_BOLDER: any;
	    /** Text weight is lighter than normal. */
	  WEIGHT_LIGHTER: any;
	    /** Text weight is normal. */
	  WEIGHT_NORMAL: any;
	    /** Creates a new Font object. */
	    new(): Font;
	    /**
	     * Creates a new Font object.
	     * @param size Font size.
	     * @param style Font style.
	     * @param variant Font variant.
	     * @param weight Font weight.
	     * @param family Font family.
	     */
	    new(size?: number, style?: string, variant?: string, weight?: string, family?: string): Font;
	    /**
	     * Creates a new Font object.
	     * @param size Font size.
	     * @param style Font style.
	     * @param variant Font variant.
	     * @param weight Font weight.
	     * @param family Font family.
	     */
	    new(size?: string, style?: string, variant?: string, weight?: string, family?: string): Font;
	    /**
	     * Creates a new Font object using a JSON object.
	     * @param json JSON object representing the font.
	     */
	    new(json: Object): Font;
  }

  /** Line symbols are used to draw linear features on the graphics layer. */
  export class LineSymbol extends Symbol {
    /** Width of line symbol in pixels. */
    width: number;
    /**
     * Sets the LineSymbol width.
     * @param width Width of line symbol in pixels.
     */
    setWidth(width: number): LineSymbol;
  }
  export interface LineSymbolConstructor {
      new(): LineSymbol
  }

  /** Marker symbols are used to draw points and multipoints on the graphics layer. */
  export class MarkerSymbol extends Symbol {
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
    setAngle(angle: number): MarkerSymbol;
    /**
     * Sets the x and y offset of a marker in screen units.
     * @param x The X offset value in pixels.
     * @param y The Y offset value in pixels.
     */
    setOffset(x: number, y: number): MarkerSymbol;
    /**
     * Sets the size of a marker in pixels.
     * @param size The width of the symbol in pixels.
     */
    setSize(size: number): MarkerSymbol;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface MarkerSymbolConstructor {
      new(): MarkerSymbol
  }

  /** Fill symbols are used to draw polygon features on the graphics layer. */
  export class PictureFillSymbol extends FillSymbol {
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
     * Sets the height of the symbol.
     * @param height Height in pixels.
     */
    setHeight(height: number): PictureFillSymbol;
    /**
     * Sets the symbol offset.
     * @param x Offset in x direction in pixels.
     * @param y Offset in y direction in pixels.
     */
    setOffset(x: number, y: number): PictureFillSymbol;
    /**
     * Sets the URL to the location of the symbol.
     * @param url URL string.
     */
    setUrl(url: string): PictureFillSymbol;
    /**
     * Sets the width of the symbol.
     * @param width Width in pixels.
     */
    setWidth(width: number): PictureFillSymbol;
    /**
     * Sets the scale factor in x direction.
     * @param scale Scale factor in x direction.
     */
    setXScale(scale: number): PictureFillSymbol;
    /**
     * Sets the scale factor in y direction.
     * @param scale Scale factor in y direction.
     */
    setYScale(scale: number): PictureFillSymbol;
  }
  export interface PictureFillSymbolConstructor {
	    /**
	     * Creates a new PictureFillSymbol object.
	     * @param url URL of the image.
	     * @param outline Outline of the symbol.
	     * @param width Width of the image in pixels.
	     * @param height Height of the image in pixels.
	     */
	    new(url: string, outline: SimpleLineSymbol, width: number, height: number): PictureFillSymbol;
	    /**
	     * Creates a new PictureFillSymbol object using a JSON object.
	     * @param json JSON object representing the PictureFillSymbol.
	     */
	    new(json: Object): PictureFillSymbol;
  }

  /** Marker symbols are used to draw points and multipoints on the graphics layer. */
  export class PictureMarkerSymbol extends MarkerSymbol {
    /** Height of the image in pixels. */
    height: number;
    /** URL of the image. */
    url: string;
    /** Width of the image in pixels. */
    width: number;
    /**
     * Sets the height of the image for display.
     * @param height Height of marker in pixels.
     */
    setHeight(height: number): PictureMarkerSymbol;
    /**
     * Sets the URL where the image is located.
     * @param url URL location of marker image.
     */
    setUrl(url: string): PictureMarkerSymbol;
    /**
     * Sets the width of the image for display.
     * @param width Width of marker in pixels.
     */
    setWidth(width: number): PictureMarkerSymbol;
  }
  export interface PictureMarkerSymbolConstructor {
	    /**
	     * Creates a new PictureMarkerSymbol object.
	     * @param url URL of the image.
	     * @param width Width of the image in pixels.
	     * @param height Height of the image in pixels.
	     */
	    new(url: string, width: number, height: number): PictureMarkerSymbol;
	    /**
	     * Creates a new PictureMarkerSymbol object using a JSON object.
	     * @param json JSON object representing the PictureMarkerSymbol.
	     */
	    new(json: Object): PictureMarkerSymbol;
  }

  /** Fill symbols are used to draw polygon features on the graphics layer. */
  export class SimpleFillSymbol extends FillSymbol {
    /** The fill style. */
    style: string;
    /**
     * Sets the fill symbol style.
     * @param style Fill style.
     */
    setStyle(style: string): SimpleFillSymbol;
  }
  export interface SimpleFillSymbolConstructor {
	    /** The fill is backward diagonal lines. */
	  STYLE_BACKWARD_DIAGONAL: any;
	    /** The fill is a cross. */
	  STYLE_CROSS: any;
	    /** The fill is a diagonal cross. */
	  STYLE_DIAGONAL_CROSS: any;
	    /** The fill is forward diagonal lines. */
	  STYLE_FORWARD_DIAGONAL: any;
	    /** The fill is horizontal lines. */
	  STYLE_HORIZONTAL: any;
	    /** The polygon has no fill. */
	  STYLE_NULL: any;
	    /** The fill is solid. */
	  STYLE_SOLID: any;
	    /** The fill is vertical lines. */
	  STYLE_VERTICAL: any;
	    /** Creates a new empty SimpleFillSymbol object. */
	    new(): SimpleFillSymbol;
	    /**
	     * Creates a new SimpleFillSymbol object with parameters.
	     * @param style See Constants table for values.
	     * @param outline See SimpleLineSymbol.
	     * @param color Symbol color.
	     */
	    new(style: string, outline: SimpleLineSymbol, color: Color): SimpleFillSymbol;
	    /**
	     * Creates a new SimpleFillSymbol object using a JSON object.
	     * @param json JSON object representing the SimpleFillSymbol.
	     */
	    new(json: Object): SimpleFillSymbol;
  }

  /** Line symbols are used to draw linear features on the graphics layer. */
  export class SimpleLineSymbol extends LineSymbol {
    /** The line style. */
    style: string;
    /**
     * Sets the line symbol style.
     * @param style Line style.
     */
    setStyle(style: string): SimpleLineSymbol;
  }
  export interface SimpleLineSymbolConstructor {
	    /** The line is made of dashes. */
	  STYLE_DASH: any;
	    /** The line is made of a dash-dot pattern. */
	  STYLE_DASHDOT: any;
	    /** The line is made of a dash-dot-dot pattern. */
	  STYLE_DASHDOTDOT: any;
	    /** The line is made of dots. */
	  STYLE_DOT: any;
	    /** Line is constructed of a series of dashes. */
	  STYLE_LONGDASH: any;
	    /** Line is constructed of a series of short dashes. */
	  STYLE_LONGDASHDOT: any;
	    /** The line has no symbol. */
	  STYLE_NULL: any;
	    /** Line is constructed of a series of short dashes. */
	  STYLE_SHORTDASH: any;
	    /** Line is constructed of a dash followed by a dot. */
	  STYLE_SHORTDASHDOT: any;
	    /** Line is constructed of a series of a dash and two dots. */
	  STYLE_SHORTDASHDOTDOT: any;
	    /** Line is constructed of a series of short dots. */
	  STYLE_SHORTDOT: any;
	    /** The line is solid. */
	  STYLE_SOLID: any;
	    /** Creates a new empty SimpleLineSymbol object. */
	    new(): SimpleLineSymbol;
	    /**
	     * Creates a new SimpleLineSymbol object with parameters.
	     * @param style See Constants table for values.
	     * @param color Symbol color.
	     * @param width Width of the line in pixels.
	     */
	    new(style: string, color: Color, width: number): SimpleLineSymbol;
	    /**
	     * Creates a new SimpleLineSymbol object using a JSON object.
	     * @param json JSON object representing the SimpleLineSymbol.
	     */
	    new(json: Object): SimpleLineSymbol;
  }

  /** Marker symbols are used to draw points and multipoints on the graphics layer. */
  export class SimpleMarkerSymbol extends MarkerSymbol {
    /** Outline of the marker. */
    outline: SimpleLineSymbol;
    /** Size of the marker in pixels. */
    size: number;
    /** The marker style. */
    style: string;
    /**
     * Sets the outline of the marker symbol.
     * @param outline Symbol used for outline.
     */
    setOutline(outline: SimpleLineSymbol): SimpleMarkerSymbol;
    /**
     * Sets the marker shape to the given path string and switches the marker style to STYLE_PATH.
     * @param path SVG path of the icon.
     */
    setPath(path: string): SimpleMarkerSymbol;
    /**
     * Sets the marker symbol style.
     * @param style Marker style.
     */
    setStyle(style: string): SimpleMarkerSymbol;
  }
  export interface SimpleMarkerSymbolConstructor {
	    /** The marker is a circle. */
	  STYLE_CIRCLE: any;
	    /** The marker is a cross. */
	  STYLE_CROSS: any;
	    /** The marker is a diamond. */
	  STYLE_DIAMOND: any;
	    /** The marker is a shape defined using an SVG Path string. */
	  STYLE_PATH: any;
	    /** The marker is a square. */
	  STYLE_SQUARE: any;
	    /** The marker is a diagonal cross. */
	  STYLE_X: any;
	    /** Creates a new empty SimpleMarkerSymbol object. */
	    new(): SimpleMarkerSymbol;
	    /**
	     * Creates a new SimpleMarkerSymbol object with parameters.
	     * @param style See Constants table for values.
	     * @param size Size of the marker in pixels.
	     * @param outline See SimpleLineSymbol.
	     * @param color Symbol color.
	     */
	    new(style: string, size: number, outline: SimpleLineSymbol, color: Color): SimpleMarkerSymbol;
	    /**
	     * Creates a new SimpleMarkerSymbol object using a JSON object.
	     * @param json JSON object representing the SimpleMarkerSymbol.
	     */
	    new(json: Object): SimpleMarkerSymbol;
  }

  /** Symbols are used to display points, lines, and polygons on the graphics layer. */
  export class Symbol {
    /** Symbol color. */
    color: Color;
    /** The type of symbol. */
    type: string;
    /**
     * Sets the symbol color.
     * @param color Symbol color.
     */
    setColor(color: Color): Symbol;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export interface SymbolConstructor {
      new(): Symbol
  }

  /** Text symbols are used to add text on the graphics layer. */
  export class TextSymbol extends Symbol {
    /** The text alignment in relation to the point. */
    align: string;
    /** Text angle. */
    angle: number;
    /** The decoration on the text. */
    decoration: string;
    /** Font for displaying text. */
    font: Font;
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
     * Sets the alignment of the text.
     * @param align The text alignment.
     */
    setAlign(align: string): TextSymbol;
    /**
     * Sets the angle of the text.
     * @param angle Angle value between 0 and 359.
     */
    setAngle(angle: number): TextSymbol;
    /**
     * Sets the decoration for the text.
     * @param decoration The decoration on the text.
     */
    setDecoration(decoration: string): TextSymbol;
    /**
     * Sets the text font.
     * @param font Text font.
     */
    setFont(font: Font): TextSymbol;
    /**
     * Updates the horizontal alignment of the text symbol.
     * @param alignment Horizontal alignment of the text with respect to the graphic.
     */
    setHorizontalAlignment(alignment: string): TextSymbol;
    /**
     * Sets whether to adjust the spacing between characters in the text string.
     * @param kerning Set to true for kerning.
     */
    setKerning(kerning: boolean): TextSymbol;
    /**
     * Sets the x and y offset of the text.
     * @param x X offset value in pixels.
     * @param y Y offset value in pixels.
     */
    setOffset(x: number, y: number): TextSymbol;
    /**
     * Sets whether every character in the text string is rotated.
     * @param rotated Set to true to rotate all characters in the string.
     */
    setRotated(rotated: boolean): TextSymbol;
    /**
     * Sets the text string.
     * @param text The text string.
     */
    setText(text: string): TextSymbol;
    /**
     * Updates the vertical alignment of the text symbol.
     * @param alignment Vertical alignment of the text with respect to the graphic.
     */
    setVerticalAlignment(alignment: string): TextSymbol;
  }
  export interface TextSymbolConstructor {
	    /** The end of the text string is aligned with the point. */
	  ALIGN_END: any;
	    /** The center of the text string is aligned with the point. */
	  ALIGN_MIDDLE: any;
	    /** The beginning of the text string is aligned with the point. */
	  ALIGN_START: any;
	    /** Text has a lined striked through it. */
	  DECORATION_LINETHROUGH: any;
	    /** Text has no decoration. */
	  DECORATION_NONE: any;
	    /** Text has a line along the top. */
	  DECORATION_OVERLINE: any;
	    /** Text is underlined. */
	  DECORATION_UNDERLINE: any;
	    /**
	     * Creates a new TextSymbol object that includes only the text.
	     * @param text Text string for display in the graphics layer.
	     */
	    new(text: string): TextSymbol;
	    /**
	     * Creates a new TextSymbol object.
	     * @param text Text string for display in the graphics layer.
	     * @param font Font for displaying text.
	     * @param color Symbol color.
	     */
	    new(text: string, font: Font, color: Color): TextSymbol;
	    /**
	     * Creates a new TextSymbol object using a JSON object.
	     * @param json JSON object representing the TextSymbol.
	     */
	    new(json: Object): TextSymbol;
  }

  /** Utility methods for working with symbols. */
  export var jsonUtils: {
    /**
     * Converts input json into a symbol, returns null if the input json represents an unknown or unsupported symbol type.
     * @param json The input JSON.
     */
    fromJson(json: Object): Symbol;
    /**
     * Returns the shape description properties for the given symbol as defined by the Dojo GFX API.
     * @param symbol The input symbol.
     */
    getShapeDescriptors(symbol: Symbol): any;
  };
}
declare namespace esriTypes.tasks {

  /** Represents an address and its location. */
  export class AddressCandidate {
    /** Address of the candidate. */
    address: any;
    /** Name value pairs of field name and field value as defined in outFields in Locator.addressToLocations. */
    attributes: any;
    /** X- and y-coordinate of the candidate. */
    location: geometry.Point;
    /** Numeric score between 0 and 100 for geocode candidates. */
    score: number;
  }
  export interface AddressCandidateConstructor {
      new(): AddressCandidate
  }

  /** Create an algorithmic color ramp to define the range of colors used in the renderer generated by the GenerateRendererTask. */
  export class AlgorithmicColorRamp extends ColorRamp {
    /** The algorithm used to generate the colors between the fromColor and toColor. */
    algorithm: string;
    /** The first color in the color ramp. */
    fromColor: Color;
    /** The last color in the color ramp. */
    toColor: Color;
    /** Returns an easily serializable object representation of an algorithmic color ramp. */
    toJson(): any;
  }
  export interface AlgorithmicColorRampConstructor {
	    /** Creates a new AlgorithmicColorRamp object. */
	    new(): AlgorithmicColorRamp;
  }

  /** Input parameters for the areasAndLengths() method on the geometry.Geometry Service. */
  export class AreasAndLengthsParameters {
    /** The area unit in which areas of polygons will be calculated. */
    areaUnit: any;
    /** Defines the type of calculation for the geometry. */
    calculationType: string;
    /** The length unit in which perimeters of polygons will be calculated. */
    lengthUnit: any;
    /** geometry.Polygon geometries for which to compute areas and lengths */
    polygons: geometry.Geometry[];
  }
  export interface AreasAndLengthsParametersConstructor {
	    /** Creates a new AreasAndLengthsParameters object. */
	    new(): AreasAndLengthsParameters;
  }

  /** Sets the distances, units, and other parameters for a buffer operation. */
  export class BufferParameters {
    /** The spatial reference in which the geometries are buffered. */
    bufferSpatialReference: SpatialReference;
    /** The distances the input features are buffered. */
    distances: number[];
    /** If the input geometries are in geographic coordinate system set geodesic to true in order to generate a buffer polygon using a geodesic distance. */
    geodesic: boolean;
    /** The input geometries to buffer. */
    geometries: geometry.Geometry[];
    /** The spatial reference for the returned geometries. */
    outSpatialReference: SpatialReference;
    /** If true, all geometries buffered at a given distance are unioned into a single (possibly multipart) polygon, and the unioned geometry is placed in the output array. */
    unionResults: boolean;
    /** The units for calculating each buffer distance. */
    unit: string;
  }
  export interface BufferParametersConstructor {
	    /** Creates a new BufferParameters object. */
	    new(): BufferParameters;
  }

  /** Define a class breaks classification scheme used by the GenerateRendererTask to generate classes. */
  export class ClassBreaksDefinition extends ClassificationDefinition {
    /** Define a default symbol for the classification. */
    baseSymbol: symbols.Symbol;
    /** The number of class breaks. */
    breakCount: number;
    /** The name of the field used to match values. */
    classificationField: string;
    /** The name of the classification method. */
    classificationMethod: string;
    /** Define a color ramp for the classification. */
    colorRamp: ColorRamp;
    /** The name of the field that contains the values used to normalize class breaks when normalizationType is set to 'field'. */
    normalizationField: string;
    /** The type of normalization used to normalize class breaks. */
    normalizationType: string;
    /** The standard deviation interval. */
    standardDeviationInterval: number;
    /** Returns an easily serializable object representation of the class breaks definition. */
    toJson(): any;
  }
  export interface ClassBreaksDefinitionConstructor {
	    /** Creates a new ClassBreaksDefinition object */
	    new(): ClassBreaksDefinition;
  }

  /** The super class for the classification definition objects used by the GenerateRendererTask class to generate data classes. */
  export class ClassificationDefinition {
    /** Define a default symbol for the classification. */
    baseSymbol: symbols.Symbol;
    /** Define a color ramp for the classification. */
    colorRamp: ColorRamp;
    /** The type of classification definition. */
    type: string;
  }
  export interface ClassificationDefinitionConstructor {
      new(): ClassificationDefinition
  }

  /** Input parameters for the ClosestFacilityTask. */
  export class ClosestFacilityParameters {
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
    outSpatialReference: SpatialReference;
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
    /** If true, directions will be generated and returned in the directions property of each RouteResult and RouteSolveResult. */
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
  }
  export interface ClosestFacilityParametersConstructor {
	    /** Creates a new ClosestFacilityParameters object */
	    new(): ClosestFacilityParameters;
  }

  /** The result from a ClosestFacilityTask operation. */
  export class ClosestFacilitySolveResult {
    /** An array of directions. */
    directions: DirectionsFeatureSet;
    /** An array of points, only returned when ClosestFacilityParameters.returnFacilities is true. */
    facilities: geometry.Point[];
    /** An array of points, only returned when ClosestFacilityParameters.returnIncidents is true. */
    incidents: geometry.Point[];
    /** Message received when the solve is complete. */
    messages: NAMessage[];
    /** The point barriers are an array of points. */
    pointBarriers: geometry.Point[];
    /** The polygon barriers are an array of polygons. */
    polygonBarriers: geometry.Polygon[];
    /** The polyline barriers are an array of polylines. */
    polylineBarriers: geometry.Polyline[];
    /** The array of routes. */
    routes: Graphic[];
  }
  export interface ClosestFacilitySolveResultConstructor {
      new(): ClosestFacilitySolveResult
  }

  /** Helps you find closest facilities around any location (incident) on a network. */
  export class ClosestFacilityTask {
    /**
     * Solve the closest facility.
     * @param params The ClosestFacilityParameters object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    solve(params: ClosestFacilityParameters, callback?: Function, errback?: Function): any;
    /** Fires when ClosestFacilityTask has completed. */
    on(type: "solve-complete", listener: (event: { result: ClosestFacilitySolveResult; target: ClosestFacilityTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ClosestFacilityTaskConstructor {
	    /**
	     * Creates a new ClosestFacilityTask object.
	     * @param url URL to the ArcGIS Server REST resource that represents a network analysis service.
	     */
	    new(url: string): ClosestFacilityTask;
  }
  /** Used to denote classes that may be used as a color ramp. */
  export class ColorRamp {
    /** A string value representing the color ramp type. */
    type: string;
  }
  export interface ColorRampConstructor {
      new(): ColorRamp
  }
  /** A geoprocessing data object containing a data source. */
  export class DataFile {
    /** The ID of the uploaded file returned as a result of the upload operation. */
    itemID: string;
    /** URL to the location of the data file. */
    url: string;
  }
  export interface DataFileConstructor {
	    /** Creates a new DataFile object. */
	    new(): DataFile;
  }

  /** Input for properties of ClosestFacilityParameters,RouteParameters or ServiceAreaParameters. */
  export class DataLayer {
    /** The geometry to apply to the spatial filter. */
    geometry: geometry.Geometry;
    /** The name of the data layer in the map service that is being referenced. */
    name: string;
    /** The spatial relationship to be applied on the input geometry while performing the query. */
    spatialRelationship: string;
    /** A where clause for the query. */
    where: string;
  }
  export interface DataLayerConstructor {
	    /** Part or all of a feature from feature class 1 is contained within a feature from feature class 2. */
	  SPATIAL_REL_CONTAINS: any;
	    /** The feature from feature class 1 crosses a feature from feature class 2. */
	  SPATIAL_REL_CROSSES: any;
	    /** The envelope of feature class 1 intersects with the envelope of feature class 2. */
	  SPATIAL_REL_ENVELOPEINTERSECTS: any;
	    /** The envelope of the query feature class intersects the index entry for the target feature class. */
	  SPATIAL_REL_INDEXINTERSECTS: any;
	    /** Part of a feature from feature class 1 is contained in a feature from feature class 2. */
	  SPATIAL_REL_INTERSECTS: any;
	    /** Features from feature class 1 overlap features in feature class 2. */
	  SPATIAL_REL_OVERLAPS: any;
	    /** The feature from feature class 1 touches the border of a feature from feature class 2. */
	  SPATIAL_REL_TOUCHES: any;
	    /** The feature from feature class 1 is completely enclosed by the feature from feature class 2. */
	  SPATIAL_REL_WITHIN: any;
	    /** Creates a new DataLayer object. */
	    new(): DataLayer;
  }
  /** Date used in geoprocessing. */
  export class AGSDate {
    /** Date value returned from server. */
    date: Date;
    /** The format of the date used in the date property. */
    format: string;
  }
  export interface AGSDateConstructor {
	    /** Creates a new Date object. */
	    new(): AGSDate;
  }

  /** Input parameters for the densify() method on the GeometryService - contains geometries, maxSegmentLength, and optionally lengthUnit, geodesic. */
  export class DensifyParameters {
    /** If true, GCS spatial references are used or densify geodesic is to be performed. */
    geodesic: boolean;
    /** The array of geometries to be densified. */
    geometries: geometry.Geometry[];
    /** The length unit of maxSegmentLength, can be any esriUnits constant. */
    lengthUnit: any;
    /** All segments longer than maxSegmentLength are replaced with sequences of lines no longer than maxSegmentLength. */
    maxSegmentLength: number;
    /** Converts object to its JSON representation. */
    toJson(): any;
  }
  export interface DensifyParametersConstructor {
      new(): DensifyParameters
  }

  /** A FeatureSet that has properties specific to routing. */
  export class DirectionsFeatureSet extends FeatureSet {
    /** The extent of the route. */
    extent: geometry.Extent;
    /** A single polyline representing the route. */
    mergedGeometry: geometry.Polyline;
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
  export interface DirectionsFeatureSetConstructor {
      new(): DirectionsFeatureSet
  }

  /** Input parameters for the distance  method on the GeometryService. */
  export class DistanceParameters {
    /** Specifies the units for measuring distance between geometry1 and geometry2. */
    distanceUnit: any;
    /** When true, the geodesic distance between geometry1 and geometry2 is measured. */
    geodesic: boolean;
    /** The geometry from which the distance is to measured. */
    geometry1: geometry.Geometry;
    /** The geometry to which the distance is measured. */
    geometry2: geometry.Geometry;
  }
  export interface DistanceParametersConstructor {
	    /** Creates a new DistanceParameters object. */
	    new(): DistanceParameters;
  }

  /** A collection of features returned from ArcGIS Server or used as input to tasks. */
  export class FeatureSet {
    /** The name of the layer's primary display field. */
    displayFieldName: string;
    /** Typically a layer has a limit on the number of features (i.e., records) returned by the query operation. */
    exceededTransferLimit: boolean;
    /** The array of graphics returned. */
    features: Graphic[];
    /** Set of name-value pairs for the attribute's field and alias names. */
    fieldAliases: any;
    /** The geometry type of the FeatureSet. */
    geometryType: string;
    /** When a FeatureSet is used as input to Geoprocessor, the spatial reference is set to the map's spatial reference by default. */
    spatialReference: SpatialReference;
  }
  export interface FeatureSetConstructor {
	    /** Creates a new FeatureSet object. */
	    new(): FeatureSet;
	    /**
	     * Creates a new FeatureSet object using a JSON object.
	     * @param json A JSON object that contains feature set.
	     */
	    new(json: Object): FeatureSet;
  }

  /** This data object  is used as the findParameters argument to FindTask.execute method. */
  export class FindParameters {
    /** The contains parameter determines whether to look for an exact match of the search text or not. */
    contains: boolean;
    /** An array of DynamicLayerInfos used to change the layer ordering or redefine the map. */
    dynamicLayerInfos: layers.DynamicLayerInfo[];
    /** Array of layer definition expressions that allows you to filter the features of individual layers. */
    layerDefinitions: string[];
    /** The layers to perform the find operation on. */
    layerIds: number[];
    /** The maximum allowable offset used for generalizing geometries returned by the find operation. */
    maxAllowableOffset: number;
    /** The spatial reference of the output geometries. */
    outSpatialReference: SpatialReference;
    /** If "true", the result set include the geometry associated with each result. */
    returnGeometry: boolean;
    /** The names of the fields of a layer to search. */
    searchFields: string[];
    /** The search string text that is searched across the layers and the fields as specified in the layers and searchFields parameters. */
    searchText: string;
  }
  export interface FindParametersConstructor {
	    /** Creates a new FindParameters object. */
	    new(): FindParameters;
  }

  /** Represents a result of a find operation. */
  export class FindResult {
    /** The name of the layer's primary display field. */
    displayFieldName: string;
    /** The found feature. */
    feature: Graphic;
    /** The name of the field that contains the search text. */
    foundFieldName: string;
    /** Unique ID of the layer that contains the feature. */
    layerId: number;
    /** The layer name that contains the feature. */
    layerName: string;
  }
  export interface FindResultConstructor {
      new(): FindResult
  }

  /** Search a map service exposed by the ArcGIS Server REST API based on a string value. */
  export class FindTask {
    /** URL to the ArcGIS Server REST resource that represents a map service. */
    url: string;
    /**
     * Sends a request to the ArcGIS REST map service resource to perform a search based on the FindParameters specified in the findParameters argument.
     * @param findParameters Specifies the layers and fields that are used to search against.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(findParameters: FindParameters, callback?: Function, errback?: Function): any;
    /** Fires when the find operation is complete. */
    on(type: "complete", listener: (event: { results: FindResult[]; target: FindTask }) => void): Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: FindTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface FindTaskConstructor {
	    /**
	     * Creates a new FindTask object.
	     * @param url URL to the ArcGIS Server REST resource that represents a layer in a service.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: FindTaskOptions): FindTask;
  }
  /** Represents a message generated during the execution of a geoprocessing task. */
  export class GPMessage {
    /** A description of the geoprocessing message. */
    description: string;
    /** The geoprocessing message type. */
    type: number;
  }
  export interface GPMessageConstructor {
	    /** esriJobMessageTypeAbort */
	  TYPE_ABORT: any;
	    /** esriGPMessageTypeEmpty */
	  TYPE_EMPTY: any;
	    /** esriGPMessageTypeError */
	  TYPE_ERROR: any;
	    /** esriGPMessageTypeInformative */
	  TYPE_INFORMATIVE: any;
	    /** TBA */
	  TYPE_PROCESS_DEFINITION: any;
	    /** TBA */
	  TYPE_PROCESS_START: any;
	    /** TBA */
	  TYPE_PROCESS_STOP: any;
	    /** esriGPMessageTypeWarning */
	  TYPE_WARNING: any;
      new(): GPMessage
  }

  /** Sets the geometries, maximum deviation and units for the generalize operation. */
  export class GeneralizeParameters {
    /** The maximum deviation unit. */
    deviationUnit: any;
    /** The array of input geometries to generalize. */
    geometries: geometry.Geometry[];
    /** The maximum deviation for constructing a generalized geometry based on the input geometries. */
    maxDeviation: number;
  }
  export interface GeneralizeParametersConstructor {
	    /** Creates a new GeneralizeParameters object. */
	    new(): GeneralizeParameters;
  }

  /** Define the classification definition and optional where clause for the GenerateRendererTask operation. */
  export class GenerateRendererParameters {
    /** A ClassBreaksDefinition or UniqueValueDefinition classification definition used to generate the data classes. */
    classificationDefinition: ClassificationDefinition;
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
  }
  export interface GenerateRendererParametersConstructor {
	    /** Creates a new GenerateRendererParameters object. */
	    new(): GenerateRendererParameters;
  }

  /** The GenerateRendererTask class creates a renderer based on a classification definition and optional where clause. */
  export class GenerateRendererTask {
    /**
     * Perform a classification on the layer or table resource.
     * @param generateRendererParameters A GenerateRendererParameters object that defines the classification definition and an optional where clause.
     * @param callback This function will be called when the operation is complete.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(generateRendererParameters: GenerateRendererParameters, callback?: Function, errback?: Function): any;
    /** Fired when the classification operation is complete. */
    on(type: "complete", listener: (event: { renderer: renderers.Renderer; target: GenerateRendererTask }) => void): Handle;
    /** Fired when an error occurs during task execution. */
    on(type: "error", listener: (event: { error: Error; target: GenerateRendererTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface GenerateRendererTaskConstructor {
	    /**
	     * Creates a new GenerateRendererTask object.
	     * @param url URL to a layer in a map service or table.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: GenerateRendererTaskOptions): GenerateRendererTask;
  }

  /** Represents a geometry service resource exposed by the ArcGIS Server REST API. */
  export class GeometryService {
    /** URL to the ArcGIS Server REST resource that represents a locator service. */
    url: string;
    /**
     * Computes the area and length for the input polygons.
     * @param areasAndLengthsParameters Specify the input polygons and optionally the linear and areal units.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    areasAndLengths(areasAndLengthsParameters: AreasAndLengthsParameters, callback?: Function, errback?: Function): any;
    /**
     * The Auto Complete operation is performed on a geometry service resource.
     * @param polygons The array of polygons that will provide some boundaries for new polygons.
     * @param polylines An array of polylines that will provide the remaining boundaries for new polygons.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    autoComplete(polygons: geometry.Polygon[], polylines: geometry.Polyline[], callback?: Function, errback?: Function): any;
    /**
     * Creates buffer polygons at a specified distance around the given geometries.
     * @param bufferParameters Specifies the input geometries, buffer distances, and other options.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    buffer(bufferParameters: BufferParameters, callback?: Function, errback?: Function): any;
    /**
     * The convexHull operation is performed on a geometry service resource.
     * @param geometries The geometries whose convex hull is to be created.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    convexHull(geometries: geometry.Geometry[], callback?: Function, errback?: Function): any;
    /**
     * The cut operation is performed on a geometry service resource.
     * @param geometries The polyline or polygon to be cut.
     * @param cutterGeometry The polyline that will be used to divide the target into pieces where it crosses the target.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    cut(geometries: geometry.Geometry[], cutterGeometry: geometry.Geometry, callback?: Function, errback?: Function): any;
    /**
     * The densify operation is performed on a geometry service resource.
     * @param densifyParameters The DensifyParameters objects contains geometries, geodesic, lengthUnit, and maxSegmentLength parameters.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    densify(densifyParameters: DensifyParameters, callback?: Function, errback?: Function): any;
    /**
     * The difference operation is performed on a geometry service resource.
     * @param geometries An array of points, multipoints, polylines or polygons.
     * @param geometry A single geometry of any type, of dimension equal to or greater than the elements of geometries.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    difference(geometries: geometry.Geometry[], geometry: geometry.Geometry, callback?: Function, errback?: Function): any;
    /**
     * Measures the planar or geodesic distance between geometries.
     * @param params Sets the input geometries to measure, distance units and other parameters.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    distance(params: DistanceParameters, callback?: Function, errback?: Function): any;
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
    generalize(params: GeneralizeParameters, callback?: Function, errback?: Function): any;
    /**
     * The intersect operation is performed on a geometry service resource.
     * @param geometries An array of points, multipoints, polylines or polygons.
     * @param geometry A single geometry of any type, of dimension equal to or greater than the elements of geometries.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    intersect(geometries: geometry.Geometry[], geometry: geometry.Geometry, callback?: Function, errback?: Function): any;
    /**
     * Calculates an interior point for each polygon specified.
     * @param polygons The graphics to process.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    labelPoints(polygons: geometry.Geometry[], callback?: Function, errback?: Function): any;
    /**
     * Gets the lengths for a geometry.Geometry[] when the geometry type is Polyline.
     * @param lengthsParameter Specify the polylines and optionally the length unit and the geodesic length option.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    lengths(lengthsParameter: LengthsParameters, callback?: Function, errback?: Function): any;
    /**
     * Constructs the offset of the input geometries.
     * @param params Set the geometries to offset, distance and units.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    offset(params: OffsetParameters, callback?: Function, errback?: Function): any;
    /**
     * Projects a set of geometries into a new spatial reference.
     * @param params The input projection parameters.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    project(params: ProjectParameters, callback?: Function, errback?: Function): any;
    /**
     * Computes the set of pairs of geometries from the input geometry arrays that belong to the specified relation.
     * @param relationParameters The set of parameters required to perform the comparison.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    relation(relationParameters: RelationParameters, callback?: Function, errback?: Function): any;
    /**
     * The reshape operation is performed on a geometry service resource.
     * @param targetGeometry The polyline or polygon to be reshaped.
     * @param reshaperGeometry The single-part polyline that does the reshaping.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    reshape(targetGeometry: geometry.Geometry, reshaperGeometry: geometry.Geometry, callback?: Function, errback?: Function): any;
    /**
     * Alters the given geometries to make their definitions topologically legal with respect to their geometry type.
     * @param geometries The geometries to simplify
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    simplify(geometries: geometry.Geometry[], callback?: Function, errback?: Function): any;
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
    trimExtend(params: TrimExtendParameters, callback?: Function, errback?: Function): any;
    /**
     * The union operation is performed on a geometry service resource.
     * @param geometries The array of geometries to be unioned.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    union(geometries: geometry.Geometry[], callback?: Function, errback?: Function): any;
    /** Fires when the areasAndLengths operation is complete. */
    on(type: "areas-and-lengths-complete", listener: (event: { result: any; target: GeometryService }) => void): Handle;
    /** Fires when the autoComplete operation is complete. */
    on(type: "auto-complete-complete", listener: (event: { geometries: geometry.Polygon[]; target: GeometryService }) => void): Handle;
    /** Fires when the buffer operation is complete. */
    on(type: "buffer-complete", listener: (event: { geometries: geometry.Geometry[]; target: GeometryService }) => void): Handle;
    /** Fires when the convexHull operation is complete. */
    on(type: "convex-hull-complete", listener: (event: { geometry: geometry.Geometry; target: GeometryService }) => void): Handle;
    /** Fires when the cut operation is complete. */
    on(type: "cut-complete", listener: (event: { result: any; target: GeometryService }) => void): Handle;
    /** Fires when the densify operation is complete. */
    on(type: "densify-complete", listener: (event: { geometries: geometry.Geometry[]; target: GeometryService }) => void): Handle;
    /** Fires when the difference operation is complete. */
    on(type: "difference-complete", listener: (event: { geometries: geometry.Geometry[]; target: GeometryService }) => void): Handle;
    /** Fires when the distance operation is complete. */
    on(type: "distance-complete", listener: (event: { distance: number; target: GeometryService }) => void): Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { target: GeometryService }) => void): Handle;
    /** Fires when the generalize operation is complete. */
    on(type: "generalize-complete", listener: (event: { geometries: geometry.Geometry[]; target: GeometryService }) => void): Handle;
    /** Fires when the intersect operation is complete. */
    on(type: "intersect-complete", listener: (event: { geometries: geometry.Geometry[]; target: GeometryService }) => void): Handle;
    /** Fires when the labelPoints operation is complete. */
    on(type: "label-points-complete ", listener: (event: { geometries: geometry.Geometry[]; target: GeometryService }) => void): Handle;
    /** Fires when the lengths operation is complete. */
    on(type: "lengths-complete", listener: (event: { result: any; target: GeometryService }) => void): Handle;
    /** Fires when the offset operation is complete. */
    on(type: "offset-complete", listener: (event: { geometries: geometry.Geometry[]; target: GeometryService }) => void): Handle;
    /** Fires when the project operation is complete. */
    on(type: "project-complete", listener: (event: { geometries: geometry.Geometry[]; target: GeometryService }) => void): Handle;
    /** Fires when the relation operation is complete. */
    on(type: "relation-complete", listener: (event: { target: GeometryService }) => void): Handle;
    /** Fires when the reshape operation is complete. */
    on(type: "reshape-complete", listener: (event: { geometry: geometry.Geometry; target: GeometryService }) => void): Handle;
    /** Fires when the simplify operation is complete. */
    on(type: "simplify-complete", listener: (event: { geometries: geometry.Geometry[]; target: GeometryService }) => void): Handle;
    /** Fires when the trimExtend operation is complete. */
    on(type: "trim-extend-complete", listener: (event: { geometries: geometry.Geometry[]; target: GeometryService }) => void): Handle;
    /** Fires when the union operation is complete. */
    on(type: "union-complete", listener: (event: { geometry: geometry.Geometry; target: GeometryService }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface GeometryServiceConstructor {
	    /** Acres (areal unit) */
	  UNIT_ACRES: any;
	    /** Ares (areal unit) */
	  UNIT_ARES: any;
	    /** International foot (0.3048 meters) */
	  UNIT_FOOT: any;
	    /** Hectares (areal unit) */
	  UNIT_HECTARES: any;
	    /** Kilometer */
	  UNIT_KILOMETER: any;
	    /** International meters */
	  UNIT_METER: any;
	    /** Nautical Miles (1,852 meters) */
	  UNIT_NAUTICAL_MILE: any;
	    /** Square Centimeters (areal unit) */
	  UNIT_SQUARE_CENTIMETERS: any;
	    /** Square Decimeters (areal unit) */
	  UNIT_SQUARE_DECIMETERS: any;
	    /** Square Feet (areal unit) */
	  UNIT_SQUARE_FEET: any;
	    /** Square Inches (areal unit) */
	  UNIT_SQUARE_INCHES: any;
	    /** Square Kilometers (areal unit) */
	  UNIT_SQUARE_KILOMETERS: any;
	    /** Square Meters (areal unit) */
	  UNIT_SQUARE_METERS: any;
	    /** Square Miles (areal unit) */
	  UNIT_SQUARE_MILES: any;
	    /** Square Millimeters (areal unit) */
	  UNIT_SQUARE_MILLIMETERS: any;
	    /** Square Yards (areal unit) */
	  UNIT_SQUARE_YARDS: any;
	    /** Miles (5,280 feet, 1,760 yards, or exactly 1,609.344 meters) */
	  UNIT_STATUTE_MILE: any;
	    /** US Nautical Mile */
	  UNIT_US_NAUTICAL_MILE: any;
	    /**
	     * Creates a new GeometryService object.
	     * @param url URL to the ArcGIS Server REST resource that represents a GeometryService, e.g., http://sampleserver6.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer.
	     */
	    new(url: string): GeometryService;
  }

  /** Represents a GP Task resource exposed by the ArcGIS Server REST API. */
  export class Geoprocessor {
    /** Deprecated at v2.0, use outSpatialReference instead. */
    outputSpatialReference: SpatialReference;
    /** The spatial reference of the output geometries. */
    outSpatialReference: SpatialReference;
    /** The spatial reference that the model will use to perform geometry operations. */
    processSpatialReference: SpatialReference;
    /** The time interval in milliseconds between each job status request sent to an asynchronous GP task. */
    updateDelay: number;
    /** ArcGIS Server Rest API endpoint to the resource that receives the geoprocessing request. */
    url: string;
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
    getResultImage(jobId: string, parameterName: string, imageParameters: layers.ImageParameters, callback?: Function, errback?: Function): any;
    /**
     * Get the task result identified by jobId and resultParameterName as an ArcGISDynamicMapServiceLayer.
     * @param jobId The jobId returned from JobInfo.
     * @param parameterName The name of the result parameter as defined in Services Directory.
     * @param imageParameters Contains various options that can be specified when generating a dynamic map image.
     * @param callback The function to call when the method has completed.
     */
    getResultImageLayer(jobId: string, parameterName?: string, imageParameters?: layers.ImageParameters, callback?: Function): layers.ArcGISDynamicMapServiceLayer;
    /**
     * Deprecated at v2.0, use setOutSpatialReference instead.
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
    on(type: "error", listener: (event: { error: Error; target: Geoprocessor }) => void): Handle;
    /** Fires when a synchronous GP task is completed. */
    on(type: "execute-complete", listener: (event: { messages: GPMessage[]; results: ParameterValue[]; target: Geoprocessor }) => void): Handle;
    /** Fires when the result of an asynchronous GP task execution is available. */
    on(type: "get-result-data-complete", listener: (event: { result: ParameterValue; target: Geoprocessor }) => void): Handle;
    /** Fires when a map image is generated by invoking the getResultImage method. */
    on(type: "get-result-image-complete", listener: (event: { mapImage: layers.MapImage; target: Geoprocessor }) => void): Handle;
    /** Fires when getResultImageLayer method has completed. */
    on(type: "get-result-image-layer-complete", listener: (event: { target: Geoprocessor }) => void): Handle;
    /** Fires when the geoprocessing job is cancelled using the cancelJob method. */
    on(type: "job-cancel", listener: (event: { target: Geoprocessor }) => void): Handle;
    /** Fires when an asynchronous GP task using submitJob is complete. */
    on(type: "job-complete", listener: (event: { target: Geoprocessor }) => void): Handle;
    /** Fires when a job status update is available. */
    on(type: "status-update", listener: (event: { target: Geoprocessor }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface GeoprocessorConstructor {
	    /**
	     * Creates a new Geoprocessor object that represents the GP Task identifed by a URL.
	     * @param url URL to the ArcGIS Server REST resource that represents a geoprocessing service.
	     */
	    new(url: string): Geoprocessor;
  }

  /** This data object is used as the identifyParameters argument to IdentifyTask.execute method. */
  export class IdentifyParameters {
    /** Resolution of the current map view in dots per inch. */
    dpi: number;
    /** An array of DynamicLayerInfos used to change the layer ordering or redefine the map. */
    dynamicLayerInfos: layers.DynamicLayerInfo[];
    /** The geometry used to select features during Identify. */
    geometry: geometry.Geometry;
    /** Height of the map currently being viewed in pixels. */
    height: number;
    /** Array of layer definition expressions that allows you to filter the features of individual layers. */
    layerDefinitions: string[];
    /** The layers to perform the identify operation on. */
    layerIds: number[];
    /** Specifies which layers to use when using Identify. */
    layerOption: string;
    /** Array of layers.LayerTimeOptions objects that allow you to define time options for the specified layers. */
    layerTimeOptions: layers.LayerTimeOptions[];
    /** The geometry.Extent or bounding box of the map currently being viewed. */
    mapExtent: geometry.Extent;
    /** The maximum allowable offset used for generalizing geometries returned by the identify operation. */
    maxAllowableOffset: number;
    /** If "true", the result set includes the geometry associated with each result. */
    returnGeometry: boolean;
    /** The spatial reference of the input and output geometries as well as of the mapExtent. */
    spatialReference: SpatialReference;
    /** Specify the time extent used by the identify task. */
    timeExtent: TimeExtent;
    /** The distance in screen pixels from the specified geometry within which the identify should be performed. */
    tolerance: number;
    /** Width of the map currently being viewed in pixels. */
    width: number;
  }
  export interface IdentifyParametersConstructor {
	    /** All layers are identified, even if they are not visible. */
	  LAYER_OPTION_ALL: any;
	    /** Only the top-most visible layer is identified. */
	  LAYER_OPTION_TOP: any;
	    /** All visible layers are identified. */
	  LAYER_OPTION_VISIBLE: any;
	    /** Creates a new IdentifyParameters object. */
	    new(): IdentifyParameters;
  }

  /** Represents a result of an identify operation. */
  export class IdentifyResult {
    /** The name of the layer's primary display field. */
    displayFieldName: string;
    /** An identified feature. */
    feature: Graphic;
    /** Unique ID of the layer that contains the feature. */
    layerId: number;
    /** The layer name that contains the feature. */
    layerName: string;
  }
  export interface IdentifyResultConstructor {
      new(): IdentifyResult
  }

  /** Performs an identify operation on the layers of a map service resource exposed by the ArcGIS Server REST API. */
  export class IdentifyTask {
    /** URL to the ArcGIS Server REST resource that represents a map service. */
    url: string;
    /**
     * Sends a request to the ArcGIS REST map service resource to identify features based on the IdentifyParameters specified in the identifyParameters argument.
     * @param identifyParameters Specifies the criteria used to identify the features.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(identifyParameters: IdentifyParameters, callback?: Function, errback?: Function): any;
    /** Fires when the identify operation is complete. */
    on(type: "complete", listener: (event: { results: IdentifyResult[]; target: IdentifyTask }) => void): Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: IdentifyTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface IdentifyTaskConstructor {
	    /**
	     * Creates a new IdentifyTask object.
	     * @param url URL to the ArcGIS Server REST resource that represents a map service.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: IdentifyTaskOptions): IdentifyTask;
  }

  /** Input parameters for the ImageServiceIdentifyTask. */
  export class ImageServiceIdentifyParameters {
    /** Input geometry that defines the location to be identified. */
    geometry: geometry.Geometry;
    /** Specifies the mosaic rules defining the image sorting order. */
    mosaicRule: layers.MosaicRule;
    /** The pixel or RGB color value representing no information. */
    noData: any;
    /** Used along with the noData property. */
    noDataInterpretation: string;
    /** Specify the pixel level being identified on the x and y axis. */
    pixelSize: symbols.Symbol;
    /** The pixel level being identified (or the resolution being looked at) on the x-axis. */
    pixelSizeX: number;
    /** The pixel level being identified (or the resolution being looked at) on the y-axis. */
    pixelSizeY: number;
    /** Specifies the rendering rule for how the requested image should be rendered. */
    renderingRule: layers.RasterFunction;
    /** If "true", returns both geometry and attributes of the catalog items. */
    returnCatalogItems: boolean;
    /** When true, each feature in the catalog items includes the geometry. */
    returnGeometry: boolean;
    /** Specify a time extent. */
    timeExtent: TimeExtent;
  }
  export interface ImageServiceIdentifyParametersConstructor {
	    /** Creates a new ImageServiceIdentifyParameters object. */
	    new(): ImageServiceIdentifyParameters;
  }

  /** The results from an ImageServiceIdentifyTask. */
  export class ImageServiceIdentifyResult {
    /** The set of catalog items that overlap the input geometry. */
    catalogItems: FeatureSet;
    /** The set of visible areas for the identified catalog items. */
    catalogItemVisibilities: number[];
    /** The identified location. */
    location: geometry.Point;
    /** The identify property name. */
    name: string;
    /** The identify property id. */
    objectId: number;
    /** The attributes of the identified object. */
    properties: any;
    /** The identify property pixel value. */
    value: string;
  }
  export interface ImageServiceIdentifyResultConstructor {
      new(): ImageServiceIdentifyResult
  }

  /** Performs an identify operation on an image service resource . */
  export class ImageServiceIdentifyTask {
    /**
     * Sends a request to the ArcGIS REST image service resource to identify content based on the ImageServiceIdentifyParameters specified in the imageServiceIdentifyParameters argument.
     * @param params Specifies the criteria used to identify the features.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(params: ImageServiceIdentifyParameters, callback?: Function, errback?: Function): any;
    /** Fires when the identify operation is complete. */
    on(type: "complete", listener: (event: { result: ImageServiceIdentifyResult; target: ImageServiceIdentifyTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ImageServiceIdentifyTaskConstructor {
	    /**
	     * Creates a new ImageServiceIdentifyTask object.
	     * @param url URL to the ArcGIS Server REST resource that represents an image service.
	     */
	    new(url: string): ImageServiceIdentifyTask;
  }

  /** Represents information pertaining to the execution of an asynchronous GP task on the server. */
  export class JobInfo {
    /** The unique job ID assigned by ArcGIS Server. */
    jobId: string;
    /** The job status. */
    jobStatus: string;
    /** An array of messages that include the message type and a description. */
    messages: GPMessage[];
  }
  export interface JobInfoConstructor {
	    /** The job has been cancelled. */
	  STATUS_CANCELLED: any;
	    /** The job is in the process of cancelling. */
	  STATUS_CANCELLING: any;
	    /** The job has been deleted. */
	  STATUS_DELETED: any;
	    /** The job is in the process of deleting. */
	  STATUS_DELETING: any;
	    /** The job is being executed by job processor. */
	  STATUS_EXECUTING: any;
	    /** The job execution has failed. */
	  STATUS_FAILED: any;
	    /** The job is new. */
	  STATUS_NEW: any;
	    /** The job is submitted for execution. */
	  STATUS_SUBMITTED: any;
	    /** The job has completed successfully. */
	  STATUS_SUCCEEDED: any;
	    /** The job execution has timed out. */
	  STATUS_TIMED_OUT: any;
	    /** The job is waiting for available job processor. */
	  STATUS_WAITING: any;
      new(): JobInfo
  }
  /** Define layer properties for the legend layers associated with a PrintTemplate. */
  export class LegendLayer {
    /** The id of the operational layer to include in the printout's legend. */
    layerId: string;
    /** The ids of the sublayers to include in the printout's legend. */
    subLayerIds: string[];
  }
  export interface LegendLayerConstructor {
	    /** Creates a new LegendLayer object. */
	    new(): LegendLayer;
  }

  /** Sets the length units and other parameters for Lengths operation. */
  export class LengthsParameters {
    /** Defines the type of calculation for the geometry. */
    calculationType: string;
    /** If polylines are in geographic coordinate system, then geodesic needs to be set to true in order to calculate the ellipsoidal shortest path distance between each pair of the vertices in the polylines. */
    geodesic: boolean;
    /** The length unit in which perimeters of polygons will be calculated. */
    lengthUnit: any;
    /** The array of polylines whose lengths are to be computed. */
    polylines: geometry.Geometry[];
  }
  export interface LengthsParametersConstructor {
	    /** Creates a new LengthsParameter object. */
	    new(): LengthsParameters;
  }
  /** A data object containing a linear distance. */
  export class LinearUnit {
    /** Specifies the value of the linear distance. */
    distance: number;
    /** Specifies the unit type of the linear distance, such as "esriMeters", "esriMiles", "esriKilometers" etc. */
    units: string;
  }
  export interface LinearUnitConstructor {
	    /** Creates a new LinearUnit object. */
	    new(): LinearUnit;
  }

  /** Create a multipart color ramp to concatenate multiple color ramps for use in the renderer generated by the GenerateRendererTask. */
  export class MultipartColorRamp extends ColorRamp {
    /** Define an array of algorithmic color ramps used to generate the multi part ramp. */
    colorRamps: AlgorithmicColorRamp[];
    /** Returns an easily serializable object representation of a multipart color ramp. */
    toJson(): any;
  }
  export interface MultipartColorRampConstructor {
	    /** Creates a new MultipartColorRamp object. */
	    new(): MultipartColorRamp;
  }
  /** Represents a message generated during the execution of a network analyst task. */
  export class NAMessage {
    /** A description of the network analyst message. */
    description: string;
    /** The network analyst message type, see constants table for a list of values. */
    type: number;
  }
  export interface NAMessageConstructor {
	    /** TBA */
	  TYPE_ABORT: any;
	    /** TBA */
	  TYPE_EMPTY: any;
	    /** TBA */
	  TYPE_ERROR: any;
	    /** TBA */
	  TYPE_INFORMATIVE: any;
	    /** TBA */
	  TYPE_PROCESS_DEFINITION: any;
	    /** TBA */
	  TYPE_PROCESS_START: any;
	    /** TBA */
	  TYPE_PROCESS_STOP: any;
	    /** TBA */
	  TYPE_WARNING: any;
      new(): NAMessage
  }

  export var NATypes: {
    OutputLine: NAOutputLine;
    OutputPolygon: NAOutputPolygon;
    TravelDirection: NATravelDirection;
    UTurn: NAUTurn;
  };

  /** Sets the offset distance, type and other parameters for the GeometryService.offset operation. */
  export class OffsetParameters {
    /** The bevelRatio is multiplied by the offset distance and the result determines how far a mitered offset intersection can be located before it is beveled. */
    bevelRatio: number;
    /** The array of geometries to be offset. */
    geometries: geometry.Geometry[];
    /** Specifies the distance for constructing an offset based on the input geometries. */
    offsetDistance: number;
    /** Options that determine how the ends intersect. */
    offsetHow: string;
    /** The offset distance unit. */
    offsetUnit: string;
  }
  export interface OffsetParametersConstructor {
	    /** Creates a new OffsetParameters object. */
	    new(): OffsetParameters;
  }
  /** Represent the output parameters of a GP task and their properties and values. */
  export class ParameterValue {
    /** Specifies the type of data for the parameter. */
    dataType: string;
    /** The value of the parameter. */
    value: any;
  }
  export interface ParameterValueConstructor {
      new(): ParameterValue
  }

  /** Input parameters for the PrintTask. */
  export class PrintParameters {
    /** Additional parameters for the print service. */
    extraParameters: any;
    /** The map to print. */
    map: Map;
    /** Specify the output spatial reference for the printout. */
    outSpatialReference: SpatialReference;
    /** Defines the layout template used for  the printed map. */
    template: PrintTemplate;
  }
  export interface PrintParametersConstructor {
	    /** Creates a new PrintParameters object. */
	    new(): PrintParameters;
  }

  /** The PrintTask class generates a printer-ready version of the map using an Export Web Map Task available with ArGIS Server 10.1 and later. */
  export class PrintTask {
    /** The url to the Export Web Map Task. */
    url: string;
    /**
     * Sends a request to the print service resource to create a print page using the information specified in the printParameters argument.
     * @param printParameters A PrintParameters object that defines the printing options.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    execute(printParameters: PrintParameters, callback?: Function, errback?: Function): any;
    /** Fired when the print operation is complete. */
    on(type: "complete", listener: (event: { url: string; target: PrintTask }) => void): Handle;
    /** Fired when an error occurs while executing the print task. */
    on(type: "error", listener: (event: { error: Error; target: PrintTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface PrintTaskConstructor {
	    /**
	     * Creates a new PrintTask object.
	     * @param url URL to the Export Web Map Task.
	     * @param params Parameters for the print task.
	     */
	    new(url: string, params?: PrintTaskOptions): PrintTask;
  }
  /** Define the layout template options used by the PrintTask and Print widget to generate the print page. */
  export class PrintTemplate {
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
  }
  export interface PrintTemplateConstructor {
	    /** Creates a new PrintTemplate object. */
	    new(): PrintTemplate;
  }

  /** Define the projection parameters used when calling the GeometryService project method. */
  export class ProjectParameters {
    /** The input geometries to project. */
    geometries: geometry.Geometry[];
    /** The spatial reference to which you are projecting the geometries. */
    outSR: SpatialReference;
    /** The well-known id {wkid:number} or well-known text {wkt:string} or  for the datum transfomation to be applied on the projected geometries. */
    transformation: any;
    /** Indicates whether to transform forward or not. */
    transformForward: boolean;
  }
  export interface ProjectParametersConstructor {
	    /** Creates a new ProjectParameters object. */
	    new(): ProjectParameters;
  }

  /** Executes a query operation on a layer resource of a map service exposed by the ArcGIS Server REST API. */
  export class QueryTask {
    /** URL to the ArcGIS Server REST resource that represents a map service layer. */
    url: string;
    /**
     * Executes a Query against an ArcGIS Server map layer.
     * @param parameters Specifies the attributes and spatial filter of the query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(parameters: Query, callback?: Function, errback?: Function): any;
    /**
     * Get a count of the number of features that satisfy the input query.
     * @param query Specify the input query object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    executeForCount(query: Query, callback?: Function, errback?: Function): any;
    /**
     * Get the extent of the features that satisfy the input query.
     * @param query Specify the input query object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    executeForExtent(query: Query, callback?: Function, errback?: Function): any;
    /**
     * Executes a Query against an ArcGIS Server map layer.
     * @param parameters Specifies the attributes and spatial filter of the query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    executeForIds(parameters: Query, callback?: Function, errback?: Function): any;
    /**
     * Executes a RelationshipQuery against an ArcGIS Server map layer (or table).
     * @param parameters Specifies the attributes and spatial filter of the query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    executeRelationshipQuery(parameters: RelationshipQuery, callback?: Function, errback?: Function): any;
    /** Fires when the query operation is complete. */
    on(type: "complete", listener: (event: { featureSet: FeatureSet; target: QueryTask }) => void): Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: QueryTask }) => void): Handle;
    /** Fires when the query for the count is complete. */
    on(type: "execute-for-count-complete", listener: (event: { count: number; target: QueryTask }) => void): Handle;
    /** Fires when the query for the extent is complete. */
    on(type: "execute-for-extent-complete", listener: (event: { count: number; extent: any; target: QueryTask }) => void): Handle;
    /** Fires when the query on IDs is complete. */
    on(type: "execute-for-ids-complete", listener: (event: { objectIds: number[]; target: QueryTask }) => void): Handle;
    /** Fires when the executeRelationshipQuery is complete. */
    on(type: "execute-relationship-query-complete", listener: (event: { featureSets: FeatureSet[]; target: QueryTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface QueryTaskConstructor {
	    /**
	     * Creates a new QueryTask object used to execute a query on the layer resource identified by the url.
	     * @param url URL to the ArcGIS Server REST resource that represents a layer in a service.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: QueryTaskOptions): QueryTask;
  }
  /** A geoprocessing data object containing a raster data source. */
  export class RasterData {
    /** Specifies the format of the raster data such as "jpg", "tif" etc. */
    format: string;
    /** The ID of the uploaded file returned as a result of the upload operation. */
    itemID: string;
    /** URL to the location of the raster data file. */
    url: string;
  }
  export interface RasterDataConstructor {
	    /** Creates a new RasterData object. */
	    new(): RasterData;
  }

  /** Sets the relation and other parameters for Relation operation. */
  export class RelationParameters {
    /** The first array of geometries to compute the relations. */
    geometries1: geometry.Geometry[];
    /** The second array of geometries to compute the relations. */
    geometries2: geometry.Geometry[];
    /** The spatial relationship to be tested between the two input geometry arrays. */
    relation: string;
    /** The 'Shape Comparison Language' string to evaluate. */
    relationParam: string;
  }
  export interface RelationParametersConstructor {
	    /** The boundaries of the geometries must share an intersection, but the relationship between the interiors of the shapes is not considered (they could overlap, one could be contained in the other, or their interiors could be disjoint). */
	  SPATIAL_REL_COINCIDENCE: any;
	    /** Two polylines cross if they share only points in common, at least one of which is not an endpoint. */
	  SPATIAL_REL_CROSS: any;
	    /** Two geometries are disjoint if their intersection is empty. */
	  SPATIAL_REL_DISJOINT: any;
	    /** The base geometry is within the comparison geometry if the base geometry is the intersection of the geometries and the intersection of their interiors is not empty. */
	  SPATIAL_REL_IN: any;
	    /** Geometries intersect excluding boundary touch. */
	  SPATIAL_REL_INTERIORINTERSECTION: any;
	    /** geometry.Geometry interiors intersect or boundaries touch, same as 'not disjoint'. */
	  SPATIAL_REL_INTERSECTION: any;
	    /** Two geometries are said to touch when the intersection of the geometries is non-empty, but the intersection of their interiors is empty. */
	  SPATIAL_REL_LINETOUCH: any;
	    /** Two polylines share a common sub-line, or two polygons share a common sub-area. */
	  SPATIAL_REL_OVERLAP: any;
	    /** Two geometries are said to touch when the intersection of the geometries is non-empty, but the intersection of their interiors is empty. */
	  SPATIAL_REL_POINTTOUCH: any;
	    /** Allows specification of any relationship defined   using the Shape Comparison Language. */
	  SPATIAL_REL_RELATION: any;
	    /** The union of point touch and line touch. */
	  SPATIAL_REL_TOUCH: any;
	    /** Same as SPATIAL_REL_IN but also allows polylines that are strictly on the boundaries of polygons to be considered in the polygon. */
	  SPATIAL_REL_WITHIN: any;
	    /** Creates a new RelationParameter object. */
	    new(): RelationParameters;
  }

  /** Define query parameters for the feature layer's queryRelatedFeatures method. */
  export class RelationshipQuery {
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
    outSpatialReference: SpatialReference;
    /** The ID of the relationship to test. */
    relationshipId: number;
    /** If "true", each feature in the FeatureSet includes the geometry. */
    returnGeometry: boolean;
  }
  export interface RelationshipQueryConstructor {
	    /** Creates a new RelationshipQuery object. */
	    new(): RelationshipQuery;
  }

  /** Input parameters for a RouteTask. */
  export class RouteParameters {
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
    outSpatialReference: SpatialReference;
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
  }
  export interface RouteParametersConstructor {
	    /** Creates a new RouteParameters object. */
	    new(): RouteParameters;
  }

  /** The result from the Route Task. */
  export class RouteResult {
    /** Route directions are returned if RouteParameters.returnDirections is set to true. */
    directions: DirectionsFeatureSet;
    /** The Route graphic that is returned if RouteParameters.returnRoutes is true. */
    route: Graphic;
    /** The name of the route. */
    routeName: string;
    /** Array of stops. */
    stops: Graphic[];
  }
  export interface RouteResultConstructor {
      new(): RouteResult
  }

  /** Solves a route on a route layer resource in a Network Analyst service exposed by the ArcGIS Server REST API. */
  export class RouteTask {
    /** URL to the ArcGIS Server REST resource that represents a network analysis service. */
    url: string;
    /**
     * Solves the route against the route layer with the route parameters.
     * @param params Route parameters used as input to generate the route.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    solve(params: RouteParameters, callback?: Function, errback?: Function): any;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: RouteTask }) => void): Handle;
    /** Fires when RouteTask.solve() has completed. */
    on(type: "solve-complete", listener: (event: { result: any; target: RouteTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface RouteTaskConstructor {
	    /**
	     * Creates a new RouteTask object.
	     * @param url URL to the ArcGIS Server REST resource that represents a network analysis service.
	     */
	    new(url: string): RouteTask;
  }

  /** Input parameters for a ServiceAreaTask. */
  export class ServiceAreaParameters {
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
    outSpatialReference: SpatialReference;
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
  }
  export interface ServiceAreaParametersConstructor {
	    /** Creates a new ServiceAreaParameters object. */
	    new(): ServiceAreaParameters;
  }

  /** The result from a ServiceAreaTask operation. */
  export class ServiceAreaSolveResult {
    /** Array of points, only returned if ServiceAreaParameters.returnFacilities is set to true. */
    facilities: geometry.Point[];
    /** Message received when solve is completed. */
    messages: NAMessage[];
    /** The point barriers are an array of points. */
    pointBarriers: geometry.Point[];
    /** The polygon barriers are an array of polygons. */
    polygonBarriers: geometry.Polygon[];
    /** The polyline barriers are an array of polylines. */
    polylineBarriers: geometry.Polyline[];
    /** Array of service area polygon graphics. */
    serviceAreaPolygons: Graphic[];
    /** Array of service area polyline graphics. */
    serviceAreaPolylines: Graphic[];
  }
  export interface ServiceAreaSolveResultConstructor {
      new(): ServiceAreaSolveResult
  }

  /** Helps you find service areas around any location on a network. */
  export class ServiceAreaTask {
    /**
     * Solve the service area.
     * @param params The ServiceAreaParameters object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    solve(params: ServiceAreaParameters, callback?: Function, errback?: Function): any;
    /** Fires when ServiceAreaTask has completed. */
    on(type: "solve-complete", listener: (event: { result: ServiceAreaSolveResult; target: ServiceAreaTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ServiceAreaTaskConstructor {
	    /**
	     * Creates a new ServiceAreaTask object.
	     * @param url URL to the ArcGIS Server REST resource that represents a network analysis service.
	     */
	    new(url: string): ServiceAreaTask;
  }
  /** The StatisticDefinition class defines the type of statistics, the field used to calculate the statistics and the resulting output field name. */
  export class StatisticDefinition {
    /** Define the field on which statistics will be calculated. */
    onStatisticField: string;
    /** Specify the output field name. */
    outStatisticFieldName: string;
    /** Define the type of statistic. */
    statisticType: string;
  }
  export interface StatisticDefinitionConstructor {
	    /** Creates a new StatisticDefinition object. */
	    new(): StatisticDefinition;
  }

  /** Sets the polylines and other parameters for the trimExtend operation. */
  export class TrimExtendParameters {
    /** A flag used along with the trimExtend operation. */
    extendHow: string;
    /** The array of polylines to trim or extend. */
    polylines: geometry.Polyline[];
    /** A polyline used as a guide for trimming or extending input polylines. */
    trimExtendTo: geometry.Polyline;
  }
  export interface TrimExtendParametersConstructor {
	    /** Creates a new TrimExtendParameters object. */
	    new(): TrimExtendParameters;
  }

  /** Define a unique value classification scheme used by the GenerateRendererTask to create a renderer that groups values based on a unique combination of one or more fields. */
  export class UniqueValueDefinition extends ClassificationDefinition {
    /** Attribute field renderer uses to match values. */
    attributeField: string;
    /** The name of the field that contains unique values when combined with the values specified by attributeField. */
    attributeField2: string;
    /** The name of the field that contains unique values when combined with the values specified by attributeField and attributeField2. */
    attributeField3: string;
    /** Define a default symbol for the classification. */
    baseSymbol: symbols.Symbol;
    /** Define a color ramp for the classification. */
    colorRamp: ColorRamp;
    /** Returns an easily serializable object representation of the unique value definition. */
    toJson(): any;
  }
  export interface UniqueValueDefinitionConstructor {
	    /** Creates a new UniqueValueDefinition object. */
	    new(): UniqueValueDefinition;
  }

  /** Represents a geocode service resource exposed by the ArcGIS Server REST API. */
  export class Locator {
    /** Limit the results to one or more categories. */
    categories: string[];
    /** The country to limit results to for example "US" for United States or "SE" for Sweden. */
    countryCode: string;
    /** The spatial reference of the output geometries. */
    outSpatialReference: SpatialReference;
    /** URL to the ArcGIS Server REST resource that represents a locator service. */
    url: string;
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
    locationToAddress(location: geometry.Point, distance: number, callback?: Function, errback?: Function): any;
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
    on(type: "addresses-to-locations-complete", listener: (event: { addresses: AddressCandidate[]; target: Locator }) => void): Handle;
    /** Fires when Locator.addressToLocation method has completed. */
    on(type: "address-to-locations-complete", listener: (event: { addresses: AddressCandidate[]; target: Locator }) => void): Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: Locator }) => void): Handle;
    /** Fires when Locator.locationToAddress method has completed. */
    on(type: "location-to-address-complete", listener: (event: { address: AddressCandidate; target: Locator }) => void): Handle;
    /** Fires when the suggestLocation method has completed. */
    on(type: "suggest-locations-complete", listener: (event: { target: Locator }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface LocatorConstructor {
	    /**
	     * Creates a new Locator object.
	     * @param url URL to the ArcGIS Server REST resource that represents a locator service.
	     */
	    new(url: string): Locator;
  }

  /** Query for input to the QueryTask. */
  export class Query {
    /** Distance to buffer input geometry. */
    distance: number;
    /** The geometry to apply to the spatial filter. */
    geometry: geometry.Geometry;
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
    outSpatialReference: SpatialReference;
    /** The definitions for one or more field-based statistic to be calculated. */
    outStatistics: StatisticDefinition[];
    /** Specify the pixel level to be identified on the x and y axis. */
    pixelSize: symbols.Symbol;
    /** Used to project the geometry onto a virtual grid, likely representing pixels on the screen. */
    quantizationParameters: any;
    /** The 'Shape Comparison Language' string to evaluate. */
    relationParam: string;
    /** If true then returns distinct values based on the fields specified in the outFields. */
    returnDistinctValues: boolean;
    /** If "true", each feature in the FeatureSet includes the geometry. */
    returnGeometry: boolean;
    /** The spatial relationship to be applied on the input geometry while performing the query. */
    spatialRelationship: string;
    /** Zero-based index indicating where to begin retrieving features. */
    start: number;
    /** Shorthand for a where clause using "like". */
    text: string;
    /** Specify a time extent for the query. */
    timeExtent: TimeExtent;
    /** Distance unit. */
    units: string;
    /** A where clause for the query. */
    where: string;
  }
  export interface QueryConstructor {
	    /** Part or all of a feature from feature class 1 is contained within a feature from feature class 2. */
	  SPATIAL_REL_CONTAINS: any;
	    /** The feature from feature class 1 crosses a feature from feature class 2. */
	  SPATIAL_REL_CROSSES: any;
	    /** The envelope of feature class 1 intersects with the envelope of feature class 2. */
	  SPATIAL_REL_ENVELOPEINTERSECTS: any;
	    /** The envelope of the query feature class intersects the index entry for the target feature class. */
	  SPATIAL_REL_INDEXINTERSECTS: any;
	    /** Part of a feature from feature class 1 is contained in a feature from feature class 2. */
	  SPATIAL_REL_INTERSECTS: any;
	    /** Features from feature class 1 overlap features in feature class 2. */
	  SPATIAL_REL_OVERLAPS: any;
	    /** Allows specification of any relationship defined   using the Shape Comparison Language. */
	  SPATIAL_REL_RELATION: any;
	    /** The feature from feature class 1 touches the border of a feature from feature class 2. */
	  SPATIAL_REL_TOUCHES: any;
	    /** The feature from feature class 1 is completely enclosed by the feature from feature class 2. */
	  SPATIAL_REL_WITHIN: any;
	    /** Creates a new Query object used to execute a query on the layer resource identified by the URL. */
	    new(): Query;
  }
}
declare namespace esriTypes.tasks.geoenrichment {

  /** The study area that is based on an address. */
  export class AddressStudyArea extends StudyArea {
    /** The address key value pairs to geocode to obtain this study area. */
    attributes: any;
  }
  export interface AddressStudyAreaConstructor {
      new(): AddressStudyArea
  }

  /** The study area is created with a drive time or drive distance buffer. */
  export class DriveBuffer {
    /** The radii to use to create ring buffers. */
    radius: number[];
    /** The units of the radii. */
    units: string;
  }
  export interface DriveBufferConstructor {
	    /**
	     * Constructs a DriveBuffer.
	     * @param params Various optional parameters that can be used to configure this class.
	     */
	    new(params: DriveBufferOptions): DriveBuffer;
  }
  /** DriveUnits provides various length units that can be passed as the units in the DriveBuffer. */
  export class DriveUnits {
  }
  export interface DriveUnitsConstructor {
	    /** Acres (esriAcres). */
	  ACRES: any;
	    /** Ares (esriAres). */
	  ARES: any;
	    /** Centimeters (esriCentimeters). */
	  CENTIMETERS: any;
	    /** Decimal degrees (esriDecimalDegrees). */
	  DECIMAL_DEGREES: any;
	    /** Decimeters (esriDecimeters). */
	  DECIMETERS: any;
	    /** Degree minute seconds (esriDegreeMinuteSeconds). */
	  DEGREE_MINUTE_SECONDS: any;
	    /** Feet (esriFeet). */
	  FEET: any;
	    /** Hectares (esriHectares). */
	  HECTARES: any;
	    /** Inches (esriInches). */
	  INCHES: any;
	    /** Kilometers (esriKilometers). */
	  KILOMETERS: any;
	    /** Meters (esriMeters). */
	  METERS: any;
	    /** Miles (esriMiles). */
	  MILES: any;
	    /** Millimeters (esriMillimeters). */
	  MILLIMETERS: any;
	    /** Minutes (esriDriveTimeUnitsMinutes). */
	  MINUTES: any;
	    /** Nautical miles (esriNauticalMiles). */
	  NAUTICAL_MILES: any;
	    /** Points (esriPoints). */
	  POINTS: any;
	    /** Square centimeters (esriSquareCentimeters). */
	  SQUARE_CENTIMETERS: any;
	    /** Square decimeters (esriSquareDecimeters). */
	  SQUARE_DECIMETERS: any;
	    /** Square feet (esriSquareFeet). */
	  SQUARE_FEET: any;
	    /** Square inches (esriSquareInches). */
	  SQUARE_INCHES: any;
	    /** Square kilometers (esriSquareKilometers). */
	  SQUARE_KILOMETERS: any;
	    /** Square meters (esriSquareMeters). */
	  SQUARE_METERS: any;
	    /** Square miles (esriSquareMiles). */
	  SQUARE_MILES: any;
	    /** Square millimeters (esriSquareMillimeters). */
	  SQUARE_MILLIMETERS: any;
	    /** Square yards (esriSquareYards). */
	  SQUARE_YARDS: any;
	    /** Unknown (esriUnknownUnits). */
	  UNKNOWN: any;
	    /** Yards (esriYards). */
	  YARDS: any;
      new(): DriveUnits
  }
  /** GeographicLevel works with IntersectingGeographies to define a study area of InfoGraphic with a feature from a standard geography layer. */
  export class GeographyLevel {
    /** The ID of the country for which data is retrieved. */
    countryID: string;
    /** The ID of the dataset to which variables used in this GeographyLevel belong. */
    datasetID: string;
    /** The ID of the layer. */
    layerID: string;
  }
  export interface GeographyLevelConstructor {
	    /**
	     * Create a GeographyLevel object.
	     * @param json Various options to configure this GeographyLevel.
	     */
	    new(json?: Object): GeographyLevel;
  }

  /** (Beta at v3.12) Represents StandardGeographyQuery parameters to search for geographies by ID or Name. */
  export class GeographyQuery extends GeographyQueryBase {
    /** Array of geography IDs. */
    geographyIDs: string[];
    /** Array of geography layer IDs. */
    geographyLayerIDs: string[];
    /** A where clause for the query. */
    where: string;
  }
  export interface GeographyQueryConstructor {
	    /** Creates a new instance of the GeographyQuery object. */
	    new(): GeographyQuery;
  }

  /** (Beta at v3.12) Base class for all GeographyQuery objects. */
  export class GeographyQueryBase {
    /** Two-digit country code. */
    countryID: string;
    /** Optional string that denotes the ID of a dataset associated with a particular country. */
    datasetID: string;
    /** Optional integer value where you can limit the number of features that are returned from the geographyQuery. */
    featureLimit: number;
    /** Optional integer that specifies the level of generalization of the geometries. */
    generalizationLevel: number;
    /** Determines spatial reference for output geometry if returnGeometry is set to true. */
    outSR: SpatialReference;
    /** Use this parameter to return all the geometries as points. */
    returnCentroids: boolean;
    /** Determines whether response will also include geometries. */
    returnGeometry: boolean;
    /** Optional boolean to enable fuzzy search. */
    useFuzzySearch: boolean;
    /** Converts object to its JSON representation. */
    toJson(): any;
  }
  export interface GeographyQueryBaseConstructor {
	    /**
	     * Creates a new instance of the GeographyQueryBase object.
	     * @param json JSON object used to set the properties of the object.
	     */
	    new(json?: Object): GeographyQueryBase;
  }

  /** The study area that is based on a geometry. */
  export class GeometryStudyArea extends StudyArea {
    /** The geometry for this study area. */
    geometry: geometry.Geometry;
  }
  export interface GeometryStudyAreaConstructor {
	    /** Constructs a GeometryStudyArea. */
	    new(): GeometryStudyArea;
  }

  /** The study area is created with the geometries intersecting the passed in geometry from specified layers. */
  export class IntersectingGeographies {
    /** The layers from which intersecting geographies should be used as study areas. */
    levels: GeographyLevel[];
  }
  export interface IntersectingGeographiesConstructor {
      new(): IntersectingGeographies
  }

  /** The study area is created with a simple ring buffer with a radius. */
  export class RingBuffer {
    /** The radii to use to create ring buffers. */
    radii: number[];
    /** The units of the radii. */
    units: string;
  }
  export interface RingBufferConstructor {
	    /**
	     * Constructs a RingBuffer.
	     * @param params Various optional parameters that can be used to configure this class.
	     */
	    new(params: RingBufferOptions): RingBuffer;
  }

  /** (Beta at v3.12) Geoenrichment helper task that returns standard geography IDs and features for the supported geographic levels in Canada, the United States and a number of European countries. */
  export class StandardGeographyQueryTask {
    /**
     * Executes the StandardGeographyQueryTask.
     * @param GeographyQuery See GeographyQuery or SubGeographyQuery classes for more details about available properties.
     */
    execute(GeographyQuery: GeographyQueryBase): any;
    /** Fires when an error occurs during the query. */
    on(type: "error", listener: (event: { error: Error; target: StandardGeographyQueryTask }) => void): Handle;
    /** Fires when the query successfully executes. */
    on(type: "execute-complete", listener: (event: { features: tasks.FeatureSet; target: StandardGeographyQueryTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface StandardGeographyQueryTaskConstructor {
	    /**
	     * Creates a new instance of the StandardGeographyQueryTask class.
	     * @param url URL to the Geoenrichment server.
	     */
	    new(url?: string): StandardGeographyQueryTask;
  }

  /** The study area that is based on a standard geography. */
  export class StandardGeographyStudyArea extends StudyArea {
    /** The country to which this geography belongs. */
    countryID: string;
    /** The ID of the standard geography layer. */
    geographyLayerID: string;
    /** The IDs of the standard geographies. */
    ids: string[];
  }
  export interface StandardGeographyStudyAreaConstructor {
      new(): StandardGeographyStudyArea
  }

  /** The study area that is used for enrichment or for display in an Infographic widget. */
  export class StudyArea {
    /** Attributes of the study area. */
    attributes: any;
    /** The identifiers for layers used to find comparison geographies. */
    comparisonGeographyLevels: GeographyLevel[];
    /** The options to apply to the study area. */
    options: any;
    /** If true, geometry will be returned. */
    returnGeometry: boolean;
    /** Converts object to its JSON representation. */
    toJson(): any;
  }
  export interface StudyAreaConstructor {
      new(): StudyArea
  }

  /** (Beta at v3.12) Represents StandardGeographyQuery parameters to search subgeographic areas that are within a parent geography. */
  export class SubGeographyQuery extends GeographyQueryBase {
    /** Parent layer geography IDs. */
    filterGeographyIDs: string;
    /** Parent layer ID. */
    filterGeographyLayerID: string;
    /** Parent layer search string. */
    filterGeographyWhere: string;
    /** layers.Layer ID to return features from. */
    subGeographyLayerID: string;
    /** tasks.Query string for the subquery. */
    subGeographyWhere: string;
  }
  export interface SubGeographyQueryConstructor {
	    /**
	     * Creates a new instance of the SubGeographyQuery object.
	     * @param json JSON object used to set the properties of the object.
	     */
	    new(json?: Object): SubGeographyQuery;
  }
}
declare namespace esriTypes.tasks.locationproviders {

  /** (Beta at v3.12) The CoordinatesLocationProvider class uses the fields that contain Latitude and Longitude values to generate or locate geometries. */
  export class CoordinatesLocationProvider extends LocationProviderClientBase {
    /** The attribute field in the graphic object that has the longitude (X) values. */
    xField: string;
    /** The attribute field in the graphic object that has the latitude (X) values. */
    yField: string;
  }
  export interface CoordinatesLocationProviderConstructor {
	    /**
	     * Creates a new instance of the CoordinatesLocationProvider object.
	     * @param options Define the properties to use when creating the class.
	     */
	    new(options: CoordinatesLocationProviderOptions): CoordinatesLocationProvider;
  }

  /** (Beta at v3.12) The GeometryLocationProvider class uses the field in the data that has geometry as a JSON to generate the corresponding geometry. */
  export class GeometryLocationProvider extends LocationProviderClientBase {
    /** The attribute field in the graphic object that contains the JSON string representing the geometry. */
    geometryField: string;
  }
  export interface GeometryLocationProviderConstructor {
	    /**
	     * Creates a new instance of the GeometryLocationProvider object.
	     * @param options Define the properties to use when creating the class.
	     */
	    new(options: any): GeometryLocationProvider;
  }

  /** (Beta at v3.12) The base class for all LocationProviders. */
  export class LocationProviderBase {
    /** The geometry type of the returned features. */
    geometryType: string;
    /** Returns true when the load event has been fired. */
    loaded: boolean;
    /**
     * Assigns geometries to the array of Graphic objects.
     * @param features An array of Graphic objects.
     * @param options Optional parameters.
     */
    locate(features: Graphic[], options?: any): any;
    /** Fires when an error occurs during locate. */
    on(type: "error", listener: (event: { error: Error; target: LocationProviderBase }) => void): Handle;
    /** Fires after the provider has loaded. */
    on(type: "load", listener: (event: { target: LocationProviderBase }) => void): Handle;
    /** Fires when the locate has completed. */
    on(type: "locate-complete", listener: (event: { failed: Graphic[]; features: Graphic[]; target: LocationProviderBase }) => void): Handle;
    /** (Need clarification) Fires when the locate is in progress. */
    on(type: "locate-progress", listener: (event: { features: Graphic[]; target: LocationProviderBase }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface LocationProviderBaseConstructor {
      new(): LocationProviderBase
  }

  /** (Beta at v3.12) The base class for CoordinatesLocationProvider and GeometryLocationProvider. */
  export class LocationProviderClientBase extends LocationProviderBase {
    /** The Spatial Reference of the input geometries. */
    inSpatialReference: SpatialReference;
  }
  export interface LocationProviderClientBaseConstructor {
      new(): LocationProviderClientBase
  }

  /** (Beta at v3.12) The base class for Location Providers that use a remote service to locate geometries. */
  export class LocationProviderRemoteBase extends LocationProviderBase {
  }
  export interface LocationProviderRemoteBaseConstructor {
      new(): LocationProviderRemoteBase
  }

  /** (Beta at v3.12) The LocatorLocationProvider class uses a geocode service through the tasks.Locator object to generate or locate geometries using fields in the graphics that contain Street address information */
  export class LocatorLocationProvider extends LocationProviderRemoteBase {
    /** A mapping that defines the tasks.Locator Address fields to the attribute name in the Graphic object. */
    addressFields: any;
    /** An instance of a tasks.Locator object. */
    locator: tasks.Locator;
  }
  export interface LocatorLocationProviderConstructor {
	    /**
	     * Creates a new instance of the LocationProvider_Locator object.
	     * @param options Define the properties to use when creating the class.
	     */
	    new(options: any): LocatorLocationProvider;
  }

  /** (Beta at v3.12) The QueryTaskLocationProvider performs a query against a ArcGIS Feature service or Map service layer based on common fields that are present in both the data and the ArcGIS layer. */
  export class QueryTaskLocationProvider extends LocationProviderRemoteBase {
    /** A query parameter object that will be used to query the ArcGIS layer. */
    queryParameters: any;
    /** An instance of a QueryTask. */
    queryTask: tasks.QueryTask;
    /** Set to true when querying a field that contains unicode characters. */
    unicode: boolean;
    /** A mapping of the fields in the data and the ArcGIS layer to use to perform a join. */
    whereFields: any;
  }
  export interface QueryTaskLocationProviderConstructor {
	    /**
	     * Creates a new instance of the QueryTaskLocationProvider object.
	     * @param features An array of Graphic objects.
	     * @param options Define the properties to use when creating the class.
	     */
	    new(features: Graphic[], options?: any): QueryTaskLocationProvider;
  }

  /** (Beta at v3.12) The StandardGeographyQueryLocationProvider class uses the Geoenrichment service to generate geometries by querying the standard geography layers. */
  export class StandardGeographyQueryLocationProvider extends LocationProviderRemoteBase {
    /** A template to be used to build the query for Standard Geography query. */
    geographyQueryTemplate: string;
    /** An object that specifies the various parameters to use in the Standard Geography query. */
    queryParameters: any;
    /** An instance of the tasks.geoenrichment.StandardGeographyQueryTask class. */
    standardGeographyQueryTask: tasks.geoenrichment.StandardGeographyQueryTask;
  }
  export interface StandardGeographyQueryLocationProviderConstructor {
	    /**
	     * Creates a new instance of the StandardGeographyQueryLocationProvider object.
	     * @param options Define the properties to use when creating the class.
	     */
	    new(options: StandardGeographyQueryLocationProviderOptions): StandardGeographyQueryLocationProvider;
  }
}
declare namespace esriTypes.toolbars {

  /** Toolbar that supports functionality to create new geometries by drawing them: points (POINT or MULTI_POINT), lines (LINE, POLYLINE, or FREEHAND_POLYLINE), polygons (FREEHAND_POLYGON or POLYGON), or rectangles (EXTENT). */
  export class Draw {
    /** symbols.Symbol to be used when drawing a geometry.Polygon or Extent. */
    fillSymbol: symbols.SimpleFillSymbol;
    /** symbols.Symbol to be used when drawing a Polyline. */
    lineSymbol: symbols.SimpleLineSymbol;
    /** symbols.Symbol to be used when drawing a geometry.Point or Multipoint. */
    markerSymbol: symbols.SimpleMarkerSymbol;
    /** When set to false, the geometry is modified to be topologically correct. */
    respectDrawingVertexOrder: boolean;
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
     * @param fillSymbol The fill symbol.
     */
    setFillSymbol(fillSymbol: symbols.FillSymbol): void;
    /**
     * Sets the line symbol.
     * @param lineSymbol The line symbol.
     */
    setLineSymbol(lineSymbol: symbols.LineSymbol): void;
    /**
     * Sets the marker symbol.
     * @param markerSymbol The marker symbol.
     */
    setMarkerSymbol(markerSymbol: symbols.MarkerSymbol): void;
    /**
     * Sets whether the polygon geometry should be modified to be topologically correct.
     * @param set When set to false, the geometry is modified to be topologically correct.
     */
    setRespectDrawingVertexOrder(set: boolean): void;
    /** Fired when the user has ended drawing. */
    on(type: "draw-complete", listener: (event: { geographicGeometry: geometry.Geometry; geometry: geometry.Geometry; target: Draw }) => void): Handle;
    /** Fires when drawing is complete. */
    on(type: "draw-end", listener: (event: { geometry: geometry.Geometry; target: Draw }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface DrawConstructor {
	    /** Draws an arrow. */
	  ARROW: any;
	    /** Draws a circle. */
	  CIRCLE: any;
	    /** Draws an arrow that points down. */
	  DOWN_ARROW: any;
	    /** Draws an ellipse. */
	  ELLIPSE: any;
	    /** Draws an extent box. */
	  EXTENT: any;
	    /** Draws a freehand polygon. */
	  FREEHAND_POLYGON: any;
	    /** Draws a freehand polyline. */
	  FREEHAND_POLYLINE: any;
	    /** Draws an arrow that points left. */
	  LEFT_ARROW: any;
	    /** Draws a line. */
	  LINE: any;
	    /** Draws a Multipoint. */
	  MULTI_POINT: any;
	    /** Draws a point. */
	  POINT: any;
	    /** Draws a polygon. */
	  POLYGON: any;
	    /** Draws a polyline. */
	  POLYLINE: any;
	    /** Draws a rectangle. */
	  RECTANGLE: any;
	    /** Draws an arrow that points right. */
	  RIGHT_ARROW: any;
	    /** Draws a triangle. */
	  TRIANGLE: any;
	    /** Draws an arrow that points up. */
	  UP_ARROW: any;
	    /**
	     * Creates a new Draw object.
	     * @param map Map the toolbar is associated with.
	     * @param options Parameters that define the functionality of the draw toolbar.
	     */
	    new(map: Map, options?: DrawOptions): Draw;
  }

  /** The Edit toolbar is a helper class that provides functionality to move graphics or modify individual vertices, i.e., edit the geometry of existing graphics. */
  export class Edit {
    /**
     * Activates the toolbar to edit the supplied graphic.
     * @param tool Specify the active tool(s).
     * @param graphic The graphic to edit.
     * @param options See the object specifications table below for the structure of the  options  object.
     */
    activate(tool: string, graphic: Graphic, options?: any): void;
    /** Deactivates the toolbar. */
    deactivate(): void;
    /** An object with the following properties that describe the current state. */
    getCurrentState(): any;
    /** Refreshes the internal state of the toolbar. */
    refresh(): void;
    /** Activates the toolbar for editing geometries. */
    on(type: "activate", listener: (event: { graphic: Graphic; tool: string; target: Edit }) => void): Handle;
    /** Deactivates the toolbar and reactivates map navigation. */
    on(type: "deactivate", listener: (event: { graphic: Graphic; info: any; tool: string; target: Edit }) => void): Handle;
    /** Fires when a graphic is clicked. */
    on(type: "graphic-click", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): Handle;
    /** Fires when the user begins to move a graphic. */
    on(type: "graphic-first-move", listener: (event: { graphic: Graphic; target: Edit }) => void): Handle;
    /** Fired continuously as the graphic moves. */
    on(type: "graphic-move", listener: (event: { graphic: Graphic; transform: any; target: Edit }) => void): Handle;
    /** Fired when the mouse button is pressed down on the graphic, usually while moving a graphic. */
    on(type: "graphic-move-start", listener: (event: { graphic: Graphic; target: Edit }) => void): Handle;
    /** Fired when the mouse button is released, usually after moving the graphic. */
    on(type: "graphic-move-stop", listener: (event: { graphic: Graphic; transform: any; target: Edit }) => void): Handle;
    /** Fires continuously as a graphic is rotated. */
    on(type: "rotate", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): Handle;
    /** Fires when the user begins to drag a handle to rotate the graphic. */
    on(type: "rotate-first-move", listener: (event: { graphic: Graphic; target: Edit }) => void): Handle;
    /** Fires when a user clicks on the handle to begin rotating a graphic. */
    on(type: "rotate-start", listener: (event: { graphic: Graphic; target: Edit }) => void): Handle;
    /** Fires when the mouse button is released from the rotate handle to finish rotating the graphic. */
    on(type: "rotate-stop", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): Handle;
    /** Fires continuously as the graphic is being scaled. */
    on(type: "scale", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): Handle;
    /** Fires when the user begins to drag a handle to scale the graphic. */
    on(type: "scale-first-move", listener: (event: { graphic: Graphic; target: Edit }) => void): Handle;
    /** Fires when a user clicks on the handle to scale or resize a graphic. */
    on(type: "scale-start", listener: (event: { graphic: Graphic; target: Edit }) => void): Handle;
    /** Fires when the mouse button is released from the scale handle to finish scaling the graphic. */
    on(type: "scale-stop", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): Handle;
    /** Fired after a new vertex is added to a polyline or polygon or a new point is added to a multipoint. */
    on(type: "vertex-add", listener: (event: { graphic: Graphic; vertexinfo: any; target: Edit }) => void): Handle;
    /** Fired when the mouse button is clicked on the vertex of a polyline or polygon or a point in a multipoint. */
    on(type: "vertex-click", listener: (event: { graphic: Graphic; vertexinfo: any; target: Edit }) => void): Handle;
    /** Fired after a vertex(polyline, polygon) or point(multipoint) is deleted. */
    on(type: "vertex-delete", listener: (event: { graphic: Graphic; vertexinfo: any; target: Edit }) => void): Handle;
    /** Fired when the user begins to move the vertex of a polyline or polygon or a point of a multipoint. */
    on(type: "vertex-first-move", listener: (event: { graphic: Graphic; vertexinfo: any; target: Edit }) => void): Handle;
    /** Fires as the mouse exits a vertex(polyline, polygon) or a point(multipoint). */
    on(type: "vertex-mouse-out", listener: (event: { graphic: Graphic; vertexinfo: any; target: Edit }) => void): Handle;
    /** Fired when the mouse moves over a vertex (polyline, polygon) or point (multipoint). */
    on(type: "vertex-mouse-over", listener: (event: { graphic: Graphic; vertexinfo: any; target: Edit }) => void): Handle;
    /** Fired continuously as the user is moving a vertex (polyline, polygon) or point (multipoint). */
    on(type: "vertex-move", listener: (event: { graphic: Graphic; transform: any; vertexinfo: any; target: Edit }) => void): Handle;
    /** Fired when the mouse button is pressed down on a vertex (polyline, polygon) or point (multipoint). */
    on(type: "vertex-move-start", listener: (event: { graphic: Graphic; vertexinfo: any; target: Edit }) => void): Handle;
    /** Fired when the mouse button is released from a vertex (polyline, polygon) or point(multipoint). */
    on(type: "vertex-move-stop", listener: (event: { graphic: Graphic; transform: any; vertexinfo: any; target: Edit }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface EditConstructor {
	    /** When a textSymbol point is in edit mode, double-clicking leads to text editing mode, which is a text box where uses can change the text content. */
	  EDIT_TEXT: any;
	    /** Display and edit vertices of a geometry.Polyline, geometry.Polygon, or Multipoint. */
	  EDIT_VERTICES: any;
	    /** Move graphic to a new location on the map. */
	  MOVE: any;
	    /** Rotate the graphic. */
	  ROTATE: any;
	    /** Scale or resize a graphic. */
	  SCALE: any;
	    /**
	     * Creates a new Edit object.
	     * @param map Map the toolbar is associated with.
	     * @param options Optional parameters.
	     */
	    new(map: Map, options?: EditOptions): Edit;
  }

  /** Toolbar that supports basic navigation such as pan and zoom. */
  export class Navigation {
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
     * Set the symbols.SimpleFillSymbol used for the rubber band zoom.
     * @param symbol The symbols.SimpleFillSymbol used for the rubber band zoom.
     */
    setZoomSymbol(symbol: symbols.Symbol): void;
    /** Zoom to full extent of base layer. */
    zoomToFullExtent(): void;
    /** Zoom to next extent in extent history. */
    zoomToNextExtent(): void;
    /** Zoom to previous extent in extent history. */
    zoomToPrevExtent(): void;
    /** Fires when the extent history changes. */
    on(type: "extent-history-change", listener: (event: { target: Navigation }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface NavigationConstructor {
	    /** Map is panned. */
	  PAN: any;
	    /** Map zooms in. */
	  ZOOM_IN: any;
	    /** Map zooms out. */
	  ZOOM_OUT: any;
	    /**
	     * Creates a new Navigation object.
	     * @param map Map the toolbar is associated with.
	     */
	    new(map: Map): Navigation;
  }
}
declare namespace esriTypes.virtualearth {
  /** The Bing Maps address details. */
  export class VEAddress {
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
  export interface VEAddressConstructor {
      new(): VEAddress
  }

  /** Represents a Bing Maps address and its location. */
  export class VEGeocodeResult {
    /** Specifies address properties for the result. */
    address: VEAddress;
    /** Best extent for displaying the result. */
    bestView: geometry.Extent;
    /** Contains values that indicate the geocode method used to match the location to the map. */
    calculationMethod: string;
    /** Value indicating how confident the service is about the result. */
    confidence: string;
    /** Contains a display name for the result. */
    displayName: string;
    /** Further refines the geocode results that have been returned. */
    entityType: string;
    /** The X and Y coordinates of the result in decimal degrees. */
    location: geometry.Point;
    /** An array of values that indicate the geocoding level of the location match. */
    matchCodes: string;
  }
  export interface VEGeocodeResultConstructor {
      new(): VEGeocodeResult
  }

  /** Bing Maps geocoder. */
  export class VEGeocoder {
    /** Specifies the culture in which to return results. */
    culture: string;
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
    on(type: "address-to-locations-complete", listener: (event: { geocodeResults: VEGeocodeResult[]; target: VEGeocoder }) => void): Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: VEGeocoder }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface VEGeocoderConstructor {
	    /**
	     * Creates a new VEGeocoder object.
	     * @param options See options list for parameters.
	     */
	    new(options: VEGeocoderOptions): VEGeocoder;
  }

  /** Bing Maps tiled layer. */
  export class VETiledLayer extends layers.TiledMapServiceLayer {
    /** The copyright text. */
    copyright: string;
    /** Specifies the culture in which to return results. */
    culture: string;
    /** Bing Maps style. */
    mapStyle: string;
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
    on(type: "map-style-change", listener: (event: { target: VETiledLayer }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface VETiledLayerConstructor {
	    /** Bing Maps Aerial layer. */
	  MAP_STYLE_AERIAL: any;
	    /** Bing Maps Aerial with Labels layer. */
	  MAP_STYLE_AERIAL_WITH_LABELS: any;
	    /** Bing Maps Roads layer. */
	  MAP_STYLE_ROAD: any;
	    /**
	     * Creates a new VETiledLayer object.
	     * @param options See options list for parameters.
	     */
	    new(options: VETiledLayerOptions): VETiledLayer;
  }
}
declare namespace esriTypes.workers {
  /** The WorkerClient is the primary entry point for interfacing with background Workers. */
  export class WorkerClient {
    /** Return Deferreds rather than Promises from postMessage. */
    returnDeferreds: boolean;
    /** Reference to the actual HTML5 Worker instance. */
    worker: Worker;
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
  export interface WorkerClientConstructor {
	    /**
	     * Creates a WorkerClient.
	     * @param path A require style string path to the worker script.
	     * @param deferreds Whether to return Deferreds rather than Promises from methods.
	     */
	    new(path: string, deferreds?: boolean): WorkerClient;
  }
}
