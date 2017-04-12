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
    /** The URL template used to retrieve the tiles. */
    templateUrl?: string;
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
  export interface BlendRendererOptions {
    /** This determines how colors are blended together. */
    blendMode?: string;
    /** An array of objects to blend containing the field name and color to use. */
    fields: any[];
    /** The field to normalize. */
    normalizationField?: string;
    /** An array of objects which determines opacity. */
    opacityStops: any[];
    /** The symbol in which the Blendesri.renderers.Renderer is applied. */
    symbol: esri.symbols.Symbol;
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
  export interface ChooseBestFacilitiesOptions {
    /** The URL to the analysis service, for example "http://analysis.arcgis.com/arcgis/rest/services/tasks/GPServer". */
    analysisGpServer?: string;
    /** The number of facilities to choose when allocating demand locations. */
    candidateCount?: number;
    /** Specify how much demand every facility in the candidateFacilitiesesri.layers.Layer is capable of supplying. */
    candidateFacilitiesCapacity?: string;
    /** String value indicating the field name on the candidateFacilitiesesri.layers.Layer  representing how much demand each facility in the candidatesFacilitiesesri.layers.Layer is capable of supplying. */
    candidateFacilitiesCapacityField?: string;
    /** A point layer specifying one or more locations that act as facilities by providing some kind of service. */
    candidateFacilitiesLayer?: esri.layers.Featureesri.layers.Layer;
    /** The amount of demand available at every demand locations. */
    demand?: number;
    /** String value indicating the field name on the demandLocationesri.layers.Layer  representing the amount of demand available at each demand location. */
    demandField?: string;
    /** A point layer specifying the locations that have demand for facilities. */
    demandLocationLayer?: esri.layers.Featureesri.layers.Layer;
    /** Array of point layers to be used for choosing the demandLocationLayer. */
    demandLocationLayers: esri.layers.Featureesri.layers.Layer[];
    /** When true, Travel Modes (Driving Time) is enabled for the inputesri.layers.Layer with the point geometries (esriGeometryPoint). */
    enableTravelModes?: boolean;
    /** Array of point layers used for setting the required facilities layer and candidate facilities layer. */
    featureLayers: esri.layers.Featureesri.layers.Layer[];
    /** Sets the selected folder of the select folder dropdown. */
    folderId?: string;
    /** Sets the selected folder of the select folder dropdown. */
    folderName?: string;
    /** Reference to the map. */
    map?: esri.Map;
    /** The maximum travel time or distance allowed between a demand location and its allocated facility. */
    maxTravelRange?: number;
    /** String value indicating the field name on the demandLocationesri.layers.Layer specifying the maximum travel time or distance allowed between a demand location and its allocated facility. */
    maxTravelRangeField?: string;
    /** The name of the output layer to be displayed in the result layer  nameinputbox. */
    outputLayerName?: string;
    /** The percentage of the total demand that you want the chosen and required facilities to capture. */
    percentDemandCoverage?: number;
    /** The URL to the ArcGIS organization or Portal site where the GP server is hosted. */
    portalUrl?: string;
    /** Specify how much demand every facility in the requiredFacilitiesesri.layers.Layer is capable of supplying. */
    requiredFacilitiesCapacity?: number;
    /** A field on the requiredFacilitiesesri.layers.Layer representing how much demand each facility in this layer is capable of supplying. */
    requiredFacilitiesCapacityField?: string;
    /** A point layer specifying one or more locations that act as facilities by providing some kind of service. */
    requiredFacilitiesLayer?: esri.layers.Featureesri.layers.Layer;
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
    radiusUnit?: string;
  }
  export interface CircleOptions2 {
    /** The center point of the circle. */
    center: esri.geometry.Point | number[];
    /** Applicable when the spatial reference of the center point is either set to Web Mercator or geographic/geodesic as true would apply. */
    geodesic?: boolean;
    /** A circle can be thought of similar to a polygon. */
    numberOfPoints?: number;
    /** The radius of the circle. */
    radius?: number;
    /** Unit of the radius. */
    radiusUnit?: string;
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
    color: esri.Color;
    /** The row size of the palette. */
    colorsPerRow: number;
    /** The set of available color options. */
    palette: esri.Color[];
    /** Array of recent colors to show in the recent colors row. */
    recentColors: esri.Color[];
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
    featureLayers: esri.layers.Featureesri.layers.Layer[];
    /** Reference to the map object. */
    map?: esri.Map;
    /** The point feature layers containing the origin points. */
    originsLayers: esri.layers.Featureesri.layers.Layer[];
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer?: boolean;
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
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map?: esri.Map;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
  }
  export interface CreateWatershedsOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The feature layers containing input points used for calculating watersheds. */
    inputLayers: esri.layers.Featureesri.layers.Layer[];
    /** Reference to the map object. */
    map?: esri.Map;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer?: boolean;
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
    deletedGraphics?: esri.Graphic[];
    /** The feature layer from which the feature(s) are removed. */
    featureLayer?: esri.layers.Featureesri.layers.Layer;
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
    fromSymbol?: PictureMarkeresri.symbols.Symbol;
    /** The symbol that displays when the from location is dragged to a new location. */
    fromSymbolDrag?: PictureMarkeresri.symbols.Symbol;
    /** If available, this geometry service is used to provide latitude/longitude values for stops whose reverse geocoding did not return an address (Added at v3.11). */
    geometryTaskUrl?: string;
    /** Reference to the map object. */
    map: esri.Map;
    /** Activates the map-click-active toggle button when true. */
    mapClickActive?: boolean;
    /** Maximum number of stops. */
    maxStops?: number;
    /** Minimum number of stops. */
    minStops?: number;
    /** When true, stops on the route are re-ordered to provide an optimal route. */
    optimalRoute?: boolean;
    /** If specified, this specifies the portal where the produced route layers are going to be stored and accessed. */
    portalUrl?: string;
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
    routeSymbol?: SimpleLineesri.symbols.Symbol;
    /** Specify the service that will be used to calculate directions. */
    routeTaskUrl?: string;
    /** Used to define optional search options. */
    searchOptions?: any;
    /** Define the info template for the popup that appears when the popup for a route segment is displayed. */
    segmentInfoTemplate?: esri.InfoTemplate;
    /** Specify the symbol used to render the individual route segments that display on the map when a direction step is clicked. */
    segmentSymbol?: SimpleLineesri.symbols.Symbol;
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
    /** Applicable if the widget works with a Network Analyst Server federated with ArcGIS Online or Portal. */
    showSaveButton?: boolean;
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
    stops?: esri.geometry.Point[] | number[][] | string[] | any[];
    /** Define the info template for the popup that appears when a stop is clicked. */
    stopsInfoTemplate?: esri.InfoTemplate;
    /** The symbol that displays on the map for the locations between the origin and final destination locations. */
    stopSymbol?: PictureMarkeresri.symbols.Symbol;
    /** The symbol that displays when an intermediate location is dragged to a new location. */
    stopSymbolDrag?: PictureMarkeresri.symbols.Symbol;
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
    toSymbol?: PictureMarkeresri.symbols.Symbol;
    /** The symbol that displays when an final destination location is dragged to a new location. */
    toSymbolDrag?: PictureMarkeresri.symbols.Symbol;
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
    outline?: Lineesri.symbols.Symbol;
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
    ghostLineSymbol?: Lineesri.symbols.Symbol;
    /** Marker symbol used to display the insertable vertices. */
    ghostVertexSymbol?: Markeresri.symbols.Symbol;
    /** If users want to place the text symbol editor to a user defined HTML element. */
    textSymbolEditorHolder?: Node | string;
    /** When true, if the geometry is re-sized the aspect ration will be preserved. */
    uniformScaling?: boolean;
    /** Marker symbol used to draw the vertices. */
    vertexSymbol?: Markeresri.symbols.Symbol;
  }
  export interface EditorOptions {
    /** Create a new settings object that defines the capabilities of the widget. */
    settings?: any;
  }
  export interface ElevationProfileOptions {
    /** This object contains properties used to render the chart. */
    chartOptions?: any;
    /** Reference to the map. */
    map: esri.Map;
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
    featureLayers: esri.layers.Featureesri.layers.Layer[];
    /** An array for feature layers to be extracted. */
    inputLayers?: esri.layers.Featureesri.layers.Layer[];
    /** Reference to the map object. */
    map?: esri.Map;
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
  export interface FeatureLayerStatisticsOptions {
    /** The feature layer that will be the source for calculating statistics. */
    layer: esri.layers.Featureesri.layers.Layer;
  }
  export interface FeatureTableOptions {
    /** The number of features a service will try to fetch. */
    batchCount?: number;
    /** Object defining the date options specifically for formatting date and time editors. */
    dateOptions?: any;
    /** Sets the editing state for the FeatureTable. */
    editable?: boolean;
    /** The featureesri.layers.Layer that the table is associated with. */
    featureLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of objects representing field information. */
    fieldInfos?: any[];
    /** Reference to the 'Options' drop-down menu. */
    gridMenu?: any;
    /** Object that can be used to set properties used by the underlying dgrid. */
    gridOptions?: any;
    /** Columns to hide by default using the dGrid ColumnHider extension. */
    hiddenFields?: string[];
    /** A reference to the Map. */
    map?: esri.Map;
    /** Adds additional functional menu items for the 'Options' drop-down menu. */
    menuFunctions?: any[];
    /** Attribute fields to include in the FeatureTable. */
    outFields?: string[];
    /** Displays or hides the attachment column. */
    showAttachments?: boolean;
    /** Displays or hides tooltips for column headers. */
    showColumnHeaderTooltips?: boolean;
    /** Shows or hides cyclical relationship. */
    showCyclicalRelationships?: boolean;
    /** Displays the data type of the field right under the field label. */
    showDataTypes?: boolean;
    /** Displays or hides total number of features and selected number of features in the grid header. */
    showFeatureCount?: boolean;
    /** Displays or hides the FeatureTable header. */
    showGridHeader?: boolean;
    /** Displays or hides 'Options' drop-down menu of the FeatureTable. */
    showGridMenu?: boolean;
    /** Displays or hides the option to show related records in a table if the layer has pre-established relationship. */
    showRelatedRecords?: boolean;
    /** Displays or hides the 'Statistics' option in column menus for numeric fields. */
    showStatistics?: boolean;
    /** Enables an interaction between the map and the feature table. */
    syncSelection?: boolean;
    /** Enables pan/zoom to selected features on the map when the table in 'sync selection' mode. */
    zoomToSelection?: boolean;
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
    /** By default, the Geocoder widget uses the Esri World esri.tasks.Locator to find search locations. */
    arcgisGeocoder?: boolean | any;
    /** When false, the geocoder will not display the auto-complete results menu. */
    autoComplete?: boolean;
    /** When false, the geolocator will not navigate to the result after selection or search. */
    autoNavigate?: boolean;
    /** When false, the geocoder menu will not be displayed when more than one geocoder is set. */
    geocoderMenu?: boolean;
    /** Defines the geocoders that will be used by the Geocoder widget. */
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
  export interface HorizontalSliderOptions {
    /** Array of text labels to render - evenly spaced from left-to-right. */
    labels: string[];
  }
  export interface IdentifyTaskOptions {
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
  }
  export interface ImageServiceMeasureOptions {
    /** The angular unit in which directions of line segments will be calculated. */
    angularUnit?: string;
    /** The area unit in which areas of polygons will be calculated. */
    areaUnit?: string;
    /** Defines whether to show the widget result in a popup or in the widget's result area when the widget has 'toolbar' layout. */
    displayMeasureResultInPopup?: boolean;
    /** esri.symbols.Symbol to be used when drawing a polygon or extent. */
    fillSymbol?: SimpleFillesri.symbols.Symbol;
    /** Image service layer with which the toolbar is associated. */
    layer: ArcGISImageServiceesri.layers.Layer;
    /** Defines the layout of the widget. */
    layout?: string;
    /** The linear unit in which height, length, or perimeters will be calculated. */
    linearUnit?: string;
    /** esri.symbols.Symbol to be used when drawing a line. */
    lineSymbol?: SimpleLineesri.symbols.Symbol;
    /** esri.Map instance with which the toolbar is associate. */
    map: esri.Map;
    /** esri.symbols.Symbol to be used when drawing a point. */
    markerSymbol?: SimpleMarkeresri.symbols.Symbol;
  }
  export interface ImageServiceMeasureToolOptions {
    /** The angular unit in which directions of line segments will be calculated. */
    angularUnit?: string;
    /** The area unit in which areas of polygons will be calculated. */
    areaUnit?: string;
    /** esri.symbols.Symbol to be used when drawing a polygon or extent. */
    fillSymbol?: SimpleFillesri.symbols.Symbol;
    /** Image service layer the toolbar is associated with. */
    layer: ArcGISImageServiceesri.layers.Layer;
    /** The linear unit in which height, length, or perimeters will be calculated. */
    linearUnit?: string;
    /** esri.symbols.Symbol to be used when drawing a line. */
    lineSymbol?: SimpleLineesri.symbols.Symbol;
    /** esri.Map instance the toolbar is associated with. */
    map: esri.Map;
    /** esri.symbols.Symbol to be used when drawing a point. */
    markerSymbol?: SimpleMarkeresri.symbols.Symbol;
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
  export interface LayerListOptions {
    /** An array of operational layers. */
    layers: any[];
    /** Reference to the map. */
    map: esri.Map;
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
  export interface LocatorLocationProviderOptions {
    /** Object that matches the esri.tasks.Locator address fields to corresponding attribute names in the esri.Graphic object. */
    addressFields: any;
    /** An instance of a esri.tasks.Locator object. */
    locator: esri.tasks.Locator;
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
    center?: number[] | esri.geometry.Point;
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
    defaultAreaUnit?: string;
    /** The default length unit for the measure distance tool. */
    defaultLengthUnit?: string;
    /** Allows the user to immediately measure previously-created geometry on dijit creation. */
    geometry?: esri.geometry.Point | esri.geometry.Polyline | esri.geometry.Polygon;
    /** Line symbol used to draw the lines for the measure line and measure distance tools. */
    lineSymbol?: SimpleLineesri.symbols.Symbol;
    /** Reference to the map. */
    map: esri.Map;
    /** Marker symbol used to draw the points for the measure line tool. */
    pointSymbol?: Markeresri.symbols.Symbol;
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
    imageServiceLayer: ArcGISImageServiceesri.layers.Layer;
    /** esri.Map object associated with the widget. */
    map: esri.Map;
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
    fillSymbol?: Fillesri.symbols.Symbol;
    /** When true, the feature is highlighted, set to false to disable highlighting. */
    highlight?: boolean;
    /** Define the symbol used to highlight line features. */
    lineSymbol?: Lineesri.symbols.Symbol;
    /** Specify the margin (in pixels) to leave to the left of the popup window when it is maximized. */
    marginLeft?: number;
    /** Specify the margin (in pixels) to leave at the top of the popup window when it is maximized. */
    marginTop?: number;
    /** Define the marker symbol used to highlight point features. */
    markerSymbol?: Markeresri.symbols.Symbol;
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
    lineSymbol?: Lineesri.symbols.Symbol;
    /** Specify the margin (in pixels) to leave to the left of the popup window when it is maximized. */
    marginLeft?: number;
    /** Specify the margin (in pixels) to leave at the top of the popup window when it is maximized. */
    marginTop?: number;
    /** Define the marker symbol used to highlight point features. */
    markerSymbol?: Markeresri.symbols.Symbol;
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
  export interface QueryTaskLocationProviderOptions {
    /** Object containing properties that will be used to query the ArcGIS layer. */
    queryParameters: any;
    /** An instance of a QueryTask. */
    queryTask: esri.tasks.QueryTask;
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
    /** Additional parameters defined in an  esri.layers.ImageServiceParameters object. */
    imageServiceParameters?: esri.layers.ImageServiceParameters;
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
    map: esri.Map;
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
    /** This the specified graphicsesri.layers.Layer to use for the highlightesri.Graphic and labelesri.Graphic instead of map.graphics. */
    graphicsLayer?: esri.layers.Layer;
    /** The symbol used for highlightGraphic. */
    highlightSymbol?: esri.symbols.Symbol;
    /** A customized infoTemplate for the selected feature. */
    infoTemplate?: esri.InfoTemplate;
    /** The text symbol for the label graphic. */
    labelSymbol?: Textesri.symbols.Symbol;
    /** The default distance specified in meters used to reverse geocode, (if not specified by source). */
    locationToAddressDistance?: number;
    /** Reference to the map. */
    map?: esri.Map;
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
    /** The SimpleLineesri.symbols.Symbol or SimpleMarkeresri.symbols.Symbol used with the widget. */
    symbol: esri.symbols.Symbol;
    /** Additional options to customize slider. */
    zoomOptions?: any;
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
    snapPointSymbol?: SimpleMarkeresri.symbols.Symbol;
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
    /** An object that specifies the parameters to use in the Standard Geography query. */
    queryParameters?: any;
    /** An instance of the StandardGeographyesri.tasks.Query class. */
    standardGeographyQueryTask: StandardGeographyesri.tasks.QueryTask;
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
    /** An array of strings corresponding with fields to include in the StreamLayer. */
    outFields?: string[];
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
    /** An array of strings corresponding with fields to include in the StreamLayer. */
    outFields?: string[];
    /** Rules for purging data from the layer to avoid overloading the browser with too many features. */
    purgeOptions?: any;
    /** The URL to use for connecting to a socket. */
    socketUrl?: string;
  }
  export interface StretchFilterOptions {
    /** Indicates whether to perform dynamic range adjustment using the current pixel data. */
    dra?: boolean;
    /** An array of gamma values, for example [0.8, 0.8, 0.8]. */
    gamma?: number[];
    /** The maximum value of stretched pixels. */
    max?: number;
    /** Percent of pixels clipped on the right histogram tail, for example 0.25. */
    maxPercent?: number;
    /** The minimum value of stretched pixels. */
    min?: number;
    /** Percent of pixels clipped on the left histogram tail, for example 1.5. */
    minPercent?: number;
    /** The number of standard deviations for StandardDeviation stretch, for example 2.5. */
    numberOfStandardDeviations?: number;
    /** The output pixel type. */
    outputPixelType?: string;
    /** An array of arrays containing custom statistics objects. */
    statistics?: any[][];
    /** See the constants table for a list of possible stretchType values. */
    stretchType?: number;
    /** Indicates whether to perform non-linear gamma stretch. */
    useGamma?: boolean;
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
    /** Indicates whether to display a drop down menu listing valid input analysis layers. */
    showSelectAnalysisLayer?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** An array of possible statistics attribute field names and summary types that you wish to calculate for all nearby features. */
    summaryFields?: string[];
    /** The feature layer to be shown selected in the Choose layer to summarize dropdown. */
    summaryLayer?: esri.layers.Featureesri.layers.Layer;
    /** An array of possible feature layers summarizing toward. */
    summaryLayers: esri.layers.Featureesri.layers.Layer[];
    /** The point, line, or polygon feature layers from which distances will be measured to features in summarizeLayer. */
    sumNearbyLayers: esri.layers.Featureesri.layers.Layer[];
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
    /** A list of field names and statistical summary type that you wish to calculate for all features in Summaryesri.layers.Layer that are within each polygon in sumWithinLayer. */
    summaryFields?: string;
    /** The summary layer to be shown selected in in the Choose layer to summarize menu. */
    summaryLayer?: esri.layers.Featureesri.layers.Layer;
    /** An array of summarize layer candidates. */
    summaryLayers: esri.layers.Featureesri.layers.Layer[];
    /** The polygon feature layer to be summarized toward. */
    sumWithinLayer: esri.layers.Featureesri.layers.Layer;
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
  export interface TimeClassBreaksAgerOptions {
    /** The alpha opacity for the break. */
    alpha: number;
    /** The color for the break. */
    color: esri.Color;
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
  export interface VectorFieldRendererOptions {
    /** Sets the flow direction of the data. */
    flowRepresentation?: string;
    /** A symbol that can be defined if the style is set to STYLE_SINGLE_ARROW. */
    singleArrowSymbol?: esri.symbols.Symbol;
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
    /** esri.layers.Layer used to determine the suggested scale range and set the minScale, maxScale values. */
    layer?: esri.layers.Layer;
    /** Reference to the map. */
    map: esri.Map;
    /** Region of preview scale thumbnails. */
    region?: string;
  }
  export interface WCSConnectionOptions {
    /** The coverage identifier, defaults to the first coverage. */
    coverageId?: string;
    /** The version of WCSesri.layers.Layer, can be: 1.0.01.1.01.1.11.1.22.0.1 */
    version?: string;
  }
  export interface WCSLayerOptions {
    /** The coverage identifier, defaults to the first coverage. */
    coverageId?: string;
    /** Sets the layer's draw mode. */
    drawMode?: boolean;
    /** Sets the context of the Canvas. */
    drawType?: string;
    /** A function that takes a pixelData object as input and processes it. */
    pixelFilter?: Function;
    /** The version of WCSesri.layers.Layer, can be: 1.0.01.1.01.1.11.1.22.0.1 */
    version?: string;
    /** A WCS Connection object. */
    wcsConnection?: esri.layers.WCSConnection;
  }
  export interface WFSLayerOptions {
    /** Use this to append custom parameters to WFS requests. */
    customParameters?: any;
    /** The template that defines the content to display in the map info window when the user clicks on a feature. */
    infoTemplate?: esri.InfoTemplate;
    /** Specifies the maximum number of features to return in one response. */
    maxFeatures?: number;
    /** The query mode for the WFS layer. */
    mode?: string;
    /** The simple layer name (excluding the namespace). */
    name?: string;
    /** URL to the WFS server. */
    url: string;
    /** OGC WFS version number. */
    version?: string;
    /** The well-known ID of the spatial reference used by the WFSLayer. */
    wkid?: string;
  }
  export interface WMSLayerInfoOptions {
    /** All the bounding extents defined for this layer. */
    allExtents?: esri.geometry.Extent[];
    /** A description of the WMS layer. */
    description?: string;
    /** The extent of the WMS Layer. */
    extent?: esri.geometry.Extent;
    /** The URL to the legend image. */
    legendURL?: string;
    /** The name of the WMS layer. */
    name: string;
    /** Returns true if the layer can be queried and the service supports GetFeatureInfo with either text/html or text/plain formats. */
    queryable?: boolean;
    /** Indicates if this layer should be included in the popup. */
    showPopup?: boolean;
    /** All the spatial references defined for this layer. */
    spatialReferences?: esri.SpatialReference[];
    /** WMSLayerInfos of the layer's sub layers. */
    subLayers?: esri.layers.WMSesri.layers.LayerInfo[];
    /** The title of the WMS layer. */
    title?: string;
  }
  export interface WMSLayerOptions {
    /** The customLayerParameters object used for the WMS Layer. */
    customLayerParameters?: any;
    /** The customParameters object used for the WMS Layer. */
    customParameters?: any;
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
    /** The customLayerParameters object used for the WMTS Layer. */
    customLayerParameters?: any;
    /** The customParameters object used for the WMTS Layer. */
    customParameters?: any;
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
    constructor(color?: string | number[] | any);
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
    setColor(color: string | number[] | any): esri.Color;
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
    on(type: "credential-create", listener: (event: { credential: esri.Credential; target: esri.IdentityManagerBase }) => void): esri.Handle;
    /** Fired when all credentials are destroyed. */
    on(type: "credentials-destroy", listener: (event: { target: esri.IdentityManagerBase }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.IdentityManagerBase;

  /** Defines the Image Coordinate System (ICS) for ImageServices. */
  class Imageesri.SpatialReference extends esri.SpatialReference {
    /** The full Image Coordinate System, which includes transformations and map spatial reference information specific to each image. */
    ics: any;
    /** The OBJECTID of the image in a mosaic dataset. */
    icsid: number;
    /**
     * Creates an instance of ImageSpatialReference.
     * @param params Options that may be passed into the constructor.
     */
    constructor(params: esri.ImageSpatialReferenceOptions);
    /**
     * Tests whether the input image coordinate system equals the image coordinate system of the instance calling this method.
     * @param inSR The Imageesri.SpatialReference to test the equality against this instance.
     */
    equals(inSR: ImageSpatialReference): boolean;
    /**
     * Converts the Imageesri.SpatialReference instance to a JSON object.
     * @param preserveUrl Indicates whether to preserve the URL in the output JSON object.
     */
    toJson(preserveUrl?: boolean): boolean;
  }
  export = Imageesri.SpatialReference;
  /** An esri.InfoTemplate contains a title and content template string used to transform Graphic.attributes into an HTML representation. */
  class esri.InfoTemplate {
    /** The template for defining how to format the content used in an InfoWindow. */
    content: string | Function;
    /** The template for defining how to format the title used in an InfoWindow. */
    title: string | Function;
    /** Creates a new empty esri.InfoTemplate object. */
    constructor();
    /**
     * Creates a new esri.InfoTemplate object.
     * @param title The template for defining how to format the title used in an InfoWindow.
     * @param content The template for defining how to format the content used in an InfoWindow.
     */
    constructor(title: string | Function, content: string | Function);
    /**
     * Creates a new esri.InfoTemplate object using a JSON object.
     * @param json JSON object representing the InfoTemplate.
     */
    constructor(json: Object);
    /**
     * Sets the content template.
     * @param template The template for the content.
     */
    setContent(template: string | Function): esri.InfoTemplate;
    /**
     * Sets the title template.
     * @param template The template for the title.
     */
    setTitle(template: string | Function): esri.InfoTemplate;
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
    place(value: string | HTMLElement, parentNode: Node): void;
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

  /** The esri.SnappingManager is used to add snapping capability to the Editor, Measurement Widget,  Draw toolbar and esri.toolbars.Edit toolbar. */
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
    intersection(timeExtent: TimeExtent): Timeesri.geometry.Extent;
    /**
     * Returns a new time extent with the given offset from "this' time extent.
     * @param offsetValue The length of time to offset from "this" time extent.
     * @param offsetUnits The offset units, see the esri.layers.TimeInfo constants for a list of valid values.
     */
    offset(offsetValue: number, offsetUnits: string): Timeesri.geometry.Extent;
  }
  export = Timeesri.geometry.Extent;
  /** This class contains properties referencing default basemaps used in the JS API that allow you to add map services as default basemaps in web applications. */
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
     * Adds a new attribute or changes the value of an existing attribute on the graphic's DOM node.
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
    constructor(divId: Node | string, options?: esri.MapOptions);
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
     * Enable snapping on the map when working with the Editor, Measurement widget or the Draw and esri.toolbars.Edit toolbars.
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
    on(type: "layers-add-result", listener: (event: { layers: any[]; target: esri.Map }) => void): esri.Handle;
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
  export class Units {
    /** Units are acres. */
    static ACRES: any;
    /** Units are ares. */
    static ARES: any;
    /** Units are centimeters. */
    static CENTIMETERS: any;
    /** Units are decimal degrees. */
    static DECIMAL_DEGREES: any;
    /** Units are decimeters. */
    static DECIMETERS: any;
    /** Units are degree, minute, seconds. */
    static DEGREE_MINUTE_SECONDS: any;
    /** Units are feet. */
    static FEET: any;
    /** Units are hectares. */
    static HECTARES: any;
    /** Units are inches. */
    static INCHES: any;
    /** Units are kilometers. */
    static KILOMETERS: any;
    /** Units are meters. */
    static METERS: any;
    /** Units are miles. */
    static MILES: any;
    /** Units are millimeters. */
    static MILLIMETERS: any;
    /** Units are nautical miles. */
    static NAUTICAL_MILES: any;
    /** Units are points. */
    static POINTS: any;
    /** Units are square centimeters. */
    static SQUARE_CENTIMETERS: any;
    /** Units are square decimeters. */
    static SQUARE_DECIMETERS: any;
    /** Units are square feet. */
    static SQUARE_FEET: any;
    /** Units are square inches. */
    static SQUARE_INCHES: any;
    /** Units are square kilometers. */
    static SQUARE_KILOMETERS: any;
    /** Units are square meters. */
    static SQUARE_METERS: any;
    /** Units are square miles. */
    static SQUARE_MILES: any;
    /** Units are square millimeters. */
    static SQUARE_MILLIMETERS: any;
    /** Units are square yards. */
    static SQUARE_YARDS: any;
    /** Units are unknown. */
    static UNKNOWN: any;
    /** Units are yards. */
    static YARDS: any;
  }
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
    /** Applicable if working with the popup user-login workflow. */
    popupCallbackUrl: string;
    /** The window features passed to window.open(). */
    popupWindowFeatures: string;
    /** The ArcGIS for Portal URL. */
    portalUrl: string;
    /** Indicates whether to display social logins like Google/Facebook. */
    showSocialLogins: boolean;
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
    user: PortalUser;
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
    getItems(folderId?: string): any;
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
     * Can be used with esri.dijit.Legend to get the layerInfos list to be passed into the Legend constructor.
     * @param createMapResponse Object returned by .createMap() in the .then() callback.
     */
    getLegendLayers(createMapResponse: any): any[];
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
    constructor(params: esri.AttributeInspectorOptions, srcNodeRef: Node | string);
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
    constructor(options: esri.AttributionOptions, srcNodeRef: Node | string);
    /** Destroy the attribution widget. */
    destroy(): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    constructor(params: esri.BasemapGalleryOptions, srcNodeRef?: Node | string);
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
    /** Object containing the title and thumbnailURL for the image of each basemap. */
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
    constructor(params: esri.BasemapToggleOptions, srcNodeRef: Node | string);
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
    constructor(params: esri.BookmarksOptions, srcNodeRef: Node | string);
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
    /** Finalizes the creation of the widget. */
    startup(): void;
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

  /** A widget to assist with managing a renderer used for visualizing features by their class and color. */
  export class ClassedColorSlider extends esri.dijit.RendererSlider {
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
    /**
     * Creates a new ClassedColorSlider widget.
     * @param params Set of parameters used to specify the ClassedColorSlider widget options.
     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
     */
    constructor(params: esri.ClassedColorSliderOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when the ClassedColorSlider widget properties change. */
    on(type: "change", listener: (event: { breakInfos: any; target: ClassedColorSlider }) => void): esri.Handle;
    /** Fires when  minValue or  maxValue of the ClassedColorSlider changes. */
    on(type: "data-value-change", listener: (event: { breakInfos: any; maxValue: number; minValue: number; target: ClassedColorSlider }) => void): esri.Handle;
    /** Fires when a ClassedColorSlider handle is moved. */
    on(type: "handle-value-change", listener: (event: { breakInfos: any; target: ClassedColorSlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** A widget to assist with managing a renderer for visualizing features by varying classes and size. */
  export class ClassedSizeSlider extends esri.dijit.RendererSlider {
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
    /**
     * Creates a new ClassedSizeSlider widget within the provided DOM node srcNodeRef.
     * @param params Set of parameters used to specify the ClassedSizeSlider widget options.
     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
     */
    constructor(params: esri.ClassedSizeSliderOptions, srcNodeRef: Node | string);
    /** Fires when ClassedSizeSlider changes. */
    on(type: "change", listener: (event: { breakInfos: any; target: ClassedSizeSlider }) => void): esri.Handle;
    /** Fires when  minValue or  maxValue of the ClassedSizeSlider changes. */
    on(type: "data-value-change", listener: (event: { breakInfos: any; maxValue: number; minValue: number; target: ClassedSizeSlider }) => void): esri.Handle;
    /** Fires when a ClassedSizeSlider handle is moved. */
    on(type: "handle-value-change", listener: (event: { breakInfos: any; target: ClassedSizeSlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** A widget to assist with managing a renderer for visualizing features based upon colors. */
  export class ColorInfoSlider extends esri.dijit.RendererSlider {
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
    /**
     * Creates a new ColorInfoSlider widget within the provided DOM node srcNodeRef.
     * @param params Set of parameters used to specify the ColorInfoSlider widget options.
     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
     */
    constructor(params: esri.ColorInfoSliderOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when ColorInfoSlider changes. */
    on(type: "change", listener: (event: { colorInfo: any; target: ColorInfoSlider }) => void): esri.Handle;
    /** Fires when  minValue or  maxValue of the ColorInfoSlider changes. */
    on(type: "data-value-change", listener: (event: { colorInfo: any; maxValue: number; minValue: number; target: ColorInfoSlider }) => void): esri.Handle;
    /** Fires when a ColorInfoSlider handle is moved. */
    on(type: "handle-value-change", listener: (event: { colorInfo: any; target: ColorInfoSlider }) => void): esri.Handle;
    /** Fires when the zoom state changes. */
    on(type: "zoomed", listener: (event: { zoomed: boolean; target: ColorInfoSlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** A widget to assist choosing a color from a color palette. */
  export class ColorPicker {
    /** The selected color. */
    color: esri.Color;
    /** The set of available color options. */
    palette: esri.Color[];
    /** An array of recent colors to show in the recent colors row. */
    recentColors: esri.Color[];
    /**
     * Creates a new ColorPicker widget.
     * @param params Set of parameters used to specify the ColorPicker widget options.
     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
     */
    constructor(params: esri.ColorPickerOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when the selected color has changed. */
    on(type: "color-change", listener: (event: { target: ColorPicker }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The Directions widget makes it easy to calculate directions between two or more input locations. */
  export class Directions {
    /** Read-only: Get the directions to all the locations along the route. */
    directions: esri.tasks.Directionsesri.tasks.FeatureSet;
    /** Indicates whether the Directions widget adds a stop on each map click. */
    mapClickActive: boolean;
    /** Read-only: When true, the maximum number of stops for the route has been reached. */
    maxStopsReached: boolean;
    /** Read-only: The graphic for the calculated route. */
    mergedRouteGraphic: esri.Graphic;
    /** If specified, this specifies the portal where the produced route layers are going to be stored and accessed. */
    portalUrl: string;
    /** Routing parameters for the widget. */
    routeParams: esri.tasks.RouteParameters;
    /** Routing task for the widget. */
    routeTask: esri.tasks.RouteTask;
    /** Read-only: The Service Description object returned by the Route REST Endpoint. */
    serviceDescription: any;
    /** Indicates whether the Directions widget will display the map-click-active toggle button. */
    showActivateButton: boolean;
    /** If true, the Clear button is shown. */
    showClearButton: boolean;
    /** If true, the toggle button group allowing user to choose between Miles and Kilometers is shown. */
    showMilesKilometersOption: boolean;
    /** Applicable if the widget works with a Network Analyst Server federated with ArcGIS Online or Portal. */
    showSaveButton: boolean;
    /** If true, and supported by the service, then two toggle button groups are shown: one to allow user to choose between driving a car, a truck, or walking, and one more group to choose between fastest or shortest routes. */
    showTravelModesOption: boolean;
    /** An array of graphics that define the stop locations along the route. */
    stops: esri.Graphic[];
    /** The css theme used to style the widget. */
    theme: string;
    /** Read-only: If Directions Widget runs with Travel Modes enabled, this property returns current Travel Mode name. */
    travelModeName: string;
    /**
     * Creates a new Directions dijit using the given DOM node.
     * @param options Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(options: esri.DirectionsOptions, srcNodeRef: Node | string);
    /** Deprecated at v3.13. */
    activate(): void;
    /**
     * Add a stop to the directions widget at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index location where the stop should be added.
     */
    addStop(stop: esri.geometry.Point | number[] | string | any, index?: number): any;
    /**
     * Add multiple stops to the directions list starting at the specified location.
     * @param stops An array of points that define the stop locations.
     * @param index The index location where the stops will be added.
     */
    addStops(stops: esri.geometry.Point[] | number[][] | string[] | any[], index?: number): any;
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
     * Loads a stored route layer from either ArcGIS Online or Portal
     * @param itemId The itemId of the stored route layer from either ArcGIS Online or Portal.
     */
    loadRoute(itemId: string): any;
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
     * Specify the language used for the directions.
     * @param locale The locale used for the directions.
     */
    setDirectionsLanguage(locale: string): any;
    /**
     * Specify the length units used for the directions widget.
     * @param units The length units used for the directions widget.
     */
    setDirectionsLengthUnits(units: string): any;
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
    updateStop(stop: esri.geometry.Point | number[] | string | any, index: number): any;
    /**
     * Update multiple stops in the directions widget by specifying an array of stops information.
     * @param stops An array of points that define the stop locations.
     */
    updateStops(stops: esri.geometry.Point[] | number[][] | string[] | any[]): any;
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
    on(type: "activate", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Deprecated at v3.13. */
    on(type: "deactivate", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fires when the directions display is reset. */
    on(type: "directions-clear", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fires when the route service has calculated the route and the directions are ready for display. */
    on(type: "directions-finish", listener: (event: { result: esri.tasks.RouteResult; target: Directions }) => void): esri.Handle;
    /** Fires when the route services starts to calculate the route. */
    on(type: "directions-start", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fires after a user clicks the Save or Save as New button and subsequently does not have permission to create an item in ArcGIS Online or Portal. */
    on(type: "feature-collection-created", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fires when the directions widget has fully loaded. */
    on(type: "load", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fires when the widget starts or stops listening for map clicks. */
    on(type: "map-click-active", listener: (event: { mapClickActive: boolean; target: Directions }) => void): esri.Handle;
    /** Fires after a user clicks the Save or Save as New button for the first time in order to store a new route in either ArcGIS Online or Portal. */
    on(type: "route-item-created", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fires when a existing route layer item is successfully updated in ArcGIS Online or Portal after user clicks the Save button. */
    on(type: "route-item-updated", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fired when you hover over a route segment in the directions display. */
    on(type: "segment-highlight", listener: (event: { graphic: esri.Graphic; target: Directions }) => void): esri.Handle;
    /** Fires when a route segment is selected in the directions display. */
    on(type: "segment-select", listener: (event: { graphic: esri.Graphic; target: Directions }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** (Currently in beta)The Elevation Profile widget allows a user to create an elevation profile based on a polyline geometry input parameter or existing features.NOTE: Currently there is a known issue when creating an elevation profile that crosses the international dateline multiple times. */
  export class ElevationProfile {
    /** The measurement unit of the polyline geometry. */
    measureUnits: string;
    /** The polyline input geometry used to create the elevation profile. */
    profileGeometry: esri.geometry.Geometry;
    /** The title of the resulting elevation profile. */
    title: string;
    /**
     * Create a new ElevationProfile widget using the given DOM node.
     * @param options See options table below for the full descriptions of the properties needed for this object.
     * @param srcNode Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(options: esri.ElevationProfileOptions, srcNode: Node | string);
    /** Clears the elevation profile chart. */
    clearProfile(): void;
    /** Destroy the widget. */
    destroy(): void;
    /** Finalizes the creation of the ElevationProfile widget. */
    startup(): void;
    /** Fires when the elevation profile is cleared. */
    on(type: "clear-profile", listener: (event: { target: ElevationProfile }) => void): esri.Handle;
    /** Fires after the profile is generated. */
    on(type: "elevation-values", listener: (event: { data: any; target: ElevationProfile }) => void): esri.Handle;
    /** Fires when the widget has fully loaded. */
    on(type: "load", listener: (event: { target: ElevationProfile }) => void): esri.Handle;
    /** Fires when the title of the elevation profile is changed */
    on(type: "title-changed", listener: (event: { target: ElevationProfile }) => void): esri.Handle;
    /** Fires when the elevation profile is updated. */
    on(type: "update-profile", listener: (event: { profileResults: any; target: ElevationProfile }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** Creates an instance of the FeatureTable widget within the provided DOM node. */
  export class FeatureTable {
    /** The number of features a service will try to fetch. */
    batchCount: number;
    /** Read-only: A reference to the column objects and their parameters. */
    columns: any[];
    /** Read-only: Reference to the dataStore used by the dGrid. */
    dataStore: any;
    /** Object defining the date options specifically for formatting date and time editors. */
    dateOptions: any;
    /** Sets the editing state for the FeatureTable. */
    editable: boolean;
    /** Event trigger(s) used to display editing interface for an individual cell. */
    editOn: string | any;
    /** Read-only: Number of records displayed in FeatureTable. */
    featureCount: number;
    /** The featureesri.layers.Layer that the table is associated with. */
    featureLayer: esri.layers.Featureesri.layers.Layer;
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
    map: esri.Map;
    /** Adds additional functional menu items for the 'Options' drop-down menu. */
    menuFunctions: any[];
    /** Attribute fields to include in the FeatureTable. */
    outFields: string[];
    /** Read-only: A comma delimited array of ObjectIds for the features selected in the FeatureTable. */
    selectedRowIds: number[];
    /** Read-only: Each element in the array is an object that contains name-value pair of fields and field values associated with the selected rows. */
    selectedRows: any[];
    /** Displays or hides the attachment column. */
    showAttachments: boolean;
    /** Displays or hides tooltips for column headers. */
    showColumnHeaderTooltips: boolean;
    /** Relies on showRelatedRecords property. */
    showCyclicalRelationships: boolean;
    /** Displays or hides the data type of the field right under the field label in the column header. */
    showDataTypes: boolean;
    /** Displays or hides total number of features and selected number of features in the grid header. */
    showFeatureCount: boolean;
    /** Displays or hides the FeatureTable header. */
    showGridHeader: boolean;
    /** Displays or hides 'Options' drop-down menu of the FeatureTable. */
    showGridMenu: boolean;
    /** Displays or hides the option to show related records in a table if the layer has pre-established relationship. */
    showRelatedRecords: boolean;
    /** Displays or hides the 'Statistics' option in column menus for numeric fields. */
    showStatistics: boolean;
    /** Enables an interaction between the map and the feature table. */
    syncSelection: boolean;
    /** Enables pans to selected features on the map when the table in 'sync selection' mode. */
    zoomToSelection: boolean;
    /**
     * Creates an instance of the FeatureTable widget within the provided DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FeatureTableOptions, srcNodeRef: Node | string);
    /** Centers the map on combined extent of selected rows. */
    centerOnSelection(): void;
    /** Removes all filters and selections in the table. */
    clearFilter(): void;
    /** Removes all selections. */
    clearSelection(): void;
    /** Destroys the FeatureTable widget. */
    destroy(): void;
    /**
     * Filters the table based on the provided row ids.
     * @param ids Array of row ids.
     */
    filterRecordsByIds(ids: number[]): void;
    /** Allows users to see the sub-set of records. */
    filterSelectedRecords(): void;
    /**
     * Queries and gets selected features from the esri.layers.Featureesri.layers.Layer instead of the store.
     * @param id Row id or an array of row ids
     */
    getFeatureDataById(id: number | number[]): any;
    /**
     * Gets row object by the row ID.
     * @param id row ID
     */
    getRowDataById(id: number): any;
    /** Refreshes the data in the table. */
    refresh(): void;
    /** Resizes the grid's container. */
    resize(): void;
    /**
     * Allows users to select rows(s) based on row id(s).
     * @param ids Row id or an array of row ids
     * @param scrollToRow Indicates whether the table should scroll to selected rows.
     */
    selectRows(ids: number | number[], scrollToRow?: boolean): void;
    /**
     * Sorts a given field in ascending or descending order.
     * @param field Name of the field
     * @param descending Defines whether the specified field will be sorted in ascending or descending order.
     */
    sort(field: string, descending?: boolean): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** This event fires in response to clearSelection() method. */
    on(type: "clear-selection", listener: (event: { target: FeatureTable }) => void): esri.Handle;
    /** Fires when the grid column is resized. */
    on(type: "column-resize", listener: (event: { resizeEvent: any; target: FeatureTable }) => void): esri.Handle;
    /** Fires when a column is hidden or shown via 'Options' drop-down menu. */
    on(type: "column-state-change", listener: (event: { stateChangeEvent: any; target: FeatureTable }) => void): esri.Handle;
    /** Fires when grid editor field loses focus after being changed. */
    on(type: "data-change", listener: (event: { target: FeatureTable }) => void): esri.Handle;
    /** Fires when grid editor is hidden. */
    on(type: "editor-hide", listener: (event: { target: FeatureTable }) => void): esri.Handle;
    /** Fires when grid editor is shown. */
    on(type: "editor-show", listener: (event: { target: FeatureTable }) => void): esri.Handle;
    /** Fires when editing is complete. */
    on(type: "edits-complete", listener: (event: { adds: esri.layers.FeatureEditResult[]; deletes: esri.layers.FeatureEditResult[]; updates: esri.layers.FeatureEditResult[]; target: FeatureTable }) => void): esri.Handle;
    /** Fires when an error occurs in the grid. */
    on(type: "error", listener: (event: { target: FeatureTable }) => void): esri.Handle;
    /** Fires when grid is filtered. */
    on(type: "filter", listener: (event: { ids: number[]; target: FeatureTable }) => void): esri.Handle;
    /** Fires when the FeatureTable is loaded. */
    on(type: "load", listener: (event: { target: FeatureTable }) => void): esri.Handle;
    /** Fires when the grid is refreshed. */
    on(type: "refresh", listener: (event: { target: FeatureTable }) => void): esri.Handle;
    /** Fires when a row is deselected. */
    on(type: "row-deselect", listener: (event: { event: any; target: FeatureTable }) => void): esri.Handle;
    /** Fires when a row is selected. */
    on(type: "row-select", listener: (event: { event: any; target: FeatureTable }) => void): esri.Handle;
    /** Fires when attachment is displayed in the table. */
    on(type: "show-attachments", listener: (event: { attachments: any; dialog: any; featureId: number; target: FeatureTable }) => void): esri.Handle;
    /** Fires when related records are displayed in the table. */
    on(type: "show-related-records", listener: (event: { features: esri.Graphic[]; relationship: any; row: any; target: FeatureTable }) => void): esri.Handle;
    /** Fires when the statistics dialog box shows the calculated statistics on a column with numeric data. */
    on(type: "show-statistics", listener: (event: { statistics: any; target: FeatureTable }) => void): esri.Handle;
    /** Fires when a column is sorted. */
    on(type: "sort", listener: (event: { sortEvent: any; target: FeatureTable }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The Gallery widget provides a touch-aware thumbnail gallery for mobile devices such as iOS and Android. */
  export class Gallery {
    /**
     * Creates a new mobile Gallery.
     * @param params See options list.
     * @param srcNodeRef HTML element where the  gallery should be rendered.
     */
    constructor(params: esri.GalleryOptions, srcNodeRef: Node | string);
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
    constructor(params: esri.GaugeOptions, srcNodeRef: Node | string);
    /** Destroy the gauge. */
    destroy(): void;
    /**
     * Get the value of the property from the Gauge.
     * @param name Property to get value.
     */
    get(name: string): string | esri.Graphic | number;
    /**
     * Set the value of a property from the Gauge.
     * @param name Property to set value.
     * @param value Value to set.
     */
    set(name: string, value: string | esri.Graphic | number): Gauge;
    /** Finalizes the creation of the gauge. */
    startup(): void;
  }

  /** The Geocoder widget was deprecated in version 3.13 and replaced by the Search widget. */
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
    /** Specify a graphicsesri.layers.Layer to use when highlightLocation is true. */
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
     * Create a new Geocoder widget using the given DOM node.
     * @param params Set of parameters used to specify Geocoder options.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.GeocoderOptions, srcNodeRef: Node | string);
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
    on(type: "auto-complete", listener: (event: { results : any; target: Geocoder }) => void): esri.Handle;
    /** Fired when a result is cleared from the input box or a new result is selected. */
    on(type: "clear", listener: (event: { target: Geocoder }) => void): esri.Handle;
    /** Fired when results are returned from a search. */
    on(type: "find-results", listener: (event: { results: any; target: Geocoder }) => void): esri.Handle;
    /** Fired when a geocoder is selected. */
    on(type: "geocoder-select", listener: (event: { geocoder: any; target: Geocoder }) => void): esri.Handle;
    /** Fired when a result has been selected, the submit button is pressed, or the enter key is fired. */
    on(type: "select", listener: (event: { results: any; target: Geocoder }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** A widget to assist in obtaining values for managing and setting properties on a HeatmapRenderer. */
  export class HeatmapSlider extends esri.dijit.RendererSlider {
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
    /**
     * Creates a new HeatmapSlider widget within the provided DOM node srcNodeRef.
     * @param params Set of parameters used to specify the HeatmapSlider widget options.
     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
     */
    constructor(params: esri.HeatmapSliderOptions, srcNodeRef: Node | string);
    /** Fires when HeatmapSlider changes. */
    on(type: "change", listener: (event: { colorStops: any; target: HeatmapSlider }) => void): esri.Handle;
    /** Fires when HeatmapSlider handle is moved. */
    on(type: "handle-value-change", listener: (event: { colorStops: any; target: HeatmapSlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The Histogramesri.dijit.TimeSlider dijit provides a histogram chart representation of data for time-enabled layers on a map. */
  class Histogramesri.dijit.TimeSlider {
    /**
     * Creates a new Histogramesri.dijit.TimeSlider dijit using the given DOM node.
     * @param params Input parameters.
     * @param srcNodeRef HTML element where the tool should be rendered.
     */
    constructor(params: esri.HistogramTimeSliderOptions, srcNodeRef: Node | string);
    /** Set related objects as null and hide the widget. */
    destroy(): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    constructor(params: esri.HomeButtonOptions, srcNodeRef: Node | string);
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
    on(type: "home", listener: (event: { error: any; extent: esri.geometry.Extent; target: HomeButton }) => void): esri.Handle;
    /** Fires when the widget has been loaded. */
    on(type: "load", listener: (event: { target: HomeButton }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** A form widget that allows one to select a value with a horizontally draggable handle. */
  export class HorizontalSlider {
    /** Show increment/decrement buttons at the ends of the slider. */
    showButtons: boolean;
    /**
     * Creates a new HorizontalSlider widget.
     * @param params Set of parameters used to specify the HorizontalSlider widget options.
     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
     */
    constructor(params: esri.HorizontalSliderOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
  }

  /** This widget allows you to perform measurements on image services. */
  export class ImageServiceMeasure {
    /** esri.symbols.Symbol to be used when drawing a polygon or extent. */
    fillSymbol: SimpleFillesri.symbols.Symbol;
    /** esri.symbols.Symbol to be used when drawing a line. */
    lineSymbol: SimpleLineesri.symbols.Symbol;
    /** esri.symbols.Symbol to be used when drawing a point. */
    markerSymbol: SimpleMarkeresri.symbols.Symbol;
    /** The instance of esri.toolbars.ImageServiceMeasureTool associated with this widget. */
    measureToolbar: esri.toolbars.ImageServiceMeasureTool;
    /**
     * Creates an instance of the ImageServiceMeasure widget.
     * @param params An Object containing constructor options.
     * @param srcNode Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.ImageServiceMeasureOptions, srcNode: Node | string);
    /** Destroys the ImageServiceMeasure widget. */
    destroy(): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    constructor(params: any, srcNodeRef: Node | string);
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
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when an infoWindow is hidden. */
    on(type: "hide", listener: (event: { target: InfoWindowLite }) => void): esri.Handle;
    /** Fires when an InfoWindowLite is displayed. */
    on(type: "show", listener: (event: { target: InfoWindowLite }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** (Currently in beta) The LayerList widget provides a list of layers that allows the toggling of layer visibility. */
  export class LayerList {
    /** An array of operational layers. */
    layers: any[];
    /** Indicates whether the widget has been loaded. */
    loaded: boolean;
    /** Reference to the map. */
    map: esri.Map;
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
    /**
     * Create a new LayerList widget using the given DOM node.
     * @param options Set of options used to specify LayerList options.
     * @param srcNode Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(options: esri.LayerListOptions, srcNode: Node | string);
    /** Destroy the LayerList widget. */
    destroy(): void;
    /** Reloads all layers and properties that may have changed. */
    refresh(): void;
    /** Finalizes the creation of the LayerList widget. */
    startup(): void;
    /** Fired when the LayerList widget has fully loaded. */
    on(type: "load", listener: (event: { target: LayerList }) => void): esri.Handle;
    /** Fired when refresh() is called on the widget. */
    on(type: "refresh", listener: (event: { target: LayerList }) => void): esri.Handle;
    /** Fired when the layer is toggled on/off within the widget. */
    on(type: "toggle", listener: (event: { layerIndex: number; subLayerIndex: number; visible: boolean; target: LayerList }) => void): esri.Handle;
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
    constructor(params: esri.LayerSwipeOptions, srcNodeRef: Node | string);
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
    /** Specify a subset of the layers in the map to display in the legend. */
    layerInfos: any[];
    /** Reference to the map. */
    map: esri.Map;
    /**
     * Creates a new Legend dijit.
     * @param params Parameters used to configure the dijit.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.LegendOptions, srcNodeRef: Node | string);
    /** Destroys the legend. */
    destroy(): void;
    /** Refresh the legend. */
    refresh(): void;
    /** Finalizes the creation of the legend . */
    startup(): void;
  }

  /** LocateButton provides a simple button to locate and zoom to the user's location. */
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
    constructor(params: esri.LocateButtonOptions, srcNodeRef: Node | string);
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
    constructor(params: esri.MeasurementOptions, srcNodeRef: Node | string);
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
    measure(geometry: esri.geometry.Point | esri.geometry.Polyline | Polygon): void;
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
    on(type: "measure", listener: (event: { geometry: esri.geometry.Geometry; segmentLength: number; toolName: string; unitName: string; values: number; target: Measurement }) => void): esri.Handle;
    /** Fired when the measurement is complete. */
    on(type: "measure-end", listener: (event: { geometry: esri.geometry.Geometry; toolName: string; unitName: string; values: number[] | number; target: Measurement }) => void): esri.Handle;
    /** Fires when a measurement operation begins (single-click). */
    on(type: "measure-start", listener: (event: { toolName: string; unitName: string; target: Measurement }) => void): esri.Handle;
    /** Fires when the primary tool is changed. */
    on(type: "tool-change", listener: (event: { previousToolName: string; toolName: string; unitName: string; target: Measurement }) => void): esri.Handle;
    /** Fires when the units currently being used by the Measurement widget changes. */
    on(type: "unit-change", listener: (event: { toolName: string; unitName: string; target: Measurement }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
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
    imageServiceLayer: ArcGISImageServiceesri.layers.Layer;
    /** Indicates whether current view is nadir. */
    isNadir: boolean;
    /** esri.Map object associated with the widget. */
    map: esri.Map;
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
     * Creates an instance of the ObliqueViewer widget.
     * @param params Constructor options.
     */
    constructor(params: esri.ObliqueViewerOptions);
    /**
     * Queries and displays the best image in a specific direction.
     * @param geometry The specified input geometry needed for querying for the best image in a given azimuth direction.
     */
    locate(geometry: Geometry): void;
    /**
     * Projects the input geometry to the specified spatial reference.
     * @param geometry The geometry to project.
     * @param outesri.SpatialReference The spatial reference to project the geometry to.
     */
    projectGeometry(geometry: esri.geometry.Geometry, outSpatialReference: SpatialReference): any;
    /**
     * Performs a query on the image service for oblique images covering the input geometry.
     * @param geometry The input geometry to use for the search.
     */
    search(geometry: Geometry): any;
    /**
     * Sets the records and extent on the viewer.
     * @param records An array of raster data objects.
     * @param extent The extent to set the viewer to.
     */
    setData(records: any[], extent: Extent): void;
    /**
     * Projects the given extent to the map's spatial reference and sets the extent.
     * @param extent The extent to project the map's spatial reference to.
     */
    setExtent(extent: Extent): any;
    /**
     * Sets the input image (based on the image ID) to the given extent.
     * @param id The ID of the raster image.
     * @param extent The extent to set the raster image to.
     */
    setImage(id: number, extent: Extent): void;
    /** Sets the map extent to the currently selected image. */
    zoomToSelectedImage(): void;
    /** Fires when the azimuth is changed. */
    on(type: "azimuth-change", listener: (event: { azimuth: number; target: ObliqueViewer }) => void): esri.Handle;
    /** Fires when the selected raster is changed. */
    on(type: "raster-select", listener: (event: { selectedRasterId: number; target: ObliqueViewer }) => void): esri.Handle;
    /** Fires when the viewer records are refreshed. */
    on(type: "records-refresh", listener: (event: { filteredRecords: any[]; records: any[]; target: ObliqueViewer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** A widget to assist with managing opacity with a renderer. */
  export class OpacitySlider extends esri.dijit.RendererSlider {
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
    /**
     * Creates a new OpacitySlider widget within the provided DOM node srcNodeRef.
     * @param params Set of parameters used to specify the OpacitySlider widget options.
     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
     */
    constructor(params: esri.OpacitySliderOptions, srcNodeRef: Node | string);
    /** Fires when OpacitySlider changes. */
    on(type: "change", listener: (event: { opacityInfo: any; target: OpacitySlider }) => void): esri.Handle;
    /** Fires when  minValue or  maxValue of the OpacitySlider changes. */
    on(type: "data-value-change", listener: (event: { maxValue: number; minValue: number; opacityInfo: any; target: OpacitySlider }) => void): esri.Handle;
    /** Fires when an OpacitySlider handle is moved. */
    on(type: "handle-value-change", listener: (event: { opacityInfo: any; target: OpacitySlider }) => void): esri.Handle;
    /** Fires when the zoom state changes. */
    on(type: "zoomed", listener: (event: { zoomed: boolean; target: OpacitySlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The Overviewesri.Map widget displays the current extent of the map within the context of a larger area. */
  class Overviewesri.Map {
    /** The esri.Map instance displayed in the Overviewesri.Map widget's container. */
    overviewMap: esri.Map;
    /**
     * Creates a new Overviewesri.Map object.
     * @param params Parameters that define the functionality of the Overviewesri.Map widget.
     * @param srcNodeRef HTML element where the widget should be rendered.
     */
    constructor(params: esri.OverviewMapOptions, srcNodeRef?: Node | string);
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
    lineSymbol: Lineesri.symbols.Symbol;
    /** The location the info window is pointing to. */
    location: esri.geometry.Point;
    /** Specify the margin (in pixels) to leave to the left of the popup window when it is maximized. */
    marginLeft: number;
    /** Specify the margin (in pixels) to leave at the top of the popup window when it is maximized. */
    marginTop: number;
    /** Define the marker symbol used to highlight point features. */
    markerSymbol: Markeresri.symbols.Symbol;
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
    constructor(options: esri.PopupOptions, srcNodeRef: Node | string);
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
    setContent(content: string | Function): void;
    /**
     * Associate an array of features or an array of deferreds that return features with the info window.
     * @param features An array of features or deferreds.
     */
    setFeatures(features: esri.Graphic[] | any[]): void;
    /**
     * Sets the info window title.
     * @param title The text for the title.
     */
    setTitle(title: string | Function): void;
    /**
     * Display the info window at the specified location.
     * @param location An instance of esri.geometry.esri.geometry.Point that represents the geographic location to display the popup.
     * @param options See the object specifications table below for the structure of the  options  object.
     */
    show(location: esri.geometry.Point, options?: any): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    constructor(options: esri.PopupMobileOptions, srcNodeRef: Node | string);
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
    setContent(content: string | Function): void;
    /**
     * Associate an array of features or an array of deferreds that return features with the info window.
     * @param features An array of features or deferreds.
     */
    setFeatures(features: esri.Graphic[] | any[]): void;
    /**
     * Sets the info window title.
     * @param title The text for the title.
     */
    setTitle(title: string | Function): void;
    /**
     * Display the info window at the specified location.
     * @param location An instance of esri.geometry.esri.geometry.Point that represents the geographic location to display the popup.
     */
    show(location: Point): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    constructor(params: esri.PrintOptions, srcNodeRef: Node | string);
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

  /** The base slider class for all Subclass Slider widgets listed below. */
  class esri.dijit.RendererSlider {
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
    /**
     * Creates a new esri.dijit.RendererSlider widget.
     * @param params Set of parameters used to specify the esri.dijit.RendererSlider widget options.
     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
     */
    constructor(params: esri.RendererSliderOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when the user actively slides the handle. */
    on(type: "slide", listener: (event: { values: number[]; target: esri.dijit.RendererSlider }) => void): esri.Handle;
    /** Fires when the user lets go of the handle. */
    on(type: "stop", listener: (event: { values: number[]; target: esri.dijit.RendererSlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.dijit.RendererSlider;

  /** The Scalebar widget displays a scalebar on the map or in a specified HTML node. */
  export class Scalebar {
    /**
     * Creates a new Scalebar dijit.
     * @param params Parameters used to configure the widget.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.ScalebarOptions, srcNodeRef?: Node | string);
    /** Destroy the scalebar. */
    destroy(): void;
    /** Hide the scalebar dijit. */
    hide(): void;
    /** Set the scalebar's visibility to true. */
    show(): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /** This is the specified graphicsesri.layers.Layer to use for the highlightesri.Graphic and labelesri.Graphic instead of map.graphics. */
    graphicsLayer: esri.layers.Layer;
    /** Read-only property indicating the highlighted location graphic. */
    highlightGraphic: esri.Graphic;
    /** A customized infoTemplate for the selected feature. */
    infoTemplate: esri.InfoTemplate;
    /** Read-only graphic property for the text label. */
    labelGraphic: esri.Graphic;
    /** The text symbol for the label graphic. */
    labelSymbol: Textesri.symbols.Symbol;
    /** Read-only property indicating whether the widget is loaded. */
    loaded: boolean;
    /** The default distance specified in meters used to reverse geocode (if not specified by source). */
    locationToAddressDistance: number;
    /** Reference to the map. */
    map: esri.Map;
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
    /**
     * Create a new Search widget using the given DOM node.
     * @param options Set of options used to specify Search options.
     * @param srcNode Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(options: esri.SearchOptions, srcNode: Node | string);
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
    get(name: string): any | boolean | esri.layers.Layer | esri.Graphic | esri.InfoTemplate | number | Textesri.symbols.Symbol | esri.Map | any[] | string;
    /** Hides the Search widget. */
    hide(): void;
    /**
     * Depending on the sources specified, search() queries the feature layer(s) and/or performs address matching using any specified Locator(s) and returns any applicable results.
     * @param value This value can be a string, geometry, suggest candidate object, or an array of [latitude,longitude].
     */
    search(value?: string | esri.geometry.Geometry | any | number[]): any;
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
    set(name: string, value: any | boolean | esri.layers.Layer | esri.Graphic | esri.InfoTemplate | number | Textesri.symbols.Symbol | esri.Map | any[] | string): void;
    /** Show the Search widget. */
    show(): void;
    /** Finalizes the creation of the Search widget. */
    startup(): void;
    /**
     * Performs a suggest() request on the active esri.tasks.Locator or feature layer.
     * @param value The string value used to suggest() on an active locator or feature layer.
     */
    suggest(value?: string): any;
    /** Fired when the widget's text input loses focus. */
    on(type: "blur", listener: (event: { target: Search }) => void): esri.Handle;
    /** Fired when a result is cleared from the input box or a new result is selected. */
    on(type: "clear-search", listener: (event: { target: Search }) => void): esri.Handle;
    /** Fired when the widget's text input sets focus. */
    on(type: "focus", listener: (event: { target: Search }) => void): esri.Handle;
    /** Fired when the search widget has fully loaded. */
    on(type: "load", listener: (event: { target: Search }) => void): esri.Handle;
    /** Fires when the search method is called and returns its results. */
    on(type: "search-results", listener: (event: { activeSourceIndex: number; errors: Error[]; numErrors: number; numResults: number; results: any[]; value: string; target: Search }) => void): esri.Handle;
    /** Fired when a search result is selected. */
    on(type: "select-result", listener: (event: { result: any; source: any; sourceIndex: number; target: Search }) => void): esri.Handle;
    /** Fired when the suggest method is called and returns its results. */
    on(type: "suggest-results", listener: (event: { activeSourceIndex: number; errors: Error[]; numErrors: number; numResults: number; results: any[]; value: string; target: Search }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** A widget to assist with managing size with a renderer. */
  export class SizeInfoSlider extends esri.dijit.RendererSlider {
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
    /** Required: The SimpleLineesri.symbols.Symbol or SimpleMarkeresri.symbols.Symbol used with the widget. */
    symbol: SimpleMarkeresri.symbols.Symbol | SimpleLineesri.symbols.Symbol;
    /** Optional: Additional options to customize slider. */
    zoomOptions: any;
    /**
     * Creates a new SizeInfoSlider widget.
     * @param params Set of parameters used to specify the SizeInfoSlider widget options.
     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
     */
    constructor(params: esri.SizeInfoSliderOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when the SizeInfoSlider properties change. */
    on(type: "change", listener: (event: { sizeInfo: any; target: SizeInfoSlider }) => void): esri.Handle;
    /** Fires when  minValue or  maxValue of the SizeInfoSlider changes. */
    on(type: "data-value-change", listener: (event: { maxValue: number; minValue: number; sizeInfo: any; target: SizeInfoSlider }) => void): esri.Handle;
    /** Fires when a SizeInfoSlider handle is moved. */
    on(type: "handle-value-change", listener: (event: { sizeInfo: any; target: SizeInfoSlider }) => void): esri.Handle;
    /** Fires when the zoom state changes. */
    on(type: "zoomed", listener: (event: { zoomed: boolean; target: SizeInfoSlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** A widget that assist with applying properties to Symbols. */
  export class SymbolStyler {
    /** Read-only: Returns the name of the currently active tab. */
    activeTab: string;
    /**
     * Creates a new SymbolStyler widget.
     * @param params Set of parameters used to specify the SymbolStyler widget options.
     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
     */
    constructor(params: esri.SymbolStylerOptions, srcNodeRef: Node | string);
    /**
     * Sets the symbol to edit.
     * @param symbol esri.symbols.Symbol to edit.
     * @param options Styling options.
     */
    edit(symbol: esri.symbols.Symbol, options: any): void;
    /** Returns the current style. */
    getStyle(): any;
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Saves the recent fill and outline colors. */
    storeColors(): void;
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
    constructor(params: esri.TimeSliderOptions, srcNodeRef: Node | string);
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
     * @param timeIntervalUnits  Valid values are listed in the esri.layers.TimeInfo constants table.
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
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fires when the next button is clicked or TimeSlider.next() method is invoked. */
    on(type: "next", listener: (event: { timeExtent: Timeesri.geometry.Extent; target: esri.dijit.TimeSlider }) => void): esri.Handle;
    /** Fires when the pause button is clicked or TImeSlider.pause() method is invoked. */
    on(type: "pause", listener: (event: { timeExtent: Timeesri.geometry.Extent; target: esri.dijit.TimeSlider }) => void): esri.Handle;
    /** Fires once when the play button is clicked or Timeslider.play() method is invoked. */
    on(type: "play", listener: (event: { timeExtent: Timeesri.geometry.Extent; target: esri.dijit.TimeSlider }) => void): esri.Handle;
    /** Fires when the previous button is clicked or TimeSlider.previous() is invoked. */
    on(type: "previous", listener: (event: { timeExtent: Timeesri.geometry.Extent; target: esri.dijit.TimeSlider }) => void): esri.Handle;
    /** Fires when the timeesri.geometry.Extent of the esri.dijit.TimeSlider is changed. */
    on(type: "time-extent-change", listener: (event: { timeExtent: Timeesri.geometry.Extent; target: esri.dijit.TimeSlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.dijit.TimeSlider;

  /** A widget that sets the displayed visible scale values. */
  export class VisibleScaleRangeSlider {
    /** Setting the layer will update the suggested scale range, minScale and maxScale. */
    layer: esri.layers.Layer;
    /** Setting this property will update the slider's minimum/maximum values and current scale indicator. */
    map: esri.Map;
    /** Read-only: The maxScale bound in the slider range */
    maximum: number;
    /** The current maxScale value. */
    maxScale: number;
    /** Read-only: The minScale bound in the slider range. */
    minimum: number;
    /** The current minScale value. */
    minScale: number;
    /**
     * Creates a new VisibleScaleRangeSlider widget.
     * @param params Set of parameters used to specify the VisibleScaleRangeSlider widget options.
     * @param srcNodeRef Reference or ID of the HTMLElement where the widget should be rendered.
     */
    constructor(params: esri.VisibleScaleRangeSliderOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Dispatched whenever minScale or maxScale changes. */
    on(type: "scale-range-change", listener: (event: { maxScale: number; minScale: number; target: VisibleScaleRangeSlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
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
    /**
     * Creates a new AggregatePoints dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.AggregatePointsOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
  }

  /** The esri.dijit.analysis.AnalysisBase widget is the base class for all other widgets under esri/dijit/analysis. */
  class esri.dijit.analysis.AnalysisBase {
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
    /**
     * Creates a new CalculateDensity dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
  }

  /** Choose Best Facilities allows you to choose the best locations for facilities. */
  export class ChooseBestFacilities extends esri.dijit.analysis.AnalysisBase {
    /** The URL to the analysis service, for example "http://analysis.arcgis.com/arcgis/rest/services/tasks/GPServer". */
    analysisGpServer: string;
    /** The number of facilities to choose when allocating demand locations. */
    candidateCount: number;
    /** This specifies how much demand every facility in the candidateFacilitiesesri.layers.Layer is capable of supplying. */
    candidateFacilitiesCapacity: string;
    /** String value indicating the field name on the candidateFacilitiesesri.layers.Layer  representing how much demand each facility in the candidatesFacilitiesesri.layers.Layer is capable of supplying. */
    candidateFacilitiesCapacityField: string;
    /** A point layer specifying one or more locations that act as facilities by providing some kind of service. */
    candidateFacilitiesLayer: esri.layers.Featureesri.layers.Layer;
    /** The amount of demand available at every demand locations. */
    demand: number;
    /** String value indicating the field name on the demandLocationesri.layers.Layer  representing the amount of demand available at each demand location. */
    demandField: string;
    /** A point layer specifying the locations that have demand for facilities. */
    demandLocationLayer: esri.layers.Featureesri.layers.Layer;
    /** Array of point layers to be used for choosing the demandLocationLayer. */
    demandLocationLayers: esri.layers.Featureesri.layers.Layer[];
    /** When true, Travel Modes (Driving Time) is enabled for the inputesri.layers.Layer with the point geometries (esriGeometryPoint). */
    enableTravelModes: boolean;
    /** Array of point layers used for setting the required facilities layer and candidate facilities layer. */
    featureLayers: esri.layers.Featureesri.layers.Layer[];
    /** Sets the selected folder of the select folder dropdown. */
    folderId: string;
    /** Sets the selected folder of the select folder dropdown. */
    folderName: string;
    /** Reference to the map. */
    map: esri.Map;
    /** The maximum travel time or distance allowed between a demand location and its allocated facility. */
    maxTravelRange: number;
    /** String value indicating the field name on the demandLocationesri.layers.Layer specifying the maximum travel time or distance allowed between a demand location and its allocated facility. */
    maxTravelRangeField: string;
    /** The name of the output layer to be displayed in the result layer  nameinputbox. */
    outputLayerName: string;
    /** The percentage of the total demand that you want the chosen and required facilities to capture. */
    percentDemandCoverage: number;
    /** The URL to the ArcGIS organization or Portal site where the GP server is hosted. */
    portalUrl: string;
    /** Specify how much demand every facility in the requiredFacilitiesesri.layers.Layer is capable of supplying. */
    requiredFacilitiesCapacity: number;
    /** A field on the requiredFacilitiesesri.layers.Layer representing how much demand each facility in this layer is capable of supplying. */
    requiredFacilitiesCapacityField: string;
    /** A point layer specifying one or more locations that act as facilities by providing some kind of service. */
    requiredFacilitiesLayer: esri.layers.Featureesri.layers.Layer;
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
    /**
     * Creates a new ChooseBestFacilities dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.ChooseBestFacilitiesOptions, srcNodeRef: Node | string);
  }

  /** Measure the travel time or distance between pairs of points. */
  export class ConnectOriginsToDestinations extends esri.dijit.analysis.AnalysisBase {
    /** The linear unit used with the distance value(s). */
    distanceDefaultUnits: string;
    /** When true, Travel Modes (Driving Distance, Driving Time) are enabled for analysisesri.layers.Layer with point geometries. */
    enableTravelModes: boolean;
    /** An array of feature layers containing destination points. */
    featureLayers: esri.layers.Featureesri.layers.Layer[];
    /** References the map object. */
    map: esri.Map;
    /** The point feature layer containing the origin points. */
    originsLayer: esri.layers.Featureesri.layers.Layer;
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
    /**
     * Creates a new ConnectOriginsToDestinations dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.ConnectOriginsToDestinationsOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /**
     * Creates a new CreateBuffers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.CreateBuffersOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /**
     * Creates a new CreateDriveTimeAreas dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.CreateDriveTimeAreasOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
  }

  /** Creates areas that are visible based on locations you specify. */
  export class CreateViewshed extends esri.dijit.analysis.AnalysisBase {
    /** Feature layer containing points representing observation points. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map: esri.Map;
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
    /**
     * Creates a new CreateViewshed dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.CreateViewshedOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
  }

  /** Creates catchment areas based on locations you specify. */
  export class CreateWatersheds extends esri.dijit.analysis.AnalysisBase {
    /** The input feature layer containing points used to calculate watersheds. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** Reference to the map object. */
    map: esri.Map;
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
    /**
     * Creates a new CreateWatersheds dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.CreateWatershedsOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
  }

  /** Derive new features from the input layers that meet a query you specify. */
  export class DeriveNewLocations extends esri.dijit.analysis.AnalysisBase {
    /** The analysis layer to derive new locations from. */
    analysisLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of feature layers to use as input. */
    inputLayers: esri.layers.Featureesri.layers.Layer[];
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
    /**
     * Creates a new DeriveNewLocations dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /**
     * Creates a new DissolveBoundaries dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.DissolveBoundariesOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /**
     * Creates a new Enrichesri.layers.Layer dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.EnrichLayerOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /**
     * Creates a new ExtractData dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.ExtractDataOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
  }

  /** Select features in the input layer that meet an attribute and/or spatial query you specify. */
  export class FindExistingLocations extends esri.dijit.analysis.AnalysisBase {
    /** The analysis layer to find existing locations from. */
    analysisLayer: esri.layers.Featureesri.layers.Layer;
    /** An array of feature layers to use as input. */
    inputLayers: esri.layers.Featureesri.layers.Layer[];
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
    /**
     * Creates a new FindExistingLocations dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /**
     * Creates a new FindHotSpots dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FindHotSpotsOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /**
     * Creates a new FindNearest dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FindNearestOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
  }

  /** Measure the similarity of candidate locations to one or more reference locations. */
  export class FindSimilarLocations extends esri.dijit.analysis.AnalysisBase {
    /** The input point, line, or polygon feature layer. */
    inputLayer: esri.layers.Featureesri.layers.Layer;
    /** The name of the output layer to be shown in the Result layer name input box. */
    outputLayerName: string;
    /** When true, returns the result of analysis as a client-side feature collection. */
    returnFeatureCollection: boolean;
    /** Return a report of the analysis process. */
    returnProcessInfo: boolean;
    /** The point, line, or polygon feature layer to search. */
    searchLayers: esri.layers.Featureesri.layers.Layer[];
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
    /**
     * Creates a new FindSimilarLocations dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /**
     * Creates a new InterpolatePoints dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /**
     * Creates a new MergeLayers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.MergeLayersOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /**
     * Creates a new OverlayLayers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.OverlayLayersOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    stopsLayer: esri.layers.Featureesri.layers.Layer;
    /**
     * Creates a new PlanRoutes dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    constructor(params: esri.SummarizeNearbyOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    constructor(params: esri.SummarizeWithinOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    /**
     * Creates a new TraceDownstream dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: any, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
  }
}
declare namespace esri.dijit.editing {

  /** This class is used with the UndoManager to provide undo/redo functionality of Add operations when editing. */
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
    constructor(params: any, srcNodeRef: Node | string);
    /**
     * Display the attachment editor.
     * @param graphic esri.Graphic, with attachments, to display in the attachment editor.
     * @param featureesri.layers.Layer The feature layer to display attachments for.
     */
    showAttachments(graphic: esri.Graphic, featureLayer: FeatureLayer): void;
    /** Finalizes the creation of the attachment editor. */
    startup(): void;
  }

  /** This class is used with the UndoManager to provide undo/redo functionality of Cut operations when editing. */
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

  /** This class is used with the UndoManager to provide undo/redo functionality of Delete operations when editing. */
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
    /** The default esri.toolbars.Edit toolbar instance. */
    editToolbar: esri.toolbars.Edit;
    /**
     * Creates a new Editor object.
     * @param params Parameters that define the functionality of the editor widget.
     * @param srcNodeRef HTML element where the widget should be rendered.
     */
    constructor(params: esri.EditorOptions, srcNodeRef: Node | string);
    /** Finalizes the creation of the widget. */
    startup(): void;
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
    constructor(params: esri.TemplatePickerOptions, srcNodeRef: Node | string);
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

  /** This class is used with the UndoManager to provide undo/redo functionality of Union operations when editing. */
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

  /** This class is used with the UndoManager to provide undo/redo functionality of Update operations when editing. */
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
    /** An array of the variables currently loaded in the Data Browser. */
    variables: any[];
    /**
     * Creates a new DataBrowser dijit using the given DOM node.
     * @param options Optional parameters used to create the layer.
     * @param srcNodeRef Reference or id of an HTML element where the DataBrowser should be rendered.
     */
    constructor(options: esri.DataBrowserOptions, srcNodeRef: Node | string);
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
    studyAreaOptions: esri.tasks.geoenrichment.RingBuffer | esri.tasks.geoenrichment.DriveBuffer | esri.tasks.geoenrichment.IntersectingGeographies;
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
    constructor(params: any, srcNodeRef: Node | string);
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
    constructor(params: any, srcNodeRef: Node | string);
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
    studyAreaOptions: esri.tasks.geoenrichment.RingBuffer | esri.tasks.geoenrichment.DriveBuffer | esri.tasks.geoenrichment.IntersectingGeographies;
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
declare namespace esri.dijit.util {
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
declare namespace esri.geometry {

  /** A circle (Polygon) created by a specified center point. */
  export class Circle extends esri.geometry.Polygon {
    /** Center point of the circle. */
    center: esri.geometry.Point | number[];
    /** The radius of the circle based. */
    radius: number;
    /** Unit of the radius. */
    radiusUnit: string;
    /** Array of coordinate values constituting the circle like [[x1, y1], [x2, y2],...]. */
    rings: number[][][];
    /** The spatial reference of the circle will be the same as the spatial reference of the center point. */
    spatialReference: esri.SpatialReference;
    /**
     * Create a new Circle by specifying an input center location using either an esri.geometry.esri.geometry.Point object or a latitude/longitude array and an object with the following optional properties: radius, radiusUnits, geodesic and numberOfPoints.
     * @param center Center point of the circle.
     * @param options See options descriptions for further information.
     */
    constructor(center: esri.geometry.Point | number[], options?: esri.CircleOptions1);
    /**
     * Create a new Circle by specifying an object with a required center location, defined as a longitude/latitude array or an esri.geometry.esri.geometry.Point, and the following additional optional parameters: radius, radiusUnits, geodesic, and numberOfPoints.
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
     * Returns the intersection extent if the input geometry is an extent that intersects this extent.
     * @param geometry The geometry used to test the intersection.
     */
    intersects(geometry: Geometry): esri.geometry.Extent | boolean;
    /** Returns an array with either one esri.geometry.Extent that's been shifted to within +/- 180 or two Extents if the original extent intersects the dateline. */
    normalize(): esri.geometry.Extent[];
    /**
     * Returns a new esri.geometry.Extent with x and y offsets.
     * @param dx The offset distance in map units for the x-coordinate.
     * @param dy The offset distance in map units for the y-coordinate.
     */
    offset(dx: number, dy: number): esri.geometry.Extent;
    /** Returns an extent with a spatial reference with a custom shifted central meridian if the extent intersects the dateline. */
    shiftCentralMeridian(): esri.geometry.Extent;
    /**
     * Expands this extent to include the extent of the argument.NOTE: Performing a Union returns a new extent as opposed to modifying the existing extent.
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
    /** The cache is used to store values computed from geometries that need to cleared or recomputed upon mutation. */
    cache: any;
    /** The spatial reference of the geometry. */
    spatialReference: esri.SpatialReference;
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
    addPoint(point: esri.geometry.Point | number[]): Multipoint;
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
     * Returns a new esri.geometry.Point with x and y offsets.
     * @param dx The offset distance in map units from the x-coordinate.
     * @param dy The offset distance in map units from the y-coordinate.
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
    constructor(coordinates: number[][] | number[][][]);
    /**
     * Adds a ring to the Polygon.
     * @param ring A polygon ring.
     */
    addRing(ring: esri.geometry.Point[] | number[][]): esri.geometry.Polygon;
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
    isClockwise(ring: esri.geometry.Point[] | number[][]): boolean;
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
    constructor(coordinates: number[][] | number[][][]);
    /**
     * Adds a path to the Polyline.
     * @param path Path to add to the Polyline.
     */
    addPath(path: esri.geometry.Point[] | number[][]): esri.geometry.Polyline;
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

  /** A client-side geometry engine. */
  export var geometryEngine: {
    /**
     * Creates planar (or Euclidean) buffer polygons at a specified distance around the input geometries.
     * @param geometry The buffer input geometry.
     * @param distance The specified distance(s) for buffering.
     * @param unit Measurement unit for the distance(s).
     * @param unionResults Whether the output geometries should be unioned into a single polygon.
     */
    buffer(geometry: esri.geometry.Geometry | esri.geometry.Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): esri.geometry.Polygon | esri.geometry.Polygon[];
    /**
     * Calculates the clipped geometry from a target geometry by an envelope.
     * @param geometry The geometry to be clipped.
     * @param envelope The envelope used to clip.
     */
    clip(geometry: esri.geometry.Geometry, envelope: Extent): esri.geometry.Geometry;
    /**
     * Indicates if one geometry contains another geometry.
     * @param geometry1 The geometry that is tested for the contains relationship to the other geometry.
     * @param geometry2 The geometry that is tested for within relationship to the other geometry.
     */
    contains(geometry1: esri.geometry.Geometry, geometry2: Geometry): boolean;
    /**
     * Calculates the convex hull of the input geometry.
     * @param geometry The input geometry.
     * @param merge Whether to merge output geometries.
     */
    convexHull(geometry: esri.geometry.Geometry | esri.geometry.Geometry[], merge?: boolean): esri.geometry.Geometry | esri.geometry.Geometry[];
    /**
     * Indicates if one geometry crosses another geometry.
     * @param geometry1 The geometry to cross.
     * @param geometry2 The geometry being crossed.
     */
    crosses(geometry1: esri.geometry.Geometry, geometry2: Geometry): boolean;
    /**
     * Split the input esri.geometry.Polyline or esri.geometry.Polygon where it crosses a cutting Polyline.
     * @param geometry The geometry to be cut.
     * @param cutter The polyline to cut the geometry.
     */
    cut(geometry: esri.geometry.Geometry, cutter: Polyline): esri.geometry.Geometry[];
    /**
     * Densify geometries by plotting points between existing vertices.
     * @param geometry The geometry to be densified.
     * @param maxSegmentLength The maximum segment length allowed.
     * @param maxSegmentLengthUnit Measurement unit for maxSegmentLength.
     */
    densify(geometry: esri.geometry.Geometry, maxSegmentLength: number, maxSegmentLengthUnit: string | number): esri.geometry.Geometry;
    /**
     * Creates the difference of two geometries.
     * @param inputesri.geometry.Geometry The input geometry to subtract from.
     * @param subtractor The geometry being subtracted from inputGeometry.
     */
    difference(inputGeometry: esri.geometry.Geometry | esri.geometry.Geometry[], subtractor: Geometry): esri.geometry.Geometry | esri.geometry.Geometry[];
    /**
     * Indicates if one geometry is disjoint (doesn't intersect in any way) with another geometry.
     * @param geometry1 The base geometry that is tested for the "disjoint" relationship to the other geometry.
     * @param geometry2 The comparison geometry that is tested for the disjoint relationship to the other geometry.
     */
    disjoint(geometry1: esri.geometry.Geometry, geometry2: Geometry): boolean;
    /**
     * Calculates the shortest planar distance between two geometries.
     * @param geometry1 First input geometry.
     * @param geometry2 Second input geometry.
     * @param distanceUnit Measurement unit of the return value.
     */
    distance(geometry1: esri.geometry.Geometry, geometry2: esri.geometry.Geometry, distanceUnit: string | number): number;
    /**
     * Indicates if two geometries are equal.
     * @param geometry1 First input geometry.
     * @param geometry2 Second input geometry.
     */
    equals(geometry1: esri.geometry.Geometry, geometry2: Geometry): boolean;
    /**
     * Returns an object containing additional information about the input spatial reference.
     * @param spatialReference The spatial Reference.
     */
    extendedSpatialReferenceInfo(spatialReference: SpatialReference): any;
    /**
     * Flips a geometry on the horizontal axis.
     * @param geometry The input geometry.
     * @param flipOrigin esri.geometry.Point to flip the geometry around.
     */
    flipHorizontal(geometry: esri.geometry.Geometry, flipOrigin?: Point): esri.geometry.Geometry;
    /**
     * Flips a geometry on the vertical axis.
     * @param geometry The input geometry.
     * @param flipOrigin esri.geometry.Point to flip the geometry around.
     */
    flipVertical(geometry: esri.geometry.Geometry, flipOrigin?: Point): esri.geometry.Geometry;
    /**
     * Performs the generalize operation on the geometries in the cursor.
     * @param geometry The geometry to be generalized.
     * @param maxDeviation The maximum allowed deviation from the generalized geometry to the original geometry.
     * @param removeDegenerateParts When true, the degenerate parts of the geometry will be removed from the output (may be undesired for drawing).
     * @param maxDeviationUnit Measurement unit for maxDeviation.
     */
    generalize(geometry: esri.geometry.Geometry, maxDeviation: number, removeDegenerateParts?: boolean, maxDeviationUnit?: string | number): esri.geometry.Geometry;
    /**
     * Calculates the area of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    geodesicArea(geometry: esri.geometry.Geometry, unit: string | number): number;
    /**
     * Creates geodesic buffer polygons at a specified distance around the input geometries.
     * @param geometry The buffer input geometry.
     * @param distance The specified distance(s) for buffering.
     * @param unit Measurement unit for the distance(s).
     * @param unionResults Whether the output geometries should be unioned into a single polygon.
     */
    geodesicBuffer(geometry: esri.geometry.Geometry | esri.geometry.Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): esri.geometry.Polygon | esri.geometry.Polygon[];
    /**
     * Returns a geodesically densified version of the input geometry.
     * @param geometry A polyline or polygon geometry to densify.
     * @param maxSegmentLength The maximum segment length allowed.
     * @param maxSegmentLengthUnit Measurement unit for maxSegmentLength.
     */
    geodesicDensify(geometry: esri.geometry.Polyline | esri.geometry.Polygon, maxSegmentLength: number, maxSegmentLengthUnit?: number): esri.geometry.Geometry;
    /**
     * Calculates the length of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    geodesicLength(geometry: esri.geometry.Geometry, unit: string | number): number;
    /**
     * Creates a new geometry through intersection between two geometries.
     * @param geometry The input geometry.
     * @param intersector The geometry being intersected.
     */
    intersect(geometry: esri.geometry.Geometry | esri.geometry.Geometry[], intersector: Geometry): esri.geometry.Geometry | esri.geometry.Geometry[];
    /**
     * Indicates if one geometry intersects another geometry.
     * @param geometry1 The geometry that is tested for the intersects relationship to the other geometry.
     * @param geometry2 The geometry being intersected.
     */
    intersects(geometry1: esri.geometry.Geometry, geometry2: Geometry): boolean;
    /**
     * Indicates if the given geometry is topologically simple.
     * @param geometry esri.geometry.Geometry
     */
    isSimple(geometry: Geometry): boolean;
    /**
     * Finds the coordinate of the geometry which is closest to the specified point.
     * @param geometry The geometry to consider.
     * @param inputesri.geometry.Point The point used to search the nearest coordinate in the geometry.
     */
    nearestCoordinate(geometry: esri.geometry.Geometry, inputPoint: Point): any;
    /**
     * Finds vertex on the geometry nearest to the specified point.
     * @param geometry The geometry to consider.
     * @param inputesri.geometry.Point The point used to search the nearest vertex in the geometry.
     */
    nearestVertex(geometry: esri.geometry.Geometry, inputPoint: Point): any;
    /**
     * Finds all vertices in the given distance from the specified point, sorted from the closest to the furthest and returns them as an array of objects.
     * @param geometry The geometry to consider.
     * @param inputesri.geometry.Point The point from which to measure.
     * @param searchRadius The search radius.
     * @param maxVertexCountToReturn The maximum number number of vertices to return.
     */
    nearestVertices(geometry: esri.geometry.Geometry, inputPoint: esri.geometry.Point, searchRadius: number, maxVertexCountToReturn: number): any[];
    /**
     * Creates offset version of the input geometry.
     * @param geometry The geometries to offset.
     * @param offsetDistance The offset distance for the Geometries.
     * @param offsetUnit Measurement unit for the offset.
     * @param joinType The join type.
     * @param bevelRatio Applicable to MITER, bevelRatio is multiplied by the offset distance and the result determines how far a mitered offset intersection can be located before it is beveled.
     * @param flattenError Applicable to ROUND, flattenError determines the maximum distance of the resulting segments compared to the true circular arc.
     */
    offset(geometry: esri.geometry.Geometry | esri.geometry.Geometry[], offsetDistance: number, offsetUnit: string | number, joinType: string, bevelRatio?: number, flattenError?: number): esri.geometry.Geometry | esri.geometry.Geometry[];
    /**
     * Indicates if one geometry  overlaps another geometry.
     * @param geometry1 The base geometry that is tested for overlaps relationship to the other geometry.
     * @param geometry2 The comparison geometry that is tested for the overlaps relationship to the other geometry.
     */
    overlaps(geometry1: esri.geometry.Geometry, geometry2: Geometry): boolean;
    /**
     * Calculates the area of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    planarArea(geometry: esri.geometry.Geometry, unit: string | number): number;
    /**
     * Calculates the length of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    planarLength(geometry: esri.geometry.Geometry, unit: string | number): number;
    /**
     * Indicates if the given DE-9IM relation holds for the two geometries.
     * @param geometry1 The first geometry for the relation.
     * @param geometry2 The second geometry for the relation.
     * @param relation The Dimensionally Extended 9 Intersection Model (DE-9IM) matrix relation (encoded as a string) to test against the relationship of the two geometries.
     */
    relate(geometry1: esri.geometry.Geometry, geometry2: esri.geometry.Geometry, relation: string): boolean;
    /**
     * Rotates a geometry by a specified angle.
     * @param geometry The input geometry.
     * @param angle The rotation angle
     * @param rotationOrigin esri.geometry.Point to rotate the geometry around.
     */
    rotate(geometry: esri.geometry.Geometry, angle: number, rotationOrigin?: Point): esri.geometry.Geometry;
    /**
     * Performs the simplify operation on the geometry which alters the given geometries to make their definitions topologically legal with respect to their geometry type.
     * @param geometry The geometry to be simplified.
     */
    simplify(geometry: Geometry): esri.geometry.Geometry;
    /**
     * Creates the symmetric difference of two geometries.
     * @param leftesri.geometry.Geometry One of the esri.geometry.Geometry instances in the XOR operation.
     * @param rightesri.geometry.Geometry One of the esri.geometry.Geometry instances in the XOR operation.
     */
    symmetricDifference(leftGeometry: esri.geometry.Geometry | esri.geometry.Geometry[], rightGeometry: Geometry): esri.geometry.Geometry | esri.geometry.Geometry[];
    /**
     * Indicates if one geometry touches another geometry.
     * @param geometry1 The geometry which may be touching another geometry.
     * @param geometry2 The geometry to be touched.
     */
    touches(geometry1: esri.geometry.Geometry, geometry2: Geometry): boolean;
    /**
     * All inputs must be of the same type of geometries and share one spatial reference.
     * @param geometries The geometries to union.
     */
    union(geometries: esri.geometry.Geometry[]): esri.geometry.Geometry;
    /**
     * Indicates if one geometry is within another geometry.
     * @param geometry1 The base geometry that is tested for within relationship to the other geometry.
     * @param geometry2 The comparison geometry that is tested for the contains relationship to the other geometry.
     */
    within(geometry1: esri.geometry.Geometry, geometry2: Geometry): boolean;
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
    buffer(geometry: esri.geometry.Geometry | esri.geometry.Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): any;
    /**
     * Calculates the clipped geometry from a target geometry by an envelope.
     * @param geometry The geometry to be clipped.
     * @param envelope The envelope used to clip.
     */
    clip(geometry: esri.geometry.Geometry, envelope: Extent): any;
    /**
     * Indicates if one geometry contains another geometry.
     * @param geometry1 The geometry that is tested for the contains relationship to the other geometry.
     * @param geometry2 The geometry that is tested for within relationship to the other geometry.
     */
    contains(geometry1: esri.geometry.Geometry, geometry2: Geometry): any;
    /**
     * Calculates the convex hull of the input geometry.
     * @param geometry The input geometry.
     * @param merge Whether to merge output geometries.
     */
    convexHull(geometry: esri.geometry.Geometry | esri.geometry.Geometry[], merge?: boolean): any;
    /**
     * Indicates if one geometry crosses another geometry.
     * @param geometry1 The geometry to cross.
     * @param geometry2 The geometry being crossed.
     */
    crosses(geometry1: esri.geometry.Geometry, geometry2: Geometry): any;
    /**
     * Split the input polyline or polygon where it crosses a cutting polyline.
     * @param geometry The geometry to be cut.
     * @param cutter The polyline to cut the geometry.
     */
    cut(geometry: esri.geometry.Geometry, cutter: Polyline): any;
    /**
     * Densify geometries by plotting points between existing vertices.
     * @param geometry The geometry to be densified.
     * @param maxSegmentLength The maximum segment length allowed.
     * @param maxSegmentLengthUnit Measurement unit for maxSegmentLength.
     */
    densify(geometry: esri.geometry.Geometry, maxSegmentLength: number, maxSegmentLengthUnit: string | number): any;
    /**
     * Creates the difference of two geometries.
     * @param inputesri.geometry.Geometry The input geometry to subtract from.
     * @param subtractor The geometry being subtracted.
     */
    difference(inputGeometry: esri.geometry.Geometry | esri.geometry.Geometry[], subtractor: Geometry): any;
    /**
     * Indicates if one geometry is disjoint (doesn't intersect in any way) with another geometry.
     * @param geometry1 The base geometry that is tested for the "disjoint" relationship to the other geometry.
     * @param geometry2 The comparison geometry that is tested for the disjoint relationship to the other geometry.
     */
    disjoint(geometry1: esri.geometry.Geometry, geometry2: Geometry): any;
    /**
     * Calculates the shortest planar distance between two geometries.
     * @param geometry1 First input geometry.
     * @param geometry2 Second input geometry.
     * @param distanceUnit Measurement unit of the return value.
     */
    distance(geometry1: esri.geometry.Geometry, geometry2: esri.geometry.Geometry, distanceUnit: string | number): any;
    /**
     * Indicates if two geometries are equal.
     * @param geometry1 First input geometry.
     * @param geometry2 Second input geometry.
     */
    equals(geometry1: esri.geometry.Geometry, geometry2: Geometry): any;
    /**
     * Returns an object containing additional information about the input spatial reference.
     * @param spatialReference The input spatial reference.
     */
    extendedSpatialReferenceInfo(spatialReference: SpatialReference): any;
    /**
     * Flips a geometry on the horizontal axis.
     * @param geometry The input geometry.
     * @param flipOrigin esri.geometry.Point to flip the geometry around.
     */
    flipHorizontal(geometry: esri.geometry.Geometry, flipOrigin?: Point): any;
    /**
     * Flips a geometry on the vertical axis.
     * @param geometry The input geometry.
     * @param flipOrigin esri.geometry.Point to flip the geometry around.
     */
    flipVertical(geometry: esri.geometry.Geometry, flipOrigin?: Point): any;
    /**
     * Performs the generalize operation on the geometries in the cursor.
     * @param geometry The geometry to be generalized.
     * @param maxDeviation The maximum allowed deviation from the generalized geometry to the original geometry.
     * @param removeDegenerateParts When true, the degenerate parts of the geometry will be removed from the output (may be undesired for drawing).
     * @param maxDeviationUnit Measurement unit for maxDeviation.
     */
    generalize(geometry: esri.geometry.Geometry, maxDeviation: number, removeDegenerateParts?: boolean, maxDeviationUnit?: string | number): any;
    /**
     * Calculates the area of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    geodesicArea(geometry: esri.geometry.Geometry, unit: string | number): any;
    /**
     * Creates geodesic buffer polygons at a specified distance around the input geometries.
     * @param geometry The buffer input geometry.
     * @param distance The specified distance(s) for buffering.
     * @param unit Measurement unit for the distance(s).
     * @param unionResults Whether the output geometries should be unioned into a single polygon.
     */
    geodesicBuffer(geometry: esri.geometry.Geometry | esri.geometry.Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): any;
    /**
     * Resolves to a geodesically densified version of the input geometry.
     * @param geometry A polyline or polygon geometry to densify.
     * @param maxSegmentLength The maximum segment length allowed.
     * @param maxSegmentLengthUnit Measurement unit for maxSegmentLength.
     */
    geodesicDensify(geometry: esri.geometry.Polyline | esri.geometry.Polygon, maxSegmentLength: number, maxSegmentLengthUnit?: number): any;
    /**
     * Calculates the length of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    geodesicLength(geometry: esri.geometry.Geometry, unit: string | number): any;
    /**
     * Creates a new geometry through intersection between two geometries.
     * @param geometry The input geometry.
     * @param intersector The geometry being intersected.
     */
    intersect(geometry: esri.geometry.Geometry | esri.geometry.Geometry[], intersector: Geometry): any;
    /**
     * Indicates if one geometry intersects another geometry.
     * @param geometry1 The geometry that is tested for the intersects relationship to the other geometry.
     * @param geometry2 The geometry being intersected.
     */
    intersects(geometry1: esri.geometry.Geometry, geometry2: Geometry): any;
    /**
     * Indicates if the given geometry is topologically simple.
     * @param geometry esri.geometry.Geometry
     */
    isSimple(geometry: Geometry): any;
    /**
     * Finds the coordinate of the geometry which is closest to the specified point.
     * @param geometry The geometry to consider.
     * @param inputesri.geometry.Point The point used to search the nearest coordinate in the geometry.
     */
    nearestCoordinate(geometry: esri.geometry.Geometry, inputPoint: Point): any;
    /**
     * Finds vertex on the geometry nearest to the specified point.
     * @param geometry The geometry to consider.
     * @param inputesri.geometry.Point The point used to search the nearest vertex in the geometry.
     */
    nearestVertex(geometry: esri.geometry.Geometry, inputPoint: Point): any;
    /**
     * Finds all vertices in the given distance from the specified point, sorted from the closest to the furthest and returns them as an array of objects once resolved.
     * @param geometry The geometry to consider.
     * @param inputesri.geometry.Point The point from which to measure.
     * @param searchRadius The search radius.
     * @param maxVertexCountToReturn The maximum number number of vertices to return.
     */
    nearestVertices(geometry: esri.geometry.Geometry, inputPoint: esri.geometry.Point, searchRadius: number, maxVertexCountToReturn: number): any;
    /**
     * Creates offset version of the input geometry.
     * @param geometry The geometries to offset.
     * @param offsetDistance The offset distance for the Geometries.
     * @param offsetUnit Measurement unit for the offset.
     * @param joinType The join type.
     * @param bevelRatio Applicable to MITER, bevelRatio is multiplied by the offset distance and the result determines how far a mitered offset intersection can be located before it is beveled.
     * @param flattenError Applicable to ROUND, flattenError determines the maximum distance of the resulting segments compared to the true circular arc.
     */
    offset(geometry: esri.geometry.Geometry | esri.geometry.Geometry[], offsetDistance: number, offsetUnit: string | number, joinType: string, bevelRatio?: number, flattenError?: number): any;
    /**
     * Indicates if one geometry  overlaps another geometry.
     * @param geometry1 The base geometry that is tested for overlaps relationship to the other geometry.
     * @param geometry2 The comparison geometry that is tested for the overlaps relationship to the other geometry.
     */
    overlaps(geometry1: esri.geometry.Geometry, geometry2: Geometry): any;
    /**
     * Calculates the area of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    planarArea(geometry: esri.geometry.Geometry, unit: string | number): any;
    /**
     * Calculates the length of the input geometry.
     * @param geometry The input geometry.
     * @param unit Measurement unit of the return value.
     */
    planarLength(geometry: esri.geometry.Geometry, unit: string | number): any;
    /**
     * Indicates if the given DE-9IM relation holds for the two geometries.
     * @param geometry1 The first geometry for the relation.
     * @param geometry2 The second geometry for the relation.
     * @param relation The Dimensionally Extended 9 Intersection Model (DE-9IM) matrix relation (encoded as a string) to test against the relationship of the two geometries.
     */
    relate(geometry1: esri.geometry.Geometry, geometry2: esri.geometry.Geometry, relation: string): any;
    /**
     * Rotates a geometry by a specified angle.
     * @param geometry The input geometry.
     * @param angle The rotation angle
     * @param rotationOrigin esri.geometry.Point to rotate the geometry around.
     */
    rotate(geometry: esri.geometry.Geometry, angle: number, rotationOrigin?: Point): any;
    /**
     * Performs the simplify operation on the geometry which alters the given geometries to make their definitions topologically legal with respect to their geometry type.
     * @param geometry The geometry to be simplified.
     */
    simplify(geometry: Geometry): any;
    /**
     * Creates the symmetric difference of two geometries.
     * @param leftesri.geometry.Geometry One of the esri.geometry.Geometry instances in the XOR operation.
     * @param rightesri.geometry.Geometry One of the esri.geometry.Geometry instances in the XOR operation.
     */
    symmetricDifference(leftGeometry: esri.geometry.Geometry | esri.geometry.Geometry[], rightGeometry: Geometry): any;
    /**
     * Indicates if one geometry touches another geometry.
     * @param geometry1 The geometry which may be touching another geometry.
     * @param geometry2 The geometry to be touched.
     */
    touches(geometry1: esri.geometry.Geometry, geometry2: Geometry): any;
    /**
     * All inputs must be of the same type of geometries and share one spatial reference.
     * @param geometries The geometries to union.
     */
    union(geometries: esri.geometry.Geometry[]): any;
    /**
     * Indicates if one geometry is within another geometry.
     * @param geometry1 The base geometry that is tested for within relationship to the other geometry.
     * @param geometry2 The comparison geometry that is tested for the contains relationship to the other geometry.
     */
    within(geometry1: esri.geometry.Geometry, geometry2: Geometry): any;
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
    normalizeCentralMeridian(geometries: esri.geometry.Geometry[], geometryService?: esri.tasks.GeometryService, callback?: Function, errback?: Function): any;
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
    /**
     * Returns the value of one map unit for the given spatial reference (in meters).
     * @param sr The spatial reference represented as a esri.SpatialReference class, Number, or String.
     */
    getUnitValueForSR(sr: esri.SpatialReference | number | string): number;
  };

  /** Convert map coordinates to screen coordinates and vice versa. */
  export var screenUtils: {
    /**
     * Converts the geometry argument to map coordinates based on the extent, width, and height of the Map.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current height of the map in screen units.
     * @param screenesri.geometry.Geometry The geometry to convert from screen to map units.
     */
    toMapGeometry(extent: esri.geometry.Extent, width: number, height: number, screenGeometry: Geometry): esri.geometry.Geometry;
    /**
     * Converts and returns the argument screen point in map coordinates.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current height of the map in screen units.
     * @param screenesri.geometry.Point The screenesri.geometry.Point to convert from screen to map units.
     */
    toMapPoint(extent: esri.geometry.Extent, width: number, height: number, screenPoint: ScreenPoint): esri.geometry.Point;
    /**
     * Converts the geometry argument to screen coordinates based on the extent, width, and height of the Map.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current height of the map in screen units.
     * @param mapesri.geometry.Geometry The geometry to convert from map to screen units.
     */
    toScreenGeometry(extent: esri.geometry.Extent, width: number, height: number, mapGeometry: Geometry): esri.geometry.Geometry;
    /**
     * Converts and returns the argument map point in screen coordinates.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current height of the map in screen units.
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
    canProject(source: esri.SpatialReference | any, target: esri.SpatialReference | any): boolean;
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
    project(geometry: esri.geometry.Geometry, target: esri.SpatialReference | any): any;
    /**
     * Converts geometry from Web Mercator units to geographic units.
     * @param geometry The geometry to convert.
     * @param isLinear Indicates whether to work with linear values, i.e., do not normalize.
     */
    webMercatorToGeographic(geometry: esri.geometry.Geometry, isLinear?: boolean): esri.geometry.Geometry;
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
    /** Fires when the visibleLayers property is changed. */
    on(type: "visible-layers-change", listener: (event: { visibleLayers: number[]; target: esri.layers.ArcGISDynamicMapServiceesri.layers.Layer }) => void): esri.Handle;
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

  /** The ArcGISImageServiceVectoresri.layers.Layer displays pixel values as vectors. */
  class ArcGISImageServiceVectoresri.layers.Layer extends esri.layers.Graphicsesri.layers.Layer {
    /**
     * Creates a new ArcGISImageServiceesri.layers.Layer object.
     * @param url URL to the ArcGIS Server REST resource that represents an image service vector layer service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.ArcGISImageServiceVectorLayerOptions);
    /** Returns the flow direction of the data as determined by the service via key properties. */
    getFlowRepresentation(): string;
    /**
     * Sets the renderer for the layer.
     * @param renderer The renderer object to apply to the layer.
     */
    setRenderer(renderer: Renderer): void;
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
  export = ArcGISImageServiceVectoresri.layers.Layer;

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
    getName(code: number | string): string;
  }
  export = CodedValueesri.layers.Domain;

  /** (Currently in beta) Display features using data that contains location information such as X and Y coordinates, Street address, place names etc using a DataAdapter object to retrieve the features and a LocationProvider to generate their geometries. */
  class DataAdapteresri.layers.Featureesri.layers.Layer extends esri.layers.Featureesri.layers.Layer {
    /** The DataAdapter object points to data sources that contain non-spatial tables. */
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
    /** The geodatabase version. */
    gdbVersion: string;
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
    /** The maximum allowable offset, only applicable for layers that are not editable. */
    maxAllowableOffset: number;
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
     * Sets the definition expression for the FeatureLayer.
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
     * @param labelingInfo This is the label definition for this layer, specified as an array of label classes.
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
     * Sets the selection symbol for the feature layer.
     * @param symbol esri.symbols.Symbol for the current selection.
     */
    setSelectionSymbol(symbol: Symbol): esri.layers.Featureesri.layers.Layer;
    /**
     * Sets whether to display labels or not.
     * @param showLabels Set to true to show labels.
     */
    setShowLabels(showLabels: boolean): void;
    /**
     * Sets the time definition for the feature layer.
     * @param definition The new time extent used to filter the layer.
     */
    setTimeDefinition(definition: TimeExtent): esri.layers.Featureesri.layers.Layer;
    /**
     * Time offset allows you to display the features at a different time so they can be overlaid on top of previous or future time periods.
     * @param offsetValue The length of time to offset from "this" time.
     * @param offsetUnits Units in which the offset is specified.
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
    /** The publicly accessible URL to a GeoRSS file. */
    url: string;
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
    dataAttributes: string | string[];
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

  /** Use label classes to restrict labels to certain features or to specify different label fields, symbols, scale ranges, label priorities, and sets of label placement options for different groups of labels. */
  class esri.layers.LabelClass {
    /** An array of objects representing field information to label. */
    fieldInfos: any[];
    /** Adjusts the formatting of labels. */
    labelExpression: string;
    /** Use this when working with esri.layers.Featureesri.layers.Layer layer types. */
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
    symbol: Textesri.symbols.Symbol;
    /** When true, show the fields in the labelExpression that have domains using the domain's name. */
    useCodedValues: boolean;
    /** A where clause determining which features are labeled. */
    where: string;
    /**
     * Creates a label class, used for formatting parameters, symbols, date, etc.
     * @param json Various options to configure this LabelClass.
     */
    constructor(json?: Object);
  }
  export = esri.layers.LabelClass;

  /** NOTE: Deprecated as of version 3.14, read below for additional information on the suggested method of labeling. */
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
     */
    addFeatureLayer(featureLayer: esri.layers.Featureesri.layers.Layer, renderer?: Simpleesri.renderers.Renderer | UniqueValueesri.renderers.Renderer | ClassBreaksesri.renderers.Renderer, textExpression?: any): void;
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
    /** Takes the sum of all overlapping pixels. */
    static OPERATION_SUM: any;
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
     * Creates a new PixelBlock object.
     * @param options Constructor parameters.
     */
    constructor(options: esri.PixelBlockOptions);
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
    /** Defines the output image's pixel type. */
    outputPixelType: string;
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

  /** The Rasteresri.layers.Layer is used to display image services. */
  class Rasteresri.layers.Layer extends esri.layers.Layer {
    /** A function that takes a pixelData object as input and processes it. */
    pixelFilter: Function;
    /**
     * Creates a new Rasteresri.layers.Layer object.
     * @param url URL to the ArcGIS Server REST resource that represents a raster layer service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.RasterLayerOptions);
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
  export = Rasteresri.layers.Layer;

  /** The stream layer extends the feature layer to add the ability to connect to a stream of data using HTML5 WebSockets. */
  class Streamesri.layers.Layer extends esri.layers.Featureesri.layers.Layer {
    /** The maximum number of observations being shown for each unique track. */
    maximumTrackPoints: number;
    /** Purge interval of the layer in minutes. */
    purgeInterval: number;
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
    /** Gets the latest observation for each track in the layer. */
    getLatestObservations(): esri.Graphic;
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
    /**
     * Changes the layer's purge interval to the given value (in minutes).
     * @param interval The purge interval in minutes.
     */
    setPurgeInterval(interval: number): esri.layers.Layer;
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
    /** Fires when the purgeInterval property is changed. */
    on(type: "purge-interval-change", listener: (event: { target: Streamesri.layers.Layer }) => void): esri.Handle;
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
  /** esri.layers.TimeReference contains read-only information about how the time was captured when the data was created. */
  class esri.layers.TimeReference {
    /** A read-only property that indicates whether the time reference takes into account daylight savings time. */
    respectsDaylightSaving: boolean;
    /** The time zone in which the data was captured. */
    timeZone: string;
  }
  export = esri.layers.TimeReference;

  /** A VectorTileesri.layers.Layer renders cached tiles of data. */
  class VectorTileesri.layers.Layer extends esri.layers.Layer {
    /** The full extent of the layer. */
    fullExtent: esri.geometry.Extent;
    /** The initial extent of the layer. */
    initialExtent: esri.geometry.Extent;
    /** The spatial reference of the layer. */
    spatialReference: esri.SpatialReference;
    /** Contains information about the tiling scheme for the layer. */
    tileInfo: esri.layers.TileInfo;
    /** The URL to the vector tile service or style JSON that will be used to draw the layer. */
    url: string;
    /**
     * Create a new VectorTileesri.layers.Layer object.
     * @param url The URL to the vector tile service or style JSON that will be used to draw the layer.
     * @param options Optional parameters.
     */
    constructor(url: string | any, options?: esri.VectorTileLayerOptions);
    /** Returns an object that contains the current style information for the layer. */
    getStyle(): any;
    /**
     * Changes the style properties used to render the layers.
     * @param styleUrl A url to a JSON file containing the stylesheet information to render the layer.
     */
    setStyle(styleUrl: string | any): void;
    /** Fires when the style is changed on the layer. */
    on(type: "style-change", listener: (event: { style: any; target: VectorTileesri.layers.Layer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = VectorTileesri.layers.Layer;

  /** (Currently in beta), a helper class to discover available coverages in an OGC Web Coverage Service. */
  class esri.layers.WCSConnection {
    /** Resamples pixel by bilinear interpolation. */
    static INTERPOLATION_BILINEAR: any;
    /** Resamples pixel by cubic convolution. */
    static INTERPOLATION_CUBICCONVOLUTION: any;
    /** Resamples pixel by nearest neighbor. */
    static INTERPOLATION_NEARESTNEIGHBOR: any;
    /** An array of coverages offered by the WCS server. */
    coverages: esri.layers.WCSCoverageDescription[];
    /** Multiple dimensional definitions are usually used to filter data. */
    multidimensionalDefinition: esri.layers.DimensionalDefinition[];
    /** The name of the WCS server. */
    name: string;
    /** Key-value pairs for URLs of different WCS operations: GetCapabilitiesDescribeCoverage */
    onlineResources: any;
    /** An array of string values indicating WCS 2.0.1 profiles. */
    profiles: string[];
    /** An array of supported formats by the server. */
    supportedFormats: string[];
    /** The interpolation method affects how the raster dataset is transformed when it undergoes warping or when it changes coordinate space. */
    supportedInterpolations: number[];
    /** An array of supported WCS versions by the server. */
    supportedVersions: string[];
    /** URL to a WCS Server endpoint. */
    url: string;
    /** The version of WCSesri.layers.Layer, can be: 1.0.01.1.01.1.11.1.22.0.1 */
    version: string;
    /**
     * Creates a new WCSConnection.
     * @param url URL to a WCS Server endpoint.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.WCSConnectionOptions);
    /** Triggered when successfully retrieved list of coverages. */
    on(type: "onConnected", listener: (event: { target: esri.layers.WCSConnection }) => void): esri.Handle;
    /** Triggered when an error occurred. */
    on(type: "onConnectionFailed", listener: (event: { error: Error; target: esri.layers.WCSConnection }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.layers.WCSConnection;

  /** (Currently in beta), the esri.layers.WCSCoverageDescription models the coverage properties offered by the WCS Server. */
  class esri.layers.WCSCoverageDescription {
    /** Resamples pixel by bilinear interpolation. */
    static INTERPOLATION_BILINEAR: any;
    /** Resamples pixel by cubic convolution. */
    static INTERPOLATION_CUBICCONVOLUTION: any;
    /** Resamples pixel by nearest neighbor. */
    static INTERPOLATION_NEARESTNEIGHBOR: any;
    /** An array of band names. */
    bandInfo: string[];
    /** Number of columns at the source resolution. */
    columns: number;
    /** The coverage description text. */
    description: string;
    /** Coverage extent in the native spatial reference. */
    extent: esri.geometry.Extent;
    /** The coverage id. */
    id: string;
    /** Coverage extent in WGS84. */
    lonLatEnvelope: esri.geometry.Extent;
    /** A parsed multidimensional object that describes variables and dimensions. */
    multiDimensionalInfo: any;
    /** A parsed coverage description object in a structure similar to WCS Coverage Description schema. */
    nativeCoverageDescription: any;
    /** Coverage's source resolution. */
    resolution: esri.geometry.Point;
    /** Number of rows at the source resolution. */
    rows: number;
    /** Generalized from the following properties:SupportedFormats for WCS 1.0.0 and 1.1.xserviceParameters.supportedFormats for WCS 2.0.1. */
    supportedFormats: string[];
    /** The interpolation method affects how the raster dataset is transformed when it undergoes warping or when it changes coordinate space. */
    supportedInterpolations: number[];
    /** Temporal information for the layer, such as time extent. */
    timeInfo: esri.layers.TimeInfo;
    /** The current version of the coverage. */
    version: string;
    /**
     * Creates a new WCSCoverageDescription.
     * @param coverageDocument The coverage description XML.
     * @param version The version of the coverage description document.
     */
    constructor(coverageDocument: string, version: string);
  }
  export = esri.layers.WCSCoverageDescription;

  /** (Currently in beta) The WCSesri.layers.Layer works with OGC Web Coverage Services. */
  class WCSesri.layers.Layer {
    /** Resamples pixel by bilinear interpolation. */
    static INTERPOLATION_BILINEAR: any;
    /** Resamples pixel by cubic convolution. */
    static INTERPOLATION_CUBICCONVOLUTION: any;
    /** Resamples pixel by nearest neighbor. */
    static INTERPOLATION_NEARESTNEIGHBOR: any;
    /** Zero-based array of current band selections. */
    bandIds: number[];
    /** A reference to a esri.layers.WCSCoverageDescription object. */
    coverageDescription: esri.layers.WCSCoverageDescription;
    /** The coverage identifier, defaults to the first coverage. */
    coverageId: string;
    /** The extent of the full coverage. */
    extent: esri.geometry.Extent;
    /** Raster format of the layer. */
    format: string;
    /** Current interpolation method. */
    interpolation: number;
    /** When the layer is loaded, the value becomes "true", and layer properties can be accessed. */
    loaded: boolean;
    /** Multiple dimensional definitions are usually used to filter data. */
    multidimensionalDefinition: esri.layers.DimensionalDefinition[];
    /** Opacity or transparency of layer. */
    opacity: number;
    /** A function that takes a pixelData object as input and processes it. */
    pixelFilter: Function;
    /** The pixel type of the image service. */
    pixelType: string;
    /** The projected extent in the map's spatial reference. */
    projectedFullExtent: esri.geometry.Extent;
    /** When true, the layer is suspended. */
    suspended: boolean;
    /** Temporal information for the layer, such as time extent. */
    timeInfo: esri.layers.TimeInfo;
    /** URL to a WCS Server endpoint. */
    url: string;
    /** The version of WCSesri.layers.Layer, can be: 1.0.01.1.01.1.11.1.22.0.1 */
    version: string;
    /** The visibility of the layer. */
    visible: boolean;
    /** A WCS Connection object. */
    wcsConnection: esri.layers.WCSConnection;
    /**
     * Creates a new WCSLayer.
     * @param url URL to a WCS Server endpoint.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.WCSLayerOptions);
    /** Returns the context of the Canvas. */
    getContext(): any;
    /**
     * Returns an array of graphics as a Promise.
     * @param mapesri.geometry.Point The map point location in which to identify.
     */
    identify(mapPoint: Point): any;
    /** Resumes layer drawing. */
    resume(): void;
    /**
     * Sets the opacity of the layer.
     * @param opacity Value from 0 to 1, where 0 is 100% transparent and 1 has no transparency.
     */
    setOpacity(opacity: number): void;
    /**
     * Sets a pixelFilter on the layer.
     * @param pixelFilter The function defining the PixelFilter to set on the layer.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setPixelFilter(pixelFilter: Function, doNotRefresh?: boolean): void;
    /**
     * Determines if the layer will update its content based on the map's current time extent.
     * @param use Use true to update the layer's content based on the map's current time extent.
     */
    setUseMapTime(use: boolean): void;
    /**
     * Sets the visibility of the layer.
     * @param isVisible Indicate whether to set layer visibility.
     */
    setVisibility(isVisible: boolean): void;
    /** Suspends layer drawing. */
    suspend(): void;
    /** Fires when there is a problem retrieving a layer. */
    on(type: "error", listener: (event: { error: Error; target: WCSesri.layers.Layer }) => void): esri.Handle;
    /** Fires after layer properties for the layer are successfully populated. */
    on(type: "load", listener: (event: { layer: esri.layers.Layer; target: WCSesri.layers.Layer }) => void): esri.Handle;
    /** Fires when the layer opacity has been changed, and returns an object with the opacity value. */
    on(type: "opacity-change", listener: (event: { opacity: number; target: WCSesri.layers.Layer }) => void): esri.Handle;
    /** This event is fired when the layer's refreshInterval is modified. */
    on(type: "refresh-interval-change", listener: (event: { target: WCSesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer resumes drawing. */
    on(type: "resume", listener: (event: { target: WCSesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: WCSesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: WCSesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer suspends drawing */
    on(type: "suspend", listener: (event: { target: WCSesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer has finished updating its content. */
    on(type: "update-end", listener: (event: { error: Error; target: WCSesri.layers.Layer }) => void): esri.Handle;
    /** Fires when a layer begins to update its content. */
    on(type: "update-start", listener: (event: { target: WCSesri.layers.Layer }) => void): esri.Handle;
    /** Fires when the layer visibility has been changed, and returns an object with a Boolean visible property containing the new visibility value of the layer. */
    on(type: "visibility-change", listener: (event: { visible: boolean; target: WCSesri.layers.Layer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = WCSesri.layers.Layer;

  /** (Currently in beta)  A layer for OGC Web Feature Services (WFS). */
  class WFSesri.layers.Layer extends esri.layers.Graphicsesri.layers.Layer {
    /** Use this to append custom parameters to WFS requests. */
    customParameters: any;
    /** An array of fields in the layer. */
    fields: esri.layers.Field[];
    /** The full extent of the layer. */
    fullExtent: esri.geometry.Extent;
    /** The geometry type of the features in the layer. */
    geometryType: string;
    /** An array of features in the layer. */
    graphics: esri.Graphic[];
    /** ID assigned to the layer. */
    id: string;
    /** The esri.InfoTemplate for the layer. */
    infoTemplate: esri.InfoTemplate;
    /** The renderer to apply to the layer. */
    renderer: esri.renderers.Renderer;
    /** The visibility of the layer. */
    visible: boolean;
    /**
     * Creates a new WFSesri.layers.Layer object
     * @param options See options table below for full descriptions of the properties needed for this object.
     */
    constructor(options: esri.WFSLayerOptions);
    /**
     * Creates a WFSesri.layers.Layer using the provided JSON object.
     * @param json The input JSON.
     */
    fromJson(json: Object): void;
    /** Redraws all the graphics in the layer. */
    redraw(): void;
    /** Refreshes the features in the WFS layer. */
    refresh(): void;
    /**
     * Sets the custom parameters used on the WFS layer.
     * @param customParameters The customParameters object used append WFS requests.
     */
    setCustomParameters(customParameters: any): void;
    /** Sets the default line symbol to be used if no renderer is specified. */
    setLineSymbol(): void;
    /** Sets the default point symbol to be used if no renderer is specified. */
    setPointSymbol(): void;
    /** Sets the default polygon symbol to be used if no renderer is specified. */
    setPolygonSymbol(): void;
    /** Converts the WFSesri.layers.Layer instance to a JSON object. */
    toJson(): any;
  }
  export = WFSesri.layers.Layer;

  /** A layer for OGC Web esri.Map Services (WMS). */
  class WMSesri.layers.Layer extends DynamicMapServiceesri.layers.Layer {
    /** All bounding boxes defined for the layer. */
    allExtents: esri.geometry.Extent[];
    /** Copyright of the WMS service. */
    copyright: string;
    /** Use this to append different custom parameters to WMS layer requests. */
    customLayerParameters: any;
    /** Use this to append custom parameters to all WMS requests. */
    customParameters: any;
    /** Description of the WMS service. */
    description: string;
    /** esri.geometry.Extent of the WMS service. */
    extent: esri.geometry.Extent;
    /** Feature info MIME type to request. */
    featureInfoFormat: string;
    /** The URL for the WMS GetFeatureInfo call. */
    getFeatureInfoURL: string;
    /** The URL for the WMS Getesri.Map call. */
    getMapURL: string;
    /** The map image format. */
    imageFormat: string;
    /** List of layers in the WMS service. */
    layerInfos: esri.layers.WMSesri.layers.LayerInfo[];
    /** Maximum height in pixels the WMS service supports. */
    maxHeight: number;
    /** Maximum width in pixels the WMS service supports. */
    maxWidth: number;
    /** Spatial reference of the WMS service. */
    spatialReference: esri.SpatialReference;
    /** An array of WKIDs of all spatial references defined for the layer. */
    spatialReferences: number[];
    /** Title of the WMS service. */
    title: string;
    /** Version of the WMS service. */
    version: string;
    /** A list of layer names that represent the layers to include in the exported map. */
    visibleLayers: string[];
    /**
     * Creates a new WMSesri.layers.Layer object.
     * @param url URL to the OGC Web esri.Map Service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.WMSLayerOptions);
    /** Returns the current map image format. */
    getImageFormat(): string;
    /**
     * Sets the custom parameters used on the WMS layer.
     * @param customParameters The customParameters object used append WMS requests.
     * @param customLayerParameters The customLayerParameters object used append specific WMS layer requests.
     */
    setCustomParameters(customParameters: any, customLayerParameters?: any): void;
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

  /** The esri.layers.WMSesri.layers.LayerInfo class defines and provides information about layers in a WMS service. */
  class esri.layers.WMSesri.layers.LayerInfo {
    /** All bounding boxes defined for the layer. */
    allExtents: esri.geometry.Extent[];
    /** The layer description defines the value of the Abstract capabilities property. */
    description: string;
    /** The layer extent. */
    extent: esri.geometry.Extent;
    /** Contains the value of the LegendURL capabilities property. */
    legendURL: string;
    /** The layer  name. */
    name: string;
    /** Returns true if the layer can be queried and the service supports GetFeatureInfo with either text/html or text/plain formats */
    queryable: boolean;
    /** Indicates if this layer should be included in the popup. */
    showPopup: boolean;
    /** An array of WKIDs of all spatial references defined for the layer. */
    spatialReferences: number[];
    /** WMSLayerInfos of the layer's sub layers. */
    subLayers: esri.layers.WMSesri.layers.LayerInfo[];
    /** The layer title. */
    title: string;
    /**
     * Creates a new esri.layers.WMSesri.layers.LayerInfo object.
     * @param options See options list for parameters.
     */
    constructor(options?: esri.WMSLayerInfoOptions);
  }
  export = esri.layers.WMSesri.layers.LayerInfo;

  /** The WMTSesri.layers.Layer class is used to create a layer based on an OGC Web esri.Map Tile Service layer. */
  class WMTSesri.layers.Layer extends TiledMapServiceesri.layers.Layer {
    /** Copyright information for the service. */
    copyright: string;
    /** Use this to append different custom parameters to a WMTS tile request. */
    customLayerParameters: any;
    /** Use this to append custom parameters to all WMTS requests. */
    customParameters: any;
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
    /**
     * Sets the custom parameters used on the WMTS layer.
     * @param customParameters The customParameters object used append WMTS requests.
     * @param customLayerParameters The customLayerParameters object used append specific WMTS layer requests.
     */
    setCustomParameters(customParameters: any, customLayerParameters?: any): void;
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
declare namespace esri.layers.pixelfilters {

  /** A stretch filter used to work with client -side pixel data to enhance raster/image appearances. */
  export class StretchFilter {
    /** Indicates whether to perform dynamic range adjustment using the current pixel data. */
    dra: boolean;
    /** An array of gamma values, for example [0.8, 0.8, 0.8]. */
    gamma: number[];
    /** The maximum value of stretched pixels. */
    max: number;
    /** Percent of pixels clipped on the right histogram tail, for example 0.25. */
    maxPercent: number;
    /** The minimum value of stretched pixels. */
    min: number;
    /** Percent of pixels clipped on the left histogram tail, for example 1.5. */
    minPercent: number;
    /** The number of standard deviations for StandardDeviation stretch, for example 2.5. */
    numberOfStandardDeviations: number;
    /** The output pixel type. */
    outputPixelType: string;
    /** An array of arrays containing custom statistics objects. */
    statistics: any[][];
    /** Number indicating the various stretch types. */
    stretchType: number;
    /** Indicates whether to perform non-linear gamma stretch. */
    useGamma: boolean;
    /**
     * Creates an instance of a StretchFilter.
     * @param options Optional parameters.
     */
    constructor(options?: esri.StretchFilterOptions);
    /**
     * It takes a pixelData object as input and processes it.
     * @param pixelData The pixelData object used as filter input.
     */
    filter(pixelData: any): void;
  }
}
declare namespace esri.opsdashboard {

  /** esri.opsdashboard.DataSourceProxy is a proxy class that represents a operations dashboard data source. */
  class esri.opsdashboard.DataSourceProxy {
    /** Read-only: The name of the display field. */
    displayFieldName: string;
    /** Read-only: The collection of fields. */
    fields: esri.layers.Field[];
    /** Read-only: The geometry type. */
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
    types: esri.layers.FeatureType[];
    /** Clear the selection. */
    clearSelection(): void;
    /**
     * Executes a query and get the result.
     * @param query The query object to apply.
     */
    executeQuery(query: Query): any;
    /** An object that contains service level metadata about whether or not the layer supports queries using statistics, order by fields, DISTINCT, pagination, query with distance, and returning queries with extents. */
    getAdvancedQueryCapabilities(): any;
    /** Retrieve the associated id of the data source that supports selection. */
    getAssociatedSelectionDataSourceId(): any;
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
    getValueFromFeature(feature: esri.Graphic, fieldName: string): number | string;
    /**
     * Select features in the data source using a query.
     * @param query The query object to apply
     */
    selectFeatures(query: Query): void;
    /**
     * Select features in the data source using a collection of object ids.
     * @param objectIds The collection of object ids of the features to select.
     */
    selectFeaturesByObjectIds(objectIds: string[]): void;
  }
  export = esri.opsdashboard.DataSourceProxy;

  /** esri.opsdashboard.ExtensionBase is a base class used by all the extension proxies. */
  class esri.opsdashboard.ExtensionBase {
    /** "circle" */
    static CIRCLE: any;
    /** "extent" */
    static EXTENT: any;
    /** "freehandpolygon" */
    static FREEHAND_POLYGON: any;
    /** "freehandpolyline" */
    static FREEHAND_POLYLINE: any;
    /** "line" */
    static LINE: any;
    /** "point" */
    static POINT: any;
    /** "polygon" */
    static POLYGON: any;
    /** "polyline" */
    static POLYLINE: any;
    /** Read-only: Indicates if the host application is the Windows Operations Dashboard. */
    isNative: boolean;
    /** Read-only: It will list all of the Portal helper services. */
    portalHelperServices: any;
    /** Read-only: The URL to the ArcGIS.com site or in-house portal that you are currently signed in to. */
    portalUrl: string;
    /** Get the collection of data sources from the host application. */
    getDataSourceProxies(): any;
    /**
     * Get the data source corresponding to the data source id from the host application.
     * @param dataSourceId The data source id
     */
    getDataSourceProxy(dataSourceId: string): any;
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
    on(type: "data-source-added", listener: (event: { dataSourceProxy: any; target: esri.opsdashboard.ExtensionBase }) => void): esri.Handle;
    /** Event indicating that a data source has been removed from the host operation view. */
    on(type: "data-source-removed", listener: (event: { dataSourceId: string; target: esri.opsdashboard.ExtensionBase }) => void): esri.Handle;
    /** Event indicating that the initialization process was successful. */
    on(type: "host-ready", listener: (event: { target: esri.opsdashboard.ExtensionBase }) => void): esri.Handle;
    /** Event indicating that the initialization process encountered an error. */
    on(type: "initialization-error", listener: (event: { error: Error; target: esri.opsdashboard.ExtensionBase }) => void): esri.Handle;
    /** Event indicating that a new map widget has been added into the host operation view. */
    on(type: "map-widget-added", listener: (event: { mapWidgetProxy: esri.opsdashboard.MapWidgetProxy; target: esri.opsdashboard.ExtensionBase }) => void): esri.Handle;
    /** Event indicating that a map widget has been removed from the host operation view. */
    on(type: "map-widget-removed", listener: (event: { mapWidgetId: string; target: esri.opsdashboard.ExtensionBase }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.opsdashboard.ExtensionBase;

  /** esri.opsdashboard.ExtensionConfigurationBase is a base class used by all the extension configuration proxies. */
  class esri.opsdashboard.ExtensionConfigurationBase extends esri.opsdashboard.ExtensionBase {
    /** The object that will store the Widget/MapTool/FeatureAction configuration. */
    config: any;
    /**
     * Indicates if the configuration is ready to be persisted or not.
     * @param ready Indicates that the configuration is ready to be persisted or not.
     */
    readyToPersistConfig(ready: boolean): void;
  }
  export = esri.opsdashboard.ExtensionConfigurationBase;

  /** FeatureActionConfigurationProxy is a class used to provide the configuration user experience for an operations dashboard extension feature action. */
  export class FeatureActionConfigurationProxy extends esri.opsdashboard.ExtensionConfigurationBase {
  }

  /** esri.opsdashboard.FeatureActionFeatures is a specialized collection of features used by WidgetProxy to hold the collection of features for the associated feature actions. */
  class esri.opsdashboard.FeatureActionFeatures {
    /** The esri.opsdashboard.DataSourceProxy from which the collection of features belongs to. */
    dataSourceProxy: esri.opsdashboard.DataSourceProxy;
    /**
     * Add a feature to the host collection.
     * @param featureOrObjectId
     */
    addFeature(featureOrObjectId: esri.Graphic | number): void;
    /**
     * Add a collection of features or collection of object id in the host collection.
     * @param featuresOrObjectIds
     */
    addFeatures(featuresOrObjectIds: esri.Graphic[] | number[]): void;
    /** Remove all the features from the host collection. */
    clear(): void;
    /**
     * Test if a feature exists in the host collection.
     * @param featureOrObjectId Feature to test existance for.
     */
    contains(featureOrObjectId: esri.Graphic | number): boolean;
    /**
     * Returns the index of a feature in the host collection.
     * @param featureOrObjectId Feature to return index from.
     */
    indexOf(featureOrObjectId: esri.Graphic | number): number;
    /**
     * Remove a collection of features from the host collection.
     * @param featureOrObjectId Feature to remove.
     */
    removeFeature(featureOrObjectId: esri.Graphic | number): void;
    /**
     * Remove a feature from the host collection.
     * @param featuresOrObjectIds Features to remove.
     */
    removeFeatures(featuresOrObjectIds: esri.Graphic[] | number[]): void;
  }
  export = esri.opsdashboard.FeatureActionFeatures;

  /** esri.opsdashboard.GraphicsLayerProxy is a proxy class that represents a graphics layer in a map widget in the host application. */
  class esri.opsdashboard.GraphicsLayerProxy {
    /** Read-only: The current host graphics layer maximum visible scale. */
    maxScale: number;
    /** Read-only: The current host graphics layer minimum visible scale. */
    minScale: number;
    /** Read-only: The current host graphics layer opacity ratio. */
    opacity: number;
    /** Read-only: The current renderer used by the host graphics layer. */
    renderer: esri.renderers.Renderer;
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
    addOrUpdateGraphics(graphics: esri.Graphic[]): void;
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
     * @param renderer Since the Windows operations dashboard is built using ArcGIS Runtime SDK for WPF, only renderers supported by the WPF should be used, such as Simpleesri.renderers.Renderer, UniqueValueesri.renderers.Renderer and ClassBreaksRenderer.
     */
    setRenderer(renderer: Renderer): void;
    /**
     * Set the visibility of the host graphics layer.
     * @param visibility The new visibility value.
     */
    setVisibility(visibility: boolean): void;
  }
  export = esri.opsdashboard.GraphicsLayerProxy;

  /** MapToolConfigurationProxy is a class used to provide the configuration user experience for an operations dashboard extension map tool. */
  export class MapToolConfigurationProxy extends esri.opsdashboard.ExtensionConfigurationBase {
  }

  /** MapToolProxy is a class used to define an operations dashboard extension map tool. */
  export class MapToolProxy {
    /** Read-only: The available size for the map tool user experience on the host map widget. */
    availableDisplaySize: number;
    /** Read-only: The map tool user experience size in pixels. */
    displaySize: any;
    /** Read-only: The map widget that is hosting the map tool user experience. */
    mapWidgetProxy: esri.opsdashboard.MapWidgetProxy;
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
    mapDrawComplete(geometry: Geometry): void;
    /**
     * Change the size of the user experience area in the host application for this map tool user experience.
     * @param size The new size for the user experience.
     */
    setDisplaySize(size: any): any;
    /** Event indicating that the available display size for the map tool user experience has changed. */
    on(type: "available-display-size-changed", listener: (event: { size: any; target: MapToolProxy }) => void): esri.Handle;
    /** Event indicating that a previously activate drawing activity has been completed by the user. */
    on(type: "draw-complete", listener: (event: { geometry: esri.geometry.Geometry; target: MapToolProxy }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** esri.opsdashboard.MapWidgetProxy is a proxy class that represents a operations dashboard map widget. */
  class esri.opsdashboard.MapWidgetProxy {
    /** Read-only: The map id. */
    id: string;
    /** Read-only: The name of the map. */
    name: string;
    /** Read-only: The spatial reference of the map. */
    spatialReference: esri.SpatialReference;
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
    /**
     * Pans the map to a new location.
     * @param mapesri.geometry.Point A new location with the same spatial reference as the host map.
     */
    panTo(mapPoint: Point): void;
    /**
     * Sets an extent on the host map extent.
     * @param extent A new map extent.
     */
    setExtent(extent: Extent): void;
    /** Subscribes to the host map events. */
    subscribeToMapEvents(): void;
    /** Unsubscribes from the host map events. */
    unsubscribeFromMapEvents(): void;
    /** Event indicating that the host map extent has changed. */
    on(type: "map-extent-change", listener: (event: { extent: esri.geometry.Extent; target: esri.opsdashboard.MapWidgetProxy }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.opsdashboard.MapWidgetProxy;

  /** WidgetConfigurationProxy is a class used to provide the configuration user experience for an operations dashboard extension widget. */
  export class WidgetConfigurationProxy extends esri.opsdashboard.ExtensionConfigurationBase {
    /**
     * Called by the host application when the user has changed the selected data source in the data source selector.
     * @param dataSourceProxy The selected data source.
     * @param dataSourceConfig The associated data source config.
     */
    dataSourceSelectionChanged(dataSourceProxy: esri.opsdashboard.DataSourceProxy, dataSourceConfig: any): void;
    /**
     * Get the data source config for a data source.
     * @param dataSourceProxyOrDataSourceId A data source or a data source id.
     */
    getDataSourceConfig(dataSourceProxyOrDataSourceId: esri.opsdashboard.DataSourceProxy | string): any;
    /**
     * Called by the host application when the user has changed the selected map widget in the map widget selector.
     * @param mapWidgetProxy The selected map widget.
     */
    mapWidgetSelectionChanged(mapWidgetProxy: MapWidgetProxy): void;
    /** Event indicating the user has changed the selected data source for the configuration. */
    on(type: "data-source-selection-changed", listener: (event: { dataSourceConfig: any; dataSourceProxy: esri.opsdashboard.DataSourceProxy; target: WidgetConfigurationProxy }) => void): esri.Handle;
    /** Event indicating the user has changed the selected map widget for the configuration. */
    on(type: "map-widget-selection-changed", listener: (event: { mapWidgetProxy: esri.opsdashboard.MapWidgetProxy; target: WidgetConfigurationProxy }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** WidgetProxy is a class used to define an operations dashboard extension widget. */
  export class WidgetProxy extends esri.opsdashboard.ExtensionBase {
    /** Read-only: If the widget was configured to consume data sources, the dataSourceConfig array will hold a collection of dataSourceConfig objects. */
    dataSourceConfigs: any[];
    /** Read-only: The host collection of features used by the widget feature actions. */
    featureActionFeatures: esri.opsdashboard.FeatureActionFeatures;
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
    dataSourceExpired(dataSourceProxy: esri.opsdashboard.DataSourceProxy, associated?: any): void;
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
    executeDefaultFeatureAction(featuresOrObjectIds: esri.Graphic[] | number[]): void;
    /**
     * Get the data source config for a data source.
     * @param dataSourceProxyOrDataSourceId A data source or a data source id.
     */
    getDataSourceConfig(dataSourceProxyOrDataSourceId: esri.opsdashboard.DataSourceProxy | string): any;
    /**
     * Called by the host application when the user has finished the drawing activity.
     * @param geometry
     */
    toolbarDrawComplete(geometry: Geometry): void;
    /** Event indicating that a data source validity has expired. */
    on(type: "data-source-expired", listener: (event: { dataSourceConfig: any; dataSourceProxy: esri.opsdashboard.DataSourceProxy; target: WidgetProxy }) => void): esri.Handle;
    /** Event indicating that the user has deactivated the previously activated drawing toolbar on the map widget. */
    on(type: "drawing-toolbar-deactivated", listener: (event: { target: WidgetProxy }) => void): esri.Handle;
    /** Event indicating the user has finished a drawing activity with the previously activated drawing toolbar. */
    on(type: "toolbar-draw-complete", listener: (event: { geometry: esri.geometry.Geometry; target: WidgetProxy }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** featureActionProxy is a singleton object that allows implementing an operations dashboard Feature Action extension. */
  export class featureActionProxy extends esri.opsdashboard.ExtensionBase {
    /** Event raised when the feature action should execute for a set of features. */
    on(type: "execute", listener: (event: { config: any; dataSourceProxy: esri.opsdashboard.DataSourceProxy; featureSet: esri.tasks.FeatureSet; target: featureActionProxy }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
}
declare namespace esri.plugins {

  /** This module defines a class and a feature layer plugin that is used to calculate feature layer statistics. */
  export class FeatureLayerStatistics {
    /**
     * Creates a new object that is used to calculate statistics about features in a feature layer.
     * @param params Parameters that define the FeatureLayerStatistics.
     */
    constructor(params: esri.FeatureLayerStatisticsOptions);
    /**
     * This function is called internally when the plugin is added to a feature layer.
     * @param layer The target esri.layers.Featureesri.layers.Layer that have the plugin added.
     * @param options Additional options that will be passed into the FeatureLayerStatistics constructor when it is added as a plugin to the target FeatureLayer.
     */
    add(layer: esri.layers.Featureesri.layers.Layer, options?: any): void;
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
     * @param layer The target esri.layers.Featureesri.layers.Layer that will have the plugin removed.
     */
    remove(layer: FeatureLayer): void;
  }

  /** A static utility module that adds or removes a SpatialIndex instance on a esri.Map or FeatureLayer. */
  export var spatialIndex: {
    /**
     * Adds an index property to the target instance.
     * @param target The map or feature layer to which the index is connected.
     * @param options See the object specifications table below for the structure of the index  options  object.
     */
    add(target: esri.Map | esri.layers.Featureesri.layers.Layer, options?: any): void;
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
    intersects(test: esri.geometry.Point | esri.Graphic | esri.geometry.Extent | number[], layerId?: string, getRects?: boolean): any;
    /**
     * Searches for the nearest point(s) to the passed point within the specified criteria.
     * @param criteria See the object specifications table below for the structure of the  criteria  object.
     * @param layerId ID assigned to the layer.
     */
    nearest(criteria: any, layerId?: string): any;
  }
}
declare namespace esri.renderers {

  /** (Currently in beta) Blendesri.renderers.Renderer allows you to easily identify the predominant attribute among two or more competing attributes of a feature and visualizes the strength of that predominance using blended colors. */
  class Blendesri.renderers.Renderer {
    /** This determines how colors are blended together. */
    blendMode: string;
    /** An array of objects to blend containing the field name and color to use. */
    fields: any[];
    /** The field to normalize. */
    normalizationField: string;
    /** An array of objects which determines opacity. */
    opacityStops: any[];
    /** The Blendesri.renderers.Renderer applies to the color of the symbol. */
    symbol: esri.symbols.Symbol;
    /**
     * Creates a new Blendesri.renderers.Renderer object.
     * @param params Required and optional parameters.
     */
    constructor(params?: esri.BlendRendererOptions);
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
    setSymbol(symbol: Symbol): void;
  }
  export = Blendesri.renderers.Renderer;

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
    constructor(defaultSymbol: esri.symbols.Symbol, attributeField: string | Function);
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
    addBreak(minValueOrInfo: number | any, maxValue?: number, symbol?: Symbol): void;
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
    outline: Lineesri.symbols.Symbol;
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

  /** The base class for the renderers - Simpleesri.renderers.Renderer, ClassBreaksesri.renderers.Renderer, UniqueValueesri.renderers.Renderer, DotDensityesri.renderers.Renderer, ScaleDependentesri.renderers.Renderer, Temporalesri.renderers.Renderer, Heatmapesri.renderers.Renderer, and VectorFieldesri.renderers.Renderer used with a esri.layers.Graphicsesri.layers.Layer and FeatureLayer. */
  class esri.renderers.Renderer {
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
     * @param graphic esri.Graphic to get color from.
     * @param options This optional parameter supports colorInfo.
     */
    getColor(graphic: esri.Graphic, options?: any): esri.Color;
    /**
     * Returns the opacity value for the specified graphic.
     * @param graphic Returns the opacity value appropriate for the given graphic.
     * @param options This optional parameter supports opacityInfo.
     */
    getOpacity(graphic: esri.Graphic, options?: any): number;
    /**
     * Returns the angle of rotation (in degrees) for the graphic calculated using rotationInfo.
     * @param graphic An input graphic for which you want to get the angle of rotation.
     * @param options This optional parameter supports rotationInfo.
     */
    getRotationAngle(graphic: esri.Graphic, options?: any): number;
    /**
     * Return the symbol size (in pixels) for the graphic, calculated using sizeInfo.
     * @param graphic The graphic for which you want to calculate the symbol size.
     * @param options This optional parameter supports sizeInfo.
     */
    getSize(graphic: esri.Graphic, options?: any): number;
    /**
     * Gets the symbol for the Graphic.
     * @param graphic esri.Graphic to symbolize.
     */
    getSymbol(graphic: Graphic): esri.symbols.Symbol;
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
    /**
     * Set size info of the renderer to modify the symbol size based on data value.
     * @param info An object with the same properties as sizeInfo.
     */
    setSizeInfo(info: any): esri.renderers.Renderer;
    /**
     * Sets the renderer with the specified  visualVariables.
     * @param visualParams The specified visualVariables.
     */
    setVisualVariables(visualParams: any[]): void;
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
     * @param params Each element in the array is an object that describes the class breaks information.
     * @param timeUnits The unit in which the minimum and maximum break values are measured.
     */
    constructor(params: esri.TimeClassBreaksAgerOptions[], timeUnits?: string);
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
    constructor(defaultSymbol: esri.symbols.Symbol, attributeField: string | Function, attributeField2?: string, attributeField3?: string, fieldDelimeter?: string);
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
    addValue(valueOrInfo: string | any, symbol?: Symbol): void;
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

  /** The VectorFieldesri.renderers.Renderer function symbolizes a U-V or Magnitude-Direction data. */
  class VectorFieldesri.renderers.Renderer extends esri.renderers.Renderer {
    /** Flow from angle */
    static FLOW_FROM: any;
    /** Flow to angle */
    static FLOW_TO: any;
    /** Beaufort point symbol (feet) */
    static STYLE_BEAUFORT_FEET: any;
    /** Beaufort point symbol (kilometers) */
    static STYLE_BEAUFORT_KM: any;
    /** Beaufort point symbol (knots) */
    static STYLE_BEAUFORT_KN: any;
    /** Beaufort point symbol (meters) */
    static STYLE_BEAUFORT_METER: any;
    /** Beaufort point symbol (miles) */
    static STYLE_BEAUFORT_MILE: any;
    /** Classified arrow point symbol */
    static STYLE_CLASSIFIED_ARROW: any;
    /** Ocean current point symbol (knots) */
    static STYLE_OCEAN_CURRENT_KN: any;
    /** Ocean current point symbol (meters) */
    static STYLE_OCEAN_CURRENT_M: any;
    /** Simple scalar point symbol */
    static STYLE_SCALAR: any;
    /** Single arrow point symbol */
    static STYLE_SINGLE_ARROW: any;
    /** Barb wind speed point symbol */
    static STYLE_WIND_BARBS: any;
    /**
     * Creates a new VectorFieldesri.renderers.Renderer object.
     * @param options Optional parameters.
     */
    constructor(options?: esri.VectorFieldRendererOptions);
  }
  export = VectorFieldesri.renderers.Renderer;

  /** Utility method to create a renderer from JSON. */
  export var jsonUtils: {
    /**
     * Converts the input JSON object to the appropriate esri.renderer.* object.
     * @param json The JSON object.
     */
    fromJson(json: Object): esri.renderers.Renderer;
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
declare namespace esri.symbols {

  /** Line symbols are used to draw linear features on the graphics layer. */
  class CartographicLineesri.symbols.Symbol extends SimpleLineesri.symbols.Symbol {
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
    /** Creates a new empty CartographicLineesri.symbols.Symbol object. */
    constructor();
    /**
     * Creates a new CartographicLineesri.symbols.Symbol object with parameters.
     * @param style See Constants table for values.
     * @param color esri.symbols.Symbol color.
     * @param width Width of the line in pixels.
     * @param cap See Constants table for values.
     * @param join See Constants table for values.
     * @param miterLimit Size threshold for showing mitered line joins.
     */
    constructor(style?: string, color?: esri.Color, width?: number, cap?: string, join?: string, miterLimit?: string);
    /**
     * Creates a new CartographicLineesri.symbols.Symbol object using a JSON object.
     * @param json JSON object representing the CartographicLineSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the cap style.
     * @param cap Cap style.
     */
    setCap(cap: string): CartographicLineesri.symbols.Symbol;
    /**
     * Sets the join style.
     * @param join Join style.
     */
    setJoin(join: string): CartographicLineesri.symbols.Symbol;
    /**
     * Sets the size threshold for showing mitered line joins.
     * @param miterLimit Miter limit.
     */
    setMiterLimit(miterLimit: string): CartographicLineesri.symbols.Symbol;
  }
  export = CartographicLineesri.symbols.Symbol;

  /** Fill symbols are used to draw polygon features on the graphics layer. */
  class Fillesri.symbols.Symbol extends esri.symbols.Symbol {
    /** Outline of the polygon. */
    outline: SimpleLineesri.symbols.Symbol;
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
    constructor(size?: number | string, style?: string, variant?: string, weight?: string, family?: string);
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
    setSize(size: number | string): esri.symbols.Font;
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
  class Lineesri.symbols.Symbol extends esri.symbols.Symbol {
    /** Width of line symbol in pixels. */
    width: number;
    /**
     * Sets the Lineesri.symbols.Symbol width.
     * @param width Width of line symbol in pixels.
     */
    setWidth(width: number): Lineesri.symbols.Symbol;
  }
  export = Lineesri.symbols.Symbol;

  /** Marker symbols are used to draw points and multipoints on the graphics layer. */
  class Markeresri.symbols.Symbol extends esri.symbols.Symbol {
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
    setAngle(angle: number): Markeresri.symbols.Symbol;
    /**
     * Sets the x and y offset of a marker in screen units.
     * @param x The X offset value in pixels.
     * @param y The Y offset value in pixels.
     */
    setOffset(x: number, y: number): Markeresri.symbols.Symbol;
    /**
     * Sets the size of a marker in pixels.
     * @param size The width of the symbol in pixels.
     */
    setSize(size: number): Markeresri.symbols.Symbol;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = Markeresri.symbols.Symbol;

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
    constructor(url: string, outline: SimpleLineesri.symbols.Symbol, width: number, height: number);
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
  class PictureMarkeresri.symbols.Symbol extends Markeresri.symbols.Symbol {
    /** Height of the image in pixels. */
    height: number;
    /** URL of the image. */
    url: string;
    /** Width of the image in pixels. */
    width: number;
    /**
     * Creates a new PictureMarkeresri.symbols.Symbol object.
     * @param url URL of the image.
     * @param width Width of the image in pixels.
     * @param height Height of the image in pixels.
     */
    constructor(url: string, width: number, height: number);
    /**
     * Creates a new PictureMarkeresri.symbols.Symbol object using a JSON object.
     * @param json JSON object representing the PictureMarkerSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the height of the image for display.
     * @param height Height of marker in pixels.
     */
    setHeight(height: number): PictureMarkeresri.symbols.Symbol;
    /**
     * Sets the URL where the image is located.
     * @param url URL location of marker image.
     */
    setUrl(url: string): PictureMarkeresri.symbols.Symbol;
    /**
     * Sets the width of the image for display.
     * @param width Width of marker in pixels.
     */
    setWidth(width: number): PictureMarkeresri.symbols.Symbol;
  }
  export = PictureMarkeresri.symbols.Symbol;

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
    /** esri.symbols.Symbol color - only applies when SimpleFillSymbol.style = 'STYLE_SOLID'. */
    color: esri.Color;
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
    constructor(style: string, outline: SimpleLineesri.symbols.Symbol, color: Color);
    /**
     * Creates a new SimpleFillesri.symbols.Symbol object using a JSON object.
     * @param json JSON object representing the SimpleFillSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the symbol color - only applies when style is STYLE_SOLID.
     * @param color esri.symbols.Symbol color.
     */
    setColor(color: Color): SimpleFillesri.symbols.Symbol;
    /**
     * Sets the fill symbol style.
     * @param style Fill style.
     */
    setStyle(style: string): SimpleFillesri.symbols.Symbol;
  }
  export = SimpleFillesri.symbols.Symbol;

  /** Line symbols are used to draw linear features on the graphics layer. */
  class SimpleLineesri.symbols.Symbol extends Lineesri.symbols.Symbol {
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
    /** Creates a new empty SimpleLineesri.symbols.Symbol object. */
    constructor();
    /**
     * Creates a new SimpleLineesri.symbols.Symbol object with parameters.
     * @param style See Constants table for values.
     * @param color esri.symbols.Symbol color.
     * @param width Width of the line in pixels.
     */
    constructor(style: string, color: esri.Color, width: number);
    /**
     * Creates a new SimpleLineesri.symbols.Symbol object using a JSON object.
     * @param json JSON object representing the SimpleLineSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the line symbol style.
     * @param style Line style.
     */
    setStyle(style: string): SimpleLineesri.symbols.Symbol;
  }
  export = SimpleLineesri.symbols.Symbol;

  /** Marker symbols are used to draw points and multipoints on the graphics layer. */
  class SimpleMarkeresri.symbols.Symbol extends Markeresri.symbols.Symbol {
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
    outline: SimpleLineesri.symbols.Symbol;
    /** Size of the marker in pixels. */
    size: number;
    /** The marker style. */
    style: string;
    /** Creates a new empty SimpleMarkeresri.symbols.Symbol object. */
    constructor();
    /**
     * Creates a new SimpleMarkeresri.symbols.Symbol object with parameters.
     * @param style See Constants table for values.
     * @param size Size of the marker in pixels.
     * @param outline See SimpleLineSymbol.
     * @param color esri.symbols.Symbol color.
     */
    constructor(style: string, size: number, outline: SimpleLineesri.symbols.Symbol, color: Color);
    /**
     * Creates a new SimpleMarkeresri.symbols.Symbol object using a JSON object.
     * @param json JSON object representing the SimpleMarkerSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the outline of the marker symbol.
     * @param outline esri.symbols.Symbol used for outline.
     */
    setOutline(outline: SimpleLineSymbol): SimpleMarkeresri.symbols.Symbol;
    /**
     * Sets the marker shape to the given path string and switches the marker style to STYLE_PATH.
     * @param path SVG path of the icon.
     */
    setPath(path: string): SimpleMarkeresri.symbols.Symbol;
    /**
     * Sets the marker symbol style.
     * @param style Marker style.
     */
    setStyle(style: string): SimpleMarkeresri.symbols.Symbol;
  }
  export = SimpleMarkeresri.symbols.Symbol;

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
    /** The halo color used for the text symbol.Known limitations:IE 9 and below not supported.Sub-pixel halo (i.e. */
    haloColor: esri.Color;
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
     * Sets a halo color for the text symbol.NOTE: Known limitations when working with the text symbol halo:IE 9 and below not supported.Sub-pixel halo (i.e.
     * @param color The color used for the text symbol halo.
     */
    setHaloColor(color: Color): Textesri.symbols.Symbol;
    /**
     * Sets the size of the halo (in pixels) used for the text symbol.NOTE: Known limitations when working with the text symbol halo:IE 9 and below not supported.Sub-pixel halo (i.e.
     * @param size The size (in pixels) of the text symbol halo.
     */
    setHaloSize(size: number): Textesri.symbols.Symbol;
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
    areaUnit: number | string;
    /** Defines the type of calculation for the geometry. */
    calculationType: string;
    /** The length unit in which perimeters of polygons will be calculated. */
    lengthUnit: number | string;
    /** esri.geometry.Polygon geometries for which to compute areas and lengths */
    polygons: esri.geometry.Polygon[];
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
    unit: number;
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
    /** Travel modes define how a pedestrian, car, truck or other medium of transportation moves through the street network. */
    travelMode: any;
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
    /** Returns an object describing a Closest Facility service endpoint (URL of the endpoint is specified in the constructor). */
    getServiceDescription(): any;
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
  class esri.tasks.DataFile {
    /** The ID of the uploaded file returned as a result of the upload operation. */
    itemID: string;
    /** URL to the location of the data file. */
    url: string;
    /** Creates a new esri.tasks.DataFile object. */
    constructor();
  }
  export = esri.tasks.DataFile;

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
    /** The length unit of maxSegmentLength, can be any esriUnits constant. */
    lengthUnit: number | string;
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
    distanceUnit: number | string;
    /** When true, the geodesic distance between geometry1 and geometry2 is measured. */
    geodesic: boolean;
    /** The geometry from which the distance is to be measured. */
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
    /** The array of fields. */
    fields: any[];
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
    /** Specifies the number of decimal places for the geometries returned by the query operation. */
    geometryPrecision: number;
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
     * @param url URL to the ArcGIS Server REST resource that represents a map service.
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
    /** esriJobMessageTypeAbort - Indicates the job has aborted. */
    static TYPE_ABORT: any;
    /** esriJobMessageTypeEmpty - Indicates the task returned an empty result. */
    static TYPE_EMPTY: any;
    /** esriJobMessageTypeError - Indicates an error was returned during the execution of the job. */
    static TYPE_ERROR: any;
    /** esriJobMessageTypeInformative - Indicates the message is informative. */
    static TYPE_INFORMATIVE: any;
    /** esriJobMessageTypeProcessDefinition */
    static TYPE_PROCESS_DEFINITION: any;
    /** esriJobMessageTypeProcessStart - Indicates the GP process has started. */
    static TYPE_PROCESS_START: any;
    /** esriJobMessageTypeProcessStop - Indicates the GP process has stopped. */
    static TYPE_PROCESS_STOP: any;
    /** esriJobMessageTypeWarning - Indicates the message is a warning. */
    static TYPE_WARNING: any;
    /** A description of the geoprocessing message. */
    description: string;
    /** The geoprocessing message type. */
    type: string;
  }
  export = esri.tasks.GPMessage;

  /** Sets the geometries, maximum deviation and units for the generalize operation. */
  class esri.tasks.GeneralizeParameters {
    /** The maximum deviation unit. */
    deviationUnit: number | string;
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
     * @param url URL to the ArcGIS Server REST resource that represents a esri.tasks.GeometryService, https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer.
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
    labelPoints(polygons: esri.geometry.Polygon[], callback?: Function, errback?: Function): any;
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
    on(type: "buffer-complete", listener: (event: { geometries: esri.geometry.Polygon[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
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
    on(type: "label-points-complete ", listener: (event: { geometries: esri.geometry.Point[]; target: esri.tasks.GeometryService }) => void): esri.Handle;
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
    submitJob(inputParameters: any, callback?: Function, statusCallback?: Function, errback?: Function): any;
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
    noData: string | number;
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

  /** Performs an identify operation on an image service resource. */
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

  /** Defines parameters for the ImageServiceMeasureTask. */
  class esri.tasks.ImageServiceMeasureParameters {
    /** Calculates the area and perimeter of given geometry. */
    static OPERATION_AREA_PERIMETER: any;
    /** Calculates the area and perimeter of the given geometry using the DEM defined by the service to refine the calculation. */
    static OPERATION_AREA_PERIMETER_3D: any;
    /** Calculates the height of a structure by measuring from the base of the structure to the top of the structure. */
    static OPERATION_BASE_TOP: any;
    /** Calculates the height of a structure by measuring from the base of the structure to the top of the structure's shadow on the ground. */
    static OPERATION_BASE_TOP_SHADOW: any;
    /** Calculates the centroid of a given area. */
    static OPERATION_CENTROID: any;
    /** Calculates the centroid of a given area, using the DEM defined by the service to refine the calculation. */
    static OPERATION_CENTROID_3D: any;
    /** Calculates the distance and azimuth angle between two points. */
    static OPERATION_DISTANCE_ANGLE: any;
    /** Calculates the distance and azimuth angle between two points using the DEM defined by the service to refine the calculation. */
    static OPERATION_DISTANCE_ANGLE_3D: any;
    /** Measures the location of a given point. */
    static OPERATION_POINT: any;
    /** Measures the location of a given point, using the DEM defined by the service to refine the calculation. */
    static OPERATION_POINT_3D: any;
    /** Calculates the height of a structure by measuring from the top of the structure to the top of the structure's shadow on the ground. */
    static OPERATION_TOP_TOP_SHADOW: any;
    /** The angular unit in which directions of line segments will be calculated. */
    angularUnit: string;
    /** The area unit in which areas of polygons will be calculated. */
    areaUnit: string;
    /** A geometry that defines the "from" location of the measurement. */
    fromGeometry: esri.geometry.Geometry;
    /** The linear unit in which height, length, or perimeters will be calculated. */
    linearUnit: string;
    /** Specifies the mosaic rule when defining how individual images should be mosaicked. */
    mosaicRule: esri.layers.MosaicRule;
    /** The mensuration rule to apply to the measure operation. */
    operation: string;
    /** The pixel resolution being measured. */
    pixelSize: esri.geometry.Point;
    /** A geometry that defines the "to" location of the measurement. */
    toGeometry: esri.geometry.Geometry;
    /** Converts the esri.tasks.ImageServiceMeasureParameters instance to a JSON object. */
    toJson(): any;
  }
  export = esri.tasks.ImageServiceMeasureParameters;

  /** Performs a measure operation on an Image Service. */
  export class ImageServiceMeasureTask {
    /**
     * Creates a new instance of ImageServiceMeasureTask
     * @param url URL to the ArcGIS Server REST resource that represents an image service.
     */
    constructor(url: string);
    /**
     * Sends a request to an image service to perform the designated measure operation.
     * @param params Parameters to pass to the server to execute the task.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(params: esri.tasks.ImageServiceMeasureParameters, callback?: Function, errback?: Function): any;
    /** Fires when measure completes. */
    on(type: "complete", listener: (event: { target: ImageServiceMeasureTask }) => void): esri.Handle;
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
    lengthUnit: number | string;
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
    /** The name of the output parameter as defined by the geoprocessing task in the Services Directory. */
    paramName: string;
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
    on(type: "complete", listener: (event: { result: esri.tasks.DataFile; target: PrintTask }) => void): esri.Handle;
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
    /** The well-known id {wkid:number} or well-known text {wkt:string} or  for the datum transformation to be applied on the projected geometries. */
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

  /** Input parameters for the RouteTask. */
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
    /** The esri.tasks.RouteTask can help you find the most efficient path for visiting a given list of stops. */
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
    /** If true , the TimeWindowStart and TimeWindowEnd attributes of a stop are in UTC time (milliseconds). */
    timeWindowsAreUTC: boolean;
    /** Travel modes define how a pedestrian, car, truck or other medium of transportation moves through the street network. */
    travelMode: any;
    /** If true, the hierarchy attribute for the network should be used in analysis. */
    useHierarchy: boolean;
    /** A useful feature of the esri.tasks.RouteTask is the ability to constrain stop visits to certain times of day, or "time windows". */
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

  /** The ArcGIS JavaScript API's esri.tasks.RouteTask allows you to find routes between two or more locations and optionally get driving directions. */
  class esri.tasks.RouteTask {
    /** URL to the ArcGIS Server REST resource that represents a network analysis service. */
    url: string;
    /**
     * Creates a new esri.tasks.RouteTask object.
     * @param url URL to the ArcGIS Server REST resource that represents a network analysis service.
     */
    constructor(url: string);
    /** Returns an object describing a Route service endpoint (URL of the endpoint is specified in the constructor). */
    getServiceDescription(): any;
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
    /** Returns an object describing a Service Area service endpoint (URL of the endpoint is specified in the constructor). */
    getServiceDescription(): any;
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
    /** The field name or standard SQL expression on which statistics will be calculated. */
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
    /** Default value. */
    static DEFAULT_CURVE_EXTENSION: any;
    /** When an extension is performed at an end, do not extrapolate the end segments attributes for the new point. */
    static KEEP_END_ATTRIBUTES: any;
    /** When an extension is performed at an end, do not extrapolate the end segment's attributes for the new point. */
    static NO_END_ATTRIBUTES: any;
    /** Do not extend the 'from' end of any path. */
    static NO_EXTEND_AT_FROM: any;
    /** Do not extend the 'to' end of any path. */
    static NO_EXTEND_AT_TO: any;
    /** When an extension is performed at an end, relocate the end point to the new position. */
    static RELOCATE_ENDS: any;
    /** A flag used along with the trimExtend operation. */
    extendHow: number;
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
    /** Fires when the suggestLocations method has completed. */
    on(type: "suggest-locations-complete", listener: (event: { suggestions: any[]; target: esri.tasks.Locator }) => void): esri.Handle;
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
    /** Buffer distance for input geometries. */
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
    /** The unit for calculating the buffer distance. */
    units: string;
    /** A where clause for the query. */
    where: string;
    /** Creates a new esri.tasks.Query object used to execute a query on the layer resource identified by the URL. */
    constructor();
  }
  export = esri.tasks.Query;
}
declare namespace esri.tasks.datareviewer {

  /** Encapsulates a Batch Validation Job. */
  class esri.tasks.datareviewer.BatchValidationJob {
    /** Contains a list of batch run IDs, one for each batch validation execution associated with this batch validation job. */
    batchRunIds : string[];
    /** Gets job creation date. */
    creationDate: Date;
    /** Gets the Job Id. */
    jobId: string;
    /** Gets batch job execution details. */
    jobInfo: esri.tasks.datareviewer.BatchValidationJobInfo;
    /** Gets batch job parameters. */
    parameters: esri.tasks.datareviewer.BatchValidationParameters;
    /** Gets the job status. */
    status: string;
    /** Gets the job type. */
    type: string;
  }
  export = esri.tasks.datareviewer.BatchValidationJob;
  /** Encapsulates batch validation job execution details. */
  class esri.tasks.datareviewer.BatchValidationJobInfo {
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
  export = esri.tasks.datareviewer.BatchValidationJobInfo;

  /** Encapsulates batch job parameters including session Id, production workspace and analysis area. */
  class esri.tasks.datareviewer.BatchValidationParameters {
    /** A geometry that defines the validation extent. */
    analysisArea: esri.geometry.Polygon;
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
  export = esri.tasks.datareviewer.BatchValidationParameters;

  /** Exposes functions for executing and scheduling Batch Validation in ArcGIS Data Reviewer for Server. */
  export class BatchValidationTask {
    /**
     * Creates a new BatchValidationTask object.
     * @param url The DataReviewerServer Server Object Extension (SOE) URL.
     */
    constructor(url: string);
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
    /** Retrieves all adhoc jobs from the server and returns an array of esri.tasks.datareviewer.BatchValidationJob with the information. */
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
    /** Retrieves all scheduled jobs from the server and returns an array of esri.tasks.datareviewer.BatchValidationJob with the information. */
    getScheduledJobsList(): any;
    /**
     * Schedules a new Batch Validation.
     * @param parameters Parameters for scheduling a batch job.
     */
    scheduleJob(parameters: BatchValidationParameters): any;
    /** Fires when the cancelJobExecution method is complete. */
    on(type: "cancel-job-execution", listener: (event: { canceled: boolean; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the createReviewerSessions method is complete. */
    on(type: "create-reviewer-sessions", listener: (event: { reviewerSession: esri.tasks.datareviewer.ReviewerSession; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the deleteJob method is complete. */
    on(type: "delete-job", listener: (event: { deleted: boolean; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the disableJob method is complete. */
    on(type: "disable-job", listener: (event: { disabled: boolean; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the editJob method is complete. */
    on(type: "edit-job", listener: (event: { edited: boolean; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the enableJob method is complete. */
    on(type: "enable-job", listener: (event: { enabled: boolean; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when an error occurs during a BatchValidationTask method execution. */
    on(type: "error", listener: (event: { error: Error; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the executeJob method is complete. */
    on(type: "execute-job", listener: (event: { jobId: string; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the getAdhocJobsList method is complete. */
    on(type: "get-adhoc-jobs-list", listener: (event: { adhocJobs: esri.tasks.datareviewer.BatchValidationJob[]; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the getCustomFieldNames method is complete. */
    on(type: "get-custom-field-names", listener: (event: { customFieldNames: string[]; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the getJobDetails method is complete. */
    on(type: "get-job-details", listener: (event: { jobDetails: esri.tasks.datareviewer.BatchValidationJob; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the getJobExecutionDetails method is complete. */
    on(type: "get-job-execution-details", listener: (event: { jobInfo: esri.tasks.datareviewer.BatchValidationJobInfo; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the getJobIds method is complete. */
    on(type: "get-job-ids", listener: (event: { adhocJobs: string[]; scheduledJobs: string[]; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the getLifecycleStatusStrings method is complete. */
    on(type: "get-lifecycle-status-strings", listener: (event: { lifecycleStatusStrings: string[]; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the getReviewerSessions method is complete. */
    on(type: "get-reviewer-sessions", listener: (event: { reviewerSessions: esri.tasks.datareviewer.ReviewerSession[]; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the getScheduledJobsList method is complete. */
    on(type: "get-scheduled-jobs-list", listener: (event: { scheduledJobs: esri.tasks.datareviewer.BatchValidationJob[]; target: BatchValidationTask }) => void): esri.Handle;
    /** Fires when the scheduleJob method is complete. */
    on(type: "schedule-job", listener: (event: { jobId: string; target: BatchValidationTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** Encapsulates data describing a Dashboard Result. */
  class esri.tasks.datareviewer.DashboardResult {
    /** Array of reviewer result field value counts. */
    counts: any[];
    /** Name of the reviewer results field. */
    fieldName: string;
    /** Array of reviewer results field values. */
    fieldValues: any[];
    /** An instance of esri.tasks.datareviewer.ReviewerFilters class. */
    filters: esri.tasks.datareviewer.ReviewerFilters;
    /**
     * Gets the result count for a field value.
     * @param fieldValue Unique field value from the fieldValues array.
     */
    getCount(fieldValue: string | number): number;
  }
  export = esri.tasks.datareviewer.DashboardResult;

  /** Provides functionality to retrieve dashboard results from an ArcGIS Data Reviewer for Server Dashboard REST resource. */
  export class DashboardTask {
    /**
     * Creates a new DashboardTask object.
     * @param url The DataReviewerServer Server Object Extension (SOE) URL.
     */
    constructor(url: string);
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
     * @param fieldName esri.layers.Field name for dashboard results.
     * @param filters Instance of esri.tasks.datareviewer.ReviewerFilters containing one or more filters used to narrow down dashboard results.
     */
    getDashboardResults(fieldName: string, filters?: ReviewerFilters): any;
    /** Retrieves a list of localized life cycle status strings from the Reviewer workspace. */
    getLifecycleStatusStrings(): any;
    /** Extracts the MapServer url from the full ArcGIS Data Reviewer for Server SOE url. */
    getReviewerMapServerUrl(): string;
    /** Returns an array of sessions in a Reviewer workspace. */
    getReviewerSessions(): any;
    /** Fires when the createReviewerSessions method is complete. */
    on(type: "create-reviewer-sessions", listener: (event: { reviewerSession: esri.tasks.datareviewer.ReviewerSession; target: DashboardTask }) => void): esri.Handle;
    /** Fires when an error occurs during a DashboardTask method execution. */
    on(type: "error", listener: (event: { error: Error; target: DashboardTask }) => void): esri.Handle;
    /** Fires when the getCustomFieldNames method is complete. */
    on(type: "get-custom-field-names", listener: (event: { customFieldNames: string[]; target: DashboardTask }) => void): esri.Handle;
    /** Fires when the getDashboardFieldNames method is complete. */
    on(type: "get-dashboard-field-names", listener: (event: { fieldNames: string[]; target: DashboardTask }) => void): esri.Handle;
    /** Fires when the getDashboardResults method is complete. */
    on(type: "get-dashboard-results", listener: (event: { dashboardResult: esri.tasks.datareviewer.DashboardResult; target: DashboardTask }) => void): esri.Handle;
    /** Fires when the getLifecycleStatusStrings method is complete. */
    on(type: "get-lifecycle-status-strings", listener: (event: { lifecycleStatusStrings: string[]; target: DashboardTask }) => void): esri.Handle;
    /** Fires when the getReviewerSessions method is complete. */
    on(type: "get-reviewer-sessions", listener: (event: { reviewerSessions: esri.tasks.datareviewer.ReviewerSession[]; target: DashboardTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  /** Encapsulates data used for retrieving results from the reviewer workspace. */
  class esri.tasks.datareviewer.GetResultsQueryParameters {
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
  export = esri.tasks.datareviewer.GetResultsQueryParameters;
  /** Encapsulates data used by the writeFeatureAsResult and writeResult methods of the ReviewerResults class. */
  class esri.tasks.datareviewer.ReviewerAttributes {
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
  export = esri.tasks.datareviewer.ReviewerAttributes;

  /** esri.tasks.datareviewer.ReviewerFilters limit or precisely define which results to generate by applying conditions to a query for dashboard results. */
  class esri.tasks.datareviewer.ReviewerFilters {
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
    addSpatialFilter(geometry: Polygon): void;
    /** Returns the count of esri.tasks.datareviewer.ReviewerFilters added. */
    getCount(): number;
    /** Returns a JSON representation of a filter object. */
    toJSON(): any;
  }
  export = esri.tasks.datareviewer.ReviewerFilters;
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
     * Creates a new ReviewerResultsTask object.
     * @param url The DataReviewerServer Server Object Extension (SOE) URL.
     */
    constructor(url: string);
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
     * @param filters An instance of esri.tasks.datareviewer.ReviewerFilters used to create a layer definition.
     */
    getLayerDefinition(filters: ReviewerFilters): any;
    /** Retrieves a list of localized life cycle status strings from the Reviewer workspace. */
    getLifecycleStatusStrings(): any;
    /**
     * Queries records from REVTABLEMAIN, REVBATCHRUNTABLE and REVCHECKRUNTABLE.
     * @param getResultsQueryParameters Defines the size and scope of the esri.tasks.FeatureSet returned to the callback function.
     * @param filters Instance of esri.tasks.datareviewer.ReviewerFilters used to query reviewer results.
     */
    getResults(getResultsQueryParameters: esri.tasks.datareviewer.GetResultsQueryParameters, filters?: ReviewerFilters): any;
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
     * @param filters Instance of esri.tasks.datareviewer.ReviewerFilters used to query Reviewer results.
     */
    updateLifecycleStatus(sessionId: number, lifecycleStatus: number, technicianName: string, filters: ReviewerFilters): any;
    /**
     * Writes a feature to the reviewer workspace.
     * @param reviewerAttributes Class used to encapsulate all fields to be written to the reviewer workspace.
     * @param feature esri.Graphic to write to the reviewer workspace.
     */
    writeFeatureAsResult(reviewerAttributes: esri.tasks.datareviewer.ReviewerAttributes, feature: Graphic): any;
    /**
     * Writes a geometry and associated reviewer attributes to the reviewer workspace.
     * @param reviewerAttributes Class used to encapsulate all fields to be written to the reviewer workspace.
     * @param geometry A esri.geometry.Geometry (point, polyline or polygon) to write to the reviewer workspace.
     */
    writeResult(reviewerAttributes: esri.tasks.datareviewer.ReviewerAttributes, geometry: Geometry): any;
    /** Fires when the createesri.tasks.datareviewer.ReviewerSession method is complete. */
    on(type: "create-reviewer-sessions", listener: (event: { reviewerSession: esri.tasks.datareviewer.ReviewerSession; target: ReviewerResultsTask }) => void): esri.Handle;
    /** Fires when an error occurs during a ReviewerResultsTask method execution. */
    on(type: "error", listener: (event: { error: Error; target: ReviewerResultsTask }) => void): esri.Handle;
    /** Fires when the getBatchRunDetails method is complete. */
    on(type: "get-batch-run-details", listener: (event: { featureSet: esri.tasks.FeatureSet; target: ReviewerResultsTask }) => void): esri.Handle;
    /** Fires when the getCustomFieldNames method is complete. */
    on(type: "get-custom-field-names", listener: (event: { customFieldNames: string[]; target: ReviewerResultsTask }) => void): esri.Handle;
    /** Fires when the getLayerDefinition method is complete. */
    on(type: "get-layer-definition", listener: (event: { whereClause: string; target: ReviewerResultsTask }) => void): esri.Handle;
    /** Fires when the getLifecycleStatusStrings method is complete. */
    on(type: "get-lifecycle-status-strings", listener: (event: { lifecycleStatusStrings: string[]; target: ReviewerResultsTask }) => void): esri.Handle;
    /** Fires when the getResults method is complete. */
    on(type: "get-results", listener: (event: { featureSet: esri.tasks.FeatureSet; target: ReviewerResultsTask }) => void): esri.Handle;
    /** Fires when the getReviewerSessions method is complete. */
    on(type: "get-reviewer-sessions", listener: (event: { reviewerSessions: esri.tasks.datareviewer.ReviewerSession[]; target: ReviewerResultsTask }) => void): esri.Handle;
    /** Fires when the updateLifecycleStatus method is complete. */
    on(type: "update-lifecycle-status", listener: (event: { featureEditResults: esri.layers.FeatureEditResult[]; target: ReviewerResultsTask }) => void): esri.Handle;
    /** Fires when the writeFeatureAsResult method is complete. */
    on(type: "write-feature-as-result", listener: (event: { success: boolean; target: ReviewerResultsTask }) => void): esri.Handle;
    /** Fires when the writeResult method is complete. */
    on(type: "write-result", listener: (event: { success: boolean; target: ReviewerResultsTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  /** Represents an ArcGIS Data Reviewer session in which validation and manual quality control results are written to the reviewer workspace. */
  class esri.tasks.datareviewer.ReviewerSession {
    /** Numeric identifier of the session. */
    sessionId: number;
    /** Session name. */
    sessionName: string;
    /** Name under which records are written to the reviewer workspace. */
    userName: string;
    /** Enterprise geodatabase version in which records are validated. */
    versionName: string;
    /**
     * Creates a new esri.tasks.datareviewer.ReviewerSession object.
     * @param sessionId Numeric identifier of the session.
     * @param sessionName Name of the session.
     * @param userName User name under which records are written to the reviewer workspace.
     * @param versionName The enterprise geodatabase version in which records are validated.
     */
    constructor(sessionId: string, sessionName: string, userName: string, versionName: string);
    /** The Session ID and name in format Session 10 : Parcels. */
    toString(): string;
  }
  export = esri.tasks.datareviewer.ReviewerSession;
  /** Represents an ArcGIS Data Reviewer session properties in which validation and manual quality control results are written to the reviewer workspace. */
  class esri.tasks.datareviewer.SessionOptions {
    /** Indicates how to handle duplicate results when writing the results to the Reviewer workspace. */
    duplicateFilter: string;
    /** Indicates if validation result geometries are stored in the Reviewer workspace. */
    storeGeometry: boolean;
    /** The user account to associate with a session. */
    userName: string;
    /** Indicates an enterprise geodatabase version to associate with the session. */
    versionName: string;
    /**
     * Creates a new esri.tasks.datareviewer.SessionOptions object.
     * @param userName The username under which records are written to the reviewer workspace.
     * @param versionName The enterprise geodatabase version under which records are written to the reviewer workspace.
     * @param duplicateFilter Handle duplicate results when writing the results to the Reviewer workspace.
     * @param storeesri.geometry.Geometry Controls if validation result geometries are stored in the Reviewer workspace.
     */
    constructor(userName: string, versionName: string, duplicateFilter: string, storeGeometry: boolean);
  }
  export = esri.tasks.datareviewer.SessionOptions;
}
declare namespace esri.tasks.geoenrichment {

  /** The study area that is based on an address. */
  class Addressesri.tasks.geoenrichment.StudyArea extends esri.tasks.geoenrichment.StudyArea {
    /** The address key value pairs to geocode to obtain this study area. */
    attributes: any;
  }
  export = Addressesri.tasks.geoenrichment.StudyArea;

  /** The study area is created with a drive time or drive distance buffer. */
  class esri.tasks.geoenrichment.DriveBuffer {
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
  export = esri.tasks.geoenrichment.DriveBuffer;
  /** DriveUnits provides various length units that can be passed as the units in the DriveBuffer. */
  export class DriveUnits {
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
  /** GeographicLevel works with esri.tasks.geoenrichment.IntersectingGeographies to define a study area of Infoesri.Graphic with a feature from a standard geography layer. */
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

  /** (Currently in beta) Represents StandardGeographyesri.tasks.Query parameters to search for geographies by ID or Name. */
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

  /** (Currently in beta) Base class for all Geographyesri.tasks.Query objects. */
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
  class esri.tasks.geoenrichment.IntersectingGeographies {
    /** The layers from which intersecting geographies should be used as study areas. */
    levels: esri.tasks.geoenrichment.GeographyLevel[];
  }
  export = esri.tasks.geoenrichment.IntersectingGeographies;

  /** The study area is created with a simple ring buffer with a radius. */
  class esri.tasks.geoenrichment.RingBuffer {
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
  export = esri.tasks.geoenrichment.RingBuffer;

  /** (Currently in beta) Geoenrichment helper task that returns standard geography IDs and features for the supported geographic levels in Canada, the United States and a number of European countries. */
  class StandardGeographyesri.tasks.QueryTask {
    /**
     * Creates a new instance of the StandardGeographyesri.tasks.QueryTask class.
     * @param url URL to the Geoenrichment server.
     */
    constructor(url?: string);
    /**
     * Executes the StandardGeographyQueryTask.
     * @param Geographyesri.tasks.Query See Geographyesri.tasks.Query or SubGeographyesri.tasks.Query classes for more details about available properties.
     */
    execute(GeographyQuery: GeographyQueryBase): any;
    /** Fires when an error occurs during the query. */
    on(type: "error", listener: (event: { error: Error; target: StandardGeographyesri.tasks.QueryTask }) => void): esri.Handle;
    /** Fires when the query successfully executes. */
    on(type: "execute-complete", listener: (event: { features: esri.tasks.FeatureSet; target: StandardGeographyesri.tasks.QueryTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = StandardGeographyesri.tasks.QueryTask;

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
    options: esri.tasks.geoenrichment.RingBuffer | esri.tasks.geoenrichment.DriveBuffer | esri.tasks.geoenrichment.IntersectingGeographies;
    /** If true, geometry will be returned. */
    returnGeometry: boolean;
    /** Converts object to its JSON representation. */
    toJson(): any;
  }
  export = esri.tasks.geoenrichment.StudyArea;

  /** (Currently in beta) Represents StandardGeographyesri.tasks.Query parameters to search subgeographic areas that are within a parent geography. */
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

  /** (Currently in beta) The CoordinatesLocationProvider class uses the fields that contain Latitude and Longitude values to generate or locate geometries. */
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

  /** (Currently in beta) The GeometryLocationProvider class uses the field in the data that has geometry as a JSON to generate the corresponding geometry. */
  export class GeometryLocationProvider extends esri.tasks.locationproviders.LocationProviderClientBase {
    /** The attribute field in the graphic object that contains the JSON string representing the geometry. */
    geometryField: string;
    /**
     * Creates a new instance of the GeometryLocationProvider object.
     * @param options Define the properties to use when creating the class.
     */
    constructor(options: esri.GeometryLocationProviderOptions);
  }

  /** (Currently in beta) The base class for all LocationProviders. */
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
    /** Fires when the locate() method is in progress. */
    on(type: "locate-progress", listener: (event: { features: esri.Graphic[]; target: esri.tasks.locationproviders.LocationProviderBase }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.tasks.locationproviders.LocationProviderBase;

  /** (Currently in beta) The base class for CoordinatesLocationProvider and GeometryLocationProvider. */
  class esri.tasks.locationproviders.LocationProviderClientBase extends esri.tasks.locationproviders.LocationProviderBase {
    /** The Spatial Reference of the input geometries. */
    inSpatialReference: esri.SpatialReference;
  }
  export = esri.tasks.locationproviders.LocationProviderClientBase;

  /** (Currently in beta) The base class for Location Providers that use a remote service to locate geometries. */
  class esri.tasks.locationproviders.LocationProviderRemoteBase extends esri.tasks.locationproviders.LocationProviderBase {
  }
  export = esri.tasks.locationproviders.LocationProviderRemoteBase;

  /** (Currently in beta) The LocatorLocationProvider class uses a geocode service through the esri.tasks.Locator object to generate or locate geometries using fields in the graphics that contain Street address information */
  export class LocatorLocationProvider extends esri.tasks.locationproviders.LocationProviderRemoteBase {
    /** Object that matches the esri.tasks.Locator address fields to corresponding attribute names in the esri.Graphic object. */
    addressFields: any;
    /** An instance of a esri.tasks.Locator object. */
    locator: esri.tasks.Locator;
    /**
     * Creates a new instance of the LocatorLocationProvider object.
     * @param options Define the properties to use when creating the class.
     */
    constructor(options: esri.LocatorLocationProviderOptions);
  }

  /** (Currently in beta) The QueryTaskLocationProvider performs a query against a ArcGIS Feature service or esri.Map service layer based on common fields that are present in both the data and the ArcGIS layer. */
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
     * @param options Define the properties to use when creating the class.
     */
    constructor(options?: esri.QueryTaskLocationProviderOptions);
  }

  /** (Currently in beta) The StandardGeographyQueryLocationProvider class uses the Geoenrichment service to generate geometries by querying the standard geography layers. */
  export class StandardGeographyQueryLocationProvider extends esri.tasks.locationproviders.LocationProviderRemoteBase {
    /** A template to be used to build the query for Standard Geography query. */
    geographyQueryTemplate: string;
    /** An object that specifies the parameters to use in the Standard Geography query. */
    queryParameters: any;
    /** An instance of the StandardGeographyesri.tasks.QueryTask class. */
    standardGeographyQueryTask: StandardGeographyesri.tasks.QueryTask;
    /**
     * Creates a new instance of the StandardGeographyQueryLocationProvider object.
     * @param options Define the properties to use when creating the class.
     */
    constructor(options: esri.StandardGeographyQueryLocationProviderOptions);
  }
}
declare namespace esri.toolbars {

  /** A toolbar that provides support for measuring image services. */
  class esri.toolbars.ImageServiceMeasureTool {
    /** The angular unit in which directions of line segments will be calculated. */
    angularUnit: string;
    /** The area unit in which areas of polygons will be calculated. */
    areaUnit: string;
    /** esri.symbols.Symbol to be used when drawing a polygon or extent. */
    fillSymbol: SimpleFillesri.symbols.Symbol;
    /** The linear unit in which height, length, or perimeters will be calculated. */
    linearUnit: string;
    /** esri.symbols.Symbol to be used when drawing a line. */
    lineSymbol: SimpleLineesri.symbols.Symbol;
    /** esri.symbols.Symbol to be used when drawing a point. */
    markerSymbol: SimpleMarkeresri.symbols.Symbol;
    /**
     * Creates a new instance of ImageServiceMeasureTool.
     * @param params Constructor options.
     */
    constructor(params: esri.ImageServiceMeasureToolOptions);
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
     * @param fillesri.symbols.Symbol The fill symbol to set.
     */
    setFillSymbol(fillSymbol: SimpleFillSymbol): void;
    /**
     * Sets the linearUnit.
     * @param unit The linear unit to set.
     */
    setLinearUnit(unit: string): void;
    /**
     * Sets the lineSymbol.
     * @param lineesri.symbols.Symbol The line symbol to set.
     */
    setLineSymbol(lineSymbol: SimpleLineSymbol): void;
    /**
     * Sets the markerSymbol.
     * @param markeresri.symbols.Symbol The marker symbol to set.
     */
    setMarkerSymbol(markerSymbol: SimpleMarkerSymbol): void;
    /** Enables the tooltip message for performing a draw. */
    showDrawTooltip(): void;
    /** Fires when the drawing is complete. */
    on(type: "draw-end", listener: (event: { geometry: esri.geometry.Geometry; target: esri.toolbars.ImageServiceMeasureTool }) => void): esri.Handle;
    /** Fires when the user starts drawing. */
    on(type: "draw-start", listener: (event: { target: esri.toolbars.ImageServiceMeasureTool }) => void): esri.Handle;
    /** Fires when the measure operation has been performed. */
    on(type: "measure-end", listener: (event: { measureResult: any; target: esri.toolbars.ImageServiceMeasureTool }) => void): esri.Handle;
    /** Fires when the unit has been changed. */
    on(type: "unit-change", listener: (event: { measureResult: any; target: esri.toolbars.ImageServiceMeasureTool }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.toolbars.ImageServiceMeasureTool;

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
    lineSymbol: SimpleLineesri.symbols.Symbol;
    /** esri.symbols.Symbol to be used when drawing a esri.geometry.Point or Multipoint. */
    markerSymbol: SimpleMarkeresri.symbols.Symbol;
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
    /** Fired when the user has completed drawing. */
    on(type: "draw-complete", listener: (event: { geographicGeometry: esri.geometry.Geometry; geometry: esri.geometry.Geometry; target: Draw }) => void): esri.Handle;
    /** This event is deprecated. */
    on(type: "draw-end", listener: (event: { geometry: esri.geometry.Geometry; target: Draw }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

  /** The esri.toolbars.Edit toolbar is a helper class that provides functionality to move graphics or modify individual vertices, i.e., edit the geometry of existing graphics. */
  class esri.toolbars.Edit {
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
     * Creates a new esri.toolbars.Edit object.
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
    on(type: "activate", listener: (event: { graphic: esri.Graphic; tool: string; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Deactivates the toolbar and reactivates map navigation. */
    on(type: "deactivate", listener: (event: { graphic: esri.Graphic; info: any; tool: string; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fires when a graphic is clicked. */
    on(type: "graphic-click", listener: (event: { graphic: esri.Graphic; info: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fires when the user begins to move a graphic. */
    on(type: "graphic-first-move", listener: (event: { graphic: esri.Graphic; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fired continuously as the graphic moves. */
    on(type: "graphic-move", listener: (event: { graphic: esri.Graphic; transform: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fired when the mouse button is pressed down on the graphic, usually while moving a graphic. */
    on(type: "graphic-move-start", listener: (event: { graphic: esri.Graphic; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fired when the mouse button is released, usually after moving the graphic. */
    on(type: "graphic-move-stop", listener: (event: { graphic: esri.Graphic; transform: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fires continuously as a graphic is rotated. */
    on(type: "rotate", listener: (event: { graphic: esri.Graphic; info: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fires when the user begins to drag a handle to rotate the graphic. */
    on(type: "rotate-first-move", listener: (event: { graphic: esri.Graphic; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fires when a user clicks on the handle to begin rotating a graphic. */
    on(type: "rotate-start", listener: (event: { graphic: esri.Graphic; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fires when the mouse button is released from the rotate handle to finish rotating the graphic. */
    on(type: "rotate-stop", listener: (event: { graphic: esri.Graphic; info: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fires continuously as the graphic is being scaled. */
    on(type: "scale", listener: (event: { graphic: esri.Graphic; info: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fires when the user begins to drag a handle to scale the graphic. */
    on(type: "scale-first-move", listener: (event: { graphic: esri.Graphic; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fires when a user clicks on the handle to scale or resize a graphic. */
    on(type: "scale-start", listener: (event: { graphic: esri.Graphic; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fires when the mouse button is released from the scale handle to finish scaling the graphic. */
    on(type: "scale-stop", listener: (event: { graphic: esri.Graphic; info: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fired after a new vertex is added to a polyline or polygon or a new point is added to a multipoint. */
    on(type: "vertex-add", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fired when the mouse button is clicked on the vertex of a polyline or polygon or a point in a multipoint. */
    on(type: "vertex-click", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fired after a vertex(polyline, polygon) or point(multipoint) is deleted. */
    on(type: "vertex-delete", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fired when the user begins to move the vertex of a polyline or polygon or a point of a multipoint. */
    on(type: "vertex-first-move", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fires as the mouse exits a vertex(polyline, polygon) or a point(multipoint). */
    on(type: "vertex-mouse-out", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fired when the mouse moves over a vertex (polyline, polygon) or point (multipoint). */
    on(type: "vertex-mouse-over", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fired continuously as the user is moving a vertex (polyline, polygon) or point (multipoint). */
    on(type: "vertex-move", listener: (event: { graphic: esri.Graphic; transform: any; vertexinfo: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fired when the mouse button is pressed down on a vertex (polyline, polygon) or point (multipoint). */
    on(type: "vertex-move-start", listener: (event: { graphic: esri.Graphic; vertexinfo: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    /** Fired when the mouse button is released from a vertex (polyline, polygon) or point(multipoint). */
    on(type: "vertex-move-stop", listener: (event: { graphic: esri.Graphic; transform: any; vertexinfo: any; target: esri.toolbars.Edit }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = esri.toolbars.Edit;

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
    /** Zoom to initial extent of base layer. */
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
  export class VEGeocoder {
    /** Specifies the culture in which to return results. */
    culture: string;
    /**
     * Creates a new VEGeocoder object.
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
    on(type: "address-to-locations-complete", listener: (event: { geocodeResults: esri.virtualearth.VEGeocodeResult[]; target: VEGeocoder }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: VEGeocoder }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }

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
}
