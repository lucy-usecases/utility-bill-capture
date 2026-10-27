
import { IWidgetTemplate } from 'widget-designer/components';
import BundleConfig from '../bundle.json';
import LocalizationMessages from '../localization.json';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IContextProvider } from 'uxp/components';

// window interface
interface ILayout {
    w?: number,
    h?: number,
    isDraggable?: boolean,
    isResizable?: boolean,
    maxH?: number,
    maxW?: number,
    minH?: number,
    minW?: number,
    static?: boolean
}

interface IContainer {
    background?: string
}

interface IWidgetPropConfig {
    name: string,
    label: string,
    type: 'text' | 'string' | 'password' | 'number' | 'email' | 'checkbox' | 'toggle' | 'select' | 'date' | 'time' | 'json',
    value?: string | number | boolean,
    placeholder?: string,
    options?: Array<{ label: string, value: string }>,

    validate?: {
        required?: boolean // default is false 
        allowEmptyString?: boolean // trim value. only for string values 
        minLength?: number
        maxLength?: number
        regExp?: RegExp
        allowZeros?: boolean // on;y applicable to numbers 
        minVal?: number
        maxVal?: number
        customValidateFunction?: (value: any) => { valid: boolean, error?: string }// this is to give a custom validate function, which takes the value and return a boolean indicating value is valid or not
    }
}
export interface IConfigPanelProps {
    configs: any // configred props 
    uxpContext: IContextProvider,
    instanceId: string,
    onSubmit: (data: { [key: string]: any }) => void
    onCancel?: () => void
}
type IWidgetPreloader = 'default' | 'line-chart' | 'bar-chart' | 'donut-chart' | 'heatmap-chart' | 'gauge' | 'map'

interface IWidgetConfig {
    layout?: ILayout
    props?: IWidgetPropConfig[],
    configPanel?: React.FunctionComponent<IConfigPanelProps>,
    preLoader?: IWidgetPreloader
}

interface IWidgetObject {
    id: string,
    widget: any,
    configs?: IWidgetConfig
    defaultProps?: { [propName: string]: any }
    external?: {
        styles?: { [key: string]: string }
        scripts?: { [key: string]: string }
    }
    isTemplate?: boolean,
    isDefaultTemplate?: boolean
}
type SidebarLinkClick = () => void;

export interface ISidebarLinkProps {
    onClose: () => void;
    uxpContext: IContextProvider
}
interface IMenuPanelProps {
    uxpContext: IContextProvider
}
interface ISidebarLink {
    id: string,
    click?: SidebarLinkClick
    component?: React.FunctionComponent<ISidebarLinkProps> | React.Component<ISidebarLinkProps, {}>,
    link?: string,
    // target?: string,
    // icon?: string,
    // label: string,
}
interface IMenuItem {
    id: string,
    title?: string,
    content: () => JSX.Element
    link?: string,
    component?: React.FunctionComponent<ISidebarLinkProps> | React.Component<ISidebarLinkProps, {}>,
    menuPanel?: React.FunctionComponent<IMenuPanelProps> | React.Component<IMenuPanelProps, {}>
}

export interface ICustomUIProps {
    uxpContext: IContextProvider
}
interface IRenderUIItemProps {
    id: string,
    component: any,
    uiProps?: any,
    /**
     * @deprecated in V5 all UIs will be rendered within the base layout - all will have the header and sidebar
     */
    showDefaultHeader?: boolean
}
interface IComponentObject {
    id: string;
    component: any;
    /**
     * Optional — can also be declared in bundle.json.
     * If provided in code it takes precedence over bundle.json.
     */
    modes?: Array<'widget' | 'ui' | 'background-surface'>;
    configs?: IWidgetConfig;
    defaultProps?: { [key: string]: any };
}

declare global {
    interface Window {
        registerWidget(config: IWidgetObject): void;
        registerLink(config: ISidebarLink): void;
        registerUI(config: IRenderUIItemProps): void;
        registerMenuItem(config: IMenuItem): void;
        registerComponent(config: IComponentObject & { id: string }): void;
        registerTabInjection(config: Record<string, any>): void;
    }
}


