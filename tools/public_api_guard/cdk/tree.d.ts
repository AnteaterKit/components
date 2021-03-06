export declare abstract class BaseTreeControl<T, K = T> implements TreeControl<T, K> {
    dataNodes: T[];
    expansionModel: SelectionModel<K>;
    getChildren: (dataNode: T) => (Observable<T[]> | T[] | undefined | null);
    getLevel: (dataNode: T) => number;
    isExpandable: (dataNode: T) => boolean;
    trackBy?: (dataNode: T) => K;
    protected _trackByValue(value: T | K): K;
    collapse(dataNode: T): void;
    collapseAll(): void;
    collapseDescendants(dataNode: T): void;
    expand(dataNode: T): void;
    abstract expandAll(): void;
    expandDescendants(dataNode: T): void;
    abstract getDescendants(dataNode: T): T[];
    isExpanded(dataNode: T): boolean;
    toggle(dataNode: T): void;
    toggleDescendants(dataNode: T): void;
}

export declare const CDK_TREE_NODE_OUTLET_NODE: InjectionToken<{}>;

export declare class CdkNestedTreeNode<T> extends CdkTreeNode<T> implements AfterContentInit, DoCheck, OnDestroy, OnInit {
    protected _children: T[];
    protected _differs: IterableDiffers;
    protected _elementRef: ElementRef<HTMLElement>;
    protected _tree: CdkTree<T>;
    nodeOutlet: QueryList<CdkTreeNodeOutlet>;
    constructor(_elementRef: ElementRef<HTMLElement>, _tree: CdkTree<T>, _differs: IterableDiffers);
    protected _clear(): void;
    ngAfterContentInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    protected updateChildrenNodes(children?: T[]): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkNestedTreeNode<any>, "cdk-nested-tree-node", ["cdkNestedTreeNode"], { "role": "role"; "disabled": "disabled"; "tabIndex": "tabIndex"; }, {}, ["nodeOutlet"]>;
    static ɵfac: i0.ɵɵFactoryDef<CdkNestedTreeNode<any>, never>;
}

export declare class CdkTree<T> implements AfterContentChecked, CollectionViewer, OnDestroy, OnInit {
    _nodeDefs: QueryList<CdkTreeNodeDef<T>>;
    _nodeOutlet: CdkTreeNodeOutlet;
    get dataSource(): DataSource<T> | Observable<T[]> | T[];
    set dataSource(dataSource: DataSource<T> | Observable<T[]> | T[]);
    trackBy: TrackByFunction<T>;
    treeControl: TreeControl<T>;
    viewChange: BehaviorSubject<{
        start: number;
        end: number;
    }>;
    constructor(_differs: IterableDiffers, _changeDetectorRef: ChangeDetectorRef);
    _getNodeDef(data: T, i: number): CdkTreeNodeDef<T>;
    insertNode(nodeData: T, index: number, viewContainer?: ViewContainerRef, parentData?: T): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    renderNodeChanges(data: T[] | ReadonlyArray<T>, dataDiffer?: IterableDiffer<T>, viewContainer?: ViewContainerRef, parentData?: T): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CdkTree<any>, "cdk-tree", ["cdkTree"], { "dataSource": "dataSource"; "treeControl": "treeControl"; "trackBy": "trackBy"; }, {}, ["_nodeDefs"], never>;
    static ɵfac: i0.ɵɵFactoryDef<CdkTree<any>, never>;
}

export declare class CdkTreeModule {
    static ɵinj: i0.ɵɵInjectorDef<CdkTreeModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<CdkTreeModule, [typeof i1.CdkNestedTreeNode, typeof i2.CdkTreeNodeDef, typeof i3.CdkTreeNodePadding, typeof i4.CdkTreeNodeToggle, typeof i5.CdkTree, typeof i5.CdkTreeNode, typeof i6.CdkTreeNodeOutlet], never, [typeof i1.CdkNestedTreeNode, typeof i2.CdkTreeNodeDef, typeof i3.CdkTreeNodePadding, typeof i4.CdkTreeNodeToggle, typeof i5.CdkTree, typeof i5.CdkTreeNode, typeof i6.CdkTreeNodeOutlet]>;
}

