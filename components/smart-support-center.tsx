"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mic, Search, ThumbsDown, ThumbsUp } from "lucide-react"

export function SmartSupportCenter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSolution, setShowSolution] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setShowSolution(true)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="p-6">
        <Tabs defaultValue="search" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="search">Text Search</TabsTrigger>
            <TabsTrigger value="voice">Voice Search</TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="space-y-6">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                placeholder="Describe your issue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>

            {showSolution && (
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <h3 className="font-medium mb-2">Slow Internet Connection</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you're experiencing slow internet speeds, try these solutions:
                  </p>
                  <ul className="text-sm space-y-2 list-disc pl-5">
                    <li>Restart your router by unplugging it for 30 seconds</li>
                    <li>Check for interference from other devices</li>
                    <li>Move your router to a central location</li>
                    <li>Connect directly via Ethernet if possible</li>
                  </ul>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t">
                    <div className="text-sm">Was this helpful?</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Yes
                      </Button>
                      <Button variant="outline" size="sm">
                        <ThumbsDown className="h-4 w-4 mr-1" />
                        No
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button variant="outline">View Solution Video</Button>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="voice">
            <div className="flex flex-col items-center justify-center py-12">
              <div className="p-6 bg-[#0A4DA6]/10 rounded-full mb-6">
                <Mic className="h-12 w-12 text-[#0A4DA6]" />
              </div>
              <h3 className="text-lg font-medium mb-2">Voice Search</h3>
              <p className="text-sm text-muted-foreground text-center mb-6 max-w-md">
                Press the button and describe your issue. Our AI will find the best solution for you.
              </p>
              <Button>
                <Mic className="h-4 w-4 mr-2" />
                Start Speaking
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
