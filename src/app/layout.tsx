import Navigation from "@/app/ui/navigation";
import 'bootstrap/dist/css/bootstrap.css'

export default function RootLayout(
    {
        children
    }:{ 
        children: React.ReactNode
    }){
    return (
        <html lang="en">
            <body>
                <Navigation />
                <main>
                    <div className="container">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}