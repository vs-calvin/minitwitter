import * as React from "react";
import {
  PlasmicFeed,
  DefaultFeedProps,
} from "./plasmic/minitwitter/PlasmicFeed";
import { PostEntry } from "../model";
import Post from "./Post";
import moment from "moment";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface FeedProps extends Omit<DefaultFeedProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultFeedProps altogether and have
// total control over the props for your component.
export interface FeedProps extends DefaultFeedProps {
  children?: never;
  entries: PostEntry[];
}

function Feed_({ entries, ...rest }: FeedProps, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicFeed to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicFeed are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all FeedProps here, but feel free
  // to do whatever works for you.

  // return <PlasmicFeed root={{ ref }} {...entries} />;

  return (
    <PlasmicFeed
      {...rest}
      postList={{
        children: entries.map((entry) => (
          <Post timestamp={moment(entry.createdAt).fromNow()}>
            {entry.content}
          </Post>
        )),
      }}
    />
  );
}

const Feed = React.forwardRef(Feed_);
export default Feed;
