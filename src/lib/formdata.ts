interface Option {
  value: number;
  description: string;
  criteria: string;
}

export const TYPE: Option[] = [
  {
    value: 0,
    description: 'Small Dog',
    criteria:
      'Any dog less than 26 lbs. These dogs should be automatically made Level One regardless of total score',
  },
  {
    value: 1,
    description: 'Highly desirable appearance',
    criteria: 'Dog is highly desirable because of breed/appearance',
  },
  {
    value: 2,
    description: 'Medium Dog',
    criteria: 'Dogs weighting 26 - 59 lbs.',
  },
  {
    value: 3,
    description: 'Large Dog',
    criteria: 'Dogs weighing 60+ lbs. Pitbull type dog.',
  },
];

export const AGE: Option[] = [
  {
    value: 0,
    description: 'Puppy',
    criteria: '6 months old or less',
  },
  {
    value: 1,
    description: 'Teenager',
    criteria: '6 months - 1 year old',
  },
  {
    value: 2,
    description: 'Adult',
    criteria: '1-7 years old',
  },
  {
    value: 3,
    description: 'Senior',
    criteria: '8+ years old',
  },
];

export const PEOPLE: Option[] = [
  {
    value: 0,
    description: 'Friendly',
    criteria: 'Friendly with all people and kids, approaches with no fear',
  },
  {
    value: 1,
    description: 'Shy',
    criteria:
      'Nervous or shy with new people. May approach slowly or show appeasement behaviors but warms up quickly',
  },
  {
    value: 2,
    description: 'Selective',
    criteria:
      'More reserved with people, avoiding interactions and taking longer to warm up. Does not do well with children or adult-only home preferred',
  },
  {
    value: 3,
    description: 'Stranger-Danger',
    criteria:
      'Does not do well with new people. May be extremely reactive or fearful, not wanting to engage at all. Has a bite history involving strangers',
  },
];

export const DOGS: Option[] = [
  {
    value: 0,
    description: 'Friendly',
    criteria: 'Good with all dogs',
  },
  {
    value: 1,
    description: 'Shy',
    criteria: 'Nervous with new dogs but tolderant. Eventually opens up and does well.',
  },
  {
    value: 1,
    description: 'History',
    criteria: 'No history with other dogs',
  },
  {
    value: 2,
    description: 'Selective',
    criteria:
      'Does not do well with all dogs, may prefer only certain dogs or specific gender or size',
  },
  {
    value: 3,
    description: 'Offensive/Single - Dog Only',
    criteria:
      'Cannot be with other dogs. - Has a distory of seeking out other dogs to fight/displays offensive behaviors. - Has killed or caused serious damage to another dog',
  },
];

export const HANDLEABILITY: Option[] = [
  {
    value: 0,
    description: 'Easy',
    criteria: 'Easy to walk and maneuver in/out of kennel. No issues with handling.',
  },
  {
    value: 1,
    description: 'Mildly challenging',
    criteria:
      'Moderately high energy/excitable. May jump, become mildly mouthy when leashing, may attempt to door dash, may pull on leash.',
  },
  {
    value: 2,
    description: 'Challenging to handle',
    criteria:
      'Very high energy. Leash climbs, flight risk or minimal leash experience. Mouthiness may break skin/leave marks. Harder to settle; may not be very motivated by treats or toys. Pulls hard on leash. Reactive to new people/animals on walks. Displays barrier reactivity to animals or people; may redirect.',
  },
  {
    value: 3,
    description: 'Experienced handler only',
    criteria:
      'Requires experienced handlers only. May have bite history surrounding touch or handling sensitivities.',
  },
];

export const KENNEL_PRESENTATION: Option[] = [
  {
    value: 0,
    description: 'Friendly Greeter',
    criteria: 'Loose, wiggly body language. Excited for people to approach.',
  },
  {
    value: 1,
    description: 'Shy/Avoidant',
    criteria:
      'Resistant to approach kennel front. Hiding. Not wanting to come out of kennel.',
  },
  {
    value: 2,
    description: 'Messy',
    criteria: 'May often paint or destroy items in kennel.',
  },
  {
    value: 3,
    description: 'Severe Barrier Reactive',
    criteria: 'Jumping, growling, showing teeth. Spinning.',
  },
];

