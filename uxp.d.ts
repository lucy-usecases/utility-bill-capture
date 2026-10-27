declare module "uxp/components" {
    
    /**
     * @export
     * Props for the SkeletonLoader component
     */
    export interface SkeletonLoaderProps {
        /**
         * Width of the skeleton loader. Can be a CSS unit (e.g., '100%', '200px').
         * Defaults to '100%'.
         */
        width?: string;
    
        /**
         * Height of the skeleton loader. Can be a CSS unit (e.g., '1rem', '20px').
         * Defaults to '1rem'.
         */
        height?: string;
    
        /**
         * Additional CSS styles to apply to the skeleton loader.
         */
        additionalStyle?: React.CSSProperties;
    
        /**
         * Additional class names to apply to the skeleton loader.
         */
        className?: string;
    }
        
    /**
     * @export
     * Options that can be passed to Loaders
     */
    export interface IWidgetPreloaderLoaderProps {
        children?: React.ReactNode
    }
        
    /**
     * @export
     * TreeView skeleton loader props
     */
    export interface ITreeViewLoaderProps extends IWidgetPreloaderLoaderProps {
        /**
         * If true, renders compact version with fewer nodes (for expanding state)
         */
        compact?: boolean
    }
        
    /**
     * @export
     */
    export interface FontAwesomIconWrapperProps extends FontAwesomeIconProps {
        /**
         * props for skeleton loader
         */
        skeletonLoader?: SkeletonLoaderProps;
    }
        
    /**
     * Props for FontAwesome icons
     * Extends FontAwesome's own props with our base props
     */
    export interface FontAwesomeIconProps extends BaseIconProps {
        /**
         * FontAwesome icon in IconProp format or string format
         * @example ['fas', 'save']
         * @example "fas save"
         */
        icon: IconProp | string;
    
        /**
         * Icon size - FontAwesome size prop
         */
        size?: FAIconProps['size'];
    }
        
    /**
     * Base icon props shared by all icon types
     */
    export interface BaseIconProps extends AnimationProps {
        /**
         * Icon color - any CSS color value
         */
        color?: string;
    
        /**
         * Additional CSS class name
         */
        className?: string;
    
        /**
         * Inline styles
         */
        style?: CSSProperties;
    
        /**
         * Show loading state
         */
        isLoading?: boolean;
    
        /**
         * Props for skeleton loader shown while icon loads
         */
        skeletonLoader?: SkeletonLoaderProps;
    
        /**
         * Flip icon horizontally, vertically, or both
         */
        flip?: FlipProp;
    
        /**
         * Rotate icon by degrees
         */
        rotation?: RotateProp;
    }
        
    /**
     * Common animation props shared by FontAwesome and Phosphor icons
     */
    export interface AnimationProps {
        /**
         * Animate icon with spinning effect
         */
        spin?: boolean;
    
        /**
         * Animate icon with pulsing effect
         */
        pulse?: boolean;
    
        /**
         * Animate icon with beat effect
         */
        beat?: boolean;
    
        /**
         * Animate icon with bounce effect
         */
        bounce?: boolean;
    
        /**
         * Animate icon with shake effect
         */
        shake?: boolean;
    
        /**
         * Animate icon with fade effect
         */
        fade?: boolean;
    }
        
    
    export interface LoadingFeedbackProps {
        /** Show/hide the loading overlay */
        show: boolean
        /** Main message to display */
        message?: string
        /** Optional submessage or description */
        submessage?: string
        /** Progress percentage (0-100) - optional */
        progress?: number
        /** Custom icon - defaults to spinner */
        icon?: any
    }
        
    /**
     * @export
     */
    export interface TabComponentProps {
        /**
         * tabs
         */
        tabs: Tab[]
        /**
         * selected tab id
         */
        selected: string,
        /**
         * on change tab
         */
        onChangeTab: (tab: string) => void,
    
        /**
         * direction of tabs
         */
        direction?: 'vertical' | 'horizontal',
    
        /**
         * position of tabs
         */
        position?: 'top' | 'bottom' | 'left' | 'right'
    
        /**
         * tab component styles
         */
        styles?: TabComponentStyles,
        /**
         * additional classname
         */
        className?: string
    }
        
    /**
     * @export
     */
    export interface Tab {
        /**
         * id of the tab
         */
        id: string,
        /**
         * label of the tab
         */
        label: string | React.ReactNode,
        /**
         * tab icon
         */
        icon?: string,
        /**
         * tab content
         */
        content: React.ReactNode,
        /**
         * optional property to highlight a tab
         */
        highlight?: boolean,
    
        /**
         * optional prop to disabled a tab
         */
        disabled?: boolean
    }
        
    /**
     * @export
     */
    export interface TabComponentStyles {
        /**
         * alignment of the tabs
         * default -left
         */
        align?: 'center' | 'left' | 'right' | 'fill',
        /**
         * background color of the tab header
         * default - primaryBGColor
         */
        tabHeaderBackgroundColor?: string
        /**
         * height of the tab header
         * default - 40px
         */
        tabHeaderHeight?: string,
        /**
         * padding of the tab header
         * default - 0
         */
        tabHeaderPadding?: string
        /**
         * gap between tabs
         * defualt - 0
         */
        tabHeaderGap?: string
        /**
         * padding of the tab
         * default - 15px 20px
         */
        tabPadding?: string
        /**
         * border radius of the tab
         * defualt - 0
         */
        tabBorderRadius?: string
        /**
         * background color of the tab
         * defualt - primaryBGColor
         */
        tabBackgroundColor?: string,
        /**
         * text color of the tab
         * defualt - primaryTextColor
         */
        tabTextColor?: string,
        /**
         * font size of the tab label
         * default - 13px
         */
        tabContentFontSize?: string
        /**
         * icon size
         * default - 20px
         */
        tabContentIconSize?: string
        /**
         * selected tab background color
         * defualt - primaryTextColor
         */
        selectedTabBackgroundColor?: string,
        /**
         * selected tab text color
         * defualt - primaryBGColor
         */
        selectedTabTextColor?: string,
        /**
         * background color of the tab when hovering
         * defualt - secondaryBGColor
         */
        tabHoverBackgroundColor?: string
        /**
         * text color of the tab when hovering
         * defualt - secondaryTextColor
         */
        tabHoverTextColor?: string
        /**
         * aligment of the tab contnet
         * default - left
         */
        tabContentAlignment?: 'center' | 'left' | 'right'
        /**
         * background color of the contnet panel
         * default - primaryBGColor
         */
        contentBackgroundColor?: string,
        /**
         * text color of the content panel
         * default is primaryTextColor
         */
        contentTextColor?: string,
        /**
         * content area padding
         * default - 5px
         */
        contentPadding?: string,
        /**
         * option to hide the indicator at the bottom of the active tab
         * default - false
         */
        hideIndicator?: boolean
        /**
         * height of the indicator
         * default - 2px
         */
        indicatorHeight?: string,
        /**
         * width of the indicator
         * default - 50%
         */
        indicatorWidth?: string,
    
        indicatorColor?:string
        /**
         * border radius of the indicator
         * default - 0
         */
        indicatorBorderRadius?: string,
    
        /**
         * colors to highlight tabs other than the selected tab
         */
        tabHighlightBackgroundColor?: string,
        /**
         * colors to highlight tabs other than the selected tab
         */
        tabHighlightTextColor?: string,
    
        /**
         * colors for disabled tabs
         */
        disabledTabBackgroundColor?: string,
        /**
         * colors for disabled tabs
         */
        disabledTabTextColor?: string,
    }
        
    
    export interface IFormFieldProps {
        /**Set this to true to have multiple fields in a single horizontal line */
        inline?: boolean,
        /**
         * Any extra css classes to attach to the field
         */
        className?: string,
    
        /**
         * A background color to set for the field
         */
        backgroundColor?: string,
        /**
         * Additional inline styles
         */
        style?: React.CSSProperties,
        /**
         * Remove padding from the field
         */
        noPadding?: boolean,
        /**
         * Remove margin from the field
         */
        noMargin?: boolean,
        /**
         * Remove all margins except bottom margin
         */
        marginBottomOnly?: boolean,
        children?: React.ReactNode;
    }
        
    
    export interface ILabelProps {
        labelFor?: string,
        className?: string,
        inline?: boolean,
        styles?: React.CSSProperties,
        icon?: string;
        children?: React.ReactNode
    }
        
    /**
     * @export
     */
    export interface PHIconWrapperProps {
        /**
         * Icon name or tuple of [prefix, iconName]
         * @example 'house'
         * @example ['phb', 'house']
         * @example ['phf', 'heart']
         */
        icon: PHIconProp;
    
        /**
         * Icon size - supports FontAwesome size strings, numbers, or CSS units
         * @example "lg"
         * @example "2x"
         * @example 24
         * @example "2rem"
         */
        size?: SizeProp | number | string;
    
        /**
         * Icon color - any CSS color value
         * @example "red"
         * @example "#ff0000"
         * @example "currentColor"
         */
        color?: string;
    
        /**
         * Additional CSS class name
         */
        className?: string;
    
        /**
         * Inline styles
         */
        style?: CSSProperties;
    
        /**
         * Flip icon horizontally, vertically, or both
         */
        flip?: FlipProp;
    
        /**
         * Rotate icon by degrees
         */
        rotation?: RotateProp;
    
        /**
         * Animate icon with spinning effect
         */
        spin?: boolean;
    
        /**
         * Animate icon with pulsing effect
         */
        pulse?: boolean;
    
        /**
         * Animate icon with beat effect
         */
        beat?: boolean;
    
        /**
         * Animate icon with bounce effect
         */
        bounce?: boolean;
    
        /**
         * Animate icon with shake effect
         */
        shake?: boolean;
    
        /**
         * Animate icon with fade effect
         */
        fade?: boolean;
    
        /**
         * Add border around icon
         */
        border?: boolean;
    
        /**
         * Set icon to fixed width (useful for aligning icons in lists)
         */
        fixedWidth?: boolean;
    
        /**
         * Props for skeleton loader shown while icon loads
         */
        skeletonLoader?: SkeletonLoaderProps;
    }
        
    /**
     * Phosphor icon prop - similar to FontAwesome's IconProp
     * Can be:
     * - string: icon name (uses regular weight)
     * - [prefix, iconName]: tuple with weight prefix and icon name
     */
    export type PHIconProp = string | [PHIconPrefix, string];
        
    /**
     * Phosphor icon prefix (weight indicator)
     * - pht: thin
     * - phl: light
     * - phr: regular (default)
     * - phb: bold
     * - phf: fill
     * - phd: duotone
     */
    export type PHIconPrefix = 'pht' | 'phl' | 'phr' | 'phb' | 'phf' | 'phd';
        
    /**
     * Universal Icon component props
     * Accepts any icon type: FontAwesome, Phosphor, Image URL, Text/Emoji, or React element
     */
    export type IconProps =
        | FontAwesomeIconProps
        | PhosphorIconProps
        | ImageIconProps
        | TextIconProps
        | (BaseIconProps & { icon: ReactElement });
        
    /**
     * Props for Phosphor icons
     */
    export interface PhosphorIconProps extends BaseIconProps {
        /**
         * Phosphor icon in PHIconProp format or string format
         * @example ['phb', 'house']
         * @example "phb house"
         * @example "house"
         */
        icon: PHIconProp | string;
    
        /**
         * Icon size - supports FontAwesome size strings, numbers, or CSS units
         */
        size?: SizeProp | number | string;
    }
        
    /**
     * Props for image-based icons (URLs, data URIs)
     */
    export interface ImageIconProps extends BaseIconProps {
        /**
         * Image URL or data URI
         * @example "https://example.com/icon.svg"
         * @example "data:image/svg+xml;base64,..."
         */
        icon: string;
    
        /**
         * Icon size - supports FontAwesome size strings, numbers, or CSS units
         */
        size?: SizeProp | number | string;
    
        /**
         * Explicit width (overrides size)
         */
        width?: number | string;
    
        /**
         * Explicit height (overrides size)
         */
        height?: number | string;
    }
        
    /**
     * Props for text/emoji icons
     */
    export interface TextIconProps extends BaseIconProps {
        /**
         * Text or emoji character(s)
         * @example "×"
         * @example "💾"
         */
        icon: string;
    
        /**
         * Icon size - supports FontAwesome size strings, numbers, or CSS units
         */
        size?: SizeProp | number | string;
    
        /**
         * Font size (overrides size for text)
         */
        fontSize?: number | string;
    }
        
    /**
     * @export
     * Options that can be passed to a portal container component
     */
    export interface IPortalContainerProps {
        /**
         * create a backdrop if true
         */
        hasBackdrop?: boolean,
    
        /**
         * callback function to click on backdrop
         */
        onClickBackdrop?: (e?: React.MouseEvent<HTMLDivElement>) => void,
    
        /**
         * additional styles to backdrop
         */
        backdropStyles?: any
        /**
         * disabled the scrolling of main content block if true
         * default value is true
         * DEPRECATED
         */
        disableScroll?: boolean,
        className?: string;
        children?: React.ReactNode;
    }
        
    /**
     * @export
     * Props for the Transition component.
     */
    export interface TransitionProps {
        /**
         * The child element to apply the transition to, must be a single React element.
         */
        children: React.ReactElement;
    
        /**
         * Base class name for transition states (e.g., 'my-transition' for 'my-transition-enter').
         */
        className: string;
    
        /**
         * Controls whether the transition is in the entered (true) or exited (false) state.
         */
        in: boolean;
    
        /**
         * Duration of the transition animation in milliseconds.
         */
        duration: number;
    
        /**
         * If true, unmounts the child element when the transition exits. Defaults to false.
         */
        unmountOnExit?: boolean;
    }
        
    /**
     * @export
     * Props for the Dropdown component.
     */
    export interface DropdownProps {
        /**
         * Content to display inside the dropdown.
         */
        content: ReactNode;
    
        /**
         * Element or component that triggers the dropdown when clicked.
         * If externalTriggerRef is provided, this prop is optional (external trigger mode).
         */
        trigger?: ReactNode;
    
        /**
         * Optional ref to the trigger element for precise click detection.
         * @deprecated Use externalTriggerRef instead for better control
         */
        triggerElementRef?: React.MutableRefObject<HTMLDivElement>;
    
        /**
         * External trigger reference (new v5 pattern).
         * When provided, the dropdown will use this ref for positioning and click detection
         * instead of wrapping the trigger element. This allows the trigger to be a sibling.
         */
        externalTriggerRef?: React.RefObject<HTMLElement>;
    
        /**
         * Additional class names to apply to the dropdown container.
         */
        className?: string;
    
        /**
         * Additional class names to apply to the dropdown content wrapper.
         */
        contentClassName?: string;
    
        /**
         * Position of the dropdown relative to the trigger. Defaults to 'bottom-left'.
         */
        position?: DropdownPosition;
    
        /**
         * Duration of the dropdown animation in milliseconds. Defaults to 200.
         */
        duration?: number;
    
        /**
         * Controls whether the dropdown is open (controlled mode requires onToggle).
         */
        isOpen?: boolean;
    
        /**
         * Prevents the dropdown from opening if true.
         */
        preventOpening?: boolean;
    
        /**
         * Callback triggered when the dropdown is toggled (required for controlled mode).
         */
        onToggle?: () => void;
    
        /**
         * If true, shows an anchor element connecting the dropdown to the trigger. Defaults to false.
         */
        showAnchor?: boolean;
    
        /**
         * If true, makes the dropdown width match the trigger element width.
         */
        matchTriggerWidth?: boolean;
    
        /**
         * Minimum width for the dropdown. Can be number (px) or string (with units).
         */
        minWidth?: number | string;
    
        /**
         * Maximum width for the dropdown. Can be number (px) or string (with units).
         */
        maxWidth?: number | string;
    }
        
    /**
     * @export
     * Possible positions for the dropdown relative to its trigger element.
     */
    export type DropdownPosition =
        | 'bottom' | 'bottom-left' | 'bottom-right'
        | 'top' | 'top-left' | 'top-right'
        | 'right' | 'right-top' | 'right-bottom'
        | 'left' | 'left-top' | 'left-bottom'
        | 'top-left-corner' | 'bottom-left-corner' | 'top-right-corner' | 'bottom-right-corner';
        
    /**
     * @export
     * Handlers exposed by the Dropdown component for external control.
     */
    export interface DropdownHandlers {
        /**
         * Opens the dropdown.
         */
        open: () => void;
    
        /**
         * Closes the dropdown.
         */
        close: () => void;
    }
        
    /**
     * @export
     * Props for the DropdownIndicator component.
     */
    export interface DropdownIndicatorProps {
        /**
         * Indicates whether the dropdown is open, rotating the chevron icon accordingly.
         */
        isOpen: boolean;
    
        /**
         * Custom inline styles for the indicator container.
         */
        styles?: React.CSSProperties;
    
        /**
         * Additional CSS class names to apply to the indicator container.
         */
        className?: string;
    }
        
    
    export interface SearchBoxProps extends InputSizeProps, InputStateProps {
        /**
         * Default value
         */
        value: string,
        /**
        * This function is called whenever the text changes. The new text value is passed as a parameter
        */
        onChange: (newValue: string) => void,
        /**
         * Any additional class names to be included for the input field
         */
        className?: string,
        /**
         * show only a icon button when true. When click on the button it will show the actual search box
         */
        collapsed?: boolean,
        /**
         * @deprecated
         * position of search box
         */
        position?: any,
        /**
         * placeholder value
         */
        placeholder?: string
        /**
         * input will be auto focused if true
         */
        autoFocus?: boolean
    }
        
    /**
     * Common input size control props
     * @export
     */
    export interface InputSizeProps {
        /**
         * Custom minimum width for the input.
         * Can be number (converted to rem) or string with units.
         * Overrides default 8.333rem (100px) min-width.
         */
        minWidth?: number | string;
    
        /**
         * Custom maximum width for the input.
         * Can be number (converted to rem) or string with units.
         * Overrides default 33.333rem (400px) max-width.
         */
        maxWidth?: number | string;
    
        /**
         * Explicit width (sets both min and max to same value).
         * Takes precedence over minWidth/maxWidth if provided.
         */
        width?: number | string;
    
        /**
         * If true, input grows to 100% of container width (ignores min/max).
         * Useful for inline forms or flex layouts.
         */
        fullWidth?: boolean;
    
        /**
         * Explicit height. Can be number (converted to rem) or CSS string (e.g. '300px', '50%').
         * Takes precedence over minHeight/maxHeight if provided.
         */
        height?: number | string;
    
        /**
         * Custom minimum height. Can be number (converted to rem) or CSS string.
         */
        minHeight?: number | string;
    
        /**
         * Custom maximum height. Can be number (converted to rem) or CSS string.
         */
        maxHeight?: number | string;
    }
        
    /**
     * Common input state props
     * @export
     */
    export interface InputStateProps {
        /**
         * Control the disabled state of the input
         */
        disabled?: boolean;
    
        /**
         * Mark input as read-only
         */
        readOnly?: boolean;
    
        /**
         * Validation state: true (valid), false (invalid), undefined (neutral)
         */
        isValid?: boolean;
    }
        
    /**
     *
     * @export
     *
     * This component is used to render a search box.
     *
     * @example
     * ```
     *  <SearchBox
     *      value={inputValue}
     *      onChange={(newValue) => { setInputValue(newValue) }}
     *  />
     * ```
     *
     * @example
     *  <SearchBox
     *      value={inputValue}
     *      onChange={(newValue) => { setInputValue(newValue) }}
     *      collapsed
     *      position="right"
     *  />
     *
     */
    export interface SearchBoxHandlers {
        focusInput: () => void,
        getInputElement: () => React.MutableRefObject<HTMLInputElement>
    }
        
    
    export interface InputProps extends InputSizeProps, InputStateProps {
        /**
         * Input type — text, password, number, or email. Default is 'text'.
         */
        type?: InputType,
    
        /**
         * The typed text value (controlled).
         */
        value: string,
    
        /**
         * Called whenever the typed value or a prefix/suffix dropdown selection changes.
         *
         * - `value` — raw typed text (never pre-combined with prefix/suffix)
         * - `prefix` — current prefix dropdown selection, or `undefined` for non-dropdown prefix
         * - `suffix` — current suffix dropdown selection, or `undefined` for non-dropdown suffix
         *
         * @example
         * ```tsx
         * onChange={(val, prefix) => {
         *     setValue(val);
         *     if (prefix !== undefined) setCurrency(prefix);
         * }}
         * ```
         */
        onChange: (value: string, prefix?: string, suffix?: string) => void,
    
        onFocus?: () => void,
        onBlur?: (value: string) => void,
        onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, val: string) => void,
    
        className?: string,
    
        /**
         * Left-side slot. Accepts:
         * - `ReactNode` — transparent, no separator (e.g. an icon)
         * - `InputPrefixConfig` — `{ value, showSeparator? }` — opt-in separator
         * - `InputAddonDropdown` — `{ options, selected }` — selectable dropdown with separator
         */
        prefix?: InputPrefixSuffix,
    
        /**
         * Right-side slot. Same union type as `prefix`.
         */
        suffix?: InputPrefixSuffix,
    
        inputAttr?: { [key: string]: string | boolean },
        placeholder?: string,
        inline?: boolean,
        style?: React.CSSProperties,
        tabIndex?: number,
    
        /**
         * Called when the clear (×) button is clicked.
         * If omitted, the button calls `onChange('')` automatically.
         */
        onClear?: () => void,
    
        /**
         * Hide the clear button entirely (e.g. for internal sub-inputs like Clock or ColorPicker hex field).
         */
        hideClear?: boolean,
    }
        
    /**
     * Determines the behaviour of the input field
     * @export
     */
    export type InputType = "text" | "password" | "number" | "email";
        
    /**
     * @export
     * Union type for the `prefix` and `suffix` props.
     *
     * - `React.ReactNode` — rendered as-is, transparent slot, no separator
     * - `InputPrefixConfig` — `{ value, showSeparator? }` — opt-in separator
     * - `InputAddonDropdown` — `{ options, selected }` — selectable dropdown, always has separator
     */
    export type InputPrefixSuffix = React.ReactNode | InputPrefixConfig | InputAddonDropdown;
        
    /**
     * @export
     * Wrapped ReactNode config for a prefix or suffix slot.
     * Lets you render any content in the slot with optional separator styling.
     *
     * @example
     * ```tsx
     * // Static text label with separator
     * prefix={{ value: '$ ', showSeparator: true }}
     *
     * // Icon without separator (same as passing the icon directly)
     * prefix={{ value: <Icon icon={['fal', 'search']} /> }}
     * ```
     */
    export interface InputPrefixConfig {
        /** Content to render in the slot */
        value: React.ReactNode;
        /** Show secondary background + border separator. Default: false */
        showSeparator?: boolean;
    }
        
    /**
     * @export
     * Dropdown configuration for a prefix or suffix slot.
     * Always renders with the secondary background + border separator.
     * Selection fires through the Input's `onChange`.
     *
     * @example
     * ```tsx
     * prefix={{ options: CURRENCY_OPTIONS, selected: currency }}
     * ```
     */
    export interface InputAddonDropdown {
        options: InputAddonOption[];
        /** Currently selected value (controlled by parent) */
        selected: string;
        /** Shown when nothing is selected */
        placeholder?: string;
        /**
         * Show a search box inside the dropdown.
         * Defaults to true when options.length > 5.
         */
        showSearch?: boolean;
    }
        
    /**
     * @export
     * A single option inside an addon dropdown.
     */
    export interface InputAddonOption {
        label: string;
        value: string;
        /**
         * Optional icon — FontAwesome string ("fas flag") or an image URL.
         */
        icon?: string;
    }
        
    
    export interface InputHandlers {
        focus: () => void,
        getElement: () => HTMLInputElement | null,
    }
        
    /**
     * @export
     */
    export interface PasswordInputProps extends InputSizeProps, InputStateProps {
        /**
         * The current value of the input.
         */
        value: string;
    
        /**
         * Called whenever the value changes.
         */
        onChange: (value: string) => void;
    
        /**
         * Placeholder text shown when the input is empty.
         */
        placeholder?: string;
    
        /**
         * Additional class names to apply to the wrapper.
         */
        className?: string;
    
        /**
         * Tab index for keyboard navigation. Defaults to 0.
         */
        tabIndex?: number;
    
        /**
         * Called when the input gains focus.
         */
        onFocus?: () => void;
    
        /**
         * Called when the input loses focus.
         */
        onBlur?: (value: string) => void;
    
        /**
         * Called on key down events.
         */
        onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, val: string) => void;
    
        /**
         * Renders the input inline.
         */
        inline?: boolean;
    
        /**
         * Additional inline styles applied to the input element.
         */
        style?: React.CSSProperties;
    
        /**
         * Custom content to render on the left side of the input (e.g., icons)
         */
        prefix?: React.ReactNode;
    
        /**
         * Custom content to render on the right side of the input (e.g., icons, buttons)
         */
        suffix?: React.ReactNode;
    }
        
    
    export interface ICheckboxProps extends InputSizeProps, InputStateProps {
        /**
         * Get or set the current state of the checkbox
         */
        checked: CheckboxState;
    
        /**
         * Called when the checkbox is checked or unchecked by clicking on it
         * Always returns boolean - intermediate state becomes true when clicked
         */
        onChange: (checked: boolean) => void;
    
        /**
         * Any additional text to show next to the checkbox
         */
        label?: string | React.ReactNode;
    
        /**
         * Any additional html attributes to pass to the underlying input field
         */
        inputAttr?: { [key: string]: string | boolean };
    
        /**
         * Determines how the checkbox looks, visually
         */
        type?: ICheckboxType;
    
        /**
         * Additional styles
         */
        className?: string;
    
        /**
         * Additional styles to pass to the label
         */
        labelStyles?: React.CSSProperties;
    
        /**
         * Tab index. default is 0
         */
        tabIndex?: number;
    }
        
    /**
     * Checkbox state - boolean for checked/unchecked, 'intermediate' for indeterminate state
     */
    export type CheckboxState = boolean | 'intermediate';
        
    /**
     * Determines how a checkbox field looks
     */
    export type ICheckboxType = "default" | "switch-line" | "switch-box" | "bordered";
        
    
    export interface ICheckboxInstanceProps {
        focus: () => void;
    }
        
    
    export interface INotificationProps {
        /**
         * Message to show
         */
        message: string,
        /**
         * Visual variant. Defaults to no variant (neutral style).
         */
        variant?: NotificationVariant,
        /**
         * Size mode. `compact` reduces padding and font size for inline contexts.
         */
        mode?: NotificationMode,
        /**
         * Visual layout. `bordered` uses a light tint background with a thick left border instead of a solid fill.
         */
        layout?: NotificationLayout,
        /**
         * Any extra css classes to apply
         */
        class?: string,
        /**
         * any extra styles
         */
        styles?: any
    }
        
    
    export type NotificationVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success';
        
    
    export type NotificationMode = 'default' | 'compact';
        
    
    export type NotificationLayout = 'filled' | 'bordered';
        
    /**
     * @export
     * Props for the ButtonComponent.
     */
    export interface ButtonComponentProps {
        /**
         * Caption for the button.
         */
        title?: string;
    
        /**
         * Left side icon - supports FontAwesome, Phosphor, image URL, text/emoji, or React element
         */
        leftIcon?: ButtonIcon;
    
        /**
         * Right side icon - supports FontAwesome, Phosphor, image URL, text/emoji, or React element
         */
        rightIcon?: ButtonIcon;
    
        /**
         * Additional CSS class names to apply to the button.
         */
        className?: string;
    
        /**
         * Callback invoked when the button is clicked, supports sync or async functions.
         */
        onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    
        /**
         * Callback invoked on error during the onClick execution.
         */
        onError?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    
        /**
         * If true, shows the button in a loading state.
         */
        loading?: boolean;
    
        /**
         * Caption to show when the button is in a loading state.
         */
        loadingTitle?: string;
    
        /**
         * If true, marks the button as active.
         */
        active?: boolean;
    
        /**
         * If true, disables the button.
         */
        disabled?: boolean;
    
        /**
         * Custom inline styles for the button.
         */
        styles?: React.CSSProperties;
    
        /**
         * Custom inline styles for the left icon container.
         */
        leftIconStyles?: React.CSSProperties;
    
        /**
         * Custom inline styles for the right icon container.
         */
        rightIconStyles?: React.CSSProperties;
    
        /**
         * HTML button type. Defaults to 'button'.
         */
        type?: ButtonComponentType;
    
        /**
         * Visual variant of the button. Defaults to 'primary'.
         */
        variant?: ButtonComponentVarient;
    
        /**
         * If true, renders the button in icon-only mode.
         */
        iconOnly?: boolean;
    
        /**
         * Size of the button. Defaults to 'medium'.
         */
        size?: ButtonComponentSize;
    }
        
    /**
     * @export
     * Supported icon types for buttons
     * Can be FontAwesome, Phosphor, image URL, text/emoji, or React element
     */
    export type ButtonIcon = string | IconProp | PHIconProp | React.ReactElement
        
    /**
     * @export
     * Type of the button's HTML type attribute.
     */
    export type ButtonComponentType = "button" | "submit" | "reset";
        
    /**
     * @export
     * Type for the button's visual variant.
     *
     * - `primary` / `secondary` / `danger` / `warning` / `info` / `success`:
     *   filled variants driven by the matching `--<variant>ButtonBGColor` /
     *   `TextColor` / `BorderColor` theme tokens.
     * - `link`: flat text-only style — no border, transparent background,
     *   text in `var(--accentColor)`. Use for inline "add new" / launch-form
     *   affordances inside dropdowns and lists.
     */
    export type ButtonComponentVarient = 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success' | 'link';
        
    /**
     * @export
     * Size of the button.
     */
    export type ButtonComponentSize = 'smaller' | 'small' | 'medium' | 'large';
        
    
    export interface IDataListProps {
        /**
         * List of items to render. This can either be an array of objects or a function that will generate the array of objects.
         * If you supply a function then pagination will be supported. The function expects 2 parameters - `max` and `last` and returns a promise that will resolve to the list of objects.
         * `max` specifies the maximum number of items to be returned.
         */
        data: Array<any> | IDataFunction,
    
        /**
         * A function that will be responsible for rendering each individual element of the list.
         * It is common to return  `ItemCard` component from here.
         *
         * @example
         *
         * ```
         * renderItem={(item,key)=><div>{'Item:' + JSON.stringify(item)}}</div>}
         * ```
         *
         * @example
         * ```
         * renderItem={(item,key)=><ItemCard data={item} titleField='Name' />}
         * ```
         */
        renderItem: (item: any, key: number) => JSX.Element,
    
        /**
         * The number of items to fetch in each page. This gets passed to the data function as the `max` parameter
         */
        pageSize: number,
    
        args?: any
    
    
        /**
         * This function renders a loading animation. If not specified, the default loading animation will be used.
         */
        renderLoading?: () => JSX.Element,
    
        /**
         * Any extra class names to be added to the component
         */
        className?: string
        /**
         * show/hide footer (scroll buttons)
         */
        showFooter?: boolean,
        /**
         * mun of rows to scroll
         */
        scrollStep?: number,
        /**
         * show/hide end of content message
         */
        showEndOfContent?: boolean,
    
        /**
         * this function will be called every time list get updated
         * this will return total number of items (function should return the total count) and loaded items count
         */
        onItemsLoad?: (total: number, loaded: number, items?: any[]) => void
    
        renderNoItems?: () => JSX.Element
    
    }
        
    /**
     * @export
     */
    export type IDataFunction = (max: number, lastPageToken: string, args?: any) => Promise<{ items: Array<any>, pageToken: string }>;
        
    
    export interface IDataListInstanceProps {
        updateItem: (key: number, item: any) => void,
        removeItem: (key: number) => void
    }
        
    /**
     * @export
     */
    export interface ISelectProps extends InputSizeProps, InputStateProps {
        /**
         * List of items to select from.
         * Each option has a label which is displayed and a value which is what we actually select.
         * also you can pass any object as options, then specify the labelField, valueField props
         */
        options: IOption[] | any[] | IDataFunction,
        /**
         * Name of the field you want to display as label
         * If not given default(label) will be used
         */
        labelField?: string,
        /**
         * Name of the field you want to return  as value
         * If not given default(value) will be used
         */
        valueField?: string,
        /**
         * Name if the field to use as icon
         * if a value is passed icon will be displayed.
         */
        iconField?: string
        /**
         * The  currently selected value
         */
        selected: string,
    
        /**
         * When loading options dynamically (paginated), we need to pass the selected item label.
         * either you can pass the selected option label (you can get the selected option in onchange callback), or can pass a function that will accept the selected value as a params and return the selected option details
         */
        selectedLabel?: string | ((selected: string) => Promise<any>)
    
        /**
         * Gets called whenever the selection changes.
         * The value parameter has the newly selected value
         * option parameter has the complete option/ object that you passed
         */
        onChange: (value: string, option?: IOption | any) => void,
    
        /**
         * Text to show when no value is selected
         */
        placeholder?: string,
        /**
         * Any extra css classes to add to the component
         */
        className?: string,
    
        /**
         * Set this to false to indicate the field doesn't have a valid value
         */
        isValid?: boolean,
    
        /**
         * show hide end of content message
         */
        showEndOfContent?: boolean,
        /**
         * A function that will be responsible for rendering each individual option of the list.
         *
         * @example
         *
         * ```
         * renderItem={(option,key)=><div>{option.label}</div>}
         * ```
         *
         * @example
         * ```
         * renderItem={(option,key)=><ItemCard data={item} titleField='label' />}
         * ```
         */
        /**
         * @param isHighlighted `true` when this item is the keyboard-focused option
         * @param isSelected `true` when this item matches the current selection
         */
        renderOption?: (item: any, key: number, isHighlighted?: boolean, isSelected?: boolean) => JSX.Element,
    
        /**
          * Option to add a new value if not available.
          * You can enable this option and handle how you want to save the new item.
          * Supports two scenarios — see {@link IAddNewValues}.
          */
        addNewValues?: IAddNewValues
        /**
         * Option to add a classname for the dropdown
         */
        dropdownClassname?: string
    
        /**
       * Option to unselect
       */
        onClear?: () => void
    
        /**
        * This will replace the content in the dropdown.
        * If this is enabled, above options (value, onChange , etc) will not work. You have to handle everything
        * You will need to handle the value and onChange options.
        * and once you select an option, to close the dropdown, call the closeDropdown function
        */
        renderCustomDropdownContent?: (closeDropdown: () => void) => React.ReactNode
    
        /**
         * Custom content to render on the left side of the input (e.g., "S-" prefix, icons)
         */
        prefix?: React.ReactNode,
    
        /**
         * Option to custom render the placeholder
         */
        renderPlaceholder?: {
            /**
             * render input as a pill
             * work with default select dropdown
             */
            renderAsPill?: {
                minWidth?: number,
                maxWidth?: number
            },
            /**
             * for custom renders
             */
            renderCustomPill?: (onClear: () => void) => React.ReactNode
        }
    
        /**
         * Option to control the min width of the dropdown
         */
        dropdownMinWidth?: number | string,
        /**
         * Option to control the max width of the dropdown
         */
        dropdownMaxWidth?: number | string,
        /**
         * Option to control the min height of the dropdown
         */
        dropdownMinHeight?: number,
        /**
         * Optional page size when using a function to load data
         */
        pageSize?: number,
        position?: DropdownPosition
    }
        
    /**
     * Option interface for InfoCardGroupInput
     */
    export interface IOption {
        label: string;
        value: string;
    }
        
    /**
     * Shared "add new" affordance configuration for dropdown-style inputs
     * (Select, AutoComplete, TagInput). Two scenarios:
     *
     *  - **Scenario A — create-from-typed-text**: button appears only when the
     *    typed query has no matches. `onAddNewValue(query)` resolves to a new
     *    value that the component then auto-selects. Used by Select today.
     *
     *  - **Scenario B — always-visible launch a form**: set `alwaysShow: true`
     *    and supply `onClick`. The button renders in the dropdown footer at
     *    all times. Clicking it fires `onClick` and the host owns the rest
     *    (e.g. open a slide-in form, refresh via event bus on save). The
     *    component does not auto-select.
     *
     * @export
     */
    export interface IAddNewValues {
        /** Master toggle. When false (or `addNewValues` undefined), no affordance is rendered. */
        enable: boolean;
        /** Button label. */
        title: string;
        /** Label shown while `onAddNewValue` is pending (Scenario A only). */
        loadingTitle?: string;
        /**
         * Scenario B: render the button in the dropdown footer at all times,
         * not just when the filtered list is empty. Default `false`.
         */
        alwaysShow?: boolean;
        /**
         * Scenario A: async callback receiving the user's typed query. The
         * resolved value is selected automatically by the component.
         */
        onAddNewValue?: (value: string) => Promise<any>;
        /**
         * Scenario B: synchronous fire-and-forget callback. Takes precedence
         * over `onAddNewValue` when defined. The host handles persistence and
         * subsequent selection.
         */
        onClick?: () => void;
    }
        
    
    export interface ITextAreaProps extends InputSizeProps, InputStateProps {
        /**
        * The actual text
        */
        value: string,
        /**
         * This function is called whenever the text changes. The new text value is passed as a parameter
         */
        onChange: (value: string) => void,
        /**
         * callback function on focus
         */
        onFocus?: () => void,
        /**
         * callback function on blur
         */
        onBlur?: (vale: string) => void
        /**
         * callback function on key down
         */
        onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>, val: string) => void
    
        /**
         * Any additional class names to be included for the input field
         */
        className?: string,
        /**
          * additional styles
          */
        style?: React.CSSProperties,
        /**
         * tab index. default is 0
         */
        tabIndex?: number
        /**
         * number of rows
         */
        rows?: number,
        /**
         * number of cols
         */
        cols?: number
    
        /**
         * When provided, a clear (×) button appears in the top-right corner whenever there is text.
         * Clicking it calls this function — the parent is responsible for clearing the value.
         */
        onClear?: () => void
    }
        
    /**
     * @export
     * Events/Callbacks to controll the behaviour of the component
     *
     * @example
     * ```
     * // create a ref
     * let inputRef: React.MutableRefObject<ITeaxtareaInstanceProps> = React.useRef(null)
     *
     * // add the ref to input
     * <TextArea
     *  ...
     *  ref ={inputRef}
     * />
     *
     *
     * // use
     * inputRef.current?.focus()
     * let element = inputRef.current?.getElement()
     *
     * ```
     */
    export interface ITextAreaInstanceProps {
        /**
         * focus the input
         * @example
         * ```
         * inputRef.current?.focus()
         * ```
         */
        focus: () => void,
        /**
         * this will return the <TextArea /> element
         * @example
         * ```
         * let input = inputRef.current?.getElement()
         * ```
         */
        getElement: () => React.MutableRefObject<HTMLTextAreaElement>
    }
        
    /**
     * @export
     * Props for the Tooltip component
     */
    export interface TooltipProps {
        /**
         * The content to show inside the tooltip
         * Can be a string or a function that returns JSX
         * @example
         * ```tsx
         * <Tooltip content="This is a tooltip" />
         * ```
         * @example
         * ```tsx
         * <Tooltip content={() => <div>Custom JSX content</div>} />
         * ```
         */
        content: string | (() => React.ReactNode);
    
        /**
         * Where the tooltip should be placed relative to the trigger element
         * Defaults to 'top'
         */
        position?: TooltipPosition;
    
        /**
         * Show arrow pointing to the trigger element
         * Defaults to true
         */
        showArrow?: boolean;
    
        /**
         * The element that triggers the tooltip on hover
         * @example
         * ```tsx
         *  <Tooltip content="This is a tooltip">
         *      <button>Hover me</button>
         *  </Tooltip>
         * ```
         */
        children?: React.ReactNode;
    }
        
    /**
     * @export
     * Position of the tooltip relative to the trigger element
     */
    export type TooltipPosition = "top" | "bottom" | "left" | "right";
        
    /**
     * @export
     *
     */
    export interface IDatePickerProps extends InputSizeProps, InputStateProps {
        /**
         * The title
         */
        title?: string,
    
        /**
         * The currently selected date. Either a Date object or an ISO8601 string representation of a date
         */
        date: string | Date,
    
        /**
         * Callback that gets executed whenever a date is selected/changed in the date picker
         */
        onChange: (date: Date) => void,
    
        /**
         * Called when the calendar popup is closed
         */
        closeOnSelect?: boolean,
    
        /**
         * Additional options to control behavior
         */
        options?: IDatePickerOptions,
    
        /**
         * Set to true to prevent a user from typing in a date
         */
        disableInput?: boolean,
    
        /**
         * this will hide the labels in the placeholder (calendar icon)
         */
        hideLabels?: boolean
        /**
         * hide the input box
         */
        hideInput?: boolean,
    
        /**
         * Text to show when no date is selected
         */
        placeholder?: string,
    
        /**
         * show the full month name in the month selector dropdown
         * default is true
         *
         * if value is false it will show the short name "Jan" ,"Feb" and ect
         */
        showFullMonthName?: boolean,
    
        /**
         * Additional class name for the dropdown container
         */
        dropdownClassname?: string
    
        /**
         * Maximum width for the dropdown content
         */
        dropdownMaxWidth?: number | string
    
        /**
         * When provided, a clear (×) button is shown whenever a date is selected.
         * Clicking it calls this function — the parent is responsible for clearing the value.
         */
        onClear?: () => void
    }
        
    
    export interface IDatePickerOptions {
        /**
         * The minimum selectable date. Either a Date object an an ISO8601 date string
         */
        minDate?: string | Date,
    
        /**
         * The maximum selectable date. Either a Date object an an ISO8601 date string
         */
        maxDate?: string | Date,
    
        /**
         * If set to `true`, you cannot select a weekend date
         */
        disableWeekEnds?: boolean,
    
        /**
         * An array of specific dates that the user cannot select
         */
        disableDates?: Array<Date | String>
    
        /**
         * A list of spacial dates. you can use this to highlight the dates and show a tooltip on hover over it
         */
        specialDates?: (string | Date | ISpecialDate)[],
    
        /**
         * Default background color for all spacial dates. This can be overridden for individual days if required.
         */
        specialDateBackgroundColor?: string
        /**
         * Default text color for all spacial dates. This can be overridden for individual days if required.
         */
        specialDateTextColor?: string
    }
        
    /**
     * export
     */
    export interface ISpecialDate {
        date: string | Date,
        label?: string
        backgroundColor?: string
        color?: string
    }
        
    /**
     * @export
     */
    export interface IDateTimePickerProps extends InputSizeProps, InputStateProps {
        /**
         * The title
         */
        title?: string,
        /**
        * The currently selected datetime. Either a Date object or an ISO8601 string representation of a date
        */
        datetime: string | Date,
        /**
         * Callback that gets executed whenever a datetime is selected/changed in the datetime picker
         */
        onChange: (date: Date) => void,
        /**
        * Set to true to prevent a user from typing in a datetime
        */
        disableInput?: boolean
    
        /**
        * Additional options to control behavior
        */
        options?: IDatePickerOptions,
    
        /**
         * this will hide the labels in the placeholder (icons and text)
         */
        hideLabels?: boolean
        /**
         * hide the input box
         */
        hideDateInput?: boolean,
    
        /**
         * show the full month name in the month selector dropdown
         * default is true
         *
         * if value is false it will show the short name "Jan" ,"Feb" and ect
         */
        showFullMonthName?: boolean,
    
        /**
         * Additional class name for the dropdown container
         */
        dropdownClassname?: string
    
        /**
         * Maximum width for the dropdown content
         */
        dropdownMaxWidth?: number | string
    
        /**
         * Text to show when no datetime is selected
         */
        placeholder?: string
    
        /**
         * Called when the calendar popup is closed
         */
        closeOnSelect?: boolean
    
        /**
         * When provided, a clear (×) button is shown whenever a datetime is selected.
         * Clicking it calls this function — the parent is responsible for clearing the value.
         */
        onClear?: () => void
    }
        
    
    export interface ITimePickerProps extends InputSizeProps, InputStateProps {
        /**
        * The title
        */
        title?: string
        /**
         * The currently selected time. Either a Date object or an time string (Ex: 01:10:00 pm)
         */
        time: string | Date,
        /**
        * Callback that gets executed whenever a time is selected/changed in the time picker
        */
        onChange: (date: Date) => void,
        /**
        * Set to true to prevent a user from typing in a time
        */
        disableInput?: boolean,
        /**
         * hide the clock icon
         */
        hideLabels?: boolean,
    
        /**
         * Additional class name for the dropdown container
         */
        dropdownClassname?: string
    
        /**
         * Maximum width for the dropdown content
         */
        dropdownMaxWidth?: number | string
    
        /**
         * When provided, a clear (×) button is shown whenever a time is selected.
         * Clicking it calls this function — the parent is responsible for clearing the value.
         */
        onClear?: () => void
    }
        
    
    export interface ButtonProps {
        /**
         * The caption for the button
         */
        title?: string,
    
        /**
         * Left side icon - supports FontAwesome, Phosphor, image URL, text/emoji, or React element
         */
        leftIcon?: ButtonIcon,
    
        /**
         * Right side icon - supports FontAwesome, Phosphor, image URL, text/emoji, or React element
         */
        rightIcon?: ButtonIcon,
    
        /**
         * Any extra css classes to add to the button
         */
        className?: string,
    
        /**
         * The callback that gets invoked when the button is clicked
         * Supports both sync and async functions
         */
        onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>,
    
        /**
         * a callback function to call on error
         */
        onError?: (e: React.MouseEvent<HTMLButtonElement>) => void
    
        /**
         * Set this to `true` to show the button in its 'loading...' state.
         */
        loading?: boolean,
    
        /**
         * The caption to show on the button when its in loading state
         */
        loadingTitle?: string,
    
        /**
         * to mark the button as active
         */
        active?: boolean,
    
        /**
         * to disable the button
         */
        disabled?: boolean,
    
        /**
         * any custom inline styles to the button
         */
        styles?: React.CSSProperties,
    
        /**
         * any custom inline styles for the icon container
         */
        iconStyles?: React.CSSProperties | { leftIcon?: React.CSSProperties, rightIcon?: React.CSSProperties },
    
        /**
         * Button type
         */
        type?: ButtonComponentType
    
        /**
         * Button variation
         */
        variant?: ButtonComponentVarient,
    
        /**
         * Icon only mode
         */
        iconOnly?: boolean,
    
        /**
         * Size of the button. Defaults to 'medium'.
         */
        size?: ButtonComponentSize,
    
    
        /**
         * BELOW PROPS ARE DEPRECATED
         */
    
        /**
         * @deprecated Use leftIcon or rightIcon instead
         * Button icon.
         * you can either use a url or fontawesome icon
         *
         * Here is a example for using fontawesome icons
         * icon={'fas save'}
         */
        icon?: string,
    
        /**
         * @deprecated Use leftIcon or rightIcon instead
         * icon position
         */
        iconPosition?: 'left' | 'right',
    
        /**
         * @deprecated This behavior is now handled automatically by BaseButtonComponent
         * show loading spinners in place of icons (even if the icon is not there it will show the spinner on the left sides)  when the button is in loading state,
         */
        useLoadingSpinner?: boolean,
    }
        
    /**
     * @export
     */
    export interface IDateRangePickerProps extends InputSizeProps, InputStateProps {
        title?: string,
        /**
         * start date of the range. Either a Date object or an ISO8601 string representation of a date
         */
        startDate: string | Date,
        /**
         * end date of the range. Either a Date object or an ISO8601 string representation of a date
         */
        endDate: string | Date,
    
        /**
         * Option to pass selected preset
         */
        preset?: string
        /**
         * Callback that gets executed whenever a date range is selected/changed in the date picker
         */
        onChange: (newStartDate: string | Date, newEndDate: string | Date, preset?: string) => void,
        /**
         * Called when the calendar popup is closed
         */
        closeOnSelect?: boolean,
        /**
         * Set to true to prevent a user from typing in a date
         */
        disableInput?: boolean,
        /**
        * Additional options to control behavior
        */
        options?: IDatePickerOptions,
        /**
         * this will hide the labels in the placeholder (calendar icon and text)
         */
        hideLabels?: boolean
        /**
         * hide the input box
         */
        hideInput?: boolean,
    
        /**
         * show the full month name in the month selector dropdown
         * default is true
         *
         * if value is false it will show the short name "Jan" ,"Feb" and ect
         */
        showFullMonthName?: boolean
    
        /**
         * this will set the max width and show a compact picker
         */
        compact?: boolean
    
        renderAsPill?: {
            minWidth?: number,
            maxWidth?: number
        },
    
        presets?: {
            enable: boolean
            customPresets?: DateRangePreset[],
            renderPreset?: (preset: DateRangePreset, index: number, onSelectPreset: (preset: string) => void) => React.ReactNode,
            parseRelativeDatesOnSelect?: boolean // if this is set to true, relative dates will be parsed to dates
        }
    
        /**
         * Additional class name for the dropdown container
         */
        dropdownClassname?: string
    
        /**
         * Maximum width for the dropdown content
         */
        dropdownMaxWidth?: number | string
    
        /**
         * When provided, a clear (×) button is shown whenever a date range is selected.
         * Clicking it calls this function — the parent is responsible for clearing the value.
         */
        onClear?: () => void
    }
        
    
    export interface DateRangePreset {
        label: string,
        startDate: string | RelativeDate | Date // string could be a date string or relative date like 0d, 1d, -7d, etc
        endDate: string | RelativeDate | Date // string could be a date string or relative date like 0d, 1d, -7d, etc
    }
        
    /**
     * export
     */
    export type RelativeDate =
        | `${'+' | '-'}${number}${'d' | 'w' | 'm' | 'y'}${'|start' | '|end'}` // Patterns like +3d, -1w, 2m|start , 2m|end
        | 'startOfDay'
        | 'endOfDay'
        | 'startOfWeek'
        | 'endOfWeek'
        | 'startOfMonth'
        | 'endOfMonth'
        | 'startOfYear'
        | 'endOfYear';
        
    
    export interface ITimeRangePickerProps extends InputSizeProps, InputStateProps {
        title: string
        /**
         * Start time . Either a Date object or an time string (Ex: 01:10:00 pm)
         */
        startTime: string | Date,
        /**
        * End time . Either a Date object or an time string (Ex: 01:10:00 pm)
        */
        endTime: string | Date,
        /**
        * Callback that gets executed whenever a time range is selected/changed in the time picker
        */
        onChange: (start: Date, end: Date) => void,
        /**
       * Set to true to prevent a user from typing in a time
       */
        disableInput?: boolean,
    
        /**
         * Additional class name for the dropdown container
         */
        dropdownClassname?: string
    
        /**
         * Maximum width for the dropdown content
         */
        dropdownMaxWidth?: number | string
    
        /**
         * When provided, a clear (×) button is shown whenever a time range is selected.
         * Clicking it calls this function — the parent is responsible for clearing the value.
         */
        onClear?: () => void
    }
        
    
    export interface TimeRangeSliderPickerProps {
        title?: string;
        /**
         * Start time. Either a Date object or a time string
         */
        startTime: string | Date;
        /**
         * End time. Either a Date object or a time string
         */
        endTime: string | Date;
        /**
         * Callback that gets executed whenever time range is changed
         */
        onChange: (start: Date, end: Date) => void;
        /**
         * Step interval in minutes (default: 15)
         */
        step?: number;
        /**
         * Disable the slider
         */
        disabled?: boolean;
    }
        
    /**
     * @export
     * Props for the WizardStepIndicator component
     */
    export interface WizardStepIndicatorProps {
        /**
         * Array of steps to display
         */
        steps: WizardStep[];
    
        /**
         * ID of the currently active step
         */
        currentStepId: string;
    
        /**
         * Optional callback when a step is clicked (for navigation)
         * If not provided, steps are not clickable
         */
        onStepClick?: (stepId: string) => void;
    
        /**
         * Optional array of step IDs that are completed
         * Completed steps show a checkmark icon
         */
        completedSteps?: string[];
    
        /**
         * Optional: Disable auto-scroll to active step. Default is false.
         */
        disableAutoScroll?: boolean;
    }
        
    /**
     * @export
     * Configuration for a single step in the wizard
     */
    export interface WizardStep {
        /**
         * Unique identifier for the step
         */
        id: string;
    
        /**
         * Label text to display below the step number
         */
        label: string;
    
        /**
         * Whether this step has validation errors
         */
        hasError: boolean;
    }
        
    /**
     * @export
     */
    export interface InfoButtonProps {
        /**
         * The content to display inside the info popup.
         * - `string`: rendered as plain text
         * - `string[]`: rendered as a bulleted list
         * - `ReactNode`: rendered as-is
         */
        content: string | React.ReactNode | string[]
    
        /**
         * Position of the popup relative to the info button.
         * Defaults to `"top-right"`.
         */
        position?: InfoButtonPosition
    
        /**
         * Size of the info button trigger.
         * `small` removes the border/background and uses a smaller icon — suited for inline label use.
         * Defaults to `"default"`.
         */
        size?: 'default' | 'small'
    }
        
    /**
     * @export
     */
    export type InfoButtonPosition = DropdownPosition;
        
    /**
     * @export
     * Props for the Collapse component
     */
    export interface CollapseProps {
        /**
         * The title of the collapse panel. Can be a string or a React node.
         */
        title: string | React.ReactNode;
    
        /**
         * Optional content to display on the right side of the collapse header.
         */
        rightContent?: React.ReactNode;
    
        /**
         * Content to display inside the collapse panel when expanded.
         */
        children?: React.ReactNode;
    
        /**
         * Determines if the collapse panel is expanded by default. Defaults to true.
         */
        defaultExpanded?: boolean;
    
        /**
         * Additional class names to apply to the collapse panel.
         */
        className?: string;
    }
        
    /**
     * @export
     */
    export interface DynamicFormProps {
        formStructure: FormSectionProps[],
        beforeSubmit?: (data: IFormData) => Promise<IFormData>
        onSubmit: (data: IFormData) => Promise<void>
        onCancel?: () => void,
        submitButtonLabel?: string,
        submitButtonLoadingLabel?: string,
        submitButtonIcon?: string,
        cancelButtonLabel?: string,
        cancelButtonIcon?: string,
        buttonSize?: 'smaller' | 'small' | 'medium' | 'large',
        hideCancelButton?: boolean,
        hideButtons?: boolean, // NEW: Hide internal buttons completely
        isLoading?: boolean,
        formContainerStyles?: React.CSSProperties,
        onWizardStateChange?: (state: WizardState | null) => void, // Callback when wizard state changes
        renderOptions?: {
            renderStyle: 'standard' | 'tabs' | 'wizard',
            direction?: 'vertical' | 'horizontal' // only applicable to tabs and wizard
            tabBackgroundColor?: string,
            tabTextColor?: string,
            activeTabBackgroundColor?: string,
            activeTabTextColor?: string,
            errorTabBackgroundColor?: string,
            errorTabTextColor?: string,
            disabledTabBackgroundColor?: string,
            disabledTabTextColor?: string,
            previousButtonLabel?: string,
            nextButtonLabel?: string
        }
    }
        
    /**
     * @export
     */
    export interface FormSectionProps extends SubSectionProps {
        /**
         * Optional sub-sections. When provided, fields within each sub-section
         * are rendered with their own title/columns/separator — useful for
         * grouping fields inside a tab or wizard step.
         * When present, the top-level `fields` array is ignored for rendering.
         */
        sections?: SubSectionProps[]
    }
        
    /**
     * @export
     * Base section shape — shared by both top-level sections and sub-sections.
     */
    export interface SubSectionProps {
        title?: string
        fields: DynamicFormFieldProps[]
        columns?: 1 | 2 | 3
        maxColumnWidth?: string
        seperator?: boolean
        show?: (data: IFormData) => boolean
        collapsible?: boolean
        defaultExpanded?: boolean
    }
        
    /**
     * @export
     */
    export interface DynamicFormFieldProps {
        name: string,
        label: string,
        type: 'text' | 'password' | 'number' | 'email' | 'checkbox' | 'toggle' | 'select' | 'date' | 'time' | 'datetime' | 'daterange' | 'timerange' | 'timerangeslider' | 'hidden' | 'textarea' | 'json' | 'readonly' | 'spacer',
        value?: FormValue,
        placeholder?: string,
        icon?: string,
    
        renderField?: (data: IFormData, onValueChange: (value: any) => void) => React.ReactNode
    
        info?: string | React.ReactNode | string[]
    
        // show hide fields
        show?: (data: IFormData) => boolean
    
        /**
         * Optional: Explicit list of field names this field depends on.
         * If provided, field only re-renders when these fields change.
         * If omitted, dependencies are auto-detected from show/getOptions/validate functions.
         * Use this for performance optimization or when auto-detection fails.
         */
        dependsOn?: string[]
    
        // for select
        options?: Array<{ label: string | number, value: string | number }> | Array<any>,
        getOptions?: (data: IFormData) => (Array<{ label: string | number, value: string | number }> | Array<any>)
        getPaginatedOptions?: (data: IFormData, max: number, lastPageToken: string, args?: any) => Promise<{ items: Array<any>, pageToken: string, total?: number }>
        selectedOptionLabel?: string | ((data: IFormData, selected: string) => Promise<any>)
        labelField?: string
        valueField?: string
    
        // for numbers
        allowZero?: boolean
        allowNegative?: boolean,
    
        // a formatter function on value change
        formatter?: (value: any) => any
    
        validate?: {
            required?: boolean | ((data: IFormData) => boolean) // default is false
            allowEmptyString?: boolean // trim value. only for string values
            minLength?: number
            maxLength?: number
            regExp?: RegExp
            allowZero?: boolean // only applicable to numbers
            allowNegative?: boolean,
            minVal?: number
            maxVal?: number
            customValidateFunction?: (value: any, data: IFormData) => CustomValidateResponse | Promise<CustomValidateResponse>// this is to give a custom validate function, which takes the value and return a boolean indicating value is valid or not
        },
    
        checkboxLabel?: string
    
        description?: string | React.ReactNode
    
        /**
         * Where to render the info button. Defaults to 'label'.
         * - 'label': small borderless icon inline with the label
         * - 'input': standard info button to the right of the input
         */
        infoPosition?: 'label' | 'input'
    }
        
    /**
     * @export
     */
    export type FormValue = string | number | boolean | null | any
        
    
    export type IFormData = { [key: string]: FormValue }
        
    
    export interface CustomValidateResponse {
        valid: boolean,
        error?: string
    }
        
    /**
     * @export
     * Wizard state information
     */
    export interface WizardState {
        currentStep: number,
        totalSteps: number,
        isFirstStep: boolean,
        isLastStep: boolean
    }
        
    /**
     * @export
     * Interface for external form control
     */
    export interface DynamicFormHandlers {
        submit: () => Promise<void>,
        cancel: () => void,
        validate: () => Promise<boolean>,
        getFormData: () => IFormData,
        setFormData: (data: IFormData) => void,
        getErrors: () => Record<string, string>,
        clearErrors: () => void,
        setErrors: (errors: Record<string, string>) => void,
        clearFieldError: (fieldName: string | string[]) => void,
        isProcessing: () => boolean,
        goToNext: () => void,
        goToPrevious: () => void,
        getWizardState: () => WizardState | null,
    }
        
    /**
     * @export
     * Dropdown button props
     */
    export interface IDropDownButtonProps {
        /**
         * The content to show inside the Dropdown
         * @example
         *
         * ```
         * content={() => <div>Dropdown Content</div>}
         * ```
         */
        content: () => JSX.Element,
    
        /**
         * Where the dropdown should be placed relative to the element it is being displayed for
         * default is right
         */
        position?: IDropDownButtonPosition,
        /**
         * If this is true dropdown will show on mouse over & hide n mouse out
         * If this is false dropdown ill show on click
         */
        showOnHover?: boolean
    
        /**
         * this will open the dropdown on hover and keep open even if user takes the mouse away
         * Click on outside to close the dropdown
         */
        keepShowingOnHover?: boolean,
    
        className?: string,
    
        /**
         * callback function when the popup is open
         */
        onOpen?: () => void
        /**
         * callback function when the popup is closed
         */
        onClose?: () => void
        /**
         * an option to force close a popup
         */
        forceClose?: boolean
    
        /**
         * disable scroll on open dropdown
         * true by default
         */
        disableScroll?: boolean,
    
        /**
         * if this is enabled drop down will be automatically positionsed within the view.
         * better to use this option- it has been improved
         * if enabled it will ignore the position param
         */
        autoPosition?: boolean,
        children?: React.ReactNode;
    }
        
    /**
     * @export
     * dropdown position
     */
    export type IDropDownButtonPosition = "right" | "left" | "top left" | "top right" | "top center" | "bottom left" | "bottom right" | "bottom center" | "left center" | "right center";
        
    /**
     * @export
     * Props for the Popover component
     */
    export interface PopoverProps {
        /**
         * Title of the popover
         * Can be a string or a function that returns JSX
         * @example
         * ```tsx
         * title="Popover Title"
         * ```
         * @example
         * ```tsx
         * title={() => <strong>Bold Title</strong>}
         * ```
         */
        title: string | (() => React.ReactNode);
    
        /**
         * Content to show within the popover
         * Can be a string or a function that returns JSX
         * @example
         * ```tsx
         * content="Popover content here"
         * ```
         * @example
         * ```tsx
         * content={() => <div>Custom JSX content</div>}
         * ```
         */
        content: string | (() => React.ReactNode);
    
        /**
         * Where the popover should be positioned relative to the trigger element
         * Defaults to 'bottom'
         */
        position?: DropdownPosition;
    
        /**
         * Show arrow pointing to the trigger element
         * Defaults to true
         */
        showArrow?: boolean;
    
        /**
         * The element that triggers the popover on click
         * @example
         * ```tsx
         *  <Popover
         *      title="Details"
         *      content="More information"
         *  >
         *      <button>Click me</button>
         *  </Popover>
         * ```
         */
        children?: React.ReactNode;
    }
        
    
    export interface IIconButtonProps {
        /**
         * Icon to show - supports FontAwesome, Phosphor, image URL, text/emoji, or React element
         * Pass either icon or type
         */
        icon?: ButtonIcon
        /**
         * button type (optional)
         */
        type?: IButtonType,
        /**
         * Set button to active state when true
         */
        active?: boolean,
        /**
         * Set button to disabled state when true
         */
        disabled?: boolean,
        /**
         * The callback that gets invoked when the button is clicked
         * Supports both sync and async functions
         */
        onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>,
    
        /**
         * a callback function to call on error
         */
        onError?: (e: React.MouseEvent<HTMLButtonElement>) => void
    
        /**
        * Any extra css classes to apply
        */
        className?: string,
        /**
         * set to `true` to prevent a border from being shown for the button
         */
        borderless?: boolean;
    
        /**
        * Button type
        */
        buttonType?: ButtonComponentType
    
        /**
       * Button variation
       */
        variant?: ButtonComponentVarient,
    
        /**
         * Size of the button. Defaults to 'medium'.
         */
        size?: ButtonComponentSize,
    
        /**
         * If true, shows the button in a loading state.
         */
        loading?: boolean,
    }
        
    /**
     * @export
     */
    export type IButtonType = "search" | "close" | "done" | "arrow-up" | "arrow-down" | "arrow-left" | "arrow-right" | "filter" | "edit" | "delete" | "pin" | "copy" | "plus";
        
    
    export interface IModalProps {
        /**
         * Set this to true to make the modal visible
         */
        show: boolean;
        /**
         * Called whenever the modal is opened
         */
        onOpen?: () => void;
        /**
         * Called when the modal gets closed
         */
        onClose?: () => void;
        /**
         * The title set in the title bar of the modal.
         * If the `headerContent` attribute is set, then this value will not be used.
         */
        title?: string;
        /**
         * Any custom component to use to render the dialog close button.
         * If not provided and `showCloseButton` is true, the default close button UI will be rendered.
         */
        closeButton?: JSX.Element;
        /**
         * Any extra css styles to apply
         */
        styles?: React.CSSProperties;
        /**
         * Any extra css classes to apply
         */
        className?: string;
        /**
         * Any custom content to include in the modal header.
         * If set, the `title` property is ignored.
         */
        headerContent?: JSX.Element;
        /**
         * Set to true to allow the dialog to be closed by clicking outside of it
         */
        backgroundDismiss?: boolean;
        /**
         * Set to true to show the close button in the dialog
         */
        showCloseButton?: boolean;
        /**
         * Animation to use when opening/closing the modal
         */
        animation?: IAnimation;
        /**
         * Additional styles for backdrop
         */
        backdropStyles?: React.CSSProperties;
        /**
         * Additional content to render
         */
        renderAdditionalContent?: () => JSX.Element;
        autoSize?: boolean;
        children?: React.ReactNode;
    }
        
    
    export type IAnimation =
        | "zoom"
        | "slide-from-top-right"
        | "slide-from-top-left"
        | "slide-from-bottom-right"
        | "slide-from-bottom-left";
        
    
    export interface IWizardProps {
        /**
         * A list of steps within the wizard.
         */
        steps: IWizardStep[];
    
        /**
         * What title should be shown on the 'next' button when we reach the last screen
         */
        completionTitle?: string;
    
        /**
         * This callback is run whenever they hit the final 'completion' action on the last step. It should be async so we can show a loading animation on the button
         */
        onComplete?: () => Promise<void>;
    
        /**
         * Optional: Show/hide the step indicator. Default is true.
         */
        showStepIndicator?: boolean;
    }
        
    /**
     * Defines an individual step within a wizard.
     * Each step provides a render method to render the actual step.
     * You also need to specify a unique 'id' and title for the step.
     * You can optionally specify an `onNext` callback to run whenever the user wants to go to the next step.
     * This can return either `null` - meaning we should not proceed to the next step, or the id of the next step to go to.
     * @export
     */
    export interface IWizardStep {
        onNext?: () => string | null;
        id: string;
        title: string;
        render: (props: IWizardStepProps) => React.ReactNode;
    }
        
    /**
     * @export
     * These props are passed to the render method of each wizard step.
     *
     */
    export interface IWizardStepProps {
        /**
         * Triggers a request to go to the next step in the wizard. You can use this function to programatically move to the next step (the user can also click the 'Next' action to do the same thing)
         */
        next: (id?: string) => void;
    
        /**
         * Similar to `next`, you can call this function to programatically go to the previous step in the wizard.
         */
        prev: () => void;
    }
        
    /**
     * @export
     */
    export interface IModalWizardProps {
    
        /**
         * Set this to true to show the dialog. False to hide it
         */
        show: boolean;
    
        /**
         * Call this to close the dialog
         */
        onClose: () => void;
    
        /**
         * The title to show on the top
         */
        title: string;
    
        /**
         * @deprecated Not used in v5 - Modal component doesn't support header icons
         * An optional icon to show
         */
        icon?: string;
    
        /**
         * @deprecated Not used in v5 - Use Modal's headerContent prop directly if custom header needed
         * A method to render a subheader just below the title area.
         */
        onRenderHeader?: (currentStep: IModalWizardStepProps) => JSX.Element;
    
        /**
         * The list of steps that this wizard consists of.
         */
        steps: IModalWizardStep[];
    
        /**
         * This action executes after they hit 'next' on the final page.
         */
        onComplete: () => Promise<any>;
    
        /**
         * Text to show on the 'next' button in the final stage.
         */
        completionText?: string;
        className?: string;
    }
        
    /**
     * @export
     *
     * Props passed to the wizard step's render function
     */
    export interface IModalWizardStepProps {
        /**
         * Triggers the wizard to move to the next stage
         */
        next: () => void;
    
        /**
         * Triggers the wizard to move the previous stage
         */
        prev: () => void;
    
        /**
         * Information about the current stage
         */
        currentStep: IModalWizardStep;
        data?: any;
    }
        
    /**
     * @export
     * An individual step in a modal wizard
     */
    export interface IModalWizardStep {
        /**
         * This function returns the contents of the main area of the wizard
         */
        render: (props: IModalWizardStepProps) => JSX.Element;
    
        /**
         * @deprecated Not used in v5 - Visual step indication is now handled by WizardStepIndicator
         * This function renders the status section on the left sidebar. This will be rendered only if the `showStatus` property is not false.
         * You can return null from this function to prevent the side bar status from being rendered.
         */
        renderStatus: () => JSX.Element;
    
        /**
         * This is called just before the user tries to advance to the next stage. You can use this to validate the current stage.
         * You can return
         * a string - to indicate the id of the next step that should be taken.
         * a number - to indicate the index of the next step to be taken
         * undefined or null - to indicate it should stay on the current step
         */
        onValidateStep?: () => string | number | undefined | null | boolean;
    
        /**
         * An optional id for this step. This is used by the onValidateStep function to address a specific step to jump to
         */
        id?: string;
    
        /**
         * The title of this step. Currently this is used only in the sidebar to show the status of that stage.
         */
        title?: string;
    
        /**
         * @deprecated Not used in v5 - Wizard component controls button visibility
         * Set this to false to prevent the 'next' button from being shown. If this is false you will have to manually render the 'next' button yourself
         */
        showNext?: boolean;
    
    
        nextTitle?: string;
    
        /**
         * @deprecated Not used in v5 - Visual step indication is always shown via WizardStepIndicator
         * Set to false to prevent the status sidebar from being shown at this stage
         */
        showStatus?: boolean;
    
        /**
         * @deprecated Not used in v5
         * Render a sub-header below the main dialog header
         *
         */
        renderSubHeader?: () => JSX.Element;
    }
        
    /**
     * @export
     * Props for the FilterPanel component
     */
    export interface FilterPanelProps {
        /**
         * Called whenever the panel is opened
         */
        onOpen?: () => void;
    
        /**
         * Called whenever the panel gets dismissed
         */
        onClose?: () => void;
    
        /**
         * Called whenever the clear button on the panel is pressed
         * This button is available only when `enableClear` is set to `true`
         */
        onClear?: () => void;
    
        /**
         * Position of the filter panel relative to the trigger button
         * Defaults to 'bottom-right'
         */
        position?: DropdownPosition;
    
        /**
         * Any extra css classes to add to the filter panel content
         */
        className?: string;
    
        /**
         * Enable the clear button on the panel footer
         * When true, shows a clear filters button
         */
        enableClear?: boolean;
    
        /**
         * Custom icon for the filter trigger button
         * Defaults to 'filter'
         */
        icon?: string;
    
        /**
         * Filter content (form fields, inputs, etc.)
         * @example
         * ```tsx
         * <FilterPanel enableClear={hasFilters} onClear={clearFilters}>
         *   <FormField>
         *     <Label>Sort By</Label>
         *     <Select options={options} selected={selected} onChange={setSelected} />
         *   </FormField>
         * </FilterPanel>
         * ```
         */
        children?: React.ReactNode;
    }
        
    
    export interface IFormFeedbackProps {
        validInput?: boolean,
        className?: string
        children?:React.ReactNode
    }
        
    /**
     * @export
     */
    export interface IMultiSelectProps extends InputSizeProps, InputStateProps {
        /**
         * List of items to select from.
         * Each option has a label which is displayed and a value which is what we actually select.
         * also you can pass any object as options, then specify the labelField, valueField props
         */
        options: IOption[] | any[] | IDataFunction,
        /**
         * Name of the field you want to display as label
         * If not given default(label) will be used
         */
        labelField?: string,
        /**
         * Name of the field you want to return  as value
         * If not given default(value) will be used
         */
        valueField?: string,
        /**
         * Name if the field to use as icon
         * if a value is passed icon will be displayed.
         */
        iconField?: string
        /**
         * The  currently selected value
         *
         * ['option1', 'option2']
         */
        selected: string[],
    
        /**
         * When loading options dynamically (paginated), we need to pass the selected item labels.
         * either you can pass the selected option labels (you can get the selected options in onchange callback), or can pass a function that will accept the selected values as params and return the selected options details
         */
        selectedLabels?: string[] | ((selected: string[]) => Promise<any[]>)
    
        /**
         * Gets called whenever the selection changes.
         * The value parameter has the newly selected value
         * option parameter has the complete option/ object that you passed
         */
        onChange: (values: string[], options?: IOption[] | any[]) => void,
    
        /**
         * Text to show when no value is selected
         */
        placeholder?: string,
        /**
         * Any extra css classes to add to the component
         */
        className?: string,
    
        /**
         * Set this to false to indicate the field doesn't have a valid value
         */
        isValid?: boolean,
    
        /**
         * show hide end of content message
         */
        showEndOfContent?: boolean,
        /**
         * A function that will be responsible for rendering each individual option of the list.
         *
         * @example
         *
         * ```
         * renderItem={(option,key)=><div>{option.label}</div>}
         * ```
         *
         * @example
         * ```
         * renderItem={(option,key)=><ItemCard data={item} titleField='label' />}
         * ```
         */
        /**
         * @param isHighlighted `true` when this item is the keyboard-focused option
         * @param isSelected `true` when this item is currently selected
         */
        renderOption?: (item: any, key: number, isHighlighted?: boolean, isSelected?: boolean) => JSX.Element,
    
        /**
         * Option to wrap selected items to one line
         */
        wrapSelectedItemsToOneLine?: boolean,
    
        /**
         * Option to select all items on load
         */
        selectAllOnLoad?: boolean,
    
        /**
         * Option to hide clear button
         */
        hideClearButton?: boolean,
    
        /**
         * Option to hide done button
         */
        hideDoneButton?: boolean,
    
        /**
         * Option to add a classname for the dropdown
         */
        dropdownClassname?: string,
    
        /**
         * Spacing mode
         */
        /**
         * Option to control the min width of the dropdown
         */
        dropdownMinWidth?: number | string,
        /**
         * Option to control the max width of the dropdown
         */
        dropdownMaxWidth?: number | string,
    
        /**
         * Option to control the min height of the dropdown
         */
        dropdownMinHeight?: number,
    
        /**
         * Optional page size when using a function to load data
         */
        pageSize?: number,
    
        /**
         * This will replace the content in the dropdown.
         * If this is enabled, above options (value, onChange , etc) will not work. You have to handle everything
         * You will need to handle the value and onChange options.
         * and once you select options, to close the dropdown, call the closeDropdown function
         */
        renderCustomDropdownContent?: (closeDropdown: () => void) => React.ReactNode,
    
        /**
         * Position of the dropdown relative to the trigger. Defaults to 'bottom-left'.
         */
        position?: DropdownPosition,
    
        /**
         * Option to custom render the placeholder
         */
        renderPlaceholder?: {
            /**
             * render input as a pill
             * work with default select dropdown
             */
            renderAsPill?: {
                minWidth?: number,
                maxWidth?: number
            },
            /**
             * for custom renders
             */
            renderCustomPill?: (onRemove: (e: React.MouseEvent<HTMLElement>, opt: any) => void) => React.ReactNode
        }
    }
        
    
    export interface IDynamicSelectProps {
        /**
         * List of options to render.
         * This a function that will generate the array of objects.
         * pagination will be supported.
         * The function expects 2 parameters - max and last and returns a promise that will resolve to the list of objects. max specifies the maximum number of items to be returned.
         */
        options: IDynamicSelectDataFunction,
        /**
         * selected option label
         */
        selected: string,
        /**
         * Callback that gets executed whenever a option is selected/changed
         */
        onChange: (value: any) => void,
        /**
         * placeholder text
         */
        placeholder?: string,
        /**
         * Any extra css classes to add to the button
         */
        className?: string,
        /**
         * set to valid state if true
         */
        isValid?: boolean,
        /**
         * page size for pagination
         */
        pageSize?: number,
        /**
         * A function that will be responsible for rendering each individual option of the list.
         *
         * @example
         *
         * ```
         * renderItem={(option,key)=><div>{option.label}</div>}
         * ```
         *
         * @example
         * ```
         * renderItem={(option,key)=><ItemCard data={item} titleField='label' />}
         * ```
         */
        renderOption?: (item: any, key: number) => JSX.Element,
        /**
         * name of the field to display
         */
        labelField: string,
        /**
         * Name if the field to use as icon
         * if a value is passed icon will be displayed.
         */
        iconField?: string
        /**
         * number of milliseconds to delay send the request on change query
         * default is 500
         *
         */
        timeout?: number,
        type?: "search-box" | "select-box",
        /**
         * show hide end of content message
         */
        showEndOfContent?: boolean
    }
        
    /**
     * @export
     *
     * max: page size
     * last : last page token
     * args: any args to filter items
     * args has a default option 'query'. when you type in the search box, search text ill be set to this 'query'
     */
    export type IDynamicSelectDataFunction = (max: number, lastPageToken: string, args?: any) => Promise<{ items: Array<any>, pageToken: string }>
        
    /**
     * @export
     * A two-level cascading select.
     * Selecting a value in the primary dropdown loads options for the secondary dropdown.
     * The final value is a combination of both selections joined by `separator` (default `:`)
     * e.g. primary = "System", secondary = "Admin"  →  value = "System:Admin"
     */
    export interface CascadingSelectProps extends InputStateProps {
        /** Options for the first (primary) dropdown */
        primaryOptions: any[];
        /** Field name to display in the primary dropdown. Default: 'label' */
        primaryLabelField?: string;
        /** Field name to use as value in the primary dropdown. Default: 'value' */
        primaryValueField?: string;
        primaryPlaceholder?: string;
    
        /**
         * Called with the selected primary value; must return the options for the secondary dropdown.
         * Called every time the primary selection changes.
         */
        getSecondaryOptions: (primaryValue: string) => Promise<any[]>;
        /** Field name to display in the secondary dropdown. Default: 'label' */
        secondaryLabelField?: string;
        /** Field name to use as value in the secondary dropdown. Default: 'value' */
        secondaryValueField?: string;
        secondaryPlaceholder?: string;
    
        /** Current combined value e.g. "System:Admin". Pass null/undefined to show empty state. */
        selected?: string | null;
        /**
         * Called when both a primary and secondary value are selected.
         * `combined` is null when either side is not yet selected.
         */
        onChange: (combined: string | null, primary: string, secondary: string) => void;
    
        /** String used to join primary + secondary into the combined value. Default: ':' */
        separator?: string;
    
        className?: string;
        /** Stretch both dropdowns to 100% of the container */
        fullWidth?: boolean;
        /** Render as a single unified input with one border and a center divider */
        unified?: boolean;
    }
        
    /**
     * @export
     * Props for the AppRoleInput component
     */
    export interface AppRoleInputProps extends InputStateProps {
        /**
         * Comma-separated "App:Role" pairs, e.g. "System:Admin,Facilities:Manager"
         */
        value: string;
    
        /**
         * Called with the updated comma-separated value whenever the selection changes.
         */
        onChange: (value: string) => void;
    }
        
    /**
     * @export
     */
    export interface ICalendarComponentProps {
        /**
         * array of dates
         */
        dates: Date[]
        /**
         * callback to trigger on click date
         * ill return the clicked date
         */
        onSelectDate: (date: Date) => void
        /**
         * disable weekends
         */
        disableWeekEnds?: boolean,
        /**
         * list of dates to disable
         */
        disableDates?: Array<Date>
        /**
         * min date
         */
        minDate?: Date,
        /**
         * max date
         */
        maxDate?: Date,
        /**
         * class name to use custom styles
         */
        className?: string
    }
        
    /**
     * @export
     *
     */
    export interface IColorPalletProps {
        color: string,
        onChange: (color: string) => void
    }
        
    /**
     * @export
     *
     */
    export interface IColorPickerProps extends InputSizeProps, InputStateProps {
        /**
         *  default color
        */
        color: string,
        /**
         * callback on select a color
         */
        onChange: (color: string) => void,
        /**
         * class name for additional styles
         */
        className?: string,
        /**
         * change display format
         */
        displayFormat?: IColorTypes
        /**
         * change return format
         */
        returnFormat?: IColorTypes
    
        /**
         * Text to show when no color is selected
         */
        placeholder?: string
    
        /**
         * Additional class name for the dropdown container
         */
        dropdownClassname?: string
    
        /**
         * Maximum width for the dropdown content
         */
        dropdownMaxWidth?: number | string
    
        /**
         * Minimum width for the dropdown content
         */
        dropdownMinWidth?: number | string
    
        /**
         * hide the color dot icon
         */
        hideLabels?: boolean
    
        /**
         * When provided, a clear (×) button is shown whenever a color is selected.
         * Clicking it calls this function — the parent is responsible for clearing the value.
         */
        onClear?: () => void
    }
        
    /**
     * @export
     */
    export type IColorTypes = "rgb" | "prgb" | "hex6" | "hex3" | "hex8" | "hsl" | "hsv"
        
    /**
     * @export
     * FileInput component props
     */
    export interface IFileInputProps extends InputSizeProps, InputStateProps {
        /**
         * The file value - can be a File object or a string URL.
         * Optional in headless (`hidden`) mode where no preview is rendered.
         */
        value?: File | string
    
        /**
         * Callback when file changes
         */
        onChange: (file: File, isValid: boolean) => void
    
        /**
         * Array of allowed MIME types (e.g., ['image/*', 'application/pdf']) and/or
         * file extensions (e.g., ['.rpt', '.csv']) for formats without a standard
         * MIME type. Also used to filter the OS file picker (accept attribute).
         */
        allowedTypes?: string[]
    
        /**
         * Preview configuration
         */
        preview?: {
            showName?: boolean // default false
            showPreview?: boolean // default true
        }
    
        /**
         * Additional class name
         */
        className?: string
    
        /**
         * Custom icon for drop area
         */
        dropAreaIcon?: IconProp
    
        /**
         * Custom label for drop area
         */
        dropAreaLabel?: string
    
        /**
         * Compact mode — renders as a single input row (icon + label) instead of a tall drop-zone
         */
        compact?: boolean
    
        /**
         * Headless mode — renders no visible UI, only the hidden native input.
         * Pair with a ref and call `open()` to launch the file picker from your
         * own trigger element (e.g. clicking an avatar). Validation, allowedTypes
         * and the accept filter still apply.
         */
        hidden?: boolean
    }
        
    /**
     * @export
     */
    export interface IFileInputInstanceProps {
        /**
         * Opens the file picker programmatically (headless/hidden mode trigger)
         */
        open: () => void
    }
        
    
    export interface IToggleFilterProps extends InputSizeProps, InputStateProps {
        /**
         * The list of possible options to choose from
         */
        options: IToggleOption[],
    
        /**
         * The current value (selected item)
         */
        value: string,
    
        /**
         * Called whenever an option is selected
         */
        onChange: (newValue: string) => void,
    
        /**
         * Any additional css classes to include
         */
        className?: string,
    
        /**
         * This will render the dropdown if the width is less than the min width
         */
        renderAsDropdown?: {
            minWidth: number,
            renderAsPill?: {
                minWidth?: number,
                maxWidth?: number
            }
        }
    
    }
        
    /**
     * @export
     *
     */
    export interface IToggleOption {
        /**
         * The text shown to the user for this option
         */
        label: string,
    
        /**
         * The actual value stored when this option is selected
         */
        value: string
    }
        
    /**
     * @export
     *
     * pagination component props
     */
    export interface PaginationProps {
        /**
         * Total number of records
         */
        total: number;
    
        /**
         * Page size
         */
        pageSize: number;
    
        /**
         * Current page
         */
        page: number;
    
        /**
         * Callback function when page size changes
         */
        onPageSizeChange: (pageSize: number) => void;
    
        /**
         * Callback function when page changes
         */
        onPageChange: (page: number) => void;
    
        /**
         * Number of items on the current page (used for accurate count display)
         */
        dataLength?: number;
    
        /**
         * Show loading skeleton instead of controls
         */
        loading?: boolean;
    
        /**
         * Allow users to change page size via dropdown (default: true)
         */
        allowPageSizeChange?: boolean;
    }
        
    
    export interface IconPickerProps extends InputSizeProps, InputStateProps {
        /**
         * The icon value in new format (e.g., 'fas:bell') or legacy format (e.g., 'addressBook')
         */
        value?: string;
        /**
         * Callback when icon is selected. Returns new format: 'fas:bell'
         */
        onChange: (value: string) => void;
        /**
         * Optional label for accessibility
         */
        label?: string;
        /**
         * Additional CSS class names
         */
        className?: string;
        /**
         * Default view mode for the modal
         */
        defaultViewMode?: 'compact' | 'expanded';
        /**
         * Hide the icon code label, showing only the icon
         */
        hideLabel?: boolean;
        /**
         * Use compact square mode (3rem x 3rem). Useful for non-form contexts.
         * Default is false (standard input height with icon + code)
         */
        compactMode?: boolean;
        /**
         * Placeholder text when no icon is selected
         */
        placeholder?: string;
    
        /**
         * When provided, a clear (×) button is shown whenever an icon is selected.
         * Clicking it calls this function — the parent is responsible for clearing the value.
         */
        onClear?: () => void;
    }
        
    /**
     * Props for individual Pill component
     */
    export interface PillComponentProps {
        /** The pill's value */
        value: string;
        /** All available field options for context */
        allFields: PillOption[]
        /** Regex to match pill expressions */
        expressionMatcher: RegExp;
        /** Configuration for pill rendering */
        pillConfiguration?: PillConfiguration;
        /** Whether pill can be dragged */
        draggable?: boolean;
        /** Additional CSS classes */
        className?: string;
        /** Click handler */
        onClick?: () => void;
        /** Custom function to split pill values */
        pillValuesSplitFn?: (value: string) => string[];
        /** Index to determine pill type */
        typeIndex?: number
        /** Whether to show formatter controls */
        showFomatters?: boolean,
        /** Callback when formatters change */
        onChangeFormatters?: (value: string) => void
        /** Callback when formatter UI is clicked */
        onClickFormatters?: () => void
        /** Whether the input is disabled */
        disabled?: boolean
        /** Whether the input is readonly */
        readOnly?: boolean
    }
        
    /**
     * @export
     * Represents a selectable option that can become a pill
     */
    export interface PillOption {
        /** Display label for the option */
        label: string;
        /** The actual value used in expressions */
        value: string;
        /** Optional formatters applied to the value */
        formatters?: string[]
    }
        
    /**
     * @export
     * Map of pill type names to their configurations
     */
    export type PillConfiguration = { [type: string]: PillTypeConfig };
        
    /**
     * @export
     * Configuration for different pill types, defining how pills should be rendered
     */
    export interface PillTypeConfig {
        /** Index in the split value to use for rendering */
        valueIndex: number;
        /** Custom function to render the pill value */
        renderValue?: (value: string, allFields: PillOption[]) => string | JSX.Element;
        /** Icon to display - can be string or function that returns icon based on value */
        icon: string | ((val: string) => string);
        /** Text color - can be string or function that returns color based on value */
        textColor: string | ((val: string) => string);
        /** Background color - can be string or function that returns color based on value */
        backgroundColor: string | ((val: string) => string);
    }
        
    /**
     * @export
     * Props for the main PillInput component
     */
    export interface PillInputProps extends InputSizeProps, InputStateProps {
        /** Current input value */
        value: string;
        /** Callback when value changes */
        onChange: (value: string) => void;
        /** Placeholder text for empty input */
        placeholder?: string;
        /** Available options grouped by sections */
        contextDataSections: ContextDatasection[]
        /** Configuration for different pill types */
        pillConfiguration?: PillConfiguration;
        /** Additional CSS classes */
        className?: string;
        /** Focus event handler */
        onFocus?: (event: Event) => void;
        /** Blur event handler */
        onBlur?: () => void;
        /** Title for the options panel */
        panelTitle?: string;
        /** Index in split value to determine pill type */
        typeIndex?: number,
        /** Regex to match expressions that become pills */
        expressionMatcher?: RegExp;
        /** Custom function to split pill values */
        pillValuesSplitFn?: (value: string) => string[];
        /**
         * When provided, a clear (×) button is shown whenever there is a value.
         * Clicking it calls this function — the parent is responsible for clearing the value.
         * If not provided, the clear button calls onChange('') internally.
         */
        onClear?: () => void;
        /**
         * @deprecated
         * Position of the options panel relative to input
         * */
        panelPosition?: 'left' | 'right'
        /** Show/hide formatter controls on pills (default: true) */
        showFormatters?: boolean;
        /** Show raw value below the editor for debugging */
        inspect?: boolean;
    }
        
    /**
     * @export
     * Groups related pill options under a section header
     */
    export interface ContextDatasection {
        /** Section header text */
        label: string;
        /** Available options in this section */
        fields: PillOption[];
    }
        
    /**
     * @export
     * Methods exposed by the PillInput component via ref
     */
    export interface PillInputHandlers {
        /** Programmatically focus the input */
        focus: () => void;
        /** Insert text at current cursor position */
        insertAtCursor: (value: string) => void;
    }
        
    /**
     * @export
     * Props for the ActionsListComponent.
     */
    export interface ActionsListProps {
        /**
         * Array of actions or a function returning actions or a React node to render.
         */
        actions: Action[] | ((item?: any) => Action[] | React.ReactNode);
    
        /**
         * Optional data item to pass to action callbacks.
         */
        item?: any;
    
        /**
         * Optional value to compare against action.value for highlighting selected state.
         * When action.value === selectedValue, the action will be styled as selected.
         */
        selectedValue?: any;
    
        /**
         * Additional CSS class names to apply to the actions list container.
         */
        className?: string;
    
        /**
         * Optional ref to the parent dropdown, used to close it after an action is clicked.
         * @internal
         */
        parentDropdownRef?: React.RefObject<DropdownHandlers>;
    }
        
    /**
     * @export
     * Union type for an action, either a BaseAction or an ActionWithChildren.
     */
    export type Action = BaseAction | ActionWithChildren;
        
    /**
     * @export
     * Base configuration for an action in the ActionsListComponent.
     */
    export interface BaseAction {
        /**
         * Label for the action, either a string (translated via context) or a React node.
         */
        label: string | ReactNode;
    
        /**
         * Optional value for selection comparison.
         * Used with selectedValue prop to determine if this action is selected.
         */
        value?: any;
    
        /**
         * Optional FontAwesome icon identifier for the action.
         */
        icon?: string;
    
        /**
         * Callback function triggered when the action is clicked, receiving the associated data item.
         */
        onClick: (item: any) => Promise<void> | void;
    
        /**
         * Optional function to control visibility of the action based on the item data.
         * If not provided, the action is always visible.
         * @param item - The data item associated with this action
         * @returns true to show the action, false to hide it
         */
        visible?: (item: any) => boolean;
    }
        
    /**
     * @export
     * Configuration for an action with nested children, extending BaseAction without onClick.
     */
    export interface ActionWithChildren extends Omit<BaseAction, 'onClick'> {
        /**
         * Child actions or a function returning child actions or a React node, rendered in a dropdown.
         */
        children: BaseAction[] | ((item?: any) => ReactNode | BaseAction[]);
    
        /**
         * Optional ref to pass to the Dropdown component for the action.
         */
        ref?: any;
    }
        
    /**
     * @export
     * Props for the ButtonGroup component.
     */
    export interface ButtonGroupProps {
        /**
         * Array of button configurations to render.
         */
        buttons: ButtonGroupItem[];
    
        /**
         * ID of the currently active button.
         */
        activeId?: string;
    
        /**
         * Button variant applied to all buttons. Defaults to 'secondary'.
         */
        variant?: ButtonComponentVarient;
    
        /**
         * Additional CSS class names to apply to the button group container.
         */
        className?: string;
    
        /**
         * Custom inline styles for the button group container.
         */
        styles?: React.CSSProperties;
    
        /**
         * Callback triggered when a button is clicked, receiving the button's ID.
         */
        onButtonClick?: (buttonId: string) => void;
    }
        
    /**
     * @export
     * Configuration for a button in the ButtonGroup, extending ButtonComponentProps.
     */
    export interface ButtonGroupItem extends Omit<ButtonComponentProps, 'variant' | 'active'> {
        /**
         * Unique identifier for the button.
         */
        id: string;
    
        /**
         * Optional dropdown content for the button, making it a dropdown button.
         */
        dropdownContent?: React.ReactNode;
    
        /**
         * Position of the dropdown relative to the button.
         */
        dropdownPosition?: DropdownPosition;
    
        /**
         * If true, shows an anchor connecting the dropdown to the button.
         */
        showAnchor?: boolean;
    }
        
    /**
     * @export
     * Props for the CodeEditor component.
     */
    export interface CodeEditorProps extends InputSizeProps, InputStateProps {
        /** Current editor value */
        value: string;
        /** Callback when the content changes */
        onChange: (value: string) => void;
        /** Syntax highlighting language. Defaults to 'text'. */
        language?: CodeEditorLanguage;
        /** Callback on editor focus */
        onFocus?: () => void;
        /** Callback on editor blur, receives current value */
        onBlur?: (value: string) => void;
        /** Additional CSS class names */
        className?: string;
        /** Placeholder text shown when the editor is empty */
        placeholder?: string;
        /** Show line numbers in the gutter. Defaults to false. */
        lineNumbers?: boolean;
        /** Spaces per indent level. Defaults to 4. */
        indentUnit?: number;
        /** Extra TypeScript .d.ts content to register for autocomplete (JS/TS only). */
        extraLibs?: { content: string; filename: string }[];
        /** Grow to fit content with no internal scrolling. Do not combine with a fixed `height`. */
        autoHeight?: boolean;
        /** Hide the toolbar completely. */
        hideToolbar?: boolean;
        /** Show the toolbar as icon-only buttons (no text labels). */
        compactToolbar?: boolean;
    }
        
    /**
     * @export
     * Supported syntax highlighting languages for CodeEditor.
     */
    export type CodeEditorLanguage = 'javascript' | 'typescript' | 'markdown' | 'html' | 'css' | 'json' | 'text';
        
    /**
     * @export
     * Methods exposed by the CodeEditor component via ref.
     */
    export interface CodeEditorHandlers {
        /** Programmatically focus the editor */
        focus: () => void;
        /** Validate the current content. Returns validation result with valid flag, error message, and current code. */
        validate: () => { valid: boolean; error: string; code: string };
    }
        
    /**
     * @export
     * Props for the MarkdownPreview component.
     */
    export interface MarkdownPreviewProps {
        /** Markdown source string to render */
        value: string;
        /** Additional CSS class names */
        className?: string;
        /** Text shown when value is empty */
        emptyText?: string;
        /**
         * When true, render in a clamped read-only form suitable for inline
         * preview triggers — the rendered markdown is line-clamped via CSS
         * and overflow is hidden. Use together with `maxLines`.
         */
        compact?: boolean;
        /** Max visible lines in compact mode. Defaults to 5. */
        maxLines?: number;
    }
        
    /**
     * @export
     * Props for the MarkdownEditor component.
     */
    export interface MarkdownEditorProps extends InputSizeProps, InputStateProps {
        /** Current markdown value */
        value: string;
        /** Callback when the content changes */
        onChange: (value: string) => void;
        /** Additional CSS class names */
        className?: string;
        /** Placeholder text shown when the editor is empty */
        placeholder?: string;
        /** Show line numbers in the gutter. Defaults to false. */
        lineNumbers?: boolean;
        /** Spaces per indent level. Defaults to 4. */
        indentUnit?: number;
        /** Which tab is active on mount. Defaults to 'write'. */
        defaultTab?: 'write' | 'preview';
        /**
         * Controlled active tab. When provided, the built-in Write/Preview tab strip is hidden
         * and the caller is responsible for switching tabs (e.g. via toolbar buttons).
         */
        activeTab?: 'write' | 'preview';
        /** Hide the built-in Write/Preview tab strip. Use with ref handlers or activeTab for external control. */
        hideTabs?: boolean;
        /** Text shown in the preview pane when value is empty */
        previewEmptyText?: string;
        /** Hide the CodeEditor toolbar entirely */
        hideToolbar?: boolean;
        /** Show a compact icon-only toolbar instead of the full button-group toolbar */
        compactToolbar?: boolean;
    }
        
    /**
     * @export
     * Methods exposed by the MarkdownEditor component via ref.
     */
    export interface MarkdownEditorHandlers {
        /** Programmatically focus the editor */
        focus: () => void;
        /** Switch to a specific tab */
        setTab: (tab: 'write' | 'preview') => void;
        /** Toggle between write and preview tabs */
        toggleTab: () => void;
        /** Returns the currently active tab */
        getTab: () => 'write' | 'preview';
    }
        
    /**
     * @export
     * Props for the Chip component
     */
    export interface ChipProps {
        /**
         * Optional icon identifier for the chip (e.g., FontAwesome icon name).
         */
        icon?: string;
    
        /**
         * The label content to display in the chip. Can be a string or a React node.
         * Omit or pass an empty string to render icon-only (circle) mode.
         */
        label?: string | ReactNode;
    
        /**
         * Position of the icon relative to the label. Defaults to 'left'.
         */
        iconPosition?: 'left' | 'right';
    
        /**
         * Background color of the chip. Accepts any valid CSS color value.
         */
        backgroundColor?: string;
    
        /**
         * Text color of the chip. Accepts any valid CSS color value.
         */
        textColor?: string;
    
        /**
         * Callback function executed when the chip is clicked.
         */
        onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    
        /**
         * Additional CSS styles to apply to the chip.
         */
        additionalStyles?: React.CSSProperties;
    
        variant?: ChipVariant,
    
        size?: ChipSize
    }
        
    /**
     * @export
     */
    export type ChipVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success';
        
    /**
     * @export
     */
    export type ChipSize = 'small' | 'medium' | 'large';
        
    /**
     * @export
     * Props for the TagInput component.
     */
    export interface TagInputProps extends InputSizeProps, InputStateProps {
        /**
         * Current list of tags
         */
        value: string[];
    
        /**
         * Called whenever the tag list changes
         */
        onChange: (tags: string[]) => void;
    
        /**
         * Suggestions: static list or async resolver.
         * When provided, a dropdown of matching suggestions appears as the user types.
         */
        options?: string[] | ((text: string) => Promise<string[]>);
    
        /**
         * Placeholder shown when there are no tags and the input is empty
         */
        placeholder?: string;
    
        /**
         * Characters that submit the current input as a tag.
         * Enter always works regardless of this setting.
         * @default [',']
         */
        delimiters?: string[];
    
        /**
         * Additional class name on the outer container
         */
        className?: string;
    
        /**
         * Optional "add new" affordance rendered as a pinned footer in the
         * suggestion dropdown. Supports two scenarios — see {@link IAddNewValues}:
         *
         * - **Scenario A** (`onAddNewValue`): button surfaces only when the
         *   typed query has no matches. The resolved value is appended as a
         *   new tag.
         * - **Scenario B** (`alwaysShow: true` + `onClick`): button is always
         *   visible at the bottom of the dropdown; the host owns the side-effect
         *   (e.g. opening a slide-in form to register a new tag, then refreshing
         *   the options list via an event bus).
         *
         * @example
         * ```tsx
         * // Scenario A — create from typed text on no-match
         * <TagInput
         *   value={tags} onChange={setTags} options={fruits}
         *   addNewValues={{
         *     enable: true, title: 'Add as new fruit', loadingTitle: 'Saving…',
         *     onAddNewValue: async (typed) => {
         *       const created = await api.create(typed);
         *       return created.name;
         *     },
         *   }}
         * />
         * ```
         *
         * @example
         * ```tsx
         * // Scenario B — always-visible launcher button
         * <TagInput
         *   value={tags} onChange={setTags} options={tagCatalog}
         *   addNewValues={{
         *     enable: true, title: '+ New Tag', alwaysShow: true,
         *     onClick: () => openTagForm(),
         *   }}
         * />
         * ```
         */
        addNewValues?: IAddNewValues;
    }
        
    
    export interface IProfileImageProps {
        /**
         * The url for the image to be shown, or icon pattern (e.g., "fas user", "phb house")
         */
        image?: string | IconProp;
    
        /**
         * Any name to be displayed. This is used only if the image is empty.
         * 2 letters will be derived from the name (typically the first letter of the first 2 words in the name)
         * and a background color will be chosen. Background colors are random but consistent.
         */
        name?: string;
    
        /**
         * Custom background color
         */
        bgColor?: string;
    
        /**
         * Custom text color (for initials)
         */
        textColor?: string;
    
        /**
         * Additional CSS class names
         */
        className?: string;
    
        /**
         * Inline styles for the container
         */
        style?: React.CSSProperties;
    
        /**
         * Size: small (2.67rem/32px), medium (3.33rem/40px, default), large (4rem/48px), or custom rem value (e.g., "5rem")
         */
        size?: Size;
    
        /**
         * Shape: circle (default) or square (slightly rounded)
         */
        shape?: Shape;
    
        /**
         * If true, renders the name text as-is without extracting acronym. Defaults to false.
         * Useful for displaying badges like "+2" or custom text.
         */
        skipAcronym?: boolean;
    
        /**
         * Border color for the profile image. If not provided, no border is applied.
         */
        borderColor?: string;
    
        /**
         * Border width. Defaults to '3px'. Only applied when borderColor is provided.
         */
        borderWidth?: string;
    }
        
    
    export type Size = "small" | "medium" | "large" | string;
        
    
    export type Shape = "circle" | "square";
        
    
    export interface IItemCardProps {
        /**
         * A reference to the data to be rendered as a card.
         */
        item?: any,
    
        /**
         * The name of the field within the `item` that has the url of an image to be shown
         */
        imageField?: string,
    
        /**
         * The name of the field within `item` that has the title of the object
         */
        titleField?: string,
    
        /**
         * The name of the field within 'item' that holds the subtitle of the object
         */
        subTitleField?: string,
    
        /**
         * This name of the field within `item` that contains any 'name' associated with the object.
         * This property is used only if the imageField value is not set. The name is abbreviated and set as the profile image.
         */
        nameField?: string,
    
        /**
         * Any extra css classes to biind to the card.
         */
        className?: string,
    
        /**
         * These parameres will enable option to pass a value for each fields inseat of the field name.
         * Using these, users/developers will be able to provide static values
         */
        image?: string,
        name?: string,
        title?: string,
        subTitle?: string,
    
        /**
         * Size of the profile image: small (2rem), medium (3rem, default), large (4rem), or custom CSS unit (e.g., "5rem")
         */
        size?: Size,
    
        /**
         * Shape of the profile image: circle (default) or square
         */
        shape?: Shape
    }
        
    /**
     * @export
     * Props for the ObjectInfoCard component.
     */
    export interface ObjectInfoCardProps {
        /**
         * Array of fields to display in the card.
         */
        fields: ObjectField[];
    
        /**
         * Number of columns for the grid layout (1, 2, 3, or 4). Defaults to 2.
         */
        columns?: 1 | 2 | 3 | 4;
    
        /**
         * Layout direction for label and value. Defaults to 'horizontal'.
         * - 'horizontal': Label and value displayed on the same line (label : value)
         * - 'vertical': Value displayed below the label
         */
        layout?: 'horizontal' | 'vertical';
    
        /**
         * Alignment for the value text. Defaults to 'end' for vertical layout, 'start' for horizontal.
         * - 'start': Align value to the start (left in LTR, right in RTL)
         * - 'end': Align value to the end (right in LTR, left in RTL)
         */
        valueAlign?: 'start' | 'end';
    
        /**
         * Additional class names to apply to the card container.
         */
        className?: string;
    
        loading?: boolean;
    
        /**
         * An optional title for the card container
         */
        title?: string;
    }
        
    /**
     * @export
     * Configuration for a field displayed in the ObjectInfoCard.
     */
    export interface ObjectField {
        /**
         * Label for the field.
         */
        label: string;
    
        /**
         * Value of the field, can be any type.
         */
        value: any;
    
        /**
         * Optional FontAwesome icon identifier for the field.
         */
        icon?: string;
    
        /**
         * Optional custom renderer for the field value.
         */
        renderValue?: (value: any) => React.ReactNode;
    }
        
    /**
     * @export
     * Props for BaseTableComponent
     */
    export interface BaseTableComponentProps {
        /** Processed columns with calculated widths */
        columns: { [id: string]: ExtendedColumn };
        /** Array of row data to display */
        data: RowData[];
        /** Show loading state with skeleton rows */
        loading: boolean;
        /** Message or component to display when no items are found */
        noItemsMessage?: string | React.ReactNode;
        /** Total width of the table */
        totalWidth: string | number;
        /** Callback when a column is resized */
        handleResize: (id: string, width: number) => void;
        /** Custom header renderer */
        renderHeader?: (columns: { [id: string]: ExtendedColumn }, handleResize: (id: string, width: number) => void) => React.ReactNode;
        /** Custom row renderer */
        renderRow?: (tableRowProps: TableRowProps) => React.ReactNode;
        /** Custom renderer for child/nested rows */
        renderChildRows?: (childRows: RowData[], rowProps: TableRowBasicProps) => React.ReactNode
        /** Custom cell renderer — replaces the default TableCell output for every cell */
        renderCell?: (row: RowData, column: ExtendedColumn) => React.ReactNode;
        /** Callback when a row is clicked */
        onClickRow?: (e: React.MouseEvent<HTMLDivElement>, item: RowData) => void;
        /** Function to determine if a row is selected */
        isRowSelected?: (item: RowData) => boolean
        /** Callback when a row is selected */
        onSelectRow?: (item: RowData) => void,
        /** Current sort configuration */
        sort?: Sort,
        /** Enable sorting multiple columns simultaneously */
        multiColumnSort?: boolean,
        /** Callback when sort changes */
        onChangeSort?: (sort: Sort) => void
        /** Enable editable mode with inline editing */
        editable?: EditableConfig;
    }
        
    /**
     * @export
     * Extended column with a calculated width property.
     */
    export interface ExtendedColumn extends Column {
        /** Actual width of the column in pixels after calculations */
        width: number;
    }
        
    /**
     * @export
     * Column definition for the data table
     */
    export interface Column {
        /** Unique identifier for the column */
        id: string;
        /** Display text or component for column header */
        label: string | ReactNode;
        /** Custom renderer for column cell content */
        renderColumn?: (item: any, index?: number) => ReactNode;
        /**
         * Custom renderer for editing existing items (editable mode only).
         * The `update` callback expects the full updated item object.
         * @example
         * ```tsx
         * renderEditItem: (item, update) => (
         *   <Select
         *     selected={item.type}
         *     onChange={(newType) => update({ ...item, type: newType })}
         *   />
         * )
         * ```
         */
        renderEditItem?: (item: any, update: (updatedItem: any) => void) => ReactNode;
        /**
         * Custom renderer for creating new items (editable mode only).
         * The `update` callback expects the full updated item object.
         * @example
         * ```tsx
         * renderNewItem: (item, update) => (
         *   <ColorPicker
         *     color={item.color}
         *     onChange={(newColor) => update({ ...item, color: newColor })}
         *   />
         * )
         * ```
         */
        renderNewItem?: (item: any, update: (updatedItem: any) => void) => ReactNode;
        /** Minimum width of the column in pixels */
        minWidth?: number;
        /** Maximum width of the column in pixels */
        maxWidth?: number;
        /** Callback when a cell in this column is clicked */
        onClickColumn?: (e: React.MouseEvent<HTMLDivElement>, item: any, column: Column) => void;
        /** Allows column to be resized */
        isResizable?: boolean;
        /** Allows sorting for this column */
        isSortable?: boolean;
        /** Render label vertically (rotated 90 degrees) */
        verticalLabel?: boolean;
    }
        
    /**
     * @export
     * Represents a single row of data in the table
     */
    export interface RowData {
        /** Allow any property on the row data */
        [key: string]: any;
        /** Optional child rows that can be expanded */
        children?: RowData[] | ((item: RowData) => Promise<RowData[]>);
        /** Internal flag to mark a row as newly created (for editable mode) */
        __newitem__?: boolean;
    }
        
    /**
     * @export
     * Props for TableRow component
     */
    export interface TableRowProps extends TableRowBasicProps {
        /** The row data to display */
        row: RowData;
    }
        
    /**
     * @export
     * Base props shared across table row components
     */
    export interface TableRowBasicProps {
        /** Column definitions with calculated widths */
        columns: { [id: string]: ExtendedColumn };
        /** Custom cell renderer function */
        renderCell?: (row: RowData, column: ExtendedColumn) => React.ReactNode;
        /** Callback when a row is clicked */
        onClickRow?: (e: React.MouseEvent<HTMLDivElement>, row: RowData) => void;
        /** Function to determine if a row is selected */
        isRowSelected?: (row: RowData) => boolean;
        /** Callback when a row is selected */
        onSelectRow?: (row: RowData) => void;
        /** Custom renderer for child rows */
        renderChildRows?: (childRows: RowData[], rowProps: TableRowBasicProps) => React.ReactNode;
        /** Enable editable mode with callbacks */
        editable?: EditableRowConfig;
        /** Enable drag and drop sorting */
        sortable?: boolean;
        /** Unique ID for drag and drop */
        dragId?: string;
    }
        
    /**
     * @export
     * Configuration for enabling editable mode on table rows
     */
    export interface EditableRowConfig {
        /** Callback when a row update is requested */
        onUpdateRow?: (row: RowData) => Promise<boolean>;
        /** Callback when a row deletion is requested */
        onDeleteRow?: (row: RowData) => Promise<boolean>;
        /** Callback when a new row is being added */
        onAddRow?: (row: RowData) => Promise<boolean>;
        /** Callback when editing is cancelled */
        onCancelEditing?: (row: RowData) => void;
        /** Callback when new row creation is cancelled */
        onCancelNewRow?: () => void;
        /** Custom labels for action buttons */
        labels?: {
            delete?: string;
            save?: string;
            cancel?: string;
        };
    }
        
    /**
     * @export
     * Map of column IDs to their sort orders for multi-column sorting
     */
    export type Sort = Record<string, SortOrder>
        
    /**
     * @export
     * Sort order values: 1 for ascending, -1 for descending, 0 for no sort
     */
    export type SortOrder = 1 | -1 | 0;
        
    /**
     * @export
     * Configuration for enabling editable mode on the table
     */
    export interface EditableConfig {
        /** Callback when adding a new row */
        onAddItem?: (index: number, item: RowData) => Promise<boolean>;
        /** Callback when updating an existing row */
        onUpdateItem?: (index: number, item: RowData) => Promise<boolean>;
        /** Callback when deleting a row */
        onDeleteItem?: (index: number, item: RowData) => Promise<boolean>;
        /** Callback when cancelling new row creation */
        onCancelNewItem?: () => void;
        /** Callback when cancelling row edit */
        onCancelItem?: () => void;
        /** Enable drag and drop row reordering */
        onReorderItems?: (reorderedData: RowData[]) => void;
        /** Custom labels for action buttons */
        labels?: {
            delete?: string;
            save?: string;
            cancel?: string;
        };
    }
        
    /**
     * @export
     * Props for TableCell component
     */
    export interface TableCellProps {
        /** The row data object */
        row: any;
        /** The column definition with calculated widths */
        column: ExtendedColumn;
        /** Custom cell renderer function */
        renderCell?: (row: any, column: ExtendedColumn) => React.ReactNode;
    }
        
    /**
     * @export
     * Props for SkeletonTableRow component
     */
    export interface SkeletonTableRowProps {
        /** Column definitions with calculated widths */
        columns: { [id: string]: ExtendedColumn };
    }
        
    /**
     * @export
     * Props for SafeLink.
     * Extends default anchor props with router awareness.
     */
    export interface SafeLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
        /** Target URL or path */
        to: string;
    
        /** Replace history instead of pushing (only in router) */
        replace?: boolean;
    
        /** Link text or elements */
        children: React.ReactNode;
    
        /** CSS class name */
        className?: string;
    }
        
    /**
     * @export
     * Props for the Breadcrumb component.
     */
    export interface BreadcrumbProps {
        /**
         * Array of breadcrumb items to display.
         */
        items: BreadcrumbItem[];
    
        /**
         * Maximum number of items to display before collapsing. Defaults to 4.
         */
        maxItems?: number;
    
        /**
         * Number of items to show on the left side before ellipsis. Defaults to 1.
         */
        itemsOnLeft?: number;
    
        /**
         * Number of items to show on the right side after ellipsis. Minimum 2 (parent + active). Defaults to 2.
         */
        itemsOnRight?: number;
    
        /**
         * Custom separator between breadcrumb items. Defaults to '>'.
         */
        separator?: React.ReactNode;
    
        /**
         * Additional class names for the breadcrumb container.
         */
        className?: string;
    
        /**
         * Text color for breadcrumb items. Defaults to inherit from parent.
         */
        textColor?: string;
    
        /**
         * Background color for the breadcrumb container. Defaults to inherit from parent.
         */
        backgroundColor?: string;
    
        /**
         * Color for active/current breadcrumb item. Defaults to inherit from textColor.
         */
        activeColor?: string;
    
        /**
         * Color for separator between items. Defaults to inherit from textColor with opacity.
         */
        separatorColor?: string;
    
        /**
         * Hover color for interactive items. Defaults to inherit from textColor.
         */
        hoverColor?: string;
    
        /**
         * Callback when a breadcrumb item is clicked.
         */
        onItemClick?: (item: BreadcrumbItem, index: number) => void;
    }
        
    /**
     * @export
     * Represents a single breadcrumb item.
     */
    export interface BreadcrumbItem {
        /**
         * Display label for the breadcrumb item.
         */
        label: string;
    
        /**
         * Optional icon to display before the label.
         */
        icon?: IconProp;
    
        /**
         * Link/path for the breadcrumb item. If not provided, item is not clickable.
         */
        link?: string;
    
        /**
         * Optional click handler. If provided, will be called instead of navigation.
         */
        onClick?: (item: BreadcrumbItem) => void;
    }
        
    /**
     * @export
     * Props for the AnalyticsCard component.
     */
    export interface AnalyticsCardProps {
        /**
         * FontAwesome icon identifier for the card.
         */
        icon: string;
    
        /**
         * Value to display (number or string).
         */
        value: string | number;
    
        /**
         * Label for the card.
         */
        label: string;
    
        /**
         * Whether the card is in loading state.
         */
        loading?: boolean;
    
        /**
         * Use small variant for compact display.
         */
        small?: boolean;
    }
        
    /**
     * @export
     * Props for the ObjectDetailsPanelHeader component.
     */
    export interface ObjectDetailsPanelHeaderProps {
        /**
         * Row data item. When provided, function-based props can use this data.
         */
        item?: RowData;
    
        /**
         * Breadcrumb items to display at the top. Can be static or a function that receives the item.
         */
        breadcrumb?: BreadcrumbItem[] | ((item: RowData, loading?: boolean) => BreadcrumbItem[]);
    
        /**
         * Main title content (string or JSX). Can be static or a function that receives the item.
         */
        title: string | React.ReactNode | ((item: RowData, loading?: boolean) => React.ReactNode);
    
        /**
         * Status content to display inline with title (e.g., chip, badge). Can be static or a function that receives the item.
         */
        status?: React.ReactNode | ((item: RowData, loading?: boolean) => React.ReactNode);
    
        /**
         * Subtitle content (string or JSX) displayed below title in smaller text. Can be static or a function that receives the item.
         */
        subtitle?: React.ReactNode | ((item: RowData, loading?: boolean) => React.ReactNode);
    
        /**
         * Array of analytics cards to display on the right side. Can be static or a function that receives the item.
         */
        analytics?: AnalyticsCardProps[] | ((item: RowData, loading?: boolean) => AnalyticsCardProps[]);
    
        /**
         * Background image URL. Can be static or a function that receives the item.
         */
        backgroundImage?: string | ((item: RowData, loading?: boolean) => string);
    
        /**
         * Whether the header is in loading state.
         */
        loading?: boolean;
    
        /**
         * custom classname for additional styles
         */
        className?: string
    }
        
    /**
     * @export
     * Props for the AddOnProvider component.
     */
    export interface AddOnProviderProps {
        /**
         * Child components to render within the provider.
         */
        children: React.ReactNode;
    }
        
    /**
     * @export
     * Props for the Dashboard component
     */
    export interface DashboardProps {
        /**
         * Array of widget instances to render
         */
        widgets: ComponentInstance[];
    
        /**
         * Optional responsive layout overrides for different breakpoints
         */
        layouts?: ResponsiveLayouts;
    
        /**
         * Callback to save dashboard state (called with processed widgets and layouts)
         */
        onSave: (widgets: ComponentInstance[], layouts: ResponsiveLayouts) => Promise<boolean>;
    
        /**
         * Grid margin [horizontal, vertical] in pixels (default: [10, 10])
         */
        margin?: [number, number];
    
        /**
         * Grid padding [horizontal, vertical] in pixels (default: [10, 10])
         */
        padding?: [number, number];
    
        /**
         * Whether dashboard is in editing mode
         */
        isEditing: boolean;
    
        /**
         * Allow dragging/rearranging widgets without full edit mode
         */
        allowRearrange?: boolean;
    
        /**
         * Responsive breakpoints and columns count configuration
         */
        breakpoints?: Record<string, BreakPoint>;
    
        /**
         * Callback when breakpoint changes
         */
        onChangeBreakPoint?: (cols: number) => void;
    
        /**
         * Show spacer widget at bottom for extra scrolling space
         */
        showSpacerWidget?: boolean;
    
        /**
         * Show placeholder widget when dashboard is empty
         */
        emptyPlaceholder?: {
            /**
             * Whether to show placeholder
             */
            show?: boolean;
            /**
             * Custom message to display
             */
            message?: string;
            /**
             * Callback when placeholder is clicked
             */
            onClick?: () => void;
        }
    
        /**
         * Allow free positioning of widgets without vertical compaction (disables auto-stacking)
         */
        allowFreePositioning?: boolean;
    
        /**
         * Allow widgets to overlap/stack on top of each other (default: false)
         */
        allowOverlap?: boolean;
    
        /**
         * Restrict widgets to grid boundaries, preventing drag/resize outside viewport (default: false)
         */
        isBounded?: boolean;
    
        /**
         * Transform scale for zoomed/scaled containers (default: 1)
         */
        transformScale?: number;
    
        /**
         * Callback when dashboard container mounts (provides ref to container element)
         */
        onContainerMount?: (ref: HTMLDivElement) => void;
    
        /**
         * Force specific breakpoint for preview/editing (null = auto-responsive)
         */
        breakpointOverride?: string | null;
    
        /**
         * Render the dashboard as a transparent overlay.
         * The container becomes pointer-events: none so clicks pass through to the
         * content beneath, while individual widget items remain interactive.
         * Implies allowOverlap=true, allowFreePositioning=true, isBounded=true,
         * showSpacerWidget=false unless explicitly overridden.
         */
        overlayMode?: boolean;
    
        /**
         * Disable breakpoint override dimensions. When true, the container never gets
         * a forced fixed width/height from the breakpoint preview feature. Use this for
         * embedded mini-dashboards (e.g. WidgetPanel) where the container should always
         * fill its available space.
         */
        disableOverrideDimensions?: boolean;
    
        /**
         * How items compact after a drag/resize. 'vertical' stacks downward,
         * 'horizontal' packs leftward (use with maxRows=1 for a horizontal strip),
         * null disables compaction. Default: 'vertical'.
         */
        compactType?: 'vertical' | 'horizontal' | null;
    
        /**
         * Maximum number of rows. Useful for horizontal orientation to prevent
         * widgets from stacking vertically (e.g. maxRows=1 for a single-row strip).
         */
        maxRows?: number;
    
        /**
         * Extra props merged into every widget at render time (not init time).
         * Use this for runtime context like URL params, event payloads, or global filters
         * that should not trigger a full dashboard re-initialization when they change.
         */
        widgetPropsOverride?: Record<string, any>;
    
        /**
         * Show gridlines in edit mode based on cell size.
         */
        showGridlines?: boolean;
    
        /**
         * Optional layout orientation mode.
         * - 'vertical': widgets stack full-width, scroll Y, height-only resize
         * - 'horizontal': single-row strip using `rows` as the row count; widgets fill container
         *   height, scroll X, grid grows rightward. `compactType`/`maxRows`/`resizeHandles` are
         *   all derived from this — do not set them manually when using orientation.
         */
        orientation?: 'vertical' | 'horizontal';
    
        /**
         * Number of rows for horizontal orientation (default: 3).
         * Row height = (containerHeight - margins) / rows (1:1 cells).
         * Also sets maxRows so items can't spill below the strip.
         */
        rows?: number;
    }
        
    // IConfigPanelProps, IWidgetPreloader, IWidgetConfigs, IWidget, IRenderUIItemProps,
    // BackgroundSurface, BackgroundConfig, BackgroundConfigPanelProps, IWidgetInstance
    // → moved to ./types/legacy-component-types.ts, re-exported below via export *
    /** Canonical runtime instance for any registered component (widget / UI / background). */
    export interface ComponentInstance {
        _id: string;
        id: string;
        key: string;
        name: string;
        description?: string;
        /** The React component to render. */
        component: React.ComponentType<any>;
        configs?: ComponentConfigs;
        defaultProps?: Record<string, any>;
        /** Admin-configured prop values (was `.props` on IWidgetInstance). */
        configuredProps?: Record<string, any>;
        hasConfigured: boolean;
        /** Grid layout — used by dashboard grids. */
        layout?: ILayout | any;
        /** Text direction — applies to all component types. */
        direction?: 'ltr' | 'rtl';
        sourceUrl?: string;
        preloaded?: boolean;
        isNotAvalable?: boolean;
        // Marketplace / template fields
        installed?: boolean;
        isTemplate?: boolean;
        isDefaultTemplate?: boolean;
        templateKey?: string;
        templateType?: string;
        category?: string;
        usecaseId?: string;
        usecaseName?: string;
        definitionPath?: string;
        vendor?: string;
        localizedName?: string;
        localizedDescription?: string;
        external?: {
            styles?: Record<string, string>;
            scripts?: Record<string, string>;
        };
    }
        
    
    export enum ComponentType {
        Widget     = 'widget',
        UI         = 'ui',
        Background = 'background',  // NEW
        Component  = 'component',   // NEW — unified type segment for new registerComponent() calls
    }
        
    /** Shared config schema — used by widgets, UIs, and backgrounds */
    export interface ComponentConfigs {
        layout?: {
            w?: number;
            h?: number;
            isDraggable?: boolean;
            isResizable?: boolean;
            maxH?: number;
            maxW?: number;
            minH?: number;
            minW?: number;
            static?: boolean;
        };
        props?: DynamicFormFieldProps[] | FormSectionProps[];
        configPanel?: React.FunctionComponent<ConfigPanelProps>;
        preLoader?: ComponentPreloader;
    }
        
    // ============================================================================
    // UNIFIED COMPONENT CONFIG TYPES
    // ============================================================================
    /** Shared config panel props — used by widgets, UIs, and backgrounds */
    export interface ConfigPanelProps {
        configs: { [key: string]: any };
        onSubmit: (data: { [key: string]: any }) => void;
        onCancel?: () => void;
        uxpContext?: any;
        instanceId?: string;
    }
        
    
    export type ComponentPreloader = 'default' | 'line-chart' | 'bar-chart' | 'donut-chart' | 'heatmap-chart' | 'gauge' | 'map';
        
    // widget object
    // layout
    export interface ILayout {
        x: number,
        y: number,
        w: number,
        h: number,
        isDraggable?: boolean,
        isResizable?: boolean,
        maxH?: number,
        maxW?: number,
        minH?: number,
        minW?: number,
        static: boolean,
        i: string,
        _id: string
    }
        
    /**
     * @export
     * Layout configuration for different responsive breakpoints
     */
    export interface ResponsiveLayouts {
        /**
         * Large breakpoint layout (1200px+)
         */
        lg?: Layout[];
        /**
         * Medium breakpoint layout (996px - 1199px)
         */
        md?: Layout[];
        /**
         * Small breakpoint layout (768px - 995px)
         */
        sm?: Layout[];
        /**
         * Extra small breakpoint layout (480px - 767px)
         */
        xs?: Layout[];
        /**
         * Extra extra small breakpoint layout (0px - 479px)
         */
        xxs?: Layout[];
        /**
         * Additional custom breakpoints
         */
        [breakpoint: string]: Layout[] | undefined;
    }
        
    /**
     * @export
     * Breakpoint configuration
     */
    export interface BreakPoint {
        /**
         * Minimum width in pixels for this breakpoint
         */
        width: number;
        /**
         * Number of grid columns for this breakpoint
         */
        columns: number;
        /**
         * Display label for the breakpoint
         */
        label?: string;
        /**
         * Icon identifier for the breakpoint
         */
        icon?: string;
    }
        
    /**
     * @export
     */
    export interface ComponentRendererProps {
        // Path A: by ID — resolves via lookupComponent + lazy script loading
        moduleId?: string;
        componentId?: string;
        type?: ComponentType;
    
        // Path B: pre-resolved instance — skip lookup (used by DashboardWidget, BackgroundRenderer)
        componentInstance?: ComponentInstance;
    
        // Shared
        configuredProps?: Record<string, any>;
        hasConfigured?: boolean;
        onConfigureRequest?: () => void;
        configNeededMessage?: string | React.ReactNode;
        additionalProps?: any;
        notFoundMessage?: string | React.ReactNode;
        isPreview?: boolean;
        onAddonInstalled?: (instance: ComponentInstance) => void;
        forceConfigView?: boolean;
    }
        
    /**
     * @export
     * Props for the ObjectDetailsPanel, extending base props with data source.
     */
    export type ObjectDetailsPanelProps = ObjectDetailsPanelBaseProps & {
        /**
         * Row data to display, either static or a function that fetches it asynchronously.
         */
        data: RowData | (() => Promise<RowData>);
    };
        
    /**
     * @export
     * Base props for the ObjectDetailsPanel, defining its structure and content.
     * Uses discriminated union to prevent mixing old and new API.
     */
    export type ObjectDetailsPanelBaseProps = {
        /**
         * Title content for the panel. Can be:
         * - DetailsContent: Static content or function returning React.ReactNode
         * - ObjectDetailsPanelHeaderProps: Configuration for the default header component
         * - Function returning ObjectDetailsPanelHeaderProps: Dynamic header based on row data
         */
        title: DetailsContent | ObjectDetailsPanelHeaderProps | ((item: RowData, loading?: boolean) => ObjectDetailsPanelHeaderProps);
    
        /**
         * Optional other details content, either static or a function of row data.
         */
        otherDetails?: DetailsContent;
    
        /**
         * Additional details tabs to display, each with its own content.
         */
        additionlDetails?: AdditionaDetails[];
    
        /**
         * Object type identifier (e.g. "location", "asset"). When provided, tabs contributed
         * by other apps via registerTabInjection() are automatically appended to
         * additionlDetails. The host app does not need to know which tabs are injected.
         */
        objectType?: string;
    
        /**
         * Key of the object being viewed. Passed to all injected tab components as objectKey.
         */
        objectKey?: string;
    
        /**
         * Whether to show a close button on the panel. Defaults to true.
         */
        showCloseButton?: boolean;
    
        /**
         * Callback function triggered when the panel is closed.
         */
        onClose?: () => void;
    
        /**
         * If true, appends selected tab ID to URL as 'dt' parameter for deep linking and reload persistence.
         */
        appendToURL?: boolean;
    
        /**
         * Custom URL parameter names for tab navigation. Useful for nested panels to avoid param conflicts.
         */
        urlParams?: {
            /**
             * Parameter name for details tab (default: 'dt')
             */
            detailsTab?: string;
    
            /**
             * Parameter name for additional details tab (default: 'ad')
             */
            additionalDetailsTab?: string;
        };
    } & (
            // New API: Use tabs (cannot use old toolbarItems/generalDetails)
            | {
                /**
                 * Tab configuration for multi-tab panels. Each tab has its own toolbar and details.
                 * If only one tab is provided, the tab navigation UI is hidden for backward compatibility.
                 */
                tabs: DetailsPanelTab[];
                toolbarItems?: never;
                generalDetails?: never;
            }
            // Old API: Use toolbarItems/generalDetails (cannot use tabs)
            | {
                tabs?: never;
                /**
                 * Toolbar items to display in the panel, split into left and right sections.
                 * Can be static or a function that returns toolbar items based on row data.
                 */
                toolbarItems?: {
                    left: ToolbarItem[];
                    right: ToolbarItem[];
                } | ((item: RowData) => {
                    left: ToolbarItem[];
                    right: ToolbarItem[];
                });
                /**
                 * Main details content, either a static node, a function returning ObjectInfoCardProps, or a function of row data.
                 */
                generalDetails?: ((item: RowData) => ObjectInfoCardProps) | DetailsContent;
            }
        );
        
    /**
     * @export
     * Type for content displayed in the ObjectDetailsPanel, either static or a function of row data.
     */
    export type DetailsContent = React.ReactNode | ((item: RowData, loading?: boolean) => React.ReactNode);
        
    /**
     * @export
     * Configuration for additional details tabs in the ObjectDetailsPanel.
     */
    export interface AdditionaDetails {
        /**
         * FontAwesome icon identifier for the additional details tab.
         */
        icon: string;
    
        /**
         * Unique identifier for the additional details tab.
         */
        id: string;
    
        /**
         * Label for the additional details tab.
         */
        label: string;
    
        /**
         * Content to display in the additional details tab, either static or a function of row data.
         */
        content: DetailsContent;
    
        /**
         * Whether to show a refresh button in the tab header. Defaults to false.
         * Injected tabs (registered via registerTabInjection) are refreshable by default.
         */
        refreshable?: boolean;
    
        /**
         * Event names (fired via eventDispatcher) that automatically refresh this tab's content.
         * Injected tabs can declare these in their TabInjection registration.
         */
        events?: string[];
    }
        
    /**
     * @export
     * Configuration for a details panel tab with toolbar and content.
     */
    export interface DetailsPanelTab {
        /**
         * Unique identifier for the tab.
         */
        id: string;
    
        /**
         * Label text for the tab (optional if icon provided).
         */
        label?: string;
    
        /**
         * FontAwesome icon identifier for the tab (optional if label provided).
         */
        icon?: string;
    
        /**
         * Toolbar items specific to this tab (optional).
         * Can be static or a function that returns toolbar items based on row data.
         */
        toolbarItems?: {
            left: ToolbarItem[];
            right: ToolbarItem[];
        } | ((item: RowData) => {
            left: ToolbarItem[];
            right: ToolbarItem[];
        });
    
        /**
         * Details content for this tab (mandatory).
         */
        details: ((item: RowData) => ObjectInfoCardProps) | DetailsContent;
    }
        
    /**
     * @export
     * Configuration for a toolbar item in the ObjectDetailsPanel.
     */
    export interface ToolbarItem {
        /**
         * FontAwesome icon identifier for the toolbar item.
         */
        icon: string;
    
        /**
         * Label for the toolbar item, translated via context.
         */
        label: string;
    
        /**
         * Callback function triggered when the toolbar item is clicked, receiving the event and row data.
         */
        onClick?: (e: MouseEvent<HTMLDivElement>, row: RowData) => void;
    
        /**
         * Optional dropdown content to render when the toolbar item is clicked.
         * Pass a `ReactNode` for fully custom content, or a `BaseAction[]` for a simple
         * config-based action list (icon + label + onClick).
         */
        renderOptionsDropdown?: React.ReactNode | BaseAction[];
    
        /**
         * Optional function to control visibility of the toolbar item based on row data.
         * If not provided, the toolbar item is always visible.
         * @param item - The row data
         * @returns true to show the toolbar item, false to hide it
         */
        visible?: (item: RowData) => boolean;
    }
        
    /**
     * @export
     * Handlers exposed by the ObjectDetailsPanel for external control.
     */
    export interface ObjectDetailsPanelHandlers {
        refresh: () => void
    }
        
    /**
     * @export
     * Props for the InfoCard component.
     */
    export interface InfoCardProps {
        /**
         * Data source — either an ExecuteRequestConfig (InfoCard fetches data) or a plain object (data already fetched).
         */
        data: InfoCardData;
    
        /**
         * Field name mappings — tells InfoCard which property in `data` holds the image URL, title text, subtitle text, and name (for initials).
         */
        fields?: InfoCardFields;
    
        /**
         * Extra stacked fields rendered below the subtitle. Each field has its own style.
         */
        extraFields?: InfoCardExtraField[];
    
        /**
         * Details content shown in a dropdown when the card is clicked.
         * Can be a ReactNode, a function returning ReactNode, or a function returning ObjectInfoCardProps.
         */
        details?: InfoCardDetailsContent;
    
        /**
         * Display variant: 'card' shows avatar + title/subtitle, 'avatar' shows only the profile image.
         * Defaults to 'card'.
         */
        variant?: 'card' | 'avatar';
    
        /**
         * Size of the profile image. Defaults to 'medium'.
         */
        size?: Size;
    
        /**
         * Shape of the profile image. Defaults to 'circle'.
         */
        shape?: Shape;
    
        /**
         * Position for the details dropdown. Defaults to 'bottom-left'.
         */
        dropdownPosition?: DropdownPosition;
    
        /**
         * Layout variant.
         * - 'default' (standard row): avatar left, content center, badges/actions right.
         * - 'collapsed' (details sidebar): content left, avatar right.
         * Defaults to 'default'.
         */
        layout?: 'default' | 'collapsed';
    
        /**
         * Style applied to the title. Defaults to 'primary' (bold).
         */
        titleStyle?: InfoCardFieldStyle;
    
        /**
         * Click handler for the title — also adds a pointer cursor and link colouring when combined with titleStyle='link'.
         */
        onTitleClick?: () => void;
    
        /**
         * Style applied to the subtitle. Defaults to 'secondary'.
         */
        subtitleStyle?: InfoCardFieldStyle;
    
        /**
         * Badges rendered to the right of the body (default layout) or below the body fields (collapsed layout).
         * Typically Chip components.
         */
        badges?: React.ReactNode;
    
        /**
         * Action buttons rendered to the right of badges (default layout only).
         * Typically IconButton components.
         */
        actions?: React.ReactNode;
    
        /** Additional CSS class names */
        className?: string;
    
        /** Inline styles */
        style?: React.CSSProperties;
    }
        
    
    export type InfoCardData = ExecuteRequestConfig | Record<string, any>;
        
    
    export interface ExecuteRequestConfig {
        executeConfig: ExecuteConfig;
        executeOptions?: UseExecuteOptions;
    }
        
    /**
     * Union type of all execution configuration types.
     * Use this type when accepting any execution configuration.
     */
    export type ExecuteConfig =
        | ExecuteActionConfig
        | ExecuteServiceConfig
        | ExecuteMicroserviceConfig
        | ExecuteAPIConfig
        | ExecuteQueryConfig
        | ExecuteCollectionConfig;
        
    /**
     * Configuration for executing a Lucy model action.
     */
    export interface ExecuteActionConfig extends ExecuteConfigBase {
        /** Execution type discriminator */
        type: 'action';
        /** Lucy model name (e.g., 'Location', 'User') */
        model: string;
        /** Action name (e.g., 'GetAll', 'Create', 'Update') */
        action: string;
        /** Action parameters */
        parameters?: any;
        /** Execution options (caching, batching, etc.) */
        options?: ExecutionOptions;
    }
        
    /**
     * Base interface for all execution configurations.
     * Contains common properties for data extraction and transformation.
     */
    export interface ExecuteConfigBase<T = any> {
        /**
        * Default value to use when data is null or on error.
        * Also used as initial state value.
        */
        defaultValue?: T,
        /**
         * Extract data from response before processing.
         * Define at service level to centralize response structure handling.
         * Can be overridden at hook level via UseExecuteOptions.
         *
         * @example
         * ```typescript
         * // Simple property from { apps: [...] }
         * extractData: 'apps'
         *
         * // Array chained: data[0].apps
         * extractData: [0, 'apps']
         *
         * // Path notation: data[0].apps
         * extractData: '[0].apps'
         *
         * // Nested path: data.result.items
         * extractData: 'result.items'
         *
         * // Function for complex cases
         * extractData: (data) => data?.result?.[0]?.items
         * ```
         */
        extractData?: string | (string | number)[] | ((data: any) => any);
    
        /**
         * Transform/format data after extraction.
         * Define at service level for consistent data processing.
         * Can be overridden at hook level via UseExecuteOptions.
         *
         * @example
         * ```typescript
         * // Parse JSON strings
         * transformData: (data) => toJSON(data, [])
         *
         * // Parse JSON in nested fields
         * transformData: (data) => ({
         *   ...data,
         *   metadata: toJSON(data.metadata, {})
         * })
         *
         * // Format dates
         * transformData: (data) => data.map(item => ({
         *   ...item,
         *   createdAt: new Date(item.createdAt)
         * }))
         * ```
         */
        transformData?: (data: any) => T;
    }
        
    
    export interface ExecutionOptions extends CachingOptions {
        /** Set this to true to parse the data as JSON and return it */
        json?: boolean;
        // unique key for the request
        // better to have a combination of instance id and some text  (<instanceId>-<some-text>) to keep the uniqueness
        // this key will be used when caching and cancelling previous requests
        key?: string
    
        // cancel the previous request if a new request comes with the same key (above).
        // default is false
        cancelPrevious?: boolean,
    
        // to skip batching and execute separately, set to true.
        // default is false
        executeImmidiately?: boolean
    }
        
    /**
     * @export
     */
    export interface CachingOptions {
        /** Enable caching for this request. Default is false */
        enableCache?: boolean;
        /** Cache time in minutes. Default is 5 minutes */
        cacheTime?: number;
        /** Custom cache key. If not provided, will be auto-generated from parameters */
        cacheKey?: string;
    }
        
    /**
     * Configuration for executing an application service.
     */
    export interface ExecuteServiceConfig extends ExecuteConfigBase {
        /** Execution type discriminator */
        type: 'service';
        /** Application name (e.g., 'System', 'UXP', 'Location') */
        app: string;
        /** Service name (e.g., 'Portal:All', 'AccountNavigation:GetAll') */
        service: string;
        /** Service parameters */
        parameters?: any;
        /** Execution options (caching, batching, etc.) */
        options?: ExecutionOptions;
    }
        
    /**
     * Configuration for executing a microservice call.
     */
    export interface ExecuteMicroserviceConfig extends ExecuteConfigBase {
        /** Execution type discriminator */
        type: 'microservice';
        /** Microservice configuration */
        config: {
            /** Microservice name */
            serviceName: string;
            /** API route path */
            route: string;
            /** HTTP method */
            method: 'get' | 'post' | 'put' | 'patch' | 'delete';
            /** URL parameters */
            params?: any;
            /** Request body data */
            data?: any;
            /** Additional configurations */
            configurations?: any;
        };
        /** Caching options */
        options?: CachingOptions;
    }
        
    /**
     * Configuration for executing a direct API call.
     */
    export interface ExecuteAPIConfig extends ExecuteConfigBase {
        /** Execution type discriminator */
        type: 'api';
        /** Axios request configuration */
        config: AxiosRequestConfig;
        /** Caching options */
        options?: CachingOptions;
    }
        
    /**
     * Configuration for executing a Lucy query.
     */
    export interface ExecuteQueryConfig extends ExecuteConfigBase {
        /** Execution type discriminator */
        type: 'query';
        /** Query parameters */
        params: QueryParams;
    }
        
    /**
     * Query parameters for Lucy query lookup
     */
    export type QueryParams =
        | { key: number | string }
        | { id: string }
        | { name: string };
        
    /**
     * Configuration for executing a Lucy model collection service.
     */
    export interface ExecuteCollectionConfig extends ExecuteConfigBase {
        /** Execution type discriminator */
        type: 'collection';
        /** Lucy model name */
        model: string;
        /** Collection name */
        collection: string;
        /** Collection parameters */
        parameters?: any;
        /** Execution options (caching, batching, etc.) */
        options?: ExecutionOptions;
    }
        
    /**
     * Options for controlling hook behavior.
     * These options override config-level settings when specified.
     */
    export interface UseExecuteOptions<T = any> {
        /**
         * Debounce delay in milliseconds before executing.
         * Useful for search inputs or rapid state changes.
         * @default 0
         */
        debounce?: number;
    
        /**
         * Execute automatically on mount and when dependencies change.
         * Set to false for manual execution only.
         * @default true
         */
        autoExecute?: boolean;
    
        /**
         * Dependencies array to trigger re-execution when changed.
         * Similar to useEffect dependencies.
         * @default []
         */
        dependencies?: any[];
    
        /**
         * Polling interval in milliseconds.
         * Automatically re-executes after each interval.
         * Requires autoExecute to be true.
         */
        polling?: number;
    
        /**
         * Default value to use when data is null or on error.
         * Also used as initial state value.
         */
        defaultValue?: T;
    
        /**
         * Preview mode configuration.
         * When enabled, returns sample data instead of executing.
         */
        preview?: {
            /** Enable preview mode */
            isPreview?: boolean;
            /** Sample data to return in preview mode */
            sampleData?: T;
        };
    
        /**
         * Extract data from response before processing.
         * **Overrides config-level extractData when specified.**
         *
         * @example
         * ```typescript
         * // Override service-level extraction
         * useExecuteRequest(
         *   SomeService.getData(),
         *   { extractData: 'customPath' }
         * )
         * ```
         */
        extractData?: string | (string | number)[] | ((data: any) => any);
    
        /**
         * Transform/format data after extraction.
         * **Overrides config-level transformData when specified.**
         *
         * @example
         * ```typescript
         * // Override service-level transformation
         * useExecuteRequest(
         *   SomeService.getData(),
         *   { transformData: (data) => customFormat(data) }
         * )
         * ```
         */
        transformData?: (data: any) => T;
    }
        
    /**
     * @export
     * Field mappings for InfoCard display — maps data property names to display roles.
     */
    export interface InfoCardFields {
        image?: string;
        title?: string;
        subtitle?: string;
        name?: string;
    }
        
    /**
     * @export
     * An extra field rendered below the subtitle in the InfoCard body.
     */
    export interface InfoCardExtraField {
        /** Content to display — string or any ReactNode */
        value: string | React.ReactNode;
        /** Visual style. Defaults to 'secondary'. */
        style?: InfoCardFieldStyle;
        /** FontAwesome icon key e.g. 'fas tag' */
        icon?: string;
        /** Click handler — also applies the clickable cursor */
        onClick?: () => void;
    }
        
    /**
     * @export
     * Text style variants for InfoCard title, subtitle, and extra fields.
     */
    export type InfoCardFieldStyle = 'primary' | 'secondary' | 'muted' | 'italic' | 'link';
        
    /**
     * @export
     * Type for details content — static, function returning ReactNode, or function returning ObjectInfoCardProps.
     */
    export type InfoCardDetailsContent = DetailsContent | ((item: RowData) => ObjectInfoCardProps);
        
    /**
     * @export
     * Props for InfoCardGroupInput - a form input component for selecting multiple items with InfoCard style presentation
     */
    export interface InfoCardGroupInputProps {
        /**
         * List of available items to select from
         * Can be static array or dynamic data function
         */
        options: IOption[] | any[] | IDataFunction;
    
        /**
         * Array of currently selected values (not full objects, just values)
         */
        selected: string[];
    
        /**
         * Callback when selection changes
         * Returns array of selected values and optionally full option objects
         */
        onChange: (values: string[], options?: IOption[] | any[]) => void;
    
        /**
         * Field name for label display
         * Defaults to 'label'
         */
        labelField?: string;
    
        /**
         * Field name for value
         * Defaults to 'value'
         */
        valueField?: string;
    
        /**
         * Field mappings for InfoCard display
         * If not provided, defaults to using labelField for name/title
         */
        fields?: InfoCardFields;
    
        /**
         * Placeholder text when no items selected
         */
        placeholder?: string;
    
        /**
         * Additional CSS class names
         */
        className?: string;
    
        /**
         * Validation state
         */
        isValid?: boolean;
    
        /**
         * Maximum number of profile images to display before showing "+N" badge
         * Defaults to 5
         */
        maxVisible?: number;
    
        /**
         * Size of the profile images
         */
        size?: Size;
    
        /**
         * Shape of the profile images
         */
        shape?: Shape;
    
        /**
         * Position for the dropdown
         */
        dropdownPosition?: DropdownPosition;
    
        /**
         * Label for the "Add" button
         * Defaults to localized "Add"
         */
        addButtonLabel?: string;
    
        /**
         * Page size for paginated data loading
         */
        pageSize?: number;
    
        /**
         * When loading options dynamically (paginated), we need to pass the selected item labels
         */
        selectedLabels?: string[] | ((selected: string[]) => Promise<any[]>);
    }
        
    /**
     * @export
     * Props for the HelpPopover component.
     */
    export interface HelpPopoverProps {
        /** Popover panel title */
        title: string;
        /** Ordered list of help sections (heading + body pairs) */
        sections: HelpSection[];
        /** Popover position relative to the trigger button (default: 'bottom-right') */
        position?: DropdownPosition;
        /** Icon for the trigger button (default: 'fal circle-question') */
        icon?: string;
        /** Variant for the trigger button (default: 'info') */
        variant?: ButtonComponentVarient;
    }
        
    /**
     * @export
     * A single section in the HelpPopover content — a bold heading with a description body.
     */
    export interface HelpSection {
        /** Bold heading text */
        heading: string;
        /** Description text or any React node */
        body: string | React.ReactNode;
    }
        
    /**
     * @export
     * Props for the ConfigurationViewHeader component.
     */
    export interface ConfigurationViewHeaderProps {
        /** Title text or any React node */
        title: string | React.ReactNode;
        /** Action buttons rendered on the right side */
        actions?: React.ReactNode;
        /**
         * Visual variant:
         * - `'section'` (default) — smaller section-level header inside content area
         * - `'main'` — full page-level header with same styling as ConfigurationView's outer title bar
         */
        variant?: 'section' | 'main';
    }
        
    /**
     * @export
     * Props for the ConfigurationViewContent component.
     */
    export interface ConfigurationViewContentProps {
        children: React.ReactNode;
    }
        
    /**
     * @export
     * ConfigurationView component props
     */
    export interface IConfigurationViewProps {
        uxpContext: IContextProvider;
    
        /** Settings panel title — used in `multiple` mode outer header */
        title?: string;
    
        /** Configuration sections with sidebar links and content */
        sections: IConfigurationViewSection[];
    
        /** Selected section id (controlled mode) */
        selected?: string;
    
        /** Callback when section changes, receives section id */
        onChangeSection?: (id: string) => void;
    
        /**
         * Layout mode:
         * - `'multiple'` (default) — sidebar navigation with multiple sections
         * - `'single'` — no sidebar; first section fills the page. The section's
         *   `title` becomes the page-level header and its `actions` render on the
         *   right. Use `hideHeader: true` on the section to skip the header entirely.
         */
        mode?: 'single' | 'multiple';
    }
        
    /**
     * The context available to each widget or UI. Provides the ability to get information about the environment the widget is running in and communicate with Lucy
     * @export
     */
    export interface IContextProvider extends Omit<IPartialContextProvider, "environment"> {
        environment: Environment,
        direction?: 'ltr' | 'rtl'
    
        getUserDetails: (updateContext?: boolean) => Promise<UserDetails>;
    
        /**
         *
         * localisation wrapper
         */
        $L: (code: string, params?: any) => string
        /**
         * Execute a Lucy model action. Specify the model name, action name and any parameters as a dictionary.
         * The result of the execution is returned as a promise
         */
        executeAction: (model: string, action: string, parameters: any, options?: ExecutionOptions) => Promise<any>;
    
        /**
         * Execute a service. Specify the app name, service name and any parameters as a dictionary.
         * The result of the execution is returned as a promise
         */
        executeService: (app: string, service: string, parameters: any, options?: ExecutionOptions) => Promise<any>;
        /**
         * This will return a function that can be passed into DataList, DataTable, DynamicList
         * (max: number, lastPageToken: string, args?: any) => Promise<{ items: Array<any>, pageToken: string }>
         * this function will return a paginated set of documents for the given filter in args
         *
         * pass the Lucy modal name & collection name
         */
        fromLucyDataCollection(model: string, collection: string): IDataFunction
    
        /**
         * @deprecated Use executeMicroServiceSafe instead. Kept for backward compatibility.
         * Execute a component REST API call (throws on error)
         */
        executeComponent: (component: string, route: string, method: 'get' | 'post' | 'put' | 'patch' | 'delete', params: any, body?: any, additionalHeaders?: { [key: string]: string }, additionalConfigurations?: any) => Promise<any>;
    
        /**
         * Execute a Lucy query by key, id, or name (legacy version - throws on error)
         */
        executeQuery: (params: QueryParams) => Promise<any>;
    
        /**
         * Execute a Lucy model action (safe version - returns ExecutionResult)
         * No need for try/catch - check result.error instead
         */
        executeActionSafe: <T = any>(model: string, action: string, parameters: any, options?: ExecutionOptions) => Promise<ExecutionResult<T>>;
    
        /**
         * Execute a service (safe version - returns ExecutionResult)
         * No need for try/catch - check result.error instead
         */
        executeServiceSafe: <T = any>(app: string, service: string, parameters: any, options?: ExecutionOptions) => Promise<ExecutionResult<T>>;
    
        /**
         * Execute a model collection service (safe version - returns ExecutionResult)
         * No need for try/catch - check result.error instead
         */
        executeModelCollectionServiceSafe: <T = any>(model: string, collection: string, parameters: any, options?: ExecutionOptions) => Promise<ExecutionResult<T>>;
    
        /**
         * Execute a microservice REST API call. Supports caching.
         * Returns ExecutionResult - no need for try/catch
         */
        executeMicroServiceSafe: <T = any>(config: ExecuteMicroserviceConfig, options?: CachingOptions) => Promise<ExecutionResult<T>>;
    
        /**
         * Execute a Lucy query by key, id, or name (safe version - returns ExecutionResult)
         * No need for try/catch - check result.error instead
         */
        executeQuerySafe: <T = any>(params: QueryParams) => Promise<ExecutionResult<LucyQueryResult<T>>>;
    
        /**
         * Generic HTTP API executor with caching support
         * Automatically normalizes URLs and adds authorization headers
         * No need for try/catch - check result.error instead
         */
        executeAPISafe: <T = any>(config: any, options?: CachingOptions) => Promise<ExecutionResult<T>>;
    
        /**
         * Checks if an app is enabled/installed in the account. Equivalent to #{appexists.AppName} in v4 FormEngine.
         */
        hasApp: (appName: string) => boolean;
        /**
         * Checks if the current user has to required app role. Use this to check permissions when executing or rendering content
         */
        hasAppRole: (app: string, role: string) => boolean;
        /**
         * Checks if the current user has to required model role. Use this to check permissions when executing or rendering content
         */
        hasModelRole: (model: string, role: string) => boolean;
    
        /**
         * Update the API key and trigger parent re-render via onAPIKeyChange callback
         */
        updateAPIKey: (token: string) => void;
    
        /**
         * Swap credentials to a public user's apiKey/userKey (used by public dashboards so widgets
         * make service calls on behalf of the public user rather than the anonymous visitor).
         * Call with empty strings to restore anonymous state.
         */
        setPublicCredentials: (apiKey: string, userKey: string) => void;
    
        /**
         * Set the login UI ref for auth helper modal
         */
        setLoginUIRef: (ref: React.MutableRefObject<{ show: () => void }>) => void;
    
        refreshViewOverrides: () => Promise<void>
    
        // object tab injections
        objectTabs?: Record<string, ObjectTab[]>
        setObjectTabs?: (tabs: Record<string, ObjectTab[]>) => void
        refreshObjectTabs: () => Promise<void>
    
        /**
         * Publish or update an in-app notification.
         * Creates the notification if the notificationId is new; updates it otherwise.
         * The notification center refreshes automatically via the real-time MessageBus.
         */
        publishNotification: (params: PublishNotificationParams) => Promise<ExecutionResult<{ notificationID: string; created: boolean }>>;
    
        /**
         * Mark an in-app notification as resolved.
         * The notification will appear in the resolved section of the notification center.
         */
        resolveNotification: (notificationId: string, objectType: string) => Promise<ExecutionResult<{ notificationID: string }>>;
    }
        
    
    export interface IPartialContextProvider {
        environment: string,
        root: string,
    
        fullAccountUrl: string;
        lucyUrl: string;
        apiKey: string;
        onAPIKeyChange?: (newApiKey: string) => void,
    
        language?: string
        enabledLanguages?: Language[]
    
        themeName?: string,
        customThemes?: ICustomThemes,
        theme?: IThemeProps,
        setTheme?: (name: string, config: IThemeProps, type: ThemeType) => void
        themeType?: ThemeType
    
        authConfig?: any  // Auth page configuration (layout, colors, etc)
    
        userKey: string;
        /** True when the page was loaded without a real user session (public page). Immutable — not affected by setPublicCredentials. */
        isPublicSession?: boolean;
        loginType?: string,
        appRoles?: { [app: string]: string[] }
        enabledApps?: string[]
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
        accountDisplayName?: string;
        useGoogleTranslate?: boolean
        hasTOS?: boolean
        tosAgreed?: boolean
        agreementAgreed?: boolean
        hasAgreement?: boolean
    
        scriptFiles: Record<string, string[]>,
        navigationLinks: NavigationLink[],
        routes: Routes,
        configuredPages: ConfiguredPage[]
    
        isLoading?: boolean,
        loadingMessage?: string
        setLoading?: (isLoading: boolean, message?: string) => void
    
        marketplaceUrl?: string,
        loadWidgetsFromIviva?: boolean
        widgetSearchAPI?: string
    
        maxFileUploadSize?: number
    
        // this is to track analytics
        trackAnalytics?: (event: string, data?: { [key: string]: any }) => void,
    
        // this will be used by uxp-report-engine
        loaded?: (instanceId: string, uxpFunctions?: IUXPFunctions) => void,
    
        spacingMode?: any
        title?: string
    
        // view overrides for pluggable views
        viewOverrides?: Record<string, ViewOverride>
        setViewOverrides?: (overrides: Record<string, ViewOverride>) => void
    
        // object tab injections
        objectTabs?: Record<string, ObjectTab[]>
        setObjectTabs?: (tabs: Record<string, ObjectTab[]>) => void
    }
        
    
    export interface Language {
        Name: string;
        Code: string;
        Direction: 'ltr' | 'rtl';
    }
        
    
    export interface ICustomThemes {
        [name: string]: IThemeProps | ThemeDetails
    }
        
    // ============================================================================
    // THEME TYPES
    // ============================================================================
    export interface IThemeProps {
    
        /**
         * Optional logo URL — not a CSS variable.
         * Accessed via context.theme.logo; skipped in the CSS var loop.
         */
        logo?: string,
    
        /** colors */
        /**
         * Primary color for the layout
         * Header and sidebar will use these colors
         * Also based on the design (figma) in some otherplaces also we have this color (EX: count in views dropdown list and add new custom view button)
         */
        portalHeaderBGColor: string,
        portalHeaderTextColor: string,
        portalSidebarHoverBGColor: string,
        portalSidebarSelectedBGColor: string,
    
        /**
         * Navigation child items (dropdown menus)
         * Colors for child navigation links that appear in dropdown menus
         * These are separate from main sidebar colors as they appear on different backgrounds
         */
        navChildHoverBGColor: string,
        navChildHoverTextColor: string,
        navChildSelectedBGColor: string,
        navChildSelectedTextColor: string,
    
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
        tableSelectedRowBGColor: string,
    
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
    
        successButtonBGColor: string,
        successButtonTextColor: string,
        successButtonBorderColor: string,
        successButtonHoverBGColor: string,
        successButtonHoverTextColor: string,
        successButtonHoverBorderColor: string,
        successButtonActiveBGColor: string,
        successButtonActiveTextColor: string,
        successButtonActiveBorderColor: string,
    
        warningButtonBGColor: string,
        warningButtonTextColor: string,
        warningButtonBorderColor: string,
        warningButtonHoverBGColor: string,
        warningButtonHoverTextColor: string,
        warningButtonHoverBorderColor: string,
        warningButtonActiveBGColor: string,
        warningButtonActiveTextColor: string,
        warningButtonActiveBorderColor: string,
    
        infoButtonBGColor: string,
        infoButtonTextColor: string,
        infoButtonBorderColor: string,
        infoButtonHoverBGColor: string,
        infoButtonHoverTextColor: string,
        infoButtonHoverBorderColor: string,
        infoButtonActiveBGColor: string,
        infoButtonActiveTextColor: string,
        infoButtonActiveBorderColor: string,
    
        /**
         * Link colors
         */
        linkColor: string,
        linkHoverColor: string,
        linkVisitedColor: string,
        linkActiveColor: string,
    
        /**
         * Focus ring colors
         */
        focusRingColor: string,
        focusRingShadowColor: string,
    
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
        inputFocusBGColor: string,
        inputFocusTextColor: string,
        inputFocusBorderColor: string,
        inputHoverBGColor: string,
        inputHoverBorderColor: string,
        inputDisabledBGColor: string,
        inputDisabledTextColor: string,
        inputReadonlyBGColor: string,
        inputReadonlyBorderColor: string,
    
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
    
    
        // status - unified system with BG, Text, and Border for all statuses
        newStatusBGColor: string,
        newStatusTextColor: string,
        newStatusBorderColor: string,
        modifiedStatusBGColor: string,
        modifiedStatusTextColor: string,
        modifiedStatusBorderColor: string,
        onGoingStatusBGColor: string,
        onGoingStatusTextColor: string,
        onGoingStatusBorderColor: string,
        deletedStatusBGColor: string,
        deletedStatusTextColor: string,
        deletedStatusBorderColor: string,
    
        activeStatusBGColor: string,
        activeStatusTextColor: string,
        activeStatusBorderColor: string,
        inactiveStatusBGColor: string,
        inactiveStatusTextColor: string,
        inactiveStatusBorderColor: string,
    
        pendingStatusBGColor: string,
        pendingStatusTextColor: string,
        pendingStatusBorderColor: string,
        completedStatusBGColor: string,
        completedStatusTextColor: string,
        completedStatusBorderColor: string,
        approvedStatusBGColor: string,
        approvedStatusTextColor: string,
        approvedStatusBorderColor: string,
        rejectedStatusBGColor: string,
        rejectedStatusTextColor: string,
        rejectedStatusBorderColor: string,
        onHoldStatusBGColor: string,
        onHoldStatusTextColor: string,
        onHoldStatusBorderColor: string,
        parkedStatusBGColor: string,
        parkedStatusTextColor: string,
        parkedStatusBorderColor: string,
    
        warningStatusBGColor: string,
        warningStatusTextColor: string,
        warningStatusBorderColor: string,
    
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
    
        // Widget Drawer
        widgetDrawerSidebarBGColor: string,
        widgetDrawerTileBGColor: string,
        widgetDrawerTileBorderColor: string,
        widgetDrawerTileHoverBGColor: string,
        widgetDrawerTileSelectedBGColor: string,
        widgetDrawerBadgeBGColor: string,
    
        // Loader/Skeleton colors
        loaderPrimaryColor: string,
        loaderSecondaryColor: string,
        loaderBackgroundColor: string,
    
        // Typography weights
        fontWeightLight: string,
        fontWeightRegular: string,
        fontWeightMedium: string,
        fontWeightSemibold: string,
        fontWeightBold: string,
        fontWeightBlack: string,
    
    }
        
    /**
     * @export
     */
    export enum ThemeType {
        Light = 'Light',
        Dark = 'Dark',
        Glass = 'Glass',
    }
        
    // ============================================================================
    // USER & AUTHENTICATION TYPES
    // ============================================================================
    export interface UserDetails {
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
        
    
    export interface NavigationLink {
        id: string;
        label: string;
        icon: string;
        link: string;
        target?: string;
        type?: string;
        children?: NavigationLink[];
        userGroups?: string[];
        appRoles?: string[];
        parentId?: string;
        /** Mark this link as publicly accessible without login. NOT inherited by children — each must be explicitly marked. */
        isPublic?: boolean;
    }
        
    
    export interface Routes {
        [route: string]: RouteConfig;
    }
        
    // ============================================================================
    // ROUTE & PAGE TYPES
    // ============================================================================
    export interface ConfiguredPage {
        key: string;
        id: string;
        tags: Record<string, string>;
        moduleId: string;
        componentId: string;
        type: ComponentType;
        appRoles: string[];
        userGroups: string[];
        props: any;
    }
        
    
    export interface IUXPFunctions {
        addWidget: (id: string, name: string) => void;
    }
        
    // View Overrides (Pluggable Views)
    /**
     * View override configuration for pluggable views
     */
    export interface ViewOverride {
        /** Unique view identifier (lowercase) */
        viewId: string;
        /** PageId to render instead of default (lowercase) */
        pageId: string;
        /** Saved configuration props for the component rendered in this slot */
        configuredProps?: Record<string, any>;
    }
        
    
    export interface ObjectTab {
        tabId: string;
        objectType: string;
        contributionId: string;
        name: string;
        icon: string;
        priority: number;
        appRoles: string;
        userGroups: string;
        status?: 'Active' | 'Disabled';
        components: ObjectTabComponent[];
    }
        
    
    export interface ObjectTabComponent {
        componentId: string;
        configuredProps: Record<string, any>;
        priority: number;
    }
        
    
    export enum Environment {
        Prod = 'prod',
        Dev = 'dev'
    }
        
    /**
     * Result structure for execution functions
     */
    export interface ExecutionResult<T = any> {
        data: T | null;
        errorMessage?: string;
        error?: any;
    }
        
    
    export interface LucyQueryResult<T> {
        result: T[];
        trace: {
            parsing: number;
            loading: number;
            execution: number;
            total: number;
            steps: any[];
        };
    }
        
    
    export interface PublishNotificationParams {
        /** Stable unique ID for this notification — used to create or update */
        notificationId: string;
        /** Object type tag used for category routing (stored lowercase) */
        objectType: string;
        severity?: NotificationSeverity;
        message?: string;
        /** Key of the related source object */
        objectKey?: string;
        /** Source system's own state string (stored as-is) */
        internalState?: string;
        /** Extra metadata for link template placeholders. Object is JSON-serialised automatically. */
        additionalParams?: Record<string, string> | string;
        /** Restrict visibility to these user keys (in addition to category group rules) */
        allowedUserKeys?: string[];
    }
        
    
    export type NotificationSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
        
    /**
     * @export
     * Configuration section definition
     */
    export interface IConfigurationViewSection {
        /** Section identifier */
        id: string
    
        /** Section title shown in sidebar and header */
        title: string;
    
        /** Keywords for search filtering (title is searched by default) */
        keywords?: string[];
    
        /** Section content rendered in main area */
        content: React.ReactNode;
    
        /** Hides the header — content fills the full area */
        hideHeader?: boolean;
    
        /** Optional action buttons rendered on the right side of the header */
        actions?: React.ReactNode;
    }
        
    /**
     * @export
     * Props for the FilterView component
     */
    export interface FilterViewProps {
        /**
         * Whether the filter panel is open
         */
        isOpen: boolean,
    
        /**
         * Callback to toggle the filter panel open/closed state
         */
        onToggle: () => void,
    
        /**
         * Currently applied filters
         */
        appliedFilters: Filters,
    
        /**
         * Callback that gets executed whenever filters are changed
         */
        onChange: (filters: Filters) => void,
    
        /**
         * Form field structure for rendering filter form
         */
        formFields: FormSectionProps[],
    
        /**
         * Optional custom render function for filter content
         */
        renderCustom?: FilterCustomRender,
    
        /**
         * Optional custom counter for the active-filter badge. Receives the applied filters
         * and returns the count to display. Useful with custom-rendered filters when the
         * default key counting is inaccurate.
         */
        getFilterCount?: (filters: Filters) => number,
    
        /**
         * Current filter mode — only shown when advancedConfig is provided
         */
        filterMode?: 'simple' | 'advanced',
    
        /**
         * Callback when the user switches filter mode
         */
        onFilterModeChange?: (mode: 'simple' | 'advanced') => void,
    
        /**
         * When provided, shows the mode toggle and enables advanced filter UI
         */
        advancedConfig?: { baseDataSource: string },
    
        /**
         * Current natural language question for advanced mode
         */
        advancedQuestion?: string,
    
        /**
         * Callback when question text changes
         */
        onAdvancedQuestionChange?: (q: string) => void,
    
        /**
         * Callback when user submits the advanced query
         */
        onAdvancedSubmit?: () => void,
    
        /**
         * Whether an advanced search is in progress
         */
        advancedLoading?: boolean,
    
        /**
         * Whether an advanced pipeline result is currently active (drives badge)
         */
        hasActivePipeline?: boolean,
    
        /**
         * Inline error message shown below the advanced filter textarea
         */
        advancedError?: string,
    
        /**
         * The active pipeline object — when set, shows the "Refine Pipeline" button
         */
        activePipeline?: any,
    
        /**
         * Callback to re-open the refinement modal for further edits
         */
        onEditRefinement?: () => void,
    
        /**
         * Whether the active pipeline has been manually refined (question is no longer valid)
         */
        pipelineRefined?: boolean,
    
        /**
         * Whether an original AI-generated pipeline is available for restore
         */
        hasOriginalPipeline?: boolean,
    
        /**
         * Callback to restore the original AI-generated pipeline
         */
        onRestoreOriginalPipeline?: () => void,
    }
        
    /**
     * @export
     * Union type for different filter structures
     */
    export type Filters = SimpleFilter
        
    /**
     * @export
     * Simple filter structure containing filters as a record
     */
    export type SimpleFilter = {
        /**
         * Record of filter key-value pairs
         */
        filters: Record<string, any>
    }
        
    /**
     * @export
     * Custom render function for filters
     */
    export type FilterCustomRender = (filters: Filters, onChange: (filters: Filters) => void, singleColumn?: boolean) => ReactNode
        
    /**
     * @export
     * Props for the SlideInPanel component.
     */
    export interface SlideInPanelProps {
        /**
         * Content to display inside the slide-in panel.
         */
        children: ReactNode;
    
        /**
         * Controls whether the panel is open (true) or closed (false).
         */
        isOpen: boolean;
    
        /**
         * Callback triggered when the panel is closed, typically via backdrop click.
         */
        onClose: () => void;
    
        /**
         * Rendering mode of the panel.
         * - `full`: fills the main content area (default)
         * - `modal`: centered overlay auto-sized to content
         */
        mode?: SlideInPanelMode;
    
        /**
         * Direction of the slide-in animation. Only applies in `full` mode. Defaults to 'right'.
         */
        direction?: SlideInPanelDirection;
    
        /**
         * Explicit width for the panel. Applies in `modal` mode.
         * Accepts any valid CSS width value (e.g. `'400px'`, `'50vw'`).
         */
        width?: string;
    
        /**
         * Explicit height for the panel. Applies in `modal` mode.
         * Accepts any valid CSS height value (e.g. `'300px'`, `'80vh'`).
         */
        height?: string;
    
        /**
         * Additional CSS class names to apply to the panel content.
         */
        className?: string;
    
        /**
        * Additional CSS class names to apply to the wrapper.
        */
        wrapperClassName?: string;
    
        /**
         * If true, unmounts the panel when it exits. Defaults to true.
         */
        unmountOnExit?: boolean;
    
        /**
         * Reference to a container element to position the panel relative to.
         * If provided, the panel will match the size and position of this element.
         * Only applies in `full` mode.
         */
        containerRef?: RefObject<HTMLElement>;
    
        /**
         * Override the panel's border radius. Accepts any valid CSS
         * border-radius value (e.g. `'0'`, `'0.5rem'`). When omitted, the
         * SCSS default applies (rounded top-start corner in `full` mode,
         * fully rounded in `modal` mode).
         */
        borderRadius?: string;
    }
        
    /**
     * @export
     * Rendering mode of the panel.
     * - `full`: fills the main content area (default behaviour)
     * - `modal`: centered overlay, auto-sized to content with configurable max dimensions
     */
    export type SlideInPanelMode = 'full' | 'modal';
        
    /**
     * @export
     * Possible directions for the slide-in panel animation.
     */
    export type SlideInPanelDirection = 'left' | 'right' | 'top' | 'bottom';
        
    /**
     * @export
     * External handlers exposed via ref
     */
    export interface SlideInPanelHandlers {
        /**
         * Programmatically close the panel
         */
        close: () => void;
    }
        
    
    export interface AsyncButtonProps {
        /**
         * The caption for the button
         */
        title?: string,
    
        /**
         * Left side icon - supports FontAwesome, Phosphor, image URL, text/emoji, or React element
         */
        leftIcon?: ButtonIcon,
    
        /**
         * Right side icon - supports FontAwesome, Phosphor, image URL, text/emoji, or React element
         */
        rightIcon?: ButtonIcon,
    
    
        /**
         * Any extra css classes to add to the button
         */
        className?: string,
    
        /**
         * The callback that gets invoked when the button is clicked.
         * It must return a Promise
         */
        onClick: () => Promise<any>,
    
        /**
         * Set button to active state when true
         */
        active?: boolean,
    
        /**
         * Set button to disabled state when true
         */
        disabled?: boolean,
    
        /**
         * Text to show when in loading state
         */
        loadingTitle?: string,
    
        /**
         * a callback function to call on error
         */
        onError?: (e: any) => void,
    
        /**
         * any custom inline styles to the button
         */
        styles?: React.CSSProperties,
    
        /**
         * any custom inline styles for the icon container
         */
        iconStyles?: React.CSSProperties,
    
        /**
         * Button type
         */
        type?: ButtonComponentType
    
        /**
         * Button variation
         */
        variant?: ButtonComponentVarient,
    
        /**
         * Icon only mode
         */
        iconOnly?: boolean,
    
        /**
         * BELOW PROPS ARE DEPRECATED
         */
    
        /**
         * @deprecated Use leftIcon or rightIcon instead
         * Button icon.
         * you can either use a url or fontawesome icon
         *
         * Here is a example for using fontawesome icons
         * icon={'fas save'}
         */
        icon?: string,
    
        /**
         * @deprecated Use leftIcon or rightIcon instead
         * icon position
         */
        iconPosition?: 'left' | 'right',
    
        /**
         * @deprecated This behavior is now handled automatically by BaseButtonComponent
         * show loading spinners in place of icons (even if the icon is not there it will show the spinner on the left sides)  when the button is in loading state,
         */
        useLoadingSpinner?: boolean,
    }
        
    /**
     * @export
     * Props for the ObjectSearchComponent.
     */
    export interface ObjectSearchComponentProps {
        /**
         * Header text or component for the search component.
         */
        title?: string | ReactNode;
    
        /**
         * Configuration for the filter panel.
         */
        filters?: FilterConfig;
    
        /**
         * Configuration for custom and default views.
         */
        views?: ViewsConfig;
    
        /**
         * Data source for the table, either a static array or a function for dynamic fetching with pagination and search.
         */
        data: RowData[] | ((page: number, pageSize: number, query?: string, filters?: Filters, sort?: Sort) => Promise<{ items: RowData[] }>);
    
        /**
         * Column definitions for the table.
         */
        columns: OSCColumn[];
    
        /**
         * Configuration for predefined action columns like Edit, Delete, and Select.
         */
        defaultActionColumns?: DefaultActionColumnsConfig;
    
        /**
         * Number of items to display per page.
         */
        pageSize: number;
    
        /**
         * Total number of items, or a function to fetch this count dynamically.
         */
        total: number | ((query?: string, filters?: Filters) => Promise<number>);
    
        /**
         * Indicates if data is loading, showing a loading spinner if true.
         */
        loading?: boolean;
    
        /**
         * Message or component to display when no items are found.
         */
        noItemsMessage?: string | ReactNode;
    
        /**
         * Minimum width for all cells in pixels.
         */
        minCellWidth?: number;
    
        /**
         * Callback triggered when a row is clicked. Overrides details panel if defined.
         */
        onClickRow?: (e: MouseEvent<HTMLDivElement>, item: any) => void;
    
        /**
         * Configuration for the expandable details panel. Ignored if onClickRow is defined.
         */
        detailsPanel?: DefaultDetailsPanelProps | CustomDetailsPanelProps;
    
        /**
         * Field in row data used as a unique identifier for each row.
         */
        idField: string;
    
        /**
         * Optional field in row data whose value is appended to the URL as the `objectName` param
         * (or the custom name from `urlParams.name`) when a row is selected, and removed on close.
         * Useful when the details panel needs both the ID and a human-readable name for data fetching.
         */
        nameField?: string;
    
        /**
         * Optional field in row data whose value is appended to the URL as the `objectType` param
         * (or the custom name from `urlParams.type`) when a row is selected, and removed on close.
         */
        typeField?: string;
    
        /**
         * Custom action buttons or components for the header area.
         */
        actionButtons?: ReactNode;
    
        /**
         * Custom action buttons for bulk actions when rows are selected.
         */
        bulkActionButtons?: ReactNode;
    
        /**
         * Array of currently selected row data objects.
         */
        selected?: RowData[];
    
        /**
         * Callback triggered when row selection changes.
         */
        onSelect?: (selected: RowData[]) => void;
    
        /**
         * Custom renderer for nested child rows.
         */
        renderChildren?: (childRows: RowData[], rowProps: TableRowBasicProps) => ReactNode;
    
        /**
         * Optional custom cell renderer. When provided, replaces the default TableCell output for every
         * data cell. Use this to add inline editing or custom display logic per cell.
         */
        renderCell?: (row: RowData, column: ExtendedOSCColumn) => ReactNode;
    
        /**
         * Content to render in the summary area between the header and table.
         */
        summaryContent?: ReactNode;
    
        /**
         * Configuration for the search box, including fields for text search if data is a static array.
         */
        search?: {
            /**
             * Enables the search box.
             */
            enable: boolean;
    
            /**
             * Fields in the data to use for text search (required for static data arrays).
             */
            fields?: string[];
    
            /**
             * If true, collapses the search box by default.
             */
            collapsed?: boolean;
        };
    
        /**
         * Width of the list when the details panel is open. Accepts percentage string or pixels (15%-75%). Defaults to '50%'.
         */
        collapsedWidth?: string | number;
    
        /**
         * If true, appends view state to the URL for navigation.
         */
        appendToURL?: boolean;
    
        /**
         * URL params to remove when a new row is selected. Useful for clearing
         * sub-panel state (e.g. method, editMethod) when the parent row changes.
         */
        clearParamsOnSelect?: string[];
    
        /**
         * Allow users to change page size via dropdown (default: true)
         */
        allowPageSizeChange?: boolean;
    
        /**
         * Custom URL parameter names for this component instance. Useful for nested components to avoid param conflicts.
         */
        urlParams?: URLParamConfig;
    
        /** custom classname */
        className?: string
    
        /**
         * Fired whenever the filter panel opens or closes. Use this to pause auto-refresh
         * while the user is editing filters.
         */
        onFilterPanelToggle?: (isOpen: boolean) => void;
    }
        
    /**
     * @export
     * Configuration for the filter view.
     */
    export interface FilterConfig {
        /**
         * Form fields configuration for the filter panel, based on FormSectionProps.
         */
        formFields?: FormSectionProps[];
    
        /**
         * Custom render function for displaying filters, providing full control over the filter UI.
         */
        renderFilters?: FilterCustomRender;
    
        /**
         * Optional custom counter for the active-filter badge. Receives the applied filters
         * and returns the count to display. Useful with renderFilters/renderField when the
         * default key counting is inaccurate.
         */
        getFilterCount?: (filters: Filters) => number;
    
        /**
         * When provided, adds an "Advanced" mode toggle to the filter panel that allows natural language
         * queries powered by the QueryEngine AI search endpoint.
         */
        advanced?: {
            /**
             * The primary data source for the AI query (e.g. "sqltable:AssetMaster").
             */
            baseDataSource: string;
        };
    }
        
    /**
     * @export
     * Configuration for saved views.
     */
    export interface ViewsConfig {
        /**
         * Unique ID for the list, used to persist custom views for the user.
         */
        listId: string;
    
        /**
         * Default list of views available to all users.
         */
        defaultViews: View[];
    
        /**
         * If true, allows the logged-in user to manage their own custom views.
         */
        allowToMangeCustomViews?: boolean;
    
        /**
         * ID of the default view to be selected.
         */
        defaultviewId?: string;
    }
        
    
    export interface View {
        id: string,
        name: string,
        group?: string
        configurations: CustomViewConfigs,
        isFavourite?: boolean,
        isCustom?: boolean,
        key?: number,
    }
        
    
    export interface CustomViewConfigs {
        filters?: Filters,
        columns?: string[],
        sort?: Sort,
        pageSize?: number,
        filterMode?: 'simple' | 'advanced',
        advancedFilter?: AdvancedFilterState,
    }
        
    
    export interface AdvancedFilterState {
        question: string;
        pipeline: QBQuery;
        pipelineHash: string;
        originalPipeline: QBQuery;
        originalPipelineHash: string;
        isRefined?: boolean;
    }
        
    /**
     * @export
     * Column configuration for the ObjectSearchComponent table, extending the base Column interface.
     */
    export interface OSCColumn extends Column {
        /**
         * Optional label for the column when exporting data.
         */
        exportLabel?: string;
    
        /**
         * Optional formatter function for custom export data formatting.
         */
        formatter?: ExportColumnFormatter;
    }
        
    /**
     * Formatter function for export column values
     * @param value - The raw value to format
     * @param row - The complete row data object
     * @returns Formatted string value for the CSV output
     */
    export type ExportColumnFormatter = (value: any, row: RowData) => string;
        
    /**
     * @export
     * Configuration for the default action columns (Edit, Delete, Select, etc.).
     */
    export interface DefaultActionColumnsConfig {
        /**
         * Configuration for the default 'Edit' action column.
         */
        editColumn?: BaseProps & {
            /**
             * Custom renderer for the edit column.
             */
            renderColumn?: (item: any) => React.ReactNode;
    
            /**
             * Callback triggered when the edit action is performed.
             */
            onEdit?: (item: any) => void;
        };
    
        /**
         * Configuration for the default 'Delete' action column.
         */
        deleteColumn?: BaseProps & {
            /**
             * Custom renderer for the delete column.
             */
            renderColumn?: (item: any) => React.ReactNode;
    
            /**
             * Callback triggered when the delete action is performed.
             */
            onDelete?: (item: any) => Promise<void>;
        };
    
        /**
         * Configuration for the generic 'Actions' dropdown column for multiple row actions.
         */
        actionsColumn?: BaseProps & {
            /**
             * Actions or renderer for row-specific actions.
             */
            rowActions?: Action[] | ((item: any) => ReactNode | Action[]);
    
            /**
             * Configuration for header actions like column customization or sorting.
             */
            headerActions?: {
                /**
                 * Enables column customization in the actions dropdown.
                 */
                customiseColumns?: boolean;
    
                /**
                 * Enables text clipping options in the actions dropdown.
                 */
                clipOverflowText?: boolean;
    
                /**
                 * Enables sorting options in the actions dropdown.
                 */
                sort?: boolean;
    
                /**
                 * Enables multi-column sorting if sort is enabled.
                 */
                multiColumnSort?: boolean;
            };
        };
    
        /**
         * Configuration for the row selection checkbox column.
         */
        selectColumn?: BaseProps;
    
        /**
         * Configuration for the row expansion column (used for showing child rows).
         */
        expandColumn?: BaseProps;
    }
        
    /**
     * @export
     * Base props for action columns configuration
     */
    export interface BaseProps {
        /** Enable this action column */
        enable: boolean;
        /** Label to display in column header */
        label?: string;
        /** Width of the column in pixels */
        width?: number;
    }
        
    /**
     * @export
     * Configuration for the default details panel using the built-in ObjectDetailsPanel.
     */
    export type DefaultDetailsPanelProps = ObjectDetailsPanelBaseProps & BaseDetailsPanelConfig & {
        /**
         * Function to fetch details for the selected row based on its ID.
         */
        data: (id: string) => Promise<RowData>;
    }
        
    /**
     * @export
     * Shared configuration for controlling table behavior when the details panel is open.
     */
    export interface BaseDetailsPanelConfig {
        /**
         * Array of column IDs to hide from the main table when the details panel is open.
         */
        columnsToHide?: string[];
    
        /**
         * Alternative set of columns to render in the main table when the details panel is open.
         */
        columns?: OSCColumn[];
    }
        
    /**
     * @export
     * Configuration for rendering a custom details panel component.
     */
    export interface CustomDetailsPanelProps extends BaseDetailsPanelConfig {
        /**
         * Custom component to render for the details panel, receiving the row ID and close callback.
         */
        renderDetails: (id: string, onClose: () => void) => ReactNode;
    }
        
    /**
     * @export
     * Extended column configuration with calculated width for the ObjectSearchComponent table.
     */
    export interface ExtendedOSCColumn extends OSCColumn {
        /**
         * Actual width of the column in pixels after calculations.
         */
        width: number;
    }
        
    /**
     * @export
     * Configuration for URL parameter names used by ObjectSearchComponent.
     */
    export interface URLParamConfig {
        /**
         * Parameter name for selected row key (default: 'objectKey')
         */
        key?: string;
    
        /**
         * Parameter name for details tab (default: 'dt')
         */
        detailsTab?: string;
    
        /**
         * Parameter name for additional details tab (default: 'ad')
         */
        additionalDetailsTab?: string;
    
        /**
         * Parameter name for the nameField value (default: 'objectID').
         * Only written to the URL when the OSC's `nameField` prop is set.
         */
        name?: string;
    
        /**
         * Parameter name for the typeField value (default: 'objectType').
         * Only written to the URL when the OSC's `typeField` prop is set.
         */
        type?: string;
    }
        
    /**
     * @export
     * Handlers exposed by the ObjectSearchComponent for external control.
     */
    export interface ObjectSearchComponentHandlers {
        /**
         * Triggers export of the current view's data.
         */
        export: () => void;
    
        /**
         * Retrieves details of the current search state.
         */
        getDetails: () => ObjectSearchDetailsResponse;
    
        /** Refreshes current page data with loading state shown. */
        refreshCurrentPage: () => void;
    
        /** Refreshes current page data silently, without showing the loading state. */
        silentRefreshCurrentPage: () => void;
    
        /** Directly replaces the current page data with the provided array. No fetch is triggered. */
        setPageData: (items: RowData[]) => void;
    
        /** Returns the current page data (the visible rows). */
        getCurrentPageData: () => RowData[];
    
        /** Returns the currently applied filters. */
        getFilters: () => Filters;
    
        /** Sets filters programmatically. Must be a valid SimpleFilter: { filters: Record<string, any> }. Invalid input is ignored. */
        applyFilters: (filters: Filters) => void;
    
        /** Returns whether the filter panel is currently open. */
        isFilterPanelOpen: () => boolean;
    }
        
    /**
     * @export
     * Response object containing details of the current search state.
     */
    export interface ObjectSearchDetailsResponse {
        /**
         * Currently selected view configuration.
         */
        selectedView: View;
    
        /**
         * Current search query string.
         */
        query: string;
    
        /**
         * Current applied filters.
         */
        filters: Filters;
    
        /**
         * Current sorting configuration.
         */
        sort: Sort;
    
        /**
         * List of selected column IDs.
         */
        selectedColumns: string[];
    
        /**
         * Number of items per page.
         */
        pageSize: number;
    
        /**
         * Current page number.
         */
        page: number;
    
        /**
         * Total number of items.
         */
        total: number;
    }
        
    /**
     * @export
     * Props for the TableComponent.
     */
    export interface TableComponentProps {
        /** Array of data objects or a function to fetch paginated data */
        data: RowData[] | ((page: number, pageSize: number, query?: string, filters?: Filters) => Promise<{ items: RowData[] }>);
    
        /** List of columns to display */
        columns: TableColumn[];
    
        /** Number of rows per page */
        pageSize: number;
    
        /** Total number of items or a function returning the total */
        total: number | ((query?: string, filters?: Filters) => Promise<number>);
    
        /** Loading state */
        loading?: boolean;
    
        /** Message to show when there are no items */
        noItemsMessage?: string | React.ReactNode;
    
        /** Edit column configuration */
        editColumn?: {
            enable: boolean;
            label?: string;
            renderColumn?: (item: RowData) => React.ReactNode;
            onEdit?: (item: RowData) => void;
        };
    
        /** Delete column configuration */
        deleteColumn?: {
            enable: boolean;
            label?: string;
            renderColumn?: (item: RowData) => React.ReactNode;
            onDelete?: (item: RowData) => Promise<void>;
        };
    
        /** Minimum width for any table cell */
        minCellWidth?: number;
    
        /** Callback when a row is clicked */
        onClickRow?: (e: React.MouseEvent<HTMLDivElement>, item: RowData) => void;
    
        /** Callback when a cell/column is clicked */
        onClickColumn?: (e: React.MouseEvent<HTMLDivElement>, item: RowData, column: TableColumn) => void;
    
        /** Disable pagination and show all items */
        disablePagination?: boolean;
    
        /** Enable inline editing mode with callbacks */
        editable?: EditableConfig;
    
        /** Search configuration */
        search?: {
            enable: boolean;
            /** Fields to search (required for static array data) */
            fields?: string[];
        };
    
        /** OSC-style filter panel configuration */
        filters?: FilterConfig;
    
        /** Custom action buttons rendered in the toolbar (right side) */
        actionButtons?: ReactNode;
    
        /** Content rendered as the last row inside the table card (e.g. "+ Add New") */
        addNewRow?: ReactNode;
    }
        
    /**
     * @export
     * Table column definition, extending base Column but omitting advanced features
     */
    export interface TableColumn extends Omit<Column, 'onClickColumn' | 'isResizable' | 'isSortable'> { }
        
    /**
     * Combined props type - supports all variants
     */
    export type SimpleTableProps = SimpleTableBaseProps &
        (SimpleTableDataArray | SimpleTableDataFunction | SimpleTableDataPaginated) &
        (InlineEditingMode | RowInteractionMode | NoInteractionMode);
        
    // ============================================================================
    // NEW TYPE SYSTEM
    // ============================================================================
    /**
     * Base props shared by all variants
     */
    export interface SimpleTableBaseProps {
        /** Columns for the table */
        columns: TableColumn[];
    
        /** Text to display when there is no data */
        noDataText?: string;
    
        /**
         * Suppress all internal toasts and alerts (add, save, delete, reorder).
         * Useful when the table is embedded in a larger form and notifications would be misleading.
         * @default false
         */
        disableNotifications?: boolean;
    
        /** Page size for pagination */
        pageSize?: number;
    
        /** Disable pagination */
        disablePagination?: boolean;
    
        /** Search configuration — passed through to TableComponent */
        search?: {
            enable?: boolean;
            fields?: string[];
        };
    
        /** OSC-style filter panel — passed through to TableComponent */
        filters?: FilterConfig;
    
        /** Action buttons — passed through to TableComponent toolbar (right side) */
        actions?: ReactNode;
    
        /** Initial loading state */
        loading?: boolean;
    
        /** Callback when "Add New" button is clicked (e.g., to open a form panel) */
        onClickAddNew?: () => void;
    
        /** Callback for saving a new item added inline (returns success/error) */
        onAddItem?: (item: RowData) => Promise<{ success: boolean, error?: string }>;
    
        /** Show/hide the default "Add New" button at bottom (default: true if onClickAddNew or onAddItem exists) */
        showAddButton?: boolean;
    
        /** Custom label for the "Add New" button (default: '+ Add New') */
        addButtonLabel?: string;
    }
        
    /**
     * Data loading variant: Static array
     */
    export interface SimpleTableDataArray {
        data: RowData[];
        total?: number;
    }
        
    /**
     * Data loading variant: Simple function (no pagination)
     */
    export interface SimpleTableDataFunction {
        data: () => Promise<RowData[]>;
    }
        
    /**
     * Data loading variant: Paginated function
     */
    export interface SimpleTableDataPaginated {
        data: (page: number, pageSize: number, query?: string, filters?: Filters, sort?: Sort) => Promise<{ items: RowData[] }>;
        total: number | ((query?: string, filters?: Filters) => Promise<number>);
    }
        
    /**
     * Inline editing mode - mutually exclusive with row interaction
     */
    export interface InlineEditingMode {
        onUpdateItem?: (item: RowData) => Promise<{ success: boolean, error?: string }>;
        onDeleteItem?: (item: RowData) => Promise<{ success: boolean, error?: string }>;
        onReorderItems?: (reorderedData: RowData[]) => Promise<{ success: boolean, error?: string }>;
        roles?: {
            canAdd?: () => boolean;
            canEdit?: () => boolean;
            canDelete?: () => boolean;
        };
        labels?: {
            add?: string;
            save?: string;
            cancel?: string;
            delete?: string;
            edit?: string;
            saved?: string;
            deleted?: string;
        };
        onClickRow?: never;
        onClickColumn?: never;
        editColumn?: never,
        deleteColumn?: never
    }
        
    /**
     * Row interaction mode - mutually exclusive with inline editing
     */
    export interface RowInteractionMode {
        onClickRow?: (e: React.MouseEvent<HTMLDivElement>, item: RowData) => void;
        onClickColumn?: (e: React.MouseEvent<HTMLDivElement>, item: RowData, column: TableColumn) => void;
        editColumn?: {
            enable: boolean;
            label?: string;
            renderColumn?: (item: RowData) => React.ReactNode;
            onEdit?: (item: RowData) => void;
        };
        deleteColumn?: {
            enable: boolean;
            label?: string;
            renderColumn?: (item: RowData) => React.ReactNode;
            onDelete?: (item: RowData) => Promise<void>;
        };
        onUpdateItem?: never;
        onDeleteItem?: never;
        onReorderItems?: (reorderedData: RowData[]) => Promise<{ success: boolean, error?: string }>;
        roles?: never;
        labels?: {
            add?: string;
            saved?: string;
        };
    }
        
    /**
     * No interaction mode
     */
    export interface NoInteractionMode {
        onClickRow?: never;
        onClickColumn?: never;
        onUpdateItem?: never;
        onDeleteItem?: never;
        onReorderItems?: (reorderedData: RowData[]) => Promise<{ success: boolean, error?: string }>;
        roles?: never;
        labels?: {
            add?: string;
            saved?: string;
        };
    }
        
    // ============================================================================
    // LEGACY INTERFACE - Keep for backward compatibility
    // ============================================================================
    /**
     * @deprecated Use SimpleTableProps instead. This interface is kept for backward compatibility.
     *
     * Props for SimpleConfigurationTableComponent (Legacy)
     */
    export interface ISimpleConfigurationTableProps {
        /** Context object for UXP features */
        uxpContext: IContextProvider;
    
        /** Function returning table data */
        data: () => Promise<RowData[]>;
    
        /** Text to display when there is no data */
        noDataText?: string;
    
        /** Columns for the editable table */
        columns: TableColumn[];
    
        /** Callback for adding a new item */
        onAddItem?: (item: RowData) => Promise<{ success: boolean, error?: string }>;
    
        /** Callback for updating an existing item */
        onUpdateItem?: (item: RowData) => Promise<{ success: boolean, error?: string }>;
    
        /** Callback for deleting an item */
        onDeleteItem?: (item: RowData) => Promise<{ success: boolean, error?: string }>;
    
        /** Enable drag and drop row reordering */
        onReorderItems?: (reorderedData: RowData[]) => Promise<{ success: boolean, error?: string }>;
    
        /** Role-based permissions */
        roles?: {
            canAdd?: () => boolean;
            canEdit?: () => boolean;
            canDelete?: () => boolean;
        };
    
        /** Labels for buttons and notifications */
        labels?: {
            add?: string;
            save?: string;
            cancel?: string;
            delete?: string;
            edit?: string;
            saved?: string;
            deleted?: string;
        };
    }
        
    /**
     * @export
     * Props for DataEntrySection component.
     * This component is a placeholder used to declaratively define form sections in JSX.
     * All props are extracted by DataEntryForm and mapped to FormSectionProps.
     */
    export interface DataEntrySectionProps {
        /**
         * Section title displayed above the fields
         */
        title?: string;
    
        /**
         * Number of columns to display fields in
         * @default 1
         */
        columns?: 1 | 2 | 3;
    
        /**
         * Maximum width of each column in the section grid.
         * Passed to the underlying DynamicForm FormRow.
         * Use '100%' to make fields fill the full available width.
         * @example maxColumnWidth="100%"
         */
        maxColumnWidth?: string;
    
        /**
         * Show a separator line below the section
         * @default false
         */
        separator?: boolean;
    
        /**
         * Conditional visibility function.
         * If provided, the section will only be shown when this returns true.
         * @param data - Current form data
         */
        show?: (data: IFormData) => boolean;
    
        /**
         * If true, the section renders as a collapsible panel.
         * @default false
         */
        collapsible?: boolean;
    
        /**
         * Whether the collapsible section is expanded by default.
         * Only used when collapsible is true.
         * @default true
         */
        defaultExpanded?: boolean;
    
        /**
         * DataEntryField or DataEntrySubSection components to render in this section
         */
        children?: React.ReactNode;
    }
        
    /**
     * @export
     * Props for DataEntryField component.
     * This component is a placeholder used to declaratively define form fields in JSX.
     * All props are extracted by DataEntryForm and mapped to DynamicFormFieldProps.
     */
    export interface DataEntryFieldProps {
        // ========== Basic Properties ==========
    
        /**
         * Field name - maps to the property name in the data object
         */
        field: string;
    
        /**
         * Field label displayed to the user
         */
        title: string;
    
        /**
         * Field type - determines the input component to render
         * @default 'text'
         */
        type?: 'text' | 'password' | 'number' | 'email' | 'checkbox' | 'toggle' | 'select' |
               'date' | 'time' | 'datetime' | 'daterange' | 'hidden' | 'textarea' | 'json' | 'readonly';
    
        /**
         * Initial/current value of the field
         */
        value?: FormValue;
    
        /**
         * Placeholder text for the input
         */
        placeholder?: string;
    
        /**
         * FontAwesome icon to display with the label (e.g., 'fas user')
         */
        icon?: string;
    
        // ========== Custom Rendering ==========
    
        /**
         * Custom render function for the field.
         * If provided, this will be used instead of the default input component.
         * @param data - Current form data
         * @param onChange - Callback to update the field value
         */
        children?: (data: IFormData, onChange: (value: any) => void) => React.ReactNode;
    
        /**
         * Conditional visibility function.
         * If provided, the field will only be shown when this returns true.
         * @param data - Current form data
         */
        show?: (data: IFormData) => boolean;
    
        // ========== Select Field Options ==========
    
        /**
         * Static options for select fields
         */
        options?: Array<{ label: string | number; value: string | number }> | Array<any>;
    
        /**
         * Dynamic options function for select fields
         * @param data - Current form data
         */
        getOptions?: (data: IFormData) => (Array<{ label: string | number; value: string | number }> | Array<any>);
    
        /**
         * Paginated options loader for select fields with large datasets
         * @param data - Current form data
         * @param max - Maximum number of items to return
         * @param lastPageToken - Token for pagination
         * @param args - Additional arguments
         */
        getPaginatedOptions?: (
            data: IFormData,
            max: number,
            lastPageToken: string,
            args?: any
        ) => Promise<{ items: Array<any>; pageToken: string; total?: number }>;
    
        /**
         * Custom label for the selected option in select fields
         * Can be a string or a function that resolves the label
         */
        selectedOptionLabel?: string | ((data: IFormData, selected: string) => Promise<any>);
    
        /**
         * Property name to use as the label in options
         * @default 'label'
         */
        labelField?: string;
    
        /**
         * Property name to use as the value in options
         * @default 'value'
         */
        valueField?: string;
    
        // ========== Number Field Options ==========
    
        /**
         * Allow zero values for number fields
         * @default false
         */
        allowZero?: boolean;
    
        /**
         * Allow negative values for number fields
         * @default false
         */
        allowNegative?: boolean;
    
        // ========== Value Formatting ==========
    
        /**
         * Function to format the value before it's set in form data
         * @param value - The raw value from the input
         */
        formatter?: (value: any) => any;
    
        // ========== Validation ==========
    
        /**
         * Mark field as required. Accepts a boolean or a function that receives the current form data and returns a boolean.
         * @default false
         */
        required?: boolean | ((data: IFormData) => boolean);
    
        /**
         * Allow empty strings for required string fields (after trim)
         * @default false
         */
        allowEmptyString?: boolean;
    
        /**
         * Minimum length for string fields
         */
        minLength?: number;
    
        /**
         * Maximum length for string fields
         */
        maxLength?: number;
    
        /**
         * Regular expression pattern for validation
         */
        regExp?: RegExp;
    
        /**
         * Minimum value for number fields
         */
        minVal?: number;
    
        /**
         * Maximum value for number fields
         */
        maxVal?: number;
    
        /**
         * Custom validation function
         * @param value - The current field value
         * @param data - The current form data
         */
        validate?: (value: any, data: IFormData) => CustomValidateResponse | Promise<CustomValidateResponse>;
    }
        
    /**
     * @export
     * Props for DataEntrySubSection component.
     * Used to define sub-sections within a DataEntrySection — particularly useful
     * for grouping fields inside a tab or wizard step with their own title and column layout.
     */
    export interface DataEntrySubSectionProps {
        /**
         * Sub-section title displayed above the fields
         */
        title?: string;
    
        /**
         * Number of columns to display fields in
         * @default 1
         */
        columns?: 1 | 2 | 3;
    
        /**
         * Maximum width of each column in the section grid.
         * Use '100%' to make fields fill the full available width.
         */
        maxColumnWidth?: string;
    
        /**
         * Show a separator line below the sub-section
         * @default false
         */
        separator?: boolean;
    
        /**
         * Conditional visibility function.
         */
        show?: (data: IFormData) => boolean;
    
        /**
         * If true, the sub-section renders as a collapsible panel.
         * @default false
         */
        collapsible?: boolean;
    
        /**
         * Whether the collapsible sub-section is expanded by default.
         * Only used when collapsible is true.
         * @default true
         */
        defaultExpanded?: boolean;
    
        /**
         * DataEntryField components
         */
        children?: React.ReactNode;
    }
        
    /**
     * @export
     * Props for the DataEntryForm component
     */
    export interface DataEntryFormProps<T = any> extends Omit<DynamicFormProps, 'formStructure'> {
        /**
         * Current item data to populate form fields
         */
        item?: Partial<T>;
    
        /**
         * DataEntrySection components defining the form structure
         */
        children?: React.ReactNode;
    }
        
    /**
     * @export
     * External handlers exposed via ref
     */
    export interface DataEntryFormHandlers extends DynamicFormHandlers { }
        
    /**
     * @export
     * Props for the SlideInForm component (discriminated union)
     */
    export type SlideInFormProps<T = any> =
        | SlideInFormDataEntryProps<T>
        | SlideInFormDynamicProps;
        
    /**
     * @export
     * Props for SlideInForm with DataEntryForm (JSX declarative API)
     */
    export type SlideInFormDataEntryProps<T = any> = SlideInFormBaseProps &
        Omit<DataEntryFormProps<T>, 'onSubmit' | 'onCancel'> & {
            /**
             * Form type - use 'data-entry' for JSX declarative API
             */
            formType: 'data-entry';
        };
        
    /**
     * @export
     * Base props shared by all SlideInForm variants
     */
    export interface SlideInFormBaseProps {
        /**
         * Form title displayed in the header
         */
        title: string;
    
        /**
         * Whether the form panel is open
         * @default false
         */
        isOpen?: boolean;
    
        /**
         * Additional CSS class for the panel wrapper
         */
        className?: string;
    
        /**
         * Callback when form is submitted successfully
         * @param data - The validated form data
         */
        onSave: (data: any) => Promise<void>;
    
        /**
         * Callback when form is cancelled
         */
        onCancel: () => void;
    
        /**
         * Rendering mode of the panel.
         * - `full`: fills the main content area (default)
         * - `modal`: centered overlay, auto-sized to content
         */
        mode?: SlideInPanelMode;
    
        /**
         * Direction from which the panel slides in. Only applies in `full` mode.
         * @default 'right'
         */
        direction?: 'left' | 'right' | 'top' | 'bottom';
    
        /**
         * Explicit width for the panel. Applies in `modal` mode.
         */
        width?: string;
    
        /**
         * Explicit height for the panel. Applies in `modal` mode.
         */
        height?: string;
    
        /**
         * Reference to container element for portal mounting. Only applies in `full` mode.
         */
        containerRef?: React.RefObject<HTMLDivElement>;
    
        /**
         * Custom label for save button
         * @default 'Save' (localized)
         */
        saveButtonLabel?: string;
    
        /**
         * Custom label for save button when loading
         * @default 'Saving...' (localized)
         */
        saveButtonLoadingLabel?: string;
    
        /**
         * Custom label for cancel button
         * @default 'Cancel' (localized)
         */
        cancelButtonLabel?: string;
    
        /**
         * Instructions text to display in the header
         * @default 'Fields marked with an * are mandatory'
         */
        instructions?: string;
    
        /**
         * Hide the instructions text
         * @default false
         */
        hideInstructions?: boolean;
    
        /**
         * Additional action buttons or elements to render in the header
         * Rendered between instructions and save/cancel buttons
         */
        additionalHeaderActions?: React.ReactNode;
    }
        
    /**
     * @export
     * Props for SlideInForm with DynamicForm (config-driven API)
     */
    export type SlideInFormDynamicProps = SlideInFormBaseProps &
        Omit<DynamicFormProps, 'onSubmit' | 'onCancel'> & {
            /**
             * Form type - use 'dynamic' for config-driven API
             */
            formType: 'dynamic';
        };
        
    /**
     * @export
     * External handlers exposed via ref
     */
    export interface SlideInFormHandlers extends DataEntryFormHandlers { }
        
    
    export interface IConfirmButtonProps {
        /**
         * The caption for the button
         */
        title: string,
    
        /**
         * The url of an icon to show on the button
         */
        icon?: string,
    
        /**
         * Any extra css classes to add to the button
         */
        className?: string,
    
        /**
         * The callback that gets invoked when the confirm button is clicked
         */
        onConfirm: () => Promise<any>,
        /**
         * The callback that gets invoked when the cancel button is clicked
         */
        onCancel: () => void,
    
        /**
         * Set this to `true` to show the button in its 'loading...' state.
         * In this state, an animation will be shown indicating that work is going on and the user will not be able to click the button
         */
        loading?: boolean,
    
        /**
         * The caption to show on the button when its in loading state
         */
        loadingTitle?: string,
        active?: boolean,
        disabled?: boolean
    }
        
    
    export interface IDataTableProps {
        /**
         * List of items to render. This can either be an array of objects or a function that will generate the array of objects.
         * If you supply a function then pagination will be supported. The function expects 2 parameters - `max` and `last` and returns a promise that will resolve to the list of objects.
         * `max` specifies the maximum number of items to be returned.
         */
        data: Array<any> | IDataFunction,
    
        /**
         * List of columns to render
         * column contains three(3) params
         *  - title : column title. this can be either a string or a function that returns a jsx element
         *  - width : width of the column. this can a percentage (20%), fixed with (100px) or null
         *  - renderColumn : content of the column. this is a function that returns a jsx element. this function will take a single argument item type of any
         *  @example
         *
         * ```
         *  renderColumn={(item,key)=><div>{'Item:' + JSON.stringify(item)}}</div>}
         * ```
         * @example
         *
         * ```
         * columns= {[
         *  {
         *      title: "Request Id",
         *      width: "20%",
         *      render: (item) => <div>{item.requestId} </div>
         *  },
         *  {
         *      title: "User",
         *      width: "10%",
         *      render: (item) => <div>{item.user} </div>
         *  }
         * ]}
         * ```
         */
        columns: IDataTableColumn[],
    
        /**
         * The number of items to fetch in each page. This gets passed to the data function as the `max` parameter
         */
        pageSize: number,
    
        args?: any
    
        /**
         * This function renders a loading animation. If not specified, the default loading animation will be used.
         */
        renderLoading?: () => JSX.Element,
    
        /**
         * Any extra class names to be added to the component
         */
        className?: string
        /**
         * show/hide footer (scroll buttons)
         */
        showFooter?: boolean,
        /**
         * mun of rows to scroll
         */
        scrollStep?: number,
        /**
         * show/hide end of content message
         */
        showEndOfContent?: boolean
    
        /**
       * this function will be called every time list get updated
       * this will return total number of items (function should return the total count) and loaded items count
       */
        onItemsLoad?: (total: number, loaded: number) => void
    
        /**
         * this will toggle the headers
         * default is true
         */
        renderHeaders?: boolean,
    
        /**
         * callback function to trigger on click a table row
         */
        onClickRow?: (item: any) => void,
    
        /**
         * active table row styles
         * default is 'active' an has some styles
         * if you give a class here it will be applied
         */
        activeClass?: string
    }
        
    /**
     * @export
     * Options that can be passed to a date picker field
     */
    export interface IDataTableColumn {
        title: string | ITitleFunc,
        width: string,
        renderColumn: (item: any) => JSX.Element
    }
        
    /**
     * @export
     * Options that can be passed to a date picker field
     */
    export type ITitleFunc = () => JSX.Element
        
    
    export interface IDataGridProps {
        /**
         * The items to render into a grid. This will be an array of any data.
         * The data is passed into the render function and can be used there to render the actual grid cell.
         *
         */
        data: Array<any>,
    
        /**
         * A function which can be used to return the contents of each cell. The function will be passed 2 parameters:
         *
         * `item`: The individual item from the list of items passed as the `data` prop
         * `key`: The index of the item in the list
         *
         * This function should return a react element
         *
         * @example
         *
         * ```
         * renderItem={(item:any,key:number)=> <div>{'Key Is ' + key}}</div>}
         * ```
         */
        renderItem: (item: any, key: number) => JSX.Element,
    
        /**
         * The number of columns to display. Items will be layed out row by row and the number of columns in each row is specified here
         */
        columns: number,
    
        /**
         * Any additional css class names to include in the component
         */
        className?: string
    }
        
    
    export interface IHSListProps {
        /**
         * Array of items
         */
        items: any[],
        /**
         * render method for an item given above
         */
        renderItem: (item: any, key: number) => JSX.Element
        /**
         * number of items to scroll when click on controller buttons
         */
        scrollStep?: number
        /**
         * additional css class names
         */
        className?: string,
        infinite?: boolean,
        autoScroll?: {
            enable: boolean,
            interval?: number // default 5000 (equals to 5s/5000ms)
        }
    }
        
    
    export interface IItemListCardProps {
        /** The title to show on the card */
        title: string,
    
        /**
         * Any optional subtitle content to render. This should be a function that returns a react node
         */
        renderSubTitle?: () => JSX.Element,
    
        /**
         * The object to render in the card
         */
        item: any,
    
        /**
         * The list of fields from within the object that should be shown.
         * For each field in this list - one line gets rendered on the card
         */
        fields: string[],
    
        /** An optional function to control rendering of each field. It takes the item as a parameter along with the name of the field being rendered.
         * You can choose to render whatever you want here
         */
        renderField?: (object: any, field: string, key: number) => JSX.Element,
    
        /**
         * Any background tint to apply to the card. This must be in #RRGGBB hexadecimal format.
         */
        backgroundColor?: string
    
        /**
         * Any additional css classes to apply to the component
         */
        className?: string
    }
        
    /**
     * @export
     * Props for the UserInfoCard component
     */
    export interface UserInfoCardProps {
        /**
         * User key to fetch user details
         */
        userKey: number | string;
    
        /**
         * Details configuration - can be one of:
         * - Simple array: ['Phone', 'Email'] - auto-generates labels
         * - Full config: { fields: ['Phone'], columns: 2, layout: 'vertical' }
         * - Custom render: (user) => <div>{user.FullName}</div>
         */
        details?: UserInfoCardDetails;
    
        /**
         * Display variant: 'card' shows full card with title/subtitle, 'avatar' shows only profile image
         * Defaults to 'card'
         */
        variant?: 'card' | 'avatar';
    
        /**
         * Size of the profile image: small (2rem), medium (3rem, default), large (4rem), or custom CSS unit (e.g., "5rem")
         */
        size?: Size;
    
        /**
         * Shape of the profile image: circle (default) or square
         */
        shape?: Shape;
    
        /**
         * Position for the dropdown. Defaults to 'bottom-left'
         */
        dropdownPosition?: DropdownPosition;
    
        /**
         * Additional CSS class names
         */
        className?: string;
    
        /**
         * Inline styles
         */
        style?: React.CSSProperties;
    }
        
    /**
     * Union type for all possible details configurations
     * - InfoCardDetailsContent: Custom render function or ReactNode
     * - UserDetailField[]: Simple array of fields with auto-generated labels
     * - UserDetailsConfig: Full configuration with fields and layout options
     */
    export type UserInfoCardDetails =
        | InfoCardDetailsContent
        | UserDetailField[]
        | UserDetailsConfig;
        
    /**
     * Configuration for a single user detail field
     */
    export type UserDetailField = keyof UserDetails | {
        field: keyof UserDetails;
        label?: string;
        icon?: string;
    };
        
    /**
     * Configuration for user details display using ObjectInfoCard
     */
    export interface UserDetailsConfig {
        /**
         * Array of fields to display
         */
        fields: UserDetailField[];
    
        /**
         * Number of columns for grid layout (1, 2, 3, or 4). Defaults to 2.
         */
        columns?: 1 | 2 | 3 | 4;
    
        /**
         * Layout direction for label and value. Defaults to 'horizontal'.
         */
        layout?: 'horizontal' | 'vertical';
    
        /**
         * Alignment for value text. Defaults to 'end' for vertical, 'start' for horizontal.
         */
        valueAlign?: 'start' | 'end';
    }
        
    /**
     * @export
     * Props for the InfoCardGroup component (display-only)
     */
    export interface InfoCardGroupProps {
        /**
         * Array of items to display as profile images
         */
        items: any[];
    
        /**
         * Field mappings for displaying image/name (maps data fields to image/name)
         */
        fields?: InfoCardFields;
    
        /**
         * Details content to show in nested dropdown on ItemCard click
         * Can be:
         * - React.ReactNode: Static content
         * - Function returning React.ReactNode: Dynamic custom content
         * - Function returning ObjectInfoCardProps: Config for ObjectInfoCard
         */
        details?: InfoCardDetailsContent;
    
        /**
         * Maximum number of profile images to display before showing "+N" badge
         * Defaults to 5
         */
        maxVisible?: number;
    
        /**
         * Size of the profile images: small (2rem), medium (3rem, default), large (4rem), or custom CSS unit
         */
        size?: Size;
    
        /**
         * Shape of the profile images: circle (default) or square
         */
        shape?: Shape;
    
        /**
         * Position for the dropdown. Defaults to 'bottom-left'
         */
        dropdownPosition?: DropdownPosition;
    
        /**
         * Additional CSS class names
         */
        className?: string;
    
        /**
         * Inline styles
         */
        style?: React.CSSProperties;
    }
        
    /**
     * @export
     *
     * CRUD component props
     */
    export interface CRUDComponentProps {
        /**
         * list view props
         */
        list: ListProps,
        /**
         * add view props
         */
        add?: FormProps,
        /**
         * option to render a custom add  view
         */
        renderCustomAddView?: RenderCustomFormView
        /**
         * edit view props
         */
        edit?: ExtendedFormProps,
        /**
         * option to render a custom edit view
         */
        renderCustomEditView?: RenderCustomFormView
        /**
         * option to disable views
         */
        disableViews?: {
            add?: boolean;
            edit?: boolean;
            delete?: boolean;
        },
        /**
         * name of the entit, this will be used in notifications
         */
        entityName?: string,
        /**
         * custom class name
         */
        className?: string
    }
        
    /**
     * @export
     */
    export interface ListProps {
        title: string | React.ReactNode,
        columns: TableColumn[],
        defaultPageSize: number,
        data: {
            isPaginated?: boolean // getData function will return paginated data. Therefore that function will handle searching filtering and sorting etc.
            getData: any[] | ((page?: number, pageSize?: number, query?: string, filters?: any) => Promise<{ items: any[] }>)
            getTotal?: (query?: string, filters?: any) => Promise<number>
            isLoading?: boolean
        },
        search?: {
            enabled: boolean
            fields?: string[]
        },
        filters?: any
        renderFilters?: React.ReactNode,
        onChangeFilters?: (data: any[]) => any[] // this will only be applicable to when not using the isPaginated option
    
        noItemsMessage?: string | React.ReactNode,
        addButton?: {
            label: string,
            icon?: string,
            backgroundColor?: string,
            color?: string
        },
        onDeleteItem?: (item: any) => Promise<ActionResponse>,
        minCellWidth?: number,
        onClickRow?: (e: React.MouseEvent<HTMLDivElement>, item: any) => void
        onClickColumn?: (e: React.MouseEvent<HTMLDivElement>, item: any, column: TableColumn) => void
    }
        
    /**
     * @export
     */
    export interface ActionResponse {
        status: 'done' | 'error' | 'no-change',
        message?: string,
        data?: any
    }
        
    /**
     * @export
     */
    export interface FormProps extends Omit<DynamicFormProps, 'renderOptions' | 'onSubmit'> {
        title: string;
        onSubmit: (data: IFormData) => Promise<ActionResponse>
        afterSave?: (savedRecord?: any) => void;
    }
        
    /**
     * @export
     */
    export type RenderCustomFormView = (show: boolean, onClose: () => void, editInstance?: any) => React.ReactNode
        
    /**
     * @export
     */
    export interface ExtendedFormProps extends Omit<FormProps, 'onSubmit'> {
        /**
         * submit function for editing
         */
        onSubmit: (data: IFormData, editInstance: any) => Promise<ActionResponse>;
    }
        
    /**
     * @export
     *
     * CRUD component instannce props
     */
    export interface CRUDComponentInstanceProps {
        /**
         * option to refresh the list
         */
        refreshList: () => void
    }
        
    /**
     * @export
     */
    export interface TreeViewCompareProps {
        /**
         * Items for the left tree (source or target)
         */
        leftItems: TreeNode[];
    
        /**
         * Items for the right tree (source or target)
         */
        rightItems: TreeNode[];
    
        /**
         * Title/label for the left tree
         */
        leftTitle?: string | React.ReactNode;
    
        /**
         * Title/label for the right tree
         */
        rightTitle?: string | React.ReactNode;
    
        /**
         * Loading state for left tree
         */
        leftLoading?: boolean;
    
        /**
         * Loading state for right tree
         */
        rightLoading?: boolean;
    
        /**
         * Direction of allowed drag operations
         * 'left-to-right' | 'right-to-left' | 'both'
         */
        dragDirection?: 'left-to-right' | 'right-to-left' | 'both';
    
    
        /**
         * Callback when drag starts
         */
        onDragStart?: (node: TreeNode, sourceTree: Tree) => void;
    
        /**
         * Callback when a node is dropped from one tree to another
         *  sourceNode - The node being dragged
         *  parentNode - The node being dropped onto
         *  sourceNodeIndex - Index of the dropped node
         *  sibilingNodes - sibiling nodes
         *  sourceTree - Which tree the node came from (Tree)
         *  targetTree - Which tree the node is being dropped into ('left' | 'right')
         */
        onDragEnd?: (sourceNode: TreeNode, parentNode: TreeNode, sourceNodeIndex: number, sibilingNodes: TreeNode[], sourceTree: Tree, targetTree: Tree) => void | Promise<void>;
    
    
        /**
         * Custom render function for left tree node labels
         */
        renderLeftLabel?: (node: TreeNode) => React.ReactNode;
    
        /**
         * Custom render function for right tree node labels
         */
        renderRightLabel?: (node: TreeNode) => React.ReactNode;
    
        /**
         * Custom render function for left tree node details
         */
        renderLeftDetails?: (node: TreeNode) => React.ReactNode;
    
        /**
         * Custom render function for right tree node details
         */
        renderRightDetails?: (node: TreeNode) => React.ReactNode;
    
        /**
         * Expand all nodes by default
         */
        expandAllNodes?: boolean;
    
        /**
         * Show connecting paths in trees
         */
        showPath?: boolean;
    
        /**
         * Custom styles for the trees
         */
        treeStyles?: any;
    
        /**
         * Show header section with titles
         */
        showHeaders?: boolean;
    
        /**
         * Custom validation function to determine if drop is allowed
         * returns true if drop is allowed, false otherwise
         */
        validateDrop?: (sourceNode: TreeNode, targetNode: TreeNode, sourceTree: Tree, targetTree: Tree) => boolean;
    
        /**
         * Custom class name for container
         */
        className?: string;
    
        /**
         * Custom styles for container
         */
        style?: React.CSSProperties;
    
        /**
         * Maximum depth of the trees
         */
        maxDepth?: number;
    
        /**
         * Enable search box (applied to trees based on dragDirection)
         */
        enableSearch?: boolean;
    
        /**
         * Callback when search is performed
         */
        onSearch?: (query: string, side: Tree) => void;
    
        /**
         * Enable add button (applied to trees based on dragDirection)
         */
        enableAdd?: boolean;
    
        /**
         * Custom label for add button
         */
        addButtonLabel?: string;
    
        /**
         * Callback when add button is clicked
         */
        onAdd?: (parentNode: ExtendedTreeNode | undefined, side: Tree) => void;
    
        /**
         * Enable edit button (applied to trees based on dragDirection)
         */
        enableEdit?: boolean;
    
        /**
         * Callback when edit button is clicked
         */
        onEdit?: (node: ExtendedTreeNode, side: Tree) => void;
    
        /**
         * Enable delete button (applied to trees based on dragDirection)
         */
        enableDelete?: boolean;
    
        /**
         * Callback when delete button is clicked
         */
        onDelete?: (id: string, side: Tree) => void;
    
        /**
         * Enable drag to reorder within same level (applied to trees based on dragDirection)
         */
        enableReordering?: boolean;
    
        /**
         * Callback when nodes are reordered within the same level
         */
        onReorder?: (reorderedNodes: TreeNode[], draggedNode: TreeNode, newIndex: number, parentId: string | undefined, side: Tree) => Promise<boolean>;
    
        /**
         * Enable drag to change parent within same tree (applied to trees based on dragDirection)
         */
        enableInternalHierarchyChange?: boolean;
    
        /**
         * Callback when a node is moved to a different parent within same tree
         */
        onInternalHierarchyChange?: (movedNode: TreeNode, newIndex: number, sibilings: TreeNode[], newParentId: string | null, side: Tree) => void | Promise<void>;
    
        /**
         * Enable multi-select (applied to trees based on dragDirection)
         */
        multiSelect?: boolean;
    
        /**
         * Selected items for left tree
         */
        leftSelected?: TreeNode | TreeNode[];
    
        /**
         * Selected items for right tree
         */
        rightSelected?: TreeNode | TreeNode[];
    
        /**
         * Callback when left tree selection changes
         */
        onSelect?: (selected: TreeNode | TreeNode[], side: Tree) => void;
    
        /**
         * Show action buttons only on hover
         */
        showActionButtonOnlyOnHover?: boolean;
    
        /**
         * Position of action buttons relative to the label
         */
        actionButtonsPosition?: 'inline' | 'end';
    
        /**
         * Custom action buttons for left tree nodes (rendered with same hover mechanism as built-in actions)
         */
        customActions?: (node: ExtendedTreeNode) => CustomActionButton[];
        /**
         * Custom action buttons for right tree nodes (rendered with same hover mechanism as built-in actions)
         */
        rightCustomActions?: (node: ExtendedTreeNode) => CustomActionButton[];
    }
        
    /**
     * @export
     */
    export interface TreeNode {
        /**
         * Unique identifier for the node
         */
        id: string,
        /**
         * Label to display for the node
         */
        label: string,
        /**
         * Optional icon for the node
         */
        icon?: string,
    
        /**
         * path of the node
         */
        path: string
        /**
         * Optional path for display
         */
        displayPath?: string
    
        /**
         * Function to render custom label content
         */
        renderLabel?: () => React.ReactNode,
        /**
         * Function to render custom details for the node
         */
        renderDetails?: () => React.ReactNode,
        /**
         * Children of the node, either as a static array or a function that returns a promise resolving to an array of nodes
         */
        getChildren?: ((node: TreeNode) => Promise<{ nodes: TreeNode[] }>) | TreeNode[],
        /**
         * If true, the node will be expanded on load
         */
        expandOnLoad?: boolean,
        /**
         * Optional styles to customize the appearance of the node
         */
        styles?: any,
        /**
         * If true, this node will be disabled
         */
        disableNode?: boolean,
        /**
         * If true, all child nodes will be disabled
         */
        disableChildNodes?: boolean,
        /**
         * If true, this node will be enabled even if the parent is disabled
         */
        enableNode?: boolean,
        /**
         * If true, child nodes will be enabled even if the parent is disabled
         */
        enableChildNode?: boolean,
    
        /**
         * toggle option to add child nodes
         */
        enableAddChildren?: boolean,
    
        /**
         * toggle option to edit node
         */
        enableEditNode?: boolean,
    
        /**
         * toggle option to delete node
         */
        enableDeleteNode?: boolean
    
        // for any arbitory data
        [key: string]: any
    
        /**
         * Original dataset
         */
        original?: any
    }
        
    
    export enum Tree {
        Left = 'left',
        Right = 'right'
    }
        
    /**
     * Extended version of TreeNode that adds internal properties for node rendering
     */
    export interface ExtendedTreeNode extends TreeNode {
        /**
         * Array of child nodes, already resolved for rendering
         */
        children: ExtendedTreeNode[],
        /**
         * Indicates if the node is currently in the process of expanding (loading)
         */
        expanding?: boolean,
        /**
         * Indicates if the node is currently expanded
         */
        expanded?: boolean,
        /**
         * parent Id
         */
        parentId?: string,
    
        /**
         * parent path
         */
        parentPath?: string
    }
        
    /**
     * @export
     */
    export interface CustomActionButton {
        /**
         * Icon to display on the button
         */
        icon: string;
        /**
         * Callback when button is clicked
         */
        onClick: (node: ExtendedTreeNode) => void;
        /**
         * Optional tooltip text
         */
        tooltip?: string;
    }
        
    /**
     * @export
     * TreeViewCompare ref handle - exposes methods for programmatic control
     */
    export interface TreeViewCompareHandle {
        /**
         * Programmatically trigger a cross-tree drop operation
         *  sourceNodeId - ID of the node being moved
         *  targetNodeId - ID of the target node
         *  sourceTree - Which tree the node came from ('left' | 'right')
         *  targetTree - Which tree the node is being dropped into ('left' | 'right')
         *  dropPosition - Where to drop relative to target ('before' | 'after' | 'child')
         */
        triggerDrop: (
            sourceNodeId: string,
            targetNodeId: string,
            sourceTree: Tree,
            targetTree: Tree,
            dropPosition: DropPosition
        ) => Promise<void>;
        expandLeft: () => void;
        collapseLeft: () => void;
        expandRight: () => void;
        collapseRight: () => void;
    }
        
    /**
     * @export
     * Drop position types for drag and drop operations
     * 'before': Insert as sibling before target node
     * 'after': Insert as sibling after target node
     * 'child': Add as last child of target node
     */
    export type DropPosition = 'before' | 'after' | 'child';
        
    /**
     * @export
     */
    export interface TreeViewProps {
        /**
         * Array of root nodes in the tree
         */
        items: TreeNode[],
        /**
         * Message to display when no items are available
         */
        noItemsMessage?: string,
        /**
         * If true, show connecting paths between nodes
         */
        showPath?: boolean,
        /**
         * If true, render the root nodes horizontally
         */
        renderRootNodesHorizontally?: boolean,
        /**
         * If true, allows multiple nodes to be selected
         */
        multiSelect?: boolean,
        /**
         * Currently selected node or nodes
         */
        selected?: TreeNode | TreeNode[],
        /**
         * Callback function triggered when a node is selected
         */
        onSelect?: (selected: TreeNode | TreeNode[]) => void,
        /**
         * Custom styles for the TreeView component
         */
        styles?: TreeViewStyles,
    
        /**
         * toggles the header. default false.
         */
        showHeader?: boolean
    
        /**
         * title to show on header
         * default empty, no header will be shown
         */
        title?: string | React.ReactNode
    
        /**
         * toggle the searchbox
         */
        enableSearch?: boolean
    
        /**
         * callback on seach.
         */
        onSearch?: (query: string) => void,
    
        /**
         * expands all nodes. use with caution. this could affect the performance
         */
        expandAllNodes?: boolean,
    
        /**
         * option to enable add button
         */
        enableAdd?: boolean
    
        /**
         * optional label to show on add button
         */
        addButtonLabel?: string,
    
        /**
         * option to enable edit button
         */
        enableEdit?: boolean,
    
        /**
         * option to enable delete
         */
        enableDelete?: boolean,
    
        /**
         * callback on click add button
         */
        onAdd?: (parentNode?: ExtendedTreeNode) => void,
    
        /**
         * callback on click edit button
         */
        onEdit?: (node: ExtendedTreeNode) => void,
    
        /**
         * callback on click delete
         */
        onDelete?: (id: string) => void,
    
        /**
         * Custom action buttons (rendered after predefined buttons)
         */
        customActions?: (node: ExtendedTreeNode) => CustomActionButton[],
    
        /**
         * option to hide action buttons and show on hover the node
         */
        showActionButtonOnlyOnHover?: boolean,
    
        /**
         * Position of action buttons relative to the label
         * 'inline' - buttons appear immediately after the label
         * 'end' - buttons appear at the far right (default)
         */
        actionButtonsPosition?: 'inline' | 'end',
    
        /**
         * Component-level render function for node labels (fallback if node.renderLabel is not defined)
         */
        renderLabel?: (node: TreeNode) => React.ReactNode,
        /**
         * Component-level render function for node details (fallback if node.renderDetails is not defined)
         */
        renderDetails?: (node: TreeNode) => React.ReactNode,
    
        /**
         * External loading state - if provided, overrides internal loading
         * Use this when you're fetching/preparing data before passing items to TreeView
         */
        loading?: boolean
    
        /**
         * Enable dragging nodes from this tree (this is to support drag between treeviews)
         */
        enableDrag?: boolean;
    
        /**
         * Enable dropping nodes into this tree (this is to support drag between treeviews)
         */
        enableDrop?: boolean;
    
        /**
         * Enable drag & drop for reordering nodes within the same level
         */
        enableReordering?: boolean
    
        /**
         * Enable drag & drop to change node hierarchy (move nodes between parents)
         */
        enableHierarchyChange?: boolean
    
        /**
         * Maximum depth of the tree in levels (e.g., 3 means root + 2 child levels)
         * Root is level 1, direct children are level 2, etc.
         * Prevents adding children beyond this depth
         */
        maxDepth?: number
    
        /**
         * External loading state during reorder operation
         */
        reorderLoading?: boolean
    
        /**
         * Callback when nodes are reordered within the same level
         *  reorderedNodes - Full array of nodes in new order
         *  draggedNode - The node that was dragged
         *  newIndex - New index of the dragged node
         *  parentId - ID of parent node (undefined for root level)
         */
        onReorder?: (reorderedNodes: TreeNode[], draggedNode: TreeNode, newIndex: number, parentId?: string) => Promise<boolean>
    
        /**
         * Callback when a node is moved to a different parent (hierarchy change)
         *  movedNode - The node that was moved
         *  newParentId - ID of new parent (null for root level)
         *  newIndex - Index within new parent's children
         */
        onHierarchyChange?: (movedNode: TreeNode, newParentId: string | null, newIndex: number) => void | Promise<void>
    
        /**
         * disable internal dnd context
         */
        disableInternalDndContext?: boolean
    
        /**
         * External drag state for cross-tree drag & drop
         */
        externalDragState?: DragState,
    
        /**
         * only for comparison view
        */
        idPrefixForComparison?: string
    }
        
    /**
     * @export
     * Styles configuration for the TreeView component
     */
    export interface TreeViewStyles {
        /**
         * Background color for the node
         */
        nodeBGColor?: string,
        /**
         * Color of the node icon
         */
        nodeIconColor?: string,
        /**
         * Border color of the node
         */
        nodeBorderColor?: string,
        /**
         * Color of the path connecting nodes
         */
        pathColor?: string,
        /**
         * Background color of the label
         */
        labelBGColor?: string,
        /**
         * Text color of the label
         */
        labelTextColor?: string,
        /**
         * Border radius of the label
         */
        labelBorderRadius?: number,
        /**
         * Background color of the selected label
         */
        labelSelectedBGColor?: string,
        /**
         * Text color of the selected label
         */
        labelSelectedTextColor?: string,
        /**
         * Background color of the label on hover
         */
        labelHoverBGColor?: string,
        /**
         * Text color of the label on hover
         */
        labelHoverTextColor?: string,
        /**
         * Background color for disabled nodes
         */
        disabledBGColor?: string,
        /**
         * Text color for disabled nodes
         */
        disabledTextColor?: string,
        /**
         * Icon to display for expandable nodes
         */
        expandableIcon?: string,
        /**
         * Icon to display for expanded nodes
         */
        expandedIcon?: string,
        /**
         * Icon to display for nodes with no children
         */
        endNodeIcon?: string,
    }
        
    
    export interface DragState {
        /** Global state: true if any drag operation is happening in the system */
        isDragging: boolean;
        /** Local state: true if this tree is the drag source */
        isDragSource?: boolean;
        /** id of the dragged node */
        draggedNodeId?: string;
        /** id of the node dropzone (hovering at the moment)  */
        dropzoneNodeId?: string;
        /** position of the drop */
        dropPosition?: DropPosition
    }
        
    /**
     * @export
     * TreeView ref handle - exposes methods for programmatic control
     */
    export interface TreeViewHandle {
        /**
         * Programmatically trigger a drop operation
         * @param sourceNodeId - ID of the node being moved
         * @param targetNodeId - ID of the target node
         * @param dropPosition - Where to drop relative to target ('before' | 'after' | 'child')
         */
        triggerDrop: (sourceNodeId: string, targetNodeId: string, dropPosition: DropPosition) => Promise<void>;
        /** Expand all nodes in the tree */
        expandAll: () => void;
        /** Collapse all nodes in the tree */
        collapseAll: () => void;
    }
        
    /**
     * @export
     */
    export interface TreeViewSelectInputProps extends TreeViewProps {
        placeholder?: string,
        showSelectedNodePath?: boolean
        showSelectedNodeDisplayPath?: boolean
    }
        
    /**
     * @export
     */
    export interface TreeViewSelectInputInstanceProps {
    
    }
        
    
    export interface IPieChartProps {
        /**
         * A list of items that the pie chart is comprised of
         */
        data: IDataItem[],
    
        /**
         * Default fill color for pie slices. If not provided, theme chart colors will be used.
         * Individual items can override this with their own color property.
         */
        fillColor?: string,
    
        /**
         * Set to `true` to show the chart legend
         */
        showLegend?: boolean,
    
        /**
         * Additional CSS classes for custom styling
         */
        className?: string
    }
        
    /**
     * @export
     * An individual pie chart slice
     */
    export interface IDataItem { name: string, value: number, color?: string }
        
    
    export interface ITrendChartProps {
        /**
         * The series to plot. More than one can be visualized.
         */
        data: ITrendSeries[],
    
        /**
         * Use this to render a custom tooltip that will appear when the user hovers over a data point.
         * The data being hovered over is passed as a parameter.
         *
         * @example
         * onShowTooltip={(data)=><div>{`Temperature: ${data.temp}`}</div>}
         */
        onShowTooltip?: (data: any) => JSX.Element
    
        /**
         * Called whenever a data point is clicked on. The data point being clicked on is passed as a parameter to the function
         */
        onClick?: (data: any) => JSX.Element
    
        /**
         * Additional CSS classes for custom styling
         */
        className?: string
    }
        
    /**
     * A single time series line
     */
    export interface ITrendSeries {
        /**
         * Determines whether to visualize the trend as a line or an area plot
         */
        type: ITrendSeriesType
    
        /**
         * Any units associated with this metric. This is shown on the Y-Axis. This is also used to group Y-Axis'
         * So if a trend chart has multiple series, all of them which share the same unit will use the same Y-Axis
         */
        unit: string,
    
        /**
         * The color to show the line. If not provided, theme chart colors will be used automatically.
         */
        lineColor?: string,
    
        /**
         * If the type of chart is an area chart - this would be the color of the fill area.
         * If not provided, theme chart colors will be used automatically.
         */
        fillColor?: string,
    
        /**
         * The actual array of data points to plot
         */
        data: ITrendData[]
    }
        
    // trend chart
    export type ITrendSeriesType = 'line' | 'area';
        
    /**
     * A single data point in a trend visualization
     */
    export interface ITrendData {
    
        /**
         * The time stamp of when this data point was recorded. This should be a Date object a string that can be parsed into a date object
         */
        time: Date | string,
    
        /**
         * The value at that point in time
         */
        value: number
    }
        
    /**
     * @export
     * Options that can be passed to a date picker field
     */
    export interface IGaugeProps {
        /**
         * min value of the gauge
         */
        min: number;
        /**
         * max value of the gauge
         */
        max: number;
        /**
         * value of the gauge
         */
        value: number;
    
        /**
         * colors array.
         * color: name of the color.
         * stopAt: length of color distribution.
         *
         * default is blue, green, yellow, red colors at equal length
         */
        colors?: Array<{ color: string, stopAt: number }>;
        /**
         * label
         * no default value
         */
        label?: () => JSX.Element,
        /**
         * if true show legend.
         * default is false
         */
        legend?: boolean,
        /**
         * color of the ticks.
         * default is white
         */
        tickColor?: string,
        /**
         * class name(s) for additional styling
         */
        className?: string,
        /**
         * additional inline styles
         */
        styles?: React.CSSProperties
    
        /**
         * if true show gradient colors
         * default is false
         */
        gradient?: boolean,
        /**
         * thickness of the gauge
         * This value is defend on the radius
         * default is radius * 0.11
         * max value is radius * 0.25
         *
         * if you pass a higher value than the max value, max value will be used
         */
        thickness?: number,
        /**
         * thickness of the large ticks
         * default is 4
         * min value is 1
         * max value is 6
         *
         * if the given value is higher than the max value, max values will be used
         */
        largeTick?: number,
        /**
         * thickness of the small ticks
         * default is 1
         * min values is 1
         * max values is 3
         *
         * if the given values is higher than the max value, max values will be used
         */
        smallTick?: number
        /**
         * backbround color of the gauge
         * default is white
         */
        backgroundColor?: string,
        /**
         * color of the labels
         * default is #424242
         */
        labelColor?: string,
        /**
         * color of the needle
         * default is gray
         */
        needleColor?: string
    }
        
    /**
     * @export
     * Props for the HeatmapLayer component.
     * Extends IHeatmapConfiguration with additional layer-specific properties.
     *
     * @example
     * ```tsx
     * <HeatmapLayer
     *   points={[
     *     { latitude: 1.29, longitude: 103.85, intensity: 0.8 },
     *     { latitude: 1.30, longitude: 103.86, intensity: 1.0 }
     *   ]}
     *   radius={40}
     *   blur={20}
     *   max={1.0}
     *   gradient={{
     *     0.0: 'blue',
     *     0.5: 'lime',
     *     0.7: 'yellow',
     *     1.0: 'red'
     *   }}
     * />
     * ```
     */
    export interface IHeatmapLayerProps extends Omit<IHeatmapConfiguration, 'values' | 'imageCoordinates'> {
        /**
         * The heatmap data points with coordinates and intensity values
         */
        points: IHeatmapPoint[];
    
        /**
         * Minimum opacity (0-1, default: 0.5)
         */
        minOpacity?: number;
    
        /**
         * Maximum zoom level for the heatmap
         */
        maxZoom?: number;
    
        /**
         * Function to convert from image coordinates to map coordinates (if using static images)
         * This replaces the imageCoordinates boolean from IHeatmapConfiguration
         */
        coordinateConverter?: (lat: number, lng: number) => [number, number];
    }
        
    /**
     * @export
     * Configuration for heatmap layer overlay
     * @example
     * ```tsx
     * heatmap={{
     *   values: [
     *     { latitude: 1.29, longitude: 103.85, intensity: 0.8 },
     *     { latitude: 1.30, longitude: 103.86, intensity: 1.0 }
     *   ],
     *   radius: 40,
     *   blur: 20,
     *   max: 1.0,
     *   gradient: {
     *     0.0: 'blue',
     *     0.5: 'lime',
     *     0.7: 'yellow',
     *     1.0: 'red'
     *   }
     * }}
     * ```
     */
    export interface IHeatmapConfiguration {
        /**
         * The values to show on the heatmap. Each value has a coordinate and an intensity.
         * Intensities are relative - the heatmap colors will be scaled based on the min/max intensities in the array
         */
        values: IHeatmapPoint[];
    
        /**
         * Color gradient specified as an object with stop values (0-1) as keys and colors as values
         */
        gradient?: { [stop: number]: string };
    
        /**
         * Radius of each heatmap point in pixels
         * Default is 25
         */
        radius?: number;
    
        /**
         * Amount of blur to apply
         * Default is 15
         */
        blur?: number;
    
        /**
         * The maximum possible intensity value.
         * If not specified, the intensities will be scaled based on the range of values provided.
         * Specify a max to set what the maximum possible value can be and the range will be scaled according to that max value
         */
        max?: number;
    
        /**
         * Set to true if the coordinates of the heatmap points are in the image coordinates system.
         */
        imageCoordinates?: boolean;
    }
        
    /**
     * @export
     * Represents a single point on the heatmap with coordinates and intensity
     * @example
     * ```tsx
     * {
     *   latitude: 1.29,
     *   longitude: 103.85,
     *   intensity: 0.8
     * }
     * ```
     */
    export interface IHeatmapPoint {
        /**
         * The latitude of the point
         */
        latitude: number;
    
        /**
         * The longitude of the point
         */
        longitude: number;
    
        /**
         * The intensity of the point (0-1 recommended)
         */
        intensity: number;
    }
        
    
    export interface IMapComponentProps {
        /**
         * The url of the tile server that will serve up map tiles.
         * This url should have the following placeholders in them:
         * `{x}`, `{y}` and `{z}`
         *
         * `{z}` represents the current zoom level
         *
         * If not provided, automatically uses theme-aware default tiles:
         * - Light themes: OpenStreetMap (light tiles)
         * - Dark/Glass Dark themes: CartoDB Dark Matter (dark tiles)
         *
         * @example
         * ```
         * mapUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         * ```
         */
        mapUrl?: string,
    
        /**
         * A static image to use instead of a map layout.
         * If you are using a static image, omit `mapUrl` or set it to an empty string.
         *
         * The static image consists of a url for the image and a width and height of the image.
         * Note that the width and height values should be relative - just that the ratio should be accurate.
         *
         * @example
         * ```
         * staticImage={{url:'https://myserver/floor-plan.png',width:200,height:400}}
         * ```
         */
        staticImage?: IStaticImage,
    
        /**
         * Where the map is centered.
         */
        center?: { position: IMarker, renderMarker?: boolean },
    
        /**
         * A list of markers to render.
         * Each marker has a `latitude` `longitude` and `data` field.
         * The `data` field can store arbitrary data.
         */
        markers?: IMarker[],
    
        /**
         * This handler gets called whenever a marker is clicked on.
         * The first parameter represents the marker element that was clicked on.
         * The second parameter represents the data associated with the marker
         */
        onMarkerClick?: (el: any, data: any) => void
    
        /**
         * regions to show on map
         */
        regions?: IRegion[],
        /**
         * this handler will get called when a region is clicked
         *
         */
        onRegionClick?: (event: any, data: any) => void,
    
    
    
        /**
         * If you want to overlay a heatmap -  assign this object with some valid value
         */
        heatmap?: IHeatmapConfiguration
    
        /**
         * The default zoom level to show on the map
         */
        zoom?: number,
        /**
         * max zoom level.
         * optional. default is 19
         */
        maxZoom?: number,
        /**
         * min zoom level.
         * optional. default is -19
         */
        minZoom?: number,
        /**
         * zoom on scroll
         * default is false
         */
        zoomOnScroll?: boolean
    
        hideZoomControlls?: boolean,
        /**
         * this handler will get called when the map is clicked
         */
        onClick?: (event: LeafletMouseEvent) => void,
    
        onZoomEnd?: (event: LeafletEvent) => void
        onDragEnd?: (event: DragEndEvent) => void
    }
        
    /**
     * @export
     * A static image to use instead of a map (e.g., floor plan, blueprint)
     * @example
     * ```tsx
     * {
     *   url: 'https://example.com/floorplan.png',
     *   width: 623,
     *   height: 431
     * }
     * ```
     */
    export interface IStaticImage {
        /**
         * The url of the image
         */
        url: string;
        /**
         * The width of the image in pixels
         */
        width: number;
    
        /**
         * The height of the image in pixels
         */
        height: number;
        /**
         * static image bounds
         * if not provided these will be calculated based on image width and height (NOTE: this may not be accurate)
         */
        bounds?: [[number, number], [number, number]]
    }
        
    /**
     * @export
     * Represents an individual marker on the map
     * @example
     * ```tsx
     * {
     *   latitude: 1.29,
     *   longitude: 103.85,
     *   data: { name: 'Singapore' },
     *   customHTMLIcon: {
     *     className: 'custom-marker',
     *     html: '<div style="background: red; width: 20px; height: 20px;"></div>'
     *   },
     *   draggable: true
     * }
     * ```
     */
    export interface IMarker extends LeafletMarkerOptions {
        /**
         * latitude
         */
        latitude: number,
        /**
         * longitude
         */
        longitude: number,
        /**
         * any data to return when click on the marker
         */
        data?: any,
        /**
         * custom HTML marker
         */
        customHTMLIcon?: IDivIconInterface,
        /**
         * content to display in pop-up
         */
        renderPopup?: IRenderMarkerPopup,
        /**
         * content to display in tooltip
         */
        renderTooltip?: IRenderMarkerTooltip,
    
        /**
         * use image coordinates to calculate bounds
         */
        imageCoordinates?: boolean,
    
        onclick?: (event: LeafletMouseEvent) => void,
        ondragstart?: (event: LeafletEvent) => void,
        ondragend?: (event: DragEndEvent) => void,
    
    }
        
    /**
     * @export
     *
     * Custom html marker
     * refer https://docs.eegeo.com/eegeo.js/v0.1.780/docs/leaflet/L.DivIcon/
     *
     * @example
     *  {
     *       className: 'custom-marker',
     *       html: '<div>Marker Content</div>
     *  }
     */
    export interface IDivIconInterface {
        /**
         * A custom class name to assign to the icon.
         */
        className: string,
        /**
         * A custom HTML code to put inside the div element.
         */
        html: string,
        /**
         * Size of the icon in pixels. Can be also set through CSS.
         */
        iconSize?: [number, number],
        /**
         * The coordinates of the "tip" of the icon (relative to its top left corner).
         * The icon will be aligned so that this point is at the marker's geographical location.
         * Centered by default if size is specified, also can be set in CSS with negative margins.
         */
        iconAnchor?: [number, number]
        /**
         * The coordinates of the point from which popups will "open", relative to the icon anchor.
         */
        popupAnchor?: [number, number]
    }
        
    /**
     * @export
     * Render a popup for marker
     * @example
     * ```tsx
     * renderPopup={{
     *   content: () => <div>Popup content</div>,
     *   showOnLoad: true
     * }}
     * ```
     */
    export interface IRenderMarkerPopup {
        /**
         * content to show in popup
         */
        content: () => JSX.Element,
        /**
         * open the popup on load
         */
        showOnLoad?: boolean
    }
        
    /**
     * @export
     * Render tooltip for marker
     * @example
     * ```tsx
     * renderTooltip={{
     *   content: () => <div>Tooltip text</div>,
     *   direction: 'top',
     *   keepShowing: true
     * }}
     * ```
     */
    export interface IRenderMarkerTooltip {
        /**
         * content to show in tooltip
         */
        content: () => JSX.Element,
        /**
         * direction
         * default is auto
         */
        direction?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'auto',
        /**
         * keep showing the tooltip
         * default is false
         */
        keepShowing?: boolean
    }
        
    /**
     * @export
     * Region overlay for maps (polygon, rectangle, or circle)
     * @example
     * ```tsx
     * {
     *   type: 'polygon',
     *   bounds: [[1.29, 103.85], [1.30, 103.86], [1.31, 103.87]],
     *   color: 'blue',
     *   fillColor: 'lightblue',
     *   data: { name: 'Central Area' },
     *   tooltipContent: (data) => <div>{data.name}</div>
     * }
     * ```
     */
    export interface IRegion {
        /**
         * region type,
         * default is polygon
         */
        type?: regionType,
        /**
         * region bounds
         */
        bounds: IPolygonBound | ICircleBound,
        /**
         * show/hide outline of the region
         */
        hideStroke?: boolean,
        /**
         * outline color
         */
        color?: string,
        /**
         * fill color
         */
        fillColor?: string,
        /**
         * any data to return on click a region
         */
        data?: any,
        /**
         * use image coordinates to calculate bounds
         */
        imageCoordinates?: boolean,
        /**
         * A tooltip to be shown when you click on the region
         */
        tooltipContent?: (data: any) => JSX.Element;
    }
        
    /**
     * @export
     * Polygon or rectangle bounds definition
     */
    export type IPolygonBound = LatLngExpression[] | LatLngExpression[][];
        
    /**
     * @export
     * Circle bounds definition
     * @example
     * ```tsx
     * {
     *   center: [1.29, 103.85],
     *   radius: 2000
     * }
     * ```
     */
    export interface ICircleBound {
        /**
         * center of the circle
         */
        center: [number, number],
        /**
         * radius of the circle
         */
        radius: number
    }
        
    
    export interface IWidgetTitleBarProps {
        /**
         * The title to show for the widget
         */
        title: string;
    
        /**
         * The url for an icon to be shown next to the title on the top left corner.
         */
        icon?: string;
        className?: string
        children?: React.ReactNode
    }
        
    
    export interface ILinkWidgetContainerProps {
        /**
         *  Set this to true to make the container visible
         */
        show: boolean,
        /**
         * Called whenever the container is opened
         */
        onOpen?: any,
        /**
        * Called when the container gets closed
        */
        onClose?: any,
        /**
         * The title set in the title bar of the container
         */
        title?: any,
        /**
         * Any extra css classes to apply
         */
        className?: string,
        /**
        * Any custom content to include in the container toolbar.
        */
        toolbarContent?: any
        children?: React.ReactNode
    }
        
    /**
     * @export
     *
     */
    export interface ISampleDataLabelProps {
        show?: boolean;
        // info?: () => React.ReactElement;
    }
        
    /**
     * @export
     */
    export interface IWidgetWrapperProps {
        /**
         * Any extra css class names to add to the widget wrapper
         */
        className?: string,
        cssBreakPoints?: {
            width?: {
                default: string,
                [key: number]: string
            },
            height?: {
                default: string,
                [key: number]: string
            }
        },
        /**
         * this will be used to get the widget props
         * this will be used to access the name and description of the widget
         */
        instanceId?: string
        /**
         * sample data label
         */
        sampleData?: {
            /**
             * toggle sample data label
             */
            showLabel?: boolean,
            /**
             * this will be shown in the popup
             */
            description?: string,
            /**
             * this is deprecated - use product ids instead
             * link to buy from spaceworx
             * if not provided button will not be shown
             */
            link?: string,
    
            /**
             * prouct ids to show on spaceworx
             */
            productIds?: string[]
        }
        children?: React.ReactNode
    }
        
    
    export interface ILinkButtonWidgetProps {
        /**
         * link url
         */
        link: string,
        /**
         * target for link
         * default is _self
         */
        target?: "_self" | "_blank" | "_parent"
        /**
         * icon to show
         */
        icon: string,
        /**
         * label for link
         */
        label: string
    }
        
    /**
     * Props for the QRCodeComponent.
     */
    export interface QRCodeComponentProps {
        /** The value (text or URL) to encode in the QR code. */
        value: string;
    
        /** The size (width/height) of the QR code in pixels. Default is 128. */
        size?: number;
    
        /** Background color of the QR code. Defaults to theme or white. */
        bgColor?: string;
    
        /** Foreground color of the QR code. Defaults to theme or black. */
        fgColor?: string;
    
        /** Optional CSS class for the container. */
        className?: string;
    
        /** Optional inline styles for the container. */
        style?: React.CSSProperties;
    
        /** Additional styles (CSS string) to apply when printing. */
        printStyles?: string;
    
        /** If true, shows shadow around the QR code. Default is true. */
        shadow?: boolean;
    
        /** trigger print on click the qr code */
        printOnClick?: boolean
    }
        
    /**
     * Ref handle interface to expose QR code actions.
     */
    export interface QRCodeComponentHandles {
        /** Opens print dialog with a larger QR code. */
        print: () => void;
    }
        
    /**
     * Props for the UserProfile component
     */
    export interface ProfileProps {
        /** Hide user details section. Default: false */
        hideDetails?: boolean
        /** Hide logout button. Default: false */
        hideLogout?: boolean
        /** Additional class name for styling */
        className?: string
        /** Child components */
        children?: React.ReactNode
    }
        
    /**
     * @export
     */
    export interface PluggableViewConfigProps {
        componentId: string | null;
        currentProps: Record<string, any>;
        onClose: () => void;
        onSave: (props: Record<string, any>) => void;
    }
        
    /**
     * @export
     */
    export interface WidgetDrawerProps {
        show: boolean
        onClose: () => void
        widgets: ComponentInstance[]
        layouts: ResponsiveLayouts
        onChange: (event: WidgetDrawerChangeEvent) => boolean | Promise<boolean>
        isBounded?: boolean
        maxColumns?: number
        config?: WidgetDrawerConfig
        orientation?: 'vertical' | 'horizontal'
    }
        
    /**
     * @export
     */
    export interface WidgetDrawerChangeEvent {
        action: 'add' | 'delete' | 'select'
        items: (IWidget | IRenderUIItemProps)[]
        type: WidgetDrawerType// Type of items being changed
        widgets?: ComponentInstance[]  // Only when layout processing happens
        layouts?: any  // Only when layout processing happens
    }
        
    
    export interface IWidget {
        id: string,
        name: string,
        title?: string,
        label?: string,
        description?: string,
        tags?: string[],
        widget: any,
        configs?: IWidgetConfigs,
        installed?: boolean,
        deleted?: boolean,
        isNew?: string,
        icon?: string,
        vendor?: string,
        sourceUrl?: string,
        defaultProps?: { [propName: string]: any }
        external?: {
            styles?: { [key: string]: string }
            scripts?: { [key: string]: string }
        },
        isTemplate?: boolean,
        isDefaultTemplate?: boolean,
        props?: { [key: string]: any }
        templateKey?: string
        templateType?: string,
        category?: string,
        usecaseId?: string,
        usecaseName?: string,
        definitionPath?: string,
        localizedName?: string,
        localizedDescription?: string,
        // Permissions — auto-populated from the bundle.json entry by the per-project uxp.ts wrapper.
        // Do not set manually in register calls; bundle.json is the single authoring place.
        appRoles?: string[],    // qualified "App:role" strings — empty/absent = visible to everyone
        userGroups?: string[]   // user group keys
    }
        
    
    export type IWidgetConfigs = ComponentConfigs;
        
    // ============================================================================
    // UI TYPES (legacy registerUI)
    // ============================================================================
    export interface IRenderUIItemProps {
        id: string,
        label?: string,
        description?: string,
        component: any,
        uiProps?: any,
        title?: string,
        /**
         * @deprecated in V5 all UIs will be rendered within the base layout - all will have the header and sidebar
         */
        showDefaultHeader?: boolean,
        // Permissions — auto-populated from the bundle.json entry by the per-project uxp.ts wrapper.
        // Do not set manually in register calls; bundle.json is the single authoring place.
        appRoles?: string[],    // qualified "App:role" strings — empty/absent = visible to everyone
        userGroups?: string[]   // user group keys
    }
        
    /**
     * @export
     */
    export enum WidgetDrawerType {
        Widgets = 'widgets',
        UIs = 'uis'
    }
        
    /**
     * @export
     */
    export interface WidgetDrawerConfig {
        title?: string
        mode?: WidgetDrawerMode
        showTypeFilter?: boolean
        showStatusFilter?: boolean
        showCategoryFilter?: boolean
        defaultType?: WidgetDrawerType
        defaultStatus?: WidgetDrawerStatus
        excludeStatuses?: WidgetDrawerStatus[]
        buttonLabel?: string
        widgetsButtonLabel?: string
        uisButtonLabel?: string
        returnRawData?: boolean
        enableUIs?: boolean
    }
        
    /**
     * @export
     */
    export enum WidgetDrawerMode {
        Single = 'single',
        Multiple = 'multi'
    }
        
    /**
     * @export
     */
    export enum WidgetDrawerStatus {
        All = 'all',
        Installed = 'installed',
        Added = 'added',
        NotInstalled = 'not-installed'
    }
        
    /**
     * @export
     * Props for the EmbeddedDashboard component
     */
    export interface EmbeddedDashobardComponentProps {
        /**
         * List of dashboard IDs to try loading in priority order.
         * The component will use the first ID that has a record in the database.
         *
         * Accepts plain strings or { id, label } objects — use label to show a
         * human-readable name in the dashboard selector dropdown.
         *
         * Example:
         *   ids={[
         *     { id: `ibms/equipment/${equipmentKey}`, label: equipmentName },
         *     { id: `ibms/equipment/${equipmentType}`, label: equipmentType },
         *     { id: "ibms/equipment", label: "Default" }
         *   ]}
         */
        ids: DashboardIdEntry[];
    
        /**
         * Default configuration to use when no database record exists for any of the IDs.
         * Typically loaded from a JSON file.
         * When saving, will create a new record using the last (most generic) ID from the ids array.
         */
        defaultConfiguration?: ResponsiveWidgetLayoutConfiguration;
    
        /**
         * Enable edit/configure mode for the dashboard
         */
        allowToConfigure?: boolean;
    
        /**
         * Enable per-user-group dashboard layouts
         */
        enableUserGroupLayouts?: boolean;
    
        /**
         * Enable responsive breakpoint selection
         */
        enableResponsiveLayouts?: boolean;
    
        /**
         * Render the dashboard as a transparent overlay over a background component.
         * Widgets remain interactive; clicking empty areas passes through.
         */
        overlayMode?: boolean;
    
        /**
         * The object type context (e.g. 'Location', 'Asset').
         * Used for background surface compatibility filtering.
         */
        objectType?: string;
    
        /**
         * Enable background surface selection in edit mode.
         */
        enableBackgroundConfig?: boolean;
    
        /**
         * Additional props to pass through to all widgets.
         * Use this to forward global filters (e.g. URL params, event-driven context) from the parent.
         */
        autoPassedProps?: Record<string, any>;
    
        /**
         * Global dashboard settings fetched once by App.tsx (breakpoints + global defaults).
         * Used to show global default placeholders in the behavior settings panel.
         */
        globalDashboardSettings?: UXPGlobalDashboardSettings | null;
    }
        
    /**
     * @export
     * A dashboard ID entry — either a plain string or an object with id + human-readable label.
     * The label is shown in the dashboard selector dropdown in edit mode.
     */
    export type DashboardIdEntry = string | { id: string; label: string };
        
    
    export interface ResponsiveWidgetLayoutConfiguration {
        widgets: ComponentInstance[],
        layouts: any,
        installed?: ComponentInstance[] // legacy v4 field — optional in v5
        // User-group-specific layouts (optional)
        userGroupLayouts?: {
            [userGroup: string]: {
                widgets: ComponentInstance[];
                layouts: any;
            }
        };
        backgroundConfig?: BackgroundConfig;
        gridSettings?: GridSettings;
    }
        
    
    export interface BackgroundConfig {
        type: string;
        props?: Record<string, any>;
    }
        
    // BackgroundConfigPanelProps, BackgroundSurface, BackgroundConfig
    // → moved to ./types/legacy-component-types.ts
    export interface GridSettings {
        margin?: number;           // px gap between widgets (applied as [n, n])
        containerPadding?: number; // px padding around the grid container (applied as [n, n])
        columns?: number;          // override column count for all breakpoints
        showEmptyPlaceholder?: boolean; // show the + placeholder on an empty dashboard (default: true)
        showGridlines?: boolean;        // show gridlines in edit mode
        allowFreePositioning?: boolean; // overlay: default true; standard: default false — false = compacted grid with margin/padding
    }
        
    
    export interface UXPGlobalDashboardSettings {
        breakpoints?: Array<{
            key: string;
            enabled: boolean;
            width: number;
            columns?: number;
        }>;
        defaults?: {
            showGridlines?: boolean;
            showEmptyPlaceholder?: boolean;
            margin?: number;
            containerPadding?: number;
            allowFreePositioning?: boolean;
        };
    }
        
    /**
     * Props for DeleteAction component
     */
    export interface DeleteActionProps extends Omit<DeleteActionParams, 'model' | 'key'> {
        /**
         * Model name in format "App.Model" (e.g., "Location.Location")
         */
        model: string;
    
        /**
         * Primary key of the object to delete
         */
        objectKey: string | number;
    
        /**
         * Render function that receives the delete handler
         * This allows you to use your own button/link component
         */
        children: (deleteHandler: () => Promise<void>) => React.ReactNode;
    }
        
    /**
     * Parameters for delete action
     */
    export interface DeleteActionParams {
        /**
         * Model name in format "App.Model" (e.g., "Location.Location")
         */
        model: string;
    
        /**
         * Primary key of the object to delete
         */
        key: string | number;
    
        /**
         * Allow hiding the object if deletion is not possible due to dependencies
         * Defaults to false
         */
        canHide?: boolean;
    
        /**
         * Custom title for the delete dialog
         */
        deleteTitle?: string;
    
        /**
         * Custom confirmation message for delete
         */
        deleteMessage?: string;
    
        /**
         * Custom message when object has dependencies
         */
        hideMessage?: string;
    
        /**
         * Custom success message for delete action
         */
        deleteSuccessMessage?: string;
    
        /**
         * Custom success message for hide action
         */
        hideSuccessMessage?: string;
    
        /**
         * Custom error title (string or function that receives error object)
         */
        errorTitle?: string | ((error: any) => string);
    
        /**
         * Custom error message (string or function that receives error object)
         */
        errorMessage?: string | ((error: any) => string);
    
        /**
         * Enable two-step verification for delete action
         * User must type a verification text to confirm deletion
         * Defaults to false
         */
        requireVerification?: boolean;
    
        /**
         * Text that user must type to verify deletion
         * Defaults to "confirm" if requireVerification is true
         */
        verificationText?: string;
    
        /**
         * Custom prompt/instruction for verification
         * Defaults to "Please type **{text}** to confirm this action"
         */
        verificationPrompt?: string;
    
        /**
         * Enable case-sensitive verification text matching
         * Defaults to false (case-insensitive)
         */
        caseSensitive?: boolean;
    
        /**
         * Callback on successful delete or hide
         */
        onSuccess?: (action: 'delete' | 'hide') => void;
    
        /**
         * Callback on cancel
         */
        onCancel?: () => void;
    
        /**
         * Callback on error
         */
        onError?: (error: string) => void;
    }
        
    /**
     * @export
     */
    export interface IBuyOnSpaceworxButtonProps {
        /**
         * link to the marketplace product page
         * this will be deprecated. use product ids instead
         */
        link?: string
        /**
         * product ids from spaceworx
         */
        productIds?: string[]
        /**
         * class name for additional styling
         */
        className?: string
        /**
         * additional inline styles
         */
        styles?: React.CSSProperties
    }
        
    /**
     * @export
     */
    export interface ISpaceworxDescriptionTagProps {
        className?: string,
        styles?: React.CSSProperties
    }
        
    /**
     * @export
     */
    export interface ILocalisationFormProps {
        code: string,
        useGoogleTranslate?: boolean,
        className?: string,
        /** Custom save handler. If not provided, uses default saveLocalizations service.
         * Signature: (code: string, messages: LocalizationMessage[]) => Promise<{ success: boolean, error?: string }>
         */
        onSave?: (code: string, messages: LocalizationMessage[]) => Promise<{ success: boolean, error?: string }>,
        /** Callback when cancel button is clicked */
        onCancel?: () => void,
        /** Custom label for submit button. If not provided, uses "Save Changes" */
        submitButtonLabel?: string,
        /** Custom label for cancel button. If not provided, uses "Cancel" */
        cancelButtonLabel?: string,
        /** Hide the cancel button */
        hideCancelButton?: boolean,
        /**
         * Provide custom messages instead of fetching from backend.
         * Format: { [languageCode]: message }
         */
        customMessages?: Record<string, string>,
        /**
         * Render an editable message-code field. Use when creating a new message
         * (pass an empty code); the typed code is passed to onSave.
         */
        allowCodeEdit?: boolean,
    }
        
    /**
     * Message interface for localization save
     */
    export interface LocalizationMessage {
        key: string;
        languageCode: string;
        languageName: string;
        message: string;
        hasModified?: boolean;
    }
        
    /**
     * @export
     */
    export interface ILocalisationFormModalProps {
        code: string,
        useGoogleTranslate?: boolean,
        beforeOpen?: () => boolean
        className?: string
        /**
         * Custom save handler. If not provided, uses default saveLocalizations service.
         * Signature: (code: string, messages: LocalizationMessage[]) => Promise<{ success: boolean, error?: string }>
         */
        onSave?: (code: string, messages: LocalizationMessage[]) => Promise<{ success: boolean, error?: string }>,
        /**
         * Custom label for submit button. If not provided, uses "Save Changes"
         */
        submitButtonLabel?: string,
        /**
         * Custom label for cancel button. If not provided, uses "Cancel"
         */
        cancelButtonLabel?: string,
        /**
         * Hide the cancel button
         */
        hideCancelButton?: boolean,
        /**
         * Custom trigger button element. If not provided, renders default edit icon button.
         * Useful for custom styling or different button types.
         */
        trigger?: React.ReactElement,
        /**
         * Hide the trigger button. Use this when you want to control modal opening externally.
         */
        hideTrigger?: boolean,
        /**
         * Provide custom messages instead of fetching from backend.
         * Format: { [languageCode]: message }
         */
        customMessages?: Record<string, string>,
        /**
         * Render an editable message-code field. Use when creating a new message
         * (pass an empty code); the typed code is passed to onSave.
         */
        allowCodeEdit?: boolean,
    }
        
    /**
     * @export
     */
    export interface IThemeChangerProps {
        /**
         * The currently selected theme name.
         * If not provided, the context's current theme is used.
         */
        themeName?: string;
    
        /**
         * Callback that is executed whenever a new theme is selected.
         * themeName - The newly selected theme
         */
        onChangeTheme?: (themeName: string) => void;
    
        /**
         * The ID of the root element where theme variables should be applied.
         * Defaults to the global root if not provided.
         */
        rootElementId?: string;
    
        /**
         * The dropdown menu position relative to the trigger button.
         * Defaults to `'bottom-right'`.
         */
        position?: DropdownPosition;
    }
        
    
    export interface ConfiguredPageComponentProps {
        pageId: string;
        additionalProps?: any;
        configuredProps?: Record<string, any>;
        notFoundMessage?: string | React.ReactNode;
    }
        
    /**
     *
     * @export
     */
    export type IEventDispatcher = (instanceId: string, eventName: string, data?: { [key: string]: any }) => void
        
    /**
     * @export
     * A map of theme name to ThemeDetails, containing all built-in default themes
     */
    export type ThemeMap = { [name: string]: ThemeDetails };
        
    /**
     * @export
     */
    export interface ThemeDetails {
        name: string,
        type: ThemeType,
        props: IThemeProps
    }
        
    /**
     * @export
     * Named constants for the built-in default theme names
     */
    export interface DefaultThemeNames {
        light: string;
        dark: string;
        glassDark: string;
        glassLight: string;
    }
        
    /**
     * @export
     * Color group configuration for theme editor
     */
    export interface ColorGroup {
        id: string;
        title: string;
        description?: string;
        properties: ColorProperty[];
    }
        
    /**
     * @export
     * Color property configuration for theme editor
     */
    export interface ColorProperty {
        key: string;
        label: string;
        value: string;
    }
        
    /**
     * Result of parsing an icon prop
     * Contains the detected type and formatted icon ready for rendering
     */
    export interface ParsedIcon {
        /**
         * Detected icon type
         */
        type: IconType;
    
        /**
         * Icon formatted for the appropriate wrapper
         * - FontAwesome: IconProp array ['fas', 'save']
         * - Phosphor: PHIconProp array ['phb', 'house']
         * - Image: URL string
         * - Text: text/emoji string
         * - React: ReactElement
         */
        formatted: IconProp | PHIconProp | string | ReactElement;
    
        /**
         * Original icon prop as passed by the user
         */
        original: any;
    }
        
    // ============================================================================
    // Icon Parsing Types
    // ============================================================================
    /**
     * Supported icon types in the framework
     */
    export type IconType = 'fontawesome' | 'phosphor' | 'image' | 'text' | 'react';
        
    /**
     * Phosphor icon weight
     */
    export type PHIconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
        
    /**
     * @export
     */
    export type ScriptCallback = (error?: string | Event) => void;
        
    
    export interface ComponentDefinition {
        id: string;             // full 3-part ID as registered: moduleId/type/compId
        normalizedId: string;   // pre-computed: moduleId/compId — set by registerComponent, never re-derived at lookup
        name?: string;
        description?: string;
        component: React.ComponentType<any>;
        modes: ComponentMode[];
        configs?: ComponentConfigs;
        icon?: string;
        tags?: string[];
        compatibleObjects?: string[];
        sourceUrl?: string;
        installed?: boolean;
        deleted?: boolean;
        isTemplate?: boolean;
        isDefaultTemplate?: boolean;
        defaultProps?: Record<string, any>;
        props?: Record<string, any>;
        templateKey?: string;
        templateType?: string;
        category?: string;
        usecaseId?: string;
        usecaseName?: string;
        definitionPath?: string;
        vendor?: string;
        external?: { styles?: Record<string, string>; scripts?: Record<string, string> };
        showDefaultHeader?: boolean;
        // Permissions — auto-populated from the bundle.json entry by the per-project uxp.ts wrapper.
        // Do not set manually in register calls; bundle.json is the single authoring place.
        appRoles?: string[];    // qualified "App:role" strings — empty/absent = visible to everyone
        userGroups?: string[];  // user group keys
    }
        
    
    export type ComponentMode = 'widget' | 'ui' | 'background';
        
    
    export type DebounceOptions = { isImmediate: boolean };
        
    /**
     * @export
     * Generic type for parsed search parameters, ensuring non-object values are strings.
     */
    export type SearchParams<T> = {
        [K in keyof T]: T[K] extends object ? T[K] : string;
    };
        
    
    export interface TreeNodeOptions {
        leadingSlash?: boolean,
        displayPath?: {
            generate?: boolean,
            pathField?: string,
            leadingSlash?: boolean,
        },
        customLabel?: (item: any) => string | React.ReactNode,
        /**
         * If true, this node will be disabled
         */
        disableNode?: (item: any) => boolean,
    
        /**
         * If true, all child nodes will be disabled
         */
        disableChildNodes?: (item: any) => boolean,
    
        /**
         * If true, this node will be enabled even if the parent is disabled
         */
        enableNode?: (item: any) => boolean,
    
        /**
         * If true, child nodes will be enabled even if the parent is disabled
         */
        enableChildNode?: (item: any) => boolean,
    
        /**
         * If true, add children button will be enabled for this node
         */
        enableAddChildren?: (item: any) => boolean,
    
        /**
         * If true, edit button will be enabled for this node
         */
        enableEditNode?: (item: any) => boolean,
    
        /**
         * If true, delete button will be enabled for this node
         */
        enableDeleteNode?: (item: any) => boolean,
    }
        
    
    export interface ProcessingOptions {
        parentId?: string,
        parentPath?: string
        expandAllNodes?: boolean
    }
        
    /**
     * @export
     */
    export type IPublishMessage = (
        context: IContextProvider,
        channel: string,
        message: string
    ) => Promise<boolean>;
        
    // Discriminated union type
    export type FloatingActionSection = DashboardFloatingActions | PageFloatingActions;
        
    // Dashboard-specific props
    export interface DashboardFloatingActions extends FloatingActionBaseProps {
        type: FloatingActionSectionType.Dashboard;
        /** Current dashboard widgets */
        widgets: ComponentInstance[];
        /** Current dashboard layouts */
        layouts: ResponsiveLayouts;
        /** toggles the edit button */
        enableEdit: boolean;
        /** toggles the add button */
        enableAdd: boolean;
        /** Control when add button is visible */
        addButtonVisibility?: FloatingActionButtonVisibility;
        /** Callback to handle widget drawer changes (unified event handler) */
        onChangeWidgetDrawer: (event: WidgetDrawerChangeEvent) => Promise<boolean>;
        /** Restrict widgets to grid boundaries (affects new widget positioning) */
        isBounded?: boolean;
        /** Maximum number of columns in current breakpoint */
        maxColumns?: number;
        /** Widget drawer configuration */
        widgetDrawerConfig?: WidgetDrawerConfig;
        /** Optional callback to receive control methods for programmatic control */
        onRegister?: (controls: DashboardFloatingActionsControls) => void;
    }
        
    /**
     * @export
     */
    // Base props shared by all types
    export interface FloatingActionBaseProps {
        id: string;
        /** Current editing state */
        isEditing: boolean;
        /** Callback to enable edit mode */
        onEnterEditMode: () => void;
        /** callback to exit edit mode */
        onExitEditMode: () => void;
        /** Custom floating action buttons (rendered above the exit button) */
        customActions?: CustomFloatingAction[];
    }
        
    /**
     * @export
     */
    export interface CustomFloatingAction {
        icon: string;
        onClick: () => void;
        tooltip?: string;
        variant?: 'primary' | 'secondary' | 'danger';
        visibility?: FloatingActionButtonVisibility;
    }
        
    /**
     * @export
     */
    export enum FloatingActionButtonVisibility {
        Always = 'always',
        Normal = 'normal',
        Edit = 'edit'
    }
        
    /**
     * @export
     */
    export enum FloatingActionSectionType {
        Page = 'page',
        Dashboard = 'dashboard'
    }
        
    /**
     * @export
     * Control methods exposed to dashboard sections for programmatic control
     */
    export interface DashboardFloatingActionsControls {
        /** Open the widget drawer programmatically */
        openWidgetDrawer: () => void;
        /** Close the widget drawer programmatically */
        closeWidgetDrawer: () => void;
    }
        
    // Page-specific props
    export interface PageFloatingActions extends FloatingActionBaseProps {
        type: FloatingActionSectionType.Page;
    }
        
    /**
     *
     * @export
     */
    export type IEventSubscriber = (instanceId: string, eventName: string, callback: (data?: { [key: string]: any }) => void) => void
        
    /**
     * @export
     */
    export type MultiEventSubscriberConfig = SimpleEventConfig | FullEventconfig
        
    /**
     * @export
     */
    export interface SimpleEventConfig {
        events: string[];
        sharedCallback: (payload: any, eventName: string) => void;
    
    }
        
    /**
     * @export
     */
    export interface FullEventconfig {
        events: EventConfig[];
        sharedCallback?: never;
    }
        
    /**
     * @export
     */
    export type EventConfig = {
        eventName: string;
        callback: (payload: any, eventName: string) => void;
    };
        
    /**
     * The result of calling the useLoadingFeedback hook
     * @export
     */
    export interface ILoadingFeedbackResult {
        /** Show loading overlay with optional configuration */
        show: (options?: Omit<LoadingFeedbackProps, 'show'>) => void;
        /** Hide loading overlay */
        hide: () => void;
        /** Update loading message/progress while visible */
        update: (options: Omit<LoadingFeedbackProps, 'show'>) => void;
    }
        
    /**
     * The result of calling the useToast hook. This gives you methods to invoke notifications for success, errors, etc...
     * All notifications work the same way but have different styles.
     * @export
     */
    export interface IToastResult {
        success: IToastFunction,
        error: IToastFunction,
        warning: IToastFunction,
        info: IToastFunction,
        custom: IToastFunction,
        remove: IRemoveFunction
    }
        
    /**
     * @export
     */
    export type IToastFunction = (content: string | IPartialContent) => void;
        
    // toast content
    export interface IPartialContent {
        icon?: string | IToastContent;
        title?: string | IToastContent;
        content: string | IToastContent;
        showCloseBtn?: boolean;
        autoClose?: boolean;
        onClose?: () => void;
        closeAfter?: number;
    }
        
    
    export type IToastContent = () => JSX.Element;
        
    /**
     * @export
     */
    export type IRemoveFunction = (id: string) => void;
        
    /**
     * debounce hook will two params
     * first one is the value. Can be a string or a number
     * second one is the timout. This is optional, default is 300(ms)
     */
    export type DebounceHook = (value: any, timeout?: number, returnUpdateFunction?: boolean) => any | [debouncedValue: any, updateValue: (value: any) => void, immediateUpdate: (value: any) => void]
        
    /**
     * Return value from useExecuteRequest hook.
     */
    export interface UseExecuteResult<T = any> {
        /** Loading state - true while request is in progress */
        loading: boolean;
        /** Response data (null if not yet loaded or on error) */
        data: T | null;
        /** Error object if request failed */
        error: any;
        /** Error message string if request failed */
        errorMessage?: string;
        /**
         * Refresh data by re-executing the request.
         * Updates loading/data/error state automatically.
         * @param executeImmediately - Skip debounce if true
         */
        refresh: (executeImmediately?: boolean) => void;
        /**
         * Execute request manually with optional parameters.
         * @param params - Override/merge request parameters
         * @param updateLocalState - Update loading/data/error state if true
         * @returns Promise with execution result
         */
        execute: (params?: any, updateLocalState?: boolean) => Promise<ExecutionResult<T>>;
        /**
         * Reset hook state to initial values.
         * Clears loading, data, error, and cancels pending timers.
         */
        reset: () => void;
    }
        
    /**
     * @export
     * Type definition for a custom navigation function compatible with react-router-dom's navigate.
     */
    export type CustomNavigateFunction = {
        /**
         * Navigates to a specified path with optional replace and state options.
         */
        (path: string, options?: { replace?: boolean; state?: any }): void;
        /**
         * Navigates forward or backward by a specified number of steps in the history stack.
         */
        (delta: number): void;
    };
        
    /**
     * Router context value with navigation helpers.
     */
    export interface RouterContextValue {
        /** Current location or null if no router */
        location: Location<any> | null;
    
        /** Enhanced navigation function supporting both regular and contextual navigation */
        navigate: EnhancedNavigateFunction | null;
    
        /** Route parameters */
        params: Readonly<Params<string>> | null;
    
        /** True if inside a router */
        hasRouter: boolean;
    
        /** Utility to generate URLs with query handling */
        generateURL: (options: GenerateURLOptions) => string;
    }
        
    /**
     * Enhanced navigate function that supports both regular and contextual navigation.
     */
    export interface EnhancedNavigateFunction {
        // Regular navigation overloads
        (to: string): void;
        (to: number): void;
        (to: string, options: { replace?: boolean; state?: any }): void;
        (to: number, options: { replace?: boolean; state?: any }): void;
    
        // Contextual navigation
        (contextual: ContextualNavigateOptions): void;
    }
        
    /**
     * Options for generating URLs within RouterContext.
     */
    export interface GenerateURLOptions {
        /** Target path, defaults to current location */
        path?: string;
    
        /** Query parameters to add or update */
        searchParams?: Record<string, any>;
    
        /** Query parameters to remove */
        removeParams?: string[];
    
        /** Merge with current params (default: true) */
        mergeParams?: boolean;
    }
        
    /**
     * @export
     * Context type for the AddOnContext, providing add-on data and utility functions.
     */
    export interface AddOnContextType {
        /**
         * Base URL for add-on assets stored in S3.
         */
        AddOnS3BaseUrl: string;
    
        /**
         * Array of available add-ons.
         */
        addOns: IAddOn[];
    
        /**
         * Array of installed add-ons.
         */
        installedAddOns: IInstalledAddOn[];
    
        /**
         * Checks if a module ID corresponds to an add-on.
         */
        isAddOn: (moduleId: string) => boolean;
    
        /**
         * Retrieves details for an add-on by its module ID, or null if not found.
         */
        getAddOnDetails: (moduleId: string) => IAddOn | null;
    
        /**
         * Checks if an add-on is installed and configured.
         */
        isAddOnInstalledAndConfigured: (moduleId: string) => { installed: boolean; configured: boolean };
    
        /**
         * Gets the thumbnail image path for an add-on by its module ID, or null if not found.
         */
        getThunmbNailImagePath: (moduleId: string) => string | null;
    
        /**
         * Checks if configuration is required for an add-on.
         */
        isConfigurationRequired: (moduleId: string) => boolean;
    
        /**
         * Refreshes the list of installed add-ons.
         */
        refreshInstalledAddOns: () => Promise<void>;
    
        /**
         * Gets the name of an add-on from a widget or module ID, or null if not found.
         */
        getAddOnName: (widget?: IWidget | ComponentInstance | null, moduleId?: string) => string | null;
    }
        
    /**
     * @export
     * Interface for an add-on's metadata.
     */
    export interface IAddOn {
        /**
         * Unique identifier for the add-on.
         */
        id: string;
    
        /**
         * Title of the add-on.
         */
        title: string;
    
        /**
         * Path to the add-on's thumbnail image.
         */
        thumbnail: string;
    
        /**
         * Brief description of the add-on.
         */
        shortDescription: string;
    
        /**
         * Detailed description of the add-on.
         */
        description: string;
    
        /**
         * Array of image or video URLs for the add-on.
         */
        imagesVideos: string[];
    
        /**
         * Array of required connectors for the add-on.
         */
        connectorsRequired: string[];
    
        /**
         * Array of supported models for the add-on.
         */
        models: string[];
    
        /**
         * Array of tags associated with the add-on.
         */
        tags: string[];
    
        /**
         * Version of the add-on.
         */
        version: string;
    
        /**
         * Indicates if the add-on is publicly available.
         */
        public: boolean;
    
        /**
         * Optional configuration UI settings for the add-on.
         */
        configUI?: { default?: string };
    }
        
    /**
     * @export
     * Interface for an installed add-on's metadata.
     */
    export interface IInstalledAddOn {
        /**
         * URL or path to the add-on's image.
         */
        Image: string;
    
        /**
         * User or entity that installed the add-on.
         */
        InstalledBy: string;
    
        /**
         * Date the add-on was installed.
         */
        InstalledDate: string;
    
        /**
         * Unique key for the installed add-on.
         */
        Key: string;
    
        /**
         * Date the add-on was last updated.
         */
        LastUpdated: string;
    
        /**
         * Name of the add-on.
         */
        Name: string;
    
        /**
         * Object key for the add-on.
         */
        ObjectKey: string;
    
        /**
         * Brief description of the add-on.
         */
        ShortDescription: string;
    
        /**
         * User or entity that last updated the add-on.
         */
        UpdatedBy: string;
    
        /**
         * Unique identifier for the add-on's use case.
         */
        Usecase: string;
    
        /**
         * Version of the installed add-on.
         */
        Version: string;
    
        /**
         * Indicates if the add-on has been configured ("1" for true, otherwise false).
         */
        HasConfigured: string;
    }
        
    /**
     * The result of calling the useAlert hook. This gives you methods to invoke a alert or a confirm alert
     * @export
     *
     */
    export interface IAlertResult {
        show: (content: string | IBaseAlertProps) => Promise<any>,
        confirm: (content: string | IConfirmAlertProps) => Promise<boolean>
        form: (content: IFormAlertProps) => Promise<any>
        info: (content: string | IBaseAlertProps) => Promise<any>
        success: (content: string | IBaseAlertProps) => Promise<any>
        warning: (content: string | IBaseAlertProps) => Promise<any>
        error: (content: string | IBaseAlertProps) => Promise<any>
    }
        
    
    export interface IBaseAlertProps {
        icon?: IconProp
        title?: string | IAlertContent,
        content: string | IAlertContent,
        showCloseBtn?: boolean,
        autoClose?: boolean,
        closeAfter?: number,
        closeButtonTitle?: string
    }
        
    // types
    export type IAlertContent = () => JSX.Element
        
    
    export interface IConfirmAlertProps {
        icon?: IconProp
        title?: string | IAlertContent,
        content: string | IAlertContent,
        confirmButtonTitle?: string,
        cancelButtonTitle?: string,
        requireVerification?: boolean,
        verificationText?: string,
        verificationTitle?: string,
        verificationPrompt?: string,
        verificationError?: string,
        verificationConfirmButtonTitle?: string,
        caseSensitive?: boolean
    }
        
    // export interface IAlertFormField extends IDynamicFormFieldProps{
    // }
    export interface IFormAlertProps {
        icon?: IconProp
        title: string | IAlertContent,
        content?: string | IAlertContent,
        formStructure: IAlertFormField[],
        submitButtonTitle?: string,
        cancelButtonTitle?: string,
        hideCancelButton?: boolean
    }
        
    
    export type IAlertFormField = DynamicFormFieldProps | FormSectionProps
        
    /**
     * Return type for the useExportData hook
     */
    export type ExportResponse = {
        /** Initiates the data export process */
        exportData: (config: ExportDataConfig) => Promise<void>;
        /** Aborts the ongoing export process */
        abortExport: () => void;
    };
        
    /**
     * Configuration passed to the exportData function
     */
    export interface ExportDataConfig {
        /** Data to export, either as an array or a function to fetch paginated data */
        data: RowData[] | ((page: number, pageSize: number, query?: string, filters?: Filters, sort?: Sort) => Promise<{ items: RowData[] }>);
        /** Total number of items, either as a number or a function to fetch the count */
        total: number | ((query?: string, filters?: Filters) => Promise<number>);
        /** Array of column configurations for the export */
        columns: ExportColumn[];
        /** Number of rows to fetch per page */
        pageSize?: number;
        /** Optional filters to apply to the data */
        filters?: Filters;
        /** Optional sort configuration for the data */
        sort?: Sort;
        /** Optional search query to filter the data */
        query?: string;
        /** Optional callback to receive export progress updates */
        onProgress?: (progress: ExportProgress) => void;
        /** Default file name for the exported CSV */
        fileName?: string;
        /** Whether to show a prompt for the file name */
        showNamePrompt?: boolean;
    }
        
    /**
     * Configuration for a single column in the export
     */
    export interface ExportColumn {
        /** Unique identifier for the column */
        id: string;
        /** Display label for the column in the CSV header */
        label: string;
        /** Optional formatter function for custom value formatting */
        formatter?: ExportColumnFormatter;
    }
        
    /**
     * Progress information for the export process
     */
    export interface ExportProgress {
        /** Indicates if the export is in progress */
        isExporting: boolean;
        /** Export progress percentage (0-100) */
        progress: number;
        /** Current page being processed */
        currentPage: number;
        /** Total number of rows to export */
        totalRows: number;
        /** Number of rows processed so far */
        processedRows: number;
    }
        
    /**
     * @export
     */
    export type FieldsHook = (fields:any) =>[any,{[field:string]:(s:any)=>void},any,(s:any)=>void] ;
        
    /**
     * The react hook for resize effect
     * @export
     */
    export type ResizeEffectHook = (instanceId: string) => boolean
        
    /**
     * @export
     */
    export type IUseUpdateWidgetProps = () => (id: string, props: any) => void
        
    /**
     * @export
     */
    export type IMessageBusHook = (
        context: IContextProvider,
        channel: string,
        callback: (payload: string, channel: string) => void
    ) => void;
        
    /**
     *
     * @export
     */
    export type IUseEffectWithPolling = (
        /**
         * UXP Context. You can get this from props (props.uxContext)
         */
        context: any,
        /**
         * message bus channel name
         */
        channel: string,
        /**
         * time interval in milliseconds
         */
        interval: number,
        /**
         * callback function to call when triggered
         */
        callback: () => Promise<void>,
        /**
         * list of dependencies
         */
        deps: any[]
    ) => void
        
    /**
     * @export
     */
    export interface UseCounterResponse {
        counter: number,
        updateCounter: () => void
    }
        
    /**
     * @export
     */
    export interface UseWidgetCacheReturn {
        allWidgets: IWidget[]
        allUIs: IRenderUIItemProps[]
        allCategories: WidgetCategory[]
        isLoading: boolean
        reload: () => Promise<void>
        invalidateCache: () => void
    }
        
    /**
     * @export
     */
    export interface WidgetCategory {
        id: string
        code: string
        name: string
        icon?: string
        count?: number
        subCategories?: string[]
    }
        
    /**
     * @export
     */
    export interface UseWidgetCacheOptions {
        enableUIs?: boolean  // Default true, can disable UIs in prod
    }
        
    /**
     * @export
     */
    export interface UseWidgetsReturn {
        /**
         * All available widgets
         */
        widgets: IWidget[]
    
        /**
         * All available custom UIs
         */
        uis: IRenderUIItemProps[]
    
        /**
         * Find a widget by ID
         */
        findWidgetById: (id: string) => IWidget | undefined
    
        /**
         * Find a custom UI by ID
         */
        findUIById: (id: string) => IRenderUIItemProps | undefined
    
        /**
         * find widget or ui by id
         */
        findDetailsById: (id: string) => { type: 'widget' | 'ui', details: IWidget | IRenderUIItemProps | undefined }
    
        /**
         * Reload widget and UI data from source
         */
        reload: () => Promise<void>
    
        /**
         * Loading state
         */
        isLoading: boolean
    }
        
    
    export interface ExtendedFormatOptions extends FormatOptions {
        type: 'date' | 'time' | 'datetime';
    }
        
    
    export interface FormatOptions {
        /**
         * date time formats.
         * either iviva date/time formats or date-fns compatible formatting string
         */
        format?: SystemFormats | string;
        /** include seconds in the time  */
        includeSeconds?: boolean;
        /**
         * timezone convertion
         * default will take the user's site timezone and convert date to that timezone,
         */
        timezone?: {
            /** this will ignore the default and use browser timezone */
            useBrowserTime?: boolean;
            /** if provided this will be used  */
            offset?: number;
        };
    }
        
    
    export interface SystemFormats {
        /** iviva date format */
        systemDateFormat?: SystemDateFormat;
        /** iviva time format */
        systemTimeFormat?: SystemTimeFormat;
    }
        
    
    export type SystemDateFormat = keyof typeof DATE_FORMAT_MAP;
        
    
    export type SystemTimeFormat = keyof typeof TIME_FORMAT_MAP;
        
    /**
     * @export
     * Props for PluggableView component
     */
    export interface PluggableViewDeclaration {
        /**
         * Unique identifier for this replaceable view (case-insensitive)
         * Should follow hierarchical pattern: /App/Page/Section
         * @example "/Location/details/info-panel"
         */
        viewId: string;
    
        /**
         * Optional parent view ID for building hierarchy
         * If not specified, this view will be treated as a root-level view
         * @example "/Location/details"
         */
        parentViewId?: string;
    
        /**
         * Default component to render when no override is configured
         * Can be either:
         * - A pageId string: "<moduleid>/widget/<widget id>"
         * - A React component reference: LocationInfoPanelComponent
         */
        defaultPage: string | React.ComponentType;
    
        /**
         * Props to pass to the rendered component
         */
        props?: Record<string, any>;
    }
        
    
    export interface TabInjection {
        /** Fully-qualified id: bundleId/tabId — must be unique */
        id: string;
        /** Target object type (lowercase) */
        objectType: string;
        /** Default tab label */
        name: string;
        /** Default icon class */
        icon?: string;
        /** Ordered list of component IDs to render inside this tab */
        components: TabInjectionComponent[];
        appRoles?: string[];
        userGroups?: string[];
        /** Whether the tab content can be manually refreshed. Defaults to true when not set. */
        refreshable?: boolean;
        /** Event names (from eventDispatcher) that automatically refresh this tab's content. */
        events?: string[];
    }
        
    
    export interface TabInjectionComponent {
        componentId: string;
        priority: number;
    }
        
    /**
     * @export
     */
    export interface UseDrawerItemsReturn {
        // Data
        items: (IWidget | IRenderUIItemProps)[]
    
        // Counts
        totalCount: number
        filteredCount: number
    
        // Loading
        isLoading: boolean
        hasMore: boolean  // For infinite scroll
    
        // Categories (for widgets)
        categories: WidgetCategory[]
    
        // Cache control
        reload: () => Promise<void>
    
        // Counts by filter
        counts: {
            widgets: number
            uis: number
            statuses: {
                all: number
                installed: number
                added: number
                notInstalled: number
            }
        }
    }
        
    /**
     * @export
     */
    export interface UseDrawerItemsOptions {
        // Search
        searchQuery?: string
    
        // Filters
        type?: WidgetDrawerType
        status?: WidgetDrawerStatus
        category?: string
    
        // Pagination (for widgets)
        page?: number
    
        // Context
        existingWidgets?: ComponentInstance[]
    
        // Configuration
        enableUIs?: boolean  // Default true, can disable UIs in prod
    }
        
    /**
     * Hook result interface
     */
    export interface UseDeleteActionResult {
        /**
         * Delete an object with confirmation
         */
        delete: (params: DeleteActionParams) => Promise<void>;
    
        /**
         * Make an object visible (unhide) with optional confirmation
         */
        makeVisible: (params: MakeVisibleActionParams) => Promise<void>;
    
        /**
         * Check if object has dependencies without showing confirmation
         */
        checkDependencies: (model: string, key: string | number) => Promise<AuditDeleteResult>;
    }
        
    /**
     * Parameters for make visible action
     */
    export interface MakeVisibleActionParams {
        /**
         * Model name in format "App.Model" (e.g., "Location.Location")
         */
        model: string;
    
        /**
         * Primary key of the object to make visible
         */
        key: string | number;
    
        /**
         * Show confirmation dialog before making visible
         * Defaults to true
         */
        showConfirmation?: boolean;
    
        /**
         * Custom title for the confirmation dialog
         */
        confirmTitle?: string;
    
        /**
         * Custom confirmation message
         */
        confirmMessage?: string;
    
        /**
         * Custom success message
         */
        successMessage?: string;
    
        /**
         * Custom error title (string or function that receives error object)
         */
        errorTitle?: string | ((error: any) => string);
    
        /**
         * Custom error message (string or function that receives error object)
         */
        errorMessage?: string | ((error: any) => string);
    
        /**
         * Callback on successful make visible
         */
        onSuccess?: () => void;
    
        /**
         * Callback on cancel
         */
        onCancel?: () => void;
    
        /**
         * Callback on error
         */
        onError?: (error: string) => void;
    }
        
    /**
     * Result of AuditDelete action
     */
    export interface AuditDeleteResult {
        HasLinks?: boolean;
        ErrorMessage?: string;
    }
        
    /**
     * @export
     * A component that displays a skeleton loader for placeholder content during loading.
     *
     * @example
     * ```
     * <SkeletonLoader
     *   width="200px"
     *   height="20px"
     * />
     * ```
     *
     * @example
     * ```
     * <SkeletonLoader
     *   width="100%"
     *   height="2rem"
     *   className="custom-skeleton"
     *   additionalStyle={{ borderRadius: '4px' }}
     * />
     * ```
     */
    export const SkeletonLoader: React.FunctionComponent<SkeletonLoaderProps>;
        
    /**
     *
     * @export
     * This is the default pre loader for widgets
     */
    export const DefaultLoader: React.FunctionComponent<IWidgetPreloaderLoaderProps>;
        
    /**
     *
     * @export
     * Bar chart loader
     */
    export const BarChartLoader: React.FunctionComponent<IWidgetPreloaderLoaderProps>;
        
    /**
     *
     * @export
     * Donut chart loader
     */
    export const DonutChartLoader: React.FunctionComponent<IWidgetPreloaderLoaderProps>;
        
    /**
     *
     * @export
     * gauge loader - mimics RadialGauge component
     */
    export const GaugeLoader: React.FunctionComponent<IWidgetPreloaderLoaderProps>;
        
    /**
     *
     * @export
     * heatmap chart loader
     */
    export const HeatmapChartLoader: React.FunctionComponent<IWidgetPreloaderLoaderProps>;
        
    /**
     * @export
     * Map tile loader component using SkeletonLoader
     */
    export const MapTileLoader: React.FunctionComponent<IWidgetPreloaderLoaderProps>;
        
    /**
     * @export
     * TreeView skeleton loader - mimics TreeView structure with skeleton nodes
     */
    export const TreeViewLoader: React.FunctionComponent<ITreeViewLoaderProps>;
        
    /**
     * Show a simple loading animation indicator
     * @export
     */
    export const Loading: React.FunctionComponent<{}>;
        
    /**
     * @export
     *
     * Wrapper for FontAwesomeIcon component.
     * This will show a loading state(skeleton loader) untill the icon is ready/available, then render the actual icon
     *
     * Usage is the same as FontAwesomeIcon, additionally you can donfigure how skeleton loeader will render `skeletonLoader`
     *
     * @example
     *
     * ```
     * <FontAwesomeIconWrapper
     *    icon={['fal', 'bars']}
     * />
     * ```
     *
     * @example
     *
     * ```
     * <FontAwesomeIconWrapper
     *    icon={['fal', 'bars']}
     *    skeletonLoader={{
     *       width: '100%',
     *       height: '100%',
     *       additionalStyle={{
     *          borderRadius: '50%',
     *          aspectRatio: '1'
     *      }}
     *    }}
     * />
     * ```
     */
    export const FontAwesomeIconWrapper: React.FunctionComponent<FontAwesomIconWrapperProps>;
        
    /**
     * Show a simple loading animation indicator
     * @export
     */
    export const LoadingSpinner: React.FunctionComponent<{ message?: string, className?: string, spinnerOnly?: boolean, styles?: CSSProperties }>;
        
    /**
     * @export
     * Flash alert component that displays a loading message with spinner overlay.
     * Automatically shown when context.isLoading is true.
     */
    export const LoadingFlashAlert: React.FunctionComponent<{}>;
        
    /**
     * @export
     * LoadingFeedback - A user-friendly loading overlay component
     * Blocks UI interaction and provides clear visual feedback
     *
     * @example
     * ```tsx
     * <LoadingFeedback
     *   show={isLoading}
     *   message="Processing your request"
     *   submessage="Please wait..."
     *   progress={45}
     * />
     * ```
     */
    export const LoadingFeedback: React.FunctionComponent<LoadingFeedbackProps>;
        
    /**
     *
     * @export
     *
     * Tab layout component
     *
     * @example
     *
     * ```
     * <TabComponent
     *   tabs={[
     *      {id: 'general' , label:'General', content: <div> General Tab </div>},
     *      {id: 'advanced' , label:'Advanced', content: <div> Advanced Tab </div>},
     *   ]}
     *   selected={selectedTab}
     *   onChangeTab={setSelectedTab}
     * />
     * ```
     *
     */
    export const TabComponent: React.FunctionComponent<TabComponentProps>;
        
    /**
     *
     * This is a generic field used to layout forms. Typically used in conjunction with `<Label>` to show a field with a label
     * @export
     * @example
     * ```
     * <FormField inline>
     *       <Label>Button (active)</Label>
     *       <Button
     *           title="Sample Button"
     *           onClick={() => alert("clicked")}
     *           icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
     *           active
     *       />
     *   </FormField>
     * ```
     *
     * @example
     * TODO: More Examples
     */
    export const FormField: React.FunctionComponent<IFormFieldProps>;
        
    /**
     * A simple label. Usually used in conjunction with a FormField
     * @export
     *
     * @example
     * ```
     * <Label>Name</Label>
     * ```
     */
    export const Label: React.FunctionComponent<ILabelProps>;
        
    /**
     * @export
     *
     * Wrapper for Phosphor Icons web components with FontAwesome-compatible API
     * This shows a loading state (skeleton loader) until the icon web component is ready,
     * then renders the actual icon.
     *
     * **Parent app must load Phosphor Icons web components via CDN:**
     * ```html
     * <script type="module" src="https://unpkg.com/@phosphor-icons/webcomponents@2.1"></script>
     * ```
     *
     * @example
     * ```tsx
     * // Simple usage with default regular weight
     * <PHIconWrapper icon="house" />
     * ```
     *
     * @example
     * ```tsx
     * // With weight prefix and FontAwesome-style size
     * <PHIconWrapper icon={['phb', 'house']} size="2x" color="blue" />
     * ```
     *
     * @example
     * ```tsx
     * // With animations
     * <PHIconWrapper icon={['phf', 'heart']} spin color="red" size="lg" />
     * ```
     *
     * @example
     * ```tsx
     * // With flip and rotation
     * <PHIconWrapper icon="arrow-right" flip="horizontal" rotation={90} />
     * ```
     */
    export const PHIconWrapper: React.FunctionComponent<PHIconWrapperProps>;
        
    /**
     * @export
     * Universal Icon component that handles FontAwesome, Phosphor, URLs, and text/emoji icons
     * Supports size and animations for all icon types
     *
     * @example FontAwesome with IconProp
     * ```
     * <Icon icon={['fas', 'save']} size="2x" spin />
     * ```
     *
     * @example FontAwesome with string
     * ```
     * <Icon icon="fas save" />
     * <Icon icon="far trash" color="red" size="2x" spin />
     * ```
     *
     * @example Phosphor with PHIconProp
     * ```
     * <Icon icon={['phb', 'house']} size="lg" />
     * ```
     *
     * @example Phosphor with string
     * ```
     * <Icon icon="phb house" />
     * <Icon icon="phf heart" color="red" size="lg" beat />
     * ```
     *
     * @example Images with size and animations
     * ```
     * <Icon icon="https://example.com/logo.svg" size="2x" spin />
     * <Icon icon="data:image/svg+xml;base64,..." width={50} height={50} />
     * ```
     *
     * @example Text and emoji with size and animations
     * ```
     * <Icon icon="×" fontSize="24px" />
     * <Icon icon="💾" size="2x" bounce />
     * ```
     */
    export const Icon: React.FunctionComponent<IconProps>;
        
    /**
     *
     * @export
     *
     * This component is used to create a react portal.
     *
     *
     * @example
     * ```
     *  <PortalContainer >
     *      {your content}
     *  </PortalContainer>
     * ```
     *
     * @example
     *  <PortalContainer
     *      hasBackdrop
     *      onClickBackdrop={() => {setShow(false)}}
     *      backdropStyles={{backgroundColor: "white"}}
     *  >
     *      {your content}
     *  </PortalContainer>
     */
    export const PortalContainer: React.FunctionComponent<IPortalContainerProps>;
        
    /**
     * @export
     * A component that applies enter/exit transition animations to a single child element.
     *
     * @example
     * ```
     * <Transition in={true} duration={300} className="fade">
     *   <div>Content</div>
     * </Transition>
     * ```
     *
     * @example
     * ```
     * <Transition
     *   in={false}
     *   duration={500}
     *   className="slide"
     *   unmountOnExit={true}
     * >
     *   <div style={{ background: '#f0f0f0', padding: '10px' }}>
     *     Animated Content
     *   </div>
     * </Transition>
     * ```
     */
    export const Transition: React.FunctionComponent<TransitionProps>;
        
    /**
     * @export
     * A component that displays a dropdown menu with customizable positioning and animation.
     *
     * ## USAGE PATTERNS
     *
     * ### 1. LEGACY MODE (Wrapped Trigger) - Backward Compatible
     * The dropdown wraps and manages the trigger element. Use for simple cases and backwards compatibility.
     * The dropdown handles all click logic automatically.
     *
     * ```tsx
     * <Dropdown
     *   trigger={<button>Click me</button>}
     *   content={<div>Dropdown content</div>}
     * />
     * ```
     *
     * **With triggerElementRef for precise click detection:**
     * ```tsx
     * const buttonRef = useRef<HTMLButtonElement>(null);
     *
     * <Dropdown
     *   trigger={
     *     <div>
     *       <button ref={buttonRef}>Toggle</button>
     *       <span>Other content</span>
     *     </div>
     *   }
     *   triggerElementRef={buttonRef}
     *   content={<div>Only button clicks will toggle</div>}
     * />
     * ```
     *
     * ### 2. EXTERNAL TRIGGER MODE (v5 Pattern) - Recommended for Inputs
     * The trigger is a sibling of the dropdown, giving full styling control.
     * Use for input components requiring base class styling.
     * Parent handles trigger clicks, dropdown handles outside clicks automatically.
     *
     * ```tsx
     * const triggerRef = useRef<HTMLDivElement>(null);
     * const [isOpen, setIsOpen] = useState(false);
     *
     * <div className="uxpcore_input uxp-form-select">
     *   <div
     *     ref={triggerRef}
     *     className="uxpcore_input__trigger"
     *     onClick={() => setIsOpen(!isOpen)}
     *     tabIndex={0}
     *   >
     *     Select an option
     *   </div>
     *
     *   <Dropdown
     *     externalTriggerRef={triggerRef}
     *     content={<div>Dropdown options</div>}
     *     isOpen={isOpen}
     *     onToggle={() => setIsOpen(!isOpen)}
     *     matchTriggerWidth={true}
     *   />
     * </div>
     * ```
     *
     * ## CLICK HANDLING BEHAVIOR
     *
     * ### Legacy Mode
     * - Dropdown wraps trigger and handles all clicks
     * - Clicking trigger → Dropdown's internal handler toggles state
     * - Clicking outside (backdrop) → Dropdown closes via backdrop handler
     * - Can be controlled (isOpen + onToggle) or uncontrolled
     *
     * ### External Trigger Mode
     * - Trigger and dropdown are siblings (not parent-child)
     * - Clicking trigger → Parent's onClick handler toggles state
     * - Clicking outside (backdrop) → Dropdown's onToggle callback → Parent closes
     * - MUST be controlled (isOpen + onToggle required)
     * - **Click isolation guaranteed**: Trigger is in normal DOM, backdrop is in Portal
     *
     * ## CLICK ISOLATION TECHNICAL DETAILS
     *
     * No double-firing occurs because:
     * 1. External trigger element is in normal DOM tree (parent component)
     * 2. Dropdown portal renders to document.body (via PortalContainer)
     * 3. Backdrop is rendered inside the portal
     * 4. Clicking trigger CANNOT trigger backdrop onClick (different DOM trees)
     * 5. Clicking backdrop calls onClickBackdrop → closes dropdown
     *
     * @example Full featured legacy mode
     * ```tsx
     * <Dropdown
     *   trigger={<button>Menu</button>}
     *   content={
     *     <div>
     *       <div>Option 1</div>
     *       <div>Option 2</div>
     *     </div>
     *   }
     *   position="top-right"
     *   duration={300}
     *   isOpen={true}
     *   onToggle={() => console.log('Dropdown toggled')}
     *   showAnchor={true}
     *   className="custom-dropdown"
     * />
     * ```
     */
    export const Dropdown: React.ForwardRefExoticComponent<React.RefAttributes<DropdownHandlers> & DropdownProps>;
        
    /**
     * @export
     * A component that renders a chevron icon to indicate dropdown state, rotating when open.
     *
     * @example
     * ```
     * <DropdownIndicator isOpen={false} />
     * ```
     *
     * @example
     * ```
     * <DropdownIndicator
     *   isOpen={true}
     *   className="custom-indicator"
     *   styles={{ fontSize: '12px', color: '#333' }}
     * />
     * ```
     */
    export const DropdownIndicator: React.FunctionComponent<DropdownIndicatorProps>;
        
    /**
     * A searchbox component
     * @export
     */
    export const SearchBox: React.ForwardRefExoticComponent<React.RefAttributes<SearchBoxHandlers> & SearchBoxProps>;
        
    /**
     * A standard text input.
     * @export
     */
    export const Input: React.ForwardRefExoticComponent<React.RefAttributes<InputHandlers> & InputProps>;
        
    /**
     * A password input with a show/hide toggle button.
     * This is a wrapper around Input component with type="password".
     *
     * @export
     * @example
     * ```tsx
     * <PasswordInput
     *   value={password}
     *   onChange={setPassword}
     *   placeholder="Enter password"
     * />
     * ```
     *
     * @example
     * ```tsx
     * // Recommended: Use Input directly
     * <Input
     *   type="password"
     *   value={password}
     *   onChange={setPassword}
     *   placeholder="Enter password"
     * />
     * ```
     */
    export const PasswordInput: React.FunctionComponent<PasswordInputProps>;
        
    /**
     * @export
     * A checkbox component that can render boolean and intermediate states in multiple visual styles.
     *
     * @example
     * ```
     * <Checkbox
     *     checked={checked}
     *     onChange={(isChecked) => setChecked(isChecked)}
     *     label='Are you sure'
     * />
     * ```
     *
     * @example
     * ```
     * <Checkbox
     *     checked='intermediate'
     *     onChange={(isChecked) => setChecked(isChecked)}
     *     label='Partial selection'
     *     type="switch-box"
     * />
     * ```
     */
    export const Checkbox: React.ForwardRefExoticComponent<React.RefAttributes<ICheckboxInstanceProps> & ICheckboxProps>;
        
    /**
     * @example
     * ```
     *  <NotificationBlock message="-- End Of Content --" class="uxpcore_notification--end-of-content" />
     *  <NotificationBlock message="Something went wrong" variant="danger" />
     *  <NotificationBlock message="Saved successfully" variant="success" />
     * ```
     * @export
     */
    export const NotificationBlock: React.FunctionComponent<INotificationProps>;
        
    /**
     * @export
     * Enhanced Button component with multiple variants and icon support
     *
     * @example Basic button
     * ```
     * <ButtonComponent title="Click me" onClick={() => console.log('clicked')} />
     * ```
     *
     * @example Button with icons
     * ```
     * <ButtonComponent
     *   title="Save"
     *   leftIcon="💾"
     *   rightIcon="→"
     *   onClick={handleSave}
     * />
     * ```
     *
     * @example Icon only button
     * ```
     * <ButtonComponent
     *   leftIcon="×"
     *   iconOnly
     *   variant="danger"
     *   onClick={handleDelete}
     * />
     * ```
     *
     * @example Async button with loading
     * ```
     * <ButtonComponent
     *   title="Submit"
     *   loadingTitle="Submitting..."
     *   onClick={async () => await submitForm()}
     * />
     * ```
     */
    export const ButtonComponent: React.FunctionComponent<ButtonComponentProps>;
        
    /**
     *
     * A infinite-scrollable list that supports paging in of items
     * @export
     *
     *
     *
     *
     * @example
     * ```
     *  Using array
     *
     *  let data:any[] = [
     *      {
     *          "id": 1,
     *          "name": "Name 01"
     *      },
     *      {
     *          "id": 2,
     *          "name": "Name 01"
     *      },
     *      {
     *          "id": 3,
     *          "name": "Name 01"
     *      }
     *  ]
     *
     *  function renderItem(item:any, key:number) {
     *      return <div>
     *          <div>{item.name} </div>
     *      </div>
     *  }
     *
     *  <DataList
     *      data={data}
     *      renderItem={(item, key) => renderItem(item, key)}
     *      pageSize={10}
     *  />
     * ```
     *
     * @example
     * ```
     *  Using IDataFunction
     *  async function getData(max:number, last: string, args: any) {
     *      if(!last) last = "0";
     *
     *      return new Promise<{items:any[], pageToken: string}>((done, nope) =>{
     *          executeAction("model", "action", {max: max, last: last, args: args})
     *          .then(res => {
     *              done({items: res.data, pageToken: res.lastPageToken })
     *          })
     *          .catch(e => {
     *              done({items: [], pageToken: last})
     *          })
     *      })
     *  }
     *
     *  function renderItem(item:any, key:number) {
     *      return <div>
     *          <div>{item.name} </div>
     *      </div>
     *  }
     *
     *  <DataList
     *      data={(max, last, args) => getData(max, last, args)}
     *      renderItem={(item, key) => renderItem(item, key)}
     *      pageSize={10}
     *  />
     *
     * ```
     *
     * @example
     * ```
     *  Using other props
     *
     *  <DataList
     *      data={data}
     *      renderItem={(item, key) => renderItem(item, key)}
     *      pageSize={10}
     *      className="custom-css-class"
     *      showFooter={false}
     *      showEndOfContent={false}
     *  />
     *
     * ```
     */
    export const DataList: React.MemoExoticComponent<React.ForwardRefExoticComponent<React.RefAttributes<IDataListInstanceProps> & IDataListProps>>;
        
    /**
     *
     * A select control to select one item from a list of multiple items
     * @export
     *
     *  @example
     * ```
     *  // options
     *  let [selectedOption, setSelectedOption] = React.useState<string>(null)
     *  let options = [
     *      {label: "Sri Lanka", value: "SL"},
     *      {label: "India", value: "IN"},
     *      {label: "United State", value: "US"},
     *  ]
     *
     *  <Select
     *      options={options}
     *      selected={selectedOption}
     *      onChange={(newValue, option) => {
     *          setSelectedOption(value)
     *      }}
     *  />
     * ```
     *
     * @example
     * ```
     *  // options
     *  let [selectedOption, setSelectedOption] = React.useState<string>(null)
     *  let options = [
     *      {name: "Sri Lanka", code: "SL"},
     *      {name: "India", code: "IN"},
     *      {name: "United State", code: "US"},
     *  ]
     *
     *  <Select
     *      options={options}
     *      labelField="name"
     *      valueField="code"
     *      selected={selectedOption}
     *      onChange={(newValue, option) => {
     *          setSelectedOption(value)
     *      }}
     *  />
     * ```
     *
     */
    export const Select: React.MemoExoticComponent<React.FunctionComponent<ISelectProps>>;
        
    /**
     *
     * A standard textarea (multi line text box)
     * @export
     */
    export const TextArea: React.ForwardRefExoticComponent<React.RefAttributes<ITextAreaInstanceProps> & ITextAreaProps>;
        
    /**
     * @export
     * A component that displays a tooltip when hovering over its child element.
     * Uses v5 styling patterns and positioning logic.
     *
     * @example Basic tooltip
     * ```tsx
     * <Tooltip content="Helpful hint">
     *   <button>Hover me</button>
     * </Tooltip>
     * ```
     *
     * @example Custom position
     * ```tsx
     * <Tooltip content="I appear on the right" position="right">
     *   <span>Hover here</span>
     * </Tooltip>
     * ```
     *
     * @example JSX content
     * ```tsx
     * <Tooltip content={() => <strong>Bold tooltip</strong>}>
     *   <button>Fancy tooltip</button>
     * </Tooltip>
     * ```
     */
    export const Tooltip: React.FunctionComponent<TooltipProps>;
        
    /**
     *
     * @export
     *
     * This component is used to select a date.
     *
     * @example
     * ```
     *  <DatePicker
     *    title="Date"
     *    date={date}
     *    onChange={(date) => setDate(date)}
     * />
     * ```
     *
     * @example
     * <DatePicker
     *     title="Date"
     *     date={date}
     *     onChange={(date) => setDate(date)}
     *     options={{
     *         disableWeekEnds: true
     *     }}
     * />
     */
    export const DatePicker: React.FunctionComponent<IDatePickerProps>;
        
    /**
     *
     * @export
     *
     * This component is used to select a datetime.
     *
     * @example
     * ```
     *  <DateTimePicker
     *      title="Select Date & Time"
     *      datetime={date}
     *      onChange={(date) => { setDate(date); }}
     *  />
     * ```
     */
    export const DateTimePicker: React.FunctionComponent<IDateTimePickerProps>;
        
    /**
     *
     * @export
     *
     * This component is used to select a time.
     *
     * @example
     * ```
     *  <TimePicker
     *      title="Time"
     *      time={date}
     *      onChange={(date) => setDate(date)}
     *  />
     * ```
     */
    export const TimePicker: React.FunctionComponent<ITimePickerProps>;
        
    /**
     *
     * This is a basic button component.
     * @export
     *
     * @example
     * ```
     *  <Button
     *      title="Click"
     *      onClick={() => {alert("Clicked")}}
     *  />
     * ```
     *
     * @example
     * ```
     *  <Button
     *      title="Click"
     *      onClick={() => {alert("Clicked")}}
     *      leftIcon="https://static.iviva.com/images/lucy-logo.svg"
     *      loading={isLoading}
     *      loadingTitle="Loading..."
     *      className="custom-css-class"
     * />
     * ```
     *
     */
    export const Button: React.FunctionComponent<ButtonProps>;
        
    /**
     *
     * @export
     *
     * This component is used to select a date range.
     *
     * @example
     * ```
     *  <DateRangePicker
     *      startDate={startDate}
     *      endDate={endDate}
     *      closeOnSelect
     *      onChange={(newStart, newEnd) => { setStartDate(newStart); setEndDate(newEnd) }}
     *  />
     * ```
     *
     */
    export const DateRangePicker: React.FunctionComponent<IDateRangePickerProps>;
        
    /**
     *
     * @export
     *
     * This component is used to select a time range.
     *
     * @example
     * ```
     *  <TimeRangePicker
     *      startTime={startDate}
     *      endTime={endDate}
     *      onChange={(s, e) => { setStartDate(s); setEndDate(e) }}
     *  />
     * ```
     */
    export const TimeRangePicker: React.FunctionComponent<ITimeRangePickerProps>;
        
    /**
     * @export
     * TimeRangeSliderPicker - A dual-handle slider for selecting time ranges
     *
     * @example
     * ```tsx
     * <TimeRangeSliderPicker
     *     title="Working Hours"
     *     startTime="09:00"
     *     endTime="17:00"
     *     onChange={(start, end) => {
     *         console.log('Start:', start, 'End:', end);
     *     }}
     *     step={15}
     * />
     * ```
     */
    export const TimeRangeSliderPicker: React.FunctionComponent<TimeRangeSliderPickerProps>;
        
    /**
     * @export
     * WizardStepIndicator - A horizontal step indicator for multi-step wizards
     *
     * Displays numbered steps in a horizontal scrollable container with:
     * - Numbered circles for each step
     * - Connector lines between steps
     * - Visual states: active, completed, error, pending
     * - Smooth auto-scroll to keep active step centered
     * - Theme-aware styling
     *
     * @example
     * ```tsx
     * <WizardStepIndicator
     *   steps={[
     *     { id: 'step1', label: 'Upload File', hasError: false },
     *     { id: 'step2', label: 'Map Fields', hasError: false },
     *     { id: 'step3', label: 'Review', hasError: false }
     *   ]}
     *   currentStepId="step2"
     *   completedSteps={['step1']}
     *   onStepClick={(stepId) => navigateToStep(stepId)}
     * />
     * ```
     */
    export const WizardStepIndicator: React.FunctionComponent<WizardStepIndicatorProps>;
        
    /**
     * @export
     * Displays a small circular info icon (ⓘ) that opens a popup on click.
     * Supports plain text, a list of strings, or any ReactNode as content.
     * Popup content is constrained to a max width of 25rem and max height of 10rem with scroll.
     *
     * @example
     * ```tsx
     * // Plain text
     * <InfoButton content="This field is required." />
     * ```
     *
     * @example
     * ```tsx
     * // List of strings
     * <InfoButton content={["Must be at least 8 characters", "No spaces allowed"]} position="bottom-left" />
     * ```
     *
     * @example
     * ```tsx
     * // ReactNode
     * <InfoButton content={<span>See <a href="#">docs</a> for details</span>} />
     * ```
     */
    export const InfoButton: React.FunctionComponent<InfoButtonProps>;
        
    /**
     * @export
     * A component that displays a collapsible panel with a title and optional content.
     *
     * @example
     * ```
     * <Collapse
     *   title="Details"
     *   children={<p>This is the collapsible content.</p>}
     * />
     * ```
     *
     * @example
     * ```
     * <Collapse
     *   title={<h3>Custom Title</h3>}
     *   rightContent={<button>Edit</button>}
     *   children={<div>Custom content here</div>}
     *   defaultExpanded={false}
     *   className="custom-collapse"
     * />
     * ```
     */
    export const Collapse: React.MemoExoticComponent<React.FunctionComponent<CollapseProps>>;
        
    /**
     * @export
     * This component provides a dynamic form component
     * Developer can pass a json structure and it will create a form component
     */
    export const DynamicForm: React.ForwardRefExoticComponent<React.RefAttributes<DynamicFormHandlers> & DynamicFormProps>;
        
    /**
     * This component wraps another component and shows a tooltip for the component it is wrapping, whenever the user moves the mouse over it.
     * @export
     *
     *
     * @example
     * ```
     *  Dropdown button basic example
     *
     *  <DropDownButton
     *      content={() => <div>This is dropdown content</div>}
     *  >
     *      <button className="btn showcase" >Click to Show the dropdown</button>
     *  </DropDownButton>
     * ```
     *
     *
     * @example
     * ```
     *  Dropdown button example with options
     *
     *  <DropDownButton
     *      content={() => <div>This is dropdown content</div>}
     *      position="left"
     *      showOnHover
     *  >
     *      <button className="btn showcase" >Click to Show the dropdown</button>
     *  </DropDownButton>
     * ```
     *
     *
     * @example
     * ```
     *  Dropdown button example with forceClose
     *
     *  // Be carefull when handeling the state. `closePopup` state must reset to default (false) when the popup closes
     *  //state
     *  let [closePopup, setClosePopup] = React.useState(false)
     *
     *  <DropDownButton
     *      content={() => <>
     *                  <h1>Click to close</h1>
     *                  <Button title="Click" onClick={() => { setClosePopup(true) }} />
     *              </>}
     *      onOpen={() => { }}
     *      onClose={() => { setClosePopup(false) }}
     *      forceClose={closePopup}
     *  >
     *      <button className="btn showcase" >Click to Show the dropdown</button>
     *  </DropDownButton>
     *
     * ```
     *
     */
    export const DropDownButton: React.FunctionComponent<IDropDownButtonProps>;
        
    /**
     * @export
     * A component that displays a popover with a title and content when clicking on its child element.
     * Uses the Dropdown component internally for positioning and click handling.
     *
     * @example Basic popover
     * ```tsx
     * <Popover
     *   title="User Info"
     *   content="John Doe - Software Engineer"
     * >
     *   <button>View Details</button>
     * </Popover>
     * ```
     *
     * @example Custom position
     * ```tsx
     * <Popover
     *   title="Help"
     *   content="This is helpful information"
     *   position="right"
     * >
     *   <span>?</span>
     * </Popover>
     * ```
     *
     * @example JSX content
     * ```tsx
     * <Popover
     *   title={() => <strong>Important</strong>}
     *   content={() => (
     *     <div>
     *       <p>Line 1</p>
     *       <p>Line 2</p>
     *     </div>
     *   )}
     * >
     *   <button>Show Info</button>
     * </Popover>
     * ```
     */
    export const Popover: React.FunctionComponent<PopoverProps>;
        
    /**
     * Icon button component with set of default icons and options to render any icon
     * @export
     *
     *
     * @example
     * ```
     *  <IconButton
     *      type="search"
     *      onClick={()=> {alert("Clicked")}}
     *      className="custom-css-class"
     *  />
     * ```
     *
     *
     * @example
     * ```
     *  <IconButton
     *      icon="fas search"
     *      ...
     *  />
     * ```
     *
     *
     */
    export const IconButton: React.FunctionComponent<IIconButtonProps>;
        
    /**
     * @export
     * Display a modal dialog. The dialog will be placed in front of a invisible sheet above the main UI.
     *
     * @example
     * ```
     *  <button
     *      className="btn showcase"
     *      onClick={() => setShowModal(true)}
     *  >
     *      Click to Show Modal
     *  </button>
     *
     *  <Modal
     *      show={showModal}
     *      onOpen={() => { }}
     *      onClose={() => setShowModal(false)}
     *  >
     *      This is a sample modal
     *  </Modal>
     * ```
     *
     */
    export const Modal: React.FunctionComponent<IModalProps>;
        
    /**
     * A wizard-style interface to guide users through a journey.
     * You can conditionally skip steps and validate steps before proceeding.
     *
     * @example
     * ```tsx
     * <Wizard
     *   steps={[
     *     {
     *       id: "step1",
     *       title: "Personal Info",
     *       render: ({ next, prev }) => (
     *         <div>
     *           <h3>Enter your details</h3>
     *           <button onClick={() => next()}>Next</button>
     *         </div>
     *       ),
     *       onNext: () => "step2" // Optional: control navigation
     *     },
     *     {
     *       id: "step2",
     *       title: "Review",
     *       render: ({ next, prev }) => (
     *         <div>
     *           <h3>Review your information</h3>
     *           <button onClick={() => prev()}>Back</button>
     *           <button onClick={() => next()}>Complete</button>
     *         </div>
     *       )
     *     }
     *   ]}
     *   onComplete={async () => {
     *     await saveData();
     *   }}
     *   completionTitle="Finish"
     * />
     * ```
     *
     * @export
     */
    export const Wizard: React.FunctionComponent<IWizardProps>;
        
    /**
     * This component is used to show a modal dialog that takes the user through a sequence of steps.
     * You define how each step should render.
     *
     * **V5 Implementation**: ModalWizard is now a thin wrapper around Modal + Wizard components.
     * It provides backward compatibility while leveraging the v5 architecture.
     *
     * @export
     *
     * @example
     * ```
     *  <ModalWizard
     *      show={show}
     *      title="Sample modal wizard"
     *      steps={[
     *      {
     *          id: "step-1",
     *          title: "Personal Details",
     *          render: (props) => <div>
     *              <FormField>
     *                  <Label>Name</Label>
     *                  <Input value={name} onChange={setName} />
     *              </FormField>
     *              <FormField>
     *                  <Label>Email</Label>
     *                  <Input value={email} onChange={setEmail} />
     *              </FormField>
     *          </div>,
     *          renderStatus: () => null, // Ignored in v5
     *          onValidateStep: () => "step-2"
     *      },
     *      {
     *          id: "step-2",
     *          title: "Educational Details",
     *          render: (props) => <div>
     *              <FormField>
     *                  <Label>University</Label>
     *                  <Input value={school} onChange={setSchool} />
     *              </FormField>
     *          </div>,
     *          renderStatus: () => null // Ignored in v5
     *      }
     *  ]}
     *  onClose={() => { setShow(false) }}
     *  onComplete={async () => { return executeAction("model", "action", {data: data}) }}
     * />
     * ```
     *
     */
    export const ModalWizard: React.FunctionComponent<IModalWizardProps>;
        
    /**
     * @export
     * Displays a filter button which, when clicked, opens a popup panel.
     * Suitable for hiding filters for widgets or searches.
     * Uses Dropdown component for positioning with v5 styling patterns.
     *
     * @example Basic filter panel
     * ```tsx
     * <FilterPanel>
     *   <FormField>
     *     <Label>Category</Label>
     *     <Select options={categories} selected={category} onChange={setCategory} />
     *   </FormField>
     * </FilterPanel>
     * ```
     *
     * @example With clear functionality
     * ```tsx
     * <FilterPanel
     *   enableClear={hasFilters}
     *   onClear={() => {
     *     setCategory(null);
     *     setDateRange(null);
     *   }}
     * >
     *   <FormField>
     *     <Label>Sort By</Label>
     *     <Select options={sortOptions} selected={sortBy} onChange={setSortBy} />
     *   </FormField>
     *   <FormField>
     *     <Label>Date Range</Label>
     *     <DateRangePicker value={dateRange} onChange={setDateRange} />
     *   </FormField>
     * </FilterPanel>
     * ```
     *
     * @example Custom position and icon
     * ```tsx
     * <FilterPanel
     *   position="bottom-left"
     *   icon="sort"
     *   enableClear={true}
     *   onClear={handleClear}
     * >
     *   <FormField>
     *     <Label>Status</Label>
     *     <Select options={statusOptions} selected={status} onChange={setStatus} />
     *   </FormField>
     * </FilterPanel>
     * ```
     */
    export const FilterPanel: React.FunctionComponent<FilterPanelProps>;
        
    /**
     * This is used to provide a success or error summary message for forms
     * @export
     * @example
     * ```
     * FormFeedback validInput>Form feedback ( valid )</FormFeedback>
     * ```
     *
     * @example
     * ```
     * <FormFeedback validInput={false}>Form feedback ( invalid )</FormFeedback>
     * ```
     *
     */
    export const FormFeedback: React.FunctionComponent<IFormFeedbackProps>;
        
    /**
     *
     * A select control to select multiple items from a list of items
     * @export
     *
     *  @example
     * ```
     *  // options
     *  let [selectedOptions, setSelectedOptions] = React.useState<string[]>([])
     *  let options = [
     *      {label: "Sri Lanka", value: "SL"},
     *      {label: "India", value: "IN"},
     *      {label: "United State", value: "US"},
     *  ]
     *
     *  <MultiSelect
     *      options={options}
     *      selected={selectedOptions}
     *      onChange={(newValues, options) => {
     *          setSelectedOptions(values)
     *      }}
     *  />
     * ```
     *
     * @example
     * ```
     *  // options
     *  let [selectedOptions, setSelectedOptions] = React.useState<string[]>([])
     *  let options = [
     *      {name: "Sri Lanka", code: "SL"},
     *      {name: "India", code: "IN"},
     *      {name: "United State", code: "US"},
     *  ]
     *
     *  <MultiSelect
     *      options={options}
     *      labelField="name"
     *      valueField="code"
     *      selected={selectedOptions}
     *      onChange={(newValues, options) => {
     *          setSelectedOptions(values)
     *      }}
     *  />
     * ```
     *
     */
    export const MultiSelect: React.MemoExoticComponent<React.FunctionComponent<IMultiSelectProps>>;
        
    /**
     *
     * @export
     *
     * This component is used to create a select box with pagination (infinite scrolling) & search/filter options.
     * Support keyboard interactions
     *  - Arrow Keys (up & down) - navigate through options list
     *  - Enter Key - Select current highlighted option
     *  - Escape Key - Exit select mode & discard changes
     * @example
     * ```
     *  <DynamicSelect
     *      selected={selected}
     *      options={(max: number, pageToken: string, args?: any) => getOptions(max, pageToken, args)}
     *      onChange={(value) => { setSelected(value)}}
     *      placeholder=" -- select --"
     *      labelField="label"
     *      timeout={500}
     *  />
     * ```
     *
     */
    export const DynamicSelect: React.FunctionComponent<IDynamicSelectProps>;
        
    /**
     * A two-level cascading select.
     * Selecting a value in the primary dropdown loads options for the secondary dropdown.
     * The final value is a combination of both selections joined by `separator` (default `:`)
     * e.g. primary = "System", secondary = "Admin"  →  value = "System:Admin"
     * @export
     */
    export const CascadingSelect: React.FunctionComponent<CascadingSelectProps>;
        
    /**
     * @export
     * A multi-select input for selecting App:Role pairs.
     * Options are loaded on demand (10 per page) and cached per session.
     * Supports search filtering by typing in the dropdown.
     *
     * @example
     * ```
     * <AppRoleInput
     *   value={appRoles}
     *   onChange={setAppRoles}
     * />
     * ```
     */
    export const AppRoleInput: React.FunctionComponent<AppRoleInputProps>;
        
    /**
     * @export
     * Calendar component so display range of dates
     */
    export const CalendarComponent: React.FunctionComponent<ICalendarComponentProps>;
        
    /**
     *
     * @export
     * Color pallet - wrapper for @uiw/react-color-sketch
     */
    export const ColorPallet: React.FunctionComponent<IColorPalletProps>;
        
    /**
     *
     * @export
     * Color picker input field
     */
    export const ColorPicker: React.FunctionComponent<IColorPickerProps>;
        
    /**
     * A free-text input that shows a suggestion dropdown as the user types.
     * Unlike `Select`, the user can type any value — suggestions are optional helpers.
     *
     * @example
     * ```tsx
     * // Static options — component filters automatically
     * <AutoCompleteInput
     *   value={val}
     *   onChange={setVal}
     *   options={['India', 'Japan', 'China', 'Singapore']}
     * />
     * ```
     *
     * @example
     * ```tsx
     * // Custom dropdown content
     * const inputRef = React.useRef(null)
     *
     * function renderAutoFill() {
     *   return (
     *     <div>
     *       {results.map((r, i) => (
     *         <div key={i} onClick={() => { onChange(r.name); inputRef.current?.close(); }}>
     *           {r.name}
     *         </div>
     *       ))}
     *     </div>
     *   )
     * }
     *
     * <AutoCompleteInput value={val} onChange={setVal} autoFill={renderAutoFill} ref={inputRef} />
     * ```
     *
     * @export
     */
    export const AutoCompleteInput: React.ForwardRefExoticComponent<React.RefAttributes<any> & any>;
        
    /**
     * @export
     * FileInput component - Drag and drop file upload with preview
     * Follows v5 input pattern with theme support and accessibility
     */
    export const FileInput: React.ForwardRefExoticComponent<React.RefAttributes<IFileInputInstanceProps> & IFileInputProps>;
        
    /**
     * This component presents a group of options from which one can be selected.
     * Suitable to select a single item from a list where the list is very small. Most often used for filters.
     * Follows v5 input pattern with theme support and keyboard navigation
     * @export
     */
    export const ToggleFilter: React.FunctionComponent<IToggleFilterProps>;
        
    /**
     * @export
     *
     * Pagination controls — compact prev/next with a page-size dropdown.
     * Renders as a flat set of controls; layout (left/right slots) is handled by the parent.
     *
     * @example
     * ```
     * <PaginationComponent
     *   total={total}
     *   pageSize={pageSize}
     *   page={page}
     *   onPageChange={setPage}
     *   onPageSizeChange={ps => { setPageSize(ps); setPage(1); }}
     * />
     * ```
     */
    export const PaginationComponent: React.FunctionComponent<PaginationProps>;
        
    /**
     * @export
     * IconPicker component - A form input for selecting FontAwesome and Phosphor icons
     *
     * @example
     * ```tsx
     * <IconPicker
     *   value="fas:bell"
     *   onChange={(iconStr) => setIcon(iconStr)}
     *   placeholder="Select an icon"
     * />
     * ```
     */
    export const IconPicker: React.FunctionComponent<IconPickerProps>;
        
    /**
     * @export
     * Individual Pill component that renders a formatted value with icon and styling
     */
    export const Pill: React.FunctionComponent<PillComponentProps>;
        
    /**
     * @export
     * PillInput component - a CodeMirror-based input that converts expressions to visual pills.
     * Supports drag/drop, formatting, and contextual value selection.
     * Uses CodeMirror 6 with React 18 compatibility.
     *
     * @example
     * Basic usage with field options
     * ```tsx
     * <PillInput
     *   value="Hello {user.name}!"
     *   onChange={setValue}
     *   contextDataSections={[
     *     { label: "User", fields: [{ label: "Name", value: "user.name" }] }
     *   ]}
     * />
     * ```
     */
    export const PillInput: React.ForwardRefExoticComponent<React.RefAttributes<PillInputHandlers> & PillInputProps>;
        
    /**
     * @export
     * A component that renders a list of actions with support for nested dropdowns and selected state.
     *
     * @example
     * ```
     * // Basic usage
     * <ActionsListComponent
     *   actions={[
     *     { label: 'Edit', icon: 'edit', onClick: async (item) => console.log('Edit', item) },
     *     { label: 'Delete', icon: 'trash', onClick: async (item) => console.log('Delete', item) }
     *   ]}
     *   item={{ id: '1', name: 'Item' }}
     * />
     * ```
     *
     * @example
     * ```
     * // With selected state (e.g., theme selector)
     * <ActionsListComponent
     *   actions={[
     *     { label: 'Light', value: 'light', onClick: () => setTheme('light') },
     *     { label: 'Dark', value: 'dark', onClick: () => setTheme('dark') }
     *   ]}
     *   selectedValue="light"
     * />
     * ```
     *
     * @example
     * ```
     * // With nested dropdowns
     * <ActionsListComponent
     *   actions={[
     *     { label: 'Edit', icon: 'edit', onClick: async (item) => console.log('Edit', item) },
     *     {
     *       label: 'More', icon: 'ellipsis-h',
     *       children: [
     *         { label: 'Share', icon: 'share', onClick: async (item) => console.log('Share', item) },
     *         { label: 'Archive', icon: 'archive', onClick: async (item) => console.log('Archive', item) }
     *       ]
     *     }
     *   ]}
     *   item={{ id: '1', name: 'Item' }}
     *   className="custom-actions-list"
     * />
     * ```
     */
    export const ActionsListComponent: React.FunctionComponent<ActionsListProps>;
        
    /**
     * @export
     * A component that renders a group of buttons with optional dropdown support.
     *
     * @example
     * ```
     * <ButtonGroup
     *   buttons={[
     *     { id: 'add', title: 'Add', leftIcon: 'fas fa-plus' },
     *     { id: 'edit', title: 'Edit', leftIcon: 'fas fa-edit' }
     *   ]}
     *   activeId="add"
     *   onButtonClick={(id) => console.log('Clicked:', id)}
     * />
     * ```
     *
     * @example
     * ```
     * <ButtonGroup
     *   buttons=[
     *     { id: 'add', title: 'Add', leftIcon: 'fas fa-plus', onClick: () => console.log('Add clicked') },
     *     {
     *       id: 'more',
     *       title: 'More',
     *       leftIcon: 'fas fa-ellipsis-h',
     *       dropdownContent: (
     *         <div>
     *           <div>Option 1</div>
     *           <div>Option 2</div>
     *         </div>
     *       ),
     *       dropdownPosition: 'bottom-right',
     *       showAnchor: true
     *     }
     *   ]
     *   variant="primary"
     *   activeId="add"
     *   className="custom-button-group"
     *   styles={{ margin: '10px' }}
     *   onButtonClick={(id) => console.log('Button clicked:', id)}
     * />
     * ```
     */
    export const ButtonGroup: React.FunctionComponent<ButtonGroupProps>;
        
    /**
     * @export
     * Monaco-backed code editor with syntax highlighting, a toolbar (Format,
     * tab-size cycle, line numbers, fullscreen), and optional auto-grow.
     *
     * Supports JS/TS extra libs for inline IntelliSense (pass type declaration
     * strings via `extraLibs`). Exposes a ref handle ({@link CodeEditorHandlers})
     * for programmatic focus and validation.
     *
     * @example
     * ```tsx
     * <CodeEditor value={code} onChange={setCode} language="javascript" height="300px" />
     * ```
     *
     * @example
     * ```tsx
     * // With ref handle for validation
     * const ref = useRef<CodeEditorHandlers>(null);
     * <CodeEditor ref={ref} value={code} onChange={setCode} language="json" />
     * const { valid, error } = ref.current?.validate() ?? { valid: true, error: '' };
     * ```
     */
    export const CodeEditor: React.ForwardRefExoticComponent<React.RefAttributes<CodeEditorHandlers> & CodeEditorProps>;
        
    /**
     * @export
     * Renders markdown as styled HTML using UXP typography styles.
     * Supports headings, paragraphs, lists, code blocks, blockquotes, links, and horizontal rules.
     *
     * @example
     * ```tsx
     * <MarkdownPreview value={markdownString} />
     * ```
     */
    export const MarkdownPreview: React.FunctionComponent<MarkdownPreviewProps>;
        
    /**
     * @export
     * A markdown editor with a Write / Preview tab switcher.
     * Write tab uses CodeEditor with markdown syntax highlighting.
     * Preview tab renders the markdown using MarkdownPreview with UXP prose styles.
     *
     * Both panes stay mounted so the editor preserves scroll position on tab switch.
     *
     * @example
     * ```tsx
     * <MarkdownEditor value={md} onChange={setMd} fullWidth height="400px" />
     * ```
     */
    export const MarkdownEditor: React.ForwardRefExoticComponent<React.RefAttributes<MarkdownEditorHandlers> & MarkdownEditorProps>;
        
    /**
     * @export
     * A component that displays a chip with a label and optional icon, used for tags or filters.
     *
     * @example
     * ```
     * <Chip
     *   label="Filter"
     *   icon="filter"
     * />
     * ```
     *
     * @example
     * ```
     * <Chip
     *   label="Clickable Chip"
     *   icon="star"
     *   iconPosition="right"
     *   backgroundColor="#f0f0f0"
     *   textColor="#333"
     *   onClick={(e) => console.log('Chip clicked')}
     *   additionalStyles={{ borderRadius: '8px' }}
     * />
     * ```
     */
    export const Chip: React.FunctionComponent<ChipProps>;
        
    /**
     * @export
     * A tag input that stores values as a list of string chips.
     *
     * Users type into an inline text field and press Enter or comma (`,`) to add a tag.
     * Existing tags are displayed as removable `Chip` components. Pressing Backspace
     * on an empty field removes the last tag.
     *
     * An optional `options` prop enables a suggestion dropdown. It accepts either a
     * static `string[]` (filtered client-side) or an async function that resolves to
     * `string[]` (called with a 300ms debounce). Already-added tags are excluded from
     * suggestions. Arrow keys navigate the dropdown; Enter selects the highlighted item.
     *
     * @example
     * ```tsx
     * // Basic — free-form tags only
     * <TagInput
     *   value={tags}
     *   onChange={setTags}
     *   placeholder="Add tags..."
     * />
     *
     * // With async suggestions
     * <TagInput
     *   value={tags}
     *   onChange={setTags}
     *   options={async (text) => {
     *     const res = await fetchTags(text);
     *     return res.map(t => t.name);
     *   }}
     * />
     * ```
     */
    export const TagInput: React.FunctionComponent<TagInputProps>;
        
    /**
     * Display a profile picture. Supports images (URLs), icons (FontAwesome, Phosphor patterns), and initials.
     *
     * @export
     */
    export const ProfileImage: React.FunctionComponent<IProfileImageProps>;
        
    /**
     * This component is used to render some item in a standard card form.
     * This includes a profile pic, a title, a subtitle and a list of fields and values.
     * @export
     *
     * @example
     * ```
     *  <ItemCard
     *      item={{
     *          request: "AC Extension request #36",
     *          user: "Johnson & Johnson",
     *          section: "Parking 1",
     *          status: "approved",
     *          date: "23/0702020"
     *      }}
     *      titleField="request"
     *      subTitleField="date"
     *      className="data-table-item"
     *  />
     * ```
     *
     * @example
     * ```
     *  <ItemCard
     *      item={{
     *          id: "1",
     *          image: "https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
     *          name: "John Doe",
     *      }}
     *      imageField="image"
     *      titleField="name"
     *      className="data-table-item"
     *  />
     * ```
     *
     * * @example
     * ```
     *  <ItemCard
     *      image="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
     *      title="John Doe"
     *      className="data-table-item"
     *  />
     * ```
     *
     */
    export const ItemCard: React.FunctionComponent<IItemCardProps>;
        
    /**
     * @export
     * A component that displays a grid of labeled fields with optional icons and custom value rendering.
     *
     * @example
     * ```
     * <ObjectInfoCard
     *   fields={[
     *     { label: 'Name', value: 'John Doe' },
     *     { label: 'Email', value: 'john@example.com' }
     *   ]}
     * />
     * ```
     *
     * @example
     * ```
     * <ObjectInfoCard
     *   fields={[
     *     { label: 'Name', value: 'John Doe', icon: 'user' },
     *     { label: 'Email', value: 'john@example.com', icon: 'envelope', renderValue: (value) => <a href={`mailto:${value}`}>{value}</a> },
     *     { label: 'Status', value: 'Active' }
     *   ]}
     *   columns={3}
     *   className="custom-info-card"
     * />
     * ```
     */
    export const ObjectInfoCard: React.MemoExoticComponent<React.FunctionComponent<ObjectInfoCardProps>>;
        
    /**
     * @export
     * Core table component that displays tabular data with rich features including sorting, resizing,
     * selection, expansion, and inline editing capabilities.
     *
     * Features:
     * - Column sorting (single and multi-column)
     * - Column resizing (resets on refresh)
     * - Row selection
     * - Expandable child rows
     * - Inline editing mode
     * - Custom renderers for cells, rows, and headers
     * - Loading states with skeleton rows
     * - Action columns (edit, delete, custom actions)
     *
     * @example
     * ```tsx
     * // Basic usage
     * <BaseTableComponent
     *   columns={processedColumns}
     *   data={users}
     *   loading={false}
     *   totalWidth="100%"
     *   handleResize={(id, width) => console.log('Resized', id, width)}
     * />
     * ```
     *
     * @example
     * ```tsx
     * // With sorting
     * <BaseTableComponent
     *   columns={processedColumns}
     *   data={users}
     *   loading={false}
     *   totalWidth="100%"
     *   handleResize={(id, width) => {}}
     *   sort={{ name: 1, age: -1 }}
     *   multiColumnSort={true}
     *   onChangeSort={(newSort) => setSort(newSort)}
     * />
     * ```
     *
     * @example
     * ```tsx
     * // With editable mode
     * <BaseTableComponent
     *   columns={processedColumns}
     *   data={users}
     *   loading={false}
     *   totalWidth="100%"
     *   handleResize={(id, width) => {}}
     *   editable={{
     *     onAddItem: async (index, item) => {
     *       await api.create(item);
     *       return true;
     *     },
     *     onUpdateItem: async (index, item) => {
     *       await api.update(item);
     *       return true;
     *     },
     *     onDeleteItem: async (index, item) => {
     *       await api.delete(item);
     *       return true;
     *     },
     *     onCancelNewItem: () => console.log('Cancelled new item'),
     *     onCancelItem: () => console.log('Cancelled edit')
     *   }}
     * />
     * ```
     *
     * @example
     * ```tsx
     * // With selection and click handlers
     * <BaseTableComponent
     *   columns={processedColumns}
     *   data={users}
     *   loading={false}
     *   totalWidth="100%"
     *   handleResize={(id, width) => {}}
     *   onClickRow={(e, row) => console.log('Clicked', row)}
     *   isRowSelected={(row) => selectedIds.includes(row.id)}
     *   onSelectRow={(row) => toggleSelection(row.id)}
     * />
     * ```
     */
    export const BaseTableComponent: React.FunctionComponent<BaseTableComponentProps>;
        
    /**
     * @export
     * Individual table cell component that renders a single cell within a table row.
     * Handles rendering of regular data cells and special action columns.
     *
     * @example
     * ```tsx
     * <TableCell
     *   row={rowData}
     *   column={columnDef}
     *   renderCell={(row, col) => <span>{row[col.id]}</span>}
     * />
     * ```
     */
    export const TableCell: React.FunctionComponent<TableCellProps>;
        
    /**
     * @export
     * Skeleton loading row component displayed while table data is loading.
     * Shows placeholder skeleton loaders in each cell.
     *
     * @example
     * ```tsx
     * <SkeletonTableRow columns={processedColumns} />
     * ```
     */
    export const SkeletonTableRow: React.FunctionComponent<SkeletonTableRowProps>;
        
    /**
     * @export
     * Individual table row component that renders a single row with cells.
     * Supports regular display mode and editable mode with inline editing capabilities.
     * Can display expandable child rows and handle selection state.
     *
     * @example
     * ```tsx
     * // Regular mode
     * <TableRow
     *   row={rowData}
     *   columns={columns}
     *   onClickRow={(e, row) => console.log('Row clicked', row)}
     *   isRowSelected={(row) => row.id === selectedId}
     * />
     * ```
     *
     * @example
     * ```tsx
     * // Editable mode
     * <TableRow
     *   row={rowData}
     *   columns={columns}
     *   editable={{
     *     onAddRow: async (row) => { await api.create(row); return true; },
     *     onUpdateRow: async (row) => { await api.update(row); return true; },
     *     onDeleteRow: async (row) => { await api.delete(row); return true; },
     *     onCancelNewRow: () => console.log('Cancelled'),
     *     onCancelEditing: () => console.log('Edit cancelled')
     *   }}
     * />
     * ```
     */
    export const TableRow: React.FunctionComponent<TableRowProps>;
        
    /**
     * @export
     * A safe link that:
     * - Uses `react-router` `<Link>` when inside a router.
     * - Falls back to `<a>` otherwise.
     * - Supports cmd/ctrl+click to open in new tab
     *
     * @example
     * ```tsx
     * <SafeLink to="/settings">Settings</SafeLink>
     * ```
     *
     * @example
     * ```tsx
     * <SafeLink to="https://example.com" target="_blank">External</SafeLink>
     * ```
     */
    export const SafeLink: React.FunctionComponent<SafeLinkProps>;
        
    /**
     * @export
     * A breadcrumb navigation component with configurable collapsing behavior.
     *
     * @example
     * ```tsx
     * const items = [
     *   { label: 'Home', icon: ['fas', 'home'], link: '/' },
     *   { label: 'Products', link: '/products' },
     *   { label: 'Electronics', link: '/products/electronics' },
     *   { label: 'Laptops', link: '/products/electronics/laptops' },
     *   { label: 'Gaming', link: '/products/electronics/laptops/gaming' },
     * ];
     *
     * <Breadcrumb items={items} maxItems={4} />
     * ```
     *
     * @example
     * ```tsx
     * <Breadcrumb
     *   items={items}
     *   maxItems={5}
     *   itemsOnLeft={2}
     *   itemsOnRight={2}
     *   separator={<span>→</span>}
     *   onItemClick={(item, index) => console.log('Clicked:', item)}
     * />
     * ```
     */
    export const Breadcrumb: React.FunctionComponent<BreadcrumbProps>;
        
    /**
     * @export
     * A compact analytics card component for displaying metrics with an icon, value, and label.
     *
     * @example
     * ```tsx
     * <AnalyticsCard
     *   icon="fas building"
     *   value={42}
     *   label="Total Buildings"
     * />
     * ```
     *
     * @example
     * ```tsx
     * <AnalyticsCard
     *   icon="fas users"
     *   value="1,234"
     *   label="Active Users"
     *   small={true}
     *   loading={false}
     * />
     * ```
     */
    export const AnalyticsCard: React.MemoExoticComponent<React.FunctionComponent<AnalyticsCardProps>>;
        
    /**
     * @export
     * A header component for ObjectDetailsPanel with breadcrumb, title, subtitle, and analytics cards.
     *
     * @example
     * ```tsx
     * <ObjectDetailsPanelHeader
     *   breadcrumb={[
     *     { label: 'Home', link: '/' },
     *     { label: 'Locations', link: '/locations' },
     *     { label: 'Singapore' }
     *   ]}
     *   title="Singapore Office"
     *   subtitle={<Chip icon="fas circle" label="Active" />}
     *   analytics={[
     *     { icon: 'fas building', value: 5, label: 'Buildings' },
     *     { icon: 'fas layer-group', value: 12, label: 'Floors' }
     *   ]}
     *   backgroundImage="/images/office.jpg"
     * />
     * ```
     *
     * @example
     * ```tsx
     * <ObjectDetailsPanelHeader
     *   title="Simple Header"
     *   subtitle="No breadcrumb or analytics"
     * />
     * ```
     */
    export const ObjectDetailsPanelHeader: React.MemoExoticComponent<React.FunctionComponent<ObjectDetailsPanelHeaderProps>>;
        
    /**
     * @export
     * A provider component that manages add-on data and provides utility functions via context.
     *
     * @example
     * ```
     * <AddOnProvider>
     *   <MyComponent />
     * </AddOnProvider>
     * ```
     *
     * @example
     * ```
     * <AddOnProvider>
     *   <div>
     *     <MyComponent />
     *     <AnotherComponent />
     *   </div>
     * </AddOnProvider>
     * ```
     */
    export const AddOnProvider: React.FunctionComponent<AddOnProviderProps>;
        
    /**
     * @export
     */
    export const Dashboard: React.FunctionComponent<DashboardProps>;
        
    /**
     * @export
     * A component to fetch and render any widget or UI component dynamically.
     */
    export const ComponentRenderer: React.MemoExoticComponent<React.FunctionComponent<ComponentRendererProps>>;
        
    /**
     * @export
     * A component that displays a details panel for a selected row, with a title, toolbar, and main/additional details sections.
     *
     * @example
     * ```
     * <ObjectDetailsPanel
     *   title="User Details"
     *   data={{ id: '1', name: 'John Doe' }}
     *   generalDetails={<div>General info</div>}
     *   idField="id"
     * />
     * ```
     *
     * @example
     * ```
     * <ObjectDetailsPanel
     *   title={(row) => `Details for ${row.name}`}
     *   data={async () => ({ id: '1', name: 'John Doe', email: 'john@example.com' })}
     *   generalDetails={(row) => ({ fields: [{ label: 'Name', value: row.name }, { label: 'Email', value: row.email }] })}
     *   toolbarItems={{
     *     left: [{ icon: 'edit', label: 'Edit', onClick: (e, row) => console.log('Edit', row) }],
     *     right: [{ icon: 'share', label: 'Share' }]
     *   }}
     *   otherDetails={<div>Additional info</div>}
     *   additionlDetails={[
     *     { id: 'notes', icon: 'note', label: 'Notes', content: 'Sample notes' },
     *     { id: 'history', icon: 'history', label: 'History', content: (row) => <div>History for {row.name}</div> }
     *   ]}
     *   showCloseButton={true}
     *   onClose={() => console.log('Panel closed')}
     * />
     * ```
     */
    export const ObjectDetailsPanel: React.MemoExoticComponent<React.ForwardRefExoticComponent<React.RefAttributes<ObjectDetailsPanelHandlers> & ObjectDetailsPanelProps>>;
        
    /**
     * @export
     * Renders a data item as a horizontal identity card with avatar, title, subtitle, extra fields, badges, and actions.
     * Supports both data-fetching (via executeConfig) and pre-fetched data.
     * Use `layout="collapsed"` for the compact details-panel sidebar variant (image on right).
     *
     * @example Users row
     * ```tsx
     * <InfoCard
     *   data={user}
     *   fields={{ image: 'avatar', name: 'fullName', title: 'fullName', subtitle: 'email' }}
     *   badges={<Chip label="Active" variant="success" />}
     * />
     * ```
     *
     * @example Locations row with extra fields
     * ```tsx
     * <InfoCard
     *   data={location}
     *   fields={{ image: 'thumbnail', title: 'name', subtitle: 'type' }}
     *   extraFields={[{ value: location.address, style: 'muted' }]}
     *   badges={<Chip label={location.status} variant="success" />}
     * />
     * ```
     *
     * @example Collapsed sidebar variant
     * ```tsx
     * <InfoCard
     *   data={location}
     *   fields={{ image: 'thumbnail', name: 'name', title: 'name', subtitle: 'type' }}
     *   badges={<Chip label="Active" variant="success" />}
     *   layout="collapsed"
     * />
     * ```
     */
    export const InfoCard: React.FunctionComponent<InfoCardProps>;
        
    /**
     * @export
     * A form input component for selecting multiple items with InfoCard-style presentation.
     * Similar to MultiSelect but displays selected items as stacked profile images.
     *
     * @example Basic usage with static options:
     * ```
     * const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
     *
     * <InfoCardGroupInput
     *   options={[
     *     { name: 'Team A', id: 'team-a' },
     *     { name: 'Team B', id: 'team-b' }
     *   ]}
     *   selected={selectedTeams}
     *   onChange={(values) => setSelectedTeams(values)}
     *   labelField="name"
     *   valueField="id"
     * />
     * ```
     *
     * @example With custom field mappings:
     * ```
     * <InfoCardGroupInput
     *   options={users}
     *   selected={selectedUserIds}
     *   onChange={setSelectedUserIds}
     *   labelField="fullName"
     *   valueField="userId"
     *   fields={{
     *     image: 'avatar',
     *     name: 'fullName',
     *     title: 'fullName',
     *     subtitle: 'email'
     *   }}
     * />
     * ```
     *
     * @example In DynamicForm:
     * ```
     * {
     *   name: 'teamMembers',
     *   label: 'Team Members',
     *   type: 'json',
     *   renderField: (data, onValueChange) => (
     *     <InfoCardGroupInput
     *       options={availableUsers}
     *       selected={data.teamMembers || []}
     *       onChange={onValueChange}
     *       labelField="name"
     *       valueField="id"
     *     />
     *   )
     * }
     * ```
     */
    export const InfoCardGroupInput: React.FunctionComponent<InfoCardGroupInputProps>;
        
    /**
     * @export
     * A self-contained help/info popover — renders a question-mark icon button that
     * opens a structured panel with a title and ordered sections of heading + body text.
     * Content is driven by a simple JSON array so no custom JSX or styles are needed.
     *
     * @example
     * ```tsx
     * <HelpPopover
     *   title="How Navigation Works"
     *   sections={[
     *     {
     *       heading: 'Master Links',
     *       body: 'The single source of truth for all navigation items.',
     *     },
     *     {
     *       heading: 'Navigation Profiles vs User Groups',
     *       body: 'A profile is a curated subset of master links for a user group.',
     *     },
     *   ]}
     * />
     * ```
     */
    export const HelpPopover: React.FunctionComponent<HelpPopoverProps>;
        
    /**
     * @export
     * Header bar for a configuration section — renders title on the left and optional
     * action buttons on the right. Uses the same styling as ConfigurationView's built-in
     * section header so it can be used directly inside `hideHeader: true` sections for
     * consistent appearance.
     *
     * @example
     * ```tsx
     * // Inside a component used in a hideHeader:true section
     * <ConfigurationViewHeader
     *   title="Login Page Configuration"
     *   actions={<>
     *     <ButtonComponent title="Reset" onClick={handleReset} variant="secondary" />
     *     <ButtonComponent title="Save" onClick={handleSave} />
     *   </>}
     * />
     * ```
     */
    export const ConfigurationViewHeader: React.FunctionComponent<ConfigurationViewHeaderProps>;
        
    /**
     * @export
     * Content wrapper for a configuration section — applies the standard scroll and
     * overflow behaviour (flex-grow, overflow-y: auto). Use alongside
     * ConfigurationViewHeader inside `hideHeader: true` sections so the content area
     * matches the built-in ConfigurationView layout exactly.
     *
     * @example
     * ```tsx
     * <ConfigurationViewHeader title="Login Page Configuration" actions={...} />
     * <ConfigurationViewContent>
     *   <TabComponent tabs={tabs} />
     * </ConfigurationViewContent>
     * ```
     */
    export const ConfigurationViewContent: React.FunctionComponent<ConfigurationViewContentProps>;
        
    /**
     * @export
     * Configuration view with sidebar navigation and section content.
     * Use `mode='single'` for pages that have one section and need no sidebar.
     */
    export const ConfigurationView: React.FunctionComponent<IConfigurationViewProps>;
        
    /**
     * @export
     * FilterView component provides a dropdown interface for filtering data.
     * It displays a filter button with a badge showing the active filter count
     * and renders a dropdown panel with filter controls.
     *
     * @example
     * ```
     * <FilterView
     *   isOpen={isFilterOpen}
     *   onToggle={() => setIsFilterOpen(!isFilterOpen)}
     *   appliedFilters={currentFilters}
     *   onChange={(filters) => setCurrentFilters(filters)}
     *   formFields={filterFormStructure}
     * />
     * ```
     *
     * @example
     * ```
     * <FilterView
     *   isOpen={isFilterOpen}
     *   onToggle={() => setIsFilterOpen(!isFilterOpen)}
     *   appliedFilters={currentFilters}
     *   onChange={(filters) => setCurrentFilters(filters)}
     *   formFields={filterFormStructure}
     *   renderCustom={(filters, onChange, singleColumn) => (
     *     <CustomFilterPanel
     *       filters={filters}
     *       onChange={onChange}
     *       singleColumn={singleColumn}
     *     />
     *   )}
     * />
     * ```
     */
    export const FilterView: React.MemoExoticComponent<React.FunctionComponent<FilterViewProps>>;
        
    /**
     * @export
     * A component that renders a slide-in panel with animated transitions and a backdrop.
     * Supports two modes:
     * - `full`: fills the main content area (default)
     * - `modal`: centered overlay, auto-sized to content
     *
     * @example
     * ```
     * // Full mode (default)
     * <SlideInPanel isOpen={isOpen} onClose={() => setIsOpen(false)}>
     *   <div>Panel Content</div>
     * </SlideInPanel>
     * ```
     *
     * @example
     * ```
     * // Modal mode — auto-sized
     * <SlideInPanel mode="modal" isOpen={isOpen} onClose={() => setIsOpen(false)}>
     *   <div>Modal Content</div>
     * </SlideInPanel>
     * ```
     *
     * @example
     * ```
     * // Modal mode — explicit size
     * <SlideInPanel mode="modal" width="500px" height="400px" isOpen={isOpen} onClose={() => setIsOpen(false)}>
     *   <div>Modal Content</div>
     * </SlideInPanel>
     * ```
     *
     * @example
     * ```
     * // Full mode with containerRef
     * const containerRef = useRef<HTMLDivElement>(null);
     * const panelRef = useRef<SlideInPanelHandlers>(null);
     *
     * <div ref={containerRef} style={{ width: 400, height: 300 }}>
     *   Container content
     * </div>
     *
     * <SlideInPanel
     *   isOpen={true}
     *   onClose={() => console.log('Closed')}
     *   containerRef={containerRef}
     *   ref={panelRef}
     * >
     *   <div>Panel Content</div>
     * </SlideInPanel>
     * ```
     */
    export const SlideInPanel: React.MemoExoticComponent<React.ForwardRefExoticComponent<React.RefAttributes<SlideInPanelHandlers> & SlideInPanelProps>>;
        
    /**
     * This is a button that is meant to be used to execute a async action.
     * The onClick handler should return a promise. The button's behavior is to set the status as 'loading...' until the promise that was returned evluates and returns a result or throws an exception.
     * @export
     *
     * @example
     * ```
     *  <AsyncButton
     *      title="Submit"
     *      onClick={async() => {return executeAction("model", "action", {})}}
     *      icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
     *      loadingTitle="Submitting..."
     *      className="custom-css-class"
     *  />
     * ```
     *
     */
    export const AsyncButton: React.FunctionComponent<AsyncButtonProps>;
        
    /**
     * @export
     * A component for searching, filtering, and displaying tabular data with support for pagination, views, and details panels.
     *
     * @example
     * ```
     * <ObjectSearchComponent
     *   title="Users"
     *   data={[{ id: '1', name: 'John' }, { id: '2', name: 'Jane' }]}
     *   columns={[{ id: 'name', label: 'Name' }]}
     *   pageSize={10}
     *   total={2}
     *   idField="id"
     * />
     * ```
     *
     * @example
     * ```
     * <ObjectSearchComponent
     *   title="Users"
     *   data={async (page, pageSize, query, filters, sort) => {
     *     return { items: [{ id: '1', name: 'John' }] };
     *   }}
     *   columns={[{ id: 'name', label: 'Name', isSortable: true, exportLabel: 'User Name' }]}
     *   pageSize={10}
     *   total={async () => 100}
     *   idField="id"
     *   filters={{ formFields: [{ name: 'name', label: 'Name', type: 'text' }] }}
     *   views={{ listId: 'users', defaultViews: [{ id: 'default', name: 'Default View' }], allowToMangeCustomViews: true }}
     *   defaultActionColumns={{
     *     selectColumn: { enable: true },
     *     actionsColumn: { enable: true, headerActions: { sort: true, customiseColumns: true } }
     *   }}
     *   search={{ enable: true, fields: ['name'] }}
     *   detailsPanel={{ renderDetails: (id, onClose) => <div>Details for {id}</div> }}
     *   collapsedWidth="40%"
     *   appendToURL={true}
     *   onSelect={(selected) => console.log('Selected rows:', selected)}
     * />
     * ```
     */
    export const ObjectSearchComponent: React.MemoExoticComponent<React.ForwardRefExoticComponent<React.RefAttributes<ObjectSearchComponentHandlers> & ObjectSearchComponentProps>>;
        
    /**
     * @export
     * TableComponent displays tabular data with optional pagination, search, filters,
     * action buttons, edit/delete actions, and inline editing mode.
     *
     * @example
     * ```tsx
     * // Basic table with static data
     * <TableComponent
     *   data={[{ id: 1, name: 'Item 1' }]}
     *   columns={[{ id: 'name', label: 'Name' }]}
     *   pageSize={10}
     *   total={1}
     * />
     * ```
     *
     * @example
     * ```tsx
     * // With search, filters and action buttons
     * <TableComponent
     *   data={items}
     *   columns={columns}
     *   pageSize={10}
     *   total={items.length}
     *   search={{ enable: true, fields: ['name'] }}
     *   filters={{ formFields: [{ title: '', columns: 1, fields: [{ name: 'status', label: 'Status', type: 'text' }] }] }}
     *   actionButtons={<Button title="Add" onClick={handleAdd} />}
     * />
     * ```
     */
    export const TableComponent: React.MemoExoticComponent<React.FunctionComponent<TableComponentProps>>;
        
    /**
     * @export
     * A versatile table component with flexible feature-based configuration.
     * All chrome (search, filters, action buttons, pagination) is handled by the
     * underlying TableComponent — SCT is a pure data orchestration wrapper.
     */
    export const SimpleConfigurationTable: React.MemoExoticComponent<React.FunctionComponent<SimpleTableProps | ISimpleConfigurationTableProps>>;
        
    /**
     * @export
     * Placeholder component for declarative section definition.
     * This component doesn't render anything - it's only used to extract props
     * in the parent DataEntryForm component.
     *
     * @example
     * ```tsx
     * <DataEntrySection title="Personal Information" columns={2}>
     *   <DataEntryField field="firstName" title="First Name" required />
     *   <DataEntryField field="lastName" title="Last Name" required />
     *   <DataEntryField field="email" title="Email" type="email" />
     * </DataEntrySection>
     * ```
     *
     * @example
     * ```tsx
     * <DataEntrySection
     *   title="Conditional Section"
     *   show={(data) => data.showAdvanced === true}
     *   columns={3}
     *   separator
     * >
     *   <DataEntryField field="advanced1" title="Advanced Field 1" />
     *   <DataEntryField field="advanced2" title="Advanced Field 2" />
     * </DataEntrySection>
     * ```
     */
    export const DataEntrySection: React.FunctionComponent<DataEntrySectionProps>;
        
    /**
     * @export
     * Placeholder component for declarative field definition.
     * This component doesn't render anything - it's only used to extract props
     * in the parent DataEntryForm component.
     *
     * @example
     * ```tsx
     * <DataEntryField
     *   field="email"
     *   title="Email Address"
     *   type="email"
     *   icon="fas at"
     *   required
     *   validate={async (val) => ({
     *     valid: val.includes('@'),
     *     error: 'Invalid email'
     *   })}
     * />
     * ```
     */
    export const DataEntryField: React.FunctionComponent<DataEntryFieldProps>;
        
    /**
     * @export
     * Placeholder component for declarative sub-section definition within a DataEntrySection.
     * Does not render anything — props are extracted by DataEntryForm.
     *
     * @example
     * ```tsx
     * <DataEntrySection title="Step 1 - Personal">
     *   <DataEntrySubSection title="Basic Info" columns={2}>
     *     <DataEntryField field="firstName" title="First Name" required />
     *     <DataEntryField field="lastName" title="Last Name" required />
     *   </DataEntrySubSection>
     *   <DataEntrySubSection title="Address" separator>
     *     <DataEntryField field="city" title="City" />
     *   </DataEntrySubSection>
     * </DataEntrySection>
     * ```
     */
    export const DataEntrySubSection: React.FunctionComponent<DataEntrySubSectionProps>;
        
    /**
     * @export
     * DataEntryForm component - A declarative JSX wrapper around DynamicForm
     *
     * Provides a simple JSX-based API for creating forms while supporting all DynamicForm features.
     * This is a pure form component without any panel/modal integration.
     *
     * @example
     * ```tsx
     * const formRef = useRef<DataEntryFormHandlers>(null);
     *
     * <DataEntryForm
     *   item={user}
     *   onSubmit={handleSubmit}
     *   onCancel={handleCancel}
     *   renderStyle="tabs"
     *   ref={formRef}
     * >
     *   <DataEntrySection title="Basic Info" columns={2}>
     *     <DataEntryField field="firstName" title="First Name" required />
     *     <DataEntryField field="lastName" title="Last Name" required />
     *     <DataEntryField
     *       field="email"
     *       title="Email"
     *       type="email"
     *       icon="fas at"
     *       required
     *       validate={async (val) => {
     *         const valid = val.includes('@');
     *         return { valid, error: valid ? undefined : 'Invalid email' };
     *       }}
     *     />
     *   </DataEntrySection>
     * </DataEntryForm>
     * ```
     */
    export const DataEntryForm: React.MemoExoticComponent<React.ForwardRefExoticComponent<React.RefAttributes<DataEntryFormHandlers> & DataEntryFormProps>>;
        
    /**
     * @export
     * SlideInForm component - Flexible form integrated with SlideInPanel
     *
     * Provides a slide-in panel with header, action buttons, and either DataEntryForm or DynamicForm.
     * Use this when you need a form in a SlideIn panel. For inline forms, use DataEntryForm or DynamicForm directly.
     *
     * @example DataEntryForm (JSX declarative API)
     * ```tsx
     * const formRef = useRef<SlideInFormHandlers>(null);
     *
     * <SlideInForm
     *   formType="data-entry"
     *   title="Edit User"
     *   isOpen={isOpen}
     *   item={user}
     *   onSave={handleSave}
     *   onCancel={handleCancel}
     *   direction="right"
     *   renderStyle="tabs"
     *   ref={formRef}
     * >
     *   <DataEntrySection title="Basic Info" columns={2}>
     *     <DataEntryField field="firstName" title="First Name" required />
     *     <DataEntryField field="lastName" title="Last Name" required />
     *   </DataEntrySection>
     * </SlideInForm>
     * ```
     *
     * @example DynamicForm (config-driven API)
     * ```tsx
     * const formRef = useRef<SlideInFormHandlers>(null);
     *
     * <SlideInForm
     *   formType="dynamic"
     *   title="Edit User"
     *   isOpen={isOpen}
     *   formStructure={formStructure}
     *   onSave={handleSave}
     *   onCancel={handleCancel}
     *   direction="right"
     *   renderStyle="tabs"
     *   ref={formRef}
     * />
     * ```
     */
    export const SlideInForm: React.MemoExoticComponent<React.ForwardRefExoticComponent<React.RefAttributes<SlideInFormHandlers> & SlideInFormProps>>;
        
    /**
     * This is a confirm button component.
     * @export
     *
     * @example
     * ```
     *  <ConfirmButton
     *      title="Delete Item"
     *      loading={buttonLoading}
     *      onConfirm={async () => {return executeAction("model", "action", {})}}
     *      onCancel={() => {alert("Canceled")}}
     *  />
     * ```
     */
    export const ConfirmButton: React.FunctionComponent<IConfirmButtonProps>;
        
    /**
     *
     * A infinite-scrollable list that supports paging in of items
     * @export
     *
     * @example
     * ```
     *  <DataTable
     *      data={(max, last) => getDataItems(max, last)}
     *      pageSize={10}
     *      columns={[
     *          {
     *              title: "Request",
     *              width: "30%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="request"
     *                  className="data-table-item"
     *              />
     *          },
     *          {
     *              title: "User",
     *              width: "25%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="user"
     *                  className="data-table-item"
     *              />
     *          },
     *          {
     *              title: "Zone",
     *              width: "15%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="section"
     *                  className="data-table-item"
     *              />
     *          },
     *          {
     *              title: "Status",
     *              width: "15%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="status"
     *                  className="data-table-item"
     *              />
     *          },
     *          {
     *              title: "Date",
     *              width: "15%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="date"
     *                  className="data-table-item"
     *              />
     *          }
     *      ]}
     *  />
     * ```
     */
    export const DataTable: React.FunctionComponent<IDataTableProps>;
        
    /**
     * @export
     *
     * Used to show data in a matrix or grid. You can give it a list of items and a function to render those items.
     * Items get layed out in a grid and displayed.
     *
     * @example
     * ```
     *  let GridData = [
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *          title: "Item Card",
     *          subTitle: "Item card with image/icon Item card with image/icon"
     *      },
     *      {
     *          icon: "",
     *          name: "Dinesh Gamage",
     *          title: "Item Card",
     *          subTitle: "Item card with name"
     *      },
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *          title: "Item Card Title & Icon",
     *          subTitle: ""
     *      },
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *          title: "",
     *          subTitle: "Item Card sub Title & Icon"
     *      },
     *      {
     *          title: "Item Card",
     *          subTitle: "Item card without image/icon"
     *      },
     *      {
     *          title: "Item Card Title only",
     *      },
     *      {
     *          subTitle: "Item card sub title only"
     *      },
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *          title: "QR Code",
     *          subTitle: "scan your code"
     *      },
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *      },
     *      null
     *  ]
     *
     *
     *  function renderGridItem(item: any, key: number){
     *      return (<ItemCard
     *          item={item}
     *          imageField="icon"
     *          titleField="title"
     *          subTitleField="subTitle"
     *          nameField="name"
     *      />)
     *  }
     *
     *  <DataGrid
     *      data={GridData}
     *      renderItem={renderGridItem}
     *      columns={2}
     *  />
     * ```
     *
     */
    export const DataGrid: React.FunctionComponent<IDataGridProps>;
        
    /**
     * This widget will create a horizontal scroll-able list
     *
     * @example
     * ```
     *  <HorizontalScrollList
     *      items={[...Array(15).keys()]}
     *      renderItem={(item, key) => {
     *      return (<div className="item-thumbnail">
     *              {key}
     *          </div>)
     *      }}
     *  />
     * ```
     * @export
     */
    export const HorizontalScrollList: React.FunctionComponent<IHSListProps>;
        
    /**
     * Show a card with a list of fields in it. You need to provide an object as the `item` prop and then a list of fields from within the object to be rendered.
     * You can also provide an optional `renderField` function to customize how fields are rendered.
     * @export
     *
     * @example
     * ```
     *  <ItemListCard
     *      title="System"
     *      item={{
     *          "hvac": {
     *              "value": 250,
     *              "percentage": 15
     *          },
     *          "lighting": {
     *              "value": 250,
     *              "percentage": 15
     *          },
     *          "elevators": {
     *              "value": 250,
     *              "percentage": 15
     *          },
     *          "fire alarm": {
     *              "value": 250,
     *              "percentage": 15
     *          }
     *      }}
     *      renderSubTitle={() => {
     *          return (<div className="sample-subtitle">Savings (AED)</div>)
     *      }}
     *      fields={["hvac", "lighting", "elevators", "fire alarm"]}
     *      renderField={(item, field, key) => {
     *          return (<div className="sample-item-field" key={key}>
     *              <div className="label">{field.toUpperCase()}</div>
     *              <div className="value">
     *                  <div className="amount">{item[field].value}</div>
     *                  <div className="percentage">{item[field].percentage}%</div>
     *              </div>
     *          </div>)
     *      }}
     *      backgroundColor="rgb(209 148 250)"
     *  />
     * ```
     *
     */
    export const ItemListCard: React.FunctionComponent<IItemListCardProps>;
        
    /**
     * @export
     * A component that fetches and displays user information using InfoCard.
     * Automatically constructs profile image URL from user data.
     *
     * @example Basic usage (no dropdown):
     * ```
     * <UserInfoCard userKey={123} />
     * ```
     *
     * @example Simple details with auto-generated labels (array):
     * ```
     * <UserInfoCard
     *   userKey={123}
     *   details={['Phone', 'Email', 'UserType']}
     * />
     * ```
     *
     * @example Details with custom labels and icons (array with objects):
     * ```
     * <UserInfoCard
     *   userKey={123}
     *   details={[
     *     { field: 'Phone', label: 'Phone Number', icon: 'fas phone' },
     *     { field: 'Email', label: 'Email Address', icon: 'fas envelope' },
     *     'UserType'  // Auto-generated label: "User Type"
     *   ]}
     * />
     * ```
     *
     * @example Full config with layout options (config object):
     * ```
     * <UserInfoCard
     *   userKey={123}
     *   details={{
     *     fields: ['Phone', 'Email', 'OfficePhone', 'UserType'],
     *     columns: 2,
     *     layout: 'vertical'
     *   }}
     * />
     * ```
     *
     * @example Custom details rendering (function):
     * ```
     * <UserInfoCard
     *   userKey={123}
     *   details={(user) => (
     *     <div>
     *       <h3>{user.FullName}</h3>
     *       <p>{user.Email}</p>
     *     </div>
     *   )}
     * />
     * ```
     *
     * @example Avatar variant with simple details:
     * ```
     * <UserInfoCard
     *   userKey={123}
     *   variant="avatar"
     *   size="large"
     *   shape="circle"
     *   details={['Email', 'Phone']}
     * />
     * ```
     */
    export const UserInfoCard: React.FunctionComponent<UserInfoCardProps>;
        
    /**
     * @export
     * A component that displays a group of profile images stacked horizontally with overlap.
     * Shows a "+N" badge for remaining items when maxVisible limit is reached.
     * Clicking opens a dropdown with full ItemCards, which can be clicked for detailed info.
     *
     * This is a **display-only** component. For editable/input mode, use InfoCardGroupInput.
     *
     * @example Basic usage:
     * ```
     * <InfoCardGroup
     *   items={[
     *     { avatar: 'https://example.com/1.jpg', name: 'John Doe', email: 'john@example.com' },
     *     { avatar: 'https://example.com/2.jpg', name: 'Jane Smith', email: 'jane@example.com' },
     *   ]}
     *   fields={{ image: 'avatar', name: 'name', title: 'name', subtitle: 'email' }}
     *   maxVisible={3}
     * />
     * ```
     *
     * @example With details:
     * ```
     * <InfoCardGroup
     *   items={users}
     *   fields={{ image: 'avatar', name: 'name', title: 'name', subtitle: 'email' }}
     *   details={(item) => ({
     *     fields: [
     *       { label: 'Department', value: item.department },
     *       { label: 'Phone', value: item.phone }
     *     ]
     *   })}
     *   maxVisible={4}
     *   size="medium"
     *   shape="circle"
     * />
     * ```
     */
    export const InfoCardGroup: React.FunctionComponent<InfoCardGroupProps>;
        
    /**
     * @export
     * @deprecated Use SimpleConfigurationTable instead. CRUDComponent will be removed in a future release.
     *
     * CRUD component
     */
    export const CRUDComponent: React.ForwardRefExoticComponent<React.RefAttributes<CRUDComponentInstanceProps> & CRUDComponentProps>;
        
    /**
     * @export
     *
     * TreeViewCompare component provides drag-and-drop functionality between two TreeView components
     *
     * ## How Cross-Tree Drag Works
     *
     * 1. **Single DndContext**: Wraps both trees for unified collision detection
     * 2. **Drag State Coordination**:
     *    - `isDragging`: Global state (true when ANY drag is happening)
     *    - `isDragSource`: Tree-specific state (identifies which tree is being dragged from)
     * 3. **Drop Target Highlighting**: Target tree receives global `isDragging=true`, enabling
     *    visual feedback even though it's not the drag source
     * 4. **Validation**: Optional `validateDrop` function for custom drop rules
     *
     * ## Usage Pattern
     *
     * - Set `dragDirection` to control allowed drag operations ('left-to-right', 'right-to-left', 'both')
     * - Implement `onCrossDrop` to handle data updates when nodes are moved between trees
     * - Use `renderLeftLabel`/`renderRightLabel` for tree-specific node rendering
     *
     * @example
     * ```tsx
     * <TreeViewCompare
     *   leftItems={currentNavigation}
     *   rightItems={configuredNavigation}
     *   leftTitle="Current Navigation"
     *   rightTitle="Available Items"
     *   dragDirection="right-to-left"
     *   onCrossDrop={(source, target, sourceTree, targetTree) => {
     *     console.log('Dropped', source.label, 'onto', target.label);
     *     // Handle the drop logic
     *   }}
     *   renderRightLabel={(node) => (
     *     <span style={{ color: node.isNew ? 'green' : 'inherit' }}>
     *       {node.label}
     *     </span>
     *   )}
     * />
     * ```
     */
    export const TreeViewCompare: React.ForwardRefExoticComponent<React.RefAttributes<TreeViewCompareHandle> & TreeViewCompareProps>;
        
    /**
     *
     * @export
     *
     * TreeView component renders a hierarchical structure of nodes with optional icons, labels, and selectable functionality.
     *
     * @example
     *
     * ```
     * <TreeView
     *    items={[
     *      { id: '1', label: 'Root Node', children: [{ id: '1-1', label: 'Child Node' }] }
     *    ]}
     *    selected={selectedNode}
     *    onSelect={handleSelectNode}
     *    showPath={true}
     *    styles={{
     *      nodeBGColor: '#f0f0f0',
     *      labelTextColor: '#333',
     *    }}
     * />
     * ```
     *
     */
    export const TreeView: React.ForwardRefExoticComponent<React.RefAttributes<TreeViewHandle> & TreeViewProps>;
        
    /**
     * @export
     *
     * Select component with treeview
     */
    export const TreeViewSelectInput: React.ForwardRefExoticComponent<React.RefAttributes<TreeViewSelectInputInstanceProps> & TreeViewSelectInputProps>;
        
    /**
     *
     * Display a pie chart visualization
     * @export
     */
    export const PieChartComponent: React.FunctionComponent<IPieChartProps>;
        
    /**
     * A component to show time series based trend or line visualizations
     * @export
     *
     *
     * @example
     * ```
     *  const TrendData: ITrendSeries[] = [
     *      {
     *          unit: "A",
     *          lineColor: "#ff7300",
                data: [
                    { time: "2020/07/20", value: 200 },
                    { time: "2020/08/20", value: 100 },
                    { time: "2020/09/20", value: 50 },
                    { time: "2020/10/20", value: 300 },
                    { time: "2020/11/20", value: 700 },
                    { time: "2020/12/20", value: 90 }
                ],
                type: "line"
            },
            {
                unit: "B",
                lineColor: "#413ea0",
                fillColor: "#8884d8",
                data: [
                    { time: "2014/06/21", value: 50 },
                    { time: "2020/07/20", value: 50 },
                    { time: "2020/08/20", value: 30 },
                    { time: "2020/09/20", value: 90 },
                    { time: "2020/10/20", value: 300 },
                    { time: "2020/11/20", value: 100 },
                    { time: "2020/12/20", value: 90 }
                ],
                type: "area"
            }
        ]
     *
     *  <TrendChartComponent
     *      data={TrendData}
     *  />
     * ```
     */
    export const TrendChartComponent: React.FunctionComponent<ITrendChartProps>;
        
    /**
     *
     * @export
     *
     * This component is used to create a radial gauge.
     *
     * ## Demo
     * Find a [Demo](https://lucy-uxp.github.io/dev/showcase.html#radial-gauge) here
     *
     *
     * @example
     * ```
     *  <RadialGauge
     *      value={10}
     *      min={0}
     *      max={100}
     *  />
     * ```
     *
     * @example
     * ```
     *  <RadialGauge
     *      value={10}
     *      min={0}
     *      max={100}
     *      label={() => <>Equipment Heat</>}
     *      legend={true}
     *      gradient={true}
     *      thickness={20}
     *      largeTick={5}
     *      smallTick={2}
     *      colors={[
     *          {color: 'cyan', stopAt: 12.5},
     *          {color: 'green', stopAt: 70},
     *          {color: 'orange', stopAt: 87.5},
     *          {color: 'red', stopAt: 100},
     *      ]}
     *
     *  />
     * ```
     */
    export const RadialGauge: React.FunctionComponent<IGaugeProps>;
        
    /**
     * @export
     * HeatmapLayer component for react-leaflet v4
     *
     * A custom implementation using leaflet.heat that integrates with react-leaflet v4.
     * Supports all standard heatmap configurations including custom gradients, radius, and intensity.
     * Works with both geographic maps and static images (floor plans).
     *
     * @example
     * ```tsx
     * // Regular map heatmap
     * <HeatmapLayer
     *   points={[
     *     { latitude: 1.29, longitude: 103.85, intensity: 0.8 },
     *     { latitude: 1.30, longitude: 103.86, intensity: 1.0 }
     *   ]}
     *   radius={40}
     *   blur={20}
     *   max={1.0}
     *   gradient={{
     *     0.0: 'blue',
     *     0.5: 'lime',
     *     0.7: 'yellow',
     *     1.0: 'red'
     *   }}
     * />
     *
     * // Static image heatmap
     * <HeatmapLayer
     *   points={imageHeatmapPoints}
     *   coordinateConverter={(lat, lng) => convertFromImagePosition(lng, lat, imageWidth, imageHeight)}
     *   radius={50}
     *   gradient={{ 0.0: 'navy', 0.5: 'cyan', 1.0: 'red' }}
     * />
     * ```
     */
    export const HeatmapLayer: React.FunctionComponent<IHeatmapLayerProps>;
        
    /**
     * A map widget that can show a pannable/zoomable map with markers
     * @export
     *
     */
    export const MapComponent: React.FunctionComponent<IMapComponentProps>;
        
    /**
     * Use this to show a title area on widgets. You can set a title on the left side
     * and any arbitrary content on the right side - typically you would use a {@component FilterPanel} there.
     * The content that appears on the right side go as children of this component.
     * @export
     *
     * @example
     *
     * ```
     * <TitleBar title='My Test Widget'>
     *      <div>Active</div>
     * </TitleBar>
     * ```
     *
     */
    export const TitleBar: React.FunctionComponent<IWidgetTitleBarProps>;
        
    /**
     * @deprecated
     * This is a extended version of modal. this covers the full UI.
     * main purpose is to create a container for sidebar link widgets
     * @example
     * ```
     *  <button className="btn showcase" onClick={() => setShowLinkWidget(true)}>Click to Show Link Widget Container</button>
     *
     *  <LinkWidgetContainer
     *      show={showLinkWidget}
     *      onClose={() => setShowLinkWidget(false)}
     *      title="Link Widget Container"
     *  >
     *      content
     * </LinkWidgetContainer>
     * ```
     * @export
     *
     */
    export const LinkWidgetContainer: React.FunctionComponent<ILinkWidgetContainerProps>;
        
    /**
     * @export
     *
     * This component will be used to add a label to a widget to show that it's being rendered using sample data
     *
     * @example
     *
     * ```
     * <SampleDataLabel
     *  show={true}
     * />
     * ```
     */
    export const SampleDataLabel: React.FunctionComponent<ISampleDataLabelProps>;
        
    /**
     *
     * @export
     *
     * This is a standard wrapper for widgets.
     * It provides basic visual styling for common widgets. You should generally wrap all your widgets in this.
     *
     * @example
     * ```
     * <WidgetWrapper>
     *  <Label>My custom widget</Label>
     * </WidgetWrapper>
     * ```
     *
     * @example
     *
     * ```
     * You can define custom break points for the widget and use css to make the widget responsive
     * Uxp will automatically apply the relevant class based on the width or height of the widget wrapper.
     * these class names will be prefixed with either `w-` (for width) or `h-` (for height)
     * then you can write css to make the widgets resposive
     * <WidgetWrapper
     *      cssBreakPoints={{
     *          width: {
     *              default: 'larger',
     *              100: 'smaller',
     *              200: 'small',
     *              300: 'medium'
     *          },
     *          height: {
     *              default: 'larger',
     * 				100: 'smaller',
     *  			200: 'small',
     *  			300: 'medium'
     * 			}
     *  	}}
     * 	>
     *
     *
     * ```
     *
     */
    export const WidgetWrapper: React.FunctionComponent<IWidgetWrapperProps>;
        
    /**
     * @deprecated
     * This widget will give a simple widget with configurable option to create a link button
     *
     * @example
     * ```
     *  <LinkButtonWidget
     *      link="https://google.com"
     *      target="_blank"
     *      icon="path to your icon"
     *      label="Go to Google"
     *  />
     * ```
     * @export
     */
    export const LinkButtonWidget: React.FunctionComponent<ILinkButtonWidgetProps>;
        
    /**
     * @export
     * A reusable QR code component with optional print support and UXP theming.
     * Wraps `react-qr-code` and supports context-based styling.
     *
     */
    export const QRCodeComponent: React.ForwardRefExoticComponent<React.RefAttributes<QRCodeComponentHandles> & QRCodeComponentProps>;
        
    /**
     * @export
     * User Profile component
     *
     * This component can be used when building UI without the default header
     *
     * @example Basic usage
     * ```tsx
     * <UserProfile>
     *   <your content>
     * </UserProfile>
     * ```
     *
     * @example Hide default details and logout button
     * ```tsx
     * <UserProfile
     *   hideDetails={true}
     *   hideLogout={true}
     * >
     *   <your content>
     * </UserProfile>
     * ```
     */
    export const UserProfile: React.FunctionComponent<ProfileProps>;
        
    /**
     * Modal for editing a pluggable view's configuration props.
     * @export
     */
    export const PluggableViewConfig: React.FunctionComponent<PluggableViewConfigProps>;
        
    /**
     * @export
     * Widget drawer modal wrapper component that handles widget initialization internally
     *
     * @example
     * ```tsx
     * <WidgetDrawer
     *   show={showDrawer}
     *   onClose={() => setShowDrawer(false)}
     *   widgets={dashboardWidgets}
     *   layouts={dashboardLayouts}
     *   onChange={(event) => {
     *     if (event.action === 'select') {
     *       // Raw selection (no layout processing)
     *       handleRawSelection(event.items)
     *     } else {
     *       // Add or delete (with layout processing)
     *       setWidgets(event.widgets!)
     *       setLayouts(event.layouts!)
     *     }
     *     return true
     *   }}
     *   config={{ mode: 'multi' }}
     * />
     * ```
     */
    export const WidgetDrawer: React.FunctionComponent<WidgetDrawerProps>;
        
    /**
     * @export
     * Embedded dashboard component for rendering dashboards within pages (without navigation)
     *
     * @example
     * // Basic usage - Simple embedded dashboard
     * <EmbeddedDashboard
     *   ids={["myapp/dashboard/main"]}
     * />
     *
     * @example
     * // With default configuration from JSON file
     * import defaultConfig from './dashboards/equipment-default.json';
     *
     * <EmbeddedDashboard
     *   ids={["equipment/dashboard/chiller-123", "equipment/dashboard/chiller", "equipment/dashboard"]}
     *   defaultConfiguration={defaultConfig}
     *   allowToConfigure={true}
     * />
     *
     * @example
     * // Advanced usage - With user group layouts and responsive breakpoints
     * <EmbeddedDashboard
     *   ids={["equipment/dashboard/chiller-123", "equipment/dashboard/chiller", "equipment/dashboard"]}
     *   allowToConfigure={true}
     *   enableUserGroupLayouts={true}
     *   enableResponsiveLayouts={true}
     * />
     */
    export const EmbeddedDashboard: React.MemoExoticComponent<React.FunctionComponent<EmbeddedDashobardComponentProps>>;
        
    /**
     * @export
     * FloatingActions Component
     *
     * Consolidated floating action buttons that handles both page and dashboard sections.
     * Renders sections horizontally when multiple sections are registered.
     *
     * @example
     * ```typescript
     * // Placed in ConfiguredPage - automatically renders based on registrations
     * <FloatingActions />
     * ```
     */
    export const FloatingActions: React.FunctionComponent<any>;
        
    /**
     * @export
     * Declarative component wrapper for delete actions
     *
     * Provides a render-prop pattern for triggering delete actions with
     * automatic dependency checking and confirmation dialogs.
     *
     * @example Basic usage with button
     * ```tsx
     * <DeleteAction
     *   model="Location.Location"
     *   objectKey={locationKey}
     *   canHide={true}
     *   onSuccess={(action) => {
     *     if (action === 'delete') {
     *       navigate('/locations');
     *     }
     *   }}
     * >
     *   {(handleDelete) => (
     *     <Button onClick={handleDelete}>Delete Location</Button>
     *   )}
     * </DeleteAction>
     * ```
     *
     * @example With custom title and messages
     * ```tsx
     * <DeleteAction
     *   model="User.User"
     *   objectKey={userId}
     *   deleteTitle="Delete User"
     *   deleteMessage="Are you sure you want to delete this user?"
     *   onSuccess={() => refetch()}
     * >
     *   {(handleDelete) => (
     *     <IconButton icon="fas trash" onClick={handleDelete} />
     *   )}
     * </DeleteAction>
     * ```
     *
     * @example In an action list
     * ```tsx
     * <ActionList>
     *   <DeleteAction
     *     model="Equipment.Equipment"
     *     objectKey={equipmentKey}
     *     canHide={true}
     *     onSuccess={() => reloadTable()}
     *   >
     *     {(handleDelete) => (
     *       <ActionItem
     *         icon="fas trash"
     *         label="Delete"
     *         onClick={handleDelete}
     *       />
     *     )}
     *   </DeleteAction>
     * </ActionList>
     * ```
     */
    export const DeleteAction: React.FunctionComponent<DeleteActionProps>;
        
    /**
     * @export
     * This component gives a styled button to go to the marketplace product pages
     * Intend to use in the configuration panels and other place
     *
     * @example
     *
     * ```
     * <BuyOnSpaceworxButton productIds={['610b6a0583892800ab104e82']} />
     * ```
     *
     */
    export const BuyOnSpaceworxButton: React.FunctionComponent<IBuyOnSpaceworxButtonProps>;
        
    /**
     * This gives a pre defined component to used in configuration panels where we need to explain what is spaceworx is
     *
     * @export
     *
     *
     * @example
     * ```
     * <SpaceworxDescriptionTag />
     * ```
     *
     */
    export const SpaceworxDescriptionTag: React.FunctionComponent<ISpaceworxDescriptionTagProps>;
        
    /**
     * @export
     * This component let's you to configure localisation messages for the enabled languages in iviva
     *
     * @example
     *
     * <LocalizationForm
     * code: 'uxp-core.text.save'
     * />
     */
    export const LocalizationForm: React.FunctionComponent<ILocalisationFormProps>;
        
    /**
     * @export
     *
     * This component renders a trigger button that opens a modal for configuring localization messages.
     *
     * @example
     * // Default usage with icon button
     * <LocalizationFormModal code='uxp-core.text.save' />
     *
     * @example
     * // With custom trigger and deferred saving
     * <LocalizationFormModal
     *   code='uxp-core.auth.welcome-to'
     *   useDoneButton={true}
     *   onSave={handleMessagesUpdate}
     *   trigger={<IconButton type="edit" />}
     * />
     */
    export const LocalizationFormModal: React.FunctionComponent<ILocalisationFormModalProps>;
        
    /**
     * @export
     * A floating dropdown menu that allows users to change the active theme.
     *
     * @example
     * ```tsx
     * <ThemeChanger
     *   themeName="dark"
     *   onChangeTheme={(theme) => console.log("Theme changed:", theme)}
     *   position="bottom-left"
     * />
     * ```
     */
    export const ThemeChanger: React.FunctionComponent<IThemeChangerProps>;
        
    /**
     * @export
     */
    export const NotificationCenter: React.FunctionComponent<any>;
        
    /**
     * This helps you to dispatch a custom event
     * Use useEventSubscriber to listen to these events
     *
     * @example
     * ```
     *  eventDispatcher(props.instanceId, "my-custom-event", {message: "this is a custom event"})
     * ```
     *
     *  @export
     */
    export const eventDispatcher: IEventDispatcher;
        
    /**
     * Returns registered UXP messages for the selected language.
     * @export
     */
    export function getRegisterMessages(language: string): { [code: string]: string; };
        
    /**
     * @export
     * Returns the map of all built-in default themes keyed by theme name
     */
    export function getDefaultThemes(): ThemeMap;
        
    /**
     * @export
     * Returns the names of all built-in default themes
     */
    export function getDefaultThemeNames(): DefaultThemeNames;
        
    /**
     * @export
     * Groups theme properties into logical color categories for use in a theme editor UI.
     * Returns an array of ColorGroup objects, each containing related color properties.
     */
    export function getColorGroups(themeProps: Record<string, string>): ColorGroup[];
        
    /**
     * @export
     */
    export function hasIcon(icon?: any): boolean;
        
    /**
     * @export
     * Check if icon is FontAwesome format (string or array)
     * @example isFontawesomeIcon('fas save') // true
     * @example isFontawesomeIcon('fas:save') // true
     * @example isFontawesomeIcon(['fas', 'save']) // true
     * @example isFontawesomeIcon('phb house') // false
     */
    export function isFontawesomeIcon(icon: any): boolean;
        
    /**
     * @export
     * Convert FontAwesome string to IconProp array format
     * @example getFontAwesomeIcon('fas save') // ['fas', 'save']
     * @example getFontAwesomeIcon('fas:save') // ['fas', 'save']
     */
    export function getFontAwesomeIcon(icon: string): IconProp;
        
    /**
     * @export
     * Check if icon is Phosphor format (string or array)
     * @example isPhosphorIcon('phb house') // true
     * @example isPhosphorIcon('phb:house') // true
     * @example isPhosphorIcon(['phb', 'house']) // true
     * @example isPhosphorIcon('fas save') // false
     */
    export function isPhosphorIcon(icon: any): boolean;
        
    /**
     * @export
     * Parse Phosphor icon string to PHIconProp array format
     * @example getPhosphorIcon('phb house') // ['phb', 'house']
     * @example getPhosphorIcon('phb:house') // ['phb', 'house']
     * @example getPhosphorIcon('phr heart') // ['phr', 'heart']
     */
    export function getPhosphorIcon(icon: string): PHIconProp;
        
    /**
     * @export
     * Parse any icon prop and determine its type and format
     * Returns formatted icon ready for the appropriate wrapper
     *
     * @example parseIcon('fas save') // { type: 'fontawesome', formatted: ['fas', 'save'], original: 'fas save' }
     * @example parseIcon(['phb', 'house']) // { type: 'phosphor', formatted: ['phb', 'house'], original: ['phb', 'house'] }
     * @example parseIcon('https://example.com/icon.svg') // { type: 'image', formatted: 'https://...', original: 'https://...' }
     */
    export function parseIcon(icon: any): ParsedIcon | null;
        
    /**
     * @export
     * Parse PHIconProp to extract weight and icon name
     * Used internally by PHIconWrapper
     * @example parseIconProp(['phb', 'House']) // { weight: 'bold', iconName: 'house' }
     * @example parseIconProp('ArrowRight') // { weight: 'regular', iconName: 'arrow-right' }
     */
    export function parsePhosphorIcon(icon: PHIconProp): { weight: PHIconWeight; iconName: string };
        
    /**
     * @export
     * Loads a JavaScript file dynamically with optional callback
     *
     * @example
     * ```
     * loadScriptFile('/js/chart.js', () => {
     *   console.log('Chart library loaded');
     * }, 'chart-script');
     * ```
     */
    export function loadScriptFile(path: string, callback?: ScriptCallback, id?: string, replaceIfExist?: boolean): void;
        
    /**
     * @export
     * Loads a JavaScript file asynchronously using promises
     *
     * @example
     * ```
     * try {
     *   await loadScriptFileAsync('/js/chart.js', 'chart-script');
     *   console.log('Script loaded successfully');
     * } catch (error) {
     *   console.error('Failed to load script');
     * }
     * ```
     */
    export function loadScriptFileAsync(path: string, id?: string, replaceIfExist?: boolean): Promise<void>;
        
    /**
     * @export
     * Loads all scripts associated with a module ID
     *
     * @example
     * ```
     * await loadAllScriptsByModuleId(context, 'dashboard-module');
     * ```
     */
    export function loadAllScriptsByModuleId(context: IContextProvider, moduleId: string): Promise<void>;
        
    /**
     * @export
     * Generates a UUID string
     *
     * @example
     * ```
     * const id = generateUUID();
     * console.log(id); // "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
     * ```
     */
    export function generateUUID(): string;
        
    /**
     * @export
     * Generates a script path from module ID
     *
     * @example
     * ```
     * const path = generateScriptPathFromModuleId('dashboard-module', 'https://app.example.com');
     * ```
     */
    export function generateScriptPathFromModuleId(moduleId: string, lucyUrl?: string): string;
        
    /**
     * @export
     * Normalizes a module script URL to a relative path by stripping any leading origin
     * (e.g. "http://account:5001/api/UXP/module?id=X" → "/api/UXP/module?id=X").
     * Non-module URLs (e.g. S3 URLs) are returned unchanged.
     */
    export function normalizeModuleScriptUrl(url: string): string;
        
    /**
     * @export
     * Extracts module ID from script path
     *
     * @example
     * ```
     * const moduleId = getModuleIdFromScriptPath('/api/UXP/module?id=dashboard-module');
     * ```
     */
    export function getModuleIdFromScriptPath(scriptPath: string): string;
        
    /**
     * @export
     * Gets module ID from widget configuration
     *
     * @example
     * ```
     * const moduleId = getModuleIdFromWidget(widget);
     * ```
     */
    export function getModuleIdFromWidget(widget: { id: string; usecaseId?: string }): string;
        
    /**
     * @export
     * Returns true if the given id belongs to a widget.
     * Handles both 3-part legacy IDs ("moduleId/widget/componentId") and
     * 2-part unified IDs ("moduleId/componentId") from the unified component registry.
     */
    export function isWidget(id: string): boolean;
        
    /**
     * @export
     * Creates a simple hash from a string with optional prefix
     *
     * @example
     * ```
     * const hash = simpleHash('my-string', 'prefix-');
     * console.log(hash); // "prefix-123456789"
     * ```
     */
    export function simpleHash(str: string, prefix?: any = 'hash-', options?: { base?: number, ignorePrefix?: boolean }): string;
        
    /**
     * @export
     * Component types enumeration
     */
    /**
     * Normalize any ID form to a comparable 2-part key by stripping the middle type segment.
     *   moduleId/widget/compId    →  moduleId/compId
     *   moduleId/ui/compId        →  moduleId/compId
     *   moduleId/component/compId →  moduleId/compId
     *   moduleId/compId            →  moduleId/compId  (unchanged)
     *
     * Called once per item at registration (stored as ComponentDefinition.normalizedId).
     * Called once per lookup on the search ID only — never per-item at lookup time.
     */
    export function normalizeComponentId(id: string): string;
        
    /**
     * Look up a registered component by any ID form (3-part or 2-part).
     * Normalizes the search ID once, then compares against pre-computed ComponentDefinition.normalizedId.
     *
     * @example
     * ```
     * lookupComponent('iviva-system-app/widget/chart');
     * lookupComponent('iviva-system-app/ui/general-settings-view');
     * lookupComponent('iviva-system-app/component/my-comp');
     * ```
     * @export
     */
    export function lookupComponent(id: string): ComponentDefinition | null;
        
    /**
     * @export
     * Removes trailing slashes from a string.
     *
     * @example
     * ```ts
     * const cleanUrl = trimSlash('https://example.com/');
     * console.log(cleanUrl); // "https://example.com"
     *
     * const path = trimSlash('/api/v1/');
     * console.log(path); // "/api/v1"
     * ```
     */
    export function trimSlash(s: string): string;
        
    /**
     * @export
     * Removes trailing slashes from a string.
     *
     * @example
     * ```ts
     * const cleanUrl = trimTrailingSlash('https://example.com/');
     * console.log(cleanUrl); // "https://example.com"
     *
     * const path = trimTrailingSlash('/api/v1/');
     * console.log(path); // "/api/v1"
     * ```
     */
    export function trimTrailingSlash(s: string): string;
        
    /**
     * @export
     * Removes leading slashes from a string.
     *
     * @example
     * ```ts
     * const cleanPath = trimLeadingSlash('/api/v1/users');
     * console.log(cleanPath); // "api/v1/users"
     *
     * const url = trimLeadingSlash('https://example.com');
     * console.log(url); // "https://example.com"
     * ```
     */
    export function trimLeadingSlash(s: string): string;
        
    /**
     * @export
     * Copies text to the system clipboard
     *
     * @example
     * ```
     * copyToClipboard('Hello World');
     * ```
     */
    export function copyToClipboard(text: string): Promise<void>;
        
    /**
     * @export
     * Debounces function execution to prevent excessive calls
     *
     * @example
     * ```
     * const debouncedSearch = debounce((query) => {
     *   console.log('Searching for:', query);
     * }, 300);
     * ```
     */
    export function debounce<F extends DebounceFunction>(func: F, waitMilliseconds?: any = 50, options?: DebounceOptions = { isImmediate: false }): F;
        
    /**
     * @export
     * Checks if a value has a meaningful value (not null, undefined, or empty)
     *
     * @example
     * ```
     * if (hasValue(userInput)) {
     *   console.log('User provided input');
     * }
     * ```
     */
    export function hasValue<T>(value: T | null | undefined, allowZero?: boolean, allowNegative?: boolean): value is NonNullable<T>;
        
    /**
     * @export
     * Converts a string to URL-friendly format
     *
     * @example
     * ```
     * const slug = getUrlFriendlyString('Hello World & More');
     * console.log(slug); // "hello-world-and-more"
     * ```
     */
    export function getUrlFriendlyString(string: string, removeSlashes?: boolean): string;
        
    /**
     * @export
     * Performs a text search with case sensitivity option
     *
     * @example
     * ```
     * const found = textSearch('Hello World', 'world', true);
     * console.log(found); // true
     * ```
     */
    export function textSearch(value: any, query: string, ignoreCase?: boolean = false): boolean;
        
    /**
     * @export
     * Converts any value to string representation
     *
     * @example
     * ```
     * const str = toStr(123);
     * console.log(str); // "123"
     * ```
     */
    export function toStr(value: any, def?: string): string;
        
    /**
     * @export
     * Converts any value to boolean
     *
     * @example
     * ```
     * const bool = toBool('true');
     * console.log(bool); // true
     * ```
     */
    export function toBool(value: any, def?: boolean): any;
        
    /**
     * @export
     * Converts any value to number with fallback
     *
     * @example
     * ```
     * const num = toNum('123.45', 0);
     * console.log(num); // 123.45
     * ```
     */
    export function toNum(value: any, def?: number): number | undefined;
        
    /**
     * @export
     * Rounds a number to specified decimal places
     *
     * @example
     * ```
     * const rounded = roundOff(3.14159, 2);
     * console.log(rounded); // 3.14
     * ```
     */
    export function roundOff(num: number, decimalPlaces?: number = 2): number;
        
    /**
     * @export
     * Converts any value to JSON object with type inference from value or default
     *
     * @example
     * ```
     * const obj = toJSON('{"name": "John"}', {});
     * console.log(obj.name); // "John"
     *
     * // Type is inferred from the value when it's typed
     * const links = toJSON(comparison?.dbLinks, []); // NavigationLink[]
     *
     * // Type is inferred from default when value is string
     * const parsed = toJSON('{"key": "value"}', {});
     * ```
     */
    export function toJSON<T>(value: T | string | null | undefined, def?: T): T;
        
    /**
     * @export
     * Converts string, number, or Date to Date object
     *
     * @example
     * ```
     * const date = toDate('2023-12-25');
     * console.log(date); // Date object
     * ```
     */
    export function toDate(d: string | number | Date): Date;
        
    /**
     * @export
     * Converts word to singular form
     *
     * @example
     * ```
     * const singular = toSingular('users');
     * console.log(singular); // "user"
     * ```
     */
    export function toSingular(word: string): string;
        
    /**
     * @export
     * Converts word to plural form
     *
     * @example
     * ```
     * const plural = toPlural('user');
     * console.log(plural); // "users"
     * ```
     */
    export function toPlural(word: string): string;
        
    /**
     * @export
     * convert text tp kebab case
     */
    export function toKebabCase(str: string): string;
        
    /**
     * @export
     * Checks if a string represents a relative date
     *
     * @example
     * ```
     * const isRelative = isRelativeDate('-3d');
     * console.log(isRelative); // true
     * ```
     */
    export function isRelativeDate(date: any): boolean;
        
    /**
     * @export
     * Parses a relative date string into an actual Date object
     *
     * @example
     * ```
     * const date = parseRelativeDate('-3d'); // 3 days ago
     * const startDate = parseRelativeDate('0d|start'); // start of today
     * ```
     */
    export function parseRelativeDate(relativeDate: string, baseDate?: any = new Date()): Date;
        
    /**
     * @export
     * Gets human-readable label for relative date strings
     *
     * @example
     * ```
     * const label = getRelativeDateLabel('-3d');
     * console.log(label); // "3 Days Before"
     * ```
     */
    export function getRelativeDateLabel(relativeDate: string): string;
        
    /**
     * @export
       * Parses a CSS size string and extracts value and unit
       * Supports any CSS unit (px, rem, em, vh, vw, %, etc.)
       *
       * @example
       * ```
       * const parsed = parseCSSUnit('5rem');
       * console.log(parsed); // { value: 5, unit: 'rem' }
       *
       * const parsed2 = parseCSSUnit('60px');
       * console.log(parsed2); // { value: 60, unit: 'px' }
       *
       * const parsed3 = parseCSSUnit('3.5em');
       * console.log(parsed3); // { value: 3.5, unit: 'em' }
       * ```
       */
    export function parseCSSUnit(size: string): { value: number; unit: string } | null;
        
    /**
     * @export
     * Extracts the first item from data, handling both arrays and objects.
     *
     * @param data - The data to extract from (can be array, object, or null/undefined)
     * @returns The first element if array, the object itself if object, or null if no data
     *
     * @example
     * ```
     * extractFirstItem([{ id: 1 }, { id: 2 }]); // Returns { id: 1 }
     * extractFirstItem({ id: 1 }); // Returns { id: 1 }
     * extractFirstItem([]); // Returns null
     * extractFirstItem(null); // Returns null
     * ```
     */
    export function extractFirstItem<T = any>(data: T | T[] | null | undefined): T | null;
        
    /**
     * Generate inline styles for input size control
     * Respects priority: style > fullWidth > width > min/maxWidth > defaults
     *
     * All number values are converted to rem units (base: 12px)
     *
     * @export
     * @example
     * ```tsx
     * const sizeStyles = getInputSizeStyles({ minWidth: 150, maxWidth: 500, style: { color: 'red' } });
     * <div style={sizeStyles}>...</div>
     * // Result: { minWidth: '12.5rem', maxWidth: '41.667rem', color: 'red' }
     * ```
     */
    export function getInputSizeStyles(props: InputSizeProps & { style?: React.CSSProperties }): React.CSSProperties;
        
    /**
     * Generate className string for input state (BEM modifiers)
     *
     * All state modifiers follow BEM naming: uxpcore_input--{state}
     * - uxpcore_input--disabled
     * - uxpcore_input--readonly
     * - uxpcore_input--valid
     * - uxpcore_input--invalid
     *
     * @export
     * @example
     * ```tsx
     * const stateClass = getInputStateClass({ disabled: true, isValid: false });
     * // Returns: 'uxpcore_input--disabled uxpcore_input--invalid'
     * ```
     */
    export function getInputStateClass(props: InputStateProps): string;
        
    /**
     * @export
     * Executes an ExecuteConfig directly using the provided context.
     * Useful for callback patterns where useExecuteRequest hook cannot be used.
     *
     * @param context - The UXP context object (from useUXPContext)
     * @param config - The execution configuration
     * @param options - Optional runtime overrides for extractData, transformData, defaultValue, and preview
     * @returns Promise resolving to the data, or throwing an error
     *
     * @example
     * ```
     * // Basic usage in a callback (e.g., ObjectSearchComponent's getAll)
     * const getAll = async (page, pageSize) => {
     *   const config = LocationServices.getAll({ page, pageSize });
     *   const data = await executeConfig(context, config);
     *   return { items: data };
     * }
     * ```
     *
     * @example
     * ```
     * // Override extraction/transformation at runtime
     * const result = await executeConfig(
     *   context,
     *   LocationServices.getAll(),
     *   { extractData: 'customPath', transformData: (data) => processData(data) }
     * );
     * ```
     *
     * @example
     * ```
     * // Preview mode with sample data
     * const result = await executeConfig(
     *   context,
     *   LocationServices.getAll(),
     *   { preview: { isPreview: true, sampleData: mockLocations } }
     * );
     * ```
     *
     * @example
     * ```
     * // Error handling
     * try {
     *   const data = await executeConfig(context, config);
     *   console.log(data);
     * } catch (error) {
     *   console.error('Failed:', error.message);
     * }
     * ```
     */
    export function executeConfig<T = any>(context: IContextProvider, config: ExecuteConfig, options?: Pick<UseExecuteOptions<T>, 'extractData' | 'transformData' | 'defaultValue' | 'preview'>): Promise<ExecutionResult<T>>;
        
    /**
    * @export
    * Checks if a string contains placeholder expressions that can be parsed
    *
    * @example
    * String with placeholders
    * ```tsx
    * hasPlaceholders("Hello {user.name}!") // Returns: true
    * ```
    *
    * @example
    * Plain string without placeholders
    * ```tsx
    * hasPlaceholders("Hello world!") // Returns: false
    * ```
    */
    export function hasPlaceholders(value: string): boolean;
        
    /**
    * @export
    * Applies formatting transformations to a value based on formatter configuration
    * Uses FormatOptions to transform values (string, number, boolean, etc.)
    *
    * @example
    * Format as number with decimals
    * ```tsx
    * applyFormatters(19.999, ["number", "2"]) // Returns: 19.99
    * ```
    *
    * @example
    * No formatters applied
    * ```tsx
    * applyFormatters("hello", []) // Returns: "hello"
    * ```
    */
    export function applyFormatters(value: any, formatters: string[]): any;
        
    /**
    * @export
    * Extracts and formats a value from data using an expression with optional formatters
    * Supports JSONPath expressions starting with $ and applies formatting options
    *
    * @example
    * Extract nested property
    * ```tsx
    * extractAndFormatValue("$.user.name", { user: { name: "John" } }, "") // Returns: "John"
    * ```
    *
    * @example
    * Apply number formatting
    * ```tsx
    * extractAndFormatValue("$.price|number|2", { price: 19.999 }, "0") // Returns: 19.99
    * ```
    */
    export function extractAndFormatValue(expression: string, data: any, defaultValue: string): any;
        
    /**
    * @export
    * Parses placeholder expressions in a string value and replaces them with actual data
    * Returns the original type if single expression, otherwise returns formatted string
    *
    * @example
    * Single expression returns typed value
    * ```tsx
    * parsePlaceholders("{user.age}", { user: { age: 25 } }) // Returns: 25 (number)
    * ```
    *
    * @example
    * Mixed content returns formatted string
    * ```tsx
    * parsePlaceholders("Hello {user.name}!", { user: { name: "John" } }) // Returns: "Hello John!"
    * ```
    */
    export function parsePlaceholders(value: string, data: any): any;
        
    /**
     * @export
     * Removes columns with no sort order (0) from the sort configuration
     *
     * sort - The sort configuration to clean
     * returns Cleaned sort configuration with only sorted columns
     *
     * @example
     * ```tsx
     * const cleaned = cleanSort({ name: 1, age: 0, status: -1 });
     * // Result: { name: 1, status: -1 }
     * ```
     */
    export function cleanSort(sort: Sort): Sort;
        
    /**
     * @export
     * Checks if any columns are currently sorted
     *
     * sort - The sort configuration to check
     * returns True if at least one column has a sort order
     *
     * @example
     * ```tsx
     * hasSort({ name: 1, age: 0 }) // true
     * hasSort({ name: 0, age: 0 }) // false
     * ```
     */
    export function hasSort(sort: Sort): boolean;
        
    /**
     * @export
     * Returns the number of columns currently sorted
     *
     * sort - The sort configuration
     * returns Count of sorted columns
     *
     * @example
     * ```tsx
     * getSortCount({ name: 1, age: -1, status: 0 }) // 2
     * ```
     */
    export function getSortCount(sort: Sort): number;
        
    /**
     * @export
     * Shared utility function to parse URLSearchParams into a typed object.
     * Handles JSON-encoded values using the toJSON utility.
     *
     * @param params - The URLSearchParams object to parse.
     * @returns A typed object containing the parsed search parameters.
     *
     * @example
     * ```
     * const params = new URLSearchParams('?name=John&age=30');
     * const result = parseSearchParams<{ name: string; age: string }>(params);
     * // result: { name: 'John', age: '30' }
     * ```
     *
     * @example
     * ```
     * const params = new URLSearchParams('?user={"name":"John","age":30}');
     * const result = parseSearchParams<{ user: { name: string; age: number } }>(params);
     * // result: { user: { name: 'John', age: 30 } }
     * ```
     */
    export function parseSearchParams<T extends Record<string, any>>(params: URLSearchParams): SearchParams<T>;
        
    /**
     * @export
     * Extracts search parameters from a URL or search string into a typed object.
     * Handles JSON-encoded values using the toJSON utility.
     *
     * @param urlOrSearch - The full URL or just the search string (e.g., "?key=value" or "http://example.com?key=value").
     * @returns A typed object containing the parsed search parameters.
     *
     * @example
     * ```
     * const params = getSearchParamsFromURL<{ name: string; age: string }>('?name=John&age=30');
     * // params: { name: 'John', age: '30' }
     * ```
     *
     * @example
     * ```
     * const params = getSearchParamsFromURL<{ user: { name: string; age: number } }>(
     *   'http://example.com?user={"name":"John","age":30}'
     * );
     * // params: { user: { name: 'John', age: 30 } }
     * ```
     */
    export function getSearchParamsFromURL<T extends Record<string, any>>(urlOrSearch: string): SearchParams<T>;
        
    /**
     * @export
     * Checks if the given filters object is a SimpleFilter type
     * param filters - The filters object to check
     * returns True if filters is a SimpleFilter
     */
    export function isSimpleFilter(filters: Filters): boolean;
        
    /**
     * @export
     * Removes empty or invalid filter values from the filters object
     * param filters - The filters object to clean
     * returns Cleaned filters object with only valid values
     */
    export function cleanFilters(filters: Filters): Filters;
        
    /**
     * @export
     * Checks if the filters object contains any valid filter values
     * param filters - The filters object to check
     * returns True if filters contains valid filter values
     */
    export function hasFilters(filters: Filters): boolean;
        
    /**
     * @export
     * Gets the count of active filters
     * param filters - The filters object to count
     * returns The number of active filters
     */
    export function getFilterCount(filters: Filters, keys?: Set<string>): number;
        
    /**
     * @export
     */
    export function generateTreeNodesFromFlatList(list: any[], query: string, idField: string, labelField: string, parentIdField: string, pathField: string, generatePath?: boolean, options?: TreeNodeOptions, iconField?: string): TreeNode[];
        
    /**
     *
     * @export
     */
    export function flattenTreeNodesToOriginalFlatList(treeNodes: TreeNode[]): Promise<any[]>;
        
    /**
     * @export
     */
    export function findTreeNodeById(treeNodes: TreeNode[], id: string): Promise<TreeNode | null>;
        
    /**
     * @export
     */
    export function findTreeNodeByIdSync(nodes: ExtendedTreeNode[], nodeId: string): ExtendedTreeNode | undefined;
        
    /**
     * @export
     */
    export function findTreeNodeByPath(treeNodes: TreeNode[], path: string): Promise<TreeNode | null>;
        
    /**
     * @export
     * Process a TreeNode to ExtendedTreeNode
     */
    export function processTreeNode(nodes: ExtendedTreeNode[], node: TreeNode, options?: ProcessingOptions): Promise<ExtendedTreeNode>;
        
    /**
     * Calculate drop position based on mouse cursor position relative to node-head
     * Uses real mouse Y coordinate for accurate, scroll-aware positioning
     *
     * Node-head is always at top of container (children are in node-body below)
     *
     * For reordering (same parent):
     * - Top 50%: 'before' (insert as sibling above)
     * - Bottom 50%: 'after' (insert as sibling below)
     *
     * For hierarchy changes (different parent):
     * - Top 30%: 'before' (insert as sibling above)
     * - Middle 30-60%: 'child' (add as last child)
     * - Bottom 40%: 'after' (insert as sibling below)
     *
     * @export
     * @param mouseY - Mouse Y coordinate (clientY from pointer event)
     * @param targetRect - Rectangle of the target node container (from over.rect)
     * @param isReordering - Whether this is a reordering operation (same parent) vs hierarchy change
     * @returns DropPosition or null if mouse is outside node-head area
     */
    export function calculateDropPosition(mouseY: number, targetRect: { top: number; left: number; bottom: number; right: number; width: number; height: number }, isReordering?: boolean): DropPosition | null;
        
    /**
     * Parse a potentially prefixed node ID using regex
     * Returns tree identifier and clean node ID in one operation
     *
     * @export
     * @param id - Either prefixed (e.g., "left___node-1") or unprefixed (e.g., "node-1")
     * @returns {tree: 'left' | 'right' | null, nodeId: string}
     *
     * @example
     * parsePrefixedId("left___folder-1")   // { tree: 'left', nodeId: 'folder-1' }
     * parsePrefixedId("right___item-5")    // { tree: 'right', nodeId: 'item-5' }
     * parsePrefixedId("unprefixed-node")   // { tree: null, nodeId: 'unprefixed-node' }
     */
    export function parsePrefixedId(id: string): { tree: Tree | null; nodeId: string };
        
    /**
     * Publish a message to a channel
     *
     * @example
     * ```
     * publishMessage(props.uxpContext, "visitor-arrival", JSON.stringify({ visitorId: 123 }));
     * ```
     *
     * @export
     */
    export const publishMessage: IPublishMessage;
        
    /**
     * Save localization messages (handles both create and update).
     * This matches the onSave prop signature in LocalisationForm.
     * @export
     */
    export function saveLocalizations(uxpContext: IContextProvider, code: string, messages: LocalizationMessage[]): Promise<{ success: boolean, error?: string }>;
        
    /**
     * @export
     * Register a floating action section
     *
     * section - Section configuration
     *
     * @example
     * ```typescript
     * registerFloatingActionSection({
     *   id: 'page',
     *   type: 'page',
     *   icon: 'phl pencil',
     *   label: 'Edit Page',
     *   isActive: isEditing,
     *   onToggle: () => setIsEditing(!isEditing),
     *   render: () => <ButtonComponent ... />
     * });
     * ```
     */
    export function registerFloatingActionSection(section: FloatingActionSection): void;
        
    /**
     * @export
     * Unregister a floating action section
     *
     * @param id - Section ID to remove
     */
    export function unregisterFloatingActionSection(id: string): void;
        
    /**
     * @export
     *
     * Hook to check if a fontawesome icon is ready
     */
    export function useIsFAIconReady(icon: IconProp): boolean;
        
    /**
     * This helps you to subscribe to a custom event dispatched through the eventDispatcher
     *
     * @example
     * ```
     *  useEventSubscriber(props.instanceId, "my-custom-event", (data?: any) => {
     *      console.log(data?.message)
     *  })
     * ```
     *
     * @export
     */
    export const useEventSubscriber: IEventSubscriber;
        
    /**
     * @export
     * event handler for multiple events
     * either can pass a simple configuration with array of event names and a shared callback
     * of a pull config with different callback for each event.
     */
    export function useMultiEventSubscriber(instanceId: string, config: MultiEventSubscriberConfig): void;
        
    /**
     * The react hook for showing/hiding loading feedback overlay
     *
     * @example Basic usage
     * ```tsx
     * const loading = useLoadingFeedback();
     *
     * loading.show({ message: 'Processing...' });
     * // ... do work
     * loading.hide();
     * ```
     *
     * @example With progress
     * ```tsx
     * const loading = useLoadingFeedback();
     *
     * loading.show({ message: 'Uploading...', progress: 0 });
     * // ... update progress
     * loading.update({ progress: 50 });
     * // ... complete
     * loading.hide();
     * ```
     *
     * @example With async/await
     * ```tsx
     * const loading = useLoadingFeedback();
     *
     * const handleSave = async () => {
     *     loading.show({ message: 'Saving...' });
     *     try {
     *         await saveData();
     *     } finally {
     *         loading.hide();
     *     }
     * }
     * ```
     *
     * @export
     */
    export function useLoadingFeedback(): ILoadingFeedbackResult;
        
    /**
     * @export
     *
     * Hook to check if Phosphor Icons web components are loaded and ready
     *
     * This checks if the @phosphor-icons/webcomponents library has been loaded
     * by verifying if custom elements are defined.
     *
     * @example
     * ```tsx
     * const ready = useIsPHIconReady('house');
     * if (!ready) return <SkeletonLoader />;
     * return <ph-house weight="bold" />;
     * ```
     */
    export function useIsPHIconReady(iconName?: string): boolean;
        
    /**
     * @export
     * A custom React hook that retrieves the UXPContext, throwing an error if used outside a UXPContextProvider.
     *
     * @returns The UXPContext object.
     * @throws Error if the hook is used outside a UXPContextProvider.
     *
     * @example
     * ```
     * import { UXPContext } from './Context';
     * import { useUXPContext } from './useUXPContext';
     *
     * const MyComponent = () => {
     *   const context = useUXPContext();
     *   return <div>{context.$L('hello')}</div>;
     * };
     *
     * ```
     *
     * @example
     * ```
     * import { UXPContext } from './Context';
     * import { useUXPContext } from './useUXPContext';
     *
     * const MyComponent = () => {
     *   const { $L, direction } = useUXPContext();
     *   return (
     *     <div style={{ direction: direction }}>
     *       <p>{ $L('welcome_message') }</p>
     *     </div>
     *   );
     * };
     * ```
     */
    export function useUXPContext(): IContextProvider;
        
    /**
     * This hook allows you to popup notifications on the bottom right corner of the screen
     * (also known as toasts)
     *
     *  @example
     * ```
     *  let toast = useToast();
     *  toast.success("Item has been added");
     * ```
     *
     * @example
     * ```
     *  let toast = useToast();
     *  toast.success({title:'Info',content:'Item has been added'});
     * ```
     *
     * @example
     * ```
     *  let toast = useToast();
     *  toast.error({title:'Failed!',content:'Failed to add item',closeAfter:5,onClose:()=>{console.log('toast closed')}});
     * ```
     *
     * @example
     * With custom icon
     * ```
     *  let toast = useToast();
     *  toast.success({icon: "path/to/your/image", content: "Toast with custom icon"});
     * ```
     *
     * @example
     * Custom toast example
     * ```
     *  let toast = useToast();
     *  toast.custom({content: "Custom Toast message"});
     * ```
     *
     * @example
     * Custom toast example
     * ```
     *  let toast = useToast();
     *  toast.custom({
     *      content: () => <div className="content">
     *              You custom toast content
     *          </div>
     *  );
     * ```
     *
     *
     * @export
     */
    export function useToast(): IToastResult;
        
    /**
     * @export
     * A custom React hook that detects if a value has changed using deep comparison.
     * Returns true when the value changes from the previous render, false otherwise.
     *
     * @param value - The value to monitor for changes, can be of any type.
     * @returns A boolean indicating whether the value has changed since the last render.
     *
     * @example
     * ```
     * const MyComponent = () => {
     *   const [count, setCount] = useState(0);
     *   const hasCountChanged = useHasChanged(count);
     *
     *   return (
     *     <div>
     *       <p>Count: {count}</p>
     *       <p>Has changed: {hasCountChanged.toString()}</p>
     *       <button onClick={() => setCount(count + 1)}>Increment</button>
     *     </div>
     *   );
     * };
     * ```
     *
     * @example
     * ```
     * const MyComponent = () => {
     *   const [user, setUser] = useState({ name: 'John', age: 30 });
     *   const hasUserChanged = useHasChanged(user);
     *
     *   return (
     *     <div>
     *       <p>User: {JSON.stringify(user)}</p>
     *       <p>Has changed: {hasUserChanged.toString()}</p>
     *       <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
     *         Update Age
     *       </button>
     *     </div>
     *   );
     * };
     * ```
     */
    export function useHasChanged<T>(value: T): boolean;
        
    /**
     * A custom hook that returns a debounced value and a function to update it programmatically.
     *
     * @example
     * ```
     * const [debounced, updateValue] = useDebounceAdvanced(query);
     * ```
     *
     * @example
     * ```
     * const [debounced, updateValue, immediateUpdate] = useDebounceAdvanced(query, 500);
     * immediateUpdate('set without debounce delay');
     * ```
     * @export
     */
    export const useDebounce: DebounceHook;
        
    /**
     * @export
     * Generic hook for executing safe context methods with loading state, debounce, and auto-execution.
     *
     * Returns { loading, data, error, errorMessage, execute, refresh, reset }
     * Handle success/error in your component using the returned data/error values.
     *
     * @example
     * // Auto-execute on mount - state (loading, data, error) updates automatically
     * const { loading, data, error } = useExecuteRequest({
     *   type: 'service',
     *   app: 'UXP',
     *   service: 'Portal:all'
     * });
     *
     * @example
     * // Auto-execute when dependencies change
     * const { loading, data, error } = useExecuteRequest({
     *   type: 'action',
     *   model: 'User',
     *   action: 'GetDetails',
     *   parameters: { id: userId }
     * }, { dependencies: [userId] });
     *
     * @example
     * // Use service configuration from services.ts (recommended)
     * const { loading, data, error } = useExecuteRequest(NavigationServices.getAll());
     *
     * @example
     * // Override config-level extraction/transformation
     * const { data } = useExecuteRequest(
     *   NavigationServices.getAll(),
     *   { extractData: 'customPath' }  // Overrides service-level extractData
     * );
     *
     * @example
     * // Manual execution with promise - handle result yourself (no state update)
     * const { execute } = useExecuteRequest(
     *   RouteServices.create({}),
     *   { autoExecute: false }
     * );
     * const result = await execute({ Route: '/custom', PageID: 'page-1' });
     * if (result.error) { //handle error  }
     * else {  //use result.data  }
     *
     * @example
     * // Manual execution with state update
     * const { loading, data, error, execute } = useExecuteRequest(
     *   RouteServices.update('', {}),
     *   { autoExecute: false }
     * );
     * await execute({ Key: '123', Route: '/new' }, true); // Pass true to update state
     *
     * @example
     * // UI refresh with debounce
     * const { loading, data, refresh } = useExecuteRequest(
     *   PortalServices.getAll(),
     *   { debounce: 500 }
     * );
     * <button onClick={() => refresh()}>Refresh</button> // Updates state with debounce
     * <button onClick={() => refresh(true)}>Refresh Now</button> // Updates state immediately
     *
     * @example
     * // Polling - executes immediately on mount, then every 5 seconds
     * const { loading, data, error } = useExecuteRequest(
     *   MonitoringServices.getMetrics(),
     *   { polling: 5000 }
     * );
     * // Manual refresh resets the polling timer
     * <button onClick={() => refresh()}>Refresh Now</button>
     *
     * @example
     * // Callback pattern with dynamic parameters - useful for ObjectSearchComponent
     * const { execute } = useExecuteRequest(
     *   LocationServices.getAll({ page: 1, pageSize: 50 }),
     *   { autoExecute: false }
     * );
     *
     * const getAll = async (page, pageSize, query, filters) => {
     *   const result = await execute({ page, pageSize, query, ...filters });
     *   return { items: result.data || [] };
     * }
     */
    export function useExecuteRequest<T = any>(config: ExecuteConfig, options?: UseExecuteOptions<T> = {}): UseExecuteResult<T>;
        
    /**
     * @export
     * Lightweight callback wrapper around `useExecuteRequest`.
     *
     * Returns a stable async function that executes the provided config
     * **without triggering loading/data/error state updates**.
     *
     * Useful for:
     * - Passing execution callbacks to components (e.g. search, autocomplete, tables)
     * - Dynamic parameter execution
     * - One-off requests where local state management is not needed
     *
     * Internally:
     * - Forces `autoExecute = false`
     * - Disables debounce and polling
     * - Delegates execution to `useExecuteRequest`
     *
     * @example
     * // Callback-style execution (recommended for ObjectSearchComponent)
     * const getLocations = useExecuteRequestCallback(
     *   LocationServices.getAll({ page: 1, pageSize: 50 })
     * );
     *
     * const result = await getLocations({ query: 'Colombo' });
     * return result.data || [];
     *
     * @returns A function that executes the request and returns an ExecutionResult
     */
    export function useExecuteRequestCallback<T = any>(config: ExecuteConfig, options?: Omit<UseExecuteOptions<T>, 'debounbce' | 'autoExecute' | 'polling'>): (param?: any) => Promise<ExecutionResult<T>>;
        
    /**
     * @export
     * A custom React hook that extracts search parameters from the URL using react-router-dom.
     * Handles JSON-encoded values using the toJSON utility. Must be used within a react-router-dom context.
     *
     * @returns A typed object containing the parsed search parameters.
     *
     * @example
     * ```
     * const MyComponent = () => {
     *   const params = useSearchParams<{ name: string; age: string }>();
     *   return <div>Name: {params.name}, Age: {params.age}</div>;
     * };
     *
     * ```
     *
     * @example
     * ```
     * const MyComponent = () => {
     *   const params = useSearchParams<{ user: { name: string; age: number } }>();
     *   return (
     *     <div>
     *       User: {params.user?.name}, Age: {params.user?.age}
     *     </div>
     *   );
     * };
     *
     * ```
     */
    export function useSearchParams<T extends Record<string, any>>(): SearchParams<T>;
        
    /**
     * @export
     * A custom React hook that wraps react-router-dom's useNavigate for typed navigation.
     * Must be used within a react-router-dom context.
     *
     * @returns A CustomNavigateFunction for programmatic navigation.
     *
     * @example
     * ```
     * const MyComponent = () => {
     *   const navigate = useNavigateWrapper();
     *   return <button onClick={() => navigate('/home')}>Go to Home</button>;
     * };
     *
     * ```
     *
     * @example
     * ```
     * const MyComponent = () => {
     *   const navigate = useNavigateWrapper();
     *   return (
     *     <div>
     *       <button onClick={() => navigate('/profile', { state: { userId: 123 } })}>
     *         Go to Profile
     *       </button>
     *       <button onClick={() => navigate(-1)}>Go Back</button>
     *     </div>
     *   );
     * };
     *
     * ```
     */
    export function useNavigateWrapper(): CustomNavigateFunction;
        
    /**
     * @export
     * A custom React hook that retrieves the RouterContext, throwing an error if used outside a RouterContextProvider.
     *
     * @returns The RouterContext object.
     * @throws Error if the hook is used outside a RouterContextProvider.
     *
     * @example
     * ```
     * const MyComponent = () => {
     *   const routerContext = useRouterContext();
     *   return <div>{routerContext.someProperty}</div>;
     * };
     * ```
     *
     * @example
     * ```
     * const MyComponent = () => {
     *   const { someProperty, navigate } = useRouterContext();
     *   return (
     *     <div>
     *       <p>{someProperty}</p>
     *       <button onClick={() => navigate('/dashboard')}>
     *         Go to Dashboard
     *       </button>
     *     </div>
     *   );
     * };
     *
     *
     * ```
     */
    export function useRouterContext(): RouterContextValue;
        
    /**
     * @export
     * A custom React hook that retrieves the AddOnContext, throwing an error if used outside an AddOnProvider.
     *
     * @returns The AddOnContext object containing add-on data and utility functions.
     * @throws Error if the hook is used outside an AddOnProvider.
     *
     * @example
     * ```
     * const MyComponent = () => {
     *   const { addOns, isAddOn } = useAddOns();
     *   return (
     *     <div>
     *       {addOns.map(addOn => (
     *         <p key={addOn.id}>{addOn.title}: {isAddOn(addOn.id) ? 'Add-On' : 'Not an Add-On'}</p>
     *       ))}
     *     </div>
     *   );
     * };
     *
     * ```
     *
     * @example
     * ```
     * const MyComponent = () => {
     *   const { getAddOnDetails, getThunmbNailImagePath } = useAddOns();
     *   const addOn = getAddOnDetails('module-1');
     *   return (
     *     <div>
     *       {addOn && (
     *         <div>
     *           <h2>{addOn.title}</h2>
     *           <img src={getThunmbNailImagePath('module-1')} alt={addOn.title} />
     *         </div>
     *       )}
     *     </div>
     *   );
     * };
     * ```
     */
    export function useAddOns(): AddOnContextType;
        
    /**
     * The react hook for creating alerts and confirm alerts
     *
     * @example
     *
     * ```
     *  alerts.show("Item updated")
     * ```
     *
     *
     * @example
     * ```
     *  alerts.show({title: "Info", content: "Item updated", cancelButtonTitle: "Ok" })
     * ```
     *
     *
     * @example
     * ```
     * Auto close an alert (disabled by default)
     *
     * alerts.show({content: 'Item updated', autoClose: true, closeAfter: 2000})
     * ```
     *
     *
     *
     * @example
     * ```
     *  wait until alert is closed
     *
     *  await alerts.show("Item updated")
     *  ... execute the rest
     * ```
     *
     *
     * @example
     * ```
     *  let hasConfirmed = await alerts.confirm("Are you sure?")
     *
     *  if(hasConfimed) {
     *      ... execute the rest
     *  }
     *
     * ```
     *
     *
     * @example
     * ```
     *  alerts.confirm("Are you sure?")
     * .then(hasConfirmed => {
     *      if(hasConfirmed) {
     *          ... execute the rest
     *      }
     * })
     * ```
     *
     * @export
     */
    export function useAlert(): IAlertResult;
        
    /**
     * @export
     * Custom hook for streaming data to a CSV file with progress tracking and cancellation support
     *
     * @example
     * ```tsx
     * const { exportData, abortExport } = useExportData();
     *
     * // Start export
     * <button onClick={() => exportData({
     *   data: async (page, pageSize) => ({
     *     items: await fetchData(page, pageSize),
     *     totalCount: await fetchTotal()
     *   }),
     *   total: async () => await fetchTotal(),
     *   columns: [
     *     { id: 'name', label: 'Name' },
     *     { id: 'date', label: 'Date', formatter: (value) => format(new Date(value), 'yyyy-MM-dd') }
     *   ],
     *   pageSize: 100,
     *   fileName: 'data_export',
     *   showNamePrompt: true,
     *   onProgress: (progress) => console.log(`Progress: ${progress.progress}%`)
     * })}>Export Data</button>
     *
     * // Cancel export
     * <button onClick={abortExport}>Cancel Export</button>
     * ```
     */
    export function useExportData(): ExportResponse;
        
    /**
     * This hook is used to set state for multiple values in a dictionary.
     * It returns 4 items -  a getter, setter and the traditional object and a setter for the object.
     * The first getter and setter are to read and write to individual properties.
     *
     * @export
     */
    export const useFields: FieldsHook;
        
    /**
     * This hook allows you to check if the widget has resized.
     * You can update the widget if necessary (if has resized)
     *
     *
     * @example
     * To check if widget has been resized
     * ```
     *  let hasResized = useResizeEffect(props.instanceId);
     * ```
     * @export
     */
    export const useResizeEffect: ResizeEffectHook;
        
    /**
     * This hook is used to update the default props of a given widget instance.
     * This returns a function  (instanceId : string, props : any ) => void
     * instanceId: widget instance. can access this from props of the widget
     * props: default props that you ant to set (
     *      NOTE: you have to specify all the default props here
     *      NOTE: you can pass default props when registering a widget
     * )
     *
     * This function will update the default props. But it won't re-render your widget. you have to handle that manually (maybe for now :))
     * @export
     */
    export const useUpdateWidgetProps: IUseUpdateWidgetProps;
        
    /**
     * This hook is used to subscribe to a channel on the message bus.
     * The hook takes care of initialization and unsubscribing after the component unmounts
     *
     * @export
     * @param context The Lucy environment context
     * @param channel The channel you want to subscribe to
     * @param callback The function to call when a message comes on the specified channel
     *
     * @example
     * ```
     *
     *  useMessageBus(props.uxpContext, "visitor-arrival", (payload, channel) => {
     *      getVisitorArrivals();
     *      Toast.info("Your visitor is here")
     *  });
     * ```
     *
     */
    export const useMessageBus: IMessageBusHook;
        
    /**
     * This is similar to useEffect hook in react.
     * This is more like a advanced version of react useEffect. Here callback function get executed not only when the dependencies changes, but in regular intervals.
     * Also you can push a message through message bus to trigger the callback
     *
     * @export
     *
     * @example
     * ```
     * useEffectWithPolling(props.uxpContext, "visitor-arrivals", 5000, getVisitors, [props])
     * ```
     */
    export const useEffectWithPolling: IUseEffectWithPolling;
        
    /**
     * @export
     * hook for refresh counter
     * this can be used to force re-render a component.
     */
    export function useCounter(): UseCounterResponse;
        
    /**
     * @export
     * Low-level hook for managing widget/UI cache with localStorage persistence
     * Single source of truth for widget data across the application
     */
    export function useWidgetCache(options?: UseWidgetCacheOptions = {}): UseWidgetCacheReturn;
        
    /**
     * @export
     * Public API hook for accessing widgets and UIs throughout the application
     *
     * Use this hook when you need to:
     * - Get list of all widgets or UIs
     * - Look up a widget/UI by ID (e.g., for configuration forms)
     * - Reload widget/UI data
     *
     * For widget drawer specific features (filtering, pagination, etc.) use useDrawerItems instead
     *
     * @example
     * ```typescript
     * const { widgets, findWidgetById, reload, isLoading } = useWidgets()
     *
     * // Get all widgets
     * const allWidgets = widgets
     *
     * // Find specific widget
     * const myWidget = findWidgetById('my-widget-id')
     *
     * // Reload data
     * await reload()
     * ```
     */
    export function useWidgets(options?: UseWidgetCacheOptions = {}): UseWidgetsReturn;
        
    /**
     * @export
     * Hook for formatting dates, times, and datetimes with timezone conversion support.
     *
     * This hook returns a `formatDate` function that you can use to format values
     * depending on the `type` you provide (`date`, `time`, or `datetime`).
     *
     * It automatically applies:
     * - System-defined formats (from context) OR your custom format strings.
     * - Timezone conversion (site, browser, or custom offset).
     * - Optional seconds in time outputs.
     *
     * @example
     * ```tsx
     * // Import the hook and get the formatDate function
     * import { useFormatters } from '@/hooks/useFormatters';
     *
     * const { formatDate } = useFormatters();
     * const now = new Date();
     * ```
     *
     * @example
     * ```tsx
     * // Format as date only
     * const date = formatDate(now, { type: 'date' });
     * ```
     *
     * @example
     * ```tsx
     * // Format as time only
     * const time = formatDate(now, { type: 'time' });
     * ```
     *
     * @example
     * ```tsx
     * // Format as date + time
     * const dateTime = formatDate(now, { type: 'datetime' });
     * ```
     *
     * @example
     * ```tsx
     * // Custom format string (date-fns format)
     * const custom = formatDate(now, { type: 'datetime', format: 'EEEE, MMMM do yyyy HH:mm' });
     * ```
     *
     * @example
     * ```tsx
     * // Include seconds in time format
     * const withSeconds = formatDate(now, { type: 'time', includeSeconds: true });
     * ```
     *
     * @example
     * ```tsx
     * // Convert using browser timezone
     * const browserTime = formatDate(now, {
     *   type: 'datetime',
     *   timezone: { useBrowserTime: true }
     * });
     * ```
     *
     * @example
     * ```tsx
     * // Convert using a specific offset (e.g., UTC+5:30 = 19800 seconds)
     * const specificOffset = formatDate(now, {
     *   type: 'datetime',
     *   timezone: { offset: 19800 }
     * });
     * ```
     */
    export function useFormatters(): { formatDate: (date: string | Date, options: ExtendedFormatOptions) => string; };
        
    /**
     * @export
     * Returns a fucntion (logout) that will trigger the logout process
     */
    export function useLogout(): () => Promise<void>;
        
    /**
     * @export
     * Hook to register a pluggable view and get a render function
     *
     * Simplifies pluggable view usage by eliminating duplication:
     * - Registers the view declaration once
     * - Returns a render function for usage
     *
     * @param declaration - View declaration without props (props passed to render function)
     * @returns Render function that accepts props and returns PluggableView JSX
     *
     * @example
     * ```typescript
     * const renderOtherDetails = usePluggableView({
     *     viewId: `${App}/details/other`,
     *     parentViewId: `${App}/details`,
     *     defaultPage: OtherDetails
     * });
     *
     * // Use in render:
     * return (
     *     <div>
     *         {renderOtherDetails({
     *             location: item,
     *             loading,
     *             isPreview
     *         })}
     *     </div>
     * );
     * ```
     */
    export function usePluggableView(declaration: Omit<PluggableViewDeclaration, 'props'>): (props?: Record<string, any>) => React.ReactNode;
        
    /**
     * @export
     * Hook to declare a tab injection for a given objectType.
     *
     * Registration is tied to the component lifecycle: mount → injection appears;
     * unmount → injection is removed.
     *
     * The `id` must be fully-qualified: `"bundleId/tabId"` (e.g. `"iviva-asset-app/location-assets"`).
     * The `objectType` is normalised to lowercase automatically.
     *
     * @example
     * ```typescript
     * function AssetAppRoot() {
     *     useTabInjection({
     *         id: 'iviva-asset-app/location-assets',
     *         objectType: 'location',
     *         name: 'Assets',
     *         icon: 'fas boxes',
     *         components: [{ componentId: 'iviva-asset-app/asset-list', priority: 1 }],
     *         appRoles: ['assets.viewer']
     *     });
     *     return null;
     * }
     * ```
     */
    export function useTabInjection(declaration: TabInjection): void;
        
    /**
     * @export
     * Widget drawer specific hook for filtering, pagination, and search
     * Uses useWidgetCache internally for data management
     */
    export function useDrawerItems(options: UseDrawerItemsOptions): UseDrawerItemsReturn;
        
    /**
     * @export
     * Custom hook for deleting objects with dependency checking and confirmation dialogs
     *
     * @example
     * ```tsx
     * const deleteAction = useDeleteAction();
     *
     * const handleDelete = async () => {
     *   await deleteAction.delete({
     *     model: 'Location.Location',
     *     key: locationKey,
     *     canHide: true,
     *     onSuccess: (action) => {
     *       if (action === 'delete') {
     *         navigate('/locations');
     *       } else {
     *         window.location.reload();
     *       }
     *     }
     *   });
     * };
     * ```
     */
    export function useDeleteAction(): UseDeleteActionResult;
    
}