export declare class CdkTreeNode<T> implements DoCheck, FocusableOption, OnDestroy, OnInit {
    protected _data: T;
    _dataChanges: Subject<void>;
    protected _destroyed: Subject<void>;
    protected _elementRef: ElementRef<HTMLElement>;
    protected _isAriaExpanded: boolean;
    protected _tree: CdkTree<T>;
    get data(): T;
    set data(value: T);
    get isExpanded(): boolean;
    get level(): number;
    get role(): 'treeitem' | 'group';
    set role(_role: 'treeitem' | 'group');
    constructor(_elementRef: ElementRef<HTMLElement>, _tree: CdkTree<T>);
    protected _setRoleFromData(): void;
    focus(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    static mostRecentTreeNode: CdkTreeNode<any> | null;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkTreeNode<any>, "cdk-tree-node", ["cdkTreeNode"], { "role": "role"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<CdkTreeNode<any>, never>;
}

export declare class CdkTreeNodeDef<T> {
    template: TemplateRef<any>;
    when: (index: number, nodeData: T) => boolean;
    constructor(template: TemplateRef<any>);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkTreeNodeDef<any>, "[cdkTreeNodeDef]", never, { "when": "cdkTreeNodeDefWhen"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<CdkTreeNodeDef<any>, never>;
}

export declare class CdkTreeNodeOutlet {
    _node?: any;
    viewContainer: ViewContainerRef;
    constructor(viewContainer: ViewContainerRef, _node?: any);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkTreeNodeOutlet, "[cdkTreeNodeOutlet]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<CdkTreeNodeOutlet, [null, { optional: true; }]>;
}

export declare class CdkTreeNodeOutletContext<T> {
    $implicit: T;
    count?: number;
    index?: number;
    level: number;
    constructor(data: T);
}

export declare class CdkTreeNodePadding<T> implements OnDestroy {
    _indent: number;
    _level: number;
    get indent(): number | string;
    set indent(indent: number | string);
    indentUnits: string;
    get level(): number;
    set level(value: number);
    constructor(_treeNode: CdkTreeNode<T>, _tree: CdkTree<T>,
    _renderer: Renderer2, _element: ElementRef<HTMLElement>, _dir: Directionality);
    _paddingIndent(): string | null;
    protected _setIndentInput(indent: number | string): void;
    protected _setLevelInput(value: number): void;
    _setPadding(forceChange?: boolean): void;
    ngOnDestroy(): void;
    static ngAcceptInputType_level: NumberInput;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkTreeNodePadding<any>, "[cdkTreeNodePadding]", never, { "level": "cdkTreeNodePadding"; "indent": "cdkTreeNodePaddingIndent"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<CdkTreeNodePadding<any>, [null, null, null, null, { optional: true; }]>;
}

export declare class CdkTreeNodeToggle<T> {
    protected _recursive: boolean;
    protected _tree: CdkTree<T>;
    protected _treeNode: CdkTreeNode<T>;
    get recursive(): boolean;
    set recursive(value: boolean);
    constructor(_tree: CdkTree<T>, _treeNode: CdkTreeNode<T>);
    _toggle(event: Event): void;
    static ngAcceptInputType_recursive: BooleanInput;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkTreeNodeToggle<any>, "[cdkTreeNodeToggle]", never, { "recursive": "cdkTreeNodeToggleRecursive"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<CdkTreeNodeToggle<any>, never>;
}

export declare class FlatTreeControl<T, K = T> extends BaseTreeControl<T, K> {
    getLevel: (dataNode: T) => number;
    isExpandable: (dataNode: T) => boolean;
    options?: FlatTreeControlOptions<T, K> | undefined;
    constructor(getLevel: (dataNode: T) => number, isExpandable: (dataNode: T) => boolean, options?: FlatTreeControlOptions<T, K> | undefined);
    expandAll(): void;
    getDescendants(dataNode: T): T[];
}

export interface FlatTreeControlOptions<T, K> {
    trackBy?: (dataNode: T) => K;
}

export declare function getTreeControlFunctionsMissingError(): Error;

export declare function getTreeControlMissingError(): Error;

export declare function getTreeMissingMatchingNodeDefError(): Error;

export declare function getTreeMultipleDefaultNodeDefsError(): Error;

export declare function getTreeNoValidDataSourceError(): Error;

export declare class NestedTreeControl<T, K = T> extends BaseTreeControl<T, K> {
    getChildren: (dataNode: T) => (Observable<T[]> | T[] | undefined | null);
    options?: NestedTreeControlOptions<T, K> | undefined;
    constructor(getChildren: (dataNode: T) => (Observable<T[]> | T[] | undefined | null), options?: NestedTreeControlOptions<T, K> | undefined);
    protected _getDescendants(descendants: T[], dataNode: T): void;
    expandAll(): void;
    getDescendants(dataNode: T): T[];
}

export interface NestedTreeControlOptions<T, K> {
    trackBy?: (dataNode: T) => K;
}

export interface TreeControl<T, K = T> {
    dataNodes: T[];
    expansionModel: SelectionModel<K>;
    readonly getChildren: (dataNode: T) => Observable<T[]> | T[] | undefined | null;
    readonly getLevel: (dataNode: T) => number;
    readonly isExpandable: (dataNode: T) => boolean;
    collapse(dataNode: T): void;
    collapseAll(): void;
    collapseDescendants(dataNode: T): void;
    expand(dataNode: T): void;
    expandAll(): void;
    expandDescendants(dataNode: T): void;
    getDescendants(dataNode: T): any[];
    isExpanded(dataNode: T): boolean;
    toggle(dataNode: T): void;
    toggleDescendants(dataNode: T): void;
}
