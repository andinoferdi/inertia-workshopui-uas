"use client";

import { useState } from "react";
import {
  Globe,
  Mail,
  CreditCard,
  Truck,
  Calculator,
  Shield,
  Database,
  Info,
  Save,
  Upload,
  Eye,
  EyeOff,
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AdminHeader from "@/components/AdminHeader";

export default function AdminSettings() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Admin Header */}
      <AdminHeader
        title="Inertia Admin"
        subtitle="Management Panel"
        searchPlaceholder="Search settings..."
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <AdminSidebar />

          <div className="lg:col-span-4 space-y-8">
            {/* Page Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600 mt-1">
                  Manage your store settings and configurations
                </p>
              </div>
              <Button className="bg-primary text-white rounded-lg hover:bg-primary/90">
                <Save className="w-4 h-4 mr-2" />
                Save All Changes
              </Button>
            </div>

            {/* Settings Tabs */}
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-6 w-full max-w-full overflow-hidden"
            >
              <TabsList className="w-full bg-white border border-gray-200 rounded-lg p-1 overflow-x-auto">
                <div className="flex min-w-max gap-1">
                  <TabsTrigger
                    value="general"
                    className="flex items-center gap-2 text-xs lg:text-sm whitespace-nowrap"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">General</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="email"
                    className="flex items-center gap-2 text-xs lg:text-sm whitespace-nowrap"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">Email</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="payment"
                    className="flex items-center gap-2 text-xs lg:text-sm whitespace-nowrap"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span className="hidden sm:inline">Payment</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="shipping"
                    className="flex items-center gap-2 text-xs lg:text-sm whitespace-nowrap"
                  >
                    <Truck className="w-4 h-4" />
                    <span className="hidden sm:inline">Shipping</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="tax"
                    className="flex items-center gap-2 text-xs lg:text-sm whitespace-nowrap"
                  >
                    <Calculator className="w-4 h-4" />
                    <span className="hidden sm:inline">Tax</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="flex items-center gap-2 text-xs lg:text-sm whitespace-nowrap"
                  >
                    <Shield className="w-4 h-4" />
                    <span className="hidden sm:inline">Security</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="backup"
                    className="flex items-center gap-2 text-xs lg:text-sm whitespace-nowrap"
                  >
                    <Database className="w-4 h-4" />
                    <span className="hidden sm:inline">Backup</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="system"
                    className="flex items-center gap-2 text-xs lg:text-sm whitespace-nowrap"
                  >
                    <Info className="w-4 h-4" />
                    <span className="hidden sm:inline">System</span>
                  </TabsTrigger>
                </div>
              </TabsList>

              {/* General Settings */}
              <TabsContent
                value="general"
                className="space-y-6 max-w-full overflow-hidden"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      General Settings
                    </CardTitle>
                    <CardDescription>
                      Configure basic store information and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="storeName">Store Name</Label>
                        <Input id="storeName" defaultValue="Inertia Store" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="storeUrl">Store URL</Label>
                        <Input id="storeUrl" defaultValue="https://inertia.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="storeDescription">
                        Store Description
                      </Label>
                      <Textarea
                        id="storeDescription"
                        defaultValue="Modern furniture and interior design solutions for your home and office."
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="currency">Default Currency</Label>
                        <Select defaultValue="usd">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="eur">EUR (€)</SelectItem>
                            <SelectItem value="idr">IDR (Rp)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="utc">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc">UTC</SelectItem>
                            <SelectItem value="asia/jakarta">
                              Asia/Jakarta
                            </SelectItem>
                            <SelectItem value="america/new_york">
                              America/New_York
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">Store Logo</h4>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                          F
                        </div>
                        <Button variant="outline">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload New Logo
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Email Settings */}
              <TabsContent
                value="email"
                className="space-y-6 max-w-full overflow-hidden"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Email Configuration
                    </CardTitle>
                    <CardDescription>
                      Configure SMTP settings for sending emails
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="smtpHost">SMTP Host</Label>
                        <Input id="smtpHost" placeholder="smtp.gmail.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smtpPort">SMTP Port</Label>
                        <Input id="smtpPort" placeholder="587" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="smtpUsername">SMTP Username</Label>
                        <Input
                          id="smtpUsername"
                          placeholder="your-email@gmail.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smtpPassword">SMTP Password</Label>
                        <div className="relative">
                          <Input
                            id="smtpPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Your app password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            {showPassword ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="enableSsl">Enable SSL/TLS</Label>
                          <p className="text-sm text-gray-600">
                            Use secure connection for email sending
                          </p>
                        </div>
                        <Switch id="enableSsl" defaultChecked />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fromEmail">From Email Address</Label>
                      <Input id="fromEmail" placeholder="noreply@inertia.com" />
                    </div>

                    <Button variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Test Email
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Payment Settings */}
              <TabsContent
                value="payment"
                className="space-y-6 max-w-full overflow-hidden"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Gateways
                    </CardTitle>
                    <CardDescription>
                      Configure payment methods for your store
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* PayPal */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              PayPal
                            </h4>
                            <p className="text-sm text-gray-600">
                              Accept payments via PayPal
                            </p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-full">
                        <div className="space-y-2">
                          <Label htmlFor="paypalClientId">Client ID</Label>
                          <Input
                            id="paypalClientId"
                            placeholder="Your PayPal Client ID"
                            className="w-full max-w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="paypalSecret">Client Secret</Label>
                          <Input
                            id="paypalSecret"
                            type="password"
                            placeholder="Your PayPal Secret"
                            className="w-full max-w-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Stripe */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              Stripe
                            </h4>
                            <p className="text-sm text-gray-600">
                              Accept credit card payments
                            </p>
                          </div>
                        </div>
                        <Switch />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-full">
                        <div className="space-y-2">
                          <Label htmlFor="stripePublishable">
                            Publishable Key
                          </Label>
                          <Input
                            id="stripePublishable"
                            placeholder="pk_test_..."
                            className="w-full max-w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="stripeSecret">Secret Key</Label>
                          <Input
                            id="stripeSecret"
                            type="password"
                            placeholder="sk_test_..."
                            className="w-full max-w-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bank Transfer */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              Bank Transfer
                            </h4>
                            <p className="text-sm text-gray-600">
                              Manual bank transfer payments
                            </p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bankDetails">
                          Bank Account Details
                        </Label>
                        <Textarea
                          id="bankDetails"
                          placeholder="Enter your bank account details for customers"
                          rows={3}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Shipping Settings */}
              <TabsContent
                value="shipping"
                className="space-y-6 max-w-full overflow-hidden"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="w-5 h-5" />
                      Shipping Configuration
                    </CardTitle>
                    <CardDescription>
                      Set up shipping methods and rates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="freeShippingThreshold">
                          Free Shipping Threshold
                        </Label>
                        <Input
                          id="freeShippingThreshold"
                          placeholder="100"
                          defaultValue="100"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="standardShippingRate">
                          Standard Shipping Rate
                        </Label>
                        <Input
                          id="standardShippingRate"
                          placeholder="10"
                          defaultValue="10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="expressShippingRate">
                          Express Shipping Rate
                        </Label>
                        <Input
                          id="expressShippingRate"
                          placeholder="25"
                          defaultValue="25"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="processingTime">
                          Processing Time (days)
                        </Label>
                        <Input
                          id="processingTime"
                          placeholder="1-2"
                          defaultValue="1-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">
                        Shipping Options
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="enableLocalDelivery">
                              Enable Local Delivery
                            </Label>
                            <p className="text-sm text-gray-600">
                              Offer local delivery in your area
                            </p>
                          </div>
                          <Switch id="enableLocalDelivery" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="enableExpressShipping">
                              Enable Express Shipping
                            </Label>
                            <p className="text-sm text-gray-600">
                              Offer faster delivery options
                            </p>
                          </div>
                          <Switch id="enableExpressShipping" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="enableFreeShipping">
                              Enable Free Shipping
                            </Label>
                            <p className="text-sm text-gray-600">
                              Offer free shipping above threshold
                            </p>
                          </div>
                          <Switch id="enableFreeShipping" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="shippingZones">
                          Default Shipping Zone
                        </Label>
                        <Select defaultValue="domestic">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="domestic">Domestic</SelectItem>
                            <SelectItem value="international">
                              International
                            </SelectItem>
                            <SelectItem value="regional">Regional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weightUnit">Weight Unit</Label>
                        <Select defaultValue="kg">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">Kilograms (kg)</SelectItem>
                            <SelectItem value="lb">Pounds (lb)</SelectItem>
                            <SelectItem value="g">Grams (g)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tax Settings */}
              <TabsContent
                value="tax"
                className="space-y-6 max-w-full overflow-hidden"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      Tax Configuration
                    </CardTitle>
                    <CardDescription>
                      Configure tax rates and settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="enableTax">
                            Enable Tax Calculation
                          </Label>
                          <p className="text-sm text-gray-600">
                            Calculate tax on orders
                          </p>
                        </div>
                        <Switch id="enableTax" defaultChecked />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="defaultTaxRate">
                          Default Tax Rate (%)
                        </Label>
                        <Input
                          id="defaultTaxRate"
                          placeholder="10"
                          defaultValue="10"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="taxIncluded">Tax Display</Label>
                        <Select defaultValue="exclusive">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inclusive">
                              Tax Inclusive
                            </SelectItem>
                            <SelectItem value="exclusive">
                              Tax Exclusive
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">Tax Options</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="taxShipping">
                              Apply Tax to Shipping
                            </Label>
                            <p className="text-sm text-gray-600">
                              Include shipping costs in tax calculation
                            </p>
                          </div>
                          <Switch id="taxShipping" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="compoundTax">
                              Enable Compound Tax
                            </Label>
                            <p className="text-sm text-gray-600">
                              Apply tax on top of other taxes
                            </p>
                          </div>
                          <Switch id="compoundTax" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="digitalTax">
                              Digital Goods Tax
                            </Label>
                            <p className="text-sm text-gray-600">
                              Apply special tax rates for digital products
                            </p>
                          </div>
                          <Switch id="digitalTax" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="taxRounding">Tax Rounding</Label>
                        <Select defaultValue="round">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="round">
                              Round to nearest cent
                            </SelectItem>
                            <SelectItem value="up">Round up</SelectItem>
                            <SelectItem value="down">Round down</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="taxBasis">Tax Calculation Basis</Label>
                        <Select defaultValue="shipping">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="shipping">
                              Shipping Address
                            </SelectItem>
                            <SelectItem value="billing">
                              Billing Address
                            </SelectItem>
                            <SelectItem value="store">Store Address</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent
                value="security"
                className="space-y-6 max-w-full overflow-hidden"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Security Settings
                    </CardTitle>
                    <CardDescription>
                      Configure security and access controls
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">
                        Authentication Settings
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="twoFactor">
                              Two-Factor Authentication
                            </Label>
                            <p className="text-sm text-gray-600">
                              Require 2FA for admin access
                            </p>
                          </div>
                          <Switch id="twoFactor" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="sessionTimeout">Auto Logout</Label>
                            <p className="text-sm text-gray-600">
                              Automatically logout inactive sessions
                            </p>
                          </div>
                          <Switch id="sessionTimeout" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="loginAttempts">
                              Limit Login Attempts
                            </Label>
                            <p className="text-sm text-gray-600">
                              Block IP after failed login attempts
                            </p>
                          </div>
                          <Switch id="loginAttempts" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="sessionDuration">
                          Session Duration (minutes)
                        </Label>
                        <Input
                          id="sessionDuration"
                          placeholder="60"
                          defaultValue="60"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="maxLoginAttempts">
                          Max Login Attempts
                        </Label>
                        <Input
                          id="maxLoginAttempts"
                          placeholder="5"
                          defaultValue="5"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">
                        Password Policy
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="strongPassword">
                              Enforce Strong Passwords
                            </Label>
                            <p className="text-sm text-gray-600">
                              Require complex passwords for all users
                            </p>
                          </div>
                          <Switch id="strongPassword" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="passwordExpiry">
                              Password Expiry
                            </Label>
                            <p className="text-sm text-gray-600">
                              Force password changes periodically
                            </p>
                          </div>
                          <Switch id="passwordExpiry" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="minPasswordLength">
                          Minimum Password Length
                        </Label>
                        <Input
                          id="minPasswordLength"
                          placeholder="8"
                          defaultValue="8"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="passwordExpiryDays">
                          Password Expiry (days)
                        </Label>
                        <Input
                          id="passwordExpiryDays"
                          placeholder="90"
                          defaultValue="90"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Backup Settings */}
              <TabsContent
                value="backup"
                className="space-y-6 max-w-full overflow-hidden"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Backup & Restore
                    </CardTitle>
                    <CardDescription>
                      Manage database backups and restore points
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="autoBackup">Automatic Backups</Label>
                          <p className="text-sm text-gray-600">
                            Create automatic database backups
                          </p>
                        </div>
                        <Switch id="autoBackup" defaultChecked />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="backupFrequency">
                          Backup Frequency
                        </Label>
                        <Select defaultValue="daily">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hourly">Hourly</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="retentionPeriod">
                          Retention Period (days)
                        </Label>
                        <Input
                          id="retentionPeriod"
                          placeholder="30"
                          defaultValue="30"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">
                        Backup Options
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="includeMedia">
                              Include Media Files
                            </Label>
                            <p className="text-sm text-gray-600">
                              Backup uploaded images and files
                            </p>
                          </div>
                          <Switch id="includeMedia" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="compressBackup">
                              Compress Backups
                            </Label>
                            <p className="text-sm text-gray-600">
                              Reduce backup file size
                            </p>
                          </div>
                          <Switch id="compressBackup" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="cloudBackup">
                              Cloud Storage Backup
                            </Label>
                            <p className="text-sm text-gray-600">
                              Store backups in cloud storage
                            </p>
                          </div>
                          <Switch id="cloudBackup" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="backupLocation">Backup Location</Label>
                        <Select defaultValue="local">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="local">Local Storage</SelectItem>
                            <SelectItem value="aws">Amazon S3</SelectItem>
                            <SelectItem value="google">Google Drive</SelectItem>
                            <SelectItem value="dropbox">Dropbox</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="maxBackups">Maximum Backups</Label>
                        <Input
                          id="maxBackups"
                          placeholder="10"
                          defaultValue="10"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline">
                        <Database className="w-4 h-4 mr-2" />
                        Create Backup Now
                      </Button>
                      <Button variant="outline">
                        <Upload className="w-4 h-4 mr-2" />
                        Restore from Backup
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* System Info */}
              <TabsContent
                value="system"
                className="space-y-6 max-w-full overflow-hidden"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      System Information
                    </CardTitle>
                    <CardDescription>
                      View system status and information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">
                        Application Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <Label className="text-sm font-medium text-gray-700">
                              Application Version
                            </Label>
                            <p className="text-sm text-gray-900">v2.1.0</p>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-gray-700">
                              Database Version
                            </Label>
                            <p className="text-sm text-gray-900">
                              PostgreSQL 14.2
                            </p>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-gray-700">
                              Server Uptime
                            </Label>
                            <p className="text-sm text-gray-900">
                              15 days, 8 hours
                            </p>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-gray-700">
                              PHP Version
                            </Label>
                            <p className="text-sm text-gray-900">8.2.0</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-sm font-medium text-gray-700">
                              Storage Used
                            </Label>
                            <p className="text-sm text-gray-900">
                              2.4 GB / 10 GB
                            </p>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-gray-700">
                              Memory Usage
                            </Label>
                            <p className="text-sm text-gray-900">
                              1.2 GB / 4 GB
                            </p>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-gray-700">
                              Last Backup
                            </Label>
                            <p className="text-sm text-gray-900">2 hours ago</p>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-gray-700">
                              Cache Size
                            </Label>
                            <p className="text-sm text-gray-900">156 MB</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">
                        System Health
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Database Connection
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Healthy
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Email Service
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Operational
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Payment Gateway
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Warning
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            File Permissions
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            OK
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            SSL Certificate
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Valid
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">
                        System Actions
                      </h4>
                      <div className="flex flex-wrap gap-4">
                        <Button variant="outline">
                          <Database className="w-4 h-4 mr-2" />
                          Clear Cache
                        </Button>
                        <Button variant="outline">
                          <Upload className="w-4 h-4 mr-2" />
                          Check Updates
                        </Button>
                        <Button variant="outline">
                          <Info className="w-4 h-4 mr-2" />
                          System Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
