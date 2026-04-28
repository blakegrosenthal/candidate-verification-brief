import type { Candidate } from '../types'

export const roleCriteria = {
  title: 'Commercial Account Executive',
  department: 'Revenue',
  location: 'Remote, US Eastern or Central time zones',
  compensation: '$90k-$115k base, $180k-$230k OTE',
  mustHave: [
    '2+ years B2B sales experience',
    'Experience owning outbound prospecting',
    'CRM experience',
    'Clear examples of quota ownership or pipeline generation',
    'Strong written communication',
  ],
  niceToHave: [
    'Experience selling into mid-market companies',
    'Salesforce or HubSpot experience',
    'Prior startup or high-growth company experience',
    'Experience with food, office services, hospitality, or employee experience buyers',
  ],
  dealbreakers: [
    'No B2B sales experience',
    'No evidence of outbound experience',
    'Unable to work in required time zone',
    'Compensation expectations far outside range',
  ],
  screeningInstructions: [
    'Provide a specific target salary range, not "negotiable"',
    'Explain why this specific company and role are interesting to you',
    'Give one concrete example of a sales result you personally contributed to',
  ],
}

export const candidates: Candidate[] = [
  {
    id: 'maya-patel',
    name: 'Maya Patel',
    currentRole: 'Account Executive, BentoBox Workplace',
    background:
      'Three years in B2B workplace services sales with direct outbound, SMB to mid-market ownership, and documented quota attainment.',
    resumeHighlights: [
      '112% of annual quota in 2025 on $720k ARR target',
      'Sourced 38% of closed-won pipeline through cold email and phone',
      'Used Salesforce daily for activity tracking, forecasting, and stage hygiene',
    ],
    applicationAnswer:
      'I am interested because your buyer overlaps with the office manager and people team audience I already sell into. I have sold meal stipend and workplace hospitality programs where ROI depends on employee adoption, budget owner alignment, and a clean pilot plan.',
    screeningResponses: {
      salary: '$100k-$110k base, $200k-$220k OTE',
      companyInterest:
        'The role is appealing because it combines outbound ownership with employee experience buyers, which matches my last two years selling workplace food programs.',
      salesResult:
        'In Q3 I sourced a 420-seat logistics account through a 7-touch outbound sequence, ran discovery with People Ops and Finance, and closed a $68k ARR pilot that expanded to $104k.',
    },
    skills: ['B2B sales', 'outbound', 'Salesforce', 'quota ownership', 'mid-market'],
    companies: ['BentoBox Workplace', 'LogisticsCo'],
    fitSignal: 'High',
    verificationRisk: 'Low',
    evidenceStrength: 'Strong',
    genericAnswerRisk: 'Low',
    instructionFollowing: 'Good',
    suggestedNextStep: 'Ready for targeted screen',
    brief: {
      overallRead:
        'Strong, relevant AE profile with specific workplace services context and clear personal ownership of outbound and quota results.',
      credible: [
        'Gives specific quota, ARR target, and sourced pipeline share.',
        'Application answers connect directly to employee experience and office buyer personas.',
        'Sales result includes account size, sequence, stakeholders, ARR, and expansion detail.',
      ],
      claimsToVerify: [
        'Confirm quota attainment and whether the $720k ARR target was individual or team-based.',
        'Ask for the exact outbound workflow used to source the logistics account.',
        'Validate Salesforce ownership depth beyond activity entry.',
      ],
      gapsOrInconsistencies: [
        'No major location or compensation mismatch apparent.',
        'Mid-market exposure looks promising but should be clarified by average deal size and cycle length.',
      ],
      genericAnswerNotes: [
        'Answers are specific to the role and buyer type.',
        'Examples include numbers, stakeholders, and a personal contribution.',
        'Low copy-paste risk because the details map to the resume and criteria.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$100k-$110k base, $200k-$220k OTE',
          flag: 'Good',
          note: 'Specific and within expected range.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'References employee experience buyers and workplace food programs.',
          flag: 'Good',
          note: 'Specific to the role rather than generic growth language.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: 'Sourced and closed a logistics account from outbound.',
          flag: 'Good',
          note: 'Clear personal ownership with measurable outcome.',
        },
      ],
      firstScreenQuestions: [
        'Can you walk me through the 7-touch outbound sequence that sourced the logistics account?',
        'What was your individual quota structure, and how was the $720k ARR target measured?',
        'How did you use Salesforce to forecast and manage stage hygiene week to week?',
      ],
      concernToTest:
        'Whether her mid-market deal ownership translates to the expected sales cycle and ACV for this role.',
      reasonToStillInterview:
        'Her evidence is specific, relevant, and already aligned with the buyer persona.',
      suggestedNextStep:
        'Use a targeted screen; focus the screen on deal ownership, cycle complexity, and Salesforce depth.',
    },
  },
  {
    id: 'ethan-brooks',
    name: 'Ethan Brooks',
    currentRole: 'Senior Account Executive, CloudLedger',
    background:
      'Resume reads like a high-performing SaaS AE, but several large claims are broad and not clearly tied to personal ownership.',
    resumeHighlights: [
      'Claims 148% quota attainment and $1.8M new ARR closed',
      'Lists enterprise logos without describing role in the deal',
      'Mentions leading outbound strategy for a 12-person pod',
    ],
    applicationAnswer:
      'I bring a proven track record of exceeding aggressive revenue targets, building executive relationships, and transforming pipeline strategy in competitive markets. I am excited to help your company scale revenue efficiently.',
    screeningResponses: {
      salary: '$115k base, $230k OTE',
      companyInterest:
        'Your company is disrupting a large market and I want to be part of a winning team with a strong product and ambitious growth goals.',
      salesResult:
        'I helped drive $1.8M in ARR by aligning stakeholders, creating urgency, and executing a strategic enterprise sales motion.',
    },
    skills: ['SaaS sales', 'enterprise sales', 'outbound strategy', 'Salesforce'],
    companies: ['CloudLedger', 'Acme Bank', 'Northstar Retail'],
    fitSignal: 'High',
    verificationRisk: 'High',
    evidenceStrength: 'Mixed',
    genericAnswerRisk: 'High',
    instructionFollowing: 'Partial',
    suggestedNextStep: 'Verification priority',
    brief: {
      overallRead:
        'Potentially strong sales profile, but the application is polished and light on verifiable detail. High fit should be separated from high verification risk.',
      credible: [
        'Has multiple years in B2B SaaS AE roles.',
        'Compensation expectations are close to the stated band.',
        'Resume suggests exposure to outbound and complex sales environments.',
      ],
      claimsToVerify: [
        'Clarify whether $1.8M ARR was personally closed, team-sourced, renewed, or influenced.',
        'Ask which specific outbound strategy he led and what changed after his involvement.',
        'Confirm deal size, segment, and sales cycle for the named logos.',
      ],
      gapsOrInconsistencies: [
        'Application answer uses broad claims without company-specific reasoning.',
        'No concrete example of a deal he personally sourced from outbound.',
        'Leadership claim is unsupported by reporting line, scope, or results.',
      ],
      genericAnswerNotes: [
        'Company interest answer could apply to almost any growth-stage SaaS company.',
        'Sales result answer uses polished phrases but lacks baseline, actions, and personal ownership.',
        'Does not clearly answer why this specific role is interesting.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$115k base, $230k OTE',
          flag: 'Good',
          note: 'Specific and near the top of the expected range.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Disrupting a large market; winning team; strong product.',
          flag: 'Partial',
          note: 'Positive but generic; no role-specific tie.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: 'Helped drive $1.8M in ARR through strategic sales motion.',
          flag: 'Partial',
          note: 'Large claim, but personal contribution is unclear.',
        },
      ],
      firstScreenQuestions: [
        'Of the $1.8M ARR you mentioned, what amount did you personally source and close?',
        'Can you walk through one outbound-sourced deal from first touch to close, including your exact role?',
        'When you say you led outbound strategy for a 12-person pod, what decisions did you own and what changed in the metrics?',
      ],
      concernToTest:
        'Whether the strongest revenue claims are personally owned or mostly team-attributed.',
      reasonToStillInterview:
        'The underlying AE background may be very relevant if the claimed ownership checks out quickly.',
      suggestedNextStep:
        'Run a short verification-focused screen before investing in a later-stage process.',
    },
  },
  {
    id: 'nora-stein',
    name: 'Nora Stein',
    currentRole: 'Sales Development Representative, ParcelPath',
    background:
      'Credible outbound-heavy SDR with detailed prospecting examples, but limited closing experience for an AE role.',
    resumeHighlights: [
      'Generated $410k qualified pipeline in 2025',
      'Booked 74 meetings from cold outbound to operations leaders',
      'Maintained HubSpot sequences, call notes, and lead source reporting',
    ],
    applicationAnswer:
      'The role interests me because it would let me move from sourcing opportunities into owning smaller commercial deals. I have been selling logistics software into operations and office admin teams, and I like that your product also requires practical buyer education.',
    screeningResponses: {
      salary: '$88k-$95k base, $165k-$180k OTE',
      companyInterest:
        'I want an AE path where outbound still matters. Your commercial segment seems like a place where my prospecting strength can convert into full-cycle ownership.',
      salesResult:
        'I built a territory list of 220 regional distributors, booked 18 first meetings in six weeks, and created $92k in qualified pipeline that converted into two closed deals for my AE.',
    },
    skills: ['outbound', 'HubSpot', 'pipeline generation', 'B2B sales', 'prospecting'],
    companies: ['ParcelPath'],
    fitSignal: 'Medium',
    verificationRisk: 'Low',
    evidenceStrength: 'Strong',
    genericAnswerRisk: 'Low',
    instructionFollowing: 'Good',
    suggestedNextStep: 'Verification priority',
    brief: {
      overallRead:
        'Strong credibility and relevant outbound evidence, with the main question being readiness for full-cycle AE responsibility.',
      credible: [
        'Specific pipeline generation numbers and meeting volume.',
        'Clearly explains a move from SDR into AE ownership.',
        'Concrete example includes territory size, time period, meetings, and pipeline outcome.',
      ],
      claimsToVerify: [
        'Confirm how much discovery and qualification she personally owned after booking meetings.',
        'Ask whether she has managed pricing, proposals, or closing steps.',
        'Validate HubSpot reporting depth and data hygiene habits.',
      ],
      gapsOrInconsistencies: [
        'No direct quota-carrying AE closing experience shown.',
        'Compensation target is slightly below the posted range, which may reflect level mismatch.',
      ],
      genericAnswerNotes: [
        'Answers are grounded in her actual outbound work.',
        'Company interest is specific to role mechanics rather than broad enthusiasm.',
        'Low generic risk because she names a plausible career transition and evidence.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$88k-$95k base, $165k-$180k OTE',
          flag: 'Good',
          note: 'Specific, though slightly low for the role.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Connects outbound-heavy commercial selling to her AE transition.',
          flag: 'Good',
          note: 'Specific and credible.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: 'Built territory list and booked meetings that created pipeline.',
          flag: 'Good',
          note: 'Personal contribution is clear.',
        },
      ],
      firstScreenQuestions: [
        'What parts of discovery did you personally handle after booking the 18 meetings?',
        'Have you ever owned pricing, proposal follow-up, or closing steps on a deal?',
        'How did you define qualified pipeline in HubSpot for the $92k example?',
      ],
      concernToTest:
        'Whether she can step into full-cycle ownership quickly enough for this AE opening.',
      reasonToStillInterview:
        'Her outbound evidence is unusually concrete and aligned with a high-volume commercial motion.',
      suggestedNextStep:
        'Verification priority for AE readiness and closing exposure.',
    },
  },
  {
    id: 'liam-walsh',
    name: 'Liam Walsh',
    currentRole: 'Account Executive, BrightDesk',
    background:
      'Good-looking resume with relevant B2B AE titles, but application answers are generic and lightly supported.',
    resumeHighlights: [
      'Two years as AE selling workplace management software',
      'States consistent quota achievement without specific period or target',
      'Mentions Salesforce, Gong, and LinkedIn Sales Navigator',
    ],
    applicationAnswer:
      'I am passionate about joining innovative companies that change the way people work. My sales experience, customer focus, and communication skills make me confident I can exceed expectations in this role.',
    screeningResponses: {
      salary: 'Negotiable for the right opportunity',
      companyInterest:
        'Your mission and culture are inspiring, and I am excited about the opportunity to contribute to continued success.',
      salesResult:
        'I exceeded quota and helped my team grow revenue through consistent prospecting and strong customer relationships.',
    },
    skills: ['B2B sales', 'Salesforce', 'Gong', 'Sales Navigator', 'workplace software'],
    companies: ['BrightDesk'],
    fitSignal: 'High',
    verificationRisk: 'Medium',
    evidenceStrength: 'Mixed',
    genericAnswerRisk: 'High',
    instructionFollowing: 'Issue',
    suggestedNextStep: 'Manual review',
    brief: {
      overallRead:
        'Relevant title and category exposure, but the application does not provide enough specific evidence to trust the strongest claims without follow-up.',
      credible: [
        'Current AE role appears aligned with workplace software buyers.',
        'Tool list matches expected sales workflow.',
        'Two years of B2B AE experience meets the baseline role requirement.',
      ],
      claimsToVerify: [
        'Ask for exact quota, attainment period, and personal closed-won revenue.',
        'Confirm whether prospecting was self-owned or sourced by SDRs.',
        'Validate daily use of Salesforce, Gong, and Sales Navigator.',
      ],
      gapsOrInconsistencies: [
        'No specific target salary range despite explicit instruction.',
        'Sales result is broad and does not include a concrete example.',
        'Company interest is not specific to this company, buyer, or role.',
      ],
      genericAnswerNotes: [
        'Application language is polished but vague.',
        'Answers could be reused across many sales roles.',
        'Does not provide an example with numbers, stakeholders, or personal action.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: 'Negotiable for the right opportunity',
          flag: 'Issue',
          note: 'Does not follow the instruction.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Mission and culture are inspiring.',
          flag: 'Partial',
          note: 'Too generic to evaluate motivation.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: 'Exceeded quota and helped team grow revenue.',
          flag: 'Partial',
          note: 'No concrete result or personal ownership.',
        },
      ],
      firstScreenQuestions: [
        'What was your exact quota last year, and what percentage did you personally achieve?',
        'Can you describe one deal you sourced yourself and what happened at each stage?',
        'Your salary answer was negotiable; what specific base and OTE range are you targeting?',
      ],
      concernToTest:
        'Whether the candidate is genuinely strong or simply presenting a familiar AE profile with generic answers.',
      reasonToStillInterview:
        'The role history is relevant enough to merit manual review if the recruiter needs more AE options.',
      suggestedNextStep:
        'Manual review; use a short verification call to resolve evidence gaps if needed.',
    },
  },
  {
    id: 'ava-martinez',
    name: 'Ava Martinez',
    currentRole: 'Regional Sales Manager, CafeOps',
    background:
      'Hospitality sales background with buyer relevance, but salary and location responses conflict with role expectations.',
    resumeHighlights: [
      'Sold catering and office coffee services to local businesses',
      'Managed a two-person sales territory in Southern California',
      'Uses Zoho CRM; no Salesforce or HubSpot listed',
    ],
    applicationAnswer:
      'I have sold food and office hospitality services for five years and understand how facilities and office managers decide on employee perks. I am interested in moving to a software-enabled company that still sells a tangible workplace experience.',
    screeningResponses: {
      salary: '$140k base, $280k OTE',
      companyInterest:
        'The buyer set is familiar to me: facilities, admins, and operations leaders who care about employee experience.',
      salesResult:
        'I personally reopened 31 dormant accounts in LA County and converted nine into monthly catering contracts worth about $17k in monthly recurring revenue.',
    },
    skills: ['hospitality sales', 'B2B sales', 'office services', 'Zoho CRM', 'account expansion'],
    companies: ['CafeOps'],
    fitSignal: 'Medium',
    verificationRisk: 'Medium',
    evidenceStrength: 'Strong',
    genericAnswerRisk: 'Low',
    instructionFollowing: 'Good',
    suggestedNextStep: 'Manual review',
    brief: {
      overallRead:
        'Credible workplace-services seller with useful buyer context, but the compensation expectation is far above range and CRM/SaaS fit needs testing.',
      credible: [
        'Specific experience selling food and office services to relevant buyers.',
        'Concrete dormant-account recovery example with count and recurring revenue.',
        'Application answer ties directly to the role category.',
      ],
      claimsToVerify: [
        'Confirm willingness to align with the posted compensation range.',
        'Ask whether she can work Eastern or Central hours from California.',
        'Clarify CRM sophistication and comfort moving from Zoho to Salesforce or HubSpot.',
      ],
      gapsOrInconsistencies: [
        'Base salary target is materially above the expected band.',
        'Current territory suggests Pacific time zone; role expects Eastern or Central coverage.',
        'No clear SaaS or mid-market closing experience.',
      ],
      genericAnswerNotes: [
        'Answers are specific and tied to buyer experience.',
        'Sales result includes personal action and measurable outcome.',
        'Low generic risk despite possible fit concerns.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$140k base, $280k OTE',
          flag: 'Good',
          note: 'Specific, but far outside the expected range.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Connects workplace services buyer familiarity to software-enabled selling.',
          flag: 'Good',
          note: 'Specific and relevant.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: 'Reopened dormant accounts and converted nine contracts.',
          flag: 'Good',
          note: 'Clear personal ownership.',
        },
      ],
      firstScreenQuestions: [
        'The posted range is $90k-$115k base and $180k-$230k OTE. Is that workable for you?',
        'Can you consistently cover Eastern or Central business hours from California?',
        'How complex were the catering contracts you closed, and who signed off on them?',
      ],
      concernToTest:
        'Whether compensation and time-zone expectations make the candidate impractical for this opening.',
      reasonToStillInterview:
        'Her buyer knowledge and specific sales evidence could be useful if expectations are flexible.',
      suggestedNextStep:
        'Manual review for compensation and time-zone alignment before deeper evaluation.',
    },
  },
  {
    id: 'marcus-green',
    name: 'Marcus Green',
    currentRole: 'Enterprise Growth Lead, RevPilot',
    background:
      'Strong leadership language and growth claims, but limited support for individual contributor AE responsibilities.',
    resumeHighlights: [
      'Says he built a repeatable outbound engine from scratch',
      'Claims team pipeline grew 240% in two quarters',
      'Lists coaching six SDRs and partnering with AEs',
    ],
    applicationAnswer:
      'I have built outbound motions, coached teams, and influenced revenue outcomes across multiple functions. This role is a fit because I can bring strategic thinking and execution discipline to a growing revenue team.',
    screeningResponses: {
      salary: '$105k-$120k base, $210k-$240k OTE',
      companyInterest:
        'I like roles where outbound strategy and commercial execution meet, and this seems like a chance to shape both.',
      salesResult:
        'I led the redesign of our outbound process, which increased sourced pipeline by 240% over two quarters.',
    },
    skills: ['outbound strategy', 'sales leadership', 'pipeline generation', 'coaching', 'Salesforce'],
    companies: ['RevPilot'],
    fitSignal: 'Medium',
    verificationRisk: 'High',
    evidenceStrength: 'Mixed',
    genericAnswerRisk: 'Medium',
    instructionFollowing: 'Partial',
    suggestedNextStep: 'Verification priority',
    brief: {
      overallRead:
        'Potentially valuable outbound operator, but the brief should test whether his leadership claims translate into personal AE selling.',
      credible: [
        'Outbound and pipeline focus is relevant to the role.',
        'Application answer mentions a specific pipeline metric.',
        'Experience coaching SDRs may help in a high-volume prospecting environment.',
      ],
      claimsToVerify: [
        'Determine what he personally did in the outbound redesign.',
        'Ask whether 240% pipeline growth was team-wide, territory-specific, or attributable to his changes.',
        'Confirm recent individual quota ownership and closing experience.',
      ],
      gapsOrInconsistencies: [
        'Resume emphasizes leadership and process over personal sales ownership.',
        'Compensation ask slightly exceeds the expected top of range.',
        'No concrete closed-won deal example in the screening response.',
      ],
      genericAnswerNotes: [
        'Answers are moderately specific but still lean on strategic language.',
        'Sales result is a process outcome, not a personal deal outcome.',
        'Company interest is plausible but not deeply specific to the buyer or product.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$105k-$120k base, $210k-$240k OTE',
          flag: 'Good',
          note: 'Specific, but upper end is above posted range.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Outbound strategy and commercial execution meet.',
          flag: 'Partial',
          note: 'Role-relevant but not company-specific.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: 'Led outbound redesign that increased sourced pipeline.',
          flag: 'Partial',
          note: 'Concrete metric, but personal selling result is missing.',
        },
      ],
      firstScreenQuestions: [
        'What exact changes did you personally make in the outbound redesign?',
        'When was the last time you carried an individual quota and closed your own deals?',
        'Can you give one closed-won deal example where you owned prospecting, discovery, and close?',
      ],
      concernToTest:
        'Whether this is an operator or team lead profile rather than a hands-on commercial AE.',
      reasonToStillInterview:
        'If he is comfortable returning to individual contribution, the outbound systems experience may be useful.',
      suggestedNextStep:
        'Verification priority focused on personal quota ownership and appetite for hands-on selling.',
    },
  },
  {
    id: 'isabel-chen',
    name: 'Isabel Chen',
    currentRole: 'Account Manager, LoopSpace',
    background:
      'Strong customer-facing SaaS experience with expansion wins, but limited evidence of net-new outbound prospecting.',
    resumeHighlights: [
      'Managed 48 commercial accounts with 96% logo retention',
      'Expanded book by $310k ARR through upsell campaigns',
      'Uses Salesforce, Gainsight, and Gong',
    ],
    applicationAnswer:
      'I have spent the last three years helping workplace operations teams expand software adoption. I want to move into a new-business role because I enjoy discovery, business case building, and turning account pain into a clear buying plan.',
    screeningResponses: {
      salary: '$95k-$105k base, $190k-$210k OTE',
      companyInterest:
        'The buyer persona is familiar, but the new-business motion would stretch me in a direction I am intentionally pursuing.',
      salesResult:
        'I identified low adoption across a 1,200-person customer, built an adoption plan with HR and Facilities, and expanded the contract by $82k ARR.',
    },
    skills: ['account management', 'expansion', 'Salesforce', 'Gainsight', 'workplace operations'],
    companies: ['LoopSpace'],
    fitSignal: 'Medium',
    verificationRisk: 'Low',
    evidenceStrength: 'Strong',
    genericAnswerRisk: 'Low',
    instructionFollowing: 'Good',
    suggestedNextStep: 'Verification priority',
    brief: {
      overallRead:
        'Credible commercial seller with strong account expansion evidence, but the key gap is net-new outbound and closing from cold prospecting.',
      credible: [
        'Specific retention, book size, and expansion metrics.',
        'Clear example of diagnosing adoption and expanding ARR.',
        'Buyer persona appears aligned with workplace operations and employee experience.',
      ],
      claimsToVerify: [
        'Ask how much of her pipeline was self-generated versus customer expansion.',
        'Confirm experience with cold outbound, list building, and net-new discovery.',
        'Validate whether she has carried a new-business quota.',
      ],
      gapsOrInconsistencies: [
        'Current role is account management, not new-business AE.',
        'No direct outbound prospecting example.',
        'Evidence is strong but weighted toward expansion and adoption.',
      ],
      genericAnswerNotes: [
        'Answers are specific and candid about the desired transition.',
        'Sales result includes problem, stakeholders, action, and ARR impact.',
        'Low generic risk because the gap is acknowledged rather than hidden.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$95k-$105k base, $190k-$210k OTE',
          flag: 'Good',
          note: 'Specific and within range.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Familiar buyer persona plus desired new-business motion.',
          flag: 'Good',
          note: 'Specific and self-aware.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: '$82k ARR expansion from adoption plan.',
          flag: 'Good',
          note: 'Concrete, though expansion rather than net-new.',
        },
      ],
      firstScreenQuestions: [
        'How much cold outbound have you personally done in the last six months?',
        'Have you ever owned a net-new quota, and what was the target?',
        'In the $82k expansion, what did you personally own versus CS or leadership?',
      ],
      concernToTest:
        'Whether she has enough outbound and net-new muscle for a commercial AE role.',
      reasonToStillInterview:
        'Her credibility is strong, and the buyer/domain overlap may shorten ramp time.',
      suggestedNextStep:
        'Verification priority to test outbound readiness and new-business motivation.',
    },
  },
  {
    id: 'jordan-kim',
    name: 'Jordan Kim',
    currentRole: 'Sales Associate, MetroOffice Supply',
    background:
      'Less polished profile but unusually concrete answers about prospecting, territory work, and buyer conversations.',
    resumeHighlights: [
      'Two years selling office supplies and workplace services to SMBs',
      'Built local prospect lists manually and ran email follow-up',
      'Used HubSpot to track calls, quotes, and renewal reminders',
    ],
    applicationAnswer:
      'I do not have SaaS AE experience yet, but I sell to office managers every week and know how to get a busy admin to take a call. I am interested because this role still rewards outbound effort and clear follow-up.',
    screeningResponses: {
      salary: '$90k-$96k base, $180k-$190k OTE',
      companyInterest:
        'The customer sounds like the office managers I already call, but the deal is more strategic than supplies. That is the step up I am looking for.',
      salesResult:
        'I called 63 companies from a new industrial park list, booked 11 meetings, and closed four first orders. Two became recurring monthly accounts worth $5,400 per month combined.',
    },
    skills: ['B2B sales', 'outbound calling', 'HubSpot', 'office services', 'SMB sales'],
    companies: ['MetroOffice Supply'],
    fitSignal: 'Low',
    verificationRisk: 'Low',
    evidenceStrength: 'Strong',
    genericAnswerRisk: 'Low',
    instructionFollowing: 'Good',
    suggestedNextStep: 'Manual review',
    brief: {
      overallRead:
        'Not a perfect fit on seniority or SaaS experience, but the evidence is credible and shows relevant outbound behavior.',
      credible: [
        'Candidly states the SaaS gap instead of overstating fit.',
        'Specific prospecting example with list size, meetings, closes, and recurring revenue.',
        'Buyer familiarity with office managers is relevant to the role.',
      ],
      claimsToVerify: [
        'Confirm whether accounts were B2B decision cycles or transactional purchases.',
        'Ask how he handled objections and follow-up after first orders.',
        'Validate HubSpot use beyond simple reminders.',
      ],
      gapsOrInconsistencies: [
        'No software sales experience.',
        'Likely smaller deal sizes than the target commercial AE motion.',
        'Current role may not include quota complexity expected here.',
      ],
      genericAnswerNotes: [
        'Answers are direct, specific, and not over-polished.',
        'The candidate answers the actual questions and acknowledges limitations.',
        'Low generic risk because examples are grounded in concrete field activity.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$90k-$96k base, $180k-$190k OTE',
          flag: 'Good',
          note: 'Specific and within posted range.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Office-manager buyer overlap and more strategic deal motion.',
          flag: 'Good',
          note: 'Specific and credible.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: 'Called 63 companies, booked 11 meetings, closed four first orders.',
          flag: 'Good',
          note: 'Clear personal outbound result.',
        },
      ],
      firstScreenQuestions: [
        'What did your follow-up process look like after the 11 meetings you booked?',
        'How were you measured in your current role, and what quota did you carry?',
        'What parts of SaaS selling do you expect to be most different from office supply sales?',
      ],
      concernToTest:
        'Whether the jump from SMB office supply sales to commercial SaaS AE is too large for this opening.',
      reasonToStillInterview:
        'The candidate shows real outbound evidence and buyer familiarity despite a lower fit signal.',
      suggestedNextStep:
        'Manual review for a possible high-upside screen if the team is open to nontraditional backgrounds.',
    },
  },
  {
    id: 'sophia-rivera',
    name: 'Sophia Rivera',
    currentRole: 'Account Executive, PeoplePulse',
    background:
      'Strong resume in employee engagement SaaS, but responses sound polished and do not establish specific personal contribution.',
    resumeHighlights: [
      'AE selling employee engagement software to HR teams',
      'Claims Presidents Club and top 5% attainment',
      'Lists Salesforce, Outreach, Gong, and MEDDICC',
    ],
    applicationAnswer:
      'My background uniquely positions me to deliver immediate impact. I thrive in fast-paced environments, build trusted advisor relationships, and consistently turn complex buyer needs into scalable revenue outcomes.',
    screeningResponses: {
      salary: '$105k-$115k base, $210k-$230k OTE',
      companyInterest:
        'Your company sits at the intersection of innovation, people, and transformation, which is where I do my best work.',
      salesResult:
        'I accelerated pipeline velocity and improved conversion by taking a consultative, data-driven approach to strategic account engagement.',
    },
    skills: ['employee engagement SaaS', 'Salesforce', 'Outreach', 'Gong', 'MEDDICC'],
    companies: ['PeoplePulse'],
    fitSignal: 'High',
    verificationRisk: 'High',
    evidenceStrength: 'Weak',
    genericAnswerRisk: 'High',
    instructionFollowing: 'Partial',
    suggestedNextStep: 'Manual review',
    brief: {
      overallRead:
        'Role history appears highly relevant, but the application is too generic to trust without probing specific deals and metrics.',
      credible: [
        'Employee engagement SaaS is adjacent to the target buyer category.',
        'Tool stack fits a mature AE sales motion.',
        'Compensation expectations are within range.',
      ],
      claimsToVerify: [
        'Ask for exact Presidents Club year, quota, attainment, and comparison group.',
        'Clarify whether she owned outbound prospecting or primarily worked inbound/SDR-sourced pipeline.',
        'Request one specific deal example with buyer, ACV, source, and her personal actions.',
      ],
      gapsOrInconsistencies: [
        'No concrete sales result despite explicit instruction.',
        'Strong claims are unsupported by details or numbers.',
        'Company interest answer is not specific to the company or role.',
      ],
      genericAnswerNotes: [
        'Responses are polished but vague.',
        'Phrases like trusted advisor, scalable revenue outcomes, and data-driven approach are not supported by examples.',
        'The answer does not provide a baseline, what changed, or what she personally owned.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$105k-$115k base, $210k-$230k OTE',
          flag: 'Good',
          note: 'Specific and within range.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Innovation, people, and transformation.',
          flag: 'Partial',
          note: 'Broad and not role-specific.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: 'Accelerated pipeline velocity and improved conversion.',
          flag: 'Issue',
          note: 'No concrete result or personal contribution.',
        },
      ],
      firstScreenQuestions: [
        'Can you describe one employee engagement deal you personally sourced or owned from discovery to close?',
        'What was your quota in your Presidents Club year, and what exact attainment did you reach?',
        'When you mention improved conversion, what was the baseline and what did you personally change?',
      ],
      concernToTest:
        'Whether the candidate is masking weak evidence behind polished sales language.',
      reasonToStillInterview:
        'The market and buyer experience could be a strong match if specifics check out quickly.',
      suggestedNextStep:
        'Manual review; use a short screen only if the recruiter wants to validate the highly relevant background.',
    },
  },
  {
    id: 'ben-owens',
    name: 'Ben Owens',
    currentRole: 'Business Development Manager, SnackFleet',
    background:
      'Relevant office food services background and strong activity history, but CRM and quota ownership are vague.',
    resumeHighlights: [
      'Sold snack pantry and coffee programs to office managers',
      'Lists CRM experience as internal tools and spreadsheets',
      'Reports 26 new customer launches in 2025',
    ],
    applicationAnswer:
      'I have sold directly into the kind of offices your product would serve. My strength is getting an office manager to explain the real problem behind the perk request, then bringing in Finance or HR when budget needs support.',
    screeningResponses: {
      salary: '$92k-$102k base, $185k-$200k OTE',
      companyInterest:
        'The role sits close to office food and employee experience, but with a more scalable product than what I sell today.',
      salesResult:
        'I opened a 14-building property management account by starting with one office coffee program, then expanded to five buildings over four months.',
    },
    skills: ['office food services', 'B2B sales', 'prospecting', 'internal CRM', 'account expansion'],
    companies: ['SnackFleet'],
    fitSignal: 'Medium',
    verificationRisk: 'Medium',
    evidenceStrength: 'Mixed',
    genericAnswerRisk: 'Low',
    instructionFollowing: 'Good',
    suggestedNextStep: 'Verification priority',
    brief: {
      overallRead:
        'Good buyer and domain relevance, with verification needed around CRM maturity, quota ownership, and whether expansion work maps to new-business AE selling.',
      credible: [
        'Direct experience selling office food and employee perk services.',
        'Application answer shows practical understanding of office-manager and budget-owner dynamics.',
        'Expansion example includes account structure and timeline.',
      ],
      claimsToVerify: [
        'Clarify what CRM tools he used and how disciplined the process was.',
        'Ask for individual quota, attainment, and net-new revenue ownership.',
        'Confirm whether the property management account was self-sourced.',
      ],
      gapsOrInconsistencies: [
        'CRM experience is vague and may not meet Salesforce or HubSpot expectations.',
        'Sales result gives expansion shape but not revenue amount.',
        'Unclear whether he has carried a software-like quota.',
      ],
      genericAnswerNotes: [
        'Answers are specific to office food and buyer dynamics.',
        'Low generic risk because the response includes practical selling details.',
        'Result would be stronger with ACV, source, and personal ownership details.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$92k-$102k base, $185k-$200k OTE',
          flag: 'Good',
          note: 'Specific and within range.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Office food and employee experience overlap with scalable product.',
          flag: 'Good',
          note: 'Specific and relevant.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: 'Expanded property management account from one to five buildings.',
          flag: 'Good',
          note: 'Concrete, though missing revenue and source.',
        },
      ],
      firstScreenQuestions: [
        'What CRM or tracking system did you use day to day, and what fields did you maintain?',
        'Was the 14-building property management account self-sourced, assigned, or expanded from an existing relationship?',
        'What revenue or margin did the five-building expansion represent?',
      ],
      concernToTest:
        'Whether his tool and quota experience are too informal for this commercial AE motion.',
      reasonToStillInterview:
        'Buyer relevance is strong, and the answers suggest practical selling judgment.',
      suggestedNextStep:
        'Verification priority to verify CRM discipline, quota ownership, and source of pipeline.',
    },
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    currentRole: 'Account Executive, WorkNest',
    background:
      'Strong resume with quota claims, but personal ownership of outcomes is unclear because several wins are framed as team achievements.',
    resumeHighlights: [
      'Commercial AE selling facilities workflow software',
      'Team exceeded regional target by 132%',
      'Worked with SDRs, implementation, and sales engineering on multi-stakeholder deals',
    ],
    applicationAnswer:
      'I like that this role requires both outbound effort and careful stakeholder alignment. In my current role, I partner closely with SDRs and implementation to turn operational pain into buying urgency.',
    screeningResponses: {
      salary: '$100k-$112k base, $205k-$225k OTE',
      companyInterest:
        'The facilities and workplace buyer is familiar, and the commercial segment sounds like a good match for my current deal size.',
      salesResult:
        'Our region beat target by 132% after we tightened discovery, improved handoffs, and focused on accounts with clearer implementation triggers.',
    },
    skills: ['B2B SaaS', 'facilities software', 'Salesforce', 'multi-stakeholder sales', 'outbound'],
    companies: ['WorkNest'],
    fitSignal: 'High',
    verificationRisk: 'Medium',
    evidenceStrength: 'Mixed',
    genericAnswerRisk: 'Medium',
    instructionFollowing: 'Partial',
    suggestedNextStep: 'Ready for targeted screen',
    brief: {
      overallRead:
        'Likely relevant AE with strong domain overlap, but the screen should isolate her individual contribution from regional or cross-functional results.',
      credible: [
        'Current role and buyer category align well with the opening.',
        'Compensation expectations are within range.',
        'Application answer references both outbound and stakeholder alignment.',
      ],
      claimsToVerify: [
        'Ask for her individual quota and attainment separate from regional performance.',
        'Clarify what pipeline she personally sourced versus SDR-sourced.',
        'Request one deal where she owned discovery, business case, and close.',
      ],
      gapsOrInconsistencies: [
        'Sales result response uses regional performance rather than personal result.',
        'Team achievements make ownership hard to assess.',
        'No clear outbound-sourced deal example in application answers.',
      ],
      genericAnswerNotes: [
        'Answers are more specific than generic, but still lean on team process improvements.',
        'Company interest is role-relevant and buyer-specific.',
        'The concrete result does not fully answer personal contribution.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$100k-$112k base, $205k-$225k OTE',
          flag: 'Good',
          note: 'Specific and within range.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Facilities buyer and commercial segment match current deal size.',
          flag: 'Good',
          note: 'Specific and relevant.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: 'Region beat target by 132% after process changes.',
          flag: 'Partial',
          note: 'Concrete team result, unclear individual contribution.',
        },
      ],
      firstScreenQuestions: [
        'What was your individual quota and attainment during the period your region hit 132%?',
        'Can you walk through one deal where you personally owned discovery through close?',
        'What percentage of your pipeline came from your own outbound versus SDR handoff?',
      ],
      concernToTest:
        'Whether her strongest results are personal AE outcomes or mostly regional/team performance.',
      reasonToStillInterview:
        'The domain, buyer, and compensation alignment are strong enough to justify a focused first screen.',
      suggestedNextStep:
        'Use a targeted screen with a first-screen focus on personal ownership and outbound source mix.',
    },
  },
  {
    id: 'olivia-hart',
    name: 'Olivia Hart',
    currentRole: 'Sales Consultant, HomeCloud',
    background:
      'Some sales experience, but appears primarily consumer or transactional with little evidence of B2B outbound ownership.',
    resumeHighlights: [
      'Sells home services packages to inbound consumers',
      'Mentions CRM usage without naming system',
      'Top monthly performer twice in 2025',
    ],
    applicationAnswer:
      'Sales is about listening, building trust, and solving problems. I am confident I can sell any product because I work hard, learn quickly, and care about customers.',
    screeningResponses: {
      salary: '$90k-$100k base',
      companyInterest:
        'I want to move into tech sales and this seems like a great company where I can grow.',
      salesResult:
        'I was the top performer twice and consistently followed up with customers to close sales.',
    },
    skills: ['sales', 'customer follow-up', 'CRM', 'consumer sales'],
    companies: ['HomeCloud'],
    fitSignal: 'Low',
    verificationRisk: 'Medium',
    evidenceStrength: 'Weak',
    genericAnswerRisk: 'High',
    instructionFollowing: 'Partial',
    suggestedNextStep: 'Role-alignment review',
    brief: {
      overallRead:
        'Motivated sales candidate, but the application does not show the B2B outbound and quota evidence needed for this role.',
      credible: [
        'Has some sales experience and customer follow-up exposure.',
        'States a desire to move into tech sales.',
        'Salary base range is specific, though OTE is not provided.',
      ],
      claimsToVerify: [
        'Confirm whether any experience involved B2B buyers or outbound prospecting.',
        'Ask what CRM was used and how performance was measured.',
        'Clarify top performer metric and whether it was quota-based.',
      ],
      gapsOrInconsistencies: [
        'No B2B sales experience shown.',
        'No evidence of outbound prospecting.',
        'Application answers are generic and do not address this specific role.',
      ],
      genericAnswerNotes: [
        'Answers rely on broad sales traits rather than role-specific evidence.',
        'Company interest is generic tech-sales career language.',
        'Sales result lacks numbers, baseline, and personal ownership details.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$90k-$100k base',
          flag: 'Partial',
          note: 'Specific base range, but no OTE expectation.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Move into tech sales and grow.',
          flag: 'Partial',
          note: 'Not specific to company or role.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: 'Top performer twice.',
          flag: 'Partial',
          note: 'Some signal, but no concrete result or measurement context.',
        },
      ],
      firstScreenQuestions: [
        'Have you ever prospected cold into businesses, and what was the outcome?',
        'What metric made you the top performer twice, and what was the denominator?',
        'What CRM did you use, and what information did you personally maintain?',
      ],
      concernToTest:
        'Whether there is any hidden B2B outbound experience not visible in the application.',
      reasonToStillInterview:
        'Could be considered only for a more junior sales track if one exists.',
      suggestedNextStep:
        'Role-alignment review; revisit if the team opens a more junior sales track.',
    },
  },
  {
    id: 'samir-das',
    name: 'Samir Das',
    currentRole: 'Account Executive, TeamTable',
    background:
      'Highly relevant office meal program AE with good specifics, but needs verification on whether results were personally sourced or marketing-generated.',
    resumeHighlights: [
      'Sold employee meal and catering platform to companies with 200-1,500 employees',
      'Closed $640k ARR in 2025 against $600k quota',
      'Used Salesforce and Outreach for prospecting and forecast calls',
    ],
    applicationAnswer:
      'I currently sell to People Ops, office managers, and Finance teams evaluating meal programs. Your role is interesting because it targets the same operational pain, but with a broader employee experience value proposition.',
    screeningResponses: {
      salary: '$108k-$115k base, $215k-$230k OTE',
      companyInterest:
        'The overlap with People Ops and office leaders is strong, and I like that outbound is part of the role rather than only inbound demo handling.',
      salesResult:
        'I closed a 900-employee tech account at $118k ARR after sourcing the director of workplace through a webinar follow-up and building the business case with Finance.',
    },
    skills: ['B2B sales', 'meal programs', 'Salesforce', 'Outreach', 'People Ops buyers'],
    companies: ['TeamTable'],
    fitSignal: 'High',
    verificationRisk: 'Low',
    evidenceStrength: 'Strong',
    genericAnswerRisk: 'Low',
    instructionFollowing: 'Good',
    suggestedNextStep: 'Ready for targeted screen',
    brief: {
      overallRead:
        'Very strong role and buyer match with specific quota and deal evidence. Main verification point is source quality and personal ownership.',
      credible: [
        'Directly relevant employee meal and office buyer experience.',
        'Quota, ARR closed, and named prospecting tools are specific.',
        'Sales result includes buyer, account size, ARR, source, and Finance stakeholder.',
      ],
      claimsToVerify: [
        'Confirm whether webinar follow-up counts as self-sourced or marketing-influenced pipeline.',
        'Ask for quota attainment documentation and average deal cycle.',
        'Validate his daily Salesforce and Outreach workflow.',
      ],
      gapsOrInconsistencies: [
        'Salary target is at the very top of range.',
        'Outbound claim is credible but should be separated from warm event follow-up.',
      ],
      genericAnswerNotes: [
        'Answers are specific to the buyer and product category.',
        'Concrete result directly answers the screening prompt.',
        'Low generic risk.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$108k-$115k base, $215k-$230k OTE',
          flag: 'Good',
          note: 'Specific and inside the posted top end.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Buyer overlap and outbound role expectations.',
          flag: 'Good',
          note: 'Specific and relevant.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: '$118k ARR tech account sourced through webinar follow-up.',
          flag: 'Good',
          note: 'Concrete with personal ownership to verify.',
        },
      ],
      firstScreenQuestions: [
        'Was the $118k ARR deal counted as self-sourced, marketing-sourced, or AE-influenced pipeline?',
        'What was your exact role in building the Finance business case?',
        'How do you use Salesforce and Outreach to manage outbound sequences today?',
      ],
      concernToTest:
        'Whether his outbound ownership is as strong as the application suggests or mostly warm follow-up.',
      reasonToStillInterview:
        'The role, buyer, and deal evidence are tightly aligned with the opening.',
      suggestedNextStep:
        'Use a targeted screen; verify source mix and deal-cycle depth in the first screen.',
    },
  },
  {
    id: 'talia-morgan',
    name: 'Talia Morgan',
    currentRole: 'Founder, DeskPerks Consulting',
    background:
      'Entrepreneurial office-services consultant with credible buyer expertise, but compensation, role fit, and willingness to work in a structured AE process need testing.',
    resumeHighlights: [
      'Independent consultant helping companies source office perks and vendor programs',
      'Negotiated workplace food, events, and amenity contracts',
      'Uses spreadsheets, Notion, and client CRM exports',
    ],
    applicationAnswer:
      'I know the buyer because I have been the person they call when perks, food, and workplace experience programs are messy. I am interested in joining a team because I miss repeatable sales motion and want to focus on one product.',
    screeningResponses: {
      salary: '$110k-$120k base, $220k-$240k OTE',
      companyInterest:
        'The role matches the workplace experience problems I have been solving as a consultant, with a clearer product and sales process.',
      salesResult:
        'I won a 600-person client by auditing their office perk spend, identifying $46k in annual waste, and negotiating a new vendor program they retained for two years.',
    },
    skills: ['consultative sales', 'office services', 'vendor negotiation', 'workplace experience', 'Notion'],
    companies: ['DeskPerks Consulting'],
    fitSignal: 'Medium',
    verificationRisk: 'Medium',
    evidenceStrength: 'Strong',
    genericAnswerRisk: 'Low',
    instructionFollowing: 'Good',
    suggestedNextStep: 'Manual review',
    brief: {
      overallRead:
        'Credible buyer expert with strong consultative examples, but the recruiter should verify fit for a quota-carrying AE role and structured sales environment.',
      credible: [
        'Specific workplace experience and office-services buyer exposure.',
        'Clear consulting win with client size, savings, and retention.',
        'Motivation explains why she wants a team environment.',
      ],
      claimsToVerify: [
        'Confirm appetite for outbound prospecting and weekly activity expectations.',
        'Ask whether she has carried a formal quota or worked in Salesforce/HubSpot.',
        'Clarify compensation flexibility because top end exceeds range.',
      ],
      gapsOrInconsistencies: [
        'No traditional AE title or quota history.',
        'Tooling appears informal compared with Salesforce or HubSpot requirements.',
        'Compensation target stretches above posted range.',
      ],
      genericAnswerNotes: [
        'Answers are specific, candid, and grounded in a real client example.',
        'Low generic risk because the response names a concrete workplace-perks problem.',
        'Application directly addresses why this role, not just any sales role.',
      ],
      instructionChecks: [
        {
          instruction: 'Provide a specific target salary range',
          candidateAnswer: '$110k-$120k base, $220k-$240k OTE',
          flag: 'Good',
          note: 'Specific; slightly above range at the top.',
        },
        {
          instruction: 'Explain why this specific company and role are interesting',
          candidateAnswer: 'Workplace experience problems with clearer product and process.',
          flag: 'Good',
          note: 'Specific and credible.',
        },
        {
          instruction: 'Give one concrete sales result you personally contributed to',
          candidateAnswer: 'Won 600-person client through perk-spend audit and vendor program.',
          flag: 'Good',
          note: 'Concrete client outcome with personal contribution.',
        },
      ],
      firstScreenQuestions: [
        'How comfortable are you with daily cold outbound and weekly activity targets?',
        'Have you ever worked in Salesforce or HubSpot, and how would you manage pipeline hygiene?',
        'What compensation range would be workable if the role tops out at $115k base?',
      ],
      concernToTest:
        'Whether an independent consultant will thrive in a structured AE operating rhythm.',
      reasonToStillInterview:
        'Her buyer insight and consultative credibility may be valuable for complex workplace-experience deals.',
      suggestedNextStep:
        'Manual review if the team is open to nontraditional AE profiles.',
    },
  },
]