interface IWidgetManager {
    loadFromMarketPlace: boolean;
    url: string;
}

interface Language {
    Name: string,
    Code: string,
    Direction: 'ltr' | 'rtl'
}

interface ThemeDetails {
    name: string,
    type: ThemeType,
    props: IThemeProps
}

interface ICustomThemes {
    [name: string]: IThemeProps | ThemeDetails
}

interface UserDetails {
    LoginID: string;
    FirstName: string;
    LastName: string;
    FullName: string;
    ProfileImageName: string;
    UserType: string;
    Phone: string;
    Email: string;
    OfficePhone: string;
    SiteKey: string;
    TimeFormat: string;
    DateFormat: string;
    CurrencyFormat: string;
    Language: string;
    UserGroupKey: string;
    IsLoginDisabled: string;
    IdentificationNumber: string;
    InheritanceUserKey: string;
    LegalName: string;
    LastLoginDate: string;
    IsHiddenByConversion: string;
    Hidden: string;
    IsBlacklist: string;
    IsAnonymous: string;
    UserKey: string;
    ObjectID: string;
    ObjectKey: string;
    __key__: string;
    DisplayName: string;
    ObjectID1: string;
    UserGroupID: string;
    InheritUserName: string;
    InheritanceUserDisplayName: string;
}
interface IPartialContextProvider {

    fullAccountUrl: string;
    lucyUrl: string;
    apiKey: string;
    onLogout?: () => void,

    language?: string
    enabledLanguages?: Language[]

    themeName?: string,
    customThemes?: ICustomThemes,
    theme?: IThemeProps,
    setTheme?: (name: string, config: IThemeProps, type: ThemeType) => void
    themeType?: ThemeType

    userKey: string;
    appRoles?: { [app: string]: string[] }
    userDetails?: UserDetails;
    userSiteTimeZoneName?: string,
    userTimezoneCode?: string,
    userSiteTimeZoneOffsetInSeconds?: number,
    userSiteKey?: string,
    userSiteName?: string,
    userSiteImageKey?: string,
    userDataFormat?: string,
    userTimeFormat?: string,
    userCurrencyFormat?: string,

    maxFileUploadSize?: number
}

/**
 * Options for executing Lucy Actions
 */
interface ILucyActionExecutionOptions {
    /** Set this to true to parse the data as JSON and return it */
    json?: boolean;
    // unique key for the request 
    // better to have a combination of instance id and some text  (<instanceId>-<some-text>) to keep the uniqueness 
    // this key will be used when caching (coming soon :)) and cancelling previous requests 
    key?: string

    // cancel the previous request if a new request comes with the same key (above). 
    // default is false
    cancelPrevious?: boolean,

    // to skip batching and execute separately, set to true. 
    // default is false
    executeImmidiately?: boolean
}

type IDataFunction = (max: number, lastPageToken: string, args?: any) => Promise<{ items: Array<any>, pageToken: string }>;

type IShowUITypes = "popup" | "tab"
interface IShowUIOptions {
    target?: "_blank" | "_self"
}

interface IThemeProps {

    /** colors */
    /**
     * Primary color for the layout 
     * Header and sidebar will use these colors 
     * Also based on the design (figma) in some otherplaces also we have this color (EX: count in views dropdown list and add new custom view button)
     */
    portalHeaderBGColor: string,
    portalHeaderTextColor: string,

    /**
     * background color of the page 
     */
    portalBGColor: string,

    /**
     * accent color
     */
    accentColor: string,


    /**
     * border color 
     */
    borderColor: string,
    /**
     * box shadow color
     */
    boxShadowColor: string,

    /**
     * for disabled items 
     */
    disabledBGColor: string,
    disabledTextColor: string,

    /**
     * for selected items 
     */
    selectedBGColor: string
    selectedTextColor: string

    /**
     * for highlighting items (like on mouse over)
     */
    highlightBGColor: string,
    highlightTextColor: string,


    /**
     * these are the colors for content
     */
    primaryBGColor: string,
    primaryTextColor: string,
    secondaryBGColor: string,
    secondaryTextColor: string,

    // item selection
    selectedItemBGColor: string,

    // table
    tableHeaderBGColor: string,

