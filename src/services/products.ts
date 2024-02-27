export async function fetchProducts() {
    const response = await fetch(
        "https://opensheet.elk.sh/1QWF3TaLIZ4JEie4k4vbaR5W5sXCFYl_k4kbQMrAZ5Yc/1"
        );
    const data = await response.json();
    return data;
}
