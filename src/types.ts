interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

// New interface for parts with a description
interface CoursePartWithDescription extends CoursePartBase {
    description: string;
}

interface CoursePartBasic extends CoursePartWithDescription {
    kind: 'basic';
}

interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: 'group';
}

interface CoursePartBackground extends CoursePartWithDescription {
    backgroundMaterial: string;
    kind: 'background';
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground;