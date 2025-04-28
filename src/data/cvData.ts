// src/data/cvData.ts

// First define all possible experience types
type ExperienceType =
  | 'Never2WaitExperience'
  | 'ZapTechExperience'
  | 'ZomujoExperience'
  | 'IsiaLabExperience'
  | 'TradingExperience'
  | 'QuantExperience';

// Then define all possible project types
type ProjectType =
  | 'SkyVaultProject'
  | 'RealEstateProject'
  | 'MentalHealthProject'
  | 'PennyProject'
  | 'EcomCloneProject'
  | 'ContactAppProject'
  | 'BeloteProject'
  | 'CamprideProject';

// Define the role types
type RoleType = 
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'mobile'
  | 'java'
  | 'datascience'
  | 'quant';

// Create type-safe mappings
type ExperienceMap = Record<RoleType, ExperienceType[]>;
type ProjectMap = Record<RoleType, ProjectType[]>;

// Implement the mappings with type safety
export const experiences: ExperienceMap = {
  frontend: ['Never2WaitExperience', 'ZapTechExperience'],
  backend: ['ZomujoExperience', 'Never2WaitExperience'],
  fullstack: ['Never2WaitExperience', 'ZomujoExperience', 'ZapTechExperience'],
  mobile: ['Never2WaitExperience','ZomujoExperience'], 
  java: ['Never2WaitExperience','ZomujoExperience'],    
  datascience: ['IsiaLabExperience', 'ZomujoExperience'],
  quant: ['TradingExperience', 'QuantExperience'],
};

export const projects: ProjectMap = {
  frontend: ['SkyVaultProject', 'RealEstateProject'],
  backend: ['MentalHealthProject', 'SkyVaultProject'],
  fullstack: ['SkyVaultProject', 'MentalHealthProject', 'RealEstateProject'],
  mobile: ['PennyProject', 'EcomCloneProject'],
  java: ['ContactAppProject', 'BeloteProject'],
  datascience: ['SkyVaultProject'], 
  quant: ['CamprideProject']
};

// src/data/skills.ts
export const skills = {
  frontend: ['FrontendSkills', 'FullstackSkills'],
  backend: ['BackendSkills', 'FullstackSkills'],
  fullstack: ['FrontendSkills', 'BackendSkills', 'FullstackSkills'],
  mobile: ['MobileSkills', 'FrontendSkills'],
  java: ['JavaSkills', 'BackendSkills'],
  quant: ['DataScienceSkills', 'TradingSkills'],
  datascience: ['DataScienceSkills', 'QuantSkills'],
};

// Helper type to ensure we don't mix experiences and projects
type ExperienceComponent = `${string}Experience`;
type ProjectComponent = `${string}Project`;

// Type guards to validate the component types
function isExperienceComponent(component: string): component is ExperienceComponent {
  return component.endsWith('Experience');
}

function isProjectComponent(component: string): component is ProjectComponent {
  return component.endsWith('Project');
}

// Validation function (optional - can be used during development)
function validateData() {
  Object.entries(experiences).forEach(([role, expList]) => {
    expList.forEach(exp => {
      if (!isExperienceComponent(exp)) {
        console.error(`Invalid experience component in ${role}: ${exp}`);
      }
    });
  });

  Object.entries(projects).forEach(([role, projList]) => {
    projList.forEach(proj => {
      if (!isProjectComponent(proj)) {
        console.error(`Invalid project component in ${role}: ${proj}`);
      }
    });
  });
}

validateData();