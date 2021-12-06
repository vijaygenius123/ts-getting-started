function greetUser(greeting: string = 'Hello', name: string = 'User'): string {
    return `${greeting}, ${name}`
}

const h1Node = document.getElementById('greeting') as HTMLHeadingElement

h1Node.textContent = greetUser('Hello', 'Vijay')
