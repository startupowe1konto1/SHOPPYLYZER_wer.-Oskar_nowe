import { useState } from 'react';
import { ArrowRight, Zap, Brain, Globe, Upload, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileUpload } from '@/components/FileUpload';
import { UrlInput } from '@/components/UrlInput';
import { FeatureCard } from '@/components/FeatureCard';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [urls, setUrls] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    toast({
      title: "File uploaded",
      description: `${file.name} is ready for processing`,
    });
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  const handleUrlAdd = (url: string) => {
    setUrls([...urls, url]);
  };

  const handleUrlRemove = (index: number) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  const handleProcess = () => {
    if (!selectedFile && urls.length === 0) {
      toast({
        title: "No data provided",
        description: "Please upload a file or add URLs to process",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Processing complete!",
        description: "Your product data has been successfully processed with AI",
      });
    }, 3000);
  };

  const canProcess = selectedFile || urls.length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5 border-b">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Transform Your</span>{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Product Data
              </span>{' '}
              <span className="text-foreground">with AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Upload your product catalog or paste URLs and let our AI-powered platform 
              enrich, optimize, and organize your e-commerce data instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Process 100 products free
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </section>

      {/* Main Processing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Input Method
              </h2>
              <p className="text-lg text-muted-foreground">
                Upload a spreadsheet or provide URLs to get started
              </p>
            </div>

            <Card className="p-8 shadow-medium">
              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="upload" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Upload File
                  </TabsTrigger>
                  <TabsTrigger value="urls" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Add URLs
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="upload" className="space-y-6">
                  <FileUpload 
                    onFileSelect={handleFileSelect}
                    onFileRemove={handleFileRemove}
                    selectedFile={selectedFile}
                  />
                </TabsContent>
                
                <TabsContent value="urls" className="space-y-6">
                  <UrlInput 
                    urls={urls}
                    onUrlAdd={handleUrlAdd}
                    onUrlRemove={handleUrlRemove}
                  />
                </TabsContent>

                <div className="pt-6 border-t">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={handleProcess}
                      disabled={!canProcess || isProcessing}
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Brain className="mr-2 h-4 w-4" />
                          Process with AI
                        </>
                      )}
                    </Button>
                    {canProcess && (
                      <p className="text-sm text-muted-foreground flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                        Ready to process {selectedFile ? '1 file' : `${urls.length} URLs`}
                      </p>
                    )}
                  </div>
                </div>
              </Tabs>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with intelligent web scraping 
              to deliver comprehensive product insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={<Brain className="h-8 w-8" />}
              title="AI-Powered Analysis"
              description="Vertex AI analyzes your product data to extract insights, optimize descriptions, and categorize items automatically."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="Smart Web Scraping"
              description="Advanced scrapers collect comprehensive product information from URLs, including images, specs, and pricing."
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8" />}
              title="Seamless Import"
              description="Upload CSV or Excel files with your existing product data and enhance it with AI-generated content."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50k+</div>
              <div className="text-muted-foreground">Products Processed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3min</div>
              <div className="text-muted-foreground">Average Processing</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">API Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Catalog?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start processing your product data with AI today. No setup required.
            </p>
            <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;