export const BITE_HISTORY: Option[] = [
  {
    value: 0,
    description: 'No bites',
    criteria: 'Has no known bite history.',
  },
  {
    value: 1,
    description: 'Level 2 bite history',
    criteria:
      'Has bitten but not broken skin. Has bitten and scraped/nicked skin with no punctures.',
  },
  {
    value: 2,
    description: 'Level 3 bite history',
    criteria: 'Has bitten and broken skin - single bite with shallow wounds.',
  },
  {
    value: 2,
    description: 'Over-Arousal',
    criteria:
      'Has had multiple bites or bite incidents that have broken skin due to over-arousal/playful mouthiness.',
  },
  {
    value: 3,
    description: 'Level 4 bite history',
    criteria:
      'Single bite with deep wounds; requires medical attention or stitches. Multiple bites; latching; shaking.',
  },
  {
    value: 4,
    description: 'Multiple incidents',
    criteria: 'Multiple bite incidents.',
  },
];

export const RETURNS: Option[] = [
  {
    value: 0,
    description: 'None/People Based',
    criteria:
      'Has not been returned from adoption. Has been returned due to person incompatibilities (e.g. moving, employment issues, etc.).',
  },
  {
    value: 1,
    description: 'One Return',
    criteria:
      'Has been returned once for pet incompatibilities (e.g. over-arousal, conflicts with animals in house, destructiveness, etc.).',
  },
  {
    value: 2,
    description: 'Two Returns',
    criteria:
      'Has been returned twice for pet incompatibilities (e.g. over-arousal, conflicts with animals in house, destructiveness, etc.).',
  },
  {
    value: 3,
    description: '3+ Returns',
    criteria:
      'Has been returned three or more times for pet incompatibilities (e.g. over-arousal, conflicts with animals in house, destructiveness, etc.).',
  },
];

export const IN_HOME: Option[] = [
  {
    value: 0,
    description: 'No known issues',
    criteria:
      'Does not have information on behavior in home. Does great in home environment (no known issues/concerns).',
  },
  {
    value: 1,
    description: 'Mild Behavior Concerns',
    criteria:
      'Some potty accidents in the home or boredom behaviors (destroying toys, getting into trash, etc.).',
  },
  {
    value: 2,
    description: 'Moderate Behavior Concerns',
    criteria:
      'Has displayed some minor/moderate anxiety in the home (barking, chewing, etc.). Mild-moderate resource guarding (early warning signs such as stiffening, growling, whale eyeing, etc.). Chases but has not injured other non-canine companions (cats, pigs, goats, chickens, etc.).',
  },
  {
    value: 3,
    description: 'Advanced Behavior Concerns',
    criteria:
      'Has displayed severe destructive behaviors in the home (chewed up furniture, carpeting, doors, walls, etc.). Has displayed more severe anxiety (not recommended to be left alone for long, if at all. Crating/medication does not help). Advanced resource guarding (guarding may include bite history with humans or other pets). Has killed/injured other non-canine companions (cats, pigs, goats, chickens, etc.).',
  },
  {
    value: 4,
    description: 'Multiple Advanced Concerns',
    criteria: 'Exhibits multiple of the advanced In-Home Behavior Concerns.',
  },
];

export const HEALTH: Option[] = [
  {
    value: 0,
    description: 'Healthy',
    criteria: 'No signs/symptoms of long term health concerns.',
  },
  {
    value: 1,
    description: 'Treatable/Manageable medical condition',
    criteria:
      'Pet has been diagnosed with a treatable or manageable medical condition such as lymes, ehrlichia, food allergy, etc.',
  },
  {
    value: 2,
    description: 'Long term health concerns',
    criteria: 'Examples: sensory impairment, advanced heartworm disease, cancer, etc.',
  },
];
