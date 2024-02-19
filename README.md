# wasm-meets-rust

This project demonstrates a simple calculator implemented in Rust and compiled to WebAssembly, allowing it to be used in a web browser.

## Directory Structure

```plaintext
wasm-meets-rust-calc
│
├── Cargo.lock
├── Cargo.toml
├── index.html
├── index.js
├── pkg
│   ├── package.json
│   ├── wasm_meets_rust.d.ts
│   ├── wasm_meets_rust.js
│   ├── wasm_meets_rust_bg.wasm
│   └── wasm_meets_rust_bg.wasm.d.ts
├── src
│   └── lib.rs
├── styles.css
└── target
    └── (build artifacts)
```

# Installation and Running

## Prerequisites

Ensure you have Rust installed. You can install Rust on macOS using either:

### Option 1: Using the official Rust installer

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Follow the instructions to complete the installation.

### Option 2: Using Homebrew

```
brew install rust
```

Use rustup to install the Rust compiler (rustc) and the Rust package manager (cargo).

```
rustup-init
```

To verify you can run:

```
rustc --version
```

## Setting up the Project

Clone the repository

```
git clone https://github.com/bibitchhetri/wasm-meets-rust-calc.git
```

#### Jump to the build section below for more info

# or

### Create a new Rust project:

```
cargo init wasm-meets-rust
```

### Change into the project directory:

```
cd wasm-meets-rust
```

### Update Cargo.toml with the following:

[package]

```
name = "wasm-meets-rust"
version = "0.1.0"
authors = ["kunwar.bibit7@gmail.com"]
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

Create the src/lib.rs file with the provided Rust code.
Create the index.html, index.js, and styles.css files with the provided content.
Building and Running
Install wasm-pack:

```
cargo install wasm-pack
```

### Build the project:

```
wasm-pack build --target web
```

### Setting up wasm32-unknown-unknown Target with wasm-pack

[wasm-pack](https://rustwasm.github.io/wasm-pack/) compiles your code using the wasm32-unknown-unknown target. While Rustup setups automatically add this target, non-Rustup environments require manual setup.

### Automatic Setup (Rustup)

If you are using Rustup, wasm-pack will automatically add the wasm32-unknown-unknown target if it's not already installed. You can ensure its presence by running the following command:

```
rustup target add wasm32-unknown-unknown
```

### Manual Setup on Non-Rustup Environments

If you're not using Rustup, wasm-pack won't automatically add the wasm32-unknown-unknown target. You'll need to do it manually. Please note that these instructions are specific to setups that match the exact rustc release.

1.  Identify your rustc version by running the following command in your terminal:

    ```
    rustc --version
    ```

    This will display something like:
    `stable-aarch64-apple-darwin `or
    `nightly-aarch64-apple-darwin`
    or `1.75.0-aarch64-apple-darwin (default)`.

2.  Download the correct wasm32 target for your rustc version. The download URL will look like this:

    ```
    https://static.rust-lang.org/dist/rust-std-1.75.0-wasm32-unknown-unknown.tar.gz
    ```

    For different rustc versions, adjust the URL accordingly.

    - Nightly: `https://static.rust-lang.org/dist/rust-std-nightly-wasm32-unknown-unknown.tar.gz`
    - Specific date nightly (2024-02-12): `https://static.rust-lang.org/dist/2024-02-12/rust-std-nightly-wasm32-unknown-unknown.tar.gz`
    - Beta: `https://static.rust-lang.org/dist/rust-std-beta-wasm32-unknown-unknown.tar.gz`

    You can use `wget` or your web browser to download the tarball.

3.  Once downloaded, unpack the tarball. This will create a folder named `rust-std-1.78.0-wasm32-unknown-unknown`. Inside this folder, locate `rust-std-wasm32-unknown-unknown`, which contains a `lib` folder.

    The relevant structure should look like this:

    ```plaintext
    rust-std-1.78.0-wasm32-unknown-unknown
    ├── components
    ├── install.sh
    ├── rust-installer-version
    └── rust-std-wasm32-unknown-unknown
        ├── lib
        │   └── rustlib
        │       └── wasm32-unknown-unknown
    ```

4.  Determine the location to move the `wasm32-unknown-unknown` folder by running:

    ```bash
    rustc --print sysroot
    ```

    This will print a path that looks like: `/home/user/rust/rust-1.78.0-2024-02-12-b381d3ab2`. The destination folder should contain a `lib` folder with a `rustlib` folder.

5.  Move the `wasm32-unknown-unknown` folder to the appropriate location. On Unix-like systems, you can use the following command:

    ```bash
    mv <wasm32-unknown-unknown location> <rustlib location>
    example below:
    mv rust-std-1.78.0-wasm32-unknown-unknown/rust-std-wasm32-unknown-unknown/lib/rustlib/wasm32-unknown-unknown /opt/Homebrew/Celler/rust/rust-1.78.0-2024-02-12-b381d3ab2/lib/rustlib/
    ```

6.  That's it! You've manually added the `wasm32-unknown-unknown` target to your non-Rustup environment.

**Disclaimer:** This method may not work for all setups, as compatibility depends on matching rustc releases. This process is designed for specific scenarios where automatic handling by Rustup is not possible.

### Serve the project using an HTTP server. You can use Python's built-in server:

```
python3 -m http.server
```

Open your web browser and navigate to http://localhost:8000. You should see the Rusting on wasm Calculator.

### Usage

Enter numeric values for "Number 1" and "Number 2".
Choose an operation from the dropdown menu.
Click the "Calculate" button to see the result.

### Preview

![Browser View](img/safari_browser.png)

### License

This project is licensed under the GPL-3.0 License - see the [License](LICENSE) file for details.
