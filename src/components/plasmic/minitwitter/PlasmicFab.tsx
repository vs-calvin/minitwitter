// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vPEKH7ieBw9Sjdb6MYWDd6
// Component: sj3ZyowCADD
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_minitwitter.module.css"; // plasmic-import: vPEKH7ieBw9Sjdb6MYWDd6/projectcss
import sty from "./PlasmicFab.module.css"; // plasmic-import: sj3ZyowCADD/css

export type PlasmicFab__VariantMembers = {};

export type PlasmicFab__VariantsArgs = {};
type VariantPropType = keyof PlasmicFab__VariantsArgs;
export const PlasmicFab__VariantProps = new Array<VariantPropType>();

export type PlasmicFab__ArgsType = {};
type ArgPropType = keyof PlasmicFab__ArgsType;
export const PlasmicFab__ArgProps = new Array<ArgPropType>();

export type PlasmicFab__OverridesType = {
  root?: p.Flex<"a">;
  text?: p.Flex<"div">;
};

export interface DefaultFabProps {
  className?: string;
}

function PlasmicFab__RenderFunc(props: {
  variants: PlasmicFab__VariantsArgs;
  args: PlasmicFab__ArgsType;
  overrides: PlasmicFab__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
      href={"/post" as const}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"+"}
      </div>
    </a>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFab__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFab__VariantsArgs;
    args?: PlasmicFab__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFab__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFab__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFab__ArgProps,
      internalVariantPropNames: PlasmicFab__VariantProps
    });

    return PlasmicFab__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFab";
  } else {
    func.displayName = `PlasmicFab.${nodeName}`;
  }
  return func;
}

export const PlasmicFab = Object.assign(
  // Top-level PlasmicFab renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicFab
    internalVariantProps: PlasmicFab__VariantProps,
    internalArgProps: PlasmicFab__ArgProps
  }
);

export default PlasmicFab;
/* prettier-ignore-end */
