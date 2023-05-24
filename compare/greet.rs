fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

fn main() {
    let person = "John";
    let greeting = greet(person);
    println!("{}", greeting);
}