// Type definitions for ArcGIS API for JavaScript v3.16
// Project: http://js.arcgis.com
// Definitions by: Esri <http://www.esri.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Converted from https://raw.githubusercontent.com/Esri/jsapi-resources/761f698bbc0f17c6b888768d316ac6b09086e811/3.x/typescript/arcgis-js-api.d.ts
// Converted by https://github.com/TwitchBronBron/esri-javascript-api-typings
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
    /** When true, returns the result of analysis as a client-side feature collection. */
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
  export interface ArcGISImageServiceVectorLayerOptions {
    /** Apply a function for visualization or post-processing purposes. */
    pixelFilter?: any;
    /** Set the default renderer from a list of predefined options. */
    rendererStyle?: string;
    /** A value used to aggregate pixels into tiles for visualization purposes. */
    symbolTileSize?: number;
  }
  export interface ArcGISTiledMapServiceLayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Lists which levels to draw. */
    displayLevels?: number[];
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
    /** The purpose of resampling is to enlarge the image and fill in at the levels where there are no tiles available. */
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
    /** The URL template used to retrieve the tiles. */
    templateUrl?: string;
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
  export interface BlendRendererOptions {
    /** This determines how colors are blended together. */
    blendMode?: string;
    /** An array of objects to blend containing the field name and color to use. */
    fields: any[];
    /** The field to normalize. */
    normalizationField?: string;
    /** An array of objects which determines opacity. */
    opacityStops: any[];
    /** The symbol in which the BlendRenderer is applied. */
    symbol: symbols.Symbol;
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
  export interface ChooseBestFacilitiesOptions {
    /** The URL to the analysis service, for example "http://analysis.arcgis.com/arcgis/rest/services/tasks/GPServer". */
    analysisGpServer?: string;
    /** The number of facilities to choose when allocating demand locations. */
    candidateCount?: number;
    /** Specify how much demand every facility in the candidateFacilitiesLayer is capable of supplying. */
    candidateFacilitiesCapacity?: string;
    /** String value indicating the field name on the candidateFacilitiesLayer  representing how much demand each facility in the candidatesFacilitiesLayer is capable of supplying. */
    candidateFacilitiesCapacityField?: string;
    /** A point layer specifying one or more locations that act as facilities by providing some kind of service. */
    candidateFacilitiesLayer?: layers.FeatureLayer;
    /** The amount of demand available at every demand locations. */
    demand?: number;
    /** String value indicating the field name on the demandLocationLayer  representing the amount of demand available at each demand location. */
    demandField?: string;
    /** A point layer specifying the locations that have demand for facilities. */
    demandLocationLayer?: layers.FeatureLayer;
    /** Array of point layers to be used for choosing the demandLocationLayer. */
    demandLocationLayers: layers.FeatureLayer[];
    /** When true, Travel Modes (Driving Time) is enabled for the inputLayer with the point geometries (esriGeometryPoint). */
    enableTravelModes?: boolean;
    /** Array of point layers used for setting the required facilities layer and candidate facilities layer. */
    featureLayers: layers.FeatureLayer[];
    /** Sets the selected folder of the select folder dropdown. */
    folderId?: string;
    /** Sets the selected folder of the select folder dropdown. */
    folderName?: string;
    /** Reference to the map. */
    map?: Map;
    /** The maximum travel time or distance allowed between a demand location and its allocated facility. */
    maxTravelRange?: number;
    /** String value indicating the field name on the demandLocationLayer specifying the maximum travel time or distance allowed between a demand location and its allocated facility. */
    maxTravelRangeField?: string;
    /** The name of the output layer to be displayed in the result layer  nameinputbox. */
    outputLayerName?: string;
    /** The percentage of the total demand that you want the chosen and required facilities to capture. */
    percentDemandCoverage?: number;
    /** The URL to the ArcGIS organization or Portal site where the GP server is hosted. */
    portalUrl?: string;
    /** Specify how much demand every facility in the requiredFacilitiesLayer is capable of supplying. */
    requiredFacilitiesCapacity?: number;
    /** A field on the requiredFacilitiesLayer representing how much demand each facility in this layer is capable of supplying. */
    requiredFacilitiesCapacityField?: string;
    /** A point layer specifying one or more locations that act as facilities by providing some kind of service. */
    requiredFacilitiesLayer?: layers.FeatureLayer;
    /** Indicates whether to return the result of analysis as a client-side feature collection. */
    returnFeatureCollection?: boolean;
    /** Indicates whether the "choose extent checkbox" is displayed. */
    showChooseExtent?: boolean;
    /** Indicates whether to show the credit options. */
    showCredits ?: boolean;
    /** Indicates whether the help links are displayed. */
    showHelp?: boolean;
    /** Indicates whether to add an option to the UI that allows users to choose ready-to-use analysis layers from the Living Atlas Analysis Layers. */
    showReadyToUseLayers?: boolean;
    /** Indicates whether to display a dropdown menu listing valid input analysis layers. */
    showSelectAnalysisLayer?: boolean;
    /** Indicates whether the select folder dropdown will be displayed. */
    showSelectFolder?: boolean;
    /** The default widget title with a custom title. */
    title?: string;
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
    center: geometry.Point | number[];
    /** Applicable when the spatial reference of the center point is either set to Web Mercator or geographic/geodesic as true would apply. */
    geodesic?: boolean;
    /** A circle can be thought of similar to a polygon. */
    numberOfPoints?: number;
    /** The radius of the circle. */
    radius?: number;
    /** Unit of the radius. */
    radiusUnit?: Units;
  }
  export interface ClassedColorSliderOptions {
    /** Data map containing renderer information. */
    breakInfos: any;
    /** Indicates the classification method used to divide the range of values into bins. */
    classificationMethod?: string;
    /** Required: Handles identified by their index values within the stops array. */
    handles: number[];
    /** Represents the histogram data object. */
    histogram?: any;
    /** Width of the histogram in pixels. */
    histogramWidth?: number;
    /** Indicates how data values are normalized. */
    normalizationType?: string;
    /** Handle identified by its index value within the stops array. */
    primaryHandle?: number;
    /** Width of the widget ramp in pixels. */
    rampWidth?: number;
    /** Displays slider handles when true. */
    showHandles?: boolean;
    /** Displays the histogram when true. */
    showHistogram?: boolean;
    /** Displays slider labels when true. */
    showLabels?: boolean;
    /** Displays ticks on slider when true. */
    showTicks?: boolean;
    /** Represents the statistics data object. */
    statistics?: any;
  }
  export interface ClassedSizeSliderOptions {
    /** The data map containing renderer information. */
    breakInfos: any;
    /** Optional: Indicates the classification method used to divide the range of values into bins. */
    classificationMethod?: string;
    /** Required: Handles identified by their index values within the stops array. */
    handles: number[];
    /** Represents the histogram data object. */
    histogram?: any;
    /** Width of histogram in pixels. */
    histogramWidth?: number;
    /** Indicates how data values are normalized. */
    normalizationType?: string;
    /** The handle identified by its index value within the stops array. */
    primaryHandle?: number;
    /** Width of slider ramp in pixels. */
    rampWidth?: number;
    /** Displays slider handles when true. */
    showHandles?: boolean;
    /** Indicates whether to display the histogram. */
    showHistogram?: boolean;
    /** Displays labels when true. */
    showLabels?: boolean;
    /** Displays slider ticks when true. */
    showTicks?: boolean;
    /** Optional: Represents the statistics data object. */
    statistics?: any;
  }
  export interface ColorInfoSliderOptions {
    /** The data map containing renderer information. */
    colorInfo: any;
    /** Handles identified by their index values within the stops array. */
    handles: number[];
    /** Optional: Represents the histogram data object. */
    histogram?: any;
    /** Width of histogram in pixels. */
    histogramWidth?: number;
    /** The absolute maximum value of the slider. */
    maxValue?: number;
    /** The absolute minimum value of the slider. */
    minValue?: number;
    /** The handle identified by its index value within the stops array. */
    primaryHandle?: number;
    /** Width of widget ramp in pixels. */
    rampWidth?: number;
    /** Displays handles when set to true. */
    showHandles?: boolean;
    /** Displays the histogram when true. */
    showHistogram?: boolean;
    /** Displays labels when set to true. */
    showLabels?: boolean;
    /** Indicates whether to display percentage labels. */
    showRatioLabels?: boolean | string;
    /** Displays tick marks when set to true. */
    showTicks?: boolean;
    /** Displays transparent background when set to true. */
    showTransparentBackground?: boolean;
    /** Represents a statistics data object. */
    statistics?: any;
    /** Additional options to customize slider. */
    zoomOptions?: any;
  }
  export interface ColorPickerOptions {
    /** The selected color. */
    color: Color;
    /** The row size of the palette. */
    colorsPerRow: number;
    /** The set of available color options. */
    palette: Color[];
    /** Array of recent colors to show in the recent colors row. */
    recentColors: Color[];
    /** Toggles color selection being required. */
    required: boolean;
    /** Toggles the recent color row. */
    showRecentColors: boolean;
    /** Toggles the transparency slider. */
    showTransparencySlider: boolean;
  }
  export interface ConnectOriginsToDestinationsOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The linear unit used with the distance value(s). */
    distanceDefaultUnits?: string;
    /** An array of feature layers containing destination points. */
    featureLayers: layers.FeatureLayer[];
    /** Reference to the map object. */
    map?: Map;
    /** The point feature layer containing the origin points. */
    originsLayer: layers.FeatureLayer;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
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
    /** When true, returns the result of analysis as client-side feature collection. */
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
    /** When true, returns the result of analysis as a client-side feature collection. */
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
  export interface CreateViewshedOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** Feature layer containing observation points to be used as input. */
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
  }
  export interface CreateWatershedsOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The feature layer containing input points used for calculating watersheds. */
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
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
    /** Whether or not to display the hierarchy dropdown for countries with multiple hierarchies (e.g. */
    allowHierarchies?: boolean;
    /** Show/hide country drop down. */
    countryBox?: boolean;
    /** Two-digit country code selected in the country drop down. */
    countryID?: string;
    /** The hierarchy to load for a country (e.g. */
    hierarchyID?: string;
    /** Text string to display on the back button on the second and third pages of the Data Browser. */
    pageBackButton?: string;
    /** Selected variables array. */
    selection?: string[];
    /** Whether to display the "Shopping Cart" of selected variables. */
    shoppingCart?: boolean;
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
    alphabet?: string | string[] | boolean;
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
    /** If available, this geometry service is used to provide latitude/longitude values for stops whose reverse geocoding did not return an address (Added at v3.11). */
    geometryTaskUrl?: string;
    /** Reference to the map object. */
    map: Map;
    /** Activates the map-click-active toggle button when true. */
    mapClickActive?: boolean;
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
    /** Used to define optional search options. */
    searchOptions?: any;
    /** Define the info template for the popup that appears when the popup for a route segment is displayed. */
    segmentInfoTemplate?: InfoTemplate;
    /** Specify the symbol used to render the individual route segments that display on the map when a direction step is clicked. */
    segmentSymbol?: symbols.SimpleLineSymbol;
    /** Defines whether the Directions widget will show the map-click-active toggle button. */
    showActivateButton?: boolean;
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
    stops?: geometry.Point[] | number[][] | string[] | any[];
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
    /** When true, returns the result of analysis as a client-side feature collection. */
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
    allowDeleteVertices?: boolean;
    /** Line symbol used to draw the guild lines, displayed when moving vertices. */
    ghostLineSymbol?: symbols.LineSymbol;
    /** Marker symbol used to display the insertable vertices. */
    ghostVertexSymbol?: symbols.MarkerSymbol;
    /** If users want to place the text symbol editor to a user defined HTML element. */
    textSymbolEditorHolder?: Node | string;
    /** When true, if the geometry is re-sized the aspect ration will be preserved. */
    uniformScaling?: boolean;
    /** Marker symbol used to draw the vertices. */
    vertexSymbol?: symbols.MarkerSymbol;
  }
  export interface EditorOptions {
    /** Create a new settings object that defines the capabilities of the widget. */
    settings?: any;
  }
  export interface ElevationProfileOptions {
    /** This object contains properties used to render the chart. */
    chartOptions?: any;
    /** Reference to the map. */
    map: Map;
    /** The URL to the elevation profile service. */
    profileTaskUrl: string;
    /** The measurement unit of the scalebar units. */
    scalebarUnits?: string;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
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
    /** When true, returns the result of analysis as a client-side feature collection. */
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
  export interface FeatureLayerStatisticsOptions {
    /** The feature layer that will be the source for calculating statistics. */
    layer: layers.FeatureLayer;
  }
  export interface FeatureTableOptions {
    /** Object defining the date options specifically for formatting date and time editors. */
    dateOptions?: any;
    /** Sets the editing state for the FeatureTable. */
    editable?: boolean;
    /** The featureLayer that the table is associated with. */
    featureLayer: layers.FeatureLayer;
    /** An array of objects representing field information. */
    fieldInfos?: any[];
    /** Reference to the 'Options' drop-down menu. */
    gridMenu?: any;
    /** Object that can be used to set properties used by the underlying dgrid. */
    gridOptions?: any;
    /** Columns to hide by default using the dGrid ColumnHider extension. */
    hiddenFields?: string[];
    /** A reference to the Map. */
    map?: Map;
    /** Adds additional functional menu items for the 'Options' drop-down menu. */
    menuFunctions?: any[];
    /** Attribute fields to include in the FeatureTable. */
    outFields?: string[];
    /** Displays the data type of the field right under the field label. */
    showDataTypes?: boolean;
    /** Displays or hides the FeatureTable header. */
    showGridHeader?: boolean;
    /** Displays or hides 'Options' drop-down menu of the FeatureTable. */
    showGridMenu?: boolean;
    /** Enables an interaction between the map and the feature table. */
    syncSelection?: boolean;
    /** Enables pan/zoom to selected features on the map when the table in 'sync selection' mode. */
    zoomToSelection?: boolean;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
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
    /** When true, returns the result of analysis as a client-side feature collection. */
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
    /** By default, the Geocoder widget uses the Esri World tasks.Locator to find search locations. */
    arcgisGeocoder?: boolean | any;
    /** When false, the geocoder will not display the auto-complete results menu. */
    autoComplete?: boolean;
    /** When false, the geolocator will not navigate to the result after selection or search. */
    autoNavigate?: boolean;
    /** When false, the geocoder menu will not be displayed when more than one geocoder is set. */
    geocoderMenu?: boolean;
    /** Defines the geocoders that will be used by the Geocoder widget. */
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
  export interface GeometryLocationProviderOptions {
    /** The attribute field in the graphic object that contains the JSON string representing the geometry. */
    geometryField: string;
    /** The geometry type of the returned features. */
    geometryType: string;
  }
  export interface GraphicsLayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** List of attribute fields to be added as custom data attributes to graphics node. */
    dataAttributes?: string | string[];
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
  export interface HeatmapSliderOptions {
    /** An array of colorStop objects describing the renderer's color ramp with more specificity than just colors. */
    colorStops: any[];
    /** Handles identified by their index values within the stops array. */
    handles: number[];
    /** Absolute maximum value of the slider. */
    maxValue?: number;
    /** Absolute minimum value of the slider. */
    minValue?: number;
    /** Width of slider ramp in pixels. */
    rampWidth?: number;
    /** Displays slider handles when true. */
    showHandles?: boolean;
    /** Displays slider labels when true. */
    showLabels?: boolean;
    /** Displays slider ticks when true. */
    showTicks?: boolean;
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
  export interface HorizontalSliderOptions {
    /** Array of text labels to render - evenly spaced from left-to-right. */
    labels: string[];
  }
  export interface IdentifyTaskOptions {
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
  }
  export interface ImageServiceMeasureOptions {
    /** symbols.Symbol to be used when drawing a polygon or extent. */
    fillSymbol?: symbols.SimpleFillSymbol;
    /** Image service layer with which the toolbar is associated. */
    layer: layers.ArcGISImageServiceLayer;
    /** symbols.Symbol to be used when drawing a line. */
    lineSymbol?: symbols.SimpleLineSymbol;
    /** Map instance with which the toolbar is associate. */
    map: Map;
    /** symbols.Symbol to be used when drawing a point. */
    markerSymbol?: symbols.SimpleMarkerSymbol;
  }
  export interface ImageServiceMeasureToolOptions {
    /** The angular unit in which directions of line segments will be calculated. */
    angularUnit?: string;
    /** The area unit in which areas of polygons will be calculated. */
    areaUnit?: string;
    /** symbols.Symbol to be used when drawing a polygon or extent. */
    fillSymbol?: symbols.SimpleFillSymbol;
    /** Image service layer the toolbar is associated with. */
    layer: layers.ArcGISImageServiceLayer;
    /** The linear unit in which height, length, or perimeters will be calculated. */
    linearUnit?: string;
    /** symbols.Symbol to be used when drawing a line. */
    lineSymbol?: symbols.SimpleLineSymbol;
    /** Map instance the toolbar is associated with. */
    map: Map;
    /** symbols.Symbol to be used when drawing a point. */
    markerSymbol?: symbols.SimpleMarkerSymbol;
  }
  export interface ImageSpatialReferenceOptions {
    /** The full Image Coordinate System object, which includes transformations and map spatial reference information specific to each image. */
    ics?: any;
    /** The OBJECTID of the image in a mosaic dataset. */
    icsid?: number;
    /** The url of the image service. */
    url: string;
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
  export interface LayerListOptions {
    /** An array of operational layers. */
    layers: any[];
    /** Reference to the map. */
    map: Map;
    /** Indicates whether to remove underscores from the layer title. */
    removeUnderscores?: boolean;
    /** Indicates whether to display a legend for the layer items. */
    showLegend?: boolean;
    /** Indicates whether to display the opacity slider. */
    showOpacitySlider?: boolean;
    /** Indicates whether to show sublayers in the list of layers. */
    showSubLayers?: boolean;
    /** The CSS class selector used to uniquely style the widget. */
    theme?: string;
    /** Indicates whether to show the LayerList widget. */
    visible?: boolean;
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
  export interface LocatorLocationProviderOptions {
    /** Object that matches the tasks.Locator address fields to corresponding attribute names in the Graphic object. */
    addressFields: any;
    /** An instance of a tasks.Locator object. */
    locator: tasks.Locator;
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
    center?: number[] | geometry.Point;
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
    geometry?: geometry.Point | geometry.Polyline | geometry.Polygon;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
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
    /** Indicates whether to display social logins such as Google/Facebook. */
    showSocialLogins?: boolean;
  }
  export interface ObliqueViewerOptions {
    /** Azimuth angle value for which to display oblique images. */
    azimuthAngle?: number;
    /** Image service field that denotes the sensor azimuth value for a record. */
    azimuthField?: string;
    /** Tolerance value applied when filtering azimuth images. */
    azimuthTolerance?: number;
    /** Image service field that denotes the sensor elevation value for a record. */
    elevationField?: string;
    /** Elevation value between 0 and 90 that differentiates an image as oblique or nadir. */
    elevationThreshold?: number;
    /** Image service layer to be used as source for oblique images. */
    imageServiceLayer: layers.ArcGISImageServiceLayer;
    /** Map object associated with the widget. */
    map: Map;
    /** When true, the widget doesn't refresh itself with new oblique records when the map's extent changes. */
    noQueryOnExtentChange?: boolean;
    /** Raster info fields to be queried and displayed in the raster list. */
    rasterInfoFields?: any[];
    /** DOM Node or id, where the list element is to be placed. */
    rasterListDiv?: string | Node;
    /** When true, list is populated on data refresh. */
    rasterListRefresh?: boolean;
    /** DOM Node or id, where the oblique rotation gauge element is to be placed. */
    rotationDiv?: string | Node;
    /** When true, thumbnail images for records are displayed in the list. */
    showThumbnail?: boolean;
    /** Sorting function that takes query results and sorts them. */
    sorter?: Function;
  }
  export interface OpacitySliderOptions {
    /** Handles identified by their index values within the stops array. */
    handles: number[];
    /** Represents the histogram data object. */
    histogram?: any;
    /** Width of histogram in pixels. */
    histogramWidth?: number;
    /** The absolute maximum value of the slider. */
    maxValue?: number;
    /** The absolute minimum value of the slider. */
    minValue?: number;
    /** The data map containing renderer information. */
    opacityInfo: any;
    /** The handle identified by its index value within the stops array. */
    primaryHandle?: number;
    /** Represents the width of the SVG ramp in pixels. */
    rampWidth?: number;
    /** Displays slider handles when true. */
    showHandles?: boolean;
    /** Displays the histogram when true. */
    showHistogram?: boolean;
    /** Displays slider labels when true. */
    showLabels?: boolean;
    /** Displays slider ticks when true. */
    showTicks?: boolean;
    /** Displays the transparent background when true. */
    showTransparentBackground?: boolean;
    /** Represents a statistics data object. */
    statistics?: any;
    /** Additional options to customize slider. */
    zoomOptions?: any;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
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
  export interface PixelBlockOptions {
    /** Number of rows. */
    height: number;
    /** An array of nodata mask. */
    mask?: any[];
    /** A two dimensional array. */
    pixels: number[][];
    /** Pixel type. */
    pixelType?: string;
    /** Array of objects containing numeric statistical properties (e.g. */
    statistics?: any[];
    /** Number of columns. */
    width: number;
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
  export interface QueryTaskLocationProviderOptions {
    /** Object containing properties that will be used to query the ArcGIS layer. */
    queryParameters: any;
    /** An instance of a QueryTask. */
    queryTask: tasks.QueryTask;
    /** Set to true when querying a field that contains unicode characters. */
    unicode: boolean;
    /** A mapping of the fields in the data and the ArcGIS layer to use to perform a join. */
    whereFields: any;
  }
  export interface QueryTaskOptions {
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
  }
  export interface RasterLayerOptions {
    /** Sets the layer's draw mode. */
    drawMode?: boolean;
    /** Sets the context of the Canvas. */
    drawType?: string;
    /** Additional parameters defined in an  layers.ImageServiceParameters object. */
    imageServiceParameters?: layers.ImageServiceParameters;
    /** Applies a function for visualization or post-processing purposes. */
    pixelFilter?: any;
  }
  export interface RendererSliderOptions {
    /** Collection of indexes that indicates which children from the infos array to use as handles. */
    handles?: number[];
    /** Absolute maximum value allowed by the slider. */
    maximum: number;
    /** Top label for the slider. */
    maxLabel?: string;
    /** Absolute minimum value allowed by the slider. */
    minimum: number;
    /** Bottom label for the slider. */
    minLabel?: string;
    /** Accuracy of the data (related to rounding). */
    precision?: number;
    /** Primary handle identified by its index value within the related infos array (color, size, break). */
    primaryHandle?: number;
    /** Toggle for showing the black handle bars. */
    showHandles?: boolean;
    /** Flexible toggle for showing labels (e.g. */
    showLabels?: boolean | string[];
    /** Toggle for showing the horizontal line indicators from the center of the handle. */
    showTicks?: boolean;
    /** Stores positions represented as numbers that fall between minimum and maximum. */
    values: number[];
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
  export interface SearchOptions {
    /** The currently selected source. */
    activeSourceIndex?: number | string;
    /** Indicates whether to automatically add all the feature layers from the map. */
    addLayersFromMap?: boolean;
    /** This is the default value used as a hint for input text when searching on multiple sources. */
    allPlaceholder?: string;
    /** Indicates whether to automatically navigate to the selected result. */
    autoNavigate?: boolean;
    /** Indicates whether to automatically select the first geocoded result (not the first suggestion). */
    autoSelect?: boolean;
    /** Indicates whether to enable an option to collapse/expand the search into a button. */
    enableButtonMode?: boolean;
    /** Indicates whether to show the selected feature on the map using the highlight symbol property. */
    enableHighlight?: boolean;
    /** Indicates whether to display the infoWindow on feature click. */
    enableInfoWindow?: boolean;
    /** Indicates whether to enable showing a label for the geometry.The default value is false. */
    enableLabel?: boolean;
    /** Indicates whether to display the option to search "All" sources. */
    enableSearchingAll?: boolean;
    /** Indicates whether to enable the menu for selecting different sources. */
    enableSourcesMenu?: boolean;
    /** Indicates whether or not to enable suggest on the widget. */
    enableSuggestions?: boolean;
    /** Indicates whether to display suggest results. */
    enableSuggestionsMenu?: boolean;
    /** Indicates whether to set the state of the enableButtonMode to expanded (true) or collapsed (false). */
    expanded?: boolean;
    /** This the specified graphicsLayer to use for the highlightGraphic and labelGraphic instead of map.graphics. */
    graphicsLayer?: layers.Layer;
    /** The symbol used for highlightGraphic. */
    highlightSymbol?: symbols.Symbol;
    /** A customized infoTemplate for the selected feature. */
    infoTemplate?: InfoTemplate;
    /** The text symbol for the label graphic. */
    labelSymbol?: symbols.TextSymbol;
    /** The default distance specified in meters used to reverse geocode, (if not specified by source). */
    locationToAddressDistance?: number;
    /** Reference to the map. */
    map?: Map;
    /** The default maximum number of results returned by the widget if not specified by source. */
    maxResults?: number;
    /** The default maximum number of suggestions returned by the widget if not specified by source. */
    maxSuggestions?: number;
    /** The default minimum amount of characters needed for the search if not specified by source. */
    minCharacters?: number;
    /** Indicates whether to show the infoWindow when a result is selected. */
    showInfoWindowOnSelect?: boolean;
    /** An array of source objects used to find search results. */
    sources?: any[];
    /** The millisecond delay after keyup and before making a suggest network request. */
    suggestionDelay?: number;
    /** The CSS class selector used to uniquely style the widget. */
    theme?: string;
    /** Current value of the search box input text string. */
    value?: string;
    /** Indicates whether to show the Search widget. */
    visible?: boolean;
    /** If the result does not have an associated extent, specify this number to use as the zoom scale for the result. */
    zoomScale?: number;
  }
  export interface SizeInfoSliderOptions {
    /** Handles identified by their index values within the stops array. */
    handles: number[];
    /** Represents the histogram data object. */
    histogram?: any;
    /** Width of the histogram in pixels. */
    histogramWidth?: number;
    /** The absolute maximum value of the slider. */
    maxValue?: number;
    /** The absolute minimum value of the slider. */
    minValue?: number;
    /** The handle identified by its index value within the stops array. */
    primaryHandle?: number;
    /** Represents the width of the SVG ramp in pixels. */
    rampWidth?: number;
    /** Displays slider handles when true. */
    showHandles?: boolean;
    /** Displays the histogram when true. */
    showHistogram?: boolean;
    /** Displays labels when true. */
    showLabels?: boolean;
    /** Displays slider ticks when true. */
    showTicks?: boolean;
    /** Defines the size of the symbol where feature size is proportional to data value. */
    sizeInfo: any;
    /** Represents the statistics data object. */
    statistics?: any;
    /** The symbols.SimpleLineSymbol or symbols.SimpleMarkerSymbol used with the widget. */
    symbol: symbols.Symbol;
    /** Additional options to customize slider. */
    zoomOptions?: any;
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
    /** An object that specifies the parameters to use in the Standard Geography query. */
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
    /** An array of strings corresponding with fields to include in the StreamLayer. */
    outFields?: string[];
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
    /** An array of strings corresponding with fields to include in the StreamLayer. */
    outFields?: string[];
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
    /** When true, returns the result of analysis as a client-side feature collection. */
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
    /** When true, returns the result of analysis as a client-side feature collection. */
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
  export interface SymbolStylerOptions {
    /** Added at v. */
    portal?: string | any;
    /** Self response of Portal used as symbol provider. */
    portalSelf?: any;
    /** URL to Portal used as symbol provider. */
    portalUrl?: string;
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
  export interface TimeClassBreaksAgerOptions {
    /** The alpha opacity for the break. */
    alpha: number;
    /** The color for the break. */
    color: Color;
    /** The maximum age for the break info. */
    maxAge: number;
    /** The minimum age for the break info. */
    minAge: number;
    /** The size for the break. */
    size: number;
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
  export interface VectorFieldRendererOptions {
    /** Sets the flow direction of the data. */
    flowRepresentation?: string;
    /** A symbol that can be defined if the style is set to STYLE_SINGLE_ARROW. */
    singleArrowSymbol?: symbols.Symbol;
    /** A predefined style. */
    style?: string;
  }
  export interface VectorTileLayerOptions {
    /** Lists which levels of the layer to draw. */
    displayLevels?: number[];
    /** Maximum visible scale for the layer. */
    maxScale?: number;
    /** Minimum visible scale for the layer. */
    minScale?: number;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** Visibility of the layer. */
    visible?: boolean;
  }
  export interface VisibleScaleRangeSliderOptions {
    /** layers.Layer used to determine the suggested scale range and set the minScale, maxScale values. */
    layer?: layers.Layer;
    /** Reference to the map. */
    map: Map;
    /** Region of preview scale thumbnails. */
    region?: string;
  }
  export interface WFSLayerOptions {
    /** Full WFS body request sent to WFS server via POST method. */
    getFeatureRequest?: string;
    /** URL used when executing getFeature request. */
    getFeatureUrl?: string;
    /** The template that defines the content to display in the map info window when the user clicks on a feature. */
    infoTemplate?: InfoTemplate;
    /** For "ondemand" mode only. */
    inverseFilter?: boolean;
    /** When true, the XY coordinates should be swapped (this is required for some WFS vendors, versions, and WKIDS). */
    inverseResponse?: boolean;
    /** Specifies the maximum number of features to return in one response. */
    maxFeatures?: number;
    /** The query mode for the WFS layer. */
    mode?: string;
    /** For "ondemand" mode only. */
    nsGeometryFieldName?: string;
    /** The full layer name including the namespace as a prefix. */
    nsLayerName?: string;
    /** When true, more details will be printed to console when the first connection to a WFS server is established. */
    showDetails?: boolean;
    /** URL to the WFS server. */
    url: string;
    /** OGC WFS version number. */
    version?: string;
    /** The well-known ID of the spatial reference used by the WFSLayer. */
    wkid?: string;
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
    setColor(color: string | number[] | any): Color;
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
	    new(color?: string | number[] | any): Color;
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
     * When accessing secure resources via OAuth2 from ArcGIS.com or one of its sub-domains the IdentityManager redirects the user to the ArcGIS.com or Portal for ArcGIS sign-in page.
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
    on(type: "credential-create", listener: (event: { credential: Credential; target: IdentityManagerBase }) => void): Handle;
    /** Fired when all credentials are destroyed. */
    on(type: "credentials-destroy", listener: (event: { target: IdentityManagerBase }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface IdentityManagerBaseConstructor {
      new(): IdentityManagerBase
  }

  /** Defines the Image Coordinate System (ICS) for ImageServices. */
  export class ImageSpatialReference extends SpatialReference {
    /** The full Image Coordinate System, which includes transformations and map spatial reference information specific to each image. */
    ics: any;
    /** The OBJECTID of the image in a mosaic dataset. */
    icsid: number;
    /**
     * Tests whether the input image coordinate system equals the image coordinate system of the instance calling this method.
     * @param inSR The ImageSpatialReference to test the equality against this instance.
     */
    equals(inSR: ImageSpatialReference): boolean;
    /**
     * Converts the ImageSpatialReference instance to a JSON object.
     * @param preserveUrl Indicates whether to preserve the URL in the output JSON object.
     */
    toJson(preserveUrl?: boolean): boolean;
  }
  export interface ImageSpatialReferenceConstructor {
	    /**
	     * Creates an instance of ImageSpatialReference.
	     * @param params Options that may be passed into the constructor.
	     */
	    new(params: ImageSpatialReferenceOptions): ImageSpatialReference;
  }
  /** An InfoTemplate contains a title and content template string used to transform Graphic.attributes into an HTML representation. */
  export class InfoTemplate {
    /** The template for defining how to format the content used in an InfoWindow. */
    content: string | Function;
    /** The template for defining how to format the title used in an InfoWindow. */
    title: string | Function;
    /**
     * Sets the content template.
     * @param template The template for the content.
     */
    setContent(template: string | Function): InfoTemplate;
    /**
     * Sets the title template.
     * @param template The template for the title.
     */
    setTitle(template: string | Function): InfoTemplate;
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
	    new(title: string | Function, content: string | Function): InfoTemplate;
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
    place(value: string | HTMLElement, parentNode: Node): void;
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
    setContent(content: string | any): void;
    /**
     * This method is called by the map when the object is set as its info window.
     * @param map The map object.
     */
    setMap(map: Map): void;
    /**
     * Set the input value as the title for the info window.
     * @param title  In most cases the title will be a string value but the same options are available as for the setContent method.
     */
    setTitle(title: string | any): void;
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

  /** The SnappingManager is used to add snapping capability to the Editor, Measurement Widget,  Draw toolbar and toolbars.Edit toolbar. */
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
  /** This class contains properties referencing default basemaps used in the JS API that allow you to add map services as default basemaps in web applications. */
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
  /** Utility methods related to working with the DOM. */
  export var domUtils: {
    /** Represents the size of the client side window or document at first load. */
    documentBox: any;
    /**
     * Returns the DOM node from HTMLElement or dijit/_WidgetBase.
     * @param target The HTMLElement or dijit/_WidgetBase to retrieve.
     */
    getNode(target: HTMLElement | any): Node;
    /**
     * Hides the HTMLElement or dijit/_WidgetBase.
     * @param target The HTMLElement or dijit/_WidgetBase.
     */
    hide(target: HTMLElement | any): void;
    /**
     * Shows the HTMLElement or dijit/_WidgetBase.
     * @param target The HTMLElement or dijit/_WidgetBase.
     */
    show(target: HTMLElement | any): void;
    /**
     * If the target (HTMLElement or dijit/_WidgetBase) is currently visible, the target is hidden.
     * @param target The HTMLElement or dijit/_WidgetBase.
     */
    toggle(target: HTMLElement | any): void;
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
     * Adds a new attribute or changes the value of an existing attribute on the graphic's DOM node.
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
     * Strips HTML tags from a String or Object.
     * @param value Object or String to be stripped of HTML tags.
     */
    stripTags(value: any | string): any | string;
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
     * Enable snapping on the map when working with the Editor, Measurement widget or the Draw and toolbars.Edit toolbars.
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
    on(type: "layers-add-result", listener: (event: { layers: any[]; target: Map }) => void): Handle;
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
	    new(divId: Node | string, options?: MapOptions): Map;
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
	    /** Units are square decimeters. */
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
    /** Applicable if working with the popup user-login workflow. */
    popupCallbackUrl: string;
    /** The window features passed to window.open(). */
    popupWindowFeatures: string;
    /** The ArcGIS for Portal URL. */
    portalUrl: string;
    /** Indicates whether to display social logins like Google/Facebook. */
    showSocialLogins: boolean;
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
    queryGroups(queryParams?: any): any;
    /**
     * Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalItem objects that match the input query.
     * @param queryParams The input query parameters.
     */
    queryItems(queryParams?: any): any;
    /**
     * Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalUser objects that match the input query.
     * @param queryParams The input query parameters.
     */
    queryUsers(queryParams?: any): any;
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
    owner: string;
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
    queryItems(queryParams?: any): any;
  }
  export interface PortalGroupConstructor {
      new(): PortalGroup
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
  /** Details about the result of a query. */
  export class PortalQueryResult {
    /** The query parameters for the next set of results. */
    nextQueryParams: any;
    /** The query parameters for the first set of results. */
    queryParams: any;
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
    getItems(folderId?: string): any;
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
    createMap(itemIdOrItemInfo: string | any, mapDiv: string, options?: any): any;
    /**
     * Get details about the input ArcGIS.com item.
     * @param itemId The itemId for a publicly shared ArcGIS.com item.
     */
    getItem(itemId: string): any;
    /**
     * Can be used with LayerList widget to get the layers list to be passed into the constructor.
     * @param createMapResponse The object created from the resolved promise returned by createMap().
     */
    getLayerList(createMapResponse: any): any[];
    /**
     * Can be used with dijit.Legend to get the layerInfos list to be passed into the Legend constructor.
     * @param createMapResponse Object returned by .createMap() in the .then() callback.
     */
    getLegendLayers(createMapResponse: any): any[];
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
    /** Finalizes the creation of the widget. */
    startup(): void;
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
	    new(params: AttributeInspectorOptions, srcNodeRef: Node | string): AttributeInspector;
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
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface AttributionConstructor {
	    /**
	     * Creates a new Attribution object.
	     * @param options An object that defines the attribution options.
	     * @param srcNodeRef HTML element where the time slider should be rendered.
	     */
	    new(options: AttributionOptions, srcNodeRef: Node | string): Attribution;
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
    /** Finalizes the creation of the widget. */
    startup(): void;
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
	    new(params: BasemapGalleryOptions, srcNodeRef?: Node | string): BasemapGallery;
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
    /** Object containing the title and thumbnailURL for the image of each basemap. */
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
	    new(params: BasemapToggleOptions, srcNodeRef: Node | string): BasemapToggle;
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
    /** Finalizes the creation of the widget. */
    startup(): void;
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
	    new(params: BookmarksOptions, srcNodeRef: Node | string): Bookmarks;
  }

  /** A widget to assist with managing a renderer used for visualizing features by their class and color. */
  export class ClassedColorSlider extends RendererSlider {
    /** Required: The data map containing renderer information. */
    breakInfos: any;
    /** Optional: Indicates the classification method used to divide the range of values into bins. */
    classificationMethod: string;
    /** Required: Handles identified by their index values within the stops array. */
    handles: number[];
    /** Optional: Represents the histogram data object. */
    histogram: any;
    /** Optional: The width of the histogram in pixels. */
    histogramWidth: boolean;
    /** Read Only. */
    maxValue: number;
    /** Read Only. */
    minValue: number;
    /** Optional: Indicates how data values are normalized. */
    normalizationType: string;
    /** Optional: The handle identified by its index value within the stops array. */
    primaryHandle: number;
    /** Optional: Width of the widget ramp in pixels. */
    rampWidth: number;
    /** Optional: Indicates whether to display handles. */
    showHandles: boolean;
    /** Optional: Indicates whether to display the histogram. */
    showHistogram: boolean;
    /** Optional: Indicates whether to display labels. */
    showLabels: boolean;
    /** Optional: Indicates whether to display tick marks. */
    showTicks: boolean;
    /** Optional: Represents the statistics data object. */
    statistics: any;
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when the ClassedColorSlider widget properties change. */
    on(type: "change", listener: (event: { breakInfos: any; target: ClassedColorSlider }) => void): Handle;
    /** Fires when  minValue or  maxValue of the ClassedColorSlider changes. */
    on(type: "data-value-change", listener: (event: { breakInfos: any; maxValue: number; minValue: number; target: ClassedColorSlider }) => void): Handle;
    /** Fires when a ClassedColorSlider handle is moved. */
    on(type: "handle-value-change", listener: (event: { breakInfos: any; target: ClassedColorSlider }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ClassedColorSliderConstructor {
	    /**
	     * Creates a new ClassedColorSlider widget.
	     * @param params Set of parameters used to specify the ClassedColorSlider widget options.
	     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
	     */
	    new(params: ClassedColorSliderOptions, srcNodeRef: Node | string): ClassedColorSlider;
  }

  /** A widget to assist with managing a renderer for visualizing features by varying classes and size. */
  export class ClassedSizeSlider extends RendererSlider {
    /** Required: The data map containing renderer information. */
    breakInfos: any;
    /** Optional: Indicates the classification method used to divide the range of values into bins. */
    classificationMethod: string;
    /** Required: Handles identified by their index values within the stops array. */
    handles: number[];
    /** Optional: Represents the histogram data object. */
    histogram: any;
    /** Optional: Width of histogram in pixels. */
    histogramWidth: number;
    /** Read Only. */
    maxValue: number;
    /** Read Only. */
    minValue: number;
    /** Optional: Indicates how data values are normalized. */
    normalizationType: string;
    /** Optional: Handle identified by its index value within the stops array. */
    primaryHandle: number;
    /** Optional: Width of the widget ramp in pixels. */
    rampWidth: number;
    /** Optional: Indicates whether to display handles. */
    showHandles: boolean;
    /** Optional: Indicates whether to display the histogram. */
    showHistogram: boolean;
    /** Optional: Indicates whether to display labels. */
    showLabels: boolean;
    /** Optional: Indicates whether to display ticks marks. */
    showTicks: boolean;
    /** Optional: Represents the statistics data object. */
    statistics: any;
    /** Fires when ClassedSizeSlider changes. */
    on(type: "change", listener: (event: { breakInfos: any; target: ClassedSizeSlider }) => void): Handle;
    /** Fires when  minValue or  maxValue of the ClassedSizeSlider changes. */
    on(type: "data-value-change", listener: (event: { breakInfos: any; maxValue: number; minValue: number; target: ClassedSizeSlider }) => void): Handle;
    /** Fires when a ClassedSizeSlider handle is moved. */
    on(type: "handle-value-change", listener: (event: { breakInfos: any; target: ClassedSizeSlider }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ClassedSizeSliderConstructor {
	    /**
	     * Creates a new ClassedSizeSlider widget within the provided DOM node srcNodeRef.
	     * @param params Set of parameters used to specify the ClassedSizeSlider widget options.
	     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
	     */
	    new(params: ClassedSizeSliderOptions, srcNodeRef: Node | string): ClassedSizeSlider;
  }

  /** A widget to assist with managing a renderer for visualizing features based upon colors. */
  export class ColorInfoSlider extends RendererSlider {
    /** The classification method used for the ColorInfoSlider. */
    classificationMethod: string;
    /** Required: The data map containing renderer information. */
    colorInfo: any;
    /** Required: Handles identified by their index values within the stops array. */
    handles: number[];
    /** Optional: Represents the histogram data object. */
    histogram: any;
    /** Optional: Width of histogram in pixels. */
    histogramWidth: number;
    /** Optional: The absolute maximum value of the slider. */
    maxValue: number;
    /** Optional: The absolute minimum value of the slider. */
    minValue: number;
    /** Optional */
    normalizationType: string;
    /** Optional: The handle identified by its index value within the stops array. */
    primaryHandle: number;
    /** Optional: Width of the widget ramp in pixels. */
    rampWidth: number;
    /** Optional: Indicates whether to display handles. */
    showHandles: boolean;
    /** Optional: Indicates whether to display the histogram. */
    showHistogram: boolean;
    /** Optional: Indicates whether to display handles. */
    showLabels: boolean;
    /** Indicates whether to display percentage labels. */
    showRatioLabels: boolean | string;
    /** Optional: Indicates whether to display ticks marks. */
    showTicks: boolean;
    /** Optional: Indicates whether to display a transparent background. */
    showTransparentBackground: boolean;
    /** Optional: Represents a statistics data object. */
    statistics: any;
    /** Optional: Additional options to customize slider. */
    zoomOptions: any;
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when ColorInfoSlider changes. */
    on(type: "change", listener: (event: { colorInfo: any; target: ColorInfoSlider }) => void): Handle;
    /** Fires when  minValue or  maxValue of the ColorInfoSlider changes. */
    on(type: "data-value-change", listener: (event: { colorInfo: any; maxValue: number; minValue: number; target: ColorInfoSlider }) => void): Handle;
    /** Fires when a ColorInfoSlider handle is moved. */
    on(type: "handle-value-change", listener: (event: { colorInfo: any; target: ColorInfoSlider }) => void): Handle;
    /** Fires when the zoom state changes. */
    on(type: "zoomed", listener: (event: { zoomed: boolean; target: ColorInfoSlider }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ColorInfoSliderConstructor {
	    /**
	     * Creates a new ColorInfoSlider widget within the provided DOM node srcNodeRef.
	     * @param params Set of parameters used to specify the ColorInfoSlider widget options.
	     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
	     */
	    new(params: ColorInfoSliderOptions, srcNodeRef: Node | string): ColorInfoSlider;
  }

  /** A widget to assist choosing a color from a color palette. */
  export class ColorPicker {
    /** The selected color. */
    color: Color;
    /** The set of available color options. */
    palette: Color[];
    /** An array of recent colors to show in the recent colors row. */
    recentColors: Color[];
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when the selected color has changed. */
    on(type: "color-change", listener: (event: { target: ColorPicker }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ColorPickerConstructor {
	    /**
	     * Creates a new ColorPicker widget.
	     * @param params Set of parameters used to specify the ColorPicker widget options.
	     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
	     */
	    new(params: ColorPickerOptions, srcNodeRef: Node | string): ColorPicker;
  }

  /** The Directions widget makes it easy to calculate directions between two or more input locations. */
  export class Directions {
    /** Read-only: Get the directions to all the locations along the route. */
    directions: tasks.DirectionsFeatureSet;
    /** Indicates whether the Directions widget adds a stop on each map click. */
    mapClickActive: boolean;
    /** Read-only: When true, the maximum number of stops for the route has been reached. */
    maxStopsReached: boolean;
    /** Read-only: The graphic for the calculated route. */
    mergedRouteGraphic: Graphic;
    /** Routing parameters for the widget. */
    routeParams: tasks.RouteParameters;
    /** Routing task for the widget. */
    routeTask: tasks.RouteTask;
    /** Read-only: The Service Description object returned by the Route REST Endpoint. */
    serviceDescription: any;
    /** Indicates whether the Directions widget will display the map-click-active toggle button. */
    showActivateButton: boolean;
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
    /** Read-only: If Directions Widget runs with Travel Modes enabled, this property returns current Travel Mode name. */
    travelModeName: string;
    /** Deprecated at v3.13. */
    activate(): void;
    /**
     * Add a stop to the directions widget at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index location where the stop should be added.
     */
    addStop(stop: geometry.Point | number[] | string | any, index?: number): any;
    /**
     * Add multiple stops to the directions list starting at the specified location.
     * @param stops An array of points that define the stop locations.
     * @param index The index location where the stops will be added.
     */
    addStops(stops: geometry.Point[] | number[][] | string[] | any[], index?: number): any;
    /**
     * Center the map at the start of the specified route segment.
     * @param index The index of the segment where the map should be centered.
     */
    centerAtSegmentStart(index: number): void;
    /** Remove the route directions from the directions list. */
    clearDirections(): void;
    /** Deprecated at v3.13. */
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
    removeStops(): any;
    /** Resets the directions widget removing any directions, stops and map graphics. */
    reset(): any;
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
    updateStop(stop: geometry.Point | number[] | string | any, index: number): any;
    /**
     * Update multiple stops in the directions widget by specifying an array of stops information.
     * @param stops An array of points that define the stop locations.
     */
    updateStops(stops: geometry.Point[] | number[][] | string[] | any[]): any;
    /**
     * Sets the corresponding stop to point at the user's current location.
     * @param stopIndex Index of the stop that will point to the user's current location.
     */
    useMyCurrentLocation(stopIndex: number): any;
    /** Zoom so that the full route is displayed within the current map extent. */
    zoomToFullRoute(): void;
    /**
     * Zoom to the specified route segment.
     * @param index The index for a route segment.
     */
    zoomToSegment(index: number): void;
    /** Deprecated at v3.13. */
    on(type: "activate", listener: (event: { target: Directions }) => void): Handle;
    /** Deprecated at v3.13. */
    on(type: "deactivate", listener: (event: { target: Directions }) => void): Handle;
    /** Fires when the directions display is reset. */
    on(type: "directions-clear", listener: (event: { target: Directions }) => void): Handle;
    /** Fires when the route service has calculated the route and the directions are ready for display. */
    on(type: "directions-finish", listener: (event: { result: tasks.RouteResult; target: Directions }) => void): Handle;
    /** Fires when the route services starts to calculate the route. */
    on(type: "directions-start", listener: (event: { target: Directions }) => void): Handle;
    /** Fires when the directions widget has fully loaded. */
    on(type: "load", listener: (event: { target: Directions }) => void): Handle;
    /** Fires when the widget starts or stops listening for map clicks. */
    on(type: "map-click-active", listener: (event: { mapClickActive: boolean; target: Directions }) => void): Handle;
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
	    new(options: DirectionsOptions, srcNodeRef: Node | string): Directions;
  }

  /** (Currently in beta)The Elevation Profile widget allows a user to create an elevation profile based on a polyline geometry input parameter or existing features.NOTE: Currently there is a known issue when creating an elevation profile that crosses the international dateline multiple times. */
  export class ElevationProfile {
    /** The measurement unit of the polyline geometry. */
    measureUnits: string;
    /** The polyline input geometry used to create the elevation profile. */
    profileGeometry: geometry.Geometry;
    /** The title of the resulting elevation profile. */
    title: string;
    /** Clears the elevation profile chart. */
    clearProfile(): void;
    /** Destroy the widget. */
    destroy(): void;
    /** Finalizes the creation of the ElevationProfile widget. */
    startup(): void;
    /** Fires when the elevation profile is cleared. */
    on(type: "clear-profile", listener: (event: { target: ElevationProfile }) => void): Handle;
    /** Fires when the widget has fully loaded. */
    on(type: "load", listener: (event: { target: ElevationProfile }) => void): Handle;
    /** Fires when the title of the elevation profile is changed */
    on(type: "title-changed", listener: (event: { target: ElevationProfile }) => void): Handle;
    /** Fires when the elevation profile is updated. */
    on(type: "update-profile", listener: (event: { profileResults: any; target: ElevationProfile }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ElevationProfileConstructor {
	    /**
	     * Create a new ElevationProfile widget using the given DOM node.
	     * @param options See options table below for the full descriptions of the properties needed for this object.
	     * @param srcNode Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(options: ElevationProfileOptions, srcNode: Node | string): ElevationProfile;
  }

  /** Creates an instance of the FeatureTable widget within the provided DOM node. */
  export class FeatureTable {
    /** Read-only: A reference to the column objects and their parameters. */
    columns: any[];
    /** Read-only: Reference to the dataStore used by the dGrid. */
    dataStore: any;
    /** Object defining the date options specifically for formatting date and time editors. */
    dateOptions: any;
    /** Sets the editing state for the FeatureTable. */
    editable: boolean;
    /** Read-only: Number of records displayed in FeatureTable. */
    featureCount: number;
    /** The featureLayer that the table is associated with. */
    featureLayer: layers.FeatureLayer;
    /** An array of objects representing field information. */
    fieldInfos: any[];
    /** Reference to the dGrid. */
    grid: any;
    /** Reference to the 'Options' drop-down menu. */
    gridMenu: any;
    /** Object that can be used to set properties used by the underlying dgrid. */
    gridOptions: any;
    /** Optional columns to hide by default using the dGrid ColumnHider extension. */
    hiddenFields: string[];
    /** Read-only: A reference to the primary key used by the dataStore to differentiate columns. */
    idProperty: string;
    /** When true, the FeatureTable widget has successfully loaded. */
    loaded: boolean;
    /** Reference to the map. */
    map: Map;
    /** Adds additional functional menu items for the 'Options' drop-down menu. */
    menuFunctions: any[];
    /** Attribute fields to include in the FeatureTable. */
    outFields: string[];
    /** Read-only: A comma delimited array of ObjectIds for the features selected in the FeatureTable. */
    selectedRowIds: number[];
    /** Read-only: Each element in the array is an object that contains name-value pair of fields and field values associated with the selected rows. */
    selectedRows: any[];
    /** Displays the data type of the field right under the field label in the column header. */
    showDataTypes: boolean;
    /** Displays or hides the FeatureTable header. */
    showGridHeader: boolean;
    /** Displays or hides 'Options' drop-down menu of the FeatureTable. */
    showGridMenu: boolean;
    /** Enables an interaction between the map and the feature table. */
    syncSelection: boolean;
    /** Enables pans to selected features on the map when the table in 'sync selection' mode. */
    zoomToSelection: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when the grid column is resized. */
    on(type: "column-resize", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fires when a column is hidden or shown via 'Options' drop-down menu. */
    on(type: "column-state-change", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fires when grid editor field loses focus after being changed. */
    on(type: "data-change", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fires when grid editor is hidden. */
    on(type: "editor-hide", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fires when grid editor is shown. */
    on(type: "editor-show", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fires when editing is complete. */
    on(type: "edits-complete", listener: (event: { adds: layers.FeatureEditResult[]; deletes: layers.FeatureEditResult[]; updates: layers.FeatureEditResult[]; target: FeatureTable }) => void): Handle;
    /** Fires when an error occurs in the grid. */
    on(type: "error", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fires when grid is filtered. */
    on(type: "filter", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fires when the FeatureTable is loaded. */
    on(type: "load", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fires when the grid is refreshed. */
    on(type: "refresh", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fires when a row is deselected. */
    on(type: "row-deselect", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fires when a row is selected. */
    on(type: "row-select", listener: (event: { target: FeatureTable }) => void): Handle;
    /** Fires when the statistics dialog box shows the calculated statistics on a column with numeric data. */
    on(type: "show-statistics", listener: (event: { statistics: any; target: FeatureTable }) => void): Handle;
    /** Fires when a column is sorted. */
    on(type: "sort", listener: (event: { target: FeatureTable }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface FeatureTableConstructor {
	    /**
	     * Creates an instance of the FeatureTable widget within the provided DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: FeatureTableOptions, srcNodeRef: Node | string): FeatureTable;
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
	    new(params: GalleryOptions, srcNodeRef: Node | string): Gallery;
  }

  /** The gauge widget provides a streamlined way to create a dashboard-like interface and display data on a semi-circular gauge. */
  export class Gauge {
    /** Destroy the gauge. */
    destroy(): void;
    /**
     * Get the value of the property from the Gauge.
     * @param name Property to get value.
     */
    get(name: string): string | Graphic | number;
    /**
     * Set the value of a property from the Gauge.
     * @param name Property to set value.
     * @param value Value to set.
     */
    set(name: string, value: string | Graphic | number): Gauge;
    /** Finalizes the creation of the gauge. */
    startup(): void;
  }
  export interface GaugeConstructor {
	    /**
	     * Create a new Gauge object.
	     * @param params See options list for parameters.
	     * @param srcNodeRef HTML element where the  gauge should be rendered.
	     */
	    new(params: GaugeOptions, srcNodeRef: Node | string): Gauge;
  }

  /** Starting with version 3.13, the Search Widget supersedes the Geocoder Widget and is deprecated. */
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
    /** Specify a graphicsLayer to use when highlightLocation is true. */
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
	    new(params: GeocoderOptions, srcNodeRef: Node | string): Geocoder;
  }

  /** A widget to assist in obtaining values for managing and setting properties on a HeatmapRenderer. */
  export class HeatmapSlider extends RendererSlider {
    /** Required. */
    colorStops: any;
    /** Required. */
    handles: number[];
    /** Optional, absolute maximum value of the slider.NOTE: This value overrides statistics' max property. */
    maxValue: number;
    /** Optional, absolute minimum value of the slider.NOTE: This value overrides statistics' min property. */
    minValue: number;
    /** Optional */
    rampWidth: number;
    /** Property for showing handles. */
    showHandles: boolean;
    /** Property for showing labels. */
    showLabels: boolean;
    /** Property for showing ticks. */
    showTicks: boolean;
    /** Fires when HeatmapSlider changes. */
    on(type: "change", listener: (event: { colorStops: any; target: HeatmapSlider }) => void): Handle;
    /** Fires when HeatmapSlider handle is moved. */
    on(type: "handle-value-change", listener: (event: { colorStops: any; target: HeatmapSlider }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface HeatmapSliderConstructor {
	    /**
	     * Creates a new HeatmapSlider widget within the provided DOM node srcNodeRef.
	     * @param params Set of parameters used to specify the HeatmapSlider widget options.
	     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
	     */
	    new(params: HeatmapSliderOptions, srcNodeRef: Node | string): HeatmapSlider;
  }

  /** The HistogramTimeSlider dijit provides a histogram chart representation of data for time-enabled layers on a map. */
  export class HistogramTimeSlider {
    /** Set related objects as null and hide the widget. */
    destroy(): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
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
	    new(params: HistogramTimeSliderOptions, srcNodeRef: Node | string): HistogramTimeSlider;
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
    home(): any;
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
	    new(params: HomeButtonOptions, srcNodeRef: Node | string): HomeButton;
  }

  /** A form widget that allows one to select a value with a horizontally draggable handle. */
  export class HorizontalSlider {
    /** Show increment/decrement buttons at the ends of the slider. */
    showButtons: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface HorizontalSliderConstructor {
	    /**
	     * Creates a new HorizontalSlider widget.
	     * @param params Set of parameters used to specify the HorizontalSlider widget options.
	     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
	     */
	    new(params: HorizontalSliderOptions, srcNodeRef: Node | string): HorizontalSlider;
  }

  /** This widget allows you to perform measurements on image services. */
  export class ImageServiceMeasure {
    /** symbols.Symbol to be used when drawing a polygon or extent. */
    fillSymbol: symbols.SimpleFillSymbol;
    /** symbols.Symbol to be used when drawing a line. */
    lineSymbol: symbols.SimpleLineSymbol;
    /** symbols.Symbol to be used when drawing a point. */
    markerSymbol: symbols.SimpleMarkerSymbol;
    /** The instance of toolbars.ImageServiceMeasureTool associated with this widget. */
    measureToolbar: toolbars.ImageServiceMeasureTool;
  }
  export interface ImageServiceMeasureConstructor {
	    /**
	     * Creates an instance of the ImageServiceMeasure widget.
	     * @param params An Object containing constructor options.
	     */
	    new(params: ImageServiceMeasureOptions): ImageServiceMeasure;
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
    /** Finalizes the creation of the widget. */
    startup(): void;
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
	    new(params: any, srcNodeRef: Node | string): InfoWindow;
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
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when an infoWindow is hidden. */
    on(type: "hide", listener: (event: { target: InfoWindowLite }) => void): Handle;
    /** Fires when an InfoWindowLite is displayed. */
    on(type: "show", listener: (event: { target: InfoWindowLite }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface InfoWindowLiteConstructor {
      new(): InfoWindowLite
  }

  /** (Currently in beta) The LayerList widget provides a list of layers that allows the toggling of layer visibility. */
  export class LayerList {
    /** An array of operational layers. */
    layers: any[];
    /** Indicates whether the widget has been loaded. */
    loaded: boolean;
    /** Reference to the map. */
    map: Map;
    /** Indicates whether to remove underscores from the layer title */
    removeUnderscores: boolean;
    /** Indicates whether to display a legend for the layer items. */
    showLegend: boolean;
    /** Indicates whether to display the opacity slider. */
    showOpacitySlider: boolean;
    /** Indicates whether to show sublayers in the list of layers. */
    showSubLayers: boolean;
    /** CSS Class for uniquely styling the widget. */
    theme: string;
    /** Indicates whether to show the widget. */
    visible: boolean;
    /** Destroy the LayerList widget. */
    destroy(): void;
    /** Reloads all layers and properties that may have changed. */
    refresh(): void;
    /** Finalizes the creation of the LayerList widget. */
    startup(): void;
    /** Fired when the LayerList widget has fully loaded. */
    on(type: "load", listener: (event: { target: LayerList }) => void): Handle;
    /** Fired when refresh() is called on the widget. */
    on(type: "refresh", listener: (event: { target: LayerList }) => void): Handle;
    /** Fired when the layer is toggled on/off within the widget. */
    on(type: "toggle", listener: (event: { layerIndex: number; subLayerIndex: number; visible: boolean; target: LayerList }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface LayerListConstructor {
	    /**
	     * Create a new LayerList widget using the given DOM node.
	     * @param options Set of options used to specify LayerList options.
	     * @param srcNode Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(options: LayerListOptions, srcNode: Node | string): LayerList;
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
	    new(params: LayerSwipeOptions, srcNodeRef: Node | string): LayerSwipe;
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
	    new(params: LegendOptions, srcNodeRef: Node | string): Legend;
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
	    new(params: LocateButtonOptions, srcNodeRef: Node | string): LocateButton;
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
    measure(geometry: geometry.Point | geometry.Polyline | geometry.Polygon): void;
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
    /** Fires any time the mouse pointer moves while doing a distance measurement. */
    on(type: "measure", listener: (event: { geometry: geometry.Geometry; segmentLength: number; toolName: string; unitName: string; values: number; target: Measurement }) => void): Handle;
    /** Fired when the measurement is complete. */
    on(type: "measure-end", listener: (event: { geometry: geometry.Geometry; toolName: string; unitName: string; values: number[] | number; target: Measurement }) => void): Handle;
    /** Fires when a measurement operation begins (single-click). */
    on(type: "measure-start", listener: (event: { toolName: string; unitName: string; target: Measurement }) => void): Handle;
    /** Fires when the primary tool is changed. */
    on(type: "tool-change", listener: (event: { previousToolName: string; toolName: string; unitName: string; target: Measurement }) => void): Handle;
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
	    new(params: MeasurementOptions, srcNodeRef: Node | string): Measurement;
  }

  /** (Currently in beta) The oblique viewer widget, displays images in their native coordinate system using an Image Coordinate System (ICS). */
  export class ObliqueViewer {
    /** Indicates the current azimuth angle of the viewer. */
    azimuthAngle: number;
    /** Image service field that denotes the sensor azimuth value for a record. */
    azimuthField: string;
    /** Indicates the tolerance value applied when selecting images for a given azimuth angle value. */
    azimuthTolerance: number;
    /** Image service field that denotes the sensor elevation value for a record. */
    elevationField: string;
    /** Elevation value between 0 and 90 that differentiates an image as oblique or nadir. */
    elevationThreshold: number;
    /** Subset of records, filtered based on current azimuth angle. */
    filteredRecords: any[];
    /** Image service layer to be used as source for oblique images. */
    imageServiceLayer: layers.ArcGISImageServiceLayer;
    /** Indicates whether current view is nadir. */
    isNadir: boolean;
    /** Map object associated with the widget. */
    map: Map;
    /** When true, the widget doesn't refresh itself with new oblique records when the map's extent changes. */
    noQueryOnExtentChange: boolean;
    /** Raster info fields to be queried and displayed in the raster list. */
    rasterInfoFields: any[];
    /** When true, the list is populated on data refresh. */
    rasterListRefresh: boolean;
    /** Oblique image data that is currently being used by the viewer. */
    records: any[];
    /** Object containing additional information about the raster. */
    selectedRaster: any;
    /** Id of the raster currently being displayed. */
    selectedRasterId: number;
    /** When true, thumbnail images for records are displayed in the list. */
    showThumbnail: boolean;
    /**
     * Queries and displays the best image in a specific direction.
     * @param geometry The specified input geometry needed for querying for the best image in a given azimuth direction.
     */
    locate(geometry: geometry.Geometry): void;
    /**
     * Projects the input geometry to the specified spatial reference.
     * @param geometry The geometry to project.
     * @param outSpatialReference The spatial reference to project the geometry to.
     */
    projectGeometry(geometry: geometry.Geometry, outSpatialReference: SpatialReference): any;
    /**
     * Performs a query on the image service for oblique images covering the input geometry.
     * @param geometry The input geometry to use for the search.
     */
    search(geometry: geometry.Geometry): any;
    /**
     * Sets the records and extent on the viewer.
     * @param records An array of raster data objects.
     * @param extent The extent to set the viewer to.
     */
    setData(records: any[], extent: geometry.Extent): void;
    /**
     * Projects the given extent to the map's spatial reference and sets the extent.
     * @param extent The extent to project the map's spatial reference to.
     */
    setExtent(extent: geometry.Extent): any;
    /**
     * Sets the input image (based on the image ID) to the given extent.
     * @param id The ID of the raster image.
     * @param extent The extent to set the raster image to.
     */
    setImage(id: number, extent: geometry.Extent): void;
    /** Sets the map extent to the currently selected image. */
    zoomToSelectedImage(): void;
    /** Fires when the azimuth is changed. */
    on(type: "azimuth-change", listener: (event: { azimuth: number; target: ObliqueViewer }) => void): Handle;
    /** Fires when the selected raster is changed. */
    on(type: "raster-select", listener: (event: { selectedRasterId: number; target: ObliqueViewer }) => void): Handle;
    /** Fires when the viewer records are refreshed. */
    on(type: "records-refresh", listener: (event: { filteredRecords: any[]; records: any[]; target: ObliqueViewer }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ObliqueViewerConstructor {
	    /**
	     * Creates an instance of the ObliqueViewer widget.
	     * @param params Constructor options.
	     */
	    new(params: ObliqueViewerOptions): ObliqueViewer;
  }

  /** A widget to assist with managing opacity with a renderer. */
  export class OpacitySlider extends RendererSlider {
    /** Required: Handles identified by their index values within the stops array. */
    handles: number[];
    /** Optional: Represents the histogram data object. */
    histogram: any;
    /** Optional: Width of histogram in pixels. */
    histogramWidth: number;
    /** Optional: The absolute maximum value of the slider. */
    maxValue: number;
    /** Optional: The absolute minimum value of the slider. */
    minValue: number;
    /** Required: The data map containing renderer information. */
    opacityInfo: any;
    /** Optional: The handle identified by its index value within the stops array. */
    primaryHandle: number;
    /** Optional: Represents the width of the SVG ramp in pixels. */
    rampWidth: number;
    /** Optional: Indicates whether to display slider handles. */
    showHandles: boolean;
    /** Optional: Indicates whether to display the histogram. */
    showHistogram: boolean;
    /** Optional: Indicates whether to display slider labels. */
    showLabels: boolean;
    /** Optional: Indicates whether to display slider tick marks. */
    showTicks: boolean;
    /** Optional: Indicates whether to display the transparent background. */
    showTransparentBackground: boolean;
    /** Optional: Represents a statistics data object. */
    statistics: any;
    /** Optional: Additional options to customize slider. */
    zoomOptions: any;
    /** Fires when OpacitySlider changes. */
    on(type: "change", listener: (event: { opacityInfo: any; target: OpacitySlider }) => void): Handle;
    /** Fires when  minValue or  maxValue of the OpacitySlider changes. */
    on(type: "data-value-change", listener: (event: { maxValue: number; minValue: number; opacityInfo: any; target: OpacitySlider }) => void): Handle;
    /** Fires when an OpacitySlider handle is moved. */
    on(type: "handle-value-change", listener: (event: { opacityInfo: any; target: OpacitySlider }) => void): Handle;
    /** Fires when the zoom state changes. */
    on(type: "zoomed", listener: (event: { zoomed: boolean; target: OpacitySlider }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface OpacitySliderConstructor {
	    /**
	     * Creates a new OpacitySlider widget within the provided DOM node srcNodeRef.
	     * @param params Set of parameters used to specify the OpacitySlider widget options.
	     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
	     */
	    new(params: OpacitySliderOptions, srcNodeRef: Node | string): OpacitySlider;
  }

  /** The OverviewMap widget displays the current extent of the map within the context of a larger area. */
  export class OverviewMap {
    /** The Map instance displayed in the OverviewMap widget's container. */
    overviewMap: Map;
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
	    new(params: OverviewMapOptions, srcNodeRef?: Node | string): OverviewMap;
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
    setContent(content: string | Function): void;
    /**
     * Associate an array of features or an array of deferreds that return features with the info window.
     * @param features An array of features or deferreds.
     */
    setFeatures(features: Graphic[] | any[]): void;
    /**
     * Sets the info window title.
     * @param title The text for the title.
     */
    setTitle(title: string | Function): void;
    /**
     * Display the info window at the specified location.
     * @param location An instance of geometry.Point that represents the geographic location to display the popup.
     * @param options See the object specifications table below for the structure of the  options  object.
     */
    show(location: geometry.Point, options?: any): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
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
	    new(options: PopupOptions, srcNodeRef: Node | string): Popup;
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
    setContent(content: string | Function): void;
    /**
     * Associate an array of features or an array of deferreds that return features with the info window.
     * @param features An array of features or deferreds.
     */
    setFeatures(features: Graphic[] | any[]): void;
    /**
     * Sets the info window title.
     * @param title The text for the title.
     */
    setTitle(title: string | Function): void;
    /**
     * Display the info window at the specified location.
     * @param location An instance of geometry.Point that represents the geographic location to display the popup.
     */
    show(location: geometry.Point): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
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
	    new(options: PopupMobileOptions, srcNodeRef: Node | string): PopupMobile;
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
	    new(params: PrintOptions, srcNodeRef: Node | string): Print;
  }

  /** The base slider class for all Subclass Slider widgets listed below. */
  export class RendererSlider {
    /** Absolute maximum value allowed by the slider. */
    maximum: number;
    /** Top label for the slider. */
    maxLabel: string;
    /** Absolute minimum value allowed by the slider. */
    minimum: number;
    /** Bottom label for the slider. */
    minLabel: string;
    /** Accuracy of the data (related to rounding). */
    precision: number;
    /** Toggle for showing the black handle bars. */
    showHandles: boolean;
    /** Flexible toggle for showing labels e.g. */
    showLabels: boolean | string[];
    /** Toggle for showing the horizontal line indicators from the center of the handle. */
    showTicks: boolean;
    /** Required: Handle positions represented as numbers that fall between minimum and maximum. */
    values: number[];
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when the user actively slides the handle. */
    on(type: "slide", listener: (event: { values: number[]; target: RendererSlider }) => void): Handle;
    /** Fires when the user lets go of the handle. */
    on(type: "stop", listener: (event: { values: number[]; target: RendererSlider }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface RendererSliderConstructor {
	    /**
	     * Creates a new RendererSlider widget.
	     * @param params Set of parameters used to specify the RendererSlider widget options.
	     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
	     */
	    new(params: RendererSliderOptions, srcNodeRef: Node | string): RendererSlider;
  }

  /** The Scalebar widget displays a scalebar on the map or in a specified HTML node. */
  export class Scalebar {
    /** Destroy the scalebar. */
    destroy(): void;
    /** Hide the scalebar dijit. */
    hide(): void;
    /** Set the scalebar's visibility to true. */
    show(): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface ScalebarConstructor {
	    /**
	     * Creates a new Scalebar dijit.
	     * @param params Parameters used to configure the widget.
	     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(params: ScalebarOptions, srcNodeRef?: Node | string): Scalebar;
  }

  /** The Search widget provides a way to perform search capabilities based on locator service(s) and/or map/feature service feature layer(s). */
  export class Search {
    /** Read-only property of the source object currently selected. */
    activeSource: any;
    /** The currently selected source. */
    activeSourceIndex: number;
    /** Indicates whether to automatically add all the feature layers from the map. */
    addLayersFromMap: boolean;
    /** This is the default value used as a hint for input text when searching on multiple sources. */
    allPlaceholder: string;
    /** Indicates whether to automatically navigate to the selected result. */
    autoNavigate: boolean;
    /** Indicates whether to automatically select the first geocoded result. */
    autoSelect: boolean;
    /** (Read-only), the default source used for the Search widget. */
    defaultSource: any;
    /** Indicates whether to enable an option to collapse/expand the search into a button. */
    enableButtonMode: boolean;
    /** Show the selected feature on the map using a default symbol determined by the source's geometry type. */
    enableHighlight: boolean;
    /** Indicates whether to display the infoWindow on feature click. */
    enableInfoWindow: boolean;
    /** Indicates whether to enable showing a label for the geometry. */
    enableLabel: boolean;
    /** Indicates whether to display the option to search "All" sources. */
    enableSearchingAll: boolean;
    /** Indicates whether to enable the menu for selecting different sources. */
    enableSourcesMenu: boolean;
    /** Enable suggestions for the widget. */
    enableSuggestions: boolean;
    /** Indicates whether to display suggest results. */
    enableSuggestionsMenu: boolean;
    /** Indicates whether to set the state of the enableButtonMode to expanded (true) or collapsed (false). */
    expanded: boolean;
    /** This is the specified graphicsLayer to use for the highlightGraphic and labelGraphic instead of map.graphics. */
    graphicsLayer: layers.Layer;
    /** Read-only property indicating the highlighted location graphic. */
    highlightGraphic: Graphic;
    /** A customized infoTemplate for the selected feature. */
    infoTemplate: InfoTemplate;
    /** Read-only graphic property for the text label. */
    labelGraphic: Graphic;
    /** The text symbol for the label graphic. */
    labelSymbol: symbols.TextSymbol;
    /** Read-only property indicating whether the widget is loaded. */
    loaded: boolean;
    /** The default distance specified in meters used to reverse geocode (if not specified by source). */
    locationToAddressDistance: number;
    /** Reference to the map. */
    map: Map;
    /** The default maximum number of results returned by the widget if not specified by source. */
    maxResults: number;
    /** The default maximum number of suggestions returned by the widget if not specified by source. */
    maxSuggestions: number;
    /** The default minimum number of characters needed for the search if not specified by source. */
    minCharacters: number;
    /** Read-only property that returns an array of current results from the search. */
    searchResults: any[];
    /** Indicates whether to show the infoWindow when a result is selected. */
    showInfoWindowOnSelect: boolean;
    /** An array of source objects used to find search results. */
    sources: any[];
    /** The millisecond delay after keyup and before making a suggest network request. */
    suggestionDelay: number;
    /** Read-only property that returns an array of current results from the suggest. */
    suggestResults: any[];
    /** The CSS class selector used to uniquely style the widget. */
    theme: string;
    /** The current value of the search box input text string. */
    value: string;
    /** Indicate whether to show the widget. */
    visible: boolean;
    /** If the result does not have an associated extent, specify this number to use as the zoom scale for the result. */
    zoomScale: number;
    /** Unfocus the widget's text input. */
    blur(): void;
    /** Clears the current value, search results, suggest results, graphic, and/or graphics layer. */
    clear(): void;
    /** Closes the widget from button mode. */
    collapse(): void;
    /** Destroys the Search widget. */
    destroy(): void;
    /** Opens the widget from button mode. */
    expand(): void;
    /** Brings focus to the widget's text input. */
    focus(): void;
    /**
     * Get the value of the property from the Search widget.
     * @param name String value indicating the property to get.
     */
    get(name: string): any | boolean | layers.Layer | Graphic | InfoTemplate | number | symbols.TextSymbol | Map | any[] | string;
    /** Hides the Search widget. */
    hide(): void;
    /**
     * Depending on the sources specified, search() queries the feature layer(s) and/or performs address matching using any specified Locator(s) and returns any applicable results.
     * @param value This value can be a string, geometry, suggest candidate object, or an array of [latitude,longitude].
     */
    search(value?: string | geometry.Geometry | any | number[]): any;
    /**
     * Selects a result.
     * @param value The result object to select.
     */
    select(value: any): void;
    /**
     * Sets the value of a non "read-only" property from the widget.
     * @param name The string value to set.
     * @param value The value to set the specified property to.
     */
    set(name: string, value: any | boolean | layers.Layer | Graphic | InfoTemplate | number | symbols.TextSymbol | Map | any[] | string): void;
    /** Show the Search widget. */
    show(): void;
    /** Finalizes the creation of the Search widget. */
    startup(): void;
    /**
     * Performs a suggest() request on the active tasks.Locator or feature layer.
     * @param value The string value used to suggest() on an active locator or feature layer.
     */
    suggest(value?: string): any;
    /** Fired when the widget's text input loses focus. */
    on(type: "blur", listener: (event: { target: Search }) => void): Handle;
    /** Fired when a result is cleared from the input box or a new result is selected. */
    on(type: "clear-search", listener: (event: { target: Search }) => void): Handle;
    /** Fired when the widget's text input sets focus. */
    on(type: "focus", listener: (event: { target: Search }) => void): Handle;
    /** Fired when the search widget has fully loaded. */
    on(type: "load", listener: (event: { target: Search }) => void): Handle;
    /** Fires when the search method is called and returns its results. */
    on(type: "search-results", listener: (event: { activeSourceIndex: number; errors: Error[]; numErrors: number; numResults: number; results: any[]; value: string; target: Search }) => void): Handle;
    /** Fired when a search result is selected. */
    on(type: "select-result", listener: (event: { result: any; source: any; sourceIndex: number; target: Search }) => void): Handle;
    /** Fired when the suggest method is called and returns its results. */
    on(type: "suggest-results", listener: (event: { activeSourceIndex: number; errors: Error[]; numErrors: number; numResults: number; results: any[]; value: string; target: Search }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface SearchConstructor {
	    /**
	     * Create a new Search widget using the given DOM node.
	     * @param options Set of options used to specify Search options.
	     * @param srcNode Reference or id of the HTML element where the widget should be rendered.
	     */
	    new(options: SearchOptions, srcNode: Node | string): Search;
  }

  /** A widget to assist with managing size with a renderer. */
  export class SizeInfoSlider extends RendererSlider {
    /** Optional, the classification method used for the SizeInfoSlider. */
    classificationMethod: string;
    /** Required: Handles identified by their index values within the stops array. */
    handles: number[];
    /** Optional: Represents the histogram data object. */
    histogram: any;
    /** Optional: Width of the histogram in pixels. */
    histogramWidth: number;
    /** Optional: The absolute maximum value of the slider. */
    maxValue: number;
    /** Optional: The absolute minimum value of the slider. */
    minValue: number;
    /** Optional, indicates how data values are normalized. */
    normalizationType: string;
    /** Optional: The handle identified by its index value within the stops array. */
    primaryHandle: number;
    /** Optional: Represents the width of the SVG ramp in pixels. */
    rampWidth: number;
    /** Optional: Indicates whether to display slider handles. */
    showHandles: boolean;
    /** Optional: Indicates whether to display the histogram. */
    showHistogram: boolean;
    /** Optional:  Indicates whether to display the slider labels. */
    showLabels: boolean;
    /** Optional: Indicates whether to display the slider tick marks. */
    showTicks: boolean;
    /** Required: Defines the size of the symbol where feature size is proportional to data value. */
    sizeInfo: any;
    /** Optional: Represents the statistics data object. */
    statistics: any;
    /** Required: The symbols.SimpleLineSymbol or symbols.SimpleMarkerSymbol used with the widget. */
    symbol: symbols.SimpleMarkerSymbol | symbols.SimpleLineSymbol;
    /** Optional: Additional options to customize slider. */
    zoomOptions: any;
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when the SizeInfoSlider properties change. */
    on(type: "change", listener: (event: { sizeInfo: any; target: SizeInfoSlider }) => void): Handle;
    /** Fires when  minValue or  maxValue of the SizeInfoSlider changes. */
    on(type: "data-value-change", listener: (event: { maxValue: number; minValue: number; sizeInfo: any; target: SizeInfoSlider }) => void): Handle;
    /** Fires when a SizeInfoSlider handle is moved. */
    on(type: "handle-value-change", listener: (event: { sizeInfo: any; target: SizeInfoSlider }) => void): Handle;
    /** Fires when the zoom state changes. */
    on(type: "zoomed", listener: (event: { zoomed: boolean; target: SizeInfoSlider }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface SizeInfoSliderConstructor {
	    /**
	     * Creates a new SizeInfoSlider widget.
	     * @param params Set of parameters used to specify the SizeInfoSlider widget options.
	     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
	     */
	    new(params: SizeInfoSliderOptions, srcNodeRef: Node | string): SizeInfoSlider;
  }

  /** A widget that assist with applying properties to Symbols. */
  export class SymbolStyler {
    /** Read-only: Returns the name of the currently active tab. */
    activeTab: string;
    /**
     * Sets the symbol to edit.
     * @param symbol symbols.Symbol to edit.
     * @param options Styling options.
     */
    edit(symbol: symbols.Symbol, options: any): void;
    /** Returns the current style. */
    getStyle(): any;
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Saves the recent fill and outline colors. */
    storeColors(): void;
  }
  export interface SymbolStylerConstructor {
	    /**
	     * Creates a new SymbolStyler widget.
	     * @param params Set of parameters used to specify the SymbolStyler widget options.
	     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
	     */
	    new(params: SymbolStylerOptions, srcNodeRef: Node | string): SymbolStyler;
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
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when the next button is clicked or TimeSlider.next() method is invoked. */
    on(type: "next", listener: (event: { timeExtent: TimeExtent; target: TimeSlider }) => void): Handle;
    /** Fires when the pause button is clicked or TImeSlider.pause() method is invoked. */
    on(type: "pause", listener: (event: { timeExtent: TimeExtent; target: TimeSlider }) => void): Handle;
    /** Fires once when the play button is clicked or Timeslider.play() method is invoked. */
    on(type: "play", listener: (event: { timeExtent: TimeExtent; target: TimeSlider }) => void): Handle;
    /** Fires when the previous button is clicked or TimeSlider.previous() is invoked. */
    on(type: "previous", listener: (event: { timeExtent: TimeExtent; target: TimeSlider }) => void): Handle;
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
	    new(params: TimeSliderOptions, srcNodeRef: Node | string): TimeSlider;
  }

  /** A widget that sets the displayed visible scale values. */
  export class VisibleScaleRangeSlider {
    /** Setting the layer will update the suggested scale range, minScale and maxScale. */
    layer: layers.Layer;
    /** Setting this property will update the slider's minimum/maximum values and current scale indicator. */
    map: Map;
    /** Read-only: The maxScale bound in the slider range */
    maximum: number;
    /** The current maxScale value. */
    maxScale: number;
    /** Read-only: The minScale bound in the slider range. */
    minimum: number;
    /** The current minScale value. */
    minScale: number;
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Dispatched whenever minScale or maxScale changes. */
    on(type: "scale-range-change", listener: (event: { maxScale: number; minScale: number; target: VisibleScaleRangeSlider }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface VisibleScaleRangeSliderConstructor {
	    /**
	     * Creates a new VisibleScaleRangeSlider widget.
	     * @param params Set of parameters used to specify the VisibleScaleRangeSlider widget options.
	     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
	     */
	    new(params: VisibleScaleRangeSliderOptions, srcNodeRef: Node | string): VisibleScaleRangeSlider;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** An array of attribute field names and statistic types that you would like to aggregate for all points within each polygon. */
    summaryFields: string[];
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface AggregatePointsConstructor {
	    /**
	     * Creates a new AggregatePoints dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: AggregatePointsOptions, srcNodeRef: Node | string): AggregatePoints;
  }

  /** The AnalysisBase widget is the base class for all other widgets under esri/dijit/analysis. */
  export class AnalysisBase {
    /** The URL to the analysis service, for example "http://analysis.arcgis.com/arcgis/rest/services/tasks/GPServer". */
    analysisGpServer: string;
    /** Sets the selected folder of the select folder dropdown, based on the provided folderId, when showSelectFolder is true. */
    folderId: string;
    /** Sets the selected folder of the select folder dropdown, based on the provided folderName, when showSelectFolder is true. */
    folderName: string;
    /** The self response of the Portal. */
    portalSelf: any;
    /** The URL to the ArcGIS.com site or in-house portal where the GP server is hosted, for example "http://www.arcgis.com". */
    portalUrl: string;
    /** When true, adds an option to the UI that allows users to choose ready to use analysis layers from the Living Atlas Analysis Layers. */
    showReadyToUseLayers: boolean;
    /** Overrides the default widget title with a custom title. */
    title: string;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface CalculateDensityConstructor {
	    /**
	     * Creates a new CalculateDensity dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node | string): CalculateDensity;
  }

  /** Choose Best Facilities allows you to choose the best locations for facilities. */
  export class ChooseBestFacilities extends AnalysisBase {
    /** The URL to the analysis service, for example "http://analysis.arcgis.com/arcgis/rest/services/tasks/GPServer". */
    analysisGpServer: string;
    /** The number of facilities to choose when allocating demand locations. */
    candidateCount: number;
    /** This specifies how much demand every facility in the candidateFacilitiesLayer is capable of supplying. */
    candidateFacilitiesCapacity: string;
    /** String value indicating the field name on the candidateFacilitiesLayer  representing how much demand each facility in the candidatesFacilitiesLayer is capable of supplying. */
    candidateFacilitiesCapacityField: string;
    /** A point layer specifying one or more locations that act as facilities by providing some kind of service. */
    candidateFacilitiesLayer: layers.FeatureLayer;
    /** The amount of demand available at every demand locations. */
    demand: number;
    /** String value indicating the field name on the demandLocationLayer  representing the amount of demand available at each demand location. */
    demandField: string;
    /** A point layer specifying the locations that have demand for facilities. */
    demandLocationLayer: layers.FeatureLayer;
    /** Array of point layers to be used for choosing the demandLocationLayer. */
    demandLocationLayers: layers.FeatureLayer[];
    /** When true, Travel Modes (Driving Time) is enabled for the inputLayer with the point geometries (esriGeometryPoint). */
    enableTravelModes: boolean;
    /** Array of point layers used for setting the required facilities layer and candidate facilities layer. */
    featureLayers: layers.FeatureLayer[];
    /** Sets the selected folder of the select folder dropdown. */
    folderId: string;
    /** Sets the selected folder of the select folder dropdown. */
    folderName: string;
    /** Reference to the map. */
    map: Map;
    /** The maximum travel time or distance allowed between a demand location and its allocated facility. */
    maxTravelRange: number;
    /** String value indicating the field name on the demandLocationLayer specifying the maximum travel time or distance allowed between a demand location and its allocated facility. */
    maxTravelRangeField: string;
    /** The name of the output layer to be displayed in the result layer  nameinputbox. */
    outputLayerName: string;
    /** The percentage of the total demand that you want the chosen and required facilities to capture. */
    percentDemandCoverage: number;
    /** The URL to the ArcGIS organization or Portal site where the GP server is hosted. */
    portalUrl: string;
    /** Specify how much demand every facility in the requiredFacilitiesLayer is capable of supplying. */
    requiredFacilitiesCapacity: number;
    /** A field on the requiredFacilitiesLayer representing how much demand each facility in this layer is capable of supplying. */
    requiredFacilitiesCapacityField: string;
    /** A point layer specifying one or more locations that act as facilities by providing some kind of service. */
    requiredFacilitiesLayer: layers.FeatureLayer;
    /** Indicates whether to return the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** Indicates whether the "choose extent checkbox" is displayed. */
    showChooseExtent: boolean;
    /** Indicates whether to show the credit options. */
    showCredits: boolean;
    /** Indicates whether the help links are displayed. */
    showHelp: boolean;
    /** Indicates whether to add an option to the UI that allows users to choose ready-to-use analysis layers from the Living Atlas Analysis Layers. */
    showReadyToUseLayers: boolean;
    /** Indicates whether to display a dropdown menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** Indicates whether the select folder dropdown will be displayed. */
    showSelectFolder: boolean;
    /** The default widget title with a custom title. */
    title: string;
  }
  export interface ChooseBestFacilitiesConstructor {
	    /**
	     * Creates a new ChooseBestFacilities dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: ChooseBestFacilitiesOptions, srcNodeRef: Node | string): ChooseBestFacilities;
  }

  /** Measure the travel time or distance between pairs of points. */
  export class ConnectOriginsToDestinations extends AnalysisBase {
    /** The linear unit used with the distance value(s). */
    distanceDefaultUnits: string;
    /** When true, Travel Modes (Driving Distance, Driving Time) are enabled for analysisLayer with point geometries. */
    enableTravelModes: boolean;
    /** An array of feature layers containing destination points. */
    featureLayers: layers.FeatureLayer[];
    /** References the map object. */
    map: Map;
    /** The point feature layer containing the origin points. */
    originsLayer: layers.FeatureLayer;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface ConnectOriginsToDestinationsConstructor {
	    /**
	     * Creates a new ConnectOriginsToDestinations dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: ConnectOriginsToDestinationsOptions, srcNodeRef: Node | string): ConnectOriginsToDestinations;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** The linear unit to be used with the distance value(s). */
    units: string;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface CreateBuffersConstructor {
	    /**
	     * Creates a new CreateBuffers dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: CreateBuffersOptions, srcNodeRef: Node | string): CreateBuffers;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface CreateDriveTimeAreasConstructor {
	    /**
	     * Creates a new CreateDriveTimeAreas dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: CreateDriveTimeAreasOptions, srcNodeRef: Node | string): CreateDriveTimeAreas;
  }

  /** Creates areas that are visible based on locations you specify. */
  export class CreateViewshed extends AnalysisBase {
    /** Feature layer containing points representing observation points. */
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map: Map;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** The height of structures or people on the ground used to establish visibility. */
    targetHeight: number;
    /** The linear units to use for the 'targetHeight' value. */
    targetHeightUnits: string;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface CreateViewshedConstructor {
	    /**
	     * Creates a new CreateViewshed dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: CreateViewshedOptions, srcNodeRef: Node | string): CreateViewshed;
  }

  /** Creates catchment areas based on locations you specify. */
  export class CreateWatersheds extends AnalysisBase {
    /** The input feature layer containing points used to calculate watersheds. */
    inputLayer: layers.FeatureLayer;
    /** Reference to the map object. */
    map: Map;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** The default unit provided to the user for searching a specified distance from the origin points to their nearest drainages. */
    searchUnits: string;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface CreateWatershedsConstructor {
	    /**
	     * Creates a new CreateWatersheds dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: CreateWatershedsOptions, srcNodeRef: Node | string): CreateWatersheds;
  }

  /** Derive new features from the input layers that meet a query you specify. */
  export class DeriveNewLocations extends AnalysisBase {
    /** The analysis layer to derive new locations from. */
    analysisLayer: layers.FeatureLayer;
    /** An array of feature layers to use as input. */
    inputLayers: layers.FeatureLayer[];
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface DeriveNewLocationsConstructor {
	    /**
	     * Creates a new DeriveNewLocations dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node | string): DeriveNewLocations;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** An array of field names and statistical summary types that you wish to calculate from the polygons that are dissolved together. */
    summaryFields: string[];
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface DissolveBoundariesConstructor {
	    /**
	     * Creates a new DissolveBoundaries dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: DissolveBoundariesOptions, srcNodeRef: Node | string): DissolveBoundaries;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** When true, you can specify a time for traffic condition under Define areas to enrich - Driving Time. */
    showTrafficWidget: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface EnrichLayerConstructor {
	    /**
	     * Creates a new EnrichLayer dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: EnrichLayerOptions, srcNodeRef: Node | string): EnrichLayer;
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
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface ExtractDataConstructor {
	    /**
	     * Creates a new ExtractData dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: ExtractDataOptions, srcNodeRef: Node | string): ExtractData;
  }

  /** Select features in the input layer that meet an attribute and/or spatial query you specify. */
  export class FindExistingLocations extends AnalysisBase {
    /** The analysis layer to find existing locations from. */
    analysisLayer: layers.FeatureLayer;
    /** An array of feature layers to use as input. */
    inputLayers: layers.FeatureLayer[];
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface FindExistingLocationsConstructor {
	    /**
	     * Creates a new FindExistingLocations dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node | string): FindExistingLocations;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** Return a report of the analysis process. */
    returnProcessInfo: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface FindHotSpotsConstructor {
	    /**
	     * Creates a new FindHotSpots dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: FindHotSpotsOptions, srcNodeRef: Node | string): FindHotSpots;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** The maximum range to search for nearest locations from each feature in the analysisLayer. */
    searchCutoff: number;
    /** The units of the searchCutoff parameter. */
    searchCutoffUnits: string;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface FindNearestConstructor {
	    /**
	     * Creates a new FindNearest dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: FindNearestOptions, srcNodeRef: Node | string): FindNearest;
  }

  /** Measure the similarity of candidate locations to one or more reference locations. */
  export class FindSimilarLocations extends AnalysisBase {
    /** The input point, line, or polygon feature layer. */
    inputLayer: layers.FeatureLayer;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** Return a report of the analysis process. */
    returnProcessInfo: boolean;
    /** The point, line, or polygon feature layer to search. */
    searchLayers: layers.FeatureLayer[];
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
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
	    new(params: any, srcNodeRef: Node | string): FindSimilarLocations;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface InterpolatePointsConstructor {
	    /**
	     * Creates a new InterpolatePoints dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node | string): InterpolatePoints;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface MergeLayersConstructor {
	    /**
	     * Creates a new MergeLayers dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: MergeLayersOptions, srcNodeRef: Node | string): MergeLayers;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** When the distance between features is less than the tolerance, the features in the overlay layer will snap to the features in the input layer. */
    snapToInput: boolean;
    /** The minimum distance separating all feature coordinates (nodes and vertices) as well as the distance a coordinate can move in X or Y (or both). */
    tolerance: number;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface OverlayLayersConstructor {
	    /**
	     * Creates a new OverlayLayers dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: OverlayLayersOptions, srcNodeRef: Node | string): OverlayLayers;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** Whether each route must end its trip at the same place where it started. */
    returnToStart: boolean;
    /** The number of vehicles that are available to visit the stops. */
    routeCount: number;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** Provide the locations where the people or vehicles start their routes. */
    startLayer: string;
    /** The points that the vehicles, drivers, or routes, should visit. */
    stopsLayer: layers.FeatureLayer;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface PlanRoutesConstructor {
	    /**
	     * Creates a new PlanRoutes dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node | string): PlanRoutes;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** Type of units shown under the Total Area checkbox in the Add statistics from option. */
    shapeUnits: string;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
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
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface SummarizeNearbyConstructor {
	    /**
	     * Creates a new SummarizeNearby dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: SummarizeNearbyOptions, srcNodeRef: Node | string): SummarizeNearby;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
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
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface SummarizeWithinConstructor {
	    /**
	     * Creates a new SummarizeWithin dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: SummarizeWithinOptions, srcNodeRef: Node | string): SummarizeWithin;
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
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** Indicates whether to show the close icon on the widget's user interface. */
    showCloseIcon: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** The trace line will be split into multiple lines where each line is of the specified length. */
    splitDistance: number;
    /** The units that splitDistance is specified in. */
    splitUnits: string;
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
  export interface TraceDownstreamConstructor {
	    /**
	     * Creates a new TraceDownstream dijit using the given DOM node.
	     * @param params Various options to configure this dijit.
	     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
	     */
	    new(params: any, srcNodeRef: Node | string): TraceDownstream;
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
	    new(params: any, srcNodeRef: Node | string): AttachmentEditor;
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
    /** The default toolbars.Edit toolbar instance. */
    editToolbar: toolbars.Edit;
    /** Finalizes the creation of the widget. */
    startup(): void;
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
	    new(params: EditorOptions, srcNodeRef: Node | string): Editor;
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
	    new(params: TemplatePickerOptions, srcNodeRef: Node | string): TemplatePicker;
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
    /** An array of the variables currently loaded in the Data Browser. */
    variables: any[];
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
	    new(options: DataBrowserOptions, srcNodeRef: Node | string): DataBrowser;
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
    studyAreaOptions: tasks.geoenrichment.RingBuffer | tasks.geoenrichment.DriveBuffer | tasks.geoenrichment.IntersectingGeographies;
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
	    new(params: any, srcNodeRef: Node | string): Infographic;
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
	    new(params: any, srcNodeRef: Node | string): InfographicsCarousel;
  }

  /** InfographicsOptions is used to customize and configure the Infographic's included in a InfographicCarousel. */
  export class InfographicsOptions {
    /** The options to apply to the study area. */
    studyAreaOptions: tasks.geoenrichment.RingBuffer | tasks.geoenrichment.DriveBuffer | tasks.geoenrichment.IntersectingGeographies;
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
declare namespace esriTypes.dijit.util {
  /** This module provides the ability to create a busy indicator for a target. */
  export var busyIndicator: {
    /**
     * Creates a busy indicator on a target.
     * @param target The String (Node id, dijit/_WidgetBase id), HTMLElement reference (Node), or dijit/_WidgetBase.
     * @param params (Optional) The params options can be used when needing more fine-grained control.
     */
    create(target: string | HTMLElement | any, params?: any): any;
  };
}
declare namespace esriTypes.geometry {

  /** A circle (Polygon) created by a specified center point. */
  export class Circle extends Polygon {
    /** Center point of the circle. */
    center: Point | number[];
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
	    new(center: Point | number[], options?: CircleOptions1): Circle;
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
     * Returns the intersection extent if the input geometry is an extent that intersects this extent.
     * @param geometry The geometry used to test the intersection.
     */
    intersects(geometry: Geometry): Extent | boolean;
    /** Returns an array with either one Extent that's been shifted to within +/- 180 or two Extents if the original extent intersects the dateline. */
    normalize(): Extent[];
    /**
     * Returns a new Extent with x and y offsets.
     * @param dx The offset distance in map units for the x-coordinate.
     * @param dy The offset distance in map units for the y-coordinate.
     */
    offset(dx: number, dy: number): Extent;
    /** Returns an extent with a spatial reference with a custom shifted central meridian if the extent intersects the dateline. */
    shiftCentralMeridian(): Extent;
    /**
     * Expands this extent to include the extent of the argument.NOTE: Performing a Union returns a new extent as opposed to modifying the existing extent.
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
    /** The cache is used to store values computed from geometries that need to cleared or recomputed upon mutation. */
    cache: any;
    /** The spatial reference of the geometry. */
    spatialReference: SpatialReference;
    /** The type of geometry. */
    type: string;
    /** Sets the cache property to undefined. */
    clearCache(): void;
    /**
     * Returns the value for a named property stored in the cache.
     * @param name The property name of the value to retrieve from the cache.
     */
    getCacheValue(name: string): any;
    /**
     * Sets the value for a named property stored in the cache.
     * @param name The property name for the value Object to store in the cache.
     * @param value The value Object for a named property to store in the cache.
     */
    setCacheValue(name: string, value: any): void;
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
    addPoint(point: Point | number[]): Multipoint;
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
     * Returns a new Point with x and y offsets.
     * @param dx The offset distance in map units from the x-coordinate.
     * @param dy The offset distance in map units from the y-coordinate.
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
    addRing(ring: Point[] | number[][]): Polygon;
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
    isClockwise(ring: Point[] | number[][]): boolean;
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
	    new(coordinates: number[][] | number[][][]): Polygon;
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
    addPath(path: Point[] | number[][]): Polyline;
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
	    new(coordinates: number[][] | number[][][]): Polyline;
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

  /** A client-side geometry engine. */
  export var geometryEngine: {
    /**
     * Creates planar (or Euclidean) buffer polygons at a specified distance around the input geometries.
     * @param geometry The buffer input geometry.
     * @param distance The specified distance(s) for buffering.
     * @param unit Measurement unit for the distance(s).
     * @param unionResults Whether the output geometries should be unioned into a single polygon.
     */
    buffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): Polygon | Polygon[];
    /**
     * Calculates the clipped geometry from a target geometry by an envelope.
     * @param geometry The geometry to be clipped.
     * @param envelope The envelope used to clip.
     */
    clip(geometry: Geometry, envelope: Extent): Geometry;
    /**
     * Indicates if one geometry contains another geometry.
     * @param geometry1 The geometry that is tested for the contains relationship to the other geometry.
     * @param geometry2 The geometry that is tested for within relationship to the other geometry.
     */
    contains(geometry1: Geometry, geometry2: Geometry): boolean;
    /**
     * Calculates the convex hull of the input geometry.
     * @param geometry The input geometry.
     * @param merge Whether to merge output geometries.
     */
    convexHull(geometry: Geometry | Geometry[], merge?: boolean): Geometry | Geometry[];
    /**
     * Indicates if one geometry crosses another geometry.
     * @param geometry1 The geometry to cross.
     * @param geometry2 The geometry being crossed.
     */
    crosses(geometry1: Geometry, geometry2: Geometry): boolean;
    /**
     * Split the input Polyline or Polygon where it crosses a cutting Polyline.
     * @param geometry The geometry to be cut.
     * @param cutter The polyline to cut the geometry.
     */
    cut(geometry: Geometry, cutter: Polyline): Geometry[];
    /**
     * Densify geometries by plotting points between existing vertices.
     * @param geometry The geometry to be densified.
     * @param maxSegmentLength The maximum segment length allowed.
     * @param maxSegmentLengthUnit Measurement unit for maxSegmentLength.
     */
    densify(geometry: Geometry, maxSegmentLength: number, maxSegmentLengthUnit: string | number): Geometry;
    /**
     * Creates the difference of two geometries.
     * @param inputGeometry The input geometry to subtract from.
     * @param subtractor The geometry being subtracted from inputGeometry.
     */
    difference(inputGeometry: Geometry | Geometry[], subtractor: Geometry): Geometry | Geometry[];
    /**
     * Indicates if one geometry is disjoint (doesn't intersect in any way) with another geometry.
     * @param geometry1 The base geometry that is tested for the "disjoint" relationship to the other geometry.
     * @param geometry2 The comparison geometry that is tested for the disjoint relationship to the other geometry.
     */
    disjoint(geometry1: Geometry, geometry2: Geometry): boolean;
    /**
     * Calculates the shortest planar distance between two geometries.
     * @param geometry1 First input geometry.
     * @param geometry2 Second input geometry.
     * @param distanceUnit Measurement unit of the return value.
     */
    distance(geometry1: Geometry, geometry2: Geometry, distanceUnit: string | number): number;
    /**
     * Indicates if two geometries are equal.
     * @param geometry1 First input geometry.
     * @param geometry2 Second input geometry.
     */
    equals(geometry1: Geometry, geometry2: Geometry): boolean;
    /**
     * Returns an object containing additional information about the input spatial reference.
     * @param spatialReference The spatial Reference.
     */
    extendedSpatialReferenceInfo(spatialReference: SpatialReference): any;
    /**
     * Flips a geometry on the horizontal axis.
     * @param geometry The input geometry.
     * @param flipOrigin Point to flip the geometry around.
     */
    flipHorizontal(geometry: Geometry, flipOrigin?: Point): Geometry;
    /**
     * Flips a geometry on the vertical axis.
     * @param geometry The input geometry.
     * @param flipOrigin Point to flip the geometry around.
     */
    flipVertical(geometry: Geometry, flipOrigin?: Point): Geometry;
    /**
     * Performs the generalize operation on the geometries in the cursor.
     * @param geometry The geometry to be generalized.
     * @param maxDeviation The maximum allowed deviation from the generalized geometry to the original geometry.
     * @param removeDegenerateParts When true, the degenerate parts of the geometry will be removed from the output (may be undesired for drawing).
     * @param maxDeviationUnit Measurement unit for maxDeviation.
     */
    generalize(geometry: Geometry, maxDeviation: number, removeDegenerateParts?: boolean, maxDeviationUnit?: string | number): Geometry;
    /**
     * Calculates the area of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    geodesicArea(geometry: Geometry, unit: string | number): number;
    /**
     * Creates geodesic buffer polygons at a specified distance around the input geometries.
     * @param geometry The buffer input geometry.
     * @param distance The specified distance(s) for buffering.
     * @param unit Measurement unit for the distance(s).
     * @param unionResults Whether the output geometries should be unioned into a single polygon.
     */
    geodesicBuffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): Polygon | Polygon[];
    /**
     * Returns a geodesically densified version of the input geometry.
     * @param geometry A polyline or polygon geometry to densify.
     * @param maxSegmentLength The maximum segment length allowed.
     * @param maxSegmentLengthUnit Measurement unit for maxSegmentLength.
     */
    geodesicDensify(geometry: Polyline | Polygon, maxSegmentLength: number, maxSegmentLengthUnit?: number): Geometry;
    /**
     * Calculates the length of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    geodesicLength(geometry: Geometry, unit: string | number): number;
    /**
     * Creates a new geometry through intersection between two geometries.
     * @param geometry The input geometry.
     * @param intersector The geometry being intersected.
     */
    intersect(geometry: Geometry | Geometry[], intersector: Geometry): Geometry | Geometry[];
    /**
     * Indicates if one geometry intersects another geometry.
     * @param geometry1 The geometry that is tested for the intersects relationship to the other geometry.
     * @param geometry2 The geometry being intersected.
     */
    intersects(geometry1: Geometry, geometry2: Geometry): boolean;
    /**
     * Indicates if the given geometry is topologically simple.
     * @param geometry Geometry
     */
    isSimple(geometry: Geometry): boolean;
    /**
     * Finds the coordinate of the geometry which is closest to the specified point.
     * @param geometry The geometry to consider.
     * @param inputPoint The point used to search the nearest coordinate in the geometry.
     */
    nearestCoordinate(geometry: Geometry, inputPoint: Point): any;
    /**
     * Finds vertex on the geometry nearest to the specified point.
     * @param geometry The geometry to consider.
     * @param inputPoint The point used to search the nearest vertex in the geometry.
     */
    nearestVertex(geometry: Geometry, inputPoint: Point): any;
    /**
     * Finds all vertices in the given distance from the specified point, sorted from the closest to the furthest and returns them as an array of objects.
     * @param geometry The geometry to consider.
     * @param inputPoint The point from which to measure.
     * @param searchRadius The search radius.
     * @param maxVertexCountToReturn The maximum number number of vertices to return.
     */
    nearestVertices(geometry: Geometry, inputPoint: Point, searchRadius: number, maxVertexCountToReturn: number): any[];
    /**
     * Creates offset version of the input geometry.
     * @param geometry The geometries to offset.
     * @param offsetDistance The offset distance for the Geometries.
     * @param offsetUnit Measurement unit for the offset.
     * @param joinType The join type.
     * @param bevelRatio Applicable to MITER, bevelRatio is multiplied by the offset distance and the result determines how far a mitered offset intersection can be located before it is beveled.
     * @param flattenError Applicable to ROUND, flattenError determines the maximum distance of the resulting segments compared to the true circular arc.
     */
    offset(geometry: Geometry | Geometry[], offsetDistance: number, offsetUnit: string | number, joinType: string, bevelRatio?: number, flattenError?: number): Geometry | Geometry[];
    /**
     * Indicates if one geometry  overlaps another geometry.
     * @param geometry1 The base geometry that is tested for overlaps relationship to the other geometry.
     * @param geometry2 The comparison geometry that is tested for the overlaps relationship to the other geometry.
     */
    overlaps(geometry1: Geometry, geometry2: Geometry): boolean;
    /**
     * Calculates the area of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    planarArea(geometry: Geometry, unit: string | number): number;
    /**
     * Calculates the length of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    planarLength(geometry: Geometry, unit: string | number): number;
    /**
     * Indicates if the given DE-9IM relation holds for the two geometries.
     * @param geometry1 The first geometry for the relation.
     * @param geometry2 The second geometry for the relation.
     * @param relation The Dimensionally Extended 9 Intersection Model (DE-9IM) matrix relation (encoded as a string) to test against the relationship of the two geometries.
     */
    relate(geometry1: Geometry, geometry2: Geometry, relation: string): boolean;
    /**
     * Rotates a geometry by a specified angle.
     * @param geometry The input geometry.
     * @param angle The rotation angle
     * @param rotationOrigin Point to rotate the geometry around.
     */
    rotate(geometry: Geometry, angle: number, rotationOrigin?: Point): Geometry;
    /**
     * Performs the simplify operation on the geometry which alters the given geometries to make their definitions topologically legal with respect to their geometry type.
     * @param geometry The geometry to be simplified.
     */
    simplify(geometry: Geometry): Geometry;
    /**
     * Creates the symmetric difference of two geometries.
     * @param leftGeometry One of the Geometry instances in the XOR operation.
     * @param rightGeometry One of the Geometry instances in the XOR operation.
     */
    symmetricDifference(leftGeometry: Geometry | Geometry[], rightGeometry: Geometry): Geometry | Geometry[];
    /**
     * Indicates if one geometry touches another geometry.
     * @param geometry1 The geometry which may be touching another geometry.
     * @param geometry2 The geometry to be touched.
     */
    touches(geometry1: Geometry, geometry2: Geometry): boolean;
    /**
     * All inputs must be of the same type of geometries and share one spatial reference.
     * @param geometries The geometries to union.
     */
    union(geometries: Geometry[]): Geometry;
    /**
     * Indicates if one geometry is within another geometry.
     * @param geometry1 The base geometry that is tested for within relationship to the other geometry.
     * @param geometry2 The comparison geometry that is tested for the contains relationship to the other geometry.
     */
    within(geometry1: Geometry, geometry2: Geometry): boolean;
  };

  /** A client-side asynchronous geometry engine. */
  export var geometryEngineAsync: {
    /**
     * Creates planar (or Euclidean) buffer polygons at a specified distance around the input geometries.
     * @param geometry The buffer input geometry.
     * @param distance The specified distance(s) for buffering.
     * @param unit Measurement unit for the distance(s).
     * @param unionResults Whether the output geometries should be unioned into a single polygon.
     */
    buffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): any;
    /**
     * Calculates the clipped geometry from a target geometry by an envelope.
     * @param geometry The geometry to be clipped.
     * @param envelope The envelope used to clip.
     */
    clip(geometry: Geometry, envelope: Extent): any;
    /**
     * Indicates if one geometry contains another geometry.
     * @param geometry1 The geometry that is tested for the contains relationship to the other geometry.
     * @param geometry2 The geometry that is tested for within relationship to the other geometry.
     */
    contains(geometry1: Geometry, geometry2: Geometry): any;
    /**
     * Calculates the convex hull of the input geometry.
     * @param geometry The input geometry.
     * @param merge Whether to merge output geometries.
     */
    convexHull(geometry: Geometry | Geometry[], merge?: boolean): any;
    /**
     * Indicates if one geometry crosses another geometry.
     * @param geometry1 The geometry to cross.
     * @param geometry2 The geometry being crossed.
     */
    crosses(geometry1: Geometry, geometry2: Geometry): any;
    /**
     * Split the input polyline or polygon where it crosses a cutting polyline.
     * @param geometry The geometry to be cut.
     * @param cutter The polyline to cut the geometry.
     */
    cut(geometry: Geometry, cutter: Polyline): any;
    /**
     * Densify geometries by plotting points between existing vertices.
     * @param geometry The geometry to be densified.
     * @param maxSegmentLength The maximum segment length allowed.
     * @param maxSegmentLengthUnit Measurement unit for maxSegmentLength.
     */
    densify(geometry: Geometry, maxSegmentLength: number, maxSegmentLengthUnit: string | number): any;
    /**
     * Creates the difference of two geometries.
     * @param inputGeometry The input geometry to subtract from.
     * @param subtractor The geometry being subtracted.
     */
    difference(inputGeometry: Geometry | Geometry[], subtractor: Geometry): any;
    /**
     * Indicates if one geometry is disjoint (doesn't intersect in any way) with another geometry.
     * @param geometry1 The base geometry that is tested for the "disjoint" relationship to the other geometry.
     * @param geometry2 The comparison geometry that is tested for the disjoint relationship to the other geometry.
     */
    disjoint(geometry1: Geometry, geometry2: Geometry): any;
    /**
     * Calculates the shortest planar distance between two geometries.
     * @param geometry1 First input geometry.
     * @param geometry2 Second input geometry.
     * @param distanceUnit Measurement unit of the return value.
     */
    distance(geometry1: Geometry, geometry2: Geometry, distanceUnit: string | number): any;
    /**
     * Indicates if two geometries are equal.
     * @param geometry1 First input geometry.
     * @param geometry2 Second input geometry.
     */
    equals(geometry1: Geometry, geometry2: Geometry): any;
    /**
     * Returns an object containing additional information about the input spatial reference.
     * @param spatialReference The input spatial reference.
     */
    extendedSpatialReferenceInfo(spatialReference: SpatialReference): any;
    /**
     * Flips a geometry on the horizontal axis.
     * @param geometry The input geometry.
     * @param flipOrigin Point to flip the geometry around.
     */
    flipHorizontal(geometry: Geometry, flipOrigin?: Point): any;
    /**
     * Flips a geometry on the vertical axis.
     * @param geometry The input geometry.
     * @param flipOrigin Point to flip the geometry around.
     */
    flipVertical(geometry: Geometry, flipOrigin?: Point): any;
    /**
     * Performs the generalize operation on the geometries in the cursor.
     * @param geometry The geometry to be generalized.
     * @param maxDeviation The maximum allowed deviation from the generalized geometry to the original geometry.
     * @param removeDegenerateParts When true, the degenerate parts of the geometry will be removed from the output (may be undesired for drawing).
     * @param maxDeviationUnit Measurement unit for maxDeviation.
     */
    generalize(geometry: Geometry, maxDeviation: number, removeDegenerateParts?: boolean, maxDeviationUnit?: string | number): any;
    /**
     * Calculates the area of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    geodesicArea(geometry: Geometry, unit: string | number): any;
    /**
     * Creates geodesic buffer polygons at a specified distance around the input geometries.
     * @param geometry The buffer input geometry.
     * @param distance The specified distance(s) for buffering.
     * @param unit Measurement unit for the distance(s).
     * @param unionResults Whether the output geometries should be unioned into a single polygon.
     */
    geodesicBuffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): any;
    /**
     * Resolves to a geodesically densified version of the input geometry.
     * @param geometry A polyline or polygon geometry to densify.
     * @param maxSegmentLength The maximum segment length allowed.
     * @param maxSegmentLengthUnit Measurement unit for maxSegmentLength.
     */
    geodesicDensify(geometry: Polyline | Polygon, maxSegmentLength: number, maxSegmentLengthUnit?: number): any;
    /**
     * Calculates the length of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    geodesicLength(geometry: Geometry, unit: string | number): any;
    /**
     * Creates a new geometry through intersection between two geometries.
     * @param geometry The input geometry.
     * @param intersector The geometry being intersected.
     */
    intersect(geometry: Geometry | Geometry[], intersector: Geometry): any;
    /**
     * Indicates if one geometry intersects another geometry.
     * @param geometry1 The geometry that is tested for the intersects relationship to the other geometry.
     * @param geometry2 The geometry being intersected.
     */
    intersects(geometry1: Geometry, geometry2: Geometry): any;
    /**
     * Indicates if the given geometry is topologically simple.
     * @param geometry Geometry
     */
    isSimple(geometry: Geometry): any;
    /**
     * Finds the coordinate of the geometry which is closest to the specified point.
     * @param geometry The geometry to consider.
     * @param inputPoint The point used to search the nearest coordinate in the geometry.
     */
    nearestCoordinate(geometry: Geometry, inputPoint: Point): any;
    /**
     * Finds vertex on the geometry nearest to the specified point.
     * @param geometry The geometry to consider.
     * @param inputPoint The point used to search the nearest vertex in the geometry.
     */
    nearestVertex(geometry: Geometry, inputPoint: Point): any;
    /**
     * Finds all vertices in the given distance from the specified point, sorted from the closest to the furthest and returns them as an array of objects once resolved.
     * @param geometry The geometry to consider.
     * @param inputPoint The point from which to measure.
     * @param searchRadius The search radius.
     * @param maxVertexCountToReturn The maximum number number of vertices to return.
     */
    nearestVertices(geometry: Geometry, inputPoint: Point, searchRadius: number, maxVertexCountToReturn: number): any;
    /**
     * Creates offset version of the input geometry.
     * @param geometry The geometries to offset.
     * @param offsetDistance The offset distance for the Geometries.
     * @param offsetUnit Measurement unit for the offset.
     * @param joinType The join type.
     * @param bevelRatio Applicable to MITER, bevelRatio is multiplied by the offset distance and the result determines how far a mitered offset intersection can be located before it is beveled.
     * @param flattenError Applicable to ROUND, flattenError determines the maximum distance of the resulting segments compared to the true circular arc.
     */
    offset(geometry: Geometry | Geometry[], offsetDistance: number, offsetUnit: string | number, joinType: string, bevelRatio?: number, flattenError?: number): any;
    /**
     * Indicates if one geometry  overlaps another geometry.
     * @param geometry1 The base geometry that is tested for overlaps relationship to the other geometry.
     * @param geometry2 The comparison geometry that is tested for the overlaps relationship to the other geometry.
     */
    overlaps(geometry1: Geometry, geometry2: Geometry): any;
    /**
     * Calculates the area of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    planarArea(geometry: Geometry, unit: string | number): any;
    /**
     * Calculates the length of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    planarLength(geometry: Geometry, unit: string | number): any;
    /**
     * Indicates if the given DE-9IM relation holds for the two geometries.
     * @param geometry1 The first geometry for the relation.
     * @param geometry2 The second geometry for the relation.
     * @param relation The Dimensionally Extended 9 Intersection Model (DE-9IM) matrix relation (encoded as a string) to test against the relationship of the two geometries.
     */
    relate(geometry1: Geometry, geometry2: Geometry, relation: string): any;
    /**
     * Rotates a geometry by a specified angle.
     * @param geometry The input geometry.
     * @param angle The rotation angle
     * @param rotationOrigin Point to rotate the geometry around.
     */
    rotate(geometry: Geometry, angle: number, rotationOrigin?: Point): any;
    /**
     * Performs the simplify operation on the geometry which alters the given geometries to make their definitions topologically legal with respect to their geometry type.
     * @param geometry The geometry to be simplified.
     */
    simplify(geometry: Geometry): any;
    /**
     * Creates the symmetric difference of two geometries.
     * @param leftGeometry One of the Geometry instances in the XOR operation.
     * @param rightGeometry One of the Geometry instances in the XOR operation.
     */
    symmetricDifference(leftGeometry: Geometry | Geometry[], rightGeometry: Geometry): any;
    /**
     * Indicates if one geometry touches another geometry.
     * @param geometry1 The geometry which may be touching another geometry.
     * @param geometry2 The geometry to be touched.
     */
    touches(geometry1: Geometry, geometry2: Geometry): any;
    /**
     * All inputs must be of the same type of geometries and share one spatial reference.
     * @param geometries The geometries to union.
     */
    union(geometries: Geometry[]): any;
    /**
     * Indicates if one geometry is within another geometry.
     * @param geometry1 The base geometry that is tested for within relationship to the other geometry.
     * @param geometry2 The comparison geometry that is tested for the contains relationship to the other geometry.
     */
    within(geometry1: Geometry, geometry2: Geometry): any;
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
    normalizeCentralMeridian(geometries: Geometry[], geometryService?: tasks.GeometryService, callback?: Function, errback?: Function): any;
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
    /**
     * Returns the value of one map unit for the given spatial reference (in meters).
     * @param sr The spatial reference represented as a SpatialReference class, Number, or String.
     */
    getUnitValueForSR(sr: SpatialReference | number | string): number;
  };

  /** Convert map coordinates to screen coordinates and vice versa. */
  export var screenUtils: {
    /**
     * Converts the geometry argument to map coordinates based on the extent, width, and height of the Map.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current height of the map in screen units.
     * @param screenGeometry The geometry to convert from screen to map units.
     */
    toMapGeometry(extent: Extent, width: number, height: number, screenGeometry: Geometry): Geometry;
    /**
     * Converts and returns the argument screen point in map coordinates.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current height of the map in screen units.
     * @param screenPoint The screenPoint to convert from screen to map units.
     */
    toMapPoint(extent: Extent, width: number, height: number, screenPoint: ScreenPoint): Point;
    /**
     * Converts the geometry argument to screen coordinates based on the extent, width, and height of the Map.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current height of the map in screen units.
     * @param mapGeometry The geometry to convert from map to screen units.
     */
    toScreenGeometry(extent: Extent, width: number, height: number, mapGeometry: Geometry): Geometry;
    /**
     * Converts and returns the argument map point in screen coordinates.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current height of the map in screen units.
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
    canProject(source: SpatialReference | any, target: SpatialReference | any): boolean;
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
    project(geometry: Geometry, target: SpatialReference | any): any;
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
    /** The geodatabase version. */
    gdbVersion: string;
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
    /** Fires when the visibleLayers property is changed. */
    on(type: "visible-layers-change", listener: (event: { visibleLayers: number[]; target: ArcGISDynamicMapServiceLayer }) => void): Handle;
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

  /** The ArcGISImageServiceVectorLayer displays pixel values as vectors. */
  export class ArcGISImageServiceVectorLayer extends GraphicsLayer {
    /** Returns the flow direction of the data as determined by the service via key properties. */
    getFlowRepresentation(): string;
    /**
     * Sets the renderer for the layer.
     * @param renderer The renderer object to apply to the layer.
     */
    setRenderer(renderer: renderers.Renderer): void;
    /**
     * Enables the layer to update its content based on the map's current time extent.
     * @param update A value of true allows the layer to use the map's time extent to update layer content.
     */
    setUseMapTime(update: boolean): void;
    /**
     * Set the default renderer from a list of predefined options.
     * @param style The default renderer.
     */
    setVectorRendererStyle(style: string): void;
  }
  export interface ArcGISImageServiceVectorLayerConstructor {
	    /**
	     * Creates a new ArcGISImageServiceLayer object.
	     * @param url URL to the ArcGIS Server REST resource that represents an image service vector layer service.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: ArcGISImageServiceVectorLayerOptions): ArcGISImageServiceVectorLayer;
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
    getName(code: number | string): string;
  }
  export interface CodedValueDomainConstructor {
      new(): CodedValueDomain
  }

  /** (Currently in beta) Display features using data that contains location information such as X and Y coordinates, Street address, place names etc using a DataAdapter object to retrieve the features and a LocationProvider to generate their geometries. */
  export class DataAdapterFeatureLayer extends FeatureLayer {
    /** The DataAdapter object points to data sources that contain non-spatial tables. */
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
    /** The geodatabase version. */
    gdbVersion: string;
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
     * Sets the definition expression for the FeatureLayer.
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
     * @param labelingInfo This is the label definition for this layer, specified as an array of label classes.
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
     * Sets the selection symbol for the feature layer.
     * @param symbol symbols.Symbol for the current selection.
     */
    setSelectionSymbol(symbol: symbols.Symbol): FeatureLayer;
    /**
     * Sets whether to display labels or not.
     * @param showLabels Set to true to show labels.
     */
    setShowLabels(showLabels: boolean): void;
    /**
     * Sets the time definition for the feature layer.
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
    /** The publicly accessible URL to a GeoRSS file. */
    url: string;
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
    dataAttributes: string | string[];
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

  /** Use label classes to restrict labels to certain features or to specify different label fields, symbols, scale ranges, label priorities, and sets of label placement options for different groups of labels. */
  export class LabelClass {
    /** An array of objects representing field information to label. */
    fieldInfos: any[];
    /** Adjusts the formatting of labels. */
    labelExpression: string;
    /** Use this when working with FeatureLayer layer types. */
    labelExpressionInfo: any;
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
	     * Creates a label class, used for formatting parameters, symbols, date, etc.
	     * @param json Various options to configure this LabelClass.
	     */
	    new(json?: Object): LabelClass;
  }

  /** NOTE: Deprecated as of version 3.14, read below for additional information on the suggested method of labeling. */
  export class LabelLayer extends GraphicsLayer {
    /**
     * Adds reference to the feature layer which is labeled.
     * @param featureLayer The feature layer to be added to the label layer.
     * @param renderer The renderer used to render text labels.
     * @param textExpression An expression determining what text and field(s) will be displayed as in labels.
     */
    addFeatureLayer(featureLayer: FeatureLayer, renderer?: renderers.SimpleRenderer | renderers.UniqueValueRenderer | renderers.ClassBreaksRenderer, textExpression?: any): void;
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
	    /** Takes the sum of all overlapping pixels. */
	  OPERATION_SUM: any;
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

  /** The PixelBlock is used to hold pixels. */
  export class PixelBlock {
    /** Number of rows. */
    height: number;
    /** An array of nodata mask. */
    mask: any[];
    /** A two dimensional array. */
    pixels: number[][];
    /** Pixel type. */
    pixelType: string;
    /** Array of objects containing numeric statistical properties (e.g. */
    statistics: any[];
    /** Number of columns. */
    width: number;
    /**
     * Adds another plane.
     * @param planeData Must have two properties set: pixels and statistics.
     */
    addData(planeData: any): void;
    /** Returns pixels and masks using a single array in bip format (e.g. */
    getAsRGBA(): any[];
    /** Similar to getAsRGBA, but returns floating point data. */
    getAsRGBAFloat(): any[];
    /** Returns the plane band count. */
    getPlaneCount(): number;
  }
  export interface PixelBlockConstructor {
	    /**
	     * Creates a new PixelBlock object.
	     * @param options Constructor parameters.
	     */
	    new(options: PixelBlockOptions): PixelBlock;
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
    /** Defines the output image's pixel type. */
    outputPixelType: string;
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

  /** The RasterLayer is used to display image services. */
  export class RasterLayer extends Layer {
    /** A function that takes a pixelData object as input and processes it. */
    pixelFilter: Function;
    /** Returns the context of the Canvas. */
    getContext(): any;
    /**
     * Sets the image format.
     * @param imageFormat The image format to set.
     * @param doNotRefresh Use true to avoid refreshing the layer; false to refresh it.
     */
    setImageFormat(imageFormat: string, doNotRefresh?: boolean): void;
    /**
     * Sets a pixelFilter on the layer.
     * @param pixelFilter The function defining the PixelFilter to set on the layer.
     */
    setPixelFilter(pixelFilter: Function): void;
    /**
     * Determines if the layer will update its content based on the map's current time extent.
     * @param use Use true to update the layer's content based on the map's current time extent.
     * @param doNotRefresh Use true to avoid refreshing the layer; false to refresh the layer.
     */
    setUseMapTime(use: boolean, doNotRefresh?: boolean): void;
  }
  export interface RasterLayerConstructor {
	    /**
	     * Creates a new RasterLayer object.
	     * @param url URL to the ArcGIS Server REST resource that represents a raster layer service.
	     * @param options Optional parameters.
	     */
	    new(url: string, options?: RasterLayerOptions): RasterLayer;
  }

  /** The stream layer extends the feature layer to add the ability to connect to a stream of data using HTML5 WebSockets. */
  export class StreamLayer extends FeatureLayer {
    /** The maximum number of observations being shown for each unique track. */
    maximumTrackPoints: number;
    /** Purge interval of the layer in minutes. */
    purgeInterval: number;
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
    /** Gets the latest observation for each track in the layer. */
    getLatestObservations(): Graphic;
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
    /**
     * Changes the layer's purge interval to the given value (in minutes).
     * @param interval The purge interval in minutes.
     */
    setPurgeInterval(interval: number): Layer;
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
    /** Fires when the purgeInterval property is changed. */
    on(type: "purge-interval-change", listener: (event: { target: StreamLayer }) => void): Handle;
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
  /** TimeReference contains read-only information about how the time was captured when the data was created. */
  export class TimeReference {
    /** A read-only property that indicates whether the time reference takes into account daylight savings time. */
    respectsDaylightSaving: boolean;
    /** The time zone in which the data was captured. */
    timeZone: string;
  }
  export interface TimeReferenceConstructor {
      new(): TimeReference
  }

  /** A VectorTileLayer accesses cached tiles of data and renders it in vector format. */
  export class VectorTileLayer extends Layer {
    /** The full extent of the layer. */
    fullExtent: geometry.Extent;
    /** The initial extent of the layer. */
    initialExtent: geometry.Extent;
    /** The spatial reference of the layer. */
    spatialReference: SpatialReference;
    /** The style object of the service with fully qualified URLs for glyphs and sprite. */
    style: any;
    /** Contains information about the tiling scheme for the layer. */
    tileInfo: TileInfo;
    /** The URL to the vector tile service or style JSON that will be used to draw the layer. */
    url: string;
    /**
     * Changes the style properties used to render the layers.
     * @param styleUrl A url to a JSON file containing the stylesheet information to render the layer.
     */
    setStyle(styleUrl: string | any): void;
    /** Fires when the style is changed on the layer. */
    on(type: "style-change", listener: (event: { style: any; target: VectorTileLayer }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface VectorTileLayerConstructor {
	    /**
	     * Create a new VectorTileLayer object.
	     * @param url The URL to the vector tile service or style JSON that will be used to draw the layer.
	     * @param options Optional parameters.
	     */
	    new(url: string | any, options?: VectorTileLayerOptions): VectorTileLayer;
  }

  /** (Currently in beta) A layer for OGC Web Feature Services (WFS). */
  export class WFSLayer {
    /** An array of fields in the layer. */
    fields: Field[];
    /** The full extent of the layer. */
    fullExtent: geometry.Extent;
    /** The geometry type of the features in the layer. */
    geometryType: string;
    /** An array of features in the layer. */
    graphics: Graphic[];
    /** ID assigned to the layer. */
    id: string;
    /** The InfoTemplate for the layer. */
    infoTemplate: InfoTemplate;
    /** The renderer to apply to the layer. */
    renderer: renderers.Renderer;
    /** The visibility of the layer. */
    visible: boolean;
    /** Creates the getFeature parameter based on the version, nsLayerName, nsGeometryFieldName, mode, wkid, inverseFilter, maxFeatures constructor parameters. */
    buildRequest(): string;
    /**
     * Gets the WFS layer capabilities.
     * @param callback An array of WFS layers in JSON format.
     */
    getCapabilities(callback?: Function): void;
    /** Performs the getFeature request. */
    getFeature(): void;
    /** Returns a JSON Object containing all of the WFS parameters. */
    getWFSParameters(): any;
    /** Redraws all the graphics in the layer. */
    redraw(): void;
    /** Refreshes the features in the WFS layer. */
    refresh(): void;
    /** Sets the default line symbol to be used if no renderer is specified. */
    setLineSymbol(): void;
    /** Sets the default point symbol to be used if no renderer is specified. */
    setPointSymbol(): void;
    /** Sets the default polygon symbol to be used if no renderer is specified. */
    setPolygonSymbol(): void;
    /** Sets the WFS parameters using the provided JSON Object. */
    setWFSParameters(): void;
  }
  export interface WFSLayerConstructor {
	    /**
	     * Creates a new WFSLayer object
	     * @param options See options table below for full descriptions of the properties needed for this object.
	     */
	    new(options: WFSLayerOptions): WFSLayer;
  }

  /** A layer for OGC Web Map Services (WMS). */
  export class WMSLayer extends DynamicMapServiceLayer {
    /** All bounding boxes defined for the layer. */
    allExtents: geometry.Extent[];
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
    /** An array of WKIDs of all spatial references defined for the layer. */
    spatialReferences: number[];
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
    /** All bounding boxes defined for the layer. */
    allExtents: geometry.Extent[];
    /** The layer description defines the value of the Abstract capabilities property. */
    description: string;
    /** The layer extent. */
    extent: geometry.Extent;
    /** Contains the value of the LegendURL capabilities property. */
    legendURL: string;
    /** The layer  name. */
    name: string;
    /** An array of WKIDs of all spatial references defined for the layer. */
    spatialReferences: number[];
    /** WMSLayerInfos of the layer's sub layers. */
    subLayers: WMSLayerInfo[];
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
declare namespace esriTypes.opsdashboard {

  /** DataSourceProxy is a proxy class that represents a operations dashboard data source. */
  export class DataSourceProxy {
    /** Read-only: The name of the display field. */
    displayFieldName: string;
    /** Read-only: The collection of fields. */
    fields: layers.Field[];
    /** The geometry type. */
    geometryType: string;
    /** Read-only: The id of the data source. */
    id: string;
    /** Read-only: Indicates if the last query failed and the data source is in a broken state. */
    isBroken: boolean;
    /** Read-only: The mapWidgetId of the data source. */
    mapWidgetId: string;
    /** Read-only: The name of the data source. */
    name: string;
    /** Read-only: The name of the object id field. */
    objectIdFieldName: string;
    /** Read-only: Indicates if the data source supports selections. */
    supportsSelection: boolean;
    /** Read-only: The name of the type id field. */
    typeIdFieldName: string;
    /** Read-only: The collection of feature types. */
    types: layers.FeatureType[];
    /** Clear the selection. */
    clearSelection(): void;
    /**
     * Executes a query and get the result.
     * @param query The query object to apply.
     */
    executeQuery(query: tasks.Query): any;
    /** An object that contains service level metadata about whether or not the layer supports queries using statistics, order by fields, DISTINCT, pagination, query with distance, and returning queries with extents. */
    getAdvancedQueryCapabilities(): any;
    /** Retrieve the associated data source that supports selection. */
    getAssociatedSelectionDataSourceProxy(): any;
    /** Get the associated popupInfo for the data source if any available. */
    getPopupInfo(): any;
    /** Get the associated render object for the data source if any available. */
    getRenderer(): any;
    /**
     * Get the feature type from a feature coming from the data source.
     * @param feature A feature coming from the data source
     */
    getTypeFromFeature(feature: Graphic): number;
    /**
     * Returns the value corresponding to a field name from a feature coming from the data source.
     * @param feature A feature coming from the data source
     * @param fieldName The name of the field for which the value should be returned.
     */
    getValueFromFeature(feature: Graphic, fieldName: string): number | string;
    /**
     * Select features in the data source using a query.
     * @param query The query object to apply
     */
    selectFeatures(query: tasks.Query): void;
    /**
     * Select features in the data source using a collection of object ids.
     * @param objectIds The collection of object ids of the features to select.
     */
    selectFeaturesByObjectIds(objectIds: string[]): void;
  }
  export interface DataSourceProxyConstructor {
      new(): DataSourceProxy
  }

  /** ExtensionBase is a base class used by all the extension proxies. */
  export class ExtensionBase {
    /** Read-only: Indicates if the host application is the Windows Operations Dashboard. */
    isNative: boolean;
    /** Read-only: The URL to the ArcGIS.com site or in-house portal that you are currently signed in to. */
    portalUrl: string;
    /** Get the collection of data sources from the host application. */
    getDataSourceProxies(): any;
    /** Get the data source corresponding to the data source id from the host application. */
    getDataSourceProxy(): any;
    /** Get the collection of map widgets from the host application. */
    getMapWidgetProxies(): any;
    /**
     * Get the map widget corresponding to the map widget id from the host application.
     * @param mapWidgetId A map widget id
     */
    getMapWidgetProxy(mapWidgetId: string): any;
    /**
     * Called when an error occurred during the initialization process with the host application.
     * @param err The error that occurred.
     */
    hostInitializationError(err: Error): void;
    /** Called by the host application when the relationship has been established with the extension. */
    hostReady(): void;
    /**
     * Called by the host application when a map widget has been added to the current view.
     * @param mapWidgetProxy A map widget id.
     */
    mapWidgetAdded(mapWidgetProxy: MapWidgetProxy): void;
    /**
     * Called by the host application when a map widget has been removed from the current view.
     * @param mapWidgetId A map widget id.
     */
    mapWidgetRemoved(mapWidgetId: string): void;
    /** Event indicating that a new data source has been added into the host operation view. */
    on(type: "data-source-added", listener: (event: { dataSourceProxy: any; target: ExtensionBase }) => void): Handle;
    /** Event indicating that a data source has been removed from the host operation view. */
    on(type: "data-source-removed", listener: (event: { dataSourceId: string; target: ExtensionBase }) => void): Handle;
    /** Event indicating that the initialization process was successful. */
    on(type: "host-ready", listener: (event: { target: ExtensionBase }) => void): Handle;
    /** Event indicating that the initialization process encountered an error. */
    on(type: "initialization-error", listener: (event: { error: Error; target: ExtensionBase }) => void): Handle;
    /** Event indicating that a new map widget has been added into the host operation view. */
    on(type: "map-widget-added", listener: (event: { mapWidgetProxy: MapWidgetProxy; target: ExtensionBase }) => void): Handle;
    /** Event indicating that a map widget has been removed from the host operation view. */
    on(type: "map-widget-removed", listener: (event: { mapWidgetId: string; target: ExtensionBase }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ExtensionBaseConstructor {
	    /** "circle" */
	  CIRCLE: any;
	    /** "extent" */
	  EXTENT: any;
	    /** "freehandpolygon" */
	  FREEHAND_POLYGON: any;
	    /** "freehandpolyline" */
	  FREEHAND_POLYLINE: any;
	    /** "line" */
	  LINE: any;
	    /** "point" */
	  POINT: any;
	    /** "polygon" */
	  POLYGON: any;
	    /** "polyline" */
	  POLYLINE: any;
      new(): ExtensionBase
  }

  /** ExtensionConfigurationBase is a base class used by all the extension configuration proxies. */
  export class ExtensionConfigurationBase extends ExtensionBase {
    /** The object that will store the Widget/MapTool/FeatureAction configuration. */
    config: any;
    /** Indicates that the configuration is ready to be persisted or not. */
    readyToPersistConfig: boolean;
  }
  export interface ExtensionConfigurationBaseConstructor {
      new(): ExtensionConfigurationBase
  }

  /** FeatureActionConfigurationProxy is a class used to provide the configuration user experience for an operations dashboard extension feature action. */
  export class FeatureActionConfigurationProxy extends ExtensionConfigurationBase {
  }
  export interface FeatureActionConfigurationProxyConstructor {
      new(): FeatureActionConfigurationProxy
  }

  /** FeatureActionFeatures is a specialized collection of features used by WidgetProxy to hold the collection of features for the associated feature actions. */
  export class FeatureActionFeatures {
    /** The DataSourceProxy from which the collection of features belongs to. */
    dataSourceProxy: DataSourceProxy;
    /**
     * Add a feature to the host collection.
     * @param featureOrObjectId
     */
    addFeature(featureOrObjectId: Graphic | number): void;
    /**
     * Add a collection of features or collection of object id in the host collection.
     * @param featuresOrObjectIds
     */
    addFeatures(featuresOrObjectIds: Graphic[] | number[]): void;
    /** Remove all the features from the host collection. */
    clear(): void;
    /**
     * Test if a feature exists in the host collection.
     * @param featureOrObjectId Feature to test existance for.
     */
    contains(featureOrObjectId: Graphic | number): boolean;
    /**
     * Returns the index of a feature in the host collection.
     * @param featureOrObjectId Feature to return index from.
     */
    indexOf(featureOrObjectId: Graphic | number): number;
    /**
     * Remove a collection of features from the host collection.
     * @param featureOrObjectId Feature to remove.
     */
    removeFeature(featureOrObjectId: Graphic | number): void;
    /**
     * Remove a feature from the host collection.
     * @param featuresOrObjectIds Features to remove.
     */
    removeFeatures(featuresOrObjectIds: Graphic[] | number[]): void;
  }
  export interface FeatureActionFeaturesConstructor {
      new(): FeatureActionFeatures
  }

  /** GraphicsLayerProxy is a proxy class that represents a graphics layer in a map widget in the host application. */
  export class GraphicsLayerProxy {
    /** Read-only: The current host graphics layer maximum visible scale. */
    maxScale: number;
    /** Read-only: The current host graphics layer minimum visible scale. */
    minScale: number;
    /** Read-only: The current host graphics layer opacity ratio. */
    opacity: number;
    /** The current renderer used by the host graphics layer. */
    renderer: renderers.Renderer;
    /** Read-only: The current host graphics layer visibility. */
    visible: boolean;
    /**
     * Update a graphic in the host graphics layer with a new version.
     * @param graphic The graphic to update in the host graphics layer.
     */
    addOrUpdateGraphic(graphic: Graphic): void;
    /**
     * Update graphics in the host graphics layer with a new version.
     * @param graphics The graphics to update in the host graphics layer.
     */
    addOrUpdateGraphics(graphics: Graphic[]): void;
    /** Removes all the graphics from the host graphics layer. */
    clear(): void;
    /**
     * Removes from the host graphics layer a graphic.
     * @param graphic The graphic to remove from the host graphics layer.
     */
    removeGraphic(graphic: Graphic): void;
    /**
     * Sets the host graphics layer maximum scale.
     * @param maxScale
     */
    setMaxScale(maxScale: number): void;
    /**
     * Sets the host graphics layer minimum scale.
     * @param minScale
     */
    setMinScale(minScale: number): void;
    /**
     * Sets the host graphics layer opacity ratio.
     * @param opacity An opacity ratio between 0 and 1.
     */
    setOpacity(opacity: number): void;
    /**
     * Sets the host graphics layer renderer.
     * @param renderer Since the Windows operations dashboard is built using ArcGIS Runtime SDK for WPF, only renderers supported by the WPF should be used, such as renderers.SimpleRenderer, renderers.UniqueValueRenderer and ClassBreaksRenderer.
     */
    setRenderer(renderer: renderers.Renderer): void;
    /**
     * Set the visibility of the host graphics layer.
     * @param visibility The new visibility value.
     */
    setVisibility(visibility: boolean): void;
  }
  export interface GraphicsLayerProxyConstructor {
      new(): GraphicsLayerProxy
  }

  /** MapToolConfigurationProxy is a class used to provide the configuration user experience for an operations dashboard extension map tool. */
  export class MapToolConfigurationProxy extends ExtensionConfigurationBase {
  }
  export interface MapToolConfigurationProxyConstructor {
      new(): MapToolConfigurationProxy
  }

  /** MapToolProxy is a class used to define an operations dashboard extension map tool. */
  export class MapToolProxy {
    /** Read-only: The available size for the map tool user experience on the host map widget. */
    availableDisplaySize: number;
    /** Read-only: The map tool user experience size in pixels. */
    displaySize: any;
    /** Read-only: The map widget that is hosting the map tool user experience. */
    mapWidgetProxy: MapWidgetProxy;
    /** Read-only: The previous map tool user experience state that was passed the last time the map tool was deactivated. */
    previousState: any;
    /**
     * Activates a drawing activity on the host map widget.
     * @param options Drawing options.
     */
    activateMapDrawing(options: any): void;
    /**
     * Called by the host application when the available size for the map tool user experience has changed (user resizes the application or the map widget).
     * @param availableSize The size available on the host map widget for the map tool user experience.
     */
    availableDisplaySizeChanged(availableSize: any): void;
    /** Deactivates the drawing activity on the host map widget. */
    deactivateMapDrawing(): void;
    /**
     * Deactivate the map tool user experience.
     * @param state A JSON object that needs to be persisted in the host until the next activation of the map tool user experience.
     */
    deactivateMapTool(state: any): void;
    /**
     * Called by the host application when the user has completed the drawing activity on the map.
     * @param geometry The geometry captured by the user during the drawing activity.
     */
    mapDrawComplete(geometry: geometry.Geometry): void;
    /**
     * Change the size of the user experience area in the host application for this map tool user experience.
     * @param size The new size for the user experience.
     */
    setDisplaySize(size: any): any;
    /** Event indicating that the available display size for the map tool user experience has changed. */
    on(type: "available-display-size-changed", listener: (event: { size: any; target: MapToolProxy }) => void): Handle;
    /** Event indicating that a previously activate drawing activity has been completed by the user. */
    on(type: "draw-complete", listener: (event: { geometry: geometry.Geometry; target: MapToolProxy }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface MapToolProxyConstructor {
      new(): MapToolProxy
  }

  /** MapWidgetProxy is a proxy class that represents a operations dashboard map widget. */
  export class MapWidgetProxy {
    /** Read-only: The map id. */
    id: string;
    /** Read-only: The name of the map. */
    name: string;
    /** Read-only: The spatial reference of the map. */
    spatialReference: SpatialReference;
    /**
     * Creates a graphics layer in the host map.
     * @param options The options for the new graphics layer
     */
    createGraphicsLayerProxy(options?: any): any;
    /**
     * Destroys in the host map a host graphics layer.
     * @param graphicsLayerProxy The host graphics layer to destroy.
     */
    destroyGraphicsLayerProxy(graphicsLayerProxy: GraphicsLayerProxy): void;
    /** Gets the current host map extent. */
    getMapExtent(): any;
    /** Called by the host application when the extent of the host map has changed. */
    mapExtentChanged(): void;
    /**
     * Pans the map to a new location.
     * @param mapPoint A new location with the same spatial reference as the host map.
     */
    panTo(mapPoint: geometry.Point): void;
    /**
     * Sets an extent on the host map extent.
     * @param extent A new map extent.
     */
    setExtent(extent: geometry.Extent): void;
    /** Subscribes to the host map events. */
    subscribeToMapEvents(): void;
    /** Unsubscribes from the host map events. */
    unsubscribeFromMapEvents(): void;
    /** Event indicating that the host map extent has changed. */
    on(type: "map-extent-change", listener: (event: { extent: geometry.Extent; target: MapWidgetProxy }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface MapWidgetProxyConstructor {
      new(): MapWidgetProxy
  }

  /** WidgetConfigurationProxy is a class used to provide the configuration user experience for an operations dashboard extension widget. */
  export class WidgetConfigurationProxy extends ExtensionConfigurationBase {
    /**
     * Called by the host application when the user has changed the selected data source in the data source selector.
     * @param dataSourceProxy The selected data source.
     * @param dataSourceConfig The associated data source config.
     */
    dataSourceSelectionChanged(dataSourceProxy: DataSourceProxy, dataSourceConfig: any): void;
    /**
     * Get the data source config for a data source.
     * @param dataSourceProxyOrDataSourceId A data source or a data source id.
     */
    getDataSourceConfig(dataSourceProxyOrDataSourceId: DataSourceProxy | string): any;
    /**
     * Called by the host application when the user has changed the selected map widget in the map widget selector.
     * @param mapWidgetProxy The selected map widget.
     */
    mapWidgetSelectionChanged(mapWidgetProxy: MapWidgetProxy): void;
    /** Event indicating the user has changed the selected data source for the configuration. */
    on(type: "data-source-selection-changed", listener: (event: { dataSourceConfig: any; dataSourceProxy: DataSourceProxy; target: WidgetConfigurationProxy }) => void): Handle;
    /** Event indicating the user has changed the selected map widget for the configuration. */
    on(type: "map-widget-selection-changed", listener: (event: { mapWidgetProxy: MapWidgetProxy; target: WidgetConfigurationProxy }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface WidgetConfigurationProxyConstructor {
      new(): WidgetConfigurationProxy
  }

  /** WidgetProxy is a class used to define an operations dashboard extension widget. */
  export class WidgetProxy extends ExtensionBase {
    /** Read-only: If the widget was configured to consume data sources, the dataSourceConfig array will hold a collection of dataSourceConfig objects. */
    dataSourceConfigs: any[];
    /** Read-only: The host collection of features used by the widget feature actions. */
    featureActionFeatures: FeatureActionFeatures;
    /** Read-only: Indicates if the widget has a default feature action associated with. */
    hasDefaultFeatureAction: boolean;
    /** Read-only: Indicates if the widget has feature actions associated with it. */
    hasFeatureActions: boolean;
    /**
     * Activate a drawing toolbar on a map widget.
     * @param options
     * @param mapWidgetProxy The target map widget.
     */
    activateDrawingToolbar(options?: any, mapWidgetProxy?: MapWidgetProxy): any;
    /**
     * Called by the host application when a data source state has expired.
     * @param dataSourceProxy
     * @param associated dataSourceConfig
     */
    dataSourceExpired(dataSourceProxy: DataSourceProxy, associated?: any): void;
    /**
     * Deactivate the drawing toolbar on the map widget.
     * @param mapWidgetProxy The target map widget.
     */
    deactivateDrawingToolbar(mapWidgetProxy?: MapWidgetProxy): void;
    /** Called by the host application when the user has canceled the drawing activity. */
    drawingToolbarDeactivated(): void;
    /**
     * Execute the default feature action.
     * @param featuresOrObjectIds
     */
    executeDefaultFeatureAction(featuresOrObjectIds: Graphic[] | number[]): void;
    /**
     * Get the data source config for a data source.
     * @param dataSourceProxyOrDataSourceId A data source or a data source id.
     */
    getDataSourceConfig(dataSourceProxyOrDataSourceId: DataSourceProxy | string): any;
    /**
     * Called by the host application when the user has finished the drawing activity.
     * @param geometry
     */
    toolbarDrawComplete(geometry: geometry.Geometry): void;
    /** Event indicating that a data source validity has expired. */
    on(type: "data-source-expired", listener: (event: { dataSourceConfig: any; dataSourceProxy: DataSourceProxy; target: WidgetProxy }) => void): Handle;
    /** Event indicating that the user has deactivated the previously activated drawing toolbar on the map widget. */
    on(type: "drawing-toolbar-deactivated", listener: (event: { target: WidgetProxy }) => void): Handle;
    /** Event indicating the user has finished a drawing activity with the previously activated drawing toolbar. */
    on(type: "toolbar-draw-complete", listener: (event: { geometry: geometry.Geometry; target: WidgetProxy }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface WidgetProxyConstructor {
      new(): WidgetProxy
  }

  /** featureActionProxy is a singleton object that allows implementing an operations dashboard Feature Action extension. */
  export class featureActionProxy extends ExtensionBase {
    /** Event raised when the feature action should execute for a set of features. */
    on(type: "execute", listener: (event: { config: any; dataSourceProxy: DataSourceProxy; featureSet: tasks.FeatureSet; target: featureActionProxy }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface featureActionProxyConstructor {
      new(): featureActionProxy
  }
}
declare namespace esriTypes.plugins {

  /** This module defines a class and a feature layer plugin that is used to calculate feature layer statistics. */
  export class FeatureLayerStatistics {
    /**
     * This function is called internally when the plugin is added to a feature layer.
     * @param layer The target layers.FeatureLayer that have the plugin added.
     * @param options Additional options that will be passed into the FeatureLayerStatistics constructor when it is added as a plugin to the target FeatureLayer.
     */
    add(layer: layers.FeatureLayer, options?: any): void;
    /**
     * Calculate class breaks for data stored in the given field.
     * @param params See the Object Specifications table below for the structure of the params object.
     */
    getClassBreaks(params: any): any;
    /**
     * Calculate basic statistics for data stored in the given field.
     * @param params See the Object Specifications table below for the structure of the params object.
     */
    getFieldStatistics(params: any): any;
    /**
     * Calculate heatmap statistics.
     * @param options See the Object Specifications table below for the structure of the options object.
     */
    getHeatmapStatistics(options?: any): any;
    /**
     * Calculate histogram for data stored in the given field.
     * @param params See the Object Specifications table below for the structure of the params object.
     */
    getHistogram(params: any): any;
    /**
     * Get a random sampling of features in this layer.
     * @param options See the Object Specifications table below for the structure of the options object.
     */
    getSampleFeatures(options?: any): any;
    /**
     * Returns a promise that resolves to an object containing spatial statistics for an array of input features.
     * @param params See the Object Specifications table below for the structure of the params object.
     */
    getSpatialStatistics(params: any): any;
    /**
     * Find optimal scale range for viewing this layer.
     * @param options See the Object Specifications table below for the structure of the options object.
     */
    getSuggestedScaleRange(options?: any): any;
    /**
     * Find unique values available for the given field.
     * @param params See the Object Specifications table below for the structure of the params object.
     */
    getUniqueValues(params: any): any;
    /**
     * This function is called internally when the plugin is removed from a feature layer.
     * @param layer The target layers.FeatureLayer that will have the plugin removed.
     */
    remove(layer: layers.FeatureLayer): void;
  }
  export interface FeatureLayerStatisticsConstructor {
	    /**
	     * Creates a new object that is used to calculate statistics about features in a feature layer.
	     * @param params Parameters that define the FeatureLayerStatistics.
	     */
	    new(params: FeatureLayerStatisticsOptions): FeatureLayerStatistics;
  }

  /** A static utility module that adds or removes a SpatialIndex instance on a Map or FeatureLayer. */
  export var spatialIndex: {
    /**
     * Adds an index property to the target instance.
     * @param target The map or feature layer to which the index is connected.
     * @param options See the object specifications table below for the structure of the index  options  object.
     */
    add(target: Map | layers.FeatureLayer, options?: any): void;
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
    intersects(test: geometry.Point | Graphic | geometry.Extent | number[], layerId?: string, getRects?: boolean): any;
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

  /** (Currently in beta) BlendRenderer allows you to easily identify the predominant attribute among two or more competing attributes of a feature and visualizes the strength of that predominance using blended colors. */
  export class BlendRenderer {
    /** This determines how colors are blended together. */
    blendMode: string;
    /** An array of objects to blend containing the field name and color to use. */
    fields: any[];
    /** The field to normalize. */
    normalizationField: string;
    /** An array of objects which determines opacity. */
    opacityStops: any[];
    /** The BlendRenderer applies to the color of the symbol. */
    symbol: symbols.Symbol;
    /**
     * Sets the mode that determines how colors are blended together.
     * @param blendMode The blend mode used to determine how colors are blended together.
     */
    setBlendMode(blendMode: string): void;
    /**
     * Sets an array of objects to blend containing the field name and color to use.
     * @param fields An array of objects to blend containing the field name and color to use.
     */
    setFields(fields: any[]): void;
    /**
     * Sets the field to normalize
     * @param field The field to normalize.
     */
    setNormalizationField(field: string): void;
    /**
     * Sets an array of objects which determines opacity.
     * @param opacityStops Sets an array of objects which determines opacity.
     */
    setOpacityStops(opacityStops: any[]): void;
    /**
     * Sets the symbol to blend.
     * @param symbol The symbol to blend.
     */
    setSymbol(symbol: symbols.Symbol): void;
  }
  export interface BlendRendererConstructor {
	    /**
	     * Creates a new BlendRenderer object.
	     * @param params Required and optional parameters.
	     */
	    new(params?: BlendRendererOptions): BlendRenderer;
  }

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
    addBreak(minValueOrInfo: number | any, maxValue?: number, symbol?: symbols.Symbol): void;
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
	    new(defaultSymbol: symbols.Symbol, attributeField: string | Function): ClassBreaksRenderer;
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

  /** The base class for the renderers - SimpleRenderer, ClassBreaksRenderer, UniqueValueRenderer, DotDensityRenderer, ScaleDependentRenderer, TemporalRenderer, HeatmapRenderer, and VectorFieldRenderer used with a layers.GraphicsLayer and FeatureLayer. */
  export class Renderer {
    /** An object defining a color ramp used to render the layer. */
    colorInfo: any;
    /** An object that describes how opacity of features is calculated. */
    opacityInfo: any;
    /** Defines how marker symbols are rotated. */
    rotationInfo: any;
    /** Defines the size of the symbol where feature size is proportional to data value. */
    sizeInfo: any;
    /** This property allows you to define how to render values in a layer. */
    visualVariables: any[];
    /**
     * Gets the color for the Graphic.
     * @param graphic Graphic to get color from.
     * @param options This optional parameter supports colorInfo.
     */
    getColor(graphic: Graphic, options?: any): Color;
    /**
     * Returns the opacity value for the specified graphic.
     * @param graphic Returns the opacity value appropriate for the given graphic.
     * @param options This optional parameter supports opacityInfo.
     */
    getOpacity(graphic: Graphic, options?: any): number;
    /**
     * Returns the angle of rotation (in degrees) for the graphic calculated using rotationInfo.
     * @param graphic An input graphic for which you want to get the angle of rotation.
     * @param options This optional parameter supports rotationInfo.
     */
    getRotationAngle(graphic: Graphic, options?: any): number;
    /**
     * Return the symbol size (in pixels) for the graphic, calculated using sizeInfo.
     * @param graphic The graphic for which you want to calculate the symbol size.
     * @param options This optional parameter supports sizeInfo.
     */
    getSize(graphic: Graphic, options?: any): number;
    /**
     * Gets the symbol for the Graphic.
     * @param graphic Graphic to symbolize.
     */
    getSymbol(graphic: Graphic): symbols.Symbol;
    /**
     * Returns the visual variable of the specified type.
     * @param type The type of visual variable desired.
     */
    getVisualVariablesForType(type: string): any;
    /** Indicates if the renderer has defined visualVariables. */
    hasVisualVariables(): boolean;
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
    /**
     * Set size info of the renderer to modify the symbol size based on data value.
     * @param info An object with the same properties as sizeInfo.
     */
    setSizeInfo(info: any): Renderer;
    /**
     * Sets the renderer with the specified  visualVariables.
     * @param visualParams The specified visualVariables.
     */
    setVisualVariables(visualParams: any[]): void;
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
	     * @param params Each element in the array is an object that describes the class breaks information.
	     * @param timeUnits The unit in which the minimum and maximum break values are measured.
	     */
	    new(params: TimeClassBreaksAgerOptions[], timeUnits?: string): TimeClassBreaksAger;
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
    addValue(valueOrInfo: string | any, symbol?: symbols.Symbol): void;
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
	    new(defaultSymbol: symbols.Symbol, attributeField: string | Function, attributeField2?: string, attributeField3?: string, fieldDelimeter?: string): UniqueValueRenderer;
	    /**
	     * Creates a new Unique Value Renderer.
	     * @param json JSON object representing the UniqueValueRenderer.
	     */
	    new(json: Object): UniqueValueRenderer;
  }

  /** The VectorFieldRenderer function symbolizes a U-V or Magnitude-Direction data. */
  export class VectorFieldRenderer extends Renderer {
  }
  export interface VectorFieldRendererConstructor {
	    /** Flow from angle */
	  FLOW_FROM: any;
	    /** Flow to angle */
	  FLOW_TO: any;
	    /** Beaufort point symbol (feet) */
	  STYLE_BEAUFORT_FEET: any;
	    /** Beaufort point symbol (kilometers) */
	  STYLE_BEAUFORT_KM: any;
	    /** Beaufort point symbol (knots) */
	  STYLE_BEAUFORT_KN: any;
	    /** Beaufort point symbol (meters) */
	  STYLE_BEAUFORT_METER: any;
	    /** Beaufort point symbol (miles) */
	  STYLE_BEAUFORT_MILE: any;
	    /** Classified arrow point symbol */
	  STYLE_CLASSIFIED_ARROW: any;
	    /** Ocean current point symbol (knots) */
	  STYLE_OCEAN_CURRENT_KN: any;
	    /** Ocean current point symbol (meters) */
	  STYLE_OCEAN_CURRENT_M: any;
	    /** Simple scalar point symbol */
	  STYLE_SCALAR: any;
	    /** Single arrow point symbol */
	  STYLE_SINGLE_ARROW: any;
	    /** Barb wind speed point symbol */
	  STYLE_WIND_BARBS: any;
	    /**
	     * Creates a new VectorFieldRenderer object.
	     * @param options Optional parameters.
	     */
	    new(options?: VectorFieldRendererOptions): VectorFieldRenderer;
  }

  /** Utility method to create a renderer from JSON. */
  export var jsonUtils: {
    /**
     * Converts the input JSON object to the appropriate renderer.* object.
     * @param json The JSON object.
     */
    fromJson(json: Object): Renderer;
  };
  /** This module contains a collection of helper functions used to create pre-configured renderers for smart feature styling. */
  export var smartMapping: {
    /**
     * Creates a renderer for visualizing features using colors.
     * @param params See the object specifications table below for the structure of the params object.
     */
    createClassedColorRenderer(params: any): any;
    /**
     * Creates a renderer for visualizing features by varying their size.
     * @param params See the object specifications table below for the structure of the params object.
     */
    createClassedSizeRenderer(params: any): any;
    /**
     * Creates an object defining a color ramp used to render a layer.
     * @param params See the object specifications table below for the structure of the params object.
     */
    createColorInfo(params: any): any;
    /**
     * Creates a renderer for visualizing features using colors.
     * @param params See the object specifications table below for the structure of the params object.
     */
    createColorRenderer(params: any): any;
    /**
     * Creates a renderer for visualizing features using heatmap.
     * @param params See the object specifications table below for the structure of the params object.
     */
    createHeatmapRenderer(params: any): any;
    /**
     * Creates an object that describes how opacity of features is calculated.
     * @param params See the object specifications table below for the structure of the params object.
     */
    createOpacityInfo(params: any): any;
    /**
     * Creates a renderer for identifying features by their color.
     * @param params See the Object Specifications table below for the structure of the params object.
     */
    createPredominanceRenderer(params: any): any;
    /**
     * Defines the size of the symbol where feature size is proportional to data value.
     * @param params See the object specifications table below for the structure of the params object.
     */
    createSizeInfo(params: any): any;
    /**
     * Creates a renderer for visualizing features by varying their size based on data.
     * @param params See the object specifications table below for the structure of the params object.
     */
    createSizeRenderer(params: any): any;
    /**
     * Creates a renderer for visualizing features by their type.
     * @param params See the object specifications table below for the structure of the params object.
     */
    createTypeRenderer(params: any): any;
    /**
     * Searches the fields of an input layer or array of field objects for field names commonly used in rendering based on usage (e.g.
     * @param params See the object specifications table below for details about the params object.
     */
    getSuggestedField(params: any): any;
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
    setSize(size: number | string): Font;
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
	    new(size?: number | string, style?: string, variant?: string, weight?: string, family?: string): Font;
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
    /** Symbol color - only applies when SimpleFillSymbol.style = 'STYLE_SOLID'. */
    color: Color;
    /** The fill style. */
    style: string;
    /**
     * Sets the symbol color - only applies when style is STYLE_SOLID.
     * @param color Symbol color.
     */
    setColor(color: Color): SimpleFillSymbol;
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
    /** The halo color used for the text symbol.Known limitations:IE 9 and below not supported.Sub-pixel halo (i.e. */
    haloColor: Color;
    /** The size (in pixel units) used if setting a halo on a text symbol.Known limitations:IE 9 and below not supported.Sub-pixel halo (i.e. */
    haloSize: number;
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
     * Sets a halo color for the text symbol.NOTE: Known limitations when working with the text symbol halo:IE 9 and below not supported.Sub-pixel halo (i.e.
     * @param color The color used for the text symbol halo.
     */
    setHaloColor(color: Color): TextSymbol;
    /**
     * Sets the size of the halo (in pixels) used for the text symbol.NOTE: Known limitations when working with the text symbol halo:IE 9 and below not supported.Sub-pixel halo (i.e.
     * @param size The size (in pixels) of the text symbol halo.
     */
    setHaloSize(size: number): TextSymbol;
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
    areaUnit: number | string;
    /** Defines the type of calculation for the geometry. */
    calculationType: string;
    /** The length unit in which perimeters of polygons will be calculated. */
    lengthUnit: number | string;
    /** geometry.Polygon geometries for which to compute areas and lengths */
    polygons: geometry.Polygon[];
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
    unit: number;
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
    impedanceAttribute: string;
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
    /** Travel modes define how a pedestrian, car, truck or other medium of transportation moves through the street network. */
    travelMode: any;
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
    /** Returns an object describing a Closest Facility service endpoint (URL of the endpoint is specified in the constructor). */
    getServiceDescription(): any;
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
    lengthUnit: number | string;
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
    distanceUnit: number | string;
    /** When true, the geodesic distance between geometry1 and geometry2 is measured. */
    geodesic: boolean;
    /** The geometry from which the distance is to be measured. */
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
    /** Specifies the number of decimal places for the geometries returned by the query operation. */
    geometryPrecision: number;
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
    type: string;
  }
  export interface GPMessageConstructor {
	    /** esriJobMessageTypeAbort - Indicates the job has aborted. */
	  TYPE_ABORT: any;
	    /** esriJobMessageTypeEmpty - Indicates the task returned an empty result. */
	  TYPE_EMPTY: any;
	    /** esriJobMessageTypeError - Indicates an error was returned during the execution of the job. */
	  TYPE_ERROR: any;
	    /** esriJobMessageTypeInformative - Indicates the message is informative. */
	  TYPE_INFORMATIVE: any;
	    /** esriJobMessageTypeProcessDefinition */
	  TYPE_PROCESS_DEFINITION: any;
	    /** esriJobMessageTypeProcessStart - Indicates the GP process has started. */
	  TYPE_PROCESS_START: any;
	    /** esriJobMessageTypeProcessStop - Indicates the GP process has stopped. */
	  TYPE_PROCESS_STOP: any;
	    /** esriJobMessageTypeWarning - Indicates the message is a warning. */
	  TYPE_WARNING: any;
      new(): GPMessage
  }

  /** Sets the geometries, maximum deviation and units for the generalize operation. */
  export class GeneralizeParameters {
    /** The maximum deviation unit. */
    deviationUnit: number | string;
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
    labelPoints(polygons: geometry.Polygon[], callback?: Function, errback?: Function): any;
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
    on(type: "buffer-complete", listener: (event: { geometries: geometry.Polygon[]; target: GeometryService }) => void): Handle;
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
    on(type: "label-points-complete ", listener: (event: { geometries: geometry.Point[]; target: GeometryService }) => void): Handle;
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
    checkJobStatus(jobId: string, callback?: Function, errback?: Function): any;
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
    submitJob(inputParameters: any, callback?: Function, statusCallback?: Function, errback?: Function): any;
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
    /** Specifies the number of decimal places for the geometries returned by the query operation. */
    geometryPrecision: number;
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
    noData: string | number;
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

  /** Performs an identify operation on an image service resource. */
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

  /** Defines parameters for the ImageServiceMeasureTask. */
  export class ImageServiceMeasureParameters {
    /** The angular unit in which directions of line segments will be calculated. */
    angularUnit: string;
    /** The area unit in which areas of polygons will be calculated. */
    areaUnit: string;
    /** A geometry that defines the "from" location of the measurement. */
    fromGeometry: geometry.Geometry;
    /** The linear unit in which height, length, or perimeters will be calculated. */
    linearUnit: string;
    /** Specifies the mosaic rule when defining how individual images should be mosaicked. */
    mosaicRule: layers.MosaicRule;
    /** The mensuration rule to apply to the measure operation. */
    operation: string;
    /** The pixel resolution being measured. */
    pixelSize: geometry.Point;
    /** A geometry that defines the "to" location of the measurement. */
    toGeometry: geometry.Geometry;
    /** Converts the ImageServiceMeasureParameters instance to a JSON object. */
    toJson(): any;
  }
  export interface ImageServiceMeasureParametersConstructor {
	    /** Calculates the area and perimeter of given geometry. */
	  OPERATION_AREA_PERIMETER: any;
	    /** Calculates the area and perimeter of the given geometry using the DEM defined by the service to refine the calculation. */
	  OPERATION_AREA_PERIMETER_3D: any;
	    /** Calculates the height of a structure by measuring from the base of the structure to the top of the structure. */
	  OPERATION_BASE_TOP: any;
	    /** Calculates the height of a structure by measuring from the base of the structure to the top of the structure's shadow on the ground. */
	  OPERATION_BASE_TOP_SHADOW: any;
	    /** Calculates the centroid of a given area. */
	  OPERATION_CENTROID: any;
	    /** Calculates the centroid of a given area, using the DEM defined by the service to refine the calculation. */
	  OPERATION_CENTROID_3D: any;
	    /** Calculates the distance and azimuth angle between two points. */
	  OPERATION_DISTANCE_ANGLE: any;
	    /** Calculates the distance and azimuth angle between two points using the DEM defined by the service to refine the calculation. */
	  OPERATION_DISTANCE_ANGLE_3D: any;
	    /** Measures the location of a given point. */
	  OPERATION_POINT: any;
	    /** Measures the location of a given point, using the DEM defined by the service to refine the calculation. */
	  OPERATION_POINT_3D: any;
	    /** Calculates the height of a structure by measuring from the top of the structure to the top of the structure's shadow on the ground. */
	  OPERATION_TOP_TOP_SHADOW: any;
      new(): ImageServiceMeasureParameters
  }

  /** Performs a measure operation on an Image Service. */
  export class ImageServiceMeasureTask {
    /**
     * Sends a request to an image service to perform the designated measure operation.
     * @param params Parameters to pass to the server to execute the task.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(params: ImageServiceMeasureParameters, callback?: Function, errback?: Function): any;
    /** Fires when measure completes. */
    on(type: "complete", listener: (event: { target: ImageServiceMeasureTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ImageServiceMeasureTaskConstructor {
	    /**
	     * Creates a new instance of ImageServiceMeasureTask
	     * @param url URL to the ArcGIS Server REST resource that represents an image service.
	     */
	    new(url: string): ImageServiceMeasureTask;
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
    lengthUnit: number | string;
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
    /** The name of the output parameter as defined by the geoprocessing task in the Services Directory. */
    paramName: string;
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
    /** The text that appears on the Print widget's print button. */
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
    /** Indicates whether visible LabelLayers in the map are displayed or not. */
    showLabels: boolean;
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
    /** The well-known id {wkid:number} or well-known text {wkt:string} or  for the datum transformation to be applied on the projected geometries. */
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

  /** Input parameters for the RouteTask. */
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
    /** The RouteTask can help you find the most efficient path for visiting a given list of stops. */
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
    /** Travel modes define how a pedestrian, car, truck or other medium of transportation moves through the street network. */
    travelMode: any;
    /** If true, the hierarchy attribute for the network should be used in analysis. */
    useHierarchy: boolean;
    /** A useful feature of the RouteTask is the ability to constrain stop visits to certain times of day, or "time windows". */
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

  /** The ArcGIS JavaScript API's RouteTask allows you to find routes between two or more locations and optionally get driving directions. */
  export class RouteTask {
    /** URL to the ArcGIS Server REST resource that represents a network analysis service. */
    url: string;
    /** Returns an object describing a Route service endpoint (URL of the endpoint is specified in the constructor). */
    getServiceDescription(): any;
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
    /** Travel modes define how a pedestrian, car, truck or other medium of transportation moves through the street network. */
    travelMode: any;
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
    /** Returns an object describing a Service Area service endpoint (URL of the endpoint is specified in the constructor). */
    getServiceDescription(): any;
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
    /** The field name or standard SQL expression on which statistics will be calculated. */
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
    extendHow: number;
    /** The array of polylines to trim or extend. */
    polylines: geometry.Polyline[];
    /** A polyline used as a guide for trimming or extending input polylines. */
    trimExtendTo: geometry.Polyline;
  }
  export interface TrimExtendParametersConstructor {
	    /** Default value. */
	  DEFAULT_CURVE_EXTENSION: any;
	    /** When an extension is performed at an end, do not extrapolate the end segments attributes for the new point. */
	  KEEP_END_ATTRIBUTES: any;
	    /** When an extension is performed at an end, do not extrapolate the end segment's attributes for the new point. */
	  NO_END_ATTRIBUTES: any;
	    /** Do not extend the 'from' end of any path. */
	  NO_EXTEND_AT_FROM: any;
	    /** Do not extend the 'to' end of any path. */
	  NO_EXTEND_AT_TO: any;
	    /** When an extension is performed at an end, relocate the end point to the new position. */
	  RELOCATE_ENDS: any;
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
    /** Fires when the suggestLocations method has completed. */
    on(type: "suggest-locations-complete", listener: (event: { suggestions: any[]; target: Locator }) => void): Handle;
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
declare namespace esriTypes.tasks.datareviewer {

  /** Encapsulates a Batch Validation Job. */
  export class BatchValidationJob {
    /** Contains a list of batch run IDs, one for each batch validation execution associated with this batch validation job. */
    batchRunIds : string[];
    /** Gets job creation date. */
    creationDate: Date;
    /** Gets the Job Id. */
    jobId: string;
    /** Gets batch job execution details. */
    jobInfo: BatchValidationJobInfo;
    /** Gets batch job parameters. */
    parameters: BatchValidationParameters;
    /** Gets the job status. */
    status: string;
    /** Gets the job type. */
    type: string;
  }
  export interface BatchValidationJobConstructor {
      new(): BatchValidationJob
  }
  /** Encapsulates batch validation job execution details. */
  export class BatchValidationJobInfo {
    /** Gets the batch run Id of the job execution. */
    batchRunId: string;
    /** Gets the finish time of the job execution. */
    finishTimeUTC: Date;
    /** Gets the job's geoprocessing Job Id. */
    gpJobId: string;
    /** Gets the URL of the geoprocessing service that executed the batch validation. */
    gpUrl: string;
    /** Gets batch validation messages. */
    messages: string;
    /** Gets the start time of the job execution. */
    startTimeUTC: Date;
    /** Gets the batch validation status. */
    status: string;
  }
  export interface BatchValidationJobInfoConstructor {
      new(): BatchValidationJobInfo
  }

  /** Encapsulates batch job parameters including session Id, production workspace and analysis area. */
  export class BatchValidationParameters {
    /** A geometry that defines the validation extent. */
    analysisArea: geometry.Polygon;
    /** Read-only: Gets the uploaded batch job name. */
    batchJobFileName: string;
    /** Controls validation type on enterprise geodatabases. */
    changedFeaturesOnly: boolean;
    /** Read-only: Gets the name of the web user that created the batch job schedule. */
    createdBy: string;
    /** Gets or sets the batch validation execution schedule. */
    cronExpression: string;
    /** Gets or sets the ending date for a batch validation schedule. */
    executionsEndDate: Date;
    /** Gets or sets the ID of the uploaded batch job. */
    fileItemId: string;
    /** Gets or sets the maximum number of batch validation executions that can run. */
    maxNumberOfExecutions: number;
    /** Gets or sets the production workspace path. */
    productionWorkspace: string;
    /** Gets or sets the ArcGIS Data Reviewer session. */
    sessionString: string;
    /** Gets or sets the batch validation title. */
    title: string;
    /** Gets or sets the user name under which records are written to the reviewer workspace. */
    userName: string;
  }
  export interface BatchValidationParametersConstructor {
      new(): BatchValidationParameters
  }

  /** Exposes functions for executing and scheduling Batch Validation in ArcGIS Data Reviewer for Server. */
  export class BatchValidationTask {
    /**
     * Cancels an executing job.
     * @param jobId Job Id of the batch validation job to cancel.
     */
    cancelJobExecution(jobId: string): any;
    /**
     * Creates a new Reviewer session.
     * @param sessionName Name of the session to be created.
     * @param sessionOptions Session properties to be used to create the session.
     */
    createReviewerSession(sessionName: string, sessionOptions: SessionOptions): any;
    /**
     * Deletes an existing scheduled Batch Validation Job.
     * @param jobId Job Id of the batch validation job to delete.
     */
    deleteJob(jobId: string): any;
    /**
     * Pauses an existing Batch Validation Job's schedule.
     * @param jobId Job Id of the batch validation job to be disabled.
     */
    disableJob(jobId: string): any;
    /**
     * Edits the schedule, settings and title of an existing Batch Validation Job.
     * @param jobId Job Id of the batch validation job to edit.
     * @param parameters Parameters to change in an existing batch job.
     */
    editJob(jobId: string, parameters: BatchValidationParameters): any;
    /**
     * Restarts an existing Batch Validation Job's schedule.
     * @param jobId Job Id of the batch validation job to enable.
     */
    enableJob(jobId: string): any;
    /**
     * Executes an adhoc job.
     * @param parameters Parameters specifying the details of a job to execute.
     */
    executeJob(parameters: BatchValidationParameters): any;
    /** Retrieves all adhoc jobs from the server and returns an array of BatchValidationJob with the information. */
    getAdhocJobsList(): any;
    /** Returns an array of custom field names defined in a Reviewer workspace. */
    getCustomFieldNames(): any;
    /**
     * Fetches Batch Validation Job details.
     * @param jobId Job Id of the batch validation job.
     */
    getJobDetails(jobId: string): any;
    /**
     * Fetches the Job Execution details of a Batch Validation Job.
     * @param jobId Job Id of the batch validation job.
     */
    getJobExecutionDetails(jobId: string): any;
    /** Returns an object that contains Scheduled and AdhocJob IDs in two separate arrays. */
    getJobIds(): any;
    /** Retrieves a list of localized life cycle status strings from the Reviewer workspace. */
    getLifecycleStatusStrings(): any;
    /** Extracts the MapServer url from the full ArcGIS Data Reviewer for Server SOE url. */
    getReviewerMapServerUrl(): string;
    /** Returns an array of sessions in a Reviewer workspace. */
    getReviewerSessions(): any;
    /** Retrieves all scheduled jobs from the server and returns an array of BatchValidationJob with the information. */
    getScheduledJobsList(): any;
    /**
     * Schedules a new Batch Validation.
     * @param parameters Parameters for scheduling a batch job.
     */
    scheduleJob(parameters: BatchValidationParameters): any;
    /** Fires when the cancelJobExecution method is complete. */
    on(type: "cancel-job-execution", listener: (event: { canceled: boolean; target: BatchValidationTask }) => void): Handle;
    /** Fires when the createReviewerSessions method is complete. */
    on(type: "create-reviewer-sessions", listener: (event: { reviewerSession: ReviewerSession; target: BatchValidationTask }) => void): Handle;
    /** Fires when the deleteJob method is complete. */
    on(type: "delete-job", listener: (event: { deleted: boolean; target: BatchValidationTask }) => void): Handle;
    /** Fires when the disableJob method is complete. */
    on(type: "disable-job", listener: (event: { disabled: boolean; target: BatchValidationTask }) => void): Handle;
    /** Fires when the editJob method is complete. */
    on(type: "edit-job", listener: (event: { edited: boolean; target: BatchValidationTask }) => void): Handle;
    /** Fires when the enableJob method is complete. */
    on(type: "enable-job", listener: (event: { enabled: boolean; target: BatchValidationTask }) => void): Handle;
    /** Fires when an error occurs during a BatchValidationTask method execution. */
    on(type: "error", listener: (event: { error: Error; target: BatchValidationTask }) => void): Handle;
    /** Fires when the executeJob method is complete. */
    on(type: "execute-job", listener: (event: { jobId: string; target: BatchValidationTask }) => void): Handle;
    /** Fires when the getAdhocJobsList method is complete. */
    on(type: "get-adhoc-jobs-list", listener: (event: { adhocJobs: BatchValidationJob[]; target: BatchValidationTask }) => void): Handle;
    /** Fires when the getCustomFieldNames method is complete. */
    on(type: "get-custom-field-names", listener: (event: { customFieldNames: string[]; target: BatchValidationTask }) => void): Handle;
    /** Fires when the getJobDetails method is complete. */
    on(type: "get-job-details", listener: (event: { jobDetails: BatchValidationJob; target: BatchValidationTask }) => void): Handle;
    /** Fires when the getJobExecutionDetails method is complete. */
    on(type: "get-job-execution-details", listener: (event: { jobInfo: BatchValidationJobInfo; target: BatchValidationTask }) => void): Handle;
    /** Fires when the getJobIds method is complete. */
    on(type: "get-job-ids", listener: (event: { adhocJobs: string[]; scheduledJobs: string[]; target: BatchValidationTask }) => void): Handle;
    /** Fires when the getLifecycleStatusStrings method is complete. */
    on(type: "get-lifecycle-status-strings", listener: (event: { lifecycleStatusStrings: string[]; target: BatchValidationTask }) => void): Handle;
    /** Fires when the getReviewerSessions method is complete. */
    on(type: "get-reviewer-sessions", listener: (event: { reviewerSessions: ReviewerSession[]; target: BatchValidationTask }) => void): Handle;
    /** Fires when the getScheduledJobsList method is complete. */
    on(type: "get-scheduled-jobs-list", listener: (event: { scheduledJobs: BatchValidationJob[]; target: BatchValidationTask }) => void): Handle;
    /** Fires when the scheduleJob method is complete. */
    on(type: "schedule-job", listener: (event: { jobId: string; target: BatchValidationTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface BatchValidationTaskConstructor {
	    /**
	     * Creates a new BatchValidationTask object.
	     * @param url The DataReviewerServer Server Object Extension (SOE) URL.
	     */
	    new(url: string): BatchValidationTask;
  }

  /** Encapsulates data describing a Dashboard Result. */
  export class DashboardResult {
    /** Array of reviewer result field value counts. */
    counts: any[];
    /** Name of the reviewer results field. */
    fieldName: string;
    /** Array of reviewer results field values. */
    fieldValues: any[];
    /** An instance of ReviewerFilters class. */
    filters: ReviewerFilters;
    /**
     * Gets the result count for a field value.
     * @param fieldValue Unique field value from the fieldValues array.
     */
    getCount(fieldValue: string | number): number;
  }
  export interface DashboardResultConstructor {
      new(): DashboardResult
  }

  /** Provides functionality to retrieve dashboard results from an ArcGIS Data Reviewer for Server Dashboard REST resource. */
  export class DashboardTask {
    /**
     * Creates a new Reviewer session.
     * @param sessionName Name of the session to be created.
     * @param sessionOptions Session properties to be used to create the session.
     */
    createReviewerSession(sessionName: string, sessionOptions: SessionOptions): any;
    /** Returns an array of custom field names defined in a Reviewer workspace. */
    getCustomFieldNames(): any;
    /** Requests Dashboard results field names. */
    getDashboardFieldNames(): any;
    /**
     * Requests dashboard results by fieldName.
     * @param fieldName layers.Field name for dashboard results.
     * @param filters Instance of ReviewerFilters containing one or more filters used to narrow down dashboard results.
     */
    getDashboardResults(fieldName: string, filters?: ReviewerFilters): any;
    /** Retrieves a list of localized life cycle status strings from the Reviewer workspace. */
    getLifecycleStatusStrings(): any;
    /** Extracts the MapServer url from the full ArcGIS Data Reviewer for Server SOE url. */
    getReviewerMapServerUrl(): string;
    /** Returns an array of sessions in a Reviewer workspace. */
    getReviewerSessions(): any;
    /** Fires when the createReviewerSessions method is complete. */
    on(type: "create-reviewer-sessions", listener: (event: { reviewerSession: ReviewerSession; target: DashboardTask }) => void): Handle;
    /** Fires when an error occurs during a DashboardTask method execution. */
    on(type: "error", listener: (event: { error: Error; target: DashboardTask }) => void): Handle;
    /** Fires when the getCustomFieldNames method is complete. */
    on(type: "get-custom-field-names", listener: (event: { customFieldNames: string[]; target: DashboardTask }) => void): Handle;
    /** Fires when the getDashboardFieldNames method is complete. */
    on(type: "get-dashboard-field-names", listener: (event: { fieldNames: string[]; target: DashboardTask }) => void): Handle;
    /** Fires when the getDashboardResults method is complete. */
    on(type: "get-dashboard-results", listener: (event: { dashboardResult: DashboardResult; target: DashboardTask }) => void): Handle;
    /** Fires when the getLifecycleStatusStrings method is complete. */
    on(type: "get-lifecycle-status-strings", listener: (event: { lifecycleStatusStrings: string[]; target: DashboardTask }) => void): Handle;
    /** Fires when the getReviewerSessions method is complete. */
    on(type: "get-reviewer-sessions", listener: (event: { reviewerSessions: ReviewerSession[]; target: DashboardTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface DashboardTaskConstructor {
	    /**
	     * Creates a new DashboardTask object.
	     * @param url The DataReviewerServer Server Object Extension (SOE) URL.
	     */
	    new(url: string): DashboardTask;
  }
  /** Encapsulates data used for retrieving results from the reviewer workspace. */
  export class GetResultsQueryParameters {
    /** The page number, zero based index, of the results to return. */
    pageNumber: number;
    /** The number of items to list on a page. */
    pageSize: number;
    /** Array of field names. */
    returnFields: any[];
    /** Indicates a field name by which to sort. */
    sortBy: string;
    /** Controls sort order. */
    sortDescending: boolean;
    /** Returns a JSON representation of an instance of GetResultsQueryParameters. */
    toJSON(): any;
  }
  export interface GetResultsQueryParametersConstructor {
      new(): GetResultsQueryParameters
  }
  /** Encapsulates data used by the writeFeatureAsResult and writeResult methods of the ReviewerResults class. */
  export class ReviewerAttributes {
    /** Represents the state of a reviewer result. */
    lifecycleStatus: number;
    /** Extra information describing a result or feature. */
    notes: string;
    /** Represents an ArcGIS Data Reviewer resource name. */
    resourceName: string;
    /** A status value (any string) to write to the ReviewStatus field for the result or feature written to the reviewer workspace. */
    reviewStatus: string;
    /** The user name under which results or features are written to the reviewer workspace. */
    reviewTechnician: string;
    /** Represents an ArcGIS Data Reviewer session ID, the numeric identifier of the session. */
    sessionId: number;
    /** Represents an ArcGIS Data Reviewer severity value. */
    severity: number;
    /** Subtype from the original feature that was checked and caused an error. */
    subtype: string;
    /** Returns a JSON representation of an instance of ReviewerAttributes. */
    toJSON(): any;
  }
  export interface ReviewerAttributesConstructor {
      new(): ReviewerAttributes
  }

  /** ReviewerFilters limit or precisely define which results to generate by applying conditions to a query for dashboard results. */
  export class ReviewerFilters {
    /**
     * Queries an attribute by a value.
     * @param fieldName The field used to perform the filter.
     * @param fieldValues A value or an Array of values in fieldName to filter.
     */
    addAttributeFilter(fieldName: string, fieldValues: string | number | any[]): void;
    /**
     * Queries an attribute by a range of values.
     * @param fieldName The field used to perform the filter.
     * @param min Minimum value range.
     * @param max Maximum value range.
     */
    addRangeFilter(fieldName: string, min: string | number, max: string | number): void;
    /**
     * Queries by a polygon.
     * @param geometry The geometry used to perform the filter.
     */
    addSpatialFilter(geometry: geometry.Polygon): void;
    /** Returns the count of ReviewerFilters added. */
    getCount(): number;
    /** Returns a JSON representation of a filter object. */
    toJSON(): any;
  }
  export interface ReviewerFiltersConstructor {
      new(): ReviewerFilters
  }
  /** The ReviewerLifecycle object specifies constant values for all lifecycle status and lifecycle phase strings within the Reviewer quality control workflow. */
  export var ReviewerLifecycle: {
    /** Acceptable lifecycleStatus code = 4 belongs to Verification Phase. */
    ACCEPTABLE: number;
    /** Code for Correction Phase. */
    CORRECTION: number;
    /** Exception lifecycleStatus code = 9 belongs to Verification Phase. */
    EXCEPTION: number;
    /** Failed lifecycleStatus code = 12 belongs to Verification Phase. */
    FAILED: number;
    /** Object containing lifecycle phase codes and their associated descriptions. */
    LIFECYCLEPHASE_DESCRIPTIONS: any;
    /** Object containing lifecycle status codes and their associated descriptions. */
    LIFECYCLESTATUS_DESCRIPTIONS: any;
    /** Mark As Exception lifecycleStatus code = 3 belongs to Correction Phase. */
    MARK_AS_EXCEPTION: number;
    /** New lifecycleStatus code = 10 belongs to Review Phase. */
    NEW: number;
    /** Passed lifecycleStatus code = 11 belongs to Verification Phase. */
    PASSED: number;
    /** Resolved lifecycleStatus code = 2 belongs to Correction Phase. */
    RESOLVED: number;
    /** Code for Review Phase. */
    REVIEW: number;
    /** Reviewed lifecycleStatus code = 1 belongs to Review Phase. */
    REVIEWED: number;
    /** Unacceptable lifecycleStatus code = 6 belongs to Review Phase. */
    UNACCEPTABLE: number;
    /** Unknown lifecycleStatus code = 0 belongs to Review Phase. */
    UNKNOWN: number;
    /** Unresolved Acceptable lifecycleStatus code = 8 belongs to Verification Phase. */
    UNRESOLVED_ACCEPTABLE: number;
    /** Unresolved Exception lifecycleStatus code = 5 belongs to Verification Phase. */
    UNRESOLVED_EXCEPTION: number;
    /** Unresolved Unacceptable lifecycleStatus code = 7 belongs to Review Phase. */
    UNRESOLVED_UNACCEPTABLE: number;
    /** Code for Verififcation Phase. */
    VERIFICATION: number;
    /**
     * This function returns the the associated lifecycle phase of the input lifecycle status.
     * @param lifecycleStatus The lifecycle status code.
     */
    getCurrentLifecyclePhase(lifecycleStatus: number): string;
    /**
     * This function accepts an array of lifecycle statuses and returns an object containing the next appropriate lifecycle status and phase that the record will advance to.
     * @param lifecycleStatus An Array of lifecycle statuses.
     */
    getLifecycleInfo(lifecycleStatus: any[]): any;
    /**
     * This function returns lifecycle phase string associated with the input lifecycle phase code.
     * @param lifecyclePhase The lifecycle phase code.
     */
    toLifecyclePhaseString(lifecyclePhase: number): string;
    /**
     * This function returns lifecycle status string associated with the input lifecycle status code.
     * @param lifecycleStatus The lifecycle status code.
     */
    toLifecycleStatusString(lifecycleStatus: number): string;
  };

  /** ReviewerResults allows access to the reviewer workspace. */
  export class ReviewerResultsTask {
    /**
     * Creates a new Reviewer session.
     * @param sessionName Name of the session to be created.
     * @param sessionOptions Session properties to be used to create the session.
     */
    createReviewerSession(sessionName: string, sessionOptions: SessionOptions): any;
    /**
     * Fetches batch run information from REVBATCHRUNTABLE and REVCHECKRUNTABLE.
     * @param batchRunIds Array of batchRunIds used to get batch run details.
     */
    getBatchRunDetails(batchRunIds: any[]): any;
    /** Returns an array of custom field names defined in a Reviewer workspace. */
    getCustomFieldNames(): any;
    /**
     * Utility operation that returns a where clause given a set of input filters.
     * @param filters An instance of ReviewerFilters used to create a layer definition.
     */
    getLayerDefinition(filters: ReviewerFilters): any;
    /** Retrieves a list of localized life cycle status strings from the Reviewer workspace. */
    getLifecycleStatusStrings(): any;
    /**
     * Queries records from REVTABLEMAIN, REVBATCHRUNTABLE and REVCHECKRUNTABLE.
     * @param getResultsQueryParameters Defines the size and scope of the tasks.FeatureSet returned to the callback function.
     * @param filters Instance of ReviewerFilters used to query reviewer results.
     */
    getResults(getResultsQueryParameters: GetResultsQueryParameters, filters?: ReviewerFilters): any;
    /** Retrieves a list of field names that can be used to fetch or query results from reviewer workspace. */
    getResultsFieldNames(): string[];
    /** Extracts the MapServer url from the full ArcGIS Data Reviewer for Server SOE url. */
    getReviewerMapServerUrl(): string;
    /** Returns an array of sessions in a Reviewer workspace. */
    getReviewerSessions(): any;
    /**
     * Updates lifecycle status of the Reviewer results.
     * @param sessionId Session that contains results to update.
     * @param lifecycleStatus Lifecycle status to which the Reviewer results will get updated.
     * @param technicianName Name of the technician performing the update.
     * @param filters Instance of ReviewerFilters used to query Reviewer results.
     */
    updateLifecycleStatus(sessionId: number, lifecycleStatus: number, technicianName: string, filters: ReviewerFilters): any;
    /**
     * Writes a feature to the reviewer workspace.
     * @param reviewerAttributes Class used to encapsulate all fields to be written to the reviewer workspace.
     * @param feature Graphic to write to the reviewer workspace.
     */
    writeFeatureAsResult(reviewerAttributes: ReviewerAttributes, feature: Graphic): any;
    /**
     * Writes a geometry and associated reviewer attributes to the reviewer workspace.
     * @param reviewerAttributes Class used to encapsulate all fields to be written to the reviewer workspace.
     * @param geometry A geometry.Geometry (point, polyline or polygon) to write to the reviewer workspace.
     */
    writeResult(reviewerAttributes: ReviewerAttributes, geometry: geometry.Geometry): any;
    /** Fires when the createReviewerSession method is complete. */
    on(type: "create-reviewer-sessions", listener: (event: { reviewerSession: ReviewerSession; target: ReviewerResultsTask }) => void): Handle;
    /** Fires when an error occurs during a ReviewerResultsTask method execution. */
    on(type: "error", listener: (event: { error: Error; target: ReviewerResultsTask }) => void): Handle;
    /** Fires when the getBatchRunDetails method is complete. */
    on(type: "get-batch-run-details", listener: (event: { featureSet: tasks.FeatureSet; target: ReviewerResultsTask }) => void): Handle;
    /** Fires when the getCustomFieldNames method is complete. */
    on(type: "get-custom-field-names", listener: (event: { customFieldNames: string[]; target: ReviewerResultsTask }) => void): Handle;
    /** Fires when the getLayerDefinition method is complete. */
    on(type: "get-layer-definition", listener: (event: { whereClause: string; target: ReviewerResultsTask }) => void): Handle;
    /** Fires when the getLifecycleStatusStrings method is complete. */
    on(type: "get-lifecycle-status-strings", listener: (event: { lifecycleStatusStrings: string[]; target: ReviewerResultsTask }) => void): Handle;
    /** Fires when the getResults method is complete. */
    on(type: "get-results", listener: (event: { featureSet: tasks.FeatureSet; target: ReviewerResultsTask }) => void): Handle;
    /** Fires when the getReviewerSessions method is complete. */
    on(type: "get-reviewer-sessions", listener: (event: { reviewerSessions: ReviewerSession[]; target: ReviewerResultsTask }) => void): Handle;
    /** Fires when the updateLifecycleStatus method is complete. */
    on(type: "update-lifecycle-status", listener: (event: { featureEditResults: layers.FeatureEditResult[]; target: ReviewerResultsTask }) => void): Handle;
    /** Fires when the writeFeatureAsResult method is complete. */
    on(type: "write-feature-as-result", listener: (event: { success: boolean; target: ReviewerResultsTask }) => void): Handle;
    /** Fires when the writeResult method is complete. */
    on(type: "write-result", listener: (event: { success: boolean; target: ReviewerResultsTask }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ReviewerResultsTaskConstructor {
	    /**
	     * Creates a new ReviewerResultsTask object.
	     * @param url The DataReviewerServer Server Object Extension (SOE) URL.
	     */
	    new(url: string): ReviewerResultsTask;
  }
  /** Represents an ArcGIS Data Reviewer session in which validation and manual quality control results are written to the reviewer workspace. */
  export class ReviewerSession {
    /** Numeric identifier of the session. */
    sessionId: number;
    /** Session name. */
    sessionName: string;
    /** Name under which records are written to the reviewer workspace. */
    userName: string;
    /** Enterprise geodatabase version in which records are validated. */
    versionName: string;
    /** The Session ID and name in format Session 10 : Parcels. */
    toString(): string;
  }
  export interface ReviewerSessionConstructor {
	    /**
	     * Creates a new ReviewerSession object.
	     * @param sessionId Numeric identifier of the session.
	     * @param sessionName Name of the session.
	     * @param userName User name under which records are written to the reviewer workspace.
	     * @param versionName The enterprise geodatabase version in which records are validated.
	     */
	    new(sessionId: string, sessionName: string, userName: string, versionName: string): ReviewerSession;
  }
  /** Represents an ArcGIS Data Reviewer session properties in which validation and manual quality control results are written to the reviewer workspace. */
  export class SessionOptions {
    /** Indicates how to handle duplicate results when writing the results to the Reviewer workspace. */
    duplicateFilter: string;
    /** Indicates if validation result geometries are stored in the Reviewer workspace. */
    storeGeometry: boolean;
    /** The user account to associate with a session. */
    userName: string;
    /** Indicates an enterprise geodatabase version to associate with the session. */
    versionName: string;
  }
  export interface SessionOptionsConstructor {
	    /**
	     * Creates a new SessionOptions object.
	     * @param userName The username under which records are written to the reviewer workspace.
	     * @param versionName The enterprise geodatabase version under which records are written to the reviewer workspace.
	     * @param duplicateFilter Handle duplicate results when writing the results to the Reviewer workspace.
	     * @param storeGeometry Controls if validation result geometries are stored in the Reviewer workspace.
	     */
	    new(userName: string, versionName: string, duplicateFilter: string, storeGeometry: boolean): SessionOptions;
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

  /** (Currently in beta) Represents StandardGeographyQuery parameters to search for geographies by ID or Name. */
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

  /** (Currently in beta) Base class for all GeographyQuery objects. */
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

  /** (Currently in beta) Geoenrichment helper task that returns standard geography IDs and features for the supported geographic levels in Canada, the United States and a number of European countries. */
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
    options: RingBuffer | DriveBuffer | IntersectingGeographies;
    /** If true, geometry will be returned. */
    returnGeometry: boolean;
    /** Converts object to its JSON representation. */
    toJson(): any;
  }
  export interface StudyAreaConstructor {
      new(): StudyArea
  }

  /** (Currently in beta) Represents StandardGeographyQuery parameters to search subgeographic areas that are within a parent geography. */
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

  /** (Currently in beta) The CoordinatesLocationProvider class uses the fields that contain Latitude and Longitude values to generate or locate geometries. */
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

  /** (Currently in beta) The GeometryLocationProvider class uses the field in the data that has geometry as a JSON to generate the corresponding geometry. */
  export class GeometryLocationProvider extends LocationProviderClientBase {
    /** The attribute field in the graphic object that contains the JSON string representing the geometry. */
    geometryField: string;
  }
  export interface GeometryLocationProviderConstructor {
	    /**
	     * Creates a new instance of the GeometryLocationProvider object.
	     * @param options Define the properties to use when creating the class.
	     */
	    new(options: GeometryLocationProviderOptions): GeometryLocationProvider;
  }

  /** (Currently in beta) The base class for all LocationProviders. */
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
    /** Fires when the locate() method is in progress. */
    on(type: "locate-progress", listener: (event: { features: Graphic[]; target: LocationProviderBase }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface LocationProviderBaseConstructor {
      new(): LocationProviderBase
  }

  /** (Currently in beta) The base class for CoordinatesLocationProvider and GeometryLocationProvider. */
  export class LocationProviderClientBase extends LocationProviderBase {
    /** The Spatial Reference of the input geometries. */
    inSpatialReference: SpatialReference;
  }
  export interface LocationProviderClientBaseConstructor {
      new(): LocationProviderClientBase
  }

  /** (Currently in beta) The base class for Location Providers that use a remote service to locate geometries. */
  export class LocationProviderRemoteBase extends LocationProviderBase {
  }
  export interface LocationProviderRemoteBaseConstructor {
      new(): LocationProviderRemoteBase
  }

  /** (Currently in beta) The LocatorLocationProvider class uses a geocode service through the tasks.Locator object to generate or locate geometries using fields in the graphics that contain Street address information */
  export class LocatorLocationProvider extends LocationProviderRemoteBase {
    /** Object that matches the tasks.Locator address fields to corresponding attribute names in the Graphic object. */
    addressFields: any;
    /** An instance of a tasks.Locator object. */
    locator: tasks.Locator;
  }
  export interface LocatorLocationProviderConstructor {
	    /**
	     * Creates a new instance of the LocatorLocationProvider object.
	     * @param options Define the properties to use when creating the class.
	     */
	    new(options: LocatorLocationProviderOptions): LocatorLocationProvider;
  }

  /** (Currently in beta) The QueryTaskLocationProvider performs a query against a ArcGIS Feature service or Map service layer based on common fields that are present in both the data and the ArcGIS layer. */
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
	     * @param options Define the properties to use when creating the class.
	     */
	    new(options?: QueryTaskLocationProviderOptions): QueryTaskLocationProvider;
  }

  /** (Currently in beta) The StandardGeographyQueryLocationProvider class uses the Geoenrichment service to generate geometries by querying the standard geography layers. */
  export class StandardGeographyQueryLocationProvider extends LocationProviderRemoteBase {
    /** A template to be used to build the query for Standard Geography query. */
    geographyQueryTemplate: string;
    /** An object that specifies the parameters to use in the Standard Geography query. */
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

  /** A toolbar that provides support for measuring image services. */
  export class ImageServiceMeasureTool {
    /** The angular unit in which directions of line segments will be calculated. */
    angularUnit: string;
    /** The area unit in which areas of polygons will be calculated. */
    areaUnit: string;
    /** symbols.Symbol to be used when drawing a polygon or extent. */
    fillSymbol: symbols.SimpleFillSymbol;
    /** The linear unit in which height, length, or perimeters will be calculated. */
    linearUnit: string;
    /** symbols.Symbol to be used when drawing a line. */
    lineSymbol: symbols.SimpleLineSymbol;
    /** symbols.Symbol to be used when drawing a point. */
    markerSymbol: symbols.SimpleMarkerSymbol;
    /**
     * Activates the toolbar for performing the measure operation.
     * @param operation The mensuration rule to apply to the measure operation.
     */
    activate(operation: string): void;
    /** Deactivates the toolbar. */
    deactivate(): void;
    /** Returns a list of measure operations supported by the image service. */
    getSupportedMeasureOperations(): string[];
    /** Returns a list of supported linear, angular and area units. */
    getSupportedUnits(): string[];
    /** Disables the tooltip message for performing a draw. */
    hideDrawTooltip(): void;
    /**
     * Sets the angularUnit.
     * @param unit The angular unit to set.
     */
    setAngularUnit(unit: string): void;
    /**
     * Sets the areaUnit.
     * @param unit  Possible Values: esriSquareInches | esriSqudareFeet | esriSquareYards | esriAcres | esriSquareMiles | esriSquareMillimeters | esriSquareCentimeters | esriSquareDecimeters | esriSquareMeters | esriAres | esriHectares | esriSquareKilometers
     */
    setAreaUnit(unit: string): void;
    /**
     * Sets the fillSymbol.
     * @param fillSymbol The fill symbol to set.
     */
    setFillSymbol(fillSymbol: symbols.SimpleFillSymbol): void;
    /**
     * Sets the linearUnit.
     * @param unit The linear unit to set.
     */
    setLinearUnit(unit: string): void;
    /**
     * Sets the lineSymbol.
     * @param lineSymbol The line symbol to set.
     */
    setLineSymbol(lineSymbol: symbols.SimpleLineSymbol): void;
    /**
     * Sets the markerSymbol.
     * @param markerSymbol The marker symbol to set.
     */
    setMarkerSymbol(markerSymbol: symbols.SimpleMarkerSymbol): void;
    /** Enables the tooltip message for performing a draw. */
    showDrawTooltip(): void;
    /** Fires when the drawing is complete. */
    on(type: "draw-end", listener: (event: { geometry: geometry.Geometry; target: ImageServiceMeasureTool }) => void): Handle;
    /** Fires when the user starts drawing. */
    on(type: "draw-start", listener: (event: { target: ImageServiceMeasureTool }) => void): Handle;
    /** Fires when the measure operation has been performed. */
    on(type: "measure-end", listener: (event: { measureResult: any; target: ImageServiceMeasureTool }) => void): Handle;
    /** Fires when the unit has been changed. */
    on(type: "unit-change", listener: (event: { measureResult: any; target: ImageServiceMeasureTool }) => void): Handle;
    on(type: string, listener: (event: any) => void): Handle;
  }
  export interface ImageServiceMeasureToolConstructor {
	    /**
	     * Creates a new instance of ImageServiceMeasureTool.
	     * @param params Constructor options.
	     */
	    new(params: ImageServiceMeasureToolOptions): ImageServiceMeasureTool;
  }

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
    /** Fired when the user has completed drawing. */
    on(type: "draw-complete", listener: (event: { geographicGeometry: geometry.Geometry; geometry: geometry.Geometry; target: Draw }) => void): Handle;
    /** This event is deprecated. */
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
    importScripts(paths: string | string[]): any;
    /**
     * Posts a message to the worker.
     * @param msg The data to post to the worker.
     * @param transfers An optional array of transferable objects.
     */
    postMessage(msg: any | any[], transfers?: any[]): any;
    /**
     * Sets the worker that is used in the Worker Client.
     * @param paths An AMD require path to a script file to import.
     */
    setWorker(paths: string | string[]): void;
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
