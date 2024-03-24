export interface IHomeJobProps {
    title: string,
    image: string,
    description: string,
    side: string,
    index: number,
    navigate: string
}

export interface IJobDisplayProps {
    image: string
    entry: IJobEntries[],
    index: number,
    url: string
}

export interface IJobEntries {
    WorkReason: string,
    JobStackRequire: string[],
    GoalsToAchieve: string,
    JobSkillset: string,
    JobDescription: string,
    JobRequirement: string,
}