    /**
     * buttons
     *  */
    primaryButtonBGColor: string,
    primaryButtonTextColor: string,
    primaryButtonBorderColor: string,
    primaryButtonHoverBGColor: string,
    primaryButtonHoverTextColor: string,
    primaryButtonHoverBorderColor: string
    primaryButtonActiveBGColor: string,
    primaryButtonActiveTextColor: string
    primaryButtonActiveBorderColor: string

    secondaryButtonBGColor: string,
    secondaryButtonTextColor: string,
    secondaryButtonBorderColor: string,
    secondaryButtonHoverBGColor: string,
    secondaryButtonHoverTextColor: string,
    secondaryButtonHoverBorderColor: string,
    secondaryButtonActiveBGColor: string,
    secondaryButtonActiveTextColor: string
    secondaryButtonActiveBorderColor: string,

    dangerButtonBGColor: string,
    dangerButtonTextColor: string,
    dangerButtonBorderColor: string,
    dangerButtonHoverBGColor: string,
    dangerButtonHoverTextColor: string,
    dangerButtonHoverBorderColor: string,
    dangerButtonActiveBGColor: string,
    dangerButtonActiveTextColor: string
    dangerButtonActiveBorderColor: string,

    inputBGColor: string,
    inputTextColor: string,
    inputBorderColor: string,
    inputActiveBGColor: string,
    inputActiveTextColor: string,
    inputActiveBorderColor: string,
    inputValidBGColor: string
    inputValidTextColor: string
    inputValidBorderColor: string
    inputInvalidBGColor: string
    inputInvalidTextColor: string
    inputInvalidBorderColor: string

    /**
     * Toast notifications
     *  */
    toastSuccessBGColor: string,
    toastSuccessTextColor: string,
    toastErrorBGColor: string,
    toastErrorTextColor: string,
    toastWarningBGColor: string,
    toastWarningTextColor: string,
    toastInfoBGColor: string,
    toastInfoTextColor: string,

    /**
     * Alerts
     *  */
    alertSuccessBGColor: string,
    alertSuccessBorderColor: string,
    alertSuccessTextColor: string,
    alertErrorBGColor: string,
    alertErrorBorderColor: string,
    alertErrorTextColor: string,
    alertWarningBGColor: string,
    alertWarningBorderColor: string,
    alertWarningTextColor: string,
    alertInfoBGColor: string,
    alertInfoBorderColor: string,
    alertInfoTextColor: string,

    alertCancelButtonBGColor: string,
    alertCancelButtonHoverBGColor: string,
    alertCancelButtonTextColor: string,

    alertConfirmButtonBGColor: string,
    alertConfirmButtonHoverBGColor: string,
    alertConfirmButtonTextColor: string,

    alertSuccessConfirmButtonBGColor: string,
    alertSuccessConfirmButtonHoverBGColor: string,
    alertSuccessConfirmButtonTextColor: string,

    alertErrorConfirmButtonBGColor: string,
    alertErrorConfirmButtonHoverBGColor: string,
    alertErrorConfirmButtonTextColor: string

    alertInfoConfirmButtonBGColor: string,
    alertInfoConfirmButtonHoverBGColor: string,
    alertInfoConfirmButtonTextColor: string,

    alertWarningConfirmButtonBGColor: string,
    alertWarningConfirmButtonHoverBGColor: string,
    alertWarningConfirmButtonTextColor: string

    badgeBGColor: string,
    badgeTextColor: string,


    //lists
    secondaryRowColor: string,

    // status 
    activeStatusBGColor: string,
    activeStatusTextColor: string,
    inactiveStatusBGColor: string,
    inactiveStatusTextColor: string,

    pendingStatusColor: string,
    onGoingStatusColor: string,
    completedStatusColor: string,
    approvedStatusColor: string,
    rejectedStatusColor: string,
    onHoldStatusColor: string,
    parkedStatusColor: string,

    // priority
    lowPriorityColor: string,
    mediumPriorityColor: string,
    highPriorityColor: string,
    urgentPriorityColor: string,

