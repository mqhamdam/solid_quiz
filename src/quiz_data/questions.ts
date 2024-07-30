interface Question {
  question: string
  options: string[]
  answer: string
}

const questions: Question[] = [
  {
    question: 'What is the main goal of the Single Responsibility Principle?',
    options: [
      'A) To ensure a class has multiple reasons to change.',
      'B) To ensure a class has only one reason to change.',
      'C) To allow multiple responsibilities for a single class.',
      'D) To prevent a class from having any responsibilities.',
    ],
    answer: 'B',
  },
  {
    question: 'According to the Open/Closed Principle, software entities should be:',
    options: [
      'A) Open for modification and closed for extension.',
      'B) Closed for modification and closed for extension.',
      'C) Open for modification and open for extension.',
      'D) Open for extension and closed for modification.',
    ],
    answer: 'D',
  },
  {
    question: 'What does the Liskov Substitution Principle ensure?',
    options: [
      'A) A subclass should not replace a superclass without affecting the program.',
      'B) A subclass should be replaceable with its superclass without affecting the program.',
      'C) Subclasses should have more functionalities than superclasses.',
      'D) Superclasses should have more functionalities than subclasses.',
    ],
    answer: 'B',
  },
  {
    question: 'Which statement best describes the Interface Segregation Principle?',
    options: [
      'A) A class should implement all methods of an interface.',
      'B) A class should only implement the methods it uses.',
      'C) Interfaces should be large and contain many methods.',
      'D) Interfaces should be designed to enforce implementation of unused methods.',
    ],
    answer: 'B',
  },
  {
    question: 'The Dependency Inversion Principle states that:',
    options: [
      'A) High-level modules should depend on low-level modules.',
      'B) Low-level modules should depend on high-level modules.',
      'C) Both high-level and low-level modules should depend on abstractions.',
      'D) Abstractions should depend on details.',
    ],
    answer: 'C',
  },
  {
    question: 'Which of the following best describes the Single Responsibility Principle?',
    options: [
      'A) A class should have one and only one reason to change.',
      'B) A class can have multiple responsibilities.',
      'C) A class should inherit from multiple base classes.',
      'D) A class should depend on abstractions.',
    ],
    answer: 'A',
  },
  {
    question: 'Which of the following violates the Open/Closed Principle?',
    options: [
      'A) Adding new functionality by extending existing classes.',
      'B) Modifying existing code to add new features.',
      'C) Using interfaces to define contracts.',
      'D) Writing classes that can be extended without modification.',
    ],
    answer: 'B',
  },
  {
    question: 'What is the purpose of the Liskov Substitution Principle?',
    options: [
      'A) To allow a class to have multiple reasons to change.',
      'B) To enable subclasses to replace base classes without altering the program\'s correctness.',
      'C) To split large interfaces into smaller, more specific ones.',
      'D) To decouple software modules.',
    ],
    answer: 'B',
  },
  {
    question: 'How does the Interface Segregation Principle improve software design?',
    options: [
      'A) By allowing a class to depend on interfaces it does not use.',
      'B) By splitting large interfaces into smaller, more specific ones.',
      'C) By ensuring that high-level modules depend on low-level modules.',
      'D) By making a class responsible for multiple tasks.',
    ],
    answer: 'B',
  },
  {
    question: 'Which principle is concerned with decoupling software modules?',
    options: [
      'A) Single Responsibility Principle',
      'B) Open/Closed Principle',
      'C) Liskov Substitution Principle',
      'D) Dependency Inversion Principle',
    ],
    answer: 'D',
  }
]

export default questions
