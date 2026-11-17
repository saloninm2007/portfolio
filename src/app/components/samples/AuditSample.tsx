import { Handshake, LineChart, MessagesSquare, Lightbulb, Presentation, KeyRound, Target, UserRound, Map, Search, Film, ListOrdered, Zap, Video } from 'lucide-react';
import { SampleTemplate, type SampleSpec } from './SampleTemplate';

const SPEC: SampleSpec = {
  duration: '2 weeks',
  process: [
    { icon: Handshake, when: 'Day 1', title: 'Kickoff' },
    { icon: LineChart, when: 'Days 2–5', title: 'Read the data' },
    { icon: MessagesSquare, when: 'Days 6–8', title: 'Talk to users' },
    { icon: Lightbulb, when: 'Day 9', title: 'Find the why' },
    { icon: Presentation, when: 'Day 10', title: 'Walkthrough' },
  ],
  need: [
    { icon: KeyRound, text: 'Product & analytics access' },
    { icon: Film, text: 'Session recordings' },
    { icon: Target, text: 'The metric to move' },
    { icon: UserRound, text: 'One point person' },
    { icon: MessagesSquare, text: '5–6 users to talk to' },
  ],
  get: [
    { icon: Map, text: 'Drop-off map' },
    { icon: Search, text: 'Behaviour findings' },
    { icon: Film, text: 'Annotated clips' },
    { icon: ListOrdered, text: 'Prioritised fixes' },
    { icon: Zap, text: 'Quick wins' },
    { icon: Video, text: 'Recorded walkthrough' },
  ],
  tag: 'Outside-in audit · Shopify',
  statement: {
    lead: 'A small seller signs up for Shopify, excited to start selling online.',
    question: 'How many get to a live store with their first product, and where do the rest stall?',
  },
  facts: [
    ['Product', 'Shopify: e-commerce platform for independent sellers'],
    ['Journey', 'Sign-up → first product → store live'],
    ['Lens', 'My own store journey, 5 seller walkthroughs, public reviews'],
    ['What I measure', 'Time to a live store, and where sellers hesitate'],
  ],
  slots: [
    { title: 'Drop-off map', hint: 'Every step from sign-up to a live store, with where sellers slow down or stall.', span: 'lg:col-span-5' },
    { title: 'Key findings', hint: '3 to 5 findings. For each: what sellers do, why, and the evidence.', span: 'lg:col-span-7' },
    { title: 'Annotated screens', hint: 'The 2 or 3 screens where sellers hesitate, marked up.', span: 'lg:col-span-4' },
    { title: 'Prioritised fixes', hint: 'Every fix ranked by impact and effort.', span: 'lg:col-span-4' },
    { title: 'Quick wins', hint: '2 or 3 small changes that could ship next sprint.', span: 'lg:col-span-4' },
  ],
};

export function AuditSample() {
  return <SampleTemplate spec={SPEC} />;
}