    // chart colors 
    chartColor1: string,
    chartColor2: string,
    chartColor3: string,
    chartColor4: string,
    chartColor5: string,
    chartColor6: string,
    chartColor7: string,
    chartColor8: string,
    chartColor9: string,
    chartColor10: string,
    chartColor11: string,
    chartColor12: string,
    chartColor13: string,
    chartColor14: string,
    chartColor15: string,

}

declare enum ThemeType {
    Light = 'Light',
    Dark = 'Dark'
}

/* ────────────────────────────────────────────────────────────────────────────
 * V5 registration API
 *
 * `registerComponent` and `registerTabInjection` are the primary registration
 * functions — use them for all new code. Metadata lives in bundle.json
 * (`components[]` / `objectTabs[]`); code registers only the partial id plus
 * anything JSON can't hold (component references, configs).
 *
 * `registerWidget`, `registerUI`, `registerLink`, `registerMenuItem` below are
 * deprecated V4 adapters kept only so migrated code keeps compiling. Their
 * bundle.json arrays (`widgets`, `uis`, `sidebarLinks`, `menuItems`) no longer
 * exist in V5 scaffolds.
 * ──────────────────────────────────────────────────────────────────────────── */

/**
 * @deprecated V4 adapter. Use `registerComponent` with `modes: ['widget']` instead —
 * metadata lives in bundle.json `components[]` (the legacy `widgets[]` array no longer
 * exists in V5 scaffolds).
 *
 * @example
 * // bundle.json — add the component entry with metadata
 * // { "id": "my-widget", "name": "My Widget", "description": "...", "modes": ["widget"] }
 *
 * registerComponent({
 *     id: 'my-widget',   // must match the id in bundle.json
 *     component: MyWidget,
 *     configs: {
 *         layout: { w: 12, h: 8 },
 *         props: []
 *     }
 * });
 */
export function registerWidget(_widget: IWidgetObject) {
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    console.warn(`[UXP] registerWidget is deprecated — use registerComponent with modes: ['widget'] (metadata in bundle.json components[]).`);

    const id = (BundleConfig.id + '/widget/' + _widget.id).toLowerCase();
    // Legacy widgets[] array — absent in V5 scaffolds; merge it only if present.
    const _widgetDetails = (BundleConfig as any).widgets?.find((w: any) => w.id == _widget.id);
    if (!_widgetDetails) {
        console.warn(`[UXP] Widget '${_widget.id}' has no bundle.json widgets[] entry — declare it in components[] and use registerComponent instead.`);
    }
    window.registerWidget({ ..._widget, ...(_widgetDetails || {}), ...{ id } });
}

/**
 * @deprecated Removed in V5 — navigation is config-driven. Define links in
 * `Configuration.yml` → `navigationLinks` instead. This function is a no-op.
 */
export function registerLink(_link: ISidebarLink) {
    console.warn('[UXP] registerLink is deprecated and has no effect in V5. Define navigation links in Configuration.yml → navigationLinks.');
}

/**
 * @deprecated Removed in V5 — menu items are not supported. This function is a no-op.
 */
export function registerMenuItem(_menuItem: IMenuItem) {
    console.warn('[UXP] registerMenuItem is deprecated and has no effect in V5.');
}

/**
 * @deprecated V4 adapter. Use `registerComponent` with `modes: ['ui']` instead —
 * metadata lives in bundle.json `components[]` (the legacy `uis[]` array no longer
 * exists in V5 scaffolds).
 *
 * @example
 * // bundle.json — add the component entry with metadata
 * // { "id": "my-view", "name": "My View", "description": "...", "modes": ["ui"] }
 *
 * registerComponent({
 *     id: 'my-view',   // must match the id in bundle.json
 *     component: MyView,
 *     configs: { props: [] }
 * });
 */
export function registerUI(_ui: IRenderUIItemProps) {
    if (!window.registerUI) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    console.warn(`[UXP] registerUI is deprecated — use registerComponent with modes: ['ui'] (metadata in bundle.json components[]).`);

    const id = (BundleConfig.id + '/ui/' + _ui.id).toLowerCase();
    // Legacy uis[] array — absent in V5 scaffolds; merge it only if present.
    const _uiDetails = (BundleConfig as any).uis?.find((s: any) => s.id == _ui.id);
    if (!_uiDetails) {
        console.warn(`[UXP] UI '${_ui.id}' has no bundle.json uis[] entry — declare it in components[] and use registerComponent instead.`);
    }
    window.registerUI({ ..._ui, ...(_uiDetails || {}), ...{ id } });
}

export function registerComponent(_component: IComponentObject) {
    if (!window.registerComponent) {
        console.error('This code is not being run within the context of UXP');
        return;
    }

    // Look up serializable metadata from bundle.json.
    // bundle.json owns: name, description, modes, isTemplate, layout, tags, vendor, icon.
    // Code owns: component, configs.props/configPanel, defaultProps.
    const bundleEntry = (BundleConfig.components as any[])?.find(c => c.id === _component.id);
    if (!bundleEntry) {
        console.warn(
            `[UXP] Component '${_component.id}' not found in bundle.json. ` +
            `Add it so metadata (name, modes, tags, layout etc.) is available when the module is uploaded.`
        );
    }

    // Fully-qualified id: bundleId/componentId
    const id = `${BundleConfig.id}/${_component.id}`.toLowerCase();

    // Merge: bundle.json is the base, code spreads on top (code wins on conflicts).
    // Qualified id always wins last.
    const merged = {
        ...(bundleEntry || {}),
        ..._component,
        id,
    };

    window.registerComponent(merged);
}

/**
 * Register an injected object-detail tab (a tab your app contributes to another object
 * type's details page). Same pattern as registerComponent:
 * bundle.json `objectTabs` owns the metadata (objectType, name, icon, componentId, roles,
 * priority, showUnauthorizedError); pass only the partial id here — the composite
 * `bundleId/tabId` id and the namespaced componentId are generated in this wrapper.
 *
 * Example:
 *   registerTabInjection({ id: 'my-asset-tab' });
 */
export function registerTabInjection(_tab: { id: string } & Record<string, any>) {
    if (!window.registerTabInjection) {
        console.error('This code is not being run within the context of UXP');
        return;
    }

    const entry = (BundleConfig as any).objectTabs?.find((t: any) => t.id === _tab.id);
    if (!entry) {
        console.warn(
            `[UXP] Tab '${_tab.id}' not found in bundle.json objectTabs. ` +
            `Add it so metadata (objectType, name, componentId, roles etc.) is available.`
        );
    }

    // Fully-qualified ids: bundleId/tabId and bundleId/componentId
    const id = `${BundleConfig.id}/${_tab.id}`.toLowerCase();
    const componentId = entry?.componentId ? `${BundleConfig.id}/${entry.componentId}`.toLowerCase() : _tab.componentId;

    // Merge: bundle.json is the base, code spreads on top, qualified ids win last.
    const merged = {
        ...(entry || {}),
        ..._tab,
        id,
        componentId,
    };

    window.registerTabInjection(merged);
}

export function enableLocalization() {
    (window as any).registerLocalization(LocalizationMessages)
}

export const getUrlFriendlyString = (string: string, removeSlashes?: boolean): string => {
    const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;"
    const to = "aaaaaeeeeeiiiiooooouuuunc------"

    const newText = string.split('').map(
        (letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)))

    return newText
        .toString()                     // Cast to string
        .toLowerCase()                  // Convert the string to lowercase letters
        .trim()                         // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/'/g, '-e')           // Replace single quates with -
        .replace(/&/g, '-and-')           // Replace & with 'and'
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}

export function registerCustomWidgetTemplate(template: IWidgetTemplate) {
    let id = getUrlFriendlyString(template.id)
    if (!template.icon) template.icon = ['fad', 'align-justify'] as IconProp

    // Register with the designer so it appears in the template picker
    ;(window as any).registerCustomWidgetTemplate(template)

    // Also register in the unified component registry so it appears in the widget drawer
    registerComponent({
        id,
        component: template.template,
        modes: ['widget'],
        configs: {
            layout: template.layout || { w: 10, h: 10 },
            props: [{ name: 'uiProps', label: 'UI', type: 'json' }],
            preLoader: template?.preLoader || 'default',
            isTemplate: true,
            isDefaultTemplate: false,
        } as any,
        defaultProps: { uiProps: {} }
    })
}